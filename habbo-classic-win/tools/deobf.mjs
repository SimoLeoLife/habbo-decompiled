// Applica la mappa dei nomi al bundle formattato:
//  - binding minificati delle classi -> nome della classe (con scope di Babel, niente collisioni)
//  - hash _i (classi) e _r (membri) -> nome recuperato da AIR 15
//  - commento con il sorgente AIR 15 corrispondente davanti a ogni classe abbinata
// Poi divide il risultato in un file per classe, nell'albero dei package AS3.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
const traverse = _traverse.default ?? _traverse;

const [src, mapFile, outFile, splitDir] = process.argv.slice(2);
const code = readFileSync(src, 'utf8');
const MAP = JSON.parse(readFileSync(mapFile, 'utf8'));
const HASH_C = /^_i[0-9a-f]{14}$/;
const opts = { sourceType: 'module', plugins: ['classStaticBlock'], errorRecovery: true };

function declaredName(cls) {
  for (const el of cls.body.body) {
    if (el.type !== 'StaticBlock') continue;
    for (const st of el.body) {
      const e = st.expression;
      if (e?.type === 'CallExpression' && e.arguments[0]?.type === 'ThisExpression' && e.arguments[1]?.type === 'StringLiteral') return e.arguments[1].value;
    }
  }
  return null;
}
const finalName = n => n == null ? null : (MAP.classes[n] ?? n);

let ast = parse(code, opts);
const allNames = new Set();
traverse(ast, { Identifier(p) { allNames.add(p.node.name); } });

const edits = [];           // [start, end, testo]
const renamed = new Map();  // binding -> nuovo nome
const taken = new Set(allNames);
function renameBinding(scope, name, target) {
  const b = scope.getBinding(name);
  if (!b || renamed.has(b)) return;
  let nn = target.replace(/[^\w$]/g, '_');
  if (/^\d/.test(nn)) nn = '_' + nn;
  if (nn === name) return;
  while (taken.has(nn)) nn += '_';
  taken.add(nn); renamed.set(b, nn);
  const ids = [b.identifier, ...b.referencePaths.map(r => r.node)];
  for (const cv of b.constantViolations) {
    const l = cv.node.left ?? cv.node.id;
    if (l?.type === 'Identifier' && l.name === name) ids.push(l);
  }
  for (const id of ids) if (id && id.name === name) edits.push([id.start, id.end, nn]);
}

traverse(ast, {
  'ClassExpression|ClassDeclaration'(p) {
    const cls = p.node, dn = declaredName(cls);
    let binding = cls.id?.name ?? null, scope = p.scope;
    if (!binding && p.parent.type === 'VariableDeclarator' && p.parent.id.type === 'Identifier') binding = p.parent.id.name;
    if (!binding && p.parent.type === 'AssignmentExpression' && p.parent.left.type === 'Identifier') binding = p.parent.left.name;
    if (cls.id) scope = p.parentPath.scope;
    const key = dn ?? binding;
    const as3 = MAP.as3_for[key];
    if (as3) edits.push([p.node.start, p.node.start, `/* AIR 15: ${as3} */ `]);
    if (binding && dn) renameBinding(scope, binding, finalName(dn));
  },
  CallExpression(p) {
    // n(funzione, "nome") dà il nome originale anche alle funzioni di modulo
    const [f, s] = p.node.arguments;
    if (p.node.arguments.length === 2 && f?.type === 'Identifier' && s?.type === 'StringLiteral' && /^[A-Za-z_$][\w$]*$/.test(s.value)
      && p.parent.type === 'ExpressionStatement' && p.node.callee.type === 'Identifier') {
      const b = p.scope.getBinding(f.name);
      if (b && (b.kind === 'hoisted' || b.path.isFunctionDeclaration())) renameBinding(p.scope, f.name, finalName(s.value));
    }
  },
});

edits.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
let out = code;
for (const [s, e, t] of edits) out = out.slice(0, s) + t + out.slice(e);
out = out.replace(/\b_r[0-9a-f]{14}\b/g, h => MAP.members[h] ?? h)
         .replace(/\b_i[0-9a-f]{14}\b/g, h => MAP.classes[h] ?? h);
writeFileSync(outFile, out);
console.log('binding rinominati', renamed.size, '| modifiche', edits.length);

// ------------------------------------------------------------ un file per classe
ast = parse(out, opts);
let n = 0;
const seen = new Set();
traverse(ast, {
  'ClassExpression|ClassDeclaration'(p) {
    const dn = declaredName(p.node); if (!dn) return;
    const orig = Object.entries(MAP.classes).find(([, v]) => v === dn)?.[0] ?? dn;
    let rel = MAP.paths[orig] ?? MAP.paths[dn];
    const ph = MAP.placeholders?.[orig] != null;
    if (!rel) rel = HASH_C.test(dn) || ph ? `_unmatched/${dn}.js` : `_runtime_and_libraries/${dn}.js`;
    if (seen.has(rel)) rel = rel.replace(/\.js$/, `.${p.node.start}.js`);
    seen.add(rel);
    const as3 = MAP.as3_for[orig];
    const head = `// Extracted from HabboAirLauncher.deobf.js, line ${p.node.loc.start.line}.\n`
      + (as3 ? `// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/${as3}\n` : '')
      + (ph ? '// Placeholder name: no AIR 15 match was found, the original name is unknown.\n' : '')
      + (orig !== dn ? `// Obfuscated name: ${orig}\n` : '');
    const file = path.join(splitDir, rel);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, head + '\n' + out.slice(p.node.start, p.node.end) + '\n');
    n++;
  },
});
console.log('file per classe', n);

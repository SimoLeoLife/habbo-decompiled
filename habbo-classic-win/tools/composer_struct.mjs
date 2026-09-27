// Rebuilds the payload that every outgoing composer sends: the values returned by
// getMessageArray(), in order, with their types.
//
// usage: node composer_struct.mjs <deobf.js> <final_map.json> <as3.json> <out.json>
//
// Output: { "<ComposerClassName>": { "payload": "int string [ int ] bool", "args": 3,
//                                     "typed_by": "air15" | "callsite" | "partial" | "none" } }
//   int / string / bool / number / array   a value of that type
//   [ … ]      values repeated in a loop (usually preceded by an int count)
//   ?{ … }     values sent only under a condition
//   ?          type unknown (not typed by AIR 15, call sites or defaults)
//   …          an expression the evaluator does not follow
//
// Types come, in order of preference, from the matching AIR 15 constructor signature,
// from the arguments seen where the client creates the composer, and from default values.
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from '@babel/parser';
import { VISITOR_KEYS } from '@babel/types';

const [src, mapFile, as3File, out] = process.argv.slice(2);
const ast = parse(readFileSync(src, 'utf8'), { sourceType: 'module', plugins: ['classStaticBlock'], errorRecovery: true });
const MAP = JSON.parse(readFileSync(mapFile, 'utf8'));
const AS3 = JSON.parse(readFileSync(as3File, 'utf8'));

const AS3T = { int: 'int', uint: 'int', Number: 'number', String: 'string', Boolean: 'bool', Array: 'array' };
const JST = { i: 'int', n: 'number', s: 'string', b: 'bool', a: 'array' };
const as3ByFile = new Map(AS3.map(c => [c.file, c]));
const origOf = new Map(Object.entries(MAP.classes).map(([o, f]) => [f, o]));
// type of an AS3 field, getter or method by name, when every declaration agrees
const CODE = { int: 'i', uint: 'i', Number: 'n', String: 's', Boolean: 'b', Array: 'a' };
const memberType = new Map();
for (const c of AS3) for (const m of c.members) {
  const raw = m.t === 'f' ? m.type : (m.acc === 'get' || m.acc === '' ? m.rtype : '');
  if (!raw || m.acc === 'set') continue;
  const code = CODE[raw.split('.').pop()] ?? (raw.startsWith('Vector') ? 'a' : 'o');
  const prev = memberType.get(m.name);
  memberType.set(m.name, prev === undefined || prev === code ? code : 'x');
}
const typeOfMember = n => { const t = memberType.get(n); return t && t !== 'x' && t !== 'o' ? t : '?'; };
function as3Types(name) {
  const f = MAP.as3_for[origOf.get(name) ?? name];
  const c = f && as3ByFile.get(f);
  const ct = c?.members.find(m => m.t === 'm' && m.name === c.name);
  return ct ? ct.ptypes.map(t => AS3T[t.split('.').pop()] ?? (t.startsWith('Vector') ? 'array' : 'object')) : null;
}

const walk = (node, fn) => { if (!node || typeof node.type !== 'string') return; if (fn(node) === false) return;
  for (const k of VISITOR_KEYS[node.type] ?? []) { const v = node[k]; if (Array.isArray(v)) v.forEach(x => walk(x, fn)); else walk(v, fn); } };

function argType(x) {
  switch (x?.type) {
    case 'StringLiteral': case 'TemplateLiteral': return 's';
    case 'NumericLiteral': return Number.isInteger(x.value) ? 'i' : 'n';
    case 'BooleanLiteral': return 'b';
    case 'ArrayExpression': return 'a';
    case 'UnaryExpression': return x.operator === '!' ? 'b' : ['-', '+', '~'].includes(x.operator) ? 'n' : '?';
    case 'BinaryExpression':
      if (['==', '===', '!=', '!==', '<', '>', '<=', '>='].includes(x.operator)) return 'b';
      if (x.operator === '+') { const l = argType(x.left), r = argType(x.right); return l === 's' || r === 's' ? 's' : l === 'n' && r === 'n' ? 'n' : '?'; }
      return ['|', '&', '^', '<<', '>>', '>>>'].includes(x.operator) ? 'i' : ['-', '*', '/', '%'].includes(x.operator) ? 'n' : '?';
    case 'MemberExpression': case 'OptionalMemberExpression':
      if (!x.computed && x.property.name === 'length') return 'i';
      return !x.computed ? typeOfMember(x.property.name) : '?';
    case 'CallExpression': case 'OptionalCallExpression':
      return (x.callee.type === 'MemberExpression' || x.callee.type === 'OptionalMemberExpression') && !x.callee.computed ? typeOfMember(x.callee.property.name) : '?';
    default: return '?';
  }
}

// classes and call sites
const classes = new Map(), calls = new Map();
function declared(cls) {
  for (const el of cls.body.body) if (el.type === 'StaticBlock') for (const st of el.body) { const e = st.expression;
    if (e?.type === 'CallExpression' && e.arguments[0]?.type === 'ThisExpression' && e.arguments[1]?.type === 'StringLiteral') return e.arguments[1].value; }
  return null;
}
walk(ast.program, n => {
  if (n.type === 'ClassExpression' || n.type === 'ClassDeclaration') { const d = declared(n); if (d) classes.set(d, n); }
  if (n.type === 'NewExpression' && n.callee.type === 'Identifier') {
    if (!calls.has(n.callee.name)) calls.set(n.callee.name, []);
    calls.get(n.callee.name).push(n.arguments.map(argType));
  }
});

function analyse(name, cls) {
  const methods = new Map(cls.body.body.filter(e => e.type === 'ClassMethod').map(e => [e.key?.name ?? e.kind, e]));
  const gma = methods.get('getMessageArray'); if (!gma) return null;
  const ctor = cls.body.body.find(e => e.kind === 'constructor');
  const params = (ctor?.params ?? []).map(p => p.type === 'AssignmentPattern' ? { name: p.left.name, def: p.right } : { name: p.name });
  // parameter types
  const a3 = as3Types(name);
  const seen = calls.get(name) ?? [];
  let typedBy = a3 && a3.length === params.length ? 'air15' : 'none';
  const inferred = params.map((p, i) => { const obs = seen.map(c => c[i]).filter(t => t && t !== '?'); const norm = obs.map(t => t === 'n' && obs.includes('i') ? 'i' : t); return norm.length && norm.every(t => t === norm[0]) ? JST[norm[0]] : (p.def && argType(p.def) !== '?' ? JST[argType(p.def)] : '?'); });
  if (process.env.VALIDATE && typedBy === 'air15') VAL.push([a3, inferred]);
  const ptype = params.map((p, i) => {
    if (typedBy === 'air15') return a3[i];
    const obs = seen.map(c => c[i]).filter(t => t && t !== '?');
    const norm = obs.map(t => t === 'n' && obs.includes('i') ? 'i' : t);
    if (norm.length && norm.every(t => t === norm[0])) return JST[norm[0]];
    if (p.def) { const t = argType(p.def); if (t !== '?') return JST[t]; }
    return '?';
  });
  if (!params.length) typedBy = 'no args';
  else if (typedBy !== 'air15') typedBy = ptype.every(t => t !== '?') ? 'callsite' : ptype.some(t => t !== '?') ? 'partial' : 'none';

  // symbolic values: fields hold a list of tokens (arrays) or a single token
  const fields = new Map();
  for (const el of cls.body.body) if (el.type === 'ClassProperty' && el.key?.name && el.value) fields.set(el.key.name, valueOf(el.value, {}));
  const env0 = Object.fromEntries(params.map((p, i) => [p.name, { t: ptype[i] }]));

  function valueOf(x, env) {
    if (!x) return { t: '…' };
    switch (x.type) {
      case 'Identifier': return env[x.name] ?? { t: '…' };
      case 'ArrayExpression': return { list: x.elements.flatMap(e => e?.type === 'SpreadElement' ? spread(valueOf(e.argument, env)) : [tok(valueOf(e, env))]) };
      case 'MemberExpression':
        if (x.object.type === 'ThisExpression' && !x.computed) return fields.get(x.property.name) ?? { t: '…' };
        if (!x.computed && x.property.name === 'length') return { t: 'int' };
        return { t: '…' };
      case 'LogicalExpression': return x.operator === '??' || x.operator === '||' ? valueOf(x.left, env) : { t: 'bool' };
      case 'ConditionalExpression': { const a = tok(valueOf(x.consequent, env)), b = tok(valueOf(x.alternate, env)); return { t: a === b ? a : `${a}|${b}` }; }
      case 'CallExpression': return { t: '…' };
      default: { const t = argType(x); return { t: t === '?' ? '…' : JST[t] }; }
    }
  }
  const spread = v => v.list ?? [`[ ${tok(v)} ]`];
  const tok = v => v.list ? `array` : v.t;

  // run the statements of a method, updating fields and local arrays
  function run(body, env, ret) {
    for (const st of body) {
      const e = st.type === 'ExpressionStatement' ? st.expression : null;
      if (st.type === 'VariableDeclaration') { for (const d of st.declarations) if (d.id.type === 'Identifier') env[d.id.name] = valueOf(d.init, env); continue; }
      if (st.type === 'ForOfStatement' || st.type === 'ForStatement' || st.type === 'WhileStatement') {
        const inner = { ...env };
        if (st.type === 'ForOfStatement' && st.left.type === 'VariableDeclaration') {
          const it = valueOf(st.right, env); inner[st.left.declarations[0].id.name] = { t: it.list?.length === 1 ? it.list[0] : '?' };
        }
        const before = snapshot(env);
        run(st.body.type === 'BlockStatement' ? st.body.body : [st.body], inner, ret);
        loopDiff(before, env, inner);
        continue;
      }
      if (st.type === 'IfStatement') {
        const before = snapshot(env), inner = { ...env };
        run(st.consequent.type === 'BlockStatement' ? st.consequent.body : [st.consequent], inner, ret);
        condDiff(before, env, inner);
        continue;
      }
      if (st.type === 'ReturnStatement') { ret.value = st.argument?.type === 'SequenceExpression' ? (exprs(st.argument.expressions.slice(0, -1), env), valueOf(st.argument.expressions.at(-1), env)) : valueOf(st.argument, env); return; }
      if (e) exprs(e.type === 'SequenceExpression' ? e.expressions : [e], env);
    }
  }
  function target(x, env) {
    if (x?.type === 'Identifier') return { get: () => env[x.name], set: v => { env[x.name] = v; } };
    if (x?.type === 'MemberExpression' && x.object.type === 'ThisExpression' && !x.computed)
      return { get: () => fields.get(x.property.name), set: v => fields.set(x.property.name, v) };
    return null;
  }
  function exprs(list, env) {
    for (const e of list) {
      if (e.type === 'AssignmentExpression' && e.operator === '=') { const t = target(e.left, env); if (t) t.set(valueOf(e.right, env)); }
      else if (e.type === 'CallExpression' && e.callee.type === 'MemberExpression' && e.callee.property.name === 'push') {
        const t = target(e.callee.object, env);
        if (t) { const cur = t.get(); const list = cur?.list ? [...cur.list] : [];
          for (const a of e.arguments) list.push(...(a.type === 'SpreadElement' ? spread(valueOf(a.argument, env)) : [tok(valueOf(a, env))]));
          t.set({ list }); }
      } else if (e.type === 'CallExpression' && e.callee.type === 'MemberExpression' && e.callee.object.type === 'ThisExpression') {
        const m = methods.get(e.callee.property.name);            // this.packData() etc.
        if (m && m !== gma && !m.__busy) { m.__busy = true; run(m.body.body, { ...env }, {}); m.__busy = false; }
      } else if (e.type === 'LogicalExpression' || e.type === 'ConditionalExpression') {
        const before = snapshot(env), inner = { ...env };
        exprs([e.right ?? e.consequent], inner); condDiff(before, env, inner);
      }
    }
  }
  const snapshot = env => ({ f: new Map([...fields].map(([k, v]) => [k, v])), e: { ...env } });
  // values appended inside a loop become "[ … ]", inside a condition "?{ … }"
  function wrapDiff(before, env, inner, wrap) {
    for (const [k, v] of fields) { const b = before.f.get(k); if (v?.list && v !== b) {
      const n0 = b?.list?.length ?? 0; if (v.list.length > n0) fields.set(k, { list: [...v.list.slice(0, n0), wrap(v.list.slice(n0))] }); } }
    for (const k of Object.keys(inner)) if (k in before.e && inner[k]?.list) {
      const n0 = before.e[k]?.list?.length ?? 0; const v = inner[k];
      if (v.list.length > n0) env[k] = { list: [...v.list.slice(0, n0), wrap(v.list.slice(n0))] };
    }
  }
  const loopDiff = (b, env, inner) => wrapDiff(b, env, inner, l => `[ ${l.join(' ')} ]`);
  const condDiff = (b, env, inner) => wrapDiff(b, env, inner, l => `?{ ${l.join(' ')} }`);

  if (ctor) run(ctor.body.body, { ...env0 }, {});
  const ret = {};
  run(gma.body.body, { ...env0 }, ret);
  const v = ret.value ?? { t: '…' };
  const payload = v.list ? v.list.join(' ') : v.t === 'array' ? '…' : v.t;
  return { payload: payload || '-', args: params.length, typed_by: typedBy };
}

const VAL = [];
const result = {};
for (const [name, cls] of classes) {
  try { const r = analyse(name, cls); if (r) result[name] = r; } catch { /* leave it out */ }
}
writeFileSync(out, JSON.stringify(result, null, 1));
if (process.env.VALIDATE) { let ok = 0, bad = 0; const conf = {};
  for (const [a, b] of VAL) a.forEach((t, i) => { const g = b[i]; if (g === '?') return; const tt = t === 'number' ? 'int' : t, gg = g === 'number' ? 'int' : g;
    if (tt === gg) ok++; else { bad++; conf[`${t}<-${g}`] = (conf[`${t}<-${g}`] ?? 0) + 1; } });
  console.log('call-site typing vs AIR 15: agree', ok, 'disagree', bad, JSON.stringify(conf)); }
const vals = Object.values(result);
const known = vals.filter(r => !/[?…]/.test(r.payload)).length;
console.log('composers', vals.length, '| fully typed payloads', known,
  '| typed by', Object.entries(vals.reduce((a, r) => (a[r.typed_by] = (a[r.typed_by] ?? 0) + 1, a), {})).map(x => x.join('=')).join(' '));

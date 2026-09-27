// Inventario del bundle JS: ogni classe con il nome dichiarato in static{n(this,"...")},
// il binding locale, la superclasse, i membri con arità, stringhe e sequenza di accessi.
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
const traverse = _traverse.default ?? _traverse;

const [src, out] = process.argv.slice(2);
const code = readFileSync(src, 'utf8');
const ast = parse(code, { sourceType: 'module', plugins: ['classStaticBlock'], errorRecovery: true });

const keyName = k => k.type === 'Identifier' ? k.name : k.type === 'StringLiteral' ? k.value : k.type === 'PrivateName' ? '#' + k.id.name : null;

function declaredName(cls) {
  for (const el of cls.body.body) {
    if (el.type !== 'StaticBlock') continue;
    for (const st of el.body) {
      const e = st.expression;
      if (e?.type === 'CallExpression' && e.arguments.length === 2 && e.arguments[0].type === 'ThisExpression'
        && e.arguments[1].type === 'StringLiteral') return e.arguments[1].value;
    }
  }
  return null;
}

function scan(node, params = []) {
  const strings = [], ids = [], crefs = [], local = new Set();
  const addPat = x => { if (!x) return; if (x.type === 'Identifier') local.add(x.name); else if (x.type === 'AssignmentPattern') addPat(x.left);
    else if (x.type === 'RestElement') addPat(x.argument); else if (x.type === 'ArrayPattern') x.elements.forEach(addPat);
    else if (x.type === 'ObjectPattern') x.properties.forEach(q => addPat(q.value ?? q.argument)); };
  params.forEach(addPat);
  traverse(node, {
    noScope: true,
    Identifier(p) {
      const par = p.parent;
      if ((par.type === 'MemberExpression' || par.type === 'OptionalMemberExpression') && par.property === p.node && !par.computed) return;
      if ((par.type === 'ObjectProperty' || par.type === 'ClassMethod' || par.type === 'ClassProperty') && par.key === p.node && !par.computed) return;
      crefs.push(p.node.name);
    },
    VariableDeclarator(p) { addPat(p.node.id); },
    Function(p) { p.node.params.forEach(addPat); if (p.node.id) local.add(p.node.id.name); },
    CatchClause(p) { addPat(p.node.param); },
    StringLiteral(p) { strings.push(p.node.value); },
    TemplateElement(p) { if (p.node.value.cooked) strings.push(p.node.value.cooked); },
    MemberExpression(p) { if (!p.node.computed && p.node.property.type === 'Identifier') ids.push(p.node.property.name); },
    OptionalMemberExpression(p) { if (!p.node.computed && p.node.property.type === 'Identifier') ids.push(p.node.property.name); },
  }, null, {});
  return { strings, ids, crefs: crefs.filter(x => !local.has(x)) };
}

const classes = [], funcs = [];
traverse(ast, {
  'ClassExpression|ClassDeclaration'(p) {
    const cls = p.node, name = declaredName(cls);
    let binding = cls.id?.name ?? null;
    if (!binding && p.parent.type === 'VariableDeclarator' && p.parent.id.type === 'Identifier') binding = p.parent.id.name;
    if (!binding && p.parent.type === 'AssignmentExpression' && p.parent.left.type === 'Identifier') binding = p.parent.left.name;
    const members = [], superRefs = [];
    for (const el of cls.body.body) if (el.kind === 'constructor') traverse({ type: 'File', program: { type: 'Program', body: [el.body], directives: [] } }, {
      noScope: true, CallExpression(q) { if (q.node.callee.type === 'Super') for (const a of q.node.arguments) if (a.type === 'Identifier' && !el.params.some(x => (x.left ?? x).name === a.name)) superRefs.push(a.name); } }, null, {});
    for (const el of cls.body.body) {
      if (el.type === 'StaticBlock') continue;
      const nm = keyName(el.key); if (nm == null) continue;
      const m = { name: nm, static: !!el.static };
      if (el.type === 'ClassMethod' || el.type === 'ClassPrivateMethod') {
        m.t = 'm'; m.acc = el.kind === 'get' ? 'get' : el.kind === 'set' ? 'set' : el.kind === 'constructor' ? 'ctor' : '';
        m.np = el.params.filter(x => x.type !== 'RestElement').length;
        m.nreq = el.params.filter(x => x.type === 'Identifier' || x.type === 'ObjectPattern' || x.type === 'ArrayPattern').length;
        Object.assign(m, scan({ type: 'File', program: { type: 'Program', body: [el.body], directives: [] } }, el.params));
      } else {
        m.t = 'f'; const v = el.value;
        if (v?.type === 'ArrowFunctionExpression' || v?.type === 'FunctionExpression') {
          m.t = 'm'; m.acc = ''; m.arrow = true; m.np = v.params.length; m.nreq = v.params.length;
          Object.assign(m, scan({ type: 'File', program: { type: 'Program', body: [{ type: 'ExpressionStatement', expression: v }], directives: [] } }, v.params));
        } else if (v && ['StringLiteral', 'NumericLiteral', 'BooleanLiteral'].includes(v.type)) m.val = v.value;
        else if (v?.type === 'UnaryExpression' && v.argument.type === 'NumericLiteral') m.val = -v.argument.value;
        else if (v) m.valType = v.type;
      }
      members.push(m);
    }
    const { strings } = scan({ type: 'File', program: { type: 'Program', body: [{ type: 'ExpressionStatement', expression: { ...cls, type: 'ClassExpression' } }], directives: [] } });
    classes.push({ name, binding, sup: cls.superClass?.type === 'Identifier' ? cls.superClass.name : null,
      superRefs, start: cls.start, end: cls.end, line: cls.loc.start.line, members, strings: [...new Set(strings)] });
  },
});
// binding -> nome dichiarato, per risolvere le superclassi
const byBinding = new Map(classes.filter(c => c.binding).map(c => [c.binding, c.name]));
for (const c of classes) for (const m of c.members) if (m.crefs) m.crefs = m.crefs.filter(r => byBinding.has(r));
for (const c of classes) { c.supName = c.sup ? byBinding.get(c.sup) ?? null : null; c.superRefs = c.superRefs.filter(r => byBinding.has(r)); }
writeFileSync(out, JSON.stringify(classes));
console.log(classes.length, 'classi;', classes.reduce((a, c) => a + c.members.length, 0), 'membri;',
  classes.filter(c => c.name && !/^_i[0-9a-f]{14}$/.test(c.name)).length, 'con nome reale');

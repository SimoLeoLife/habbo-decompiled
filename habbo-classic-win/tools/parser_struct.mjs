// Rebuilds the wire structure read by every message parser, following nested data
// classes, helper methods, loops and conditionals.
//
// usage: node parser_struct.mjs <deobf.js> <out.json>
//
// Output: { "<ParserClassName>": "int string [count]{ int ItemData{ int string } } ?{ bool }" }
//   int / string / bool / short / byte / float / double / long  a read of that type
//   Name{ ... }         reads done by the constructor or parse method of class Name
//   [ ... ]             reads repeated in a loop (usually preceded by the count)
//   ?{ ... }            reads done only under a condition
//   …                   recursion stopped (cycle or depth limit)
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from '@babel/parser';
import { VISITOR_KEYS } from '@babel/types';

const [src, out] = process.argv.slice(2);
const ast = parse(readFileSync(src, 'utf8'), { sourceType: 'module', plugins: ['classStaticBlock'], errorRecovery: true });

const READERS = { readInteger: 'int', readString: 'string', readBoolean: 'bool', readShort: 'short', readByte: 'byte',
  readFloat: 'float', readDouble: 'double', readLong: 'long', readUnsignedShort: 'short', readUnsignedByte: 'byte', readInt: 'int' };
const MAX_DEPTH = 6;

// every class, by binding name and by declared name
const byName = new Map();
function declared(cls) {
  for (const el of cls.body.body) if (el.type === 'StaticBlock')
    for (const st of el.body) { const e = st.expression;
      if (e?.type === 'CallExpression' && e.arguments[0]?.type === 'ThisExpression' && e.arguments[1]?.type === 'StringLiteral') return e.arguments[1].value; }
  return null;
}
(function collect(node, parent) {
  if (!node || typeof node.type !== 'string') return;
  if (node.type === 'ClassExpression' || node.type === 'ClassDeclaration') {
    const dn = declared(node);
    let b = node.id?.name;
    if (!b && parent?.type === 'VariableDeclarator') b = parent.id.name;
    if (!b && parent?.type === 'AssignmentExpression' && parent.left.type === 'Identifier') b = parent.left.name;
    const rec = { node, name: dn ?? b, self: node.id?.name };
    if (dn) byName.set(dn, rec);
    if (b && !byName.has(b)) byName.set(b, rec);
  }
  for (const k of VISITOR_KEYS[node.type] ?? []) {
    const v = node[k];
    if (Array.isArray(v)) v.forEach(x => collect(x, node)); else collect(v, node);
  }
})(ast.program, null);

const method = (rec, name) => rec.node.body.body.find(el => (el.type === 'ClassMethod') && el.key?.name === name);
const ctor = rec => rec.node.body.body.find(el => el.kind === 'constructor');
const isParam = (n, p) => n?.type === 'Identifier' && n.name === p;

function resolveClass(id, ctx) {
  if (id?.type !== 'Identifier') return null;
  if (ctx && (id.name === ctx.self)) return ctx;
  return byName.get(id.name) ?? null;
}

// walks a function body and returns the list of tokens it reads from parameter `p`
function walkFn(fn, p, ctx, depth, stack) {
  const toks = [];
  const visit = (node) => {
    if (!node || typeof node.type !== 'string') return;
    switch (node.type) {
      case 'ForStatement': case 'WhileStatement': case 'DoWhileStatement': case 'ForOfStatement': case 'ForInStatement': {
        if (node.init) visit(node.init);
        if (node.test && node.type !== 'DoWhileStatement') visit(node.test);
        const inner = sub(node.body);
        if (inner.length) toks.push(`[ ${inner.join(' ')} ]`);
        return;
      }
      case 'IfStatement': case 'ConditionalExpression': {
        visit(node.test);
        const a = sub(node.consequent), b = node.alternate ? sub(node.alternate) : [];
        if (a.length && b.length) toks.push(`?{ ${a.join(' ')} | ${b.join(' ')} }`);
        else if (a.length || b.length) toks.push(`?{ ${(a.length ? a : b).join(' ')} }`);
        return;
      }
      case 'LogicalExpression': {
        visit(node.left);
        const r = sub(node.right);
        if (r.length) toks.push(`?{ ${r.join(' ')} }`);
        return;
      }
      case 'CallExpression': {
        const c = node.callee;
        node.arguments.forEach(visit);
        if (c.type === 'MemberExpression' && !c.computed && isParam(c.object, p)) {
          const t = READERS[c.property.name];
          if (t) { toks.push(t); return; }
        }
        // helper taking the reader: X.helper(e), this.helper(e), a.helper(e), new X().parse(e)
        const k = node.arguments.findIndex(a => isParam(a, p));
        if (k >= 0 && c.type === 'MemberExpression' && !c.computed) {
          let target = c.object.type === 'ThisExpression' ? ctx : resolveClass(c.object, ctx);
          if (!target && c.object.type === 'NewExpression') target = resolveClass(c.object.callee, ctx);
          const m = target && method(target, c.property.name);
          if (m) { toks.push(...expand(target, m, k, depth, stack, target === ctx ? null : target.name)); return; }
        }
        visit(c);
        return;
      }
      case 'NewExpression': {
        node.arguments.forEach(visit);
        const k = node.arguments.findIndex(a => isParam(a, p));
        const target = k >= 0 ? resolveClass(node.callee, ctx) : null;
        const m = target && ctor(target);
        if (m) toks.push(...expand(target, m, k, depth, stack, target.name));
        return;
      }
      case 'FunctionExpression': case 'ArrowFunctionExpression': case 'FunctionDeclaration': case 'ClassExpression':
        if (node.params?.some(x => isParam(x, p))) return; // shadowed
        break;
    }
    for (const key of VISITOR_KEYS[node.type] ?? []) {
      const v = node[key];
      if (Array.isArray(v)) v.forEach(visit); else visit(v);
    }
  };
  const sub = (node) => { const save = toks.length; visit(node); return toks.splice(save); };
  visit(fn.body);
  return toks;
}

function expand(rec, fn, k, depth, stack, label) {
  const key = rec.name + '#' + (fn.key?.name ?? 'ctor');
  if (depth >= MAX_DEPTH || stack.includes(key)) return [label ? `${label}{ … }` : '…'];
  const prm = fn.params[k];
  const p = prm?.type === 'AssignmentPattern' ? prm.left.name : prm?.name;
  if (!p) return [];
  const inner = walkFn(fn, p, rec, depth + 1, [...stack, key]);
  if (!inner.length) return [];
  return label ? [`${label}{ ${inner.join(' ')} }`] : inner;
}

const result = {};
for (const [name, rec] of byName) {
  if (rec.name !== name) continue;
  const m = method(rec, 'parse'), f = method(rec, 'flush');
  if (!m || !f || !m.params.length) continue;
  result[name] = expand(rec, m, 0, 0, [], null).join(' ') || '-';
}
writeFileSync(out, JSON.stringify(result, null, 1));
const nested = Object.values(result).filter(s => s.includes('{')).length;
console.log('parsers', Object.keys(result).length, '| with nested structures', nested);

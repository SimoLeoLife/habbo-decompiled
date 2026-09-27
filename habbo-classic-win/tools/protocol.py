"""Builds the network protocol table of this build: every incoming event and outgoing
composer registered by the client, with its header ID, recovered name, parser, field
reads, AIR 15 counterpart and AIR 15 header ID.

Outputs PROTOCOL.md, protocol.csv and protocol.json in the given directory."""
import json, re, csv, sys, os
from collections import Counter

OUT = sys.argv[1] if len(sys.argv) > 1 else '../06_report'
AIR15_REG = sys.argv[2] if len(sys.argv) > 2 else '../../habbo_air_15_decompiled_deobfuscated/03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/class_2036.as'
PRETTY = '../04_sorgenti_js/HabboAirLauncher.pretty.js'

JS = json.load(open('work/js.json', encoding='utf-8'))
AS3 = json.load(open('work/as3.json', encoding='utf-8'))
FM = json.load(open('work/final_map.json', encoding='utf-8'))
MP = FM['members']
HASH_C = re.compile(r'^_i[0-9a-f]{14}$')
READS = ('readInteger', 'readString', 'readBoolean', 'readShort', 'readByte', 'readFloat', 'readDouble', 'readLong')

by_binding = {c['binding']: c for c in JS if c['binding']}
key = lambda c: c['name'] or c['binding']
def final(c): return FM['classes'].get(c['name'], c['name']) if c['name'] else c['binding']
def as3_src(c): return FM['as3_for'].get(key(c), '')
def placeholder(c): return c['name'] in FM.get('placeholders', {})

code = open(PRETTY, encoding='utf-8').read()
js_reg = {k: [(int(i), b) for i, b in re.findall(r'this\.' + k + r'\[(\d+)\] = ([\w$]+)', code)] for k in ('events', 'composers')}

a3 = open(AIR15_REG, encoding='utf-8').read()
imp = {m.group(2): m.group(1) + '.' + m.group(2) for m in re.finditer(r'import ([\w.]+)\.(\w+);', a3)}
pkg = re.search(r'package\s+([\w.]+)', a3).group(1)
# FFDec leaves out many imports in the registry: resolve bare names by class kind
by_short = {}
for c in AS3: by_short.setdefault(c['name'], []).append(c)
def is_kind(c, kind):
    names = {m['name'] for m in c['members']}
    return ('MessageEvent' in c['ext']) if kind == 'events' else ('getMessageArray' in names)
def q(n, kind):
    if n in imp: return imp[n].replace('.', '/') + '.as'
    cs = [c for c in by_short.get(n, []) if is_kind(c, kind)]
    return cs[0]['file'] if len(cs) == 1 else None
as3_ids = {}
for kind, var in (('events', 'name_1'), ('composers', '_composers')):
    as3_ids[kind] = {}
    for i, n in re.findall(var + r'\[(\d+)\] = (\w+);', a3):
        f = q(n, kind)
        if f: as3_ids[kind].setdefault(f, int(i))
print('AIR 15 registry resolved:', {k: len(v) for k, v in as3_ids.items()})
as3_by_file = {c['file']: c for c in AS3}

def reads_of(c):
    for m in c['members']:
        if m['name'] == 'parse':
            seq = [MP.get(x, x) for x in m.get('ids', [])]
            return ' '.join(x for x in seq if x in READS) or '-'
    return ''

CSTRUCT = json.load(open('work/composer_struct.json', encoding='utf-8')) if os.path.exists('work/composer_struct.json') else {}
STRUCT = json.load(open('work/parser_struct.json', encoding='utf-8')) if os.path.exists('work/parser_struct.json') else {}
rows = []
for kind in ('events', 'composers'):
    for hid, b in sorted(js_reg[kind]):
        c = by_binding.get(b)
        if c is None: continue
        src = as3_src(c)
        row = dict(direction='incoming' if kind == 'events' else 'outgoing', header=hid, name=final(c), binding=b,
                   obfuscated=c['name'] or '', status='placeholder' if placeholder(c) else ('matched' if src else 'unmatched'),
                   air15_source=src, air15_header=as3_ids[kind].get(src, ''))
        if kind == 'events':
            p = by_binding.get(c['superRefs'][0]) if c.get('superRefs') else None
            row['parser'] = final(p) if p else ''
            row['parser_reads'] = reads_of(p) if p else ''
            row['structure'] = STRUCT.get(final(p), '') if p else ''
        else:
            ct = next((m for m in c['members'] if m['name'] == 'constructor'), None)
            row['args'] = ct['np'] if ct else 0
            cs = CSTRUCT.get(final(c), {})
            row['payload'] = cs.get('payload', '')
            row['typed_by'] = cs.get('typed_by', '')
            a = as3_by_file.get(src)
            if a:
                act = next((m for m in a['members'] if m['name'] == a['name'] and m['t'] == 'm'), None)
                row['air15_arg_types'] = ', '.join(act.get('ptypes', [])) if act else ''
        rows.append(row)

os.makedirs(OUT, exist_ok=True)
json.dump(rows, open(os.path.join(OUT, 'protocol.json'), 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
cols = ['direction', 'header', 'name', 'obfuscated', 'status', 'air15_source', 'air15_header', 'parser', 'parser_reads', 'structure', 'args', 'air15_arg_types', 'payload', 'typed_by']
with open(os.path.join(OUT, 'protocol.csv'), 'w', newline='', encoding='utf-8') as fh:
    w = csv.DictWriter(fh, cols, extrasaction='ignore'); w.writeheader(); [w.writerow(r) for r in rows]

def md_table(rs, cols, heads):
    out = ['| ' + ' | '.join(heads) + ' |', '|' + '---|' * len(heads)]
    for r in rs:
        out.append('| ' + ' | '.join(str(r.get(c, '')).replace('|', '\\|') or '' for c in cols) + ' |')
    return '\n'.join(out)

ev = [r for r in rows if r['direction'] == 'incoming']; co = [r for r in rows if r['direction'] == 'outgoing']
st = lambda rs: Counter(r['status'] for r in rs)
same = lambda rs: sum(1 for r in rs if r['air15_header'] != '' and r['air15_header'] == r['header'])
md = f"""# Network protocol of Habbo Classic `55_classic-js-806140824ba8`

Generated by `tools/protocol.py` from the client's own message registries
(`this.events[ID] = …` and `this.composers[ID] = …`). Protocol: `FLASH29`.

| | Incoming events | Outgoing composers |
|---|---|---|
| Registered | {len(ev)} | {len(co)} |
| Matched to an AIR 15 class | {st(ev)['matched']} | {st(co)['matched']} |
| Placeholder name (no match) | {st(ev)['placeholder']} | {st(co)['placeholder']} |
| Same header ID as in AIR 15 | {same(ev)} | {same(co)} |

How to read the columns:

- **name**: recovered name; `Unk…` names are placeholders built from the class shape,
  `class_N` names are the FFDec labels of AIR 15.
- **air15 source / air15 ID**: the AS3 class this message corresponds to, and the header
  ID it had in AIR 15. Use this pair to port an emulator from AIR 15 to this build.
- **structure**: what the parser reads from the wire, in order, following nested data
  classes and helper methods (built by `tools/parser_struct.mjs`):
  `int string bool short byte float double long` are single reads, `Name{{ … }}` the reads
  done by data class `Name`, `[ … ]` reads repeated in a loop (normally after an `int`
  count), `?{{ … }}` reads done only under a condition (`?{{ a | b }}` for if/else), `…`
  where recursion stops (cycle or depth limit).
- **payload**: what the composer sends, in order, as returned by `getMessageArray()`
  (built by `tools/composer_struct.mjs`). Same notation as the structures, plus `?` for a
  value whose type is unknown and `number` for a numeric value that may not be an int.
- **typed by**: where the payload types come from: `air15` (the typed AS3 constructor),
  `callsite` (the arguments seen where the client creates the composer), `partial`
  (only some of them), `none`, or `no args`.

The same data is in `protocol.csv` and `protocol.json`.

## Incoming (server → client)

{md_table(ev, ['header', 'name', 'air15_header', 'parser', 'structure', 'air15_source'], ['ID', 'Event', 'AIR 15 ID', 'Parser', 'Structure', 'AIR 15 source'])}

## Outgoing (client → server)

{md_table(co, ['header', 'name', 'air15_header', 'payload', 'typed_by', 'air15_source'], ['ID', 'Composer', 'AIR 15 ID', 'Payload', 'Typed by', 'AIR 15 source'])}
"""
open(os.path.join(OUT, 'PROTOCOL.md'), 'w', encoding='utf-8').write(md)
print('incoming', len(ev), dict(st(ev)), 'same id', same(ev), '| outgoing', len(co), dict(st(co)), 'same id', same(co))

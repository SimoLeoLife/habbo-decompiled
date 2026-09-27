"""Consolida la mappa dei nomi: scarta gli abbinamenti di classe incoerenti, risolve i
conflitti fra nomi, decide il nome finale di ogni classe e il percorso di ogni file."""
import json, re, csv
from collections import Counter, defaultdict

JS = json.load(open('work/js.json', encoding='utf-8'))
AS3 = json.load(open('work/as3.json', encoding='utf-8'))
NM = json.load(open('work/namemap.json', encoding='utf-8'))
HASH_C = re.compile(r'^_i[0-9a-f]{14}$')
HASH_M = re.compile(r'^_r[0-9a-f]{14}$')
OBF = re.compile(r'^(class|var|method|const|package|name|static|interface|get|set|function)_\d+$')
IDENT = re.compile(r'^[A-Za-z_$][\w$]*$')
RESERVED = set('break case catch class const continue debugger default delete do else export extends finally for function if import in instanceof new return super switch this throw try typeof var void while with yield let static enum await implements package protected interface private public null true false undefined arguments eval constructor prototype'.split())

by_file = {c['file']: c for c in AS3}
key = lambda c: c['name'] or c['binding']
jsk = {key(c): c for c in JS}
MP = dict(NM['members'])

# 1. abbinamenti di classe: scarta quelli con pochi membri coerenti
def kind_js(c):
    names = {m['name'] for m in c['members']}
    if c.get('sup') == 'g': return 'event'
    if 'getMessageArray' in names: return 'composer'
    if 'parse' in names and 'flush' in names: return 'parser'
    return ''
def kind_as3(c):
    names = {m['name'] for m in c['members']}
    if 'MessageEvent' in c['ext']: return 'event'
    if 'getMessageArray' in names: return 'composer'
    if 'parse' in names and 'flush' in names: return 'parser'
    return ''

cls = {}
dropped, dropped_kind = [], []
for k, f in NM['class_files'].items():
    jc, ac = jsk[k], by_file[f]
    an = {m['name'] for m in ac['members']}
    res = [MP[m['name']] for m in jc['members'] if m['name'] in MP]
    if len(res) >= 3 and sum(x in an for x in res) / len(res) < 0.34:
        dropped.append((k, f)); continue
    if kind_js(jc) != kind_as3(ac):   # an event must match an event, a parser a parser...
        dropped_kind.append((k, f)); continue
    cls[k] = f

# 2. membri: nome valido e nessun conflitto con un membro in chiaro della stessa classe
bad = set()
for c in JS:
    plain = {m['name'] for m in c['members'] if not HASH_M.match(m['name'])}
    for m in c['members']:
        if m['name'] in MP and MP[m['name']] in plain: bad.add(m['name'])
for h, n in list(MP.items()):
    if h in bad or not IDENT.match(n) or n in RESERVED: del MP[h]

# 3. nomi finali di classe (unici nel bundle)
used = Counter()
for c in JS:
    if c['name'] and not HASH_C.match(c['name']): used[c['name']] += 1
final_cls, paths = {}, {}
short_count = Counter(by_file[f]['name'] for f in cls.values())
for k, f in cls.items():
    ac = by_file[f]
    nm = ac['name']
    if short_count[nm] > 1 or used[nm]:
        tail = (ac['pkg'].split('.')[-1] if ac['pkg'] else 'toplevel')
        nm = f'{nm}${tail}'
        i = 2
        while used[nm]: nm = f"{ac['name']}${tail}{i}"; i += 1
    used[nm] += 1
    if HASH_C.match(k): final_cls[k] = nm
    paths[k] = f[:-3] + '.js'

# 4. unmatched hashed classes get a descriptive placeholder name, always prefixed
#    "Unk" and ending with 6 hash digits, so they are never mistaken for real names.
READ = {'readInteger': 'I', 'readString': 'S', 'readBoolean': 'B', 'readShort': 'H', 'readByte': 'Y',
        'readFloat': 'F', 'readDouble': 'D', 'readLong': 'L'}
binding_name = {c['binding']: final_cls.get(key(c), c['name']) for c in JS if c['binding']}
placeholder = {}
for c in JS:
    k = key(c)
    if not (c['name'] and HASH_C.match(c['name'])) or k in cls: continue
    h6 = c['name'][2:8]
    names = {m['name'] for m in c['members']}
    sup = binding_name.get(c.get('sup')) if c.get('sup') else None
    if c.get('sup') == 'g' or (sup and sup.endswith('MessageEvent')):
        ref = binding_name.get(c['superRefs'][0]) if c.get('superRefs') else None
        tag = ref if ref and not HASH_C.match(ref) and not ref.startswith('Unk') else h6
        nm = f'UnkMessageEvent_{tag}' if tag != h6 else f'UnkMessageEvent_{h6}'
    elif 'parse' in names and 'flush' in names:
        pm = next(m for m in c['members'] if m['name'] == 'parse')
        sig = ''.join(READ.get(MP.get(x, x), '') for x in pm.get('ids', []))
        nm = f'UnkMessageParser_{sig[:10] + ("_" if len(sig) > 10 else "") if sig else "empty"}_{h6}'
    elif 'getMessageArray' in names:
        ct = next((m for m in c['members'] if m['name'] == 'constructor'), None)
        nm = f'UnkMessageComposer_{ct["np"] if ct else 0}args_{h6}'
    elif sup and not HASH_C.match(sup):
        base = sup.split("$")[0]
        nm = f'Unk{base}Subclass_{h6}' if not OBF.match(base) else f'UnkSubclassOf_{base}_{h6}'
    elif c['members'] and all(m['static'] and m['t'] == 'f' for m in c['members']):
        nm = f'UnkConstants_{h6}'
    elif not c['members']:
        nm = f'UnkInterface_{h6}'
    else:
        nm = f'UnkClass_{h6}'
    while used[nm]: nm += '_'
    used[nm] += 1
    placeholder[c['name']] = nm
final_cls.update(placeholder)
print('placeholder names', len(placeholder), Counter(re.sub(r'_.*', '', v) for v in placeholder.values()).most_common())

out = dict(classes=final_cls, members=MP, paths=paths,
           as3_for=cls, placeholders=placeholder)
json.dump(out, open('work/final_map.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# report CSV
with open('work/classi.csv', 'w', newline='', encoding='utf-8') as fh:
    w = csv.writer(fh); w.writerow(['obfuscated_name', 'minified_binding', 'final_name', 'air15_source', 'match_method', 'placeholder'])
    for c in JS:
        k = key(c)
        w.writerow([c['name'], c['binding'], final_cls.get(k, c['name']), cls.get(k, ''), NM['classes'].get(k, {}).get('why', 'name' if k in cls else ''), 'yes' if k in placeholder else ''])
with open('work/membri.csv', 'w', newline='', encoding='utf-8') as fh:
    w = csv.writer(fh); w.writerow(['hash', 'name', 'real_name'])
    for h, n in sorted(MP.items(), key=lambda x: x[1]): w.writerow([h, n, 'no' if OBF.match(n) else 'yes'])
print('kind mismatch dropped', len(dropped_kind)); print('classi abbinate', len(cls), '(scartate', len(dropped), ') | hash classe rinominati', len(final_cls),
      '| membri', len(MP), '(reali', sum(1 for n in MP.values() if not OBF.match(n)), ', esclusi per conflitto', len(bad), ')')

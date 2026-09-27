"""Inventario dei sorgenti AS3 di AIR 15 (output FFDec): classi, membri, costanti,
stringhe e sequenze di identificatori per il confronto con il bundle JS."""
import os, re, json, sys
ROOT = sys.argv[1]; OUT = sys.argv[2]
OBF = re.compile(r'^(class|var|method|const|package|name|static|interface|get|set)_\d+$')
STR = re.compile(r'"((?:[^"\\]|\\.)*)"')
IDENT = re.compile(r'\.\s*([A-Za-z_$][\w$]*)|\b([A-Za-z_$][\w$]*)\s*\(')
FUNC = re.compile(r'^\s*(?:(override|public|private|protected|internal|static|final|native|\w+_\d+)\s+)*function\s+(?:(get|set)\s+)?([\w$]+)\s*\(([^)]*)\)')
FIELD = re.compile(r'^\s*(?:(?:public|private|protected|internal|static|\w+_\d+)\s+)*(var|const)\s+([\w$]+)\s*:\s*([\w$.<>*]+)\s*(?:=\s*(.*?))?;\s*$')
HEAD = re.compile(r'^\s*(?:public|internal|final|dynamic|\s)*\s*(class|interface)\s+([\w$]+)(?:\s+extends\s+([\w$.,\s]+?))?(?:\s+implements\s+([\w$.,\s]+?))?\s*$')

TOK = re.compile(r'(\.)?\s*\b([A-Za-z_$][\w$]*)\b\s*(\()?')
KW = set('if else while for do switch case return new var function super this delete typeof in is as catch try throw break continue default true false null undefined void each'.split())

def body(lines, i):
    depth = 0; started = False; out = []
    for j in range(i, len(lines)):
        l = lines[j]; out.append(l)
        depth += l.count('{') - l.count('}')
        if '{' in l: started = True
        if started and depth <= 0: return out, j
        if not started and l.rstrip().endswith(';'): return out, j
    return out, len(lines) - 1

classes = []
for dp, _, fs in os.walk(ROOT):
    for f in fs:
        if not f.endswith('.as'): continue
        p = os.path.join(dp, f); rel = os.path.relpath(p, ROOT).replace(os.sep, '/')
        lines = open(p, encoding='utf-8', errors='replace').read().split('\n')
        pkg = ''; c = None
        for l in lines:
            m = re.match(r'^\s*package\s*([\w.]*)', l)
            if m: pkg = m.group(1)
            m = HEAD.match(l)
            if m and c is None:
                c = dict(file=rel, pkg=pkg, name=m.group(2), kind=m.group(1),
                         ext=(m.group(3) or '').strip(), impl=[x.strip() for x in (m.group(4) or '').split(',') if x.strip()],
                         members=[], strings=[], qname=(pkg + '.' if pkg else '') + m.group(2),
                         imports={x.split('.')[-1]: x for x in re.findall(r'^\s*import\s+([\w.]+);', '\n'.join(lines), re.M)})
        if c is None: continue
        i = 0
        while i < len(lines):
            l = lines[i]
            fm = FUNC.match(l); fd = FIELD.match(l)
            if fm:
                b, j = body(lines, i); txt = '\n'.join(b[1:])
                params = [x.strip() for x in fm.group(4).split(',') if x.strip()]
                rt = re.search(r'\)\s*:\s*([\w.<>*]+)', l)
                c['members'].append(dict(t='m', acc=fm.group(2) or '', name=fm.group(3), static=' static ' in ' ' + l, rtype=rt.group(1) if rt else '', ptypes=[(x.split(':', 1)[1].split('=')[0].strip() if ':' in x else '*') for x in params if not x.startswith('...')],
                    np=len([x for x in params if not x.startswith('...')]), nreq=len([x for x in params if '=' not in x and not x.startswith('...')]),
                    strings=STR.findall(txt), crefs=re.findall(r'(?<![.\w])([A-Za-z_]\w*)', re.sub(r'(:\s*|\bas\s+)[\w.<>*]+', ' ', STR.sub('""', txt))), _tok=TOK.findall(re.sub(r'(:\s*|\bas\s+)[\w.<>*]+', ' ', STR.sub('""', txt)))))
                i = j + 1; continue
            if fd:
                c['members'].append(dict(t='f', const=fd.group(1) == 'const', name=fd.group(2), type=fd.group(3),
                    static=' static ' in ' ' + l, val=fd.group(4)))
            i += 1
        # sequenza di accessi: .x, x(...) e nomi dei membri propri usati senza "this."
        own = {mm['name'] for mm in c['members']}
        for mm in c['members']:
            if '_tok' in mm:
                mm['ids'] = [t for d, t, call in mm.pop('_tok') if t not in KW and (d or call or t in own)]
        full = '\n'.join(lines)
        c['strings'] = sorted(set(STR.findall(full)))
        m = re.search(r'super\(([^)]*)\)', full)
        c['superRefs'] = [x.strip() for x in m.group(1).split(',') if re.match(r'^[A-Za-z_]\w*$', x.strip()) and not x.strip().startswith('param')] if m else []
        classes.append(c)
# I nomi class_N di FFDec si ripetono fra package: ogni riferimento va qualificato
# con gli import del file o con il package corrente.
qnames = {c['qname'] for c in classes}
def qualify(c, x):
    q = c['imports'].get(x) or ((c['pkg'] + '.' if c['pkg'] else '') + x)
    return q if q in qnames else None
for c in classes:
    for m in c['members']:
        if 'crefs' in m: m['crefs'] = [q for q in (qualify(c, x) for x in m['crefs']) if q]
    c['superRefs'] = [q for q in (qualify(c, x) for x in c['superRefs']) if q]
    c['extq'] = qualify(c, c['ext'].split('.')[-1]) if c['ext'] else None
    del c['imports']
json.dump(classes, open(OUT, 'w', encoding='utf-8'), ensure_ascii=False)
print(len(classes), 'classi;', sum(len(c['members']) for c in classes), 'membri')

"""Recupero dei nomi: abbina le classi JS (nomi hash _i/_r) alle classi AS3 di AIR 15
e deduce la mappa globale hash -> nome. Il nome hash è funzione del solo nome
originale, quindi ogni abbinamento confermato vale in tutto il bundle."""
import json, re, math, sys
from collections import Counter, defaultdict
from difflib import SequenceMatcher

AS3 = json.load(open('work/as3.json', encoding='utf-8'))
JS = json.load(open('work/js.json', encoding='utf-8'))
HASH_C = re.compile(r'^_i[0-9a-f]{14}$')
HASH_M = re.compile(r'^_r[0-9a-f]{14}$')
OBF = re.compile(r'^(class|var|method|const|package|name|static|interface|get|set|function)_\d+$')

def real(n): return n and not OBF.match(n)

# ---------------------------------------------------------------- feature di classe
def feats_as3(c):
    f = set('s:' + s for s in c['strings'] if len(s) > 2)
    for m in c['members']:
        if m['t'] == 'f' and m.get('val') and m['static']:
            v = m['val'].strip()
            if v.startswith('"'): f.add('v:' + v.strip('"'))
            elif re.match(r'^-?\d+(\.\d+)?$', v): f.add('n:%s=%s' % (len([x for x in c['members'] if x['static'] and x['t']=='f']), v))
        f.add('m:' + m['name'])
    if c['ext']: f.add('x:' + (c.get('extq') or c['ext'].split('.')[-1]))
    for r in c.get('superRefs', []): f.add('p:' + r)
    for m in c['members']:
        if m['t'] == 'm' and len(m.get('ids', [])) >= 2: f.add('q:' + '|'.join(m['ids']))
    return f

MPX = {}
CLS_OF = {}
def feats_js(c):
    f = set('s:' + s for s in c['strings'] if len(s) > 2)
    for m in c['members']:
        if m['t'] == 'f' and m['static'] and 'val' in m:
            if isinstance(m['val'], str): f.add('v:' + m['val'])
            elif not isinstance(m['val'], bool): f.add('n:%s=%s' % (len([x for x in c['members'] if x['static'] and x['t']=='f']), fmt(m['val'])))
        if m['name'] in MPX: f.add('m:' + MPX[m['name']])
        elif not HASH_M.match(m['name']) and m['name'] != 'constructor': f.add('m:' + m['name'])
    if c.get('sup') in CLS_OF: f.add('x:' + CLS_OF[c['sup']])
    elif c.get('supName') and not HASH_C.match(c['supName']): f.add('x:' + c['supName'])
    for r in c.get('superRefs', []):
        if r in CLS_OF: f.add('p:' + CLS_OF[r])
    for m in c['members']:
        ids = m.get('ids', [])
        if m['t'] == 'm' and len(ids) >= 2:
            t = [MPX.get(x, x) for x in ids]
            if not any(HASH_M.match(x) for x in t): f.add('q:' + '|'.join(t))
    return f

def fmt(v):
    return str(int(v)) if isinstance(v, (int, float)) and float(v).is_integer() else str(v)

AF = [feats_as3(c) for c in AS3]
as3_by_q = {c['qname']: i for i, c in enumerate(AS3)}
as3_by_name = defaultdict(list)
for i, c in enumerate(AS3): as3_by_name[c['name']].append(i)
match, why = {}, {}
for j, c in enumerate(JS):
    if c['name'] and not HASH_C.match(c['name']) and len(as3_by_name.get(c['name'], [])) == 1:
        match[j] = as3_by_name[c['name']][0]; why[j] = 'nome'
KNOWN = set()
PLAIN = {x for c in JS for m in c['members'] for x in m.get('ids', []) + [m['name']] if not HASH_M.match(x)}
PLAIN_CLS = {c['name'] for c in JS if c['name'] and not HASH_C.match(c['name'])}

def class_round(rnd):
    JF = [feats_js(c) for c in JS]
    matched_as3 = {AS3[i]['qname'] for i in match.values()}
    ok = KNOWN | PLAIN
    def elig(x):
        if x.startswith('m:'): return x[2:] in KNOWN
        if x.startswith('q:'): return all(t in ok for t in x[2:].split('|'))
        if x.startswith('p:') or x.startswith('x:'): return x[2:] in matched_as3 or x[2:] in PLAIN_CLS
        return True
    AFE = [{x for x in f if elig(x)} for f in AF]
    UA = set().union(*AFE); UJ = set().union(*JF)
    JF = [f & UA for f in JF]; AFE = [f & UJ for f in AFE]
    df = Counter()
    for f in AFE + JF:
        for x in f: df[x] += 1
    N = len(AFE) + len(JF)
    idf = {x: math.log(N / d) for x, d in df.items()}
    inv = defaultdict(list)
    for i, f in enumerate(AFE):
        for x in f:
            if df[x] <= 40: inv[x].append(i)
    def score(jf, af):
        inter = jf & af
        if not inter: return 0.0
        w = lambda s: sum(idf[x] for x in s)
        return w(inter) / (w(jf | af) or 1)
    taken = set(match.values())
    best = {}
    for j, jf in enumerate(JF):
        if j in match: continue
        cand = Counter()
        for x in jf:
            for i in inv.get(x, ()):
                if i not in taken: cand[i] += 1
        sc = sorted(((score(jf, AFE[i]), i) for i in cand), reverse=True)[:2]
        if sc and sc[0][0] >= 0.35 and (len(sc) == 1 or sc[0][0] - sc[1][0] >= 0.1):
            best[j] = sc[0]
    by_as3 = defaultdict(list)
    for j, (sco, i) in best.items(): by_as3[i].append((sco, j))
    n = 0
    for i, lst in by_as3.items():
        lst.sort(reverse=True)
        if len(lst) == 1 or lst[0][0] - lst[1][0] >= 0.1:
            match[lst[0][1]] = i; why[lst[0][1]] = 'r%d %.2f' % (rnd, lst[0][0]); n += 1
    return n

# ---------------------------------------------------------------- membri
votes = defaultdict(Counter)   # hash -> nome
def vote(h, name, w=1):
    if HASH_M.match(h) and name and name != h: votes[h][name] += w

def sig(m): return (m['t'], m.get('acc', ''), m['static'])

def pair_members(jc, ac):
    js = [m for m in jc['members'] if m['name'] != 'constructor']
    as_ = [m for m in ac['members'] if m['name'] != ac['name']]
    used_j, used_a, pairs = set(), set(), []
    # 1. costanti statiche per valore
    aval = defaultdict(list)
    for k, m in enumerate(as_):
        if m['t'] == 'f' and m.get('val'): aval[m['val'].strip().strip('"')].append(k)
    for k, m in enumerate(js):
        if m['t'] == 'f' and 'val' in m:
            key = m['val'] if isinstance(m['val'], str) else fmt(m['val'])
            c = [x for x in aval.get(key, []) if x not in used_a]
            if len(c) == 1 and sum(1 for mm in js if mm['t']=='f' and 'val' in mm and (mm['val'] if isinstance(mm['val'], str) else fmt(mm['val'])) == key) == 1:
                pairs.append((k, c[0])); used_j.add(k); used_a.add(c[0])
    # 2. nomi in chiaro identici
    aname = {m['name']: k for k, m in enumerate(as_)}
    for k, m in enumerate(js):
        if k not in used_j and m['name'] in aname and aname[m['name']] not in used_a:
            pairs.append((k, aname[m['name']])); used_j.add(k); used_a.add(aname[m['name']])
    # 3. metodi per stringhe
    for k, m in enumerate(js):
        if k in used_j or m['t'] != 'm' or not m.get('strings'): continue
        ss = set(m['strings'])
        cands = [(len(ss & set(a.get('strings', []))) / len(ss | set(a.get('strings', []))), x) for x, a in enumerate(as_)
                 if x not in used_a and a['t'] == 'm' and a['static'] == m['static'] and a.get('strings')]
        cands.sort(reverse=True)
        if cands and cands[0][0] >= 0.5 and (len(cands) == 1 or cands[0][0] > cands[1][0]):
            pairs.append((k, cands[0][1])); used_j.add(k); used_a.add(cands[0][1])
    # 4. firma unica residua (tipo, accessor, static, arità)
    def key(m, js_side):
        acc = m.get('acc', '')
        return (m['t'], acc, m['static'], m.get('np', -1) if m['t'] == 'm' else -1)
    rj, ra = defaultdict(list), defaultdict(list)
    for k, m in enumerate(js):
        if k not in used_j: rj[key(m, 1)].append(k)
    for k, m in enumerate(as_):
        if k not in used_a: ra[key(m, 0)].append(k)
    for s, lst in rj.items():
        if len(lst) == 1 and len(ra.get(s, [])) == 1:
            pairs.append((lst[0], ra[s][0])); used_j.add(lst[0]); used_a.add(ra[s][0])
    # get/set con stesso nome in JS condividono l'hash: gestito dal voto globale
    out = [(js[a], as_[b]) for a, b in pairs]
    jc_ = [m for m in jc['members'] if m['name'] == 'constructor']
    ac_ = [m for m in ac['members'] if m['name'] == ac['name'] and m['t'] == 'm']
    if len(jc_) == 1 and len(ac_) == 1: out.append((jc_[0], ac_[0]))
    return out


def resolve():
    mp, back = {}, defaultdict(list)
    for h, c in votes.items():
        (n1, v1), *rest = c.most_common(2)
        if rest and rest[0][1] * 2 > v1: continue
        back[n1].append((v1, h))
    for n, lst in back.items():
        lst.sort(reverse=True)
        if len(lst) == 1 or lst[0][0] > 2 * lst[1][0]: mp[lst[0][1]] = n
    return mp

# 5. allineamento dei corpi: sequenze di accessi ai membri, ancorate ai nomi già noti
def body_align(rounds=4):
    global votes
    for r in range(rounds):
        mp = resolve()
        before = len(mp)
        for j, prs in matched_pairs.items():
            for jm, am in prs:
                if jm['t'] != 'm' or am['t'] != 'm': continue
                a = am.get('ids', []); b = [mp.get(x, x) for x in jm.get('ids', [])]
                if not a or not b: continue
                sm = SequenceMatcher(None, a, b, autojunk=False)
                for tag, i1, i2, j1, j2 in sm.get_opcodes():
                    if tag == 'replace' and i2 - i1 == j2 - j1:
                        for x, y in zip(a[i1:i2], jm['ids'][j1:j2]):
                            if HASH_M.match(y) and y not in mp: vote(y, x, 1)
        mp = resolve()
        print('  giro', r + 1, 'membri risolti', before, '->', len(mp))
JS_BY_BINDING = {c['binding']: j for j, c in enumerate(JS) if c['binding']}
def cref_round(rnd):
    cv = defaultdict(Counter)
    b2a = {JS[j]['binding']: AS3[i]['qname'] for j, i in match.items() if JS[j]['binding']}
    for j, prs in matched_pairs.items():
        for jm, am in prs:
            a = am.get('crefs', []); jb = jm.get('crefs', [])
            if not a or not jb: continue
            bt = [b2a.get(x, '?' + x) for x in jb]
            sm = SequenceMatcher(None, a, bt, autojunk=False)
            for tag, i1, i2, j1, j2 in sm.get_opcodes():
                if tag == 'replace' and i2 - i1 == j2 - j1:
                    for x, y in zip(a[i1:i2], bt[j1:j2]):
                        if y.startswith('?'): cv[y[1:]][x] += 1
    taken = set(match.values()); back = defaultdict(list)
    for b, c in cv.items():
        (n1, v1), *rest = c.most_common(2)
        if rest and rest[0][1] * 2 > v1: continue

        back[n1].append((v1, b))
    n = 0
    for name, lst in back.items():
        lst.sort(reverse=True)
        i = as3_by_q[name]
        if i in taken: continue
        if len(lst) == 1 or lst[0][0] > 2 * lst[1][0]:
            j = JS_BY_BINDING[lst[0][1]]
            if j in match: continue
            match[j] = i; why[j] = 'rif r%d x%d' % (rnd, lst[0][0]); n += 1
    return n

def link_round(rnd):
    # superclasse e argomenti di super(...) di una coppia abbinata puntano a classi corrispondenti
    taken = set(match.values()); n = 0
    for j, i in list(match.items()):
        jc, ac = JS[j], AS3[i]
        links = []
        if jc.get('sup') and ac.get('extq'): links.append((jc['sup'], ac['extq']))
        if len(jc.get('superRefs', [])) == len(ac.get('superRefs', [])):
            links += list(zip(jc['superRefs'], ac['superRefs']))
        for bnd, q in links:
            jj = JS_BY_BINDING.get(bnd); ii = as3_by_q.get(q)
            if jj is None or ii is None or jj in match or ii in taken: continue
            match[jj] = ii; why[jj] = 'link r%d' % rnd; taken.add(ii); n += 1
    return n

def fp(c, tr):
    ps = [m for m in c['members'] if m['name'] == 'parse' and m['t'] == 'm']
    if len(ps) != 1: return None
    rd = tuple(x for x in (tr(y) for y in ps[0].get('ids', [])) if x.startswith('read') or x == 'bytesAvailable')
    nget = sum(1 for m in c['members'] if m.get('acc') == 'get')
    return (rd, nget)

def reverse_link_round(rnd):
    # classe abbinata usata come argomento di super(...) da un'unica classe per lato
    rj, ra = defaultdict(list), defaultdict(list)
    for j, c in enumerate(JS):
        for r in c.get('superRefs', []): rj[r].append(j)
    for i, c in enumerate(AS3):
        for r in c.get('superRefs', []): ra[r].append(i)
    taken = set(match.values()); n = 0
    for j, i in list(match.items()):
        a = rj.get(JS[j]['binding'], []); b = ra.get(AS3[i]['qname'], [])
        if len(a) == 1 and len(b) == 1 and a[0] not in match and b[0] not in taken:
            match[a[0]] = b[0]; why[a[0]] = 'link-inv r%d' % rnd; taken.add(b[0]); n += 1
    return n

def parser_round(rnd):
    taken = set(match.values())
    gj, ga = defaultdict(list), defaultdict(list)
    for j, c in enumerate(JS):
        if j in match: continue
        f = fp(c, lambda y: MPX.get(y, y))
        if f and f[0]: gj[f].append(j)
    for i, c in enumerate(AS3):
        if i in taken: continue
        f = fp(c, lambda y: y)
        if f and f[0]: ga[f].append(i)
    n = 0
    for f, lst in gj.items():
        if len(lst) == 1 and len(ga.get(f, [])) == 1:
            match[lst[0]] = ga[f][0]; why[lst[0]] = 'parser r%d' % rnd; n += 1
    return n

matched_pairs = {}
for rnd in range(1, 16):
    added = class_round(rnd)
    if matched_pairs: added += cref_round(rnd)
    added += link_round(rnd) + reverse_link_round(rnd)
    if rnd > 1: added += parser_round(rnd)
    matched_pairs = {j: pair_members(JS[j], AS3[i]) for j, i in match.items()}
    votes.clear()
    for j, prs in matched_pairs.items():
        for jm, am in prs: vote(jm['name'], am['name'], 2)
    body_align(3)
    MP = resolve()
    MPX.clear(); MPX.update(MP); KNOWN.clear(); KNOWN.update(MP.values())
    CLS_OF.clear(); CLS_OF.update({JS[j]['binding']: AS3[i]['qname'] for j, i in match.items() if JS[j]['binding']})
    print('round', rnd, '+classi', added, 'tot', len(match), 'membri', len(MP))
    if added == 0 and rnd > 1: break

# ---------------------------------------------------------------- output
cls_map = {}
for j, i in match.items():
    c = JS[j]
    if c['name'] and HASH_C.match(c['name']):
        cls_map[c['name']] = dict(name=AS3[i]['name'], pkg=AS3[i]['pkg'], file=AS3[i]['file'], why=why[j], real=bool(real(AS3[i]['name'])))
json.dump(dict(classes=cls_map, members=MP,
               class_files={JS[j]['name'] or JS[j]['binding']: AS3[i]['file'] for j, i in match.items()}),
          open('work/namemap.json', 'w', encoding='utf-8'), indent=1, ensure_ascii=False)
hashed_cls = sum(1 for c in JS if c['name'] and HASH_C.match(c['name']))
real_members = sum(1 for n in MP.values() if real(n))
all_hash = {m['name'] for c in JS for m in c['members'] if HASH_M.match(m['name'])}
print('classi JS', len(JS), '| abbinate', len(match), '| hash di classe risolti', len(cls_map), '/', hashed_cls,
      '(nome reale', sum(1 for v in cls_map.values() if v['real']), ')')
print('hash di membro', len(all_hash), '| risolti', len(MP), '(nome reale', real_members, ')')

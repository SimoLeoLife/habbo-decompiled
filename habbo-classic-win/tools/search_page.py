"""Builds a self-contained search page (one HTML file, data embedded) for classes,
member hashes and network messages.

usage: python search_page.py <out_dir_of_pipeline> <output.html> [<github_blob_base>]
  github_blob_base defaults to https://github.com/SimoLeoLife/habbo-decompiled/blob/main/habbo-classic-win
Run from the tools directory after protocol.py."""
import json, os, re, sys

OUT, HTML = sys.argv[1], sys.argv[2]
BASE = sys.argv[3] if len(sys.argv) > 3 else 'https://github.com/SimoLeoLife/habbo-decompiled/blob/main/habbo-classic-win'
JS = json.load(open('work/js.json', encoding='utf-8'))
NM = json.load(open(os.path.join(OUT, '06_report', 'name_map.json'), encoding='utf-8'))
PROTO = json.load(open(os.path.join(OUT, '06_report', 'protocol.json'), encoding='utf-8'))
HASH_C = re.compile(r'^_i[0-9a-f]{14}$')

split = os.path.join(OUT, '05_sorgenti_per_classe')
file_of = {}
for dp, _, fs in os.walk(split):
    for f in fs:
        if f.endswith('.js'):
            rel = os.path.relpath(os.path.join(dp, f), split).replace(os.sep, '/')
            file_of.setdefault(f[:-3], '05_sorgenti_per_classe/' + rel)

classes = []
for c in JS:
    k = c['name'] or c['binding']
    fin = NM['classes'].get(c['name'], c['name']) if c['name'] else c['binding']
    status = 'placeholder' if c['name'] in NM.get('placeholders', {}) else 'matched' if k in NM['as3_for'] else \
             ('readable' if c['name'] and not HASH_C.match(c['name']) else 'unmatched')
    classes.append([fin, c['name'] if c['name'] != fin else '', c['binding'] or '', file_of.get(fin, ''),
                    NM['as3_for'].get(k, ''), status, len(c['members'])])
members = sorted(NM['members'].items(), key=lambda x: x[1])
messages = [[r['direction'][0], r['header'], r['name'], r.get('parser', ''), r.get('structure') or r.get('payload') or '',
             r['air15_header'], r['air15_source']] for r in PROTO]
data = json.dumps(dict(base=BASE, classes=classes, members=members, messages=messages), ensure_ascii=False, separators=(',', ':'))

page = r"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Habbo Classic Name Search</title>
<style>
:root { --bg:#fbfbfa; --fg:#1d1d1b; --muted:#6b6b66; --line:#e3e3df; --card:#ffffff; --accent:#2f5bd3; --tag:#eef1fb; --warn:#8a5a00; --warnbg:#fff4dc; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg:#161615; --fg:#ececea; --muted:#9a9a94; --line:#2c2c2a; --card:#1e1e1c; --accent:#8fb0ff; --tag:#23283a; --warn:#f0c46a; --warnbg:#33290f; } }
:root[data-theme="dark"] { --bg:#161615; --fg:#ececea; --muted:#9a9a94; --line:#2c2c2a; --card:#1e1e1c; --accent:#8fb0ff; --tag:#23283a; --warn:#f0c46a; --warnbg:#33290f; }
* { box-sizing: border-box; }
body { margin:0; background:var(--bg); color:var(--fg); font:15px/1.45 system-ui, -apple-system, "Segoe UI", sans-serif; }
main { max-width:1100px; margin:0 auto; padding:24px 16px 48px; }
h1 { font-size:22px; margin:0 0 4px; }
p.sub { margin:0 0 18px; color:var(--muted); }
.bar { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px; }
input[type=search] { flex:1 1 320px; min-width:0; padding:10px 12px; font-size:16px; border:1px solid var(--line); border-radius:8px; background:var(--card); color:var(--fg); }
.tabs button { padding:9px 12px; border:1px solid var(--line); background:var(--card); color:var(--fg); border-radius:8px; cursor:pointer; font-size:14px; }
.tabs button[aria-selected=true] { border-color:var(--accent); color:var(--accent); font-weight:600; }
.count { color:var(--muted); font-size:13px; margin:6px 0 10px; }
.wrap { overflow-x:auto; border:1px solid var(--line); border-radius:8px; background:var(--card); }
table { border-collapse:collapse; width:100%; font-size:13.5px; }
th, td { text-align:left; padding:7px 10px; border-bottom:1px solid var(--line); vertical-align:top; }
th { position:sticky; top:0; background:var(--card); font-weight:600; color:var(--muted); }
td code, .mono { font-family:ui-monospace, SFMono-Regular, Consolas, monospace; font-size:12.5px; word-break:break-all; }
a { color:var(--accent); text-decoration:none; } a:hover { text-decoration:underline; }
.tag { display:inline-block; padding:1px 7px; border-radius:10px; background:var(--tag); font-size:12px; white-space:nowrap; }
.tag.placeholder, .tag.unmatched { background:var(--warnbg); color:var(--warn); }
.hint { color:var(--muted); font-size:13px; margin-top:14px; }
</style>
</head>
<body>
<main>
  <h1>Habbo Classic name search</h1>
  <p class="sub">Build <code>55_classic-js-806140824ba8</code>: classes, member hashes and network messages, with their AIR 15 counterparts.</p>
  <div class="bar">
    <input id="q" type="search" placeholder="Class name, _i/_r hash, minified binding, header ID, AIR 15 path…" autofocus>
    <div class="tabs" role="tablist">
      <button role="tab" data-t="classes" aria-selected="true">Classes</button>
      <button role="tab" data-t="members" aria-selected="false">Members</button>
      <button role="tab" data-t="messages" aria-selected="false">Messages</button>
    </div>
  </div>
  <div class="count" id="count"></div>
  <div class="wrap"><table id="t"></table></div>
  <p class="hint">Search is case-insensitive and matches any column; several words must all match. Up to 300 rows are shown.
  <code>Unk…</code> names are placeholders; <code>class_N</code> / <code>var_N</code> are AIR 15 FFDec labels.</p>
</main>
<script>
const D = __DATA__;
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const link = (p, text) => p ? `<a href="${D.base}/${p}" target="_blank" rel="noopener">${esc(text)}</a>` : esc(text);
const air = p => p ? `<code>${esc(p)}</code>` : '';
const V = {
  classes: { head: ['Name', 'Obfuscated', 'Binding', 'Status', 'Members', 'AIR 15 source'], rows: D.classes,
    cell: r => [link(r[3], r[0]), `<code>${esc(r[1])}</code>`, `<code>${esc(r[2])}</code>`, `<span class="tag ${r[5]}">${r[5]}</span>`, r[6], air(r[4])] },
  members: { head: ['Hash', 'Name'], rows: D.members, cell: r => [`<code>${esc(r[0])}</code>`, `<code>${esc(r[1])}</code>`] },
  messages: { head: ['Dir', 'ID', 'Name', 'Parser', 'Structure / payload', 'AIR 15 ID', 'AIR 15 source'], rows: D.messages,
    cell: r => [r[0] === 'i' ? 'in' : 'out', r[1], `<code>${esc(r[2])}</code>`, `<code>${esc(r[3])}</code>`, `<span class="mono">${esc(r[4])}</span>`, r[5], air(r[6])] },
};
for (const v of Object.values(V)) v.text = v.rows.map(r => r.join(' ').toLowerCase());
let tab = 'classes';
try { tab = localStorage.getItem('hcs-tab') || tab; } catch {}
const q = document.getElementById('q'), t = document.getElementById('t'), count = document.getElementById('count');
function render() {
  const v = V[tab], words = q.value.toLowerCase().split(/\s+/).filter(Boolean);
  const hits = [];
  for (let i = 0; i < v.rows.length && hits.length < 300; i++) if (words.every(w => v.text[i].includes(w))) hits.push(v.rows[i]);
  let total = 0; if (words.length) for (const s of v.text) { if (words.every(w => s.includes(w))) total++; } else total = v.rows.length;
  count.textContent = `${total.toLocaleString()} of ${v.rows.length.toLocaleString()} ${tab}` + (total > 300 ? ' (first 300 shown)' : '');
  t.innerHTML = '<thead><tr>' + v.head.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>' +
    hits.map(r => '<tr>' + v.cell(r).map(c => `<td>${c}</td>`).join('') + '</tr>').join('') + '</tbody>';
}
document.querySelectorAll('.tabs button').forEach(b => {
  b.setAttribute('aria-selected', String(b.dataset.t === tab));
  b.onclick = () => { tab = b.dataset.t; try { localStorage.setItem('hcs-tab', tab); } catch {}
    document.querySelectorAll('.tabs button').forEach(x => x.setAttribute('aria-selected', String(x === b))); render(); };
});
const h = decodeURIComponent(location.hash.slice(1)); if (h) q.value = h;
let timer; q.oninput = () => { clearTimeout(timer); timer = setTimeout(render, 120); };
render();
</script>
</body>
</html>
"""
os.makedirs(os.path.dirname(os.path.abspath(HTML)), exist_ok=True)
open(HTML, 'w', encoding='utf-8').write(page.replace('__DATA__', data.replace('</', '<\\/')))
print('search page', HTML, f'{os.path.getsize(HTML) / 1e6:.1f} MB', len(classes), 'classes', len(members), 'members', len(messages), 'messages')

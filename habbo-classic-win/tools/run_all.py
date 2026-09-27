"""Runs the whole pipeline on a Habbo Classic build.

usage:
  python run_all.py --zip HabboClassicWin.zip --air15 <air15_scripts_dir> --out <out_dir> [--previous <old_out_dir>]

<air15_scripts_dir> is the FFDec output of AIR 15, i.e.
habbo_air_15_decompiled_deobfuscated/03_sorgenti_e_asset/HabboAir/scripts.

The output directory gets the same layout as this repository:
02_app_estratto, 03_asset_hab, 04_sorgenti_js, 05_sorgenti_per_classe, 06_report,
CHANGES_REPORT.md. With --previous, CHANGES_REPORT.md also lists the messages and
classes that changed since that earlier run.

Requirements: Node.js >= 20 (npx), Python >= 3.10."""
import argparse, os, shutil, subprocess, sys, zipfile, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
SCRIPTS = ['as3_inventory.py', 'js_inventory.mjs', 'match.py', 'finalize.py', 'deobf.mjs',
           'extract-hab.mjs', 'protocol.py', 'changes.py', 'package.json']

def run(cmd, cwd):
    print('>', ' '.join(cmd), flush=True)
    subprocess.run(cmd, cwd=cwd, check=True, shell=(os.name == 'nt' and cmd[0] in ('npx', 'npm')))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--zip', required=True)
    ap.add_argument('--air15', required=True)
    ap.add_argument('--out', required=True)
    ap.add_argument('--previous')
    a = ap.parse_args()
    out = os.path.abspath(a.out); air15 = os.path.abspath(a.air15)
    tools = os.path.join(out, 'tools'); work = os.path.join(tools, 'work')
    os.makedirs(work, exist_ok=True)
    for s in SCRIPTS: shutil.copy(os.path.join(HERE, s), tools)
    if not os.path.isdir(os.path.join(tools, 'node_modules')): run(['npm', 'install', '--silent'], tools)

    # 1. unpack the zip (paths inside use backslashes) and hash every file
    orig = os.path.join(out, '01_originale')
    rep = os.path.join(out, '06_report'); os.makedirs(rep, exist_ok=True)
    with zipfile.ZipFile(a.zip) as z, open(os.path.join(rep, 'SHA256_originale.txt'), 'w') as h:
        for i in z.infolist():
            name = i.filename.replace('\\', '/')
            if name.endswith('/'): continue
            dst = os.path.join(orig, name); os.makedirs(os.path.dirname(dst), exist_ok=True)
            data = z.read(i); open(dst, 'wb').write(data)
            h.write(f'{hashlib.sha256(data).hexdigest()}  ./{name}\n')

    # 2. app.asar, HAB assets, formatted bundle
    app = os.path.join(out, '02_app_estratto')
    run(['npx', '--yes', '@electron/asar', 'extract', os.path.join(orig, 'resources', 'app.asar'), app], tools)
    run(['node', 'extract-hab.mjs', os.path.join(app, 'client'), os.path.join(out, '03_asset_hab')], tools)
    src = os.path.join(out, '04_sorgenti_js'); os.makedirs(src, exist_ok=True)
    shutil.copy(os.path.join(app, 'client', 'habbo-air', 'HabboAirLauncher.app.js'), os.path.join(src, 'HabboAirLauncher.min.js'))
    pretty = os.path.join(src, 'HabboAirLauncher.pretty.js')
    with open(pretty, 'w', encoding='utf-8') as fh:
        subprocess.run(['npx', 'prettier', '--no-config', '--print-width', '110', os.path.join(src, 'HabboAirLauncher.min.js')],
                       cwd=tools, check=True, stdout=fh, shell=(os.name == 'nt'))

    # 3. name recovery
    run([sys.executable, 'as3_inventory.py', air15, 'work/as3.json'], tools)
    run(['node', '--max-old-space-size=8192', 'js_inventory.mjs', pretty, 'work/js.json'], tools)
    run([sys.executable, 'match.py'], tools)
    run([sys.executable, 'finalize.py'], tools)

    # 4. rewrite, split, reports
    per_class = os.path.join(out, '05_sorgenti_per_classe')
    shutil.rmtree(per_class, ignore_errors=True)
    run(['node', '--max-old-space-size=12288', 'deobf.mjs', pretty, 'work/final_map.json',
         os.path.join(src, 'HabboAirLauncher.deobf.js'), per_class], tools)
    for f, t in (('classi.csv', 'classes.csv'), ('membri.csv', 'members.csv'), ('final_map.json', 'name_map.json')):
        shutil.copy(os.path.join(work, f), os.path.join(rep, t))
    registry = next(os.path.join(dp, f) for dp, _, fs in os.walk(os.path.join(air15, 'com', 'sulake', 'habbo', 'communication'))
                    for f in fs if f.endswith('.as') and '_composers[' in open(os.path.join(dp, f), encoding='utf-8', errors='replace').read())
    run([sys.executable, 'protocol.py', rep, registry], tools)
    run([sys.executable, 'changes.py', out] + ([os.path.abspath(a.previous)] if a.previous else []), tools)
    print('done:', out)

if __name__ == '__main__':
    main()

# habbo-decompiled

Decompiled and deobfuscated **Habbo Classic for Windows**: build
`55_classic-js-806140824ba8`, app version 1.0.55, built 25 September 2026.
Extracted on 27 September 2026 from `HabboClassicWin.zip`
(SHA-256 `5fe2d203ec900f056bb65ecbd0ae8ffdff4d9bb7bf2fb95a858ead5be95b1696`).

Everything is in [`habbo-classic-win/`](habbo-classic-win/). The original binaries
(`Habbo.exe`, Chromium `.pak`/`.dll` files) are **not** included, only what was
extracted and reconstructed from them.

- [What this build is](#what-this-build-is)
- [Repository layout](#repository-layout)
- [Where to start reading](#where-to-start-reading)
- [The HAB asset format](#the-hab-asset-format)
- [How the obfuscation works](#how-the-obfuscation-works)
- [How names were recovered](#how-names-were-recovered)
- [Results](#results)
- [Naming conventions in the output](#naming-conventions-in-the-output)
- [Limitations](#limitations)
- [Electron host notes](#electron-host-notes)
- [Reproducing the pipeline](#reproducing-the-pipeline)
- [Further documents](#further-documents)

---

## What this build is

It is no longer an Adobe AIR/Flash client. The package is an **Electron 41.1.0**
app (`habbo-classic-native`) that loads a port of the AS3 client to **JavaScript**,
rendered with **Pixi.js** (WebGL or WebGPU). The release manifest declares protocol
`FLASH29`.

| Piece | Where it lives |
|---|---|
| Electron main process | `Main.mjs`, `Session.mjs`, `Preload.cjs`, `Hotels.json` (plain, not obfuscated) |
| Whole game client | one esbuild bundle, `client/habbo-air/HabboAirLauncher.app.js` (9.2 MB, 5,222 classes) |
| Assets (images, XML, sounds, fonts) | 38 proprietary `.hab` bundles, one for each old SWF module |

There is no bytecode to decompile. The real work is **recovering the names**, which
were replaced with hashes.

## Repository layout

```
habbo-classic-win/
├── 02_app_estratto/          app.asar unpacked, as shipped
│   ├── Main.mjs, Session.mjs, Preload.cjs, Hotels.json, package.json
│   └── client/
│       ├── habbo-air/        index.html, HabboAirLauncher.app.js, configs
│       ├── generated/*.hab   28 module bundles (habbo-catalog-com.hab, ...)
│       └── local_include/*.hab
├── 03_asset_hab/             every .hab decoded: 3,920 files + _index.json per bundle
├── 04_sorgenti_js/
│   ├── HabboAirLauncher.min.js      original bundle (byte-identical)
│   ├── HabboAirLauncher.pretty.js   formatted with Prettier (380k lines)
│   └── HabboAirLauncher.deobf.js    formatted + recovered names  ← main result
├── 05_sorgenti_per_classe/   one file per class, placed at its AS3 package path
│   ├── com/sulake/...        3,308 classes matched to AIR 15 sources
│   ├── package_N/...         matched classes whose AIR 15 package is an FFDec label
│   ├── _runtime_e_librerie/  225 readable-name classes not in AS3 (Pixi.js, Flash emulation)
│   └── _non_abbinate/        1,689 hashed classes with no match
├── 06_report/
│   ├── mappa_nomi.json       complete name map (classes, members, paths)
│   ├── classi.csv            every class: hash, minified binding, final name, AIR 15 source, match method
│   ├── membri.csv            every recovered member: hash → name
│   └── SHA256_originale.txt  hashes of all 75 original files
├── tools/                    the scripts that produced all of the above
├── README.md                 technical notes (Italian)
├── NOVITA_AIR15_CLASSIC.md   changes vs AIR 15 (Italian)
└── CHANGES_AIR15_CLASSIC.md  changes vs AIR 15 (English)
```

Folder names are in Italian: *estratto* = extracted, *sorgenti* = sources,
*per classe* = per class, *non abbinate* = unmatched, *runtime e librerie* =
runtime and libraries, *mappa nomi* = name map, *classi/membri* = classes/members.

## Where to start reading

1. **`05_sorgenti_per_classe/com/sulake/habbo/...`**: browse by feature (catalog,
   navigator, roomevents/Wired, communication...). Each file starts with a header
   that names the line in the full bundle and the matching AIR 15 `.as` file.
2. **`04_sorgenti_js/HabboAirLauncher.deobf.js`**: the whole client in one file.
   Every matched class carries an inline comment such as
   `/* AIR 15: com/sulake/habbo/communication/enum/HabboCommunicationEvent.as */`.
3. Startup and platform code have readable names and are easy to find with grep:
   `productionStartupArguments`, `initializeGraphicsApplication`,
   `installRendererSettings`, `HabboAirLaunchStage`, `installKeyboardBridge`.

Example, before and after:

```js
// before (pretty.js)
var g = class {
  static { n(this, "_ic8436977028a93"); }
  static _rf059d43b270cdb = "HABBO_CONNECTION_EVENT_AUTHENTICATED";
  ...
// after (deobf.js)
var HabboCommunicationEvent = /* AIR 15: com/sulake/habbo/communication/enum/HabboCommunicationEvent.as */ class {
  static { n(this, "HabboCommunicationEvent"); }
  static AUTHENTICATED = "HABBO_CONNECTION_EVENT_AUTHENTICATED";
```

## The HAB asset format

Reverse-engineered from the loader inside the bundle, and implemented in
[`tools/extract-hab.mjs`](habbo-classic-win/tools/extract-hab.mjs).

| Offset | Size | Field |
|---|---|---|
| 0 | 4 | magic `HAB\0` |
| 4 | 2 | version (u16 LE) = 1 |
| 6 | 2 | flags (u16 LE) = 1 |
| 8 | 4 | compressed index length (u32 LE) |
| 12 | 4 | uncompressed index length (u32 LE) |
| 16 | 4 | data section length (u32 LE) |
| 20 | … | zlib-compressed JSON index |
| … | … | data section |

The index is `{format:"hab", version:1, name, manifest, aliases, definitions,
unresolvedAssets, entries:[…]}`. Each entry has `name`, `mimeType`, `offset`,
`storedLength`, `originalLength`, optional `params` and `compression: "deflate"`.
The extractor checks every length, and the files in `03_asset_hab/` come out with
extensions set from their MIME type (2,813 PNG, 943 XML, 109 TXT, 21 MP3, 9 TTF, …).

At runtime the client rewrites every `.swf` URL to `.hab`, so the bundles are
one-to-one replacements for the old SWF modules.

## How the obfuscation works

- Every Habbo class is renamed to `_i` + 14 hex digits (`_ic8436977028a93`).
- Every member (field, method, getter, static) is renamed to `_r` + 14 hex digits.
- **The hash depends only on the original name**: the same name produces the same
  hash everywhere in the bundle. It is not a plain MD5/SHA-1/SHA-256/SHA-3/BLAKE2 of
  the name (tested), so it is most likely keyed and cannot be inverted.
- Public API names are left readable: `parse`, `flush`, `dispose`,
  `getMessageArray`, the Flash-like API (`readInteger`, `addEventListener`, …),
  334 classes, and every third-party library.
- On top of this, esbuild minifies local and module-level bindings (`g`, `Wc`, `nE`, …).
- Static members are emitted sorted by hash, so member order cannot be used for matching.

## How names were recovered

The reference is the AIR 15 client (`WIN63-202609091217-117204808`), decompiled with
FFDec: it is the same code base in AS3. Recovery is an iterative matching process:

1. **Inventories.** [`as3_inventory.py`](habbo-classic-win/tools/as3_inventory.py)
   and [`js_inventory.mjs`](habbo-classic-win/tools/js_inventory.mjs) (Babel) extract
   for every class: members with kind and arity, string literals, static constant
   values, superclass, `super(...)` arguments, and for every method the sequence of
   member accesses and class references. FFDec's `class_N` labels repeat across
   packages, so every AS3 reference is package-qualified.
2. **Class matching** ([`match.py`](habbo-classic-win/tools/match.py)), repeated until
   nothing new is found:
   - IDF-weighted similarity of shared strings, constant values, already-resolved
     member names and already-matched superclasses. Only features the other side
     could express are counted;
   - **reference alignment**: inside already-matched method pairs, the sequences of
     class references (`new X(...)`, static access) are aligned, and the unknown JS
     class sitting where an AS3 class is referenced gets a vote. This is how most
     network events are found, through the handler that registers them;
   - **event ↔ parser chains** through `super(callback, ParserClass)`, in both directions;
   - **parser fingerprints**: the sequence of `readInteger` / `readString` /
     `readBoolean` calls in `parse()`, when it is unique on both sides.
3. **Member matching** inside each class pair: equal constant values, identical
   readable names, method string sets, a unique signature (kind + static + arity),
   then **body alignment**: the member-access sequences of paired methods
   (constructors included) are aligned, and each hash sitting in the position of an
   AS3 name gets a vote.
4. **Global resolution.** Because a hash is a function of the name, a name is
   accepted only when the majority of votes supports it and hash ↔ name is
   one-to-one across the whole bundle.
5. **Consistency filter** ([`finalize.py`](habbo-classic-win/tools/finalize.py)):
   class matches where fewer than a third of the resolved members exist in the AS3
   class are discarded (11), and so are names that clash with a readable member of
   the same class (16).
6. **Rewrite** ([`deobf.mjs`](habbo-classic-win/tools/deobf.mjs)): minified class
   bindings are renamed through Babel scope analysis (no collisions), recovered
   `_i`/`_r` hashes are substituted, the AIR 15 source comment is added, and the
   bundle is split into one file per class. The output passes `node --check`.

## Results

| | Value |
|---|---|
| Classes in the bundle | 5,222 (4,888 hashed, 334 readable) |
| Classes matched to an AIR 15 source | 3,277 |
| Class hashes replaced | 3,170 |
| Distinct member hashes | 27,326 |
| Member hashes recovered | 13,564 (9,585 real names, 3,979 FFDec labels) |
| `_r` hash occurrences in the code | 196,763 → 75,144 (−62%) |
| Network events / parsers / composers matched | 348 of 609 / 338 of 579 / 120 of 586 |

**Precision check.** Of the 1,921 matched classes with at least 3 resolved members,
1,909 (99.4%) have more than half of those members under the same name in the AS3
class. The flagged matches were removed automatically, not reviewed by hand.

Coverage by area (share of AIR 15 classes matched):

| Area | Matched |
|---|---|
| `habbo/roomevents` (Wired) | 84% |
| `habbo/ui` | 81% |
| `habbo/navigator` | 77% |
| `habbo/catalog` | 72% |
| `habbo/room` | 64% |
| `habbo/communication` | 51% |
| `core` (windowing, runtime, largely rewritten by the port) | 42% |

## Naming conventions in the output

- **Real names** (`HabboCommunicationEvent`, `AUTHENTICATED`, `readAllowedSources`)
  are the original names, taken from AIR 15.
- **FFDec labels** (`class_N`, `var_N`, `method_N`, `const_N`, `package_N`) are used
  where AIR 15 itself only has a label. They are not the original names, but they
  point straight at the matching line in the AIR 15 decompilation.
- **`Name$package`**: when two AS3 classes in different packages share a label, the
  package is added as a suffix, e.g. `class_1951$roomevents`.
- **Remaining `_iXXXXXXXXXXXXXX` / `_rXXXXXXXXXXXXXX`**: not recovered. They are
  left untouched on purpose, so they stay grep-able and consistent everywhere.

## Limitations

- About half of the member hashes remain unresolved, because the hash cannot be
  inverted and names only come from AIR 15.
- Network **composers** are hard to match: they are tiny and look alike, message IDs
  change between builds (only 100 events and 79 composers keep the same ID), and the
  registration order differs, so the registries cannot be aligned.
- Code written only for the port (Flash emulation, WebSocket layer) has no AS3
  counterpart. It stays hashed unless the name was left readable.
- Unmatched classes are not "new features": many are classes rewritten by the port.

## Electron host notes

From the plain `Main.mjs` / `Session.mjs`:

- the client only starts with `-server <hotel> -ticket <sso>` passed by the Habbo launcher;
- `Hotels.json` lists 14 hotels, including internal environments `hhs1`, `hhs2`,
  `d63`, `dev`, `duke` (`*.varoke.net`);
- DevTools (F12 / Ctrl+Shift+I) are enabled only on `hhs1`, `hhs2` and `d63`;
- remote requests are limited to the hotel site, the WebSocket origin and a fixed
  allow-list (images.habbo.com, habbo-stories S3 buckets, i.ibb.co, i.imgur.com), and
  never for scripts, frames or objects;
- the game connects over a binary WebSocket with the required subprotocol
  `habbo-classic`, optionally through `/habbo-air-tcp-proxy/`.

## Reproducing the pipeline

Requirements: Node.js ≥ 20, Python ≥ 3.10, the original `HabboClassicWin.zip`, and
the AIR 15 AS3 sources decompiled with FFDec.

```bash
cd habbo-classic-win/tools
npm install                      # @babel/*, prettier
npx @electron/asar extract <zip>/resources/app.asar ../02_app_estratto
node extract-hab.mjs ../02_app_estratto/client ../03_asset_hab
npx prettier --no-config --print-width 110 ../02_app_estratto/client/habbo-air/HabboAirLauncher.app.js > ../04_sorgenti_js/HabboAirLauncher.pretty.js
python as3_inventory.py <air15>/03_sorgenti_e_asset/HabboAir/scripts work/as3.json
node --max-old-space-size=8192 js_inventory.mjs ../04_sorgenti_js/HabboAirLauncher.pretty.js work/js.json
python match.py
python finalize.py
cd ..
node --max-old-space-size=12288 tools/deobf.mjs 04_sorgenti_js/HabboAirLauncher.pretty.js tools/work/final_map.json 04_sorgenti_js/HabboAirLauncher.deobf.js 05_sorgenti_per_classe
```

The whole run takes about 5 minutes. Intermediate files (`tools/work/`) are not
committed.

## Further documents

- [`CHANGES_AIR15_CLASSIC.md`](habbo-classic-win/CHANGES_AIR15_CLASSIC.md): what
  changed compared to AIR 15 (WebSocket transport, WebGL/WebGPU renderer choice, HAB
  assets, features not yet ported, new config keys). An Italian version is in
  [`NOVITA_AIR15_CLASSIC.md`](habbo-classic-win/NOVITA_AIR15_CLASSIC.md).
- [`habbo-classic-win/README.md`](habbo-classic-win/README.md): the original technical
  notes, in Italian.

---

This repository is for research and interoperability study. Habbo and all related
code and assets are property of Sulake Oy.

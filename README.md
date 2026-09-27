# habbo-decompiled

Decompiled and deobfuscated **Habbo Classic for Windows**: build
`55_classic-js-806140824ba8`, app version 1.0.55, built 25 September 2026.
Extracted on 27 September 2026 from `HabboClassicWin.zip`
(SHA-256 `5fe2d203ec900f056bb65ecbd0ae8ffdff4d9bb7bf2fb95a858ead5be95b1696`).

Everything is in [`habbo-classic-win/`](habbo-classic-win/). The original binaries
(`Habbo.exe`, Chromium `.pak`/`.dll` files) and the packed `.hab` bundles are **not**
included: only the decompiled code and the decoded asset contents are.

- [What this build is](#what-this-build-is)
- [Repository layout](#repository-layout)
- [Where to start reading](#where-to-start-reading)
- [The HAB asset format](#the-hab-asset-format)
- [How the obfuscation works](#how-the-obfuscation-works)
- [How names were recovered](#how-names-were-recovered)
- [Results](#results)
- [Naming conventions in the output](#naming-conventions-in-the-output)
- [Network protocol table](#network-protocol-table)
- [Limitations](#limitations)
- [Electron host notes](#electron-host-notes)
- [Running the pipeline on a new build](#running-the-pipeline-on-a-new-build)
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
├── 02_app_estratto/          app.asar code, as shipped (packed .hab bundles omitted)
│   ├── Main.mjs, Session.mjs, Preload.cjs, Hotels.json, package.json
│   └── client/
│       ├── habbo-air/        index.html, HabboAirLauncher.app.js, configs
│       └── release-manifest.json
├── 03_asset_hab/             contents of the 38 .hab bundles, decoded: 3,920 files + _index.json per bundle
├── 04_sorgenti_js/
│   ├── HabboAirLauncher.min.js      original bundle (byte-identical)
│   ├── HabboAirLauncher.pretty.js   formatted with Prettier (380k lines)
│   └── HabboAirLauncher.deobf.js    formatted + recovered names  ← main result
├── 05_sorgenti_per_classe/   one file per class, placed at its AS3 package path
│   ├── com/sulake/...        classes matched to AIR 15 sources (3,366 files with package_N/)
│   ├── package_N/...         matched classes whose AIR 15 package is an FFDec label
│   ├── _runtime_and_libraries/  225 readable-name classes not in AS3 (Pixi.js, Flash emulation)
│   └── _unmatched/           1,631 classes with no match, under descriptive "Unk…" placeholder names
├── 06_report/
│   ├── PROTOCOL.md           network protocol table of this build (see below)
│   ├── protocol.csv / .json  the same, machine-readable
│   ├── name_map.json         complete name map (classes, members, placeholders, paths)
│   ├── classes.csv           every class: hash, minified binding, final name, AIR 15 source, match method
│   ├── members.csv           every recovered member: hash → name
│   └── SHA256_originale.txt  hashes of all 75 original files
├── tools/                    the scripts that produced all of the above (run_all.py runs everything)
├── CHANGES_REPORT.md         auto-generated comparison data (new keys, URLs, coverage)
├── README.md                 technical notes (Italian)
├── NOVITA_AIR15_CLASSIC.md   changes vs AIR 15 (Italian)
└── CHANGES_AIR15_CLASSIC.md  changes vs AIR 15 (English)
```

The numbered folder names are in Italian: *app estratto* = extracted app,
*sorgenti* = sources, *per classe* = per class.

## Where to start reading

1. **`05_sorgenti_per_classe/com/sulake/habbo/...`**: browse by feature (catalog,
   navigator, roomevents/Wired, communication...). Each file starts with a header
   that names the line in the full bundle and the matching AIR 15 `.as` file.
2. **`04_sorgenti_js/HabboAirLauncher.deobf.js`**: the whole client in one file.
   Every matched class carries an inline comment such as
   `/* AIR 15: com/sulake/habbo/communication/enum/HabboCommunicationEvent.as */`.
3. **`06_report/PROTOCOL.md`**: every network message with its header ID, name,
   parser reads and AIR 15 counterpart.
4. Startup and platform code have readable names and are easy to find with grep:
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
     `readBoolean` calls in `parse()`, when it is unique on both sides;
   - **composer fingerprints**: constructor arity and optional parameters, push-style
     or field-style payload, and field names known on both sides;
   - **composer call sites**: the argument types seen where the client creates a
     composer (`new X(true, "text", 5)`: boolean, string, number) are checked against
     the typed AS3 constructor (`param1:Boolean, param2:String, param3:int`). The
     candidates are limited to the composers that the already-matched sending class
     references in AIR 15.
3. **Member matching** inside each class pair: equal constant values, identical
   readable names, method string sets, a unique signature (kind + static + arity),
   then **body alignment**: the member-access sequences of paired methods
   (constructors included) are aligned, and each hash sitting in the position of an
   AS3 name gets a vote.
4. **Global resolution.** Because a hash is a function of the name, a name is
   accepted only when the majority of votes supports it and hash ↔ name is
   one-to-one across the whole bundle.
5. **Consistency filters** ([`finalize.py`](habbo-classic-win/tools/finalize.py)):
   - class matches where fewer than a third of the resolved members exist in the AS3
     class are discarded (11);
   - **kind check**: an event must match an event, a parser a parser and a composer a
     composer (7 discarded);
   - names that clash with a readable member of the same class are dropped (16).
6. **Placeholder names** for what is still unmatched (see below).
7. **Rewrite** ([`deobf.mjs`](habbo-classic-win/tools/deobf.mjs)): minified class
   bindings are renamed through Babel scope analysis (no collisions), recovered
   `_i`/`_r` hashes are substituted, the AIR 15 source comment is added, and the
   bundle is split into one file per class. The output passes `node --check`.

## Results

| | Value |
|---|---|
| Classes in the bundle | 5,222 (4,888 hashed, 334 readable) |
| Classes matched to an AIR 15 source | 3,335 |
| Class hashes replaced with a recovered name | 3,228 |
| Class hashes replaced with a placeholder | 1,616 |
| Distinct member hashes | 27,326 |
| Member hashes recovered | 13,573 (9,586 real names, 3,987 FFDec labels) |
| `_r` hash occurrences in the code | 196,763 → 75,112 (−62%) |
| Incoming events matched | 347 of 602 |
| Parsers matched | 334 of 572 |
| Outgoing composers matched | 183 of 580 |

**Precision check.** Of the 1,923 matched classes with at least 3 resolved members,
1,911 (99.4%) have more than half of those members under the same name in the AS3
class. Every matched network message also resolves to a registered AIR 15 message of
the same kind (0 inconsistencies). The flagged matches were removed automatically,
not reviewed by hand.

**Reproducibility.** Running `tools/run_all.py` from scratch produces byte-identical
output.

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
- **`Unk…` placeholders**: unmatched classes get a name derived from their shape,
  always starting with `Unk` and ending with the first 6 digits of the hash. The
  original obfuscated name stays in the file header and in `06_report/classes.csv`.

  | Pattern | Meaning |
  |---|---|
  | `UnkMessageEvent_<Parser>` / `UnkMessageEvent_<hash6>` | incoming message event, named after its parser when that one is known |
  | `UnkMessageParser_<reads>_<hash6>` | parser; `<reads>` spells the reads in order: `I` int, `S` string, `B` boolean, `H` short, `Y` byte, `F` float, `D` double, `L` long (a trailing `_` means truncated, `empty` means no reads) |
  | `UnkMessageComposer_<n>args_<hash6>` | outgoing composer with an n-argument constructor |
  | `Unk<Super>Subclass_<hash6>` | subclass of a known class, e.g. `UnkCatalogWidgetSubclass_…` |
  | `UnkSubclassOf_class_N_<hash6>` | subclass of a class known only by its FFDec label |
  | `UnkConstants_<hash6>` | only static constants |
  | `UnkInterface_<hash6>` | no members (interface markers) |
  | `UnkClass_<hash6>` | anything else |

- **Remaining `_rXXXXXXXXXXXXXX`**: member names not recovered. They are left
  untouched on purpose, so they stay grep-able and consistent everywhere.

## Network protocol table

[`06_report/PROTOCOL.md`](habbo-classic-win/06_report/PROTOCOL.md), generated by
[`tools/protocol.py`](habbo-classic-win/tools/protocol.py) from the client's own
registries (`this.events[ID] = …`, `this.composers[ID] = …`), lists every message of
this build:

- **incoming**: header ID, event name, parser, the reads the parser performs in
  order, the AIR 15 class and its AIR 15 header ID;
- **outgoing**: header ID, composer name, constructor arity, the AS3 argument types,
  and the AIR 15 class and header ID.

The *AIR 15 ID → this build's ID* pairs are what you need to move a server emulator
from AIR 15 to this build. No message kept its header ID. The same data is in
`protocol.csv` and `protocol.json`.

## Limitations

- About half of the member hashes remain unresolved, because the hash cannot be
  inverted and names only come from AIR 15.
- Composers are still the hardest part (183 of 580): many are identical one-argument
  classes, and the registries cannot be aligned by header ID or by order.
- Code written only for the port (Flash emulation, WebSocket layer) has no AS3
  counterpart, so it keeps a placeholder unless the name was left readable.
- Unmatched classes are not "new features": many are classes rewritten by the port.
- Parser reads are listed only for `parse()` itself; reads inside nested data
  classes are not expanded.

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

## Running the pipeline on a new build

[`tools/run_all.py`](habbo-classic-win/tools/run_all.py) runs everything in one go:
unzip, `app.asar` extraction, HAB decoding, formatting, name recovery, rewrite,
per-class split, protocol table and changes report.

Requirements: Node.js ≥ 20, Python ≥ 3.10, the `HabboClassicWin.zip` of the build,
and the AIR 15 AS3 sources decompiled with FFDec (the `scripts` folder).

```bash
cd habbo-classic-win/tools
python run_all.py --zip HabboClassicWin.zip --air15 <air15>/03_sorgenti_e_asset/HabboAir/scripts --out ../../new-build
```

To also see what changed since an earlier build, point `--previous` at that earlier
output directory (here, this repository's `habbo-classic-win/`):

```bash
python run_all.py --zip HabboClassicWin.zip --air15 <air15>/03_sorgenti_e_asset/HabboAir/scripts --out ../../new-build --previous ..
```

The output has the same layout as `habbo-classic-win/`, plus a `CHANGES_REPORT.md`
that lists:

- build information (release, version, protocol, build time, counts);
- readable-name classes that do not exist in AIR 15;
- configuration/localization keys and URLs/paths that do not exist in AIR 15;
- match coverage by area;
- with `--previous`: messages added and removed, how many header IDs changed, and
  AIR 15 classes newly matched or no longer matched.

A full run takes about 4 minutes. `npm install` runs automatically the first time.
Intermediate files (`tools/work/`) are not committed.

The individual steps can also be run by hand from `tools/`: `as3_inventory.py`,
`js_inventory.mjs`, `match.py`, `finalize.py`, `deobf.mjs`, `protocol.py` and
`changes.py`. Each script documents its arguments at the top.

## Further documents

- [`CHANGES_AIR15_CLASSIC.md`](habbo-classic-win/CHANGES_AIR15_CLASSIC.md): what
  changed compared to AIR 15 (WebSocket transport, WebGL/WebGPU renderer choice, HAB
  assets, features not yet ported, new config keys). An Italian version is in
  [`NOVITA_AIR15_CLASSIC.md`](habbo-classic-win/NOVITA_AIR15_CLASSIC.md).
- [`CHANGES_REPORT.md`](habbo-classic-win/CHANGES_REPORT.md): the auto-generated data
  behind that comparison.
- [`habbo-classic-win/README.md`](habbo-classic-win/README.md): the original technical
  notes, in Italian.

---

This repository is for research and interoperability study. Habbo and all related
code and assets are property of Sulake Oy.

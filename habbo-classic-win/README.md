# Habbo Classic (Windows): decompilazione e deoffuscamento

> Documentazione completa e aggiornata in inglese nel README alla radice del repository.

Estratto il 27 settembre 2026 da `HabboClassicWin.zip`
(SHA-256 `5fe2d203ec900f056bb65ecbd0ae8ffdff4d9bb7bf2fb95a858ead5be95b1696`).

## Che cos'è questo pacchetto

Non è più un client AIR/Flash: è un'app **Electron 41.1.0** (`Habbo.exe`) che carica
un porting in JavaScript del client AS3. L'app si chiama `habbo-classic-native` 1.0.55,
release `55_classic-js-806140824ba8`, protocollo `FLASH29`. Il rendering usa Pixi.js.

Non c'è bytecode da decompilare: tutto il codice del client è in un unico bundle
esbuild minificato, `client/habbo-air/HabboAirLauncher.app.js` (9,2 MB). Gli asset
che negli SWF stavano nei tag binari sono ora in bundle `.hab`, un formato proprietario.

L'offuscamento è diverso da quello di AIR:

- ogni classe ha un nome hash `_i` + 14 cifre esadecimali (`_ic8436977028a93`);
- ogni membro ha un nome hash `_r` + 14 cifre esadecimali (`_rf059d43b270cdb`);
- l'hash dipende **solo dal nome originale**: lo stesso nome dà lo stesso hash in tutto
  il bundle. Non è un MD5/SHA semplice del nome (verificato), quindi non è invertibile;
- restano in chiaro le API pubbliche (`parse`, `flush`, `getMessageArray`, `dispose`...),
  334 classi con nome reale e le librerie (Pixi.js).

## Struttura

| Cartella | Contenuto |
|---|---|
| `01_originale/` | Contenuto integrale dello zip (75 file). Hash in `06_report/SHA256_originale.txt`. |
| `02_app_estratto/` | `resources/app.asar` estratto: processo principale Electron (`Main.mjs`, `Session.mjs`, `Preload.cjs`), `Hotels.json`, bundle JS e file `.hab`. |
| `03_asset_hab/` | I 38 bundle `.hab` decodificati: 3.920 asset (2.813 PNG, 943 XML, 21 MP3, 9 TTF...) più l'indice `_index.json` di ciascuno. |
| `04_sorgenti_js/` | Il bundle in tre stadi: `min` (originale), `pretty` (formattato), `deobf` (nomi recuperati). |
| `05_sorgenti_per_classe/` | Un file per classe, collocato nel percorso del sorgente AS3 corrispondente. È il punto di partenza per leggere il client. |
| `06_report/` | Mappa dei nomi (`name_map.json`), CSV di classi e membri (`classes.csv`, `members.csv`), tabella del protocollo (`PROTOCOL.md`), hash dei file originali. |
| `tools/` | Gli script usati, rieseguibili (`npm install` in `tools/` per le dipendenze). |

## Come è stata fatta

1. **Estrazione.** Zip → `app.asar` estratto con `@electron/asar`.
2. **Bundle HAB** (`tools/extract-hab.mjs`). Formato ricavato dal loader nel bundle:
   header di 20 byte (`HAB\0`, versione u16 = 1, flag u16 = 1, lunghezza indice compresso,
   lunghezza indice decompresso, lunghezza dati, tutti little-endian), indice JSON
   compresso zlib, poi i dati; ogni voce può essere `deflate` o grezza. Ogni lunghezza
   dichiarata è verificata in estrazione.
3. **Formattazione** del bundle con Prettier. Il risultato è identico nel comportamento.
4. **Recupero dei nomi** usando come riferimento i sorgenti di AIR 15
   (`habbo_air_15_decompiled_deobfuscated`), che sono lo stesso client in AS3:
   - `tools/as3_inventory.py` e `tools/js_inventory.mjs` inventariano le classi dei due
     lati: membri, arità, stringhe, costanti, superclassi, argomenti di `super(...)`,
     sequenza degli accessi ai membri e dei riferimenti a classi dentro ogni metodo;
   - `tools/match.py` abbina le classi e deduce la mappa globale hash → nome, a giri
     successivi finché non trova più nulla:
     - stringhe e costanti in comune, pesate per rarità (IDF);
     - nomi dei membri già risolti e superclassi già abbinate;
     - allineamento delle sequenze di accesso fra metodi abbinati: ogni hash che
       occupa la posizione di un nome AS3 riceve un voto;
     - allineamento dei riferimenti a classi (`new X(...)`, accessi statici) fra
       metodi abbinati: così si trovano soprattutto gli eventi di rete, dal gestore
       che li registra;
     - catena evento ↔ parser tramite `super(callback, ParserClass)`, in entrambi i sensi;
     - impronta dei parser: sequenza delle letture (`readInteger`, `readString`...);
   - un nome è accettato solo se la maggioranza dei voti lo sostiene e se l'hash e il
     nome si corrispondono uno a uno in tutto il bundle;
   - `tools/finalize.py` scarta gli abbinamenti di classe in cui meno di un terzo dei
     membri risolti esiste nella classe AS3 (11 casi) e i nomi che collidono con un
     membro in chiaro della stessa classe (16 casi).
5. **Riscrittura** (`tools/deobf.mjs`): i binding minificati delle classi prendono il
   nome della classe (rinominati con lo scope di Babel, senza collisioni), gli hash
   `_i`/`_r` risolti sono sostituiti, e ogni classe abbinata porta un commento
   `/* AIR 15: percorso/Classe.as */`. Il file risultante è stato verificato con
   `node --check`.

## Risultati

| | Valore |
|---|---|
| Classi nel bundle | 5.222 (4.888 con nome hash, 334 in chiaro) |
| Classi abbinate a un sorgente AIR 15 | 3.335 |
| Nomi di classe hash sostituiti | 3.228 con nome recuperato, 1.616 con nome segnaposto `Unk…` |
| Hash di membro distinti | 27.326 |
| Hash di membro risolti | 13.573 (9.586 con nome reale, 3.987 con l'etichetta FFDec `var_N`/`method_N`/`const_N` di AIR 15) |
| Occorrenze di hash `_r` nel codice | da 196.763 a 75.112 (−62%) |
| Eventi / parser / composer di rete abbinati | 347 su 602 / 334 su 572 / 183 su 580 |

**Verifica di precisione.** Su 1.921 classi abbinate con almeno 3 membri risolti, 1.909
hanno più della metà dei membri presenti con lo stesso nome nella classe AS3 (99,4%).
Il filtro automatico di `finalize.py` ha scartato 11 abbinamenti incoerenti; non è stato fatto un controllo manuale riga per riga.

### Dove sono i file in `05_sorgenti_per_classe/`

- `com/...`, `package_N/...`: 3.366 classi abbinate, allo stesso percorso di AIR 15
  (quindi `package_N` e `class_N` sono le etichette FFDec di AIR 15, utili per il
  confronto diretto con quei sorgenti);
- `_runtime_and_libraries/`: 225 classi con nome in chiaro non presenti in AS3 (Pixi.js e
  lo strato che emula le API Flash: `BitmapData`, `Sprite`, `Air32NativeTextRenderer`...);
- `_unmatched/`: 1.631 classi senza corrispondenza, con nome segnaposto `Unk…` (vedi il README principale in inglese). Sono soprattutto
  composer di rete (molto piccoli e privi di tratti distintivi) e classi riscritte
  nel porting.

### Nomi `class_N`, `var_N`, `method_N`, `const_N`

Dove AIR 15 stesso ha solo un'etichetta FFDec, la riscrittura usa quell'etichetta.
Non è il nome originale, ma collega il codice JS alla riga corrispondente dei sorgenti
AIR 15. Se due classi AS3 in package diversi hanno la stessa etichetta, il nome JS
prende il suffisso del package: `class_1951$roomevents`.

## Cosa non è stato possibile fare

- Invertire l'hash dei nomi: non è un hash semplice del nome, quindi i nomi arrivano
  solo dal confronto con AIR 15. Circa metà degli hash di membro resta com'è.
- Abbinare i composer di rete in modo sistematico: gli ID dei messaggi cambiano fra
  le build (solo 100 eventi e 79 composer hanno lo stesso ID fra AIR 15 e questa build)
  e l'ordine di registrazione è diverso, quindi i registri non si possono allineare.
- `Habbo.exe` e i `.pak` sono il runtime Electron/Chromium standard e non contengono
  codice del client.

## Note dal processo principale Electron

`02_app_estratto/Session.mjs` e `Main.mjs` sono in chiaro:

- il client accetta solo `-server <hotel> -ticket <sso>` passati dal launcher;
- `Hotels.json` elenca 14 hotel, fra cui gli ambienti interni `hhs1`, `hhs2`, `d63`,
  `dev`, `duke` (domini `varoke.net`);
- i DevTools (F12 / Ctrl+Shift+I) sono abilitati solo su `hhs1`, `hhs2` e `d63`;
- le richieste remote sono limitate all'origine del sito, a quella del websocket e a
  un elenco fisso (images.habbo.com, bucket S3 di habbo-stories, i.ibb.co, i.imgur.com),
  e mai per script, frame o object.

## Rieseguire

```
cd tools && npm install
node extract-hab.mjs ../02_app_estratto/client ../03_asset_hab
python as3_inventory.py <air15>/03_sorgenti_e_asset/HabboAir/scripts work/as3.json
node --max-old-space-size=8192 js_inventory.mjs ../04_sorgenti_js/HabboAirLauncher.pretty.js work/js.json
python match.py && python finalize.py
cd .. && node --max-old-space-size=12288 tools/deobf.mjs 04_sorgenti_js/HabboAirLauncher.pretty.js tools/work/final_map.json 04_sorgenti_js/HabboAirLauncher.deobf.js 05_sorgenti_per_classe
```

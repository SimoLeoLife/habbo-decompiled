# Novità di Habbo Classic (Windows) rispetto ad AIR 15

Confronto statico eseguito il 27 settembre 2026 fra
`habbo_air_15_decompiled_deobfuscated` e questa estrazione. Tutto quanto segue è
riscontrato nel codice del client: l'attivazione lato server e il comportamento in
gioco non sono stati verificati.

## Build confrontate

| | AIR 15 | Habbo Classic |
|---|---|---|
| Identificativo | `WIN63-202609091217-117204808` | `55_classic-js-806140824ba8` |
| Data di build | 9 settembre 2026 | 25 settembre 2026 (`builtAtMs` 1790316600224) |
| Versione applicativo | 1.0.31 | 1.0.55 (`habbo-classic-native`) |
| Runtime | Adobe AIR, SWF (AS3) | Electron 41.1.0, JavaScript (esbuild), Pixi.js |
| Protocollo | — | `FLASH29` (dichiarato nel `release-manifest.json`) |
| Codice del client | `HabboAir.swf`, 8.863 sorgenti | un bundle da 9,2 MB, 5.222 classi |
| Eventi di rete registrati | 603 | 602 |
| Composer di rete registrati | 586 | 586 |

## Come leggere il confronto

Qui non si confrontano due compilazioni dello stesso codice: il client è stato
**portato da AS3 a JavaScript**. Un diff riga per riga non ha senso, e il confronto
fra stringhe è dominato dagli artefatti del porting: 3.103 stringhe del codice Habbo
non esistono in AIR 15, ma la grande maggioranza sono messaggi d'errore aggiunti
dal porting ("… is not available.", "… has been disposed.") o serializzatori XML/CSS
riscritti.

L'analisi si basa quindi su:

- le **classi con nome in chiaro** del bundle che non esistono in AS3;
- le **stringhe con significato funzionale** assenti in AIR 15: chiavi di
  configurazione e localizzazione, URL, protocolli, chiavi di `localStorage`;
- il **codice di avvio**, che nel bundle ha nomi in chiaro.

Le corrispondenze di classe (3.277) vengono dal lavoro descritto nel `README.md`.

## La novità principale: il client non è più Flash

Il livello Flash è stato sostituito da uno strato che ne **emula le API** sopra Pixi.js:
`Sprite`, `BitmapData`, `ExtendedBitmapData`, `Matrix`, `Point`, `Rectangle`,
`Event`, `Transform`, `ColorMatrixFilter`, `BlurFilter`, `DropShadowFilter`,
`_GlowFilter` e un motore di testo proprio, `Air32NativeTextRenderer`. Il codice di
gioco porta ancora le firme AS3 (`readInteger`, `addEventListener`, `stageWidth`,
`getMessageArray`), quindi la corrispondenza con AIR 15 è diretta.

Dei nomi in chiaro assenti in AS3, 225 appartengono a Pixi.js o a questo strato di
emulazione. Quelli propri del client sono pochi:

| Classe | Ruolo |
|---|---|
| `HabboAirLaunchStage` | Lo "stage" Flash emulato: dimensioni, resize, bridge dei clic. |
| `ApplicationInitHook`, `RendererInitHook` | Agganci di avvio dell'applicazione Pixi. |
| `Air32NativeTextRenderer` | Resa del testo al posto di `flash.text`. |
| `AvatarRenderManager` | Gestore della resa degli avatar; in AIR 15 non esiste una classe con questo nome. |
| `HabboMap`, `SavedSearch`, `UnseenItemCategoryEnum` | Classi dati rimaste con nome in chiaro. |

## Connessione: WebSocket al posto del socket TCP

La classe che in AS3 era il socket (`_i28a7b58ffe1ff6`, erede di
`EventDispatcherWrapper`) ne riproduce l'interfaccia (`readInt`, `readShort`,
`writeBytes`, `endian`, `bytesAvailable`) ma usa un **WebSocket binario**:

- sottoprotocollo obbligatorio `habbo-classic`: se il server non lo negozia, la
  connessione viene chiusa con codice 1002 ("WebSocket subprotocol was not negotiated.");
- endpoint `wss://game-<hotel>.habbo.com:30001/websocket` (da `Hotels.json`);
- modalità alternativa via **`/habbo-air-tcp-proxy/`**: in quel caso il client aspetta
  dal server il messaggio di testo `__habbo_air_tcp_proxy_connected__` prima di
  considerarsi connesso;
- all'avvio `productionStartupArguments` converte la sessione del launcher negli
  argomenti che il client AIR riceveva da riga di comando:
  `connection.info.host.<xx>` = URL del WebSocket, `connection.info.port.<xx>` = `0`,
  `url.prefix`, `web.api`, `pocket.api`, `gamedata.hashes.url` e il nuovo
  **`gamedata.hashes2.url`** (`<sito>/gamedata/hashes2`), con `web_api_support=false`.
  Richiede `wss:` e `https:`, e accetta solo hotel `hh…`, `d63`, `dev`, `duke`.

## Scelta del renderer grafico (WebGL / WebGPU)

Nuovo nelle impostazioni ("Altre impostazioni", `OtherSettingsView`):

| Elemento | Dettaglio |
|---|---|
| Preferenza salvata | `localStorage["habbo.classic.graphics.renderer"]`, valori `webgl` (predefinito) o `webgpu`. |
| Applicazione | "Apply and reload": salva e ricarica la pagina. |
| Fallback | Se WebGPU non si inizializza, il client riparte in WebGL e mostra "WebGPU is unavailable. Using WebGL for this session." |
| Diagnostica | Nome della GPU (da `WEBGL_debug_renderer_info` o dall'adapter WebGPU) e FPS del ticker. |
| Nuove chiavi di localizzazione | `memenu.settings.graphics.renderer`, `.apply`, `.reload`, `.fallback`, `.save.failed`, `.active.webgl`, `.active.webgpu`. |

Senza WebGL né WebGPU il client si ferma con "This client requires WebGL or WebGPU."

## Funzioni non ancora portate

- **Video YouTube**: il widget mostra "<nome> playback is not supported in this client
  yet." e nasconde il lettore; le playlist restano vuote.
- **Discord Rich Presence**: in AIR 15 era un'estensione nativa (ANE); nel bundle
  restano solo 7 occorrenze testuali di "discord" e nessuna integrazione equivalente.

## Altre novità

| Chiave o stringa | Dove | Significato dal codice |
|---|---|---|
| `dev.environment.list`, `debug.auto.hotel.account` | flusso di login | Elenco di ambienti di sviluppo e account di test automatico. |
| `web.shop.relative.url`, `web.shop.subscription.relative.url` | catalogo | Rimandi al negozio web invece dell'acquisto nel client. |
| `phone.number.collect.countries` | `PhoneNumberCollectView` | Paesi per la raccolta del numero di telefono. |
| `targeted.offer.dialog.timeleft`, `catalog.alert.notenough.credits` | `TargetedOfferDialogView` | Timer e avviso di crediti insufficienti nelle offerte mirate. |
| `landing.view.community.roomcategory`, `landing.view.rewardbadge.groupbadge` | vista iniziale | Nuove configurazioni della landing. |
| `captcha()`, `tosAccept()`, `emailChange`, `passwordChange` | ponte verso il sito | Il client apre queste pagine del sito tramite il proprio ponte. |

## Cosa non è cambiato

- Le novità di AIR 15 ci sono tutte: **VariableFx**, con tutti e 14 i renderer
  (per esempio `ClassicProgressBarRenderer`, `BossHealthBarRenderer`,
  `RecolorableNumberDisplayRenderer`), e la **protezione dai raid** nel navigatore
  (`RaidProtectionSettingsController`, `…View`, `…Data`, `…Snapshot`, `lastRaidAtEpochSeconds`).
- Il numero di messaggi registrati è praticamente identico (602/586 contro 603/586).
  Gli ID dei messaggi invece sono diversi: solo 100 eventi e 79 composer hanno lo stesso
  ID, come accade normalmente fra build diverse.
- La struttura per moduli (`habbo-catalog-com`, `habbo-navigator-com`, …) ricalca gli SWF
  di AIR uno a uno.

## Copertura del confronto per area

Percentuale di classi AS3 di AIR 15 con una corrispondenza trovata nel bundle. Una
percentuale bassa **non** significa che la funzione sia stata rimossa: in quell'area
il porting ha riscritto di più (soprattutto `com/sulake/core`, cioè finestre e
runtime, sostituiti dall'emulazione Flash) oppure le classi sono troppo piccole per
essere riconosciute.

| Area | Abbinate |
|---|---|
| `habbo/roomevents` (Wired) | 399 / 476 (84%) |
| `habbo/ui` | 299 / 369 (81%) |
| `habbo/navigator` | 66 / 86 (77%) |
| `habbo/catalog` | 192 / 265 (72%) |
| `habbo/room` | 264 / 413 (64%) |
| `habbo/communication` | 130 / 254 (51%) |
| `core` | 154 / 370 (42%) |

## Evidenze navigabili

- Connessione: `05_sorgenti_per_classe/_non_abbinate/_i28a7b58ffe1ff6.js`.
- Avvio, renderer e sessione: `04_sorgenti_js/HabboAirLauncher.deobf.js`, funzioni
  `productionStartupArguments`, `initializeGraphicsApplication`,
  `installRendererSettings`, `showRendererFallbackNotice`, classe `HabboAirLaunchStage`.
- Corrispondenze complete JS ↔ AIR 15: `06_report/classi.csv`, `06_report/membri.csv`.

# What's new in Habbo Classic (Windows) compared to AIR 15

Static comparison performed on 27 September 2026 between
`habbo_air_15_decompiled_deobfuscated` and this extraction. Everything below was
found in the client code: server-side activation and in-game behaviour were not
verified.

## Builds compared

| | AIR 15 | Habbo Classic |
|---|---|---|
| Identifier | `WIN63-202609091217-117204808` | `55_classic-js-806140824ba8` |
| Build date | 9 September 2026 | 25 September 2026 (`builtAtMs` 1790316600224) |
| App version | 1.0.31 | 1.0.55 (`habbo-classic-native`) |
| Runtime | Adobe AIR, SWF (AS3) | Electron 41.1.0, JavaScript (esbuild), Pixi.js |
| Protocol | — | `FLASH29` (declared in `release-manifest.json`) |
| Client code | `HabboAir.swf`, 8,863 sources | one 9.2 MB bundle, 5,222 classes |
| Registered network events | 603 | 602 |
| Registered network composers | 586 | 586 |

## How to read this comparison

This is not two compilations of the same code: the client was **ported from AS3 to
JavaScript**. A line-by-line diff is meaningless, and a string comparison is dominated
by porting artefacts: 3,103 strings in the Habbo code do not exist in AIR 15, but the
vast majority are error messages added by the port ("… is not available.",
"… has been disposed.") or rewritten XML/CSS serializers.

The analysis is therefore based on:

- **classes with readable names** in the bundle that do not exist in AS3;
- **functionally meaningful strings** missing from AIR 15: configuration and
  localization keys, URLs, protocols, `localStorage` keys;
- the **startup code**, which kept readable names in the bundle.

The class correspondences (3,277) come from the work described in `README.md`.

## The main change: the client is no longer Flash

The Flash layer has been replaced by a layer that **emulates its APIs** on top of
Pixi.js: `Sprite`, `BitmapData`, `ExtendedBitmapData`, `Matrix`, `Point`, `Rectangle`,
`Event`, `Transform`, `ColorMatrixFilter`, `BlurFilter`, `DropShadowFilter`,
`_GlowFilter`, and its own text engine, `Air32NativeTextRenderer`. The game code still
carries the AS3 signatures (`readInteger`, `addEventListener`, `stageWidth`,
`getMessageArray`), so the mapping to AIR 15 is direct.

Of the readable names missing from AS3, 225 belong to Pixi.js or to this emulation
layer. Only a few belong to the client itself:

| Class | Role |
|---|---|
| `HabboAirLaunchStage` | The emulated Flash "stage": size, resize, click bridge. |
| `ApplicationInitHook`, `RendererInitHook` | Startup hooks for the Pixi application. |
| `Air32NativeTextRenderer` | Text rendering in place of `flash.text`. |
| `AvatarRenderManager` | Avatar rendering manager; AIR 15 has no class with this name. |
| `HabboMap`, `SavedSearch`, `UnseenItemCategoryEnum` | Data classes that kept readable names. |

## Connection: WebSocket instead of a TCP socket

The class that was the socket in AS3 (`_i28a7b58ffe1ff6`, a subclass of
`EventDispatcherWrapper`) keeps its interface (`readInt`, `readShort`, `writeBytes`,
`endian`, `bytesAvailable`) but uses a **binary WebSocket**:

- mandatory subprotocol `habbo-classic`: if the server does not negotiate it, the
  connection is closed with code 1002 ("WebSocket subprotocol was not negotiated.");
- endpoint `wss://game-<hotel>.habbo.com:30001/websocket` (from `Hotels.json`);
- alternative mode through **`/habbo-air-tcp-proxy/`**: here the client waits for the
  text message `__habbo_air_tcp_proxy_connected__` from the server before it treats
  itself as connected;
- at startup, `productionStartupArguments` converts the launcher session into the
  arguments the AIR client used to receive on the command line:
  `connection.info.host.<xx>` = WebSocket URL, `connection.info.port.<xx>` = `0`,
  `url.prefix`, `web.api`, `pocket.api`, `gamedata.hashes.url` and the new
  **`gamedata.hashes2.url`** (`<site>/gamedata/hashes2`), with `web_api_support=false`.
  It requires `wss:` and `https:`, and accepts only `hh…`, `d63`, `dev` and `duke` hotels.

## Graphics renderer choice (WebGL / WebGPU)

New in the settings ("Other settings", `OtherSettingsView`):

| Item | Detail |
|---|---|
| Saved preference | `localStorage["habbo.classic.graphics.renderer"]`, values `webgl` (default) or `webgpu`. |
| Applying it | "Apply and reload": saves and reloads the page. |
| Fallback | If WebGPU fails to initialize, the client restarts on WebGL and shows "WebGPU is unavailable. Using WebGL for this session." |
| Diagnostics | GPU name (from `WEBGL_debug_renderer_info` or the WebGPU adapter) and ticker FPS. |
| New localization keys | `memenu.settings.graphics.renderer`, `.apply`, `.reload`, `.fallback`, `.save.failed`, `.active.webgl`, `.active.webgpu`. |

Without WebGL or WebGPU the client stops with "This client requires WebGL or WebGPU."

## Features not yet ported

- **YouTube video**: the widget shows "<name> playback is not supported in this client
  yet." and hides the player; playlists stay empty.
- **Discord Rich Presence**: in AIR 15 this was a native extension (ANE); the bundle
  has only 7 textual occurrences of "discord" and no equivalent integration.

## Other changes

| Key or string | Where | Meaning from the code |
|---|---|---|
| `dev.environment.list`, `debug.auto.hotel.account` | login flow | List of development environments and an automatic test account. |
| `web.shop.relative.url`, `web.shop.subscription.relative.url` | catalog | Links to the web shop instead of in-client purchase. |
| `phone.number.collect.countries` | `PhoneNumberCollectView` | Countries for phone number collection. |
| `targeted.offer.dialog.timeleft`, `catalog.alert.notenough.credits` | `TargetedOfferDialogView` | Timer and insufficient-credits alert in targeted offers. |
| `landing.view.community.roomcategory`, `landing.view.rewardbadge.groupbadge` | landing view | New landing configuration. |
| `captcha()`, `tosAccept()`, `emailChange`, `passwordChange` | bridge to the website | The client opens these website pages through its own bridge. |

## What has not changed

- All the AIR 15 additions are present: **VariableFx**, with all 14 renderers (for
  example `ClassicProgressBarRenderer`, `BossHealthBarRenderer`,
  `RecolorableNumberDisplayRenderer`), and the navigator's **raid protection**
  (`RaidProtectionSettingsController`, `…View`, `…Data`, `…Snapshot`, `lastRaidAtEpochSeconds`).
- The number of registered messages is practically the same (602/586 versus 603/586).
  The message IDs differ, though: only 100 events and 79 composers share the same ID,
  which is normal between builds.
- The module structure (`habbo-catalog-com`, `habbo-navigator-com`, …) mirrors the AIR
  SWFs one to one.

## Comparison coverage by area

Share of AIR 15 AS3 classes with a match found in the bundle. A low share does **not**
mean the feature was removed: in that area the port rewrote more (especially
`com/sulake/core`, i.e. windows and runtime, replaced by the Flash emulation), or the
classes are too small to be recognized.

| Area | Matched |
|---|---|
| `habbo/roomevents` (Wired) | 399 / 476 (84%) |
| `habbo/ui` | 299 / 369 (81%) |
| `habbo/navigator` | 66 / 86 (77%) |
| `habbo/catalog` | 192 / 265 (72%) |
| `habbo/room` | 264 / 413 (64%) |
| `habbo/communication` | 130 / 254 (51%) |
| `core` | 154 / 370 (42%) |

## Where to look

- Connection: `05_sorgenti_per_classe/_non_abbinate/_i28a7b58ffe1ff6.js`.
- Startup, renderer and session: `04_sorgenti_js/HabboAirLauncher.deobf.js`, functions
  `productionStartupArguments`, `initializeGraphicsApplication`,
  `installRendererSettings`, `showRendererFallbackNotice`, class `HabboAirLaunchStage`.
- Full JS ↔ AIR 15 mappings: `06_report/classi.csv`, `06_report/membri.csv`.

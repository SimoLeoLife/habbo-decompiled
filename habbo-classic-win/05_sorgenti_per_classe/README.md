# Per-class sources

One file per class of the client, placed at the path of the matching AIR 15 AS3 source. Each file starts with a header naming its line in `04_sorgenti_js/HabboAirLauncher.deobf.js`, the AIR 15 source and the original obfuscated name.

## Areas

| Area | Classes | Incoming messages | Outgoing messages |
|---|---|---|---|
| [`com/hurlant/crypto/hash`](com/hurlant/crypto/hash/) | 3 | 0 | 0 |
| [`com/hurlant/crypto/prng`](com/hurlant/crypto/prng/) | 2 | 0 | 0 |
| [`com/hurlant/crypto/tls`](com/hurlant/crypto/tls/) | 1 | 0 | 0 |
| [`com/sulake/core/assets`](com/sulake/core/assets/) | 7 | 0 | 0 |
| [`com/sulake/core/communication`](com/sulake/core/communication/) | 8 | 0 | 0 |
| [`com/sulake/core/localization`](com/sulake/core/localization/) | 5 | 0 | 0 |
| [`com/sulake/core/runtime`](com/sulake/core/runtime/) | 14 | 0 | 0 |
| [`com/sulake/core/utils`](com/sulake/core/utils/) | 11 | 0 | 0 |
| [`com/sulake/core/window`](com/sulake/core/window/) | 108 | 0 | 0 |
| [`com/sulake/habbo/advertisement`](com/sulake/habbo/advertisement/) | 4 | 0 | 0 |
| [`com/sulake/habbo/avatar`](com/sulake/habbo/avatar/) | 90 | 9 | 4 |
| [`com/sulake/habbo/campaign`](com/sulake/habbo/campaign/) | 5 | 2 | 2 |
| [`com/sulake/habbo/catalog`](com/sulake/habbo/catalog/) | 194 | 14 | 14 |
| [`com/sulake/habbo/communication`](com/sulake/habbo/communication/) | 137 | 0 | 3 |
| [`com/sulake/habbo/configuration`](com/sulake/habbo/configuration/) | 5 | 0 | 0 |
| [`com/sulake/habbo/freeflowchat`](com/sulake/habbo/freeflowchat/) | 24 | 0 | 0 |
| [`com/sulake/habbo/friendbar`](com/sulake/habbo/friendbar/) | 97 | 14 | 14 |
| [`com/sulake/habbo/friendlist`](com/sulake/habbo/friendlist/) | 25 | 0 | 5 |
| [`com/sulake/habbo/game`](com/sulake/habbo/game/) | 41 | 0 | 12 |
| [`com/sulake/habbo/groups`](com/sulake/habbo/groups/) | 26 | 0 | 5 |
| [`com/sulake/habbo/habbicons`](com/sulake/habbo/habbicons/) | 1 | 0 | 0 |
| [`com/sulake/habbo/help`](com/sulake/habbo/help/) | 30 | 7 | 3 |
| [`com/sulake/habbo/inventory`](com/sulake/habbo/inventory/) | 51 | 1 | 12 |
| [`com/sulake/habbo/localization`](com/sulake/habbo/localization/) | 3 | 0 | 0 |
| [`com/sulake/habbo/messenger`](com/sulake/habbo/messenger/) | 10 | 9 | 1 |
| [`com/sulake/habbo/moderation`](com/sulake/habbo/moderation/) | 35 | 17 | 3 |
| [`com/sulake/habbo/navigator`](com/sulake/habbo/navigator/) | 70 | 45 | 19 |
| [`com/sulake/habbo/notifications`](com/sulake/habbo/notifications/) | 18 | 0 | 1 |
| [`com/sulake/habbo/nux`](com/sulake/habbo/nux/) | 4 | 2 | 3 |
| [`com/sulake/habbo/phonenumber`](com/sulake/habbo/phonenumber/) | 7 | 3 | 4 |
| [`com/sulake/habbo/quest`](com/sulake/habbo/quest/) | 57 | 2 | 1 |
| [`com/sulake/habbo/room`](com/sulake/habbo/room/) | 263 | 0 | 0 |
| [`com/sulake/habbo/roomevents`](com/sulake/habbo/roomevents/) | 402 | 13 | 11 |
| [`com/sulake/habbo/session`](com/sulake/habbo/session/) | 56 | 7 | 7 |
| [`com/sulake/habbo/sound`](com/sulake/habbo/sound/) | 19 | 0 | 0 |
| [`com/sulake/habbo/toolbar`](com/sulake/habbo/toolbar/) | 30 | 6 | 10 |
| [`com/sulake/habbo/tracking`](com/sulake/habbo/tracking/) | 9 | 0 | 3 |
| [`com/sulake/habbo/ui`](com/sulake/habbo/ui/) | 301 | 19 | 17 |
| [`com/sulake/habbo/utils`](com/sulake/habbo/utils/) | 25 | 0 | 0 |
| [`com/sulake/habbo/window`](com/sulake/habbo/window/) | 65 | 0 | 1 |
| [`com/sulake/room/data`](com/sulake/room/data/) | 1 | 0 | 0 |
| [`com/sulake/room/events`](com/sulake/room/events/) | 5 | 0 | 0 |
| [`com/sulake/room/exceptions`](com/sulake/room/exceptions/) | 1 | 0 | 0 |
| [`com/sulake/room/messages`](com/sulake/room/messages/) | 1 | 0 | 0 |
| [`com/sulake/room/object`](com/sulake/room/object/) | 11 | 0 | 0 |
| [`com/sulake/room/renderer`](com/sulake/room/renderer/) | 9 | 0 | 0 |
| [`com/sulake/room/utils`](com/sulake/room/utils/) | 7 | 0 | 0 |

## Other folders

| Folder | Content |
|---|---|
| `package_N/` | 972 classes in 200 packages that AIR 15 itself only knows by FFDec label |
| [`_unmatched/`](_unmatched/) | 1631 classes with no AIR 15 match, under `Unk…` placeholder names |
| [`_runtime_and_libraries/`](_runtime_and_libraries/) | 225 readable-name classes not in AS3: Pixi.js and the Flash emulation layer |


// Extracted from HabboAirLauncher.deobf.js, line 159986.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetAchievementResolutionTrophyDataUpdateEvent.as
// Obfuscated name: _i9de0a6cc5d981b

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d, c = "", f = 0, l = -1, b = 0, _ = !1, h = !1) {
    super(r, _, h);
    this.color = t;
    this.name = i;
    this.date = s;
    this.message = o;
    this.var_3948 = d;
    this.frameTitle = c;
    this._headerColor = f;
    this._r17fe2fbbdc1d1b = l;
    this.backgroundColor = b;
  }
  static {
    n(this, "RoomWidgetAchievementResolutionTrophyDataUpdateEvent");
  }
  static UPDATE_TROPHY_DATA = "RWARTDUE_TROPHY_DATA";
}

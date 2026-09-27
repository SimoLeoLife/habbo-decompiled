// Extracted from HabboAirLauncher.deobf.js, line 158942.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/events/UnseenAchievementsCountUpdateEvent.as
// Obfuscated name: _i51004860d7bf7b

class a extends M {
  constructor(r, t = !1, i = !1) {
    super(a.TYPE, t, i);
    this._count = r;
  }
  static {
    n(this, "UnseenAchievementsCountUpdateEvent");
  }
  static TYPE = "qe_uacue";
  get count() {
    return this._count;
  }
  clone() {
    return new a(this._count, this.bubbles, this.cancelable);
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 158921.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/events/QuestsListEvent.as
// Obfuscated name: _i2da2e3f4116d12

class a extends M {
  constructor(r, t, i, s = !1, o = !1) {
    super(r, s, o);
    this.var_1614 = t;
    this.var_5185 = i;
  }
  static {
    n(this, "QuestsListEvent");
  }
  static QUESTS = "qu_quests";
  static QUESTS_SEASONAL = "qe_quests_seasonal";
  get quests() {
    return this.var_1614;
  }
  get openWindow() {
    return this.var_5185;
  }
  clone() {
    return new a(this.type, this.var_1614, this.var_5185, this.bubbles, this.cancelable);
  }
}

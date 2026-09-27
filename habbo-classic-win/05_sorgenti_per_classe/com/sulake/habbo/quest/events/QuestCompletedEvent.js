// Extracted from HabboAirLauncher.deobf.js, line 158905.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/events/QuestCompletedEvent.as
// Obfuscated name: _ia8f69ce462e757

class a extends M {
  constructor(r, t, i = !1, s = !1) {
    super(r, i, s);
    this.var_3727 = t;
  }
  static {
    n(this, "QuestCompletedEvent");
  }
  static QUEST_SEASONAL = "qce_seasonal";
  get questData() {
    return this.var_3727;
  }
  clone() {
    return new a(this.type, this.var_3727, this.bubbles, this.cancelable);
  }
}

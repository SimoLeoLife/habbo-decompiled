// Extracted from HabboAirLauncher.deobf.js, line 248439.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenDiscussionThread.as
// Obfuscated name: _i5abb16a9d039ec

class {
  constructor(e, r, t, i) {
    this._main = e;
    this._groupId = t;
    this.var_2523 = i;
    r.procedure = this.onClick;
  }
  static {
    n(this, "OpenDiscussionThread");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      this._main._r15ba9692f220c4(this._groupId, this.var_2523);
  }, "onClick");
}

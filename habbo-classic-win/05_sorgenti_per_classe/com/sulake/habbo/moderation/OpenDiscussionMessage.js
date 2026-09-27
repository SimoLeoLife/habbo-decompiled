// Extracted from HabboAirLauncher.deobf.js, line 248419.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenDiscussionMessage.as
// Obfuscated name: _i2cad9628752fc9

class {
  constructor(e, r, t, i, s) {
    this._main = e;
    this._groupId = t;
    this.var_2523 = i;
    this.var_3514 = s;
    r.procedure = this.onClick;
  }
  static {
    n(this, "OpenDiscussionMessage");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      this._main._rdc566a5933870b(
        this._groupId,
        this.var_2523,
        this.var_3514,
      );
  }, "onClick");
}

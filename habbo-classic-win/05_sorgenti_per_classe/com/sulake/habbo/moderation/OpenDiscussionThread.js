// Estratto da HabboAirLauncher.deobf.js, riga 248439.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/OpenDiscussionThread.as
// Nome offuscato: _i5abb16a9d039ec

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

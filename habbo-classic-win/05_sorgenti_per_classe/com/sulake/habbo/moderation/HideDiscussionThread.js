// Estratto da HabboAirLauncher.deobf.js, riga 248400.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/HideDiscussionThread.as
// Nome offuscato: _i9ea0ebd2bb50e2

class {
  constructor(e, r, t, i, s) {
    this._main = e;
    this._popup = r;
    this._groupId = i;
    this.var_2523 = s;
    t.procedure = this.onClick;
  }
  static {
    n(this, "HideDiscussionThread");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      (this._popup.dispose(),
      this._main.connection?.send(
        new _i1d41947217e2e8(this._groupId, this.var_2523, class_2751.PERMANENTLY_HIDDEN_BY_MOD),
      ));
  }, "onClick");
}

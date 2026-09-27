// Estratto da HabboAirLauncher.deobf.js, riga 248380.

class {
  constructor(e, r, t, i, s, o) {
    this._main = e;
    this._popup = r;
    this._groupId = i;
    this.var_2523 = s;
    this.var_3514 = o;
    t.procedure = this.onClick;
  }
  static {
    n(this, "_i0b67bba163784c");
  }
  onClick = n((e) => {
    e.type === u.CLICK &&
      (this._popup.dispose(),
      this._main.connection?.send(
        new _ieb224a67b9cea6(this._groupId, this.var_2523, this.var_3514, class_2751.PERMANENTLY_HIDDEN_BY_MOD),
      ));
  }, "onClick");
}

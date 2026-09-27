// Estratto da HabboAirLauncher.deobf.js, riga 144486.

class extends _ic4d6c8d627ab4e {
  constructor(r, t, i = !1, s = !1) {
    super(CatalogWidgetEventEnum.APPROVE_NAME_RESULT, i, s);
    this.var_1241 = r;
    this._nameValidationInfo = t;
  }
  static {
    n(this, "_i7d032bc382f616");
  }
  get result() {
    return this.var_1241;
  }
  get _r549e697cdd257f() {
    return this._nameValidationInfo;
  }
}

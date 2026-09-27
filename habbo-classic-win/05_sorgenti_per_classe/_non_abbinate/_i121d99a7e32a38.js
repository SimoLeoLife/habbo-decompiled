// Estratto da HabboAirLauncher.deobf.js, riga 144567.

class extends _ic4d6c8d627ab4e {
  constructor(r, t = !1, i = !1) {
    super(CatalogWidgetEventEnum.PURCHASE_OVERRIDE, t, i);
    this._callback = r;
  }
  static {
    n(this, "_i121d99a7e32a38");
  }
  get callback() {
    return this._callback;
  }
}

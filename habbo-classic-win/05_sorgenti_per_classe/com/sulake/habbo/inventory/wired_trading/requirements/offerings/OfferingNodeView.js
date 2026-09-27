// Estratto da HabboAirLauncher.deobf.js, riga 243620.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/requirements/offerings/OfferingNodeView.as
// Nome offuscato: _iecb8bc72b6c8e8

class {
  constructor(e) {
    this._window = e;
  }
  static {
    n(this, "OfferingNodeView");
  }
  _disposed = !1;
  var_793 = null;
  var_2700 = null;
  _ruleNode = null;
  var_2162 = 0;
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  initialize(e, r, t, i) {
    ((this.var_793 = e),
      (this.var_2700 = r),
      (this._ruleNode = t),
      (this.var_2162 = i),
      this.initializeUI());
  }
  recycle() {
    ((this.var_793 = null),
      (this.var_2700 = null),
      (this._ruleNode = null),
      (this.var_2162 = 0));
  }
  dispose() {
    this._disposed ||
      ((this.var_793 = null),
      (this.var_2700 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._ruleNode = null),
      (this.var_2162 = 0),
      (this._disposed = !0));
  }
  initializeUI() {
    let e = this._ruleNode;
    if (
      !(this._window == null || e == null) &&
      (this.furniIcon != null && (this.furniIcon.visible = e.type === xn.TYPE_FURNI),
      this.coinIcon != null && (this.coinIcon.visible = e.type === xn.TYPE_COIN),
      this.andText != null && (this.andText.visible = this.var_2162 > 0),
      this.amountText != null &&
        ((this.amountText.visible = e.amount > 1),
        e.amount > 1 && (this.amountText.text = `${e.amount}x`)),
      e.type === xn.TYPE_FURNI && e.itemType != null)
    ) {
      let r = this.furniIcon?.widget;
      r != null && (r.productInfo = new _i27028f939050ee(e.itemType));
    }
  }
  get andText() {
    return this._window?.findChildByName("and_text");
  }
  get amountText() {
    return this._window?.findChildByName("amount_text");
  }
  get furniIcon() {
    return this._window?.findChildByName("furni_icon");
  }
  get coinIcon() {
    return this._window?.findChildByName("coin_icon");
  }
}

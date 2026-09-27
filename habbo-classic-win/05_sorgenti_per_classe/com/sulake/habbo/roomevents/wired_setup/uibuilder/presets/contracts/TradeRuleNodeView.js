// Extracted from HabboAirLauncher.deobf.js, line 350216.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/contracts/TradeRuleNodeView.as
// Obfuscated name: _i2f4c4ae7eb4c75

class a {
  static {
    n(this, "TradeRuleNodeView");
  }
  static UNIQUE_ID_COUNTER = 0;
  var_1999 = null;
  _node = null;
  _window;
  var_1463 = !1;
  var_2182 = !1;
  var_3907 = !0;
  var_5672 = a.UNIQUE_ID_COUNTER++;
  _disposed = !1;
  constructor(e) {
    ((this._window = e.clone()),
      this._window.addEventListener(u.OVER, this._r98937d52f2f3be),
      this._window.addEventListener(u.OUT, this._r04344c8bfe55e0),
      this.closeRegion.addEventListener(u.OVER, this._rda21c6742656ea),
      this.closeRegion.addEventListener(u.OUT, this._r5b60694d558082),
      this._window.addEventListener(u.CLICK, this.onClick),
      this.closeRegion.addEventListener(u.CLICK, this.onCloseClick));
  }
  initialize(e, r, t = !0) {
    ((this.var_1999 = e),
      (this._node = r),
      (this.var_3907 = t),
      (this.var_1463 = !1),
      (this.var_2182 = !1),
      we.disableSection(this._window, !1),
      this.updateUI());
  }
  release() {
    ((this.var_1999 = null), (this._node = null), (this.var_3907 = !0));
  }
  onCloseClick = n((...e) => {
    this._node != null && this.var_1999.removeNode(this);
  }, "onCloseClick");
  onClick = n((...e) => {
    this._node != null && this.var_1999._r3f40f43b736988(this);
  }, "onClick");
  updateUI() {
    ((this.closeRegion.visible =
      this.var_3907 && (this.var_1463 || this.var_2182)),
      (this.quantityAmount.text = String(this._node.amount)),
      (this.quantityBorder.visible = this._node.amount !== 1 || this._node.type === xn.TYPE_COIN));
    let e = this.iconWidget.widget;
    if (this._node.type === xn.TYPE_FURNI) {
      this.iconWidget.visible = !0;
      let r = null;
      (this._node.itemType != null && (r = new UnkClass_27028f_(this._node.itemType)),
        (e.productInfo = r),
        (this.coinsIcon.visible = !1));
    } else
      ((this.iconWidget.visible = !1), (e.productInfo = null), (this.coinsIcon.visible = !0));
  }
  _r04344c8bfe55e0 = n((...e) => {
    this._node != null && ((this.var_1463 = !1), this.updateUI());
  }, "_r04344c8bfe55e0");
  _r98937d52f2f3be = n((...e) => {
    this._node != null && ((this.var_1463 = !0), this.updateUI());
  }, "_r98937d52f2f3be");
  _r5b60694d558082 = n((...e) => {
    this._node != null && ((this.var_2182 = !1), this.updateUI());
  }, "_r5b60694d558082");
  _rda21c6742656ea = n((...e) => {
    this._node != null && ((this.var_2182 = !0), this.updateUI());
  }, "_rda21c6742656ea");
  get window() {
    return this._window;
  }
  get node() {
    return this._node;
  }
  set node(e) {
    ((this._node = e), this.updateUI());
  }
  get uniqueID() {
    return this.var_5672;
  }
  dispose() {
    this._disposed ||
      ((this.var_1999 = null),
      (this._node = null),
      this._window?.dispose(),
      (this._window = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iconWidget() {
    return this._window.findChildByName("element_icon_widget");
  }
  get coinsIcon() {
    return this._window.findChildByName("coins_icon");
  }
  get quantityBorder() {
    return this._window.findChildByName("quantity_border");
  }
  get quantityAmount() {
    return this._window.findChildByName("quantity_amount");
  }
  get closeRegion() {
    return this._window.findChildByName("close_region");
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 192521.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/RedeemItemCodeCatalogWidget.as
// Obfuscated name: _i09277bbfc3a185

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "RedeemItemCodeCatalogWidget");
  }
  var_1706 = null;
  _rc3678b341857ac = null;
  dispose() {
    (this.var_1706?.removeEventListener?.(u.CLICK, this._raeda066c3607a1),
      this._rc3678b341857ac?.removeEventListener?.(sr.const_1081, this._r29f99329b76d04),
      (this.var_1706 = null),
      (this._rc3678b341857ac = null),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return super.init()
      ? ((this.var_1706 = this.window?.findChildByName("redeem")),
        this.var_1706?.addEventListener?.(u.CLICK, this._raeda066c3607a1),
        (this._rc3678b341857ac = this.window?.findChildByName("voucher_code")),
        this._rc3678b341857ac?.addEventListener?.(sr.const_1081, this._r29f99329b76d04),
        !0)
      : !1;
  }
  _raeda066c3607a1 = n((r) => {
    this.redeem();
  }, "_raeda066c3607a1");
  _r29f99329b76d04 = n((r, t) => {
    let i = r;
    (i?.charCode === 13 || i?.keyCode === 13) && this.redeem();
  }, "_r29f99329b76d04");
  redeem() {
    let r = this.window?.findChildByName("voucher_code");
    if (r == null) return;
    let t = r.caption;
    if (t.length > 0) {
      (this._catalog?._re9624d89aa8c2c(t), (r.caption = ""));
      return;
    }
    this._catalog?.windowManager.alert(
      "${catalog.voucher.empty.title}",
      "${catalog.voucher.empty.desc}",
      0,
      this._r035155686c0ed8,
    );
  }
  _r035155686c0ed8 = n((r, t) => {
    r?.dispose();
  }, "_r035155686c0ed8");
}

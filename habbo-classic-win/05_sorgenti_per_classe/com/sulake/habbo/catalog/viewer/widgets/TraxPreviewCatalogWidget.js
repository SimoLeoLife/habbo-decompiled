// Extracted from HabboAirLauncher.deobf.js, line 195674.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/TraxPreviewCatalogWidget.as
// Obfuscated name: _i7c99ed282f2378

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._soundManager = t;
    ((this.var_1064 = this._window?.findChildByName("listen")),
      this.var_1064 != null &&
        (this.var_1064.addEventListener(u.CLICK, this._r36ca3f8f0859a9),
        this.var_1064.disable()));
  }
  static {
    n(this, "TraxPreviewCatalogWidget");
  }
  var_1064 = null;
  var_1046 = -1;
  init() {
    return !super.init() || (this.page?.offers.length ?? 0) === 0
      ? !1
      : (this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413), !0);
  }
  dispose() {
    (this.var_1064 != null &&
      this.var_1064.removeEventListener(u.CLICK, this._r36ca3f8f0859a9),
      this._soundManager?.soundManager?.stop(UnkConstants_a57980._r12a36356ec1cd6),
      (this._soundManager = null),
      (this.var_1064 = null),
      super.dispose());
  }
  closed() {
    (super.closed(), this._soundManager?.soundManager?.stop(UnkConstants_a57980._r12a36356ec1cd6));
  }
  _rae8e17ddaeb413 = n((r) => {
    if (r.offer == null) return;
    let t = r.offer.product,
      i = !1;
    (t != null &&
      t.extraParam.length > 0 &&
      ((this.var_1046 = Number.parseInt(t.extraParam, 10)), (i = !0)),
      this.var_1064 != null &&
        (i ? this.var_1064.enable() : this.var_1064.disable()));
  }, "_rae8e17ddaeb413");
  _r36ca3f8f0859a9 = n((r) => {
    this._soundManager?.soundManager != null &&
      (this._rd6a41a4c205e28(UnkConstants_a57980._r91444358db0d2d),
      this._rd6a41a4c205e28(UnkConstants_a57980._r12a36356ec1cd6),
      this._soundManager.soundManager._r327803e778efff(
        this.var_1046,
        UnkConstants_a57980._r12a36356ec1cd6,
        15,
        40,
        0,
        2,
      ));
  }, "_r36ca3f8f0859a9");
  _rd6a41a4c205e28(r) {
    let t = this._soundManager?.soundManager?._r1e81274f76e6d5(r) ?? -1;
    if (t === -1) return;
    let i = this._soundManager?.soundManager?._r716cd8f1931469(t);
    i?._r551c6e37b9b07d != null && (i._r551c6e37b9b07d._r754bf5401e8707 = 0);
  }
}

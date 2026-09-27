// Extracted from HabboAirLauncher.deobf.js, line 188677.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/bundlepurchaseinfodisplay/listitem/ExtraInfoDiscountValueItem.as
// Obfuscated name: _i3f3d3ae96c0476

class a extends UpdateableExtraInfoListItem {
  constructor(r, t, i) {
    super(null, r, t, bo.ALIGN_BOTTOM, !0);
    this._catalog = i;
    ((this._r3d0797e9a1ca59 = new UnkEventDispatcherWrapperSubclass_05394e(150)),
      this._r3d0797e9a1ca59.addEventListener(DeBouncer.addEventListener, this._r0b5c178184e7c7));
  }
  static {
    n(this, "ExtraInfoDiscountValueItem");
  }
  static ELEMENT_SPLASH_STAR = "icon_splash_bitmap";
  static const_831 = "icon_bitmap";
  static const_1021 = "total_currency_value_left";
  static const_334 = "total_currency_icon_left";
  static ELEMENT_TOTAL_LEFT_CURRENCY_STRIKETHROUGH = "striketrough_total_currency_left";
  static const_937 = "total_currency_value_right";
  static const_281 = "total_currency_icon_right";
  static ELEMENT_TOTAL_RIGHT_CURRENCY_STRIKETHROUGH = "striketrough_total_currency_right";
  static const_1409 = "discount_currency_value_left";
  static const_531 = "discount_currency_icon_left";
  static const_241 = "discount_currency_value_right";
  static const_491 = "discount_currency_icon_right";
  static STRIKETHROUGH_LEFT_MARGIN = 4;
  static STRIKETHROUGH_RIGHT_MARGIN = 20;
  _window = null;
  _dirty = !0;
  _rb82ef9db372fd0 = 0;
  _r3d0797e9a1ca59 = null;
  _r9c61a45b0f9bcb = !1;
  _rf93285382b753c = !1;
  var_2638 = !1;
  var_4813 = !1;
  dispose() {
    (this.disposed ||
      (this._r3d0797e9a1ca59?.stop(),
      this._r3d0797e9a1ca59?.removeEventListener(DeBouncer.addEventListener, this._r0b5c178184e7c7),
      (this._r3d0797e9a1ca59 = null),
      this._window?.dispose(),
      (this._window = null)),
      super.dispose());
  }
  update(r) {
    (super.update(r),
      (this._r9c61a45b0f9bcb = r.priceCredits > 0 && r.priceActivityPoints > 0),
      (this.var_2638 = r.priceActivityPoints > 0 && r.priceCredits === 0),
      (this._rf93285382b753c = !this._r9c61a45b0f9bcb && !this.var_2638),
      (this._dirty = !0),
      this.render(),
      this.var_4813 || this.setCurrencyIcons());
  }
  _rda4cde3b8bef4b() {
    return (this._dirty && this.render(), this._window);
  }
  createWindow() {
    this._window = this._catalog.utils.createWindow("discountValueItem");
    let r = this._catalog.assets.getAssetByName("thumb_up")?.content,
      t = this._window?.findChildByName(a.const_831);
    (t != null && r != null && x0.replaceCenteredImage(t, r.clone()), this._r09899abbe4ef8b());
  }
  render() {
    (this._window == null && this.createWindow(),
      this._window != null &&
        (this._r74d24c0825b91f(), this._r0344a31dc28a4c(), this._r89898c12cf066c(), (this._dirty = !1)));
  }
  _r74d24c0825b91f() {
    this._r811fc71d996782(!(this.var_2638 || this._rf93285382b753c));
  }
  setCurrencyIcons() {
    this._window != null &&
      (this._r9c61a45b0f9bcb &&
        (this._r8145edd92edd1e(a.const_334, -1), this._r8145edd92edd1e(a.const_531, -1)),
      this._rf93285382b753c
        ? (this._r8145edd92edd1e(a.const_281, -1), this._r8145edd92edd1e(a.const_491, -1))
        : (this._r8145edd92edd1e(a.const_281, this.data.activityPointType),
          this._r8145edd92edd1e(a.const_491, this.data.activityPointType)),
      (this.var_4813 = !0));
  }
  _r0344a31dc28a4c() {
    (this._r9c61a45b0f9bcb &&
      (this.setElementText(a.const_1021, String(this.data.quantity * this.data.priceCredits)),
      this.setElementText(
        a.const_1409,
        String(this.data.quantity * this.data.priceCredits - this.data._r84248337c3a5e5),
      )),
      this._rf93285382b753c
        ? (this.setElementText(a.const_937, String(this.data.quantity * this.data.priceCredits)),
          this.setElementText(
            a.const_241,
            String(this.data.quantity * this.data.priceCredits - this.data._r84248337c3a5e5),
          ))
        : (this.setElementText(a.const_937, String(this.data.quantity * this.data.priceActivityPoints)),
          this.setElementText(
            a.const_241,
            String(this.data.quantity * this.data.priceActivityPoints - this.data._r164806b9e8a59c),
          )));
  }
  _r89898c12cf066c() {
    if (this._window == null) return;
    let r = this._window.findChildByName(a.const_1021),
      t = this._window.findChildByName(a.ELEMENT_TOTAL_LEFT_CURRENCY_STRIKETHROUGH);
    if (r != null && t != null) {
      let o = r.x + r.width - r.textWidth;
      ((t.x = o - a.STRIKETHROUGH_LEFT_MARGIN), (t.width = a.STRIKETHROUGH_LEFT_MARGIN + r.textWidth + a.STRIKETHROUGH_RIGHT_MARGIN));
    }
    let i = this._window.findChildByName(a.const_937),
      s = this._window.findChildByName(a.ELEMENT_TOTAL_RIGHT_CURRENCY_STRIKETHROUGH);
    if (i != null && s != null) {
      let o = i.x + i.width - i.textWidth;
      ((s.x = o - a.STRIKETHROUGH_LEFT_MARGIN), (s.width = a.STRIKETHROUGH_LEFT_MARGIN + i.textWidth + a.STRIKETHROUGH_RIGHT_MARGIN));
    }
  }
  setElementText(r, t) {
    let i = this._window?.findChildByName(r);
    i != null && (i.caption = t);
  }
  _r8145edd92edd1e(r, t) {
    let i = this._window?.findChildByName(r);
    i != null && (i.style = et.getIconStyleFor(t, this._catalog, !1));
  }
  _r811fc71d996782(r) {
    let t = [
      a.const_531,
      a.const_1409,
      a.const_334,
      a.ELEMENT_TOTAL_LEFT_CURRENCY_STRIKETHROUGH,
      a.const_1021,
    ];
    for (let i of t) {
      let s = this._window?.findChildByName(i);
      s != null && (s.visible = r);
    }
  }
  _r09899abbe4ef8b() {
    let r = this._window?.findChildByName(a.ELEMENT_SPLASH_STAR);
    r != null &&
      ((r.bitmap = new A(r.width, r.height, !0, 0)),
      this._r0b5c178184e7c7(new DeBouncer(DeBouncer.addEventListener)),
      this._r3d0797e9a1ca59?.start());
  }
  _r0b5c178184e7c7 = n((r) => {
    let t = this._window?.findChildByName(a.ELEMENT_SPLASH_STAR),
      s = this._catalog.assets.getAssetByName(
        `bundle_discount_star_${this._rb82ef9db372fd0}`,
      )?.content;
    t != null &&
      s != null &&
      (x0.replaceCenteredImage(t, s.clone()), (this._rb82ef9db372fd0 = (this._rb82ef9db372fd0 + 1) % 8));
  }, "_r0b5c178184e7c7");
}

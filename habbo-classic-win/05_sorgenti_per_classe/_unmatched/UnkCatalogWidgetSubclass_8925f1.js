// Extracted from HabboAirLauncher.deobf.js, line 189058.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8925f1ee1931a5

class a extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "UnkCatalogWidgetSubclass_8925f1");
  }
  static EXPIRATION_TIME = 4e3;
  _rd16f1094a08a60 = null;
  _r2b5d8914b57080 = 1;
  var_3864 = 0;
  var_2633 = 0;
  _rf799278aa1f620 = 0;
  _r30f258b7c15fb5 = "";
  _rdc82504fbab691 = -1;
  _r5446855832ef9b = -1;
  _rfafedd3ad987f0 = -1;
  _r503c1b178db922 = !1;
  _r92d53b6e803173 = null;
  init() {
    return this._catalog.multiplePurchaseEnabled
      ? super.init()
        ? ((this._rd16f1094a08a60 = new C5e(this, this._catalog)),
          this.events?.addEventListener?.(CatalogWidgetBundleDisplayExtraInfoEvent.RESET, this._r2bc9c760c84408),
          this.events?.addEventListener?.(CatalogWidgetBundleDisplayExtraInfoEvent.HIDE, this._r59caeaad847e0b),
          this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._r8ab4ad1f50f106),
          this.events?.addEventListener?.(CatalogWidgetBundleDisplayExtraInfoEvent.ITEM_CLICKED, this._r724d3896fbacaa),
          (this._r92d53b6e803173 = new UnkEventDispatcherWrapperSubclass_05394e(a.EXPIRATION_TIME, 1)),
          this._r92d53b6e803173.addEventListener(DeBouncer._rf33144eac61595, this._r8fc696b730e7a1),
          !0)
        : !1
      : !0;
  }
  dispose() {
    (this.disposed ||
      (this._rd16f1094a08a60?.dispose(),
      (this._rd16f1094a08a60 = null),
      this._r92d53b6e803173?.stop(),
      this._r92d53b6e803173?.removeEventListener(DeBouncer._rf33144eac61595, this._r8fc696b730e7a1),
      (this._r92d53b6e803173 = null),
      this.events?.removeEventListener?.(CatalogWidgetBundleDisplayExtraInfoEvent.RESET, this._r2bc9c760c84408),
      this.events?.removeEventListener?.(CatalogWidgetBundleDisplayExtraInfoEvent.HIDE, this._r59caeaad847e0b),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._r8ab4ad1f50f106),
      this.events?.removeEventListener?.(CatalogWidgetBundleDisplayExtraInfoEvent.ITEM_CLICKED, this._r724d3896fbacaa)),
      super.dispose());
  }
  _ra3b6ce62840d66() {
    let r = new ExtraInfoItemData(ExtraInfoItemData.TYPE_PROMO);
    ((r.quantity = this._r2b5d8914b57080), (this._rdc82504fbab691 = this._rd16f1094a08a60?.addItem(r) ?? -1));
  }
  _r893d988235a39d(r) {
    if (this._rdc82504fbab691 === -1) return;
    let t = this._rd16f1094a08a60?.getItem(this._rdc82504fbab691),
      i = t?.data;
    t == null || i == null || ((i.quantity = r), t.update(i));
  }
  _re14e39193e76e4() {
    this._rdc82504fbab691 !== -1 &&
      (this._rd16f1094a08a60?.removeItem(this._rdc82504fbab691), (this._rdc82504fbab691 = -1));
  }
  _rc411acea1189e7() {
    let r = new ExtraInfoItemData(ExtraInfoItemData.const_1007);
    ((r.quantity = this._r2b5d8914b57080),
      (r.priceActivityPoints = this.var_2633),
      (r.activityPointType = this._rf799278aa1f620),
      (r.priceCredits = this.var_3864),
      (this._r5446855832ef9b = this._rd16f1094a08a60?.addItem(r) ?? -1),
      this._catalog.utils.discountShownEventTrack());
  }
  _rb0e5fb244b600e(r) {
    if (this._r5446855832ef9b === -1) return;
    let t = this._rd16f1094a08a60?.getItem(this._r5446855832ef9b),
      i = t?.data;
    t == null ||
      i == null ||
      ((i.quantity = r),
      (i._r84248337c3a5e5 = this._catalog.utils._rfcca586527c6d5(!0, this.var_3864, r)),
      (i._r164806b9e8a59c = this._catalog.utils._rfcca586527c6d5(!0, this.var_2633, r)),
      t.update(i));
  }
  _r70bdd777a3bfc7() {
    this._r5446855832ef9b !== -1 &&
      (this._rd16f1094a08a60?.removeItem(this._r5446855832ef9b), (this._r5446855832ef9b = -1));
  }
  _ra335e579fcfb3f() {
    let r = new ExtraInfoItemData(ExtraInfoItemData.TYPE_BUNDLES_INFO_SCREEN);
    ((this._rfafedd3ad987f0 = this._rd16f1094a08a60?.addItem(r) ?? -1),
      this._catalog.utils.bundlesInfoShownEventTrack());
  }
  _r4d0731c6da656e() {
    this._rfafedd3ad987f0 !== -1 &&
      (this._rd16f1094a08a60?.removeItem(this._rfafedd3ad987f0), (this._rfafedd3ad987f0 = -1));
  }
  _r2bc9c760c84408 = n((r) => {
    this.disposed ||
      r.data == null ||
      (this.window != null && (this.window.visible = !0),
      (this.var_3864 = r.data.priceCredits),
      (this.var_2633 = r.data.priceActivityPoints),
      (this._rf799278aa1f620 = r.data.activityPointType),
      (this._r30f258b7c15fb5 = r.data._rc9fc89e7eb27a7),
      this._rd16f1094a08a60?.clear(),
      (this._r5446855832ef9b = -1),
      (this._rdc82504fbab691 = -1),
      this._r92d53b6e803173?.start());
  }, "_r2bc9c760c84408");
  _r8ab4ad1f50f106 = n((r) => {
    this.disposed ||
      !this._catalog._promoInfo ||
      r.type !== CatalogWidgetSpinnerEvent.VALUE_CHANGED ||
      (r.value !== this._r2b5d8914b57080 &&
        (r.value >= (this._catalog._rc94facdba94e66?._rc509faa5d3ff7c ?? Number.MAX_SAFE_INTEGER) &&
        this._r5446855832ef9b === -1
          ? this._rc411acea1189e7()
          : r.value < (this._catalog._rc94facdba94e66?._rc509faa5d3ff7c ?? Number.MAX_SAFE_INTEGER) &&
            this._r70bdd777a3bfc7(),
        this._r893d988235a39d(r.value),
        this._rb0e5fb244b600e(r.value),
        (this._r2b5d8914b57080 = r.value),
        this._r4d0731c6da656e(),
        this._r2b5d8914b57080 >= this._catalog.utils._r9219dbc9eee1f2
          ? (this._re14e39193e76e4(), (this._r503c1b178db922 = !0))
          : this._r503c1b178db922 && (this._ra3b6ce62840d66(), (this._r503c1b178db922 = !1)),
        this._catalog.utils.spinnerValueChangedEventTrack()));
  }, "_r8ab4ad1f50f106");
  _r59caeaad847e0b = n((r) => {
    this.window != null && (this.window.visible = !1);
  }, "_r59caeaad847e0b");
  _r724d3896fbacaa = n((r) => {
    switch (r.id) {
      case this._rdc82504fbab691:
        this._rfafedd3ad987f0 === -1 && this._ra335e579fcfb3f();
        break;
      case this._rfafedd3ad987f0:
        this._r4d0731c6da656e();
        break;
    }
  }, "_r724d3896fbacaa");
  _r8fc696b730e7a1 = n((r) => {
    this._ra3b6ce62840d66();
  }, "_r8fc696b730e7a1");
}

// Extracted from HabboAirLauncher.deobf.js, line 172417.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/Offer.as
// Obfuscated name: _ib785ec6e474a87

class a {
  constructor(e, r, t, i, s, o, d, c, f = dr.NO_CLUB, l, b, _) {
    this._offerId = e;
    this.var_1507 = r;
    this.var_4542 = t;
    this.var_2215 = i;
    this.var_2384 = s;
    this.var_2772 = o;
    this.var_4150 = d;
    this._r97c180804b8b4c = c;
    this.var_3695 = f;
    this.var_4905 = b;
    this._catalog = _;
    ((this.var_4965 =
      (l.length === 1 && l[0].productType === class_1803.PRODUCT_TYPE_CHAT_STYLE) ||
      (l.length === 2 &&
        ((l[0].productType === class_1803.PRODUCT_TYPE_CHAT_STYLE && l[1].productType === class_1803.PRODUCT_TYPE_BADGE) ||
          (l[0].productType === class_1803.PRODUCT_TYPE_BADGE && l[1].productType === class_1803.PRODUCT_TYPE_CHAT_STYLE)))),
      this._r16fb655d2c4991(l),
      this.analyzePriceType(),
      this.createProductContainer(l));
    for (let h of l) {
      if (h.productType === class_1803.PRODUCT_TYPE_BADGE) {
        this._badgeCode = h.extraParam;
        break;
      }
      if (!this.var_4965 && h.productType === class_1803.PRODUCT_TYPE_CHAT_STYLE) {
        this._r2d513224443b98 = h.extraParam;
        break;
      }
    }
  }
  static {
    n(this, "Offer");
  }
  static PRICING_MODEL_UNKNOWN = "pricing_model_unknown";
  static PRICING_MODEL_SINGLE = "pricing_model_single";
  static PRICING_MODEL_MULTI = "pricing_model_multi";
  static PRICING_MODEL_BUNDLE = "pricing_model_bundle";
  static PRICING_MODEL_FURNI = "pricing_model_furniture";
  static PRICE_TYPE_NONE = "price_type_none";
  static PRICE_TYPE_CREDITS = "price_type_credits";
  static PRICE_TYPE_ACTIVITYPOINTS = "price_type_activitypoints";
  static PRICE_TYPE_CREDITS_AND_ACTIVITYPOINTS = "price_type_credits_and_activitypoints";
  static PRICE_TYPE_SILVER = "price_type_silver";
  _rbfc62b5bee1eb3 = a.PRICING_MODEL_UNKNOWN;
  _rcefbdad6bd72ed = a.PRICE_TYPE_NONE;
  var_225 = null;
  var_445 = null;
  _disposed = !1;
  _badgeCode = null;
  _r2d513224443b98 = null;
  var_3216 = 0;
  var_4965 = !1;
  get clubLevel() {
    return this.var_3695;
  }
  get page() {
    return this.var_225;
  }
  set page(e) {
    this.var_225 = e;
  }
  get offerId() {
    return this._offerId;
  }
  get localizationId() {
    return this.var_1507;
  }
  get priceInCredits() {
    return this.var_2215;
  }
  get priceInActivityPoints() {
    return this.var_2384;
  }
  get activityPointType() {
    return this.var_2772;
  }
  get priceInSilver() {
    return this.var_4150;
  }
  get giftable() {
    return this._r97c180804b8b4c;
  }
  get _r10b16f6e9cda51() {
    return this.var_445;
  }
  get product() {
    return this.var_445?._r7149a15797e48f ?? null;
  }
  get gridItem() {
    return this.var_445;
  }
  get pricingModel() {
    return this._rbfc62b5bee1eb3;
  }
  get _r74b041d0ff8632() {
    return this._rcefbdad6bd72ed;
  }
  get previewCallbackId() {
    return this.var_3216;
  }
  set previewCallbackId(e) {
    this.var_3216 = e;
  }
  get bundlePurchaseAllowed() {
    return this.var_4905;
  }
  get isRentOffer() {
    return this.var_4542;
  }
  get _rf95dbf90feefec() {
    return this.var_4965;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._offerId = 0),
      (this.var_1507 = ""),
      (this.var_2215 = 0),
      (this.var_2384 = 0),
      (this.var_2772 = 0),
      (this.var_225 = null),
      (this._catalog = null),
      this.var_445 != null && (this.var_445.dispose(), (this.var_445 = null)));
  }
  get disposed() {
    return this._disposed;
  }
  clone() {
    let e = [],
      r = this._catalog.getProductData(this.localizationId);
    for (let i of this.var_445?.products ?? []) {
      let s = this._catalog.products(i.productClassId, i.productType),
        o = new sb(
          i.productType,
          i.productClassId,
          i.extraParam,
          i.productCount,
          r,
          s,
          this._catalog,
          i._r651925293e1d0b,
          i._raba7e4532bd54d,
          i._r807decfd331c6c,
        );
      e.push(o);
    }
    let t = new a(
      this.offerId,
      this.localizationId,
      this.isRentOffer,
      this.priceInCredits,
      this.priceInActivityPoints,
      this.activityPointType,
      this.priceInSilver,
      this.giftable,
      this.clubLevel,
      e,
      this.bundlePurchaseAllowed,
      this._catalog,
    );
    return ((t.page = this.page), t);
  }
  get _rc9fc89e7eb27a7() {
    return this._badgeCode;
  }
  get _r4566aec49601a5() {
    return this._r2d513224443b98;
  }
  get _r0f66f124c65f91() {
    return (
      this._catalog.getProductData(this.var_1507)?.name ?? `\${${this.var_1507}}`
    );
  }
  get _r8e1eff7657429a() {
    return (
      this._catalog.getProductData(this.var_1507)?.description ??
      `\${${this.var_1507}}`
    );
  }
  get _r6a2e5e87fafd63() {
    return 0;
  }
  createProductContainer(e) {
    switch (this._rbfc62b5bee1eb3) {
      case a.PRICING_MODEL_SINGLE:
        this.var_445 = new SingleProductContainer(this, e, this._catalog);
        break;
      case a.PRICING_MODEL_MULTI:
        this.var_445 = new MultiProductContainer(this, e, this._catalog);
        break;
      case a.PRICING_MODEL_BUNDLE:
        this.var_445 = new BundleProductContainer(this, e, this._catalog);
        break;
      default:
        this.var_445 = new I0(this, e, this._catalog);
        break;
    }
  }
  _r16fb655d2c4991(e) {
    if (this.var_4965) {
      this._rbfc62b5bee1eb3 = a.PRICING_MODEL_SINGLE;
      return;
    }
    let r = sb.stripAddonProducts(e);
    r.length === 1
      ? (this._rbfc62b5bee1eb3 = r[0].productCount === 1 ? a.PRICING_MODEL_SINGLE : a.PRICING_MODEL_MULTI)
      : r.length > 1
        ? (this._rbfc62b5bee1eb3 = a.PRICING_MODEL_BUNDLE)
        : (this._rbfc62b5bee1eb3 = a.PRICING_MODEL_UNKNOWN);
  }
  analyzePriceType() {
    this.var_2215 > 0 && this.var_2384 > 0
      ? (this._rcefbdad6bd72ed = a.PRICE_TYPE_CREDITS_AND_ACTIVITYPOINTS)
      : this.var_2215 > 0
        ? (this._rcefbdad6bd72ed = a.PRICE_TYPE_CREDITS)
        : this.var_2384 > 0
          ? (this._rcefbdad6bd72ed = a.PRICE_TYPE_ACTIVITYPOINTS)
          : this.var_4150 > 0
            ? (this._rcefbdad6bd72ed = a.PRICE_TYPE_SILVER)
            : (this._rcefbdad6bd72ed = a.PRICE_TYPE_NONE);
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 184929.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i726cc487b9a55a

class a {
  constructor(e, r, t, i, s) {
    this._offerId = e;
    this.var_1507 = r;
    this.var_2215 = t;
    this.var_2384 = i;
    this.var_2772 = s;
  }
  static {
    n(this, "UnkClass_726cc4");
  }
  var_225 = null;
  dispose() {}
  get disposed() {
    return !1;
  }
  clone() {
    let e = new a(
      this._offerId,
      this.var_1507,
      this.var_2215,
      this.var_2384,
      this.var_2772,
    );
    return ((e.page = this.var_225), e);
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
    return -1;
  }
  get giftable() {
    return !1;
  }
  get _r10b16f6e9cda51() {
    return null;
  }
  get product() {
    return this._r10b16f6e9cda51?._r7149a15797e48f ?? null;
  }
  get gridItem() {
    return null;
  }
  get pricingModel() {
    return "";
  }
  get _r74b041d0ff8632() {
    return hn.PRICE_TYPE_CREDITS;
  }
  get previewCallbackId() {
    return 0;
  }
  set previewCallbackId(e) {}
  get bundlePurchaseAllowed() {
    return !1;
  }
  get isRentOffer() {
    return !1;
  }
  get clubLevel() {
    return 0;
  }
  get _rc9fc89e7eb27a7() {
    return "";
  }
  get _r4566aec49601a5() {
    return "";
  }
  get _r0f66f124c65f91() {
    return "${" + this.localizationId + "}";
  }
  get _r8e1eff7657429a() {
    return "${" + this.localizationId + "}";
  }
  get _r6a2e5e87fafd63() {
    return 0;
  }
  set page(e) {
    this.var_225 = e;
  }
  get page() {
    return this.var_225;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 187214.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/data/TargetedOffer.as
// Obfuscated name: _if16fde42c62978

class a extends class_3382 {
  static {
    n(this, "TargetedOffer");
  }
  static const_161 = 10;
  var_225 = null;
  var_3216 = 0;
  constructor(e = null) {
    super(e);
  }
  get offerId() {
    return 0;
  }
  get page() {
    return this.var_225;
  }
  set page(e) {
    this.var_225 = e;
  }
  get _r74b041d0ff8632() {
    return this.priceInCredits > 0 && this.priceInActivityPoints > 0
      ? "price_type_credits_and_activitypoints"
      : this.priceInCredits > 0
        ? "price_type_credits"
        : this.priceInActivityPoints > 0
          ? "price_type_activitypoints"
          : "price_type_none";
  }
  get product() {
    return null;
  }
  get _r10b16f6e9cda51() {
    return null;
  }
  get gridItem() {
    return null;
  }
  get localizationId() {
    return this._raeb033db5aa083;
  }
  get bundlePurchaseAllowed() {
    return !1;
  }
  get isRentOffer() {
    return !1;
  }
  get giftable() {
    return !1;
  }
  get pricingModel() {
    return "";
  }
  get previewCallbackId() {
    return this.var_3216;
  }
  set previewCallbackId(e) {
    this.var_3216 = e;
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
    return this.title;
  }
  get _r8e1eff7657429a() {
    return this.description;
  }
  get disposed() {
    return !1;
  }
  get priceInSilver() {
    return -1;
  }
  get _r6a2e5e87fafd63() {
    return 0;
  }
  isExpired() {
    return this.expirationTime > 0 && this._r7d6d7b98de2508() <= 0;
  }
  _r7d6d7b98de2508() {
    let e = (this.expirationTime - _ia411d8d8194a3a()) / 1e3 - a.const_161;
    return Math.max(0, Math.floor(e));
  }
  checkPurseBalance(e, r) {
    return !(
      e == null ||
      e.credits < this.priceInCredits * r ||
      e.getActivityPointsForType(this.activityPointType) < this.priceInActivityPoints * r
    );
  }
  getLocalizedSubProductNames(e) {
    let r = [];
    for (let t of this._r2353151204914f) {
      let i = e.getProductData(t);
      r.push(i?.name ?? t);
    }
    return r;
  }
  dispose() {}
  clone() {
    let e = new a(this);
    return ((e.page = this.page), e);
  }
}

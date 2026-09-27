// Estratto da HabboAirLauncher.deobf.js, riga 196753.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/FurnitureOffer.as
// Nome offuscato: _ib0fa5dbb7b4686

class a {
  constructor(e, r, t = -1, i = !1, s = null) {
    this.var_86 = e;
    this._catalog = r;
    if (this.var_86 == null) throw new Error("FurnitureOffer requires furniture data.");
    ((this._r2e7578eae23943 = t), (this._rcb39c4c51e62fc = i));
    let o = s != null && s.length > 0 ? s : this.var_86.className;
    ((this.var_445 = new FurniProductContainer(this, [], r, this.var_86)),
      (this.var_3415 = new sb(
        this.var_86.type,
        this.var_86.id,
        this.var_86._r2bdd6e3cc1f573,
        1,
        r.getProductData(o),
        this.var_86,
        r,
      )));
  }
  static {
    n(this, "FurnitureOffer");
  }
  var_3216 = 0;
  var_225 = null;
  var_445;
  var_3415;
  _r2e7578eae23943;
  _rcb39c4c51e62fc;
  dispose() {
    ((this.var_86 = null),
      (this.var_225 = null),
      (this.var_3216 = -1),
      (this.var_445 = null));
  }
  get disposed() {
    return this.var_86 == null;
  }
  get page() {
    return this.var_225;
  }
  set page(e) {
    this.var_225 = e;
  }
  get offerId() {
    return this._r2e7578eae23943 > -1
      ? this._r2e7578eae23943
      : this.isRentOffer
        ? (this.var_86?.rentOfferId ?? -1)
        : (this.var_86?.purchaseOfferId ?? -1);
  }
  get localizationId() {
    return `roomItem.name.${this.var_86?.id ?? 0}`;
  }
  get priceInCredits() {
    return 0;
  }
  get priceInActivityPoints() {
    return 0;
  }
  get activityPointType() {
    return 0;
  }
  get priceInSilver() {
    return -1;
  }
  get giftable() {
    return !1;
  }
  get _r10b16f6e9cda51() {
    return this.var_445;
  }
  get product() {
    return this.var_3415;
  }
  get gridItem() {
    return this.var_445;
  }
  get pricingModel() {
    return "pricing_model_furniture";
  }
  get _r74b041d0ff8632() {
    return "";
  }
  get previewCallbackId() {
    return this.var_3216;
  }
  set previewCallbackId(e) {
    this.var_3216 = e;
  }
  get bundlePurchaseAllowed() {
    return !1;
  }
  get isRentOffer() {
    return this._r2e7578eae23943 > -1
      ? this._rcb39c4c51e62fc
      : (this.var_86?.rentOfferId ?? -1) > -1 &&
          !(this.var_225?._r1db0fa6d0cb8a7 ?? !1);
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
    let e = this.var_3415?.productData ?? null;
    return e?.name != null && e.name.length > 0 ? e.name : (this.var_86?.localizedName ?? "");
  }
  get _r8e1eff7657429a() {
    return this.var_86?.description ?? "";
  }
  get _r6a2e5e87fafd63() {
    return 0;
  }
  clone() {
    return new a(
      this.var_86,
      this._catalog,
      this._r2e7578eae23943,
      this._rcb39c4c51e62fc,
      this.var_3415.productData?.type ?? null,
    );
  }
}

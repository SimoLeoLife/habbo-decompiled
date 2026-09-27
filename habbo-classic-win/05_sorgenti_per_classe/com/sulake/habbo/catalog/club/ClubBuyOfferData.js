// Estratto da HabboAirLauncher.deobf.js, riga 172641.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubBuyOfferData.as
// Nome offuscato: _ic774ae9b050db6

class a {
  constructor(e, r, t, i, s, o, d, c, f, l, b, _, h = !1) {
    this._offerId = e;
    this._productCode = r;
    this.var_4122 = t;
    this.var_4478 = i;
    this._r0531e7b9c590c2 = s;
    this.var_4639 = o;
    this.var_4742 = d;
    this._r0b8fbe882ee429 = c;
    this._r2b3f7f3b50d582 = f;
    this.var_3325 = l;
    this._month = b;
    this.var_5502 = _;
    this._r97c180804b8b4c = h;
  }
  static {
    n(this, "ClubBuyOfferData");
  }
  var_225 = null;
  _r26df50f51daaa9 = !1;
  _disposed = !1;
  var_1530 = null;
  dispose() {
    this.disposed || ((this._disposed = !0), (this.var_225 = null));
  }
  clone() {
    let e = new a(
      this._offerId,
      this._productCode,
      this.var_4122,
      this.var_4478,
      this._r0531e7b9c590c2,
      this.var_4639,
      this.var_4742,
      this._r0b8fbe882ee429,
      this._r2b3f7f3b50d582,
      this.var_3325,
      this._month,
      this.var_5502,
      this._r97c180804b8b4c,
    );
    return (
      (e.page = this.var_225),
      (e._r82e8177c354fb4 = this.var_1530),
      (e._r0ccb2b01c7fb02 = this._r26df50f51daaa9),
      e
    );
  }
  get disposed() {
    return this._disposed;
  }
  get _r82e8177c354fb4() {
    return this.var_1530;
  }
  set _r82e8177c354fb4(e) {
    this.var_1530 = e;
  }
  get offerId() {
    return this._offerId;
  }
  get _raeb033db5aa083() {
    return this._productCode;
  }
  get priceCredits() {
    return this.var_4122;
  }
  get vip() {
    return this.var_4639;
  }
  get months() {
    return this.var_4742;
  }
  get _rbf1116149613a0() {
    return this._r0b8fbe882ee429;
  }
  get _r9e47f6a0e6d2f5() {
    return this._r2b3f7f3b50d582;
  }
  get year() {
    return this.var_3325;
  }
  get month() {
    return this._month;
  }
  get day() {
    return this.var_5502;
  }
  get _r05039e0a50515a() {
    return this._r97c180804b8b4c;
  }
  get priceInActivityPoints() {
    return this.var_4478;
  }
  get activityPointType() {
    return this._r0531e7b9c590c2;
  }
  get priceInCredits() {
    return this.var_4122;
  }
  get page() {
    return this.var_225;
  }
  set page(e) {
    this.var_225 = e;
  }
  get _r74b041d0ff8632() {
    return hn.PRICE_TYPE_CREDITS;
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
  get localizationId() {
    return this._productCode;
  }
  get _r0ccb2b01c7fb02() {
    return this._r26df50f51daaa9;
  }
  set _r0ccb2b01c7fb02(e) {
    this._r26df50f51daaa9 = e;
  }
  get bundlePurchaseAllowed() {
    return !1;
  }
  get isRentOffer() {
    return !1;
  }
  get giftable() {
    return this._r97c180804b8b4c;
  }
  get pricingModel() {
    return "";
  }
  set previewCallbackId(e) {}
  get previewCallbackId() {
    return 0;
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
  get priceInSilver() {
    return -1;
  }
  get _r6a2e5e87fafd63() {
    return 0;
  }
}

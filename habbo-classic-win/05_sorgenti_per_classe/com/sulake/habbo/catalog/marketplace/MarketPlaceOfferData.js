// Extracted from HabboAirLauncher.deobf.js, line 183160.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/marketplace/MarketPlaceOfferData.as
// Obfuscated name: _i7d4d32aebf5cf4

class {
  static {
    n(this, "MarketPlaceOfferData");
  }
  static const_86 = 1;
  static const_103 = 2;
  _offerId;
  var_2287;
  var_4738;
  var_5050;
  var_2364;
  var_3704;
  var_4903;
  _r6095629d6ee8d0 = 0;
  _status;
  _timeLeftMinutes = -1;
  _offerCount;
  var_39 = null;
  _statusTime = Number.NaN;
  var_4367;
  var_5021;
  constructor(e, r, t, i, s, o, d, c, f = -1, l = !1, b = !1) {
    ((this._offerId = e),
      (this.var_2287 = r),
      (this.var_4738 = t),
      (this.var_5050 = i),
      (this.var_2364 = s),
      (this.var_3704 = o),
      (this._status = d),
      (this.var_4903 = c),
      (this._offerCount = f),
      (this.var_4367 = l),
      (this.var_5021 = b));
  }
  dispose() {
    (this.var_39?.dispose(), (this.var_39 = null), (this.var_2364 = null));
  }
  get offerId() {
    return this._offerId;
  }
  set offerId(e) {
    this._offerId = e;
  }
  get furniId() {
    return this.var_2287;
  }
  get furniType() {
    return this.var_4738;
  }
  get extraData() {
    return this.var_5050;
  }
  get stuffData() {
    return this.var_2364;
  }
  get price() {
    return this.var_3704;
  }
  set price(e) {
    this.var_3704 = e;
  }
  get _r4696ae664425c4() {
    return this.var_4903;
  }
  get image() {
    return this.var_39;
  }
  set image(e) {
    (this.var_39?.dispose(), (this.var_39 = e));
  }
  set imageCallback(e) {
    this._r6095629d6ee8d0 = e;
  }
  get imageCallback() {
    return this._r6095629d6ee8d0;
  }
  get status() {
    return this._status;
  }
  get timeLeftMinutes() {
    return this._timeLeftMinutes;
  }
  set timeLeftMinutes(e) {
    this._timeLeftMinutes = e;
  }
  get statusTime() {
    return this._statusTime;
  }
  set statusTime(e) {
    this._statusTime = e;
  }
  get offerCount() {
    return this._offerCount;
  }
  set offerCount(e) {
    this._offerCount = e;
  }
  get isUsable() {
    return this.var_4367;
  }
  get _rd59f342c907b0b() {
    return this.var_5021;
  }
  get _r651925293e1d0b() {
    return (this.var_2364?.uniqueSerialNumber ?? 0) > 0;
  }
}

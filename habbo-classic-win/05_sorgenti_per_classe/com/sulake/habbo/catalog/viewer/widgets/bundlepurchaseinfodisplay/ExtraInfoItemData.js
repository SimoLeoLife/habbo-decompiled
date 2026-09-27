// Extracted from HabboAirLauncher.deobf.js, line 188459.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/bundlepurchaseinfodisplay/ExtraInfoItemData.as
// Obfuscated name: _i2468a8485f4a71

class {
  constructor(e, r = "") {
    this._type = e;
    this._text = r;
  }
  static {
    n(this, "ExtraInfoItemData");
  }
  static TYPE_PROMO = 0;
  static TYPE_BUNDLES_INFO_SCREEN = 1;
  static const_1007 = 2;
  static TYPE_BONUS_BADGE = 3;
  static const_1373 = 4;
  static TYPE_RESET_MESSAGE = 5;
  _text = "";
  var_1205 = 0;
  var_2772 = 0;
  _rfd1de352e0d399 = 0;
  _r9248e154a3729e = 0;
  var_4122 = 0;
  var_4478 = 0;
  _r63b0eda63dd37d = 0;
  _badgeCode = "";
  _r5399acdcca6111 = "";
  set text(e) {
    this._text = e;
  }
  set quantity(e) {
    this.var_1205 = e;
  }
  set activityPointType(e) {
    this.var_2772 = e;
  }
  set _r84248337c3a5e5(e) {
    this._rfd1de352e0d399 = e;
  }
  set _r164806b9e8a59c(e) {
    this._r9248e154a3729e = e;
  }
  set priceCredits(e) {
    this.var_4122 = e;
  }
  set priceActivityPoints(e) {
    this.var_4478 = e;
  }
  set _r3ff0b53e43bee9(e) {
    this._r63b0eda63dd37d = e;
  }
  set _rc9fc89e7eb27a7(e) {
    this._badgeCode = e;
  }
  set _ra08383e83a6126(e) {
    this._r5399acdcca6111 = e;
  }
  get type() {
    return this._type;
  }
  get text() {
    return this._text;
  }
  get quantity() {
    return this.var_1205;
  }
  get priceCredits() {
    return this.var_4122;
  }
  get priceActivityPoints() {
    return this.var_4478;
  }
  get activityPointType() {
    return this.var_2772;
  }
  get _r3ff0b53e43bee9() {
    return this._r63b0eda63dd37d;
  }
  get _rc9fc89e7eb27a7() {
    return this._badgeCode;
  }
  get _ra08383e83a6126() {
    return this._r5399acdcca6111;
  }
  get _r84248337c3a5e5() {
    return this._rfd1de352e0d399;
  }
  get _r164806b9e8a59c() {
    return this._r9248e154a3729e;
  }
}

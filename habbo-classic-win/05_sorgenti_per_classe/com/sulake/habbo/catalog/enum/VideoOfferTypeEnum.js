// Extracted from HabboAirLauncher.deobf.js, line 144104.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/enum/VideoOfferTypeEnum.as
// Obfuscated name: _i08f1028715d356

class a {
  constructor(e) {
    this._value = e;
  }
  static {
    n(this, "VideoOfferTypeEnum");
  }
  static _re2b29ea568a3b3 = new a(0);
  static SNOWWAR = new a(1);
  get value() {
    return this._value;
  }
  equals(e) {
    return e != null && e._value === this._value;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 350830.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/NumberInputParam.as
// Obfuscated name: _id666daf215557e

class {
  constructor(e, r, t, i = 45, s = 0, o = !1, d = !1, c = null) {
    this.var_390 = e;
    this._min = r;
    this._max = t;
    this._width = i;
    this.var_707 = s;
    this.var_1985 = o;
    this._r66bdc3fdd884c8 = d;
    this.var_4411 = c;
  }
  static {
    n(this, "NumberInputParam");
  }
  static DEFAULT = new it();
  get initialValue() {
    return this.var_390;
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  get precision() {
    return this.var_707;
  }
  get endsWithFive() {
    return this.var_1985;
  }
  get width() {
    return this._width;
  }
  get _r063d8b29dca86e() {
    return this._r66bdc3fdd884c8;
  }
  get tooltip() {
    return this.var_4411;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 91637.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_38/class_2451.as
// Obfuscated name: _i3de65ff82ad304

class {
    static {
      n(this, "class_2451");
    }
    static {
      gPr(this, "class_2451");
    }
    _offerId;
    var_2287;
    var_4738;
    var_5050;
    var_2364;
    var_3704;
    _status;
    _timeLeftMinutes;
    var_4903;
    _offerCount;
    _statusTime;
    var_4367;
    var_5021;
    constructor(e, r, t, i, s, o, d, c, f, l = -1, b = Number.NaN, _ = !1, h = !1) {
      ((this._offerId = e),
        (this.var_2287 = r),
        (this.var_4738 = t),
        (this.var_5050 = i),
        (this.var_2364 = s),
        (this.var_3704 = o),
        (this._status = d),
        (this._timeLeftMinutes = c),
        (this.var_4903 = f),
        (this._offerCount = l),
        (this._statusTime = b),
        (this.var_4367 = _),
        (this.var_5021 = h));
    }
    get offerId() {
      return this._offerId;
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
    get status() {
      return this._status;
    }
    get timeLeftMinutes() {
      return this._timeLeftMinutes;
    }
    get _r4696ae664425c4() {
      return this.var_4903;
    }
    get offerCount() {
      return this._offerCount;
    }
    get statusTime() {
      return this._statusTime;
    }
    get isUsable() {
      return this.var_4367;
    }
    get _rd59f342c907b0b() {
      return this.var_5021;
    }
  }

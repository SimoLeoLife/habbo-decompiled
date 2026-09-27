// Extracted from HabboAirLauncher.deobf.js, line 259030.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/cache/NavigatorCacheEntry.as
// Obfuscated name: _i7cf8d1352301f2

class {
  static {
    n(this, "NavigatorCacheEntry");
  }
  _key;
  var_4414;
  var_5600;
  var_5445;
  constructor(e, r, t, i) {
    ((this._key = e), (this.var_4414 = r), (this.var_5600 = t), (this.var_5445 = i));
  }
  hasExpired(e) {
    return e >= this.var_5445;
  }
  get key() {
    return this._key;
  }
  get payload() {
    return this.var_4414;
  }
}

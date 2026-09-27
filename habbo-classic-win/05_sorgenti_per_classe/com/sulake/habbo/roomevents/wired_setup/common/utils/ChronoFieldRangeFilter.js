// Extracted from HabboAirLauncher.deobf.js, line 351681.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/utils/ChronoFieldRangeFilter.as
// Obfuscated name: _i371aa12b02f2a8

class {
  constructor(e, r, t, i, s = 0) {
    this._name = e;
    this.var_5830 = r;
    this._min = t;
    this._max = i;
    this.var_718 = s;
  }
  static {
    n(this, "ChronoFieldRangeFilter");
  }
  get defaultValue() {
    return this.var_718;
  }
  get name() {
    return this._name;
  }
  get useFilter() {
    return this.var_5830;
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
}

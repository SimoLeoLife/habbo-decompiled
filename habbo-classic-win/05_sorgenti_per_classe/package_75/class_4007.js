// Estratto da HabboAirLauncher.deobf.js, riga 92705.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_75/class_4007.as
// Nome offuscato: _i8be25a14b881ac

class {
    static {
      n(this, "class_4007");
    }
    static {
      BSr(this, "class_4007");
    }
    var_3231;
    var_402;
    _endIndex;
    var_1271 = !1;
    constructor(e) {
      ((this.var_3231 = e.readString()),
        (this.var_402 = e.readInteger()),
        (this._endIndex = e.readInteger()));
    }
    dispose() {
      ((this.var_1271 = !0),
        (this.var_3231 = ""),
        (this.var_402 = -1),
        (this._endIndex = -1));
    }
    get disposed() {
      return this.var_1271;
    }
    get pattern() {
      return this.var_3231;
    }
    get startIndex() {
      return this.var_402;
    }
    get endIndex() {
      return this._endIndex;
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 103369.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3799.as
// Nome offuscato: _iec6a9fa5011560

class {
    static {
      n(this, "class_3799");
    }
    static {
      IYr(this, "class_3799");
    }
    var_828 = "";
    var_1062 = 0;
    _productCode = "";
    var_191 = 0;
    var_1059 = "";
    _redd20a0b59a048 = !1;
    _petFigureString = "";
    get itemType() {
      return this.var_828;
    }
    get classId() {
      return this.var_1062;
    }
    get _raeb033db5aa083() {
      return this._productCode;
    }
    get _r2c53800a52f206() {
      return this.var_191;
    }
    get _rc6f3ed5751b766() {
      return this.var_1059;
    }
    get _r176bfeda3ea21e() {
      return this._redd20a0b59a048;
    }
    get _r48777043299a0c() {
      return this._petFigureString;
    }
    flush() {
      return ((this.var_828 = ""), (this.var_1062 = 0), (this._productCode = ""), !0);
    }
    parse(e) {
      return e
        ? ((this.var_828 = e.readString()),
          (this.var_1062 = e.readInteger()),
          (this._productCode = e.readString()),
          (this.var_191 = e.readInteger()),
          (this.var_1059 = e.readString()),
          (this._redd20a0b59a048 = e.readBoolean()),
          (this._petFigureString = e.readString()),
          !0)
        : !1;
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 100239.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/AreaHideMessageData.as
// Nome offuscato: _i1af4710be441e8

class {
    static {
      n(this, "AreaHideMessageData");
    }
    static {
      dzr(this, "AreaHideMessageData");
    }
    var_2287;
    _on;
    var_1811;
    var_1980;
    _width;
    _length;
    var_4678;
    constructor(e) {
      ((this.var_2287 = e.readInteger()),
        (this._on = e.readBoolean()),
        (this.var_1811 = e.readInteger()),
        (this.var_1980 = e.readInteger()),
        (this._width = e.readInteger()),
        (this._length = e.readInteger()),
        (this.var_4678 = e.readBoolean()));
    }
    get furniId() {
      return this.var_2287;
    }
    get on() {
      return this._on;
    }
    get _r1218139d05a185() {
      return this.var_1811;
    }
    get _r959c41620a2b1c() {
      return this.var_1980;
    }
    get width() {
      return this._width;
    }
    get length() {
      return this._length;
    }
    get invert() {
      return this.var_4678;
    }
  }

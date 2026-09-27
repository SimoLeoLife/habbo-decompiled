// Extracted from HabboAirLauncher.deobf.js, line 100108.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2406.as
// Obfuscated name: _i02ba8a8c7a0da5

class a {
    static {
      n(this, "class_2406");
    }
    static {
      ezr(this, "class_2406");
    }
    static var_5845 = 0;
    static var_5986 = 1;
    _typeCode = 0;
    var_2762 = 0;
    _offerId = 0;
    var_645 = "";
    _x = 0;
    _y = 0;
    var_81 = 0;
    var_4144 = "";
    get _r46e70b63ffc509() {
      return this._typeCode;
    }
    get pageId() {
      return this.var_2762;
    }
    get offerId() {
      return this._offerId;
    }
    get extraParam() {
      return this.var_645;
    }
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    get direction() {
      return this.var_81;
    }
    get _r8a8bd2d04c661f() {
      return this.var_4144;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return e
        ? ((this._typeCode = e.readInteger()),
          (this.var_2762 = e.readInteger()),
          (this._offerId = e.readInteger()),
          (this.var_645 = e.readString()),
          this._typeCode === a.var_5845
            ? ((this._x = e.readInteger()),
              (this._y = e.readInteger()),
              (this.var_81 = e.readInteger()))
            : (this.var_4144 = e.readString()),
          !0)
        : !1;
    }
  }

// Extracted from HabboAirLauncher.deobf.js, line 105970.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_103/class_3716.as
// Obfuscated name: _i646b1e5f816597

class {
    static {
      n(this, "class_3716");
    }
    static {
      $Zr(this, "class_3716");
    }
    static const_704 = 6;
    static const_1036 = 9;
    static const_1346 = 3;
    static const_1349 = 7;
    static const_580 = 5;
    static const_490 = 11;
    static const_1319 = 4;
    static const_157 = 16;
    static const_1103 = 12;
    static const_721 = 2;
    static const_788 = 1;
    static const_830 = 13;
    static const_871 = 10;
    static const_1249 = 8;
    var_2440 = 0;
    _errorCode = 0;
    var_1387 = "";
    parse(e) {
      return (
        (this.var_2440 = e.readInteger()),
        (this._errorCode = e.readInteger()),
        (this.var_1387 = e.readString()),
        !0
      );
    }
    flush() {
      return !0;
    }
    get roomId() {
      return this.var_2440;
    }
    get errorCode() {
      return this._errorCode;
    }
    get info() {
      return this.var_1387;
    }
  }

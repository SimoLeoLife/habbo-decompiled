// Estratto da HabboAirLauncher.deobf.js, riga 126657.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_3402.as
// Nome offuscato: _i30daf19c91b1a1

class {
    static {
      n(this, "class_3402");
    }
    static {
      dIt(this, "class_3402");
    }
    static SUCCESS = 0;
    static DISABLED = 1;
    static const_110 = 2;
    static const_82 = 3;
    static const_926 = 4;
    static const_985 = 5;
    static const_1316 = 6;
    static const_683 = 7;
    static const_168 = 8;
    static FAILED = 9;
    var_3422 = null;
    _r03f2910fbe9c48 = 0;
    _points = 0;
    flush() {
      return ((this.var_3422 = null), (this._r03f2910fbe9c48 = 0), (this._points = 0), !0);
    }
    parse(e) {
      return (
        (this.var_3422 = e.readString()),
        (this._r03f2910fbe9c48 = e.readInteger()),
        (this._points = e.readInteger()),
        !0
      );
    }
    get trackId() {
      return this.var_3422;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
    get points() {
      return this._points;
    }
  }

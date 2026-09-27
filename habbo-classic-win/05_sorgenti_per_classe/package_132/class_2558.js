// Extracted from HabboAirLauncher.deobf.js, line 126594.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_2558.as
// Obfuscated name: _icc0191f6bced4a

class {
    static {
      n(this, "class_2558");
    }
    static {
      iIt(this, "class_2558");
    }
    static SUCCESS = 0;
    static DISABLED = 1;
    static const_110 = 2;
    static const_606 = 3;
    static const_82 = 4;
    static const_881 = 5;
    static const_1173 = 6;
    static FAILED = 7;
    static const_595 = 8;
    var_3422 = null;
    var_3392 = null;
    _r03f2910fbe9c48 = 0;
    flush() {
      return (
        (this.var_3422 = null),
        (this.var_3392 = null),
        (this._r03f2910fbe9c48 = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3422 = e.readString()),
        (this.var_3392 = e.readString()),
        (this._r03f2910fbe9c48 = e.readInteger()),
        !0
      );
    }
    get trackId() {
      return this.var_3422;
    }
    get rewardId() {
      return this.var_3392;
    }
    get var_1827() {
      return this._r03f2910fbe9c48;
    }
  }

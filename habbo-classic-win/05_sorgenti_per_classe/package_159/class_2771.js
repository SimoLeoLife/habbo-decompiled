// Extracted from HabboAirLauncher.deobf.js, line 103955.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_159/class_2771.as
// Obfuscated name: _i21e41d3b8caed0

class {
    static {
      n(this, "class_2771");
    }
    static {
      bKr(this, "class_2771");
    }
    _x = 0;
    _y = 0;
    var_911 = 0;
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    get dir() {
      return this.var_911;
    }
    flush() {
      return ((this._x = 0), (this._y = 0), (this.var_911 = 0), !0);
    }
    parse(e) {
      return (
        (this._x = e.readInteger()),
        (this._y = e.readInteger()),
        (this.var_911 = e.readInteger()),
        !0
      );
    }
  }

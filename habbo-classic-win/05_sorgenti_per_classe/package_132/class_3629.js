// Extracted from HabboAirLauncher.deobf.js, line 126716.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_3629.as
// Obfuscated name: _i926e5b35b343da

class {
    static {
      n(this, "class_3629");
    }
    static {
      bIt(this, "class_3629");
    }
    var_3422 = null;
    var_3074 = null;
    var_1594 = 0;
    _points = 0;
    flush() {
      return (
        (this.var_3422 = null),
        (this.var_3074 = null),
        (this.var_1594 = 0),
        (this._points = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this.var_3422 = e.readString()),
        (this.var_3074 = e.readString()),
        (this.var_1594 = e.readInteger()),
        (this._points = e.readInteger()),
        !0
      );
    }
    get trackId() {
      return this.var_3422;
    }
    get taskId() {
      return this.var_3074;
    }
    get progressCount() {
      return this.var_1594;
    }
    get points() {
      return this._points;
    }
  }

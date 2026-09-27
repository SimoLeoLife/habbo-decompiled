// Extracted from HabboAirLauncher.deobf.js, line 77431.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_200/class_3919.as
// Obfuscated name: _i85e2d3181d55cf

class {
    static {
      n(this, "class_3919");
    }
    static {
      agr(this, "class_3919");
    }
    _timeStr = "";
    var_5017 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this._timeStr = e.readString()),
        (this.var_5017 = e.readInteger()),
        !0
      );
    }
    get timeStr() {
      return this._timeStr;
    }
    get _r87ac8bfd8368a8() {
      return this.var_5017;
    }
  }

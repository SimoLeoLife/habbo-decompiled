// Estratto da HabboAirLauncher.deobf.js, riga 84735.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_182/class_3132.as
// Nome offuscato: _i49dee3edbef719

class {
    static {
      n(this, "class_3132");
    }
    static {
      Sxr(this, "class_3132");
    }
    _stuffId = -1;
    var_3332 = 0;
    var_3454 = "";
    var_3553 = 0;
    var_3594 = 0;
    _endTime = 0;
    flush() {
      return (
        (this._stuffId = -1),
        (this.var_3332 = 0),
        (this.var_3454 = ""),
        (this.var_3553 = 0),
        (this.var_3594 = 0),
        (this._endTime = 0),
        !0
      );
    }
    parse(e) {
      return (
        (this._stuffId = e.readInteger()),
        (this.var_3332 = e.readInteger()),
        (this.var_3454 = e.readString()),
        (this.var_3553 = e.readInteger()),
        (this.var_3594 = e.readInteger()),
        (this._endTime = e.readInteger()),
        !0
      );
    }
    get stuffId() {
      return this._stuffId;
    }
    get achievementId() {
      return this.var_3332;
    }
    get _rcb496c021f73b4() {
      return this.var_3454;
    }
    get _rf1183cfe00f99a() {
      return this.var_3553;
    }
    get _rc9adb2a0dcc5d3() {
      return this.var_3594;
    }
    get endTime() {
      return this._endTime;
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 103510.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_4011.as
// Nome offuscato: _i36f1051ccbd8fc

class {
    static {
      n(this, "class_4011");
    }
    static {
      SYr(this, "class_4011");
    }
    var_4151 = !1;
    var_3183 = 0;
    var_3162 = "";
    var_4997 = !1;
    var_4202 = 0;
    var_5655 = 0;
    var_3704 = 0;
    get _r60165b0677617a() {
      return this.var_4151;
    }
    get renterId() {
      return this.var_3183;
    }
    get _r8995cb8f6716b5() {
      return this.var_3162;
    }
    get _rb507cf904a1d48() {
      return this.var_4997;
    }
    get _r2bdde5f2e1ce0c() {
      return this.var_4202;
    }
    get timeRemaining() {
      return this.var_5655;
    }
    get price() {
      return this.var_3704;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_4151 = e.readBoolean()),
        (this.var_4202 = e.readInteger()),
        (this.var_4997 = this.var_4202 === 0),
        (this.var_3183 = e.readInteger()),
        (this.var_3162 = e.readString()),
        (this.var_5655 = e.readInteger()),
        (this.var_3704 = e.readInteger()),
        this.var_4151 || ((this.var_3183 = -1), (this.var_3162 = "")),
        !0
      );
    }
  }

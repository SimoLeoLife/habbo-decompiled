// Estratto da HabboAirLauncher.deobf.js, riga 73641.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_223/class_3886.as
// Nome offuscato: _i960861a8380e3b

class {
    static {
      n(this, "class_3886");
    }
    static {
      r2r(this, "class_3886");
    }
    var_3004 = !1;
    var_3609 = null;
    isOk() {
      return this.var_3004;
    }
    _rc57adb513c5c2b() {
      return this.var_3609;
    }
    flush() {
      return ((this.var_3004 = !1), (this.var_3609 = null), !0);
    }
    parse(e) {
      return ((this.var_3004 = e.readBoolean()), (this.var_3609 = e.readString()), !0);
    }
  }

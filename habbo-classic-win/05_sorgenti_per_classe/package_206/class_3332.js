// Estratto da HabboAirLauncher.deobf.js, riga 113202.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_206/class_3332.as
// Nome offuscato: _i7f4efaa6f36711

class {
    static {
      n(this, "class_3332");
    }
    static {
      Bdt(this, "class_3332");
    }
    var_3195 = 0;
    var_1241 = !1;
    parse(e) {
      return ((this.var_3195 = e.readByte()), (this.var_1241 = e.readBoolean()), !0);
    }
    flush() {
      return !0;
    }
    get rewardCategory() {
      return this.var_3195;
    }
    get result() {
      return this.var_1241;
    }
  }

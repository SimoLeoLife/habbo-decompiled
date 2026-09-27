// Estratto da HabboAirLauncher.deobf.js, riga 97257.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_169/class_2841.as
// Nome offuscato: _i89caf7e357fda2

class {
    static {
      n(this, "class_2841");
    }
    static {
      tVr(this, "class_2841");
    }
    var_3213 = null;
    var_3290 = !1;
    get claimId() {
      return this.var_3213;
    }
    get _r94c576b7cbc573() {
      return this.var_3290;
    }
    flush() {
      return ((this.var_3213 = null), (this.var_3290 = !1), !0);
    }
    parse(e) {
      return ((this.var_3213 = e.readString()), (this.var_3290 = e.readBoolean()), !0);
    }
  }

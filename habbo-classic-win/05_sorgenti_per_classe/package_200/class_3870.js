// Estratto da HabboAirLauncher.deobf.js, riga 77359.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_200/class_3870.as
// Nome offuscato: _ic31a3afe0fa70d

class {
    static {
      n(this, "class_3870");
    }
    static {
      Kmr(this, "class_3870");
    }
    var_4294 = !1;
    var_4582 = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_4294 = e.readBoolean()), (this.var_4582 = e.readInteger()), !0);
    }
    get isPartOf() {
      return this.var_4294;
    }
    get targetId() {
      return this.var_4582;
    }
  }

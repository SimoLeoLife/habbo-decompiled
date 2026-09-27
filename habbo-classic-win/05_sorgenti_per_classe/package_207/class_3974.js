// Estratto da HabboAirLauncher.deobf.js, riga 77648.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_207/class_3974.as
// Nome offuscato: _iabfd49da97c252

class {
    static {
      n(this, "class_3974");
    }
    static {
      xgr(this, "class_3974");
    }
    var_2561 = !1;
    var_1920 = null;
    parse(e) {
      return (
        (this.var_2561 = e.readBoolean()),
        this.var_2561 && (this.var_1920 = new class_3380(e)),
        !0
      );
    }
    flush() {
      return ((this.var_2561 = !1), (this.var_1920 = null), !0);
    }
    get success() {
      return this.var_2561;
    }
    get productData() {
      return this.var_1920;
    }
  }

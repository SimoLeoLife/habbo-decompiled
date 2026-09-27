// Estratto da HabboAirLauncher.deobf.js, riga 91601.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_227/class_3895.as
// Nome offuscato: _if4686edcd82da3

class {
    static {
      n(this, "class_3895");
    }
    static {
      uPr(this, "class_3895");
    }
    var_5694 = !1;
    get acknowledged() {
      return this.var_5694;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_5694 = e.readBoolean()), !0);
    }
  }

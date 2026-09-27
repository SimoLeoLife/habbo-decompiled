// Estratto da HabboAirLauncher.deobf.js, riga 85904.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_108/class_3894.as
// Nome offuscato: _i480b4539474860

class {
    static {
      n(this, "class_3894");
    }
    static {
      $Cr(this, "class_3894");
    }
    var_95 = null;
    get forumData() {
      return this.var_95;
    }
    flush() {
      return ((this.var_95 = null), !0);
    }
    parse(e) {
      return ((this.var_95 = yde.readFromMessage(e)), !0);
    }
  }

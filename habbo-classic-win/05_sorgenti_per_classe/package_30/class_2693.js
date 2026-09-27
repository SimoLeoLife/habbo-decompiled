// Estratto da HabboAirLauncher.deobf.js, riga 112707.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_2693.as
// Nome offuscato: _iea40fda3d937be

class {
    static {
      n(this, "class_2693");
    }
    static {
      Lot(this, "class_2693");
    }
    link = null;
    flush() {
      return ((this.link = null), !0);
    }
    parse(e) {
      return ((this.link = e.readString()), !0);
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 75066.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_2289.as
// Nome offuscato: _i515962d7fd03f9

class a {
    static {
      n(this, "class_2289");
    }
    static {
      _4r(this, "class_2289");
    }
    static const_287 = 1;
    static const_748 = 3;
    static const_1086 = 0;
    static const_660 = 2;
    className = null;
    var_1827 = 0;
    flush() {
      return ((this.className = null), (this.var_1827 = 0), !0);
    }
    parse(e) {
      return ((this.className = e.readString()), (this.var_1827 = e.readByte()), !0);
    }
    get _ra92b61bebbd953() {
      return this.var_1827 === a.const_1086;
    }
  }

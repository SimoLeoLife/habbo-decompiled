// Estratto da HabboAirLauncher.deobf.js, riga 105216.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_2737.as
// Nome offuscato: _i44c4d5a1780459

class {
    static {
      n(this, "class_2737");
    }
    static {
      eZr(this, "class_2737");
    }
    _flatId = 0;
    get flatId() {
      return this._flatId;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
  }

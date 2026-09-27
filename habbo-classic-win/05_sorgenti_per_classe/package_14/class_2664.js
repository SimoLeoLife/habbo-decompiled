// Estratto da HabboAirLauncher.deobf.js, riga 105011.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_2664.as
// Nome offuscato: _i3aeede050f39ab

class {
    static {
      n(this, "class_2664");
    }
    static {
      L$r(this, "class_2664");
    }
    _flatId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), !0);
    }
    get flatId() {
      return this._flatId;
    }
  }

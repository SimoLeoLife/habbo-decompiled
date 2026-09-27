// Estratto da HabboAirLauncher.deobf.js, riga 105288.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_2620.as
// Nome offuscato: _i3ad8ec64332ea5

class {
    static {
      n(this, "class_2620");
    }
    static {
      dZr(this, "class_2620");
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

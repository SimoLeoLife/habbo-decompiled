// Estratto da HabboAirLauncher.deobf.js, riga 112740.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_37/class_2581.as
// Nome offuscato: _i7b65a1d222e6c7

class a {
    static {
      n(this, "class_2581");
    }
    static {
      Hot(this, "class_2581");
    }
    static const_1392 = 16;
    respect = 0;
    var_5073 = 0;
    _r9624d2c1d70bed = null;
    flush() {
      return ((this._r9624d2c1d70bed = null), !0);
    }
    parse(e) {
      return (
        (this.respect = e.readInteger()),
        (this.var_5073 = e.readInteger()),
        (this._r9624d2c1d70bed = new class_2503(e)),
        !0
      );
    }
    isTreat() {
      return this._r9624d2c1d70bed?.typeId === a.const_1392;
    }
  }

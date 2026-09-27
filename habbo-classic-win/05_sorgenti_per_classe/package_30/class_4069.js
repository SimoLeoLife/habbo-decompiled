// Estratto da HabboAirLauncher.deobf.js, riga 86905.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_30/class_4069.as
// Nome offuscato: _i559e6fe206536f

class {
    static {
      n(this, "class_4069");
    }
    static {
      qEr(this, "class_4069");
    }
    _rd209a96a39e57b = null;
    flush() {
      return ((this._rd209a96a39e57b = null), !0);
    }
    parse(e) {
      this._rd209a96a39e57b = new Map();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rd209a96a39e57b.set(e.readInteger(), e.readString());
      return !0;
    }
    get _reae9b9a32dabbd() {
      return this._rd209a96a39e57b;
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 75735.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_12/class_1768.as
// Nome offuscato: _i5fb77deacdbee7

class {
    static {
      n(this, "class_1768");
    }
    static {
      E7r(this, "class_1768");
    }
    _r67599f52947142 = null;
    flush() {
      return ((this._r67599f52947142 = null), !0);
    }
    parse(e) {
      this._r67599f52947142 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r67599f52947142.push(e.readInteger());
      return !0;
    }
    get _r52afff10387e2e() {
      return this._r67599f52947142;
    }
  }

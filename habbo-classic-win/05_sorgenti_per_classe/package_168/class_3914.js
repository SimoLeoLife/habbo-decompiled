// Estratto da HabboAirLauncher.deobf.js, riga 103474.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3914.as
// Nome offuscato: _i6209f97fcde5b1

class {
    static {
      n(this, "class_3914");
    }
    static {
      kYr(this, "class_3914");
    }
    _expiryTime = 0;
    get expiryTime() {
      return this._expiryTime;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._expiryTime = e.readInteger()), !0);
    }
  }

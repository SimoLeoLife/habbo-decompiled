// Estratto da HabboAirLauncher.deobf.js, riga 106422.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_160/class_4009.as
// Nome offuscato: _i5bcffffb3f339e

class {
    static {
      n(this, "class_4009");
    }
    static {
      Sqr(this, "class_4009");
    }
    _entry = null;
    get entry() {
      return this._entry;
    }
    flush() {
      return ((this._entry = null), !0);
    }
    parse(e) {
      let r = e.readInteger(),
        t = e.readInteger(),
        i = e.readString(),
        s = e.readString();
      return ((this._entry = new class_2354(r, t, i, s)), !0);
    }
  }

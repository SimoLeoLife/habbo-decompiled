// Estratto da HabboAirLauncher.deobf.js, riga 96547.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_27/class_3996.as
// Nome offuscato: _id0d6a7b1ca600e

class {
    static {
      n(this, "class_3996");
    }
    static {
      jFr(this, "class_3996");
    }
    _key = "";
    get key() {
      return this._key;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._key = e.readString()), !0);
    }
  }

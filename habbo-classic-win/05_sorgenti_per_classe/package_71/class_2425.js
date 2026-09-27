// Estratto da HabboAirLauncher.deobf.js, riga 102212.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_2425.as
// Nome offuscato: _ib4d7232a08a44b

class {
    static {
      n(this, "class_2425");
    }
    static {
      gXr(this, "class_2425");
    }
    _id = 0;
    get id() {
      return this._id;
    }
    flush() {
      return ((this._id = 0), !0);
    }
    parse(e) {
      return e ? ((this._id = Number.parseInt(e.readString(), 10)), !0) : !1;
    }
  }

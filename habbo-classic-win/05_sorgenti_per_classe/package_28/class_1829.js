// Estratto da HabboAirLauncher.deobf.js, riga 95778.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_28/class_1829.as
// Nome offuscato: _ic5e80e50049f38

class {
    static {
      n(this, "class_1829");
    }
    static {
      LOr(this, "class_1829");
    }
    _liftedRooms = [];
    flush() {
      return ((this._liftedRooms = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._liftedRooms.push(new class_2495(e));
      return !0;
    }
    get liftedRooms() {
      return this._liftedRooms;
    }
  }

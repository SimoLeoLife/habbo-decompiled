// Estratto da HabboAirLauncher.deobf.js, riga 101229.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_71/class_3827.as
// Nome offuscato: _i7fab77dc2058ea

class {
    static {
      n(this, "class_3827");
    }
    static {
      pQr(this, "class_3827");
    }
    _id = 0;
    _state = 0;
    _data = new mi();
    get id() {
      return this._id;
    }
    get state() {
      return this._state;
    }
    get data() {
      return this._data;
    }
    flush() {
      return ((this._state = 0), (this._data = new mi()), !0);
    }
    parse(e) {
      if (!e) return !1;
      ((this._id = Number.parseInt(e.readString(), 10)),
        (this._data = zs.parseStuffData(e)),
        (this._state = 0));
      let r = this._data.getLegacyString();
      return (Number.isNaN(Number.parseFloat(r)) || (this._state = Number.parseInt(r, 10)), !0);
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 103236.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_3288.as
// Nome offuscato: _i421e95c5da7c6b

class {
    static {
      n(this, "class_3288");
    }
    static {
      fYr(this, "class_3288");
    }
    _id = -1;
    _status = 0;
    get id() {
      return this._id;
    }
    get status() {
      return this._status;
    }
    flush() {
      return ((this._id = -1), (this._status = 0), !0);
    }
    parse(e) {
      return e ? ((this._id = e.readInteger()), (this._status = e.readInteger()), !0) : !1;
    }
  }

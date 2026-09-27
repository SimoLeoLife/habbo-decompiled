// Estratto da HabboAirLauncher.deobf.js, riga 97173.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_219/class_4164.as
// Nome offuscato: _id8d446ff5b9f73

class {
    static {
      n(this, "class_4164");
    }
    static {
      YHr(this, "class_4164");
    }
    _status = 0;
    var_2440 = 0;
    get status() {
      return this._status;
    }
    get roomId() {
      return this.var_2440;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._status = e.readShort()), (this.var_2440 = e.readInteger()), !0);
    }
  }

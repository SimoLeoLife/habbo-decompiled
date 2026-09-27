// Estratto da HabboAirLauncher.deobf.js, riga 94086.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_3477.as
// Nome offuscato: _i0f75771f309ae1

class {
    static {
      n(this, "class_3477");
    }
    static {
      OLr(this, "class_3477");
    }
    _limit = 0;
    var_4010 = [];
    flush() {
      return ((this.var_4010 = []), !0);
    }
    parse(e) {
      this._limit = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_4010.push(e.readInteger());
      return !0;
    }
    get limit() {
      return this._limit;
    }
    get favouriteRoomIds() {
      return this.var_4010;
    }
  }

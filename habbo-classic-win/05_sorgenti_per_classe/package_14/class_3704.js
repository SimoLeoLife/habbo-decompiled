// Estratto da HabboAirLauncher.deobf.js, riga 104931.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_14/class_3704.as
// Nome offuscato: _ia6125f9c2098b8

class {
    static {
      n(this, "class_3704");
    }
    static {
      B$r(this, "class_3704");
    }
    _flatId = 0;
    _userName = null;
    get userName() {
      return this._userName;
    }
    get flatId() {
      return this._flatId;
    }
    flush() {
      return ((this._userName = null), !0);
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), (this._userName = e.readString()), !0);
    }
  }

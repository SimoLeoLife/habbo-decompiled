// Estratto da HabboAirLauncher.deobf.js, riga 93756.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_3755.as
// Nome offuscato: _id4518060de921d

class {
    static {
      n(this, "class_3755");
    }
    static {
      dLr(this, "class_3755");
    }
    var_5766 = !1;
    _errorCode = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_5766 = e.readBoolean()), (this._errorCode = e.readInteger()), !0);
    }
    get canCreateEvent() {
      return this.var_5766;
    }
    get errorCode() {
      return this._errorCode;
    }
  }

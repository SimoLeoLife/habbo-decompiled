// Estratto da HabboAirLauncher.deobf.js, riga 109592.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredtrading/chests/class_4236.as
// Nome offuscato: _ibe4290ebb47b75

class {
    static {
      n(this, "class_4236");
    }
    static {
      iat(this, "class_4236");
    }
    _chestId = 0;
    var_3829 = !1;
    flush() {
      return ((this._chestId = 0), (this.var_3829 = !1), !0);
    }
    parse(e) {
      return ((this._chestId = e.readInteger()), (this.var_3829 = e.readBoolean()), !0);
    }
    get chestId() {
      return this._chestId;
    }
    get _r7c1255eeeb6c76() {
      return this.var_3829;
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 108085.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/class_3387.as
// Nome offuscato: _ie76b56dc196c00

class {
    static {
      n(this, "class_3387");
    }
    static {
      Het(this, "class_3387");
    }
    _index = 0;
    var_3309 = !1;
    flush() {
      return ((this._index = 0), (this.var_3309 = !1), !0);
    }
    parse(e) {
      return ((this._index = e.readInteger()), (this.var_3309 = e.readBoolean()), !0);
    }
    get index() {
      return this._index;
    }
    get openMenu() {
      return this.var_3309;
    }
  }

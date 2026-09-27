// Estratto da HabboAirLauncher.deobf.js, riga 108826.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/userdefinedroomevents/wiredmenu/class_3093.as
// Nome offuscato: _i41022f1cff7327

class {
    static {
      n(this, "class_3093");
    }
    static {
      stt(this, "class_3093");
    }
    static var_5953 = 2;
    static var_5945 = 0;
    static var_5971 = 1;
    static var_5993 = 3;
    static var_5948 = 4;
    static var_5981 = 5;
    static var_5979 = 6;
    static var_5909 = 7;
    _errorCode = 0;
    flush() {
      return ((this._errorCode = 0), !0);
    }
    parse(e) {
      return ((this._errorCode = e.readShort()), !0);
    }
    get errorCode() {
      return this._errorCode;
    }
  }

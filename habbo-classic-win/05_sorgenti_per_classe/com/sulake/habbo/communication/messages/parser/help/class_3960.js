// Extracted from HabboAirLauncher.deobf.js, line 88317.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_3960.as
// Obfuscated name: _i8a9237e6207e3d

class {
    static {
      n(this, "class_3960");
    }
    static {
      fBr(this, "class_3960");
    }
    static const_1164 = 0;
    static const_1227 = 1;
    static const_502 = 2;
    static const_720 = 3;
    static const_448 = 4;
    _errorCode = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._errorCode = e.readInteger()), !0);
    }
    get errorCode() {
      return this._errorCode;
    }
  }

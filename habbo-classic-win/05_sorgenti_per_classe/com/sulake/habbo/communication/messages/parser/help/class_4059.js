// Extracted from HabboAirLauncher.deobf.js, line 88630.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/help/class_4059.as
// Obfuscated name: _if552b2bdc480c2

class a {
    static {
      n(this, "class_4059");
    }
    static {
      OBr(this, "class_4059");
    }
    static const_749 = 0;
    static const_1229 = 1;
    static const_401 = 2;
    _resolution = -1;
    flush() {
      return ((this._resolution = -1), !0);
    }
    parse(e) {
      return ((this._resolution = e.readInteger()), !0);
    }
    get localizationCode() {
      return this._resolution === a.const_749 || this._resolution === a.const_1229
        ? "valid"
        : "invalid";
    }
  }

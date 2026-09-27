// Extracted from HabboAirLauncher.deobf.js, line 108455.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/incoming/userdefinedroomevents/class_3079.as
// Obfuscated name: _id869e585f84d1a

class {
    static {
      n(this, "class_3079");
    }
    static {
      Mrt(this, "class_3079");
    }
    _key;
    _value;
    constructor(e) {
      ((this._key = e.readString()), (this._value = e.readString()));
    }
    get key() {
      return this._key;
    }
    get value() {
      return this._value;
    }
  }

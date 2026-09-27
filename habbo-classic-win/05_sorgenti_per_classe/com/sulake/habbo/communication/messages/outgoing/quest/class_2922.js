// Extracted from HabboAirLauncher.deobf.js, line 120751.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/quest/class_2922.as
// Obfuscated name: _id3ca6e96fb5cb2

class {
    static {
      n(this, "class_2922");
    }
    static {
      Q5t(this, "class_2922");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

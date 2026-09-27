// Extracted from HabboAirLauncher.deobf.js, line 120649.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/quest/class_3384.as
// Obfuscated name: _i79dc8f14ac6f56

class {
    static {
      n(this, "class_3384");
    }
    static {
      S5t(this, "class_3384");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

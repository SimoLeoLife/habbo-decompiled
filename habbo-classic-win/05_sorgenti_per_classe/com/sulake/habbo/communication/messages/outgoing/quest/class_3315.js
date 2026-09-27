// Estratto da HabboAirLauncher.deobf.js, riga 120581.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/quest/class_3315.as
// Nome offuscato: _i90bf5f7f0b2bed

class {
    static {
      n(this, "class_3315");
    }
    static {
      M5t(this, "class_3315");
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

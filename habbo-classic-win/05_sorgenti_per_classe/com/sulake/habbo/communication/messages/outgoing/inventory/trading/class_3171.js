// Estratto da HabboAirLauncher.deobf.js, riga 118004.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/inventory/trading/class_3171.as
// Nome offuscato: _id15ef5b6055a58

class {
    static {
      n(this, "class_3171");
    }
    static {
      e3t(this, "class_3171");
    }
    _data = [];
    constructor(e) {
      this._data.push(e.length);
      for (let r of e) this._data.push(r);
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {}
  }

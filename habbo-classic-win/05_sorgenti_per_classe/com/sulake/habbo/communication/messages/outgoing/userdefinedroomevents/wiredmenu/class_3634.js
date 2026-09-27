// Extracted from HabboAirLauncher.deobf.js, line 123923.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/userdefinedroomevents/wiredmenu/class_3634.as
// Obfuscated name: _id9833b3ff80004

class {
    static {
      n(this, "class_3634");
    }
    static {
      Omt(this, "class_3634");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

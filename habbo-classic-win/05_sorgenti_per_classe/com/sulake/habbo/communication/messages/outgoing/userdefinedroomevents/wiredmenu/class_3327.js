// Extracted from HabboAirLauncher.deobf.js, line 123946.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/userdefinedroomevents/wiredmenu/class_3327.as
// Obfuscated name: _i63ed097d6c2af1

class {
    static {
      n(this, "class_3327");
    }
    static {
      Hmt(this, "class_3327");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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

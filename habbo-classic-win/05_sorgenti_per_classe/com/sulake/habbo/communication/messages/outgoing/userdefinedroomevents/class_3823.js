// Extracted from HabboAirLauncher.deobf.js, line 123413.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/outgoing/userdefinedroomevents/class_3823.as
// Obfuscated name: _if3d945eac95bd2

class {
    static {
      n(this, "class_3823");
    }
    static {
      qpt(this, "class_3823");
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

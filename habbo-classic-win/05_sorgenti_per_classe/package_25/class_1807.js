// Extracted from HabboAirLauncher.deobf.js, line 125064.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_1807.as
// Obfuscated name: _ic07e12591158e5

class {
    static {
      n(this, "class_1807");
    }
    static {
      Ovt(this, "class_1807");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

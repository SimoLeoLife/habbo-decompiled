// Extracted from HabboAirLauncher.deobf.js, line 125287.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2483.as
// Obfuscated name: _i5f43d8504747a3

class {
    static {
      n(this, "class_2483");
    }
    static {
      swt(this, "class_2483");
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

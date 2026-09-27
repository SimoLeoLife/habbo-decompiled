// Extracted from HabboAirLauncher.deobf.js, line 125224.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_1869.as
// Obfuscated name: _i78e5a6cee892f0

class {
    static {
      n(this, "class_1869");
    }
    static {
      ewt(this, "class_1869");
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

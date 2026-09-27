// Extracted from HabboAirLauncher.deobf.js, line 124612.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2755.as
// Obfuscated name: _i499233386e0ca0

class {
    static {
      n(this, "class_2755");
    }
    static {
      jgt(this, "class_2755");
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

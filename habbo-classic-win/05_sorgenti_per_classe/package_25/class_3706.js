// Extracted from HabboAirLauncher.deobf.js, line 125018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_3706.as
// Obfuscated name: _i2879b602d13605

class {
    static {
      n(this, "class_3706");
    }
    static {
      Svt(this, "class_3706");
    }
    _data = [];
    constructor(e) {
      this._data.push(e | 0);
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

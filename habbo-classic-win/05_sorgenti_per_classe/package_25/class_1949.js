// Extracted from HabboAirLauncher.deobf.js, line 124896.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_1949.as
// Obfuscated name: _i494540f04bf21d

class {
    static {
      n(this, "class_1949");
    }
    static {
      wvt(this, "class_1949");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

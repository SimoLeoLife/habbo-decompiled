// Extracted from HabboAirLauncher.deobf.js, line 124998.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_2592.as
// Obfuscated name: _i58134011e0869b

class {
    static {
      n(this, "class_2592");
    }
    static {
      Rvt(this, "class_2592");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

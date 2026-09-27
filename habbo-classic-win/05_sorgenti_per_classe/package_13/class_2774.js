// Extracted from HabboAirLauncher.deobf.js, line 114715.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_13/class_2774.as
// Obfuscated name: _i3be8d874c5a05e

class {
    static {
      n(this, "class_2774");
    }
    static {
      Qft(this, "class_2774");
    }
    _data = [];
    constructor(e = "", r = "") {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }

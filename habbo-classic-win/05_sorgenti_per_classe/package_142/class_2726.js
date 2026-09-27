// Extracted from HabboAirLauncher.deobf.js, line 115105.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_142/class_2726.as
// Obfuscated name: _i4ddc2869bae0db

class {
    static {
      n(this, "class_2726");
    }
    static {
      Slt(this, "class_2726");
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

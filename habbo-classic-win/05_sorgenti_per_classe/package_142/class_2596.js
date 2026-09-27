// Extracted from HabboAirLauncher.deobf.js, line 115125.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_142/class_2596.as
// Obfuscated name: _ie1047121510b39

class {
    static {
      n(this, "class_2596");
    }
    static {
      Llt(this, "class_2596");
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

// Extracted from HabboAirLauncher.deobf.js, line 125167.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_25/class_1874.as
// Obfuscated name: _ib3a4f5dec8e17b

class {
    static {
      n(this, "class_1874");
    }
    static {
      Yvt(this, "class_1874");
    }
    _data = [];
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

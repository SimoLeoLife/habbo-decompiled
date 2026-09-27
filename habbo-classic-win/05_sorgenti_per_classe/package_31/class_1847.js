// Extracted from HabboAirLauncher.deobf.js, line 125457.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_31/class_1847.as
// Obfuscated name: _i15407411d2e6fe

class {
    static {
      n(this, "class_1847");
    }
    static {
      Iwt(this, "class_1847");
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

// Extracted from HabboAirLauncher.deobf.js, line 125414.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_31/class_1875.as
// Obfuscated name: _i3571ea1b6c6d20

class {
    static {
      n(this, "class_1875");
    }
    static {
      gwt(this, "class_1875");
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

// Extracted from HabboAirLauncher.deobf.js, line 122755.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_153/class_3386.as
// Obfuscated name: _ieadb8f99ca1d0e

class {
    static {
      n(this, "class_3386");
    }
    static {
      Y7t(this, "class_3386");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = [];
    }
    get disposed() {
      return !1;
    }
  }

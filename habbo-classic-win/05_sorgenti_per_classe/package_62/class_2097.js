// Extracted from HabboAirLauncher.deobf.js, line 120401.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_62/class_2097.as
// Obfuscated name: _i5b2c25eb23f1c7

class {
    static {
      n(this, "class_2097");
    }
    static {
      d5t(this, "class_2097");
    }
    _array = [];
    constructor(e, r, t, i, s, o) {
      this._array.push(e, r, t, i, s, o);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return this._array == null;
    }
  }

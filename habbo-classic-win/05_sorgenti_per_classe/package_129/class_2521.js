// Extracted from HabboAirLauncher.deobf.js, line 118991.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_129/class_2521.as
// Obfuscated name: _i95c95556db026d

class {
    static {
      n(this, "class_2521");
    }
    static {
      O1t(this, "class_2521");
    }
    _array = [];
    constructor(e) {
      this._array.push(e);
    }
    getMessageArray() {
      return this._array ?? [];
    }
    dispose() {
      this._array = null;
    }
    get disposed() {
      return !1;
    }
  }

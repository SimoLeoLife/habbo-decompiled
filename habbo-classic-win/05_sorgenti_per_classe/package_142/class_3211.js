// Extracted from HabboAirLauncher.deobf.js, line 115042.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_142/class_3211.as
// Obfuscated name: _i4f56aec2b8b737

class {
    static {
      n(this, "class_3211");
    }
    static {
      Blt(this, "class_3211");
    }
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
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

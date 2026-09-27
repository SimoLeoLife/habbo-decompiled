// Extracted from HabboAirLauncher.deobf.js, line 116395.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_140/class_2806.as
// Obfuscated name: _ic66fd215d7f8f5

class {
    static {
      n(this, "class_2806");
    }
    static {
      q_t(this, "class_2806");
    }
    static const_20 = -1;
    _array = [];
    constructor(e, r) {
      (this._array.push(e), this._array.push(r));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._array;
    }
    dispose() {
      this._array = [];
    }
  }

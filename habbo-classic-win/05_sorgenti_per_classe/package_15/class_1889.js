// Extracted from HabboAirLauncher.deobf.js, line 118401.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_15/class_1889.as
// Obfuscated name: _i73026fe15109fb

class a {
    static {
      n(this, "class_1889");
    }
    static {
      j3t(this, "class_1889");
    }
    static const_197 = 1;
    _array = [];
    constructor(e = a.const_197) {
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

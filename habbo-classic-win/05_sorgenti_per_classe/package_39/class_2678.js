// Extracted from HabboAirLauncher.deobf.js, line 123029.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_39/class_2678.as
// Obfuscated name: _i49c187f28189ca

class {
    static {
      n(this, "class_2678");
    }
    static {
      upt(this, "class_2678");
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

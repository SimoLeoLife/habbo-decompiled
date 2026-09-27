// Extracted from HabboAirLauncher.deobf.js, line 122918.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_153/class_2690.as
// Obfuscated name: _iea06b44be4f89a

class {
    static {
      n(this, "class_2690");
    }
    static {
      ipt(this, "class_2690");
    }
    _array = [];
    constructor(e, r, t) {
      this._array = [e, r, t];
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

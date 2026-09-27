// Extracted from HabboAirLauncher.deobf.js, line 124236.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_94/class_3667.as
// Obfuscated name: _i19cc0bbaf51bb3

class {
    static {
      n(this, "class_3667");
    }
    static {
      fgt(this, "class_3667");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

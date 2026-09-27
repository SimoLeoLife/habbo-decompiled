// Extracted from HabboAirLauncher.deobf.js, line 119750.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_2444.as
// Obfuscated name: _i20c619f30be6cf

class {
    static {
      n(this, "class_2444");
    }
    static {
      t8t(this, "class_2444");
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

// Extracted from HabboAirLauncher.deobf.js, line 119163.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3517.as
// Obfuscated name: _i2fd6ecd56b59ed

class {
    static {
      n(this, "class_3517");
    }
    static {
      e6t(this, "class_3517");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
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

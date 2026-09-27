// Extracted from HabboAirLauncher.deobf.js, line 119638.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3253.as
// Obfuscated name: _i2555d7981db170

class {
    static {
      n(this, "class_3253");
    }
    static {
      Q6t(this, "class_3253");
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

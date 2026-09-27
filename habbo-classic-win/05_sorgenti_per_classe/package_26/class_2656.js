// Extracted from HabboAirLauncher.deobf.js, line 119186.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_2656.as
// Obfuscated name: _i9de6ed12f601a2

class {
    static {
      n(this, "class_2656");
    }
    static {
      t6t(this, "class_2656");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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

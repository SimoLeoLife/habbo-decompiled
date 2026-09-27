// Extracted from HabboAirLauncher.deobf.js, line 119349.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3850.as
// Obfuscated name: _i1c5ed67d831252

class {
    static {
      n(this, "class_3850");
    }
    static {
      g6t(this, "class_3850");
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

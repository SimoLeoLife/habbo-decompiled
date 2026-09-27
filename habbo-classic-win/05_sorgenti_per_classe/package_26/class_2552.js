// Extracted from HabboAirLauncher.deobf.js, line 119601.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_2552.as
// Obfuscated name: _i3f015a31ca62f9

class {
    static {
      n(this, "class_2552");
    }
    static {
      U6t(this, "class_2552");
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

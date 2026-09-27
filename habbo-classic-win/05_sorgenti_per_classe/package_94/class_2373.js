// Extracted from HabboAirLauncher.deobf.js, line 124305.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_94/class_2373.as
// Obfuscated name: _i8fca3f51a5f57a

class {
    static {
      n(this, "class_2373");
    }
    static {
      pgt(this, "class_2373");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), r.addToComposer(this._data), this._data.push(t));
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

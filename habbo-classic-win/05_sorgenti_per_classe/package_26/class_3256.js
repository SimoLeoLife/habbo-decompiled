// Extracted from HabboAirLauncher.deobf.js, line 119704.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3256.as
// Obfuscated name: _if7f38fb896c556

class {
    static {
      n(this, "class_3256");
    }
    static {
      q6t(this, "class_3256");
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

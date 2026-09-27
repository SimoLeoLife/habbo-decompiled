// Extracted from HabboAirLauncher.deobf.js, line 114058.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_16/class_1776.as
// Obfuscated name: _i9f64884426ed24

class {
    static {
      n(this, "class_1776");
    }
    static {
      Bct(this, "class_1776");
    }
    _data = [];
    constructor(e, r, t, i, s = !1) {
      this._data = [e, r, t, i, s];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

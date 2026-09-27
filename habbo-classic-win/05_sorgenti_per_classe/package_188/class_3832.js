// Extracted from HabboAirLauncher.deobf.js, line 124328.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_188/class_3832.as
// Obfuscated name: _i3b7731b3553038

class {
    static {
      n(this, "class_3832");
    }
    static {
      ggt(this, "class_3832");
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

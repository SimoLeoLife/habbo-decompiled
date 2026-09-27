// Extracted from HabboAirLauncher.deobf.js, line 124107.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_94/class_2520.as
// Obfuscated name: _i3c02d970ba0941

class {
    static {
      n(this, "class_2520");
    }
    static {
      egt(this, "class_2520");
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

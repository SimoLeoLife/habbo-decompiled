// Extracted from HabboAirLauncher.deobf.js, line 119661.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_2393.as
// Obfuscated name: _i111fa859750bc2

class {
    static {
      n(this, "class_2393");
    }
    static {
      Y6t(this, "class_2393");
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

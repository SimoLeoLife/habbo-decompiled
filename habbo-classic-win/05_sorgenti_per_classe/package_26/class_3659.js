// Extracted from HabboAirLauncher.deobf.js, line 119555.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3659.as
// Obfuscated name: _i91d8a6f47dd539

class {
    static {
      n(this, "class_3659");
    }
    static {
      O6t(this, "class_3659");
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

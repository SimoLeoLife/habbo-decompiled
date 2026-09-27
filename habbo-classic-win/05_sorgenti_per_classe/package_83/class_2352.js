// Extracted from HabboAirLauncher.deobf.js, line 118593.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_83/class_2352.as
// Obfuscated name: _i7cb32d07b01cfe

class {
    static {
      n(this, "class_2352");
    }
    static {
      s1t(this, "class_2352");
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

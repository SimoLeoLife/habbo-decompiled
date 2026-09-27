// Extracted from HabboAirLauncher.deobf.js, line 122606.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_40/class_1914.as
// Obfuscated name: _id5f24a593101e5

class {
    static {
      n(this, "class_1914");
    }
    static {
      S7t(this, "class_1914");
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

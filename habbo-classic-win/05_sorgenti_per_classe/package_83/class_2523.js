// Extracted from HabboAirLauncher.deobf.js, line 118616.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_83/class_2523.as
// Obfuscated name: _i671071d9a891e5

class {
    static {
      n(this, "class_2523");
    }
    static {
      d1t(this, "class_2523");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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

// Extracted from HabboAirLauncher.deobf.js, line 119272.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_3152.as
// Obfuscated name: _ie0bcf3981c4590

class {
    static {
      n(this, "class_3152");
    }
    static {
      f6t(this, "class_3152");
    }
    _data = [];
    constructor(e = 0) {
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

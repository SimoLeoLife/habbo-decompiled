// Extracted from HabboAirLauncher.deobf.js, line 119727.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_26/class_2579.as
// Obfuscated name: _ia54f60450c9bf1

class {
    static {
      n(this, "class_2579");
    }
    static {
      e8t(this, "class_2579");
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

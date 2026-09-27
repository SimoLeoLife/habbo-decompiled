// Extracted from HabboAirLauncher.deobf.js, line 124487.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_91/class_2598.as
// Obfuscated name: _i4640617aeeb3e0

class {
    static {
      n(this, "class_2598");
    }
    static {
      Rgt(this, "class_2598");
    }
    _data = [];
    constructor(e) {
      this._data.push(new Long(e));
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

// Extracted from HabboAirLauncher.deobf.js, line 100824.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_64/class_3438.as
// Obfuscated name: _i4334ba2e1894d3

class {
    static {
      n(this, "class_3438");
    }
    static {
      Szr(this, "class_3438");
    }
    _id;
    var_2025;
    _state;
    constructor(e, r) {
      ((this._id = e), (this.var_2025 = r));
      let t = Number.parseFloat(this.var_2025);
      this._state = Number.isNaN(t) ? 0 : Number.parseInt(this.var_2025, 10);
    }
    get id() {
      return this._id;
    }
    get itemData() {
      return this.var_2025;
    }
    get state() {
      return this._state;
    }
  }

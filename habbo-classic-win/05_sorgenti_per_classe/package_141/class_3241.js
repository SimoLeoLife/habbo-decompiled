// Extracted from HabboAirLauncher.deobf.js, line 97073.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_141/class_3241.as
// Obfuscated name: _i9349a04705f421

class {
    static {
      n(this, "class_3241");
    }
    static {
      OHr(this, "class_3241");
    }
    var_5338;
    var_4931;
    _options;
    constructor(e) {
      ((this.var_5338 = e.readInteger()),
        (this.var_4931 = e.readInteger()),
        (this._options = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._options.push(new class_4122(e));
    }
    get _r9f51ec9c1833f1() {
      return this.var_5338;
    }
    get _rbd5af088bd7422() {
      return this.var_4931;
    }
    get options() {
      return this._options;
    }
  }

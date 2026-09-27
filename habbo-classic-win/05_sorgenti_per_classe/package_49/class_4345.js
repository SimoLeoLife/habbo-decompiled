// Extracted from HabboAirLauncher.deobf.js, line 98187.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_49/class_4345.as
// Obfuscated name: _ie48f781d28d12a

class {
    static {
      n(this, "class_4345");
    }
    static {
      iUr(this, "class_4345");
    }
    _goalCode;
    var_2395 = [];
    constructor(e) {
      this._goalCode = e.readString();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2395?.push(new class_4363(e));
    }
    dispose() {
      this.var_2395 = null;
    }
    get disposed() {
      return this.var_2395 == null;
    }
    get hof() {
      return this.var_2395;
    }
    get goalCode() {
      return this._goalCode;
    }
  }

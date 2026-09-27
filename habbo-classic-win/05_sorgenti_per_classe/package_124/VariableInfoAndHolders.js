// Extracted from HabboAirLauncher.deobf.js, line 107575.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/VariableInfoAndHolders.as
// Obfuscated name: _i7fcdca64ea5e83

class {
    static {
      n(this, "VariableInfoAndHolders");
    }
    static {
      iet(this, "VariableInfoAndHolders");
    }
    _r0990cf236ac808 = [];
    var_1308;
    constructor(e) {
      this.var_1308 = new WiredVariable(e);
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r0990cf236ac808.push(new UnkClass_08106d(e));
    }
    get variable() {
      return this.var_1308;
    }
    get holders() {
      return this._r0990cf236ac808;
    }
  }

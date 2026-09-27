// Estratto da HabboAirLauncher.deobf.js, riga 107575.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/VariableInfoAndHolders.as
// Nome offuscato: _i7fcdca64ea5e83

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
      for (let t = 0; t < r; t++) this._r0990cf236ac808.push(new _i08106d033c76a5(e));
    }
    get variable() {
      return this.var_1308;
    }
    get holders() {
      return this._r0990cf236ac808;
    }
  }

// Estratto da HabboAirLauncher.deobf.js, riga 107528.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/SharedVariableList.as
// Nome offuscato: _ie49a4fb58ac6a7

class extends l7 {
    static {
      n(this, "SharedVariableList");
    }
    static {
      eet(this, "SharedVariableList");
    }
    var_4340 = [];
    _variables = [];
    constructor(e) {
      super();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new SharedVariable(e);
        (this.var_4340.push(i), this._variables.push(i.wiredVariable));
      }
    }
    get variables() {
      return this._variables;
    }
    get sharedVariables() {
      return this.var_4340;
    }
  }

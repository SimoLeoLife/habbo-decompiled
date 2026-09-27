// Estratto da HabboAirLauncher.deobf.js, riga 107598.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/VariableInfoAndValue.as
// Nome offuscato: _i9877b6e40e2e0d

class {
    static {
      n(this, "VariableInfoAndValue");
    }
    static {
      set(this, "VariableInfoAndValue");
    }
    _value;
    var_1308;
    constructor(e) {
      ((this.var_1308 = new WiredVariable(e)), (this._value = e.readInteger()));
    }
    get variable() {
      return this.var_1308;
    }
    get value() {
      return this._value;
    }
  }

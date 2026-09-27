// Extracted from HabboAirLauncher.deobf.js, line 107619.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/VariableList.as
// Obfuscated name: _i7a6f60fab81a00

class a extends l7 {
    static {
      n(this, "VariableList");
    }
    static {
      det(this, "VariableList");
    }
    _variables;
    constructor(e) {
      (super(), (this._variables = e));
    }
    static createFromMessage(e) {
      let r = [],
        t = e.readInteger();
      for (let i = 0; i < t; i++) r.push(new WiredVariable(e));
      return new a(r);
    }
    get variables() {
      return this._variables;
    }
  }

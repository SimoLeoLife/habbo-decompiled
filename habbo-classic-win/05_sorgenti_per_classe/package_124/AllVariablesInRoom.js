// Estratto da HabboAirLauncher.deobf.js, riga 107308.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/AllVariablesInRoom.as
// Nome offuscato: _icdc775e0814d19

class extends l7 {
    static {
      n(this, "AllVariablesInRoom");
    }
    static {
      UJr(this, "AllVariablesInRoom");
    }
    _hash;
    _variables = null;
    constructor(e) {
      (super(), (this._hash = e.readInteger()));
    }
    get variables() {
      return this._variables;
    }
    get needsSynchronize() {
      return this._variables === null;
    }
    get hash() {
      return this._hash;
    }
    synchronize(e) {
      this._variables = [];
      for (let r of e) this._variables.push(r);
    }
  }

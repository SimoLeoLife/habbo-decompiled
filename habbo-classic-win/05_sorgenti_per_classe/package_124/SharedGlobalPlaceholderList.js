// Estratto da HabboAirLauncher.deobf.js, riga 107363.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_124/SharedGlobalPlaceholderList.as
// Nome offuscato: _iae7c0980664c4f

class {
    static {
      n(this, "SharedGlobalPlaceholderList");
    }
    static {
      QJr(this, "SharedGlobalPlaceholderList");
    }
    var_3930 = [];
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_3930.push(new SharedGlobalPlaceholder(e));
    }
    get sharedPlaceholders() {
      return this.var_3930;
    }
  }

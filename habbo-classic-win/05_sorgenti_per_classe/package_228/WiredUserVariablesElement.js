// Estratto da HabboAirLauncher.deobf.js, riga 109476.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_228/WiredUserVariablesElement.as
// Nome offuscato: _ia47787a6bce40d

class {
    static {
      n(this, "WiredUserVariablesElement");
    }
    static {
      $tt(this, "WiredUserVariablesElement");
    }
    var_5235;
    var_5316;
    var_3962;
    var_5634;
    constructor(e) {
      ((this.var_3962 = e.readInteger()),
        (this.var_5235 = e.readInteger()),
        (this.var_5316 = e.readString()),
        (this.var_5634 = new WiredVariableStorageParameter(e)));
    }
    get _racdc611b14035d() {
      return this.var_3962;
    }
    get entityId() {
      return this.var_5235;
    }
    get entityName() {
      return this.var_5316;
    }
    get storage() {
      return this.var_5634;
    }
  }

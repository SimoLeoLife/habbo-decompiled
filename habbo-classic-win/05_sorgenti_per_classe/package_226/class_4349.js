// Estratto da HabboAirLauncher.deobf.js, riga 85497.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_226/class_4349.as
// Nome offuscato: _i773a05393f02b2

class {
    static {
      n(this, "class_4349");
    }
    static {
      BCr(this, "class_4349");
    }
    _name;
    var_1129;
    var_106;
    var_4526;
    var_971;
    constructor(e) {
      ((this._name = e.readString()),
        (this.var_1129 = e.readString()),
        (this.var_106 = e.readString()),
        (this.var_4526 = e.readInteger()),
        (this.var_971 = e.readInteger()));
    }
    get name() {
      return this._name;
    }
    get figure() {
      return this.var_1129;
    }
    get gender() {
      return this.var_106;
    }
    get rank() {
      return this.var_4526;
    }
    get score() {
      return this.var_971;
    }
  }

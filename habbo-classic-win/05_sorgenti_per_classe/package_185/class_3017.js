// Estratto da HabboAirLauncher.deobf.js, riga 89542.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_185/class_3017.as
// Nome offuscato: _i605303f91d4131

class {
    static {
      n(this, "class_3017");
    }
    static {
      bkr(this, "class_3017");
    }
    _id;
    _name;
    var_3329;
    var_106;
    var_1129;
    constructor(e) {
      ((this._id = e.readInteger()),
        (this._name = e.readString()),
        (this.var_3329 = e.readString()),
        (this.var_106 = e.readString()),
        (this.var_1129 = e.readString()));
    }
    get id() {
      return this._id;
    }
    get name() {
      return this._name;
    }
    get motto() {
      return this.var_3329;
    }
    get gender() {
      return this.var_106;
    }
    get figure() {
      return this.var_1129;
    }
  }

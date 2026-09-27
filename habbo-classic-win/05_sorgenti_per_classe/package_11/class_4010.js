// Estratto da HabboAirLauncher.deobf.js, riga 90213.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_11/class_4010.as
// Nome offuscato: _idb2a5e04a4554d

class {
    static {
      n(this, "class_4010");
    }
    static {
      uTr(this, "class_4010");
    }
    var_3203;
    _name;
    var_1655;
    var_1129;
    var_3295;
    constructor(e) {
      ((this.var_3203 = e.readInteger()),
        (this._name = e.readString()),
        (this.var_1655 = e.readInteger()),
        (this.var_1129 = e.readString()),
        (this.var_3295 = e.readString()));
    }
    dispose() {
      ((this.var_3203 = 0),
        (this._name = ""),
        (this.var_1655 = 0),
        (this.var_1129 = ""),
        (this.var_3295 = ""));
    }
    get webId() {
      return this.var_3203;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this.var_1655;
    }
    get figure() {
      return this.var_1129;
    }
    get owner() {
      return this.var_3295;
    }
  }

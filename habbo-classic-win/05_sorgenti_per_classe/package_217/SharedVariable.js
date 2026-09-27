// Estratto da HabboAirLauncher.deobf.js, riga 107501.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_217/SharedVariable.as
// Nome offuscato: _i712ffddbb768c5

class {
    static {
      n(this, "SharedVariable");
    }
    static {
      qJr(this, "SharedVariable");
    }
    var_2440;
    _roomName;
    var_5171;
    constructor(e) {
      ((this.var_2440 = e.readInteger()),
        (this._roomName = e.readString()),
        (this.var_5171 = new WiredVariable(e)));
    }
    get wiredVariable() {
      return this.var_5171;
    }
    get roomId() {
      return this.var_2440;
    }
    get roomName() {
      return this._roomName;
    }
  }

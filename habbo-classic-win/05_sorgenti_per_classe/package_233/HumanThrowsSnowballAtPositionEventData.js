// Estratto da HabboAirLauncher.deobf.js, riga 125670.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_233/HumanThrowsSnowballAtPositionEventData.as
// Nome offuscato: _i52f465f94b99cc

class extends Ma {
    static {
      n(this, "HumanThrowsSnowballAtPositionEventData");
    }
    static {
      Hwt(this, "HumanThrowsSnowballAtPositionEventData");
    }
    var_4389 = 0;
    var_1447 = 0;
    var_1425 = 0;
    var_307 = 0;
    get humanGameObjectId() {
      return this.var_4389;
    }
    get targetX() {
      return this.var_1447;
    }
    get targetY() {
      return this.var_1425;
    }
    get trajectory() {
      return this.var_307;
    }
    constructor(e) {
      super(e);
    }
    parse(e) {
      ((this.var_4389 = e.readInteger()),
        (this.var_1447 = e.readInteger()),
        (this.var_1425 = e.readInteger()),
        (this.var_307 = e.readInteger()));
    }
  }

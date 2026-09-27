// Estratto da HabboAirLauncher.deobf.js, riga 125706.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_233/MachineCreatesSnowballEventData.as
// Nome offuscato: _ica39d45ce736b3

class extends Ma {
    static {
      n(this, "MachineCreatesSnowballEventData");
    }
    static {
      Uwt(this, "MachineCreatesSnowballEventData");
    }
    var_4598 = 0;
    get snowBallMachineReference() {
      return this.var_4598;
    }
    constructor(e) {
      super(e);
    }
    parse(e) {
      this.var_4598 = e.readInteger();
    }
  }

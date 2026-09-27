// Extracted from HabboAirLauncher.deobf.js, line 125572.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_233/HumanGetsSnowballsFromMachineEventData.as
// Obfuscated name: _i05a9a82ad08373

class extends Ma {
    static {
      n(this, "HumanGetsSnowballsFromMachineEventData");
    }
    static {
      Rwt(this, "HumanGetsSnowballsFromMachineEventData");
    }
    var_4389 = 0;
    var_4598 = 0;
    get humanGameObjectId() {
      return this.var_4389;
    }
    get snowBallMachineReference() {
      return this.var_4598;
    }
    constructor(e) {
      super(e);
    }
    parse(e) {
      ((this.var_4389 = e.readInteger()), (this.var_4598 = e.readInteger()));
    }
  }

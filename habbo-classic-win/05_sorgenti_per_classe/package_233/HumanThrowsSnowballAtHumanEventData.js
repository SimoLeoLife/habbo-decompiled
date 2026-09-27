// Extracted from HabboAirLauncher.deobf.js, line 125639.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_233/HumanThrowsSnowballAtHumanEventData.as
// Obfuscated name: _i8df76a54832d54

class extends Ma {
    static {
      n(this, "HumanThrowsSnowballAtHumanEventData");
    }
    static {
      Owt(this, "HumanThrowsSnowballAtHumanEventData");
    }
    var_4389 = 0;
    var_5157 = 0;
    var_307 = 0;
    get humanGameObjectId() {
      return this.var_4389;
    }
    get _r30f54998be2fcb() {
      return this.var_5157;
    }
    get trajectory() {
      return this.var_307;
    }
    constructor(e) {
      super(e);
    }
    parse(e) {
      ((this.var_4389 = e.readInteger()),
        (this.var_5157 = e.readInteger()),
        (this.var_307 = e.readInteger()));
    }
  }

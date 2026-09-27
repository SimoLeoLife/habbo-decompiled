// Extracted from HabboAirLauncher.deobf.js, line 125531.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_233/CreateSnowballEventData.as
// Obfuscated name: _i518bd94994337a

class extends Ma {
    static {
      n(this, "CreateSnowballEventData");
    }
    static {
      kwt(this, "CreateSnowballEventData");
    }
    var_4936 = 0;
    var_4389 = 0;
    var_1447 = 0;
    var_1425 = 0;
    var_307 = 0;
    get _r6ee92682068856() {
      return this.var_4936;
    }
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
      ((this.var_4936 = e.readInteger()),
        (this.var_4389 = e.readInteger()),
        (this.var_1447 = e.readInteger()),
        (this.var_1425 = e.readInteger()),
        (this.var_307 = e.readInteger()));
    }
  }

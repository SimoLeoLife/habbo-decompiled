// Extracted from HabboAirLauncher.deobf.js, line 125758.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_7/HumanGameObjectData.as
// Obfuscated name: _iec54fc03e150b5

class a extends Xa {
    static {
      n(this, "HumanGameObjectData");
    }
    static {
      Qwt(this, "HumanGameObjectData");
    }
    static const_38 = 19;
    _name = "";
    var_3185 = "";
    var_1129 = "";
    var_1562 = "";
    get name() {
      return this._name;
    }
    get mission() {
      return this.var_3185;
    }
    get figure() {
      return this.var_1129;
    }
    get sex() {
      return this.var_1562;
    }
    constructor(e, r) {
      super(e, r);
    }
    parse(e) {
      (this._r539158edd29622(e, a.const_38),
        (this._name = e.readString()),
        (this.var_3185 = e.readString()),
        (this.var_1129 = e.readString()),
        (this.var_1562 = e.readString()));
    }
    get currentLocationX() {
      return this.getVariable(2);
    }
    get currentLocationY() {
      return this.getVariable(3);
    }
    get _rdda6838c15e9a9() {
      return this.getVariable(4);
    }
    get _r6b8f9859b7d8e9() {
      return this.getVariable(5);
    }
    get _r14e868854a1f2e() {
      return this.getVariable(6);
    }
    get hitPoints() {
      return this.getVariable(7);
    }
    get snowBallCount() {
      return this.getVariable(8);
    }
    get isBot() {
      return this.getVariable(9);
    }
    get activityTimer() {
      return this.getVariable(10);
    }
    get activityState() {
      return this.getVariable(11);
    }
    get nextTileX() {
      return this.getVariable(12);
    }
    get nextTileY() {
      return this.getVariable(13);
    }
    get moveTargetX() {
      return this.getVariable(14);
    }
    get moveTargetY() {
      return this.getVariable(15);
    }
    get score() {
      return this.getVariable(16);
    }
    get team() {
      return this.getVariable(17);
    }
    get userId() {
      return this.getVariable(18);
    }
  }

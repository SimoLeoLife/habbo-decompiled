// Extracted from HabboAirLauncher.deobf.js, line 98034.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_49/class_4354.as
// Obfuscated name: _i208426cb81152c

class {
    static {
      n(this, "class_4354");
    }
    static {
      YVr(this, "class_4354");
    }
    _r2ec60aebd89bcd;
    var_5688;
    var_5706;
    var_4510;
    var_4696;
    var_5275;
    var_5510;
    _goalCode;
    var_4976;
    var_2109 = [];
    constructor(e) {
      ((this._r2ec60aebd89bcd = e.readBoolean()),
        (this.var_5688 = e.readInteger()),
        (this.var_5706 = e.readInteger()),
        (this.var_4510 = e.readInteger()),
        (this.var_4696 = e.readInteger()),
        (this.var_5275 = e.readInteger()),
        (this.var_5510 = e.readInteger()),
        (this._goalCode = e.readString()),
        (this.var_4976 = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2109?.push(e.readInteger());
    }
    dispose() {
      this.var_2109 = null;
    }
    get disposed() {
      return this.var_2109 == null;
    }
    get _rd9ef39e02c0446() {
      return this._r2ec60aebd89bcd;
    }
    get _r3fb4d63ff5804f() {
      return this.var_5688;
    }
    get _re3de516f53acb5() {
      return this.var_5706;
    }
    get communityTotalScore() {
      return this.var_4510;
    }
    get _r344df3534d9e24() {
      return this.var_4696;
    }
    get _r93e9fd9d59dab4() {
      return this.var_5275;
    }
    get percentCompletionTowardsNextLevel() {
      return this.var_5510;
    }
    get _r6930b826135416() {
      return this.var_4976;
    }
    get _rd5bb6b002f32d2() {
      return this.var_2109;
    }
    get goalCode() {
      return this._goalCode;
    }
  }

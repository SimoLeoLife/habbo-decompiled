// Extracted from HabboAirLauncher.deobf.js, line 126847.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_132/class_4050.as
// Obfuscated name: _i7892e0a7d373d9

class {
    static {
      n(this, "class_4050");
    }
    static {
      wIt(this, "class_4050");
    }
    _id;
    var_2352;
    var_3967;
    var_5045;
    _extraParams;
    _rewardAmount;
    var_3477;
    var_2141;
    var_2755;
    constructor(e) {
      ((this._id = e.readString()),
        (this.var_2352 = e.readInteger()),
        (this.var_3967 = e.readShort()),
        (this.var_5045 = e.readString()),
        (this._extraParams = e.readString()),
        (this._rewardAmount = e.readInteger()),
        (this.var_3477 = e.readBoolean()),
        (this.var_2141 = e.readBoolean()),
        (this.var_2755 = e.readBoolean()));
    }
    get id() {
      return this._id;
    }
    get requiredPoints() {
      return this.var_2352;
    }
    get productItemTypeId() {
      return this.var_3967;
    }
    get _r6e18946929c423() {
      return this.var_5045;
    }
    get _r692b2682fdaa0e() {
      return this._extraParams;
    }
    get rewardAmount() {
      return this._rewardAmount;
    }
    get premium() {
      return this.var_3477;
    }
    get available() {
      return this.var_2141;
    }
    get claimed() {
      return this.var_2755;
    }
  }

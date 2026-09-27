// Estratto da HabboAirLauncher.deobf.js, riga 107022.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_138/TreasureHuntWinnerInfo.as
// Nome offuscato: _ifab16ca476093a

class {
    static {
      n(this, "TreasureHuntWinnerInfo");
    }
    static {
      CJr(this, "TreasureHuntWinnerInfo");
    }
    var_3103;
    _userId;
    _userName;
    var_4915;
    var_5370;
    constructor(e) {
      ((this.var_3103 = e.readString()),
        (this._userId = e.readInteger()),
        (this._userName = e.readString()),
        (this.var_4915 = e.readString()),
        (this.var_5370 = e.readString()));
    }
    get _r0b81c67a285696() {
      return this.var_3103;
    }
    get userId() {
      return this._userId;
    }
    get userName() {
      return this._userName;
    }
    get _rd90e40ea576eac() {
      return this.var_4915;
    }
    get _re39308a026bc05() {
      return this.var_5370;
    }
  }

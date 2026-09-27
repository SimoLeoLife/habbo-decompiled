// Estratto da HabboAirLauncher.deobf.js, riga 83273.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/Game2TeamPlayerData.as
// Nome offuscato: _ib4197e41cfa4e3

class {
    static {
      n(this, "Game2TeamPlayerData");
    }
    static {
      myr(this, "Game2TeamPlayerData");
    }
    _userId = 0;
    _userName = "";
    var_971 = 0;
    var_1129 = "";
    var_106 = "";
    var_5372 = null;
    var_4647 = 0;
    var_3339 = !1;
    constructor(e, r) {
      ((this.var_4647 = e),
        (this._userName = r.readString()),
        (this._userId = r.readInteger()),
        (this.var_1129 = r.readString()),
        (this.var_106 = r.readString()),
        (this.var_971 = r.readInteger()),
        (this.var_5372 = new Game2PlayerStatsData(r)),
        (this.var_3339 = !1));
    }
    get userId() {
      return this._userId;
    }
    get score() {
      return this.var_971;
    }
    get userName() {
      return this._userName;
    }
    get figure() {
      return this.var_1129;
    }
    get gender() {
      return this.var_106;
    }
    get playerStats() {
      return this.var_5372;
    }
    get teamId() {
      return this.var_4647;
    }
    get willRejoin() {
      return this.var_3339;
    }
    set willRejoin(e) {
      this.var_3339 = e;
    }
  }

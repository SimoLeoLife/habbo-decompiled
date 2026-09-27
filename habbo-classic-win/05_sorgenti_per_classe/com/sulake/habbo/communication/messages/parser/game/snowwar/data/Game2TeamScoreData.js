// Estratto da HabboAirLauncher.deobf.js, riga 83328.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/Game2TeamScoreData.as
// Nome offuscato: _i6e7fe49799b730

class {
    static {
      n(this, "Game2TeamScoreData");
    }
    static {
      vyr(this, "Game2TeamScoreData");
    }
    var_971;
    var_3936;
    _players;
    constructor(e) {
      ((this.var_3936 = e.readInteger()),
        (this.var_971 = e.readInteger()),
        (this._players = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._players.push(new Game2TeamPlayerData(this.var_3936, e));
    }
    get score() {
      return this.var_971;
    }
    get teamReference() {
      return this.var_3936;
    }
    get players() {
      return this._players;
    }
  }

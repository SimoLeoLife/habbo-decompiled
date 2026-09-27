// Extracted from HabboAirLauncher.deobf.js, line 83945.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/GameLobbyData.as
// Obfuscated name: _ieb791d71597bdf

class {
    static {
      n(this, "GameLobbyData");
    }
    static {
      pIr(this, "GameLobbyData");
    }
    _ra2e0fbc2d7880f;
    _levelName;
    var_2401;
    var_3480;
    _numberOfTeams;
    var_5084;
    var_4881;
    var_4941;
    _players = [];
    constructor(e) {
      ((this._ra2e0fbc2d7880f = e.readInteger()),
        (this._levelName = e.readString()),
        (this.var_2401 = e.readInteger()),
        (this.var_3480 = e.readInteger()),
        (this._numberOfTeams = e.readInteger()),
        (this.var_5084 = e.readInteger()),
        (this.var_4881 = e.readString()),
        (this.var_4941 = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._players.push(new GameLobbyPlayerData(e));
    }
    get _r19bbaa21a65098() {
      return this._ra2e0fbc2d7880f;
    }
    get gameType() {
      return this.var_2401;
    }
    get fieldType() {
      return this.var_3480;
    }
    get levelName() {
      return this._numberOfTeams;
    }
    get _r02af70d1d066ea() {
      return this.var_5084;
    }
    get _red1b09647d5783() {
      return this.var_4881;
    }
    get _rfa55663647c243() {
      return this.var_4941;
    }
    get players() {
      return this._players;
    }
  }

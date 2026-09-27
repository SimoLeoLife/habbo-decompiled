// Estratto da HabboAirLauncher.deobf.js, riga 83883.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/GameLobbyPlayerData.as
// Nome offuscato: _i6a0efffc190557

class {
    static {
      n(this, "GameLobbyPlayerData");
    }
    static {
      UOe(this, "GameLobbyPlayerData");
    }
    static _rd2f6be375136db = UOe((e, r) => {
      let t = e.totalScore,
        i = r.totalScore;
      return t < i ? 1 : t === i ? 0 : -1;
    }, "_rd2f6be375136db");
    static _r04a065646a9135 = UOe((e, r) => {
      let t = e.skillLevel,
        i = r.skillLevel;
      return t < i ? 1 : t === i ? 0 : -1;
    }, "_r04a065646a9135");
    _userId;
    _name;
    var_1129;
    var_106;
    var_4647;
    var_5239;
    var_5092;
    var_5145;
    constructor(e) {
      ((this._userId = e.readInteger()),
        (this._name = e.readString()),
        (this.var_1129 = e.readString()),
        (this.var_106 = e.readString()),
        (this.var_4647 = e.readInteger()),
        (this.var_5239 = e.readInteger()),
        (this.var_5092 = e.readInteger()),
        (this.var_5145 = e.readInteger()));
    }
    get userId() {
      return this._userId;
    }
    get name() {
      return this._name;
    }
    get figure() {
      return this.var_1129;
    }
    get gender() {
      return this.var_106;
    }
    get teamId() {
      return this.var_4647;
    }
    get skillLevel() {
      return this.var_5239;
    }
    get totalScore() {
      return this.var_5092;
    }
    get _r191fd93e71ebe2() {
      return this.var_5145;
    }
  }

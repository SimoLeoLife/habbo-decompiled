// Estratto da HabboAirLauncher.deobf.js, riga 79076.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/Game2PlayerData.as
// Nome offuscato: _i8b32abf8444b7d

class {
    static {
      n(this, "Game2PlayerData");
    }
    static {
      Fwr(this, "Game2PlayerData");
    }
    var_4351 = 0;
    _userName = null;
    _figureString = null;
    var_106 = "";
    var_4647 = 0;
    var_1271 = !1;
    dispose() {
      ((this._userName = null), (this._figureString = null), (this.var_1271 = !0));
    }
    get disposed() {
      return this.var_1271;
    }
    parse(e) {
      ((this.var_4351 = e.readInteger()),
        (this._userName = e.readString()),
        (this._figureString = e.readString()),
        (this.var_106 = e.readString()),
        (this.var_4647 = e.readInteger()));
    }
    toString() {
      return `[Game Player] ${this.var_4351}: ${this._userName}`;
    }
    get _r8ef71bd6864c82() {
      return this.var_4351;
    }
    get userName() {
      return this._userName ?? "";
    }
    get figureString() {
      return this._figureString ?? "";
    }
    get gender() {
      return this.var_106;
    }
    get teamId() {
      return this.var_4647;
    }
    get _rb5c758ed8867a6() {
      return this.var_1271;
    }
  }

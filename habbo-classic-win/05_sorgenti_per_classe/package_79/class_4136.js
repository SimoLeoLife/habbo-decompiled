// Estratto da HabboAirLauncher.deobf.js, riga 83058.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_79/class_4136.as
// Nome offuscato: _ic1836c01b90ed7

class {
    static {
      n(this, "class_4136");
    }
    static {
      ayr(this, "class_4136");
    }
    var_2401 = -1;
    var_3480 = -1;
    _numberOfTeams = -1;
    _players = [];
    var_3530 = null;
    flush() {
      ((this.var_2401 = -1), (this.var_3480 = -1), (this._numberOfTeams = -1));
      for (let e of this._players) e.dispose();
      return ((this._players = []), !0);
    }
    parse(e) {
      ((this.var_2401 = e.readInteger()),
        (this.var_3480 = e.readInteger()),
        (this._numberOfTeams = e.readInteger()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = new Game2PlayerData();
        (i.parse(e), this._players.push(i));
      }
      return ((this.var_3530 = new GameLevelData(e)), !0);
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
    get players() {
      return this._players;
    }
    get _r151537c48555ea() {
      return this.var_3530;
    }
  }

// Extracted from HabboAirLauncher.deobf.js, line 82348.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/data/HighScoreData.as
// Obfuscated name: _i1078f31c72dbaf

class {
  static {
    n(this, "HighScoreData");
  }
  var_971;
  _users = [];
  constructor() {
    this.var_971 = -1;
  }
  get score() {
    return this.var_971;
  }
  set score(e) {
    this.var_971 = e;
  }
  get users() {
    return this._users;
  }
  set users(e) {
    this._users = e;
  }
  addUser(e) {
    this._users.push(e);
  }
}

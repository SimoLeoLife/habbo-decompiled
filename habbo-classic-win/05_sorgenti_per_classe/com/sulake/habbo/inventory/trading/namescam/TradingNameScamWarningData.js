// Extracted from HabboAirLauncher.deobf.js, line 240451.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/namescam/TradingNameScamWarningData.as
// Obfuscated name: _i9c356345970645

class {
  static {
    n(this, "TradingNameScamWarningData");
  }
  var_4630;
  _tradedUserName;
  var_5408;
  _similarInRoom;
  var_3932;
  constructor(e, r, t, i, s) {
    ((this.var_4630 = e),
      (this._tradedUserName = r ?? ""),
      (this.var_5408 = t ?? ""),
      (this._similarInRoom = i != null ? i.slice() : []),
      (this.var_3932 = s != null ? s.slice() : []));
  }
  get tradedUserId() {
    return this.var_4630;
  }
  get _r795f812a1238c7() {
    return this._tradedUserName;
  }
  get tradedUserFigure() {
    return this.var_5408;
  }
  get similarInRoom() {
    return this._similarInRoom.slice();
  }
  get similarInFriends() {
    return this.var_3932.slice();
  }
}

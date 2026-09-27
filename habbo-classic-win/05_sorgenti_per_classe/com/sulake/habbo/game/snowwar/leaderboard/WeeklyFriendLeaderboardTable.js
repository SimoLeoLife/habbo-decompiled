// Extracted from HabboAirLauncher.deobf.js, line 220504.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/WeeklyFriendLeaderboardTable.as
// Obfuscated name: _ic367e57e81c8e3

class extends D1 {
  static {
    n(this, "WeeklyFriendLeaderboardTable");
  }
  _offset = 0;
  var_3593 = 0;
  constructor(e) {
    super(e);
  }
  get offset() {
    return this._offset;
  }
  set offset(e) {
    e >= 0 && e <= this.var_3593 && (this._offset = e);
  }
  get maxOffset() {
    return this.var_3593;
  }
  set maxOffset(e) {
    this.var_3593 = e;
  }
  getMessageComposer(e, r, t) {
    return new Game2GetWeeklyFriendsLeaderboardComposer(e, this._offset, r, t, this.var_244, this.var_1042);
  }
}

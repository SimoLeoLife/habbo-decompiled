// Extracted from HabboAirLauncher.deobf.js, line 220554.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/WeeklyTotalLeaderboardTable.as
// Obfuscated name: _i6984636676e396

class extends TotalLeaderboardTable {
  static {
    n(this, "WeeklyTotalLeaderboardTable");
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
    return new Game2GetWeeklyLeaderboardComposer(e, this._offset, r, t, this.var_244, this.var_1042);
  }
}

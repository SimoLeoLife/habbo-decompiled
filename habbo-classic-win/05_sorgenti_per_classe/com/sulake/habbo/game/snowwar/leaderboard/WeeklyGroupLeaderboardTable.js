// Estratto da HabboAirLauncher.deobf.js, riga 220529.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/WeeklyGroupLeaderboardTable.as
// Nome offuscato: _id0d5a7420f198c

class extends TotalGroupLeaderboardTable {
  static {
    n(this, "WeeklyGroupLeaderboardTable");
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
    return new Game2GetWeeklyGroupLeaderboardComposer(e, this._offset, r, t, this.var_244, this.var_1042);
  }
}

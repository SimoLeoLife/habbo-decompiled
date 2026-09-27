// Estratto da HabboAirLauncher.deobf.js, riga 220479.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/TotalLeaderboardTable.as
// Nome offuscato: _ibdbbbf08d5e743

class extends D1 {
  static {
    n(this, "TotalLeaderboardTable");
  }
  _ownEntry = null;
  constructor(e) {
    (super(e), (this.var_244 -= 1));
  }
  dispose() {
    (super.dispose(), (this._ownEntry = null));
  }
  addEntries(e, r) {
    ((this._ownEntry = e.pop() ?? null), super.addEntries(e, r));
  }
  getMessageComposer(e, r, t) {
    return new Game2GetTotalLeaderboardComposer(e, r, t, this.var_244, this.var_1042);
  }
  getVisibleEntries() {
    let e = super.getVisibleEntries();
    return (this._ownEntry != null && e.push(this._ownEntry), e);
  }
  initializeList() {
    this.var_110 = 0;
  }
}

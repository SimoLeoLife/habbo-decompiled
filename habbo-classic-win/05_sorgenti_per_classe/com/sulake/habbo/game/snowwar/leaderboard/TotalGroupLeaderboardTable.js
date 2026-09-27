// Estratto da HabboAirLauncher.deobf.js, riga 220457.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/TotalGroupLeaderboardTable.as
// Nome offuscato: _i6b95585d807ac2

class extends D1 {
  static {
    n(this, "TotalGroupLeaderboardTable");
  }
  _ownEntry = null;
  constructor(e) {
    (super(e), (this.var_244 -= 1));
  }
  dispose() {
    (super.dispose(), (this._ownEntry = null));
  }
  _r2efbb5337ee121(e, r, t) {
    ((this._ownEntry = t > 0 ? (e.pop() ?? null) : null), super._r2efbb5337ee121(e, r, t));
  }
  getVisibleEntries() {
    let e = super.getVisibleEntries();
    return (this._ownEntry != null && e.push(this._ownEntry), e);
  }
  getMessageComposer(e, r, t) {
    return new _ife5f8c1b91fcd5(e, r, t, this.var_244, this.var_1042);
  }
}

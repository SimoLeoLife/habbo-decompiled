// Estratto da HabboAirLauncher.deobf.js, riga 227602.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge_leaderboard/server/BadgeLeaderboardDataServerChunk.as
// Nome offuscato: _i28d33b032638d7

class {
  constructor(e, r, t, i, s, o) {
    this._type = e;
    this.var_3700 = r;
    this.var_225 = t;
    this._totalEntries = i;
    this._entries = s;
    this._ownEntry = o;
  }
  static {
    n(this, "BadgeLeaderboardDataServerChunk");
  }
  get type() {
    return this._type;
  }
  get rarity() {
    return this.var_3700;
  }
  get page() {
    return this.var_225;
  }
  get totalEntries() {
    return this._totalEntries;
  }
  get entries() {
    return this._entries ?? [];
  }
  get ownEntry() {
    return this._ownEntry;
  }
}

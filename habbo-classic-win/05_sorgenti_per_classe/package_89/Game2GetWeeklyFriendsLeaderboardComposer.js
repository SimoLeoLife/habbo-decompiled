// Estratto da HabboAirLauncher.deobf.js, riga 116175.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_89/Game2GetWeeklyFriendsLeaderboardComposer.as
// Nome offuscato: _iaeeda4a1f12d4a

class {
    static {
      n(this, "Game2GetWeeklyFriendsLeaderboardComposer");
    }
    static {
      R_t(this, "Game2GetWeeklyFriendsLeaderboardComposer");
    }
    _data = [];
    constructor(e, r, t, i, s, o) {
      (this._data.push(e),
        this._data.push(r),
        this._data.push(t),
        this._data.push(i),
        this._data.push(s),
        this._data.push(o));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

// Extracted from HabboAirLauncher.deobf.js, line 116200.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_89/Game2GetWeeklyGroupLeaderboardComposer.as
// Obfuscated name: _ie562585d80a083

class {
    static {
      n(this, "Game2GetWeeklyGroupLeaderboardComposer");
    }
    static {
      S_t(this, "Game2GetWeeklyGroupLeaderboardComposer");
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

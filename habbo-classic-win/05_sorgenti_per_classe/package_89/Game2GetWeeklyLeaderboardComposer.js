// Extracted from HabboAirLauncher.deobf.js, line 116225.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_89/Game2GetWeeklyLeaderboardComposer.as
// Obfuscated name: _ia98d618ecbd059

class {
    static {
      n(this, "Game2GetWeeklyLeaderboardComposer");
    }
    static {
      L_t(this, "Game2GetWeeklyLeaderboardComposer");
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

// Extracted from HabboAirLauncher.deobf.js, line 116135.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_89/Game2GetTotalGroupLeaderboardComposer.as
// Obfuscated name: _ife5f8c1b91fcd5

class {
    static {
      n(this, "Game2GetTotalGroupLeaderboardComposer");
    }
    static {
      B_t(this, "Game2GetTotalGroupLeaderboardComposer");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i), this._data.push(s));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }

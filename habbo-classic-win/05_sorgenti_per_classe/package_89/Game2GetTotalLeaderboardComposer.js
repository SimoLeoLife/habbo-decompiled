// Estratto da HabboAirLauncher.deobf.js, riga 116155.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_89/Game2GetTotalLeaderboardComposer.as
// Nome offuscato: _i309273511a430e

class {
    static {
      n(this, "Game2GetTotalLeaderboardComposer");
    }
    static {
      k_t(this, "Game2GetTotalLeaderboardComposer");
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

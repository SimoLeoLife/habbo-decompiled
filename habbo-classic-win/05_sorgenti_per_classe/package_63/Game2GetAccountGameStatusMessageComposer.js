// Extracted from HabboAirLauncher.deobf.js, line 115887.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_63/Game2GetAccountGameStatusMessageComposer.as
// Obfuscated name: _i5dd11c8c1c20f0

class {
    static {
      n(this, "Game2GetAccountGameStatusMessageComposer");
    }
    static {
      t_t(this, "Game2GetAccountGameStatusMessageComposer");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }

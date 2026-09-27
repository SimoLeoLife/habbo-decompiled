// Estratto da HabboAirLauncher.deobf.js, riga 113666.

class {
    static {
      n(this, "_i2b88c5a919b8c3");
    }
    static {
      pct(this, "_i2b88c5a919b8c3");
    }
    _assetNames = [];
    addAssetName(e) {
      this._assetNames.push(e);
    }
    get assetNames() {
      return this._assetNames;
    }
    toJSON() {
      return { assetNames: this._assetNames };
    }
  }

// Extracted from HabboAirLauncher.deobf.js, line 113666.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2b88c5a919b8c3

class {
    static {
      n(this, "UnkClass_2b88c5");
    }
    static {
      pct(this, "UnkClass_2b88c5");
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

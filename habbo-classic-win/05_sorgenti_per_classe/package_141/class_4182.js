// Extracted from HabboAirLauncher.deobf.js, line 97028.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_141/class_4182.as
// Obfuscated name: _i3886d090decfcd

class {
    static {
      n(this, "class_4182");
    }
    static {
      SHr(this, "class_4182");
    }
    _productCode;
    _localizationKey;
    constructor(e) {
      ((this._productCode = e.readString()),
        (this._localizationKey = e.readString() || null));
    }
    get _raeb033db5aa083() {
      return this._productCode;
    }
    get localizationKey() {
      return this._localizationKey;
    }
  }

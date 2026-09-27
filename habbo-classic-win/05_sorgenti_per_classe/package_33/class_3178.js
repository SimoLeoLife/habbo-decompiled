// Extracted from HabboAirLauncher.deobf.js, line 95848.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_33/class_3178.as
// Obfuscated name: _i38def2914c3cd7

class {
    static {
      n(this, "class_3178");
    }
    static {
      UOr(this, "class_3178");
    }
    _searchCode;
    class_2039 = [];
    constructor(e) {
      this._searchCode = e.readString();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.class_2039.push(new SavedSearch(e));
    }
    get searchCode() {
      return this._searchCode;
    }
    get _r0e79800dc505fe() {
      return this.class_2039;
    }
  }

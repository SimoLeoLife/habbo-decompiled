// Estratto da HabboAirLauncher.deobf.js, riga 95848.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_33/class_3178.as
// Nome offuscato: _i38def2914c3cd7

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

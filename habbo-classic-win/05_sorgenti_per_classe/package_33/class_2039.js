// Estratto da HabboAirLauncher.deobf.js, riga 95816.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_33/class_2039.as

class {
    static {
      n(this, "SavedSearch");
    }
    static {
      HOr(this, "SavedSearch");
    }
    _id;
    _searchCode;
    var_150;
    _localization;
    constructor(e) {
      ((this._id = e.readInteger()),
        (this._searchCode = e.readString()),
        (this.var_150 = e.readString()),
        (this._localization = e.readString()));
    }
    get id() {
      return this._id;
    }
    get searchCode() {
      return this._searchCode;
    }
    get filter() {
      return this.var_150;
    }
    get localization() {
      return this._localization;
    }
  }

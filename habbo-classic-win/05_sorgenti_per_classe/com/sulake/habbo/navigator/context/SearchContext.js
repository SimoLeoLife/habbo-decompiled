// Extracted from HabboAirLauncher.deobf.js, line 259108.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/context/SearchContext.as
// Obfuscated name: _i3c6c5131a7afaf

class {
  static {
    n(this, "SearchContext");
  }
  _searchCode;
  _filtering;
  constructor(e, r) {
    ((this._searchCode = e), (this._filtering = r));
  }
  get searchCode() {
    return this._searchCode;
  }
  get filtering() {
    return this._filtering;
  }
  toString() {
    return `${this._searchCode} : ${this._filtering}`;
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 71862.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/localization/GameDataResources.as
// Nome offuscato: _i7f31fbdfa3b94e

class a {
  static {
    n(this, "GameDataResources");
  }
  _rc2d1970dc87b11 = new Map();
  _r0eeaec3a31126a = new Map();
  var_4761 = "";
  _externalTextsHash = "";
  _externalVariablesUrl = "";
  _externalVariablesHash = "";
  var_4447 = "";
  _furniDataHash = "";
  var_5416 = "";
  _productDataHash = "";
  _r3381a8983f3b6d = "";
  _r9a873b0c02d292 = "";
  static parse(e) {
    let r = JSON.parse(e),
      t = new a();
    for (let i of r.hashes ?? [])
      switch ((t.setResource(i.name, i.url, i.hash), i.name)) {
        case "external_texts":
          ((t.var_4761 = i.url), (t._externalTextsHash = i.hash));
          break;
        case "external_variables":
          ((t._externalVariablesUrl = i.url), (t._externalVariablesHash = i.hash));
          break;
        case "furnidata":
          ((t.var_4447 = i.url), (t._furniDataHash = i.hash));
          break;
        case "productdata":
          ((t.var_5416 = i.url), (t._productDataHash = i.hash));
          break;
        case "figurepartlist_json":
          ((t._r3381a8983f3b6d = i.url), (t._r9a873b0c02d292 = i.hash));
          break;
      }
    return t;
  }
  setResource(e, r, t) {
    e && (this._rc2d1970dc87b11.set(e, r), this._r0eeaec3a31126a.set(e, t));
  }
  isValid() {
    return !!(
      this.var_4761 &&
      this._externalTextsHash &&
      this._externalVariablesUrl &&
      this._externalVariablesHash &&
      this.var_4447 &&
      this._furniDataHash &&
      this.var_5416 &&
      this._productDataHash
    );
  }
  getExternalTextsHash() {
    return this.var_4761;
  }
  _rb1fc593caca19f() {
    return this._externalTextsHash;
  }
  _r68d2fdd449edb3() {
    return this._externalVariablesUrl;
  }
  _rcdbdbfe4130cf2() {
    return this._externalVariablesHash;
  }
  _r49b95f637742bb() {
    return this.var_4447;
  }
  _refe1fcf89ec3c3() {
    return this._furniDataHash;
  }
  _rb4dd1a5b19bb5e() {
    return this.var_5416;
  }
  _r86a0f260260b23() {
    return this._productDataHash;
  }
  _r87ac24c37cf137(e) {
    return this._rc2d1970dc87b11.get(e) ?? null;
  }
  _r617b653be267ec(e) {
    return this._r0eeaec3a31126a.get(e) ?? null;
  }
  _ree3072b72b0943() {
    return this._r3381a8983f3b6d;
  }
  _r15c3a689bf0cb4() {
    return this._r9a873b0c02d292;
  }
}

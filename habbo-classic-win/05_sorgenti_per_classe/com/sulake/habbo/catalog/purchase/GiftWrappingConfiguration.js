// Estratto da HabboAirLauncher.deobf.js, riga 184810.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purchase/GiftWrappingConfiguration.as
// Nome offuscato: _i244071ff3d6929

class {
  static {
    n(this, "GiftWrappingConfiguration");
  }
  var_3915 = !1;
  var_3704 = 0;
  _stuffTypes = [];
  _boxTypes = [];
  _ribbonTypes = [];
  _defaultStuffTypes = [];
  constructor(e) {
    let r = e?.getParser() ?? null;
    r != null &&
      ((this.var_3915 = r._r800a8dc0f700a3),
      (this.var_3704 = r.wrappingPrice),
      (this._stuffTypes = r._rb29f9a2f27c1e2),
      (this._boxTypes = r._rc80bbf1ee826e1),
      (this._ribbonTypes = r._r98e3f6b40b7bbd),
      (this._defaultStuffTypes = r._rb591f9a9abbd60));
  }
  get isEnabled() {
    return this.var_3915;
  }
  get price() {
    return this.var_3704;
  }
  get _rb29f9a2f27c1e2() {
    return this._stuffTypes;
  }
  get _rc80bbf1ee826e1() {
    return this._boxTypes;
  }
  get _r98e3f6b40b7bbd() {
    return this._ribbonTypes;
  }
  get _rb591f9a9abbd60() {
    return this._defaultStuffTypes;
  }
}

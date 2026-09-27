// Estratto da HabboAirLauncher.deobf.js, riga 166555.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/alias/AssetAlias.as
// Nome offuscato: _iaf493d1c5cb8f4

class {
  static {
    n(this, "AssetAlias");
  }
  _name;
  var_933;
  _flipH;
  _flipV;
  constructor(e) {
    ((this._name = _ifdbe20062cc5b0(e, "name")),
      (this.var_933 = _ifdbe20062cc5b0(e, "link")),
      (this._flipH = _i68c84906b18730(e, "fliph")),
      (this._flipV = _i68c84906b18730(e, "flipv")));
  }
  get name() {
    return this._name;
  }
  get link() {
    return this.var_933;
  }
  get flipH() {
    return this._flipH;
  }
  get flipV() {
    return this._flipV;
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 187742.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/data/HabboMallOffer.as
// Nome offuscato: _i1e72b3b688ee99

class {
  static {
    n(this, "HabboMallOffer");
  }
  var_4737 = 0;
  var_3234 = "";
  var_606 = "";
  _highlight = "";
  _description = "";
  var_363 = "";
  _smallImageUrl = "";
  var_3896 = 0;
  constructor(e) {
    ((this.var_4737 = Number(e.targetedOfferId ?? 0)),
      (this.var_3234 = String(e.identifier ?? "")),
      (this.var_606 = String(e.header ?? "")),
      (this._highlight = String(e.highlight ?? "")),
      (this._description = String(e.description ?? "")),
      (this.var_363 = String(e.imageUrl ?? "")),
      (this._smallImageUrl = String(e.smallImageUrl ?? "")),
      (this.var_3896 = Number(e.trackingStateCode ?? 0)));
  }
  get targetedOfferId() {
    return this.var_4737;
  }
  get identifier() {
    return this.var_3234;
  }
  get title() {
    return this.var_606;
  }
  get highlight() {
    return this._highlight;
  }
  get description() {
    return this._description;
  }
  get imageUrl() {
    return this.var_363;
  }
  get smallImageUrl() {
    return this._smallImageUrl;
  }
  get trackingState() {
    return this.var_3896;
  }
}

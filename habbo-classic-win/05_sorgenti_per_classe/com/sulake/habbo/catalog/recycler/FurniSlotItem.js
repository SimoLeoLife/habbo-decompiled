// Extracted from HabboAirLauncher.deobf.js, line 144383.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/recycler/FurniSlotItem.as
// Obfuscated name: _i63ce985bed5207

class {
  static {
    n(this, "FurniSlotItem");
  }
  _id = 0;
  var_163;
  var_4146;
  var_4889;
  constructor(e, r, t = 0, i = null) {
    ((this._id = e), (this.var_163 = r), (this.var_4146 = t), (this.var_4889 = i));
  }
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get category() {
    return this.var_163;
  }
  get typeId() {
    return this.var_4146;
  }
  get _r7cfdb0f5b96474() {
    return this.var_4889;
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 319866.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandFurniData.as
// Nome offuscato: _i69a99f9e7c6e7e

class {
  static {
    n(this, "InfoStandFurniData");
  }
  _id = 0;
  var_163 = 0;
  _name = "";
  _description = "";
  var_39 = null;
  var_1062 = 0;
  _r36570e6064a408 = -1;
  var_645 = "";
  var_2364 = null;
  _groupId = 0;
  var_1514 = 0;
  _ownerName = "";
  _r53e3b5a552a0c7 = -1;
  _r63bede133657f5 = !1;
  var_4996 = -1;
  var_3883 = !1;
  set id(e) {
    this._id = e;
  }
  set category(e) {
    this.var_163 = e;
  }
  set name(e) {
    this._name = e;
  }
  set description(e) {
    this._description = e;
  }
  set image(e) {
    this.var_39 = e;
  }
  set classId(e) {
    this.var_1062 = e;
  }
  set purchaseOfferId(e) {
    this._r36570e6064a408 = e;
  }
  set bcOfferId(e) {
    this.var_4996 = e;
  }
  set extraParam(e) {
    this.var_645 = e;
  }
  set stuffData(e) {
    this.var_2364 = e;
  }
  set groupId(e) {
    this._groupId = e;
  }
  set ownerId(e) {
    this.var_1514 = e;
  }
  set ownerName(e) {
    this._ownerName = e;
  }
  set rentOfferId(e) {
    this._r53e3b5a552a0c7 = e;
  }
  set availableForBuildersClub(e) {
    this._r63bede133657f5 = e;
  }
  set tradeable(e) {
    this.var_3883 = e;
  }
  get id() {
    return this._id;
  }
  get category() {
    return this.var_163;
  }
  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get classId() {
    return this.var_1062;
  }
  get image() {
    return this.var_39;
  }
  get purchaseOfferId() {
    return this._r36570e6064a408;
  }
  get bcOfferId() {
    return this.var_4996;
  }
  get extraParam() {
    return this.var_645;
  }
  get stuffData() {
    return this.var_2364;
  }
  get groupId() {
    return this._groupId;
  }
  get ownerId() {
    return this.var_1514;
  }
  get ownerName() {
    return this._ownerName;
  }
  get rentOfferId() {
    return this._r53e3b5a552a0c7;
  }
  get availableForBuildersClub() {
    return this._r63bede133657f5;
  }
  get tradeable() {
    return this.var_3883;
  }
  setData(e) {
    ((this.id = e.id),
      (this.category = e.category),
      (this.name = e.name),
      (this.description = e.description),
      (this.image = e.image),
      (this.purchaseOfferId = e.purchaseOfferId),
      (this.extraParam = e.extraParam),
      (this.stuffData = e.stuffData),
      (this.groupId = e.groupId),
      (this.ownerName = e.ownerName),
      (this.ownerId = e.ownerId),
      (this.rentOfferId = e.rentOfferId),
      (this.availableForBuildersClub = e.availableForBuildersClub),
      (this.classId = e.classId),
      (this.bcOfferId = e.bcOfferId),
      (this.tradeable = e.tradeable));
  }
}

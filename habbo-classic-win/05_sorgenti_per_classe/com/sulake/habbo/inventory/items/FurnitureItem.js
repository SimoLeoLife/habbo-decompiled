// Extracted from HabboAirLauncher.deobf.js, line 237258.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/items/FurnitureItem.as
// Obfuscated name: _ic5d576eaeb6c7e

class {
  static {
    n(this, "FurnitureItem");
  }
  var_2929;
  var_3170;
  var_3076;
  _locked = !1;
  _id;
  var_3481;
  var_163;
  _type;
  var_2364;
  var_3191;
  var_3835;
  var_3883;
  var_3430;
  var_3627;
  var_2180;
  var_2917;
  var_3705;
  _creationMonth;
  var_3366;
  var_3882;
  var_3596;
  _flatId;
  constructor(e) {
    ((this._id = e.itemId),
      (this._type = e.itemTypeId),
      (this.var_3481 = e.roomItemId),
      (this.var_163 = e.category),
      (this.var_3430 = e.isGroupable && !e.isRented),
      (this.var_3883 = e.isTradeable),
      (this.var_3835 = e.isRecyclable),
      (this.var_3627 = e.isSellable),
      (this.var_2364 = e.stuffData),
      (this.var_3191 = e.extra),
      (this.var_2180 = e.secondsToExpiration),
      (this.var_2929 = e.expirationTimeStamp),
      (this.var_2917 = e.hasRentPeriodStarted),
      (this.var_3705 = e.creationDay),
      (this._creationMonth = e.creationMonth),
      (this.var_3366 = e.creationYear),
      (this.var_3882 = e.slotId),
      (this.var_3076 = e.songId),
      (this._flatId = e.flatId),
      (this.var_3596 = e.isRented),
      (this.var_3170 = e.isWallItem));
  }
  get isRented() {
    return this.var_3596;
  }
  get id() {
    return this._id;
  }
  get ref() {
    return this.var_3481;
  }
  get category() {
    return this.var_163;
  }
  get type() {
    return this._type;
  }
  get stuffData() {
    return this.var_2364;
  }
  set stuffData(e) {
    this.var_2364 = e;
  }
  get extra() {
    return this.var_3191;
  }
  get recyclable() {
    return this.var_3835;
  }
  get tradeable() {
    return this.var_3883;
  }
  get groupable() {
    return this.var_3430;
  }
  get sellable() {
    return this.var_3627;
  }
  get secondsToExpiration() {
    if (this.var_2180 === -1) return -1;
    if (!this.var_2917) return this.var_2180;
    let e = this.var_2180 - Math.floor((_ia411d8d8194a3a() - this.var_2929) / 1e3);
    return (e < 0 && (e = 0), e);
  }
  get creationDay() {
    return this.var_3705;
  }
  get creationMonth() {
    return this._creationMonth;
  }
  get creationYear() {
    return this.var_3366;
  }
  get slotId() {
    return this.var_3882;
  }
  get songId() {
    return this.var_3076;
  }
  get locked() {
    return this._locked;
  }
  set locked(e) {
    this._locked = e;
  }
  get flatId() {
    return this._flatId;
  }
  get isWallItem() {
    return this.var_3170;
  }
  get hasRentPeriodStarted() {
    return this.var_2917;
  }
  get expirationTimeStamp() {
    return this.var_2929;
  }
  update(e) {
    ((this._type = e.itemTypeId),
      (this.var_3481 = e.roomItemId),
      (this.var_163 = e.category),
      (this.var_3430 = e.isGroupable && !e.isRented),
      (this.var_3883 = e.isTradeable),
      (this.var_3835 = e.isRecyclable),
      (this.var_3627 = e.isSellable),
      (this.var_2364 = e.stuffData),
      (this.var_3191 = e.extra),
      (this.var_2180 = e.secondsToExpiration),
      (this.var_2929 = e.expirationTimeStamp),
      (this.var_2917 = e.hasRentPeriodStarted),
      (this.var_3705 = e.creationDay),
      (this._creationMonth = e.creationMonth),
      (this.var_3366 = e.creationYear),
      (this.var_3882 = e.slotId),
      (this.var_3076 = e.songId),
      (this._flatId = e.flatId),
      (this.var_3596 = e.isRented),
      (this.var_3170 = e.isWallItem));
  }
}

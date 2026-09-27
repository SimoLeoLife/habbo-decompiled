// Extracted from HabboAirLauncher.deobf.js, line 194594.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purchase/RoomAdPurchaseData.as
// Obfuscated name: _i03f8a8bb40f693

class {
  static {
    n(this, "RoomAdPurchaseData");
  }
  _name = null;
  _description = "";
  _flatId = 0;
  _offerId = 0;
  _extended = !1;
  var_3833 = -1;
  _roomName = null;
  _expirationTime = null;
  var_3180 = -1;
  clear() {
    ((this._name = null),
      (this._description = ""),
      (this._flatId = 0),
      (this._extended = !1),
      (this._roomName = null),
      (this.var_3833 = -1),
      (this.var_3180 = -1));
  }
  get name() {
    return this._name;
  }
  set name(e) {
    this._name = e;
  }
  get description() {
    return this._description;
  }
  set description(e) {
    this._description = e;
  }
  get flatId() {
    return this._flatId;
  }
  set flatId(e) {
    this._flatId = e;
  }
  get offerId() {
    return this._offerId;
  }
  set offerId(e) {
    this._offerId = e;
  }
  get _rae51ee574e7731() {
    return this._extended;
  }
  set _rae51ee574e7731(e) {
    this._extended = e;
  }
  get _r9f52cb79a6813e() {
    return this.var_3833;
  }
  set _r9f52cb79a6813e(e) {
    this.var_3833 = e;
  }
  get roomName() {
    return this._roomName;
  }
  set roomName(e) {
    this._roomName = e;
  }
  get expirationTime() {
    return this._expirationTime;
  }
  set expirationTime(e) {
    this._expirationTime = e;
  }
  get categoryId() {
    return this.var_3180;
  }
  set categoryId(e) {
    this.var_3180 = e;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 321624.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandRentableBotData.as
// Obfuscated name: _i870cefdc7ed278

class {
  static {
    n(this, "InfoStandRentableBotData");
  }
  _userId = 0;
  _name = "";
  _badges = [];
  _rc413b3155a79c8 = 0;
  var_4258 = 0;
  var_3284 = !1;
  var_3664 = !1;
  _r6df64aad069244 = [];
  set userId(e) {
    this._userId = e;
  }
  set name(e) {
    this._name = e;
  }
  set badges(e) {
    this._badges = e;
  }
  set carryItem(e) {
    this._rc413b3155a79c8 = e;
  }
  set userRoomId(e) {
    this.var_4258 = e;
  }
  set amIOwner(e) {
    this.var_3284 = e;
  }
  set amIAnyRoomController(e) {
    this.var_3664 = e;
  }
  set botSkills(e) {
    this._r6df64aad069244 = e;
  }
  get userId() {
    return this._userId;
  }
  get name() {
    return this._name;
  }
  get badges() {
    return this._badges.slice();
  }
  get carryItem() {
    return this._rc413b3155a79c8;
  }
  get userRoomId() {
    return this.var_4258;
  }
  get amIOwner() {
    return this.var_3284;
  }
  get amIAnyRoomController() {
    return this.var_3664;
  }
  get botSkills() {
    return this._r6df64aad069244;
  }
  setData(e) {
    ((this.userId = e.webID),
      (this.name = e.name),
      (this.badges = e.badges),
      (this.carryItem = e.carryItem),
      (this.userRoomId = e.userRoomId),
      (this.amIOwner = e.amIOwner),
      (this.amIAnyRoomController = e.amIAnyRoomController),
      (this.botSkills = e.botSkills));
  }
}

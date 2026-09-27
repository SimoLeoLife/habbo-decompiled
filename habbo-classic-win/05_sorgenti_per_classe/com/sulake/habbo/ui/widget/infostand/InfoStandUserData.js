// Extracted from HabboAirLauncher.deobf.js, line 321960.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandUserData.as
// Obfuscated name: _i95d64984c45438

class {
  static {
    n(this, "InfoStandUserData");
  }
  _userId = 0;
  _userName = "";
  _badges = [];
  _selectedBadges = [];
  var_3126 = -1;
  _groupId = 0;
  _groupName = "";
  _r5405c545db02eb = "";
  var_852 = 0;
  var_2953 = 0;
  _rc413b3155a79c8 = 0;
  var_4258 = 0;
  _type = "";
  var_1357 = 0;
  set userId(e) {
    this._userId = e;
  }
  set userName(e) {
    this._userName = e;
  }
  set badges(e) {
    this._badges = e;
  }
  set selectedBadges(e) {
    this._selectedBadges = e ?? [];
  }
  set badgesRank(e) {
    this.var_3126 = e;
  }
  set groupId(e) {
    this._groupId = e;
  }
  set groupName(e) {
    this._groupName = e;
  }
  set groupBadgeId(e) {
    this._r5405c545db02eb = e;
  }
  set respectLeft(e) {
    this.var_852 = e;
  }
  set respectReplenishesLeft(e) {
    this.var_2953 = e;
  }
  set carryItem(e) {
    this._rc413b3155a79c8 = e;
  }
  set userRoomId(e) {
    this.var_4258 = e;
  }
  set type(e) {
    this._type = e;
  }
  set petRespectLeft(e) {
    this.var_1357 = e;
  }
  get userId() {
    return this._userId;
  }
  get userName() {
    return this._userName;
  }
  get badges() {
    return this._badges.slice();
  }
  get selectedBadges() {
    return this._selectedBadges.slice();
  }
  get badgesRank() {
    return this.var_3126;
  }
  get groupId() {
    return this._groupId;
  }
  get groupName() {
    return this._groupName;
  }
  get groupBadgeId() {
    return this._r5405c545db02eb;
  }
  get respectLeft() {
    return this.var_852;
  }
  get respectReplenishesLeft() {
    return this.var_2953;
  }
  get carryItem() {
    return this._rc413b3155a79c8;
  }
  get userRoomId() {
    return this.var_4258;
  }
  get type() {
    return this._type;
  }
  get petRespectLeft() {
    return this.var_1357;
  }
  _r070a63d30cc5cb(e) {
    for (let r of this._selectedBadges) if (r != null && r._r3d8be6b2a8461a === e) return r;
    return null;
  }
  _reccfa5fae0f73f(e) {
    for (let r of this._selectedBadges) if (r != null && r._rc9fc89e7eb27a7 === e) return r._r3d8be6b2a8461a;
    return this._badges.indexOf(e);
  }
  isBot() {
    return this.type === RoomWidgetUserInfoUpdateEvent.BOT;
  }
  setData(e) {
    ((this.userId = e.webID),
      (this.userName = e.name),
      (this.badges = e.badges),
      (this.selectedBadges = e.selectedBadges),
      (this.badgesRank = e.badgesRank),
      (this.groupId = e.groupId),
      (this.groupName = e.groupName),
      (this.groupBadgeId = e.groupBadgeId),
      (this.respectLeft = e.respectLeft),
      (this.respectReplenishesLeft = e.respectReplenishesLeft),
      (this.carryItem = e.carryItem),
      (this.userRoomId = e.userRoomId),
      (this.type = e.type));
  }
}

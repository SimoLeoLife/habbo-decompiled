// Estratto da HabboAirLauncher.deobf.js, riga 305792.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/class_2698.as
// Nome offuscato: _icef9a38b00c427

class {
  static {
    n(this, "class_2698");
  }
  var_3361 = !1;
  _canTrade = !1;
  var_3464 = 0;
  var_3668 = !1;
  var_3524 = !1;
  var_3294 = !1;
  var_3482 = !1;
  var_3284 = !1;
  var_3664 = !1;
  var_852 = 0;
  var_2953 = 0;
  var_3550 = !1;
  var_3277 = !1;
  _isGuildRoom = !1;
  var_3533 = 0;
  var_3177 = RoomControllerLevelEnum.NOT_CONTROLLER;
  var_3345 = RoomControllerLevelEnum.NOT_CONTROLLER;
  var_4589 = !1;
  _isAmbassador = !1;
  var_857 = !1;
  get isIgnored() {
    return this.var_3361;
  }
  get canTrade() {
    return this._canTrade;
  }
  get canTradeReason() {
    return this.var_3464;
  }
  get canBeKicked() {
    return this.var_3668;
  }
  get canBeBanned() {
    return this.var_3524;
  }
  get canBeMuted() {
    return this.var_3294;
  }
  get _r5e040bd2e547c8() {
    return this.var_3482;
  }
  get amIOwner() {
    return this.var_3284;
  }
  get amIAnyRoomController() {
    return this.var_3664;
  }
  get respectLeft() {
    return this.var_852;
  }
  get respectReplenishesLeft() {
    return this.var_2953;
  }
  get isOwnUser() {
    return this.var_3550;
  }
  get allowNameChange() {
    return this.var_3277;
  }
  get isGuildRoom() {
    return this._isGuildRoom;
  }
  get _r1e97915bc485f1() {
    return this.var_3533;
  }
  get myRoomControllerLevel() {
    return this.var_3177;
  }
  get targetRoomControllerLevel() {
    return this.var_3345;
  }
  get isFriend() {
    return this.var_4589;
  }
  get isAmbassador() {
    return this._isAmbassador;
  }
  get isBlocked() {
    return this.var_857;
  }
  set isIgnored(e) {
    this.var_3361 = e;
  }
  set canTrade(e) {
    this._canTrade = e;
  }
  set canTradeReason(e) {
    this.var_3464 = e;
  }
  set canBeKicked(e) {
    this.var_3668 = e;
  }
  set canBeBanned(e) {
    this.var_3524 = e;
  }
  set canBeMuted(e) {
    this.var_3294 = e;
  }
  set _r5e040bd2e547c8(e) {
    this.var_3482 = e;
  }
  set amIOwner(e) {
    this.var_3284 = e;
  }
  set amIAnyRoomController(e) {
    this.var_3664 = e;
  }
  set respectLeft(e) {
    this.var_852 = e;
  }
  set respectReplenishesLeft(e) {
    this.var_2953 = e;
  }
  set isOwnUser(e) {
    this.var_3550 = e;
  }
  set allowNameChange(e) {
    this.var_3277 = e;
  }
  set isGuildRoom(e) {
    this._isGuildRoom = e;
  }
  set _r1e97915bc485f1(e) {
    this.var_3533 = e;
  }
  set myRoomControllerLevel(e) {
    this.var_3177 = e;
  }
  set targetRoomControllerLevel(e) {
    this.var_3345 = e;
  }
  populate(e) {
    ((this.var_3664 = e.amIAnyRoomController),
      (this.var_3177 = e.myRoomControllerLevel),
      (this.var_3284 = e.amIOwner),
      (this.var_3482 = e._r5e040bd2e547c8),
      (this.var_3668 = e.canBeKicked),
      (this.var_3524 = e.canBeBanned),
      (this.var_3294 = e.canBeMuted),
      (this._canTrade = e.canTrade),
      (this.var_3464 = e.canTradeReason),
      (this.var_3361 = e.isIgnored),
      (this.var_852 = e.respectLeft),
      (this.var_2953 = e.respectReplenishesLeft),
      (this.var_3550 = e.type === RoomWidgetUserInfoUpdateEvent.OWN_USER),
      (this.var_3277 = e.allowNameChange),
      (this._isGuildRoom = e.isGuildRoom),
      (this.var_3345 = e.targetRoomControllerLevel),
      (this.var_3533 = e.carryItem),
      (this.var_4589 = e.isFriend),
      (this._isAmbassador = e.amIAnAmbassador),
      (this.var_857 = e.isBlocked));
  }
}

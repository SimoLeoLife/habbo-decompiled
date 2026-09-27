// Extracted from HabboAirLauncher.deobf.js, line 302681.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/UserData.as
// Obfuscated name: _i17fb8a0113e22b

class {
  static {
    n(this, "UserData");
  }
  var_4603;
  _name = "";
  _type = 0;
  var_1562 = "";
  var_1129 = "";
  _r009de807a48d4f = "";
  _achievementScore = 0;
  var_3126 = -1;
  _r5636bb7ff4e931 = 0;
  _rb01ecc756bcf8f = "";
  _r01ed33f9d4c326 = 0;
  _groupName = "";
  var_1514 = 0;
  _ownerName = "";
  _r309586b47a3ae6 = 0;
  var_4383 = 0;
  _rbbde006e8290c5 = !1;
  var_4578 = !1;
  var_4676 = !1;
  var_4416 = !1;
  var_4579 = !1;
  var_4568 = !1;
  _r6df64aad069244 = [];
  _r616b4d9e278854 = [];
  _r910c906a97ef94 = !1;
  var_857 = !1;
  constructor(e) {
    this.var_4603 = e;
  }
  get _r2fdf1f24b1e612() {
    return this.var_4603;
  }
  get name() {
    return this.var_857 ? "" : this._name;
  }
  set name(e) {
    this._name = e;
  }
  get custom() {
    return this.var_857 ? "" : this._r009de807a48d4f;
  }
  set custom(e) {
    this._r009de807a48d4f = e;
  }
  get achievementScore() {
    return this.var_857 ? 0 : this._achievementScore;
  }
  set achievementScore(e) {
    this._achievementScore = e;
  }
  get badgesRank() {
    return this.var_857 ? -1 : this.var_3126;
  }
  set badgesRank(e) {
    this.var_3126 = e;
  }
  get type() {
    return this._type;
  }
  set type(e) {
    this._type = e;
  }
  get figure() {
    return this.var_857 ? "" : this.var_1129;
  }
  set figure(e) {
    this.var_1129 = e;
  }
  get sex() {
    return this.var_857 ? class_2233.const_903 : this.var_1562;
  }
  set sex(e) {
    this.var_1562 = e;
  }
  get groupID() {
    return this.var_857 ? "" : this._rb01ecc756bcf8f;
  }
  set groupID(e) {
    this._rb01ecc756bcf8f = e;
  }
  get groupStatus() {
    return this.var_857 ? 0 : this._r01ed33f9d4c326;
  }
  set groupStatus(e) {
    this._r01ed33f9d4c326 = e;
  }
  get groupName() {
    return this.var_857 ? "" : this._groupName;
  }
  set groupName(e) {
    this._groupName = e;
  }
  get webID() {
    return this._r5636bb7ff4e931;
  }
  set webID(e) {
    this._r5636bb7ff4e931 = e;
  }
  get ownerId() {
    return this.var_1514;
  }
  set ownerId(e) {
    this.var_1514 = e;
  }
  get ownerName() {
    return this._ownerName;
  }
  set ownerName(e) {
    this._ownerName = e;
  }
  get petLevel() {
    return this._r309586b47a3ae6;
  }
  set petLevel(e) {
    this._r309586b47a3ae6 = e;
  }
  get rarityLevel() {
    return this.var_4383;
  }
  set rarityLevel(e) {
    this.var_4383 = e;
  }
  get hasSaddle() {
    return this._rbbde006e8290c5;
  }
  set hasSaddle(e) {
    this._rbbde006e8290c5 = e;
  }
  get isRiding() {
    return this.var_4578;
  }
  set isRiding(e) {
    this.var_4578 = e;
  }
  get canBreed() {
    return this.var_4676;
  }
  set canBreed(e) {
    this.var_4676 = e;
  }
  get canHarvest() {
    return this.var_4416;
  }
  set canHarvest(e) {
    this.var_4416 = e;
  }
  get canRevive() {
    return this.var_4579;
  }
  set canRevive(e) {
    this.var_4579 = e;
  }
  get hasBreedingPermission() {
    return this.var_4568;
  }
  set hasBreedingPermission(e) {
    this.var_4568 = e;
  }
  get botSkills() {
    return this._r6df64aad069244;
  }
  set botSkills(e) {
    this._r6df64aad069244 = e;
  }
  get _r2c56e448071b40() {
    return this._r616b4d9e278854;
  }
  set _r2c56e448071b40(e) {
    this._r616b4d9e278854 = e;
  }
  get isModerator() {
    return this._r910c906a97ef94;
  }
  set isModerator(e) {
    this._r910c906a97ef94 = e;
  }
  get isBlocked() {
    return this.var_857;
  }
  set isBlocked(e) {
    this.var_857 = e;
  }
}

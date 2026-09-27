// Extracted from HabboAirLauncher.deobf.js, line 308269.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/class_2504.as
// Obfuscated name: _icd02ed3a08acf3

class {
  static {
    n(this, "class_2504");
  }
  _id = -1;
  var_3632 = 0;
  var_3361 = !1;
  var_3284 = !1;
  var_3664 = !1;
  var_3533 = 0;
  _r6df64aad069244 = [];
  var_1641 = [];
  _name = "";
  set id(e) {
    this._id = e;
  }
  set roomIndex(e) {
    this.var_3632 = e;
  }
  get id() {
    return this._id;
  }
  get roomIndex() {
    return this.var_3632;
  }
  get isIgnored() {
    return this.var_3361;
  }
  get amIOwner() {
    return this.var_3284;
  }
  get amIAnyRoomController() {
    return this.var_3664;
  }
  get _r1e97915bc485f1() {
    return this.var_3533;
  }
  set isIgnored(e) {
    this.var_3361 = e;
  }
  set amIOwner(e) {
    this.var_3284 = e;
  }
  set amIAnyRoomController(e) {
    this.var_3664 = e;
  }
  set _r1e97915bc485f1(e) {
    this.var_3533 = e;
  }
  get botSkills() {
    return this._r6df64aad069244;
  }
  set botSkills(e) {
    this._r6df64aad069244 = e;
  }
  get _r4477d7dca92621() {
    return this.var_1641;
  }
  set _r4477d7dca92621(e) {
    this.var_1641 = e;
  }
  get name() {
    return this._name;
  }
  populate(e) {
    (e.webID !== this.id && (this.var_1641 = []),
      (this.id = e.webID),
      (this.roomIndex = e.userRoomId),
      (this.amIOwner = e.amIOwner),
      (this.amIAnyRoomController = e.amIAnyRoomController),
      (this._r1e97915bc485f1 = e.carryItem),
      (this.botSkills = e.botSkills),
      (this._name = e.name));
  }
  cloneAndSetSkillsWithCommands(e) {
    this._r6df64aad069244 = [];
    for (let r of e) this.botSkills.push(r.id);
    this.var_1641 = e.concat();
  }
}

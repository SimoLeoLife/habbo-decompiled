// Estratto da HabboAirLauncher.deobf.js, riga 216156.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/Friend.as
// Nome offuscato: _ia32e2bdb03af10

class {
  static {
    n(this, "Friend");
  }
  static GENDER_FEMALE = 70;
  static _r3da5f1ce0028b3 = 77;
  _id = 0;
  _name = "";
  var_106 = 0;
  var_3673 = !1;
  var_3389 = !1;
  var_1129 = "";
  var_3329 = "";
  var_3465 = "";
  var_3180 = 0;
  _selected = !1;
  _disposed = !1;
  _view = null;
  var_440 = null;
  _realName = "";
  _r642eb2c7a01fe2 = !1;
  _r9c7d31eaf0ee94 = !1;
  _r6fadbcdc452c0d = !1;
  _r39c7e9d55c5379 = 0;
  constructor(e) {
    e != null &&
      ((this._id = e.id),
      (this._name = e.name),
      (this.var_106 = e.gender),
      (this.var_3673 = e.online),
      (this.var_3389 = e.followingAllowed && e.online),
      (this.var_1129 = e.figure),
      (this.var_3329 = e.motto),
      (this.var_3465 = e._r1939eac45a5e21),
      (this.var_3180 = _c._r2a8d0988824e63),
      (this._realName = e.realName),
      (this._r642eb2c7a01fe2 = e._r311b9378b916ee),
      (this._r6fadbcdc452c0d = e._r9f93287e7a0957),
      (this._r9c7d31eaf0ee94 = e._r2978d441b4844d),
      (this._r39c7e9d55c5379 = e._r13d8beafe06ba1));
  }
  dispose() {
    this._disposed ||
      (this.var_440?.dispose(),
      (this.var_440 = null),
      (this._disposed = !0),
      (this._view = null));
  }
  get disposed() {
    return this._disposed;
  }
  get id() {
    return this._id;
  }
  set id(e) {
    this._id = e;
  }
  get name() {
    return this._name;
  }
  set name(e) {
    this._name = e;
  }
  get gender() {
    return this.var_106;
  }
  set gender(e) {
    this.var_106 = e;
  }
  get online() {
    return this.var_3673;
  }
  set online(e) {
    this.var_3673 = e;
  }
  get followingAllowed() {
    return this.var_3389;
  }
  set followingAllowed(e) {
    this.var_3389 = e;
  }
  get figure() {
    return this.var_1129;
  }
  set figure(e) {
    this.var_1129 = e;
  }
  get motto() {
    return this.var_3329;
  }
  set motto(e) {
    this.var_3329 = e;
  }
  get _r1939eac45a5e21() {
    return this.var_3465;
  }
  set _r1939eac45a5e21(e) {
    this.var_3465 = e;
  }
  get categoryId() {
    return this.var_3180;
  }
  set categoryId(e) {
    this.var_3180 = e;
  }
  get selected() {
    return this._selected;
  }
  set selected(e) {
    this._selected = e;
  }
  get view() {
    return this._view;
  }
  set view(e) {
    this._view = e;
  }
  get face() {
    return this.var_440;
  }
  set face(e) {
    this.var_440 = e;
  }
  get realName() {
    return this._realName;
  }
  set realName(e) {
    this._realName = e;
  }
  get _r311b9378b916ee() {
    return this._r642eb2c7a01fe2;
  }
  set _r311b9378b916ee(e) {
    this._r642eb2c7a01fe2 = e;
  }
  get _r2978d441b4844d() {
    return this._r9c7d31eaf0ee94;
  }
  set _r2978d441b4844d(e) {
    this._r9c7d31eaf0ee94 = e;
  }
  get _r13d8beafe06ba1() {
    return this._r39c7e9d55c5379;
  }
  get _r9f93287e7a0957() {
    return this._r6fadbcdc452c0d;
  }
  set _r9f93287e7a0957(e) {
    this._r6fadbcdc452c0d = e;
  }
  isGroupFriend() {
    return this._id < 0;
  }
}

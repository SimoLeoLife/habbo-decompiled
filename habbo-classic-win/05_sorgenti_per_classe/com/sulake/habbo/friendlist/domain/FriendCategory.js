// Extracted from HabboAirLauncher.deobf.js, line 215309.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendCategory.as
// Obfuscated name: _i93ea2c42770c65

class a {
  static {
    n(this, "FriendCategory");
  }
  static PAGE_SIZE = 100;
  static _r2a8d0988824e63 = 0;
  static _r9f6f78959f0306 = -1;
  _id;
  _name;
  _open;
  var_474 = new B();
  _redaa64acd4044a = null;
  var_5577 = !1;
  _disposed = !1;
  _view = null;
  var_193 = 0;
  var_150 = "";
  constructor(e, r) {
    ((this._id = e), (this._name = r), (this._open = this._id !== a._r9f6f78959f0306));
  }
  dispose() {
    this._disposed || ((this._disposed = !0), (this._view = null));
  }
  addFriend(e) {
    (this.removeFriend(e.id),
      this.var_474.add(e.id, e),
      this._redaa64acd4044a != null && this._r13144531dcd5b2(e) && this._redaa64acd4044a.add(e.id, e));
  }
  sort() {
    let e = this.var_474.getValues();
    (e.sort((r, t) => r.name.localeCompare(t.name, void 0, { sensitivity: "accent" })),
      (this.var_474 = new B()));
    for (let r of e) this.var_474.add(r.id, r);
    this.updateFilteredFriends();
  }
  _r9a803fab68a4db(e) {
    for (let r of this.var_474.getValues()) r.selected && e.push(r);
  }
  getFriendCount(e, r = !1) {
    if (!e && !r) return this.var_474.length;
    let t = 0;
    for (let i of this.var_474.getValues()) (!e || i.online) && (!r || i.followingAllowed) && t++;
    return t;
  }
  removeFriend(e) {
    let r = this.var_474.remove(e);
    return r == null
      ? null
      : (this._redaa64acd4044a != null && this._r13144531dcd5b2(r) && this._redaa64acd4044a.remove(e), r);
  }
  _rb17f1b2f8175b0() {
    this.var_193 >= this._r7505612c77a8b5() &&
      (this.var_193 = Math.max(0, this._r7505612c77a8b5() - 1));
  }
  _r7505612c77a8b5() {
    return Math.ceil(this.filteredFriends.length / a.PAGE_SIZE);
  }
  getStartFriendIndex() {
    return (this._rb17f1b2f8175b0(), this.var_193 * a.PAGE_SIZE);
  }
  getEndFriendIndex() {
    return (
      this._rb17f1b2f8175b0(),
      Math.min((this.var_193 + 1) * a.PAGE_SIZE, this.filteredFriends.length)
    );
  }
  _r49df954c589e8e(e) {
    if (((this._open = e), !e)) for (let r of this.var_474.getValues()) r.selected = !1;
  }
  get disposed() {
    return this._disposed;
  }
  get received() {
    return this.var_5577;
  }
  set received(e) {
    this.var_5577 = e;
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
  get friends() {
    return this.var_474.getValues();
  }
  get view() {
    return this._view;
  }
  set view(e) {
    this._view = e;
  }
  get open() {
    return this._open;
  }
  get _r4462e1d7892a93() {
    return this.var_193;
  }
  set _r4462e1d7892a93(e) {
    this.var_193 = e;
  }
  get filter() {
    return this.var_150;
  }
  set filter(e) {
    e !== this.var_150 && ((this.var_150 = e), this.updateFilteredFriends());
  }
  _r13144531dcd5b2(e) {
    return this.var_150.length === 0 || e.name.toLowerCase().indexOf(this.var_150) !== -1;
  }
  updateFilteredFriends() {
    if (this.var_150.length === 0) {
      this._redaa64acd4044a = null;
      return;
    }
    this._redaa64acd4044a = new B();
    for (let e of this.var_474.getValues())
      this._r13144531dcd5b2(e) && this._redaa64acd4044a.add(e.id, e);
  }
  get filteredFriends() {
    return this._redaa64acd4044a == null
      ? this.var_474.getValues()
      : this._redaa64acd4044a.getValues();
  }
}

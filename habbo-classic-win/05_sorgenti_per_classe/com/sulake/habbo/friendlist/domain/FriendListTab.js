// Extracted from HabboAirLauncher.deobf.js, line 216955.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendListTab.as
// Obfuscated name: _i84f37112f7de83

class {
  static {
    n(this, "FriendListTab");
  }
  _id;
  _name;
  _re9a3c0f27f0876;
  _rd6692f1d48c78f;
  var_2189;
  var_2054 = !1;
  _selected = !1;
  _view = null;
  constructor(e, r, t, i, s, o) {
    ((this._id = r),
      (this._name = i),
      (this.var_2189 = t),
      (this._re9a3c0f27f0876 = s),
      (this._rd6692f1d48c78f = o),
      this.var_2189.init(e));
  }
  setSelected(e) {
    (e && (this.var_2054 = !1), (this._selected = e));
  }
  setNewMessageArrived(e) {
    this.selected ? (this.var_2054 = !1) : (this.var_2054 = e);
  }
  get newMessageArrived() {
    return this.var_2054;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get _r650d733de7dff3() {
    return this._re9a3c0f27f0876;
  }
  get headerPicName() {
    return this._rd6692f1d48c78f;
  }
  get selected() {
    return this._selected;
  }
  get _r547724a31de035() {
    return this.var_2189;
  }
  get view() {
    return this._view;
  }
  set view(e) {
    this._view = e;
  }
}

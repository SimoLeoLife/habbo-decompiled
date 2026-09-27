// Estratto da HabboAirLauncher.deobf.js, riga 234565.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/badges/Badge.as
// Nome offuscato: _iba2d9f01015142

class a {
  constructor(e, r, t, i, s, o, d) {
    this.var_38 = e;
    this.var_595 = r;
    this._name = t;
    this._desc = i;
    this._isUnseen = s;
    ((this.var_261 = o), (this.var_3132 = d), (this.isSelected = !1));
  }
  static {
    n(this, "Badge");
  }
  static var_2689 = null;
  static THUMB_COLOR_NORMAL = 13421772;
  static THUMB_COLOR_UNSEEN = 10275685;
  var_217 = !1;
  _r4d3434c24fdea4 = !1;
  var_2619 = !1;
  _window = null;
  var_989 = null;
  var_261;
  var_3132;
  dispose() {
    (this._window?.dispose(), (this._window = null), (this.var_989 = null));
  }
  get badgeId() {
    return this.var_595;
  }
  get badgeName() {
    return this._name;
  }
  get badgeDescription() {
    return this._desc;
  }
  get ownerCount() {
    return this.var_261;
  }
  get badgeRarityId() {
    return this.var_3132;
  }
  get _r780270c6ffe49b() {
    return this._r4d3434c24fdea4;
  }
  set _r780270c6ffe49b(e) {
    this._r4d3434c24fdea4 = e;
  }
  get isSelected() {
    return this.var_2619;
  }
  set isSelected(e) {
    if (((this.var_2619 = e), this.var_989 == null || this._window == null)) return;
    this.var_989.color = this._isUnseen ? a.THUMB_COLOR_UNSEEN : a.THUMB_COLOR_NORMAL;
    let r = this._window.findChildByName("outline");
    r != null && (r.visible = e);
  }
  get isUnseen() {
    return this._isUnseen;
  }
  set isUnseen(e) {
    this._isUnseen !== e && ((this._isUnseen = e), (this.isSelected = this.var_2619));
  }
  isInUse(e, r) {
    ((this.var_261 = e), (this.var_3132 = r));
  }
  get window() {
    return (this.var_217 || this.initWindow(), this._window);
  }
  initWindow() {
    if (((this._window = a.var_2689?.clone()), this._window == null)) return;
    let e = this._window.findChildByName("badge"),
      r = e?.widget;
    (r != null && (r.badgeId = this.badgeId),
      e != null && (e.visible = !0),
      (this.var_989 = this._window.findChildByTag("BG_COLOR")),
      (this._window.procedure = (t, i) => this._r3e15584731b5d1(t, i)),
      (this.var_217 = !0));
  }
  _r3e15584731b5d1(e, r) {
    e.type === u.CLICK && this.var_38.setBadgeSelected(this.badgeId);
  }
}

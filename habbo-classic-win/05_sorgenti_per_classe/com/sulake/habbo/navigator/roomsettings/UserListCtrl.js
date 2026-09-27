// Extracted from HabboAirLauncher.deobf.js, line 257213.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/roomsettings/UserListCtrl.as
// Obfuscated name: _i436cf1020191cf

class a {
  constructor(e, r) {
    this._r018f336972d336 = r;
    this._navigator = e;
  }
  static {
    n(this, "UserListCtrl");
  }
  static DISPLAY_LIMIT = 200;
  _navigator;
  var_3576 = 0;
  get disposed() {
    return this._navigator == null;
  }
  get userCount() {
    return this.var_3576;
  }
  dispose() {
    this._navigator = null;
  }
  refresh(e, r, t, i) {
    let s = [],
      o = t.toLowerCase();
    for (let d of r)
      if (((t === "" || d.userName.toLowerCase().includes(o)) && s.push(d), s.length >= a.DISPLAY_LIMIT))
        break;
    e.autoArrangeItems = !1;
    for (let d = 0; !this.refreshEntry(e, d, s[d] ?? null, i); d++);
    ((e.autoArrangeItems = !0), e.invalidate(), (this.var_3576 = s.length));
  }
  getRowView() {
    return this._navigator?.getXmlWindow(
      this._r018f336972d336 ? "ros_friend" : "ros_flat_controller",
    );
  }
  getBgColor(e, r) {
    return r ? 4290173439 : e % 2 !== 0 ? 4294967295 : 4293519841;
  }
  onBgMouseClick(e) {
    if (this._navigator == null) return;
    let r = e.target;
    if (r != null) {
      if (this._r018f336972d336) {
        this._navigator.send(new UnkMessageComposer_1args_aaec2d(r.id));
        return;
      }
      this._navigator.send(new UnkMessageComposer_1args_08ea7a([r.id]));
    }
  }
  getListEntry(e) {
    let r = this.getRowView(),
      t = r.findChildByName("bg_region");
    return (
      t?.addEventListener(u.CLICK, this._rdc423ca3e720da),
      t?.addEventListener(u.OVER, this._re5021c6e476088),
      t?.addEventListener(u.OUT, this._r6f3f82f820fc78),
      Io.setup(r, this._rd8bc0910c4eb94),
      (r.id = e),
      r
    );
  }
  refreshEntry(e, r, t, i) {
    let s = e.getListItemAt(r);
    if (s == null) {
      if (t == null) return !0;
      ((s = this.getListEntry(r)), e.addListItem(s));
    }
    return (
      t != null
        ? ((s.color = this.getBgColor(r, t.userId === i)),
          this.refreshEntryDetails(s, t),
          (s.visible = !0),
          (s.height = 20))
        : ((s.height = 0), (s.visible = !1)),
      !1
    );
  }
  refreshEntryDetails(e, r) {
    e.findChildByName("user_name_txt").caption = r.userName;
    let t = e.findChildByName("bg_region");
    t != null && (t.id = r.userId);
    let i = e.findChildByName("user_info_region");
    (i != null && (i.id = r.userId), Io.setUserInfoState(!1, e));
  }
  _re5021c6e476088 = n((e) => {
    let r = e.target?.parent;
    if (r == null) return;
    r.color = this.getBgColor(-1, !0);
    let t = r.findChildByName("arrow_icon");
    t != null && (t.visible = !0);
  }, "_re5021c6e476088");
  _r6f3f82f820fc78 = n((e) => {
    let r = e.target?.parent;
    if (r == null) return;
    r.color = this.getBgColor(r.id, !1);
    let t = r.findChildByName("arrow_icon");
    t != null && (t.visible = !1);
  }, "_r6f3f82f820fc78");
  _rd8bc0910c4eb94 = n((e) => {
    let r = e.target?.id ?? 0;
    this._navigator == null ||
      r <= 0 ||
      (this._navigator.trackGoogle("extendedProfile", "navigator_roomSettingsUsersList"),
      this._navigator.send(new class_2134(r)));
  }, "_rd8bc0910c4eb94");
  _rdc423ca3e720da = n((e) => {
    this.onBgMouseClick(e);
  }, "_rdc423ca3e720da");
}

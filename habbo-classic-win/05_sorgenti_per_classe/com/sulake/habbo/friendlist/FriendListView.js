// Extracted from HabboAirLauncher.deobf.js, line 215160.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/FriendListView.as
// Obfuscated name: _if804c2db33ecc1

class a {
  static {
    n(this, "FriendListView");
  }
  static DEFAULT_LOCATION = new E(110, 50);
  static MIN_LEFT_MARGIN = 110;
  static const_429 = 1;
  _friendList;
  _re5e04140bd463d;
  var_33 = null;
  _r7cd36d73213d2d = null;
  _rb775f5546e1ca3 = null;
  var_3901 = null;
  var_1397 = -1;
  _lastWindowWidth = -1;
  _r76cb11d73abc54 = !1;
  constructor(e) {
    ((this._friendList = e), (this._re5e04140bd463d = new FriendListTabsView(e)));
  }
  openFriendList() {
    if (this.var_33 == null) {
      this.prepare();
      let e = this.var_33;
      e != null && ((e.x = a.DEFAULT_LOCATION.x), (e.y = a.DEFAULT_LOCATION.y));
    } else ((this.var_33.visible = !0), this.var_33.activate());
  }
  _r8b0a1f4ed09a31(e, r) {
    let t = e;
    t == null ||
      this.var_3901 == null ||
      (t.type === u.OUT
        ? (this.var_3901.text = "")
        : t.type === u.OVER && (this.var_3901.text = r));
  }
  refresh(e) {
    this.var_33 != null && (this._re5e04140bd463d.refresh(e), this.refreshWindowSize());
  }
  close() {
    this.var_33 != null && (this.var_33.visible = !1);
  }
  isOpen() {
    return this.var_33 != null && this.var_33.visible;
  }
  prepare() {
    if (
      ((this.var_33 = this._friendList.getXmlWindow("main_window")),
      this.var_33 == null)
    )
      return;
    ((this.var_33.findChildByTag("close").procedure = this.onWindowClose.bind(this)),
      (this._r7cd36d73213d2d = this.var_33.content?.findChildByName("main_content")),
      (this._rb775f5546e1ca3 = this.var_33.content?.findChildByName("footer")),
      this._r7cd36d73213d2d != null && this._re5e04140bd463d.prepare(this._r7cd36d73213d2d),
      (this.var_33.procedure = this._rd401b81ca16652.bind(this)),
      this.var_33.content?.setParamFlag(class_2094._rd1495680c3380a, !1),
      this.var_33.content?.setParamFlag(class_2094._re9b3e1f0d879ea, !0),
      this.var_33.header?.setParamFlag(class_2094.header, !1),
      this.var_33.header?.setParamFlag(class_2094._r84845f57d07c52, !0),
      this.var_33.content?.setParamFlag(class_2094.header, !1),
      this.var_33.content?.setParamFlag(class_2094._r84845f57d07c52, !0));
    let e = this._friendList.getBoolean("friendship.category.management.enabled"),
      r = this.var_33.findChildByName("open_edit_ctgs_but");
    (e && this._friendList.getInteger("spaweb", 0) !== 1
      ? r != null && (r.procedure = this.onEditCategoriesButtonClick.bind(this))
      : r != null && (r.visible = !1),
      (this.var_3901 = this.var_33.findChildByName("info_text")),
      this.var_3901 != null && (this.var_3901.text = ""),
      this._friendList.refreshButton(this.var_33, "open_edit_ctgs", !0, null, 0),
      this.refresh("prepare"),
      (this.var_33.height = 350),
      (this.var_33.width = 230));
  }
  onWindowClose(e, r) {
    e.type !== u.CLICK ||
      this.var_33 == null ||
      ((this.var_33.visible = !1),
      this._friendList._rb80d77cf35b167(HabboFriendListTrackingEvent.HABBO_FRIENDLIST_TRACKING_EVENT_CLOSED),
      this._friendList.categories.view?._r2cfd6c85203077());
  }
  _rd401b81ca16652(e, r) {
    if (
      ((e.type === y.const_848 || e.type === y.const_755) &&
        this._friendList.categories.view?._r2cfd6c85203077(),
      e.type !== y.const_755 ||
        r !== this.var_33 ||
        this._r76cb11d73abc54 ||
        this.var_33 == null)
    )
      return;
    let t = this.var_1397 === -1 ? 0 : this.var_33.height - this.var_1397,
      i = this._lastWindowWidth === -1 ? 0 : this.var_33.width - this._lastWindowWidth;
    ((this._friendList.tabs._r801554b3cb243d = Math.max(
      100,
      this._friendList.tabs._r801554b3cb243d + t,
    )),
      (this._friendList.tabs._rd5507bbbf34586 = Math.max(
        147,
        this._friendList.tabs._rd5507bbbf34586 + i,
      )),
      this.refresh(`resize: ${t}`));
  }
  refreshWindowSize() {
    this.var_33 == null ||
      this._rb775f5546e1ca3 == null ||
      ((this._r76cb11d73abc54 = !0),
      (this._rb775f5546e1ca3.visible = !1),
      (this._rb775f5546e1ca3.y = Util.getLowestPoint(this.var_33.content)),
      (this._rb775f5546e1ca3.width = this._friendList.tabs._rd5507bbbf34586),
      (this._rb775f5546e1ca3.visible = !0),
      (this.var_33.content.height = Util.getLowestPoint(this.var_33.content)),
      (this.var_33.content.width = this._friendList.tabs._rd5507bbbf34586 - 10),
      this.var_33.header != null &&
        (this.var_33.header.width = this._friendList.tabs._rd5507bbbf34586 - 10),
      (this.var_33.height = this.var_33.content.height + 30),
      (this.var_33.width = this._friendList.tabs._rd5507bbbf34586),
      (this._r76cb11d73abc54 = !1),
      this.var_33.scaler != null &&
        (this.var_33.scaler.setParamFlag(class_2094._r7b21e1be551060, !1),
        this.var_33.scaler.setParamFlag(
          class_2094._rd9de100141f10b,
          this._friendList.tabs.findSelectedTab() != null,
        ),
        this.var_33.scaler.setParamFlag(class_2094.header, !1),
        this.var_33.scaler.setParamFlag(class_2094._rd1495680c3380a, !1),
        (this.var_33.scaler.x = this.var_33.width - this.var_33.scaler.width),
        (this.var_33.scaler.y =
          this.var_33.height - this.var_33.scaler.height)),
      (this.var_1397 = this.var_33.height),
      (this._lastWindowWidth = this.var_33.width));
  }
  onEditCategoriesButtonClick(e, r) {
    if ((this._r8b0a1f4ed09a31(e, "${friendlist.tip.preferences}"), e.type !== u.CLICK)) return;
    let t = e;
    this._friendList.openHabboWebPage("link.format.friendlist.pref", new Map(), t.stageX, t.stageY);
  }
  get mainWindow() {
    return this.var_33;
  }
  alignBottomLeftTo(e) {
    if (this.var_33 == null) return;
    let r = e.clone();
    r.y -= this.var_33.height;
    let t =
      this._friendList.windowManager.getDesktopWindow(a.const_429)?._r1165eed3833024().width ?? 0;
    ((r.x = Math.min(t - this.var_33.width, r.x)),
      (r.x = Math.max(a.MIN_LEFT_MARGIN, r.x)),
      (this.var_33.position = r));
  }
}

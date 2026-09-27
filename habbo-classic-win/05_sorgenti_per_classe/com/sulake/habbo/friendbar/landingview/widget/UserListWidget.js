// Estratto da HabboAirLauncher.deobf.js, riga 206940.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/UserListWidget.as
// Nome offuscato: _i0d3f63d44477e7

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "UserListWidget");
  }
  _container = null;
  _popup = null;
  var_4587 = 150;
  _r91b6429e3f5b48 = [0, 10, 5, 0, 5, 10, 0, 10, 5, 10];
  _r95f9b9f99240df = [];
  _rb630a7d997d50a = [
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
    _i6c0c96c1d5cea5._r14fa2ce68e577a,
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
    _i6c0c96c1d5cea5._r14fa2ce68e577a,
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
    _i6c0c96c1d5cea5._r14fa2ce68e577a,
    _i6c0c96c1d5cea5._r20a7fb2cb94dc0,
  ];
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    ((this._landingView = null),
      (this._container = null),
      this._popup?.dispose(),
      (this._popup = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("user_list")), this.registerMessageListeners());
  }
  refresh() {}
  refreshContent() {
    if (this.users == null || this._container == null) {
      this._container != null && (this._container.visible = !1);
      return;
    }
    ((this._container.visible = !0), this.refreshList(), this._r8f8c218bf227cf());
  }
  registerMessageListeners() {}
  get users() {
    return null;
  }
  refreshPopup(e, r) {}
  getPopupXml() {
    return "";
  }
  hasExtraLink() {
    return !1;
  }
  _r5d4733d09209ab(e) {}
  get landingView() {
    return this._landingView;
  }
  getText(e) {
    return "${" + e + "}";
  }
  set _rda5e8d281a649a(e) {
    this._r91b6429e3f5b48 = e;
  }
  set _r18fe56dfa6de93(e) {
    this._r95f9b9f99240df = e;
  }
  set startOffset(e) {
    this.var_4587 = e;
  }
  refreshList() {
    let e = this.var_4587;
    for (let r = 0; r < 10; r++) {
      let t = this.getAvatarContainer(r);
      t == null && ((t = this.createAvatarContainer(r)), this._container?.addChild(t), (t.x = e), (e += t.width));
      let i = this.users?.[r] ?? null;
      if (((t.visible = i != null), i != null)) {
        let o = t.findChildByName("avatar_image_widget")?.widget;
        o != null && (o.figure = i.figure);
      }
    }
  }
  getAvatarContainer(e) {
    return this._container?.getChildByID(e);
  }
  createAvatarContainer(e) {
    let r = this._landingView?.getXmlWindow("user_entry");
    (this.setupVariation(r, e),
      (r.procedure = this.onEntry),
      (r.id = e),
      this._r95f9b9f99240df.length > e && (r.width = this._r95f9b9f99240df[e] ?? r.width));
    let t = r.findChildByName("extra_link_region");
    return (
      t != null && ((t.visible = this.hasExtraLink()), (t.procedure = this.onExtraLink), (t.id = e)),
      r
    );
  }
  setupVariation(e, r) {
    let i = e.findChildByName("avatar_image_widget")?.widget,
      s = this._r91b6429e3f5b48[r] ?? 0;
    ((e.y += s + 70),
      s < 0 && (e.height += -s),
      i != null && (i.direction = this._rb630a7d997d50a[r] ?? _i6c0c96c1d5cea5._r20a7fb2cb94dc0));
    let o = e.findChildByName("extra_link_region");
    o != null && (o.y -= s);
  }
  getEntry(e) {
    let r = e.id;
    return this.users?.[r] ?? null;
  }
  onEntry = n((e, r) => {
    let t = this.getEntry(r);
    if (t != null)
      switch (e.type) {
        case u.CLICK:
          this._landingView?.send(new class_2134(t.userId));
          break;
        case u.OVER:
          this.showPopup(t, r);
          break;
        case u.OUT:
          this._r8f8c218bf227cf();
          break;
      }
  }, "onEntry");
  onExtraLink = n((e, r) => {
    if (e.type === u.CLICK) {
      let i = this.getEntry(r);
      i != null && this._r5d4733d09209ab(i);
      return;
    }
    let t = r.parent;
    t != null && this.onEntry(e, t);
  }, "onExtraLink");
  showPopup(e, r) {
    (this._popup == null &&
      ((this._popup = this._landingView?.getXmlWindow(this.getPopupXml())),
      this._popup != null && this._container?.addChild(this._popup)),
      this._popup != null &&
        (this.refreshPopup(e, this._popup),
        (this._popup.y = Math.max(0, 79 - this._popup.height)),
        (this._popup.x = r.x + (r.width - this._popup.width) / 2),
        (this._popup.visible = !0)));
  }
  _r8f8c218bf227cf() {
    if ((this.users?.length ?? 0) > 0) {
      let e = this.users?.[0] ?? null,
        r = this._container?.getChildByID(0);
      e != null && r != null && this.showPopup(e, r);
    } else this._popup != null && (this._popup.visible = !1);
  }
}

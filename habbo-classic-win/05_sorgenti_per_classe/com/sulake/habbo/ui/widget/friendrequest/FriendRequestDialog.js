// Extracted from HabboAirLauncher.deobf.js, line 313908.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/friendrequest/FriendRequestDialog.as
// Obfuscated name: _i834f366a5f30b3

class {
  static {
    n(this, "FriendRequestDialog");
  }
  _window = null;
  var_17;
  _requestId;
  _userId;
  _userName;
  var_199 = !1;
  var_3264 = !1;
  var_3629 = !1;
  constructor(e, r, t, i) {
    ((this.var_17 = e), (this._requestId = r), (this._userId = t), (this._userName = i));
  }
  dispose() {
    ((this.var_17 = null), this._window?.dispose(), (this._window = null));
  }
  addMouseClickListener(e, r) {
    e != null && (e.setParamFlag(class_2094._r26338c8d88c4e5, !0), e.addEventListener(u.CLICK, r));
  }
  createWindow() {
    if (this.var_17?.assets == null || this.var_17.windowManager == null) return;
    let e = this.var_17.assets.getAssetByName("instant_friend_request");
    if (
      e == null ||
      ((this._window = this.var_17.windowManager.buildFromXML(e.content, 0)),
      this._window == null)
    )
      return;
    this._window.addEventListener(y.const_210, this._r3a83aa516709ca);
    let r = this._window.findChildByName("profile_region");
    r != null &&
      ((r.procedure = this.onProfile),
      (r.toolTipCaption =
        this.var_17.localizations?.getLocalization("infostand.profile.link.tooltip", "") ?? ""),
      (r.toolTipDelay = 100));
    let t = this._window.findChildByName("text");
    (t != null &&
      (t.text =
        this.var_17.localizations?._r43eae9731f5b27(
          "widget.friendrequest.from",
          "username",
          this._userName,
        ) ?? ""),
      this.addMouseClickListener(this._window.findChildByName("accept_button"), this._r7e9a0ce1254dde),
      this.addMouseClickListener(this._window.findChildByName("decline_button"), this._r89316827692763),
      this.addMouseClickListener(this._window.findChildByName("close_button"), this.onClose));
    let i = this._window.findChildByName("profile_icon");
    (i != null && (i.procedure = this._rb627a5440f4ac5),
      (this._window.procedure = this._r4d2fcea4870df2),
      (this._window.visible = !1));
  }
  _r4d2fcea4870df2 = n((e) => {
    if (e != null)
      switch (e.type) {
        case u.OVER:
          this.var_199 = !0;
          break;
        case u.OUT:
          this.var_199 = !1;
          break;
        case u.DOWN:
          this.var_3264 = !0;
          break;
        case u.UP:
        case u.UP_OUTSIDE:
          this.var_3264 = !1;
          break;
      }
  }, "_r4d2fcea4870df2");
  setImageAsset(e, r) {
    if (e == null || this.var_17?.assets == null) return;
    let i = this.var_17.assets.getAssetByName(r)?.content;
    i != null && (e.bitmap?.dispose(), (e.bitmap = new A(e.width, e.height, !0, 0)), e.bitmap.draw(i));
  }
  get userId() {
    return this._userId;
  }
  show() {
    this._window != null && ((this._window.visible = !0), this._window.activate());
  }
  set targetRect(e) {
    if (e == null) {
      this.var_17?._r523036c1e05a75(this._requestId);
      return;
    }
    if (this.var_199 || this.var_3264) return;
    let r = !0;
    if ((this._window == null && (this.createWindow(), (r = !1)), this._window == null))
      return;
    let t = new E(
        e.left + e.width / 2 - this._window.width / 2,
        e.top - this._window.height + 10,
      ),
      i = E.distance(this._window.position, t);
    if (r && i > 5) {
      let s = E.interpolate(this._window.position, t, 0.5);
      ((this._window.x = s.x), (this._window.y = s.y));
    } else ((this._window.x = t.x), (this._window.y = t.y));
    (this._window.visible || this.show(),
      this.var_3629 && (this.show(), (this.var_3629 = !1)));
  }
  _r3a83aa516709ca = n((e) => {
    this.var_3629 = !0;
  }, "_r3a83aa516709ca");
  onClose = n((e) => {
    this.var_17?._r523036c1e05a75(this._requestId);
  }, "onClose");
  _r7e9a0ce1254dde = n((e) => {
    this.var_17?.acceptRequest(this._requestId);
  }, "_r7e9a0ce1254dde");
  _r89316827692763 = n((e) => {
    this.var_17?.declineRequest(this._requestId);
  }, "_r89316827692763");
  onProfile = n((e) => {
    if (this._window == null || this.var_17 == null) return;
    let r;
    (e.type === u.CLICK && this.var_17._r44cfd4df9a8991(this._userId, "instantFriendRequest_name"),
      e.type === u.OVER &&
        ((r = this._window.findChildByName("text")), r != null && (r.underline = !0)),
      e.type === u.OUT &&
        ((r = this._window.findChildByName("text")), r != null && (r.underline = !1)));
  }, "onProfile");
  _rb627a5440f4ac5 = n((e) => {
    if (this._window == null || this.var_17 == null) return;
    let r;
    (e.type === u.CLICK && this.var_17._r44cfd4df9a8991(this._userId, "instantFriendRequest_icon"),
      e.type === u.OVER &&
        ((r = this._window.findChildByName("profile_icon")),
        r != null && ((r.style = 22), r.invalidate())),
      e.type === u.OUT &&
        ((r = this._window.findChildByName("profile_icon")),
        r != null && ((r.style = 21), r.invalidate())));
  }, "_rb627a5440f4ac5");
}

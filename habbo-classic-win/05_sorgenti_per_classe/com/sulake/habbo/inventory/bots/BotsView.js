// Extracted from HabboAirLauncher.deobf.js, line 235446.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/bots/BotsView.as
// Obfuscated name: _i0e897109e22603

class a {
  constructor(e, r, t, i, s) {
    this.var_38 = e;
    this._windowManager = r;
    this.var_997 = t;
    this._roomEngine = i;
    this._avatarRenderer = s;
  }
  static {
    n(this, "BotsView");
  }
  static _r6472f789a2e193 = 0;
  static STATE_INITIALIZING = 1;
  static STATE_EMPTY = 2;
  static STATE_CONTENT = 3;
  _view = null;
  var_605 = null;
  _r9cb5f682dfdc11 = new B();
  var_265 = null;
  var_2475 = a._r6472f789a2e193;
  var_217 = !1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get isVisible() {
    return this._view?.parent != null && this._view.visible;
  }
  dispose() {
    ((this._windowManager = null),
      (this._avatarRenderer = null),
      (this._roomEngine = null),
      (this.var_997 = null),
      (this.var_38 = null),
      (this._view = null),
      (this.var_605 = null),
      this._r9cb5f682dfdc11.dispose(),
      (this.var_265 = null),
      (this._disposed = !0));
  }
  update() {
    this.var_217 &&
      (this.updateGrid(), this.updatePreview(this.var_265), this.updateContainerVisibility());
  }
  removeItem(e) {
    if (!this.var_217) return;
    let r = this._r9cb5f682dfdc11.remove(e);
    r != null &&
      (r.window != null && this.var_605?.removeGridItem(r.window),
      this.var_265 === r && ((this.var_265 = null), this.selectFirst()),
      r.dispose());
  }
  addItem(e) {
    if (!this.var_217 || this._r9cb5f682dfdc11.getValue(e.id) != null) return;
    let r = new H7e(
      this,
      e,
      this.var_997,
      this._windowManager,
      this.var_38?.isUnseen(e.id) ?? !1,
    );
    r.window != null &&
      (this.var_605?.addGridItem(r.window),
      this._r9cb5f682dfdc11.add(e.id, r),
      this.var_265 == null && this.selectFirst());
  }
  _rc5e177849ba0cd(e, r = !1) {
    this.var_38?._rc5e177849ba0cd(e, r);
  }
  getWindowContainer() {
    return (this.var_217 || this.init(), this._view?.disposed ? null : this._view);
  }
  _r940649254ab9e3(e) {
    this.var_217 &&
      (this.var_265?.setSelected(!1),
      (this.var_265 = e),
      this.var_265?.setSelected(!0),
      this.updatePreview(e));
  }
  updateState() {
    if (!this.var_217) return;
    let e = this.var_38?.items.length ?? 0,
      r = a.STATE_CONTENT;
    ((this.var_38?._rbbe2e53c82e0a2() ?? !1)
      ? e === 0 && (r = a.STATE_EMPTY)
      : (r = a.STATE_INITIALIZING),
      this.var_2475 !== r &&
        ((this.var_2475 = r),
        this.updateContainerVisibility(),
        r === a.STATE_CONTENT && (this.updateGrid(), this.updatePreview())));
  }
  _r80c548b6379d2a(e) {
    return this.getItemImage(e, 3, !1, fr.LARGE);
  }
  getItemImage(e, r, t, i) {
    let s = this._avatarRenderer?._r274f6640e76241(e.figure, i, e.gender, this);
    if (s == null) return null;
    s.setDirection(class_2123.const_252, r);
    let o = t ? s._rb2bd48e3b4d265(class_2123.const_252) : s._rb2bd48e3b4d265(class_2123.HEAD);
    return (s.dispose(), o);
  }
  avatarImageReady(e) {
    if (!this.disposed)
      for (let r of this._r9cb5f682dfdc11.getValues())
        r.data?.figure === e && r.setImage(this._r80c548b6379d2a(r.data) ?? new A(1, 1, !0, 0));
  }
  _rd3edb7973b5a25(e) {
    this._r940649254ab9e3(this._r9cb5f682dfdc11.getValue(e) ?? null);
  }
  selectFirst() {
    if (this._r9cb5f682dfdc11.length === 0) {
      this.updatePreview();
      return;
    }
    this._r940649254ab9e3(this._r9cb5f682dfdc11.getWithIndex(0));
  }
  updateGrid() {
    let e = this._r9cb5f682dfdc11.getKeys(),
      r = this.var_38?.items ?? new B(),
      t = r.getKeys();
    for (let i of e) t.includes(i) || this.removeItem(i);
    for (let i of t) {
      if (!e.includes(i)) {
        let s = r.getValue(i);
        s != null && this.addItem(s);
      }
      this._r9cb5f682dfdc11.getValue(i)?.setUnseen(this.var_38?.isUnseen(i) ?? !1);
    }
  }
  _rbac138b7d4afca = n(() => {
    let e = this.var_265?.data;
    e != null && this._rc5e177849ba0cd(e.id);
  }, "_rbac138b7d4afca");
  _r4d2fcea4870df2 = n((e, r) => {}, "_r4d2fcea4870df2");
  updateContainerVisibility() {
    if (this.var_38?.controller._ra2d0b2740c7155 !== class_2106.BOTS || this._view == null)
      return;
    let e = this.var_38.controller.view.loadingContainer,
      r = this.var_38.controller.view.emptyContainer,
      t = this._view.findChildByName("grid"),
      i = this._view.findChildByName("preview_container");
    switch (this.var_2475) {
      case a.STATE_INITIALIZING:
        (e != null && (e.visible = !0),
          r != null && (r.visible = !1),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1));
        break;
      case a.STATE_EMPTY:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !0),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1));
        break;
      case a.STATE_CONTENT:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !1),
          t != null && (t.visible = !0),
          i != null && (i.visible = !0));
        break;
    }
  }
  updatePreview(e = null) {
    if (this._view == null) return;
    let r = new A(1, 1, !0, 0),
      t = "",
      i = "",
      s = !1;
    if (e?.data != null) {
      let h = e.data;
      ((t = h.name),
        (i = h.motto),
        (r = this.getItemImage(h, 4, !0, fr.LARGE) ?? r),
        (s = !0));
    }
    let o = this._view.findChildByName("preview_image");
    if (o != null) {
      let h = new A(o.width, o.height, !0, 0);
      (h.copyPixels(r, r.rect, new E(h.width / 2 - r.width / 2, h.height / 2 - r.height / 2)),
        o.bitmap?.dispose(),
        (o.bitmap = h));
    }
    r.dispose();
    let d = this._view.findChildByName("bot_name"),
      c = this._view.findChildByName("bot_description");
    (d != null && (d.caption = t), c != null && (c.caption = i));
    let f = this.var_38?._r2eac8239a09fe7?._r6354e1a24791d4 ?? !1,
      l = this.var_38?._r2eac8239a09fe7?.isRoomOwner ?? !1,
      b = this._view.findChildByName("preview_info");
    b != null && (b.caption = l ? "" : f ? "${inventory.bots.allowed}" : "${inventory.bots.forbidden}");
    let _ = this._view.findChildByName("place_button");
    _ != null && (s && (l || f) ? _.enable() : _.disable());
  }
  _r99ed4cb89d5d19() {}
  init() {
    if (
      ((this._view = this.var_38?.controller.view._r1f685677bdb2bd(class_2106.BOTS) ?? null),
      this._view == null)
    )
      return;
    ((this._view.visible = !1),
      (this._view.procedure = (...t) => this._r4d2fcea4870df2(t[0], t[1])),
      this._r99ed4cb89d5d19(),
      (this.var_605 = this._view.findChildByName("grid")),
      this._view.findChildByName("place_button")?.addEventListener(u.CLICK, this._rbac138b7d4afca),
      this._view.findChildByName("preview_image")?.addEventListener(u.DOWN, this._rbac138b7d4afca),
      this.updatePreview(),
      (this.var_217 = !0),
      this.updateState(),
      this.selectFirst());
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 305397.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/contextmenu/ContextInfoView.as
// Obfuscated name: _i4a9600a7ed365d

class a {
  static {
    n(this, "ContextInfoView");
  }
  static _rde8d3831efd5ff = 3e3;
  static BUTTON_COLOR_DEFAULT = 4281149991;
  static BUTTON_COLOR_HOVER = 4282950861;
  static const_599 = 4288230144;
  static LINK_COLOR_ACTIONS_DEFAULT = 16777215;
  static LINK_COLOR_ACTIONS_HOVER = 9552639;
  static _r83ef7af05e7ef8 = 16777215;
  static _r4eb01c2a360c76 = 5789011;
  static ICON_COLOR_ENABLED = 13947341;
  static _rd929b163ff00b1 = 5789011;
  static const_378 = 25;
  static const_100 = 3;
  static MAX_VERTICAL_LEAD_RATIO = 0.05;
  _window = null;
  _rfa094422216bf3 = null;
  var_115 = null;
  static _isMinimized = !1;
  var_17;
  var_199 = !1;
  var_2209 = new UnkClass_5ebf87(a.const_378);
  var_3030 = -1e6;
  _disposed = !1;
  var_849 = null;
  var_4275 = a._rde8d3831efd5ff;
  var_2732 = !1;
  var_2719 = !1;
  var_1119 = 1;
  _r5b0ec478241fd5 = 0;
  _fadeLength = 500;
  var_231 = !0;
  _ra7baf8c237a395 = !1;
  _r9c3fb1807cc335 = !0;
  _r118ab6a8871df3 = n((e) => {
    this.clickHandler(e);
  }, "_r118ab6a8871df3");
  _r846ed7467efd50 = n((e) => {
    this._r2428c93a495fc9(e);
  }, "_r846ed7467efd50");
  _r9f300ee1384194 = n((e) => {
    this._r5dd13a0c875981(e);
  }, "_r9f300ee1384194");
  _r932b323057a22d = n((e) => {
    this.onMinimizeHover(e);
  }, "_r932b323057a22d");
  constructor(e) {
    this.var_17 = e;
  }
  get disposed() {
    return this._disposed;
  }
  get isMinimized() {
    return a._isMinimized;
  }
  get maximumBlend() {
    return 1;
  }
  get window() {
    return this._window;
  }
  static setupContext(e) {
    ((e.var_2732 = !1),
      (e._fadeLength = 500),
      (e.var_2719 = !1),
      (e.var_1119 = 1),
      (e.var_199 = !1),
      e.var_231 &&
        (e.var_849 == null &&
          ((e.var_849 = new UnkEventDispatcherWrapperSubclass_05394e(e.var_4275, 1)),
          e.var_849.addEventListener(DeBouncer._rf33144eac61595, e._rb370b0a4937d61)),
        e.var_849.reset(),
        e.var_849.start()),
      e.updateWindow());
  }
  dispose() {
    ((this.var_17 = null),
      (this.var_115 = null),
      this._window?.dispose(),
      (this._window = null),
      this._rfa094422216bf3?.dispose(),
      (this._rfa094422216bf3 = null),
      this.var_849 != null &&
        (this.var_849.removeEventListener?.(DeBouncer._rf33144eac61595, this._rb370b0a4937d61),
        this.var_849.reset(),
        (this.var_849 = null)),
      (this._disposed = !0));
  }
  updateWindow() {}
  addMouseClickListener(e, r) {
    if (e != null) {
      if (r === this.clickHandler) {
        e.addEventListener(u.CLICK, this._r118ab6a8871df3);
        return;
      }
      e.addEventListener(u.CLICK, r);
    }
  }
  clickHandler(e) {
    (this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.START_NAME_CHANGE)),
      this.var_17?.removeView(this, !1));
  }
  setImageAsset(e, r, t = !1) {
    if (e == null || this.var_17?.assets == null) return;
    let s = this.var_17.assets.getAssetByName(r)?.content;
    if (!(s instanceof globalThis.Object) || s == null) return;
    let o = s;
    e.bitmap != null ? e.bitmap.fillRect(e.bitmap.rect, 0) : (e.bitmap = new A(e.width, e.height, !0, 0));
    let d = t ? new E((e.bitmap.width - o.width) / 2, (e.bitmap.height - o.height) / 2) : new E(0, 0);
    (e.bitmap.copyPixels(o, o.rect, d, null, null, !0), e.invalidate());
  }
  show() {
    if (this.var_115 == null) return;
    this.var_115.visible = !0;
    let e = this.var_17?.windowManager?.getDesktop(0) ?? null;
    (e != null && this.var_115.parent !== e && e.addChild(this.var_115),
      this._r9c3fb1807cc335 && this.var_115.activate());
  }
  hide(e) {
    this.var_115 != null &&
      (!this.var_2732 && e && this.var_849 != null
        ? ((this.var_2732 = !0), this.var_849.start())
        : ((this.var_115.visible = !1), (this.var_115.parent = null)));
  }
  update(e, r, t) {
    if (
      !(e == null || r == null) &&
      (this.var_115 == null && this.updateWindow(), this.var_115 != null)
    ) {
      if (
        (this.var_2719
          ? ((this._r5b0ec478241fd5 += t),
            (this.var_1119 =
              (1 - this._r5b0ec478241fd5 / this._fadeLength) * this.maximumBlend))
          : (this.var_1119 = this.maximumBlend),
        this.var_1119 <= 0)
      ) {
        this.var_17?.removeView(this, !1);
        return;
      }
      if (!this.var_199 || this._ra7baf8c237a395) {
        let i = this.getOffset(e),
          s = r.y - e.top;
        this.var_2209.addValue(s);
        let o = this.var_2209._r26e48faa0dc4fb();
        o < this.var_3030 - a.const_100 && (o = this.var_3030 - a.const_100);
        let d = r.y - o;
        this.var_3030 = o;
        let f = e.top + i - this._r7cc4e51a423d11(e),
          l = d + i;
        (l < f && (l = f),
          (this.var_115.x = r.x - this.var_115.width / 2),
          (this.var_115.y = l),
          (this._ra7baf8c237a395 = !1));
      }
      ((this.var_115.blend = this.var_1119), this.show());
    }
  }
  set _r0a52fc53fa9ca7(e) {
    this._r9c3fb1807cc335 = e;
  }
  getOffset(e) {
    return -((this.var_115?.height ?? 0) + 4);
  }
  _r7cc4e51a423d11(e) {
    return Math.trunc(e.height * a.MAX_VERTICAL_LEAD_RATIO);
  }
  _r2428c93a495fc9(e) {
    if (e.type === u.OVER) this.var_199 = !0;
    else if (e.type === u.OUT) {
      let r = new E(e.stageX, e.stageY);
      e.window != null && !e.window.hitTestGlobalPoint(r) && (this.var_199 = !1);
    }
  }
  setMinimized(e) {
    ((a._isMinimized = e), (this._ra7baf8c237a395 = !0), this.updateWindow());
  }
  _r264c5b40440e9c() {
    if (
      this._rfa094422216bf3 == null &&
      this.var_17?.assets != null &&
      this.var_17.windowManager != null
    ) {
      let e = this.var_17.assets.getAssetByName("minimized_menu")?.content;
      e != null &&
        ((this._rfa094422216bf3 = this.var_17.windowManager.buildFromXML(e, 0)),
        this._rfa094422216bf3?.findChildByName("minimize")?.addEventListener(u.CLICK, this._r370cf563d6235a),
        this._rfa094422216bf3?.findChildByName("minimize")?.addEventListener(u.OVER, this._r932b323057a22d),
        this._rfa094422216bf3?.findChildByName("minimize")?.addEventListener(u.OUT, this._r932b323057a22d),
        this._rfa094422216bf3?.addEventListener(u.OVER, this._r846ed7467efd50),
        this._rfa094422216bf3?.addEventListener(u.OUT, this._r846ed7467efd50));
    }
    return this._rfa094422216bf3;
  }
  set activeView(e) {
    e != null &&
      (this.var_115 != null && (this.var_115.parent = null), (this.var_115 = e));
  }
  _r5dd13a0c875981(e) {
    this.setMinimized(!0);
  }
  onMinimizeHover(e) {
    let t = e.window?.findChildByName("icon");
    t != null && (t.color = e.type === u.OVER ? a.BUTTON_COLOR_HOVER : 16777215);
  }
  _rb370b0a4937d61 = n((e) => {
    ((this.var_2719 = !0), (this._r5b0ec478241fd5 = 0), this.hide(!0));
  }, "_rb370b0a4937d61");
  _r370cf563d6235a = n((e) => {
    this.setMinimized(!1);
  }, "_r370cf563d6235a");
}

// Extracted from HabboAirLauncher.deobf.js, line 200775.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/history/visualization/ChatHistoryScrollView.as
// Obfuscated name: _ic3378ac2c66a26

class a {
  constructor(e, r) {
    this.var_82 = e;
    this._r01fb81380a0035 = r;
    ((this._rootDisplayObject = new Sprite()),
      (this._rootDisplayObject.x = 0),
      (this._rootDisplayObject.y = 0),
      (this._r50e36871229e81 = new Sprite()),
      this._rootDisplayObject.addChild(this._r50e36871229e81),
      this._rootDisplayObject.addEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      (this._r3a16d13c26d3e1 = new ChatHistoryScrollBar(this, this.var_82)),
      (this._ignore = new UnkClass_3a5c6f()),
      (this._ignore.bitmapData = this.var_82.assets?.getAssetByName("close_x")?.content),
      (this._r0ed784c89cea2b = new a1(
        this._r090934b6b457cf,
        this._r755e0cd518cfaa,
        this._r3ab757e2a394ea,
        this._r8d8fcd14923069,
        60,
        !1,
        this._rf77fe29fa6c2f6,
        Number.NaN,
        !1,
      )));
  }
  static {
    n(this, "ChatHistoryScrollView");
  }
  static SPRINGBACK_DURATION_MS = 180;
  static AUTO_SCROLL_TO_LATEST_DURATION_MS = 140;
  static _rb6fe4bbc52191e = 200;
  static _r8899e357556537 = 200;
  static MOST_RECENT_HISTORY_BOTTOM_PADDING_THRESHOLD = 100;
  _rootDisplayObject;
  _r34b9dbda39b609 = null;
  _r262ae584bb2f44 = [];
  _r541949f86e0fdf = 0;
  _r45dd73c52ebc56 = new D();
  _visibleWidth = 0;
  _r563269e6e9ce1f = 0;
  _r48665daa4b0ddd = 0;
  _rd3f248527b7263 = null;
  _r50e36871229e81 = null;
  _isActive = !1;
  _r3a16d13c26d3e1;
  _ignore;
  var_241 = null;
  _r8d8fcd14923069 = 200;
  _r0ed784c89cea2b;
  _r402d0c2c517435 = !1;
  var_3684 = !1;
  var_2493 = 0;
  var_2993 = 0;
  var_1872 = 0;
  var_3535 = !1;
  var_2557 = 0;
  var_3026 = 0;
  var_1971 = 0;
  _rc0d4c2ea1e66e1 = !1;
  _re7b42493f891f1 = vi._rd24d4ae927fec8;
  dispose() {
    (this.deactivateScrolling(),
      this.deactivateView(),
      this.stopScrollWheel(),
      (this._rd3f248527b7263 = null),
      (this._ignore = null),
      (this.var_241 = null),
      this._r0ed784c89cea2b?.dispose(),
      (this._r0ed784c89cea2b = null),
      this._rootDisplayObject?.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      (this._rootDisplayObject = null),
      (this._r50e36871229e81 = null),
      (this._r3a16d13c26d3e1 = null));
  }
  get disposed() {
    return this._rootDisplayObject == null;
  }
  get rootDisplayObject() {
    return this._rootDisplayObject;
  }
  activateView() {
    if (!(this._r01fb81380a0035 == null || this._rootDisplayObject == null)) {
      (this.deactivateView(), (this._r262ae584bb2f44 = new Array(this._r01fb81380a0035.entries.length)));
      for (let e = 0, r = -this._r541949f86e0fdf; e < this._r01fb81380a0035.entries.length; e++) {
        let t = new class_2883(),
          i = this._r01fb81380a0035.entries[e];
        ((t.roomId = i.roomId),
          (t._rc86f77becaebea = i._rc86f77becaebea),
          (t.webId = i.webId),
          (t.bitmapData = i.bitmap),
          (t._r19c47ac0426f2a = i._r19c47ac0426f2a),
          (t.userName = i.userName),
          (r -= i.overlap.y),
          (t.y = r),
          (t.x = vi._r478c9be01b0f85),
          (r += t.bitmapData.height),
          (r -= vi.const_1005),
          (this._r262ae584bb2f44[e] = t),
          this._rootDisplayObject.addChild(t));
      }
      (this._r3a16d13c26d3e1 != null &&
        (this._rootDisplayObject.addChild(this._r3a16d13c26d3e1.displayObject),
        this._r3a16d13c26d3e1._rf637347fbe45bb()),
        (this._isActive = !0));
    }
  }
  deactivateView() {
    if (!(this.disposed || this._rootDisplayObject == null)) {
      for (let e of this._r262ae584bb2f44)
        (e.parent === this._rootDisplayObject && this._rootDisplayObject.removeChild(e), (e.bitmapData = null));
      (this.var_241 != null &&
        this._ignore?.parent === this._rootDisplayObject &&
        (this._rootDisplayObject.removeChild(this._ignore), (this.var_241 = null)),
        (this._r262ae584bb2f44 = []),
        this._r3a16d13c26d3e1?.displayObject.parent === this._rootDisplayObject &&
          this._rootDisplayObject.removeChild(this._r3a16d13c26d3e1.displayObject),
        (this._isActive = !1));
    }
  }
  activateScrolling() {
    (this.deactivateScrolling(),
      this._rootDisplayObject != null &&
        (this._rootDisplayObject.addEventListener(UnkClass_fd7c12._r9001c395573374, this._r2c9f236b2f27a5),
        this._rootDisplayObject.addEventListener(UnkClass_fd7c12._r8ea9e83cdee875, this._r62c79b46cbe6ef),
        (this._r34b9dbda39b609 = this._rootDisplayObject.stage),
        this._r34b9dbda39b609?.addEventListener(M.RESIZE, this._r7bfc585669c39c)));
  }
  deactivateScrolling() {
    (this._rootDisplayObject?.removeEventListener(UnkClass_fd7c12._r9001c395573374, this._r2c9f236b2f27a5),
      this._rootDisplayObject?.removeEventListener(UnkClass_fd7c12._r8ea9e83cdee875, this._r62c79b46cbe6ef),
      this._r34b9dbda39b609?.removeEventListener(UnkClass_fd7c12.var_370, this._r2c9f236b2f27a5),
      this._r34b9dbda39b609?.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r2c9f236b2f27a5),
      this._r34b9dbda39b609?.removeEventListener(M.RESIZE, this._r7bfc585669c39c),
      (this._r402d0c2c517435 = !1),
      this.stopScrollWheel());
  }
  get topY() {
    return this._r541949f86e0fdf;
  }
  get _re0f3dfaef5eef2() {
    return this._r01fb81380a0035.totalHeight;
  }
  set topY(e) {
    this._rc4047246388fcd(e, !1);
  }
  _rc4047246388fcd(e, r) {
    let t = e - this._r541949f86e0fdf;
    this._r541949f86e0fdf = Math.trunc(e);
    for (
      let i = 0, s = -this._r541949f86e0fdf;
      i < this._r01fb81380a0035.entries.length && !(this._r262ae584bb2f44.length <= i);
      i++
    ) {
      let o = this._r01fb81380a0035.entries[i];
      ((s -= o.overlap.y), (this._r262ae584bb2f44[i].y = s), (s += o.bitmap.height - vi.const_1005));
    }
    (this.var_241 != null &&
      this._ignore != null &&
      (this._ignore.y =
        this.var_241.y + (this.var_241.height - this._ignore.height) / 2),
      this._r3a16d13c26d3e1?._rf637347fbe45bb(),
      !r && this._r0ed784c89cea2b?._r1bd7920e521eab && this._r0ed784c89cea2b._r4b59d5020c3c2b(t));
  }
  _rc5978e3d6cb5ff(e) {
    if (this._rootDisplayObject == null) return;
    let r = this._rc0d4c2ea1e66e1,
      t = new class_2883();
    ((t.bitmapData = e.bitmap),
      (t.y =
        -this._r541949f86e0fdf +
        this._r01fb81380a0035.totalHeight -
        e.bitmap.height +
        vi.const_1005),
      (t.x = vi._r478c9be01b0f85),
      (t._rc86f77becaebea = e._rc86f77becaebea),
      (t.webId = e.webId),
      (t.roomId = e.roomId),
      (t._r19c47ac0426f2a = e._r19c47ac0426f2a),
      (t.userName = e.userName),
      this._r262ae584bb2f44.push(t),
      this._rootDisplayObject.addChild(t),
      r && this._r4866a23838648d(),
      this._r3a16d13c26d3e1?._rf637347fbe45bb());
  }
  _r04e596c702ad7f(e) {
    if (!(this._rootDisplayObject == null || this._r262ae584bb2f44.length < 1)) {
      (this._rootDisplayObject.removeChild(this._r262ae584bb2f44[0]),
        (this._r262ae584bb2f44[0].bitmapData = null),
        this._r262ae584bb2f44.splice(0, 1));
      for (let r of this._r262ae584bb2f44) r.y -= e;
      this._r3a16d13c26d3e1?._rf637347fbe45bb();
    }
  }
  get viewPort() {
    return this._r45dd73c52ebc56;
  }
  set viewPort(e) {
    this._rootDisplayObject != null &&
      ((this._r45dd73c52ebc56 = e),
      (this._rootDisplayObject.width = e.width),
      (this._rootDisplayObject.height = e.height),
      (this._rootDisplayObject.scaleX = 1),
      (this._rootDisplayObject.scaleY = 1),
      this._rd3f248527b7263 == null &&
        ((this._rd3f248527b7263 = new Sprite()), this._rootDisplayObject.addChild(this._rd3f248527b7263)),
      this.updateClipMask(),
      this.updateInputSurface(),
      this.updateScrollBarPosition(),
      (this.chatFlowViewer = e.height),
      this._rc0d4c2ea1e66e1 && (this._re7b42493f891f1 = this._r67957c4279ecca()));
  }
  set chatFlowViewer(e) {
    (this._rootDisplayObject != null && (this._rootDisplayObject.y = e - this._r45dd73c52ebc56.height),
      this._r3a16d13c26d3e1 != null &&
        ((this._r3a16d13c26d3e1.height = e),
        (this._r3a16d13c26d3e1.displayObject.y = this._r45dd73c52ebc56.height - e)));
  }
  set viewWidth(e) {
    ((this._visibleWidth = e), this.updateClipMask(), this.updateInputSurface(), this.updateScrollBarPosition());
  }
  scrollToBottom() {
    ((this.topY =
      this._r01fb81380a0035.totalHeight - this.viewPort.height + vi._rd24d4ae927fec8),
      (this._rc0d4c2ea1e66e1 = !0),
      (this._re7b42493f891f1 = vi._rd24d4ae927fec8),
      this.cancelAutoScrollToLatest());
  }
  get isActive() {
    return this._isActive;
  }
  get _r46f183fd22949d() {
    return this._rc0d4c2ea1e66e1 || this._r2d1b49ab71cb08();
  }
  _r60ed6f459ec4b9(e = !0) {
    ((this._rc0d4c2ea1e66e1 = !1),
      this.cancelSpringback(),
      this.cancelAutoScrollToLatest(),
      e && this._red7ffe0a06dda2(!1));
  }
  stopScrollWheel() {
    (this._red7ffe0a06dda2(!1), this.cancelSpringback(), this.cancelAutoScrollToLatest());
  }
  update(e) {
    if (this.var_3535) {
      this.var_1971 += e;
      let s = Math.min(1, this.var_1971 / a.AUTO_SCROLL_TO_LATEST_DURATION_MS),
        o = 1 - Math.pow(1 - s, 3),
        d = this.var_2557 + (this.var_3026 - this.var_2557) * o;
      ((this.topY = Math.round(d)),
        s >= 1 && ((this.topY = this.var_3026), this.cancelAutoScrollToLatest()));
    }
    if (!this.var_3684) return;
    this.var_1872 += e;
    let r = Math.min(1, this.var_1872 / a.SPRINGBACK_DURATION_MS),
      t = 1 - Math.pow(1 - r, 3),
      i = this.var_2493 + (this.var_2993 - this.var_2493) * t;
    ((this.topY = Math.round(i)),
      r >= 1 && ((this.topY = this.var_2993), this.cancelSpringback()));
  }
  _r133f475a10afc6() {
    if ((this._rd02d2072a91482(), this.cancelAutoScrollToLatest(), this._r45dd73c52ebc56 == null)) {
      this.cancelSpringback();
      return;
    }
    let e = this._r4a1f6cee0446f9();
    if (Number.isNaN(e) || Math.round(e) === this._r541949f86e0fdf) {
      this.cancelSpringback();
      return;
    }
    ((this.var_3684 = !0),
      (this.var_2493 = this._r541949f86e0fdf),
      (this.var_2993 = Math.round(e)),
      (this.var_1872 = 0));
  }
  updateClipMask() {
    if (this._rd3f248527b7263 == null || this._r45dd73c52ebc56 == null || this._rootDisplayObject == null)
      return;
    let e = Math.max(0, Math.min(this._r45dd73c52ebc56.width, this._visibleWidth));
    (this._rd3f248527b7263.graphics.clear(),
      !(e <= 0) &&
        (this._rd3f248527b7263.graphics.beginFill(16777215),
        this._rd3f248527b7263.graphics.drawRect(0, 0, e, this._r45dd73c52ebc56.height),
        this._rd3f248527b7263.graphics.endFill(),
        (this._rootDisplayObject.mask = this._rd3f248527b7263)));
  }
  updateInputSurface() {
    this._r50e36871229e81 != null &&
      (this._r50e36871229e81.graphics.clear(),
      !(this._r45dd73c52ebc56 == null || this._visibleWidth <= 0) &&
        (this._r50e36871229e81.graphics.beginFill(0, 0),
        this._r50e36871229e81.graphics.drawRect(0, 0, this._visibleWidth, this._r45dd73c52ebc56.height),
        this._r50e36871229e81.graphics.endFill()));
  }
  updateScrollBarPosition() {
    if (this._r3a16d13c26d3e1 == null || this._r45dd73c52ebc56 == null) return;
    let e = this._visibleWidth > 0 ? this._visibleWidth : this._r45dd73c52ebc56.width;
    this._r3a16d13c26d3e1.displayObject.x = Math.max(
      0,
      e - this._r3a16d13c26d3e1.displayObject.width - ChatHistoryScrollBar.RIGHT_MARGIN,
    );
  }
  _recd2e065e617c8(e) {
    for (let r of this._r262ae584bb2f44) if (e >= r.y && e <= r.y + r.height) return r;
    return null;
  }
  _r2c9f236b2f27a5 = n((e) => {
    if (
      this._rootDisplayObject?.stage == null ||
      this._r3a16d13c26d3e1 == null ||
      this._r34b9dbda39b609 == null
    )
      return;
    let r = e;
    switch (r.type) {
      case UnkClass_fd7c12._r9001c395573374:
        r.stageY < this._rootDisplayObject.y + this._r45dd73c52ebc56.height &&
          r.stageX < this._r3a16d13c26d3e1.displayObject.x &&
          (this._r60ed6f459ec4b9(),
          this._r3a16d13c26d3e1._r562e802286af89(),
          (this._r563269e6e9ce1f = r.stageY),
          (this._r48665daa4b0ddd = this.topY),
          (this._r402d0c2c517435 = !0),
          this._r34b9dbda39b609.addEventListener(UnkClass_fd7c12.var_370, this._r2c9f236b2f27a5),
          this._r34b9dbda39b609.addEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r2c9f236b2f27a5));
        break;
      case UnkClass_fd7c12.var_370: {
        let t = r.stageY - this._r563269e6e9ce1f;
        ((this.topY = this._r48665daa4b0ddd - t), e.stopImmediatePropagation());
        break;
      }
      case UnkClass_fd7c12._ra93f33360c3a28: {
        (this._r34b9dbda39b609.removeEventListener(UnkClass_fd7c12.var_370, this._r2c9f236b2f27a5),
          this._r34b9dbda39b609.removeEventListener(UnkClass_fd7c12._ra93f33360c3a28, this._r2c9f236b2f27a5),
          (this._r402d0c2c517435 = !1));
        let t = r.stageY - this._r563269e6e9ce1f;
        if (t < 1 && t > -1) {
          if (this.hitIgnore(r.stageX, r.stageY)) {
            this._r133f475a10afc6();
            break;
          }
          let i = this._recd2e065e617c8(r.stageY);
          i != null && (this._rd3c9129f564f10(i), this._re3ff476dfe4d73(i));
        }
        this._r133f475a10afc6();
        break;
      }
      default:
        break;
    }
  }, "_r2c9f236b2f27a5");
  _r62c79b46cbe6ef = n((e) => {
    (this._r60ed6f459ec4b9(!1), this.WindowMouseEvent(e.delta), e.stopImmediatePropagation());
  }, "_r62c79b46cbe6ef");
  _red7ffe0a06dda2(e = !0) {
    this._reccca882c3afcf &&
      (this._r0ed784c89cea2b?.stop(), e && !this._r402d0c2c517435 && this._r133f475a10afc6());
  }
  get _reccca882c3afcf() {
    return this._r0ed784c89cea2b?._r1bd7920e521eab ?? !1;
  }
  WindowMouseEvent(e) {
    (this.cancelSpringback(), this._r0ed784c89cea2b?.WindowMouseEvent(e));
  }
  ChatHistoryScrollBar = n((e) => {
    let r = this._rootDisplayObject?.stage ?? null;
    r != null && (this.viewPort = new D(0, 0, r.stageWidth, r._rcc0ac91bd808af - vi.TRAY_TOOLBAR_BOTTOM_MARGIN));
  }, "ChatHistoryScrollBar");
  _r7bfc585669c39c = n((e) => {
    this._r34b9dbda39b609 != null &&
      (this.viewPort = new D(
        0,
        0,
        this._r34b9dbda39b609.stageWidth,
        this._r34b9dbda39b609._rcc0ac91bd808af - vi.TRAY_TOOLBAR_BOTTOM_MARGIN,
      ));
  }, "_r7bfc585669c39c");
  _r090934b6b457cf = n(() => this._r541949f86e0fdf, "_r090934b6b457cf");
  _r755e0cd518cfaa = n((e) => {
    this._rc4047246388fcd(Math.round(e), !0);
  }, "_r755e0cd518cfaa");
  _r3ab757e2a394ea = n(() => 1, "_r3ab757e2a394ea");
  _rf77fe29fa6c2f6 = n(() => {
    this._r402d0c2c517435 || this._r133f475a10afc6();
  }, "_rf77fe29fa6c2f6");
  _rd3c9129f564f10(e) {
    this.var_82.selectAvatar(e.roomId, e._rc86f77becaebea);
  }
  _re3ff476dfe4d73(e) {
    if (!(e === this.var_241 || this._rootDisplayObject == null || this._ignore == null)) {
      if (
        !e._r19c47ac0426f2a ||
        e.webId < 0 ||
        this.var_82.sessionDataManager?.isIgnored(e.webId)
      ) {
        this.var_241 != null &&
          this._ignore.parent === this._rootDisplayObject &&
          (this._rootDisplayObject.removeChild(this._ignore), (this.var_241 = null));
        return;
      }
      ((this._ignore.x = e.x + e.width + 5),
        (this._ignore.y = e.y + (e.height - this._ignore.height) / 2),
        this._rootDisplayObject.addChild(this._ignore),
        (this.var_241 = e));
    }
  }
  hitIgnore(e, r) {
    if (
      this.var_241 == null ||
      this._ignore == null ||
      e < this._ignore.x ||
      e > this._ignore.x + this._ignore.width ||
      r < this._ignore.y ||
      r > this._ignore.y + this._ignore.height
    )
      return !1;
    this.var_82.localizations?._r43eae9731f5b27(
      "chat.ignore_user.confirm.info",
      "username",
      this.var_241.userName,
    );
    let t = this.var_82.localizations?.getLocalization("chat.ignore_user.confirm.title") ?? "",
      i = this.var_82.localizations?.getLocalization("chat.ignore_user.confirm.info") ?? "";
    return (this.var_82.windowManager?.confirmWithModal(t, i, 0, this.ignoreConfirmDialogEventProcessor), !0);
  }
  ignoreConfirmDialogEventProcessor = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 &&
        this.var_82.sessionDataManager?.ignoreUser(this.var_241?.webId ?? 0),
      this.var_241 != null &&
        this._ignore?.parent === this._rootDisplayObject &&
        (this._rootDisplayObject?.removeChild(this._ignore), (this.var_241 = null)));
  }, "ignoreConfirmDialogEventProcessor");
  cancelSpringback() {
    ((this.var_3684 = !1),
      (this.var_1872 = 0),
      (this.var_2493 = this._r541949f86e0fdf),
      (this.var_2993 = this._r541949f86e0fdf));
  }
  cancelAutoScrollToLatest() {
    ((this.var_3535 = !1),
      (this.var_1971 = 0),
      (this.var_2557 = this._r541949f86e0fdf),
      (this.var_3026 = this._r541949f86e0fdf));
  }
  _r4866a23838648d() {
    if (this._r45dd73c52ebc56 == null) return;
    this.cancelSpringback();
    let e = this._re0f3dfaef5eef2 - this._r45dd73c52ebc56.height + this._re7b42493f891f1;
    if (e === this._r541949f86e0fdf) {
      this.cancelAutoScrollToLatest();
      return;
    }
    ((this.var_3535 = !0),
      (this.var_2557 = this._r541949f86e0fdf),
      (this.var_3026 = e),
      (this.var_1971 = 0));
  }
  _rd02d2072a91482() {
    this._r2d1b49ab71cb08()
      ? ((this._rc0d4c2ea1e66e1 = !0), (this._re7b42493f891f1 = this._r67957c4279ecca()))
      : (this._rc0d4c2ea1e66e1 = !1);
  }
  _r67957c4279ecca() {
    return this._r45dd73c52ebc56 == null
      ? 0
      : this._r541949f86e0fdf - this._re0f3dfaef5eef2 + this._r45dd73c52ebc56.height;
  }
  _r2d1b49ab71cb08() {
    return this._r45dd73c52ebc56 != null && this._r67957c4279ecca() >= a.MOST_RECENT_HISTORY_BOTTOM_PADDING_THRESHOLD;
  }
  _r4a1f6cee0446f9() {
    if (this._r45dd73c52ebc56 == null || this._re0f3dfaef5eef2 <= 0) return Number.NaN;
    let e = Math.min(a._rb6fe4bbc52191e, this._re0f3dfaef5eef2),
      r = Math.min(a._r8899e357556537, this._re0f3dfaef5eef2);
    if (e <= 0 && r <= 0) return Number.NaN;
    if (e > 0) {
      let t = e - this._r45dd73c52ebc56.height;
      if (this._r541949f86e0fdf < t) return t;
    }
    if (r > 0) {
      let t = this._re0f3dfaef5eef2 - r;
      if (this._r541949f86e0fdf > t) return t;
    }
    return Number.NaN;
  }
}

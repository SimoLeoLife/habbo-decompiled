// Extracted from HabboAirLauncher.deobf.js, line 325961.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/roomtools/RoomToolsToolbarCtrl.as
// Obfuscated name: _i9298adb12bfa9e

class a extends RoomToolsCtrlBase {
  static {
    n(this, "RoomToolsToolbarCtrl");
  }
  static TOOLBAR_EXPAND_TARGET_X = 1;
  static ANIMATION_DURATION_MS = 140;
  static ROOM_MOUSE_BLOCK_HANDLE_ID = "room_tools_toolbar";
  _r72747fcbb311ec = null;
  _disposed = !1;
  var_576 = !1;
  _isRegisteredForUpdates = !1;
  var_2728 = 0;
  var_3678 = 0;
  var_3341 = 0;
  var_2554 = 0;
  _r6c862f935a466d = !1;
  var_4952 = "";
  var_4680 = !1;
  var_5738 = !1;
  constructor(e, r, t) {
    super(e, r, t);
    let i = t.getAssetByName("room_tools_toolbar_xml")?.content;
    ((this._window = i != null ? r.buildFromXML(i) : null),
      this._window != null &&
        ((this._window.procedure = this.onWindowEvent),
        this._window.addEventListener(u.OVER, this.onWindowEvent),
        this._window.addEventListener(u.OUT, this.onWindowEvent),
        (this.var_2728 = this.getCollapsedExpandedOffsetX()),
        this.updateVisuals(),
        this.ensureUpdateRegistration()));
  }
  dispose() {
    if (this._disposed) return;
    (this.removeUpdateRegistration(),
      this.removeRoomMouseBlockRect(),
      this._r72747fcbb311ec?.dispose(),
      (this._r72747fcbb311ec = null),
      this.var_17?.windowManager?._r569d78e8990227("share_room_link")?.dispose(),
      super.dispose(),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  updateRoomHistoryButtons() {
    if (this._window == null || this.var_17 == null) return;
    let e = this.var_17._r0b49fe8ef161a7;
    (e._r86e003da163789()
      ? this._window.findChildByName("button_history_forward")?.enable()
      : this._window.findChildByName("button_history_forward")?.disable(),
      e._r094e432bc32368()
        ? this._window.findChildByName("button_history_back")?.enable()
        : this._window.findChildByName("button_history_back")?.disable(),
      e.length <= 1
        ? this._window.findChildByName("button_history")?.disable()
        : this._window.findChildByName("button_history")?.enable(),
      this._r72747fcbb311ec != null &&
        (this._r72747fcbb311ec.populate(e.getHistoryView()), this.updatePosition()));
  }
  disableRoomHistoryButtons() {
    (this._window?.findChildByName("button_history_forward")?.disable(),
      this._window?.findChildByName("button_history_back")?.disable());
  }
  release() {
    this._r72747fcbb311ec != null && this.toggleHistory();
  }
  setChatHistoryButton(e) {
    this.setElementVisible("button_chat_history", e);
  }
  setAchievementsButton(e) {
    this.setElementVisible("button_achievements", e);
  }
  setCameraButton(e) {
    this.setElementVisible("button_camera", e);
  }
  setLikeButton(e) {
    this.setElementVisible("button_like", e);
  }
  setElementVisible(e, r) {
    this._window != null &&
      ((this._window.visible = !0), super.setElementVisible(e, r), this.updatePosition());
  }
  set visible(e) {
    this._window != null &&
      ((this._window.visible = e), e ? this.updatePosition() : this.removeRoomMouseBlockRect());
  }
  updatePosition() {
    if (this._window == null) return;
    let e = this._window.findChildByName("itemlist_buttons"),
      r = this._window.findChildByName("window_bg"),
      t = this._window.findChildByName("side_bar_collapse"),
      i = this._window.findChildByName("side_bar_expand"),
      s = this._window.findChildByName("button_collapse"),
      o = this._window.findChildByName("button_expand"),
      d = this._window.findChildByName("arrow_collapse"),
      c = this._window.findChildByName("arrow_expand");
    if (e != null && r != null && t != null && i != null) {
      let f = 0;
      for (let l = 0; l < e.numListItems; l++) {
        let b = e.getListItemAt(l);
        b?.visible && (f += b.height);
      }
      ((t.height = f),
        (t.x = 0),
        (i.height = f),
        (i.x = 0),
        (i.y = 0),
        (this._window.height = f),
        (e.height = f),
        (r.height = f),
        s != null && (s.height = f),
        o != null && (o.height = f),
        d != null && (d.y = f * 0.5 - d.height * 0.5),
        c != null && (c.y = f * 0.5 - c.height * 0.5));
    }
    ((this._window.position = new E(
      RoomToolsCtrlBase.TOOLBAR_X,
      this._window.desktop.height - RoomToolsCtrlBase.DISTANCE_FROM_BOTTOM - this._window.height,
    )),
      this._r72747fcbb311ec?.window != null &&
        (this._r72747fcbb311ec.window.position = new E(
          this.right - this._r72747fcbb311ec.window.width,
          this._window.position.y - this._r72747fcbb311ec.window.height,
        )),
      this.updateRoomMouseBlockRect());
  }
  setCollapsed(e) {
    this.var_223 === e ||
      this._window == null ||
      ((this.var_223 = e),
      this._rf42d9c88ef4009(this.var_223 ? this.getCollapsedExpandedOffsetX() : 0));
  }
  update(e) {
    if (this.var_576) {
      this.var_2554 += e;
      let r = Math.min(1, this.var_2554 / a.ANIMATION_DURATION_MS),
        t = 1 - Math.pow(1 - r, 3);
      (this.applyExpandedBranchOffset(this.var_3678 + (this.var_3341 - this.var_3678) * t),
        this.updatePosition(),
        r >= 1 &&
          ((this.var_576 = !1),
          this.applyExpandedBranchOffset(this.var_3341),
          this.updateVisuals()));
    }
    this.updateZoomControls();
  }
  get right() {
    if (this._window == null) return 0;
    if (this.var_223 && !this.var_576) {
      let s = this._window.findChildByName("side_bar_expand");
      return s != null ? s.width + RoomToolsCtrlBase.TOOLBAR_X : 0;
    }
    let e = 0,
      r = this._window.findChildByName("window_bg"),
      t = this._window.findChildByName("side_bar_expand"),
      i = this._window.findChildByName("side_bar_collapse");
    return (
      r != null && r.visible && (e = Math.max(e, Math.round(r.x + r.width))),
      t != null && t.visible && (e = Math.max(e, Math.round(t.x + t.width))),
      i != null && i.visible && (e = Math.max(e, Math.round(i.x + i.width))),
      e + RoomToolsCtrlBase.TOOLBAR_X
    );
  }
  toggleHistory() {
    this._r72747fcbb311ec != null
      ? (this._r72747fcbb311ec.dispose(), (this._r72747fcbb311ec = null))
      : ((this._r72747fcbb311ec = new _Ce(this._windowManager, this._assets, this.handler)),
        this._r72747fcbb311ec.populate(this.var_17?._r0b49fe8ef161a7.getHistoryView() ?? []),
        this.updatePosition());
  }
  updateVisuals() {
    this._window == null ||
      this._window.findChildByName("window_bg") == null ||
      ((this._window.findChildByName("window_bg").visible =
        !this.var_223 || this.var_576),
      (this._window.findChildByName("side_bar_collapse").visible = !this.var_223),
      (this._window.findChildByName("side_bar_expand").visible = this.var_223),
      this.applyExpandedBranchOffset(this.var_2728),
      this.updatePosition(),
      this.updateZoomControls());
  }
  _rf42d9c88ef4009(e) {
    ((this.var_3678 = this.var_2728),
      (this.var_3341 = e),
      (this.var_2554 = 0),
      (this.var_576 = this.var_3678 !== this.var_3341),
      this.updateVisuals(),
      this.var_576 &&
        (this.ensureUpdateRegistration(),
        this._isRegisteredForUpdates ||
          ((this.var_576 = !1), this.applyExpandedBranchOffset(e), this.updateVisuals())));
  }
  ensureUpdateRegistration() {
    let e = this._r04ec538efcf674();
    !this._isRegisteredForUpdates && e != null && (e.registerUpdateReceiver(this, 1), (this._isRegisteredForUpdates = !0));
  }
  removeUpdateRegistration() {
    let e = this._r04ec538efcf674();
    (this._isRegisteredForUpdates && e != null && e.removeUpdateReceiver(this), (this._isRegisteredForUpdates = !1));
  }
  updateZoomControls() {
    if (this._window == null || this.var_17 == null) return;
    let e = this._window.findChildByName("zoom_text"),
      r = this.var_17._r0d873f726c47d7(1),
      t = this.var_17._r0d873f726c47d7(-1),
      i = this.var_17._rbc1853fd00ccee();
    if (
      this._r6c862f935a466d &&
      i === this.var_4952 &&
      r === this.var_4680 &&
      t === this.var_5738
    )
      return;
    e != null &&
      (e.caption =
        this.var_17.localizations?._r43eae9731f5b27("room.zoom.text", "zoom_level", i) ??
        this.var_17.localizations?.getLocalization("room.zoom.text", i) ??
        i);
    let s = this._window.findChildByName("zoom_in_btn");
    s != null && (r ? s.enable() : s.disable());
    let o = this._window.findChildByName("zoom_out_btn");
    (o != null && (t ? o.enable() : o.disable()),
      (this._r6c862f935a466d = !0),
      (this.var_4952 = i),
      (this.var_4680 = r),
      (this.var_5738 = t));
  }
  applyExpandedBranchOffset(e) {
    if (this._window == null) return;
    let r = this._window.findChildByName("window_bg");
    r != null && ((this.var_2728 = e), (r.x = a.TOOLBAR_EXPAND_TARGET_X + e));
  }
  getCollapsedExpandedOffsetX() {
    if (this._window == null) return 0;
    let e = this._window.findChildByName("window_bg"),
      r = this._window.findChildByName("side_bar_expand");
    return e == null || r == null ? 0 : r.width - e.width - a.TOOLBAR_EXPAND_TARGET_X;
  }
  _r04ec538efcf674() {
    return this.handler?.containerRef?.roomEngine ?? null;
  }
  onWindowEvent = n((e, r) => {
    if (
      e.type === y.const_411 &&
      this._window?.parent != null &&
      e.target === this._window.parent
    ) {
      this.updatePosition();
      return;
    }
    if (e.type === u.CLICK)
      switch ((this._r61a7436ffcef19(), r.name)) {
        case "button_settings":
          this.handler?._r865761362c6928();
          break;
        case "zoom_in_btn":
          (this.var_17?._rf7b390f9b3bea1(1), this.updateZoomControls());
          break;
        case "zoom_out_btn":
          (this.var_17?._rf7b390f9b3bea1(-1), this.updateZoomControls());
          break;
        case "button_zoom":
          this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new pm());
          break;
        case "button_collapse":
        case "button_expand":
          (this.var_17?.setCollapsed(!this.var_223),
            this.handler?.sessionDataManager?.setRoomToolsState(!this.var_223));
          break;
        case "button_history_back":
          this.var_17?._rc9864d6ea31376();
          break;
        case "button_history_forward":
          this.var_17?._rd5cd97aa68be79();
          break;
        case "button_history":
          this.toggleHistory();
          break;
        case "button_chat_history":
          this.var_17?._rafd5b9130c4bfd?.toggleVisibility();
          break;
        case "button_achievements":
          this.var_17?.handler.containerRef?.roomEngine?.context._r6b6c989018eb05(
            "questengine/achievements/wired_games",
          );
          break;
        case "button_like":
          (this.handler?._r26ff9fd8042368(),
            this._window?.findChildByName("button_like")?.disable());
          break;
        case "button_share":
          this._re5781859928f84();
          break;
        case "button_camera": {
          let t = new HabboToolbarEvent(HabboToolbarEvent.CAMERA_TOGGLE);
          ((t.iconName = HabboToolbarEvent.CAMERA_LAUNCH_ORIGIN_ROOM_TOOL),
            this.handler?.containerRef?.toolbar?.events.dispatchEvent?.(t));
          break;
        }
      }
  }, "onWindowEvent");
  _re5781859928f84() {
    let e = this.getEmbedData(),
      r = this.var_17?.windowManager?._r569d78e8990227("share_room_link");
    if (r != null) {
      r.dispose();
      return;
    }
    let t = this._assets?.getAssetByName("share_room_xml")?.content;
    if ((t != null && (r = this.var_17?.windowManager?.buildFromXML(t)), r != null)) {
      (this.handler?.containerRef?._r697386a8fb5bf8?.trackEventLog(
        "RoomLink",
        "click",
        "client.room_link.clicked",
      ),
        (r.name = "share_room_link"),
        r.center(),
        r.findChildByTag("close")?.addEventListener(u.CLICK, () => r?.dispose()),
        (r.findChildByName("embed_src_txt").caption = this.getEmbedData()),
        (r.findChildByName("embed_src_direct_txt").caption = this.getEmbedData(
          "embed_src_direct_txt",
          "${url.prefix}/room/%roomId%",
        )));
      let i = r.findChildByName("thumbnail_image");
      i != null && (i.assetUri = this.getThumbnailUrl() ?? "");
    }
    try {
      Bi._r8c1ed48897d9d3(e);
    } catch {}
  }
  getEmbedData(e = "navigator.embed.src", r = "") {
    let t = "",
      i = "",
      s = this.var_17?.handler.navigator?._rff8822efc4b68b ?? null;
    s != null && ((t = "private"), (i = String(s.flatId)));
    let o = this.var_17?.handler.containerRef?.config ?? null,
      d = o?.getProperty("user.hash") ?? "";
    if (this.var_17?.localizations?._r23e3b9cecb69d1(e))
      (this.var_17.localizations._r43eae9731f5b27(e, "roomType", t),
        this.var_17.localizations._r43eae9731f5b27(e, "embedCode", d),
        this.var_17.localizations._r43eae9731f5b27(e, "roomId", i));
    else if (r !== "")
      return (
        (r = r.replace("${url.prefix}", o?.getProperty("url.prefix") ?? "")),
        (r = r.replace("%roomId%", i)),
        r
      );
    return this.var_17?.localizations?.getLocalization(e, r) ?? r;
  }
  getThumbnailUrl() {
    let e = this.var_17?.handler.navigator?._rff8822efc4b68b ?? null;
    if (e == null) return null;
    let r = this.var_17?.handler.containerRef?.config ?? null;
    return e._r6ce72253ab2cde != null
      ? r?.getBoolean("new.navigator.official.room.thumbnails.in.amazon") === !0
        ? `${r.getProperty("navigator.thumbnail.url_base")}${e.flatId}.png`
        : `${r?.getProperty("image.library.url") ?? ""}${e._r6ce72253ab2cde}`
      : `${r?.getProperty("navigator.thumbnail.url_base") ?? ""}${e.flatId}.png`;
  }
  updateRoomMouseBlockRect() {
    if (
      this._window == null ||
      !this._window.visible ||
      this.handler?.containerRef?.roomEngine == null
    ) {
      this.removeRoomMouseBlockRect();
      return;
    }
    let e = this._window.findChildByName("window_bg");
    if (e == null || !e.visible || e.width <= 0 || e.height <= 0) {
      this.removeRoomMouseBlockRect();
      return;
    }
    let r = new D();
    if ((e.getGlobalRectangle(r), r.isEmpty())) {
      this.removeRoomMouseBlockRect();
      return;
    }
    this.handler.containerRef.roomEngine._r86d723ac23ad22(a.ROOM_MOUSE_BLOCK_HANDLE_ID, r);
  }
  removeRoomMouseBlockRect() {
    this.handler?.containerRef?.roomEngine?._r153e74d301004e(a.ROOM_MOUSE_BLOCK_HANDLE_ID);
  }
}

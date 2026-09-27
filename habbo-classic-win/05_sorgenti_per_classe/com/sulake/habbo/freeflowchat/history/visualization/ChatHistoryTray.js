// Extracted from HabboAirLauncher.deobf.js, line 201261.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/history/visualization/ChatHistoryTray.as
// Obfuscated name: _i5de1fd90567d39

class a {
  constructor(e, r) {
    this.var_82 = e;
    this._r6e13b73fe2a8d3 = r;
    ((this._rootDisplayObject = new Sprite()),
      (this._r186c4149c9b825 = new UnkClass_3a5c6f()),
      (this._r186c4149c9b825.bitmapData =
        this.var_82.assets?.getAssetByName("tray_bar")?.content ?? new A(8, 8, !0, 4278190080)),
      (this._r186c4149c9b825.width = this._r186c4149c9b825.bitmapData.width),
      (this._r186c4149c9b825.height = 0),
      (this._r186c4149c9b825.scaleX = 1),
      (this._r186c4149c9b825.x = -this._r186c4149c9b825.bitmapData.width),
      (this.var_229 = new UnkClass_3a5c6f()),
      (this.var_229.bitmapData =
        this.var_82.assets?.getAssetByName("tray_handle_open")?.content ??
        new A(8, 8, !0, 4294967295)),
      (this.var_229.scaleX = 1),
      (this.var_229.scaleY = 1),
      (this.var_229.x = -vi.TRAY_HANDLE_INLET_LEFT),
      (this.var_229.y = 350),
      (this.var_229.visible = !1),
      (this.tabHandleClickedEventHandler = new Sprite()),
      (this.tabHandleClickedEventHandler.visible = !1),
      this.tabHandleClickedEventHandler.addEventListener(UnkClass_fd7c12.CLICK, this._rab294aa988a337),
      this.Sprite(),
      (this._r7de1e0de5a533b = new Sprite()),
      (this._r7de1e0de5a533b.scaleX = 1),
      (this._r7de1e0de5a533b.scaleY = 1),
      (this._r7de1e0de5a533b.visible = !0),
      this._r7de1e0de5a533b.addChild(this._r186c4149c9b825),
      this._r7de1e0de5a533b.addChild(this.var_229),
      this._r7de1e0de5a533b.addChild(this.tabHandleClickedEventHandler),
      this._rootDisplayObject.addChild(this._r7de1e0de5a533b),
      (this._r31a067639b75c5 = new UnkClass_3a5c6f()),
      (this._r31a067639b75c5.bitmapData = new A(1, 1, !0, 2720277278)),
      (this._r31a067639b75c5.width = 0),
      (this._r31a067639b75c5.height = 0),
      this._rootDisplayObject.addChild(this._r31a067639b75c5),
      this._rootDisplayObject.addEventListener(M._scrollBar, this.onAddedToStage),
      (this._openedWidth = cb.NORMAL + vi.TIMESTAMP_FIXED_WIDTH + 1),
      this.applyTrayWidth(0));
  }
  static {
    n(this, "ChatHistoryTray");
  }
  static ANIMATION_DURATION_MS = 140;
  static ROOM_MOUSE_BLOCK_HANDLE_ID = "freeflow_chat_history_handle";
  _rootDisplayObject;
  _r7de1e0de5a533b;
  _r186c4149c9b825;
  var_229;
  tabHandleClickedEventHandler;
  _r31a067639b75c5;
  _openedWidth;
  _currentWidth = 0;
  _isOpen = !1;
  var_576 = !1;
  _isRegisteredForUpdates = !1;
  _r04ad90ac2273bb = !1;
  var_396 = !1;
  _animationStartWidth = 0;
  _animationTargetWidth = 0;
  var_2554 = 0;
  onAddedToStage = n((e) => {
    let r = this._rootDisplayObject?.stage;
    r != null && this.resize(r.stageWidth, r._rcc0ac91bd808af);
  }, "onAddedToStage");
  _rab294aa988a337 = n((e) => {
    this.tabHandleClickedEventHandler.visible && this.toggleHistoryVisibility();
  }, "_rab294aa988a337");
  dispose() {
    (this.var_82._r4fae2122297c21(0),
      this.removeRoomMouseBlockRect(),
      this._rootDisplayObject != null &&
        (this._rootDisplayObject.removeEventListener(M._scrollBar, this.onAddedToStage),
        this._r6e13b73fe2a8d3.deactivateScrolling(),
        this.tabHandleClickedEventHandler.removeEventListener(UnkClass_fd7c12.CLICK, this._rab294aa988a337)),
      this._isRegisteredForUpdates && this.var_82.removeUpdateReceiver(this),
      (this.var_576 = !1),
      (this._isRegisteredForUpdates = !1),
      (this._rootDisplayObject = null));
  }
  get disposed() {
    return this._rootDisplayObject == null;
  }
  get rootDisplayObject() {
    return this._rootDisplayObject;
  }
  resize(e, r) {
    ((this._r7de1e0de5a533b.height = r - vi.TRAY_TOOLBAR_BOTTOM_MARGIN),
      (this._r186c4149c9b825.height = r - vi.TRAY_TOOLBAR_BOTTOM_MARGIN),
      (this._r31a067639b75c5.height = r - vi.TRAY_TOOLBAR_BOTTOM_MARGIN),
      (this._r7de1e0de5a533b.scaleY = 1),
      (this.var_229.scaleY = 1),
      (this.var_229.y = r - vi.TRAY_HANDLE_OFFSET_FROM_BOTTOM),
      this.applyTrayWidth(Math.round(this._currentWidth)));
  }
  toggleHistoryVisibility() {
    this._rootDisplayObject != null &&
      (this._isOpen ? this._r7c7383a340a1c7() : this.startOpening());
  }
  set visible(e) {
    this._isOpen !== e && this.toggleHistoryVisibility();
  }
  update(e) {
    if (
      ((this._isOpen || this.var_576) && this._r6e13b73fe2a8d3.update(e),
      this.var_576)
    ) {
      this.var_2554 += e;
      let r = Math.min(1, this.var_2554 / a.ANIMATION_DURATION_MS),
        t = 1 - Math.pow(1 - r, 3),
        i = this._animationStartWidth + (this._animationTargetWidth - this._animationStartWidth) * t;
      (this.applyTrayWidth(Math.round(i)),
        r >= 1 &&
          ((this.var_576 = !1),
          this.applyTrayWidth(this._animationTargetWidth),
          this._animationTargetWidth === 0 && this.finishClosing()));
    }
    this.refreshUpdateRegistration();
  }
  startOpening() {
    ((this._isOpen = !0),
      this._r6e13b73fe2a8d3.rootDisplayObject.parent !== this._rootDisplayObject &&
        this._rootDisplayObject?.addChild(this._r6e13b73fe2a8d3.rootDisplayObject),
      this._r6e13b73fe2a8d3.isActive ||
        ((!this._r04ad90ac2273bb || this.var_396) && this._r6e13b73fe2a8d3.scrollToBottom(),
        this._r6e13b73fe2a8d3.activateView(),
        (this._r04ad90ac2273bb = !0)),
      this._r6e13b73fe2a8d3.activateScrolling(),
      (this.var_229.bitmapData =
        this.var_82.assets?.getAssetByName("tray_handle_close")?.content ??
        this.var_229.bitmapData),
      this.shouldAnimate()
        ? this.beginWidthAnimation(this._openedWidth)
        : ((this.var_576 = !1),
          this.applyTrayWidth(this._openedWidth),
          this.refreshUpdateRegistration()));
  }
  _r7c7383a340a1c7() {
    ((this._isOpen = !1),
      (this.var_396 = this._r6e13b73fe2a8d3._r46f183fd22949d),
      this._r6e13b73fe2a8d3.deactivateScrolling(),
      this.shouldAnimate()
        ? this.beginWidthAnimation(0)
        : ((this.var_576 = !1),
          this.applyTrayWidth(0),
          this.finishClosing(),
          this.refreshUpdateRegistration()));
  }
  finishClosing() {
    (this._r6e13b73fe2a8d3.rootDisplayObject.parent === this._rootDisplayObject &&
      this._rootDisplayObject?.removeChild(this._r6e13b73fe2a8d3.rootDisplayObject),
      this._r6e13b73fe2a8d3.deactivateView(),
      (this.var_229.bitmapData =
        this.var_82.assets?.getAssetByName("tray_handle_open")?.content ??
        this.var_229.bitmapData),
      (this.var_229.visible = !1),
      (this.tabHandleClickedEventHandler.visible = !1),
      this.Sprite());
  }
  beginWidthAnimation(e) {
    if (
      ((this._animationStartWidth = this._currentWidth),
      (this._animationTargetWidth = e),
      (this.var_2554 = 0),
      this._animationStartWidth === this._animationTargetWidth)
    ) {
      ((this.var_576 = !1),
        this.applyTrayWidth(e),
        e === 0 && this.finishClosing(),
        this.refreshUpdateRegistration());
      return;
    }
    ((this.var_576 = !0), this.refreshUpdateRegistration());
  }
  applyTrayWidth(e) {
    let r = Math.max(0, Math.min(this._openedWidth, e));
    ((this._currentWidth = r),
      (this._r31a067639b75c5.width = r),
      (this._r186c4149c9b825.x = r > 0 ? r : -(this._r186c4149c9b825.bitmapData?.width ?? 0)),
      (this.var_229.x =
        r > 0
          ? r - vi.TRAY_HANDLE_INLET_LEFT + (this._r186c4149c9b825.bitmapData?.width ?? 0)
          : -vi.TRAY_HANDLE_INLET_LEFT),
      (this.var_229.visible = r > 0),
      (this.tabHandleClickedEventHandler.visible = r > 0),
      (this._r6e13b73fe2a8d3.viewWidth = r),
      this.Sprite(),
      this.var_82._r4fae2122297c21(r > 0 ? r + (this._r186c4149c9b825.bitmapData?.width ?? 0) : 0),
      this.updateRoomMouseBlockRect());
  }
  refreshUpdateRegistration() {
    let e = this._isOpen || this.var_576;
    e !== this._isRegisteredForUpdates &&
      (e
        ? this.var_82.registerUpdateReceiver(this, 1)
        : this.var_82.removeUpdateReceiver(this),
      (this._isRegisteredForUpdates = e));
  }
  shouldAnimate() {
    return this._rootDisplayObject != null && this._rootDisplayObject.stage != null;
  }
  Sprite() {
    this.var_229.bitmapData != null &&
      ((this.tabHandleClickedEventHandler.x = this.var_229.x),
      (this.tabHandleClickedEventHandler.y = this.var_229.y),
      this.tabHandleClickedEventHandler.graphics.clear(),
      this.tabHandleClickedEventHandler.graphics.beginFill(0, 0),
      this.tabHandleClickedEventHandler.graphics.drawRect(
        0,
        0,
        this.var_229.width,
        this.var_229.height,
      ),
      this.tabHandleClickedEventHandler.graphics.endFill());
  }
  updateRoomMouseBlockRect() {
    if (
      this.var_82.roomEngine == null ||
      !this.tabHandleClickedEventHandler.visible ||
      this._rootDisplayObject?.stage == null
    ) {
      this.removeRoomMouseBlockRect();
      return;
    }
    let e = new D(
      this.tabHandleClickedEventHandler.x,
      this.tabHandleClickedEventHandler.y,
      this.tabHandleClickedEventHandler.width,
      this.tabHandleClickedEventHandler.height,
    );
    if (e.isEmpty()) {
      this.removeRoomMouseBlockRect();
      return;
    }
    this.var_82.roomEngine._r86d723ac23ad22(a.ROOM_MOUSE_BLOCK_HANDLE_ID, e);
  }
  removeRoomMouseBlockRect() {
    this.var_82.roomEngine?._r153e74d301004e(a.ROOM_MOUSE_BLOCK_HANDLE_ID);
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 341325.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/BottomBarLeft.as
// Obfuscated name: _ibc1f178303963c

class a {
  static {
    n(this, "BottomBarLeft");
  }
  static DEFAULT_LOCATION = new E(0, 500);
  static _raaf38878ecdf06 = new E(0, 500);
  static COUNTER_MARGIN = 0;
  static ME_MENU_ICON_NAME = "icon_me_menu";
  static ICON_REGION_WIDTH = 45;
  static WINDOW_RIGHT_PADDING = 10;
  static COLLAPSED_MARGIN = 185;
  static COLLAPSE_ANIMATION_DURATION_MS = 140;
  static COLLAPSE_ANIMATION_FPS = 60;
  _window;
  _disposed = !1;
  _toolbar;
  _windowManager;
  _r4019d2e39fcb84 = new B();
  var_425 = null;
  _rf6ec6bcaa7fd6d = !1;
  _r1c548ca69dba72 = null;
  scrollToIndex = null;
  _left_arrow = null;
  _rddb4d4220f0988 = null;
  _rcf4a65213f0aed = null;
  _r5d9080afa32860 = "";
  _rd0df026c1fc6bd = null;
  var_2554 = 0;
  _animationStartWidth = 0;
  _animationTargetWidth = 0;
  _animationTargetAreaWidth = 0;
  _animationSourceLayout = 0;
  _r38626bbf37df0d = 0;
  _animationTargetLayout = null;
  var_3125 = null;
  var_4841 = !1;
  var_2885 = !1;
  _buttonContainer = null;
  _r592acf7b26a88b = 0;
  _r55f945adb4c70f = 0;
  _r2e8d590f80ed3d = 0;
  _r31a62b61a3c1fd = 0;
  var_5156 = 0;
  var_496 = !1;
  _rc75c9cf303652f;
  _r8fccf5ce52537f;
  constructor(e, r, t, i) {
    ((this._toolbar = e),
      (this._windowManager = r),
      (this._rc75c9cf303652f = new tMe(e, this)),
      (this._r8fccf5ce52537f = new ProgMenuController(e, this)));
    let s = t.getAssetByName("bottom_bar_left_xml");
    if (((this._window = r.buildFromXML(s?.content)), this._window == null))
      throw new Error("Failed to construct bottom bar left window from XML.");
    (this._window.addEventListener(y.const_411, this._rb36df07202c075),
      (this._window.clipping = !0),
      (this._rddb4d4220f0988 = this._window.getChildByName("toolbar_items")),
      this._rddb4d4220f0988 != null && (this._rddb4d4220f0988.clipping = !0));
    let o = this._window.getChildByName("arrow_container_left"),
      d = this._window.getChildByName("arrow_container_right");
    ((this.scrollToIndex = o?.getChildByName("collapse_left")),
      (this._left_arrow = d?.getChildByName("collapse_right")),
      this.scrollToIndex?.addEventListener(u.CLICK, this._r1c6c7e609e3530),
      this._left_arrow?.addEventListener(u.CLICK, this._r1c6c7e609e3530),
      (this._rcf4a65213f0aed = this._rddb4d4220f0988?.getChildByName("line")));
    let c = [];
    this._window.groupChildrenWithTag("TOGGLE", c, -1);
    for (let h of c) h.addEventListener(u.CLICK, this._r78b472e029292e);
    (this._r5f2964065e6a9a(Me.getIconName(Me.MEMENU), !1),
      this._r5f2964065e6a9a(Me.getIconName(Me.INVENTORY), !1),
      this._r5f2964065e6a9a(Me.getIconName(Me.WIRED_MENU), !1),
      this._r5f2964065e6a9a(Me.getIconName(Me.GAMES), e.getBoolean("games_icon_enabled")));
    let f = t.getAssetByName("new_items_label_xml");
    if (((this.var_425 = r.buildFromXML(f?.content, 2)), this.var_425 == null))
      throw new Error("Failed to construct toolbar label from XML.");
    (this._rfbca05ed7fc2ff(Me.NAVIGATOR),
      this._rfbca05ed7fc2ff(Me.MEMENU),
      this._rfbca05ed7fc2ff(Me.INVENTORY));
    let l = this._window.findChildByName(Me.getIconName(Me.CATALOGUE));
    (l?.addChild(this.var_425),
      l != null &&
        (r._rfbca05ed7fc2ff(Me.getIconName(Me.CATALOGUE), l),
        (this.var_425.x = l.width - this.var_425.width - a.COUNTER_MARGIN),
        (this.var_425.y = a.COUNTER_MARGIN)));
    let b = this.var_425.findChildByName("new_textfield"),
      _ = e.localization?._r5f04530d38380d("toolbar.new_additions.notification") ?? null;
    (_ != null && b != null && (b.text = _.value ?? ""),
      (this.var_425.visible = !1),
      (this._rf6ec6bcaa7fd6d = this.isNewItemsNotificationEnabled()),
      (this._rd0df026c1fc6bd = new UnkEventDispatcherWrapperSubclass_05394e(1e3 / a.COLLAPSE_ANIMATION_FPS)),
      this._rd0df026c1fc6bd.addEventListener(DeBouncer.addEventListener, this._r0c7da324149cb3),
      this._r34d6ef942f7d11(),
      e.context._r7e43d9f4706607(this));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    if (this._window == null) throw new Error("Bottom bar window is not available.");
    return this._window;
  }
  get linkPattern() {
    return "toolbar/";
  }
  get _r7296b073959588() {
    return this._r592acf7b26a88b + this.var_5156;
  }
  get _rbf68e99232ce55() {
    return this._r55f945adb4c70f + this._r2e8d590f80ed3d + this._r31a62b61a3c1fd;
  }
  get memenu() {
    if (this._rc75c9cf303652f == null) throw new Error("Me menu controller is not available.");
    return this._rc75c9cf303652f;
  }
  get progmenu() {
    if (this._r8fccf5ce52537f == null) throw new Error("Prog menu controller is not available.");
    return this._r8fccf5ce52537f;
  }
  dispose() {
    this._disposed ||
      (this._rc75c9cf303652f?.dispose(),
      (this._rc75c9cf303652f = null),
      this._r8fccf5ce52537f?.dispose(),
      (this._r8fccf5ce52537f = null),
      this._r1c548ca69dba72?.dispose(),
      (this._r1c548ca69dba72 = null),
      this._r4019d2e39fcb84.dispose(),
      this._window?.dispose(),
      (this._window = null),
      this.var_425?.dispose(),
      (this.var_425 = null),
      this._rd0df026c1fc6bd?.removeEventListener(DeBouncer.addEventListener, this._r0c7da324149cb3),
      this._rd0df026c1fc6bd?.stop(),
      (this._rd0df026c1fc6bd = null),
      this._r70341e9ca8d18b(),
      this._windowManager != null &&
        (this._windowManager._r045e21fe03f5a1(Me.getIconName(Me.NAVIGATOR)),
        this._windowManager._r045e21fe03f5a1(Me.getIconName(Me.MEMENU)),
        this._windowManager._r045e21fe03f5a1(Me.getIconName(Me.INVENTORY)),
        this._windowManager._r045e21fe03f5a1(Me.getIconName(Me.CATALOGUE))),
      this._toolbar?.context._r7485c47d8bd77c(this),
      (this._toolbar = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  _rd70de0df1ee5a7(e) {
    switch (e.type) {
      case CatalogEvent.CATALOG_INITIALIZED: {
        let r = this._window?.findChildByName(Me.getIconName(Me.CATALOGUE));
        (r != null && ((r.blend = 1), r.enable()),
          (this._toolbar?.getProperty("open.catalog.page") ?? "").length > 0 &&
            this._toolbar?.catalog != null &&
            (this._toolbar.catalog.openCatalogPage("club"),
            this._toolbar.setProperty("open.catalog.page", "")));
        break;
      }
      case CatalogEvent.CATALOG_NOT_READY:
        this._ra645fd8f130bab();
        break;
      case CatalogEvent.CATALOG_NEW_ITEMS_SHOW:
        this.var_425 != null && this._rf6ec6bcaa7fd6d && (this.var_425.visible = !0);
        break;
      case CatalogEvent.CATALOG_NEW_ITEMS_HIDE:
        this.var_425 != null && (this.var_425.visible = !1);
        break;
    }
  }
  _r98a16f11f7c13a(e) {
    if (e.type === WiredMenuEvent.WIRED_MENU_BUTTON_PREFERENCE_CHANGED) {
      let r = this._window?.findChildByName(Me.getIconName(Me.WIRED_MENU));
      r != null && (r.visible = this._toolbar?._r41f5cc7d3516ce?._r837fe53c02d4f8() ?? !1);
    }
    this._r34d6ef942f7d11();
  }
  _rd6ab3bd2704f84() {
    return this._r5d9080afa32860;
  }
  setToolbarState(e) {
    if (this._window == null) return;
    if (e === HabboToolbarEnum.TOOLBAR_STATE_HIDDEN) {
      this._window.visible = !1;
      return;
    }
    ((this._window.visible = !0), e !== HabboToolbarEnum.TOOLBAR_STATE_COLLAPSED && (this._r5d9080afa32860 = e));
    let r = "",
      t = [];
    switch ((this._window.groupChildrenWithTag("TOGGLE", t, -1), e)) {
      case HabboToolbarEnum.TOOLBAR_STATE_GAME_CENTER_VIEW:
        ((r = "VISIBLE_GAME_CENTER"), (this._window.position = a.DEFAULT_LOCATION));
        break;
      case HabboToolbarEnum.TOOLBAR_STATE_HOTEL_VIEW:
        ((r = "VISIBLE_HOTEL"), (this._window.position = a._raaf38878ecdf06));
        break;
      case HabboToolbarEnum.TOOLBAR_STATE_NOOB_NOT_HOME:
        ((r = "VISIBLE_NOOB"), (this._window.position = a.DEFAULT_LOCATION));
        break;
      case HabboToolbarEnum.TOOLBAR_STATE_NOOB_HOME:
      case HabboToolbarEnum.TOOLBAR_STATE_ROOM_VIEW:
        ((r = "VISIBLE_ROOM"), (this._window.position = a.DEFAULT_LOCATION));
        break;
      case HabboToolbarEnum.TOOLBAR_STATE_COLLAPSED:
        ((r = "VISIBLE_COLLAPSED"), (this._window.position = a.DEFAULT_LOCATION));
        break;
    }
    let i =
      e === HabboToolbarEnum.TOOLBAR_STATE_ROOM_VIEW ||
      e === HabboToolbarEnum.TOOLBAR_STATE_NOOB_HOME ||
      e === HabboToolbarEnum.TOOLBAR_STATE_NOOB_NOT_HOME ||
      (this.var_496 &&
        (this._r5d9080afa32860 === HabboToolbarEnum.TOOLBAR_STATE_ROOM_VIEW ||
          this._r5d9080afa32860 === HabboToolbarEnum.TOOLBAR_STATE_NOOB_HOME ||
          this._r5d9080afa32860 === HabboToolbarEnum.TOOLBAR_STATE_NOOB_NOT_HOME));
    for (let s of t)
      if (((s.visible = s.tags.includes(r)), s.name === "STORIES" && !this.var_496))
        s.visible &&= this._toolbar?.getBoolean("toolbar.stories.enabled") ?? !1;
      else if (s.name === "BUILDER" && !this.var_496)
        s.visible &&= this._toolbar?.getBoolean("builders.club.enabled") ?? !1;
      else if (s.name === "GAMES")
        s.visible &&= this._toolbar?.getBoolean("games_icon_enabled") ?? !1;
      else if (s.name === "CAMERA") {
        let o = this._toolbar?.getProperty("camera.launch.ui.position") ?? "",
          d = this._toolbar?.sessionDataManager?.isPerkAllowed(class_2156.CAMERA) ?? !1;
        s.visible = i && o === "bottom-icons" && d;
      } else
        s.name === "WIRED_MENU" &&
          (s.visible = i && (this._toolbar?._r41f5cc7d3516ce?._r837fe53c02d4f8() ?? !1));
    this._r34d6ef942f7d11();
  }
  _r5f2964065e6a9a(e, r) {
    let t = this._window?.findChildByName(e);
    (t != null && (t.visible = r), this._r34d6ef942f7d11());
  }
  _r79f96745a9e88a() {
    let e = [];
    this._window?.groupChildrenWithTag("TOGGLE", e, -1);
    let r = 1;
    for (let t of e) t.visible && (r += 1);
    return r;
  }
  _re0d48308335439(e, r) {
    if (r == null) return;
    let t = "";
    e === Me.MEMENU && ((t = a.ME_MENU_ICON_NAME), this._rd3c6b6e106ea0e(r));
    let i = this._window?.findChildByName(t);
    i != null && this._r504b2f68ed67ec(i);
  }
  _r6822d89b476fe5(e) {
    let r = this.getIconName(e),
      t = r.length > 0 ? (this._window?.findChildByName(r) ?? null) : null;
    if (t != null && t.visible) {
      let i = new D();
      return (t.getGlobalRectangle(i), i);
    }
    if (((t = this._rc75c9cf303652f?._raa4dc20ed68e9a(e) ?? null), t != null)) {
      let i = new D();
      return (t.getGlobalRectangle(i), i);
    }
    return this._r8fccf5ce52537f?._r4c671deebbca17(e) ?? null;
  }
  _r4c2c2a11e22517(e) {
    let r = this.getIconName(e);
    return (
      this._window?.findChildByName(r) ??
      this._rc75c9cf303652f?._raa4dc20ed68e9a(e) ??
      this._r8fccf5ce52537f?._raa4dc20ed68e9a(e) ??
      null
    );
  }
  _r901b64e71c4d8a(e) {
    let r = Me.getIconName(e),
      t = this._r4019d2e39fcb84.getValue(e) ?? null;
    if (t != null) return t;
    t = this._windowManager?.createUnseenItemCounter() ?? null;
    let i = this._window?.findChildByName(r);
    return (
      t != null &&
        i != null &&
        (e === Me.MEMENU && t.setParamFlag(N.const_421, !1),
        i.addChild(t),
        (t.x = i.width - t.width - a.COUNTER_MARGIN),
        (t.y = a.COUNTER_MARGIN),
        this._r4019d2e39fcb84.add(e, t)),
      t
    );
  }
  setUnseenItemCount(e, r) {
    let t = this._r901b64e71c4d8a(e);
    if (t == null) return;
    let i = t.findChildByName("count");
    r < 0
      ? ((t.visible = !0), i != null && (i.caption = " "))
      : r > 0
        ? ((t.visible = !0), i != null && (i.caption = `${r}`))
        : (t.visible = !1);
  }
  isNewItemsNotificationEnabled() {
    return this._toolbar?.getBoolean("toolbar.new_additions.notification.enabled") ?? !1;
  }
  animateToIcon(e, r, t, i) {
    let o = r?.width ?? 20,
      d = r?.height ?? 20,
      c = this._windowManager?.createWindow(
        "ToolBarTransition",
        "",
        class_2090.WINDOW_TYPE_BITMAP_WRAPPER,
        0,
        0,
        new D(t, i, o, d),
      );
    if (c == null) return (r?.dispose(), null);
    (r != null && ((c.bitmap = r), (c.disposesBitmap = !0), (c.filters = [])),
      this._windowManager?.getDesktop(2)?.addChild(c));
    let f = this.getIconName(e),
      l = f.length > 0 ? (this._window?.findChildByName(f) ?? null) : null;
    if (l == null) return (c.dispose(), null);
    let b = new D();
    c.getGlobalRectangle(b);
    let _ = new D();
    l.getGlobalRectangle(_);
    let h = b.x - _.x,
      p = b.y - _.y,
      m = Math.sqrt(h * h + p * p),
      v = 500 - Math.abs((1 / m) * 100 * 500 * 0.5),
      w = 20,
      I = `ToolBarBouncing[ ${f} ]`;
    return (
      us._r3cc4a1049d7ad8(I) == null &&
        (us.DropBounce(new UnkMotionSubclass_ebb480(new UnkMotionSubclass_a15dee(v + 8), new UnkClass_506da2(l, 400, 12))).tag = I),
      us.DropBounce(new UnkMotionSubclass_ebb480(new UnkClass_7dc350(new UnkClass_6612e5(c, v, _.x - b.x + w, _.y - b.y, 100, 1), 1), new UnkMotionSubclass_b89a72(c)))
    );
  }
  set onDuty(e) {
    let r = this._window?.findChildByName("guide_icon");
    r != null && (r.visible = e);
  }
  set _r1a008dddbd6ea5(e) {
    this._r55f945adb4c70f = e;
  }
  set unseenRewardTrackRewardsCount(e) {
    this._r31a62b61a3c1fd = e;
  }
  set _rf78fb4040404c1(e) {
    this._r2e8d590f80ed3d = e;
  }
  set _r395feec4ff669c(e) {
    this._r592acf7b26a88b = e;
  }
  set unseenForumsCount(e) {
    this.var_5156 = e;
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "memenu":
          this.memenu.toggleVisibility();
          break;
        case "highlight":
          if (r.length <= 2) return;
          switch (r[2]) {
            case "catalog":
              this._windowManager?.showHint(Me.getIconName(Me.CATALOGUE));
              break;
            case "navigator":
              this._windowManager?.showHint(Me.getIconName(Me.NAVIGATOR));
              break;
            case "memenu":
              this._windowManager?.showHint(Me.getIconName(Me.MEMENU));
              break;
          }
          break;
      }
  }
  _r1b1625e08367d8() {
    return this._r38626bbf37df0d;
  }
  _rfbca05ed7fc2ff(e) {
    let r = this._window?.findChildByName(Me.getIconName(e));
    r != null && this._windowManager?._rfbca05ed7fc2ff(Me.getIconName(e), r);
  }
  _ra645fd8f130bab() {
    let e = this._window?.findChildByName(Me.getIconName(Me.CATALOGUE));
    e != null && ((e.blend = 0.5), e.disable());
  }
  _rb36df07202c075 = n((e) => {
    this._r34d6ef942f7d11();
  }, "_rb36df07202c075");
  _r34d6ef942f7d11() {
    this._window == null ||
      this._windowManager == null ||
      (this.scrollToIndex != null && (this.scrollToIndex.visible = !this.var_496),
      this._left_arrow != null && (this._left_arrow.visible = this.var_496),
      (this._window.y = this._window.desktop.height - this._window.height),
      (this._window.width = a.ICON_REGION_WIDTH * this._r79f96745a9e88a() + a.WINDOW_RIGHT_PADDING + 150),
      this.var_496 || (this._rc75c9cf303652f?.reposition(), this._r8fccf5ce52537f?.reposition()),
      (this._r38626bbf37df0d = this._r443731fa940799()),
      this._window.invalidate());
  }
  _r443731fa940799() {
    return this._rcf4a65213f0aed == null || this._rcf4a65213f0aed.parent == null
      ? 0
      : this.var_496
        ? a.COLLAPSED_MARGIN
        : this._rcf4a65213f0aed.x + this._rcf4a65213f0aed.parent.x;
  }
  _rde94049119238e() {
    let e = [],
      r = {};
    this._window?.groupChildrenWithTag("TOGGLE", e, -1);
    for (let t of e) r[t.name] = { visible: t.visible, x: t.x };
    return (
      this._rcf4a65213f0aed != null &&
        (r[this._rcf4a65213f0aed.name] = {
          visible: this._rcf4a65213f0aed.visible,
          x: this._rcf4a65213f0aed.x,
        }),
      r
    );
  }
  applyAnimationFrame(e) {
    if (this._animationTargetLayout == null || this.var_3125 == null || this._window == null)
      return;
    let r = [];
    this._window.groupChildrenWithTag("TOGGLE", r, -1);
    for (let t of r) {
      let i = this._animationTargetLayout[t.name],
        s = this.var_3125[t.name],
        o = i != null && i.visible,
        d = s != null && s.visible;
      if (!o && !d) {
        ((t.visible = !1), (t.blend = 1));
        continue;
      }
      t.visible = !0;
      let c = i != null ? i.x : s != null ? s.x : t.x,
        f = s != null ? s.x : c;
      ((t.x = Math.trunc(Math.round(c + (f - c) * e))),
        o && d ? (t.blend = 1) : o ? (t.blend = 1 - e) : (t.blend = e));
    }
    if (this._rcf4a65213f0aed != null) {
      let t = this._animationTargetLayout[this._rcf4a65213f0aed.name],
        i = this.var_3125[this._rcf4a65213f0aed.name],
        s = t != null && t.visible,
        o = i != null && i.visible;
      if (!s && !o) this._rcf4a65213f0aed.visible = !1;
      else {
        this._rcf4a65213f0aed.visible = !0;
        let d = t != null ? t.x : i != null ? i.x : this._rcf4a65213f0aed.x,
          c = i != null ? i.x : d;
        this._rcf4a65213f0aed.x = Math.trunc(Math.round(d + (c - d) * e));
      }
    }
  }
  _r70341e9ca8d18b() {
    if ((this._rddb4d4220f0988?.setAutoRearrange(!0), this._window != null)) {
      let e = [];
      this._window.groupChildrenWithTag("TOGGLE", e, -1);
      for (let r of e) r.blend = 1;
    }
    ((this._animationTargetLayout = null), (this.var_3125 = null));
  }
  startCollapseAnimation(e, r, t, i, s = !1, o = !1, d = null, c = null, f = null) {
    if (this._rd0df026c1fc6bd == null) {
      (s && d != null && ((this.var_496 = o), this.setToolbarState(d)),
        this.var_478(r, i));
      return;
    }
    (this._rd0df026c1fc6bd.reset(),
      (this.var_2554 = 0),
      (this._animationStartWidth = e),
      (this._animationTargetWidth = r),
      (this._animationTargetAreaWidth = t),
      (this._animationSourceLayout = i),
      (this._animationTargetLayout = c),
      (this.var_3125 = f),
      (this.var_4841 = s),
      (this.var_2885 = o),
      (this._buttonContainer = d),
      this._rddb4d4220f0988 != null &&
        c != null &&
        f != null &&
        (this._rddb4d4220f0988.setAutoRearrange(!1), this.applyAnimationFrame(0)),
      this.var_478(e, t),
      this._rd0df026c1fc6bd.start());
  }
  var_478(e, r) {
    this._window != null &&
      ((this._window.width = Math.trunc(e)),
      (this._r38626bbf37df0d = Math.trunc(r)),
      this._window.invalidate(),
      this._toolbar?._r5e3ef8a2b11d2a?._r41eed92f07d67f?.());
  }
  _r0c7da324149cb3 = n((e) => {
    if (this._window == null || this._rd0df026c1fc6bd == null) return;
    this.var_2554 += Math.trunc(this._rd0df026c1fc6bd.delay);
    let r = Math.min(1, this.var_2554 / a.COLLAPSE_ANIMATION_DURATION_MS),
      t = 1 - Math.pow(1 - r, 3),
      i = Math.trunc(Math.round(this._animationStartWidth + (this._animationTargetWidth - this._animationStartWidth) * t)),
      s = Math.trunc(Math.round(this._animationTargetAreaWidth + (this._animationSourceLayout - this._animationTargetAreaWidth) * t));
    (this.applyAnimationFrame(t),
      this.var_478(i, s),
      r >= 1 &&
        (this._rd0df026c1fc6bd.stop(),
        this.var_4841 &&
          this._buttonContainer != null &&
          ((this.var_496 = this.var_2885), this.setToolbarState(this._buttonContainer)),
        this._r70341e9ca8d18b(),
        this.var_478(this._animationTargetWidth, this._animationSourceLayout),
        (this.var_4841 = !1),
        (this._buttonContainer = null)));
  }, "_r0c7da324149cb3");
  getIconName(e) {
    switch (e) {
      case Me.CATALOGUE:
        return "icons_toolbar_catalogue";
      case Me.INVENTORY:
        return "icons_toolbar_inventory";
      case Me.MEMENU:
        return "MEMENU";
      case Me.NAVIGATOR:
        return "icons_toolbar_navigator";
      case Me.PROGRESSION:
        return "icons_toolbar_progression";
      case Me.GAMES:
        return "icons_toolbar_games";
      case Me.STORIES:
        return "icons_toolbar_stories";
      case Me.RECEPTION:
        return "icons_toolbar_reception";
      case Me.BUILDER:
        return "icons_toolbar_builder";
      case Me.CAMERA:
        return "icons_toolbar_camera";
      case Me.WIRED_MENU:
        return "icons_toolbar_wired_menu";
      default:
        return "";
    }
  }
  _rd3c6b6e106ea0e(e) {
    (this._r1c548ca69dba72?.dispose(), (this._r1c548ca69dba72 = e.clone()), e.dispose());
  }
  _r504b2f68ed67ec(e) {
    if (e.assetUri !== void 0) {
      let r = e;
      r.assetUri = `${r.name}_normal`;
    } else if (e.bitmap !== void 0) {
      let r = e;
      r.name === a.ME_MENU_ICON_NAME && (r.bitmap = this._r1c548ca69dba72);
    }
  }
  _r78b472e029292e = n((e) => {
    let r = e.target.name;
    (this._toolbar?._r2b0be5baed9721(r), this._windowManager?._r7ff8f726debeae(r));
  }, "_r78b472e029292e");
  _r1c6c7e609e3530 = n((e) => {
    if (this._rd0df026c1fc6bd?.running) return;
    let r = this._window?.width ?? 0,
      t = this._r38626bbf37df0d,
      i = this._r5d9080afa32860.length > 0 ? this._r5d9080afa32860 : HabboToolbarEnum.TOOLBAR_STATE_ROOM_VIEW,
      s = this.var_496,
      o = s ? HabboToolbarEnum.TOOLBAR_STATE_COLLAPSED : i,
      d = !s,
      c = d ? HabboToolbarEnum.TOOLBAR_STATE_COLLAPSED : i,
      f = this._rde94049119238e();
    ((this.var_496 = d), this.setToolbarState(c));
    let l = this._window?.width ?? 0,
      b = this._r38626bbf37df0d,
      _ = this._rde94049119238e();
    ((this.var_496 = s),
      this.setToolbarState(o),
      this.startCollapseAnimation(r, l, t, b, !0, d, c, f, _));
  }, "_r1c6c7e609e3530");
}

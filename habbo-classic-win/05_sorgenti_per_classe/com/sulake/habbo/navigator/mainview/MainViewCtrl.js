// Extracted from HabboAirLauncher.deobf.js, line 255765.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/MainViewCtrl.as

class a {
  constructor(e) {
    this._navigator = e;
    ((this.var_1633 = new PopularTagsListCtrl(this._navigator)),
      (this._guestRooms = new GuestRoomListCtrl(this._navigator, 0, !1)),
      (this._officialRooms = new OfficialRoomListCtrl(this._navigator)),
      (this.var_1549 = new RoomAdListCtrl(this._navigator, 0, !1)),
      (this.var_3955 = new lme(this._navigator)),
      (this.var_994 = new UnkEventDispatcherWrapperSubclass_05394e(300, 1)),
      this.var_994.addEventListener(DeBouncer.addEventListener, this.onResizeTimer));
  }
  static {
    n(this, "MainViewCtrl");
  }
  static startLoading = 1;
  static _r639e5f80e6edff = 2;
  static _r664e2ac3cf794b = 4;
  static const_403 = 5;
  static _r85160a8ee9a86f = 1;
  static _r01fb1462e2e910 = 2;
  static BLEND_STAGE_REFRESHING = 3;
  static _ra43d550b5370bd = 4;
  static SCROLLBAR_WIDTH = 22;
  static PANIC_BUTTON_HEIGHT = 60;
  static _rcc3622351cf03c = new E(100, 10);
  var_33 = null;
  _content = null;
  _r3b29ef398f3a17 = null;
  _rb775f5546e1ca3 = null;
  var_350 = null;
  _tabContext = null;
  _r96697bc2965a59 = !1;
  var_1147 = 0;
  _rcc7c0405195fb7 = !0;
  var_3276 = 0;
  _loadingText = null;
  var_584 = 0;
  var_316 = null;
  var_994 = null;
  _disposed = !1;
  _r1bf748be4eabaf = null;
  var_4184 = !1;
  var_1633;
  _guestRooms;
  _officialRooms;
  var_1549;
  var_3955;
  get disposed() {
    return this._disposed;
  }
  get mainWindow() {
    return this.var_33;
  }
  get searchInput() {
    return this.var_316;
  }
  get _r9dcf961fca1107() {
    return this.var_4184;
  }
  onNavigatorToolBarIconClick() {
    if (this.var_33 == null) {
      this._r08dff59d92645f();
      return;
    }
    ((this._r1bf748be4eabaf == null || this._r1bf748be4eabaf.disposed) &&
      (this._r1bf748be4eabaf = new Dl(
        this.var_33,
        this.var_33.desktop,
        this._r08dff59d92645f,
        this.close,
      )),
      this._r1bf748be4eabaf.toggle());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this._navigator = null),
      this.var_33?.dispose(),
      (this.var_33 = null),
      this._r1bf748be4eabaf?.dispose(),
      (this._r1bf748be4eabaf = null),
      this._content?.dispose(),
      (this._content = null),
      this.var_994 != null &&
        (this.var_994.removeEventListener(DeBouncer.addEventListener, this.onResizeTimer),
        this.var_994.reset(),
        (this.var_994 = null)),
      this.var_1633.dispose(),
      this._guestRooms.dispose(),
      this._officialRooms.dispose(),
      this.var_1549.dispose(),
      this.var_316?.dispose(),
      (this.var_316 = null));
  }
  open() {
    (this.var_33 == null && this.prepare(),
      this.refresh(),
      this.var_33 != null &&
        ((this.var_33.visible = !0),
        (this.var_33.y = Math.max(this.var_33.y, a.PANIC_BUTTON_HEIGHT)),
        this.var_33.activate()));
  }
  isOpen() {
    return this.var_33 != null && this.var_33.visible;
  }
  close() {
    this.var_33 != null &&
      (this.var_316?.dispose(),
      (this.var_316 = null),
      this._r1bf748be4eabaf?.dispose(),
      (this._r1bf748be4eabaf = null),
      this.var_33.dispose(),
      (this.var_33 = null),
      (this._tabContext = null),
      (this._content = null),
      (this._r3b29ef398f3a17 = null),
      (this.var_350 = null),
      (this._rb775f5546e1ca3 = null),
      (this._loadingText = null),
      (this.var_1633.content = null),
      (this._guestRooms.content = null),
      (this._officialRooms.content = null),
      (this.var_3955.content = null),
      (this.var_1549.content = null),
      (this.var_584 = 0));
  }
  refresh() {
    if (
      this.var_33 == null ||
      this._r3b29ef398f3a17 == null ||
      this._rb775f5546e1ca3 == null ||
      this.var_350 == null ||
      this._content == null
    )
      return;
    (this._r3c32cda0a3e420(),
      this.refreshCustomContent(),
      this.refreshListContent(!0),
      this.refreshFooter(),
      (this._r3b29ef398f3a17.height = Fr.getLowestPoint(this._r3b29ef398f3a17)),
      (this._rb775f5546e1ca3.height = Fr.getLowestPoint(this._rb775f5546e1ca3)));
    let e = this.var_350.y;
    (Fr.moveChildrenToColumn(this._content, ["custom_content", "list_content"], this._r3b29ef398f3a17.y, 8),
      (this.var_350.height =
        this.var_350.height +
        e -
        this.var_350.y -
        this._rb775f5546e1ca3.height +
        this.var_584),
      Fr.moveChildrenToColumn(this._content, ["list_content", "custom_footer"], this.var_350.y, 0),
      (this.var_584 = this._rb775f5546e1ca3.height),
      this.onResizeTimer());
  }
  reloadRoomList(e) {
    if (
      (ErrorReportStorage.addDebugData("MainViewCtrl", "Reloading RoomList"),
      this.isOpen() &&
        this._navigator?.data._rf09e8697962ff2 != null &&
        this._navigator.data._rf09e8697962ff2.var_941 === e)
    ) {
      let r = this._navigator.tabs.getSelected();
      return (r != null && this.startSearch(r.id, e, ""), !0);
    }
    return !1;
  }
  startSearch(e, r, t = "-1", i = a.startLoading) {
    let s = this._navigator;
    if (s == null) return;
    let o = s.tabs.getSelected();
    s.tabs._r18cd8a1aeaed88(e);
    let d = s.tabs.getSelected();
    if (!(o == null || d == null)) {
      if (
        (ErrorReportStorage.addDebugData("StartSearch", `Start search ${o.id} => ${d.id}`),
        this.var_4184 && t.startsWith("#") && ((r = We.SEARCHTYPE_TAG_SEARCH), (t = t.substring(1))),
        (this._rcc7c0405195fb7 = o !== d),
        o !== d && d.tabSelected.tabPageDecorator(),
        s.data._rb9609c27f0f8a2(),
        i === a.startLoading)
      ) {
        let c = this.getSearchMsg(r, t);
        c != null && s.send(c);
      } else
        i === a._r639e5f80e6edff
          ? s.send(new UnkMessageComposer_0args_1e2f08())
          : i === a.const_403 || s.send(new class_3152(s.data._rf806c62c486d4f));
      (this.isOpen()
        ? (this.var_1147 = a._r85160a8ee9a86f)
        : (this.open(),
          (this.var_1147 = a._r01fb1462e2e910),
          this.var_350 != null && (this.var_350.blend = 0),
          this._r3b29ef398f3a17?.visible &&
            ((this._r3b29ef398f3a17.blend = 0),
            this._rb775f5546e1ca3 != null && (this._rb775f5546e1ca3.blend = 0))),
        (this.var_3276 = 0),
        s.registerUpdateReceiver(this, 2),
        this.sendTrackingEvent(r),
        (s.data._r296e1461c77065 = null),
        this.var_4184 &&
          this.searchInput != null &&
          t !== "-1" &&
          r !== We._r84d8927b802156 &&
          this.searchInput.setText(t, r));
    }
  }
  update(e) {
    if (this.var_350 == null || this._navigator == null) return;
    let r = e / 150;
    if (this.var_1147 === a._r85160a8ee9a86f) {
      let t = Math.min(1, Math.max(0, this.var_350.blend - r));
      ((this.var_350.blend = t),
        this._r3b29ef398f3a17 != null && (this._r3b29ef398f3a17.blend = this._rcc7c0405195fb7 ? t : 1),
        this._rb775f5546e1ca3 != null && (this._rb775f5546e1ca3.blend = this._rcc7c0405195fb7 ? t : 1),
        t === 0 && (this.var_1147 = a._r01fb1462e2e910));
    } else if (this.var_1147 === a._r01fb1462e2e910)
      (this.var_3276 % 10 === 1 &&
        this._loadingText != null &&
        (this._loadingText.visible = !this._loadingText.visible),
        this.var_3276++,
        this._navigator.data._rb1888e9019ee7c() || (this.var_1147 = a.BLEND_STAGE_REFRESHING));
    else if (this.var_1147 === a.BLEND_STAGE_REFRESHING)
      (this.refresh(), (this.var_1147 = a._ra43d550b5370bd));
    else {
      this._loadingText != null && (this._loadingText.visible = !1);
      let t = Math.min(1, Math.max(0, this.var_350.blend + r));
      ((this.var_350.blend = t),
        this._r3b29ef398f3a17 != null && (this._r3b29ef398f3a17.blend = this._rcc7c0405195fb7 ? t : 1),
        this._rb775f5546e1ca3 != null && (this._rb775f5546e1ca3.blend = this._rcc7c0405195fb7 ? t : 1),
        this.var_350.blend >= 1 && this._navigator.removeUpdateReceiver(this));
    }
  }
  _r8885c4aa700228(e) {
    (this._r08dff59d92645f(),
      this.var_33 != null &&
        (e != null
          ? (this.var_33.position = e)
          : this.var_33.position.x === 0 &&
            (this.var_33.position = this._r669193ec5f7632())));
  }
  _r08dff59d92645f = n(() => {
    this._navigator?.tabs.getSelected()?.tabSelected._rafc4a04f15e23f();
  }, "_r08dff59d92645f");
  prepare() {
    let e = this._navigator;
    if (e == null) return;
    let r = e.getBoolean("eventinfo.enabled"),
      t = !1;
    if (((this.var_33 = e.getXmlWindow("grs_main_window_new")), this.var_33 == null))
      throw new Error("Failed to build grs_main_window_new");
    if (
      ((this._tabContext = this.var_33.findChildByName("tab_context")),
      (this._content = this.var_33.findChildByName("tab_content")),
      (this._r3b29ef398f3a17 = this.var_33.findChildByName("custom_content")),
      (this.var_350 = this.var_33.findChildByName("list_content")),
      (this._rb775f5546e1ca3 = this.var_33.findChildByName("custom_footer")),
      (this._loadingText = this.var_33.findChildByName("loading_text")),
      this.var_33.findChildByTag("close")?.addEventListener(u.CLICK, this.onWindowClose),
      this.var_33.addEventListener(y.const_755, this._rffb48553852b0f),
      this._tabContext != null && (!r || !this.var_4184))
    ) {
      let s = [];
      for (; this._tabContext.numTabItems > 0;) {
        let o = this._tabContext.getTabItemAt(0);
        if (o == null) break;
        (s.push(o), this._tabContext._ra8b044f5467c44(o));
      }
      for (let o of s)
        (o.id === We.EventsTabPageDecorator && !r) ||
          (o.id === We.CategoriesTabPageDecorator && !t) ||
          this._tabContext._rc6654b9a9673e2(o);
    }
    if (this._tabContext != null)
      for (let s of e.tabs.tabs) {
        let o = this._tabContext._r9e56420b3addbb(s.id);
        o != null && (o.addEventListener(y.const_238, this._r6e339a8d3d8262), (s.button = o));
      }
    (this.var_33.scaler?.setParamFlag(class_2094._r7b21e1be551060, !1),
      this.var_33.scaler?.setParamFlag(class_2094.scaler, !0),
      (this.var_33.position = this._r669193ec5f7632()),
      this.createSearchInput());
  }
  createSearchInput() {
    if (this.var_33 == null) return;
    let e = "search_header";
    if (this.var_316 == null) {
      let t = this.var_33.findChildByName(e);
      t != null && (this.var_316 = new TextSearchInputs(this._navigator, t));
    }
    let r = this.var_33.findChildByName(e);
    r != null && (r.visible = !0);
  }
  _r3c32cda0a3e420() {
    let e = this._navigator?.tabs.getSelected(),
      r = this._tabContext?.selector?.getSelected() ?? null;
    e?.button != null &&
      e.button !== r &&
      ((this._r96697bc2965a59 = !0), this._tabContext?.selector?.setSelected(e.button));
  }
  refreshCustomContent() {
    if (this._r3b29ef398f3a17 == null || this._navigator == null) return;
    (Fr.hideChildren(this._r3b29ef398f3a17),
      this._navigator.tabs.getSelected()?.tabSelected.refreshCustomContent(this._r3b29ef398f3a17),
      Fr.hasVisibleChildren(this._r3b29ef398f3a17)
        ? (this._r3b29ef398f3a17.visible = !0)
        : ((this._r3b29ef398f3a17.visible = !1), (this._r3b29ef398f3a17.blend = 1)));
  }
  refreshFooter() {
    if (this._rb775f5546e1ca3 == null || this._navigator == null) return;
    (Fr.hideChildren(this._rb775f5546e1ca3),
      this._navigator.tabs.getSelected()?.tabSelected.refreshFooter(this._rb775f5546e1ca3),
      (this._rb775f5546e1ca3.visible = Fr.hasVisibleChildren(this._rb775f5546e1ca3)));
  }
  refreshListContent(e) {
    if (this.var_350 == null || this._navigator == null) return;
    Fr.hideChildren(this.var_350);
    let r = this._navigator.tabs.getSelected();
    if (r == null) return;
    let t = this._navigator.data._r048adf31515a93 && r._r067ae42ddd4d97 === We.const_486;
    (this.refreshRoomAds(e, t),
      this.refreshGuestRooms(e, !t),
      this.refreshPopularTags(e, this._navigator.data._rb3b92a0295b076),
      this.refreshOfficialRooms(e, this._navigator.data._r2f1b8d0154c68e));
  }
  refreshGuestRooms(e, r) {
    this.refreshList(e, r, this._guestRooms, "guest_rooms");
  }
  refreshPopularTags(e, r) {
    this.refreshList(e, r, this.var_1633, "popular_tags");
  }
  refreshOfficialRooms(e, r) {
    this.refreshList(e, r, this._officialRooms, "official_rooms");
  }
  refreshRoomAds(e, r) {
    this.refreshList(e, r, this.var_1549, "room_ads");
  }
  refreshCategoryList(e, r) {
    this.refreshList(e, r, this.var_3955, "categories_container");
  }
  refreshList(e, r, t, i) {
    !r ||
      this.var_350 == null ||
      (t.content == null && (t.content = this.var_350.findChildByName(i)),
      e && t.refresh(),
      t.content != null && (t.content.visible = !0));
  }
  onWindowClose = n((e) => {
    this.close();
  }, "onWindowClose");
  _r6e339a8d3d8262 = n((e) => {
    let r = e.target;
    if (r == null || this._navigator == null) return;
    if (this._r96697bc2965a59) {
      this._r96697bc2965a59 = !1;
      return;
    }
    let t = this._navigator.tabs._r554ac914236787(r.id);
    if (t != null)
      switch ((t.sendSearchRequest(), t.id)) {
        case We.EventsTabPageDecorator:
          (this._navigator.events.dispatchEvent?.(new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_EVENTS)),
            this._navigator.send(new UnkMessageComposer_0args_d6e4e5()));
          break;
        case We.MyRoomsTabPageDecorator:
          this._navigator.events.dispatchEvent?.(new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_ME));
          break;
        case We.OfficialTabPageDecorator:
          this._navigator.events.dispatchEvent?.(new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_OFFICIAL));
          break;
        case We._r3788a24f86509c:
          this._navigator.events.dispatchEvent?.(new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_ROOMS));
          break;
        case We._r54c62c548aaab8:
          this._navigator.events.dispatchEvent?.(new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCH));
          break;
        case We.CategoriesTabPageDecorator:
          this._navigator.events.dispatchEvent?.(new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_CATEGORIES));
          break;
      }
  }, "_r6e339a8d3d8262");
  sendTrackingEvent(e) {
    if (this._navigator != null)
      switch (e) {
        case We._r94854e4c2ed9da:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FAVOURITES),
          );
          break;
        case We._rd6fb6dfca67725:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FRIENDS_ROOMS),
          );
          break;
        case We.const_200:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_HISTORY),
          );
          break;
        case We._r8a4642632c386a:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_ROOMS),
          );
          break;
        case We.SEARCHTYPE_OFFICIALROOMS:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_OFFICIALROOMS),
          );
          break;
        case We._r84d8927b802156:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_POPULAR_ROOMS),
          );
          break;
        case We._r9f66f4bb0f69b3:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_ROOMS_WHERE_MY_FRIENDS_ARE),
          );
          break;
        case We._r67c29729e7800e:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_ROOMS_WITH_HIGHEST_SCORE),
          );
          break;
        case We.SEARCHTYPE_TAG_SEARCH:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_TAG_SEARCH),
          );
          break;
        case We.SEARCHTYPE_TEXT_SEARCH:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_TEXT_SEARCH),
          );
          break;
        case We.const_1369:
          this._navigator.events.dispatchEvent?.(
            new M(HabboNavigatorTrackingEvent.HABBO_NAVIGATOR_TRACKING_EVENT_SEARCHTYPE_MY_FREQUENT_HISTORY),
          );
          break;
      }
  }
  getSearchMsg(e, r) {
    let t = this._navigator?.data._rf806c62c486d4f ?? 0;
    switch (e) {
      case We._r94854e4c2ed9da:
        return new class_3418();
      case We._rd6fb6dfca67725:
        return new class_2996();
      case We.const_200:
        return new class_3393();
      case We._r8a4642632c386a:
        return new class_3378();
      case We._r84d8927b802156:
        return new class_3610(r, t);
      case We._r9f66f4bb0f69b3:
        return new class_3189();
      case We._r67c29729e7800e:
        return new class_3256(t);
      case We.SEARCHTYPE_TAG_SEARCH:
        return new class_2393(`tag:${r}`);
      case We.SEARCHTYPE_TEXT_SEARCH:
        return new class_2393(r);
      case We.SEARCHTYPE_GROUP_NAME_SEARCH:
        return new class_2393(`group:${r}`);
      case We.SEARCHTYPE_ROOM_NAME_SEARCH:
        return new class_2393(`roomname:${r}`);
      case We.SEARCHTYPE_GUILD_BASES:
        return new class_3850(t);
      case We.SEARCHTYPE_COMPETITION_ROOMS: {
        let i = this._navigator?.data._r296e1461c77065 ?? null;
        return i == null ? null : new class_3022(i._r60d0785b4a5490, i._r4462e1d7892a93);
      }
      case We.const_486:
      case We.const_1233:
        return new class_3253(t, e);
      case We.const_1090:
        return new class_3185();
      case We.SEARCHTYPE_MY_GUILD_BASES:
        return new class_2432();
      case We.SEARCHTYPE_BY_OWNER:
        return new class_2393(`owner:${r}`);
      case We.SEARCHTYPE_RECOMMENDED_ROOMS:
        return new class_3219();
      case We.const_1369:
        return new class_2704();
      default:
        return null;
    }
  }
  _rffb48553852b0f = n((e) => {
    e.target !== this.var_33 ||
      this.var_994 == null ||
      this.var_994.running ||
      (this.var_994.reset(), this.var_994.start());
  }, "_rffb48553852b0f");
  onResizeTimer = n((e) => {
    (a.refreshScrollbar(this.var_1633, !1),
      a.refreshScrollbar(this._guestRooms, !1),
      a.refreshScrollbar(this.var_1549, !1),
      this._navigator?.isPerkAllowed?.("NAVIGATOR_PHASE_ONE_2014"));
  }, "onResizeTimer");
  _r669193ec5f7632() {
    return new E(a._rcc3622351cf03c.x, a._rcc3622351cf03c.y);
  }
  static refreshScrollbar(e, r) {
    if (e.content == null || !e.content.visible) return;
    let t = e.content.findChildByName("item_list"),
      i = e.content.findChildByName("scroller");
    if (t == null || i == null) return;
    let s = t.visibleRegion.height > t.height;
    i.visible
      ? s || ((i.visible = !1), (t.width += a.SCROLLBAR_WIDTH))
      : s && ((i.visible = !0), (t.width -= a.SCROLLBAR_WIDTH));
  }
  static stretchNewEntryIfNeeded(e, r) {
    let t = e.content?.findChildByName("scroller");
    t == null || t.visible || (r.width += a.SCROLLBAR_WIDTH);
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 244907.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/HabboInventory.as
// Obfuscated name: _i22a77772e782d2

class extends ue {
  static {
    n(this, "HabboInventory");
  }
  _r85e5d4e839e693 = null;
  _r81faacfdfcbb97 = null;
  _rbeb55aa445d4ce = [];
  _reebadc16f8e73a = new Purse_();
  var_217 = !1;
  _r328905ce2c0e7d = !1;
  _friendList = null;
  var_104 = "";
  var_3865 = [];
  _boundFurnitureNames = [];
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDRoomEngine(), (e) => {
        this._roomEngine = e;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDAvatarRenderManager(), (e) => {
        this._avatarRenderer = e;
      }),
      new ComponentDependency(
        new IIDHabboNotifications(),
        (e) => {
          this._notifications = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboFriendList(),
        (e) => {
          this._friendList = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboRoomSessionManager(), null, !1, [
        { type: RoomSessionEvent.const_1398, callback: n((e) => this._r136af7172e26af(e), "callback") },
        { type: RoomSessionEvent.const_215, callback: n((e) => this._r136af7172e26af(e), "callback") },
        { type: RoomSessionPropertyUpdateEvent.ALLOW_PETS, callback: n((e) => this._r136af7172e26af(e), "callback") },
      ]),
      new ComponentDependency(new IIDHabboToolbar(), null, !1, [
        { type: HabboToolbarEvent.TOOLBAR_CLICK, callback: n((e) => this._r8997b61b58abef(e), "callback") },
      ]),
      new ComponentDependency(
        new IIDHabboSoundManager(),
        (e) => {
          this._soundManager = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    ((this._incomingMessages = new UnkClass_fffc22__________(this)),
      this.context._r7e43d9f4706607(this),
      (this._r47f3cb1aa1ae77 = new class_1806(this._communication, this.events, this)),
      this._windowManager != null && (this._view = new rpe(this, this._windowManager, this.assets)),
      this._communication?.connection.send(new UnkMessageComposer_0args_591c5f()),
      this._communication?.connection.send(new UnkMessageComposer_0args_38fbd8()),
      this._communication?.connection.send(new UnkMessageComposer_0args_6a30e7()),
      this._communication?.connection.send(new class_1869("habbo_club")),
      this._communication?.connection.send(new class_2011()));
  }
  dispose() {
    if (!this.disposed) {
      this.context._r7485c47d8bd77c(this);
      for (let e of this._r85e5d4e839e693?.getValues() ?? []) e?.dispose?.();
      (this._r85e5d4e839e693?.dispose(),
        (this._r85e5d4e839e693 = null),
        this._view?.dispose(),
        (this._view = null),
        this._r47f3cb1aa1ae77?.dispose(),
        (this._r47f3cb1aa1ae77 = null),
        this._incomingMessages?.dispose(),
        (this._incomingMessages = null),
        (this._r81faacfdfcbb97 = null),
        (this._friendList = null),
        (this._catalog = null),
        (this._avatarRenderer = null),
        (this._notifications = null),
        (this._sessionDataManager = null),
        (this._windowManager = null),
        (this._roomEngine = null),
        (this._soundManager = null),
        (this._communication = null),
        (this._localization = null),
        super.dispose());
    }
  }
  get communication() {
    return this._communication;
  }
  get isVisible() {
    return this._view?.isVisible ?? !1;
  }
  get _r06de92d20c9843() {
    return this._view?.isActive ?? !1;
  }
  get isInitialized() {
    return this.var_217;
  }
  get _r349ca5f2f69601() {
    return this._r47f3cb1aa1ae77;
  }
  get view() {
    return this._view;
  }
  get _r4757926cfb0b72() {
    return this.getStringToStringMap(class_2106.BADGES);
  }
  get _r50e735ded4911c() {
    return this.getStringToStringMap(class_2106.const_65);
  }
  get _refc910356bea72() {
    return this.getStringToStringMap(class_2106.PETS);
  }
  get _re13e2a8fc67c8d() {
    return this.getStringToStringMap(class_2106.BOTS);
  }
  get _r6798423e068a1a() {
    return this.getStringToStringMap(class_2106.COLLECTIBLES);
  }
  get _r9275a8e42af3cc() {
    return this.getStringToStringMap(class_2106.FURNITURE);
  }
  get _r34b7e698fbdaf3() {
    return this.getStringToStringMap(class_2245.RECYCLER);
  }
  get _rfa660cefb72529() {
    return this.getStringToStringMap(class_2106.MARKETPLACE);
  }
  get _r5a2088db32911f() {
    return this.getStringToStringMap(class_2245.TRADING);
  }
  get _r94dcfedd8fb086() {
    return this.getStringToStringMap(class_2245.WIRED_TRADING);
  }
  get sessionData() {
    return this._sessionDataManager;
  }
  get _r2eac8239a09fe7() {
    return this._r81faacfdfcbb97;
  }
  get friendList() {
    return this._friendList;
  }
  get windowManager() {
    return this._windowManager;
  }
  get localization() {
    return this._localization;
  }
  get clubPeriods() {
    return this._reebadc16f8e73a.clubPeriods;
  }
  get clubDays() {
    return this._reebadc16f8e73a.clubDays;
  }
  get _rf3a9b3d6915b1c() {
    return this._reebadc16f8e73a._rf3a9b3d6915b1c;
  }
  get _r392f9b08842975() {
    return this._reebadc16f8e73a._r392f9b08842975;
  }
  get _rd5192fa7d1725e() {
    return this._reebadc16f8e73a._rd5192fa7d1725e;
  }
  get _r5336785a0c8883() {
    return this._reebadc16f8e73a._r5336785a0c8883;
  }
  get _rb6cef0460c1b1c() {
    return this._reebadc16f8e73a.minutesUntilExpiration;
  }
  get _rc16bdd26656e02() {
    return this._r81faacfdfcbb97 != null;
  }
  get _r08dbc43175f2ed() {
    return this._r6d077d4f38b3d9 != null;
  }
  get catalog() {
    return {
      openCatalog: n(() => {
        this._catalog?.openCatalogPage("");
      }, "openCatalog"),
      viewer: n(() => this._r34b7e698fbdaf3, "viewer"),
    };
  }
  get _rc4641e5bd6551b() {
    return this._catalog;
  }
  get _ra2d0b2740c7155() {
    return this.var_104;
  }
  get avatarRenderer() {
    return this._avatarRenderer;
  }
  get notifications() {
    return this._notifications;
  }
  get _re9e4d1b42c1d4d() {
    return !0;
  }
  get web3tradeEnabled() {
    return this.getBoolean("web3trade.enabled");
  }
  get botsMax() {
    return this.getInteger("inventory.bots.max", 150);
  }
  get linkPattern() {
    return "inventory/";
  }
  get _r6d077d4f38b3d9() {
    return this._r5a2088db32911f != null && this._r5a2088db32911f.running
      ? this._r5a2088db32911f
      : this._r94dcfedd8fb086 != null && this._r94dcfedd8fb086.running
        ? this._r94dcfedd8fb086
        : null;
  }
  get clubLevel() {
    return this.clubPeriods === 0 && this.clubDays === 0
      ? dr.NO_CLUB
      : this._reebadc16f8e73a._ra6c4481543acf2
        ? dr.VIP
        : dr.CLUB;
  }
  getProperty(e, r) {
    if (typeof r == "string") {
      let t = super.getProperty(e);
      return t.length > 0 ? t : r;
    }
    return super.getProperty(e, r ?? null);
  }
  getStringToStringMap(e) {
    return (
      this.var_217 || this.init(),
      this._r85e5d4e839e693?.getValue(this._r6ef7a97418c23d(e)) ?? null
    );
  }
  _r4f55c92004138f(e) {
    return this._r85e5d4e839e693?.getValue(this._r6ef7a97418c23d(e))?.getWindowContainer?.() ?? null;
  }
  _r0ce156c9ce88ec(e) {
    return this._r4f55c92004138f(e);
  }
  _r7c77cb2657369f() {
    return this._r50e735ded4911c?.getEffects(dQ.FILTER_INCLUDE_ACTIVE) ?? [];
  }
  _r60766c255d6b8b() {
    return this._r50e735ded4911c?.getEffects() ?? [];
  }
  setEffectSelected(e) {
    (this._r50e735ded4911c?._r1ab8f9ca4b1617(e), this._r86166dd632bcfe());
  }
  _r4f260cb2c62d21(e) {
    (this._r50e735ded4911c?._r1fc2766d59a6e2(e, !0), this._r86166dd632bcfe());
  }
  _rddf4cd2390c8eb(e = !1) {
    (this._r50e735ded4911c?.stopUsingAllEffects(!0, !0, e), this._r86166dd632bcfe());
  }
  _rf0cd17ea32e4b2(e) {
    return this._r50e735ded4911c?._rd55676d87b2e35(e) ?? null;
  }
  _rdfb32624fb120f() {
    return this._r50e735ded4911c?.lastActivatedEffect ?? -1;
  }
  _rcf87bdca169c00() {
    this._view?._r795e0dc86b4e1a();
  }
  showView() {
    this._view?._r4b6c5c13cceef6();
  }
  get _r66d3ab60ff54df() {
    return this._view?.mainContainer != null;
  }
  _r66c0f454a47223() {
    this._view != null && (this._rf93ea073fdcb45(class_2106.FURNITURE), this._view._r795e0dc86b4e1a());
  }
  _rf93ea073fdcb45(e, r = null, t = !1) {
    ((this.var_104 = e),
      (this._view?.toggleCategoryView(e, !1, t) ?? !1)
        ? (this._r895f5ffa9bb541(e),
          r != null && this._r85e5d4e839e693?.getValue(this.var_104)?.selectItemById?.(r))
        : this.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_CLOSED)));
  }
  toggleInventorySubPage(e) {
    switch (e) {
      case class_2245.TRADING:
      case class_2245.WIRED_TRADING:
        this._view?.toggleCategoryView(class_2106.FURNITURE, !1);
        break;
    }
    this._view?._rcd15fba197905b(e, !1);
    for (let r of this._r85e5d4e839e693?.getValues() ?? []) r?.subCategorySwitch?.(e);
  }
  _r7ecf0c1a0261ad() {
    this._view?._r1efbb3c3ec033c();
  }
  closingInventoryView() {
    for (let e of this._r85e5d4e839e693?.getValues() ?? []) e?.closingInventoryView?.();
    this.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_CLOSED));
  }
  _rada8e3e41627a7() {
    this.var_217 || this.init();
  }
  _r895f5ffa9bb541(e) {
    for (let r of this._r85e5d4e839e693?.getValues() ?? []) r?.categorySwitch?.(e);
  }
  _rc6ea0606ca8ef7(e, r) {
    (this.var_217 || this.init(), this._r5a2088db32911f?._r375d3c506536b7(e));
  }
  _r6fc4caed9a7329(e) {
    this._r34b7e698fbdaf3 != null &&
      (e ? this._r34b7e698fbdaf3._r224ebb954465c4() : this._r34b7e698fbdaf3._r37a7f52dcb3124());
  }
  _r1eb551585cedeb() {
    return this._r34b7e698fbdaf3?._r2470a3d341b2ac() ?? 0;
  }
  _rad6dab0d78ac23(e) {
    return this._r34b7e698fbdaf3?._r5c29ba3d97bcff(e) ?? !1;
  }
  _rcee4eb8ebc6d4a() {
    return this._r94dcfedd8fb086?.running ? !0 : (this._r5a2088db32911f?._rc4b476693b3b17 ?? !1);
  }
  _rb2c2fb6f23bc56(e, r = !0) {
    if (r) {
      let t = this._r6ef7a97418c23d(e);
      if (!this._rbeb55aa445d4ce.includes(t)) return (this._rbeb55aa445d4ce.push(t), !0);
    } else {
      let t = this._r6ef7a97418c23d(e),
        i = this._rbeb55aa445d4ce.indexOf(t);
      (i >= 0 && this._rbeb55aa445d4ce.splice(i, 1),
        (this._view?.isVisible ?? !1) && this._rad620e8cabf898(t));
    }
    return !1;
  }
  _r7a3d3dd83c6b22(e) {
    return this._rbeb55aa445d4ce.includes(this._r6ef7a97418c23d(e));
  }
  _r9fc90ede19317b(e) {
    return this._r7a3d3dd83c6b22(e) ? !0 : (this._rad620e8cabf898(e), !1);
  }
  _rad620e8cabf898(e) {
    this._r85e5d4e839e693?.getValue(this._r6ef7a97418c23d(e))?.requestInitialization?.();
  }
  updateView(e) {
    this._r85e5d4e839e693?.getValue(this._r6ef7a97418c23d(e))?.updateView?.();
  }
  _r86166dd632bcfe() {
    this.events.dispatchEvent?.(new HabboInventoryEffectsEvent(HabboInventoryEffectsEvent.const_1391));
  }
  _r50430888e52269(e) {
    let r = e.isWallItem ? RoomObjectCategoryEnum.const_909 : RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE;
    return e.category === class_1901.POSTER
      ? (this._roomEngine?._re608f4ba68bdcb(
          RoomObjectPlacementSource.INVENTORY,
          e.id,
          r,
          e.type,
          e.stuffData.getLegacyString(),
        ) ?? !1)
      : (this._roomEngine?._re608f4ba68bdcb(
          RoomObjectPlacementSource.INVENTORY,
          e.id,
          r,
          e.type,
          String(e.extra),
          e.stuffData,
        ) ?? !1);
  }
  _rc71de7ee01635d(e) {
    for (let r of this._r9275a8e42af3cc?.furniData ?? []) {
      let t = r.getItem(e);
      if (t != null && !t.isWallItem) return t;
    }
    return null;
  }
  _reb9eeb9dd127ca(e) {
    for (let r of this._r9275a8e42af3cc?.furniData ?? []) {
      let t = r.getItem(e);
      if (t != null && t.isWallItem) return t;
    }
    return null;
  }
  _rcfe868f829c086(e, r, t) {
    return (this._r9275a8e42af3cc?._r60b05ff8e49760(r, t) ?? null)?._r993642385edd75() ?? null;
  }
  _re99ec0cc74990e(e, r = !1) {
    return this._refc910356bea72?._re99ec0cc74990e(e, r) ?? !1;
  }
  _rf085caf479da12() {
    (this._view?._ra9558e6fd9915e(this._r47f3cb1aa1ae77?._r500bbbdb2c23f9($t.OWNED_FURNI) ?? 0),
      this._view?._rbd01dcc7eaac32(this._r47f3cb1aa1ae77?._r500bbbdb2c23f9($t.RENTED_FURNI) ?? 0),
      this._view?._rebb1cdf625af47(this._r47f3cb1aa1ae77?._r500bbbdb2c23f9($t.PET) ?? 0),
      this._view?._rfb926f0670d7c8(this._r47f3cb1aa1ae77?._r500bbbdb2c23f9($t.BADGE) ?? 0),
      this._view?._rb1e22adafbd3c3(this._r47f3cb1aa1ae77?._r500bbbdb2c23f9($t.BOT) ?? 0),
      this._view?._r9b7035300f4ca3(this._r47f3cb1aa1ae77?._r500bbbdb2c23f9($t.COLLECTIBLES) ?? 0));
  }
  _rc192f9aaf6c144(e) {
    let r = this._r9275a8e42af3cc?._rc192f9aaf6c144(e) ?? !1;
    return (r && this._rf085caf479da12(), r);
  }
  _rc0eaf8c4268954(e) {
    let r = this._refc910356bea72?._rc192f9aaf6c144(e) ?? !1;
    return (r && this._rf085caf479da12(), r);
  }
  products(e, r) {
    return this._sessionDataManager == null
      ? null
      : r === class_1803.PRODUCT_TYPE_STUFF
        ? this._sessionDataManager.getFloorItemData(e)
        : r === class_1803.PRODUCT_TYPE_ITEM
          ? this._sessionDataManager.getWallItemData(e)
          : null;
  }
  _r1a2479a26b2096(e, r, t = 0) {
    return this._sessionDataManager == null
      ? null
      : r === class_1803.PRODUCT_TYPE_STUFF
        ? this._sessionDataManager.getFloorItemDataByName(e)
        : r === class_1803.PRODUCT_TYPE_ITEM
          ? this._sessionDataManager.getWallItemDataByName(e)
          : null;
  }
  getItemImage(e) {
    return e.isWallItem
      ? this._roomEngine?._r3ac60c12dafe70(
          e.type,
          new k(180, 0, 0),
          64,
          null,
          0,
          e.stuffData.getLegacyString(),
        )?.data
      : this._roomEngine?._r5db1beeb89d785(
          e.type,
          new k(180, 0, 0),
          64,
          null,
          0,
          String(e.extra),
          -1,
          -1,
          e.stuffData,
        )?.data;
  }
  _rc80c788fb9799e(e = !1) {
    (this._view?.showCollectiblesTab(this._r08dbc43175f2ed),
      this.web3tradeEnabled &&
        (this._view?._r2d58ab2457c4f1(this._r08dbc43175f2ed),
        e && this._r6798423e068a1a?._r265e5028e1f363()));
  }
  onWiredTradeActiveChanged() {
    this._view?.showCollectiblesTab(this._r08dbc43175f2ed);
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "open":
          r.length === 2
            ? this._rf93ea073fdcb45(class_2106.FURNITURE)
            : r.length === 3
              ? this._rf93ea073fdcb45(r[2] ?? class_2106.FURNITURE)
              : r.length === 4 && this._rf93ea073fdcb45(r[2] ?? class_2106.FURNITURE, r[3] ?? null);
          break;
      }
  }
  _r014ae8d052c574(e) {
    let r = this._r4757926cfb0b72,
      t = [];
    if (r == null) return t;
    r.getBadges().length === 0 &&
      !this._r328905ce2c0e7d &&
      (r.requestInitialization(), (this._r328905ce2c0e7d = !0));
    for (let i of r.getBadges()) (e == null || !e.includes(i.badgeId)) && t.push(i.badgeId);
    return t;
  }
  manager(e) {
    return this.var_3865.includes(e);
  }
  _r01343b6551981a(e) {
    return this._boundFurnitureNames.includes(e);
  }
  _rf9ca0bc5c72d56(e, r) {
    ((this.var_3865 = [...e]), (this._boundFurnitureNames = [...r]));
  }
  setClubStatus(e, r, t, i, s, o, d, c) {
    ((this._reebadc16f8e73a.clubDays = e),
      (this._reebadc16f8e73a.clubPeriods = r),
      (this._reebadc16f8e73a._r392f9b08842975 = t),
      (this._reebadc16f8e73a._ra6c4481543acf2 = i),
      (this._reebadc16f8e73a._rd5192fa7d1725e = s),
      (this._reebadc16f8e73a._r5336785a0c8883 = o),
      (this._reebadc16f8e73a.minutesUntilExpiration = d),
      (this._reebadc16f8e73a._rc43e18432c54a9 = c),
      this.events.dispatchEvent?.(new HabboInventoryHabboClubEvent(HabboInventoryHabboClubEvent.const_1089)));
  }
  _r8997b61b58abef = n((e) => {
    this._view?.IIDHabboCatalog(e);
  }, "_r8997b61b58abef");
  _r136af7172e26af = n((e) => {
    switch (e.type) {
      case RoomSessionEvent.const_1398:
        ((this._r81faacfdfcbb97 = e.session),
          this.var_217 && this._refc910356bea72?._rf359ff640d0ec2());
        break;
      case RoomSessionEvent.const_215:
        ((this._r81faacfdfcbb97 = null), this.var_217 && this._rddf4cd2390c8eb());
        break;
      case RoomSessionPropertyUpdateEvent.ALLOW_PETS:
        this.var_217 && this._refc910356bea72?._rf359ff640d0ec2();
        break;
    }
  }, "_r136af7172e26af");
  init() {
    !this.allRequiredDependenciesInjected ||
      this._r85e5d4e839e693 != null ||
      this._windowManager == null ||
      this._communication == null ||
      ((this._r85e5d4e839e693 = new B()),
      this._r85e5d4e839e693.add(
        class_2106.MARKETPLACE,
        new ape(
          this,
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
          this._localization,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2245.TRADING,
        new Id(
          this,
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
          this._localization,
          this._soundManager,
          this._notifications,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2245.WIRED_TRADING,
        new ul(
          this,
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
          this._localization,
          this._soundManager,
          this._notifications,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2106.FURNITURE,
        new FurniModel(
          this._r285bb583206ebc(),
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
          this._catalog,
          this._soundManager,
          this._localization,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2106.BADGES,
        new zm(this, this._windowManager, this._communication, this.assets),
      ),
      this._r85e5d4e839e693.add(
        class_2106.const_65,
        new dQ(this, this._windowManager, this._communication, this.assets, this._localization),
      ),
      this._r85e5d4e839e693.add(
        class_2106.PETS,
        new UnkClass_27a490(
          this._r16bea6ae6f8390(),
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2106.BOTS,
        new UnkClass_3bf5e2(
          this._r72f6faa332b954(),
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
          this._avatarRenderer,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2106.COLLECTIBLES,
        new UnkClass_ba4c94(
          this._r02cdf3c271df23(),
          this._communication,
          this.assets,
          this._roomEngine,
          this._catalog,
          this._windowManager,
        ),
      ),
      this._r85e5d4e839e693.add(
        class_2245.RECYCLER,
        new dpe(
          this,
          this._windowManager,
          this._communication,
          this.assets,
          this._roomEngine,
          this._localization,
        ),
      ),
      (this.var_217 = !0));
  }
  _r16bea6ae6f8390() {
    let e = this;
    return {
      get events() {
        return e.events;
      },
      get isVisible() {
        return e.isVisible;
      },
      get view() {
        return e.view;
      },
      get _ra2d0b2740c7155() {
        return e._ra2d0b2740c7155;
      },
      get _r2eac8239a09fe7() {
        return e._r2eac8239a09fe7;
      },
      get _r349ca5f2f69601() {
        return e._r349ca5f2f69601;
      },
      get localization() {
        return e.localization;
      },
      _rcf87bdca169c00: n(() => e._rcf87bdca169c00(), "_rcf87bdca169c00"),
      showView: n(() => e.showView(), "showView"),
      _rf085caf479da12: n(() => e._rf085caf479da12(), "_rf085caf479da12"),
      _rb2c2fb6f23bc56: n((r, t = !0) => {
        e._rb2c2fb6f23bc56(r, t);
      }, "_rb2c2fb6f23bc56"),
    };
  }
  _r72f6faa332b954() {
    let e = this;
    return {
      get events() {
        return e.events;
      },
      get isVisible() {
        return e.isVisible;
      },
      get view() {
        return e.view;
      },
      get _ra2d0b2740c7155() {
        return e._ra2d0b2740c7155;
      },
      get _r2eac8239a09fe7() {
        return e._r2eac8239a09fe7;
      },
      get _r349ca5f2f69601() {
        return e._r349ca5f2f69601;
      },
      _rcf87bdca169c00: n(() => e._rcf87bdca169c00(), "_rcf87bdca169c00"),
      showView: n(() => e.showView(), "showView"),
      _rf085caf479da12: n(() => e._rf085caf479da12(), "_rf085caf479da12"),
    };
  }
  _r02cdf3c271df23() {
    let e = this;
    return {
      get events() {
        return e.events;
      },
      get isVisible() {
        return e.isVisible;
      },
      get view() {
        return e.view;
      },
      get assets() {
        return e.assets;
      },
      get windowManager() {
        return e.windowManager;
      },
      get catalog() {
        return e._rc4641e5bd6551b;
      },
      get localization() {
        return e.localization;
      },
      get _ra2d0b2740c7155() {
        return e._ra2d0b2740c7155;
      },
      get _r349ca5f2f69601() {
        return e._r349ca5f2f69601;
      },
      get _r5a2088db32911f() {
        return e._r85e5d4e839e693?.getValue(class_2245.TRADING);
      },
      _r9fc90ede19317b: n((r) => e._r9fc90ede19317b(r), "_r9fc90ede19317b"),
      _rb2c2fb6f23bc56: n((r, t = !0) => {
        e._rb2c2fb6f23bc56(r, t);
      }, "_rb2c2fb6f23bc56"),
      _rf085caf479da12: n(() => e._rf085caf479da12(), "_rf085caf479da12"),
    };
  }
  _r285bb583206ebc() {
    let e = this;
    return {
      get isVisible() {
        return e.isVisible;
      },
      get view() {
        return e.view;
      },
      get _ra2d0b2740c7155() {
        return e._ra2d0b2740c7155;
      },
      get _r2eac8239a09fe7() {
        return e._r2eac8239a09fe7;
      },
      get _r349ca5f2f69601() {
        return e._r349ca5f2f69601;
      },
      get localization() {
        return e.localization;
      },
      get sessionData() {
        return e.sessionData;
      },
      get _re9e4d1b42c1d4d() {
        return e._re9e4d1b42c1d4d;
      },
      get web3tradeEnabled() {
        return e.web3tradeEnabled;
      },
      get _rfa660cefb72529() {
        return e._rfa660cefb72529;
      },
      get _r34b7e698fbdaf3() {
        return e._r34b7e698fbdaf3;
      },
      get _r6d077d4f38b3d9() {
        return e._r6d077d4f38b3d9;
      },
      get _r94dcfedd8fb086() {
        return e._r94dcfedd8fb086;
      },
      get _ra6233779f4cbd3() {
        return e._r94dcfedd8fb086?._r03057c3ba5278f ?? null;
      },
      _rcf87bdca169c00: n(() => e._rcf87bdca169c00(), "_rcf87bdca169c00"),
      showView: n(() => e.showView(), "showView"),
      _rf085caf479da12: n(() => e._rf085caf479da12(), "_rf085caf479da12"),
      _rb2c2fb6f23bc56: n((r, t = !0) => e._rb2c2fb6f23bc56(r, t), "_rb2c2fb6f23bc56"),
      _r9fc90ede19317b: n((r) => e._r9fc90ede19317b(r), "_r9fc90ede19317b"),
      _rcee4eb8ebc6d4a: n(() => e._rcee4eb8ebc6d4a(), "_rcee4eb8ebc6d4a"),
      _r50430888e52269: n((r) => e._r50430888e52269(r), "_r50430888e52269"),
      products: n((r, t) => e.products(r, t), "products"),
      _r1a2479a26b2096: n((r, t, i = 0) => e._r1a2479a26b2096(r, t, i), "_r1a2479a26b2096"),
      getBoolean: n((r) => e.getBoolean(r), "getBoolean"),
      getInteger: n((r, t = 0) => e.getInteger(r, t), "getInteger"),
      getProperty: n((r, t = "") => e.getProperty(r, t), "getProperty"),
    };
  }
  _r6ef7a97418c23d(e) {
    return e === class_2106.RENTABLES ? class_2106.FURNITURE : e;
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 343899.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/HabboToolbar.as
// Nome offuscato: _if21c3927bcc2ec

class extends ue {
  static {
    n(this, "HabboToolbar");
  }
  var_217 = !1;
  _r278ff183fbdb1d = null;
  _rc10755b389fbea = null;
  _r8e0989f6fd4c8f = null;
  _r50ff780b6accb1 = null;
  var_2192 = null;
  _r887baa9e1957e6 = null;
  _r4d6d0d5b7d8948 = null;
  _offerExtension = null;
  _r7033dba2401e76 = null;
  _rc65f378746265f = null;
  _r172fd9dbb36c70 = null;
  _ra4f755ebb8e157 = null;
  _rd23458e5fe52e7 = null;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      e.attachComponent(new HabboPhoneNumber(e, 0, t), [new IIDHabboPhoneNumber()]),
      e.attachComponent(new HabboNuxDialogs(e, 0, t), [new IIDHabboNuxDialogs()]),
      e.attachComponent(new HabboCampaigns(e, 0, t), [new IIDHabboCampaigns()]));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
      new ComponentDependency(
        new IIDHabboWindowManager(),
        (e) => {
          this._windowManager = e;
        },
        !0,
      ),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (e) => {
          this._catalog = e;
        },
        !0,
        [
          { type: CatalogEvent.CATALOG_INITIALIZED, callback: n((...e) => this._rd70de0df1ee5a7(...e), "callback") },
          { type: CatalogEvent.CATALOG_NOT_READY, callback: n((...e) => this._rd70de0df1ee5a7(...e), "callback") },
          { type: CatalogEvent.CATALOG_NEW_ITEMS_SHOW, callback: n((...e) => this._rd70de0df1ee5a7(...e), "callback") },
          { type: CatalogEvent.CATALOG_NEW_ITEMS_HIDE, callback: n((...e) => this._rd70de0df1ee5a7(...e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(
        new IIDHabboInventory(),
        (e) => {
          this._inventory = e;
        },
        !1,
        [
          { type: d1.const_207, callback: n((...e) => this._r00a88b7f05f8e4(...e), "callback") },
          { type: HabboInventoryHabboClubEvent.const_1089, callback: n((...e) => this.onClubChanged(...e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboSoundManager(), (e) => {
        this._soundManager = e;
      }),
      new ComponentDependency(
        new IIDSessionDataManager(),
        (e) => {
          this._sessionDataManager = e;
        },
        !0,
        [{ type: d0.PERKS_UPDATED, callback: n((...e) => this._rde9cb5beb33523(...e), "callback") }],
      ),
      new ComponentDependency(
        new IIDHabboHelp(),
        (e) => {
          this._habboHelp = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboFreeFlowChat(), (e) => {
        this._rb7fab1e25a8762 = e;
      }),
      new ComponentDependency(
        new IIDHabboRoomUI(),
        (e) => {
          this._rf205fceb9b7fe8 = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDAvatarRenderManager(), (e) => {
        this._avatarRenderManager = e;
      }),
      new ComponentDependency(
        new IIDHabboQuestEngine(),
        (e) => {
          this._questEngine = e;
        },
        !1,
        [
          { type: x1e.TYPE, callback: n((...e) => this._r76fc93d07161c4(...e), "callback") },
          { type: Bj.TYPE, callback: n((...e) => this._rab9276bba37c76(...e), "callback") },
          { type: Aj.TYPE, callback: n((...e) => this._r7a6245572a6584(...e), "callback") },
        ],
      ),
      new ComponentDependency(
        new IIDHabboMessenger(),
        (e) => {
          this._messenger = e;
        },
        !1,
        [
          { type: MiniMailMessageEvent.NEW_MESSAGE_NOTIFICATION, callback: n((...e) => this._rb183aa7f5baf72(...e), "callback") },
          { type: MiniMailMessageEvent.const_809, callback: n((...e) => this._rb183aa7f5baf72(...e), "callback") },
          { type: d1.const_207, callback: n((...e) => this._r00a88b7f05f8e4(...e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboNavigator(), (e) => {
        this._navigator = e;
      }),
      new ComponentDependency(new IIDHabboNewNavigator(), (e) => {
        this._newNavigator = e;
      }),
      new ComponentDependency(
        new IIDHabboUserDefinedRoomEvents(),
        (e) => {
          this._roomEvents = e;
        },
        !1,
        [
          {
            type: WiredMenuEvent.WIRED_MENU_BUTTON_PREFERENCE_CHANGED,
            callback: n((...e) => this._r98a16f11f7c13a(...e), "callback"),
          },
        ],
      ),
    ]);
  }
  initComponent() {
    if (
      ((this.var_36 = this._r6358b2bd53ae19?.connection ?? null),
      (this._rc65f378746265f ??= (r) => {
        this._r97aecc27368072(r);
      }),
      (this._ra4f755ebb8e157 ??= (r) => {
        this._rda62d524664508(r);
      }),
      (this._rd23458e5fe52e7 ??= (r) => {
        this._r09fcf547ed87e1(r);
      }),
      (this._r172fd9dbb36c70 ??= (r) => {
        this.onRemoveDimmer(r);
      }),
      this._r6358b2bd53ae19 != null && this._r6358b2bd53ae19._r2e106e2349a0b6(new class_2271(this._rc65f378746265f)),
      this._windowManager == null)
    )
      return;
    ((this._r8acce0216d5894 = new BottomBackgroundBorder(this)),
      (this._view = new Dee(this, this._windowManager, this.assets, this.events)),
      (this._view.window.visible = !1),
      this.initRoomEnterEffect(),
      (this.var_471 = new iMe(this._windowManager, this)));
    let e = this.getProperty("new.user.wing");
    if (e !== "") {
      let r = this.getInteger("new.user.promo.delay", 10) * 1e3;
      if (
        (r > 0 &&
          this._r9b9bbd7d027096 == null &&
          ((this._r9b9bbd7d027096 = new _i05394ecc0c0c4d(r, 1)),
          this._r9b9bbd7d027096.addEventListener(DeBouncer._rf33144eac61595, this._ra4f755ebb8e157),
          this._r9b9bbd7d027096.start()),
        e === class_2104.SOCIAL ||
          e === class_2104.QUEST ||
          e === class_2104.GROUP ||
          e === class_2104.GAME)
      ) {
        let t = this.getInteger("new.user.promo.room.delay", 180) * 1e3;
        t > 0 &&
          this._rdcad35b725efa7 == null &&
          ((this._rdcad35b725efa7 = new _i05394ecc0c0c4d(t, 1)),
          this._rdcad35b725efa7.addEventListener(DeBouncer._rf33144eac61595, this._rd23458e5fe52e7),
          this._rdcad35b725efa7.start());
      }
    }
  }
  dispose() {
    if (
      ((this.var_217 = !1),
      (this.var_36 = null),
      this._rad6657bad7db72(),
      this._r3fbca391cdb1a3(),
      this._rb90765cbc75bcf(),
      this.var_471?.dispose(),
      (this.var_471 = null),
      this._r8acce0216d5894?.dispose(),
      (this._r8acce0216d5894 = null),
      this._view?.dispose(),
      (this._view = null),
      this._r278ff183fbdb1d?.dispose(),
      (this._r278ff183fbdb1d = null),
      this._rc10755b389fbea?.dispose(),
      (this._rc10755b389fbea = null),
      this._r8e0989f6fd4c8f?.dispose(),
      (this._r8e0989f6fd4c8f = null),
      this._r50ff780b6accb1?.dispose(),
      (this._r50ff780b6accb1 = null),
      this.var_2192 != null)
    )
      for (let e of this.var_2192) e.dispose();
    ((this.var_2192 = null),
      this._r887baa9e1957e6?.dispose(),
      (this._r887baa9e1957e6 = null),
      this._r4d6d0d5b7d8948?.dispose(),
      (this._r4d6d0d5b7d8948 = null),
      this._offerExtension?.dispose(),
      (this._offerExtension = null),
      (this._r6358b2bd53ae19 = null),
      (this._windowManager = null),
      (this._catalog = null),
      (this._messenger = null),
      (this._navigator = null),
      (this._newNavigator = null),
      (this._roomEvents = null),
      (this._localization = null),
      (this._inventory = null),
      (this._soundManager = null),
      (this._sessionDataManager = null),
      (this._habboHelp = null),
      (this._avatarRenderManager = null),
      (this._questEngine = null),
      (this._rb7fab1e25a8762 = null),
      (this._rf205fceb9b7fe8 = null),
      super.dispose());
  }
  get events() {
    return super.events;
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("Window manager is not available.");
    return this._windowManager;
  }
  get _rf3db13932bfb60() {
    if (this._r6358b2bd53ae19 == null) throw new Error("Communication manager is not available.");
    return this._r6358b2bd53ae19;
  }
  get connection() {
    return this.var_36;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get _rf0eb5f07c94cfb() {
    return this._avatarRenderManager;
  }
  get catalog() {
    return this._catalog;
  }
  get navigator() {
    return this._newNavigator?._r8d305e819155a0 ?? this._navigator;
  }
  get questEngine() {
    return this._questEngine;
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get _r5e3ef8a2b11d2a() {
    return this._rf205fceb9b7fe8;
  }
  get inventory() {
    return this._inventory;
  }
  get localization() {
    return this._localization;
  }
  get messenger() {
    return this._messenger;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get extensionView() {
    return this.var_471;
  }
  get musicController() {
    return this._soundManager;
  }
  _r6822d89b476fe5(e) {
    return e === Me.EXT_GROUP
      ? (this.var_471?._r6822d89b476fe5(e) ?? null)
      : (this._view?._r6822d89b476fe5(e) ?? this._r50ff780b6accb1?._r6822d89b476fe5(e) ?? null);
  }
  _raa4dc20ed68e9a(e) {
    return e === Me.EXT_GROUP
      ? (this.var_471?._raa4dc20ed68e9a(e) ?? null)
      : (this._view?._r4c2c2a11e22517(e) ?? this._r50ff780b6accb1?._raa4dc20ed68e9a(e) ?? null);
  }
  setToolbarState(e) {
    (this.var_471 != null &&
      ((this.var_471.landingView = e === HabboToolbarEnum.TOOLBAR_STATE_HOTEL_VIEW),
      this._r1893b8d51bd43b(e !== HabboToolbarEnum.TOOLBAR_STATE_HIDDEN)),
      this._view?.setToolbarState(e),
      this._view != null && (this._view.window.visible = !0),
      this._habboHelp != null && (this._habboHelp._rb7933744fce4f9 = e !== HabboToolbarEnum.TOOLBAR_STATE_ROOM_VIEW),
      this.events.dispatchEvent?.(new HabboToolbarEvent(HabboToolbarEvent.RESIZED)));
  }
  _rd6ab3bd2704f84() {
    return this._view?._rd6ab3bd2704f84() ?? "";
  }
  _re0d48308335439(e, r) {
    this._view?._re0d48308335439(e, r);
  }
  _ra9b27e4a11ddce() {
    return this._view != null ? this._view.window.rectangle : new D();
  }
  _r842c0f7cc1107e(e, r) {
    this._view?._r5f2964065e6a9a(e, r);
  }
  _r2b0be5baed9721(e) {
    let r = Me[e],
      t = new HabboToolbarEvent(r === Me.CAMERA ? HabboToolbarEvent.CAMERA_TOGGLE : HabboToolbarEvent.TOOLBAR_CLICK);
    ((t._re9c693c8b69b04 = r),
      (t.iconName = r === Me.CAMERA ? HabboToolbarEvent.CAMERA_LAUNCH_ORIGIN_TOOLBAR : e),
      this.events.dispatchEvent?.(t),
      this.var_36 != null &&
        this.var_36.send(new class_2154("Toolbar", e, "client.toolbar.clicked")));
  }
  set onDuty(e) {
    this._view != null && (this._view.onDuty = e);
  }
  get _r386c0c29216870() {
    return this._view?._r1b1625e08367d8() ?? 0;
  }
  _r8771461217740e() {
    this._r50ff780b6accb1?._r8a9678b76585b4();
  }
  _r690eeac018f022() {
    this._r887baa9e1957e6?.window != null &&
      ((this._r887baa9e1957e6.window.visible = !this._r887baa9e1957e6.window.visible),
      this.var_471?._re232476c03a26b());
  }
  createTransitionToIcon(e, r, t, i) {
    return this._view != null && !this._view.disposed
      ? this._view.animateToIcon(e, r, t, i)
      : (r?.dispose(), null);
  }
  _rdb88b9ead33b4f(e) {
    if (!Jn.isRunning()) return;
    let r = this.windowManager.createWindow(
      ToolbarDisplayExtensionIds.const_958,
      "",
      0,
      0,
      0,
      new D(0, 0, e.width, e.height),
      null,
      0,
    );
    r != null && ((r.color = 0), (r.blend = 0.3), e.addChild(r), e.invalidate());
  }
  removeDimmer(e) {
    let r = e.findChildByName("toolbar_dimmer");
    r != null && (e.removeChild(r), e.invalidate(), this.windowManager.destroy(r));
  }
  reboot() {
    this.context.reboot?.();
  }
  _rde9cb5beb33523 = n((e) => {
    this.var_471 != null &&
      !this.var_217 &&
      (this._rbcf7f0885cec6d(),
      this.initSeasonalCurrencyExtension(),
      this._r4975c86c693807(),
      this._r3519bfa607ed43(),
      this.initCitizenshipVipQuestsExtension(),
      this.initVideoOfferExtension(),
      this.initOfferExtension(),
      this._r4a4f2c58a34601(),
      (this.var_217 = !0));
  }, "_rde9cb5beb33523");
  _rd70de0df1ee5a7 = n((e) => {
    this._view?._rd70de0df1ee5a7(e);
  }, "_rd70de0df1ee5a7");
  _r98a16f11f7c13a = n((e) => {
    this._view?._r98a16f11f7c13a(e);
  }, "_r98a16f11f7c13a");
  _r97aecc27368072 = n((e) => {
    this._r4d6d0d5b7d8948 == null && this.initVideoOfferExtension();
  }, "_r97aecc27368072");
  _rda62d524664508 = n((e) => {
    this._rad6657bad7db72();
    let r = this.getProperty("new.user.wing"),
      t = "",
      i = "",
      s = class_2083.const_27,
      o = null;
    switch (r) {
      case class_2104.SOCIAL:
        ((t = "new.user.promo.social"), (i = Me.NAVIGATOR), (o = "NAVIGATOR"));
        break;
      case class_2104.GROUP:
        ((t = "new.user.promo.group"), (i = Me.EXT_GROUP), (s = class_2083.RIGHT));
        break;
      case class_2104.QUEST:
        ((t = "new.user.promo.quest"), (i = Me.PROGRESSION), (o = "QUESTS"));
        break;
      case class_2104.GAME:
        ((t = "new.user.promo.game"), (i = Me.GAMES), (o = "GAMES"));
        break;
      default:
        return;
    }
    this._r6822d89b476fe5(i) != null && this._habboHelp?.showWelcomeScreen(i, t, s, o);
  }, "_rda62d524664508");
  _r09fcf547ed87e1 = n((e) => {
    (this._rb90765cbc75bcf(),
      this._habboHelp?.showWelcomeScreen(
        Me.NAVIGATOR,
        "new.user.promo.room",
        class_2083.const_27,
        "NAVIGATOR_ME_TAB",
      ));
  }, "_r09fcf547ed87e1");
  initRoomEnterEffect() {
    if (this.isNewIdentity() && this.getBoolean("room.enter.effect.enabled")) {
      let e = this.getInteger("room.enter.effect.delay", 4e3),
        r = this.getInteger("room.enter.effect.duration", 2e3);
      (Jn.init(e, r),
        this._view != null && this._rdb88b9ead33b4f(this._view.window),
        this._r7033dba2401e76 == null &&
          ((this._r7033dba2401e76 = new _i05394ecc0c0c4d(e + r, 1)),
          this._r7033dba2401e76.addEventListener(DeBouncer._rf33144eac61595, this._r172fd9dbb36c70),
          this._r7033dba2401e76.start()));
    }
  }
  onRemoveDimmer = n((e) => {
    (this._r3fbca391cdb1a3(),
      this._view != null && this.removeDimmer(this._view.window),
      this.var_471?._r8f5485f7a045e3());
  }, "onRemoveDimmer");
  _rb183aa7f5baf72 = n((e) => {
    this._messenger == null ||
      this._view == null ||
      ((this._view._r395feec4ff669c = this._messenger._r18fb9fe57a9088()),
      (this._view.memenu.unseenMinimailsCount = this._messenger._r18fb9fe57a9088()),
      this._view.setUnseenItemCount(Me.MEMENU, this._view._r7296b073959588));
  }, "_rb183aa7f5baf72");
  _r76fc93d07161c4 = n((e) => {
    this._view != null &&
      ((this._view._r1a008dddbd6ea5 = e.count),
      (this._view.progmenu.unseenAchievementsCount = e.count),
      this._view.setUnseenItemCount(Me.PROGRESSION, this._view._rbf68e99232ce55));
  }, "_r76fc93d07161c4");
  _rab9276bba37c76 = n((e) => {
    this._view != null &&
      ((this._view._rf78fb4040404c1 = e.count),
      (this._view.progmenu.unseenDailyTaskCount = e.count),
      this._view.setUnseenItemCount(Me.PROGRESSION, this._view._rbf68e99232ce55));
  }, "_rab9276bba37c76");
  _r7a6245572a6584(e) {
    this._view != null &&
      ((this._view.unseenRewardTrackRewardsCount = e.count),
      (this._view.progmenu.unseenRewardTrackRewardsCount = e.count),
      this._view.setUnseenItemCount(Me.PROGRESSION, this._view._rbf68e99232ce55));
  }
  _r00a88b7f05f8e4 = n((e) => {
    (this._view?.setUnseenItemCount(Me.INVENTORY, e._r21d94a797217ff),
      this._view?.setUnseenItemCount(Me.GAMES, e.getCategoryCount($t.GAMES)));
  }, "_r00a88b7f05f8e4");
  onClubChanged = n((e) => {
    (this._r50ff780b6accb1?._r7861eec6bbb3dc.onClubChanged(e),
      this._r8e0989f6fd4c8f?.onClubChanged(e),
      this._r4d6d0d5b7d8948?.onClubChanged(e),
      this._r278ff183fbdb1d?.onClubChanged(e));
  }, "onClubChanged");
  _r1893b8d51bd43b(e) {
    this.var_471 != null && (this.var_471.visible = e);
  }
  initOfferExtension() {
    let e = !this.isNewIdentity() || !this.getBoolean("new.identity.hide.ui");
    this._offerExtension == null &&
      this.getBoolean("offers.enabled") &&
      e &&
      !this.getBoolean("offers.habboclub.enabled") &&
      this._windowManager != null &&
      this._catalog != null &&
      (this._offerExtension = new OfferExtension(this, this._windowManager, this.assets, this._catalog));
  }
  _rbcf7f0885cec6d() {
    this._r50ff780b6accb1 == null &&
      this._catalog != null &&
      ((this._r50ff780b6accb1 = new cMe(this, this._catalog)),
      this._r50ff780b6accb1._r7861eec6bbb3dc.onClubChanged());
  }
  _r4a4f2c58a34601() {
    this._r887baa9e1957e6 == null && (this._r887baa9e1957e6 = new uMe(this));
  }
  initSeasonalCurrencyExtension() {
    if (
      this.var_2192 != null ||
      !this.getBoolean("seasonalcurrencyindicator.enabled") ||
      this._windowManager == null ||
      this._catalog == null ||
      this._localization == null
    )
      return;
    let e = this.getSeasonalCurrencyTypes();
    this.var_2192 = [];
    for (let r = 0; r < e.length; r++) {
      let t = e[r],
        i = new pMe(
          this,
          this._windowManager,
          this.assets,
          this._catalog,
          this._localization,
          t,
          class_1954.SLOT_SEASONAL_CURRENCY + r,
        ),
        s = new Mo(Mo.ACTIVITY_POINT_BALANCE, this._catalog.getPurse().getActivityPointsForType(t), t);
      (i._r100bf6283d85e5(s), this.var_2192.push(i));
    }
  }
  getSeasonalCurrencyTypes() {
    let e = [],
      r = this.getProperty("seasonalcurrencyindicator.active");
    if (r == null || r === "") return e;
    let t = r.split(",");
    for (let i of t) {
      let s = i.replace(/^\s+|\s+$/g, "");
      if (s === "") continue;
      let o = Number(s);
      if (Number.isNaN(o)) continue;
      let d = Math.trunc(o);
      e.includes(d) || e.push(d);
    }
    return e;
  }
  _r4975c86c693807() {
    this._r278ff183fbdb1d == null &&
      this.getBoolean("club.membership.extend.vip.promotion.enabled") &&
      (this._r278ff183fbdb1d = new oMe(this));
  }
  initCitizenshipVipQuestsExtension() {
    this._rc10755b389fbea == null &&
      this.getBoolean("citizenship.vip.quest.promotion.enabled") &&
      this._windowManager != null &&
      this._localization != null &&
      this.var_36 != null &&
      (this._rc10755b389fbea = new CitizenshipVipQuestsPromoExtension(
        this,
        this._windowManager,
        this.assets,
        this.events,
        this._localization,
        this.var_36,
      ));
  }
  _r3519bfa607ed43() {
    this._r8e0989f6fd4c8f == null &&
      this.getBoolean("club.membership.extend.vip.promotion.enabled") &&
      (this._r8e0989f6fd4c8f = new CitizenshipVipDiscountPromoExtension(this));
  }
  initVideoOfferExtension() {
    let e = !this.isNewIdentity() || !this.getBoolean("new.identity.hide.ui");
    this._r4d6d0d5b7d8948 == null &&
      this._catalog?._r985b1eb69c27a3.enabled === !0 &&
      this.getBoolean("toolbar.extension.video.promo.enabled") &&
      e &&
      (this._r4d6d0d5b7d8948 = new hMe(this));
  }
  _r3fbca391cdb1a3() {
    this._r7033dba2401e76 != null &&
      (this._r172fd9dbb36c70 != null &&
        this._r7033dba2401e76.removeEventListener(DeBouncer._rf33144eac61595, this._r172fd9dbb36c70),
      this._r7033dba2401e76.stop(),
      (this._r7033dba2401e76 = null));
  }
  _rad6657bad7db72() {
    this._r9b9bbd7d027096 != null &&
      (this._ra4f755ebb8e157 != null &&
        this._r9b9bbd7d027096.removeEventListener(DeBouncer._rf33144eac61595, this._ra4f755ebb8e157),
      this._r9b9bbd7d027096.stop(),
      (this._r9b9bbd7d027096 = null));
  }
  _rb90765cbc75bcf() {
    this._rdcad35b725efa7 != null &&
      (this._rd23458e5fe52e7 != null &&
        this._rdcad35b725efa7.removeEventListener(DeBouncer._rf33144eac61595, this._rd23458e5fe52e7),
      this._rdcad35b725efa7.stop(),
      (this._rdcad35b725efa7 = null));
  }
  isNewIdentity() {
    return this.getInteger("new.identity", 0) > 0;
  }
}

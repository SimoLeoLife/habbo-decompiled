// Extracted from HabboAirLauncher.deobf.js, line 196986.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/HabboCatalog.as
// Obfuscated name: _i3ac0ecc07711b5

class a extends ue {
  static {
    n(this, "HabboCatalog");
  }
  static GET_SNOWWAR_TOKENS = "GET_SNOWWAR_TOKENS";
  static GET_SNOWWAR_TOKENS2 = "GET_SNOWWAR_TOKENS2";
  static GET_SNOWWAR_TOKENS3 = "GET_SNOWWAR_TOKENS3";
  static DESKTOP_WINDOW_LAYER = 1;
  static _rcc3622351cf03c = new E(100, 20);
  static _rc7e3b87c4ac44b = new E(100, 5);
  static MAX_SEARCH_RESULTS_LENGTH = 400;
  static _re93abdacd17d77 = -1;
  static SEARCH_PRODUCT_CODE_OVERRIDES_BY_FURNI_CLASS_NAME = {};
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      this._r6a91dbba30622c(),
      (this._utils = new x0(this)),
      (this._r62a813f1ecf19a = new p2e(this)),
      (this._re274c3c782ff73 = {
        getProductName: n(
          (i) => this.getProductData(i.itemTypeId)?.name ?? i.itemTypeId,
          "getProductName",
        ),
        getProductType: n((i) => i.itemTypeId, "getProductType"),
        _r754963cee9e311: n((i, s, o) => {}, "_r754963cee9e311"),
        _r499c0961ae0910: n((i, s, o) => {}, "_r499c0961ae0910"),
      }),
      (this._ra42f8dee7dffbf = new EarningsController(e, 0, t)),
      (this._ra20adf0a017e33 = new q6e(e, 0, t)),
      (this.var_195 = new CollectiblesController(e, 0, t)),
      (this._rad3398402ec8a5 = new C0(e, 0, t)),
      (this._re274c3c782ff73 = this.var_195),
      e.attachComponent?.(this._ra20adf0a017e33, [new UnkInterface_3b7063()]),
      e.attachComponent?.(this._ra42f8dee7dffbf, [new UnkInterface_481218()]),
      e.attachComponent?.(this.var_195, [new UnkInterface_c9786f()]),
      (this._r77150d80157f71 = new y8e(e, 0, t)),
      e.attachComponent?.(this._r77150d80157f71, [new IIDHabbiconController()]),
      e.attachComponent?.(this._rad3398402ec8a5, [new UnkInterface_f8989b()]));
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
      new ComponentDependency(
        new IIDHabboNavigator(),
        (e) => {
          this._navigator = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
        [
          { type: RoomEngineObjectEvent.PLACED, callback: n((e) => this._r86223976013659(e), "callback") },
          { type: RoomEngineObjectEvent.PLACED_ON_USER, callback: n((e) => this._rbaf4287d28cc99(e), "callback") },
        ],
      ),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (e) => {
          this._toolbar = e;
        },
        !1,
        [{ type: HabboToolbarEvent.TOOLBAR_CLICK, callback: n((e) => this.IIDHabboCatalog(e), "callback") }],
      ),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboFreeFlowChat(),
        (e) => {
          this._rb7fab1e25a8762 = e;
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
      new ComponentDependency(
        new IIDHabboInventory(),
        (e) => {
          this._inventory = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboQuestEngine(),
        (e) => {
          this._questEngine = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (e) => {
          this._roomSessionManager = e;
        },
        !1,
        [
          { type: RoomSessionEvent.const_1398, callback: n((e) => this._r2e8ee6747a8a2b(e), "callback") },
          { type: RoomSessionEvent.const_215, callback: n((e) => this._r2e8ee6747a8a2b(e), "callback") },
        ],
      ),
      new ComponentDependency(
        new IIDHabboNotifications(),
        (e) => {
          this._notifications = e;
        },
        !1,
      ),
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
    (this._r6a91dbba30622c(),
      this.context._r7e43d9f4706607(this),
      this._r2c15b16e6eba6e(),
      (this._r621f7690e4750a = this.isNewItemsNotificationEnabled()),
      (this.var_3207 = this._sessionDataManager?.loadProductData(this) ?? !1),
      (this.var_689 = this._sessionDataManager?.getFurniData(this) ?? null),
      this._r1c07641058d2b3(),
      this._r7991dd2596a0e9(),
      (this._re84346638ee0f3 = new OfferController(this)),
      (this._r32ecb4fc276afd =
        this._roomSessionManager?.getSession(this._roomEngine?.activeRoomId ?? 0)?._r9ab0d525741546 ??
        !1),
      (this._r6ea66982d85be6 = new D8e(this, this._windowManager, this._roomEngine)),
      (this.var_2623 = new ClubBuyController(this)),
      (this._rf1a3a75432178e = new ClubExtendController(this)),
      (this._r71c1ea4232e320 = new ClubGiftController(this)),
      (this._r6b9d53a79f8951 = new UnkClass_2cddbb(this)),
      this.send(new UnkMessageComposer_0args_f001e3()),
      this._rd1751aa7725e1c());
  }
  dispose() {
    if (!this.disposed) {
      if ((this.context._r7485c47d8bd77c(this), this._communication != null))
        for (let e of this._messageEvents) this._communication._r7668362bf55fdd(e);
      (this.reset(!0),
        this.var_69?.dispose(),
        (this.var_69 = null),
        this._r5e06ab7692da9a?.dispose(),
        (this._r5e06ab7692da9a = null),
        this.var_2623?.dispose(),
        this._rf1a3a75432178e?.dispose(),
        this._r71c1ea4232e320?.dispose(),
        this._r6b9d53a79f8951?.dispose(),
        this._r6ea66982d85be6?.dispose(),
        this._rf199be868ccb63?.dispose(),
        this._re84346638ee0f3?.dispose(),
        (this._rf199be868ccb63 = null),
        (this._rad3398402ec8a5 = null),
        (this.var_195 = null),
        (this._re84346638ee0f3 = null),
        this._r62a813f1ecf19a.dispose(),
        this._utils.dispose(),
        this.removeUpdateReceiver(this),
        this._rbfd4915b4c1274 != null &&
          (this._rbfd4915b4c1274.stop(),
          this._rbfd4915b4c1274.removeEventListener(DeBouncer.addEventListener, this._r48a725060f8d33),
          (this._rbfd4915b4c1274 = null)),
        this.RoomPreviewer?.dispose(),
        (this.RoomPreviewer = null),
        this._r84a501652af661(!0),
        (this.var_283 = null),
        this._sessionDataManager?.removeFurniDataListener(this),
        (this._communication = null),
        (this._windowManager = null),
        (this._localization = null),
        (this._navigator = null),
        (this._sessionDataManager = null),
        (this._roomEngine = null),
        (this._toolbar = null),
        (this._avatarRenderManager = null),
        (this._rb7fab1e25a8762 = null),
        (this._inventory = null),
        (this._questEngine = null),
        (this._notifications = null),
        (this._roomSessionManager = null),
        (this._soundManager = null),
        super.dispose());
    }
  }
  get linkPattern() {
    return "catalog/";
  }
  get connection() {
    return this._communication?.connection ?? null;
  }
  get _r047e7cd71777de() {
    return this._rf6e8e85290f393;
  }
  set _r047e7cd71777de(e) {
    this._rf6e8e85290f393 = e;
  }
  get _rf0eb5f07c94cfb() {
    return this._avatarRenderManager;
  }
  get _promoInfo() {
    return this._r8873f92b5650f9 !== CatalogType.BUILDER;
  }
  get _rbf728fddc728fb() {
    return this._utils._rbf728fddc728fb;
  }
  get _rc94facdba94e66() {
    return this._r71884544a9b670;
  }
  get _r28a444d88bee4d() {
    return this._r8873f92b5650f9;
  }
  get getNodeById() {
    return this.getCatalogNavigator(this._r8873f92b5650f9);
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get class_2157() {
    return this._r29ef2dd32b46f2;
  }
  get imageGalleryHost() {
    return this.getProperty("image.library.catalogue.url");
  }
  get inventory() {
    return this._inventory;
  }
  get localization() {
    return this._localization;
  }
  get mainContainer() {
    return this.var_283;
  }
  get marketPlace() {
    return this._r6ea66982d85be6;
  }
  _r4d073861c2ef51() {
    return this._r6ea66982d85be6;
  }
  get multiplePurchaseEnabled() {
    return this.getBoolean("catalog.multiple.purchase.enabled") && this._r8873f92b5650f9 !== CatalogType.BUILDER;
  }
  get navigator() {
    return this._navigator;
  }
  get _rd5809bdabd44c9() {
    return this._r32ecb4fc276afd;
  }
  get _rc7dd5dfdda40b8() {
    return this._r453527b5fdd5fd;
  }
  set _rc7dd5dfdda40b8(e) {
    this._r453527b5fdd5fd = e;
  }
  get questEngine() {
    return this._questEngine;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get _r08651d482bdd11() {
    return (this._rfed3c90eaa1f66(), this.RoomPreviewer);
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get _re3d3194794691f() {
    return this._r48abcae980ed21;
  }
  get notifications() {
    return this._notifications;
  }
  get newAdditionsPageOpenDisabled() {
    return this.getBoolean("catalog.new.additions.page.open.disabled");
  }
  _r6a91dbba30622c() {
    ((this._communication ??= null),
      (this._windowManager ??= null),
      (this._localization ??= null),
      (this._navigator ??= null),
      (this._sessionDataManager ??= null),
      (this._roomEngine ??= null),
      (this._toolbar ??= null),
      (this._avatarRenderManager ??= null),
      (this._rb7fab1e25a8762 ??= null),
      (this._friendList ??= null),
      (this._inventory ??= null),
      (this._questEngine ??= null),
      (this._notifications ??= null),
      (this._roomSessionManager ??= null),
      (this._soundManager ??= null),
      (this._rf35aeee208e5ee ??= !0),
      (this._r8873f92b5650f9 ??= CatalogType.NORMAL),
      (this._r5c38d4bde923bf ??= a._rc7e3b87c4ac44b.clone()),
      (this._rea8c97a3bd5316 ??= !1),
      (this._r9150dc3fd44f3b ??= null),
      (this._rb1c0113ce7829c ??= !1),
      (this._rd9955ab5586e38 ??= !0),
      (this.var_189 ??= null),
      (this._re587925c8a3704 ??= new Map()),
      (this._r080e3306bd1eb6 ??= null),
      (this.var_283 ??= null),
      (this._rd35acedab84a16 ??= new r5()),
      (this._reebadc16f8e73a ??= new Purse()),
      (this._messageEvents ??= []),
      (this._rf6e8e85290f393 ??= null),
      (this._r48abcae980ed21 ??= null),
      (this.var_2623 ??= null),
      (this._rf1a3a75432178e ??= null),
      (this._r71c1ea4232e320 ??= null),
      (this._r6b9d53a79f8951 ??= null),
      (this._r6ea66982d85be6 ??= null),
      (this._offerCenter ??= null),
      (this.var_69 ??= null),
      (this._r5e06ab7692da9a ??= null),
      (this._rf199be868ccb63 ??= null),
      (this._rad3398402ec8a5 ??= null),
      (this._re84346638ee0f3 ??= null),
      (this._r453527b5fdd5fd ??= null),
      (this.RoomPreviewer ??= null),
      (this._ra7db14098ae875 ??= null),
      (this._ra0483ebe942dfa ??= null),
      (this._re50efdae0c9388 ??= null),
      (this._reb951060a8a6a1 ??= !1),
      (this._r621f7690e4750a ??= !1),
      (this.var_689 ??= null),
      (this._rad428a88194ae6 ??= !1),
      (this._initialized ??= !1),
      (this.var_3207 ??= !1),
      (this._r8dd23a7063ef2f ??= !1),
      (this._rbfd4915b4c1274 ??= null),
      (this._searchEntries ??= []),
      (this._r27ced3c235e917 ??= !0),
      (this._r97ea38ebd58620 ??= null),
      (this._r780ea9035f5f85 ??= 0),
      (this._r32ecb4fc276afd ??= !1),
      (this._rf42bc697403be0 ??= !1),
      (this._rb6ab95c1514a40 ??= !1),
      (this.var_1135 ??= null),
      (this._r929ad145911aae ??= null),
      (this._r304df25b9999fe ??= null),
      (this._rf7a12c89a2e2a6 ??= null),
      (this._r71884544a9b670 ??= null),
      (this._r29ef2dd32b46f2 ??= null),
      (this._r5bff6b375a597a ??= !1),
      (this._r4c21e116c8b7c6 ??= -1),
      (this._re87d247414d020 ??= 0),
      (this._r3a1cfd61ecb997 ??= 0),
      (this._r0d91819934491d ??= 0),
      (this._r3ddf6d39c19ffc ??= 0),
      (this._r970d44e0b36793 ??= 0),
      (this._rd4890233524473 ??= 0),
      (this.var_3327 ??= !1),
      (this._r780872c4c19468 ??= !1),
      (this._r74d2483338cb59 ??= new B()),
      (this.var_195 ??= null));
  }
  get toolbar() {
    return this._toolbar;
  }
  get _r08dbc43175f2ed() {
    return this._inventory?._r08dbc43175f2ed ?? !1;
  }
  get _r4cfac9af32377e() {
    return this._re87d247414d020;
  }
  get _r2e0214d4864b5b() {
    return this._r4c21e116c8b7c6;
  }
  get _rd727642b8ac26c() {
    return this._r3a1cfd61ecb997;
  }
  get _rc7d5aba394e3cd() {
    return this._r0d91819934491d - (_ia411d8d8194a3a() - this._r970d44e0b36793) / 1e3;
  }
  get _rf1a5ad3d8e0dd7() {
    return this._r3ddf6d39c19ffc - (_ia411d8d8194a3a() - this._r970d44e0b36793) / 1e3;
  }
  get utils() {
    return this._utils;
  }
  get _r985b1eb69c27a3() {
    return this._r62a813f1ecf19a;
  }
  get earnings() {
    return this._ra42f8dee7dffbf;
  }
  get _r93bfd6c6424c93() {
    return this._re274c3c782ff73;
  }
  get currentPage() {
    return this.var_189?.currentPage ?? null;
  }
  get musicController() {
    return this._soundManager;
  }
  get _rdfa5f197522a60() {
    return this._r6b9d53a79f8951;
  }
  get _r3d3d3373a547ae() {
    return this._r71c1ea4232e320;
  }
  get windowManager() {
    if (this._windowManager == null) throw new Error("HabboCatalog windowManager is not available.");
    return this._windowManager;
  }
  getPurse() {
    return this._reebadc16f8e73a;
  }
  viewer() {
    return this._rf199be868ccb63;
  }
  _rd436cd79c08f80(e) {
    return (
      this._offerCenter == null &&
        (this._offerCenter = new H8e(this.windowManager, this.assets, this)),
      (this._offerCenter.offerExtension = e),
      this._offerCenter
    );
  }
  getActivityPointName(e) {
    let r = this.getProperty(`activitypoint.name.${e}`);
    return this._localization?.getLocalization(r, r) ?? r;
  }
  _r6e81894a74658f() {
    let e = this.getProperty("web.shop.relative.url");
    e !== "" && globalThis.open?.(e, "_blank");
  }
  openClubCenter() {
    this.context._r6b6c989018eb05("habboUI/open/hccenter");
  }
  showVipBenefits() {
    this._utils.showVipBenefits();
  }
  openVault() {
    this.context._r6b6c989018eb05("habboUI/open/vault");
  }
  openCatalog() {
    this.buildersClubEnabled(CatalogType.NORMAL, !0);
  }
  openCatalogPage(e, r = null) {
    let t = r ?? CatalogType.NORMAL;
    this.buildersClubEnabled(t, !0, !1);
    let i = this._rf7d0ef35f696bb(t);
    if (!this._initialized || i.catalogNavigator == null || !i.catalogNavigator.initialized) {
      i._ra2fbb073d5d666._r70facbccfcf79e = e;
      return;
    }
    i.catalogNavigator.openPage(e);
  }
  _rb54f79cedd3062(e, r, t = null) {
    let i = t ?? CatalogType.NORMAL,
      s = this._r483108c805ff8b(i);
    if (this._initialized && s?.catalogNavigator?.initialized) {
      (this.buildersClubEnabled(i, !0, !1),
        s.catalogViewer?._r7ef29dad214b22(),
        s.catalogNavigator._reb4d5284e2e2d6(e, r));
      return;
    }
    this.buildersClubEnabled(i);
    let o = this._rf7d0ef35f696bb(i);
    ((o._ra2fbb073d5d666._r26df5f9eec7617 = e), (o._ra2fbb073d5d666._r44eed779fb526e = r));
  }
  _r104372015639cf(e, r = null) {
    let t = r ?? CatalogType.NORMAL,
      i = this._r483108c805ff8b(t);
    if (this._initialized && i?.catalogNavigator?.initialized) {
      (this.buildersClubEnabled(t, !0, !1),
        i.catalogViewer?._r7ef29dad214b22(),
        i.catalogNavigator._r8494bdc8d8729a(e));
      return;
    }
    this.buildersClubEnabled(t);
    let s = this._rf7d0ef35f696bb(t);
    ((s._ra2fbb073d5d666._r26df5f9eec7617 = qu.DUMMY_PAGE_ID_FOR_OFFER_SEARCH), (s._ra2fbb073d5d666._r44eed779fb526e = e));
  }
  _re9624d89aa8c2c(e) {
    e !== "" && this.send(new UnkMessageComposer_1args_01e867(e));
  }
  _r0d4b993beffea4(e) {
    this.send(new class_2059(e));
  }
  _r7a349a60c592d2(e, r, t) {
    (this.setCatalogBusy(t, !0),
      (this._rf7d0ef35f696bb(t).lastPageRequestId = e),
      this.send(new UnkMessageComposer_3args_b0ef4c(e, r, t)));
  }
  getProductData(e) {
    return this._sessionDataManager?.getProductData(e) ?? null;
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
  _r79cad450bdc61b(e, r, t) {
    this._utils._r79cad450bdc61b(e, r, t);
  }
  getPixelEffectIcon(e) {
    return (
      this._inventory?.assets?.getAssetByName(`fx_icon_${e}_png`)?.content?.clone() ??
      new A(1, 1, !0, 16777215)
    );
  }
  getSubscriptionProductIcon(e) {
    return this.assets.getAssetByName("icon_hc")?.content?.clone() ?? new A(1, 1, !0, 16777215);
  }
  getMintTokenProductIcon() {
    return this.assets.getAssetByName("minting_token_large")?.content?.clone() ?? new A(1, 1, !0, 16777215);
  }
  getSeasonalCurrencyActivityPointType() {
    return this.getInteger("seasonalcurrencyindicator.currency", 1);
  }
  _r0bd15f171f0e2d(e, r, t, i, s = !0) {
    this.send(new UnkMessageComposer_5args_d175ed(e, r, t, i, s));
  }
  _r41190c02ac808f(e = Tc.OPEN) {
    this.send(new YO(e));
  }
  _r6cbd0d8395bac6() {
    this.send(new UnkMessageComposer_0args_bd9689());
  }
  _rc0be76048f3fbb() {
    this.send(new UnkMessageComposer_0args_d5e5cd());
  }
  _r399314f4fcc6a3(e) {
    this.send(new UnkMessageComposer_1args_48ff45(e));
  }
  _r1d412253b15601(e) {
    this.send(new UnkMessageComposer_1args_359cdf(e));
  }
  _r0895eb206aefc8() {
    this.send(new UnkMessageComposer_0args_bef879());
  }
  _r5bbeb2324e3603(e) {
    this.send(new UnkMessageComposer_1args_d020d8(e));
  }
  _r6936c7498ed04e(e, r, t = null) {
    this.send(new class_2127(e, r, t));
  }
  _rc638c80a192240(e) {
    this.send(new UnkMessageComposer_1args_980d5e(e));
  }
  _rf3d1715fe51ded() {
    this.send(new UnkMessageComposer_0args_216d1c());
  }
  purchaseProduct(e, r, t = "", i = 1) {
    let s = this._r453527b5fdd5fd;
    if (s != null && s.offerId === r) {
      this.send(
        new class_1916(e, r, s.flatId, s.name ?? "", s._rae51ee574e7731, s.description, s.categoryId),
      );
      return;
    }
    this.send(new class_2108(e, r, t, i));
  }
  purchaseProductAsGift(e, r, t, i, s, o, d, c, f = !1) {
    this.send(new class_1814(e, r, t, i, s, o, d, c, f));
  }
  _r9e7b2525d70167(e) {
    this.send(new UnkMessageComposer_1args_9a5617(e));
  }
  _r80a58b7b6d2c3b(e) {
    this.send(new UnkMessageComposer_1args_5a0637(e));
  }
  _rdbdd1de38a3484(e) {
    this.send(new UnkMessageComposer_1args_4c6322(e));
  }
  _rd2832168ded994(e) {
    let r = this._r65378e609eb27f(e);
    if (r != null) {
      this.send(new UnkMessageComposer_1args_9cd25c(r.offerId));
      return;
    }
    this.send(new UnkMessageComposer_0args_c38a5f());
  }
  _r8f771ef1b983d3(e) {
    this._rd2832168ded994(e);
  }
  _rc79553615de4fc(e, r) {
    this.send(new UnkMessageComposer_2args_366d0e(e, r));
  }
  _r7e9b849f6d14ca(e, r) {
    this.send(new UnkMessageComposer_2args_83882f(e, r));
  }
  _r68884ca8198b66(e, r = "", t = 1) {
    let o = (this.getCatalogNavigator(CatalogType.NORMAL)?._r369c0978d14dff(e, !0) ?? null)?.[0]?.pageId ?? -1;
    o >= 0 && this.purchaseProduct(o, e, r, t);
  }
  _ra2855e753d5c74(e) {
    this._rf42bc697403be0 = e;
  }
  _r90e0541bd3ebaf(e, r) {
    this.send(new UnkMessageComposer_2args_d08ec3(e, r));
  }
  _r01481f204d0f88(e) {
    let r = this._r74d2483338cb59.getValue(e) ?? null;
    return r != null ? r.slice() : (this.send(new UnkMessageComposer_1args_7ba091(e)), null);
  }
  rememberPageDuringVipPurchase(e) {
    let r = this.getNodeById?.currentCatalogNavigator(e) ?? null;
    this.var_1135 = r?.pageName ?? "frontpage";
  }
  _re166ac4009e847() {
    ((this.var_1135 = null), (this._rb6ab95c1514a40 = !1));
  }
  _rf3e49d325a9f04() {
    this._rb6ab95c1514a40 = this.var_1135 != null;
  }
  _ra4fb77354d81ca() {
    this.send(new UnkMessageComposer_0args_7b84a2());
  }
  showPurchaseConfirmation(e, r, t, i, s, o = null, d = !0, c = null, f = null) {
    if (r === qu.DUMMY_PAGE_ID_FOR_OFFER_SEARCH) {
      let h = this.getNodeById?._r369c0978d14dff(e.offerId, !0)?.[0] ?? null;
      h != null && (r = h.pageId);
    }
    if (this.isHabbiconOwned(e)) {
      this.showHabbiconAlreadyOwnedAlert();
      return;
    }
    let l = this.multiplePurchaseEnabled
        ? this._utils._rfcca586527c6d5(!0, e.priceInCredits, i)
        : e.priceInCredits,
      b = this.multiplePurchaseEnabled
        ? this._utils._rfcca586527c6d5(!0, e.priceInActivityPoints, i)
        : e.priceInActivityPoints,
      _ = e instanceof Nm;
    if (l > 0 && l > this._reebadc16f8e73a.credits && !_) {
      this.showNotEnoughCreditsAlert();
      return;
    }
    if (b > 0 && b > this._reebadc16f8e73a.getActivityPointsForType(e.activityPointType) && !_) {
      this.showNotEnoughActivityPointsAlert(e.activityPointType);
      return;
    }
    if (e instanceof hn || this._rf42bc697403be0 || e instanceof Nm || e instanceof C1 || e instanceof E1) {
      if (this.var_69 == null || this.var_69.disposed) {
        if (this._localization == null || this._roomEngine == null) return;
        this.var_69 = new j8e(this._localization, this.assets);
      }
      let h = this._friendList?._rab99fafd046469() ?? [],
        p = c;
      (p == null && (p = this._rf6e8e85290f393),
        this.var_69.showOffer(this, this._roomEngine, e, r, t, i, s, h, p, f));
    } else if (e instanceof Em) {
      if (r === -1) {
        let h = this.getNodeById?.getNodeByName(CatalogPageName.CATALOG_PAGE_CLUB) ?? null;
        h != null && (r = h.pageId);
      }
      r >= 0 && this.var_2623?.showConfirmation(e, r);
    }
    this._rf42bc697403be0 && ((this._rf42bc697403be0 = !1), this.var_69.turnIntoGifting());
  }
  showNotEnoughCreditsAlert() {
    this._windowManager?.alert(
      "${catalog.alert.notenough.title}",
      "${catalog.alert.notenough.credits.description}",
      0,
      this._r4c5be5a0962baf,
    );
  }
  showNotEnoughActivityPointsAlert(e) {
    this._windowManager?.alert(
      "${catalog.alert.notenough.title}",
      "${catalog.alert.notenough.activitypoints.description}",
      0,
      this._r4c5be5a0962baf,
    );
  }
  _rd02236672e019d(e, r, t) {
    if (r === "") return;
    let i = this.assets.getAssetByName(r);
    if (i?.content instanceof A) {
      e != null && a._rc31a142ba0add0(e, i.content);
      return;
    }
    let s = this.assets.loadAssetFromFile(r, new UnkClass_636490(`${this.imageGalleryHost}${r}.png`), "image/png");
    t != null && s.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, t);
  }
  setLeftPaneVisibility(e) {
    let r = this.var_283?.findChildByName("navigationContainer");
    r != null && (r.visible = e);
    let t = this.var_283?.findChildByName("searchContainer");
    t != null && (t.visible = e);
  }
  isHabbiconOwned(e) {
    return !this.getBoolean("habbicons.enabled") ||
      e == null ||
      e.product == null ||
      e.product.productType !== class_1803.PRODUCT_TYPE_HABBICON ||
      this._r77150d80157f71 == null
      ? !1
      : this.isHabbiconOfferOwned(Number(e.product.extraParam) | 0);
  }
  isHabbiconOfferOwned(e) {
    return !this.getBoolean("habbicons.enabled") || this._r77150d80157f71 == null
      ? !1
      : this._r77150d80157f71._rb8fc3312c1481b(e) != null;
  }
  showHabbiconAlreadyOwnedAlert() {
    this._windowManager?.alert(
      "${catalog.alert.purchaseerror.title}",
      "${habbicon.catalog.already_owned}",
      0,
      this._r4c5be5a0962baf,
    );
  }
  _rea93b305be2f40(e) {
    this._inventory?._r6fc4caed9a7329(e);
  }
  useNonTabbedCatalog(e = null) {
    return e === CatalogType.BUILDER ? !0 : this.getBoolean("client.desktop.use.non.tabbed.catalog");
  }
  _r3d62135cd02425(e = dr.CLUB) {
    return (this._sessionDataManager?.clubLevel ?? 0) >= e ? !0 : (this.openClubCenter(), !1);
  }
  _rfdc38b3042267c(e) {
    let r = this._roomSessionManager?.getSession(this._roomEngine?.activeRoomId ?? 0) ?? null;
    return (
      this.getBoolean("catalog.drag_and_drop") &&
      r != null &&
      (this.var_189?.currentPage == null ||
        this.var_189.currentPage._r5fa793e5f07ae1) &&
      ((this._r8873f92b5650f9 === CatalogType.NORMAL &&
        (r.isRoomOwner || (r.isGuildRoom && r._rea9739215487be >= RoomControllerLevelEnum.GUILD_MEMBER))) ||
        (this._r8873f92b5650f9 === CatalogType.BUILDER && this._r4886fce2d9cf5b(e) === UnkConstants_7f58a6._rb2488512c80ca7)) &&
      e.pricingModel !== hn.PRICING_MODEL_BUNDLE &&
      e.pricingModel !== hn.PRICING_MODEL_MULTI &&
      e.product != null &&
      e.product.productType !== class_1803.PRODUCT_TYPE_EFFECT &&
      e.product.productType !== class_1803.PRODUCT_TYPE_CLUB
    );
  }
  _r4886fce2d9cf5b(e) {
    if (e == null) return UnkConstants_7f58a6._r2e2ab9b5b6918f;
    if (this._r2e0214d4864b5b < 0 || this._r2e0214d4864b5b >= this._r4cfac9af32377e)
      return UnkConstants_7f58a6._r4a67fffe7b2e4a;
    let r = this._roomSessionManager?.getSession(this._roomEngine?.activeRoomId ?? 0) ?? null;
    return r == null ? UnkConstants_7f58a6._r510144065b67f3 : this.getBuilderFurniPlaceableStatus(r);
  }
  _rfd14a991f3d0b9() {
    let e = this._roomSessionManager?.getSession(this._roomEngine?.activeRoomId ?? 0) ?? null;
    return e == null ? !1 : this.getBuilderFurniPlaceableStatus(e) === UnkConstants_7f58a6._rb2488512c80ca7;
  }
  _r554b9a058961c3(e, r, t = !1) {
    if (!this._rfdc38b3042267c(r) || this._roomEngine == null || r.product == null) return;
    let i = RoomObjectCategoryEnum.const_434;
    switch (r.product.productType) {
      case class_1803.PRODUCT_TYPE_STUFF:
        i = RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE;
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        i = RoomObjectCategoryEnum.const_909;
        break;
      default:
        return;
    }
    this._roomEngine._re608f4ba68bdcb(
      RoomObjectPlacementSource.CATALOG,
      -r.offerId,
      i,
      r.product.productClassId,
      r.product.extraParam || null,
      null,
      -1,
      -1,
      null,
      t,
    ) &&
      ((this._ra7db14098ae875 = r),
      (this._ra0483ebe942dfa = e),
      (this._r8dd23a7063ef2f = !0),
      (this._r5bff6b375a597a = t),
      this._rc0e7e3a1e7728f());
  }
  _rff03647462b156() {
    return this._inventory?._r1eb551585cedeb() ?? 0;
  }
  _rad6dab0d78ac23(e) {
    return this._inventory?._rad6dab0d78ac23(e) ?? !1;
  }
  _r80e577f08146ab(e) {
    this._re50efdae0c9388 != null &&
      this._re50efdae0c9388.offerId !== e.offerId &&
      this._r84a501652af661();
  }
  reset(e = !1) {
    if (
      ((this._initialized = !1),
      (this.var_189 = null),
      (this.var_283 = null),
      this._r080e3306bd1eb6 != null)
    ) {
      for (let r of this._r080e3306bd1eb6.values()) r.dispose();
      this._r080e3306bd1eb6 = null;
    }
    (this._re587925c8a3704.clear(),
      this._rbfd4915b4c1274 != null &&
        (this._rbfd4915b4c1274.stop(),
        this._rbfd4915b4c1274.removeEventListener(DeBouncer.addEventListener, this._r48a725060f8d33),
        (this._rbfd4915b4c1274 = null)),
      e ||
        (this._sessionDataManager?.loadProductData(this) ?? !1) ||
        this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_NOT_READY)));
  }
  _r84a501652af661(e = !1) {
    (e || this._r7067b019dcb57d(), this._re50efdae0c9388?.dispose(), (this._re50efdae0c9388 = null));
  }
  _r677d2cc3859768() {
    ((this.var_689 = this._sessionDataManager?.getFurniData(this) ?? null),
      (this._r27ced3c235e917 = !0),
      (this._r97ea38ebd58620 = null));
  }
  productDataReady() {
    if (
      ((this.var_3207 = !0),
      (this._r27ced3c235e917 = !0),
      this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_INITIALIZED)),
      this._r9150dc3fd44f3b != null)
    ) {
      let e = this._r9150dc3fd44f3b,
        r = this._rb1c0113ce7829c,
        t = this._rd9955ab5586e38;
      ((this._r9150dc3fd44f3b = null), this.buildersClubEnabled(e, r, t));
    }
  }
  update(e) {
    if ((this.RoomPreviewer?._r7314b55e8d0d86(), _ia411d8d8194a3a() - this._rd4890233524473 > 500)) {
      let r = this._rc7d5aba394e3cd,
        t = this._rf1a5ad3d8e0dd7;
      ((r > -3 && r < 200) || (t > -3 && t < 200)) && this.refreshBuilderStatus();
    }
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2))
      switch (r[1]) {
        case "open":
          r.length > 2 ? this.openCatalogPage(r[2] ?? "") : this.openCatalog();
          break;
        case "warehouse":
          r.length > 2
            ? this.openCatalogPage(r[2] ?? "", CatalogType.BUILDER)
            : this.buildersClubEnabled(CatalogType.BUILDER, !0);
          break;
        case "club_buy":
          this.openClubCenter();
          break;
        case "habbicons":
          this.getBoolean("habbicons.enabled") && this.context._r6b6c989018eb05("habbicons/open");
          break;
        default:
          break;
      }
  }
  getProperty(e, r) {
    if (typeof r == "string") {
      let t = super.getProperty(e);
      return t.length > 0 ? t : r;
    }
    return super.getProperty(e, r ?? null);
  }
  getCatalogNavigator(e) {
    return this._re587925c8a3704.get(e) ?? null;
  }
  _r5a5819a5decf89() {
    return (this.var_2623 == null && (this.var_2623 = new ClubBuyController(this)), this.var_2623);
  }
  _r069ad4a1743fb5() {
    this.buildersClubEnabled(CatalogType.BUILDER);
  }
  _r2e315061469868(e, r, t = -1, i = -1, s = !1) {
    ((this._r5e06ab7692da9a ??= new z8e(this)), this._r5e06ab7692da9a.show(e, r, t, i, s));
  }
  _r754963cee9e311(e, r, t) {
    if (
      this._re50efdae0c9388 == null ||
      this._re50efdae0c9388.productClassId !== e ||
      this._re50efdae0c9388.roomId !== (this._roomEngine?.activeRoomId ?? 0)
    )
      return;
    let i = r,
      s = this._re50efdae0c9388.category,
      o = this._re50efdae0c9388._r8a8bd2d04c661f,
      d = Math.trunc(this._re50efdae0c9388.x),
      c = Math.trunc(this._re50efdae0c9388.y),
      f = Math.trunc(this._re50efdae0c9388.direction);
    switch (s) {
      case class_1901.FLOOR: {
        let l =
          this._roomEngine?._r7f639510511a35(
            this._roomEngine.activeRoomId,
            RoomObjectVariableEnum.ROOM_FLOOR_TYPE,
          ) ?? null;
        this._re50efdae0c9388._r82e8177c354fb4 !== l && this.send(new class_2293(i));
        break;
      }
      case class_1901.WALL_PAPER: {
        let l =
          this._roomEngine?._r7f639510511a35(
            this._roomEngine.activeRoomId,
            RoomObjectVariableEnum.ROOM_WALL_TYPE,
          ) ?? null;
        this._re50efdae0c9388._r82e8177c354fb4 !== l && this.send(new class_2293(i));
        break;
      }
      case class_1901.LANDSCAPE: {
        let l =
          this._roomEngine?._r7f639510511a35(
            this._roomEngine.activeRoomId,
            RoomObjectVariableEnum.ROOM_LANDSCAPE_TYPE,
          ) ?? null;
        this._re50efdae0c9388._r82e8177c354fb4 !== l && this.send(new class_2293(i));
        break;
      }
      default:
        this.send(new UnkMessageComposer_6args_39add9(i, s, o, d, c, f));
        break;
    }
    this._r84a501652af661();
  }
  buildersClubEnabled(e, r = !1, t = !0) {
    if (
      (!(this._sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1) &&
        !this.getBoolean("builders.club.enabled") &&
        (e = CatalogType.NORMAL),
      this._rbfd4915b4c1274?.stop(),
      this._r5b66fd8c34c30c(),
      this._r080e3306bd1eb6 == null && !this._r1c07641058d2b3(e))
    ) {
      ((this._r9150dc3fd44f3b = e), (this._rb1c0113ce7829c = r), (this._rd9955ab5586e38 = t));
      return;
    }
    this._r9150dc3fd44f3b = null;
    let i = this._r483108c805ff8b(this._r8873f92b5650f9),
      s = this._rfba8b056e50348(e),
      o = this._rd08b9e97a80f94(),
      d = i != null && i !== s;
    (e === CatalogType.BUILDER && this.send(new UnkMessageComposer_0args_5d30c5()),
      (s.catalogNavigator == null || !s.catalogNavigator.initialized) && this._r0687a3d7d098e6(e),
      d && i != null && this._ra9bb74fb72867c(i) && this._rc0e7e3a1e7728f(i, !1),
      !d && o && !r
        ? this._rc0e7e3a1e7728f(s, !0)
        : (!o || r || d) &&
          (this._reb951060a8a6a1 &&
            ((this._reb951060a8a6a1 = !1),
            this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_NEW_ITEMS_HIDE)),
            this._rb3981e1f0a7e33()),
          this._r9f4f48d3e845d5(s),
          t && s.catalogViewer?.currentPage == null && s.catalogNavigator?.initialized
            ? (s.catalogNavigator._rabec38a3e283e3(), s.catalogNavigator.loadFrontPage())
            : s.catalogViewer?.currentPage != null && this._r71b5cbe9886f15(s)),
      this._rd08b9e97a80f94() &&
        this.var_283 != null &&
        (this.var_283.activate(), this.focusSearchInput(this.var_283)),
      this.refreshCatalogWindowChrome(e, s.mainContainer),
      this.refreshBuilderStatus(),
      this._rd08b9e97a80f94() && this._rf199be868ccb63 != null && this.getCurrentLayoutCode() === "recycler"
        ? this._rf199be868ccb63.activate()
        : !this._rd08b9e97a80f94() &&
          this._rf199be868ccb63 != null &&
          i?.catalogViewer?.getCurrentLayoutCode() === "recycler" &&
          this._rf199be868ccb63.cancel(),
      this._rf199be868ccb63 != null &&
        this._rea93b305be2f40(this._rf199be868ccb63.active && this._rd08b9e97a80f94()));
  }
  static _rc31a142ba0add0(e, r) {
    let t = e;
    t != null &&
      (t.bitmap == null && (t.bitmap = new A(e.width, e.height, !0, 16777215)),
      t.bitmap.fillRect(t.bitmap.rect, 16777215),
      t.bitmap.copyPixels(
        r,
        r.rect,
        new E((e.width - r.width) / 2, (e.height - r.height) / 2),
        null,
        null,
        !1,
      ),
      e.invalidate());
  }
  _r1c07641058d2b3(e = null) {
    return this._initialized
      ? !0
      : !this.var_3207 || this._windowManager == null
        ? !1
        : (this._rad428a88194ae6 && this.refreshFurniData(),
          this._r2b7c83175c9818(),
          this._rfba8b056e50348(e ?? CatalogType.NORMAL),
          (this._initialized = !0),
          this.updatePurse(),
          this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_INITIALIZED)),
          this.send(new UnkMessageComposer_0args_5d30c5()),
          !0);
  }
  _r2b7c83175c9818() {
    ((this._r080e3306bd1eb6 = new Map()),
      this._re587925c8a3704.clear(),
      this.createCatalogWindowState(CatalogType.NORMAL),
      this.createCatalogWindowState(CatalogType.BUILDER));
  }
  createCatalogWindowState(e) {
    let r = this._r080e3306bd1eb6?.get(e) ?? null;
    if (r != null) return r;
    let t = new CatalogWindowState(e);
    return (
      (t.mainContainer = this.createMainWindow(e)),
      t.mainContainer != null &&
        (e === CatalogType.BUILDER && (t.mainContainer.height += 15),
        (t.catalogNavigator = new qu(this, t.mainContainer, e)),
        (t.catalogViewer = new CatalogViewer(this, t.mainContainer.findChildByName("layoutContainer"), e)),
        this._ree37b3bf84c60e(t.mainContainer, "creditsIcon", "purse_coins_small"),
        this._ree37b3bf84c60e(t.mainContainer, "pixelsIcon", "purse_pixels_small"),
        this._ree37b3bf84c60e(t.mainContainer, "clubIcon", "purse_club_small")),
      (this._r080e3306bd1eb6 ??= new Map()),
      this._r080e3306bd1eb6.set(e, t),
      t.catalogNavigator != null && this._re587925c8a3704.set(e, t.catalogNavigator),
      t
    );
  }
  createMainWindow(e) {
    let r = this.getCatalogWindowAssetName(e),
      t = this.assets.getAssetByName(r);
    if (t?.content == null || this._windowManager == null) return null;
    let i = this._windowManager.buildFromXML(t.content, a.DESKTOP_WINDOW_LAYER);
    if (i == null) return null;
    let s = Array.isArray(i.tags) ? i.tags.slice() : [];
    (s.includes("habbo_catalog") || s.push("habbo_catalog"),
      (i.tags = s),
      (i.position = this._r5c38d4bde923bf.clone()),
      (i.visible = !1),
      i.addEventListener(y.const_848, this._r7842253c210aea),
      i.parent != null && i.parent.removeChild(i),
      (i.findChildByName("titlebar_close_button") ?? i.findChildByTag("close"))?.addEventListener(
        u.CLICK,
        () => this.onWindowClose(),
      ));
    let d = i.findChildByName("search.input");
    return (
      d != null &&
        (d.addEventListener(sr.const_1081, this._rb70fb65563388c),
        d.addEventListener(sr.const_900, this._rb70fb65563388c),
        d._r1c386c8571c5d9(0, d.text.length),
        i.findChildByName("clear_search_button")?.addEventListener(u.CLICK, this.onClearSearch)),
      this.refreshCatalogWindowChrome(e, i),
      i
    );
  }
  _r7991dd2596a0e9() {
    this._rf199be868ccb63 = new Y8e(this, this._windowManager);
  }
  _r9f4f48d3e845d5(e = null) {
    ((e ??= this._r483108c805ff8b(this._r8873f92b5650f9)),
      !(this._windowManager == null || e?.mainContainer == null || e.mainContainer.parent != null) &&
        (this._r00206f9cd20cb4(e.mainContainer),
        (e.mainContainer.visible = !0),
        this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.addChild(e.mainContainer)));
  }
  _rc0e7e3a1e7728f(e = null, r = !0) {
    ((e ??= this._r483108c805ff8b(this._r8873f92b5650f9)),
      !(this._windowManager == null || e?.mainContainer == null || e.mainContainer.parent == null) &&
        (this._rb6ab95c1514a40 ||
          (this._r573b69118de2c0(e.mainContainer),
          (e.mainContainer.visible = !1),
          this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.removeChild(e.mainContainer),
          r && e.catalogViewer?._rce6d875880eb9d()),
        this._rf199be868ccb63 != null &&
          this.getCurrentLayoutCode() === "recycler" &&
          (this._rf199be868ccb63.cancel(), this._rea93b305be2f40(!1)),
        (this._rb6ab95c1514a40 = !1)));
  }
  _rd08b9e97a80f94(e = null) {
    return this._ra9bb74fb72867c(this._r483108c805ff8b(e ?? this._r8873f92b5650f9));
  }
  _ra9bb74fb72867c(e) {
    return this._windowManager != null && e?.mainContainer?.parent != null;
  }
  _r483108c805ff8b(e) {
    return this._r080e3306bd1eb6?.get(e) ?? null;
  }
  _rf7d0ef35f696bb(e) {
    return ((this._r080e3306bd1eb6 ??= new Map()), this._r483108c805ff8b(e) ?? this.createCatalogWindowState(e));
  }
  _rfba8b056e50348(e) {
    this._r8873f92b5650f9 = e;
    let r = this._rf7d0ef35f696bb(e);
    return ((this.var_283 = r.mainContainer), (this.var_189 = r.catalogViewer), r);
  }
  _r573b69118de2c0(e) {
    e == null ||
      this._rea8c97a3bd5316 ||
      (this._r5c38d4bde923bf.x === e.x && this._r5c38d4bde923bf.y === e.y) ||
      ((this._r5c38d4bde923bf = new E(e.x, e.y)), this._reee287831c3ffc());
  }
  _r00206f9cd20cb4(e) {
    e != null && this._r2e22e71564b78c(e, this._r5c38d4bde923bf);
  }
  _reee287831c3ffc() {
    if (this._r080e3306bd1eb6 != null)
      for (let e of this._r080e3306bd1eb6.values())
        this._r2e22e71564b78c(e.mainContainer, this._r5c38d4bde923bf);
  }
  _r7842253c210aea = n((e) => {
    this._rea8c97a3bd5316 || this._r573b69118de2c0(e.target);
  }, "_r7842253c210aea");
  _r2e22e71564b78c(e, r) {
    e == null ||
      r == null ||
      (e.x === r.x && e.y === r.y) ||
      ((this._rea8c97a3bd5316 = !0), (e.position = r.clone()), (this._rea8c97a3bd5316 = !1));
  }
  _r0687a3d7d098e6(e) {
    this.send(new UnkMessageComposer_1args_b772df(e));
  }
  _rb3981e1f0a7e33() {
    this.send(new UnkMessageComposer_0args_56053f());
  }
  _rd1751aa7725e1c() {
    this._r6d1a86ab14294b();
  }
  _r6d1a86ab14294b() {
    this.send(new UnkMessageComposer_0args_b10a93());
  }
  _rfed3c90eaa1f66() {
    this.RoomPreviewer != null ||
      this._roomEngine == null ||
      ((this.RoomPreviewer = new d3(this._roomEngine)),
      this.RoomPreviewer._r02eeec29a202f2(),
      this.registerUpdateReceiver(this, 1));
  }
  getCurrentLayoutCode() {
    return this.var_189?.getCurrentLayoutCode() ?? "";
  }
  isNewItemsNotificationEnabled() {
    return this.getBoolean("toolbar.new_additions.notification.enabled");
  }
  send(e) {
    this.connection?.send(e);
  }
  addMessageEvent(e) {
    this._communication != null && this._messageEvents.push(this._communication._r2e106e2349a0b6(e));
  }
  _r2c15b16e6eba6e() {
    (this.addMessageEvent(new class_1815((e) => this._r5a3c82ba407048(e))),
      this.addMessageEvent(new class_2159((e) => this.onCatalogPage(e))),
      this.addMessageEvent(new UnkMessageEvent_348055((e) => this._re56e1750c0b414(e))),
      this.addMessageEvent(new class_1831((e) => this._r607b3db6c10025(e))),
      this.addMessageEvent(new class_2599((e) => this.onActivityPoints(e))),
      this.addMessageEvent(new class_3542((e) => this._re93bff9df69f99(e))),
      this.addMessageEvent(new class_3574((e) => this._r90d4d797f72e72(e))),
      this.addMessageEvent(new UnkMessageEvent_9f9ad5((e) => this._ra6ff2f7fb48589(e))),
      this.addMessageEvent(new UnkMessageEvent_345dd7((e) => this._ra26619701bc680(e))),
      this.addMessageEvent(new UnkMessageEvent_7a147e((e) => this._r8411dd9fe9c72b(e))),
      this.addMessageEvent(new UnkMessageEvent_f762d2((e) => this._r1a9d8841aa8660(e))),
      this.addMessageEvent(new UnkMessageEvent_747af9((e) => this._re8becf0fe3264f(e))),
      this.addMessageEvent(new UnkMessageEvent_a71dbc((e) => this._r7513200b81edaf(e))),
      this.addMessageEvent(new UnkMessageEvent_4761be((e) => this._r05b6825a349355(e))),
      this.addMessageEvent(new class_2187((e) => this._r5ef05d31502c71(e))),
      this.addMessageEvent(new class_2035((e) => this._r0663b6357bb330(e))),
      this.addMessageEvent(new class_1964((e) => this._rc37b5971f43926(e))),
      this.addMessageEvent(new UnkMessageEvent_37437a((e) => this._r7badf135fd1e3f(e))),
      this.addMessageEvent(new class_1921((e) => this._r0c922f51aa663c(e))),
      this.addMessageEvent(new UnkMessageEvent_655cc8((e) => this._r0e8f42562eec90(e))),
      this.addMessageEvent(new class_2243((e) => this._r3e4bf424ec5659(e))),
      this.addMessageEvent(new UnkMessageEvent_1c4599((e) => this._r6c5fb088ef561f(e))),
      this.addMessageEvent(new UnkMessageEvent_c13e93((e) => this._ra714055cc65c98(e))),
      this.addMessageEvent(new class_2073((e) => this._r938c8496f1a947(e))),
      this.addMessageEvent(new UnkMessageEvent_69841c((e) => this._r11956cf4c51f94(e))),
      this.addMessageEvent(new UnkMessageEvent_5e011a((e) => this._r1b271fc5ba219d(e))),
      this.addMessageEvent(new UnkMessageEvent_d359bd((e) => this._r9e2381d910f522(e))),
      this.addMessageEvent(new UnkMessageEvent_7a9ed4((e) => this._r52365367a76ca3(e))),
      this.addMessageEvent(new UnkMessageEvent_e76ece((e) => this._rcbd144938d51bc(e))),
      this.addMessageEvent(new class_2086((e) => this._r9e9a2962043a9f(e))),
      this.addMessageEvent(new UnkMessageEvent_9acd66((e) => this._r2c79c9d921cb71(e))),
      this.addMessageEvent(new UnkMessageEvent_e96651((e) => this._r920765a493cbf5(e))),
      this.addMessageEvent(new UnkMessageEvent_ad699d((e) => this._r9cafa9a1789cdf(e))),
      this.addMessageEvent(new UnkMessageEvent_afe066((e) => this._r2693e69006305f(e))),
      this.addMessageEvent(new UnkMessageEvent_542707((e) => this._r7f2d6ca7b8c6b5(e))),
      this.addMessageEvent(new class_2000((e) => this._r4ac50b635d3944(e))),
      this.addMessageEvent(new class_2066((e) => this._rf9693cb2fb00a5(e))),
      this.addMessageEvent(new UnkMessageEvent_0e477d((e) => this._r42adb68520823d(e))),
      this.addMessageEvent(new UnkMessageEvent_bad8da((e) => this._r9369422ee0e0d2(e))),
      this.addMessageEvent(new class_2196((e) => this._rdd614d0a530cc3(e))),
      this.addMessageEvent(new UnkMessageEvent_7b5700((e) => this._r8db569be144279(e))),
      this.addMessageEvent(new UnkMessageEvent_12480f((e) => this._rda3f12cba7f5cc(e))),
      this.addMessageEvent(new UnkMessageEvent_f4b027((e) => this._re05aa5bfb24af7(e))));
  }
  createOffer(e, r = this._r8873f92b5650f9) {
    let t = [],
      i = this.getProductData(e.localizationId);
    for (let o of e.products) {
      let d = this.products(o._r31d173d62fa550, o.productType);
      t.push(
        new sb(
          o.productType,
          o._r31d173d62fa550,
          o.extraParam,
          this.getProductCountOverride(e.localizationId, d, o.productCount),
          i,
          d,
          this,
          o.var_4154,
          o._raba7e4532bd54d,
          o._r807decfd331c6c,
        ),
      );
    }
    if (t.length === 0 && !x0.buildersClub(e.localizationId)) return null;
    let s = new hn(
      e.offerId,
      e.localizationId,
      e._r9d17cb68dc4d9c,
      e.priceInCredits,
      e.priceInActivityPoints,
      e.activityPointType,
      e.priceInSilver,
      e.giftable,
      e.clubLevel,
      t,
      e.bundlePurchaseAllowed,
      this,
    );
    return s._r10b16f6e9cda51 != null && this._r4376182894c728(s, r) ? s : (s.dispose(), null);
  }
  _r4376182894c728(e, r) {
    return (
      r === CatalogType.NORMAL ||
      (e.pricingModel !== hn.PRICING_MODEL_BUNDLE && e.pricingModel !== hn.PRICING_MODEL_MULTI)
    );
  }
  getProductCountOverride(e, r, t) {
    return (e === "wf_storage_furni_bd" && r?.className === "wf_storage_furni1") ||
      (e === "wf_storage_coins_bd" && r?.className === "wf_storage_coins2")
      ? 5
      : t;
  }
  updatePurse() {
    if (this._localization == null) return;
    (this._localization._r43eae9731f5b27(
      "catalog.purse.creditbalance",
      "balance",
      String(this._reebadc16f8e73a.credits),
    ),
      this._localization._r43eae9731f5b27(
        "catalog.purse.pixelbalance",
        "balance",
        String(this._reebadc16f8e73a.getActivityPointsForType(et.DUCKET)),
      ));
    let e = this._reebadc16f8e73a.isVIP
      ? this._reebadc16f8e73a._ra6c4481543acf2
        ? "catalog.purse.vipdays"
        : "catalog.purse.clubdays"
      : "catalog.purse.club.join";
    this._reebadc16f8e73a.isVIP &&
      (this._localization._r43eae9731f5b27(e, "days", String(this._reebadc16f8e73a.clubPeriods)),
      this._localization._r43eae9731f5b27(e, "months", String(this._reebadc16f8e73a.clubDays)));
    for (let r of this._r080e3306bd1eb6?.values() ?? []) {
      let t = r.mainContainer;
      if (t == null) continue;
      let i = t.findChildByName("clubText");
      i != null && (i.caption = this._localization.getLocalization(e));
      let s = t.findChildByName("clubIcon");
      s != null && (s.style = this._reebadc16f8e73a._ra6c4481543acf2 ? 20 : 19);
    }
    this.events.dispatchEvent?.(new PurseUpdateEvent(PurseUpdateEvent.const_565));
  }
  setElementImage(e, r) {
    this._ree37b3bf84c60e(this.var_283, e, r);
  }
  _ree37b3bf84c60e(e, r, t) {
    let i = e?.findChildByName(r),
      s = this.assets.getAssetByName(t);
    i != null && s?.content instanceof A && a._rc31a142ba0add0(i, s.content);
  }
  _r65378e609eb27f(e) {
    switch (e) {
      case a.GET_SNOWWAR_TOKENS:
        return this._r929ad145911aae;
      case a.GET_SNOWWAR_TOKENS2:
        return this._r304df25b9999fe;
      case a.GET_SNOWWAR_TOKENS3:
        return this._rf7a12c89a2e2a6;
      default:
        return null;
    }
  }
  getCatalogWindowAssetName(e) {
    return this.useNonTabbedCatalog(e) ? "catalog_ubuntu" : "catalog_ubuntu_with_tabs";
  }
  focusSearchInput(e) {
    let r = e.findChildByName("search.input");
    r != null && (r.focus(), r._r1c386c8571c5d9(0, r.text.length));
  }
  setCatalogBusy(e, r) {
    let t = this._r483108c805ff8b(e)?.mainContainer ?? null;
    if (t == null) return;
    t.caption = r ? "${generic.loading}" : e === CatalogType.NORMAL ? "${catalog.title}" : "${builder.catalog.title}";
    let i = t.findChildByName("search_waiting_for_results_mask");
    i != null && (i.visible = r);
  }
  refreshCatalogWindowChrome(e, r) {
    if (r == null) return;
    let t = e === CatalogType.NORMAL;
    ((r.color = t ? 4296112 : 16758076), (r.caption = t ? "${catalog.title}" : "${builder.catalog.title}"));
    let i = r.findChildByName("catalog.header.background.border");
    i != null && (i.color = t ? 4281819765 : 4283320388);
    let s = r.findChildByName("catalog.header.background.body");
    s != null && (s.color = t ? 4279123794 : 4281149220);
    let o = r.findChildByName("catalog.mode.header");
    o != null && (o.visible = t);
    let d = r.findChildByName("builder.mode.header");
    d != null && (d.visible = !t);
  }
  onClearSearch = n((e = null) => {
    let r = this.var_283?.findChildByName("search.input");
    if (r == null || this.var_283 == null) return;
    ((r.text = ""), r._r1c386c8571c5d9(0, r.text.length), r.focus());
    let t = this.var_283.findChildByName("search.clear.icon");
    (t != null && (t.assetUri = "common_small_pen"),
      this.var_189?._r5362ff11d47b63 != null &&
        this.var_189._r5362ff11d47b63 > 0 &&
        this.getNodeById?._reb4d5284e2e2d6(this.var_189._r5362ff11d47b63, -1));
    let i = this.var_283.findChildByName("search.helper");
    i != null && (i.visible = !0);
  }, "onClearSearch");
  _rb70fb65563388c = n((e) => {
    let r = e.target;
    if (r == null || this.var_283 == null) return;
    if (e.type === sr.const_1081) {
      this._rbfd4915b4c1274?.stop();
      return;
    }
    ((this._rbfd4915b4c1274 ??= new UnkEventDispatcherWrapperSubclass_05394e(50, 1)),
      this._rbfd4915b4c1274.reset(),
      this._rbfd4915b4c1274.removeEventListener(DeBouncer.addEventListener, this._r48a725060f8d33),
      r.text.length >= 3 &&
        (this._rbfd4915b4c1274.addEventListener(DeBouncer.addEventListener, this._r48a725060f8d33),
        this._rbfd4915b4c1274.start()));
    let t = this.var_283.findChildByName("search.helper");
    t != null && (t.visible = r.text.length === 0);
    let i = this.var_283.findChildByName("search.clear.icon");
    (i != null && (i.assetUri = r.text.length > 0 ? "icons_close" : "common_small_pen"),
      r.text.length === 0
        ? this.onClearSearch()
        : e.keyCode === Fi.ENTER && this.performSearch(r.text));
  }, "_rb70fb65563388c");
  _r48a725060f8d33 = n((e) => {
    let r = this.var_283?.findChildByName("search.input");
    r != null && this.performSearch(r.text);
  }, "_r48a725060f8d33");
  performSearch(e) {
    if ((this._rbfd4915b4c1274?.stop(), this.var_689 == null || e == null || e.length === 0)) return;
    let r = this._r483108c805ff8b(this._r8873f92b5650f9);
    if (r?.catalogNavigator == null || r.catalogViewer == null || r.mainContainer == null) return;
    this._r2925ea840c19c4();
    let t = [],
      i = [],
      s = new Map(),
      o = a.normalizeSearchText(e);
    for (let c of this._searchEntries) {
      let f = c.furniData;
      if (
        (this._r8873f92b5650f9 === CatalogType.BUILDER && !f.availableForBuildersClub) ||
        (this._r8873f92b5650f9 === CatalogType.NORMAL && f._r726320672751b4) ||
        !a._rb26d13564279d5(c, o)
      )
        continue;
      let l = this._r91eb53969dd899(c);
      if (l != null) {
        if (
          (this._r33d31ffefacc6a(l.offerId, s),
          !a.isExcludedFromFurnitureSearchResults(f) && (i.push(l), i.length >= a.MAX_SEARCH_RESULTS_LENGTH))
        )
          break;
      } else if (this._r8873f92b5650f9 === CatalogType.BUILDER && f.furniLine !== "") {
        let b = a.normalizeSearchText(f.furniLine);
        b.length > 0 && !t.includes(b) && t.push(b);
      }
    }
    (this._localization?._r43eae9731f5b27("catalog.search.results", "count", i.length.toString()),
      this._localization?._r43eae9731f5b27("catalog.search.results", "needle", e));
    let d = r.mainContainer.findChildByName(mf.HEADER_TITLE);
    (d != null && (d.caption = "${catalog.search.header}"),
      r.catalogNavigator._rd484beef5dd276(),
      r.catalogViewer.showSearchResults(i),
      r.catalogNavigator.filter(o, t, s));
  }
  _r2925ea840c19c4() {
    if (this._r27ced3c235e917) {
      if (((this._searchEntries = []), this.var_689 != null))
        for (let e of this.var_689) {
          let r = a.resolveSearchProductCode(e),
            t = "";
          this.var_3207 && r.length > 0 && (t = this.getProductData(r)?.name ?? "");
          let i = [];
          (a._rc28935003f0937(i, e.localizedName),
            a._rc28935003f0937(i, t),
            this._searchEntries.push(new CatalogSearchEntry(e, i, r)));
        }
      this._r27ced3c235e917 = !1;
    }
  }
  _r91eb53969dd899(e) {
    let r = e.furniData,
      t = a._re93abdacd17d77,
      i = !1;
    return (
      this._r8873f92b5650f9 === CatalogType.BUILDER
        ? r.bcOfferId !== a._re93abdacd17d77 &&
          this.getNodeById?._r369c0978d14dff(r.bcOfferId, !0) != null &&
          (t = r.bcOfferId)
        : r.purchaseOfferId !== a._re93abdacd17d77 &&
            this.getNodeById?._r369c0978d14dff(r.purchaseOfferId, !0) != null
          ? (t = r.purchaseOfferId)
          : r.rentOfferId !== a._re93abdacd17d77 &&
            this.getNodeById?._r369c0978d14dff(r.rentOfferId, !0) != null &&
            ((t = r.rentOfferId), (i = !0)),
      t === a._re93abdacd17d77 ? null : new h2e(r, this, t, i, e._raeb033db5aa083)
    );
  }
  _r33d31ffefacc6a(e, r) {
    let t = this.getNodeById?._r369c0978d14dff(e, !0) ?? null;
    if (t != null) for (let i of t) r.set(i.pageId, !0);
  }
  static _rb26d13564279d5(e, r) {
    for (let t of e._rf54b6c31e2bd9e) if (t.indexOf(r) >= 0) return !0;
    return !1;
  }
  static _rc28935003f0937(e, r) {
    let t = a.normalizeSearchText(r);
    t.length > 0 && !e.includes(t) && e.push(t);
  }
  static isExcludedFromFurnitureSearchResults(e) {
    return a.startsWith(e.className, "bc_");
  }
  static startsWith(e, r) {
    return e != null && e.indexOf(r) === 0;
  }
  static normalizeSearchText(e) {
    return e == null ? "" : e.toLocaleLowerCase();
  }
  static resolveSearchProductCode(e) {
    return a.SEARCH_PRODUCT_CODE_OVERRIDES_BY_FURNI_CLASS_NAME[e.className] ?? e.className;
  }
  _r5a3c82ba407048 = n((e) => {
    let r = this._r483108c805ff8b(e._r28a444d88bee4d);
    if (r?.catalogNavigator == null || e.root == null) return;
    ((this._reb951060a8a6a1 = e._r95dea45ce27a49),
      r.catalogNavigator._ra88276d599f936(e.root),
      e._r28a444d88bee4d === this._r8873f92b5650f9 && r.catalogNavigator._rabec38a3e283e3());
    let t = r._ra2fbb073d5d666;
    switch (t._r703d0531e0e84c) {
      case r5.REQUEST_TYPE_NONE:
        this._reb951060a8a6a1 &&
        this._r621f7690e4750a &&
        !this.newAdditionsPageOpenDisabled &&
        e._r28a444d88bee4d === CatalogType.NORMAL
          ? (this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_NEW_ITEMS_SHOW)),
            this.openCatalogPage(CatalogPageName.CATALOG_PAGE_NEW_ADDITIONS))
          : r.catalogNavigator.loadFrontPage();
        break;
      case r5.REQUEST_TYPE_ID:
        (r.catalogNavigator._reb4d5284e2e2d6(t.requestId, t._r44eed779fb526e), t.resetRequest());
        break;
      case r5.REQUEST_TYPE_NAME:
        (r.catalogNavigator.openPage(t._rf98ff8b2458175), t.resetRequest());
        break;
    }
  }, "_r5a3c82ba407048");
  onCatalogPage = n((e) => {
    let r = e.getParser();
    if (r == null) return;
    let t = this._r483108c805ff8b(r._r28a444d88bee4d);
    if (t?.catalogViewer == null) return;
    let i = new mf(r.localization?.images.concat() ?? [], r.localization?.texts.concat() ?? []),
      s = [];
    for (let o of r.offers) {
      let d = this.createOffer(o, r._r28a444d88bee4d);
      d != null && s.push(d);
    }
    (r.class_2157.length > 0 && (this._r29ef2dd32b46f2 = r.class_2157.slice()),
      t.lastPageRequestId === r.pageId &&
        t.catalogViewer.showCatalogPage(
          r.pageId,
          r._rf3871e54af1151,
          i,
          s,
          r.offerId,
          r.var_3503,
        ),
      this._rf199be868ccb63 != null &&
        (this._rd08b9e97a80f94() && r._rf3871e54af1151 === "recycler" && this._rf199be868ccb63.activate(),
        this._rea93b305be2f40(
          this._rf199be868ccb63.active && this._rd08b9e97a80f94() && r._rf3871e54af1151 === "recycler",
        )),
      this.setCatalogBusy(r._r28a444d88bee4d, !1));
  }, "onCatalogPage");
  _re56e1750c0b414 = n((e) => {
    (e.newFurniDataHash !== "" && (this._sessionDataManager.newFurniDataHash = e.newFurniDataHash),
      (this._rad428a88194ae6 = !0));
    let r = this._rd08b9e97a80f94();
    if ((this.reset(), r))
      this._windowManager?.alert(
        "${catalog.alert.published.title}",
        "${catalog.alert.published.description}",
        0,
        this._r4c5be5a0962baf,
      );
    else {
      let t =
        this._localization?.getLocalization("catalog.alert.published.description") ??
        "${catalog.alert.published.description}";
      this._notifications?.addItem(t, NotificationType.INFO, "if_icon_temp_png");
    }
  }, "_re56e1750c0b414");
  refreshFurniData() {
    (this._sessionDataManager?.refreshFurniData(), (this._rad428a88194ae6 = !1));
  }
  _r607b3db6c10025 = n((e) => {
    ((this._reebadc16f8e73a.credits = e.getParser().balance),
      this.updatePurse(),
      !this._rf35aeee208e5ee &&
        this._soundManager != null &&
        this._soundManager.playSound(HabboSoundTypesEnum.SOUND_CREDIT_BALANCE),
      (this._rf35aeee208e5ee = !1),
      this.events.dispatchEvent?.(new Mo(Mo.CREDIT_BALANCE, this._reebadc16f8e73a.credits, 0)),
      this.events.dispatchEvent?.(new PurseUpdateEvent(PurseUpdateEvent.const_565)));
  }, "_r607b3db6c10025");
  onActivityPoints = n((e) => {
    ((this._reebadc16f8e73a._rb8c20786ac8048 = new Map(e.points)), this.updatePurse());
    for (let [r, t] of e.points) this.events.dispatchEvent?.(new Mo(Mo.ACTIVITY_POINT_BALANCE, t, r));
    this.events.dispatchEvent?.(new PurseUpdateEvent(PurseUpdateEvent.const_565));
  }, "onActivityPoints");
  _re93bff9df69f99 = n((e) => {
    let r = new Map(this._reebadc16f8e73a._rb8c20786ac8048);
    (r.set(e.type, e.amount),
      (this._reebadc16f8e73a._rb8c20786ac8048 = r),
      this.updatePurse(),
      this._soundManager != null &&
        e.type === et.DUCKET &&
        this._soundManager.playSound(HabboSoundTypesEnum.SOUND_DUCKET_BALANCE),
      this.events.dispatchEvent?.(new Mo(Mo.ACTIVITY_POINT_BALANCE, e.amount, e.type)),
      this.events.dispatchEvent?.(new PurseUpdateEvent(PurseUpdateEvent.const_565)));
  }, "_re93bff9df69f99");
  _r90d4d797f72e72 = n((e) => {
    let r = e.getParser();
    if (
      ((this._reebadc16f8e73a.clubPeriods = r._rfb5e950766447e),
      (this._reebadc16f8e73a.clubDays = r._rcc1933b635313a),
      (this._reebadc16f8e73a._ra6c4481543acf2 = r._ra6c4481543acf2),
      (this._reebadc16f8e73a.giftsAvailable = r.giftsAvailable),
      (this._reebadc16f8e73a._r5268ed54bc12e0 = r._r5268ed54bc12e0),
      (this._reebadc16f8e73a.minutesUntilExpiration = r.minutesUntilExpiration),
      (this._reebadc16f8e73a._rc43e18432c54a9 = r._rc43e18432c54a9),
      this.updatePurse(),
      this.var_1135 != null)
    ) {
      let t = this.var_1135;
      ((this.var_1135 = null), this.openCatalogPage(t));
    }
  }, "_r90d4d797f72e72");
  _ra6ff2f7fb48589 = n((e) => {
    this._reebadc16f8e73a._r5f1a30114e44a8 = e.getParser()._r5f1a30114e44a8;
  }, "_ra6ff2f7fb48589");
  _ra26619701bc680 = n((e) => {
    this._reebadc16f8e73a._r410418cea3a606 = e.getParser()._r410418cea3a606;
  }, "_ra26619701bc680");
  _r0c922f51aa663c = n((e) => {
    this._r48abcae980ed21 = new GiftWrappingConfiguration(e);
  }, "_r0c922f51aa663c");
  _r0e8f42562eec90 = n((e) => {
    this.var_69?.receiverNotFound();
  }, "_r0e8f42562eec90");
  _r3e4bf424ec5659 = n((e) => {
    let r = e.getParser();
    (r.notEnoughCredits
      ? this.showNotEnoughCreditsAlert()
      : r.var_3236 && this.showNotEnoughActivityPointsAlert(r.activityPointType),
      this.var_69?.notEnoughCredits());
  }, "_r3e4bf424ec5659");
  _r8411dd9fe9c72b = n((e) => {
    let r = e.getParser().errorCode,
      t =
        r > 0
          ? `\${catalog.alert.purchaseerror.description.${r}}`
          : "${catalog.alert.purchaseerror.description}";
    (this._windowManager?.alert("${catalog.alert.purchaseerror.title}", t, 0, this._r4c5be5a0962baf),
      this.var_69?.dispose(),
      (this.var_69 = null));
  }, "_r8411dd9fe9c72b");
  _r1a9d8841aa8660 = n((e) => {
    let r = "${catalog.alert.purchasenotallowed.unknown.description}";
    switch (e.getParser().errorCode) {
      case 1:
        r = "${catalog.alert.purchasenotallowed.hc.description}";
        break;
    }
    this._windowManager?.alert("${catalog.alert.purchasenotallowed.title}", r, 0, this._r4c5be5a0962baf);
  }, "_r1a9d8841aa8660");
  _re8becf0fe3264f = n((e) => {
    let t = e.getParser().offer?.localizationId ?? "";
    if ((t !== "" && this.events.dispatchEvent?.(new gj(t)), this.var_69 != null)) {
      if (!this._r8dd23a7063ef2f && !this.var_69._rf81fecc8d1abc0()) {
        let i = this.var_69.getIconWrapper();
        if (i?.bitmap != null) {
          let s = new E();
          i.getGlobalPosition(s);
          let o = Me.INVENTORY;
          (this.var_69.productType === class_1803.PRODUCT_TYPE_EFFECT && (o = Me.MEMENU),
            this._toolbar?.createTransitionToIcon(o, i.bitmap.clone(), s.x, s.y));
        }
      }
      (this.var_69.ltdRaffleStarted(), this.var_69.dispose());
    }
    this.var_69 = null;
  }, "_re8becf0fe3264f");
  _r6c5fb088ef561f = n((e) => {
    let r = "${catalog.alert.voucherredeem.ok.description}";
    if (e.productName !== "") {
      let t = "catalog.alert.voucherredeem.ok.description.furni";
      (this._localization?._r43eae9731f5b27(t, "productName", e.productName),
        this._localization?._r43eae9731f5b27(t, "productDescription", e.productDescription),
        (r = `\${${t}}`));
    }
    this._windowManager?.alert("${catalog.alert.voucherredeem.ok.title}", r, 0, this._r4c5be5a0962baf);
  }, "_r6c5fb088ef561f");
  _ra714055cc65c98 = n((e) => {
    let r = `\${catalog.alert.voucherredeem.error.description.${e.errorCode}}`;
    this._windowManager?.alert("${catalog.alert.voucherredeem.error.title}", r, 0, this._r4c5be5a0962baf);
  }, "_ra714055cc65c98");
  _r7513200b81edaf = n((e) => {
    this._r6ea66982d85be6?._r5891395098af12(e);
  }, "_r7513200b81edaf");
  _r05b6825a349355 = n((e) => {
    this._r6ea66982d85be6?._rcf036808b2f54f(e);
  }, "_r05b6825a349355");
  _r5ef05d31502c71 = n((e) => {
    this._r6ea66982d85be6?.onBuyResult(e);
  }, "_r5ef05d31502c71");
  _r0663b6357bb330 = n((e) => {
    this._r6ea66982d85be6?.onCancelResult(e);
  }, "_r0663b6357bb330");
  _rc37b5971f43926 = n((e) => {
    this._r6ea66982d85be6?.onCancelAllResult(e);
  }, "_rc37b5971f43926");
  _r7badf135fd1e3f = n((e) => {
    this._r6ea66982d85be6?.onClearOwnHistoryResult(e);
  }, "_r7badf135fd1e3f");
  _r11956cf4c51f94 = n((e) => {
    this._r6ea66982d85be6 != null &&
      (this._r6ea66982d85be6._rccca8d1e540a76 = e.getParser()._rccca8d1e540a76);
  }, "_r11956cf4c51f94");
  _r938c8496f1a947 = n((e) => {
    let r = e.getParser(),
      t = new class_2201();
    ((t._r4696ae664425c4 = r._r4696ae664425c4),
      (t.offerCount = r.offerCount),
      (t._rb567756d4aca7b = r._rb567756d4aca7b),
      (t._r24b5c39dfd5190 = r._r24b5c39dfd5190),
      (t._recc94ad598552e = r._recc94ad598552e),
      (t._re3b36cc508f679 = r._re3b36cc508f679),
      (t._r0dab2cd380900c = r._r0dab2cd380900c),
      (t._r0010c2e2cf3a43 = r._r0010c2e2cf3a43),
      (t.lowestCurrentPrice = r.lowestCurrentPrice),
      (t.suggestedPrice = r.suggestedPrice),
      this._r6ea66982d85be6 && (this._r6ea66982d85be6._re67ea9f06a5cad = t));
  }, "_r938c8496f1a947");
  _r1b271fc5ba219d = n((e) => {
    this.var_2623?._r5891395098af12(e.getParser());
  }, "_r1b271fc5ba219d");
  _r9e2381d910f522 = n((e) => {
    this._rf1a3a75432178e?.onOffer(e);
  }, "_r9e2381d910f522");
  _r52365367a76ca3 = n((e) => {
    let r = e.getParser(),
      t = [];
    for (let i of r.offers) {
      let s = this.createOffer(i);
      s != null && t.push(s);
    }
    this._r71c1ea4232e320?.setInfo(r._r551d99ad913889, r._r6a9dca7b6b5588, t, r._r5e50ad5b106745);
  }, "_r52365367a76ca3");
  _r9cafa9a1789cdf = n((e) => {
    this._r6b9d53a79f8951?._r1707616b3646ca(e);
  }, "_r9cafa9a1789cdf");
  _r9e9a2962043a9f = n((e) => {
    let r = e.getParser();
    ((this._re87d247414d020 = r.furniLimit),
      (this._r3a1cfd61ecb997 = r._r87bd6f9b08388f),
      (this._r0d91819934491d = r.secondsLeft),
      (this._r970d44e0b36793 = _ia411d8d8194a3a()),
      (this._r3ddf6d39c19ffc = r._rbe3666708bc651),
      ur.available && ur.call("FlashExternalInterface.updateBuildersClub", this._r0d91819934491d > 0),
      this._ra1852c49234b61(),
      this.refreshBuilderStatus());
  }, "_r9e9a2962043a9f");
  _r2c79c9d921cb71 = n((e) => {
    ((this._r4c21e116c8b7c6 = e.getParser().furniCount), this._ra1852c49234b61(), this.refreshBuilderStatus());
  }, "_r2c79c9d921cb71");
  _r920765a493cbf5 = n((e) => {
    let t = e.getParser()._r71cca206cb0123,
      i = t?.products?.[0] ?? null;
    if (t == null || i == null) return;
    i.var_4154 &&
      this.var_189?.currentPage?._r773ad58eab4f24(t.offerId, i._r807decfd331c6c);
    let s = this.createOffer(t);
    s == null ||
      this.var_189?.currentPage == null ||
      ((s.page = this.var_189.currentPage),
      this.var_189.currentPage.dispatchWidgetEvent(new UnkClass_dfee61(s)),
      s.product?.productType === class_1803.PRODUCT_TYPE_ITEM &&
        this.var_189.currentPage.dispatchWidgetEvent(new SetExtraPurchaseParameterEvent(s.product.extraParam)),
      this._r8dd23a7063ef2f && this._ra7db14098ae875 != null && (this._ra7db14098ae875 = s));
  }, "_r920765a493cbf5");
  _rdd614d0a530cc3 = n((e) => {
    if (e.getParser().result === 1)
      this._windowManager?.alert(
        "${catalog.alert.purchaseerror.title}",
        "${notification.nft.purchase.error}",
        0,
        null,
      );
    else {
      let i = (this.var_69?.getNftImage() ?? null)?.productInfo ?? null,
        s = i != null ? (this.var_195?.getProductName(i) ?? "unknown") : "unknown",
        o =
          this._localization?.getLocalizationWithParams("notifications.text.purchase.ok", "", "productName", s) ??
          `Purchased ${s}`;
      this._notifications?.addItem(o, NotificationType.INFO, "icon_curator_stamp_large_png");
    }
    (this.var_69?.dispose(), (this.var_69 = null));
  }, "_rdd614d0a530cc3");
  _r8db569be144279 = n((e) => {
    this.var_69?.ltdRaffleEnded();
  }, "_r8db569be144279");
  _rda3f12cba7f5cc = n((e) => {
    (this.var_69?.ltdRaffleStarted(),
      this.var_69?.dispose(),
      (this.var_69 = null));
    let r = `notification.raffle.${e.getParser()._ra92b61bebbd953 ? "won" : "lost"}`,
      t = this._localization?.getLocalization(r, r) ?? r;
    this._notifications?.addItem(t, NotificationType.LTD);
  }, "_rda3f12cba7f5cc");
  _rcbd144938d51bc = n((e) => {
    if (this.var_189 == null) return;
    let r = e.getParser();
    this.var_189.dispatchWidgetEvent(new UnkClass_7d032b(r.result, r._r549e697cdd257f));
  }, "_rcbd144938d51bc");
  _r9369422ee0e0d2 = n((e) => {
    let r = e.getParser();
    this._r74d2483338cb59.remove(r._raeb033db5aa083);
    let t = r._rdb6847933cfd17;
    t.length !== 0 &&
      (this._r74d2483338cb59.add(r._raeb033db5aa083, t.slice()),
      this.var_189?.dispatchWidgetEvent(new UnkClass_746187(r._raeb033db5aa083, t.slice())));
  }, "_r9369422ee0e0d2");
  _r2693e69006305f = n((e) => {
    ((this._r71884544a9b670 = e.getParser()._rc94facdba94e66), this._utils.resolveBundleDiscountFlatPriceSteps());
  }, "_r2693e69006305f");
  _r7f2d6ca7b8c6b5 = n((e) => {
    (this._windowManager?.alert(
      "${catalog.alert.limited_edition_sold_out.title}",
      "${catalog.alert.limited_edition_sold_out.message}",
      0,
      this._r4c5be5a0962baf,
    ),
      this.var_69?.dispose(),
      (this.var_69 = null));
  }, "_r7f2d6ca7b8c6b5");
  _r4ac50b635d3944 = n((e) => {
    let r = e.getParser();
    r == null ||
      this._rf199be868ccb63 == null ||
      this._rf199be868ccb63.setSystemStatus(r._r17ddb910d8a9c9, r._ra1cb9c841377f8);
  }, "_r4ac50b635d3944");
  _rf9693cb2fb00a5 = n((e) => {
    let r = e.getParser();
    r == null ||
      this._rf199be868ccb63 == null ||
      this._rf199be868ccb63.setFinished(r._r27f114ab0f7883, r._rdabad64e195dc8);
  }, "_rf9693cb2fb00a5");
  _r42adb68520823d = n((e) => {
    let r = e.getParser();
    r == null || this._rf199be868ccb63 == null || this._rf199be868ccb63._r017b617c0a77a3(r._r6521049cc02076);
  }, "_r42adb68520823d");
  _re05aa5bfb24af7 = n((e) => {
    let r = e.getParser();
    ((this._r929ad145911aae = null), (this._r304df25b9999fe = null), (this._rf7a12c89a2e2a6 = null));
    for (let t of r.offers) {
      let i = new Nm(
        t.offerId,
        t.localizationId,
        t.priceInCredits,
        t.priceInActivityPoints,
        t.activityPointType,
      );
      switch (t.localizationId) {
        case a.GET_SNOWWAR_TOKENS:
          this._r929ad145911aae = i;
          break;
        case a.GET_SNOWWAR_TOKENS2:
          this._r304df25b9999fe = i;
          break;
        case a.GET_SNOWWAR_TOKENS3:
          this._rf7a12c89a2e2a6 = i;
          break;
      }
    }
  }, "_re05aa5bfb24af7");
  onWindowClose = n(() => {
    this._rc0e7e3a1e7728f();
  }, "onWindowClose");
  _r2e8ee6747a8a2b = n((e) => {
    switch (e.type) {
      case RoomSessionEvent.const_1398:
        ((this._r32ecb4fc276afd = e.session._r9ab0d525741546), this._rf199be868ccb63?._r951f64a31ecf46(!0));
        break;
      case RoomSessionEvent.const_215:
        ((this._r32ecb4fc276afd = !1), this._rf199be868ccb63?._r951f64a31ecf46(!1));
        break;
      default:
        break;
    }
    this._ra3a28e42241d01();
  }, "_r2e8ee6747a8a2b");
  _rbaf4287d28cc99 = n((e) => {
    if (!this._r8dd23a7063ef2f || e.type !== RoomEngineObjectEvent.PLACED_ON_USER) return;
    let t =
      (this._roomSessionManager?.getSession(e.roomId) ?? null)?.getUserDataByIndex.userDataManager(e.objectId)
        ?.name ?? null;
    (this._ra0483ebe942dfa?._r953e33111bd217(!0, t), this._r7067b019dcb57d(!1));
  }, "_rbaf4287d28cc99");
  _r86223976013659 = n((e) => {
    if (
      !this._r8dd23a7063ef2f ||
      e.type !== RoomEngineObjectEvent.PLACED ||
      e._r07cbd1ea4ec403 !== RoomObjectPlacementSource.CATALOG ||
      this._ra7db14098ae875 == null
    )
      return;
    let r = this._ra7db14098ae875,
      t = this._ra0483ebe942dfa,
      i = e._r176bfeda3ea21e;
    if (e.category === RoomObjectCategoryEnum.const_909)
      switch (r.product?.furnitureData?.className ?? "") {
        case "floor":
        case "wallpaper":
        case "landscape":
          i = e._rc4f9efa2c236ab || e._r8b4764feb43833;
          break;
        default:
          i = e._r176bfeda3ea21e;
          break;
      }
    if (!i) {
      this._r7067b019dcb57d();
      return;
    }
    if (this._r8873f92b5650f9 === CatalogType.BUILDER) {
      let s = r.page?.pageId ?? -1;
      switch (
        (s === qu.DUMMY_PAGE_ID_FOR_OFFER_SEARCH &&
          (s =
            (this.getNodeById?._r369c0978d14dff(r.offerId, !0) ?? null)?.[0]
              ?.pageId ?? s),
        e.category)
      ) {
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
          this.send(new class_1992(s, r.offerId, r.product?.extraParam ?? "", e.x, e.y, e.direction));
          break;
        case RoomObjectCategoryEnum.const_909:
          this.send(new class_1776(s, r.offerId, r.product?.extraParam ?? "", e._r8a8bd2d04c661f));
          break;
      }
      let o = this._r5bff6b375a597a;
      (this._r7067b019dcb57d(!1), o ? this._r554b9a058961c3(t, r, !0) : this._r069ad4a1743fb5());
      return;
    }
    ((this._re50efdae0c9388 = new PlacedObjectPurchaseData(
      e.roomId,
      e.objectId,
      e.category,
      e._r8a8bd2d04c661f,
      e.x,
      e.y,
      e.direction,
      r,
    )),
      this._ra0483ebe942dfa?._r953e33111bd217(!0, null),
      this._r7067b019dcb57d(!1));
  }, "_r86223976013659");
  IIDHabboCatalog = n((e) => {
    if (e.type === HabboToolbarEvent.TOOLBAR_CLICK)
      switch (e._re9c693c8b69b04) {
        case Me.CATALOGUE:
          this.buildersClubEnabled(CatalogType.NORMAL);
          break;
        case Me.BUILDER:
          this.buildersClubEnabled(CatalogType.BUILDER);
          break;
      }
  }, "IIDHabboCatalog");
  getBuilderFurniPlaceableStatus(e) {
    if (
      !e.isRoomOwner &&
      e.isGuildRoom &&
      !this.getBoolean("builders.club.furniture.placement.group.room.enabled")
    )
      return UnkConstants_7f58a6._rbc8ee12966cb3e;
    if (e._rea9739215487be < RoomControllerLevelEnum.GUILD_ADMIN) return UnkConstants_7f58a6._r521743e2877155;
    if (this._rc7d5aba394e3cd <= 0 && this._roomEngine != null) {
      let r = this._roomEngine.getRoomObjectCount(e.roomId, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
      for (let t = 0; t < r; t++) {
        let i = this._roomEngine.getRoomObjectWithIndex(e.roomId, t, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER),
          s = i != null ? e.getUserDataByIndex.userDataManager(i.getId()) : null;
        if (
          s != null &&
          s.type === RoomObjectTypeEnum.OBJECT_TYPE_USER &&
          s._r2fdf1f24b1e612 !== e.ownUserRoomId &&
          !s.isModerator
        )
          return UnkConstants_7f58a6._r256230159e7116;
      }
    }
    return UnkConstants_7f58a6._rb2488512c80ca7;
  }
  _ra3a28e42241d01() {
    for (let e of this._r080e3306bd1eb6?.values() ?? []) this._r71b5cbe9886f15(e);
  }
  _r71b5cbe9886f15(e) {
    e?.catalogViewer?.currentPage?.dispatchWidgetEvent(new UnkClass_c4d6c8(CatalogWidgetEventEnum.ROOM_CHANGED));
  }
  _ra1852c49234b61() {
    for (let e of this._r080e3306bd1eb6?.values() ?? [])
      e.catalogViewer?.currentPage?.dispatchWidgetEvent(new UnkClass_c4d6c8(CatalogWidgetEventEnum.const_1374));
  }
  refreshBuilderStatus() {
    if (this._localization == null) return;
    let e = this._rc7d5aba394e3cd,
      r = this._rf1a5ad3d8e0dd7;
    (this.var_3327 && e <= 0 && r > 0
      ? this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_BUILDER_MEMBERSHIP_IN_GRACE))
      : this._r780872c4c19468 &&
        r <= 0 &&
        this.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_BUILDER_MEMBERSHIP_EXPIRED)),
      (this.var_3327 = e > 0),
      (this._r780872c4c19468 = r > 0));
    let t = `builder.header.status.${this.var_3327 ? "member" : this._r780872c4c19468 ? "grace" : "trial"}`,
      i = this._localization.getLocalization(t);
    this._localization._r43eae9731f5b27("builder.header.title", "bcstatus", i);
    let s = this.var_3327
      ? ra.getFriendlyTime(this._localization, e)
      : this._r780872c4c19468
        ? ra.getFriendlyTime(this._localization, r)
        : i;
    (this._localization._r43eae9731f5b27(
      "builder.header.status.membership",
      "duration",
      `<font color="#ff8d00"><b>${s}</b></font>`,
    ),
      this._localization._r43eae9731f5b27(
        "builder.header.status.limit",
        "count",
        `<font color="#ff8d00"><b>${this._r4c21e116c8b7c6}</b></font>`,
      ),
      this._localization._r43eae9731f5b27(
        "builder.header.status.limit",
        "limit",
        `<font color="#ff8d00"><b>${this._re87d247414d020}</b></font>`,
      ),
      (this._rd4890233524473 = _ia411d8d8194a3a()));
    for (let o of this._r080e3306bd1eb6?.values() ?? [])
      o._r28a444d88bee4d != null && this.refreshCatalogWindowChrome(o._r28a444d88bee4d, o.mainContainer);
  }
  _r4c5be5a0962baf = n((...e) => {
    e[0]?.dispose?.();
  }, "_r4c5be5a0962baf");
  _r7067b019dcb57d(e = !0) {
    (e && this._r8dd23a7063ef2f && this._r9f4f48d3e845d5(),
      (this._r8dd23a7063ef2f = !1),
      (this._r5bff6b375a597a = !1),
      (this._ra7db14098ae875 = null),
      (this._ra0483ebe942dfa = null));
  }
  _r5b66fd8c34c30c() {
    this._ra7db14098ae875 != null &&
      (this._roomEngine?._r3840271e334f01(),
      (this._r8dd23a7063ef2f = !1),
      (this._ra7db14098ae875 = null));
  }
}

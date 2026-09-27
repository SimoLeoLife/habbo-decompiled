// Estratto da HabboAirLauncher.deobf.js, riga 196289.

class a {
  constructor(e, r, t, i, s, o, d, c = -1) {
    this._r4960e25b9d8439 = e;
    this.var_2762 = r;
    this._r7e8f0d3598b9fa = t;
    this._localization = i;
    this._offers = s;
    this._catalog = o;
    this._r07fc277ec6d686 = d;
    for (let f of this._offers) f.page = this;
    ((this._mode = c === -1 ? a.MODE_NORMAL : c), this.init());
  }
  static {
    n(this, "_i4e8a8f972ea2c9");
  }
  static _rc4268fc2de06b2 = "layout_";
  static MODE_NORMAL = 0;
  static _r0d1a664a7fc91e = 1;
  _layout = null;
  _window = null;
  _r89f7688b2a17aa = [];
  _re29f9c96bb63a0 = new EventDispatcherWrapper(this);
  _r81c3d1c58eca92 = 0;
  _rf1fdc2aed514fc = null;
  _mode;
  get window() {
    return this._window;
  }
  get viewer() {
    return this._r4960e25b9d8439;
  }
  get pageId() {
    return this._mode === a._r0d1a664a7fc91e ? qu.DUMMY_PAGE_ID_FOR_OFFER_SEARCH : this.var_2762;
  }
  get _rf3871e54af1151() {
    return this._r7e8f0d3598b9fa;
  }
  get offers() {
    return this._offers;
  }
  get localization() {
    return this._localization;
  }
  get links() {
    return this._localization._re718a5cdc8fc2f(this._r7e8f0d3598b9fa);
  }
  get _r122eff707ac5c0() {
    return this._localization._r122eff707ac5c0(this._r7e8f0d3598b9fa);
  }
  get var_3503() {
    return this._r07fc277ec6d686;
  }
  get _r5fa793e5f07ae1() {
    return this._r7e8f0d3598b9fa !== "sold_ltd_items";
  }
  set _r8981f7c89eabb0(e) {
    this._r81c3d1c58eca92 = e;
  }
  get mode() {
    return this._mode;
  }
  get _r1db0fa6d0cb8a7() {
    return this._r4960e25b9d8439._r28a444d88bee4d === CatalogType.BUILDER;
  }
  _rdee997211ca56c(e) {
    if (this._rf1fdc2aed514fc != null && e > -1)
      for (let r of this._offers)
        r.offerId === e && r.gridItem != null && this._rf1fdc2aed514fc.select(r.gridItem, !0);
    if (this._window?.findChildByName(CatalogWidgetEnum.TROPHY) != null) {
      let r = this._window.findChildByName("input_text");
      (r?.focus(), r?.activate());
    }
  }
  dispose() {
    for (let e of this._r89f7688b2a17aa) e.dispose();
    ((this._r89f7688b2a17aa = []), (this._rf1fdc2aed514fc = null), this._localization.dispose());
    for (let e of this._offers) e.dispose();
    ((this._offers = []),
      this._window?.dispose(),
      (this._window = null),
      (this._re29f9c96bb63a0 = new EventDispatcherWrapper(this)),
      (this._r4960e25b9d8439 = null),
      (this._layout = null),
      (this.var_2762 = 0),
      (this._r7e8f0d3598b9fa = ""),
      (this._r07fc277ec6d686 = !1));
  }
  init() {
    this.createWindow(this._rf3871e54af1151) && this._rf7d93b7b0779a6();
  }
  closed() {
    for (let e of this._r89f7688b2a17aa) e.closed();
  }
  dispatchWidgetEvent(e) {
    return this._re29f9c96bb63a0.dispatchEvent(e);
  }
  _r6e01b87c098f94(e, r = !1) {
    if (r) for (let t of this._offers) t.dispose();
    this._offers = e;
  }
  _r773ad58eab4f24(e, r) {
    for (let t of this._offers)
      if (t.offerId === e && t.product != null) {
        ((t.product._r807decfd331c6c = r), this._re29f9c96bb63a0.dispatchEvent(new _ia32e0c459b96a3(t)));
        return;
      }
  }
  createWindow(e) {
    let r = this._r4960e25b9d8439.catalog;
    e === "frontpage4" && (e = "frontpage_featured");
    let t = `${a._rc4268fc2de06b2}${e}`;
    this._r4960e25b9d8439._r8bf0e1ea3f9bbc.indexOf("UBUNTU") > -1
      ? r.assets.hasAsset(t) || (t = `old_${t}`)
      : (t = `old_${t}`);
    let i = r.assets.getAssetByName(t) ?? null;
    if (!(i instanceof Df)) return !1;
    let s = i.content;
    return s instanceof rr
      ? ((this._layout = s),
        (this._window = r.windowManager.buildFromXML(this._layout)),
        this._window != null)
      : !1;
  }
  _rf7d93b7b0779a6() {
    (this._r846add1ba0dfb1(this._window), this._r3e120efac529ed());
  }
  _r846add1ba0dfb1(e) {
    if (e != null)
      for (let r = 0; r < e.numChildren; r++) {
        let t = e.getChildAt(r);
        t != null && (this.createWidget(t), this._r846add1ba0dfb1(t));
      }
  }
  createWidget(e) {
    switch (e.name) {
      case CatalogWidgetEnum.ACTIVITY_POINT_DISPLAY:
        this._r89f7688b2a17aa.push(new ActivityPointDisplayCatalogWidget(e));
        break;
      case CatalogWidgetEnum.ADDON_BADGE_VIEW:
        this._r89f7688b2a17aa.push(new _ie7af1745a8d65a(e));
        break;
      case CatalogWidgetEnum.BUILDER:
        this._r89f7688b2a17aa.push(new BuilderCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.const_738:
        this._r89f7688b2a17aa.push(new BuilderAddonsCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.const_703:
        this._r89f7688b2a17aa.push(new BuilderLoyaltyCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.const_1063:
        this._r89f7688b2a17aa.push(new BuilderSubscriptionCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.const_1397:
        this._r89f7688b2a17aa.push(new BundleGridViewCatalogWidget(e));
        break;
      case CatalogWidgetEnum.BUNDLE_PURCHASE_EXTRA_INFO:
        this._r89f7688b2a17aa.push(new E5e(e, this._catalog));
        break;
      case CatalogWidgetEnum.ITEM_GRID:
        this._rf1fdc2aed514fc == null &&
          ((this._rf1fdc2aed514fc = new ItemGridCatalogWidget(
            e,
            this._catalog.sessionDataManager,
            this._r4960e25b9d8439._r28a444d88bee4d,
          )),
          this._r89f7688b2a17aa.push(this._rf1fdc2aed514fc));
        break;
      case CatalogWidgetEnum.FIRST_PRODUCT_AUTO_SELECTOR:
        this._r89f7688b2a17aa.push(new _ia904a4c6661ba7(e));
        break;
      case CatalogWidgetEnum.CLUB_BUY:
        this._r89f7688b2a17aa.push(new ClubBuyCatalogWidget(e));
        break;
      case CatalogWidgetEnum.CLUB_GIFTS:
        this._catalog._r3d3d3373a547ae != null &&
          this._r89f7688b2a17aa.push(
            new k5e(e, this._catalog._r3d3d3373a547ae, this._catalog),
          );
        break;
      case CatalogWidgetEnum.COLOUR_GRID:
        this._r89f7688b2a17aa.push(new ColourGridCatalogWidget(e));
        break;
      case CatalogWidgetEnum.FEATURED_ITEMS:
        this._r89f7688b2a17aa.push(new FeaturedItemsCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.const_745:
        this._r89f7688b2a17aa.push(new BuyGuildWidget(e));
        break;
      case CatalogWidgetEnum.GUILD_BADGE_VIEW:
        this._catalog._rdfa5f197522a60 != null &&
          this._r89f7688b2a17aa.push(new _i7f62a883adbdc9(e, this._catalog._rdfa5f197522a60));
        break;
      case CatalogWidgetEnum.GUILD_FORUM_SELECTOR:
        this._catalog._rdfa5f197522a60 != null &&
          this._r89f7688b2a17aa.push(new GuildForumSelectorCatalogWidget(e, this._catalog._rdfa5f197522a60));
        break;
      case CatalogWidgetEnum.GUILD_SELECTOR:
        this._catalog._rdfa5f197522a60 != null &&
          this._r89f7688b2a17aa.push(new Ez(e, this._catalog._rdfa5f197522a60));
        break;
      case CatalogWidgetEnum.MARKET_PLACE:
        this._r89f7688b2a17aa.push(new D5e(e));
        break;
      case CatalogWidgetEnum.MARKET_PLACE_OWN_ITEMS:
        this._r89f7688b2a17aa.push(new L5e(e));
        break;
      case CatalogWidgetEnum.LOYALTY_VIP_BUY:
        this._r89f7688b2a17aa.push(new LoyaltyVipBuyCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.MAD_MONEY:
        this._r89f7688b2a17aa.push(new MadMoneyCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.NEW_PETS:
        this._r89f7688b2a17aa.push(new N5e(e, this._catalog));
        break;
      case CatalogWidgetEnum.PET_PREVIEW:
        this._r89f7688b2a17aa.push(new O5e(e, this._catalog));
        break;
      case CatalogWidgetEnum.PETS:
        this._r89f7688b2a17aa.push(new PetsCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.PURCHASE:
        this._r89f7688b2a17aa.push(new PurchaseCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.RECYCLER:
        this._r89f7688b2a17aa.push(new RecyclerCatalogWidget(e));
        break;
      case CatalogWidgetEnum.RECYCLER_PRIZES:
        this._r89f7688b2a17aa.push(new $5e(e));
        break;
      case CatalogWidgetEnum.REDEEM_ITEM_CODE:
        this._r89f7688b2a17aa.push(new RedeemItemCodeCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.ROOMADS:
        this._r89f7688b2a17aa.push(new RoomAdsCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.ROOM_PREVIEW:
        this._r89f7688b2a17aa.push(new RoomPreviewCatalogWidget(e));
        break;
      case CatalogWidgetEnum.PRODUCT_VIEW:
        this._r89f7688b2a17aa.push(new Om(e, this._catalog));
        break;
      case CatalogWidgetEnum.SINGLE_VIEW:
        this._r89f7688b2a17aa.push(new _i6f8f8f178369b3(e, this._catalog));
        break;
      case CatalogWidgetEnum.SIMPLE_PRICE:
        this._r89f7688b2a17aa.push(new SimplePriceCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.SOLD_LIMITED_ITEMS:
        this._r89f7688b2a17aa.push(new _ie6f44ff569d9f3(e, this._catalog));
        break;
      case CatalogWidgetEnum.SONG_DISK_PRODUCT_VIEW:
        this._r89f7688b2a17aa.push(new SongDiskProductViewCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.SPACES_NEW:
        this._r89f7688b2a17aa.push(
          new SpacesNewCatalogWidget(e, this._catalog.sessionDataManager, this._r4960e25b9d8439._r28a444d88bee4d),
        );
        break;
      case CatalogWidgetEnum.SPINNER:
        this._r89f7688b2a17aa.push(new i2e(e, this._catalog));
        break;
      case CatalogWidgetEnum.SPECIAL_INFO:
        this._r89f7688b2a17aa.push(new SpecialInfoWidget(e));
        break;
      case CatalogWidgetEnum.TEXT_INPUT:
        this._r89f7688b2a17aa.push(new TextInputCatalogWidget(e));
        break;
      case CatalogWidgetEnum.TOTAL_PRICE:
        this._r89f7688b2a17aa.push(new o2e(e, this._catalog));
        break;
      case CatalogWidgetEnum.TRAX_PREVIEW:
        this._r89f7688b2a17aa.push(new TraxPreviewCatalogWidget(e, this._catalog.musicController));
        break;
      case CatalogWidgetEnum.TROPHY:
        this._r89f7688b2a17aa.push(new c2e(e, this._catalog));
        break;
      case CatalogWidgetEnum.const_919:
        this._r89f7688b2a17aa.push(new f2e(e, this._catalog));
        break;
      case CatalogWidgetEnum.USER_BADGE_SELECTOR:
        this._r89f7688b2a17aa.push(new l2e(e, this._catalog));
        break;
      case CatalogWidgetEnum.VIP_BUY:
        this._r89f7688b2a17aa.push(new VipBuyCatalogWidget(e, this._catalog));
        break;
      case CatalogWidgetEnum.VIP_GIFT:
        this._r89f7688b2a17aa.push(new VipBuyCatalogWidget(e, this._catalog, !0));
        break;
      case CatalogWidgetEnum.WARNING:
        this._r89f7688b2a17aa.push(new WarningCatalogWidget(e));
        break;
    }
  }
  _r3e120efac529ed() {
    let e = [];
    for (let r of this._r89f7688b2a17aa)
      ((r.page = this), (r.events = this._re29f9c96bb63a0), r.init() || e.push(r));
    (this._rdd4a2e4a0b11f2(e),
      this.initializeLocalizations(),
      this._re29f9c96bb63a0.dispatchEvent(new _ic4d6c8d627ab4e(CatalogWidgetEventEnum.WIDGETS_INITIALIZED)));
  }
  initializeLocalizations() {
    if (this._window == null) return;
    let e = new LocalizationCatalogWidget(this._window, this._catalog);
    (this._r89f7688b2a17aa.push(e), (e.page = this), (e.events = this._re29f9c96bb63a0), e.init());
  }
  _rdd4a2e4a0b11f2(e) {
    if (!(e.length === 0 || this._window == null))
      for (let r of e) {
        r.window?.parent === this._window &&
          (this._window.removeChild(r.window), r.window.dispose());
        let t = this._r89f7688b2a17aa.indexOf(r);
        (t >= 0 && this._r89f7688b2a17aa.splice(t, 1), r.dispose());
      }
  }
}

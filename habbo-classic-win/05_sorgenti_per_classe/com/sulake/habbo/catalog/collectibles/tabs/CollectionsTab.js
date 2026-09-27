// Extracted from HabboAirLauncher.deobf.js, line 175020.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/CollectionsTab.as
// Obfuscated name: _ifc66690c58aba6

class a {
  constructor(e, r) {
    this.var_1128 = e;
    this.var_195 = r;
    ((this.var_121 = this.var_1128.window.findChildByName("collectionsContainer")),
      (this._r97fe170259a095 = this.var_121?.findChildByName("navigationList")),
      (this._re746fd66b8757f =
        this._r97fe170259a095?.removeListItem(this._r97fe170259a095.getListItemByName("item_template")) ??
        null));
    let t = this.var_121?.findChildByName("itemgrid_collection");
    ((this._r096fd448614784 = t?.getGridItemAt(0)), t?.removeGridItems());
    let i = this.var_121?.findChildByName("product_info_list");
    ((this._rf9f5e4699a1dcc = i?.getListItemAt(0)),
      i?.removeListItems(),
      this.setPlaceholder(!1),
      this._r7a5132a0911745(),
      this.var_1128._rc3b66f9fcdb46a != null &&
        this.initializeWallets(this.var_1128._rc3b66f9fcdb46a),
      this.walletSelection?.addEventListener(y.const_238, this._r6a8764040cc37d),
      this.populateSortOptions(),
      this.sortSelection?.addEventListener(y.const_238, this._r25b90d018b9e83),
      this.searchInput?.addEventListener(y.WINDOW_EVENT_CHANGE, this._rd5823ad103e462),
      this.clearSearchButton?.addEventListener(u.CLICK, this.onClearSearchAction),
      (this.var_2022 = this.var_121?.findChildByName("bg_star")),
      (this._loadingIcon = this.var_121?.findChildByName("loading_icon")),
      this.controller.registerUpdateReceiver(this, 1));
  }
  static {
    n(this, "CollectionsTab");
  }
  static BG_STAR_ROTATE_SPEED = 20;
  static var_2640 = 90;
  var_121 = null;
  _r97fe170259a095 = null;
  _r4f04a6977ae453 = [];
  _re746fd66b8757f = null;
  _rbbaf717d855fdd = !1;
  _messageEvents = null;
  _r9abb6e339b7a78 = null;
  _rc526b917cfc22a = null;
  var_2022 = null;
  _loadingIcon = null;
  var_1306 = !1;
  _r096fd448614784 = null;
  _rf9f5e4699a1dcc = null;
  _rd7dd75469d5bdd = !1;
  _rfa899312d4ac20 = [];
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get controller() {
    return this.var_195;
  }
  get activeWallet() {
    return this.var_1128.activeWallet;
  }
  get _r590f6e2a9cf144() {
    return this._re746fd66b8757f;
  }
  get _r9fe4703edef6d2() {
    return this._r096fd448614784;
  }
  get _rb5f1bf2b6db118() {
    return this._rf9f5e4699a1dcc;
  }
  _rcc74fafb9df65a(e) {
    this.initializeWallets(e);
  }
  set activeWallet(e) {
    let r = this.var_1128._rc3b66f9fcdb46a ?? [],
      t = e != null ? r.indexOf(e) : -1;
    if (!(t === -1 && e != null)) {
      if (((this._rd7dd75469d5bdd = !0), this.walletSelection != null)) {
        this.walletSelection.selection = t;
        let s = this.walletSelection.enumerateSelection()[t] ?? "";
        s.length > 19 && (this.walletSelection.caption = `${s.substring(0, 19)}...`);
      }
      ((this._rd7dd75469d5bdd = !1), this.setPlaceholder(!1), this._r76eaaf235150d3(e));
    }
  }
  _r373e7f2643c08c(e) {
    this._r9abb6e339b7a78 !== e &&
      (this._r9abb6e339b7a78?.deactivate(),
      this._rc526b917cfc22a?.dispose(),
      (this._r9abb6e339b7a78 = e),
      this.collectionContainer != null &&
        (this._rc526b917cfc22a = new a8e(
          this,
          this.collectionContainer,
          this._r9abb6e339b7a78.nftCollection,
        )),
      this._r9abb6e339b7a78.activate());
  }
  _r036314013a3102() {
    this.controller.catalog.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.COLLECTIBLES_CLAIM_WAIT));
  }
  update(e) {
    if (!this._disposed) {
      if (this.var_1306) {
        let r = a.BG_STAR_ROTATE_SPEED * (e / 1e3);
        (this.var_2022 != null &&
          ((this.var_2022.rotation += r),
          (this.var_2022.rotation %= 360),
          this.var_2022.invalidate()),
          this._rc526b917cfc22a?._rb8433e661126ff(!1, e));
      } else if (this._loadingIcon != null) {
        let r = a.var_2640 * (e / 1e3);
        ((this._loadingIcon.rotation += r),
          (this._loadingIcon.rotation %= 360),
          this._loadingIcon.invalidate());
      }
    }
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.controller.removeUpdateReceiver(this),
      this.walletSelection?.removeEventListener(y.const_238, this._r6a8764040cc37d),
      this.sortSelection?.removeEventListener(y.const_238, this._r25b90d018b9e83),
      this.searchInput?.removeEventListener(y.WINDOW_EVENT_CHANGE, this._rd5823ad103e462),
      this.clearSearchButton?.removeEventListener(u.CLICK, this.onClearSearchAction),
      this._rc526b917cfc22a?.dispose(),
      (this._rc526b917cfc22a = null),
      this._r1c2e26edd166d9(),
      this.removeMessageEvents());
  }
  _r7a5132a0911745() {
    this._messageEvents = [
      new UnkMessageEvent_563d85(this._rb09394cfcacd4b),
      new UnkMessageEvent_cc8083(this._r4b671d5458b7ce),
      new UnkMessageEvent_40791a(this._r99f9af73e910ea),
    ];
    for (let e of this._messageEvents) this.var_195.addMessageEvent(e);
  }
  initializeWallets(e) {
    let r = this.walletSelection;
    if (r != null) {
      if (e == null || e.length === 0) {
        ((r.color = 13421772), r.disable());
        return;
      }
      ((r.color = 16777215),
        r.enable(),
        r.populate(e.map((t) => (t === this.var_1128._rfaeabc5d3afae7 ? x1.STARDUST_WALLET_DISPLAY_NAME : t))));
    }
  }
  populateSortOptions() {
    this.sortSelection?.populate([
      this.controller.localizationManager.getLocalization("collectibles.sort.default", "Default"),
      this.controller.localizationManager.getLocalization("collectibles.sort.progress", "Progress"),
      this.controller.localizationManager.getLocalization("collectibles.sort.score", "Score"),
    ]);
  }
  _r25b90d018b9e83 = n((e) => {
    this._rc894815a283a99();
  }, "_r25b90d018b9e83");
  _rc894815a283a99() {
    this._r1c2e26edd166d9();
    let e = [...this._rfa899312d4ac20];
    this.sortSelection?.selection === 1
      ? (e = this._r5085a96fb03d4e(e))
      : this.sortSelection?.selection === 2
        ? (e = this._rb1f9028909e6d4(e))
        : (e = this._r397c956663fb1f(e));
    for (let r of e) {
      let t = new CollectionsNavigationNodeRenderer(this, r);
      (t.window != null && this._r97fe170259a095?.addListItem(t.window), this._r4f04a6977ae453.push(t));
    }
    this._r5aff398fbdfa37();
  }
  _rd5823ad103e462 = n((e) => {
    this._r5aff398fbdfa37();
  }, "_rd5823ad103e462");
  _r5aff398fbdfa37() {
    if (this._r97fe170259a095 == null) return;
    let e = (this.searchInput?.text ?? "").toLowerCase();
    this._r97fe170259a095.autoArrangeItems = !1;
    for (let r of this._r4f04a6977ae453)
      r.window != null &&
        (r.window.visible = e.length === 0 || r.nftCollection.collectionName.toLowerCase().includes(e));
    ((this._r97fe170259a095.autoArrangeItems = !0), this.setSearchState(e.length > 0));
  }
  setSearchState(e) {
    (this.searchIcon != null && (this.searchIcon.visible = e),
      this.searchPlaceholder != null && (this.searchPlaceholder.visible = !e));
  }
  onClearSearchAction = n((e) => {
    (this.searchInput != null && (this.searchInput.text = ""), this._r5aff398fbdfa37());
  }, "onClearSearchAction");
  _r6a8764040cc37d = n((e) => {
    this._rd7dd75469d5bdd || this.var_1128._rf6d89d6f64f203(this.walletSelection?.selection ?? -1);
  }, "_r6a8764040cc37d");
  _rb09394cfcacd4b = n((e) => {
    if (!this._rbbaf717d855fdd || (this._r97fe170259a095?.numListItems ?? 0) !== 0) return;
    this._rbbaf717d855fdd = !1;
    let r = ClassUtils.getParser(e, UnkMessageParser_I_364e8a);
    r != null &&
      ((this._rfa899312d4ac20 = r?._r57eb0612ffa97a ?? []),
      this.sortSelection != null && (this.sortSelection.selection = 0),
      this._rc894815a283a99(),
      this._r4f04a6977ae453.length > 0 && this._r373e7f2643c08c(this._r4f04a6977ae453[0]),
      this.setPlaceholder(!0),
      this.collectionContainer != null && (this.collectionContainer.visible = this._r4f04a6977ae453.length > 0));
  }, "_rb09394cfcacd4b");
  _rb1f9028909e6d4(e) {
    let r = e.filter((i) => i._r3cbd2d77df46f7 > 0),
      t = e.filter((i) => i._r3cbd2d77df46f7 <= 0);
    return (r.sort((i, s) => s._r3cbd2d77df46f7 - i._r3cbd2d77df46f7), r.concat(t));
  }
  _r397c956663fb1f(e) {
    let r = e.filter((s) => s._r607ec521dda587),
      t = e.filter((s) => s._r8d537e63595adf && !s._r607ec521dda587 && !s._r9455211ba525ca()),
      i = e.filter((s) => !r.includes(s) && !t.includes(s));
    return r.concat(t, i);
  }
  _r5085a96fb03d4e(e) {
    let r = e.filter((i) => i.progressPercentage > 0),
      t = e.filter((i) => i.progressPercentage <= 0);
    return (r.sort((i, s) => s.progressPercentage - i.progressPercentage), r.concat(t));
  }
  _r5904be70af550d(e) {
    this.controller.catalog.events.dispatchEvent?.(
      new CatalogEvent(e ? CatalogEvent.COLLECTIBLES_CLAIM_SUCCESS : CatalogEvent.COLLECTIBLES_CLAIM_FAIL),
    );
  }
  _r4b671d5458b7ce = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_SSB_d6320a);
    if (
      r == null ||
      (this._r5904be70af550d(r.success ?? !1), this.var_1128.activeWallet !== r._r01d9e6a2e3c716)
    )
      return;
    let t = this._r9edc6a59f66121(r.collectionId ?? "");
    t != null &&
      (t._r6a61b40f152322(r.success ?? !1),
      this._rc526b917cfc22a?.nftCollection.collectionId === r.collectionId &&
        this._rc526b917cfc22a?._rfb113a5fc45e65(!0, r.success ?? !1));
  }, "_r4b671d5458b7ce");
  _r99f9af73e910ea = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_SSB_faca0f);
    if (
      r == null ||
      (this._r5904be70af550d(r.success ?? !1), this.var_1128.activeWallet !== r._r01d9e6a2e3c716)
    )
      return;
    let t = this._r9edc6a59f66121(r.collectionId ?? "");
    t != null &&
      (t._r31c1c4b17d8827(r.success ?? !1),
      this._rc526b917cfc22a?.nftCollection.collectionId === r.collectionId &&
        this._rc526b917cfc22a?._rfb113a5fc45e65(!1, r.success ?? !1));
  }, "_r99f9af73e910ea");
  _r9edc6a59f66121(e) {
    for (let r of this._r4f04a6977ae453)
      if (r.nftCollection.collectionId === e) return r.nftCollection;
    return null;
  }
  setPlaceholder(e) {
    (this.loadedContainer != null && (this.loadedContainer.visible = e),
      this.loadingContainer != null && (this.loadingContainer.visible = !e),
      (this.var_1306 = e));
  }
  _r76eaaf235150d3(e) {
    (this._r1c2e26edd166d9(), (this._rbbaf717d855fdd = !0), this.var_195.send(new UnkMessageComposer_1args_75bee1(e ?? "")));
  }
  _r1c2e26edd166d9() {
    ((this._r9abb6e339b7a78 = null), this._r97fe170259a095?.removeListItems());
    for (let e of this._r4f04a6977ae453) e.dispose();
    ((this._r4f04a6977ae453 = []), this._rc526b917cfc22a?.dispose(), (this._rc526b917cfc22a = null));
  }
  removeMessageEvents() {
    if (this._messageEvents != null) {
      for (let e of this._messageEvents) (this.var_195.removeMessageEvent(e), e.dispose());
      this._messageEvents = null;
    }
  }
  get collectionContainer() {
    return this.var_121?.findChildByName("collection_content");
  }
  get loadingContainer() {
    return this.var_121?.findChildByName("loading_contents");
  }
  get loadedContainer() {
    return this.var_121?.findChildByName("loaded_content");
  }
  get walletSelection() {
    return this.var_121?.findChildByName("wallet_selection");
  }
  get sortSelection() {
    return this.var_121?.findChildByName("sort_selection");
  }
  get searchInput() {
    return this.var_121?.findChildByName("search_input");
  }
  get searchPlaceholder() {
    return this.var_121?.findChildByName("search_placeholder");
  }
  get searchIcon() {
    return this.var_121?.findChildByName("search_icon");
  }
  get clearSearchButton() {
    return this.var_121?.findChildByName("search_clear_button");
  }
}

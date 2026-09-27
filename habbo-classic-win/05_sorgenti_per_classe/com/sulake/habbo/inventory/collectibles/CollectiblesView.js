// Estratto da HabboAirLauncher.deobf.js, riga 176836.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/collectibles/CollectiblesView.as
// Nome offuscato: _ief83b391928b90

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    let t = this.var_63.assets.getAssetByName("collectible_hub_xml")?.content;
    ((this._window = t != null ? this._windowManager?.buildFromXML(t, a.DESKTOP_WINDOW_LAYER) : null),
      this._r4a4aa8221e6c72(a.TAB_COLLECTOR_PROFILE),
      this._r4a4aa8221e6c72(a.TAB_COLLECTIONS),
      this._r4a4aa8221e6c72(a.TAB_LEVELS),
      this._r4a4aa8221e6c72(a.TAB_MINT),
      this._r4a4aa8221e6c72(a.TAB_INFO),
      this._r4a4aa8221e6c72(a.TAB_TRANSFER),
      this._r4a4aa8221e6c72(a.TAB_SHOP),
      this._r4a4aa8221e6c72(a._r7d2768f778d95b),
      this._rf228b39ed984b3(a.TAB_COLLECTIONS, "${collectibles.collections.title}"),
      this._rf228b39ed984b3(a.TAB_SHOP, "${collectibles.shop.title}"),
      this._rf228b39ed984b3(a.TAB_MINT, "${shop.minting.title}"),
      this._rf228b39ed984b3(a.TAB_TRANSFER, "${collectibles.transfer}"),
      this._rf228b39ed984b3(a.TAB_INFO, "${collectibles.info.title}"),
      this._rf228b39ed984b3(a._r7d2768f778d95b, "${collectibles.claim.title}"),
      this._r7a5132a0911745(),
      this.refresh(),
      this._rfb25032c9aed9e(),
      this.showWindow());
    let i = this.window.findChildByName(a.TAB_MINT),
      s = this.window.findChildByName(a.TAB_TRANSFER),
      o = this.window.findChildByName(a.TAB_SHOP);
    (i != null &&
      (i.visible = this.var_63.context.configuration?.getBoolean("nft.minting.enabled") ?? !1),
      s != null &&
        (s.visible =
          this.var_63.context.configuration?.getBoolean("collectibles.transfer.enabled") ?? !1),
      o != null &&
        (o.visible = this.var_63.context.configuration?.getBoolean("nft.shop.enabled") ?? !1),
      this.levelTitle != null &&
        (this.levelTitle.caption = this.var_63.localizationManager
          .getLocalization("collectibles.level")
          .toUpperCase()),
      this.centerTabLayout(),
      this._r34fb2e9e6efa51(),
      this.closeButton?.addEventListener(u.CLICK, this.onWindowClose),
      this.infoLink?.addEventListener(kd.const_180, this._r49fad46cbd1c25),
      this.infoLink?.initializeLinkStyle(),
      this.transferLink?.addEventListener(kd.const_180, this._r49fad46cbd1c25),
      this.transferLink?.initializeLinkStyle());
  }
  static {
    n(this, "CollectiblesView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static STARDUST_WALLET_DISPLAY_NAME = "Collector Wallet";
  static var_2640 = 90;
  static TAB_COLLECTIONS = "top_view_collections_button";
  static TAB_MINT = "top_view_minting_button";
  static TAB_INFO = "top_view_info_button";
  static TAB_TRANSFER = "top_view_transfer_button";
  static TAB_SHOP = "top_view_shop_button";
  static _r7d2768f778d95b = "top_view_rewards_button";
  static TAB_COLLECTOR_PROFILE = "top_view_profile_button";
  static TAB_LEVELS = "top_view_levels_button";
  _window;
  _currentTab = a._r7d2768f778d95b;
  _r0e76420db1dec9 = null;
  var_374 = null;
  var_2931 = null;
  _r70199047bdec4f = null;
  _r50554ae5973c81 = null;
  _r719fa2a113ef76 = !1;
  _walletAddresses = null;
  _messageEvents = null;
  _r5fd6902729ad9f = null;
  _r3396a5456cdc77 = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get window() {
    if (this._window == null) throw new Error("CollectiblesView window is not available.");
    return this._window;
  }
  get _rc3b66f9fcdb46a() {
    return this._walletAddresses;
  }
  get _r92a93dee6650d9() {
    return this._walletAddresses == null
      ? null
      : this._walletAddresses.filter((e) => e !== this._r3396a5456cdc77);
  }
  get activeWallet() {
    return this._r5fd6902729ad9f;
  }
  get _rfaeabc5d3afae7() {
    return this._r3396a5456cdc77;
  }
  _red81b0edd20110() {
    return !this._r719fa2a113ef76 && this._walletAddresses != null;
  }
  get _rf2405b25edbdb7() {
    return this._r0e76420db1dec9;
  }
  get _r2c4f8558f15fe8() {
    return this._r70199047bdec4f;
  }
  showWindow() {
    if (this._windowManager == null || this._window == null || this._window.parent != null)
      return;
    this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.addChild(this._window);
  }
  updateBalances(e) {
    let r = this._window?.findChildByName("emerald_currency_value");
    r != null && (r.caption = String(e._r5f1a30114e44a8));
    let t = this._window?.findChildByName("silver_currency_value");
    (t != null && (t.caption = String(e._r410418cea3a606)), this._r70199047bdec4f?._r3fb7d0b8505445());
  }
  _rf6d89d6f64f203(e) {
    this._walletAddresses != null &&
      ((this._walletAddresses.length > 0 &&
        (e < 0 || e >= this._walletAddresses.length || this._walletAddresses[e] === this._r5fd6902729ad9f)) ||
        ((this._r5fd6902729ad9f =
          this._walletAddresses.length > 0 ? (this._walletAddresses[e] ?? null) : null),
        this._r0e76420db1dec9 != null && (this._r0e76420db1dec9.activeWallet = this._r5fd6902729ad9f),
        this.var_374 != null && (this.var_374.activeWallet = this._r5fd6902729ad9f),
        this._r5fd6902729ad9f != null && this.var_63.send(new _i845dac8fb8244e(this._r5fd6902729ad9f))));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.removeMessageEvents(),
      this._r50554ae5973c81?.dispose(),
      (this._r50554ae5973c81 = null),
      this.var_2931?.dispose(),
      (this.var_2931 = null),
      this.var_374?.dispose(),
      (this.var_374 = null),
      this._r70199047bdec4f?.dispose(),
      (this._r70199047bdec4f = null),
      this._r0e76420db1dec9?.dispose(),
      (this._r0e76420db1dec9 = null),
      this.closeButton?.removeEventListener(u.CLICK, this.onWindowClose),
      this.infoLink?.removeEventListener(kd.const_180, this._r49fad46cbd1c25),
      this.transferLink?.removeEventListener(kd.const_180, this._r49fad46cbd1c25),
      this._window?.dispose(),
      (this._window = null));
  }
  _r4a4aa8221e6c72(e) {
    let r = this._window?.findChildByName(e);
    r != null && (r.procedure = this._re18ed06774f63c);
  }
  _rf228b39ed984b3(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.caption = r);
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  hide() {
    if (this._windowManager == null || this._window == null || this._window.parent == null)
      return;
    this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.removeChild(this._window);
  }
  centerTabLayout() {
    let e = this._window?.findChildByName("top_view_select_tab_context")?.selector;
    if (e == null || this._window == null) return;
    let r = 0;
    for (let i = 0; i < e.numSelectables; i++) {
      let s = e.getSelectableAt(i);
      s?.visible ? (r += s.width) : s != null && (s.width = 0);
    }
    e.x = this._window.width / 2 - r / 2;
    let t = this.window.findChildByName("tab_bg");
    t != null && (t.visible = r > 350);
  }
  _r7a5132a0911745() {
    this._messageEvents = [new class_2901(this._r99200cdef2a13d), new class_2651(this._r0c57f05fa1b2ad)];
    for (let e of this._messageEvents) this.var_63.addMessageEvent(e);
  }
  _r0c57f05fa1b2ad = n((e) => {
    let r = ClassUtils.getParser(e, class_3880);
    if (r == null) return;
    (this.levelValue != null && (this.levelValue.caption = String(r?.level ?? 0)),
      this.scoreValue != null && (this.scoreValue.caption = String(r?.score ?? 0)),
      this.hiscoreValue != null && (this.hiscoreValue.caption = String(r?.highestScore ?? 0)));
    let t = 8162450,
      i = r?.level ?? 0,
      s = Math.max(0, Math.floor((i - 1) / 5));
    switch (s) {
      case 1:
        t = 2529547;
        break;
      case 2:
        t = 32234;
        break;
      case 3:
        t = 13828339;
        break;
      default:
        s > 3 && (t = 15571457);
        break;
    }
    (this.collectorLevelBg != null && (this.collectorLevelBg.color = t),
      this.collectorLevelBg2 != null && (this.collectorLevelBg2.color = t));
  }, "_r0c57f05fa1b2ad");
  _r99200cdef2a13d = n((e) => {
    this._r719fa2a113ef76 = !1;
    let r = ClassUtils.getParser(e, class_4154);
    r != null &&
      ((this._walletAddresses = r?._rc3b66f9fcdb46a ?? []),
      (this._r3396a5456cdc77 = r?._r336fb6fe624be3 ?? null),
      this.var_374?._rcc74fafb9df65a(this._walletAddresses),
      this._r70199047bdec4f?._rcc74fafb9df65a(this._r92a93dee6650d9),
      this._r50554ae5973c81?._rcc74fafb9df65a(this._walletAddresses),
      this._rf6d89d6f64f203(0));
  }, "_r99200cdef2a13d");
  _rfb25032c9aed9e() {
    this._r719fa2a113ef76 || ((this._r719fa2a113ef76 = !0), this.var_63.send(new _idadf93c63efd20()));
  }
  refresh() {
    switch (
      (this._window
        ?.findChildByName("top_view_select_tab_context")
        ?.selector?.setSelected(this._window?.findChildByName(this._currentTab)),
      this.hideAllTabContainers(),
      this._currentTab)
    ) {
      case a.TAB_COLLECTOR_PROFILE:
        this.window.findChildByName("collectorProfileContainer").visible = !0;
        break;
      case a.TAB_COLLECTIONS:
        ((this.window.findChildByName("collectionsContainer").visible = !0),
          this.var_374 == null && (this.var_374 = new IJ(this, this.var_63)));
        break;
      case a.TAB_LEVELS:
        this.window.findChildByName("levelsContainer").visible = !0;
        break;
      case a.TAB_MINT:
        ((this.window.findChildByName("mintingContainer").visible = !0),
          this._r0e76420db1dec9 == null && (this._r0e76420db1dec9 = new xJ(this, this.var_63)));
        break;
      case a.TAB_TRANSFER:
        ((this.window.findChildByName("transferContainer").visible = !0),
          this._r70199047bdec4f == null && (this._r70199047bdec4f = new TransferNftsTab(this, this.var_63)));
        break;
      case a.TAB_INFO:
        this.window.findChildByName("infoContainer").visible = !0;
        break;
      case a.TAB_SHOP:
        ((this.window.findChildByName("shopContainer").visible = !0),
          this.var_2931 == null && (this.var_2931 = new EJ(this, this.var_63)));
        break;
      case a._r7d2768f778d95b:
      default:
        ((this.window.findChildByName("rewardsContainer").visible = !0),
          this._r50554ae5973c81 == null && (this._r50554ae5973c81 = new RewardClaimsTab(this, this.var_63)));
        break;
    }
  }
  _r34fb2e9e6efa51() {
    (this.var_374 == null && (this.var_374 = new IJ(this, this.var_63)),
      this._r0e76420db1dec9 == null && (this._r0e76420db1dec9 = new xJ(this, this.var_63)),
      this.var_2931 == null && (this.var_2931 = new EJ(this, this.var_63)),
      this._r50554ae5973c81 == null && (this._r50554ae5973c81 = new RewardClaimsTab(this, this.var_63)),
      this._r70199047bdec4f == null && (this._r70199047bdec4f = new TransferNftsTab(this, this.var_63)));
  }
  hideAllTabContainers() {
    for (let e of [
      "collectorProfileContainer",
      "collectionsContainer",
      "levelsContainer",
      "mintingContainer",
      "transferContainer",
      "infoContainer",
      "shopContainer",
      "rewardsContainer",
    ]) {
      let r = this._window?.findChildByName(e);
      r != null && (r.visible = !1);
    }
  }
  _re18ed06774f63c = n((e, r) => {
    e.type === u.CLICK && ((this._currentTab = r.name), this.refresh());
  }, "_re18ed06774f63c");
  _r49fad46cbd1c25 = n((e) => {
    let r = e;
    r != null && Ae.openWebPageAndMinimizeClient(r.link);
  }, "_r49fad46cbd1c25");
  removeMessageEvents() {
    if (this._messageEvents != null) {
      for (let e of this._messageEvents) (this.var_63.removeMessageEvent(e), e.dispose());
      this._messageEvents = null;
    }
  }
  get scoreValue() {
    return this._window?.findChildByName("current_score_value");
  }
  get hiscoreValue() {
    return this._window?.findChildByName("current_hiscore_value");
  }
  get levelValue() {
    return this._window?.findChildByName("collector_level");
  }
  get levelTitle() {
    return this._window?.findChildByName("level_title");
  }
  get collectorLevelBg() {
    return this._window?.findChildByName("collector_level_bg");
  }
  get collectorLevelBg2() {
    return this._window?.findChildByName("collector_level_bg2");
  }
  get infoLink() {
    return this._window?.findChildByName("info_desc");
  }
  get transferLink() {
    return this._window?.findChildByName("transfer_desc");
  }
  get closeButton() {
    return this._window?.findChildByName("header_button_close");
  }
}

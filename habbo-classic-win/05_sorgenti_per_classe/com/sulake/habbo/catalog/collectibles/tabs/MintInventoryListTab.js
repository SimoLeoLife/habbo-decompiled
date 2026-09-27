// Estratto da HabboAirLauncher.deobf.js, riga 175500.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/MintInventoryListTab.as
// Nome offuscato: _i6fc46af739130d

class a {
  constructor(e, r) {
    this.var_1128 = e;
    this.var_195 = r;
    ((this.var_121 = this.var_1128.window.findChildByName("mintingContainer")),
      (this._re6367ccae57a8f = this.var_121?.findChildByName("itemgrid_inventory")),
      (this._r52409b274fdc60 = this._re6367ccae57a8f?.getGridItemAt(0)),
      this._r52409b274fdc60 != null && this._re6367ccae57a8f?.removeGridItem(this._r52409b274fdc60),
      (this.var_2022 = this.var_121?.findChildByName("bg_star")),
      (this._loadingIcon = this.var_121?.findChildByName("loading_icon")),
      (this.var_2033 = new CollectibleProductPreviewer(
        this.productPreviewBitmap,
        null,
        null,
        null,
        this.avatarImageWidget,
        this.placeholderImage,
      )),
      this.var_2033.avatarRenderManager(),
      this._r7a5132a0911745(),
      this.initializeData(),
      this.updateReadyState(!1),
      this.var_195.registerUpdateReceiver(this, 1),
      this.createWalletButton?.addEventListener(u.CLICK, this._rd1daf752e7d5df),
      this.moreInfoButton?.addEventListener(u.CLICK, this._r0ff1c2c5847325),
      this.stampsPurchaseDropdown?.addEventListener(y.const_238, this._r689a7913ac764b),
      this.stampBuyButton?.addEventListener(u.CLICK, this._r5843e5c0fb5770),
      this.collectButton?.addEventListener(u.CLICK, this.onCollectClicked));
  }
  static {
    n(this, "MintInventoryListTab");
  }
  static PROGRESS_BAR_UPDATE_THRESHOLD = 1e3;
  _messageEvents = null;
  _re6367ccae57a8f;
  var_121;
  _r52409b274fdc60;
  _r79e10543b32138 = !1;
  _r74221d1a67dedd = !1;
  _r8dfd32753873a2 = !1;
  _r6621953877a37d = !1;
  _r5e735d956ebc86 = !1;
  var_1306 = !1;
  var_4027 = 0;
  _rc94fb5359654d6 = [];
  _r0bf6ba54a4dd30 = !1;
  _r7c672c2c86fd35 = [];
  _r9dea337958ffae = !1;
  var_154 = null;
  var_2033;
  var_2022;
  _loadingIcon;
  var_2505 = 0;
  _items = [];
  _ra0c0ee5826ca8c = !1;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get activeWallet() {
    return this.var_1128.activeWallet;
  }
  set activeWallet(e) {
    ((this._r6621953877a37d = !1),
      e != null && ((this._r79e10543b32138 = !0), this.var_195.send(new class_3766(e))),
      this.updateReadyState(!0),
      this.stampPurchasingContainer != null && (this.stampPurchasingContainer.visible = e != null),
      this.noWalletContainer != null && (this.noWalletContainer.visible = e == null));
  }
  _r410e58e2f3d3db(e) {
    e === class_2106.FURNITURE && ((this._r5e735d956ebc86 = !1), this.updateReadyState(!0));
  }
  amountChangedForItem(e, r, t) {
    if (!(e !== class_2106.FURNITURE || !this.var_1306 || this._items.length === 0))
      for (let i of this._items) {
        let s = i.item;
        if (
          ((s.itemType === "i" && t) || (s.itemType === "s" && !t)) &&
          s.itemTypeId === r
        ) {
          let d = this._r39d569dc247ac7(s);
          ((i.renderableItem.amount = d.length),
            i.updateVisuals(),
            i === this.var_154 && this.reloadPreview());
          return;
        }
      }
  }
  _r669989230c0ae2(e) {
    (this.var_154?.deactivate(),
      (this.var_154 = e ?? null),
      this.var_154 != null && (this.var_154.activate(), this.initMintItemPreview()));
  }
  update(e) {
    if (!this._disposed) {
      if (this.var_1306) {
        let r = 20 * (e / 1e3);
        (this.var_2022 != null &&
          ((this.var_2022.rotation += r),
          (this.var_2022.rotation %= 360),
          this.var_2022.invalidate()),
          this.updateProgressBar(!1, e));
      } else if (this._loadingIcon != null) {
        let r = 90 * (e / 1e3);
        ((this._loadingIcon.rotation += r),
          (this._loadingIcon.rotation %= 360),
          this._loadingIcon.invalidate());
      }
    }
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.clearItems(),
      this.removeMessageEvents(),
      this.var_2033.clearPreviewer(),
      this.var_2033.dispose(),
      this.var_195.removeUpdateReceiver(this),
      this.createWalletButton?.removeEventListener(u.CLICK, this._rd1daf752e7d5df),
      this.moreInfoButton?.removeEventListener(u.CLICK, this._r0ff1c2c5847325),
      this.stampsPurchaseDropdown?.removeEventListener(y.const_238, this._r689a7913ac764b),
      this.stampBuyButton?.removeEventListener(u.CLICK, this._r5843e5c0fb5770),
      this.collectButton?.removeEventListener(u.CLICK, this.onCollectClicked));
  }
  _r7a5132a0911745() {
    this._messageEvents = [
      new _i73ae2149b50892(this._r0b1e324e021f21),
      new _ifa0c37dc3667f4(this._r40a30ca6791007),
      new _i390f9c2ead4c93(this._rc8d2a3c15f7595),
      new _i5bf33746155f34(this._r1238e1a55be0aa),
      new class_3032(this._r5ee322d45e9aa0),
    ];
    for (let e of this._messageEvents) this.var_195.addMessageEvent(e);
  }
  updateReadyState(e) {
    let r =
      !this._r6621953877a37d &&
      !this._r5e735d956ebc86 &&
      !this._r74221d1a67dedd &&
      !this._r8dfd32753873a2 &&
      !this._r79e10543b32138;
    (r &&
      (!this.var_1306 && !this._ra0c0ee5826ca8c
        ? this._r087addae775989(this._rc94fb5359654d6)
        : e && this.reloadPreview()),
      (this.var_1306 = r),
      this.loadedContainer != null && (this.loadedContainer.visible = this.var_1306),
      this.loadingContainer != null && (this.loadingContainer.visible = !this.var_1306));
  }
  _r0b1e324e021f21 = n((e) => {
    let r = ClassUtils.getParser(e, _i572a713b9b76d3);
    r != null &&
      ((this._r79e10543b32138 = !1),
      (this.var_4027 = r?._rfef50809b5ead3 ?? 0),
      this.mintTokenBalanceText != null && (this.mintTokenBalanceText.caption = `${this.var_4027}`),
      this.updateReadyState(!0));
  }, "_r0b1e324e021f21");
  _r40a30ca6791007 = n((e) => {
    let r = ClassUtils.getParser(e, _i28fc31db2fd741);
    r != null &&
      ((this._r8dfd32753873a2 = !1), (this._r0bf6ba54a4dd30 = r?.enabled ?? !1), this.updateReadyState(!0));
  }, "_r40a30ca6791007");
  _rc8d2a3c15f7595 = n((e) => {
    let r = ClassUtils.getParser(e, _i81aa8987d4c146);
    r != null &&
      ((this._r74221d1a67dedd = !1),
      (this._rc94fb5359654d6 = r?._rd0d7bda27edc47 ?? []),
      this.updateReadyState(!0));
  }, "_rc8d2a3c15f7595");
  _r1238e1a55be0aa = n((e) => {
    let r = ClassUtils.getParser(e, _ib908ea818851a4);
    if (r == null) return;
    this._r7c672c2c86fd35 = r?._r181febaf49bc70 ?? [];
    let t = this._r7c672c2c86fd35.map((i) => `${i._rea86a7ddc10b61}`);
    (this.stampsPurchaseDropdown?.populateWithVector(t),
      t.length > 0 &&
        this.stampsPurchaseDropdown != null &&
        ((this.stampsPurchaseDropdown.selection = 0), this._r689a7913ac764b({})));
  }, "_r1238e1a55be0aa");
  _r689a7913ac764b = n((e) => {
    let r = this._r2aa45669b66b4c;
    r != null &&
      (this.silverCost != null && (this.silverCost.caption = `${r._r29174d6ef4cbe5}`),
      r._r29174d6ef4cbe5 <= this.var_195.catalog.getPurse()._r410418cea3a606
        ? this.stampBuyButton?.enable()
        : this.stampBuyButton?.disable());
  }, "_r689a7913ac764b");
  get _r2aa45669b66b4c() {
    let e = this.stampsPurchaseDropdown?.selection ?? -1;
    return e < 0 || e >= this._r7c672c2c86fd35.length ? null : (this._r7c672c2c86fd35[e] ?? null);
  }
  _r5843e5c0fb5770 = n((e) => {
    let r = this._r2aa45669b66b4c,
      t = this.var_1128.activeWallet;
    if (r == null || t == null) return;
    let i = new C1(r);
    this.var_195.catalog.showPurchaseConfirmation(i, -1, t, 1, null);
  }, "_r5843e5c0fb5770");
  initializeData() {
    ((this._r74221d1a67dedd = !0),
      this.var_195.send(new _idceb00bbba29ab()),
      (this._r8dfd32753873a2 = !0),
      this.var_195.send(new _i457c9897429adb()),
      this.var_195.inventory._r9fc90ede19317b(class_2106.FURNITURE) || (this._r5e735d956ebc86 = !0),
      (this._r6621953877a37d = !0),
      this.var_1128._red81b0edd20110() &&
        (this.activeWallet = this.var_1128.activeWallet),
      this.stampBuyButton?.disable(),
      this.var_195.send(new _i5b94ad0d410410()));
  }
  _r087addae775989(e) {
    for (let r of e) {
      let t = this._r52409b274fdc60?.clone();
      if (t == null) continue;
      let i = new _if5b8f9b1f268a9(this.var_195, r, t, this, this._r39d569dc247ac7(r).length);
      (this._re6367ccae57a8f?.addGridItem(t), this._items.push(i));
    }
    ((this._ra0c0ee5826ca8c = !0),
      this._items.length > 0 &&
        ((this.var_154 = this._items[0]), this.var_154.activate(), this.initMintItemPreview()),
      this.previewWindow != null && (this.previewWindow.visible = this._items.length > 0));
  }
  _r39d569dc247ac7(e) {
    let r = !1;
    if (e.itemType === "i") r = !0;
    else if (e.itemType !== "s") return [];
    return this.var_195.inventory._rcfe868f829c086(class_2106.FURNITURE, e.itemTypeId, r) ?? [];
  }
  reloadPreview() {
    this.initMintItemPreview();
  }
  initMintItemPreview() {
    let e = this.var_154;
    if (e == null) return;
    (this.var_2033.clearPreviewer(),
      this.var_195.previewImage(e.renderableItem, this.var_2033),
      this.productNameText != null &&
        (this.productNameText.caption = this.var_195.getProductName(e.renderableItem)));
    let r = e.renderableItem,
      t = e.item,
      i = this.var_1128.activeWallet == null,
      s = r.amount === 0,
      o = this.var_4027 < t.price,
      d = this.isMintPeriodExpired();
    (this.stampPricingText != null && (this.stampPricingText.caption = `${t.price}`),
      this.noFurniNotification != null && (this.noFurniNotification.visible = s),
      t._ra0b62add965618
        ? (this.mintLockedText != null &&
            (this.mintLockedText.caption = this.localization.getLocalization(
              "shop.minting.region_locked",
            )),
          this.mintLockClosedImage != null && (this.mintLockClosedImage.visible = !0),
          this.mintLockOpenImage != null && (this.mintLockOpenImage.visible = !1))
        : (this.mintLockedText != null &&
            (this.mintLockedText.caption = this.localization.getLocalization(
              "shop.minting.region_unlocked",
            )),
          this.mintLockClosedImage != null && (this.mintLockClosedImage.visible = !1),
          this.mintLockOpenImage != null && (this.mintLockOpenImage.visible = !0)),
      this.updateProgressBar(!0),
      i || s || o || d || !this._r0bf6ba54a4dd30 || this._r9dea337958ffae
        ? this.collectButton?.disable()
        : this.collectButton?.enable());
  }
  onCollectClicked = n((e) => {
    this.collectButton?.disable();
    let r = this.var_195.windowManager.confirm(
      "${shop.minting.confirm.title}",
      "${shop.minting.confirm.description}",
      0,
      this._r74221dc3e0539a,
    );
    r != null && (r._r3d7b1775b50b97 = 2763306);
  }, "onCollectClicked");
  _r74221dc3e0539a = n((e, r) => {
    if ((e.dispose(), r.type === y.const_1300)) {
      let t = this.var_1128.activeWallet;
      if (this.var_154 == null || t == null) return;
      let i = this._r39d569dc247ac7(this.var_154.item);
      if (i.length === 0) return;
      ((this._r9dea337958ffae = !0), this.var_195.send(new _i355926e34de17b(i[0], t)));
    }
    this.reloadPreview();
  }, "_r74221dc3e0539a");
  _r5ee322d45e9aa0 = n((e) => {
    let r = ClassUtils.getParser(e, class_3980);
    if (r == null) return;
    let t = r?.mintResult === class_3980.name_8;
    (this.var_195.catalog.events.dispatchEvent?.(
      new CatalogEvent(t ? CatalogEvent.COLLECTIBLES_MINT_SUCCESS : CatalogEvent.COLLECTIBLES_MINT_FAIL),
    ),
      (this._r9dea337958ffae = !1),
      this.reloadPreview());
  }, "_r5ee322d45e9aa0");
  updateProgressBar(e = !0, r = 0) {
    if (
      ((this.var_2505 += r),
      !(e || this.var_2505 >= a.PROGRESS_BAR_UPDATE_THRESHOLD) || this.var_154 == null)
    )
      return;
    this.var_2505 = 0;
    let i = this.var_154.item.startTime * 1e3,
      s = this.var_154.item.endTime * 1e3;
    if (i > 0 && s > 0) {
      let o = Date.now(),
        d = Math.max(0, s - o),
        c = s - i,
        f = Math.min(1, d / c),
        l = f <= 0;
      f = Math.max(0, f);
      let b = this.completionProgressBarPadded?.width ?? 0,
        _ = Math.floor(b * f);
      if (
        (this.completionProgressBarTop != null && (this.completionProgressBarTop.width = _),
        this.completionProgressBarBottom != null && (this.completionProgressBarBottom.width = _),
        this.completionProgressBarText != null)
      )
        if (l)
          ((this.completionProgressBarText.caption = this.localization.getLocalizationWithParams(
            "shop.minting.time_ended",
            "",
          )),
            this.collectButton?.disable());
        else {
          let h = ra.getFriendlyTime(this.localization, d / 1e3);
          this.completionProgressBarText.caption = `${this.localization.getLocalizationWithParams("shop.minting.time_left", "")}: ${h}`;
        }
    }
  }
  isMintPeriodExpired() {
    return this.var_154 == null ? !0 : this.var_154.item.endTime * 1e3 < Date.now();
  }
  get localization() {
    return this.var_195.localizationManager;
  }
  _rd1daf752e7d5df = n((e) => {
    Ae.openWebPageAndMinimizeClient(this.var_195.getProperty("nft.wallet.create.url"));
  }, "_rd1daf752e7d5df");
  _r0ff1c2c5847325 = n((e) => {
    Ae.openWebPageAndMinimizeClient(this.var_195.getProperty("web.settings.wallet.relativeUrl"));
  }, "_r0ff1c2c5847325");
  removeMessageEvents() {
    if (this._messageEvents != null) {
      for (let e of this._messageEvents) (this.var_195.removeMessageEvent(e), e.dispose());
      this._messageEvents = null;
    }
  }
  clearItems() {
    for (let e of this._items) e.dispose();
    ((this._items = []), this._re6367ccae57a8f?._rbb4c26d068856f(), (this._ra0c0ee5826ca8c = !1));
  }
  get loadingContainer() {
    return this.var_121?.findChildByName("loading_contents");
  }
  get loadedContainer() {
    return this.var_121?.findChildByName("loaded_content");
  }
  get previewWindow() {
    return this.var_121?.findChildByName("preview_container");
  }
  get productPreviewBitmap() {
    return this.var_121?.findChildByName("product_preview");
  }
  get avatarImageWidget() {
    return this.var_121?.findChildByName("avatar_image_widget");
  }
  get productNameText() {
    return this.var_121?.findChildByName("preview_furni_name");
  }
  get placeholderImage() {
    return this.var_121?.findChildByName("placeholder_image");
  }
  get stampPricingText() {
    return this.var_121?.findChildByName("stamp_pricing");
  }
  get collectButton() {
    return this.var_121?.findChildByName("collect_button");
  }
  get noFurniNotification() {
    return this.var_121?.findChildByName("no_furni_notify");
  }
  get mintLockedText() {
    return this.var_121?.findChildByName("mint_lock_text");
  }
  get mintLockOpenImage() {
    return this.var_121?.findChildByName("mint_lock_open_icon");
  }
  get mintLockClosedImage() {
    return this.var_121?.findChildByName("mint_lock_closed_icon");
  }
  get completionProgressBarPadded() {
    return this.var_121?.findChildByName("progress_padded_bar");
  }
  get completionProgressBarTop() {
    return this.var_121?.findChildByName("progress_bar_top");
  }
  get completionProgressBarBottom() {
    return this.var_121?.findChildByName("progress_bar_bottom");
  }
  get completionProgressBarText() {
    return this.var_121?.findChildByName("progress_bar_text");
  }
  get stampPurchasingContainer() {
    return this.var_121?.findChildByName("stamp_purchasing_container");
  }
  get noWalletContainer() {
    return this.var_121?.findChildByName("no_wallet_container");
  }
  get createWalletButton() {
    return this.var_121?.findChildByName("create_wallet_button");
  }
  get moreInfoButton() {
    return this.var_121?.findChildByName("more_info_button");
  }
  get mintTokenBalanceText() {
    return this.var_121?.findChildByName("mint_token_balance");
  }
  get silverCost() {
    return this.var_121?.findChildByName("silver_cost_text");
  }
  get stampBuyButton() {
    return this.var_121?.findChildByName("silver_buy_button");
  }
  get stampsPurchaseDropdown() {
    return this.var_121?.findChildByName("stamps_purchase_dropdown");
  }
}

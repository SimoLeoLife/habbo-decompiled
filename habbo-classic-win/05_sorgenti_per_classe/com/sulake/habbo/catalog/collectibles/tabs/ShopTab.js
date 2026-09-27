// Estratto da HabboAirLauncher.deobf.js, riga 176390.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/ShopTab.as
// Nome offuscato: _id68df683738b4f

class a {
  constructor(e, r) {
    this.var_1128 = e;
    this.var_195 = r;
    ((this.var_121 = this.var_1128.window.findChildByName("shopContainer")),
      (this._r97fe170259a095 = this.var_121?.findChildByName("navigationList")),
      (this._re746fd66b8757f =
        this._r97fe170259a095?.removeListItem(this._r97fe170259a095.getListItemByName("item_template")) ??
        null),
      (this.var_4659 = this.var_121?.findChildByName("itemgrid_shop")),
      (this._r096fd448614784 = this.var_4659?.getGridItemAt(0)),
      this.var_4659?.removeGridItems(),
      (this.var_2033 = new CollectibleProductPreviewer(
        this.productPreviewBitmap,
        this.badgeImageWidget,
        this.petImageWidget,
        this.unknownImageWindow,
        this.avatarImageWidget,
        this.placeholderImage,
        this.effectImageWidget,
        this.controller._rf0eb5f07c94cfb,
      )),
      this.var_2033.avatarRenderManager(),
      this.setPlaceholder(!1),
      this._r7a5132a0911745(),
      this.addMessageEvents(),
      this.buyButton?.addEventListener(u.CLICK, this.onClickBuy),
      (this.var_2022 = this.var_121?.findChildByName("bg_star")),
      (this._loadingIcon = this.var_121?.findChildByName("loading_icon")),
      this.controller.registerUpdateReceiver(this, 1));
  }
  static {
    n(this, "ShopTab");
  }
  static BG_STAR_ROTATE_SPEED = 20;
  static var_2640 = 90;
  var_121;
  _r97fe170259a095;
  _re746fd66b8757f;
  _r4f04a6977ae453 = [];
  _rb3ff1802ba8b1b = !1;
  _messageEvents = null;
  _r9abb6e339b7a78 = null;
  var_2022;
  _loadingIcon;
  var_1306 = !1;
  _r096fd448614784;
  var_4659;
  _r9cb5f682dfdc11 = [];
  var_154 = null;
  var_2033;
  _r802d5ec7c44ad7 = [];
  _rbb7fbbc735f617 = {};
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
  update(e) {
    if (!this._disposed) {
      if (this.var_1306) {
        let r = a.BG_STAR_ROTATE_SPEED * (e / 1e3);
        this.var_2022 != null &&
          ((this.var_2022.rotation += r),
          (this.var_2022.rotation %= 360),
          this.var_2022.invalidate());
      } else if (this._loadingIcon != null) {
        let r = a.var_2640 * (e / 1e3);
        ((this._loadingIcon.rotation += r),
          (this._loadingIcon.rotation %= 360),
          this._loadingIcon.invalidate());
      }
    }
  }
  _r5415e1b9ed2b71(e) {
    this._r9abb6e339b7a78 !== e &&
      (this._r9abb6e339b7a78?.deactivate(),
      (this._r9abb6e339b7a78 = e),
      this._r9abb6e339b7a78.activate(),
      this._r9928861dec4ed8());
  }
  _r669989230c0ae2(e) {
    (this.var_154?.deactivate(),
      (this.var_154 = e ?? null),
      this.var_154 != null && (this.var_154.activate(), this.initItemPreview()));
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.controller.removeUpdateReceiver(this),
      this.var_2033.clearPreviewer(),
      this.var_2033.dispose(),
      this._r1c2e26edd166d9(),
      this._rabdf6c72b858d2(),
      this.removeMessageEvents(),
      this.buyButton?.removeEventListener(u.CLICK, this.onClickBuy));
  }
  _r7a5132a0911745() {
    this._messageEvents = [new _icdd01d421b375d(this._rbcbb81c0ee87f7)];
    for (let e of this._messageEvents) this.var_195.addMessageEvent(e);
  }
  _rbcbb81c0ee87f7 = n((e) => {
    if (!this._rb3ff1802ba8b1b || (this._r97fe170259a095?.numListItems ?? 0) !== 0) return;
    this._rb3ff1802ba8b1b = !1;
    let r = ClassUtils.getParser(e, _i71abedfbf79802);
    r != null &&
      ((this._r802d5ec7c44ad7 = r?._r8ada5d04f55bc7 ?? []),
      this._r602bd7376e3704(),
      this._r4f04a6977ae453.length > 0 && this._r5415e1b9ed2b71(this._r4f04a6977ae453[0]),
      this.setPlaceholder(!0),
      this.collectionContainer != null && (this.collectionContainer.visible = this._r4f04a6977ae453.length > 0));
  }, "_rbcbb81c0ee87f7");
  _r602bd7376e3704() {
    this._rbb7fbbc735f617 = {};
    for (let e of this._r802d5ec7c44ad7) {
      let r = this.var_195.localizationManager.getLocalization(
        this.getNavigationCategory(e.productInfo.productTypeId),
      );
      if (this._rbb7fbbc735f617[r] == null) {
        this._rbb7fbbc735f617[r] = [];
        let t = new ShopNavigationNodeRenderer(this, r);
        (t.window != null && this._r97fe170259a095?.addListItem(t.window), this._r4f04a6977ae453.push(t));
      }
      this._rbb7fbbc735f617[r].push(e);
    }
  }
  getNavigationCategory(e) {
    switch (e) {
      case class_3169.const_254:
      case class_3169.const_545:
        return "shop.furni.title";
      case class_3169.CLOTHING:
        return "shop.clothes.title";
      case class_3169.PET:
        return "shop.pets.title";
      default:
        return "product.type.other";
    }
  }
  setPlaceholder(e) {
    (this.loadedContainer != null && (this.loadedContainer.visible = e),
      this.loadingContainer != null && (this.loadingContainer.visible = !e),
      (this.var_1306 = e));
  }
  addMessageEvents() {
    (this._r1c2e26edd166d9(), (this._rb3ff1802ba8b1b = !0), this.var_195.send(new _ide44a8541ccc2e()));
  }
  _r9928861dec4ed8() {
    this._rabdf6c72b858d2();
    let e =
      this._r9abb6e339b7a78 != null ? (this._rbb7fbbc735f617[this._r9abb6e339b7a78.category] ?? []) : [];
    if (e.length !== 0) {
      for (let r of e) {
        let t = this._r096fd448614784?.clone();
        if (t == null) continue;
        let i = new _i57cb33c7bd4857(this.controller, r, t, this);
        (this.itemGrid?.addGridItem(t), this._r9cb5f682dfdc11.push(i));
      }
      this._r9cb5f682dfdc11.length > 0 && this._r669989230c0ae2(this._r9cb5f682dfdc11[0]);
    }
  }
  _rabdf6c72b858d2() {
    this.var_154 = null;
    for (let e of this._r9cb5f682dfdc11) e.dispose();
    ((this._r9cb5f682dfdc11 = []), this.itemGrid?._rbb4c26d068856f());
  }
  initItemPreview() {
    let e = this.var_154;
    if (e == null) return;
    let r = e.offer;
    (this.var_2033.clearPreviewer(),
      this.var_195.previewImage(e.renderableItem, this.var_2033),
      this.productNameText != null &&
        (this.productNameText.caption = this.var_195.getProductName(e.renderableItem)),
      this.emeraldPriceText != null && (this.emeraldPriceText.caption = `${r._rf165182370a636}`));
    let t = r._r26069e7d4ffc6d > 0;
    (this.mintLimitContainer != null && (this.mintLimitContainer.visible = t),
      t &&
        this.mintLimitText != null &&
        (this.mintLimitText.caption = `${r._rc749157a4efea8}/${r._r26069e7d4ffc6d}`),
      r._rc749157a4efea8 < r._r26069e7d4ffc6d || r._r26069e7d4ffc6d === -1
        ? this.buyButton?.enable()
        : this.buyButton?.disable());
  }
  onClickBuy = n((e) => {
    if (this.var_154 == null) return;
    let r = new E1(this.var_154.offer),
      t = this.controller.catalog;
    if (t.getPurse()._r5f1a30114e44a8 < r._r6a2e5e87fafd63) {
      t.showNotEnoughActivityPointsAlert(0);
      return;
    }
    t.showPurchaseConfirmation(r, -1, this.activeWallet ?? "", 1, null);
  }, "onClickBuy");
  _r1c2e26edd166d9() {
    ((this._r9abb6e339b7a78 = null), this._r97fe170259a095?.removeListItems());
    for (let e of this._r4f04a6977ae453) e.dispose();
    this._r4f04a6977ae453 = [];
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
  get itemGrid() {
    return this.var_4659;
  }
  get avatarImageWidget() {
    return this.var_121?.findChildByName("avatar_image_widget");
  }
  get badgeImageWidget() {
    return this.var_121?.findChildByName("badge_image_widget");
  }
  get petImageWidget() {
    return this.var_121?.findChildByName("pet_image_widget");
  }
  get effectImageWidget() {
    return this.var_121?.findChildByName("effect_image_widget");
  }
  get unknownImageWindow() {
    return this.var_121?.findChildByName("unknown_image");
  }
  get placeholderImage() {
    return this.var_121?.findChildByName("placeholder_image");
  }
  get productPreviewBitmap() {
    return this.var_121?.findChildByName("product_preview");
  }
  get productNameText() {
    return this.var_121?.findChildByName("preview_furni_name");
  }
  get buyButton() {
    return this.var_121?.findChildByName("buy_button");
  }
  get emeraldPriceText() {
    return this.var_121?.findChildByName("price_text");
  }
  get mintLimitText() {
    return this.var_121?.findChildByName("mintlimit_text");
  }
  get mintLimitContainer() {
    return this.var_121?.findChildByName("mintlimit_container");
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 185092.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purchase/PurchaseConfirmationDialog.as
// Nome offuscato: _i3ab0482f2fd256

class a {
  constructor(e, r) {
    this._localization = e;
    this._assets = r;
  }
  static {
    n(this, "PurchaseConfirmationDialog");
  }
  static MAX_SUGGESTIONS = 10;
  static COLOR_EVEN = 4293848814;
  static COLOR_ODD = 4294967295;
  static COLOR_HIGHLIGHT = 4291613146;
  _catalog = null;
  _roomEngine = null;
  _offerId = -1;
  var_422 = "";
  var_1429 = 0;
  var_2762 = -1;
  var_1530 = "";
  var_2364 = null;
  var_474 = null;
  _userName = null;
  var_434 = null;
  _re6ded0c3489349 = null;
  _rcb006f1d877d80 = -1;
  var_1205 = 1;
  _r4330c8e8aba977 = "";
  _r1ec554ee425ee1 = "";
  var_2045 = 0;
  defaultStuffTypes = 0;
  _stuffTypes = [];
  _ribbonTypes = [];
  _boxTypes = [];
  var_246 = 0;
  var_245 = 0;
  var_2039 = 0;
  _r074e161940145d = 0;
  var_556 = null;
  _window = null;
  _disposed = !1;
  showOffer(e, r, t, i, s, o, d, c, f, l) {
    if (
      ((this._catalog = e),
      (this._roomEngine = r),
      (this._offerId = t.offerId),
      (this.var_2762 = i),
      (this.var_1530 = s),
      (this.var_2364 = d),
      (this.var_474 = c),
      (this._userName = f),
      (this.var_1205 = o),
      t instanceof hn && t.product != null)
    )
      ((this.var_422 = t.product.productType),
        (this.var_1429 =
          this.var_422 === class_1803.PRODUCT_TYPE_HABBICON ? Number(t.product.extraParam) | 0 : 0));
    else if (t instanceof Em || x0.buildersClub(t.localizationId))
      this.var_422 = class_1803.PRODUCT_TYPE_CLUB;
    else if (t instanceof Nm) this.var_422 = class_1803.PRODUCT_TYPE_GAME_TOKEN;
    else if (t instanceof C1) this.var_422 = class_1803.PRODUCT_TYPE_MINT_TOKEN;
    else if (t instanceof E1)
      ((this.var_422 = class_1803.PRODUCT_TYPE_NFT), (this._r4330c8e8aba977 = t._raeb033db5aa083));
    else return;
    (this.showConfirmationDialog(t, l), this._catalog._r80e577f08146ab(t));
  }
  dispose() {
    this.disposed ||
      (this.hideRaffle(),
      (this._disposed = !0),
      (this._catalog = null),
      (this._roomEngine = null),
      (this._offerId = -1),
      (this.var_1429 = 0),
      (this.var_2762 = -1),
      (this.var_1530 = ""),
      (this.var_474 = null),
      this._window?.dispose(),
      (this._window = null),
      this.var_556 != null && this.var_556.running && this.var_556.stop(),
      (this.var_556 = null),
      (this.var_434 = null),
      this._re6ded0c3489349?.dispose(),
      (this._re6ded0c3489349 = null));
  }
  get disposed() {
    return this._disposed;
  }
  get productType() {
    return this.var_422;
  }
  getIconWrapper() {
    return this._window?.findChildByName("product_image") ?? null;
  }
  getNftImage() {
    return this._window?.findChildByName("nft_image")?.widget ?? null;
  }
  _rf81fecc8d1abc0() {
    return this._r1ec554ee425ee1 !== "";
  }
  imageReady(e, r) {
    e === this.var_2045 && ((this.var_2045 = 0), this.setImage(r, !0));
  }
  imageFailed(e) {}
  _rac9072fcec5669(e) {
    if (this._catalog == null || this._catalog._rf0eb5f07c94cfb == null) return null;
    let r = null,
      t = this._catalog._rf0eb5f07c94cfb._r274f6640e76241(e, fr.LARGE, null, this);
    return (t != null && ((r = t._rb2bd48e3b4d265(class_2123.HEAD)), t.dispose()), r);
  }
  avatarImageReady(e) {
    if (
      this._catalog == null ||
      this._window == null ||
      this._window.disposed ||
      this.disposed
    )
      return;
    e === this._catalog.sessionDataManager.figure && this.updateGiftDialogAvatarImage();
    let r = this._catalog._rf0eb5f07c94cfb._r274f6640e76241(e, fr.LARGE, null, this);
    if (r == null) return;
    (r.setDirection(class_2123.const_252, 3),
      r._r66a0b6869b9038(ve.EXPRESSION_WAVE),
      r._r66a0b6869b9038(ve.GESTURE, ve.GESTURE_SMILE));
    let t = r._rb09602dca8db26(class_2123.const_252, !0);
    (r.dispose(), this.setImage(t, !0));
  }
  ltdRaffleEnded() {
    let e = this._window?.findChildByName("raffle_container");
    (e != null && (e.visible = !0),
      (this._r074e161940145d = 1),
      this.updateDots(),
      (this.var_556 = new _i05394ecc0c0c4d(150)),
      this.var_556.addEventListener(DeBouncer.addEventListener, this._r1c2995b7d00c9f),
      this.var_556.start());
  }
  ltdRaffleStarted() {
    if (!this._disposed) {
      let e = this._window?.findChildByName("raffle_container");
      (e != null && (e.visible = !1),
        this.var_556 != null && this.var_556.running && this.var_556.stop(),
        (this.var_556 = null));
    }
  }
  receiverNotFound() {
    this.disposed ||
      (this.enableGiftButton(!0),
      this._catalog != null &&
        this._catalog.windowManager.alert(
          "${catalog.gift_wrapping.receiver_not_found.title}",
          "${catalog.gift_wrapping.receiver_not_found.info}",
          0,
          this._r079944701b6df1,
        ));
  }
  notEnoughCredits() {
    this.disposed ||
      this._window == null ||
      (this.enableGiftButton(!0),
      this.safeEnable("header_button_close"),
      this._window.findChildByName("use_free_checkbox")?.select());
  }
  turnIntoGifting() {
    let e = this._window?.findChildByName("buy_button");
    e == null ||
      this._window == null ||
      (e.removeEventListener(u.CLICK, this.onBuyButtonClick),
      e.addEventListener(u.CLICK, this._rc47b690d70e04d),
      (e.caption = "${catalog.purchase_confirmation.gift}"),
      (this._window.caption = "${catalog.purchase_confirmation.gift.title}"));
  }
  setImage(e, r) {
    if (this._window == null || e == null || this.disposed) return;
    let t = this.getIconWrapper();
    if (t == null) return;
    (t.bitmap?.dispose(), (t.bitmap = null), (t.bitmap = new A(t.width, t.height, !0, 0)));
    let i = (t.width - e.width) * 0.5,
      s = (t.height - e.height) * 0.5;
    (t.bitmap.draw(e, new Pe(1, 0, 0, 1, i, s)), r && e.dispose());
  }
  showConfirmationDialog(e, r) {
    if (
      this._catalog == null ||
      (this._window?.dispose(),
      (this._window = this._catalog.utils.createWindow("purchase_confirmation", 2)),
      this._window == null)
    )
      return;
    ((this._window.color = e instanceof C1 || e instanceof E1 ? 2763306 : 4296112),
      this.updateLocalizations(e));
    let t = this._window.findChildByName("purchase_cost_box");
    (t != null && this._catalog.utils._ra10ac9ff6556f3(t, e, this.var_1205),
      this.addClickListener("buy_button", this.onBuyButtonClick),
      this.addClickListener("cancel_button", this.onClose),
      this.addClickListener("header_button_close", this.onClose),
      this.hideRaffle(),
      this._window.center(),
      this._catalog.getBoolean("disclaimer.credit_spending.enabled")
        ? (this._window
            .findChildByName("spending_disclaimer")
            ?.addEventListener(u.CLICK, this._rd954e6874382ac),
          this._window
            .findChildByName("spending_disclaimer")
            ?.addEventListener(u.DOUBLE_CLICK, this._rd954e6874382ac),
          this.setDisclaimerAccepted(!1))
        : (this._window.findChildByName("disclaimer")?.dispose(), this.setDisclaimerAccepted(!0)));
    let i = this._window.findChildByName("product_name");
    if (i != null) {
      let b = this._catalog.getProductData(e.localizationId);
      i.text = b == null ? e.localizationId : b.name;
    }
    let s = this._window.findChildByName("quantity");
    s != null &&
      (this._catalog.multiplePurchaseEnabled && this.var_1205 > 1
        ? (s.text = `X ${this.var_1205}`)
        : this._window.findChildByName("properties_itemlist")?.removeListItem(s));
    let o = this._window.findChildByName("freeQuantity");
    if (o != null && ((o.visible = !1), this._catalog._promoInfo)) {
      let b = this._catalog.utils._r98742a906d6f96(this.var_1205);
      ((o.visible = b > 0),
        this._catalog.localization?._r43eae9731f5b27(
          "shop.bonus.items.count",
          "amount",
          b.toString(),
        ));
    }
    let d = this._window.findChildByName("nft_image"),
      c = d?.widget;
    if (e instanceof E1) {
      c.productInfo = new _i959c13e9526cbb(e.productInfo);
      return;
    } else (d != null && (d.visible = !1), c?.clearPreviewer());
    if (this.getIconWrapper() == null) return;
    let l = !1;
    if (db.hasProductImage(e.localizationId)) {
      let b = db.PRODUCT_IMAGES[e.localizationId],
        _ = this._assets.getAssetByName(b);
      _ != null && (this.setImage(_.content, !1), (l = !0));
    }
    if (!l && (e.product != null || e instanceof C1)) {
      let b = null,
        _ = null,
        h = 0,
        p = "";
      if (
        (e instanceof hn &&
          e.product != null &&
          ((h = e.product.productClassId), (p = e.product.extraParam)),
        r == null)
      ) {
        switch (this.productType) {
          case class_1803.PRODUCT_TYPE_STUFF:
            b =
              this._roomEngine?._r5db1beeb89d785(
                h,
                new k(90, 0, 0),
                64,
                this,
                0,
                p,
                -1,
                -1,
                this.var_2364,
              ) ?? null;
            break;
          case class_1803.PRODUCT_TYPE_ITEM:
            b = this._roomEngine?._r3ac60c12dafe70(h, new k(90, 0, 0), 64, this, 0, p) ?? null;
            break;
          case class_1803.PRODUCT_TYPE_EFFECT:
            _ = this._catalog.getPixelEffectIcon(h);
            break;
          case class_1803.PRODUCT_TYPE_CLUB:
            _ = this._catalog.getSubscriptionProductIcon(h);
            break;
          case class_1803.PRODUCT_TYPE_MINT_TOKEN:
            _ =
              this._catalog.getMintTokenProductIcon() ??
              this._assets.getAssetByName("minting_token_large")?.content;
            break;
          case class_1803.PRODUCT_TYPE_CHAT_STYLE:
            _ = this._catalog._rafd5b9130c4bfd.chatStyleLibrary
              ._r22c9347ecec607(Number.parseInt(p, 10))
              ._r270592cedf0213.clone();
            break;
          case class_1803.PRODUCT_TYPE_RENTABLE_BOT:
            _ = this._rcb7ad6255611e0(p);
            break;
          case class_1803.PRODUCT_TYPE_HABBICON:
            ((_ = this.getHabbiconPreviewBitmap(p)), _ == null && (_ = new A(40, 40, !1, 9408399)));
            break;
        }
        b != null && ((_ = b.data), (this.var_2045 = b.id));
      } else _ = r;
      (this.setImage(_, !0),
        RentUtils.updateBuyCaption(e, this._window.findChildByName("buy_button")));
    }
  }
  _rcb7ad6255611e0(e) {
    if (this._catalog == null) return null;
    let r = this._catalog._rf0eb5f07c94cfb._r274f6640e76241(e, fr.LARGE, null, this);
    if (r == null) return null;
    (r.setDirection(class_2123.const_252, 3),
      r._r66a0b6869b9038(ve.EXPRESSION_WAVE),
      r._r66a0b6869b9038(ve.GESTURE, ve.GESTURE_SMILE));
    let t = r._rb09602dca8db26(class_2123.const_252, !0);
    return (r.dispose(), t);
  }
  enableGiftDialogAvatarImage(e) {
    this._window?.findChildByName("avatar_image") != null &&
      (e ? this.updateGiftDialogAvatarImage() : this.updateUnknownSenderAvatarImage());
    let t = this._window?.findChildByName("message_from");
    t != null && (t.visible = e);
  }
  updateGiftDialogAvatarImage() {
    if (this._catalog == null) return;
    let e = this._rac9072fcec5669(this._catalog.sessionDataManager.figure);
    e != null && this.updateAvatarImage(e);
  }
  updateUnknownSenderAvatarImage() {
    let r = this._assets.getAssetByName("gift_incognito")?.content;
    r != null && this.updateAvatarImage(r.clone());
  }
  updateAvatarImage(e) {
    let r = this._window?.findChildByName("avatar_image");
    r != null && ((r.bitmap = e), (r.width = e.width), (r.height = e.height));
  }
  showGiftDialog() {
    this._window?.dispose();
    let e = this._catalog?._re3d3194794691f ?? null;
    if (
      this._catalog == null ||
      e == null ||
      ((this._window = this._catalog.utils.createWindow("gift_wrapping")),
      this._window == null)
    )
      return;
    (this._window.center(),
      this.addClickListener("give_gift_button", this.onGiveGiftButtonClick),
      this.addClickListener("cancel_link_region", this.onCancelGift),
      this.addClickListener("header_button_close", this.onCancelGift));
    let r = this._window.findChildByName("name_input");
    r != null &&
      (this._userName != null ? this.setReceiverName(this._userName) : this.focusNameField(),
      this.updateNameHint(),
      r.addEventListener(y.WINDOW_EVENT_CHANGE, this._r4b0ad48af02e2d),
      r.addEventListener(u.DOWN, this._rbb67e70bc77c1a),
      r.addEventListener(sr.const_900, this._r8073b0c650b96f),
      r.addEventListener(y.const_962, this._r92abce97ff4875),
      r.addEventListener(y.const_1200, this._r8a2a80de2c653d));
    let t = this._window.findChildByName("gift_card");
    if (t != null) {
      let c = this._catalog.getProperty("catalog.gift_wrapping_new.gift_card");
      c !== "" &&
        (t.assetUri = `${this._catalog.getProperty("image.library.url")}Giftcards/${c}.png`);
    }
    let i = this._window.findChildByName("show_face_checkbox");
    i != null &&
      (this.isModerator()
        ? ((i.visible = !0),
          i.select(),
          i.addEventListener(y.const_587, this._r159fbf3af14776),
          i.addEventListener(y.const_774, this._rda7b5558e639df))
        : (i.visible = !1));
    let s = this._window.findChildByName("show_face_checkbox_title");
    (s != null && !this.isModerator() && (s.visible = !1), this.updateGiftDialogAvatarImage());
    let o = this._window.findChildByName("message_input");
    o != null &&
      (this.updateMessageHint(),
      o.addEventListener(y.WINDOW_EVENT_CHANGE, this._r351ef2c10f3f02),
      o.addEventListener(y.const_962, this._r951f56add9da1e),
      o.addEventListener(y.const_1200, this._r027eb03dd5e3b4));
    let d = this._window.findChildByName("message_from");
    if (d != null) {
      let c = this._catalog.sessionDataManager?.userName ?? "",
        f = "catalog.gift_wrapping_new.message_from";
      (this._localization._r43eae9731f5b27(f, "name", c),
        (d.caption = this._localization.getLocalization(f, c)));
    }
    if (
      (this.addClickListener("ribbon_prev", this._rb70b47f1650037),
      this.addClickListener("ribbon_next", this._rbdb45b1a9d1591),
      this.addClickListener("box_prev", this._r532bbfe4719cea),
      this.addClickListener("box_next", this._r0b7f5f301dd921),
      this._localization._r43eae9731f5b27("catalog.gift_wrapping_new.price", "price", e.price.toString()),
      (this.defaultStuffTypes = 0),
      (this._stuffTypes = e._rb29f9a2f27c1e2.slice()),
      (this._boxTypes = e._rc80bbf1ee826e1.slice()),
      (this._ribbonTypes = e._r98e3f6b40b7bbd.slice()),
      e._rb591f9a9abbd60.length > 0)
    ) {
      let c = Math.floor(Math.random() * e._rb591f9a9abbd60.length);
      this.defaultStuffTypes = e._rb591f9a9abbd60[c];
    }
    (this._boxTypes.push(this.defaultStuffTypes),
      (this.var_2039 = this._stuffTypes[0] ?? 0),
      (this.var_246 = this._ribbonTypes[0] ?? 0),
      (this.var_245 = this._catalog.getInteger(
        "catalog.purchase.gift_wrapping.default_box_index",
        0,
      )),
      (this.var_245 < 0 || this.var_245 > this._boxTypes.length - 1) &&
        (this.var_245 = 0),
      this.initColorGrid(),
      this.updateColorGrid(),
      this.updatePreview());
  }
  isModerator() {
    return this._catalog?.sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1;
  }
  isShowPurchaserName() {
    return this.isModerator()
      ? (this._window?.findChildByName("show_face_checkbox")?.isSelected ?? !1)
      : !0;
  }
  _r72ae1fa35aa978() {
    return this._boxTypes[this.var_245] === this.defaultStuffTypes;
  }
  static isValentinesBox(e) {
    return e === 8;
  }
  updateGiftDialogLabels() {
    if (this._window == null || this._window.disposed) return;
    let e = this._r72ae1fa35aa978(),
      r = this._window.findChildByName("pick_box_title");
    if (r != null) {
      let d = e
        ? "catalog.gift_wrapping_new.box.default"
        : `catalog.gift_wrapping_new.box.${this._boxTypes[this.var_245]}`;
      r.text = this._localization._r5f04530d38380d(d)?.value ?? d;
    }
    let t = this._window.findChildByName("pick_box_price_title");
    if (t != null) {
      let d = e ? "catalog.gift_wrapping_new.freeprice" : "catalog.gift_wrapping_new.price";
      t.text = this._localization._r5f04530d38380d(d)?.value ?? d;
    }
    let i = this._window.findChildByName("price_box_container"),
      s = i?.getListItemByName("small_coin") ?? null;
    s != null && i != null && ((s.visible = !e), i.arrangeListItems());
    let o = this._window.findChildByName("pick_ribbon_title");
    if (o != null) {
      let d = `catalog.gift_wrapping_new.ribbon.${this.var_246}`;
      o.text = this._localization._r5f04530d38380d(d)?.value ?? d;
    }
  }
  updatePreview() {
    if (
      this._ribbonTypes.length === 0 ||
      this._boxTypes.length === 0 ||
      this._window == null ||
      this._roomEngine == null
    )
      return;
    (this.var_246 < 0 && (this.var_246 = this._ribbonTypes.length - 1),
      this.var_246 > this._ribbonTypes.length - 1 && (this.var_246 = 0),
      this.var_245 < 0 && (this.var_245 = this._boxTypes.length - 1),
      this.var_245 > this._boxTypes.length - 1 && (this.var_245 = 0));
    let e = this._boxTypes[this.var_245];
    a.isValentinesBox(e) &&
      ((this.var_246 = 10),
      this.var_246 > this._ribbonTypes.length - 1 && (this.var_246 = 0));
    let r = (e * 1e3 + this._ribbonTypes[this.var_246]).toString(),
      t = this.var_2039;
    this._r72ae1fa35aa978()
      ? (this._r9c986a414bcc82(!1), (t = this.defaultStuffTypes), (r = ""))
      : a.isValentinesBox(e)
        ? this._r9c986a414bcc82(!1)
        : (this._r9c986a414bcc82(!0), e >= 3 && e <= 6 && this.enableBoxColorSelectors(!1));
    let s = this._roomEngine._r5db1beeb89d785(t, new k(180), 64, this, 0, r);
    s != null &&
      ((this.var_2045 = s.id),
      this.setImage(s.data, !0),
      this.showSuggestions(!1),
      this.updateGiftDialogLabels());
  }
  initColorGrid() {
    if (this._window == null || this._catalog == null) return;
    let e = this._window.findChildByName("color_grid");
    if (e == null) return;
    e._rbb4c26d068856f();
    let r = this._catalog.utils.createWindow("gift_palette_item");
    if (r != null)
      for (let t of this._stuffTypes) {
        let i = this._catalog.products(t, class_1803.PRODUCT_TYPE_STUFF),
          s = r.clone();
        if (i == null || s == null) continue;
        s.addEventListener(u.CLICK, this._r46c0b19239428d);
        let o = s.findChildByName("color");
        o != null && ((o.color = i.colours[0]), (s.id = t), e.addGridItem(s));
      }
  }
  giveGift() {
    if (this._window == null) return;
    let e = this._window.findChildByName("name_input");
    if (e == null) return;
    let r = this._window.findChildByName("message_input"),
      t = this._r72ae1fa35aa978();
    this._catalog.purchaseProductAsGift(
      this.var_2762,
      this._offerId,
      this.var_1530,
      e.caption,
      r?.caption ?? "",
      t ? this.defaultStuffTypes : this.var_2039,
      t ? 0 : this._boxTypes[this.var_245],
      t ? 0 : this._ribbonTypes[this.var_246],
      this.isShowPurchaserName(),
    );
  }
  _rd954e6874382ac = n((e) => {
    let r = e.target;
    r != null && this.setDisclaimerAccepted(r.isSelected);
  }, "_rd954e6874382ac");
  setDisclaimerAccepted(e) {
    let r = this._window?.findChildByName("buy_button");
    r != null && (e ? r.enable() : r.disable());
  }
  updateLocalizations(e) {
    if (this._catalog == null) return;
    let r = this._catalog.getProductData(e.localizationId),
      t = r == null ? "" : r.name;
    this._catalog.windowManager.registerLocalizationParameter(
      "catalog.purchase.confirmation.dialog.costs",
      "offer_name",
      t,
    );
  }
  addClickListener(e, r) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, r);
  }
  _r82f93440abf190(e) {
    this._window?.findChildByName(e)?.disable();
  }
  safeEnable(e) {
    this._window?.findChildByName(e)?.enable();
  }
  onBuyButtonClick = n((e) => {
    if (
      this._catalog != null &&
      !(
        this.var_422 === class_1803.PRODUCT_TYPE_HABBICON &&
        !this._catalog.getBoolean("habbicons.enabled")
      )
    ) {
      if (
        this.var_422 === class_1803.PRODUCT_TYPE_HABBICON &&
        this._catalog.isHabbiconOfferOwned(this.var_1429)
      ) {
        this._catalog.showHabbiconAlreadyOwnedAlert();
        return;
      }
      (this._r82f93440abf190("buy_button"),
        this._r82f93440abf190("cancel_button"),
        this._r82f93440abf190("publish_check"),
        this.var_422 === class_1803.PRODUCT_TYPE_GAME_TOKEN
          ? this._catalog._r8f771ef1b983d3(this.var_1530)
          : this.var_422 === class_1803.PRODUCT_TYPE_MINT_TOKEN
            ? this._catalog._rc79553615de4fc(this._offerId, this.var_1530)
            : this.var_422 === class_1803.PRODUCT_TYPE_NFT
              ? this._catalog._r7e9b849f6d14ca(this._r4330c8e8aba977, this.var_1530)
              : (this._catalog.purchaseProduct(
                  this.var_2762,
                  this._offerId,
                  this.var_1530,
                  this.var_1205,
                ),
                this._catalog.currentPage?.dispatchWidgetEvent(new _ic4d6c8d627ab4e(CatalogWidgetEventEnum.PURCHASE))));
    }
  }, "onBuyButtonClick");
  _rc47b690d70e04d = n((e) => {
    (this.showGiftDialog(),
      ll.getInstance().trackEventLog("Catalog", "clickConfirm", "client.buy_as_gift.clicked"));
  }, "_rc47b690d70e04d");
  onClose = n((e) => {
    (this._catalog._r84a501652af661(), this.dispose());
  }, "onClose");
  onGiveGiftButtonClick = n((e) => {
    (this.giveGift(),
      this.enableGiftButton(!1),
      this._catalog != null &&
        ((this._catalog._r047e7cd71777de = null), this._catalog._r84a501652af661()));
  }, "onGiveGiftButtonClick");
  onCancelGift = n((e) => {
    (this._catalog._r84a501652af661(), this.dispose());
  }, "onCancelGift");
  _rb70b47f1650037 = n((e) => {
    (this.var_246--, this.updatePreview());
  }, "_rb70b47f1650037");
  _rbdb45b1a9d1591 = n((e) => {
    (this.var_246++, this.updatePreview());
  }, "_rbdb45b1a9d1591");
  _r532bbfe4719cea = n((e) => {
    (this.var_245--, this.updatePreview());
  }, "_r532bbfe4719cea");
  _r0b7f5f301dd921 = n((e) => {
    (this.var_245++, this.updatePreview());
  }, "_r0b7f5f301dd921");
  _r4b0ad48af02e2d = n((e) => {
    let r = e.target;
    if (r == null || (this.updateNameHint(), this._r1ec554ee425ee1 === r.caption)) return;
    let t = r.caption.toLowerCase(),
      i = [];
    for (let s of this.var_474 ?? [])
      if ((s.toLowerCase().search(t) !== -1 && i.push(s), i.length >= a.MAX_SUGGESTIONS)) break;
    ((this._r1ec554ee425ee1 = r.caption), this.updateSuggestions(i));
  }, "_r4b0ad48af02e2d");
  _rbb67e70bc77c1a = n((e) => {
    this.showSuggestions(!1);
  }, "_rbb67e70bc77c1a");
  _r8073b0c650b96f = n((e) => {
    let r = e,
      t = e.target;
    switch (r.keyCode) {
      case 38:
        this.highlightSuggestion(this._rcb006f1d877d80 - 1);
        break;
      case 40:
        (this.highlightSuggestion(this._rcb006f1d877d80 + 1),
          t != null &&
            t.caption.length === 0 &&
            (this.var_434 == null || !this.var_434.visible) &&
            this._ra2fdd30bd95136() &&
            this.highlightSuggestion(0));
        break;
      case Fi.ENTER:
        this.selectHighlighted();
        break;
      case Fi.TAB:
        this._r5e1ddd84af2105();
        break;
    }
  }, "_r8073b0c650b96f");
  _ra2fdd30bd95136() {
    if ((this.var_474?.length ?? 0) === 0) return !1;
    let e = [];
    for (let r of this.var_474 ?? []) if ((e.push(r), e.length >= a.MAX_SUGGESTIONS)) break;
    return (this.updateSuggestions(e), this.showSuggestions(!0), !0);
  }
  focusNameField() {
    let e = this._window?.findChildByName("name_input");
    e != null && ((e.visible = !0), e.focus());
  }
  _r5e1ddd84af2105() {
    let e = this._window?.findChildByName("message_input");
    e != null && ((e.visible = !0), e.focus());
  }
  selectHighlighted() {
    if (this.var_434 == null || !this.var_434.visible) return;
    let t = this.var_434
      .findChildByName("suggestion_list")
      ?.getListItemAt(this._rcb006f1d877d80)
      ?.findChildByName("name_text");
    t != null && (this.setReceiverName(t.caption), this.showSuggestions(!1));
  }
  showSuggestions(e) {
    this.var_434 != null && ((this.var_434.visible = e), e || this.showMessageInput(!0));
  }
  showMessageInput(e) {
    let r = this._window?.findChildByName("message_input");
    r != null && (r.visible = e);
  }
  _r351ef2c10f3f02 = n((e) => {
    this.updateMessageHint();
  }, "_r351ef2c10f3f02");
  _r92abce97ff4875 = n((e) => {
    this.updateNameHint();
  }, "_r92abce97ff4875");
  _r8a2a80de2c653d = n((e) => {
    this.updateNameHint();
  }, "_r8a2a80de2c653d");
  _r951f56add9da1e = n((e) => {
    (this.updateMessageHint(), this.showSuggestions(!1));
  }, "_r951f56add9da1e");
  _r027eb03dd5e3b4 = n((e) => {
    this.updateMessageHint();
  }, "_r027eb03dd5e3b4");
  updateNameHint() {
    let e = this._window?.findChildByName("name_input");
    e != null &&
      this.enableHint(
        e.caption == null || e.caption.length === 0,
        "name_input_hint",
        "catalog.gift_wrapping_new.name_hint",
      );
  }
  updateMessageHint() {
    let e = this._window?.findChildByName("message_input");
    e != null &&
      this.enableHint(
        e.caption == null || e.caption.length === 0,
        "message_input_hint",
        "catalog.gift_wrapping_new.message_hint",
      );
  }
  enableHint(e, r, t) {
    let i = this._window?.findChildByName(r);
    i != null && ((i.text = this._localization.getLocalization(t)), (i.visible = e));
  }
  enableRibbonSelectors(e) {
    this._window != null &&
      (this.enableWindow(this._window.findChildByName("ribbon_prev"), e),
      this.enableWindow(this._window.findChildByName("ribbon_next"), e),
      this.enableWindow(this._window.findChildByName("pick_ribbon_title"), e));
  }
  _r9c986a414bcc82(e) {
    (this.enableBoxColorSelectors(e), this.enableRibbonSelectors(e));
  }
  enableBoxColorSelectors(e) {
    this._window != null &&
      (this.enableWindow(this._window.findChildByName("box_color_title"), e),
      this.enableWindow(this._window.findChildByName("color_picker_container"), e));
  }
  enableWindow(e, r) {
    if (e != null && (this.enableElement(e, r), !!this._ra185fd1172d8db(e)))
      for (let t = 0; t < e.numChildren; t++) {
        let i = e.getChildAt(t);
        i != null && (this.enableElement(i, r), this._ra185fd1172d8db(i) && this.enableWindow(i, r));
      }
  }
  enableElement(e, r) {
    r ? ((e.blend = 1), e.enable()) : ((e.blend = 0.5), e.disable());
  }
  updateSuggestions(e) {
    if (
      this._window == null ||
      this._catalog == null ||
      (this.var_434 == null &&
        (this.var_434 = this._window.findChildByName("suggestion_container")),
      this._re6ded0c3489349 == null &&
        (this._re6ded0c3489349 = this._catalog.utils.createWindow("suggestion_list_item_new")),
      this.var_434 == null || this._re6ded0c3489349 == null)
    )
      return;
    let r = this.var_434.findChildByName("suggestion_list");
    if (r == null) return;
    if ((r.removeListItems(), e.length === 0)) {
      this.showSuggestions(!1);
      return;
    }
    this.showSuggestions(!0);
    let t = 0;
    for (let i of e) {
      let s = this._re6ded0c3489349.clone();
      if (s == null) continue;
      (s.addEventListener(u.CLICK, this._r394e8108a3ee92), s.addEventListener(u.OVER, this._rf5a3505a4b102a));
      let o = s.findChildByName("name_text");
      if (o != null) {
        if (((o.text = i), this._r1ec554ee425ee1.length > 0)) {
          let d = i.toLowerCase().search(this._r1ec554ee425ee1.toLowerCase());
          if (d !== -1) {
            let c = o._rd835b98973eaf7();
            ((c.bold = !0), o._rf728d1a4d87da8(c, d, Math.min(d + this._r1ec554ee425ee1.length, i.length)));
          }
        }
        r.addListItem(s);
      }
      ((s.color = this.getColor(t)), t++);
    }
    (this.showMessageInput(e.length < 2), this.highlightSuggestion(0));
  }
  _r394e8108a3ee92 = n((e) => {
    let r = e.target?.findChildByName("name_text");
    r != null && (this.setReceiverName(r.text), this.showSuggestions(!1));
  }, "_r394e8108a3ee92");
  _rf5a3505a4b102a = n((e) => {
    let r = e.target,
      t = this.var_434?.findChildByName("suggestion_list");
    r == null || t == null || this.highlightSuggestion(t.getListItemIndex(r));
  }, "_rf5a3505a4b102a");
  highlightSuggestion(e) {
    if (this.var_434 == null) return;
    let r = this.var_434.findChildByName("suggestion_list");
    if (r == null) return;
    let t = r.getListItemAt(this._rcb006f1d877d80);
    (t != null && (t.color = this.getColor(this._rcb006f1d877d80)),
      (this._rcb006f1d877d80 = e),
      this._rcb006f1d877d80 < 0 && (this._rcb006f1d877d80 = r.numListItems - 1),
      this._rcb006f1d877d80 >= r.numListItems && (this._rcb006f1d877d80 = 0));
    let i = r.getListItemAt(this._rcb006f1d877d80);
    i != null && (i.color = a.COLOR_HIGHLIGHT);
  }
  getColor(e) {
    return e % 2 === 0 ? a.COLOR_EVEN : a.COLOR_ODD;
  }
  setReceiverName(e) {
    let r = this._window?.findChildByName("name_input");
    r != null && ((r.caption = e), this.updateNameHint(), this._r5e1ddd84af2105());
  }
  _r46c0b19239428d = n((e) => {
    let r = e.target;
    r != null && ((this.var_2039 = r.id), this.updateColorGrid(), this.updatePreview());
  }, "_r46c0b19239428d");
  updateColorGrid() {
    let e = this._window?.findChildByName("color_grid");
    if (e != null)
      for (let r = 0; r < e._r72acf104e2c444; r++) {
        let t = e.getGridItemAt(r),
          i = t?.findChildByName("selection");
        i != null && t != null && (i.visible = t.id === this.var_2039);
      }
  }
  _r159fbf3af14776 = n((e) => {
    (this.enableGiftDialogAvatarImage(!0), this.updateGiftDialogAvatarImage());
  }, "_r159fbf3af14776");
  _rda7b5558e639df = n((e) => {
    this.enableGiftDialogAvatarImage(!1);
  }, "_rda7b5558e639df");
  _r079944701b6df1 = n((e) => {
    (e.dispose(), this.enableGiftButton(!0));
  }, "_r079944701b6df1");
  enableGiftButton(e) {
    let r = this._window?.findChildByName("give_gift_button");
    r != null && (e ? r.enable() : r.disable());
  }
  _ra185fd1172d8db(e) {
    return typeof e.numChildren == "number";
  }
  hideRaffle() {
    let e = this._window?.findChildByName("raffle_container");
    e != null &&
      e.visible &&
      ((e.visible = !1),
      this.var_556 != null &&
        this._catalog?.notifications?.addItem("${notification.raffle.ongoing}", NotificationType.LTD));
  }
  _r1c2995b7d00c9f = n(() => {
    ((this._r074e161940145d += 1),
      this._r074e161940145d > 14 && (this._r074e161940145d = 1),
      this.updateDots());
  }, "_r1c2995b7d00c9f");
  updateDots() {
    let e = this._window?.findChildByName("raffle_text");
    if (e == null) return;
    let r = this._localization.getLocalization("catalog.purchase.confirmation.dialog.raffling");
    for (let t = 0; t < this._r074e161940145d; t++) r += ".";
    e.text = r;
  }
  getHabbiconPreviewBitmap(e) {
    let r = Dr.getPreviewBitmap(Number(e) | 0, !1);
    return r != null ? r.clone() : null;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 193624.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/PurchaseCatalogWidget.as
// Obfuscated name: _if9f2584d23cc7d

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "PurchaseCatalogWidget");
  }
  _stubPurchaseVipXML = null;
  _r9e7d5c2b544a9a = null;
  _offer = null;
  _additionalParameters = "";
  _r0f4bf34d93e5b4 = null;
  var_1205 = 1;
  _r6103d5956dbbe0 = null;
  var_3713 = !1;
  var_5662 = !1;
  var_1285 = !0;
  dispose() {
    this.disposed ||
      (this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SET_EXTRA_PARAMETER, this._r6807178fec6357),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.PURCHASE_OVERRIDE, this._r72a48decf21755),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.INIT_PURCHASE, this._rc62e4bae4dce94),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SET_PREVIEWER_STUFFDATA, this._r6e02f2252bea2c),
      this.events?.removeEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._rbb003df90760c9),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.EXTRA_PARAM_REQUIRED_FOR_BUY, this._r246485ada9fcec),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.TOGGLE, this._r41a53f1a6677c3),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    if (this._catalog?._r28a444d88bee4d === CatalogType.BUILDER)
      return (this._window != null && (this._window.visible = !1), !0);
    (this._rd7318259311b4b(CatalogWidgetEnum.PURCHASE),
      this._window?.findChildByName("selection_information")?.setParamFlag?.(0, !0),
      this._window?.findChildByName("selection_information") != null &&
        (this._window.findChildByName("selection_information").visible = !0),
      this._window?.findChildByName("default_buttons") != null &&
        (this._window.findChildByName("default_buttons").visible = !1),
      (this.var_3713 = !1),
      this.window?.tags.indexOf("ROOM_INITIATE_PURCHASE") !== -1 && this._catalog?._ra4fb77354d81ca(),
      this._window?.findChildByName("buy_button")?.addEventListener(u.CLICK, this._r7f47dd305b3bb7));
    let r = this._window?.findChildByName("gift_button");
    (this.window?.tags.indexOf("NO_GIFT_OPTION") !== -1 &&
      ((this.var_3713 = !0), r != null && (r.visible = !1)),
      r?.addEventListener(u.CLICK, this._r63fe7bb7138a9e),
      r?.disable());
    let t = this._catalog?.assets.getAssetByName("purchaseWidgetBuyVipStub");
    return (
      (this._stubPurchaseVipXML = t?.content ?? null),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._rae8e17ddaeb413),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SET_EXTRA_PARAMETER, this._r6807178fec6357),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.PURCHASE_OVERRIDE, this._r72a48decf21755),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.INIT_PURCHASE, this._rc62e4bae4dce94),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SET_PREVIEWER_STUFFDATA, this._r6e02f2252bea2c),
      this.events?.addEventListener?.(CatalogWidgetSpinnerEvent.VALUE_CHANGED, this._rbb003df90760c9),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.EXTRA_PARAM_REQUIRED_FOR_BUY, this._r246485ada9fcec),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.TOGGLE, this._r41a53f1a6677c3),
      !0
    );
  }
  _r41a53f1a6677c3 = n((r) => {
    r._r3bce8f678ed248 === CatalogWidgetEnum.PURCHASE &&
      ((this.var_1285 = r.enabled),
      this.window != null && (this.window.visible = this.var_1285));
  }, "_r41a53f1a6677c3");
  _r72a48decf21755 = n((r) => {
    this._r6103d5956dbbe0 = r.callback;
  }, "_r72a48decf21755");
  _r26d7bd54912b01(r) {
    this._r9e7d5c2b544a9a != null &&
      this._window != null &&
      ((this._r9e7d5c2b544a9a.visible = !1),
      this._window.removeChild(this._r9e7d5c2b544a9a),
      this._r9e7d5c2b544a9a.dispose(),
      (this._r9e7d5c2b544a9a = null));
  }
  get extraParamRequirementsMet() {
    return !(this.var_5662 && this._additionalParameters === "");
  }
  get canPurchaseSelectedOffer() {
    return this.extraParamRequirementsMet && !this._catalog?.isHabbiconOwned(this._offer);
  }
  updatePurchaseLabel() {
    let r = this._window?.findChildByName("purchase_label");
    r != null &&
      (this._catalog?.isHabbiconOwned(this._offer)
        ? (r.caption = "${generic.owned}")
        : RentUtils.updateBuyCaption(this._offer, r));
  }
  _rae8e17ddaeb413 = n((r) => {
    ((this.var_1205 = 1), (this._offer = r.offer));
    let t = this._window?.findChildByName("selection_information"),
      i = this._window?.findChildByName("default_buttons");
    if (
      (t != null && (t.visible = !1),
      i != null && (i.visible = !0),
      this._r26d7bd54912b01(this._offer),
      this._catalog?._ra2855e753d5c74(!1),
      this._r9e7d5c2b544a9a == null)
    ) {
      (this.enableBuyButton(this.canPurchaseSelectedOffer),
        this.enableGiftButton(this.canPurchaseSelectedOffer),
        this.updatePurchaseLabel());
      let s = this._window?.findChildByName("gift_button");
      (s != null && (s.visible = !this._offer.isRentOffer && !this.var_3713),
        this._offer.giftable || this.enableGiftButton(!1),
        this._r672e99085b17ea(this._offer) &&
          (this.enableBuyButton(!1), this.enableGiftButton(!1)),
        this.window != null && (this.window.visible = this.var_1285));
    } else (this.enableBuyButton(!1), this.enableGiftButton(!1));
  }, "_rae8e17ddaeb413");
  _r672e99085b17ea(r) {
    if (r != null && r.pricingModel === hn.PRICING_MODEL_SINGLE) {
      let t = this._offer?.product ?? null;
      return t?._r651925293e1d0b === !0 && t._r807decfd331c6c === 0;
    }
    return !1;
  }
  enableBuyButton(r) {
    (this._catalog?.sessionDataManager?.isAccountSafetyLocked() && (r = !1),
      this.enableButton("buy_button", r));
  }
  enableGiftButton(r) {
    (this._catalog?.sessionDataManager?.isAccountSafetyLocked() && (r = !1),
      this.enableButton("gift_button", r));
  }
  enableButton(r, t) {
    let i = this._window?.findChildByName(r);
    i != null && (t ? (i.enable(), (i.blend = 1)) : (i.disable(), (i.blend = 0.5)));
  }
  _r6807178fec6357 = n((r) => {
    ((this._additionalParameters = r.parameter),
      this.enableBuyButton(this.canPurchaseSelectedOffer),
      this.enableGiftButton(
        this._offer != null &&
          this._offer.giftable &&
          this.canPurchaseSelectedOffer &&
          this.var_1205 === 1,
      ));
  }, "_r6807178fec6357");
  _r7f47dd305b3bb7 = n((r, t = !1) => {
    if (this._catalog?.isHabbiconOwned(this._offer)) {
      this._catalog.showHabbiconAlreadyOwnedAlert();
      return;
    }
    if (!this._catalog?._r3d62135cd02425(this._offer?.clubLevel ?? 0)) {
      this._catalog?.openClubCenter();
      return;
    }
    if ((this._catalog._ra2855e753d5c74(t), this._r6103d5956dbbe0 == null)) {
      if (this._offer != null) {
        let i = this._catalog._rc7dd5dfdda40b8;
        if (i != null && i.offerId === this._offer.offerId) {
          if (i.flatId === 0) {
            this._catalog.windowManager.alert(
              "${roomad.error.title}",
              "${roomad.alert.no.available.room}",
              0,
              this._r035155686c0ed8,
            );
            return;
          }
          if (i.name == null || i.name.length < 5 || i.name.startsWith(" ")) {
            this._catalog.windowManager.alert(
              "${roomad.error.title}",
              "${roomad.alert.name.empty}",
              0,
              this._r035155686c0ed8,
            );
            return;
          }
        }
        this._catalog.showPurchaseConfirmation(
          this._offer,
          this.page?.pageId ?? 0,
          this._additionalParameters,
          this.var_1205,
          this._r0f4bf34d93e5b4,
          null,
          !0,
          null,
        );
      }
    } else this._r6103d5956dbbe0(r);
  }, "_r7f47dd305b3bb7");
  _r63fe7bb7138a9e = n((r) => {
    (this._r7f47dd305b3bb7(r, !0),
      ll.getInstance()?.trackEventLog("Catalog", "click", "client.buy_as_gift.clicked"));
  }, "_r63fe7bb7138a9e");
  _rc62e4bae4dce94 = n((r) => {
    if (this._offer != null) {
      if (this._catalog?.isHabbiconOwned(this._offer)) {
        this._catalog.showHabbiconAlreadyOwnedAlert();
        return;
      }
      this._catalog?.showPurchaseConfirmation(
        this._offer,
        this.page?.pageId ?? 0,
        this._additionalParameters,
        this.var_1205,
        this._r0f4bf34d93e5b4,
        null,
        !0,
        null,
      );
    }
  }, "_rc62e4bae4dce94");
  _rc3ab99c27d04f4 = n((r) => {
    (this._catalog?.rememberPageDuringVipPurchase(this.page?.pageId ?? 0),
      this._catalog?.openClubCenter(),
      ll.getInstance()?.trackEventLog("Catalog", "click", "BUY_CLUB"));
  }, "_rc3ab99c27d04f4");
  _r6e02f2252bea2c = n((r) => {
    this._r0f4bf34d93e5b4 = r.stuffData;
  }, "_r6e02f2252bea2c");
  _rbb003df90760c9 = n((r) => {
    ((this.var_1205 = r.value),
      this.var_1205 > 1
        ? this.enableGiftButton(!1)
        : this._offer != null &&
          this.extraParamRequirementsMet &&
          this.enableGiftButton(this._offer.giftable && this.canPurchaseSelectedOffer));
  }, "_rbb003df90760c9");
  _r246485ada9fcec = n((r) => {
    ((this.var_5662 = !0),
      this.enableBuyButton(this.canPurchaseSelectedOffer),
      this.enableGiftButton(
        this._offer != null && this.canPurchaseSelectedOffer && this.var_1205 === 1,
      ));
  }, "_r246485ada9fcec");
  _r035155686c0ed8 = n((r, t) => {
    r?.dispose();
  }, "_r035155686c0ed8");
}

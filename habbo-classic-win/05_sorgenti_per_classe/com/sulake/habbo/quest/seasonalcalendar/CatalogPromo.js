// Extracted from HabboAirLauncher.deobf.js, line 270911.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/seasonalcalendar/CatalogPromo.as
// Obfuscated name: _i49ec19652f828e

class {
  constructor(e) {
    this._questEngine = e;
  }
  static {
    n(this, "CatalogPromo");
  }
  _window = null;
  var_36 = null;
  var_1920 = null;
  _offerId = -1;
  var_2762 = -1;
  _r6cd131a8bc5c5a = null;
  _r8a5bfd603cf4e0 = null;
  _r06443185331902 = null;
  dispose() {
    (this.var_36 != null &&
      (this._r8a5bfd603cf4e0 != null &&
        (this.var_36.removeMessageEvent(this._r8a5bfd603cf4e0), (this._r8a5bfd603cf4e0 = null)),
      this._r06443185331902 != null &&
        (this.var_36.removeMessageEvent(this._r06443185331902), (this._r06443185331902 = null))),
      (this.var_36 = null),
      (this.var_1920 = null),
      (this._r6cd131a8bc5c5a = null),
      (this._window = null),
      (this._questEngine = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  onActivityPoints(e, r) {
    e === this.getActivityPointType() &&
      (this._questEngine?.localization._r43eae9731f5b27(
        "quests.seasonalcalendar.promo.balance",
        "amount",
        `${r}`,
      ),
      this._window != null && this.refresh());
  }
  prepare(e) {
    this._window = e.findChildByName("catalog_promo_cont");
    let r = this._window?.findChildByName("buy_button") ?? null;
    (r?.disable(),
      r != null && (r.procedure = this.onBuyButton),
      (this.var_36 = this._questEngine?.communication?.connection ?? null),
      this.var_36 != null &&
        ((this._r8a5bfd603cf4e0 = new UnkMessageEvent_9bce94(this._r860543b2d5d3ca)),
        (this._r06443185331902 = new UnkMessageEvent_348055(this._re56e1750c0b414)),
        this.var_36.addMessageEvent(this._r8a5bfd603cf4e0),
        this.var_36.addMessageEvent(this._r06443185331902),
        this.var_36.send(new class_3729())));
  }
  refresh() {
    let e = this._window?.findChildByName("your_balance_txt"),
      r = this._window?.findChildByName("currency_icon_cont");
    if (e != null && r != null) {
      r.x = e.x + e.width;
      for (let s = 0; s < r.numChildren; s++) {
        let o = r.getChildAt(s);
        o != null && (o.visible = !1);
      }
      let i = r.findChildByName(`currency_icon_${this.getActivityPointType()}`);
      i != null && (i.visible = !0);
    }
    if (this.var_1920 == null) return;
    let t = null;
    (this.var_1920.productType === ps.PRODUCT_TYPE_ITEM
      ? (t =
          this._questEngine?.roomEngine?._r3ac60c12dafe70(
            this.var_1920._r31d173d62fa550,
            new k(90, 0, 0),
            64,
            this,
            0,
            this.var_1920.extraParam,
          ) ?? null)
      : this.var_1920.productType === ps.PRODUCT_TYPE_STUFF &&
        (t =
          this._questEngine?.roomEngine?._r5db1beeb89d785(
            this.var_1920._r31d173d62fa550,
            new k(90, 0, 0),
            64,
            this,
          ) ?? null),
      t?.data != null && this.setPromoFurniImage(t.data));
  }
  imageReady(e, r) {
    this.setPromoFurniImage(r);
  }
  imageFailed(e) {}
  productDataReady() {
    let e = this._r6cd131a8bc5c5a;
    ((this._r6cd131a8bc5c5a = null), e != null && this._r860543b2d5d3ca(e));
  }
  getActivityPointType() {
    let e = this._questEngine?.configuration?.getProperty("seasonalQuestCalendar.currency") ?? "",
      r = Number(e);
    return Number.isNaN(r) ? 0 : r;
  }
  onBuyButton = n((e, r) => {
    e.type === u.CLICK &&
      this._offerId !== -1 &&
      this._questEngine?.catalog?._rb54f79cedd3062(
        this.var_2762,
        this._offerId,
        CatalogType.NORMAL,
      );
  }, "onBuyButton");
  _r860543b2d5d3ca = n((e) => {
    this._window?.findChildByName("buy_button")?.enable();
    let r = this._questEngine?.sessionDataManager.getProductData(e.offer.localizationId) ?? null;
    r != null
      ? this.onDailyOfferMessage(r, e)
      : this._r6cd131a8bc5c5a == null &&
        ((this._r6cd131a8bc5c5a = e),
        this._questEngine?.sessionDataManager.addProductsReadyEventListener(this));
  }, "_r860543b2d5d3ca");
  onDailyOfferMessage(e, r) {
    let t = this._window?.findChildByName("promo_info");
    (t != null && (t.text = e.name),
      (this.var_2762 = r.pageId),
      (this._offerId = r.offer.offerId),
      r.offer.products.length > 0 && ((this.var_1920 = r.offer.products[0] ?? null), this.refresh()));
  }
  setPromoFurniImage(e) {
    let r = this._window?.findChildByName("furni_preview");
    if (r == null) return;
    let t = new A(r.width, r.height, !0, 0),
      i = e.rect.clone();
    (i.width > t.rect.width && ((i.x = (i.width - t.rect.width) / 2), (i.width = t.rect.width)),
      i.height > t.rect.height && ((i.y = (i.height - t.rect.height) / 2), (i.height = t.rect.height)));
    let s = new E(0, 0);
    (t.rect.width > i.width && (s.x = (t.rect.width - i.width) / 2),
      t.rect.height > i.height && (s.y = (t.rect.height - i.height) / 2),
      t.copyPixels(e, i, s),
      (r.bitmap = t));
  }
  _re56e1750c0b414 = n((e) => {
    this.var_36?.send(new class_3729());
  }, "_re56e1750c0b414");
}

// Estratto da HabboAirLauncher.deobf.js, riga 241919.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/marketplace/MarketplaceView.as
// Nome offuscato: _ia2332e24c202f7

class {
  constructor(e, r, t, i, s, o) {
    this.var_38 = e;
    this._windowManager = r;
    this.var_997 = t;
    this._roomEngine = i;
    this._localization = s;
    this.var_5222 = o;
  }
  static {
    n(this, "MarketplaceView");
  }
  _view = null;
  _disposed = !1;
  _rbf02335db445b4 = 0;
  var_3630 = 0;
  _offerAmount = 1;
  _maxOfferAmount = 1;
  _furniName = "";
  var_2970 = 0;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this.var_38 = null),
      (this._windowManager = null),
      (this.var_997 = null),
      (this._roomEngine = null),
      (this._localization = null),
      (this.var_5222 = null),
      this.disposeView(),
      (this._disposed = !0));
  }
  showBuyTokens(e, r) {
    (this._localization?._r43eae9731f5b27("inventory.marketplace.buy_tokens.info", "price", String(e)),
      this._localization?._r43eae9731f5b27("inventory.marketplace.buy_tokens.info", "count", String(r)),
      this._localization?._r43eae9731f5b27("inventory.marketplace.buy_tokens.info", "free", String(r - 1)),
      this._localization?._r43eae9731f5b27("inventory.marketplace.buy_tokens.buy", "price", String(e)),
      (this._view = this.createWindow("buy_marketplace_tokens_xml")),
      this._view != null &&
        ((this._view.procedure = (t, i) => this.clickHandler(t, i)), this._view.center()));
  }
  showMakeOffer(e, r) {
    if (
      e == null ||
      this._localization == null ||
      this._roomEngine == null ||
      this.var_38 == null ||
      ((this._maxOfferAmount = Math.max(1, Math.trunc(r))),
      (this._offerAmount = 1),
      this._localization._r43eae9731f5b27(
        "sellinmarketplace.amount",
        "max_amount",
        String(this._maxOfferAmount),
      ),
      (this._view = this.createWindow("make_marketplace_offer_xml")),
      this._view == null)
    )
      return;
    let t = this._view.findChildByName("price_input");
    t != null && (t.restrict = "0-9");
    let i = this._view.findChildByName("amount_input");
    (i != null && ((i.restrict = "0-9"), (i.text = String(this._offerAmount))),
      this.checkPrice(),
      this._localization._r43eae9731f5b27(
        "inventory.marketplace.make_offer.expiration_info_days",
        "days",
        String(this.var_38._r006253b58c8103 / 24),
      ),
      this._localization._r43eae9731f5b27(
        "inventory.marketplace.make_offer.min_price",
        "minprice",
        String(this.var_38._ra450591baf0c72),
      ),
      this._localization._r43eae9731f5b27(
        "inventory.marketplace.make_offer.max_price",
        "maxprice",
        String(this.var_38._r742515fbd69d4b),
      ));
    let s = 4293848814,
      o = null;
    if (
      (e.isWallItem
        ? (o = this._roomEngine._r3ac60c12dafe70(
            e.type,
            new k(90, 0, 0),
            64,
            this,
            s,
            e.stuffData.getLegacyString(),
          ))
        : (o = this._roomEngine._r5db1beeb89d785(e.type, new k(90, 0, 0), 64, this, s, String(e.extra))),
      o == null)
    )
      return;
    ((this._rbf02335db445b4 = o.id), this.setFurniImage(o.data));
    let d = e.isWallItem ? `wallItem.name.${e.type}` : `roomItem.name.${e.type}`,
      c = e.isWallItem ? `wallItem.desc.${e.type}` : `roomItem.desc.${e.type}`;
    if (
      (e.category === class_1901.POSTER &&
        ((d = `poster_${e.stuffData.getLegacyString()}_name`),
        (c = `poster_${e.stuffData.getLegacyString()}_desc`)),
      (this._furniName = this._localization.getLocalization(d, d)),
      this.setText("furni_name", `\${${d}}`),
      this.setText("furni_desc", `\${${c}}`),
      (this._view.procedure = (f, l) => this.clickHandler(f, l)),
      this._view.center(),
      this.resetPriceStats(),
      e.stuffData.uniqueSerialNumber > 0)
    ) {
      let f = this._view.findChildByName("unique_item_overlay_widget");
      if (f?.widget != null) {
        f.visible = !0;
        let l = f.widget;
        ((l.serialNumber = e.stuffData.uniqueSerialNumber),
          (l.seriesSize = e.stuffData.uniqueSeriesSize));
      }
    }
    if (e.stuffData.rarityLevel >= 0) {
      let f = this._view.findChildByName("rarity_item_overlay_widget");
      if (f?.widget != null) {
        f.visible = !0;
        let l = f.widget;
        l.rarityLevel = e.stuffData.rarityLevel;
      }
    }
    this.var_38.rarityLevel();
  }
  showNoCredits(e) {
    (this._localization?._r43eae9731f5b27("inventory.marketplace.no_credits.info", "price", String(e)),
      (this._view = this.createWindow("marketplace_no_credits_xml")),
      this._view != null &&
        ((this._view.procedure = (r, t) => this.clickHandler(r, t)), this._view.center()));
  }
  showResult(e) {
    let r =
        e === 1
          ? "${inventory.marketplace.result.title.success}"
          : "${inventory.marketplace.result.title.failure}",
      t = `\${inventory.marketplace.result.${e}}`;
    this._windowManager?.alert(r, t, 0, (i, s) => this._r43906d3b7820c1(i, s));
  }
  showAlert(e, r) {
    this._windowManager?.alert(e, r, 0, (t, i) => this._r43906d3b7820c1(t, i));
  }
  updateItemStats(e, r) {
    if (this._view == null || this._localization == null || e == null) return;
    ((this.var_2970 = e.suggestedPrice),
      this.updatePriceStatLine(
        "average_price",
        "inventory.marketplace.make_offer.average_price",
        e._r4696ae664425c4,
        r,
      ),
      this.updatePriceStatLine(
        "lowest_price",
        "inventory.marketplace.make_offer.lowest_price",
        e.lowestCurrentPrice,
      ),
      this.updatePriceStatLine(
        "suggested_price",
        "inventory.marketplace.make_offer.suggested_price",
        e.suggestedPrice,
      ));
    let t = this._view.findChildByName("copy_suggested_price_button");
    t != null && (t.visible = e.suggestedPrice > 0);
  }
  imageReady(e, r) {
    this._rbf02335db445b4 === e && this.setFurniImage(r);
  }
  imageFailed(e) {}
  disposeView() {
    this._view != null && (this._view.dispose(), (this._view = null));
  }
  setFurniImage(e) {
    if (e == null || this._view == null) return;
    let r = this._view.findChildByName("furni_image");
    if (r == null) return;
    let t = new A(r.width, r.height, !0, 0),
      i = (t.width - e.width) * 0.5,
      s = (t.height - e.height) * 0.5;
    (t.draw(e, new Pe(1, 0, 0, 1, i, s)), (r.bitmap = t));
  }
  setText(e, r) {
    let t = this._view?.findChildByName(e);
    t != null && (t.text = r);
  }
  showConfirmation() {
    if (this._localization == null || this._windowManager == null) return;
    let e = this._rce9c44fef012fa(this.var_3630),
      r = "inventory.marketplace.confirm_offer.info",
      t = e,
      i;
    (this._offerAmount > 1 &&
      ((r = "inventory.marketplace.confirm_offer.info.multiple"), (t = this.var_3630)),
      this._offerAmount > 1
        ? (i = this._localization.getLocalizationWithParams(
            r,
            r,
            "amount",
            String(this._offerAmount),
            "furniname",
            this._furniName,
            "price",
            String(t),
            "total",
            String(e * this._offerAmount),
          ))
        : (i = this._localization.getLocalizationWithParams(
            r,
            r,
            "furniname",
            this._furniName,
            "price",
            String(t),
          )));
    let s = this._localization.getLocalization(
      "inventory.marketplace.confirm_offer.title",
      "inventory.marketplace.confirm_offer.title",
    );
    this._windowManager.confirm(s, i, 0, (o, d) => this._rc4f68c5c899769(o, d));
  }
  _rc4f68c5c899769(e, r) {
    (e?.dispose(),
      !(this.var_38 == null || r == null) &&
        (r.type === y.const_1300 &&
          this.var_38.makeOffer(this.var_3630, this._offerAmount),
        this.var_38._rc62fbd899c6085()));
  }
  createWindow(e) {
    let t = this.var_997?.getAssetByName(e)?.content;
    return t == null ? null : (this._windowManager?.buildFromXML(t) ?? null);
  }
  clickHandler(e, r) {
    if (!(e == null || r == null || this.var_38 == null)) {
      if (e.type === u.CLICK)
        switch (r.name) {
          case "buy_tokens_button":
            (this.var_38._rd5e717522e480e(), this.disposeView());
            break;
          case "cancel_buy_tokens_button":
          case "cancel_make_offer_button":
          case "cancel_no_credits_button":
          case "header_button_close":
            (this.var_38._rc62fbd899c6085(), this.disposeView());
            break;
          case "make_offer_button": {
            let t = this._view?.findChildByName("price_input");
            (t != null &&
              ((this.var_3630 = Number.parseInt(t.text, 10)),
              (this._offerAmount = this.parseOfferAmount()),
              this.showConfirmation()),
              this.disposeView());
            break;
          }
          case "copy_suggested_price_button":
            if (this.var_2970 > 0) {
              let t = this._view?.findChildByName("price_input");
              t != null &&
                ((t.text = String(this.var_2970)),
                globalThis.navigator?.clipboard?.writeText(t.text).catch(() => {}),
                this.checkPrice());
            }
            break;
          case "get_credits_button":
            (this.var_38._rc62fbd899c6085(), this.openCreditsPage(), this.disposeView());
            break;
        }
      e.type === y.WINDOW_EVENT_CHANGE &&
        (r.name === "price_input" || r.name === "amount_input") &&
        this.checkPrice();
    }
  }
  openCreditsPage() {
    Ae.openWebPageAndMinimizeClient(this.var_5222?.getProperty("web.shop.relativeUrl", "") ?? "");
  }
  _rce9c44fef012fa(e) {
    let r = Math.ceil(
      Math.round(
        1e3 *
          (e *
            ((this.var_38?._r6c2fda63c2e23c ?? 0) / 100 +
              (0.5 * e) / (this.var_38?._rf6fc7b262ce24c ?? 0))),
      ) / 1e3,
    );
    return e - r;
  }
  checkPrice() {
    if (this._view == null || this.var_38 == null) return;
    let e = this._view.findChildByName("price_input");
    if (e == null) return;
    let r = Number.parseInt(e.text, 10);
    (Number.isNaN(r) && (r = 0),
      r > this.var_38._r742515fbd69d4b &&
        ((e.text = String(this.var_38._r742515fbd69d4b)),
        (r = this.var_38._r742515fbd69d4b)),
      (this._offerAmount = this.parseOfferAmount()));
    let t = this._rce9c44fef012fa(r),
      i = this._view.findChildByName("make_offer_button"),
      s = this._view.findChildByName("final_price");
    i == null ||
      s == null ||
      (r < this.var_38._ra450591baf0c72
        ? (this._localization?._r43eae9731f5b27(
            "shop.marketplace.invalid.price",
            "minPrice",
            String(this.var_38._ra450591baf0c72),
          ),
          this._localization?._r43eae9731f5b27(
            "shop.marketplace.invalid.price",
            "maxPrice",
            String(this.var_38._r742515fbd69d4b),
          ),
          (s.text = "${shop.marketplace.invalid.price}"),
          i.disable())
        : ((s.text = `${this._localization?.getLocalization("sell.in.marketplace.revenue.label", "") ?? ""}: ${t}`),
          i.enable()));
  }
  parseOfferAmount() {
    if (this._view == null) return 1;
    let e = this._view.findChildByName("amount_input");
    if (e == null) return 1;
    let r = Number.parseInt(e.text, 10);
    return (
      Number.isNaN(r) || r < 1 ? (r = 1) : r > this._maxOfferAmount && (r = this._maxOfferAmount),
      (e.text = String(r)),
      r
    );
  }
  resetPriceStats() {
    ((this.var_2970 = 0),
      this.setStatVisibility("average_price", !1),
      this.setStatVisibility("lowest_price", !1),
      this.setStatVisibility("suggested_price", !1));
  }
  updatePriceStatLine(e, r, t, i = -1) {
    let s = this._view?.findChildByName(e);
    if (!(s == null || this._localization == null)) {
      if (t <= 0) {
        ((s.visible = !1), (s.text = ""));
        return;
      }
      (i >= 0 && this._localization._r43eae9731f5b27(r, "days", String(i)),
        this._localization._r43eae9731f5b27(r, "price", String(t)),
        (s.text = this._localization.getLocalization(r, r)),
        (s.visible = !0));
    }
  }
  setStatVisibility(e, r) {
    let t = this._view?.findChildByName(e);
    t != null && (t.visible = r);
  }
  _r43906d3b7820c1(e, r) {
    e != null && (this.var_38?._rc62fbd899c6085(), e.dispose());
  }
}

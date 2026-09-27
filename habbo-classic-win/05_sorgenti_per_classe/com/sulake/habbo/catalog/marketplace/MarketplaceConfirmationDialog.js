// Estratto da HabboAirLauncher.deobf.js, riga 183267.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/marketplace/MarketplaceConfirmationDialog.as
// Nome offuscato: _i817e9868af5052

class {
  static {
    n(this, "MarketplaceConfirmationDialog");
  }
  _marketplace;
  _catalog;
  _roomEngine;
  _window = null;
  _offer = null;
  constructor(e, r, t) {
    ((this._marketplace = e), (this._catalog = r), (this._roomEngine = t));
  }
  dispose() {
    ((this._marketplace = null),
      (this._catalog = null),
      (this._roomEngine = null),
      this._window?.dispose(),
      (this._window = null),
      (this._offer = null));
  }
  showConfirmation(e, r) {
    if (
      r == null ||
      this._marketplace == null ||
      this._catalog == null ||
      this._catalog.localization == null ||
      ((this._offer = r),
      this._window?.dispose(),
      (this._window = this.createWindow("marketplace_purchase_confirmation")),
      this._window == null)
    )
      return;
    ((this._window.procedure = this.eventHandler), this._window.center());
    let t = this._window.findChildByName("header_text");
    t != null &&
      (e === this._marketplace._redd979b244523f && (t.text = "${catalog.marketplace.confirm_header}"),
      e === this._marketplace.PURCHASE_CONFIRM_TYPE_HIGHER &&
        (t.text = "${catalog.marketplace.confirm_higher_header}"));
    let i = this._window.findChildByName("item_name");
    i != null && (i.text = "${" + this._marketplace.getNameLocalizationKey(r) + "}");
    let s = this._window.findChildByName("item_price");
    if (s != null) {
      let f = this._catalog.localization.getLocalization("catalog.marketplace.confirm_price");
      s.text = f.replace("%price%", String(this._offer.price));
    }
    let o = this._window.findChildByName("item_average_price");
    if (o != null) {
      let f = this._catalog.localization._r5f04530d38380d(
        "catalog.marketplace.offer_details.average_price",
      );
      if (f != null) {
        let l = f.value ?? "";
        ((l = l.replace("%days%", String(this._marketplace._rccca8d1e540a76))),
          (l = l.replace(
            "%average%",
            this._offer._r4696ae664425c4 === 0
              ? " - "
              : String(this._offer._r4696ae664425c4),
          )),
          (o.text = l));
      } else o.visible = !1;
    }
    let d = this._window.findChildByName("offer_count");
    if (d != null) {
      let f = this._catalog.localization._r5f04530d38380d(
        "catalog.marketplace.offer_details.offer_count",
      );
      if (f != null) {
        let l = f.value ?? "";
        ((l = l.replace("%count%", String(this._offer.offerCount))), (d.text = l));
      } else d.visible = !1;
    }
    if (r._r651925293e1d0b) {
      let f = this._window.findChildByName("unique_item_background_bitmap"),
        l = this._window.findChildByName("unique_item_overlay_widget"),
        b = l?.widget;
      (f != null && (f.visible = !0),
        l != null && (l.visible = !0),
        b != null &&
          r.stuffData != null &&
          ((b.serialNumber = r.stuffData.uniqueSerialNumber), (b.animated = !0)));
    }
    if ((r.stuffData?.rarityLevel ?? -1) >= 0) {
      let f = this._window.findChildByName("rarity_item_overlay_widget"),
        l = f?.widget;
      (f != null && (f.visible = !0),
        l != null && r.stuffData != null && (l.rarityLevel = r.stuffData.rarityLevel));
    }
    if ((this.setImage(), this._catalog.getBoolean("disclaimer.credit_spending.enabled"))) {
      this.setDisclaimerAccepted(!1);
      return;
    }
    let c = this._window.findChildByName("disclaimer");
    (c != null && ((this._window.height -= c.height), c.dispose()), this.setDisclaimerAccepted(!0));
  }
  imageReady(e, r) {
    this._offer != null &&
      this._offer.imageCallback === e &&
      ((this._offer.image = r), this.setImage());
  }
  imageFailed(e) {}
  setImage() {
    if (this._offer == null || this._window == null || this._roomEngine == null)
      return;
    if (this._offer.image == null) {
      let r = null;
      (this._offer.furniType === MarketPlaceOfferData.const_86
        ? (r = this._roomEngine._r65a31a885a1252(this._offer.furniId, this))
        : this._offer.furniType === MarketPlaceOfferData.const_103 &&
          (r = this._roomEngine.getWallItemDataByName(this._offer.furniId, this)),
        r?.data != null &&
          ((this._offer.image = r.data), (this._offer.imageCallback = r.id)));
    }
    if (this._offer.image == null) return;
    let e = this._window.findChildByName("item_image");
    e != null &&
      (e.bitmap?.dispose(),
      (e.bitmap = new A(e.width, e.height, !0, 0)),
      e.bitmap.draw(
        this._offer.image,
        new Pe(
          1,
          0,
          0,
          1,
          (e.width - this._offer.image.width) / 2,
          (e.height - this._offer.image.height) / 2,
        ),
      ));
  }
  eventHandler = n((e, r) => {
    if (!(e.type !== u.CLICK && e.type !== u.DOUBLE_CLICK))
      switch (r.name) {
        case "spending_disclaimer":
          this.setDisclaimerAccepted(r.isSelected);
          break;
        case "buy_button":
          (this._catalog?._r399314f4fcc6a3(this._offer?.offerId ?? 0),
            this.hide());
          break;
        case "header_button_close":
        case "cancel_button":
          this.hide();
          break;
      }
  }, "eventHandler");
  createWindow(e) {
    if (this._catalog == null) return null;
    let t = this._catalog.assets.getAssetByName(e)?.content ?? null;
    return t != null ? (this._catalog.windowManager?.buildFromXML(t) ?? null) : null;
  }
  hide() {
    (this._window?.dispose(), (this._window = null));
  }
  setDisclaimerAccepted(e) {
    let r = this._window?.findChildByName("buy_button");
    r != null && (e ? r.enable() : r.disable());
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 179581.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconPurchaseConfirmationView.as
// Nome offuscato: _i41862e398fb81e

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("habbicon_purchase_confirmation_xml").content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      this._window.enableLookupCache(),
      (this.productImage.disposesBitmap = !0),
      this.closeButton.addEventListener(u.CLICK, this._r91d64548efff8e),
      this.cancelButton.addEventListener(u.CLICK, this._r91d64548efff8e),
      this.confirmButton.addEventListener(u.CLICK, this.onConfirmClicked));
  }
  static {
    n(this, "HabbiconPurchaseConfirmationView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static MODE_HABBICON = "habbicon";
  static MODE_SET = "set";
  static RETRY_ENABLE_DELAY_MS = 500;
  _window;
  var_183 = null;
  var_304 = null;
  _mode = null;
  var_512 = null;
  _r4622624f98333e = !1;
  _disposed = !1;
  _ra30c8494bf3bcf(e) {
    ((this._mode = a.MODE_HABBICON),
      (this.var_183 = e),
      (this.var_304 = null),
      this._rc8e4cde60efbe4(!1),
      this.updateHabbiconUI());
  }
  _r1240a8c8996e02(e) {
    ((this._mode = a.MODE_SET),
      (this.var_304 = e),
      (this.var_183 = null),
      this._rc8e4cde60efbe4(!1),
      this.updateSetUI());
  }
  show() {
    (this._window.parent == null &&
      this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER)?.addChild(this._window),
      this._window.center(),
      this._window.activate());
  }
  purchaseFailed() {
    (this.var_512 != null &&
      (this.var_512.stop(),
      this.var_512.removeEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f)),
      (this.var_512 = new _i05394ecc0c0c4d(a.RETRY_ENABLE_DELAY_MS, 1)),
      this.var_512.addEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f),
      this.var_512.start());
  }
  _rc8e4cde60efbe4(e) {
    ((this._r4622624f98333e = e),
      WindowUtils.disableSection(this.confirmButton, this._r4622624f98333e),
      WindowUtils.disableSection(this.cancelButton, this._r4622624f98333e),
      WindowUtils.disableSection(this.closeButton, this._r4622624f98333e));
  }
  updateHabbiconUI() {
    this.var_183 != null &&
      ((this.productName.text = this.var_183.name),
      (this.descriptionText.text = "${habbicon_purchase.confirm.habbicon.desc}"),
      (this.previewLabel.text = this.var_183.collectionTitle),
      (this.receiveRow.visible = !0),
      (this.receiveText.text = this.getHabbiconProgressText(this.var_183)),
      (this.normalPriceRow.visible = !1),
      (this.discountRow.visible = !1),
      (this.priceLabel.text = "${catalog.purchase.confirmation.dialog.cost}"),
      this._rb533ffdaf127fb(
        this.var_183.priceCredits,
        this.var_183.priceActivityPoints,
        this.var_183.activityPointType,
      ),
      this.showProductImage(this._r348805445e4abb(this.var_183.habbiconId)));
  }
  updateSetUI() {
    if (this.var_304 == null) return;
    let e = this.getSetPurchaseCount(this.var_304),
      r = this.getSetPrice(this.var_304),
      t = this.getSetIndividualPrice(this.var_304),
      i = t - r;
    ((this.productName.text = this.var_304.title),
      (this.descriptionText.text = this.var_63.localizationManager.getLocalizationWithParams(
        "habbicon_purchase.confirm.set.desc",
        "Buy the %set_name% set?",
        "set_name",
        this.var_304.title,
      )),
      (this.previewLabel.text = "${habbicon_purchase.confirm.set.preview}"),
      (this.receiveRow.visible = !0),
      (this.receiveText.text = this.var_63.localizationManager.getLocalizationWithParams(
        e === 1 ? "habbicon_purchase.confirm.set.receive.one" : "habbicon_purchase.confirm.set.receive",
        e === 1 ? "You'll receive 1 Habbicon" : "You'll receive %count% Habbicons",
        "count",
        String(e),
      )),
      (this.priceLabel.text = "${habbicon_purchase.confirm.set_price}"),
      this._rb533ffdaf127fb(
        this.var_304.priceCredits,
        this.var_304.priceActivityPoints,
        this.var_304.activityPointType,
      ),
      (this.normalPriceRow.visible = t > r),
      (this.normalPriceAmount.text = this.formatInlinePrice(t, this.getSetCurrencyType(this.var_304))),
      (this.discountRow.visible = i > 0),
      (this.discountAmount.text = this.formatInlinePrice(
        Math.max(0, i),
        this.getSetCurrencyType(this.var_304),
      )),
      this.showProductImage(this.createSetBitmap(this.var_304)));
  }
  getHabbiconProgressText(e) {
    let r = this.findCollection(e.collectionId),
      t = this.getCollectionTotal(r);
    if (r == null || t <= 0)
      return this.var_63.localizationManager.getLocalizationWithParams(
        "habbicon_purchase.confirm.habbicon.set",
        "Set: %set_name%",
        "set_name",
        e.collectionTitle,
      );
    let i = this._r69512ee9dd3c19(r),
      s = Math.trunc(Math.min(t, i + 1));
    return this.var_63.localizationManager.getLocalizationWithParams(
      "habbicon_purchase.confirm.habbicon.progress",
      "Progress after buy: %progress% / %total%",
      "progress",
      String(s),
      "total",
      String(t),
    );
  }
  _rb533ffdaf127fb(e, r, t) {
    ((this.priceAmount.text = this.formatPriceAmount(e, r)),
      (this.priceIcon.style = this.getPriceIconStyle(e, r, t)),
      this.priceIcon.fitToSize());
  }
  formatPriceAmount(e, r) {
    return e > 0 && r > 0 ? e + "c + " + r : e > 0 ? e.toString() : Math.max(0, r).toString();
  }
  formatInlinePrice(e, r) {
    return r === et.CREDITS ? e + "c" : e.toString();
  }
  getPriceIconStyle(e, r, t) {
    return et.getIconStyleFor(r > 0 ? t : et.CREDITS, this.var_63.configuration, !0);
  }
  getSetCurrencyType(e) {
    return e.priceCredits > 0 ? et.CREDITS : e.activityPointType;
  }
  getSetPrice(e) {
    return e.priceCredits > 0 ? e.priceCredits : Math.max(0, e.priceActivityPoints);
  }
  findCollection(e) {
    for (let r of this.var_63.HabbiconAlbumModel) if (r != null && r.collectionId === e) return r;
    return null;
  }
  getCollectionTotal(e) {
    return e == null || e.habbicons == null ? 0 : e.habbicons.length;
  }
  _r69512ee9dd3c19(e) {
    let r = 0;
    if (e == null || e.habbicons == null) return 0;
    for (let t of e.habbicons) t != null && this._ra581349e436a30(t.state) && r++;
    return r;
  }
  _ra581349e436a30(e) {
    return e === HabbiconState.const_101 || e === HabbiconState.const_893;
  }
  getSetPurchaseCount(e) {
    let r = 0;
    for (let t of e.habbicons) this._r8d951ae8fc8789(t) && r++;
    return r;
  }
  getSetIndividualPrice(e) {
    let r = 0;
    for (let t of e.habbicons)
      this._r8d951ae8fc8789(t) &&
        (r += t.priceCredits > 0 ? t.priceCredits : Math.max(0, t.priceActivityPoints));
    return r;
  }
  _r8d951ae8fc8789(e) {
    return e != null && !e.owned && !e.favorite && !e.claimable;
  }
  _r348805445e4abb(e) {
    return Dr.getPreviewBitmap(e, !1)?.clone() ?? new A(40, 40, !1, 9408399);
  }
  createSetBitmap(e) {
    return e.var_2362 != null ? e.var_2362.clone() : new A(40, 40, !1, 9408399);
  }
  showProductImage(e) {
    (this._r1fe7f9eeac97c0(),
      (this.productImage.bitmap = e),
      (this.productImage.visible = e != null),
      this.productImage.invalidate());
  }
  _r1fe7f9eeac97c0() {
    this.productImage.bitmap != null &&
      ((this.productImage.bitmap = null), this.productImage.invalidate());
  }
  onConfirmClicked = n((e) => {
    this._r4622624f98333e ||
      (this._rc8e4cde60efbe4(!0),
      this._mode === a.MODE_SET && this.var_304 != null
        ? this.var_63._rc5f8c7ff92815c(this.var_304.collectionId)
        : this._mode === a.MODE_HABBICON && this.var_183 != null
          ? this.var_63._r1340b4edf8b8a0(this.var_183.habbiconId)
          : this._rc8e4cde60efbe4(!1));
  }, "onConfirmClicked");
  _rb5487cd997da9f = n((e) => {
    (this.var_512.removeEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f),
      (this.var_512 = null),
      this._rc8e4cde60efbe4(!1));
  }, "_rb5487cd997da9f");
  _r91d64548efff8e = n((e) => {
    e.type !== u.CLICK || this._r4622624f98333e || this.var_63._r5bd12b9941e06b();
  }, "_r91d64548efff8e");
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.var_512 != null &&
        (this.var_512.stop(),
        this.var_512.removeEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f),
        (this.var_512 = null)),
      this.closeButton.removeEventListener(u.CLICK, this._r91d64548efff8e),
      this.cancelButton.removeEventListener(u.CLICK, this._r91d64548efff8e),
      this.confirmButton.removeEventListener(u.CLICK, this.onConfirmClicked),
      this._window.parent != null && this._window.parent.removeChild(this._window),
      this._r1fe7f9eeac97c0(),
      this._window.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this.var_63 = null),
      (this.var_183 = null),
      (this.var_304 = null));
  }
  get disposed() {
    return this._disposed;
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get productImage() {
    return this._window.findChildByName("product_image");
  }
  get previewLabel() {
    return this._window.findChildByName("preview_label");
  }
  get productName() {
    return this._window.findChildByName("product_name");
  }
  get descriptionText() {
    return this._window.findChildByName("description_text");
  }
  get receiveRow() {
    return this._window.findChildByName("receive_row");
  }
  get receiveText() {
    return this._window.findChildByName("receive_text");
  }
  get priceLabel() {
    return this._window.findChildByName("price_label");
  }
  get priceAmount() {
    return this._window.findChildByName("price_amount");
  }
  get priceIcon() {
    return this._window.findChildByName("price_icon");
  }
  get normalPriceRow() {
    return this._window.findChildByName("normal_price_row");
  }
  get normalPriceAmount() {
    return this._window.findChildByName("normal_price_amount");
  }
  get discountRow() {
    return this._window.findChildByName("discount_row");
  }
  get discountAmount() {
    return this._window.findChildByName("discount_amount");
  }
  get cancelButton() {
    return this._window.findChildByName("cancel_button");
  }
  get confirmButton() {
    return this._window.findChildByName("confirm_button");
  }
}

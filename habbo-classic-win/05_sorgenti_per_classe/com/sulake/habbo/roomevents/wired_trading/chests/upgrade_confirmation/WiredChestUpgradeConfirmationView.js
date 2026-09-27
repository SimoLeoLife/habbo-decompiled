// Extracted from HabboAirLauncher.deobf.js, line 371863.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/upgrade_confirmation/WiredChestUpgradeConfirmationView.as
// Obfuscated name: _i87323be12e8dd0

class {
  constructor(e) {
    this.var_63 = e;
    ((this._window = this.var_63.windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("chest_upgrade_xml")?.content,
      $s.DESKTOP_WINDOW_LAYER,
    )),
      this.closeButton.addEventListener(u.CLICK, this.onWindowClose),
      this.cancelButton.addEventListener(u.CLICK, this.onWindowClose),
      this.buyButton.addEventListener(u.CLICK, this.onBuyClicked),
      this.amountSelection.addEventListener(y.const_238, this._r2d332c9eb92553),
      (this._rfd08151f292077 = new class_3115((r) => this.onUpgradeChestResult(r))),
      this.var_63.addMessageEvent(this._rfd08151f292077));
  }
  static {
    n(this, "WiredChestUpgradeConfirmationView");
  }
  _disposed = !1;
  _window;
  _rfd08151f292077;
  _chestId = 0;
  _chestType = 0;
  _chestItemType = 0;
  var_2720 = 0;
  onUpgradeChestResult(e) {
    let r = e.getParser().var_1827;
    if (r === class_4209.SUCCESS)
      this.var_63._r41f5cc7d3516ce.notifications.addItem(
        "${wiredchests.upgrade.result.success}",
        NotificationType.INFO,
      );
    else {
      let t = this.var_63.localization.getLocalization(`wiredchests.upgrade.result.error.${r}`),
        i = this.var_63.localization.getLocalizationWithParams(
          "wiredchests.upgrade.result.error",
          "",
          "reason",
          t,
        );
      this.var_63._r41f5cc7d3516ce.notifications.addItem(i, NotificationType.INFO);
    }
    this.hide();
  }
  onBuyClicked = n(() => {
    (this.buyButton.disable(),
      this.var_63.send(new class_3667(this._chestId, this.amountSelection.selection + 1)));
  }, "onBuyClicked");
  initialize(e, r, t, i) {
    ((this._chestId = e),
      (this._chestType = r),
      (this._chestItemType = t),
      (this.var_2720 = i),
      this.initializeDropMenu(),
      this.updateUI());
  }
  initializeDropMenu() {
    let e = this._chestType === class_4148.TYPE_COIN ? "coins" : "furni",
      r = this.var_63.getInteger(`wired.${e}_chest.max_upgrades`, 0),
      t = ["1"],
      i = 2,
      s = this.var_2720 + 2;
    for (; s <= r;) (t.push(String(i)), (i += 1), (s += 1));
    (this.amountSelection.populate(t),
      (this.amountSelection.selection = 0),
      we.disableSection(this.amountSelection, this.var_2720 >= r));
  }
  _r2d332c9eb92553 = n(() => {
    this.updateUI();
  }, "_r2d332c9eb92553");
  updateUI() {
    let e = this.amountSelection.selection + 1;
    (this.buyButton.enable(), this.cancelButton.enable());
    let r = this.var_63._r41f5cc7d3516ce.roomEngine._r5db1beeb89d785(
      this._chestItemType,
      new k(90, 0, 0),
      64,
      this,
    );
    r?.data != null && this.showChestPreview(r.data);
    let t = null,
      i = this._chestType === class_4148.TYPE_COIN ? "coins" : "furni",
      s = this.var_63.getInteger(`wired.${i}_chest.initial_capacity`, 0),
      o = this.var_63.getInteger(`wired.${i}_chest.upgrade_capacity`, 0),
      d = this.var_63.getInteger(`wired.${i}_chest.max_upgrades`, 0),
      c = this.var_63.getInteger("wired.chests.upgrade_cost_credits", 999),
      f = this.var_63.getInteger("wired.chests.upgrade_cost_diamonds", 999),
      l = this.var_2720 >= d,
      b = this.var_63.catalog.getPurse(),
      _ = b.credits < c * e || b.getActivityPointsForType(et.const_476) < f * e;
    l
      ? (t = "wiredchests.upgrade.error.reason.at_capacity")
      : _ && (t = "wiredchests.upgrade.error.reason.not_enough_currency");
    let h = s + this.var_2720 * o,
      p = o * e,
      m = h + p;
    ((this.productNameText.text = this.var_63.localization.getLocalizationWithParams(
      "wiredchests.upgrade.capacity.extra",
      "",
      "purchase_capacity",
      String(p),
    )),
      (this.currentCapacityText.text = this.var_63.localization.getLocalizationWithParams(
        "wiredchests.upgrade.capacity.current",
        "",
        "current_capacity",
        String(h),
      )),
      (this.newCapacity.text = this.var_63.localization.getLocalizationWithParams(
        "wiredchests.upgrade.capacity.new",
        "",
        "new_capacity",
        String(m),
      )),
      (this.priceCreditsText.text = String(c * e)),
      (this.priceDiamondsText.text = String(f * e)),
      (this.priceCreditsText.visible = c !== 0),
      (this.priceDiamondsText.visible = f !== 0),
      (this.pricePlusText.visible = c !== 0 && f !== 0),
      (this.errorText.visible = t != null),
      t != null &&
        (this.buyButton.disable(),
        (this.errorText.text = this.var_63.localization.getLocalizationWithParams(
          "wiredchests.upgrade.error",
          "",
          "reason",
          this.var_63.localization.getLocalization(t),
        ))));
  }
  showChestPreview(e) {
    this.productImage.bitmap = e;
  }
  show() {
    (this._window != null &&
      this._window.parent == null &&
      this.var_63.windowManager.getDesktop($s.DESKTOP_WINDOW_LAYER)?.addChild(this._window),
      this._window?.center(),
      this._window?.activate());
  }
  hide() {
    this._window != null &&
      this._window.parent != null &&
      this.var_63.windowManager.getDesktop($s.DESKTOP_WINDOW_LAYER)?.removeChild(this._window);
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  imageReady(e, r) {
    this.showChestPreview(r);
  }
  imageFailed(e) {
    this.showChestPreview(null);
  }
  dispose() {
    this._disposed ||
      (this.var_63.disposed || this.var_63.removeMessageEvent(this._rfd08151f292077),
      this.hide(),
      this._window?.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this._disposed = !0));
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
  get productNameText() {
    return this._window.findChildByName("product_name");
  }
  get currentCapacityText() {
    return this._window.findChildByName("current_capacity");
  }
  get newCapacity() {
    return this._window.findChildByName("new_capacity");
  }
  get amountSelection() {
    return this._window.findChildByName("amount_selection_dropmenu");
  }
  get priceCreditsText() {
    return this._window.findChildByName("price_credits");
  }
  get pricePlusText() {
    return this._window.findChildByName("plus");
  }
  get priceDiamondsText() {
    return this._window.findChildByName("price_diamonds");
  }
  get errorText() {
    return this._window.findChildByName("error_text");
  }
  get cancelButton() {
    return this._window.findChildByName("cancel_button");
  }
  get buyButton() {
    return this._window.findChildByName("buy_button");
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 244327.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/WiredTradingView.as
// Nome offuscato: _i12b3d4e0273d39

class {
  constructor(e, r, t, i, s, o) {
    this.var_38 = e;
    this._windowManager = r;
    this._roomEngine = i;
    this._localization = s;
    this._soundManager = o;
    let d = t?.getAssetByName("item_popup_xml"),
      c = d?.content != null ? this._windowManager?.buildFromXML(d.content) : null;
    (c != null &&
      ((c.visible = !1),
      (this._r803dacdf5b58a8 = new Qm(c, t, this._windowManager, this.var_38?.inventory ?? null))),
      this.createWindow(t));
  }
  static {
    n(this, "WiredTradingView");
  }
  _disposed = !1;
  _r803dacdf5b58a8 = null;
  var_382 = null;
  var_755 = null;
  _window = null;
  get disposed() {
    return this._disposed;
  }
  getWindowContainer() {
    return this._window;
  }
  _r6b5281c06cf7e5() {
    (this.updateUI(),
      this.updateItemList(!1),
      this.updateItemList(!0),
      this.updateStateUI(),
      this.updateOfferInfoUI());
  }
  updateUI() {
    this.acceptButton != null &&
      l_.disableButton(this.acceptButton, !(this.var_38?._r1238571df4d291 ?? !1));
    let e = this.var_38?.canAccept() ?? !1;
    (this.tradeTypeSplitter != null &&
      (this.tradeTypeSplitter.assetUri = e
        ? "inventory_trading_trading_arrow_icon"
        : "inventory_trading_trading_split_icon"),
      e &&
        this.paymentLayoutImage != null &&
        (this.paymentLayoutImage.assetUri = `wired_chests_images_${this.var_38?._r1426b7c44e0fd9 ?? ""}_payments`),
      this.wiredOfferings != null && (this.wiredOfferings.visible = !e),
      this.wiredPaymentPlaceholder != null && (this.wiredPaymentPlaceholder.visible = e));
  }
  _rc09580d3570ca0() {
    this.updateStateUI();
  }
  startConfirmCountdown() {
    (this.var_382 == null &&
      ((this.var_382 = new _i05394ecc0c0c4d(1e3, 3)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._r97644bb91fd095)),
      this.var_382.reset(),
      (this.var_382.repeatCount = 3),
      this.var_382.start(),
      this._windowManager?.registerLocalizationParameter("inventory.trading.countdown", "counter", "3"));
  }
  _ra59f122e8b8737() {
    (this.var_755 == null &&
      ((this.var_755 = new _i05394ecc0c0c4d(1e3)),
      this.var_755.addEventListener(DeBouncer.addEventListener, this._r2e64c1b92afcab)),
      this.var_755.reset(),
      this.var_755.start(),
      this.updateSecondsLeftUI());
  }
  _r5d88ef79367c8e() {
    this.var_755?.stop();
  }
  updateItemList(e) {
    let r = e
        ? (this.var_38?._reac3de971475b5 ?? null)
        : (this.var_38?._r4d1c8872890eb3 ?? null),
      t = e ? this.yourItemGrid : this.wiredItemGrid;
    t == null || r == null || (L1.updateItemsGrid(t, r), this.updateOfferInfoUI());
  }
  alertTradeCancelled(e) {
    if (e === ul._rd1b45c8681e29d) return;
    let r =
        this._localization?.getLocalization("wired_transactions.notification.fail.popup.title") ??
        "wired_transactions.notification.fail.popup.title",
      t =
        this._localization?.getLocalizationWithParams(
          "wired_transactions.notification.fail",
          "",
          "reason",
          this._localization?.getLocalization(`wired_transactions.notification.fail.${e}`) ?? "",
        ) ?? "wired_transactions.notification.fail";
    this._windowManager?.alert(r, t, 0, null);
  }
  dispose() {
    this._disposed ||
      (this.var_382 != null &&
        (this.var_382.removeEventListener(DeBouncer.addEventListener, this._r97644bb91fd095),
        this.var_382.stop(),
        (this.var_382 = null)),
      this.var_755 != null &&
        (this.var_755.removeEventListener(DeBouncer.addEventListener, this._r2e64c1b92afcab),
        this.var_755.stop(),
        (this.var_755 = null)),
      this._window?.dispose(),
      (this._window = null),
      this._r803dacdf5b58a8?.dispose(),
      (this._r803dacdf5b58a8 = null),
      (this.var_38 = null),
      (this._windowManager = null),
      (this._localization = null),
      (this._roomEngine = null),
      (this._soundManager = null),
      (this._disposed = !0));
  }
  createWindow(e) {
    let r = e?.getAssetByName("inventory_trading_wired_xml")?.content,
      t = r != null ? this._windowManager?.buildFromXML(r) : null;
    t != null &&
      (this.buildFromXML(t.findChildByTag("OWN_USER_GRID"), this.numGridItems),
      this.buildFromXML(t.findChildByTag("OTHER_USER_GRID"), this._r0b03153308d17b),
      (this._window = t),
      this.acceptButton?.addEventListener(u.CLICK, this._re747636b9c36dc),
      this.cancelButton?.addEventListener(u.CLICK, this.onCancelClick),
      this.secondsLeftText != null && (this.secondsLeftText.visible = !1));
  }
  buildFromXML(e, r) {
    if (e != null)
      for (let t = 0; t < e._r72acf104e2c444; t++) {
        let i = e.getGridItemAt(t);
        i != null &&
          ((i.id = t), (i.procedure = r), i.addEventListener(u.OVER, r), i.addEventListener(u.OUT, r));
      }
  }
  onCancelClick = n(() => {
    this.var_38?._r1718fce2f8e038();
  }, "onCancelClick");
  _re747636b9c36dc = n(() => {
    this.var_38 != null &&
      (this.var_38.state === ul.STATE_ADDING_ITEMS
        ? this.var_38._r8a665f94a05feb() && this.startConfirmCountdown()
        : this.var_38.state === ul.STATE_CONFIRMING && this.var_38._r9fab3ea8336c25());
  }, "_re747636b9c36dc");
  updateStateUI() {
    let e = (this.var_38?.tradeTypeLocalization ?? "").toLowerCase();
    (this.lockIcon != null &&
      (this.lockIcon.assetUri =
        this.var_38?.state === ul.STATE_ADDING_ITEMS ||
        this.var_38?.state === ul.STATE_READY
          ? "inventory_trading_trading_unlocked_icon"
          : "inventory_trading_trading_locked_icon"),
      this.var_38?.state === ul.STATE_ADDING_ITEMS
        ? (this.getInfoText != null &&
            (this.getInfoText.text =
              this._localization?.getLocalizationWithParams("inventory.wired_trading.note.add_items", "", "type", e) ??
              ""),
          this.acceptButton != null &&
            (this.acceptButton.caption =
              this._localization?.getLocalization("inventory.trading.accept") ??
              "${inventory.trading.accept}"))
        : this.var_38?.state === ul.STATE_COUNTDOWN
          ? (this.getInfoText != null &&
              (this.getInfoText.text =
                this._localization?.getLocalization("inventory.wired_trading.note.countdown") ?? ""),
            this.acceptButton != null &&
              ((this.acceptButton.caption = "${inventory.trading.countdown}"),
              this.acceptButton.disable()))
          : (this.var_38?.state === ul.STATE_CONFIRMING ||
              this.var_38?.state === ul.STATE_CONFIRMED) &&
            (this.getInfoText != null &&
              (this.getInfoText.text =
                this._localization?.getLocalizationWithParams("inventory.wired_trading.note.verify", "", "type", e) ??
                ""),
            this.acceptButton != null &&
              ((this.acceptButton.caption =
                this._localization?.getLocalization("inventory.trading.confirm") ??
                "${inventory.trading.confirm}"),
              this.var_38.state === ul.STATE_CONFIRMED
                ? this.acceptButton.disable()
                : this.acceptButton.enable())));
  }
  updateSecondsLeftUI() {
    let e = this.var_38?.secondsLeft ?? -1;
    if (this.secondsLeftText != null)
      if (e >= 0 && e < 120) {
        let r = Math.trunc(e / 60),
          t = e - r * 60;
        ((this.secondsLeftText.visible = !0),
          (this.secondsLeftText.text =
            this._localization?.getLocalizationWithParams(
              "inventory.wired_trading.seconds_left",
              "",
              "seconds",
              t < 10 ? `0${t}` : String(t),
              "minutes",
              String(r),
            ) ?? ""));
      } else this.secondsLeftText.visible = !1;
  }
  _r97644bb91fd095 = n(() => {
    this.var_382 != null &&
      (this._windowManager?.registerLocalizationParameter(
        "inventory.trading.countdown",
        "counter",
        String(3 - this.var_382._rdf3dbbec26e6b1),
      ),
      this.var_382._rdf3dbbec26e6b1 === 3 &&
        (this.var_38?._r484203fde64a5c(),
        this.var_382.reset(),
        this.acceptButton?.enable()));
  }, "_r97644bb91fd095");
  _r2e64c1b92afcab = n(() => {
    (this.updateSecondsLeftUI(), (this.var_38?.secondsLeft ?? 0) <= 0 && this._r5d88ef79367c8e());
  }, "_r2e64c1b92afcab");
  updateOfferInfoUI() {
    (this.yourItemCountText != null &&
      (this.yourItemCountText.text =
        this._localization?.getLocalizationWithParams(
          "inventory.trading.info.itemcount",
          "",
          "value",
          String(this.var_38?._rd4b58ad37afd4f ?? 0),
        ) ?? ""),
      this.wiredItemCountText != null &&
        (this.wiredItemCountText.text =
          this._localization?.getLocalizationWithParams(
            "inventory.trading.info.itemcount",
            "",
            "value",
            String(this.var_38?._rdf8a60e8cf6ace ?? 0),
          ) ?? ""),
      this.yourCreditCountText != null &&
        (this.yourCreditCountText.text =
          this._localization?.getLocalizationWithParams(
            "inventory.trading.info.creditvalue",
            "",
            "value",
            String(this.var_38?._r3274da186156f8 ?? 0),
          ) ?? ""),
      this.wiredCreditCountText != null &&
        (this.wiredCreditCountText.text =
          this._localization?.getLocalizationWithParams(
            "inventory.trading.info.creditvalue",
            "",
            "value",
            String(this.var_38?._rd26653288e3b5e ?? 0),
          ) ?? ""));
  }
  numGridItems = n((...e) => {
    let r = e[0],
      t = e[1];
    r == null ||
      t == null ||
      L1.thumbEventProc(
        r,
        t,
        !0,
        this.var_38,
        this.var_38?._reac3de971475b5 ?? null,
        null,
        this.var_38?._r4d1c8872890eb3 ?? null,
        null,
        this._r803dacdf5b58a8,
        this._localization,
        null,
        null,
      );
  }, "numGridItems");
  _r0b03153308d17b = n((...e) => {
    let r = e[0],
      t = e[1];
    r == null ||
      t == null ||
      L1.thumbEventProc(
        r,
        t,
        !1,
        this.var_38,
        this.var_38?._reac3de971475b5 ?? null,
        null,
        this.var_38?._r4d1c8872890eb3 ?? null,
        null,
        this._r803dacdf5b58a8,
        this._localization,
        null,
        null,
      );
  }, "_r0b03153308d17b");
  get getInfoText() {
    return this._window?.findChildByName("info_text");
  }
  get tradeTypeSplitter() {
    return this._window?.findChildByName("trade_type_splitter");
  }
  get lockIcon() {
    return this._window?.findChildByName("lock_0");
  }
  get acceptButton() {
    return this._window?.findChildByName("button_accept");
  }
  get cancelButton() {
    return this._window?.findChildByName("button_cancel");
  }
  get requirementsButton() {
    return this._window?.findChildByName("requirements_button");
  }
  get yourItemGrid() {
    return this._window?.findChildByName("item_grid_0");
  }
  get yourItemCountText() {
    return this._window?.findChildByName("content_text_1_a");
  }
  get yourCreditCountText() {
    return this._window?.findChildByName("content_text_1_b");
  }
  get wiredOfferings() {
    return this._window?.findChildByName("offers_1");
  }
  get wiredPaymentPlaceholder() {
    return this._window?.findChildByName("offers_1_payment_placeholder");
  }
  get paymentLayoutImage() {
    return this._window?.findChildByName("payment_layout_image");
  }
  get wiredItemGrid() {
    return this._window?.findChildByName("item_grid_1");
  }
  get wiredItemCountText() {
    return this._window?.findChildByName("content_text_2_a");
  }
  get wiredCreditCountText() {
    return this._window?.findChildByName("content_text_2_b");
  }
  get secondsLeftText() {
    return this._window?.findChildByName("seconds_left_text");
  }
}

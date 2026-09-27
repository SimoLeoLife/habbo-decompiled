// Estratto da HabboAirLauncher.deobf.js, riga 371585.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/settings/WiredChestWiredUpdateConfirmationView.as
// Nome offuscato: _i3ceba6cee5ae9f

class {
  constructor(e) {
    this.var_837 = e;
    ((this._windowManager = this.var_837._r5c3b949c2324e7.windowManager),
      (this._window = this._windowManager.buildFromXML(
        this.var_837._r5c3b949c2324e7.assets.getAssetByName("chest_wired_upgrade_xml")?.content,
        $s.DESKTOP_WINDOW_LAYER,
      )),
      this.closeButton.addEventListener(u.CLICK, this.onWindowClose),
      this.cancelButton.addEventListener(u.CLICK, this.onWindowClose),
      this.buyButton.addEventListener(u.CLICK, this.onBuyClicked));
  }
  static {
    n(this, "WiredChestWiredUpdateConfirmationView");
  }
  _disposed = !1;
  _window;
  _windowManager;
  _chestId = 0;
  _chestType = 0;
  _chestItemType = 0;
  var_5047 = !1;
  onBuyClicked = n(() => {
    (this.buyButton.disable(), this.var_837._r8995b60802dd34());
  }, "onBuyClicked");
  initialize(e, r, t, i) {
    ((this._chestId = e),
      (this._chestType = r),
      (this._chestItemType = t),
      (this.var_5047 = i),
      this.updateUI());
  }
  updateUI() {
    (this.buyButton.enable(), this.cancelButton.enable());
    let e = this.var_837._r5c3b949c2324e7,
      r = e._r41f5cc7d3516ce.roomEngine._r5db1beeb89d785(this._chestItemType, new k(90, 0, 0), 64, this);
    r?.data != null && this.showChestPreview(r.data);
    let t = null;
    (this.var_5047 && (t = "wiredchests.upgrade.wired.error.reason.rookie_chest"),
      (this.errorText.visible = t != null),
      t != null &&
        (this.buyButton.disable(),
        (this.errorText.text = e.localization.getLocalizationWithParams(
          "wiredchests.upgrade.wired.error",
          "",
          "reason",
          e.localization.getLocalization(t),
        ))));
  }
  showChestPreview(e) {
    this.productImage.bitmap = e;
  }
  show() {
    (this._window != null &&
      this._window.parent == null &&
      this._windowManager.getDesktop($s.DESKTOP_WINDOW_LAYER)?.addChild(this._window),
      this._window?.center(),
      this._window?.activate());
  }
  hide() {
    this._window != null &&
      this._window.parent != null &&
      this._windowManager.getDesktop($s.DESKTOP_WINDOW_LAYER)?.removeChild(this._window);
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
      (this.hide(),
      this._window?.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this.var_837 = null),
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

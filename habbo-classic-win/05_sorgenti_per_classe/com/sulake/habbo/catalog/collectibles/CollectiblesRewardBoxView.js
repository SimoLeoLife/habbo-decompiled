// Estratto da HabboAirLauncher.deobf.js, riga 174072.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/CollectiblesRewardBoxView.as
// Nome offuscato: _ic14aafed7de9bd

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    let t = this.var_63?.assets.getAssetByName("collectible_reward_xml")?.content;
    ((this._window = t != null ? this._windowManager?.buildFromXML(t, 2) : null),
      (this.var_2022 = this.rotatingStar),
      this.var_63?.registerUpdateReceiver(this, 1),
      this.closeButton?.addEventListener(u.CLICK, this._r914dbaa74ab568),
      this.okButton?.addEventListener(u.CLICK, this._r914dbaa74ab568));
  }
  static {
    n(this, "CollectiblesRewardBoxView");
  }
  static BG_STAR_ROTATE_SPEED = 20;
  _window;
  var_2022;
  _rab94667c4a548f = [];
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.var_63?.removeUpdateReceiver(this),
      this._window?.dispose(),
      (this._window = null),
      (this.var_2022 = null),
      (this._rab94667c4a548f = []),
      (this.var_63 = null),
      (this._windowManager = null));
  }
  showReward(e, r) {
    if (e.baseItem != null) {
      if (
        (this._rab94667c4a548f.push(e),
        this._windowManager != null && this._window != null && this._window.parent == null)
      ) {
        (this._windowManager.getDesktop(2)?.addChild(this._window), this.showNextRewardOrClose());
        return;
      }
      r && this.showNextRewardOrClose();
    }
  }
  update(e) {
    if (this.var_2022 == null) return;
    let r = a.BG_STAR_ROTATE_SPEED * (e / 1e3);
    ((this.var_2022.rotation += r),
      (this.var_2022.rotation %= 360),
      this.var_2022.invalidate());
  }
  _r914dbaa74ab568 = n((e) => {
    e.type === u.CLICK && this.showNextRewardOrClose();
  }, "_r914dbaa74ab568");
  showNextRewardOrClose() {
    let e = this._rab94667c4a548f.shift() ?? null;
    if (e != null) {
      this._r5399c74f0433a0(e);
      return;
    }
    this.hide();
  }
  hide() {
    if (this._windowManager == null || this._window == null || this._window.parent == null)
      return;
    this._windowManager.getDesktop(2)?.removeChild(this._window);
  }
  _r5399c74f0433a0(e) {
    let r = this.productImage;
    (r != null && (r.productInfo = e),
      this._rc1ecede62058c5(e.baseItem.rarity),
      this.productNameText != null &&
        (this.productNameText.caption = this.var_63?.getProductName(e) ?? "unknown"),
      this.rarityText != null && (this.rarityText.text = e.baseItem.rarity.toUpperCase()));
  }
  _rc1ecede62058c5(e) {
    let r = qj.getRarityColor(e);
    (this._window != null && (this._window.color = r),
      this.background != null && (this.background.color = r));
  }
  get background() {
    return this._window?.findChildByName("background");
  }
  get productImage() {
    return this._window?.findChildByName("product_image")?.widget;
  }
  get productNameText() {
    return this._window?.findChildByName("product_name");
  }
  get closeButton() {
    return this._window?.findChildByName("header_button_close");
  }
  get okButton() {
    return this._window?.findChildByName("ok_button");
  }
  get rotatingStar() {
    return this._window?.findChildByName("rotating_star");
  }
  get rarityText() {
    return this._window?.findChildByName("rarity_text");
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 173257.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubGiftConfirmationDialog.as
// Obfuscated name: _id6bd46d0b67fae

class {
  constructor(e, r) {
    this.var_63 = e;
    this._offer = r;
    this.showConfirmation();
  }
  static {
    n(this, "ClubGiftConfirmationDialog");
  }
  _view = null;
  dispose() {
    ((this.var_63 = null),
      (this._offer = null),
      this._view?.dispose(),
      (this._view = null));
  }
  showConfirmation() {
    if (
      this._offer == null ||
      this.var_63 == null ||
      ((this._view = this.createWindow("club_gift_confirmation")), this._view == null)
    )
      return;
    ((this._view.procedure = this._r4d2fcea4870df2), this._view.center());
    let e = this._view.findChildByName("item_name");
    e != null && (e.text = this.getProductName());
    let r = this._view.findChildByName("image_border");
    r == null ||
      this._offer._r10b16f6e9cda51 == null ||
      ((this._offer._r10b16f6e9cda51.view = r),
      this._offer._r10b16f6e9cda51.initProductIcon(this.var_63.roomEngine));
  }
  getProductName() {
    return this._offer?.product?.productData?.name ?? "";
  }
  _r4d2fcea4870df2 = n((e, r) => {
    let t = e,
      i = r;
    if (!(t?.type !== u.CLICK || i == null || this.var_63 == null || this._offer == null))
      switch (i.name) {
        case "select_button":
          this.var_63._r538a2965d7ce36(this._offer.localizationId);
          break;
        case "header_button_close":
        case "cancel_button":
          this.var_63.closeConfirmation();
          break;
        default:
          break;
      }
  }, "_r4d2fcea4870df2");
  createWindow(e) {
    let t = this.var_63?.assets?.getAssetByName(e)?.content ?? null;
    return this.var_63?.windowManager == null || t == null
      ? null
      : this.var_63.windowManager.buildFromXML(t);
  }
}

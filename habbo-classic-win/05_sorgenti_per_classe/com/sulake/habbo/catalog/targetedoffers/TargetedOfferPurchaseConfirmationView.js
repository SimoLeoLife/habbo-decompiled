// Extracted from HabboAirLauncher.deobf.js, line 187681.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/TargetedOfferPurchaseConfirmationView.as
// Obfuscated name: _ie0f5889a8cadaa

class extends OfferView {
  constructor(r, t, i) {
    super(r, t);
    this.var_1205 = i;
    let s = this.var_63?.catalog.assets.getAssetByName(
      "targeted_offer_purchase_confirmation_xml",
    )?.content;
    if (
      s == null ||
      this.var_63 == null ||
      ((this._window = this.var_63.catalog.windowManager.buildFromXML(s)),
      this._window == null || this._offer == null)
    )
      return;
    this.var_63.catalog.getBoolean("disclaimer.credit_spending.enabled")
      ? this.setDisclaimerAccepted(!1)
      : (this._window.findChildByName("disclaimer")?.dispose(), this.setDisclaimerAccepted(!0));
    let o = this._window.findChildByName("product_name"),
      d = this._window.findChildByName("purchase_cost_box"),
      c = this._window.findChildByName("quantity");
    (o != null && (o.text = this.getLocalization(this._offer.title)),
      d != null &&
        this.var_63.catalog.utils._ra10ac9ff6556f3(d, this._offer, this.var_1205),
      c != null &&
        this.var_63.catalog.multiplePurchaseEnabled &&
        this.var_1205 > 1 &&
        (c.text = `X ${this.var_1205}`),
      (this._window.procedure = this._r64e450f8ad70fb),
      this._window.center());
  }
  static {
    n(this, "TargetedOfferPurchaseConfirmationView");
  }
  setDisclaimerAccepted(r) {
    let t = this._window?.findChildByName("select_button");
    t != null && (r ? t.enable() : t.disable());
  }
  _r64e450f8ad70fb = n((r, t) => {
    if (!(r.type !== u.DOWN || this.var_63 == null || this._offer == null))
      switch (t.name) {
        case "spending_disclaimer":
          this.setDisclaimerAccepted(t.isSelected);
          break;
        case "header_button_close":
        case "cancel_button":
          this.var_63.maximizeOffer(this._offer);
          break;
        case "buy_button":
          this.var_63._r1dc5f5d80d9851(this._offer, this.var_1205);
          break;
      }
  }, "_r64e450f8ad70fb");
}

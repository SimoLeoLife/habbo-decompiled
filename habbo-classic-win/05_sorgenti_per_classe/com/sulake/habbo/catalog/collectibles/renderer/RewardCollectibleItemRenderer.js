// Estratto da HabboAirLauncher.deobf.js, riga 175927.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/renderer/RewardCollectibleItemRenderer.as
// Nome offuscato: _i4d51f6040bfebc

class extends AbstractCollectibleItemRenderer {
  constructor(r, t, i, s) {
    let o = new BaseItemWrapper(t._rd3a34cf4b5105c);
    super(r, o, i);
    this.var_195 = r;
    this._rewardClaim = t;
    this._ra3cf43fc8e4ecc = s;
    this._r99988bdc279731 = o;
  }
  static {
    n(this, "RewardCollectibleItemRenderer");
  }
  _r99988bdc279731;
  updateVisuals() {
    (this.nameText != null &&
      (this.nameText.caption = this.var_195.getProductName(this._r99988bdc279731)),
      this.amountText != null &&
        (this.amountText.caption = `x${this._rewardClaim.claimLimit - this._rewardClaim.claimedAmount}`),
      this.collectionText != null &&
        (this.collectionText.caption = `<b>${this.localization.getLocalization("collectibles.claim.collection")}</b> ${this.collectionName}`),
      this.walletText != null && (this.walletText.caption = this._rewardClaim.wallet));
  }
  updateExpiresText(r) {
    this.expiresText != null &&
      (this.expiresText.caption = `<b>${this.localization.getLocalization("collectibles.claim.expiration")}</b> ${r}`);
  }
  get item() {
    return this.renderableItem.baseItem;
  }
  get rewardClaim() {
    return this._rewardClaim;
  }
  onClick(r) {}
  get borderOutline() {
    return this.container?.findChildByName("border_outline");
  }
  get borderBackground() {
    return this.container?.findChildByName("border_background");
  }
  get amountText() {
    return this.container?.findChildByTag("AMOUNT_TITLE");
  }
  get amountTextBorder() {
    return this.container?.findChildByName("text_border");
  }
  get bitmapWindow() {
    return this.container?.findChildByTag("BITMAP");
  }
  get unknownImageWindow() {
    return this.container?.findChildByName("unknown_image");
  }
  get badgeImageWindow() {
    return this.container?.findChildByName("badge_image_widget");
  }
  get petImageWindow() {
    return this.container?.findChildByName("pet_image_widget");
  }
  get nameText() {
    return this.container?.findChildByTag("NAME_TITLE");
  }
  get walletText() {
    return this.container?.findChildByName("wallet_text");
  }
  get collectionText() {
    return this.container?.findChildByName("collection_text");
  }
  get expiresText() {
    return this.container?.findChildByName("expires_text");
  }
  get localization() {
    return this.var_195.localizationManager;
  }
  get collectionName() {
    let r = this.localization.getLocalization(
      `collectibles.set.${this._rewardClaim._rd3a34cf4b5105c._rebd7c11478f60d}`,
      "",
    );
    return r !== "" ? r : this._rewardClaim._rd3a34cf4b5105c._rc0c57fd1a486a9;
  }
}

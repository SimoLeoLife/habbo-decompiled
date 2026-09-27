// Extracted from HabboAirLauncher.deobf.js, line 176184.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i57cb33c7bd4857

class extends AbstractCollectibleItemRenderer {
  constructor(r, t, i, s) {
    super(r, new BaseItemWrapper(t.productInfo), i);
    this._offer = t;
    this._r623ef34f82b84d = s;
  }
  static {
    n(this, "UnkAbstractCollectibleItemRendererSubclass_57cb33");
  }
  updateVisuals() {
    this.amountText != null &&
      (this.amountText.caption = String(this._offer._rf165182370a636));
  }
  get item() {
    return this.renderableItem.baseItem;
  }
  get offer() {
    return this._offer;
  }
  onClick(r) {
    this._r623ef34f82b84d._r669989230c0ae2(this);
  }
  get borderOutline() {
    return this.container?.findChildByName("border_outline");
  }
  get borderBackground() {
    return this.container?.findChildByName("border_background");
  }
  get amountText() {
    return this.container?.findChildByName("number");
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
}

// Estratto da HabboAirLauncher.deobf.js, riga 175369.

class extends AbstractCollectibleItemRenderer {
  constructor(r, t, i, s, o) {
    super(r, new _ifb87e928a580b5(t, o), i);
    this._r0e76420db1dec9 = s;
  }
  static {
    n(this, "_if5b8f9b1f268a9");
  }
  updateVisuals() {
    (this.amountText != null &&
      (this.amountText.caption = this.isComplete ? `x${this.renderableItem.amount}` : "-"),
      this.amountTextBorder != null &&
        (this.amountTextBorder.color = this.isComplete ? 3374080 : 7441834));
  }
  get item() {
    return this.renderableItem.productItem;
  }
  onClick(r) {
    this._r0e76420db1dec9._r669989230c0ae2(this);
  }
  _rac62ff3fcfd328() {
    return this._r73593121176f9d();
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

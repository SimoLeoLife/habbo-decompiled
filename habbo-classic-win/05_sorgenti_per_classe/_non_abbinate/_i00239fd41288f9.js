// Estratto da HabboAirLauncher.deobf.js, riga 174582.

class extends AbstractCollectibleItemRenderer {
  constructor(r, t, i, s) {
    super(r, new CollectionItemWrapper(t), i);
    this._rc526b917cfc22a = s;
  }
  static {
    n(this, "_i00239fd41288f9");
  }
  updateVisuals() {
    (this.amountText != null && (this.amountText.caption = `x${this.item.amount}`),
      this.amountTextBorder != null &&
        (this.amountTextBorder.color = this.isComplete ? 3374080 : 7441834),
      this._r3a637bd1966173 != null && (this._r3a637bd1966173.visible = this.isComplete));
  }
  get item() {
    return this.renderableItem.collectionItem;
  }
  onClick(r) {
    this._rc526b917cfc22a._r669989230c0ae2(this);
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
  get _r3a637bd1966173() {
    return this.container?.findChildByName("checkmark_icon");
  }
}

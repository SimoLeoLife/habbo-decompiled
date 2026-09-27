// Estratto da HabboAirLauncher.deobf.js, riga 188608.

class extends bo {
  constructor(r, t, i) {
    super(null, r, t, bo.ALIGN_TOP);
    this._catalog = i;
  }
  static {
    n(this, "_ib7a5b3dd8a203f");
  }
  _window = null;
  _rda4cde3b8bef4b() {
    if (this._window == null) {
      this._window = this._catalog.utils.createWindow("discountPromoItem");
      let r = this._window?.findChildByName("promo_text");
      r != null && (r.caption = this.data._ra08383e83a6126);
    }
    return this._window;
  }
}

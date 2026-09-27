// Extracted from HabboAirLauncher.deobf.js, line 188608.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib7a5b3dd8a203f

class extends bo {
  constructor(r, t, i) {
    super(null, r, t, bo.ALIGN_TOP);
    this._catalog = i;
  }
  static {
    n(this, "UnkClass_b7a5b3");
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

// Extracted from HabboAirLauncher.deobf.js, line 232247.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/namechange/NameSuggestionListRenderer.as
// Obfuscated name: _if6a279f469e66b

class a {
  constructor(e) {
    this._main = e;
  }
  static {
    n(this, "NameSuggestionListRenderer");
  }
  static _r7b90fd46a39654 = 5;
  static _rbd92c9684c8dd7 = 5;
  _offsetX = 0;
  _offsetY = 0;
  _r14a03de97f4f58 = null;
  dispose() {
    this._main = null;
  }
  render(e, r) {
    for (; r.numChildren > 0;) r.removeChildAt(0)?.dispose();
    (r.parent?.invalidate(),
      (this._offsetX = 0),
      (this._offsetY = 0),
      (this._r14a03de97f4f58 = r.rectangle.clone()),
      (this._r14a03de97f4f58.height = 150));
    for (let t of e) {
      let i = this.createItem(t);
      i != null && (this.fit(i) ? r.addChild(i) : i.dispose());
    }
    return r.numChildren === 0 ? 0 : (r.getChildAt(r.numChildren - 1)?.bottom ?? 0);
  }
  fit(e) {
    return this._r14a03de97f4f58 == null ||
      e.width > this._r14a03de97f4f58.width ||
      e.width < 2 ||
      this._offsetY + e.height > this._r14a03de97f4f58.height
      ? !1
      : this._offsetX + e.width > this._r14a03de97f4f58.width
        ? ((this._offsetX = 0), (this._offsetY += e.height + a._rbd92c9684c8dd7), this.fit(e))
        : ((e.x += this._offsetX),
          (e.y += this._offsetY),
          (this._offsetX += e.width + a._r7b90fd46a39654),
          !0);
  }
  createItem(e) {
    let r = this._main?.buildXmlWindow("welcome_name_suggestion_item");
    return r == null ? null : ((r.text = e), r);
  }
}

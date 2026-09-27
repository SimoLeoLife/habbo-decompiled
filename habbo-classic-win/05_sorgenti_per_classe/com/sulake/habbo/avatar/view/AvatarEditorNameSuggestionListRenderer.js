// Estratto da HabboAirLauncher.deobf.js, riga 165018.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/view/AvatarEditorNameSuggestionListRenderer.as
// Nome offuscato: _i203ee4cd704cbd

class a {
  static {
    n(this, "AvatarEditorNameSuggestionListRenderer");
  }
  static _r7b90fd46a39654 = 5;
  static _rbd92c9684c8dd7 = 5;
  var_41;
  _offsetX = 0;
  _offsetY = 0;
  var_5761 = 0;
  _r14a03de97f4f58 = null;
  constructor(e) {
    this.var_41 = e;
  }
  dispose() {
    this.var_41 = null;
  }
  render(e, r) {
    for (; r.numChildren > 0;) r.removeChildAt(0)?.dispose();
    (r.parent?.invalidate(),
      (this.var_5761 = 0),
      (this._offsetX = 0),
      (this._offsetY = 0),
      (this._r14a03de97f4f58 = r.rectangle),
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
    let r = this.var_41?.assets.getAssetByName("avatar_editor_name_change_item"),
      t = r != null ? this.var_41?.windowManager.buildFromXML(r.content) : null;
    return t == null ? null : ((t.text = e), (t.name = `name_suggestion_${this.var_5761++}`), t);
  }
}

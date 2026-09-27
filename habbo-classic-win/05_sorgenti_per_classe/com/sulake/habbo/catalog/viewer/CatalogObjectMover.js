// Estratto da HabboAirLauncher.deobf.js, riga 193861.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/CatalogObjectMover.as
// Nome offuscato: _i3039ecaf752262

class a {
  static {
    n(this, "CatalogObjectMover");
  }
  static OVERLAY_SPRITE_NAME = "CatalogOverlaySprite";
  _roomEngine = null;
  var_283 = null;
  _state = !1;
  set roomEngine(e) {
    this._roomEngine = e;
  }
  set mainContainer(e) {
    this.var_283 = e;
  }
  get state() {
    return this._state;
  }
  dispose() {
    (this.releaseOverlaySprite(),
      (this.var_283 = null),
      (this._roomEngine = null),
      (this._state = !1));
  }
  imageReady(e, r) {}
  imageFailed(e) {}
  onMainContainerEvent(e, r, t) {
    if (this._roomEngine == null) return;
    let i = e;
    switch (e.type) {
      case u.MOVE:
        if (i == null || t == null || t.operation !== RoomObjectOperationEnum.OBJECT_PLACE) return;
        if (this._r9b90e4962f5ade() == null) {
          let s = this.getFurniImageResult(t);
          if (s?.data == null) return;
          this._rdd04888045078b(s.data);
        }
        ((this._state = !0), this._rdb76de1b260e27(i.stageX, i.stageY));
        break;
      case u.OUT:
        if (i != null && this._state) {
          let s = e.target;
          if (s != null && i.localX >= 0 && i.localX < s.width && i.localY >= 0 && i.localY < s.height)
            return;
          this.resetIcon();
        }
        break;
      default:
        break;
    }
  }
  resetIcon() {
    this._state && (this.releaseOverlaySprite(), (this._state = !1));
  }
  getFurniImageResult(e) {
    return this._roomEngine == null
      ? null
      : e.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
        ? this._roomEngine._r65a31a885a1252(e.typeId, this)
        : e.category === RoomObjectCategoryEnum.const_909
          ? this._roomEngine.getWallItemDataByName(e.typeId, this, e._r669a9820d77b11)
          : null;
  }
  _rdd04888045078b(e) {
    let r = this._r50537fb8d84684();
    if (r == null || this._r9b90e4962f5ade() != null) return;
    let t = new Sprite();
    ((t.name = a.OVERLAY_SPRITE_NAME), (t.mouseEnabled = !1), (t.visible = !0));
    let i = new _i3a5c6f457acdad();
    ((i.bitmapData = e), t.addChild(i), r.addChild(t));
  }
  _r50537fb8d84684() {
    let e = this.var_283?.desktop?.getDisplayObject() ?? null;
    return e instanceof Sprite ? e : null;
  }
  _r9b90e4962f5ade() {
    return this._r50537fb8d84684()?.getChildByName(a.OVERLAY_SPRITE_NAME);
  }
  _rdb76de1b260e27(e, r) {
    let t = this._r9b90e4962f5ade();
    t != null && ((t.x = e - Math.round(t.width / 2)), (t.y = r - Math.round(t.height / 2)));
  }
  releaseOverlaySprite() {
    let e = this._r50537fb8d84684(),
      r = this._r9b90e4962f5ade();
    if (e == null || r == null) return;
    let t = r.numChildren > 0 ? r.removeChildAt(0) : null;
    (t?.bitmapData != null && t.bitmapData.dispose(), e.removeChild(r));
  }
}

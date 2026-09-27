// Estratto da HabboAirLauncher.deobf.js, riga 312971.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/renderer/FurniThumbnailRendererBase.as
// Nome offuscato: _if60d86b957e459

class a {
  constructor(e, r, t) {
    this._data = e;
    this._window = r;
    this.var_17 = t;
    if (
      (this.requestIconFromRoomEngine(this.furnitureData), this.updateItemCount(), this._window != null)
    ) {
      this._window.procedure = this._ra2392916df2aec;
      let i = this._window.findChildByName("tooltip");
      i != null && (i.toolTipCaption = this._data?.furnitureData?.localizedName ?? "");
    }
  }
  static {
    n(this, "FurniThumbnailRendererBase");
  }
  static THUMB_BLEND_ITEMS_AVAILABLE = 1;
  static THUMB_BLEND_ITEMS_NOT_AVAILABLE = 0.2;
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      (this.var_17 = null),
      (this._data = null));
  }
  requestIconFromRoomEngine(e) {
    if (this.var_17 == null || e == null) return;
    let r = null;
    switch (e.type) {
      case class_1803.PRODUCT_TYPE_STUFF:
        r = this.var_17.handler.container?.roomEngine?._r65a31a885a1252(e.id, this) ?? null;
        break;
      case class_1803.PRODUCT_TYPE_ITEM:
        r = this.var_17.handler.container?.roomEngine?.getWallItemDataByName(e.id, this) ?? null;
        break;
    }
    r?.data != null && this.imageReady(0, r.data);
  }
  imageReady(e, r) {
    if (this._window == null) return;
    let t = this._window.findChildByTag("BITMAP");
    t != null && r != null && (t.bitmap = r);
  }
  imageFailed(e) {}
  updateItemCount() {}
  hideItemCount() {
    let e = this._window?.findChildByName("number_container") ?? null;
    e != null && (e.visible = !1);
  }
  updateGroupItemCount(e) {
    if (this._window == null || this._window.disposed) return;
    let r = this._window.findChildByName("number_container") ?? null;
    if (r != null && ((r.visible = e > 0), e > 0)) {
      let t = this._window.findChildByName("number");
      t != null && (t.text = String(e));
    }
  }
  updateBitmapBlend(e) {
    let r = this._window?.findChildByName("bitmap");
    r != null && (r.blend = e ? a.THUMB_BLEND_ITEMS_AVAILABLE : a.THUMB_BLEND_ITEMS_NOT_AVAILABLE);
  }
  _ra2392916df2aec = n((e, r) => {
    e.type === u.DOWN && this.onTriggered();
  }, "_ra2392916df2aec");
  onTriggered() {}
  get content() {
    return this._data;
  }
  get furnitureData() {
    return this.content?.furnitureData ?? null;
  }
  get window() {
    return this._window;
  }
}

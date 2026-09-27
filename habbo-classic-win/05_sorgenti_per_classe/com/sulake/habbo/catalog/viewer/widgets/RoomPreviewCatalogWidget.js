// Extracted from HabboAirLauncher.deobf.js, line 194888.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/RoomPreviewCatalogWidget.as
// Obfuscated name: _i5ec124401ee52b

class extends CatalogWidget {
  static {
    n(this, "RoomPreviewCatalogWidget");
  }
  _ra2445ca8ffd132 = -1;
  _rc1dea08fec8e60 = -1;
  _rea10acd300b1a5 = null;
  _r1a4fb626857ad8 = null;
  _rffcd368802939f = null;
  _offer = null;
  dispose() {
    (this._rea10acd300b1a5?.dispose(),
      (this._rea10acd300b1a5 = null),
      this._r1a4fb626857ad8?.dispose(),
      (this._r1a4fb626857ad8 = null),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.UPDATE_ROOM_PREVIEW, this._r9f625b4225a6cd),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    let e = this.window?.getChildByName("catalog_floor_preview_example");
    return (
      e != null && (e.procedure = this.eventProc),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.UPDATE_ROOM_PREVIEW, this._r9f625b4225a6cd),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.SELECT_PRODUCT, this._raaed999dcb0c8a),
      !0
    );
  }
  _r953e33111bd217(e, r) {
    !this.disposed && e && this.events?.dispatchEvent?.(new UnkClass_402cad(!1, r));
  }
  imageReady(e, r) {
    if (!this.disposed) {
      switch (e) {
        case this._ra2445ca8ffd132:
          ((this._ra2445ca8ffd132 = 0), this._rea10acd300b1a5?.dispose(), (this._rea10acd300b1a5 = r));
          break;
        case this._rc1dea08fec8e60:
          ((this._rc1dea08fec8e60 = 0), this._r1a4fb626857ad8?.dispose(), (this._r1a4fb626857ad8 = r));
          break;
      }
      this._rea10acd300b1a5 != null &&
        this._r1a4fb626857ad8 != null &&
        this.setRoomImage(this._rea10acd300b1a5, this._r1a4fb626857ad8);
    }
  }
  imageFailed(e) {}
  _raaed999dcb0c8a = n((e) => {
    this._offer = e.offer;
  }, "_raaed999dcb0c8a");
  eventProc = n((e, r) => {
    switch (e.type) {
      case u.UP:
        this._rffcd368802939f = null;
        break;
      case u.DOWN:
        this._rffcd368802939f = r;
        break;
      case u.OUT:
        this._rffcd368802939f != null &&
          this._rffcd368802939f === r &&
          this._offer != null &&
          (this.page?.viewer.catalog?._r554b9a058961c3(this, this._offer),
          (this._rffcd368802939f = null));
        break;
      case u.CLICK:
      case u.DOUBLE_CLICK:
        this._rffcd368802939f = null;
        break;
    }
  }, "eventProc");
  _r9f625b4225a6cd = n((e) => {
    let r = this.page?.viewer.roomEngine ?? null;
    if (r == null) return;
    let t = "window_double_default",
      i = r._r2e33d89cc9b407(
        e._r79139f0497a3db,
        e._raec7c74c043bf6,
        e._r0360237584f43e,
        e._rb8aad2b8f0c371,
        this,
        t,
      ),
      s = r._ra5bef405f056da(t, "", new k(180, 0, 0), e._rb8aad2b8f0c371, this);
    if (i == null || s == null) return;
    ((this._ra2445ca8ffd132 = i.id), (this._rc1dea08fec8e60 = s.id));
    let o = i.data,
      d = s.data;
    (this._rea10acd300b1a5?.dispose(),
      this._r1a4fb626857ad8?.dispose(),
      (this._rea10acd300b1a5 = o),
      (this._r1a4fb626857ad8 = d),
      o != null && d != null && this.setRoomImage(o, d));
  }, "_r9f625b4225a6cd");
  setRoomImage(e, r) {
    if (this.window == null || this.window.disposed) return;
    let t = this.window.getChildByName("catalog_floor_preview_example");
    if (t == null) return;
    t.bitmap == null && (t.bitmap = new A(t.width, t.height, !0, 16777215));
    let i = -45,
      s = 20;
    t.bitmap.fillRect(t.bitmap.rect, 16777215);
    let o = (t.width - e.width) / 2 + i,
      d = (t.height - e.height) / 2 + s;
    t.bitmap.copyPixels(e, e.rect, new E(o, d), null, null, !0);
    let c = t.width / 2 + i,
      f = t.height / 2 + s - r.height;
    ((c += 1), (f += 44), t.bitmap.copyPixels(r, r.rect, new E(c, f), null, null, !0), t.invalidate());
  }
}

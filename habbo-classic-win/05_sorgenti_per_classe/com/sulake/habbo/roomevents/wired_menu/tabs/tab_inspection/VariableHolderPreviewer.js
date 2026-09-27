// Estratto da HabboAirLauncher.deobf.js, riga 356422.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_inspection/VariableHolderPreviewer.as
// Nome offuscato: _i09ce46d1f4d78a

class a {
  constructor(e, r) {
    this._container = e;
    this.var_63 = r;
    this.clearPreviewer();
  }
  static {
    n(this, "VariableHolderPreviewer");
  }
  _disposed = !1;
  var_2128 = -1;
  var_2280 = 0;
  _r5f8eb3b3a8d9fa = -1;
  get disposed() {
    return this._disposed;
  }
  clearPreviewer() {
    ((this.var_2280 = 0),
      (this._r5f8eb3b3a8d9fa = -1),
      (this.previewFurniInstructionText.visible = !1),
      (this.previewUserInstructionText.visible = !1),
      (this.previewAvatarWidget.visible = !1),
      (this.previewPetWidget.visible = !1),
      (this.previewImageBitmap.visible = !1),
      (this.previewGlobalPlaceholder.visible = !1));
  }
  _r9ea1c801553196() {
    (this.clearPreviewer(), (this.previewFurniInstructionText.visible = !0));
  }
  _r97ec226caf3f6b() {
    (this.clearPreviewer(), (this.previewUserInstructionText.visible = !0));
  }
  _r7a611ceb9ddb12(e) {
    if (e === this._r5f8eb3b3a8d9fa) return;
    this.clearPreviewer();
    let r = this.var_63._r41f5cc7d3516ce._r2eac8239a09fe7.getUserDataByIndex.userDataManager(e);
    if (r != null) {
      switch (r.type) {
        case RoomObjectTypeEnum.OBJECT_TYPE_PET: {
          this.previewPetWidget.visible = !0;
          let t = this.previewPetWidget.widget;
          ((t.figure = r.figure), a.centerContainer(this.previewPetWidget));
          break;
        }
        case RoomObjectTypeEnum.OBJECT_TYPE_USER:
        case RoomObjectTypeEnum.const_543:
        case RoomObjectTypeEnum.const_965: {
          this.previewAvatarWidget.visible = !0;
          let t = this.previewAvatarWidget.widget;
          ((t.figure = r.figure), a.centerContainer(this.previewAvatarWidget));
          break;
        }
      }
      this._r5f8eb3b3a8d9fa = e;
    }
  }
  _rdc09238d00e25e(e) {
    if (e === this.var_2280 || -e === this.var_2280) return;
    this.clearPreviewer();
    let r = RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE;
    e < 0 && ((e = -e), (r = RoomObjectCategoryEnum.const_909));
    let t = this.var_63._r41f5cc7d3516ce.roomEngine,
      i = t._r935bceb9c0dcea(t.activeRoomId, e, r, new k(180), 64, null);
    (i?.data != null &&
      ((this.previewImageBitmap.bitmap = i.data.clone()),
      i.data.width >= this._container.width - 6 || i.data.height > this._container.height - 6
        ? ((this.previewImageBitmap.zoomX = 0.5), (this.previewImageBitmap.zoomY = 0.5))
        : ((this.previewImageBitmap.zoomX = 1), (this.previewImageBitmap.zoomY = 1)),
      (this.previewImageBitmap.visible = !0),
      a.centerContainer(this.previewImageBitmap)),
      (this.var_2280 = e));
  }
  static centerContainer(e) {
    ((e.x = e.parent.width / 2 - e.width / 2), (e.y = e.parent.height / 2 - e.height / 2));
  }
  _r5e96665092eab6() {
    (this.clearPreviewer(), (this.previewGlobalPlaceholder.visible = !0));
  }
  imageReady(e, r) {}
  imageFailed(e) {}
  dispose() {
    this._disposed ||
      ((this.var_2128 = -1),
      (this._container = null),
      (this.var_63 = null),
      (this._disposed = !0));
  }
  get previewFurniInstructionText() {
    return this._container.findChildByName("preview_instruction_furni");
  }
  get previewUserInstructionText() {
    return this._container.findChildByName("preview_instruction_user");
  }
  get previewAvatarWidget() {
    return this._container.findChildByName("preview_avatar");
  }
  get previewPetWidget() {
    return this._container.findChildByName("preview_pet");
  }
  get previewImageBitmap() {
    return this._container.findChildByName("preview_image_bitmap");
  }
  get previewGlobalPlaceholder() {
    return this._container.findChildByName("global_placeholder");
  }
}

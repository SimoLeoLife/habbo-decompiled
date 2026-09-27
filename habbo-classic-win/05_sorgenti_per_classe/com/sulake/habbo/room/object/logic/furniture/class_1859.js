// Extracted from HabboAirLauncher.deobf.js, line 298917.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1859.as
// Obfuscated name: _i6bdf21f5c55b93

class extends Qr {
  static {
    n(this, "class_1859");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectBadgeAssetEvent.LOAD_BADGE, RoomObjectWidgetRequestEvent.BADGE_DISPLAY_ENGRAVING]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null,
      t = r?.data instanceof ao ? r.data : null;
    t != null && this.updateBadge(t.getValue(1));
    let i = e instanceof RoomObjectGroupBadgeUpdateMessage ? e : null;
    i != null &&
      i.assetName !== "loading_icon" &&
      this.object != null &&
      (this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_BADGE_ASSET_NAME, i.assetName),
      this.object.getModelController().setNumber(RoomObjectVariableEnum.FURNITURE_BADGE_IMAGE_STATUS, 1),
      this.update(_ia411d8d8194a3a()));
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === UnkClass_fd7c12.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.BADGE_DISPLAY_ENGRAVING, this.object));
  }
  updateBadge(e) {
    e !== "" &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectBadgeAssetEvent(RoomObjectBadgeAssetEvent.LOAD_BADGE, this.object, e, !1));
  }
}

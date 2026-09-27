// Extracted from HabboAirLauncher.deobf.js, line 298955.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1860.as
// Obfuscated name: _if4cd418738d883

class a extends class_1859 {
  static {
    n(this, "class_1860");
  }
  static STATE_RESOLUTION_NOT_STARTED = 0;
  static STATE_RESOLUTION_IN_PROGRESS = 1;
  static _r8ec792c71c08f2 = 2;
  static STATE_RESOLUTION_FAILED = 3;
  static ACH_NOT_SET = "ACH_0";
  static _r7bbb5550ce8e93 = 2;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_OPEN,
      RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_ENGRAVING,
      RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_FAILED,
      RoomObjectBadgeAssetEvent.LOAD_BADGE,
    ]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof RoomObjectGroupBadgeUpdateMessage ? e : null;
    r != null &&
      r.assetName !== "loading_icon" &&
      this.object != null &&
      this.object.getModelController().setNumber(RoomObjectVariableEnum.const_901, a._r7bbb5550ce8e93);
    let t = e instanceof UnkRoomObjectUpdateStateMessageSubclass_a9a296 ? e : null;
    t != null &&
      !t.selected &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU, this.object));
  }
  _rce2b5eb85a79e0() {
    if (this.object == null) return;
    let e = null;
    switch (this.object.getState(0)) {
      case a.STATE_RESOLUTION_NOT_STARTED:
      case a.STATE_RESOLUTION_IN_PROGRESS:
        e = RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_OPEN;
        break;
      case a._r8ec792c71c08f2:
        e = RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_ENGRAVING;
        break;
      case a.STATE_RESOLUTION_FAILED:
        e = RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_FAILED;
        break;
    }
    e != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(e, this.object));
  }
  updateBadge(e) {
    e !== a.ACH_NOT_SET && super.updateBadge(e);
  }
}

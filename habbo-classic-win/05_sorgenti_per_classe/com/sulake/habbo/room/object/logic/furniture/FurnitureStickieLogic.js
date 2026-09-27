// Extracted from HabboAirLauncher.deobf.js, line 300857.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureStickieLogic.as
// Obfuscated name: _ifa5875e1aa7e01

class extends Qr {
  static {
    n(this, "FurnitureStickieLogic");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.STICKIE, RoomObjectFurnitureActionEvent.STICKIE]);
  }
  initialize(e) {
    (super.initialize(e),
      this.setColorIndexFromItemData(),
      this.object?.getModelController()?.setString(RoomObjectVariableEnum.FURNITURE_IS_STICKIE, ""));
  }
  processUpdateMessage(e) {
    (super.processUpdateMessage(e),
      e instanceof RoomObjectItemDataUpdateMessage &&
        this.object != null &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.STICKIE, this.object)),
      this.setColorIndexFromItemData());
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
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.STICKIE, this.object));
  }
  setColorIndexFromItemData() {
    if (this.object == null) return;
    let e = this.object.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_DATA) ?? "",
      t = ["9CCEFF", "FF9CFF", "9CFF9C", "FFFF33", "FFFFFF", "FF9C9C", "FFCC66", "9CFFFF"].indexOf(e);
    (t < 0 && (t = 3), this.object.getModelController().setNumber(RoomObjectVariableEnum.const_167, t + 1));
  }
}

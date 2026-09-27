// Extracted from HabboAirLauncher.deobf.js, line 299745.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3b5de99acd8e6d

class extends Qr {
  static {
    n(this, "UnkClass_3b5de9");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurnitureActionEvent.USE_HABBOWHEEL]);
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
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.USE_HABBOWHEEL, this.object));
  }
}

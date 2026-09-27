// Extracted from HabboAirLauncher.deobf.js, line 299454.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1ecbe29bb2d248

class extends UnkClass_6439ae {
  static {
    n(this, "UnkClass_1ecbe2");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.STICKIE, RoomObjectFurnitureActionEvent.STICKIE]);
  }
  get widget() {
    return RoomWidgetEnum.EXTERNAL_IMAGE;
  }
  initialize(e) {
    super.initialize(e);
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
}

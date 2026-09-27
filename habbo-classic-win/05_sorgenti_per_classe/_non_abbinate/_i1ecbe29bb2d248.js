// Estratto da HabboAirLauncher.deobf.js, riga 299454.

class extends _i6439aedd7c17e0 {
  static {
    n(this, "_i1ecbe29bb2d248");
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
      if (e.type === _ifd7c1208e3417e.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
}

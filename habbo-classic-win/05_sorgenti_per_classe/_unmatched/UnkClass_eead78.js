// Extracted from HabboAirLauncher.deobf.js, line 299007.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ieead78a21202a2

class extends Qr {
  static {
    n(this, "UnkClass_eead78");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON, RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW]);
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null || this._r11e12b4ff1ca8e == null)) {
      switch (e.type) {
        case UnkClass_fd7c12.ROLL_OVER:
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON, this.object));
          break;
        case UnkClass_fd7c12.ROLL_OUT:
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW, this.object));
          break;
      }
      super.mouseEvent(e, r);
    }
  }
}

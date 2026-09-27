// Estratto da HabboAirLauncher.deobf.js, riga 299007.

class extends Qr {
  static {
    n(this, "_ieead78a21202a2");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON, RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW]);
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null || this._r11e12b4ff1ca8e == null)) {
      switch (e.type) {
        case _ifd7c1208e3417e.ROLL_OVER:
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON, this.object));
          break;
        case _ifd7c1208e3417e.ROLL_OUT:
          this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW, this.object));
          break;
      }
      super.mouseEvent(e, r);
    }
  }
}

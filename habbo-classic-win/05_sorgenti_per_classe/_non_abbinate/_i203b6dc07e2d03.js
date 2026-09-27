// Estratto da HabboAirLauncher.deobf.js, riga 300982.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i203b6dc07e2d03");
  }
  mouseEvent(e, r) {
    e == null ||
      r == null ||
      this.object == null ||
      (e.type === _ifd7c1208e3417e.DOUBLE_CLICK &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object)),
      super.mouseEvent(e, r));
  }
}

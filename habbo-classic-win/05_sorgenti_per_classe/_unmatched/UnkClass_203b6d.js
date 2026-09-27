// Extracted from HabboAirLauncher.deobf.js, line 300982.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i203b6dc07e2d03

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_203b6d");
  }
  mouseEvent(e, r) {
    e == null ||
      r == null ||
      this.object == null ||
      (e.type === UnkClass_fd7c12.DOUBLE_CLICK &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object)),
      super.mouseEvent(e, r));
  }
}

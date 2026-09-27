// Extracted from HabboAirLauncher.deobf.js, line 299477.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i533b6fdd5a581d

class extends Qr {
  static {
    n(this, "UnkClass_533b6f");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE]);
  }
  mouseEvent(e, r) {
    if (e == null || r == null || this.object == null) return;
    let t = null;
    if (e.type === UnkClass_fd7c12.DOUBLE_CLICK)
      switch (e.RoomObjectStateChangeEvent) {
        case "start_stop":
          t = 1;
          break;
        case "reset":
          t = 2;
          break;
      }
    if (t != null) {
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object, t));
      return;
    }
    super.mouseEvent(e, r);
  }
  _rce2b5eb85a79e0() {
    this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object, 0));
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("particlesystems");
    r.length() !== 0 && this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_FIREWORKS_DATA, String(r));
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 300180.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie42040cb3a635e

class extends Qr {
  static {
    n(this, "UnkClass_e42040");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.PLACEHOLDER]);
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
    this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.PLACEHOLDER, this.object));
  }
}

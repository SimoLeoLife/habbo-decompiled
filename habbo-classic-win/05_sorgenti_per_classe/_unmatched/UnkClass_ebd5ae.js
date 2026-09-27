// Extracted from HabboAirLauncher.deobf.js, line 299332.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iebd5ae50466afe

class extends Qr {
  static {
    n(this, "UnkClass_ebd5ae");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.ECOTRONBOX]);
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
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.ECOTRONBOX, this.object));
  }
}

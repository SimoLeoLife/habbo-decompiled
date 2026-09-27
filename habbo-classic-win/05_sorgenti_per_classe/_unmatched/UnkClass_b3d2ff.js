// Extracted from HabboAirLauncher.deobf.js, line 300284.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib3d2ffe4e56b17

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_b3d2ff");
  }
  get contextMenu() {
    return class_3015.PURCHASABLE_CLOTHING;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.const_557]);
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.const_557, this.object));
  }
}

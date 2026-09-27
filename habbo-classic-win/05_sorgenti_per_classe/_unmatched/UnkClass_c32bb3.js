// Extracted from HabboAirLauncher.deobf.js, line 299423.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic32bb3841fda96

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_c32bb3");
  }
  get contextMenu() {
    return class_3015.EFFECT_BOX;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.const_446]);
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.const_446, this.object));
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 300065.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i58182c41a2acb0

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_58182c");
  }
  get contextMenu() {
    return class_3015.MYSTERY_TROPHY;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.MYSTERYTROPHY_OPEN_DIALOG]);
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.MYSTERYTROPHY_OPEN_DIALOG, this.object));
  }
}

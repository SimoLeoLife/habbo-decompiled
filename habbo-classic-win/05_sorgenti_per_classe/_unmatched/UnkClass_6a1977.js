// Extracted from HabboAirLauncher.deobf.js, line 300051.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6a197777779f81

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_6a1977");
  }
  get contextMenu() {
    return class_3015.MYSTERY_BOX;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.MYSTERYBOX_OPEN_DIALOG]);
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.MYSTERYBOX_OPEN_DIALOG, this.object));
  }
}

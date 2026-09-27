// Extracted from HabboAirLauncher.deobf.js, line 300029.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1d29a008ce7564

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_1d29a0");
  }
  get contextMenu() {
    return class_3015.MONSTERPLANT_SEED;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG]);
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG, this.object));
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 300029.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i1d29a008ce7564");
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

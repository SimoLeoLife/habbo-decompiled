// Estratto da HabboAirLauncher.deobf.js, riga 300051.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i6a197777779f81");
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

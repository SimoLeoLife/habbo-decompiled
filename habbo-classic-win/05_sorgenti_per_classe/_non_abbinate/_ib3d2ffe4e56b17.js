// Estratto da HabboAirLauncher.deobf.js, riga 300284.

class extends _ieead78a21202a2 {
  static {
    n(this, "_ib3d2ffe4e56b17");
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

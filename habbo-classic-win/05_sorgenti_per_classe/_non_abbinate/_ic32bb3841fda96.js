// Estratto da HabboAirLauncher.deobf.js, riga 299423.

class extends _ieead78a21202a2 {
  static {
    n(this, "_ic32bb3841fda96");
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

// Estratto da HabboAirLauncher.deobf.js, riga 301003.

class extends Qr {
  static {
    n(this, "_i4d6b2ea4e00ab6");
  }
  get widget() {
    return RoomWidgetEnum.YOUTUBE;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectDataRequestEvent.URL_PREFIX]);
  }
  update(e) {
    if ((super.update(e), this.object == null)) return;
    this.object.getStringToStringMap()?._r9df63baa75fee6(RoomObjectVariableEnum.SESSION_URL_PREFIX) ||
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectDataRequestEvent(RoomObjectDataRequestEvent.URL_PREFIX, this.object));
  }
}

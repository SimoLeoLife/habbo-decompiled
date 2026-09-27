// Extracted from HabboAirLauncher.deobf.js, line 301003.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4d6b2ea4e00ab6

class extends Qr {
  static {
    n(this, "UnkClass_4d6b2e");
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

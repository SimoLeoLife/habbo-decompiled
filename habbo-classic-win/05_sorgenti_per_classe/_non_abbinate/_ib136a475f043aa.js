// Estratto da HabboAirLauncher.deobf.js, riga 300389.

class extends Qr {
  static {
    n(this, "_ib136a475f043aa");
  }
  get widget() {
    return RoomWidgetEnum.RENTABLESPACE;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectDataRequestEvent.CURRENT_USER_ID]);
  }
  update(e) {
    if ((super.update(e), this.object == null)) return;
    let r = this.object.getStringToStringMap();
    if (r == null) return;
    r._ra3412bd0673156(RoomObjectVariableEnum.const_1354) ||
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectDataRequestEvent(RoomObjectDataRequestEvent.CURRENT_USER_ID, this.object));
    let t = r._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA)?.getValue("renterId"),
      i = r._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1354);
    t != null ? this.object.setState(Number(t) === i ? 2 : 1, 0) : this.object.setState(0, 0);
  }
}

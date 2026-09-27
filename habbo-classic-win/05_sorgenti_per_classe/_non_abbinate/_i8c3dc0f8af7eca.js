// Estratto da HabboAirLauncher.deobf.js, riga 299116.

class extends Qr {
  static {
    n(this, "_i8c3dc0f8af7eca");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.CLOTHING_CHANGE]);
  }
  initialize(e) {
    super.initialize(e);
    let r = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_DATA) ?? "";
    this._r024c3143d7868c(r);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
    r?.data != null && this._r024c3143d7868c(r.data.getLegacyString());
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === _ifd7c1208e3417e.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.CLOTHING_CHANGE, this.object));
  }
  _r024c3143d7868c(e) {
    if (this.object == null || e.length === 0) return;
    let r = e.split(","),
      t = this.object.getModelController();
    (r.length > 0 && t.setString(RoomObjectVariableEnum.const_783, r[0]),
      r.length > 1 && t.setString(RoomObjectVariableEnum.const_1285, r[1]));
  }
}

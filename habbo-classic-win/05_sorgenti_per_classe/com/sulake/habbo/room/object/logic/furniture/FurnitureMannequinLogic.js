// Estratto da HabboAirLauncher.deobf.js, riga 299987.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureMannequinLogic.as
// Nome offuscato: _i73c3ea79070c14

class a extends Qr {
  static {
    n(this, "FurnitureMannequinLogic");
  }
  static KEY_GENDER = "GENDER";
  static KEY_FIGURE = "FIGURE";
  static KEY_OUTFIT_NAME = "OUTFIT_NAME";
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.MANNEQUIN]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
    r != null &&
      r.data != null &&
      this.object != null &&
      (r.data._r22048429087864(this.object.getModelController()), this._ra36f12ae768244());
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
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.MANNEQUIN, this.object));
  }
  _ra36f12ae768244() {
    if (this.object == null) return;
    let e = this.object.getStringToStringMap();
    if (e == null) return;
    let r = new Bc();
    r._r8476f6049cdad6(e);
    let t = this.object.getModelController();
    (t.setString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_GENDER, r.getValue(a.KEY_GENDER) ?? ""),
      t.setString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_FIGURE, r.getValue(a.KEY_FIGURE) ?? ""),
      t.setString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_NAME, r.getValue(a.KEY_OUTFIT_NAME) ?? ""));
  }
}

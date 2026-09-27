// Extracted from HabboAirLauncher.deobf.js, line 300212.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurniturePresentLogic.as
// Obfuscated name: _i000a8d1db3bf85

class a extends Qr {
  static {
    n(this, "FurniturePresentLogic");
  }
  static MESSAGE = "MESSAGE";
  static PRODUCT_CODE = "PRODUCT_CODE";
  static PURCHASER_NAME = "PURCHASER_NAME";
  static PURCHASER_FIGURE = "PURCHASER_FIGURE";
  static TRUSTED_SENDER = "TRUSTED_SENDER";
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.PRESENT]);
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("particlesystems");
    r.length() !== 0 && this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_FIREWORKS_DATA, String(r));
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    r?.data != null &&
      this.object != null &&
      (r.data._r22048429087864(this.object.getModelController()), this._ra36f12ae768244());
    let t = e instanceof UnkRoomObjectUpdateMessageSubclass_6ccdf0 ? e : null;
    t != null &&
      t._r9ec0b3be7d6def === RoomObjectVariableEnum.const_1064 &&
      this.object != null &&
      this.object.getModelController().setNumber(RoomObjectVariableEnum.const_1064, t.numberValue);
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      switch (e.type) {
        case UnkClass_fd7c12.ROLL_OVER:
          (this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON, this.object)),
            super.mouseEvent(e, r));
          return;
        case UnkClass_fd7c12.ROLL_OUT:
          (this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW, this.object)),
            super.mouseEvent(e, r));
          return;
        case UnkClass_fd7c12.DOUBLE_CLICK:
          this._rce2b5eb85a79e0();
          return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.PRESENT, this.object));
  }
  _ra36f12ae768244() {
    if (this.object == null) return;
    let e = this.object.getStringToStringMap();
    if (e == null) return;
    let r = new Bc();
    r._r8476f6049cdad6(e);
    let t = r.getValue(a.MESSAGE),
      i = e.getString(RoomObjectVariableEnum.FURNITURE_DATA);
    (t == null && i != null
      ? this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_DATA, i.slice(1))
      : this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_DATA, t ?? ""),
      this._r739c37081e6be9(RoomObjectVariableEnum.const_191, r.getValue(a.PRODUCT_CODE)),
      this._r739c37081e6be9(RoomObjectVariableEnum.FURNITURE_PURCHASER_NAME, r.getValue(a.PURCHASER_NAME)),
      this._r739c37081e6be9(RoomObjectVariableEnum.FURNITURE_PURCHASER_FIGURE, r.getValue(a.PURCHASER_FIGURE)),
      this.object
        .getModelController()
        .setNumber(RoomObjectVariableEnum.FURNITURE_TRUSTED_SENDER, r.getValue(a.TRUSTED_SENDER) === "true" ? 1 : 0));
  }
  _r739c37081e6be9(e, r) {
    this.object != null && r != null && this.object.getModelController().setString(e, r);
  }
}

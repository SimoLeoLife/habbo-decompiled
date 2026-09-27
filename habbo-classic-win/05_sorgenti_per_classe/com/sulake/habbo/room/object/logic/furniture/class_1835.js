// Extracted from HabboAirLauncher.deobf.js, line 299765.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1835.as
// Obfuscated name: _ie0889c07477fd3

class a extends Qr {
  static {
    n(this, "class_1835");
  }
  static SHOW_WIDGET_IN_STATE = 1;
  getEventTypes() {
    return [RoomObjectWidgetRequestEvent.const_121, RoomObjectWidgetRequestEvent.const_662];
  }
  _r04bcf029737be6() {
    (this.object != null &&
      this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.const_662, this.object)),
      super._r04bcf029737be6());
  }
  processUpdateMessage(e) {
    if (
      (super.processUpdateMessage(e),
      this.object == null || this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) !== 1)
    )
      return;
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    if (r != null) {
      let t = r.state === a.SHOW_WIDGET_IN_STATE ? RoomObjectWidgetRequestEvent.const_121 : RoomObjectWidgetRequestEvent.const_662;
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(t, this.object));
    }
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === UnkClass_fd7c12.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
}

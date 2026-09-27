// Extracted from HabboAirLauncher.deobf.js, line 300154.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i51e260ebd91560

class extends Qr {
  static {
    n(this, "UnkClass_51e260");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.PET_PRODUCT_MENU]);
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
  processUpdateMessage(e) {
    (super.processUpdateMessage(e),
      this.object != null &&
        this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
        this.object.getModelController().setString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM, RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_PRODUCT));
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.PET_PRODUCT_MENU, this.object));
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 300705.

class extends Qr {
  static {
    n(this, "_i0d71bd86cf0820");
  }
  processUpdateMessage(e) {
    if (
      (super.processUpdateMessage(e),
      this.object != null && this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1)
    ) {
      let r = this.object.getModelController().getString(RoomObjectVariableEnum.FURNITURE_EXTRAS),
        t = Number.parseInt(r, 10) || 0;
      this.object.getModelController().setString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM, RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_SONGDISK + t);
    }
  }
}

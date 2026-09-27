// Estratto da HabboAirLauncher.deobf.js, riga 299209.

class extends Qr {
  static {
    n(this, "_id9944b30979167");
  }
  processUpdateMessage(e) {
    (super.processUpdateMessage(e),
      this.object != null &&
        this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
        this.object.getModelController().setString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM, RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_CRACKABLE_FURNI));
  }
}

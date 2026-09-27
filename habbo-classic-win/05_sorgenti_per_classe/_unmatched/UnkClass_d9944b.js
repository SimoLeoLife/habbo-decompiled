// Extracted from HabboAirLauncher.deobf.js, line 299209.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id9944b30979167

class extends Qr {
  static {
    n(this, "UnkClass_d9944b");
  }
  processUpdateMessage(e) {
    (super.processUpdateMessage(e),
      this.object != null &&
        this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
        this.object.getModelController().setString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM, RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_CRACKABLE_FURNI));
  }
}

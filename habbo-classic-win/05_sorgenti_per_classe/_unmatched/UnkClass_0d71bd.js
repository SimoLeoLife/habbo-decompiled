// Extracted from HabboAirLauncher.deobf.js, line 300705.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0d71bd86cf0820

class extends Qr {
  static {
    n(this, "UnkClass_0d71bd");
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

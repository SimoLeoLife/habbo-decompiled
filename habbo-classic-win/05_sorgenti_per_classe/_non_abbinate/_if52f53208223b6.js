// Estratto da HabboAirLauncher.deobf.js, riga 299220.

class extends Qr {
  static {
    n(this, "_if52f53208223b6");
  }
  get widget() {
    return RoomWidgetEnum.CRAFTING;
  }
  _r335a359614633d(e) {
    this.object != null && this.object.getModelController().setNumber(RoomObjectVariableEnum.const_718, e, !1);
  }
}

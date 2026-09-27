// Estratto da HabboAirLauncher.deobf.js, riga 299288.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i7cbd0f9136e21e");
  }
  get widget() {
    return RoomWidgetEnum.CUSTOM_STACK_HEIGHT;
  }
  initialize(e) {
    (super.initialize(e), this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.const_750, 1));
  }
}

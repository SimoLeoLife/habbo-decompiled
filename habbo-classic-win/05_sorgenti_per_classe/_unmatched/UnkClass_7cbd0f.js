// Extracted from HabboAirLauncher.deobf.js, line 299288.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7cbd0f9136e21e

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_7cbd0f");
  }
  get widget() {
    return RoomWidgetEnum.CUSTOM_STACK_HEIGHT;
  }
  initialize(e) {
    (super.initialize(e), this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.const_750, 1));
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 301272.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i917497322ffd57

class extends ObjectLogicBase {
  static {
    n(this, "UnkObjectLogicBaseSubclass_917497");
  }
  initialize(e) {
    let r = this.object?.getModelController();
    this.object != null && r != null && (r.setNumber(RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER, 1), this.object.setState(1, 0));
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof RoomObjectVisibilityUpdateMessage ? e : null;
    r == null ||
      this.object == null ||
      (r.type === RoomObjectVisibilityUpdateMessage.ENABLED
        ? this.object.setState(0, 0)
        : r.type === RoomObjectVisibilityUpdateMessage.DISABLED && this.object.setState(1, 0));
  }
}

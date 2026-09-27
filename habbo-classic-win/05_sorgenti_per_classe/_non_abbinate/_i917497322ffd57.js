// Estratto da HabboAirLauncher.deobf.js, riga 301272.

class extends ObjectLogicBase {
  static {
    n(this, "_i917497322ffd57");
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

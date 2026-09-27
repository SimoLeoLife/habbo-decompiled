// Extracted from HabboAirLauncher.deobf.js, line 300969.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i19605e0eb99c92

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_19605e");
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null,
      t = r?.data instanceof V6 ? r.data : null;
    t != null &&
      this.object != null &&
      this.object.getModelController().setNumber(RoomObjectVariableEnum.FURNITURE_VOTE_MAJORITY_RESULT, t.result);
  }
}

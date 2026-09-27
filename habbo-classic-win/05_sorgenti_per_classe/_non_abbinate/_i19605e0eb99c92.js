// Estratto da HabboAirLauncher.deobf.js, riga 300969.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i19605e0eb99c92");
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null,
      t = r?.data instanceof V6 ? r.data : null;
    t != null &&
      this.object != null &&
      this.object.getModelController().setNumber(RoomObjectVariableEnum.FURNITURE_VOTE_MAJORITY_RESULT, t.result);
  }
}

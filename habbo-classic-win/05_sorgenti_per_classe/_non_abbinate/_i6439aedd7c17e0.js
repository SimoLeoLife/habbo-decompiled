// Estratto da HabboAirLauncher.deobf.js, riga 299437.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i6439aedd7c17e0");
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("mask");
    if (r.length() === 0) return;
    let [t] = r.toArray();
    if (t == null || !(t instanceof Object) || !("attribute" in t) || !da.checkRequiredAttributes(t, ["type"]))
      return;
    let i = t,
      s = this.object.getModelController();
    (s.setNumber(RoomObjectVariableEnum.FURNITURE_USES_PLANE_MASK, 1, !0),
      s.setString(RoomObjectVariableEnum.FURNITURE_PLANE_MASK_TYPE, String(i.attribute("type")), !0));
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 299437.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6439aedd7c17e0

class extends UnkClass_eead78 {
  static {
    n(this, "UnkClass_6439ae");
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

// Extracted from HabboAirLauncher.deobf.js, line 280460.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/pet/PetAnimationSizeData.as
// Obfuscated name: _i70e5afc24f50b7

class a extends AnimationSizeData {
  static {
    n(this, "PetAnimationSizeData");
  }
  static const_187 = -1;
  var_1471 = new B();
  _r179d1d9f82db20 = new B();
  _rc714598d132f44 = null;
  definePostures(e) {
    if (e == null) return !1;
    this._rc714598d132f44 = da.checkRequiredAttributes(e, ["defaultPosture"])
      ? String(e.attribute("defaultPosture") ?? "")
      : null;
    for (let r of e.child("posture").toArray()) {
      if (
        typeof r != "object" ||
        r == null ||
        !("attribute" in r) ||
        !da.checkRequiredAttributes(r, ["id", "animationId"])
      )
        return !1;
      let t = r,
        i = String(t.attribute("id") ?? ""),
        s = Number.parseInt(String(t.attribute("animationId") ?? "0"), 10);
      (this.var_1471.add(i, s), this._rc714598d132f44 == null && (this._rc714598d132f44 = i));
    }
    return this._rc714598d132f44 != null && this.var_1471.getValue(this._rc714598d132f44) != null;
  }
  defineGestures(e) {
    if (e == null) return !0;
    for (let r of e.child("gesture").toArray()) {
      if (
        typeof r != "object" ||
        r == null ||
        !("attribute" in r) ||
        !da.checkRequiredAttributes(r, ["id", "animationId"])
      )
        return !1;
      let t = r,
        i = String(t.attribute("id") ?? ""),
        s = Number.parseInt(String(t.attribute("animationId") ?? "0"), 10);
      this._r179d1d9f82db20.add(i, s);
    }
    return !0;
  }
  _rac5052e541a5c2(e) {
    let r = this.var_1471.getValue(e) == null ? (this._rc714598d132f44 ?? e) : e;
    return this.var_1471.getValue(r) ?? 0;
  }
  getGestureDisabled(e) {
    return e === "ded";
  }
  _r2d43f7d91e32f5(e) {
    return e == null ? a.const_187 : (this._r179d1d9f82db20.getValue(e) ?? a.const_187);
  }
  getPostureForAnimation(e, r) {
    return e >= 0 && e < this.var_1471.length
      ? this.var_1471.getKey(e)
      : r
        ? this._rc714598d132f44
        : null;
  }
  _r9a4755b7650147(e) {
    return e >= 0 && e < this._r179d1d9f82db20.length ? this._r179d1d9f82db20.getKey(e) : null;
  }
  _rd0e34ea4fa9508(e) {
    for (let r of this._r179d1d9f82db20.getKeys()) if (this._r179d1d9f82db20.getValue(r) === e) return r;
    return null;
  }
  _r4ab498fd84bcaf() {
    return this.var_1471.length;
  }
  _rbbcfa957424c0a() {
    return this._r179d1d9f82db20.length;
  }
}

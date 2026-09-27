// Extracted from HabboAirLauncher.deobf.js, line 251866.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i844c8afb8fa2f2

class {
  static {
    n(this, "UnkClass_844c8a");
  }
  _r1710bcce37d09e = new Map();
  var_122 = null;
  _r89804fb6520a29(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_III_be23a9);
    if (r != null && r != null) for (let t of r._r3ffeb595461103) this._r1710bcce37d09e.set(t.id, t.name);
  }
  _re2d4f827ef2413(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_IIII_7720fd);
    if (r != null && r != null) {
      for (let t of r._r4c37a8f59cd58b) this._r1710bcce37d09e.set(t, null);
      for (let t of r._r4635d11ec0fc56) this._r1710bcce37d09e.set(t.id, t.name);
      this.var_122 =
        r._r4c37a8f59cd58b.length > 0 || r._r4635d11ec0fc56.length > 0 ? null : this.var_122;
    }
  }
  get list() {
    if (this.var_122 == null) {
      this.var_122 = [];
      for (let [e, r] of this._r1710bcce37d09e.entries())
        r != null && this.var_122.push(new UnkClass_3c3557(e, r));
      this.var_122.sort((e, r) =>
        e.userName.localeCompare(r.userName, void 0, { sensitivity: "accent" }),
      );
    }
    return this.var_122;
  }
}

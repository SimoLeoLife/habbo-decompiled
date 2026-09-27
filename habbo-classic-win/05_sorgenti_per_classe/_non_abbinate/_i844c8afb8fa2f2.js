// Estratto da HabboAirLauncher.deobf.js, riga 251866.

class {
  static {
    n(this, "_i844c8afb8fa2f2");
  }
  _r1710bcce37d09e = new Map();
  var_122 = null;
  _r89804fb6520a29(e) {
    let r = ClassUtils.getParser(e, _ibe23a988cf9243);
    if (r != null && r != null) for (let t of r._r3ffeb595461103) this._r1710bcce37d09e.set(t.id, t.name);
  }
  _re2d4f827ef2413(e) {
    let r = ClassUtils.getParser(e, _i7720fd48030002);
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
        r != null && this.var_122.push(new _i3c35577e7f7d54(e, r));
      this.var_122.sort((e, r) =>
        e.userName.localeCompare(r.userName, void 0, { sensitivity: "accent" }),
      );
    }
    return this.var_122;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 82690.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i63afab76b9bd45

class a {
  constructor(e, r, t, i, s, o, d, c, f, l = !1) {
    this.configId = e;
    this.variableId = r;
    this.createdAt = t;
    this.updateId = i;
    this.value = s;
    this._rd039082a66c6c1 = o;
    this._rde47e35540b4cb = d;
    this.extra = c;
    this.isInitialize = f;
    this.invisible = l;
  }
  static {
    n(this, "UnkClass_63afab");
  }
  clone() {
    return new a(
      this.configId,
      this.variableId,
      this.createdAt,
      this.updateId,
      this.value,
      this._rd039082a66c6c1,
      this._rde47e35540b4cb,
      this.extra.clone(),
      this.isInitialize,
      this.invisible,
    );
  }
  dispose() {
    this.extra != null && (this.extra.dispose(), (this.extra = null));
  }
}

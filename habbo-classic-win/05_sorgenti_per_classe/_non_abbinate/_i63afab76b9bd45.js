// Estratto da HabboAirLauncher.deobf.js, riga 82690.

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
    n(this, "_i63afab76b9bd45");
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

// Extracted from HabboAirLauncher.deobf.js, line 33627.

class a {
  constructor(e = 1, r = 0, t = 0, i = 1, s = 0, o = 0) {
    this.a = e;
    this.b = r;
    this.c = t;
    this.d = i;
    this.tx = s;
    this.ty = o;
  }
  static {
    n(this, "Matrix");
  }
  static _rec748f32584318 = 1638.4;
  identity() {
    ((this.a = 1), (this.b = 0), (this.c = 0), (this.d = 1), (this.tx = 0), (this.ty = 0));
  }
  _rda5c32980edbf3(e, r, t = 0, i = 0, s = 0) {
    let o = e / a._rec748f32584318,
      d = r / a._rec748f32584318,
      c = Math.cos(t),
      f = Math.sin(t);
    ((this.a = c * o),
      (this.b = t === 0 ? 0 : f * d),
      (this.c = t === 0 ? 0 : -f * o),
      (this.d = c * d),
      (this.tx = i + e / 2),
      (this.ty = s + r / 2));
  }
  scale(e, r) {
    ((this.a *= e), (this.d *= r));
  }
  rotate(e) {
    let r = Math.cos(e),
      t = Math.sin(e),
      { a: i, b: s, c: o, d, tx: c, ty: f } = this;
    ((this.a = i * r - s * t),
      (this.b = i * t + s * r),
      (this.c = o * r - d * t),
      (this.d = o * t + d * r),
      (this.tx = c * r - f * t),
      (this.ty = c * t + f * r));
  }
  translate(e, r) {
    ((this.tx += e), (this.ty += r));
  }
}

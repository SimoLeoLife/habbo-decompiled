// Extracted from HabboAirLauncher.deobf.js, line 33076.

class a {
  constructor(e = 0, r = 0) {
    this.x = e;
    this.y = r;
  }
  static {
    n(this, "Point");
  }
  static distance(e, r) {
    let t = e.x - r.x,
      i = e.y - r.y;
    return Math.sqrt(t * t + i * i);
  }
  static interpolate(e, r, t) {
    return new a(r.x + (e.x - r.x) * t, r.y + (e.y - r.y) * t);
  }
  clone() {
    return new a(this.x, this.y);
  }
  add(e) {
    return new a(this.x + e.x, this.y + e.y);
  }
  subtract(e) {
    return new a(this.x - e.x, this.y - e.y);
  }
  offset(e, r) {
    ((this.x += e), (this.y += r));
  }
}

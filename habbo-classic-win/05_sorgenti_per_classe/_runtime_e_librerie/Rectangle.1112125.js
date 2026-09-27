// Estratto da HabboAirLauncher.deobf.js, riga 33721.

class a {
  constructor(e = 0, r = 0, t = 0, i = 0) {
    this.x = e;
    this.y = r;
    this.width = t;
    this.height = i;
  }
  static {
    n(this, "Rectangle");
  }
  get left() {
    return this.x;
  }
  set left(e) {
    ((this.width += this.x - e), (this.x = e));
  }
  get top() {
    return this.y;
  }
  set top(e) {
    ((this.height += this.y - e), (this.y = e));
  }
  get right() {
    return this.x + this.width;
  }
  set right(e) {
    this.width = e - this.x;
  }
  get bottom() {
    return this.y + this.height;
  }
  set bottom(e) {
    this.height = e - this.y;
  }
  get topLeft() {
    return new E(this.left, this.top);
  }
  set topLeft(e) {
    ((this.x = e.x), (this.y = e.y));
  }
  clone() {
    return new a(this.x, this.y, this.width, this.height);
  }
  contains(e, r) {
    return e >= this.left && e < this.right && r >= this.top && r < this.bottom;
  }
  containsPoint(e) {
    return this.contains(e.x, e.y);
  }
  offset(e, r) {
    ((this.x += e), (this.y += r));
  }
  intersection(e) {
    let r = Math.max(this.left, e.left),
      t = Math.max(this.top, e.top),
      i = Math.min(this.right, e.right),
      s = Math.min(this.bottom, e.bottom);
    return i <= r || s <= t ? new a() : new a(r, t, i - r, s - t);
  }
  union(e) {
    if (this.isEmpty()) return e.clone();
    if (e.isEmpty()) return this.clone();
    let r = Math.min(this.left, e.left),
      t = Math.min(this.top, e.top),
      i = Math.max(this.right, e.right),
      s = Math.max(this.bottom, e.bottom);
    return new a(r, t, i - r, s - t);
  }
  intersects(e) {
    return !(this.right <= e.left || this.left >= e.right || this.bottom <= e.top || this.top >= e.bottom);
  }
  isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
}

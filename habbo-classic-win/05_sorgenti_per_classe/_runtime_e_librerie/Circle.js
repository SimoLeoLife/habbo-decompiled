// Estratto da HabboAirLauncher.deobf.js, riga 9124.

class a {
      static {
        n(this, "Circle");
      }
      constructor(e = 0, r = 0, t = 0) {
        ((this.type = "circle"), (this.x = e), (this.y = r), (this.radius = t));
      }
      clone() {
        return new a(this.x, this.y, this.radius);
      }
      contains(e, r) {
        if (this.radius <= 0) return !1;
        let t = this.radius * this.radius,
          i = this.x - e,
          s = this.y - r;
        return ((i *= i), (s *= s), i + s <= t);
      }
      strokeContains(e, r, t, i = 0.5) {
        if (this.radius === 0) return !1;
        let s = this.x - e,
          o = this.y - r,
          d = this.radius,
          c = (1 - i) * t,
          f = Math.sqrt(s * s + o * o);
        return f <= d + c && f > d - (t - c);
      }
      getBounds(e) {
        return (
          e || (e = new xa()),
          (e.x = this.x - this.radius),
          (e.y = this.y - this.radius),
          (e.width = this.radius * 2),
          (e.height = this.radius * 2),
          e
        );
      }
      copyFrom(e) {
        return ((this.x = e.x), (this.y = e.y), (this.radius = e.radius), this);
      }
      copyTo(e) {
        return (e.copyFrom(this), e);
      }
      toString() {
        return `[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
      }
    }

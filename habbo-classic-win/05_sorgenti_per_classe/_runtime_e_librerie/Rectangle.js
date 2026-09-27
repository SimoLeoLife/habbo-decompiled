// Estratto da HabboAirLauncher.deobf.js, riga 1950.

class a {
        static {
          n(this, "Rectangle");
        }
        constructor(e = 0, r = 0, t = 0, i = 0) {
          ((this.type = "rectangle"),
            (this.x = Number(e)),
            (this.y = Number(r)),
            (this.width = Number(t)),
            (this.height = Number(i)));
        }
        get left() {
          return this.x;
        }
        get right() {
          return this.x + this.width;
        }
        get top() {
          return this.y;
        }
        get bottom() {
          return this.y + this.height;
        }
        isEmpty() {
          return this.left === this.right || this.top === this.bottom;
        }
        static get EMPTY() {
          return new a(0, 0, 0, 0);
        }
        clone() {
          return new a(this.x, this.y, this.width, this.height);
        }
        copyFromBounds(e) {
          return (
            (this.x = e.minX),
            (this.y = e.minY),
            (this.width = e.maxX - e.minX),
            (this.height = e.maxY - e.minY),
            this
          );
        }
        copyFrom(e) {
          return ((this.x = e.x), (this.y = e.y), (this.width = e.width), (this.height = e.height), this);
        }
        copyTo(e) {
          return (e.copyFrom(this), e);
        }
        contains(e, r) {
          return this.width <= 0 || this.height <= 0
            ? !1
            : e >= this.x && e < this.x + this.width && r >= this.y && r < this.y + this.height;
        }
        strokeContains(e, r, t, i = 0.5) {
          let { width: s, height: o } = this;
          if (s <= 0 || o <= 0) return !1;
          let d = this.x,
            c = this.y,
            f = t * (1 - i),
            l = t - f,
            b = d - f,
            _ = d + s + f,
            h = c - f,
            p = c + o + f,
            m = d + l,
            v = d + s - l,
            w = c + l,
            I = c + o - l;
          return e >= b && e <= _ && r >= h && r <= p && !(e > m && e < v && r > w && r < I);
        }
        intersects(e, r) {
          if (!r) {
            let z = this.x < e.x ? e.x : this.x;
            if ((this.right > e.right ? e.right : this.right) <= z) return !1;
            let $ = this.y < e.y ? e.y : this.y;
            return (this.bottom > e.bottom ? e.bottom : this.bottom) > $;
          }
          let t = this.left,
            i = this.right,
            s = this.top,
            o = this.bottom;
          if (i <= t || o <= s) return !1;
          let d = sre[0].set(e.left, e.top),
            c = sre[1].set(e.left, e.bottom),
            f = sre[2].set(e.right, e.top),
            l = sre[3].set(e.right, e.bottom);
          if (f.x <= d.x || c.y <= d.y) return !1;
          let b = Math.sign(r.a * r.d - r.b * r.c);
          if (
            b === 0 ||
            (r.apply(d, d),
            r.apply(c, c),
            r.apply(f, f),
            r.apply(l, l),
            Math.max(d.x, c.x, f.x, l.x) <= t ||
              Math.min(d.x, c.x, f.x, l.x) >= i ||
              Math.max(d.y, c.y, f.y, l.y) <= s ||
              Math.min(d.y, c.y, f.y, l.y) >= o)
          )
            return !1;
          let _ = b * (c.y - d.y),
            h = b * (d.x - c.x),
            p = _ * t + h * s,
            m = _ * i + h * s,
            v = _ * t + h * o,
            w = _ * i + h * o;
          if (Math.max(p, m, v, w) <= _ * d.x + h * d.y || Math.min(p, m, v, w) >= _ * l.x + h * l.y)
            return !1;
          let I = b * (d.y - f.y),
            C = b * (f.x - d.x),
            W = I * t + C * s,
            R = I * i + C * s,
            T = I * t + C * o,
            S = I * i + C * o;
          return !(Math.max(W, R, T, S) <= I * d.x + C * d.y || Math.min(W, R, T, S) >= I * l.x + C * l.y);
        }
        pad(e = 0, r = e) {
          return ((this.x -= e), (this.y -= r), (this.width += e * 2), (this.height += r * 2), this);
        }
        fit(e) {
          let r = Math.max(this.x, e.x),
            t = Math.min(this.x + this.width, e.x + e.width),
            i = Math.max(this.y, e.y),
            s = Math.min(this.y + this.height, e.y + e.height);
          return (
            (this.x = r),
            (this.width = Math.max(t - r, 0)),
            (this.y = i),
            (this.height = Math.max(s - i, 0)),
            this
          );
        }
        ceil(e = 1, r = 0.001) {
          let t = Math.ceil((this.x + this.width - r) * e) / e,
            i = Math.ceil((this.y + this.height - r) * e) / e;
          return (
            (this.x = Math.floor((this.x + r) * e) / e),
            (this.y = Math.floor((this.y + r) * e) / e),
            (this.width = t - this.x),
            (this.height = i - this.y),
            this
          );
        }
        scale(e, r = e) {
          return ((this.x *= e), (this.y *= r), (this.width *= e), (this.height *= r), this);
        }
        enlarge(e) {
          let r = Math.min(this.x, e.x),
            t = Math.max(this.x + this.width, e.x + e.width),
            i = Math.min(this.y, e.y),
            s = Math.max(this.y + this.height, e.y + e.height);
          return ((this.x = r), (this.width = t - r), (this.y = i), (this.height = s - i), this);
        }
        getBounds(e) {
          return (e || (e = new a()), e.copyFrom(this), e);
        }
        containsRect(e) {
          if (this.width <= 0 || this.height <= 0) return !1;
          let r = e.x,
            t = e.y,
            i = e.x + e.width,
            s = e.y + e.height;
          return (
            r >= this.x &&
            r < this.x + this.width &&
            t >= this.y &&
            t < this.y + this.height &&
            i >= this.x &&
            i < this.x + this.width &&
            s >= this.y &&
            s < this.y + this.height
          );
        }
        set(e, r, t, i) {
          return ((this.x = e), (this.y = r), (this.width = t), (this.height = i), this);
        }
        toString() {
          return `[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
        }
      }

// Estratto da HabboAirLauncher.deobf.js, riga 9241.

class a {
      static {
        n(this, "Polygon");
      }
      constructor(...e) {
        this.type = "polygon";
        let r = Array.isArray(e[0]) ? e[0] : e;
        if (typeof r[0] != "number") {
          let t = [];
          for (let i = 0, s = r.length; i < s; i++) t.push(r[i].x, r[i].y);
          r = t;
        }
        ((this.points = r), (this.closePath = !0));
      }
      isClockwise() {
        let e = 0,
          r = this.points,
          t = r.length;
        for (let i = 0; i < t; i += 2) {
          let s = r[i],
            o = r[i + 1],
            d = r[(i + 2) % t],
            c = r[(i + 3) % t];
          e += (d - s) * (c + o);
        }
        return e < 0;
      }
      containsPolygon(e) {
        let r = this.getBounds(hsr),
          t = e.getBounds(psr);
        if (!r.containsRect(t)) return !1;
        let i = e.points;
        for (let s = 0; s < i.length; s += 2) {
          let o = i[s],
            d = i[s + 1];
          if (!this.contains(o, d)) return !1;
        }
        return !0;
      }
      clone() {
        let e = this.points.slice(),
          r = new a(e);
        return ((r.closePath = this.closePath), r);
      }
      contains(e, r) {
        let t = !1,
          i = this.points.length / 2;
        for (let s = 0, o = i - 1; s < i; o = s++) {
          let d = this.points[s * 2],
            c = this.points[s * 2 + 1],
            f = this.points[o * 2],
            l = this.points[o * 2 + 1];
          c > r != l > r && e < (f - d) * ((r - c) / (l - c)) + d && (t = !t);
        }
        return t;
      }
      strokeContains(e, r, t, i = 0.5) {
        let s = t * t,
          o = s * (1 - i),
          d = s - o,
          { points: c } = this,
          f = c.length - (this.closePath ? 0 : 2);
        for (let l = 0; l < f; l += 2) {
          let b = c[l],
            _ = c[l + 1],
            h = c[(l + 2) % c.length],
            p = c[(l + 3) % c.length],
            m = squaredDistanceToLineSegment(e, r, b, _, h, p),
            v = Math.sign((h - b) * (r - _) - (p - _) * (e - b));
          if (m <= (v < 0 ? d : o)) return !0;
        }
        return !1;
      }
      getBounds(e) {
        e || (e = new xa());
        let r = this.points,
          t = 1 / 0,
          i = -1 / 0,
          s = 1 / 0,
          o = -1 / 0;
        for (let d = 0, c = r.length; d < c; d += 2) {
          let f = r[d],
            l = r[d + 1];
          ((t = f < t ? f : t), (i = f > i ? f : i), (s = l < s ? l : s), (o = l > o ? l : o));
        }
        return ((e.x = t), (e.width = i - t), (e.y = s), (e.height = o - s), e);
      }
      copyFrom(e) {
        return ((this.points = e.points.slice()), (this.closePath = e.closePath), this);
      }
      copyTo(e) {
        return (e.copyFrom(this), e);
      }
      toString() {
        return `[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e, r) => `${e}, ${r}`, "")}]`;
      }
      get lastX() {
        return this.points[this.points.length - 2];
      }
      get lastY() {
        return this.points[this.points.length - 1];
      }
      get x() {
        return (
          Zr("8.11.0", "Polygon.lastX is deprecated, please use Polygon.lastX instead."),
          this.points[this.points.length - 2]
        );
      }
      get y() {
        return (
          Zr("8.11.0", "Polygon.y is deprecated, please use Polygon.lastY instead."),
          this.points[this.points.length - 1]
        );
      }
      get startX() {
        return this.points[0];
      }
      get startY() {
        return this.points[1];
      }
    }

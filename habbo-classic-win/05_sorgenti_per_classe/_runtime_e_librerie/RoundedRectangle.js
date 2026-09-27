// Estratto da HabboAirLauncher.deobf.js, riga 9374.

class a {
        static {
          n(this, "RoundedRectangle");
        }
        constructor(e = 0, r = 0, t = 0, i = 0, s = 20) {
          ((this.type = "roundedRectangle"),
            (this.x = e),
            (this.y = r),
            (this.width = t),
            (this.height = i),
            (this.radius = s));
        }
        getBounds(e) {
          return (
            e || (e = new xa()),
            (e.x = this.x),
            (e.y = this.y),
            (e.width = this.width),
            (e.height = this.height),
            e
          );
        }
        clone() {
          return new a(this.x, this.y, this.width, this.height, this.radius);
        }
        copyFrom(e) {
          return ((this.x = e.x), (this.y = e.y), (this.width = e.width), (this.height = e.height), this);
        }
        copyTo(e) {
          return (e.copyFrom(this), e);
        }
        contains(e, r) {
          if (this.width <= 0 || this.height <= 0) return !1;
          if (e >= this.x && e <= this.x + this.width && r >= this.y && r <= this.y + this.height) {
            let t = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
            if (
              (r >= this.y + t && r <= this.y + this.height - t) ||
              (e >= this.x + t && e <= this.x + this.width - t)
            )
              return !0;
            let i = e - (this.x + t),
              s = r - (this.y + t),
              o = t * t;
            if (
              i * i + s * s <= o ||
              ((i = e - (this.x + this.width - t)), i * i + s * s <= o) ||
              ((s = r - (this.y + this.height - t)), i * i + s * s <= o) ||
              ((i = e - (this.x + t)), i * i + s * s <= o)
            )
              return !0;
          }
          return !1;
        }
        strokeContains(e, r, t, i = 0.5) {
          let { x: s, y: o, width: d, height: c, radius: f } = this,
            l = t * (1 - i),
            b = t - l,
            _ = s + f,
            h = o + f,
            p = d - f * 2,
            m = c - f * 2,
            v = s + d,
            w = o + c;
          return (((e >= s - l && e <= s + b) || (e >= v - b && e <= v + l)) && r >= h && r <= h + m) ||
            (((r >= o - l && r <= o + b) || (r >= w - b && r <= w + l)) && e >= _ && e <= _ + p)
            ? !0
            : (e < _ && r < h && Dre(e, r, _, h, f, b, l)) ||
                (e > v - f && r < h && Dre(e, r, v - f, h, f, b, l)) ||
                (e > v - f && r > w - f && Dre(e, r, v - f, w - f, f, b, l)) ||
                (e < _ && r > w - f && Dre(e, r, _, w - f, f, b, l));
        }
        toString() {
          return `[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
        }
      }

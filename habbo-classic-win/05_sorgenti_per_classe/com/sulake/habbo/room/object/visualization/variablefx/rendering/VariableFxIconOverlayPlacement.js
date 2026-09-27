// Extracted from HabboAirLauncher.deobf.js, line 9175.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/rendering/VariableFxIconOverlayPlacement.as

class a {
      static {
        n(this, "Ellipse");
      }
      constructor(e = 0, r = 0, t = 0, i = 0) {
        ((this.type = "ellipse"), (this.x = e), (this.y = r), (this.halfWidth = t), (this.halfHeight = i));
      }
      clone() {
        return new a(this.x, this.y, this.halfWidth, this.halfHeight);
      }
      contains(e, r) {
        if (this.halfWidth <= 0 || this.halfHeight <= 0) return !1;
        let t = (e - this.x) / this.halfWidth,
          i = (r - this.y) / this.halfHeight;
        return ((t *= t), (i *= i), t + i <= 1);
      }
      strokeContains(e, r, t, i = 0.5) {
        let { halfWidth: s, halfHeight: o } = this;
        if (s <= 0 || o <= 0) return !1;
        let d = t * (1 - i),
          c = t - d,
          f = s - c,
          l = o - c,
          b = s + d,
          _ = o + d,
          h = e - this.x,
          p = r - this.y,
          m = (h * h) / (f * f) + (p * p) / (l * l),
          v = (h * h) / (b * b) + (p * p) / (_ * _);
        return m > 1 && v <= 1;
      }
      getBounds(e) {
        return (
          e || (e = new xa()),
          (e.x = this.x - this.halfWidth),
          (e.y = this.y - this.halfHeight),
          (e.width = this.halfWidth * 2),
          (e.height = this.halfHeight * 2),
          e
        );
      }
      copyFrom(e) {
        return (
          (this.x = e.x),
          (this.y = e.y),
          (this.halfWidth = e.halfWidth),
          (this.halfHeight = e.halfHeight),
          this
        );
      }
      copyTo(e) {
        return (e.copyFrom(this), e);
      }
      toString() {
        return `[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`;
      }
    }

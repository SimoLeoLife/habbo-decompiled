// Extracted from HabboAirLauncher.deobf.js, line 143206.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/ShapeSkinRenderer.as
// Obfuscated name: _ice64ff55039033

class a extends SkinRenderer {
  static {
    n(this, "ShapeSkinRenderer");
  }
  static SHAPE = new UnkClass_c6b6cd();
  static alphaFromColor(e) {
    let r = (e >>> 24) & 255;
    return r === 0 ? 1 : r / 255;
  }
  static cornerRadius(e, r, t) {
    return Number.isNaN(e) || Number.isNaN(r) || Number.isNaN(t) || e <= 0 || r <= 0 || t <= 0
      ? 0
      : Math.trunc(Math.min(Math.round(e), Math.floor(r / 2), Math.floor(t / 2)));
  }
  static snap(e) {
    return Number.isNaN(e) ? 0 : Math.trunc(Math.round(e));
  }
  static snappedThickness(e) {
    return Number.isNaN(e) || e <= 0 ? 0 : Math.trunc(Math.max(1, Math.round(e)));
  }
  static _r1f4f81ca8030df(e, r, t, i, s, o, d) {
    let c = e + 0.5,
      f = r + 0.5;
    if (c < t || f < i || c >= s || f >= o) return !1;
    if (d <= 0) return !0;
    let l = c < t + d ? t + d : c >= s - d ? s - d : c,
      b = f < i + d ? i + d : f >= o - d ? o - d : f,
      _ = c - l,
      h = f - b;
    return _ * _ + h * h <= d * d;
  }
  static _rcec5ef5feb8732(e) {
    let r = (e >>> 24) & 255;
    return (((r === 0 ? 255 : r) << 24) | (e & 16777215)) >>> 0;
  }
  static blendPixel(e, r, t, i, s) {
    if (s <= 0) return;
    s = Math.min(1, s);
    let o = (i >>> 24) & 255,
      d = ((o === 0 ? 255 : o) / 255) * s;
    if (d >= 1) {
      e.setPixel32(r, t, (4278190080 | (i & 16777215)) >>> 0);
      return;
    }
    let c = e.getPixel32(r, t) >>> 0,
      f = ((c >>> 24) & 255) / 255,
      l = d + f * (1 - d);
    if (l <= 0) {
      e.setPixel32(r, t, 0);
      return;
    }
    let b = Math.min(255, Math.round((((i >>> 16) & 255) * d + ((c >>> 16) & 255) * f * (1 - d)) / l)),
      _ = Math.min(255, Math.round((((i >>> 8) & 255) * d + ((c >>> 8) & 255) * f * (1 - d)) / l)),
      h = Math.min(255, Math.round(((i & 255) * d + (c & 255) * f * (1 - d)) / l)),
      p = Math.min(255, Math.round(l * 255));
    e.setPixel32(r, t, ((p << 24) | (b << 16) | (_ << 8) | h) >>> 0);
  }
  static fillPixelRect(e, r, t, i, s, o) {
    ((r = Math.trunc(Math.max(0, r))),
      (t = Math.trunc(Math.max(0, t))),
      (i = Math.trunc(Math.min(e.width, i))),
      (s = Math.trunc(Math.min(e.height, s))),
      i > r && s > t && e.fillRect(new D(r, t, i - r, s - t), this._rcec5ef5feb8732(o)));
  }
  static drawRectFill(e, r, t, i, s, o) {
    this.fillPixelRect(
      e,
      this.snap(r),
      this.snap(t),
      this.snap(r + i),
      this.snap(t + s),
      o,
    );
  }
  static drawRectStroke(e, r, t, i, s, o, d) {
    let c = this.snap(r),
      f = this.snap(t),
      l = this.snap(r + i),
      b = this.snap(t + s),
      _ = this.snappedThickness(o);
    if (!(_ <= 0 || l <= c || b <= f))
      for (let h = Math.max(0, f); h < Math.min(e.height, b); h++)
        for (let p = Math.max(0, c); p < Math.min(e.width, l); p++)
          (p < c + _ || p >= l - _ || h < f + _ || h >= b - _) && this.blendPixel(e, p, h, d, 1);
  }
  static drawRectStrokeSides(e, r, t, i, s, o, d, c, f, l, b) {
    let _ = this.snap(r),
      h = this.snap(t),
      p = this.snap(r + i),
      m = this.snap(t + s),
      v = this.snappedThickness(o);
    v <= 0 ||
      p <= _ ||
      m <= h ||
      (c && this.fillPixelRect(e, _, h, p, h + v, d),
      f && this.fillPixelRect(e, p - v, h, p, m, d),
      l && this.fillPixelRect(e, _, m - v, p, m, d),
      b && this.fillPixelRect(e, _, h, _ + v, m, d));
  }
  static _rb7c2f3754684c7(e, r, t, i, s, o, d) {
    let c = this.snap(r),
      f = this.snap(t),
      l = this.snap(r + i),
      b = this.snap(t + s),
      _ = this.cornerRadius(o, l - c, b - f);
    for (let h = Math.max(0, f); h < Math.min(e.height, b); h++)
      for (let p = Math.max(0, c); p < Math.min(e.width, l); p++)
        this._r1f4f81ca8030df(p, h, c, f, l, b, _) && this.blendPixel(e, p, h, d, 1);
  }
  static drawRoundRectStroke(e, r, t, i, s, o, d, c) {
    let f = this.snap(r),
      l = this.snap(t),
      b = this.snap(r + i),
      _ = this.snap(t + s),
      h = this.snappedThickness(d);
    if (h <= 0 || b <= f || _ <= l) return;
    let p = this.cornerRadius(o, b - f, _ - l),
      m = f + h,
      v = l + h,
      w = b - h,
      I = _ - h,
      C = this.cornerRadius(Math.max(0, o - h), w - m, I - v);
    for (let W = Math.max(0, l); W < Math.min(e.height, _); W++)
      for (let R = Math.max(0, f); R < Math.min(e.width, b); R++)
        this._r1f4f81ca8030df(R, W, f, l, b, _, p) &&
          !this._r1f4f81ca8030df(R, W, m, v, w, I, C) &&
          this.blendPixel(e, R, W, c, 1);
  }
  static _rd6dff1f098a19b(e, r, t, i, s, o) {
    let d = s - t,
      c = o - i;
    return e < t || r < i || e >= s || r >= o || d <= 0 || c <= 0
      ? !1
      : Math.abs(e - t + 0.5 - d / 2) / (d / 2) + Math.abs(r - i + 0.5 - c / 2) / (c / 2) <= 1;
  }
  static _r1c269c69cd55fb(e, r, t, i, s, o, d) {
    let c = this.snap(r),
      f = this.snap(t),
      l = this.snap(r + i),
      b = this.snap(t + s),
      _ = this.snappedThickness(o);
    for (let h = Math.max(0, f); h < Math.min(e.height, b); h++)
      for (let p = Math.max(0, c); p < Math.min(e.width, l); p++) {
        let m = this._rd6dff1f098a19b(p, h, c, f, l, b),
          v = _ > 0 && this._rd6dff1f098a19b(p, h, c + _, f + _, l - _, b - _);
        m && (_ === 0 || !v) && this.blendPixel(e, p, h, d, 1);
      }
  }
  draw(e, r, t, i, s) {
    if (!(e instanceof n1) || t.width <= 0 || t.height <= 0) return;
    let o = a.snappedThickness(e.strokeThickness),
      d = e.strokeHsvShade !== 0 ? HsvLayerColor.deriveColor(e.color, e.strokeHsvShade) : e._defaultNotSelectedBorderColor,
      c = a.SHAPE.graphics;
    switch ((r.fillRect(t, 0), e.shape)) {
      case n1.SHAPE_ROUND_RECTANGLE:
        (a._rb7c2f3754684c7(r, t.x, t.y, t.width, t.height, e.radius, e.color),
          o > 0 && a.drawRoundRectStroke(r, t.x, t.y, t.width, t.height, e.radius, o, d));
        return;
      case n1._r1aa4cb04ca833b:
        (a.drawRectFill(r, t.x, t.y, t.width, t.height, e.color),
          o > 0 && a.drawRectStroke(r, t.x, t.y, t.width, t.height, o, d));
        return;
      case n1.SHAPE_RHOMBUS:
        (a._r1c269c69cd55fb(r, t.x, t.y, t.width, t.height, 0, e.color),
          o > 0 && a._r1c269c69cd55fb(r, t.x, t.y, t.width, t.height, o, d));
        return;
    }
    (c.clear(),
      c.beginFill(e.color & 16777215, a.alphaFromColor(e.color)),
      o > 0 && c.lineStyle(o, d & 16777215, a.alphaFromColor(d)),
      e.shape === n1.SHAPE_ELLIPSE
        ? c.drawEllipse(t.x + o / 2, t.y + o / 2, Math.max(0, t.width - o), Math.max(0, t.height - o))
        : c.drawRect(t.x, t.y, t.width, t.height),
      c.endFill(),
      r.draw(a.SHAPE, void 0, null, null, t),
      c.clear());
  }
  isStateDrawable(e) {
    return !0;
  }
}

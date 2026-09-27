// Estratto da HabboAirLauncher.deobf.js, riga 285462.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/rendering/VariableFxBitmapComposer.as
// Nome offuscato: _if9c565e581aaf2

class a {
  constructor(e) {
    this._bitmapData = e;
  }
  static {
    n(this, "VariableFxBitmapComposer");
  }
  get bitmapData() {
    return this._bitmapData;
  }
  clear(e) {
    this.fillRect(0, 0, this._bitmapData.width, this._bitmapData.height, e);
  }
  fillRect(e, r, t, i, s) {
    let o = this.getTargetBounds(e, r, t, i);
    o.left >= o.right ||
      o.top >= o.bottom ||
      this._bitmapData.fillRect(new D(o.left, o.top, o.right - o.left, o.bottom - o.top), s);
  }
  drawLayer(e, r, t, i = ie.NORMAL, s = 255, o = null) {
    this._r2a09bceb038470(e, r, t, i, s, o);
  }
  drawTintedLayer(e, r, t, i, s = ie.NORMAL, o = 255, d = null) {
    this._bitmapData.draw(
      e,
      new Pe(1, 0, 0, 1, r | 0, t | 0),
      this._r38263994490627(i, o),
      s,
      this._rebdb798747c79d(d),
      !1,
    );
  }
  _radd7e99a481d87(e, r, t, i, s, o, d, c, f = null) {
    let l = this.getTargetBounds(t, i, e.width, e.height, f),
      b = t | 0,
      _ = i | 0,
      h = s | 0,
      p = o | 0,
      m = {
        left: Math.max(l.left, h),
        top: Math.max(l.top, p),
        right: Math.min(l.right, h + r.width),
        bottom: Math.min(l.bottom, p + r.height),
      },
      v = m.right - m.left,
      w = m.bottom - m.top;
    if (v <= 0 || w <= 0) return;
    let I = new A(v, w, !0, 0),
      C = new A(v, w, !0, 0),
      W = new A(v, w, !0, 0),
      R = new D(0, 0, v, w),
      T = new E(0, 0);
    try {
      (I.draw(e, new Pe(1, 0, 0, 1, b - m.left, _ - m.top), null, ie.NORMAL, R, !1),
        C.copyChannel(r, new D(m.left - h, m.top - p, v, w), T, On.RED, On.ALPHA),
        W.copyPixels(I, R, T, C, T),
        this._r2a09bceb038470(W, m.left, m.top, d, c));
    } finally {
      (I.dispose(), C.dispose(), W.dispose());
    }
  }
  drawThreeSlice(e, r, t, i, s, o, d, c, f = null, l = null) {
    let b = Math.max(0, r | 0),
      _ = Math.max(0, t | 0),
      h = Math.max(0, i | 0),
      p = Math.max(0, e.width - b - _),
      m = Math.max(0, h - b - _),
      v = l == null ? this._rbd941b8c3bc263(c) : this._r38263994490627(l >>> 0, c);
    (this._r6e69fc7e583d37(e, 0, 0, Math.min(b, h), e.height, s, o, d, f, v),
      p > 0 && m > 0 && this._rbf163adcc5c1a1(e, b, p, e.height, s + b, o, m, d, c, f, v));
    let w = Math.min(_, Math.max(0, h - b - m));
    w > 0 && this._r6e69fc7e583d37(e, e.width - w, 0, w, e.height, s + h - w, o, d, f, v);
  }
  drawRepeatedThreeSlice(e, r, t, i, s, o, d, c, f = null) {
    let l = Math.max(0, r | 0),
      b = Math.max(0, t | 0),
      _ = Math.max(0, i | 0),
      h = Math.max(0, e.width - l - b),
      p = Math.max(0, _ - l - b);
    (this._re07cb7ce4d72ad(e, 0, 0, Math.min(l, _), e.height, s, o, d, c, f),
      h > 0 && p > 0 && this.drawTiledChunk(e, new VariableFxClipRect(l, 0, h, e.height), s + l, o, p, e.height, d, c, f));
    let m = Math.min(b, Math.max(0, _ - l - p));
    m > 0 && this._re07cb7ce4d72ad(e, e.width - m, 0, m, e.height, s + _ - m, o, d, c, f);
  }
  drawTiledChunk(e, r, t, i, s, o, d, c, f = null) {
    let l = r.x | 0,
      b = r.y | 0,
      _ = Math.max(0, r.width | 0),
      h = Math.max(0, r.height | 0),
      p = t | 0,
      m = i | 0,
      v = this.getTargetBounds(p, m, Math.max(0, s | 0), Math.max(0, o | 0), f);
    if (_ <= 0 || h <= 0 || v.left >= v.right || v.top >= v.bottom) return;
    let w = p + Math.floor((v.left - p) / _) * _,
      I = m + Math.floor((v.top - m) / h) * h,
      C = this._r108e390155cb0f(v);
    for (let W = I; W < v.bottom; W += h)
      for (let R = w; R < v.right; R += _) this._re07cb7ce4d72ad(e, l, b, _, h, R, W, d, c, C);
  }
  _re07cb7ce4d72ad(e, r, t, i, s, o, d, c, f, l = null, b = null) {
    this._r6e69fc7e583d37(e, r, t, i, s, o, d, c, l, this._r19be948caf51fb(b, f));
  }
  _r2a09bceb038470(e, r, t, i, s, o = null) {
    let d = a.clampOpacity(s),
      c = this._rebdb798747c79d(o);
    d <= 0 ||
      (c != null && (c.width <= 0 || c.height <= 0)) ||
      this._bitmapData.draw(
        e,
        new Pe(1, 0, 0, 1, r | 0, t | 0),
        d >= 255 ? null : new _i4210dc3239901d(1, 1, 1, d / 255),
        i,
        c,
        !1,
      );
  }
  _r6e69fc7e583d37(e, r, t, i, s, o, d, c, f, l) {
    let b = r | 0,
      _ = t | 0,
      h = o | 0,
      p = d | 0,
      m = this.getTargetBounds(h, p, i, s, f),
      v = this._rebdb798747c79d(this._r108e390155cb0f(m));
    v == null ||
      v.width <= 0 ||
      v.height <= 0 ||
      i <= 0 ||
      s <= 0 ||
      this._bitmapData.draw(e, new Pe(1, 0, 0, 1, h - b, p - _), l, c, v, !1);
  }
  _rbf163adcc5c1a1(e, r, t, i, s, o, d, c, f, l, b) {
    let _ = r | 0,
      h = t | 0,
      p = i | 0,
      m = d | 0,
      v = s | 0,
      w = o | 0,
      I = h <= 0 ? 1 : m / h,
      C = this.getTargetBounds(v, w, m, p, l),
      W = this._rebdb798747c79d(this._r108e390155cb0f(C));
    W == null ||
      W.width <= 0 ||
      W.height <= 0 ||
      h <= 0 ||
      p <= 0 ||
      m <= 0 ||
      this._bitmapData.draw(e, new Pe(I, 0, 0, 1, v - _ * I, w), b, c, W, !1);
  }
  _rbd941b8c3bc263(e) {
    let r = a.clampOpacity(e);
    return r >= 255 ? null : new _i4210dc3239901d(1, 1, 1, r / 255);
  }
  _r19be948caf51fb(e, r) {
    let t = a.clampOpacity(r);
    if (e == null) return this._rbd941b8c3bc263(t);
    let i = t / 255;
    return new _i4210dc3239901d(
      e.redMultiplier,
      e.greenMultiplier,
      e.blueMultiplier,
      e.alphaMultiplier * i,
      e.redOffset,
      e.greenOffset,
      e.blueOffset,
      e.alphaOffset * i,
    );
  }
  _rebdb798747c79d(e) {
    return e == null ? null : new D(e.x | 0, e.y | 0, Math.max(0, e.width | 0), Math.max(0, e.height | 0));
  }
  _r38263994490627(e, r) {
    let t = a.clampOpacity(r),
      i = (e >>> 24) & 255,
      s = (e >>> 16) & 255,
      o = (e >>> 8) & 255,
      d = e & 255;
    return new _i4210dc3239901d(s / 255, o / 255, d / 255, (i * t) / 65025);
  }
  _r108e390155cb0f(e) {
    return new VariableFxClipRect(e.left, e.top, e.right - e.left, e.bottom - e.top);
  }
  getTargetBounds(e, r, t, i, s = null) {
    let o = e | 0,
      d = r | 0,
      c = Math.max(0, o),
      f = Math.max(0, d),
      l = Math.min(this._bitmapData.width, o + Math.max(0, t | 0)),
      b = Math.min(this._bitmapData.height, d + Math.max(0, i | 0));
    if (s != null) {
      let _ = s.x | 0,
        h = s.y | 0;
      ((c = Math.max(c, _)),
        (f = Math.max(f, h)),
        (l = Math.min(l, _ + Math.max(0, s.width | 0))),
        (b = Math.min(b, h + Math.max(0, s.height | 0))));
    }
    return { left: c, top: f, right: Math.max(c, l), bottom: Math.max(f, b) };
  }
  static clampOpacity(e) {
    return e <= 0 ? 0 : e >= 255 ? 255 : e;
  }
}

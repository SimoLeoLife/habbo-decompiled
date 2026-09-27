// Extracted from HabboAirLauncher.deobf.js, line 142633.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i215e3608c5ac8e

class a extends SkinRenderer {
  static {
    n(this, "UnkSkinRendererSubclass_215e36");
  }
  static MATRIX = new Pe();
  static COLOR_TRANSFORM = new UnkClass_4210dc();
  static _re661c4fcf04351 = new UnkClass_4210dc(0, 0, 0, 1, 1, 1, 1, 0);
  static GREYSCALE_FILTER = new ColorMatrixFilter_();
  static ZERO_POINT = new E();
  static R = 0.212671;
  static G = 0.71516;
  static B = 0.072169;
  constructor(e) {
    super(e);
  }
  draw(e, r, t, i, s) {
    let o = e,
      d = o.bitmapData,
      c = d,
      f = null,
      l = null;
    if (c == null) return;
    let b = ((e.color & 16711680) >> 16) / 255,
      _ = ((e.color & 65280) >> 8) / 255,
      h = (e.color & 255) / 255;
    if (
      ((a._re661c4fcf04351.alphaMultiplier = ((o.etchingColor >> 24) & 255) / 255),
      (a._re661c4fcf04351.redOffset = (o.etchingColor >> 16) & 255),
      (a._re661c4fcf04351.greenOffset = (o.etchingColor >> 8) & 255),
      (a._re661c4fcf04351.blueOffset = o.etchingColor & 255),
      o.greyscale
        ? ((a.GREYSCALE_FILTER.matrix = [
            b * a.R,
            b * a.G,
            b * a.B,
            0,
            0,
            _ * a.R,
            _ * a.G,
            _ * a.B,
            0,
            0,
            h * a.R,
            h * a.G,
            h * a.B,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ]),
          (l = c.clone()),
          l.applyFilter(l, l.rect, a.ZERO_POINT, a.GREYSCALE_FILTER),
          (c = l))
        : ((a.COLOR_TRANSFORM.redMultiplier = b),
          (a.COLOR_TRANSFORM.greenMultiplier = _),
          (a.COLOR_TRANSFORM.blueMultiplier = h),
          (a.COLOR_TRANSFORM.alphaMultiplier = 1),
          (a.COLOR_TRANSFORM.redOffset = 0),
          (a.COLOR_TRANSFORM.greenOffset = 0),
          (a.COLOR_TRANSFORM.blueOffset = 0),
          (a.COLOR_TRANSFORM.alphaOffset = 0),
          e.dynamicStyleColor != null && a.COLOR_TRANSFORM.concat(e.dynamicStyleColor),
          (a.COLOR_TRANSFORM.redMultiplier !== 1 ||
            a.COLOR_TRANSFORM.greenMultiplier !== 1 ||
            a.COLOR_TRANSFORM.blueMultiplier !== 1 ||
            a.COLOR_TRANSFORM.alphaMultiplier !== 1 ||
            a.COLOR_TRANSFORM.redOffset !== 0 ||
            a.COLOR_TRANSFORM.greenOffset !== 0 ||
            a.COLOR_TRANSFORM.blueOffset !== 0 ||
            a.COLOR_TRANSFORM.alphaOffset !== 0) &&
            ((l = c.clone()), l.colorTransform(l.rect, a.COLOR_TRANSFORM), (c = l))),
      o.rotation !== 0)
    ) {
      let z = c.width / 2,
        K = c.height / 2;
      f = new A(c.width, c.height, !0, 0);
      let $ = new Pe();
      ($.translate(-z, -K), $.rotate((o.rotation / 180) * Math.PI), $.translate(z, K), f.draw(c, $), (c = f));
    }
    let p = o.zoomX < 0 !== o.flipX,
      m = o.zoomY < 0 !== o.flipY,
      v = (o._r9d5f7918ae45e9 ? e.width : c.width) * o.zoomX,
      w = (o._r1b6896589e83da ? e.height : c.height) * o.zoomY,
      I = Math.abs(v),
      C = Math.abs(w),
      W = o._r2eecf82f5b04f2 ? Math.floor(e.width / I) + 2 : 1,
      R = o._r738070fc30728d ? Math.floor(e.height / C) + 2 : 1;
    switch (
      ((a.MATRIX.a = (I / c.width) * (p ? -1 : 1)),
      (a.MATRIX.d = (C / c.height) * (m ? -1 : 1)),
      o._rc42ef752c39ce9)
    ) {
      case Vt.TOP_LEFT:
      case Vt.const_1058:
      case Vt.BOTTOM_LEFT:
        a.MATRIX.tx = p ? I : 0;
        break;
      case Vt.TOP_CENTER:
      case Vt.CENTER:
      case Vt.BOTTOM_CENTER:
        a.MATRIX.tx = Math.trunc((e.width - I) / 2) + (p ? I : 0);
        break;
      case Vt.TOP_RIGHT:
      case Vt.CENTER_RIGHT:
      case Vt.BOTTOM_RIGHT:
        a.MATRIX.tx = p ? e.width : e.width - I;
        break;
    }
    let T = a.MATRIX.tx;
    for (; o._r2eecf82f5b04f2 && T > 0;) T -= I;
    switch (o._rc42ef752c39ce9) {
      case Vt.TOP_LEFT:
      case Vt.TOP_CENTER:
      case Vt.TOP_RIGHT:
        a.MATRIX.ty = m ? C : 0;
        break;
      case Vt.const_1058:
      case Vt.CENTER:
      case Vt.CENTER_RIGHT:
        a.MATRIX.ty = Math.trunc((e.height - C) / 2) + (m ? C : 0);
        break;
      case Vt.BOTTOM_LEFT:
      case Vt.BOTTOM_CENTER:
      case Vt.BOTTOM_RIGHT:
        a.MATRIX.ty = m ? e.height : e.height - C;
        break;
    }
    let S = a.MATRIX.ty;
    for (; o._r738070fc30728d && S > 0;) S -= C;
    (r.lock(), (a.MATRIX.ty = S));
    for (let z = 0; z < R; z++) {
      a.MATRIX.tx = T;
      for (let K = 0; K < W; K++)
        (a._re661c4fcf04351.alphaMultiplier >= 0.001 &&
          ((a.MATRIX.tx += o.etchingPoint.x),
          (a.MATRIX.ty += o.etchingPoint.y),
          r.draw(c, a.MATRIX, a._re661c4fcf04351, null, null, !1),
          (a.MATRIX.tx -= o.etchingPoint.x),
          (a.MATRIX.ty -= o.etchingPoint.y)),
          r.draw(c, a.MATRIX, null, null, null, !1),
          (a.MATRIX.tx += I));
      a.MATRIX.ty += C;
    }
    (r.unlock(), l != null && l !== d && l !== f && l.dispose(), f?.dispose());
  }
  isStateDrawable(e) {
    return e === 0;
  }
}

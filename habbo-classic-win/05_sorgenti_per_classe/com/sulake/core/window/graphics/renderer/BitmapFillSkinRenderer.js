// Extracted from HabboAirLauncher.deobf.js, line 142785.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/BitmapFillSkinRenderer.as
// Obfuscated name: _i6998bccc1c94e5

class a extends SkinRenderer {
  static {
    n(this, "BitmapFillSkinRenderer");
  }
  static R = 0.212671;
  static G = 0.71516;
  static B = 0.072169;
  static SHAPE = new UnkClass_c6b6cd();
  static MATRIX = new Pe();
  static COLOR_TRANSFORM = new UnkClass_4210dc();
  static GREYSCALE_FILTER = new ColorMatrixFilter_();
  static ZERO_POINT = new E();
  var_164 = null;
  var_2449 = null;
  var_5598 = !1;
  _preparedTint = !1;
  _preparedColor = 0;
  _r401ece2a50fbe6 = null;
  var_2217 = null;
  _r12729ed73d4bb4 = 0;
  _r294d0d00e22f87 = 0;
  _radd8808b6cb911 = 0;
  static _r34d3fc9a636a5d(e, r, t, i, s) {
    if (r <= 0 || t <= 0 || i <= 0 || s <= 0) return 1;
    let o = i / r,
      d = s / t;
    return sf._rbe0b38525e8bcd(e) === sf.FILL_MODE_CONTAIN ? Math.min(o, d) : Math.max(o, d);
  }
  static _r9252fd0d984ec1(e, r, t) {
    return (
      (Number.isNaN(e) || e <= 0) && (e = 1),
      (Number.isNaN(r) || r === 0) && (r = 1),
      Math.max(1, e * Math.abs(r) + sf._ra8710b8ae80da0(t))
    );
  }
  dispose() {
    (this.var_164?.dispose(),
      (this.var_164 = null),
      this.disposeTileBitmap(),
      (this.var_2449 = null),
      (this.var_2217 = null),
      super.dispose());
  }
  draw(e, r, t, i, s) {
    if (!(e instanceof sf) || t.width <= 0 || t.height <= 0) return;
    r.fillRect(t, 0);
    let o = e.bitmapData;
    if (!(o == null || o.width <= 0 || o.height <= 0))
      switch (((o = this.prepareBitmapData(o, e)), e.fillMode)) {
        case sf.FILL_MODE_TILE:
          this._rb9be3c15e4655a(e, r, t, o);
          break;
        case sf.FILL_MODE_CENTER:
          this.drawScaled(e, r, t, o, this._r25b9ed8ac265b6(e), this._r1d49dcb52e6f0e(e));
          break;
        case sf.FILL_MODE_COVER:
          this._r4fed65eda6aa33(e, r, t, o, sf.FILL_MODE_COVER);
          break;
        case sf.FILL_MODE_CONTAIN:
          this._r4fed65eda6aa33(e, r, t, o, sf.FILL_MODE_CONTAIN);
          break;
        default:
          a.drawStretch(e, r, t, o);
          break;
      }
  }
  prepareBitmapData(e, r) {
    if (!r.greyscale && !r.tint)
      return (
        this.var_164?.dispose(),
        (this.var_164 = null),
        (this.var_2449 = null),
        this.disposeTileBitmap(),
        e
      );
    let t = r.tint ? r.color : 0;
    return this.var_164 != null &&
      this.var_2449 === e &&
      this.var_5598 === r.greyscale &&
      this._preparedTint === r.tint &&
      this._preparedColor === t
      ? this.var_164
      : (this.var_164 == null ||
        this.var_164.width !== e.width ||
        this.var_164.height !== e.height
          ? (this.var_164?.dispose(), (this.var_164 = new A(e.width, e.height, !0, 0)))
          : this.var_164.fillRect(this.var_164.rect, 0),
        this.var_164.copyPixels(e, e.rect, a.ZERO_POINT, null, null, !0),
        r.greyscale &&
          ((a.GREYSCALE_FILTER.matrix = [
            a.R,
            a.G,
            a.B,
            0,
            0,
            a.R,
            a.G,
            a.B,
            0,
            0,
            a.R,
            a.G,
            a.B,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ]),
          this.var_164.applyFilter(
            this.var_164,
            this.var_164.rect,
            a.ZERO_POINT,
            a.GREYSCALE_FILTER,
          )),
        r.tint && this.var_164.colorTransform(this.var_164.rect, a._r45be03f0069352(r)),
        this.disposeTileBitmap(),
        (this.var_2449 = e),
        (this.var_5598 = r.greyscale),
        (this._preparedTint = r.tint),
        (this._preparedColor = t),
        this.var_164);
  }
  disposeTileBitmap() {
    (this._r401ece2a50fbe6?.dispose(), (this._r401ece2a50fbe6 = null), (this.var_2217 = null));
  }
  static drawStretch(e, r, t, i) {
    let s = this._r023943f0206598(e),
      o = this._ra2f14227cfde70(e);
    (this.MATRIX.identity(),
      (this.MATRIX.a = (t.width / i.width) * (s ? -1 : 1)),
      (this.MATRIX.d = (t.height / i.height) * (o ? -1 : 1)),
      (this.MATRIX.tx = s ? t.right : t.x),
      (this.MATRIX.ty = o ? t.bottom : t.y),
      r.draw(i, this.MATRIX, null, null, t, !1));
  }
  _rb9be3c15e4655a(e, r, t, i) {
    let s = this._r25b9ed8ac265b6(e),
      o = this._r1d49dcb52e6f0e(e),
      d = sf._ra8710b8ae80da0(e.spacing),
      c = a._r9252fd0d984ec1(i.width, s, d),
      f = a._r9252fd0d984ec1(i.height, o, d),
      l = a._r83ccd13c2b4ecf(t, c, e._rc42ef752c39ce9),
      b = a._re2f1db092244e7(t, f, e._rc42ef752c39ce9),
      _ = i;
    (a.MATRIX.identity(),
      d > 0
        ? ((_ = this._rfb47c14847aab6(i, s, o, d)),
          a.MATRIX.identity(),
          (a.MATRIX.tx = l),
          (a.MATRIX.ty = b))
        : ((a.MATRIX.a = s),
          (a.MATRIX.d = o),
          (a.MATRIX.tx = s < 0 ? l + c : l),
          (a.MATRIX.ty = o < 0 ? b + f : b)));
    let h = a.SHAPE.graphics;
    (h.clear(),
      h._rf55942823293cc(_, a.MATRIX, !0, !1),
      h.drawRect(t.x, t.y, t.width, t.height),
      h.endFill(),
      r.draw(a.SHAPE, void 0, null, null, t, !1),
      h.clear());
  }
  _rfb47c14847aab6(e, r, t, i) {
    let s = Math.ceil(a._r9252fd0d984ec1(e.width, r, i)),
      o = Math.ceil(a._r9252fd0d984ec1(e.height, t, i));
    return this._r401ece2a50fbe6 != null &&
      this.var_2217 === e &&
      this._r12729ed73d4bb4 === r &&
      this._r294d0d00e22f87 === t &&
      this._radd8808b6cb911 === i &&
      this._r401ece2a50fbe6.width === s &&
      this._r401ece2a50fbe6.height === o
      ? this._r401ece2a50fbe6
      : (this._r401ece2a50fbe6?.dispose(),
        (this._r401ece2a50fbe6 = new A(s, o, !0, 0)),
        (this.var_2217 = e),
        (this._r12729ed73d4bb4 = r),
        (this._r294d0d00e22f87 = t),
        (this._radd8808b6cb911 = i),
        a.MATRIX.identity(),
        (a.MATRIX.a = r),
        (a.MATRIX.d = t),
        (a.MATRIX.tx = r < 0 ? e.width * Math.abs(r) : 0),
        (a.MATRIX.ty = t < 0 ? e.height * Math.abs(t) : 0),
        this._r401ece2a50fbe6.draw(e, a.MATRIX, null, null, null, !1),
        this._r401ece2a50fbe6);
  }
  _r4fed65eda6aa33(e, r, t, i, s) {
    let o = a._r25ec6cd15e98ae(e.zoomX),
      d = a._r25ec6cd15e98ae(e.zoomY),
      c = a._r34d3fc9a636a5d(s, i.width * o, i.height * d, t.width, t.height);
    this.drawScaled(e, r, t, i, this._r25b9ed8ac265b6(e) * c, this._r1d49dcb52e6f0e(e) * c);
  }
  drawScaled(e, r, t, i, s, o) {
    let d = i.width * Math.abs(s),
      c = i.height * Math.abs(o),
      f = a._r83ccd13c2b4ecf(t, d, e._rc42ef752c39ce9),
      l = a._re2f1db092244e7(t, c, e._rc42ef752c39ce9);
    (a.MATRIX.identity(),
      (a.MATRIX.a = s),
      (a.MATRIX.d = o),
      (a.MATRIX.tx = s < 0 ? f + d : f),
      (a.MATRIX.ty = o < 0 ? l + c : l),
      r.draw(i, a.MATRIX, null, null, t, !1));
  }
  _r25b9ed8ac265b6(e) {
    return a._r25ec6cd15e98ae(e.zoomX) * (a._r023943f0206598(e) ? -1 : 1);
  }
  _r1d49dcb52e6f0e(e) {
    return a._r25ec6cd15e98ae(e.zoomY) * (a._ra2f14227cfde70(e) ? -1 : 1);
  }
  static _r25ec6cd15e98ae(e) {
    return Number.isNaN(e) || e === 0 ? 1 : Math.abs(e);
  }
  static _r023943f0206598(e) {
    return e.zoomX < 0 !== e.flipX;
  }
  static _ra2f14227cfde70(e) {
    return e.zoomY < 0 !== e.flipY;
  }
  static _r83ccd13c2b4ecf(e, r, t) {
    switch (t) {
      case Vt.TOP_CENTER:
      case Vt.CENTER:
      case Vt.BOTTOM_CENTER:
        return e.x + (e.width - r) / 2;
      case Vt.TOP_RIGHT:
      case Vt.CENTER_RIGHT:
      case Vt.BOTTOM_RIGHT:
        return e.right - r;
      default:
        return e.x;
    }
  }
  static _re2f1db092244e7(e, r, t) {
    switch (t) {
      case Vt.const_1058:
      case Vt.CENTER:
      case Vt.CENTER_RIGHT:
        return e.y + (e.height - r) / 2;
      case Vt.BOTTOM_LEFT:
      case Vt.BOTTOM_CENTER:
      case Vt.BOTTOM_RIGHT:
        return e.bottom - r;
      default:
        return e.y;
    }
  }
  static _r45be03f0069352(e) {
    let r = this.COLOR_TRANSFORM;
    return (
      (r.redMultiplier = e.tint ? ((e.color & 16711680) >> 16) / 255 : 1),
      (r.greenMultiplier = e.tint ? ((e.color & 65280) >> 8) / 255 : 1),
      (r.blueMultiplier = e.tint ? (e.color & 255) / 255 : 1),
      (r.alphaMultiplier = 1),
      (r.redOffset = 0),
      (r.greenOffset = 0),
      (r.blueOffset = 0),
      (r.alphaOffset = 0),
      r
    );
  }
  isStateDrawable(e) {
    return !0;
  }
}

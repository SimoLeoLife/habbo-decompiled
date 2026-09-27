// Estratto da HabboAirLauncher.deobf.js, riga 202880.

class a extends Sprite {
  static {
    n(this, "_i6f8720ecb419d2");
  }
  static ZERO_POINT = new E();
  _bitmap;
  _r273800735a6ab4;
  _leftWidth;
  _r46b69942f8271b;
  _rightWidth;
  _topHeight;
  _rb9ade197dec828;
  _bottomHeight;
  _rd24dc2ee6f6c1e;
  _r4007f9b1e28e5b;
  constructor(e, r) {
    (super(),
      (this.mouseEnabled = !1),
      (this._r44f27084cc753d = !1),
      (this._leftWidth = Math.trunc(e.x)),
      (this._r46b69942f8271b = Math.trunc(e.width)),
      (this._rightWidth = r.width - Math.trunc(e.right)),
      (this._topHeight = Math.trunc(e.y)),
      (this._rb9ade197dec828 = Math.trunc(e.height)),
      (this._bottomHeight = r.height - Math.trunc(e.bottom)),
      (this._rd24dc2ee6f6c1e = r.width),
      (this._r4007f9b1e28e5b = r.height),
      (this._r273800735a6ab4 = this._r972a17a5efca92(r)),
      (this._bitmap = new _i3a5c6f457acdad(null)),
      (this._bitmap.smoothing = !1),
      this.addChild(this._bitmap),
      this.redraw());
  }
  get width() {
    return this._rd24dc2ee6f6c1e;
  }
  set width(e) {
    let r = Math.max(this._leftWidth + this._rightWidth, Math.round(e));
    this._rd24dc2ee6f6c1e !== r && ((this._rd24dc2ee6f6c1e = r), this.redraw());
  }
  get height() {
    return this._r4007f9b1e28e5b;
  }
  set height(e) {
    let r = Math.max(this._topHeight + this._bottomHeight, Math.round(e));
    this._r4007f9b1e28e5b !== r && ((this._r4007f9b1e28e5b = r), this.redraw());
  }
  _r972a17a5efca92(e) {
    let r = new Array(9);
    return (
      (r[0] = this._r3bb4c0556c0213(e, 0, 0, this._leftWidth, this._topHeight)),
      (r[1] = this._r3bb4c0556c0213(e, this._leftWidth, 0, this._r46b69942f8271b, this._topHeight)),
      (r[2] = this._r3bb4c0556c0213(
        e,
        this._leftWidth + this._r46b69942f8271b,
        0,
        this._rightWidth,
        this._topHeight,
      )),
      (r[3] = this._r3bb4c0556c0213(e, 0, this._topHeight, this._leftWidth, this._rb9ade197dec828)),
      (r[4] = this._r3bb4c0556c0213(
        e,
        this._leftWidth,
        this._topHeight,
        this._r46b69942f8271b,
        this._rb9ade197dec828,
      )),
      (r[5] = this._r3bb4c0556c0213(
        e,
        this._leftWidth + this._r46b69942f8271b,
        this._topHeight,
        this._rightWidth,
        this._rb9ade197dec828,
      )),
      (r[6] = this._r3bb4c0556c0213(
        e,
        0,
        this._topHeight + this._rb9ade197dec828,
        this._leftWidth,
        this._bottomHeight,
      )),
      (r[7] = this._r3bb4c0556c0213(
        e,
        this._leftWidth,
        this._topHeight + this._rb9ade197dec828,
        this._r46b69942f8271b,
        this._bottomHeight,
      )),
      (r[8] = this._r3bb4c0556c0213(
        e,
        this._leftWidth + this._r46b69942f8271b,
        this._topHeight + this._rb9ade197dec828,
        this._rightWidth,
        this._bottomHeight,
      )),
      r
    );
  }
  _r3bb4c0556c0213(e, r, t, i, s) {
    if (i <= 0 || s <= 0) return null;
    let o = new A(i, s, !0, 0);
    return (o.copyPixels(e, new D(r, t, i, s), a.ZERO_POINT), o);
  }
  redraw() {
    let e = Math.max(this._leftWidth + this._rightWidth, this._rd24dc2ee6f6c1e),
      r = Math.max(this._topHeight + this._bottomHeight, this._r4007f9b1e28e5b),
      t = e - this._leftWidth - this._rightWidth,
      i = r - this._topHeight - this._bottomHeight,
      s = new A(e, r, !0, 0);
    (this._r7b9fe7e7c2cf2c(s, this._r273800735a6ab4[0], 0, 0, this._leftWidth, this._topHeight),
      this._r7b9fe7e7c2cf2c(s, this._r273800735a6ab4[1], this._leftWidth, 0, t, this._topHeight),
      this._r7b9fe7e7c2cf2c(
        s,
        this._r273800735a6ab4[2],
        this._leftWidth + t,
        0,
        this._rightWidth,
        this._topHeight,
      ),
      this._r7b9fe7e7c2cf2c(s, this._r273800735a6ab4[3], 0, this._topHeight, this._leftWidth, i),
      this._r7b9fe7e7c2cf2c(s, this._r273800735a6ab4[4], this._leftWidth, this._topHeight, t, i),
      this._r7b9fe7e7c2cf2c(
        s,
        this._r273800735a6ab4[5],
        this._leftWidth + t,
        this._topHeight,
        this._rightWidth,
        i,
      ),
      this._r7b9fe7e7c2cf2c(
        s,
        this._r273800735a6ab4[6],
        0,
        this._topHeight + i,
        this._leftWidth,
        this._bottomHeight,
      ),
      this._r7b9fe7e7c2cf2c(
        s,
        this._r273800735a6ab4[7],
        this._leftWidth,
        this._topHeight + i,
        t,
        this._bottomHeight,
      ),
      this._r7b9fe7e7c2cf2c(
        s,
        this._r273800735a6ab4[8],
        this._leftWidth + t,
        this._topHeight + i,
        this._rightWidth,
        this._bottomHeight,
      ),
      this._bitmap.bitmapData?.dispose(),
      (this._bitmap.bitmapData = s));
  }
  _r7b9fe7e7c2cf2c(e, r, t, i, s, o) {
    if (r == null || s <= 0 || o <= 0) return;
    if (r.width === s && r.height === o) {
      e.copyPixels(r, r.rect, new E(t, i));
      return;
    }
    let d = new Pe();
    (d.scale(s / r.width, o / r.height), d.translate(t, i), e.draw(r, d, null, null, new D(t, i, s, o), !1));
  }
}

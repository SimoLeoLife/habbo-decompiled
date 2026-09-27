// Extracted from HabboAirLauncher.deobf.js, line 277396.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurniturePlane.as
// Obfuscated name: _i3624ef38ef7f9b

class {
  static {
    n(this, "FurniturePlane");
  }
  var_3208 = -1;
  var_2722 = 0;
  var_4626 = 0;
  var_5016 = 0;
  var_3797 = 0;
  _origin = new k();
  var_190 = new k();
  _rightSide = new k();
  _rc4f1e6d6578243 = new k();
  _rd0bf1615ba791e = new k();
  _r0b0ad67ff05d6d = new k();
  _normal = new k();
  var_1380 = !0;
  _bitmapData = null;
  _textures = new B();
  _offset = new E();
  _r53843a629b8651 = 0;
  _color = 0;
  _r1042fec44c6450 = !1;
  var_252 = new k();
  _r7ceddd300e8348 = new k();
  _r233cf200e19be7 = new k();
  _r52ce4e40b10b8d = new k();
  _rd24dc2ee6f6c1e = 0;
  _r4007f9b1e28e5b = 0;
  constructor(e, r, t) {
    (this.var_190.assign(e),
      this._rightSide.assign(r),
      this._rc4f1e6d6578243.assign(t),
      this._rd0bf1615ba791e.assign(r),
      this._r0b0ad67ff05d6d.assign(t));
    let i = k._rb3671a9c70d70f(this._rightSide, this._rc4f1e6d6578243);
    i != null &&
      (this._normal.assign(i), this._normal.length > 0 && this._normal.mul(1 / this._normal.length));
  }
  get bitmapData() {
    return this.var_1380 && this._bitmapData != null ? this._bitmapData.clone() : null;
  }
  get visible() {
    return this.var_1380;
  }
  get offset() {
    return this._offset;
  }
  get _relativeDepth() {
    return this._r53843a629b8651;
  }
  get color() {
    return this._color;
  }
  set color(e) {
    this._color = e >>> 0;
  }
  get rightSide() {
    return this._rightSide;
  }
  get getScreenPoint() {
    return this._rc4f1e6d6578243;
  }
  get location() {
    return this.var_190;
  }
  get normal() {
    return this._normal;
  }
  dispose() {
    (this._bitmapData?.dispose(), (this._bitmapData = null));
    for (let e of this._textures.getValues()) e.dispose();
    this._textures.dispose();
  }
  setRotation(e) {
    e !== this._r1042fec44c6450 &&
      (e
        ? (this._rightSide.assign(this._rd0bf1615ba791e),
          this._rightSide.mul(this._r0b0ad67ff05d6d.length / this._rd0bf1615ba791e.length),
          this._rc4f1e6d6578243.assign(this._r0b0ad67ff05d6d),
          this._rc4f1e6d6578243.mul(this._rd0bf1615ba791e.length / this._r0b0ad67ff05d6d.length))
        : (this._rightSide.assign(this._rd0bf1615ba791e),
          this._rc4f1e6d6578243.assign(this._r0b0ad67ff05d6d)),
      (this.var_3208 = -1),
      (this.var_2722 -= 1),
      (this._r1042fec44c6450 = e),
      this.resetTextureCache());
  }
  update(e, r) {
    if (e == null) return !1;
    let t = !1;
    if (e.updateId !== this.var_3208) {
      this.var_3208 = e.updateId;
      let i = e.direction;
      if (
        i != null &&
        (i.x !== this.var_2722 ||
          i.y !== this.var_4626 ||
          i.z !== this.var_5016 ||
          e.scale !== this.var_3797)
      ) {
        if (
          ((this.var_2722 = i.x),
          (this.var_4626 = i.y),
          (this.var_5016 = i.z),
          (this.var_3797 = e.scale),
          (t = !0),
          k.cosAngle(e.directionAxis, this._normal) > -0.001)
        )
          return this.var_1380 ? ((this.var_1380 = !1), !0) : !1;
        this._r10e8a2d31b4061(e);
        let d = e._rd0d22ff45cecac(this._origin)?.z ?? 0;
        ((this._r53843a629b8651 = Math.max(
          this.var_252.z - d,
          this._r7ceddd300e8348.z - d,
          this._r233cf200e19be7.z - d,
          this._r52ce4e40b10b8d.z - d,
        )),
          (this.var_1380 = !0));
      }
    }
    if (this.needsNewTexture(e) || t) {
      if (
        this._bitmapData == null ||
        this._rd24dc2ee6f6c1e !== this._bitmapData.width ||
        this._r4007f9b1e28e5b !== this._bitmapData.height
      ) {
        if (
          (this._bitmapData?.dispose(),
          (this._bitmapData = null),
          this._rd24dc2ee6f6c1e < 1 || this._r4007f9b1e28e5b < 1)
        )
          return !0;
        ((this._bitmapData = new A(this._rd24dc2ee6f6c1e, this._r4007f9b1e28e5b, !0, 16777215)),
          this._bitmapData.lock());
      } else {
        if (this._rd24dc2ee6f6c1e < 1 || this._r4007f9b1e28e5b < 1) return !1;
        (this._bitmapData.lock(), this._bitmapData.fillRect(this._bitmapData.rect, 16777215));
      }
      let i = this.getTexture(e, r);
      return (i != null && this.renderTexture(e, i), this._bitmapData.unlock(), !0);
    }
    return !1;
  }
  cacheTexture(e, r) {
    let t = this._textures.remove(e);
    return (t != null && t !== r && t.dispose(), this._textures.add(e, r), !0);
  }
  resetTextureCache() {
    for (let e of this._textures.getValues()) e.dispose();
    this._textures.reset();
  }
  _rb67ca682c77f71(e) {
    return e != null ? String(e.scale) : null;
  }
  needsNewTexture(e) {
    let r = this._rb67ca682c77f71(e);
    if (r == null) return !1;
    let t = this._textures.getValue(r) ?? null;
    return this._rd24dc2ee6f6c1e > 0 && this._r4007f9b1e28e5b > 0 && t == null;
  }
  getTexture(e, r) {
    let t = this._rb67ca682c77f71(e);
    if (t == null) return null;
    let i = this._textures.getValue(t) ?? null;
    if (this.needsNewTexture(e)) {
      let s = this._rightSide.length * e.scale,
        o = this._rc4f1e6d6578243.length * e.scale;
      (s < 1 && (s = 1),
        o < 1 && (o = 1),
        i == null && ((i = new A(s, o, !0, 4278190080 | this._color)), this.cacheTexture(t, i)));
    }
    return i;
  }
  _r10e8a2d31b4061(e) {
    let r = k.sum(this.var_190, this._rc4f1e6d6578243),
      t = k.sum(this.var_190, this._rightSide),
      i = t != null ? k.sum(t, this._rc4f1e6d6578243) : null,
      s = k.sum(this.var_190, this._rightSide);
    (this.var_252.assign(e._rd0d22ff45cecac(this.var_190)),
      r != null && this._r7ceddd300e8348.assign(e._rd0d22ff45cecac(r)),
      i != null && this._r233cf200e19be7.assign(e._rd0d22ff45cecac(i)),
      s != null && this._r52ce4e40b10b8d.assign(e._rd0d22ff45cecac(s)));
    let o = e._r2c974b4bf77b84(this._origin);
    (o != null && ((this._offset.x = Math.round(o.x)), (this._offset.y = Math.round(o.y))),
      (this.var_252.x = Math.round(this.var_252.x)),
      (this.var_252.y = Math.round(this.var_252.y)),
      (this._r7ceddd300e8348.x = Math.round(this._r7ceddd300e8348.x)),
      (this._r7ceddd300e8348.y = Math.round(this._r7ceddd300e8348.y)),
      (this._r233cf200e19be7.x = Math.round(this._r233cf200e19be7.x)),
      (this._r233cf200e19be7.y = Math.round(this._r233cf200e19be7.y)),
      (this._r52ce4e40b10b8d.x = Math.round(this._r52ce4e40b10b8d.x)),
      (this._r52ce4e40b10b8d.y = Math.round(this._r52ce4e40b10b8d.y)));
    let d = Math.min(
        this.var_252.x,
        this._r7ceddd300e8348.x,
        this._r233cf200e19be7.x,
        this._r52ce4e40b10b8d.x,
      ),
      c = Math.max(
        this.var_252.x,
        this._r7ceddd300e8348.x,
        this._r233cf200e19be7.x,
        this._r52ce4e40b10b8d.x,
      ),
      f = Math.min(
        this.var_252.y,
        this._r7ceddd300e8348.y,
        this._r233cf200e19be7.y,
        this._r52ce4e40b10b8d.y,
      ),
      l = Math.max(
        this.var_252.y,
        this._r7ceddd300e8348.y,
        this._r233cf200e19be7.y,
        this._r52ce4e40b10b8d.y,
      );
    ((this._offset.x -= d),
      (this._offset.y -= f),
      (this.var_252.x -= d),
      (this._r7ceddd300e8348.x -= d),
      (this._r233cf200e19be7.x -= d),
      (this._r52ce4e40b10b8d.x -= d),
      (this.var_252.y -= f),
      (this._r7ceddd300e8348.y -= f),
      (this._r233cf200e19be7.y -= f),
      (this._r52ce4e40b10b8d.y -= f),
      (this._rd24dc2ee6f6c1e = c - d),
      (this._r4007f9b1e28e5b = l - f));
  }
  renderTexture(e, r) {
    if (this._bitmapData == null) return;
    let t = this._r52ce4e40b10b8d.x - this._r233cf200e19be7.x,
      i = this._r52ce4e40b10b8d.y - this._r233cf200e19be7.y,
      s = this._r7ceddd300e8348.x - this._r233cf200e19be7.x,
      o = this._r7ceddd300e8348.y - this._r233cf200e19be7.y;
    (Math.abs(s - r.width) <= 1 && (s = r.width),
      Math.abs(o - r.width) <= 1 && (o = r.width),
      Math.abs(t - r.height) <= 1 && (t = r.height),
      Math.abs(i - r.height) <= 1 && (i = r.height));
    let d = new Pe();
    ((d.a = s / r.width),
      (d.b = o / r.width),
      (d.c = t / r.height),
      (d.d = i / r.height),
      d.translate(this._r233cf200e19be7.x, this._r233cf200e19be7.y),
      this.draw(r, d));
  }
  draw(e, r) {
    if (this._bitmapData != null) {
      if (r.a === 1 && r.d === 1 && r.c === 0 && r.b !== 0 && Math.abs(r.b) <= 1) {
        let t = 0,
          i = 0,
          s = 0,
          o = 0;
        for (r.b > 0 && r.ty++; t < e.width;)
          (t++,
            (s += Math.abs(r.b)),
            s >= 1 &&
              (this._bitmapData.copyPixels(
                e,
                new D(i, 0, t - i, e.height),
                new E(r.tx + i, r.ty + o),
                null,
                null,
                !0,
              ),
              (i = t),
              r.b > 0 ? o++ : o--,
              (s = 0)));
        s > 0 &&
          this._bitmapData.copyPixels(
            e,
            new D(i, 0, t - i, e.height),
            new E(r.tx + i, r.ty + o),
            null,
            null,
            !0,
          );
        return;
      }
      this._bitmapData.draw(e, r, null, null, null, !1);
    }
  }
}

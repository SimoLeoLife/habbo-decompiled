// Extracted from HabboAirLauncher.deobf.js, line 281844.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/RoomPlane.as
// Obfuscated name: _i5976696720af79

class a {
  constructor(e, r, t, i, s, o, d, c, f = 0, l = 0, b = 0, _ = 0) {
    this._type = s;
    this._r43a18454ab1e0d = o;
    this.var_4076 = c;
    this._r553593205aad0e = f;
    this._r866e769b7d9cf7 = l;
    this._r99dba14f2c2afc = b;
    this._rfe6f4e6b2811b8 = _;
    (this._r199ea53326d28f.assign(e),
      this._r52d70adc72f536.assign(r),
      this._rightSide.assign(t),
      this._rc4f1e6d6578243.assign(i));
    let h = k._rb3671a9c70d70f(this._rightSide, this._rc4f1e6d6578243);
    if (
      (h != null &&
        (this._normal.assign(h), this._normal.length > 0 && this._normal.mul(1 / this._normal.length)),
      d != null)
    )
      for (let p of d) {
        if (p == null) continue;
        let m = new k();
        (m.assign(p), this._r7c5471baa446ba.push(m));
      }
  }
  static {
    n(this, "RoomPlane");
  }
  static ZERO_POINT = new E();
  static RoomPlaneParser = 0;
  static const_103 = 1;
  static const_86 = 2;
  static TYPE_LANDSCAPE = 3;
  static _rdfe6d1a74bb53b = 1;
  _r117eeea1d6cf8d = !1;
  _r199ea53326d28f = new k();
  _r52d70adc72f536 = new k();
  _rightSide = new k();
  _rc4f1e6d6578243 = new k();
  _normal = new k();
  _r7c5471baa446ba = [];
  var_3208 = -1;
  var_1380 = !1;
  _r164cdf850e0605 = null;
  _rf72579575718db = null;
  _r97f6b03b515d60 = null;
  _ra1b8600b9a594b = null;
  _r192ea7fe7a638c = [];
  var_3344 = !0;
  _offset = new E();
  _r53843a629b8651 = 0;
  _color = 0;
  var_1568 = null;
  _rf1bec2a91c53aa = null;
  _id = null;
  var_5012 = a._rdfe6d1a74bb53b++;
  _textures = new B();
  var_517 = null;
  var_621 = [];
  _r24ec5ba93207a1 = [];
  _r4699da6f902ca7 = !1;
  _rf2267697963b42 = [];
  _rcefdcbda6fd31a = [];
  var_252 = new k();
  _r7ceddd300e8348 = new k();
  _r233cf200e19be7 = new k();
  _r52ce4e40b10b8d = new k();
  _rd24dc2ee6f6c1e = 0;
  _r4007f9b1e28e5b = 0;
  var_1702 = !0;
  _r3ed6d2614e2449 = 0;
  _r3f4d5816d1f6f4 = !1;
  _red7f497c20e158 = -1;
  get uniqueId() {
    return this.var_5012;
  }
  get visible() {
    return this.var_1380 && this.var_1702;
  }
  get offset() {
    return this._offset;
  }
  get _relativeDepth() {
    return this._r53843a629b8651 + this._r3ed6d2614e2449;
  }
  set extraDepth(e) {
    this._r3ed6d2614e2449 = e;
  }
  get color() {
    return this._color;
  }
  set color(e) {
    this._color = e >>> 0;
  }
  get type() {
    return this._type;
  }
  get rightSide() {
    return this._rightSide;
  }
  get getScreenPoint() {
    return this._rc4f1e6d6578243;
  }
  get location() {
    return this._r52d70adc72f536;
  }
  get normal() {
    return this._normal;
  }
  get hasTexture() {
    return this.var_3344;
  }
  set hasTexture(e) {
    this.var_3344 = e;
  }
  set rasterizer(e) {
    this.var_1568 = e;
  }
  set _r64001652b65938(e) {
    this._rf1bec2a91c53aa = e;
  }
  set id(e) {
    e !== this._id && (this.resetTextureCache(), (this._id = e));
  }
  get _r30b9521379034f() {
    return this.var_1702;
  }
  set _r30b9521379034f(e) {
    e !== this.var_1702 &&
      (this.var_1702 || this.resetTextureCache(), (this.var_1702 = e));
  }
  get isHighlighter() {
    return this._r3f4d5816d1f6f4;
  }
  set isHighlighter(e) {
    this._r3f4d5816d1f6f4 = e;
  }
  get bitmapData() {
    return !this.visible || this._rf72579575718db == null
      ? null
      : (this._r164cdf850e0605 != null &&
          (this._r164cdf850e0605.width !== this._rf72579575718db.width ||
            this._r164cdf850e0605.height !== this._rf72579575718db.height) &&
          (this._r164cdf850e0605.dispose(), (this._r164cdf850e0605 = null)),
        this._r164cdf850e0605 == null && (this._r164cdf850e0605 = _ia21d7b3ee293df(this._rf72579575718db)),
        this._r164cdf850e0605);
  }
  get nativeTexture() {
    return this.visible ? (this._r43e4dbbd72526c(), this._rf72579575718db) : null;
  }
  _r93989e2f7e1471() {
    let e = this.bitmapData;
    if (!this.visible || e == null) return null;
    try {
      return e.clone();
    } catch {
      return null;
    }
  }
  dispose() {
    for (
      this._r164cdf850e0605?.dispose(),
        this._r164cdf850e0605 = null,
        this._rf72579575718db?.destroy(!0),
        this._rf72579575718db = null,
        this._r9683bb3aa83b1a();
      this._r192ea7fe7a638c.length > 0;
    )
      this._r192ea7fe7a638c.shift()?.destroy(!0);
    for (let e = 0; e < this._textures.length; e++) {
      let r = this._textures.getWithIndex(e);
      (r?.texture instanceof sn && r.texture.destroy(!0), r?.dispose());
    }
    (this._textures.dispose(),
      (this.var_517 = null),
      (this.var_1568 = null),
      (this._rf2267697963b42 = []),
      (this._rcefdcbda6fd31a = []),
      (this._r117eeea1d6cf8d = !0));
  }
  _r131cbe42cc5729(e) {
    let r = this.bitmapData;
    return !this.visible || r == null || e == null || r.width !== e.width || r.height !== e.height
      ? null
      : (e.copyPixels(r, r.rect, a.ZERO_POINT), e);
  }
  getDrawingDatas(e) {
    let r = [];
    if (!this.var_1380) return r;
    let t = null;
    try {
      t = this._r628d50bcfa7a08(e);
      let i = this.var_1568?._rc77cca44f7df44(this._id ?? "") ?? [];
      for (let s of i) {
        if (!(s instanceof pl)) continue;
        let o;
        if (this.var_3344 && s.PlaneDrawingData() != null) {
          let d = e.getCoordinatePosition(this._normal),
            c = s.PlaneDrawingData()?.getMaterialCellMatrix(d) ?? null;
          if (c == null) continue;
          ((o = new class_2481(t, a.blend(this._color, s.getColor()), c.isBottomAligned())),
            ih.setSeed(this.var_4076));
          for (let f of c.getColumns(this.screenWidth(e))) {
            if (!(f instanceof _b)) continue;
            let l = [];
            for (let b of f.getCells()) {
              if (!(b instanceof QQ)) continue;
              let _ = b.getAssetName(d);
              _ != null && l.push(_);
            }
            l.length > 0 && (f.isRepeated() || l.push(""), o._r0d7150224b1272(l));
          }
          o._r462fb34fa01d45.length > 0 && r.push(o);
        } else ((o = new class_2481(t, a.blend(this._color, s.getColor()))), r.push(o));
      }
    } catch {}
    return (r.length === 0 && r.push(new class_2481(t, this._color)), r);
  }
  update(e, r) {
    if (e == null || this._r117eeea1d6cf8d) return !1;
    let t = _i7e30f454680fff();
    t !== this._red7f497c20e158 &&
      (this.resetTextureCache(),
      this._rb026a449dfba8a(this._rf72579575718db),
      (this._rf72579575718db = null),
      this._r9683bb3aa83b1a(),
      this._r467143edc5f85d(),
      (this._red7f497c20e158 = t));
    let i = !1;
    if (
      (this.var_3208 !== e.updateId && (i = !0),
      (!i || !this.var_1702) && !this.visible)
    )
      return !1;
    if (i) {
      this.var_517 = null;
      let s = k.cosAngle(e.directionAxis, this._normal);
      if (s > -0.001) return this.var_1380 ? ((this.var_1380 = !1), !0) : !1;
      for (let f of this._r7c5471baa446ba)
        if (((s = k.cosAngle(e.directionAxis, f)), s > -0.001))
          return this.var_1380 ? ((this.var_1380 = !1), !0) : !1;
      this._r10e8a2d31b4061(e);
      let d = e._rd0d22ff45cecac(this._r199ea53326d28f)?.z ?? 0,
        c =
          Math.max(
            this.var_252.z,
            this._r7ceddd300e8348.z,
            this._r233cf200e19be7.z,
            this._r52ce4e40b10b8d.z,
          ) - d;
      (this._type === a.const_86 &&
        (c -= (this._r52d70adc72f536.z + Math.min(0, this._rightSide.z, this._rc4f1e6d6578243.z)) * 8),
        this._type === a.TYPE_LANDSCAPE && (c += 0.02),
        (this._r53843a629b8651 = c),
        (this.var_1380 = !0),
        (this.var_3208 = e.updateId));
    }
    if (i || this.needsNewTexture(e, r)) {
      if (this._rd24dc2ee6f6c1e < 1 || this._r4007f9b1e28e5b < 1)
        return (
          this._rb026a449dfba8a(this._rf72579575718db),
          (this._rf72579575718db = null),
          this._r467143edc5f85d(),
          i
        );
      if (
        this._rf72579575718db == null ||
        this._rd24dc2ee6f6c1e !== this._rf72579575718db.width ||
        this._r4007f9b1e28e5b !== this._rf72579575718db.height
      )
        (this._rb026a449dfba8a(this._rf72579575718db),
          (this._rf72579575718db = _ie26e140b784b4c(this._rd24dc2ee6f6c1e, this._r4007f9b1e28e5b)));
      else if (!_iec32b400ef4cda(this._rf72579575718db)) return !1;
      (this._r467143edc5f85d(), ih.setSeed(this.var_4076));
      let s = this.getTexture(e, r);
      if (s != null) this.renderTexture(e, s);
      else return (this.dispose(), !1);
      return s != null || i;
    }
    return !1;
  }
  _r156ed74207dec0() {
    this._r117eeea1d6cf8d ||
      !this._r43a18454ab1e0d ||
      (this.var_621.length !== 0 &&
        ((this._r4699da6f902ca7 = !0), (this.var_621.length = 0)));
  }
  addBitmapMask(e, r, t) {
    if (!this._r43a18454ab1e0d) return !1;
    for (let i of this.var_621)
      if (i.type === e && i._r43917ad7a56ea1 === r && i._r94891de5ca99b7 === t) return !1;
    return (this.var_621.push(new RoomPlaneBitmapMask(e, r, t)), (this._r4699da6f902ca7 = !0), !0);
  }
  _r862c1a858b08a4() {
    this._r43a18454ab1e0d &&
      this._r24ec5ba93207a1.length !== 0 &&
      ((this._r4699da6f902ca7 = !0), (this._r24ec5ba93207a1.length = 0));
  }
  addRectangleMask(e, r, t, i) {
    if (!this._r43a18454ab1e0d) return !1;
    for (let s of this._r24ec5ba93207a1)
      if (
        s._r43917ad7a56ea1 === e &&
        s._r94891de5ca99b7 === r &&
        s._rbb4b21cb0a9b7c === t &&
        s._r76c346d9fd3ef2 === i
      )
        return !1;
    return (this._r24ec5ba93207a1.push(new RoomPlaneRectangleMask(e, r, t, i)), (this._r4699da6f902ca7 = !0), !0);
  }
  cacheTexture(e, r) {
    let t = this._textures.remove(e);
    return (
      t != null && (r.texture !== t.texture && t.texture instanceof sn && t.texture.destroy(!0), t.dispose()),
      (this.var_517 = r),
      this._textures.add(e, r),
      !0
    );
  }
  resetTextureCache(e = null) {
    for (let r = 0; r < this._textures.length; r++) {
      let t = this._textures.getWithIndex(r);
      (t?.texture instanceof sn && t.texture !== e && t.texture.destroy(!0), t?.dispose());
    }
    (this._textures.reset(), (this.var_517 = null));
  }
  _rb67ca682c77f71(e) {
    return this.var_1568?._rb67ca682c77f71(e, this._normal) ?? String(e);
  }
  _r0326a5c9ddb130(e) {
    let r = e?.texture instanceof sn ? e.texture : null;
    return r != null && r.source == null;
  }
  needsNewTexture(e, r) {
    if (e == null) return !1;
    let t = this.var_517;
    return (
      t == null && (t = this._textures.getValue(this._rb67ca682c77f71(e.scale)) ?? null),
      this._r0650ff81bfa77c(),
      this.var_1702 &&
        (t == null ||
          this._r0326a5c9ddb130(t) ||
          (t.timeStamp >= 0 && r > t.timeStamp) ||
          this._r4699da6f902ca7)
    );
  }
  getTexture(e, r) {
    if (e == null) return null;
    let t = this._rb67ca682c77f71(e.scale),
      i = null;
    if (this.needsNewTexture(e, r)) {
      let s = this._rightSide.length * e.scale,
        o = this._rc4f1e6d6578243.length * e.scale,
        d = e.getCoordinatePosition(this._normal);
      ((i = this.var_517 ?? this._textures.getValue(t) ?? null),
        this._r0326a5c9ddb130(i) && (i = null));
      let c = i?.texture instanceof sn ? i.texture : null;
      if (this.var_1568 != null)
        i = this.var_1568.render(
          c,
          this._id ?? "",
          s,
          o,
          e.scale,
          d,
          this.var_3344,
          this._r553593205aad0e,
          this._r866e769b7d9cf7,
          this._r99dba14f2c2afc,
          this._rfe6f4e6b2811b8,
          r,
        );
      else {
        let f = _ie26e140b784b4c(Math.max(1, Math.round(s)), Math.max(1, Math.round(o)));
        (f != null && _ib4e6c41bf9a436(f, this._color | 4278190080, 1), (i = new UnkClass_3fbc7e(f, -1)));
      }
      i != null && (this.updateMask(i.texture, e), this.cacheTexture(t, i));
    } else i = this.var_517 ?? this._textures.getValue(t) ?? null;
    return i != null ? ((this.var_517 = i), i.texture) : null;
  }
  _r628d50bcfa7a08(e) {
    if (!this._r43a18454ab1e0d || this._r97f6b03b515d60 == null) return null;
    let r = null,
      t = 0,
      i = 0,
      s = new class_2481();
    for (let o of this.var_621) {
      if (((r = o), r == null)) continue;
      let d = this._rf1bec2a91c53aa?._rce948062a3990f(r.type) ?? null;
      if (!(d instanceof PlaneMask)) continue;
      let c = d.getAssetName(e.scale) ?? null;
      if (c == null) continue;
      let f = e.getCoordinatePosition(this._normal),
        l = d._r3b7f5331d263ca(e.scale, f);
      if (l == null) continue;
      ((t = Math.trunc(
        this._r97f6b03b515d60.width * (1 - r._r43917ad7a56ea1 / this._rightSide.length),
      )),
        (i = Math.trunc(
          this._r97f6b03b515d60.height * (1 - r._r94891de5ca99b7 / this._rc4f1e6d6578243.length),
        )));
      let b = new E(t + l.offsetX, i + l.offsetY);
      s.addMask(c, b, l.flipH, l.flipV);
    }
    return s;
  }
  screenWidth(e) {
    let r = e._r2c974b4bf77b84(new k(0, 0, 0)),
      t = e._r2c974b4bf77b84(new k(0, 1, 0));
    return r == null || t == null ? 0 : Math.round(this._rightSide.length * Math.abs(r.x - t.x));
  }
  static blend(e, r) {
    return DC.colorize(r, (e | 4278190080) >>> 0) & 16777215;
  }
  _r10e8a2d31b4061(e) {
    let r = k.sum(this._r52d70adc72f536, this._rc4f1e6d6578243),
      t = k.sum(k.sum(this._r52d70adc72f536, this._rightSide), this._rc4f1e6d6578243),
      i = k.sum(this._r52d70adc72f536, this._rightSide);
    (this.var_252.assign(e._rd0d22ff45cecac(this._r52d70adc72f536)),
      r != null && this._r7ceddd300e8348.assign(e._rd0d22ff45cecac(r)),
      t != null && this._r233cf200e19be7.assign(e._rd0d22ff45cecac(t)),
      i != null && this._r52ce4e40b10b8d.assign(e._rd0d22ff45cecac(i)));
    let s = e._r2c974b4bf77b84(this._r199ea53326d28f);
    (s != null && ((this._offset.x = s.x), (this._offset.y = s.y)),
      (this.var_252.x = Math.round(this.var_252.x)),
      (this.var_252.y = Math.round(this.var_252.y)),
      (this._r7ceddd300e8348.x = Math.round(this._r7ceddd300e8348.x)),
      (this._r7ceddd300e8348.y = Math.round(this._r7ceddd300e8348.y)),
      (this._r233cf200e19be7.x = Math.round(this._r233cf200e19be7.x)),
      (this._r233cf200e19be7.y = Math.round(this._r233cf200e19be7.y)),
      (this._r52ce4e40b10b8d.x = Math.round(this._r52ce4e40b10b8d.x)),
      (this._r52ce4e40b10b8d.y = Math.round(this._r52ce4e40b10b8d.y)),
      (this._offset.x = Math.round(this._offset.x)),
      (this._offset.y = Math.round(this._offset.y)));
    let o = Math.min(
        this.var_252.x,
        this._r7ceddd300e8348.x,
        this._r233cf200e19be7.x,
        this._r52ce4e40b10b8d.x,
      ),
      d = Math.max(
        this.var_252.x,
        this._r7ceddd300e8348.x,
        this._r233cf200e19be7.x,
        this._r52ce4e40b10b8d.x,
      ),
      c = Math.min(
        this.var_252.y,
        this._r7ceddd300e8348.y,
        this._r233cf200e19be7.y,
        this._r52ce4e40b10b8d.y,
      ),
      f = Math.max(
        this.var_252.y,
        this._r7ceddd300e8348.y,
        this._r233cf200e19be7.y,
        this._r52ce4e40b10b8d.y,
      );
    ((d -= o),
      (this._offset.x -= o),
      (this.var_252.x -= o),
      (this._r7ceddd300e8348.x -= o),
      (this._r233cf200e19be7.x -= o),
      (this._r52ce4e40b10b8d.x -= o),
      (f -= c),
      (this._offset.y -= c),
      (this.var_252.y -= c),
      (this._r7ceddd300e8348.y -= c),
      (this._r233cf200e19be7.y -= c),
      (this._r52ce4e40b10b8d.y -= c),
      (this._rd24dc2ee6f6c1e = d),
      (this._r4007f9b1e28e5b = f));
  }
  renderTexture(e, r) {
    if (this._rf72579575718db == null) return;
    let t = this._r52ce4e40b10b8d.x - this._r233cf200e19be7.x,
      i = this._r52ce4e40b10b8d.y - this._r233cf200e19be7.y,
      s = this._r7ceddd300e8348.x - this._r233cf200e19be7.x,
      o = this._r7ceddd300e8348.y - this._r233cf200e19be7.y;
    (this._type === a.const_103 || this._type === a.TYPE_LANDSCAPE) &&
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
    this._rf72579575718db != null && _i8f048febcf4a84(this._rf72579575718db, e, r, !0);
  }
  _r0650ff81bfa77c() {
    if (!this._r4699da6f902ca7) return;
    let e = 0,
      r = 0,
      t = !0;
    if (this.var_621.length === this._rf2267697963b42.length)
      for (; e < this.var_621.length; e++) {
        let i = this.var_621[e];
        if (i == null) continue;
        let s = !1;
        for (; r < this._rf2267697963b42.length; r++) {
          let o = this._rf2267697963b42[r];
          if (
            o != null &&
            o.type === i.type &&
            o._r43917ad7a56ea1 === i._r43917ad7a56ea1 &&
            o._r94891de5ca99b7 === i._r94891de5ca99b7
          ) {
            s = !0;
            break;
          }
        }
        if (!s) {
          t = !1;
          break;
        }
      }
    else t = !1;
    (this._r24ec5ba93207a1.length > this._rcefdcbda6fd31a.length && (t = !1),
      t && (this._r4699da6f902ca7 = !1));
  }
  updateMask(e, r) {
    if (!this._r43a18454ab1e0d || e == null || r == null) return;
    let t = this.var_621.length > 0 || this._r24ec5ba93207a1.length > 0;
    if (!t && !this._r4699da6f902ca7) return;
    if (!t) {
      ((this._rf2267697963b42 = []),
        (this._rcefdcbda6fd31a = []),
        this._r9683bb3aa83b1a(),
        (this._r4699da6f902ca7 = !1));
      return;
    }
    if (this._rf1bec2a91c53aa == null) return;
    this._r0650ff81bfa77c();
    let i = e.width,
      s = e.height;
    if (
      ((this._r97f6b03b515d60 == null ||
        this._r97f6b03b515d60.width !== i ||
        this._r97f6b03b515d60.height !== s) &&
        (this._r97f6b03b515d60?.destroy(!0),
        (this._r97f6b03b515d60 = _ie26e140b784b4c(i, s)),
        (this._r4699da6f902ca7 = !0)),
      (this._ra1b8600b9a594b == null ||
        this._ra1b8600b9a594b.width !== i ||
        this._ra1b8600b9a594b.height !== s) &&
        (this._ra1b8600b9a594b?.destroy(!0),
        (this._ra1b8600b9a594b = _ie26e140b784b4c(i, s)),
        (this._r4699da6f902ca7 = !0)),
      this._r4699da6f902ca7)
    ) {
      if (
        ((this._rf2267697963b42 = []),
        (this._rcefdcbda6fd31a = []),
        this._r97f6b03b515d60 == null || this._ra1b8600b9a594b == null)
      )
        return;
      (_iec32b400ef4cda(this._r97f6b03b515d60), this.resetTextureCache(e));
      let o = r.getCoordinatePosition(this._normal);
      for (let d of this.var_621) {
        let c = Math.trunc(
            this._r97f6b03b515d60.width -
              (this._r97f6b03b515d60.width * d._r43917ad7a56ea1) / this._rightSide.length,
          ),
          f = Math.trunc(
            this._r97f6b03b515d60.height -
              (this._r97f6b03b515d60.height * d._r94891de5ca99b7) / this._rc4f1e6d6578243.length,
          );
        (this._rf1bec2a91c53aa?.updateMask(this._r97f6b03b515d60, d.type, r.scale, o, c, f),
          this._rf2267697963b42.push(new RoomPlaneBitmapMask(d.type, d._r43917ad7a56ea1, d._r94891de5ca99b7)));
      }
      for (let d of this._r24ec5ba93207a1) {
        let c = Math.trunc(
            this._r97f6b03b515d60.width -
              (this._r97f6b03b515d60.width * d._r43917ad7a56ea1) / this._rightSide.length,
          ),
          f = Math.trunc(
            this._r97f6b03b515d60.height -
              (this._r97f6b03b515d60.height * d._r94891de5ca99b7) / this._rc4f1e6d6578243.length,
          ),
          l = Math.trunc((this._r97f6b03b515d60.width * d._rbb4b21cb0a9b7c) / this._rightSide.length),
          b = Math.trunc((this._r97f6b03b515d60.height * d._r76c346d9fd3ef2) / this._rc4f1e6d6578243.length),
          _ = new Jt(Texture.WHITE);
        ((_.tint = 0),
          (_.width = l),
          (_.height = b),
          _.position.set(c - l, f - b),
          _ifa78568353bcfc(this._r97f6b03b515d60, _, !1),
          _.destroy(),
          this._rcefdcbda6fd31a.push(
            new RoomPlaneRectangleMask(d._rbb4b21cb0a9b7c, d._r94891de5ca99b7, d._rbb4b21cb0a9b7c, d._r76c346d9fd3ef2),
          ));
      }
      this._r4699da6f902ca7 = !1;
    }
    this._r97f6b03b515d60 != null &&
      this._ra1b8600b9a594b != null &&
      e instanceof sn &&
      _if8bb771e508633(e, this._r97f6b03b515d60, this._ra1b8600b9a594b);
  }
  _r467143edc5f85d() {
    (this._r164cdf850e0605?.dispose(), (this._r164cdf850e0605 = null));
    let e = this._rf72579575718db?.source;
    e != null && (e._rfe7fbf9f945fb3 = void 0);
  }
  _rb026a449dfba8a(e) {
    if (e != null)
      for (this._r192ea7fe7a638c.push(e); this._r192ea7fe7a638c.length > 2;)
        this._r192ea7fe7a638c.shift()?.destroy(!0);
  }
  _r43e4dbbd72526c() {
    let e = this._rf72579575718db?.source;
    e == null ||
      e._rda8f82deca7dcd != null ||
      (e._rda8f82deca7dcd = () => this.bitmapData?._r0adb6e3e4060b8() ?? null);
  }
  _r9683bb3aa83b1a() {
    (this._r97f6b03b515d60?.destroy(!0),
      (this._r97f6b03b515d60 = null),
      this._ra1b8600b9a594b?.destroy(!0),
      (this._ra1b8600b9a594b = null));
  }
}

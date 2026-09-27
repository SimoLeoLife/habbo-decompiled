// Extracted from HabboAirLauncher.deobf.js, line 376646.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/utils/class_4296.as
// Obfuscated name: _ic0a8a254a0f670

class a extends UnkClass_3a5c6f {
  static {
    n(this, "class_4296");
  }
  var_3174 = 128;
  var_4265 = "";
  var_3234 = "";
  _rd6b3ded75e43d5 = !1;
  _rd61725313055be = !1;
  _r040481a9f22e8e = !1;
  _bitmapData = null;
  _r7a9b0ee1b7faa5 = null;
  _r0f6283e8c19d3f = 16777215;
  _width = 0;
  _height = 0;
  _updateID1 = -1;
  _updateID2 = -1;
  _rf8be01ade2031f = 0;
  _rd37a70a1d57e66 = 0;
  get _re7ddc55c344f53() {
    return this.var_3174;
  }
  set _re7ddc55c344f53(e) {
    this.var_3174 = e;
  }
  get tag() {
    return this.var_4265;
  }
  set tag(e) {
    this.var_4265 = e;
  }
  get identifier() {
    return this.var_3234;
  }
  set identifier(e) {
    this.var_3234 = e;
  }
  get varyingDepth() {
    return this._r040481a9f22e8e;
  }
  set varyingDepth(e) {
    this._r040481a9f22e8e = e;
  }
  get clickHandling() {
    return this._rd6b3ded75e43d5;
  }
  set clickHandling(e) {
    this._rd6b3ded75e43d5 = e;
  }
  get skipMouseHandling() {
    return this._rd61725313055be;
  }
  set skipMouseHandling(e) {
    this._rd61725313055be = e;
  }
  get offsetRefX() {
    return this._rf8be01ade2031f;
  }
  set offsetRefX(e) {
    this._rf8be01ade2031f = e;
  }
  get offsetRefY() {
    return this._rd37a70a1d57e66;
  }
  set offsetRefY(e) {
    this._rd37a70a1d57e66 = e;
  }
  get nativeTexture() {
    return this._r7a9b0ee1b7faa5;
  }
  set nativeTexture(e) {
    e !== this._r7a9b0ee1b7faa5 &&
      ((this._r7a9b0ee1b7faa5 = e),
      e != null
        ? ((this._width = Math.max(0, Math.round(e.orig?.width ?? e.width))),
          (this._height = Math.max(0, Math.round(e.orig?.height ?? e.height))))
        : this.bitmapData == null &&
          ((this._width = 0), (this._height = 0), (this._updateID1 = -1), (this._updateID2 = -1)),
      this._r9598a7d815a9c2());
  }
  get _r2fa4533baae420() {
    return this._r0f6283e8c19d3f;
  }
  set _r2fa4533baae420(e) {
    let r = e & 16777215;
    r !== this._r0f6283e8c19d3f && ((this._r0f6283e8c19d3f = r), this._r6fae8dd07d4d51());
  }
  set bitmapData(e) {
    if (e !== super.bitmapData) {
      if (
        (this._bitmapData != null && (this._bitmapData.dispose(), (this._bitmapData = null)),
        e != null)
      ) {
        ((this._width = e.width), (this._height = e.height));
        let r = e instanceof L5 ? e : null;
        r != null && (r.addReference(), (this._bitmapData = r));
      } else
        ((this._width = 0), (this._height = 0), (this._updateID1 = -1), (this._updateID2 = -1));
      ((super.bitmapData = e), this._r7a9b0ee1b7faa5 != null && this._r9598a7d815a9c2());
    }
  }
  get bitmapData() {
    return super.bitmapData;
  }
  dispose() {
    (this._bitmapData != null && (this._bitmapData.dispose(), (this._bitmapData = null)),
      (this.nativeTexture = null),
      (this.bitmapData = null));
  }
  needsUpdate(e, r) {
    return e !== this._updateID1 || r !== this._updateID2
      ? ((this._updateID1 = e), (this._updateID2 = r), !0)
      : this._bitmapData?.disposed === !0;
  }
  _r7888fd857017f5(e, r, t = !1) {
    return this.hitTest(e, r, !0);
  }
  hitTest(e, r, t = !0) {
    if (this._r7a9b0ee1b7faa5 != null) return this._r51915b637342b0(e, r, t);
    if (this.var_3174 > 255 || this.bitmapData == null) return this._r51915b637342b0(e, r, t);
    if (((e = Math.trunc(e)), (r = Math.trunc(r)), e < 0 || r < 0 || e >= this._width || r >= this._height))
      return !1;
    try {
      return this.bitmapData.getPixel32(e, r) >>> 24 > this.var_3174;
    } catch {
      return !1;
    }
  }
  _r51915b637342b0(e, r, t) {
    let i = this._r7a9b0ee1b7faa5;
    if (i == null || this.var_3174 > 255) return !1;
    let s = this._r0203ab2933f479(),
      o = i.source,
      d = i;
    if (o == null) return !1;
    ((e = Math.trunc(e)), (r = Math.trunc(r)));
    let c = e,
      f = r;
    if (s.scale.x < 0) {
      if (e < -this._width || e >= 0) return !1;
      c = -e - 1;
    } else if (e < 0 || e >= this._width) return !1;
    if (s.scale.y < 0) {
      if (r < -this._height || r >= 0) return !1;
      f = -r - 1;
    } else if (r < 0 || r >= this._height) return !1;
    if (this.var_3174 < 0)
      return i.trim != null
        ? c >= i.trim.x && f >= i.trim.y && c < i.trim.x + i.frame.width && f < i.trim.y + i.frame.height
        : !0;
    if (!t && d._rfe7fbf9f945fb3 == null && o._rfe7fbf9f945fb3 == null) return !0;
    if (d._rfe7fbf9f945fb3 == null && o._rfe7fbf9f945fb3 == null && !a._rf223cfc22668f0(i)) return !1;
    let l = o._rfe7fbf9f945fb3;
    if (l != null) {
      if (
        i.trim != null &&
        (c < i.trim.x || f < i.trim.y || c >= i.trim.x + i.frame.width || f >= i.trim.y + i.frame.height)
      )
        return !1;
      let T = i.frame.x + (i.trim != null ? c - i.trim.x : c),
        S = i.frame.y + (i.trim != null ? f - i.trim.y : f),
        z = o.resolution ?? 1,
        K = Math.max(1, Math.round((o.width ?? i.width) * z)),
        $ = Math.max(1, Math.round((o.height ?? i.height) * z)),
        Y = Math.round(T * z),
        oe = Math.round(S * z);
      if (Y < 0 || oe < 0 || Y >= K || oe >= $) return !1;
      let be = Y + oe * K,
        ye = be % 32,
        ir = (be / 32) | 0;
      return (l[ir] & (1 << ye)) !== 0;
    }
    let b = d._rfe7fbf9f945fb3;
    if (b == null) return !1;
    let _ = c,
      h = f;
    if (i.trim != null) {
      if (c < i.trim.x || f < i.trim.y || c >= i.trim.x + i.frame.width || f >= i.trim.y + i.frame.height)
        return !1;
      ((_ -= i.trim.x), (h -= i.trim.y));
    }
    let p = o.resolution ?? 1,
      m = Math.max(1, Math.round(i.frame.width * p)),
      v = Math.max(1, Math.round(i.frame.height * p)),
      w = Math.round(_ * p),
      I = Math.round(h * p);
    if (w < 0 || I < 0 || w >= m || I >= v) return !1;
    let C = w + I * m,
      W = C % 32,
      R = (C / 32) | 0;
    return (b[R] & (1 << W)) !== 0;
  }
  static _rf223cfc22668f0(e) {
    let r = e.source,
      t = e;
    if (r == null) return !1;
    let i = r._rda8f82deca7dcd ?? null;
    if (i != null) {
      try {
        r._rfe7fbf9f945fb3 = i() ?? void 0;
      } catch {
        r._rfe7fbf9f945fb3 = void 0;
      }
      if (r._rfe7fbf9f945fb3 != null) return !0;
    }
    let s = t._rda8f82deca7dcd ?? null;
    if (s != null) {
      try {
        let o = s() ?? void 0;
        t._rfe7fbf9f945fb3 = o;
      } catch {
        t._rfe7fbf9f945fb3 = void 0;
      }
      if (t._rfe7fbf9f945fb3 != null) return !0;
    }
    return !1;
  }
  _r9598a7d815a9c2() {
    let e = this._r0203ab2933f479();
    if (this._r7a9b0ee1b7faa5 != null) {
      ((e.texture = this._r7a9b0ee1b7faa5), this._r9d4ead604ed160(), this._r6fae8dd07d4d51());
      return;
    }
    if (this.bitmapData != null) {
      ((e.texture = this.bitmapData.texture), this._r9d4ead604ed160(), this._r6fae8dd07d4d51());
      return;
    }
    let r = e.texture?.constructor?.EMPTY ?? null;
    r != null && (e.texture = r);
  }
  _r9d4ead604ed160() {
    let r = this._r0203ab2933f479().texture?.source ?? null;
    r != null && (r.scaleMode = this.smoothing ? "linear" : "nearest");
  }
  _r6fae8dd07d4d51() {
    let e = this._r0203ab2933f479();
    e.tint !== void 0 && (e.tint = this._r0f6283e8c19d3f);
  }
}

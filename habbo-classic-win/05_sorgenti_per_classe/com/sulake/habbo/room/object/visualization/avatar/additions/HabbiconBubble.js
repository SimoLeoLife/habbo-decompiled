// Extracted from HabboAirLauncher.deobf.js, line 273237.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/HabbiconBubble.as
// Obfuscated name: _ib72d79d3bd953e

class a {
  constructor(e, r, t, i) {
    this._id = e;
    this.var_1429 = r;
    this.var_4666 = t;
    this.var_204 = i;
  }
  static {
    n(this, "HabbiconBubble");
  }
  static DEFAULT_VISIBLE_DURATION_MS = 3e3;
  static INTRO_DURATION_MS = 180;
  static INTRO_START_OFFSET_Y = 12;
  static FADE_IN_DURATION_MS = 150;
  static FADE_OUT_DURATION_MS = 350;
  static _r548ed70819d1d7 = a.DEFAULT_VISIBLE_DURATION_MS + 350;
  static _rfb9958d21336c2 = a.FADE_OUT_DURATION_MS + 180;
  static ROOM_LARGE_OFFSET_X = -20;
  static ROOM_LARGE_OFFSET_Y = -126;
  static ROOM_SMALL_OFFSET_X = -10;
  static ROOM_SMALL_OFFSET_Y = -65;
  static DEFAULT_RELATIVE_DEPTH = -0.2;
  static _r5c7f2885294541 = 2;
  static const_803 = 4294967295;
  static _rb20ac915269760 = {};
  static _r5825c93b09cd70 = {};
  static BACKGROUND_SHADOW_PADDING = 5;
  static resolveBaseDimension = a._r5c7f2885294541 + a.BACKGROUND_SHADOW_PADDING;
  static BACKGROUND_SHADOW_OFFSET_X = 1.5;
  static _ra28795ee1a7843 = 2;
  static BACKGROUND_SHADOW_BLUR = 6;
  static BACKGROUND_SHADOW_ALPHA = 0.55;
  static _r147e6a1d3272c9 = 2;
  static _r7924d2c77511e0 = 0;
  static _rad4d4d01061460 = {};
  _scale = 0;
  var_5762 = 0;
  var_5798 = !1;
  var_5750 = 0;
  _bitmap = null;
  var_1286 = !1;
  var_1483 = !1;
  var_2170 = 0;
  var_2332 = !1;
  var_2103 = !1;
  var_2400 = 0;
  var_111 = null;
  _r020bd235058d10 = 0;
  var_4101 = 0;
  var_3772 = 0;
  var_3017 = 0;
  var_2860 = 0;
  var_2144 = 0;
  var_915 = -1;
  _lastComposedSourceAlpha = -1;
  _lastComposedBackgroundAlpha = -1;
  _rfe0e088b4b245f = !1;
  _initialized = !1;
  var_988 = !1;
  _r53843a629b8651 = a.DEFAULT_RELATIVE_DEPTH;
  var_3799 = !1;
  var_3532 = !1;
  var_1124 = !1;
  get id() {
    return this._id;
  }
  get habbiconId() {
    return this.var_1429;
  }
  get _r47e12203f3598e() {
    return this.var_4666;
  }
  get disposed() {
    return this.var_204 == null;
  }
  set _relativeDepth(e) {
    this._r53843a629b8651 = e;
  }
  get isPartOfStack() {
    return this.var_1124;
  }
  set isPartOfStack(e) {
    this.var_1124 = e;
  }
  get _r811e948c222c4c() {
    return !0;
  }
  get invisible() {
    return !1;
  }
  get isFinished() {
    return !1;
  }
  get requiresAnimationTick() {
    return !0;
  }
  dispose() {
    (this._bitmap != null && !this.var_1286 && this._bitmap.dispose(),
      (this._bitmap = null),
      (this.var_1286 = !1),
      (this.var_1483 = !1),
      (this.var_2170 = 0),
      (this.var_2332 = !1),
      (this.var_2103 = !1),
      (this.var_2400 = 0),
      (this.var_3017 = 0),
      (this.var_2860 = 0),
      (this.var_2144 = 0),
      (this._lastComposedSourceAlpha = -1),
      (this._lastComposedBackgroundAlpha = -1),
      (this._initialized = !1),
      (this.var_988 = !1),
      (this.var_3799 = !1),
      (this.var_3532 = !1),
      (this.var_204 = null));
  }
  update(e, r) {
    let t = !this._initialized;
    if (!e) return;
    if (this.var_988 || (this.var_3772 > 0 && _ia411d8d8194a3a() >= this.var_3772)) {
      ((this.var_988 = !0), (e.alpha = 0), (e.visible = !1));
      return;
    }
    ((this._scale = r),
      t &&
        ((this.var_111 = Dr.getRuntimeAsset(this.var_1429)),
        (this._rfe0e088b4b245f = this.var_111 != null && !!this.var_111.animated),
        (this._r020bd235058d10 = _ia411d8d8194a3a()),
        (this.var_915 = this.resolveFrameIndex(0)),
        this.configureTiming(),
        this.applyFrame(
          this.resolveBitmap(
            r,
            this.resolveAlpha(this._r020bd235058d10),
            this.resolveBackgroundAlpha(this._r020bd235058d10),
          ),
        ),
        (this._initialized = !0)));
    let i = _ia411d8d8194a3a() - this._r020bd235058d10,
      s = r < 48 ? 32 : 64,
      o = r < 48 ? a.ROOM_SMALL_OFFSET_X : a.ROOM_LARGE_OFFSET_X,
      d = this.var_1124 ? 0 : r < 48 ? a.ROOM_SMALL_OFFSET_Y : a.ROOM_LARGE_OFFSET_Y;
    (!this.var_1124 && this.var_204.posture === "sit"
      ? (d += s / 2)
      : !this.var_1124 && this.var_204.posture === "lay" && (d += s),
      (e.asset = this._bitmap),
      (e.offsetX = o + this.resolveFrameAnchorCompensationX()),
      (e.offsetY = d + this.resolveStackAwareFrameAnchorCompensationY(i) + this.relativeDepth()),
      (e._relativeDepth = this._r53843a629b8651),
      t &&
        ((e.visible = !0),
        (e.alpha = 255),
        (this.var_5762 = 0),
        (this.var_5798 = !1),
        (this.var_5750 = 0)));
  }
  animate(e) {
    if (!e) return !1;
    let r = _ia411d8d8194a3a(),
      t = r - this._r020bd235058d10;
    ((this.var_111 = Dr.getRuntimeAsset(this.var_1429)),
      this.var_111 != null &&
        !!this.var_111.animated !== this._rfe0e088b4b245f &&
        ((this._rfe0e088b4b245f = !!this.var_111.animated), this.configureTiming()));
    let i = this.resolveFrameIndex(t),
      s = !1;
    this.var_111 != null && i !== this.var_915 && ((this.var_915 = i), (s = !0));
    let o = this.resolveAlpha(r),
      d = this.resolveBackgroundAlpha(r);
    ((o !== this._lastComposedSourceAlpha || d !== this._lastComposedBackgroundAlpha) && (s = !0),
      s && this.applyFrame(this.resolveBitmap(this._scale, o, d)),
      this._bitmap != null && (e.asset = this._bitmap),
      (e._relativeDepth = this._r53843a629b8651));
    let c = this.var_1124 ? 0 : this._scale < 48 ? a.ROOM_SMALL_OFFSET_Y : a.ROOM_LARGE_OFFSET_Y;
    return (
      !this.var_1124 && this.var_204.posture === "sit"
        ? (c += 32)
        : !this.var_1124 && this.var_204.posture === "lay" && (c += 64),
      (e.offsetY = c + this.resolveStackAwareFrameAnchorCompensationY(t) + this.relativeDepth()),
      (e.offsetX = (this._scale < 48 ? a.ROOM_SMALL_OFFSET_X : a.ROOM_LARGE_OFFSET_X) + this.resolveFrameAnchorCompensationX()),
      r >= this.var_3772
        ? ((this.var_988 = !0), (e.alpha = 0), (e.visible = !1), !0)
        : (e.alpha !== 255 && (e.alpha = 255), (e.visible = Math.max(o, d) > 0), !0)
    );
  }
  resolveBitmap(e, r = -1, t = -1) {
    let i,
      s = e < 48 ? 20 : 40,
      o = e < 48;
    if (
      (r < 0 && (r = this.resolveAlpha(_ia411d8d8194a3a())),
      t < 0 && (t = this.resolveBackgroundAlpha(_ia411d8d8194a3a())),
      (this.var_2332 = !1),
      (this.var_2103 = !1),
      (this.var_2400 = s),
      this.var_111 != null &&
        Array.isArray(this.var_111.frames) &&
        this.var_111.frames.length > 0)
    ) {
      let d = this.var_111.frames;
      ((this.var_915 < 0 || this.var_915 >= d.length) && (this.var_915 = 0),
        (i = o ? d[this.var_915]._rea73c74418f142 : d[this.var_915].bitmap));
    } else i = Dr.getPreviewBitmap(this.var_1429, o);
    if (i != null) {
      ((this.var_2332 = !1),
        (this.var_2103 = !0),
        (this.var_2400 = i.width + a._r5c7f2885294541 * 2 + a.BACKGROUND_SHADOW_PADDING * 2),
        (this._lastComposedSourceAlpha = r),
        (this._lastComposedBackgroundAlpha = t));
      let d = this.createOutlineBitmapCacheKey(o);
      this.shouldMirrorHabbicon() && ((d += ":mirrored"), (i = a.getMirroredBitmap(i, d)));
      let c = a.getOutlineBitmap(i, d);
      return this.composeBitmap(i, c, a.getBackgroundShadowBitmap(c, d), this._bitmap, r, t);
    }
    return this._bitmap != null && !this.var_1286 && this.var_2170 === s
      ? this._bitmap
      : this.createBitmap(s, this.seededColor(this.var_1429 * 37));
  }
  applyFrame(e) {
    this.setBitmap(e, this.var_2332, this.var_2400, this.var_2103);
  }
  setBitmap(e, r, t, i) {
    if (this._bitmap === e) {
      ((this.var_1286 = r), (this.var_2170 = t), (this.var_1483 = i));
      return;
    }
    (this._bitmap != null && !this.var_1286 && this._bitmap.dispose(),
      (this._bitmap = e),
      (this.var_1286 = r),
      (this.var_2170 = t),
      (this.var_1483 = i));
  }
  configureTiming() {
    let e = Math.max(a.DEFAULT_VISIBLE_DURATION_MS, a.FADE_IN_DURATION_MS + a.FADE_OUT_DURATION_MS),
      r = Math.max(a._r548ed70819d1d7, a.FADE_IN_DURATION_MS + a._rfb9958d21336c2),
      t = this.var_111 != null ? this.var_111._rdb0734ff045b3f | 0 : 0,
      i = !1,
      s = this._r020bd235058d10 + (i ? t : e),
      o = i ? s : s - a.FADE_OUT_DURATION_MS;
    ((this.var_3017 = s),
      (this.var_2144 = i ? o + a._rfb9958d21336c2 : this._r020bd235058d10 + r),
      (this.var_2860 = i ? o : this.var_2144 - a._rfb9958d21336c2),
      (this.var_3772 = Math.max(s, this.var_2144)),
      (this.var_4101 = o));
  }
  resolveFrameIndex(e) {
    let r = this._r2e1b55a74ba691(e);
    return this.var_111 == null ||
      this.var_111.frames == null ||
      this.var_111.frames.length === 0 ||
      r == null
      ? 0
      : Math.max(0, Math.min(r.sourceFrame | 0, this.var_111.frames.length - 1));
  }
  _r2e1b55a74ba691(e) {
    if (
      this.var_111 == null ||
      !Array.isArray(this.var_111.steps) ||
      this.var_111.steps.length === 0
    )
      return null;
    let r = this.var_111.steps;
    if (r.length === 1) return r[0];
    let t = 0;
    for (let s of r) t += Math.max(1, s.durationMs | 0);
    if (t <= 0) return r[0];
    let i = e;
    if (this.var_111.animated) i %= t;
    else if (i >= t) return r[r.length - 1];
    t = 0;
    for (let s of r) if (((t += Math.max(1, s.durationMs | 0)), i < t)) return s;
    return r[r.length - 1];
  }
  resolveStackAwareFrameAnchorCompensationY(e) {
    let r = Math.min(1, Math.max(0, e / a.INTRO_DURATION_MS));
    return Math.round((1 - r) * a.INTRO_START_OFFSET_Y);
  }
  resolveAlpha(e) {
    let r = Math.min(1, Math.max(0, (e - this._r020bd235058d10) / a.FADE_IN_DURATION_MS)),
      t =
        e < this.var_4101
          ? 1
          : 1 - Math.min(1, Math.max(0, (e - this.var_4101) / a.FADE_OUT_DURATION_MS));
    return this.var_3017 > 0 && e >= this.var_3017 ? 0 : Math.round(255 * Math.min(r, t));
  }
  resolveBackgroundAlpha(e) {
    let r = Math.min(1, Math.max(0, (e - this._r020bd235058d10) / a.FADE_IN_DURATION_MS)),
      t =
        a._rfb9958d21336c2 <= 0
          ? e < this.var_2144
            ? 1
            : 0
          : e < this.var_2860
            ? 1
            : 1 - Math.min(1, Math.max(0, (e - this.var_2860) / a._rfb9958d21336c2));
    return Math.round(255 * Math.min(r, t));
  }
  resolveFrameAnchorCompensationX() {
    return this._bitmap == null
      ? 0
      : this.var_111 == null
        ? this.var_1483
          ? -a.resolveBaseDimension
          : 0
        : Math.round((this._r629aeeebeaf67c("baseWidth") - this._bitmap.width) * 0.5);
  }
  resolveFrameAnchorCompensationY() {
    return this._bitmap == null
      ? 0
      : this.var_111 == null
        ? this.var_1483
          ? -a.resolveBaseDimension
          : 0
        : this._r629aeeebeaf67c("baseHeight") -
          this._bitmap.height +
          (this.var_1483 ? a.resolveBaseDimension : 0);
  }
  relativeDepth() {
    return this.var_1124 ? 0 : this.resolveFrameAnchorCompensationY();
  }
  _r629aeeebeaf67c(e) {
    let r = this.var_111[e] | 0;
    return this._scale < 48 ? Math.max(1, Math.round(r * 0.5)) : Math.max(1, r);
  }
  createBitmap(e, r) {
    let t = new A(e, e, !0, 0),
      i = Math.trunc(Math.max(2, e / 8)),
      s = Math.trunc(Math.max(1, e / 4));
    return (
      t.fillRect(t.rect, 0),
      t.fillRect(new D(i, i, e - i * 2, e - i * 2), 4278190080 | r),
      t.fillRect(new D(s, s, e - s * 2, e - s * 2), 4294967295),
      t
    );
  }
  createOutlineBitmapCacheKey(e) {
    let t =
      this.var_111 != null &&
      Array.isArray(this.var_111.frames) &&
      this.var_111.frames.length > 0
        ? this.var_111.animated
          ? "animated"
          : "runtime"
        : "preview";
    return this.var_1429 + ":" + t + ":" + (e ? "small" : "large") + ":" + this.var_915;
  }
  shouldMirrorHabbicon() {
    if (!this.var_3799) {
      let e = this.var_204?._r9565a565aaacbd ?? 0,
        r = Dr.getDirection(this.var_1429);
      ((this.var_3532 = e !== 0 && r !== 0 && e !== r), (this.var_3799 = !0));
    }
    return this.var_3532;
  }
  composeBitmap(e, r, t, i, s, o) {
    let d;
    return (
      i != null && !this.var_1286 && i.width === t.width && i.height === t.height
        ? ((d = i), d.fillRect(d.rect, 0))
        : (d = new A(t.width, t.height, !0, 0)),
      a.drawBitmapLayer(d, t, 0, 0, o),
      a.drawBitmapLayer(d, r, a.BACKGROUND_SHADOW_PADDING, a.BACKGROUND_SHADOW_PADDING, o),
      a.drawBitmapLayer(d, e, a.resolveBaseDimension, a.resolveBaseDimension, s),
      d
    );
  }
  static getOutlineBitmap(e, r) {
    return (this._rb20ac915269760[r] ??= this._r32b3196d36c057(e));
  }
  static getMirroredBitmap(e, r) {
    return (this._r5825c93b09cd70[r] ??= this._radcf3cdaddd2d3(e));
  }
  static _radcf3cdaddd2d3(e) {
    let r = new A(e.width, e.height, !0, 0),
      t = new Pe();
    return (t.scale(-1, 1), t.translate(e.width, 0), r.draw(e, t, null, null, null, !1), r);
  }
  static _r32b3196d36c057(e) {
    let r = new A(e.width + this._r5c7f2885294541 * 2, e.height + this._r5c7f2885294541 * 2, !0, 0),
      t = new A(e.width, e.height, !0, this.const_803),
      i = new E();
    t.copyChannel(e, e.rect, i, On.ALPHA, On.ALPHA);
    for (let s = -this._r5c7f2885294541; s <= this._r5c7f2885294541; s++)
      for (let o = -this._r5c7f2885294541; o <= this._r5c7f2885294541; o++)
        (o === 0 && s === 0) ||
          ((i.x = this._r5c7f2885294541 + o),
          (i.y = this._r5c7f2885294541 + s),
          r.copyPixels(t, t.rect, i, null, null, !0));
    return (t.dispose(), r);
  }
  static getBackgroundShadowBitmap(e, r) {
    return (this._rad4d4d01061460[r] ??= this._r8fca375e3c24f3(e));
  }
  static _r8fca375e3c24f3(e) {
    let r = new A(e.width + this.BACKGROUND_SHADOW_PADDING * 2, e.height + this.BACKGROUND_SHADOW_PADDING * 2, !0, 0),
      t = new A(r.width, r.height, !0, 0),
      i = new A(e.width, e.height, !0, 4278190080 | this._r7924d2c77511e0),
      s = new h6(this.BACKGROUND_SHADOW_BLUR, this.BACKGROUND_SHADOW_BLUR, this._r147e6a1d3272c9),
      o = new E(this.BACKGROUND_SHADOW_PADDING + this.BACKGROUND_SHADOW_OFFSET_X, this.BACKGROUND_SHADOW_PADDING + this._ra28795ee1a7843);
    return (
      i.copyChannel(e, e.rect, new E(), On.ALPHA, On.ALPHA),
      t.copyPixels(i, i.rect, o, null, null, !0),
      t.colorTransform(t.rect, new UnkClass_4210dc(1, 1, 1, this.BACKGROUND_SHADOW_ALPHA)),
      r.applyFilter(t, t.rect, new E(), s),
      i.dispose(),
      t.dispose(),
      r
    );
  }
  static drawBitmapLayer(e, r, t, i, s) {
    if (s <= 0) return;
    if (s >= 255) {
      e.copyPixels(r, r.rect, new E(t, i), null, null, !0);
      return;
    }
    let o = new Pe();
    (o.translate(t, i), e.draw(r, o, new UnkClass_4210dc(1, 1, 1, s / 255)));
  }
  seededColor(e) {
    switch (e % 6) {
      case 0:
        return 16371247;
      case 1:
        return 15964719;
      case 2:
        return 15695663;
      case 3:
        return 9358143;
      case 4:
        return 5095656;
      default:
        return 12813557;
    }
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 285921.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/animation/AnimatedPaintColor.as
// Obfuscated name: _ib0fc30d140febd

class a {
  static {
    n(this, "AnimatedPaintColor");
  }
  _color;
  var_538 = null;
  var_1662 = -1;
  var_2434 = 0;
  constructor(e) {
    this._color = new AnimatedColor_(e);
  }
  get value() {
    return this._color.value;
  }
  get argb() {
    return (4278190080 | this._color.value) >>> 0;
  }
  var_1190(e, r) {
    let t = this._r0826336a1ed27b(e),
      i = t.rgb & 16777215;
    (this._color.var_1190(i, r),
      (this.var_538 = t._ref43ce58940fd9 ?? null),
      (this.var_1662 = i),
      (this.var_2434 = 0));
  }
  setTarget(e, r) {
    this._r58865821e50f02(e, r);
  }
  needsUpdate(e) {
    return this._color.needsUpdate(e);
  }
  update(e, r) {
    let t = this._r58865821e50f02(e, r),
      i = this._color.update(r),
      s = this._r58865821e50f02(e, r);
    return t || i || s;
  }
  _r58865821e50f02(e, r) {
    let t = this._r0826336a1ed27b(e);
    if (t._rebf4ed5e824551 === !0) return this._rd72db813483168(t.rgb, null, r);
    let i = t._ref43ce58940fd9 ?? null;
    if (i == null) return this._rcd2056b05f5be4(t.rgb, null, r);
    let s = this._rc4d64dd740741a(i | 0),
      o = class_3649._rab30f4a9ab01a5(e.color, s);
    return this._rcd2056b05f5be4(o == null ? t.rgb : o >>> 0, s, r);
  }
  _rcd2056b05f5be4(e, r, t) {
    let i = e & 16777215;
    if (this.var_1662 === i && this.var_538 === r) return !1;
    let s = this.var_538;
    return (
      this._color.setTarget(i, t),
      (this.var_538 = r),
      (this.var_1662 = i),
      (this.var_2434 = s != null && r != null ? a.sign((r | 0) - (s | 0)) : 0),
      !0
    );
  }
  _rd72db813483168(e, r, t) {
    let i = e & 16777215;
    return this.var_1662 === i && this.var_538 === r && this._color.value === i
      ? !1
      : (this._color.var_1190(i, t),
        (this.var_538 = r),
        (this.var_1662 = i),
        (this.var_2434 = 0),
        !0);
  }
  _rc4d64dd740741a(e) {
    if (this.var_538 == null) return e;
    if (e === (this.var_538 | 0)) return this.var_538 | 0;
    let r = a.sign(e - (this.var_538 | 0));
    return !this.isAtTarget() && r === this.var_2434
      ? this.var_538 | 0
      : this.isAtTarget()
        ? (this.var_538 | 0) + r
        : e;
  }
  isAtTarget() {
    return this._color.value === this.var_1662;
  }
  _r0826336a1ed27b(e) {
    return class_3649.resolveTargetPaintColor(e.color, e.extra, e.progress, e._r14ffa1101ec65b);
  }
  static sign(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0;
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 59524.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/utils/profiler/tracking/TrackedBitmapData.as
// Obfuscated name: _ide81f73bd853f7

class a extends A {
  static {
    n(this, "TrackedBitmapData");
  }
  static MAX_PIXELS = 16777215;
  static _re8064ae95a4dfc = 8191;
  static MAX_HEIGHT = 8191;
  static _r1db49ff864518e = 1;
  static _r9a77589b56a248 = 1;
  static DEFAULT_SIZE = 4095;
  static ZERO_POINT = new E();
  static _r5170ccc0d4260d = 0;
  static _re4871745e4c9d0 = 0;
  _r7b1f0ae1070500 = !1;
  var_3295;
  static get _ra8aea5ac71b402() {
    return this._r5170ccc0d4260d;
  }
  static get allocatedByteCount() {
    return this._re4871745e4c9d0;
  }
  constructor(e, r, t, i = !0, s = 4294967295) {
    let o = r,
      d = t;
    (o * d > a.MAX_PIXELS
      ? ((o = a.DEFAULT_SIZE), (d = a.DEFAULT_SIZE))
      : ((o = Math.max(a._r1db49ff864518e, Math.min(a._re8064ae95a4dfc, o))),
        (d = Math.max(a._r9a77589b56a248, Math.min(a.MAX_HEIGHT, d)))),
      super(o, d, i, s),
      (a._r5170ccc0d4260d += 1),
      (a._re4871745e4c9d0 += o * d * 4),
      (this.var_3295 = e));
  }
  dispose() {
    this._r7b1f0ae1070500 ||
      ((a._re4871745e4c9d0 -= this.width * this.height * 4),
      (a._r5170ccc0d4260d -= 1),
      (this._r7b1f0ae1070500 = !0),
      (this.var_3295 = null),
      super.dispose());
  }
  clone() {
    if (this._r7b1f0ae1070500) return null;
    let e = new a(this.var_3295, this.width, this.height, this.transparent);
    return (e.copyPixels(this, this.rect, a.ZERO_POINT), e);
  }
}

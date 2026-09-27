// Estratto da HabboAirLauncher.deobf.js, riga 141775.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/SkinContainer.as
// Nome offuscato: _i2170a8d7969160

class a {
  static {
    n(this, "SkinContainer");
  }
  static MAX_STYLE_COUNT = 100;
  static statesByRenderPriority = null;
  _disposed = !1;
  _r513b701139ce7a = new Map();
  _r28b6094b638bed = new Map();
  _r5a7a66b1b09f9e = new Map();
  _r25691a15e7851d = new Map();
  get disposed() {
    return this._disposed;
  }
  constructor() {
    a.statesByRenderPriority == null &&
      (a.statesByRenderPriority = [
        class_1948.const_115,
        class_1948.const_117,
        class_1948.const_92,
        class_1948.const_130,
        class_1948.WINDOW_STATE_HOVERING,
        class_1948.const_138,
        class_1948.WINDOW_STATE_ACTIVE,
        class_1948.WINDOW_STATE_DEFAULT,
      ]);
  }
  dispose() {
    (this._r513b701139ce7a.clear(),
      this._r28b6094b638bed.clear(),
      this._r5a7a66b1b09f9e.clear(),
      this._r25691a15e7851d.clear(),
      (this._disposed = !0));
  }
  addSkinRenderer(e, r, t, i, s, o) {
    let d = this._r513b701139ce7a.get(e) ?? this._ra31a41e815d08e(),
      c = this._r28b6094b638bed.get(e) ?? this._ra31a41e815d08e(),
      f = this._r5a7a66b1b09f9e.get(e) ?? this._ra31a41e815d08e(),
      l = this._r25691a15e7851d.get(e) ?? this._ra31a41e815d08e();
    ((d[r] = i),
      (c[r] = o),
      (f[r] = s),
      (l[r] = t.length > 0 ? t : r.toString()),
      this._r513b701139ce7a.set(e, d),
      this._r28b6094b638bed.set(e, c),
      this._r5a7a66b1b09f9e.set(e, f),
      this._r25691a15e7851d.set(e, l));
  }
  _rb9e325b3a92167(e, r) {
    let t = this._r513b701139ce7a.get(e) ?? null;
    return t == null ? null : (t[r] ?? (r !== class_2025.WINDOW_STYLE_DEFAULT ? (t[class_2025.WINDOW_STYLE_DEFAULT] ?? null) : null));
  }
  _r64eb36c1a02482(e, r) {
    let t = this._r513b701139ce7a.get(e) ?? null;
    return t != null && t[r] != null;
  }
  _ra8001d12e5ca53(e, r) {
    let t = this._r28b6094b638bed.get(e) ?? null;
    return t == null ? null : (t[r] ?? (r !== class_2025.WINDOW_STYLE_DEFAULT ? (t[class_2025.WINDOW_STYLE_DEFAULT] ?? null) : null));
  }
  _r3c1a46cb17e2b3(e, r) {
    let t = this._r5a7a66b1b09f9e.get(e) ?? null;
    return t == null ? null : (t[r] ?? t[0] ?? null);
  }
  _r85ad4c32ef9054(e, r) {
    return (this._r25691a15e7851d.get(e) ?? null)?.[r] ?? null;
  }
  getTheActualState(e, r, t) {
    let i = this._rb9e325b3a92167(e, r);
    if (i == null || a.statesByRenderPriority == null) return 0;
    for (let s of a.statesByRenderPriority) if ((t & s) === s && i.isStateDrawable(s)) return s;
    return 0;
  }
  _ra31a41e815d08e() {
    return new Array(a.MAX_STYLE_COUNT).fill(null);
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 294482.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie8acdd5d1c04f0

class {
  static {
    n(this, "UnkClass_e8acdd");
  }
  _r6076d293c746ce;
  _width = 0;
  _height = 0;
  constructor(e, r) {
    this._r6076d293c746ce = new Array(r);
    for (let t = 0; t < r; t++) this._r6076d293c746ce[t] = new Array(e).fill(null);
    ((this._width = e), (this._height = r));
  }
  clear() {
    for (let e of this._r6076d293c746ce) for (let r = 0; r < this._width; r++) e[r] = null;
  }
  populate(e) {
    this.clear();
    for (let r of e) this._r869fa8ebf63951(r);
  }
  dispose() {
    ((this._r6076d293c746ce = []), (this._width = 0), (this._height = 0));
  }
  _rb286931a473a8f(e, r) {
    return (
      (e = Math.trunc(e)),
      (r = Math.trunc(r)),
      e >= 0 && e < this._width && r >= 0 && r < this._height ? this._r6076d293c746ce[r][e] : null
    );
  }
  _rb73e6dbb4ecb1f(e, r, t) {
    t.isInitialized() &&
      ((e = Math.trunc(e)),
      (r = Math.trunc(r)),
      e >= 0 && e < this._width && r >= 0 && r < this._height && (this._r6076d293c746ce[r][e] = t));
  }
  _r869fa8ebf63951(e) {
    let r = e?.getStringToStringMap();
    if (e == null || r == null || !e.isInitialized()) return;
    let t = e.getLocation();
    if (t == null) return;
    let i = e.getDirection();
    if (i == null) return;
    let s = Math.trunc(t.x),
      o = Math.trunc(t.y),
      { width: d, height: c } = _i4f9c897a784739(r),
      f = 0,
      l = (Math.trunc(i.x + 45) % 360) / 90;
    (l === 1 || l === 3) && ((f = d), (d = c), (c = f));
    for (let b = o; b < o + c; b++)
      for (let _ = s; _ < s + d; _++) {
        let h = this._rb286931a473a8f(_, b);
        (h == null || (h !== e && (h.getLocation()?.z ?? 0) <= t.z)) && this._rb73e6dbb4ecb1f(_, b, e);
      }
  }
  toString() {
    let e = "";
    for (let r = 0; r < this._height; r++) {
      for (let t = 0; t < this._width; t++) {
        let i = this._r6076d293c746ce[r][t];
        e += `${i != null ? i.getId() : "x"}	`;
      }
      e += `
`;
    }
    return e;
  }
}

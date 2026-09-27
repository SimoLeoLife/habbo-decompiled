// Extracted from HabboAirLauncher.deobf.js, line 275305.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4c2be2d686eb96

class a {
  static {
    n(this, "UnkClass_4c2be2_");
  }
  static _rac0b58b7239d2d = -1;
  static _raed9e65b9a1af6 = -1;
  static POOL_SIZE_LIMIT = 6e3;
  static var_3507 = [];
  _id = 0;
  _x = 0;
  _y = 0;
  var_3582 = 1;
  var_2481 = 1;
  var_4219 = 1;
  _r11286ba46e79e3 = a._raed9e65b9a1af6;
  _rcb81340c1ab071 = 0;
  _lastFrame = !1;
  var_119 = !1;
  get id() {
    return this._id >= 0 ? this._id : Math.floor(-this._id * Math.random());
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get repeats() {
    return this.var_3582;
  }
  get _rf7198b7eb0e806() {
    return this.var_2481;
  }
  get _reb08b618cbc8df() {
    return this._lastFrame;
  }
  get remainingFrameRepeats() {
    return this.var_2481 < 0 ? a._rac0b58b7239d2d : this.var_4219;
  }
  set remainingFrameRepeats(e) {
    (e < 0 && (e = 0),
      this.var_2481 > 0 && e > this.var_2481 && (e = this.var_2481),
      (this.var_4219 = e));
  }
  get _r590406d970966f() {
    return this._r11286ba46e79e3;
  }
  get _r6a9e68a64c5a99() {
    return this._rcb81340c1ab071;
  }
  static allocate(e, r, t, i, s, o, d = a._raed9e65b9a1af6, c = 0) {
    let f = a.var_3507.length > 0 ? a.var_3507.pop() : new a();
    return (
      (f.var_119 = !1),
      (f._id = e),
      (f._x = r),
      (f._y = t),
      (f._lastFrame = o),
      (f.var_3582 = i < 1 ? 1 : i),
      (f.var_2481 = s < 0 ? a._rac0b58b7239d2d : s),
      (f.var_4219 = f.var_2481),
      (f._r11286ba46e79e3 = d >= 0 ? d : a._raed9e65b9a1af6),
      (f._rcb81340c1ab071 = d >= 0 ? c : 0),
      f
    );
  }
  recycle() {
    this.var_119 ||
      ((this.var_119 = !0),
      a.var_3507.length < a.POOL_SIZE_LIMIT && a.var_3507.push(this));
  }
}

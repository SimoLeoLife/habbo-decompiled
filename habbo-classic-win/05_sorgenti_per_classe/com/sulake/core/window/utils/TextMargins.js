// Extracted from HabboAirLauncher.deobf.js, line 131536.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/TextMargins.as
// Obfuscated name: _i79cce6d1fef9c7

class a {
  static {
    n(this, "TextMargins");
  }
  _left;
  _right;
  _top;
  _bottom;
  _callback;
  _disposed = !1;
  constructor(e, r, t, i, s) {
    ((this._left = e),
      (this._top = r),
      (this._right = t),
      (this._bottom = i),
      (this._callback = s ?? this.nullCallback));
  }
  get left() {
    return this._left;
  }
  set left(e) {
    ((this._left = e), this._callback(this));
  }
  get right() {
    return this._right;
  }
  set right(e) {
    ((this._right = e), this._callback(this));
  }
  get top() {
    return this._top;
  }
  set top(e) {
    ((this._top = e), this._callback(this));
  }
  get bottom() {
    return this._bottom;
  }
  set bottom(e) {
    ((this._bottom = e), this._callback(this));
  }
  get disposed() {
    return this._disposed;
  }
  get isZeroes() {
    return this._left === 0 && this._right === 0 && this._top === 0 && this._bottom === 0;
  }
  assign(e, r, t, i, s) {
    ((this._left = e),
      (this._top = r),
      (this._right = t),
      (this._bottom = i),
      (this._callback = s ?? this.nullCallback));
  }
  clone(e) {
    return new a(this._left, this._top, this._right, this._bottom, e);
  }
  dispose() {
    ((this._callback = this.nullCallback), (this._disposed = !0));
  }
  nullCallback(e) {}
}

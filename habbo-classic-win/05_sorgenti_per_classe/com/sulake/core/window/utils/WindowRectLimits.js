// Extracted from HabboAirLauncher.deobf.js, line 128792.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/WindowRectLimits.as
// Obfuscated name: _icab678974b870b

class a {
  static {
    n(this, "WindowRectLimits");
  }
  _minWidth = Number.MIN_SAFE_INTEGER;
  _maxWidth = Number.MAX_SAFE_INTEGER;
  var_555 = Number.MIN_SAFE_INTEGER;
  var_537 = Number.MAX_SAFE_INTEGER;
  var_203;
  constructor(e) {
    this.var_203 = e;
  }
  get minWidth() {
    return this._minWidth;
  }
  set minWidth(e) {
    ((this._minWidth = e),
      this._minWidth > Number.MIN_SAFE_INTEGER &&
        !this.var_203.disposed &&
        this.var_203.width < this._minWidth &&
        (this.var_203.width = this._minWidth));
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(e) {
    ((this._maxWidth = e),
      this._maxWidth < Number.MAX_SAFE_INTEGER &&
        !this.var_203.disposed &&
        this.var_203.width > this._maxWidth &&
        (this.var_203.width = this._maxWidth));
  }
  get minHeight() {
    return this.var_555;
  }
  set minHeight(e) {
    ((this.var_555 = e),
      this.var_555 > Number.MIN_SAFE_INTEGER &&
        !this.var_203.disposed &&
        this.var_203.height < this.var_555 &&
        (this.var_203.height = this.var_555));
  }
  get maxHeight() {
    return this.var_537;
  }
  set maxHeight(e) {
    ((this.var_537 = e),
      this.var_537 < Number.MAX_SAFE_INTEGER &&
        !this.var_203.disposed &&
        this.var_203.height > this.var_537 &&
        (this.var_203.height = this.var_537));
  }
  get isEmpty() {
    return (
      this._minWidth === Number.MIN_SAFE_INTEGER &&
      this._maxWidth === Number.MAX_SAFE_INTEGER &&
      this.var_555 === Number.MIN_SAFE_INTEGER &&
      this.var_537 === Number.MAX_SAFE_INTEGER
    );
  }
  setEmpty() {
    ((this._minWidth = Number.MIN_SAFE_INTEGER),
      (this._maxWidth = Number.MAX_SAFE_INTEGER),
      (this.var_555 = Number.MIN_SAFE_INTEGER),
      (this.var_537 = Number.MAX_SAFE_INTEGER));
  }
  limit() {
    this.isEmpty ||
      (this.var_203.width < this._minWidth
        ? (this.var_203.width = this._minWidth)
        : this.var_203.width > this._maxWidth &&
          (this.var_203.width = this._maxWidth),
      this.var_203.height < this.var_555
        ? (this.var_203.height = this.var_555)
        : this.var_203.height > this.var_537 &&
          (this.var_203.height = this.var_537));
  }
  assign(e, r, t, i) {
    ((this._minWidth = e),
      (this._maxWidth = r),
      (this.var_555 = t),
      (this.var_537 = i),
      this.limit());
  }
  clone(e) {
    let r = new a(e);
    return (
      (r._minWidth = this._minWidth),
      (r._maxWidth = this._maxWidth),
      (r.var_555 = this.var_555),
      (r.var_537 = this.var_537),
      r
    );
  }
}

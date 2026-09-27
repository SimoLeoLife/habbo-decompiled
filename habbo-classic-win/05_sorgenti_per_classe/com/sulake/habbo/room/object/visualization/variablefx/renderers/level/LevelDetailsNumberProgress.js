// Extracted from HabboAirLauncher.deobf.js, line 288907.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelDetailsNumberProgress.as
// Obfuscated name: _i570c5c44a0830d

class a {
  static {
    n(this, "LevelDetailsNumberProgress");
  }
  static const_838 = "...";
  static PATH_EPSILON = 1e-4;
  _initialized = !1;
  _rb71ccaa49f48ce = "0";
  _sourcePath = 0;
  var_2152 = 0;
  var_203 = null;
  _rb6703d7f2aaff6 = "0";
  _r6fa81bb6cd114b = 0;
  var_206 = 0;
  var_1190(e) {
    ((this.var_203 = this._re3a84266bbb430(e)),
      (this._r6fa81bb6cd114b = oh.resolveLevelProgressPath(this.var_203._re01717f1b7075f)),
      (this.var_206 = this.normalizeNumber(this.var_203.value)),
      (this._rb6703d7f2aaff6 = this._rb1b9939c976107(this.var_203.maxValue)),
      (this._sourcePath = this._r6fa81bb6cd114b),
      (this.var_2152 = this.var_206),
      (this._rb71ccaa49f48ce = this._rb6703d7f2aaff6),
      (this._initialized = !0));
  }
  setTarget(e, r) {
    if (!this._initialized) {
      this.var_1190(e);
      return;
    }
    let t = this.resolveDisplay(r);
    ((this._sourcePath = this.normalizePath(r)),
      (this.var_2152 = this.normalizeNumber(t.currentText)),
      (this._rb71ccaa49f48ce = t._r95bbec0759cd56),
      (this.var_203 = this._re3a84266bbb430(e)),
      (this._r6fa81bb6cd114b = oh.resolveLevelProgressPath(this.var_203._re01717f1b7075f)),
      (this.var_206 = this.normalizeNumber(this.var_203.value)),
      (this._rb6703d7f2aaff6 = this._rb1b9939c976107(this.var_203.maxValue)));
  }
  resolveDisplay(e) {
    let r = this.normalizePath(e);
    return {
      currentText: this._rb1b9939c976107(this._r079476b0e76360(r)),
      _r95bbec0759cd56: this._rc4e45a0190bed0(r),
    };
  }
  isAtTarget(e) {
    return Math.abs(this.normalizePath(e) - this._r6fa81bb6cd114b) <= a.PATH_EPSILON;
  }
  _r079476b0e76360(e) {
    let r = this._r6fa81bb6cd114b - this._sourcePath;
    if (Math.abs(r) <= a.PATH_EPSILON) return this.var_206;
    let t = Math.max(0, Math.min(1, (e - this._sourcePath) / r)),
      i = this.var_2152 + (this.var_206 - this.var_2152) * t;
    return t >= 1 - a.PATH_EPSILON
      ? this.var_206
      : t <= a.PATH_EPSILON
        ? this.var_2152
        : i | 0;
  }
  _rc4e45a0190bed0(e) {
    let r = this._r6fa81bb6cd114b - this._sourcePath;
    return Math.abs(r) <= a.PATH_EPSILON
      ? this._rb6703d7f2aaff6
      : r > 0
        ? this._r669ca76eacbe7a(e)
        : this._rb74b18138708f8(e);
  }
  _r669ca76eacbe7a(e) {
    let r = Math.floor(this._sourcePath) + 1;
    return e < r - a.PATH_EPSILON
      ? this._rb71ccaa49f48ce
      : e >= this.resolveTargetSegmentStart() - a.PATH_EPSILON
        ? this._rb6703d7f2aaff6
        : a.const_838;
  }
  _rb74b18138708f8(e) {
    let r = Math.floor(this._sourcePath),
      t = Math.floor(this._r6fa81bb6cd114b) + 1;
    return e >= r + a.PATH_EPSILON
      ? this._rb71ccaa49f48ce
      : e <= t + a.PATH_EPSILON
        ? this._rb6703d7f2aaff6
        : a.const_838;
  }
  resolveTargetSegmentStart() {
    return this.var_203._re01717f1b7075f.progress <= a.PATH_EPSILON && this._r6fa81bb6cd114b > 0
      ? this._r6fa81bb6cd114b - 1
      : Math.floor(this._r6fa81bb6cd114b);
  }
  _re3a84266bbb430(e) {
    return {
      maxValue: this.normalizeNumber(e.maxValue),
      _re01717f1b7075f: e._re01717f1b7075f,
      value: this.normalizeNumber(e.value),
    };
  }
  normalizePath(e) {
    return Number.isFinite(e) ? Math.max(0, e) : 0;
  }
  normalizeNumber(e) {
    let r = Number(e);
    return Number.isFinite(r) ? Math.max(0, r | 0) : 0;
  }
  _rb1b9939c976107(e) {
    return String(this.normalizeNumber(e));
  }
}

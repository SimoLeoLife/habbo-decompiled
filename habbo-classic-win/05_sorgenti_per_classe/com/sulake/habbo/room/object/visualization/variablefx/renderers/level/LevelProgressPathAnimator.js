// Estratto da HabboAirLauncher.deobf.js, riga 288850.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelProgressPathAnimator.as
// Nome offuscato: _i79abe72a89ebfc

class a {
  static {
    n(this, "LevelProgressPathAnimator");
  }
  static const_867 = 1e-6;
  _path = new ag(8e-6, 0.02, 1e-4, 6e-6);
  var_203 = new P0(0, 0, !1, null);
  get _levelProgress() {
    return this.displayed.level;
  }
  get _r2d143cbe2547ea() {
    return this.displayed.progress;
  }
  get _rba0bbc86bfbf67() {
    return this._path.value;
  }
  get target() {
    return this.var_203;
  }
  var_1190(e, r) {
    ((this.var_203 = P0.normalize(e)),
      this._path.var_1190(a.resolveLevelProgressPath(this.var_203), r));
  }
  setTarget(e, r) {
    ((this.var_203 = P0.normalize(e)),
      this._path.setTarget(a.resolveLevelProgressPath(this.var_203), r));
  }
  needsUpdate(e, r) {
    return this._path.needsUpdate(e, r);
  }
  update(e) {
    return this._path.update(e);
  }
  get displayed() {
    return a.resolveLevelProgressPathDisplay(this._path.value, this.var_203);
  }
  static resolveLevelProgressSampleProgress(e, r, t, i, s) {
    return s && Number.isFinite(r) && Number.isFinite(t) && Number.isFinite(i) && t === i && r >= i ? 1 : e;
  }
  static resolveLevelProgressPathDisplay(e, r) {
    let t = P0.normalize(r),
      i = this.resolveLevelProgressPath(t);
    if (Math.abs(e - i) <= this.const_867) return { level: t.level, progress: t.progress };
    let s = Number.isFinite(e) ? Math.max(0, e) : 0,
      o = Math.floor(s) | 0,
      d = s - o;
    return d <= this.const_867
      ? { level: o, progress: 0 }
      : 1 - d <= this.const_867
        ? { level: o + 1, progress: 0 }
        : { level: o, progress: d };
  }
  static resolveLevelProgressPath(e) {
    let r = P0.normalize(e);
    return r.isMaxed && r.progress >= 1 ? r.level : r.level + r.progress;
  }
}

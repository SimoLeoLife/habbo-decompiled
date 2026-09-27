// Estratto da HabboAirLauncher.deobf.js, riga 288823.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelProgressPathSample.as
// Nome offuscato: _i15a10bf98354a5

class a {
  constructor(e, r, t, i) {
    this.isMaxed = t;
    ((this.level = a.normalizeLevel(e)),
      (this.progress = a._rd82dbbca0e5e7f(r)),
      (this.maxLevel = a.normalizeMaxLevel(i)));
  }
  static {
    n(this, "LevelProgressPathSample");
  }
  level;
  progress;
  maxLevel;
  static normalize(e) {
    return new a(e.level, e.progress, e.isMaxed, e.maxLevel);
  }
  static normalizeLevel(e) {
    return !Number.isFinite(e) || e < 0 ? 0 : e | 0;
  }
  static _rd82dbbca0e5e7f(e) {
    return Number.isFinite(e) ? Math.max(0, Math.min(1, e)) : 0;
  }
  static normalizeMaxLevel(e) {
    let r = Number(e);
    return e == null || !Number.isFinite(r) || r < 0 ? null : r | 0;
  }
}

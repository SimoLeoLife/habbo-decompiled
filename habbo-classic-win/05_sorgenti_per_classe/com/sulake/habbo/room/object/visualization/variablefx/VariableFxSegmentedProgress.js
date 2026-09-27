// Estratto da HabboAirLauncher.deobf.js, riga 285431.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/VariableFxSegmentedProgress.as
// Nome offuscato: _i86d979200501e4

class {
  static {
    n(this, "VariableFxSegmentedProgress");
  }
  static const_1175 = 0;
  static MAX_SEGMENTS = 100;
  static resolveSegmentOverride(e) {
    let r = class_3649.readExtra(e, "segments");
    if (r == null || r.length === 0) return null;
    let t = Number(r);
    if (!isFinite(t)) return null;
    let i = t | 0;
    return i <= this.const_1175 ? null : Math.min(this.MAX_SEGMENTS, i);
  }
  static resolveSegmentCount(e, r, t) {
    let i = this.resolveSegmentOverride(r);
    return (i ?? t(e)) | 0;
  }
}

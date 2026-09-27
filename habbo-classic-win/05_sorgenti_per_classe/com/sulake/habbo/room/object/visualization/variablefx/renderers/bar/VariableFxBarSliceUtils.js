// Extracted from HabboAirLauncher.deobf.js, line 286137.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/VariableFxBarSliceUtils.as
// Obfuscated name: _ia5e0dd9af591c3

class {
  static {
    n(this, "VariableFxBarSliceUtils");
  }
  static resolveBackgroundSliceLeftWidth(e) {
    return Math.max(0, (e._r6ecc321323dcc8 | 0) + (e.sliceLeftWidth | 0));
  }
  static resolveBackgroundSliceRightWidth(e) {
    let r = (e.width | 0) - (e._r6ecc321323dcc8 | 0) - (e.fillWidth | 0);
    return Math.max(0, r + (e.sliceRightWidth | 0));
  }
}

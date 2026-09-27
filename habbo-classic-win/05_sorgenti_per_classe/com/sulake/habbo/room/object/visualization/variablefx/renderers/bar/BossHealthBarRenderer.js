// Extracted from HabboAirLauncher.deobf.js, line 287075.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/BossHealthBarRenderer.as

class a extends j1 {
  static {
    n(this, "BossHealthBarRenderer");
  }
  static _r4261beeb746a9e = {
    background: "variablefx_boss_health_bar_background",
    bar: "variablefx_boss_health_bar_fill",
    darkening: "variablefx_boss_health_bar_darkening",
    lighting: "variablefx_boss_health_bar_lighting",
    metallic: "variablefx_boss_health_bar_metallic",
  };
  static _rc8a97b68762b73 = {
    _r6ecc321323dcc8: 4,
    _r2a769a55bd8039: 4,
    sliceLeftWidth: 2,
    sliceRightWidth: 2,
  };
  static _r2d02d950311fcf = { leftWidth: 2, rightWidth: 2 };
  get assetNames() {
    return a._r4261beeb746a9e;
  }
  get _re3a188096741de() {
    return a._rc8a97b68762b73;
  }
  get layerDescription() {
    return "boss health bar";
  }
  get _r99bb53ff974bc5() {
    return a._r2d02d950311fcf;
  }
  resolveFrameWidth(e) {
    switch (e) {
      case VariableFxWidth.LARGE:
        return 100;
      case VariableFxWidth.BIG_MAHOOSIVE_CHONKY:
        return 200;
      default:
        return 150;
    }
  }
  resolveIconOverlayLayout(e, r) {
    let t = Ns.resolveAlignment(this.context);
    return t === class_4078.const_27
      ? super.resolveIconOverlayLayout(e, r)
      : Ns.resolveBarIconOverlayLayout(e.width | 0, e.height | 0, r, t, 0);
  }
  drawIconOverlay(e, r, t, i) {
    if (i != null)
      for (let s of t.var_1907) e.drawLayer(i.bitmapData, s.x, s.y, ie.NORMAL, 255);
  }
}

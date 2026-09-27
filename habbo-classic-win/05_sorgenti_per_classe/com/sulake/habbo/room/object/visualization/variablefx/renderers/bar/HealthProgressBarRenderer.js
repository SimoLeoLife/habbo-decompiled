// Extracted from HabboAirLauncher.deobf.js, line 287144.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/HealthProgressBarRenderer.as

class a extends j1 {
  static {
    n(this, "HealthProgressBarRenderer");
  }
  static _r015bc82e9c2967 = {
    background: "variablefx_health_bar_background",
    bar: "variablefx_health_bar_fill",
    darkening: "variablefx_health_bar_darkening",
    lighting: "variablefx_health_bar_lighting",
    metallic: null,
  };
  static _r9c8b8e3bb6ba6a = { leftWidth: 1, rightWidth: 1 };
  get assetNames() {
    return a._r015bc82e9c2967;
  }
  get layerDescription() {
    return "health progress bar";
  }
  get _r99bb53ff974bc5() {
    return a._r9c8b8e3bb6ba6a;
  }
  get barEndWidthPx() {
    return 1;
  }
  get _r93fbe96d078034() {
    return 1;
  }
  get _r3e0f90c727fce9() {
    return !1;
  }
  get barEndSourceRightPaddingPx() {
    return 0;
  }
  get barEndBaseSourceRightPaddingPx() {
    return 1;
  }
  get usesSeparateBarEndOverlaySource() {
    return !0;
  }
  resolveFrameWidth(e) {
    switch (e) {
      case VariableFxWidth.SMALL:
        return 32;
      case VariableFxWidth.LARGE:
        return 64;
      default:
        return 48;
    }
  }
}

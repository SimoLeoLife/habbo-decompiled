// Extracted from HabboAirLauncher.deobf.js, line 285803.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/rendering/VariableFxConfiguredIcon.as
// Obfuscated name: _i9bb55377cc9ec0

class a {
  constructor(e, r) {
    this.bitmapData = e;
    this.definition = r;
  }
  static {
    n(this, "VariableFxConfiguredIcon");
  }
  static ICON_CONFIG_EXTRA_KEY = "icon";
  static ICON_ALIGNMENT_CONFIG_EXTRA_KEY = "icon_alignment";
  static BAR_ICON_OVERLAP_PX = 5;
  static BAR_ICON_CONTENT_Y_OFFSET_PX = 2;
  static resolve(e) {
    let r = this.readExtra(e.config.extra, this.ICON_CONFIG_EXTRA_KEY);
    if (r == null || r.length === 0) return null;
    let t = class_4356.resolve(e.assetProvider, r),
      i = e.assetProvider == null ? null : e.assetProvider._r198ea9f0f21815(t.assetName);
    if (i == null) throw new Error("Missing Variable FX icon layer '" + t.assetName + "'.");
    return new a(i, t);
  }
  static resolveAlignment(e) {
    let r = this.readExtra(e.config.extra, this.ICON_ALIGNMENT_CONFIG_EXTRA_KEY);
    switch (r) {
      case class_4078.RIGHT:
      case class_4078.DOUBLE:
        return r;
      default:
        return class_4078.const_27;
    }
  }
  static resolveBarIconOverlayLayout(e, r, t, i = class_4078.const_27, s = a.BAR_ICON_CONTENT_Y_OFFSET_PX) {
    return tX.resolve({
      alignment: i,
      contentHeight: r,
      contentWidth: e,
      _r9f78194ed5fe8a: s,
      _r1ee47a9fd26e90: t == null ? 0 : t.bitmapData.height,
      _rbeebc213ea8e11: t == null ? 0 : t.definition.offsetX,
      _r8556032d955352: t == null ? 0 : t.definition.offsetY,
      _r0e0e79c17c78c9: t == null ? 0 : t.bitmapData.width,
      _r022a5c6ff560a1: this.BAR_ICON_OVERLAP_PX,
    });
  }
  static readExtra(e, r) {
    return e == null || e.getValue(r) == null ? null : String(e.getValue(r)).replace(/^\s+|\s+$/g, "");
  }
}

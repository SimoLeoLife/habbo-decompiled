// Extracted from HabboAirLauncher.deobf.js, line 349442.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/VolterMiniAssetIconButtonPreset.as
// Obfuscated name: _i015b170543ce89

class a extends Tg {
  static {
    n(this, "VolterMiniAssetIconButtonPreset");
  }
  static COLOR_INACTIVE = 2236962;
  static COLOR_YELLOW_HOVERED = 5527335;
  static COLOR_BLUE_HOVERED = 3356769;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t) {
    super._re7a03a855dfd32(e, r, t);
  }
  get hoverColor() {
    if (Tg._rfb6f3d8bc67b72.indexOf(this._assetName) !== -1) return a.COLOR_YELLOW_HOVERED;
    if (Tg._r930f5fd2c0242f.indexOf(this._assetName) !== -1) return a.COLOR_BLUE_HOVERED;
    throw new Error("Color for asset not configured");
  }
  updateUI() {
    let e = a.COLOR_INACTIVE;
    (this.var_1463 ? (e = this.hoverColor) : this.selected && (e = this.selectedColor),
      (e |= 4278190080),
      (this.clickArea.color = e),
      (this.marginRightBg.color = e),
      (this._r5c504e9675bd3e.color = e));
  }
}

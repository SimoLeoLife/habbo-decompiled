// Extracted from HabboAirLauncher.deobf.js, line 346445.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/PressedButtonMiniAssetIconButtonPreset.as
// Obfuscated name: _i38048c6c00a026

class extends Tg {
  static {
    n(this, "PressedButtonMiniAssetIconButtonPreset");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t) {
    (super._re7a03a855dfd32(e, r, t),
      this.clickArea.addEventListener(u.OUT, this.maybeCancelEvent),
      this.clickArea.addEventListener(u.UP, this.maybeCancelEvent),
      this.updateUI());
  }
  maybeCancelEvent = n((...e) => {
    let r = e[0];
    (r?.type === u.OUT && this.selected && r.preventWindowOperation(),
      r?.type === u.UP && (this._r795b4c8dc8aead(), r.preventWindowOperation()));
  }, "maybeCancelEvent");
  updateUI() {
    if (
      (this.clickArea.setStateFlag(class_1948.const_92, this.selected),
      this.clickArea.setStateFlag(class_1948.WINDOW_STATE_HOVERING, this.var_1463),
      !this.var_1463 && !this.selected)
    ) {
      this.clickArea.color = 16777215;
      return;
    }
    let e = this.selectedColor,
      r = 1.38;
    (this.var_1463 && !this.selected && (r = 1.6),
      (e = we._r5f42ff539f0f87(e, r)),
      (this.clickArea.color = e));
  }
}

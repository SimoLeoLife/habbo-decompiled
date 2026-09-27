// Estratto da HabboAirLauncher.deobf.js, riga 345682.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/CollapseExpandSectionButtonPreset.as
// Nome offuscato: _i75df1570b9d891

class extends WiredUIPreset {
  static {
    n(this, "CollapseExpandSectionButtonPreset");
  }
  var_133;
  _callback = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._callback = e),
      (this.var_133 = this.var_40.createExpandCollapseSectionRegion()),
      (this.upArrow.visible = r),
      (this.downArrow.visible = !r),
      this.var_133.addEventListener(u.CLICK, this.onButtonClicked));
  }
  get window() {
    return this.var_133;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this.var_133.width;
  }
  get _r24732866aad4a1() {
    return this.upArrow.visible;
  }
  onButtonClicked = n((...e) => {
    let r = !this._r24732866aad4a1;
    ((this.upArrow.visible = r), (this.downArrow.visible = !r), this._callback?.(r));
  }, "onButtonClicked");
  get upArrow() {
    return this.var_133.findChildByName("up_arrow");
  }
  get downArrow() {
    return this.var_133.findChildByName("down_arrow");
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this.var_133.dispose(),
      (this.var_133 = null),
      (this._callback = null));
  }
}

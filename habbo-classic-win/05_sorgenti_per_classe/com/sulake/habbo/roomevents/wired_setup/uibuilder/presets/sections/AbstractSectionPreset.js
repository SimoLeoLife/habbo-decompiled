// Extracted from HabboAirLauncher.deobf.js, line 350642.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/AbstractSectionPreset.as
// Obfuscated name: _i0ce74aac8dd224

class extends WiredUIPreset {
  static {
    n(this, "AbstractSectionPreset");
  }
  var_967 = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(...e) {}
  initializeSection(e, r, t = null) {
    this.var_967 = this.var_102.createSection(e, r, t);
  }
  get window() {
    return this.var_967.window;
  }
  set sectionTitle(e) {
    this.var_967.titleText = e;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_967.resizeToWidth(e));
  }
  set splitterVisible(e) {
    this.var_967.splitterVisible = e;
  }
  get childPresets() {
    return [this.var_967];
  }
  dispose() {
    this.disposed || (super.dispose(), (this.var_967 = null));
  }
}

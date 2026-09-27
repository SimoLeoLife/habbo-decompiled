// Extracted from HabboAirLauncher.deobf.js, line 351096.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/VariablePlaceholderModeSection.as
// Obfuscated name: _i7316f4819fa395

class extends AbstractSectionPreset {
  static {
    n(this, "VariablePlaceholderModeSection");
  }
  _options;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e) {
    ((this._options = this.var_102.createRadioGroup([
      new RadioButtonParam(0, this.l("texts.variable_display_type.1")),
      new RadioButtonParam(
        1,
        this.l("texts.variable_display_type.2"),
        null,
        this.var_102
          .createText(this.l("texts.variable_display_type.2.info"))
          .halfBlend()
          .noDisable(),
      ),
    ])),
      this.initializeSection(e, this._options));
  }
  get isTextMode() {
    return this._options.selected === 1;
  }
  set isTextMode(e) {
    this._options.selected = e ? 1 : 0;
  }
  get(e) {
    return this._options.get(e);
  }
  dispose() {
    this.disposed || (super.dispose(), (this._options = null));
  }
}

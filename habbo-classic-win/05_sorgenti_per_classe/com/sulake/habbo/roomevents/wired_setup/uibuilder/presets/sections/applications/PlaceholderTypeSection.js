// Extracted from HabboAirLauncher.deobf.js, line 351372.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/sections/applications/PlaceholderTypeSection.as
// Obfuscated name: _i70191c6625757f

class extends AbstractSectionPreset {
  static {
    n(this, "PlaceholderTypeSection");
  }
  _options;
  var_2151;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e = null) {
    ((this.var_2151 = this.var_102.createNamedTextInput(
      new it("", 5, null, 55),
      this.l("texts.select_delimiter"),
    )),
      (e = e == null ? "" : `${e}.`),
      (this._options = this.var_102.createRadioGroup([
        new RadioButtonParam(0, this.l(`texts.placeholder_type.${e}1`)),
        new RadioButtonParam(1, this.l(`texts.placeholder_type.${e}2`), null, this.var_2151),
      ])),
      this.initializeSection(this.l("texts.placeholder_type"), this._options));
  }
  get isShowMultiple() {
    return this._options.selected === 1;
  }
  set isShowMultiple(e) {
    this._options.selected = e ? 1 : 0;
  }
  get delimiter() {
    return this.isShowMultiple ? this.var_2151.text : "";
  }
  set delimiter(e) {
    this.var_2151.text = e;
  }
  get(e) {
    return this._options.get(e);
  }
  dispose() {
    this.disposed || (super.dispose(), (this._options = null), (this.var_2151 = null));
  }
}

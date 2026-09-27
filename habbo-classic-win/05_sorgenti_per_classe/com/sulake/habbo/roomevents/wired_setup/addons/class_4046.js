// Extracted from HabboAirLauncher.deobf.js, line 361764.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/class_4046.as
// Obfuscated name: _i79d61480778b62

class extends DefaultAddonType {
  static {
    n(this, "class_4046");
  }
  _textInput = null;
  get code() {
    return AddonCodes.VARIABLE_TEXT_CONVERTER;
  }
  onEditStart(e) {
    this._textInput.text = e._r7e8836fc336e43;
  }
  readStringParamFromForm() {
    return this._textInput.text;
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    this._textInput = e._r1cb85c1e1927d4(
      new TextAreaParam(100, -1, 30, -1, 1e3, "", this.l("variables.connect_text.caption")),
    );
    let i = e.createSection(this.l("variables.connect_text.title"), this._textInput);
    t.addElements(i);
  }
}

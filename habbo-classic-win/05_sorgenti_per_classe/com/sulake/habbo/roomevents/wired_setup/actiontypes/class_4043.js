// Extracted from HabboAirLauncher.deobf.js, line 364194.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_4043.as
// Obfuscated name: _i886a401bdc468c

class extends DefaultActionType {
  static {
    n(this, "class_4043");
  }
  _type = null;
  _height = null;
  get code() {
    return ActionTypeCodes.OVERRIDE_HEIGHT;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this._type = e.createRadioGroup(
      [
        new RadioButtonParam(0, "${wiredfurni.params.override_height.type.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.override_height.type.1}"),
      ],
      this._r1bf0c7f4b5e97a,
    )),
      (this._height = e.createSliderSection(
        "wiredfurni.params.override_height.height",
        "",
        SliderSection.CONVERTER_ECHO,
        0,
        8e3,
        1,
      )),
      t.addElements(
        e.createSection("${wiredfurni.params.override_height.type}", this._type),
        this._height,
      ));
  }
  onEditStart(e) {
    ((this._height.value = e.getInt(0)),
      (this._type.selected = e.getBoolean(1) ? 1 : 0),
      this._r1bf0c7f4b5e97a(this._type.selected));
  }
  readIntParamsFromForm() {
    return [this._height.value, this._type.selected];
  }
  _r1bf0c7f4b5e97a = n((e) => {
    this._height.disabled = e === 1;
  }, "_r1bf0c7f4b5e97a");
}

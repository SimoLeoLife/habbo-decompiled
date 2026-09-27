// Estratto da HabboAirLauncher.deobf.js, riga 363343.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3874.as
// Nome offuscato: _i2bfb55afd6852d

class extends DefaultActionType {
  static {
    n(this, "class_3874");
  }
  var_2503 = null;
  _priority = null;
  _type = null;
  get code() {
    return ActionTypeCodes.GIVE_EFFECT;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2503 = e.createNumberInput(new NumberInputParam(13, 0, 1e4))),
      (this._priority = e.createNumberInput(new NumberInputParam(2, 0, 2))),
      (this._type = e.createRadioGroup(
        [
          new RadioButtonParam(0, "${wiredfurni.params.give_effect.type.0}"),
          new RadioButtonParam(1, "${wiredfurni.params.give_effect.type.1}"),
        ],
        null,
        2,
      )),
      t.addElements(
        e.createSection("${wiredfurni.params.give_effect.id}", this.var_2503),
        e.createSection("${wiredfurni.params.give_effect.priority}", this._priority),
        e.createSection("${wiredfurni.params.give_effect.type}", this._type),
      ));
  }
  onEditStart(e) {
    ((this.var_2503.value = e.getInt(0)),
      (this._priority.value = e.getInt(1)),
      (this._type.selected = e.getBoolean(2) ? 1 : 0));
  }
  readIntParamsFromForm() {
    return [this.var_2503.value, this._priority.value, this._type.selected];
  }
}

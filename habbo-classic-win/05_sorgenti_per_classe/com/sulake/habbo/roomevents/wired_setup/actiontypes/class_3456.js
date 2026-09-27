// Estratto da HabboAirLauncher.deobf.js, riga 365150.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/class_3456.as
// Nome offuscato: _ibc5d69e50e2d07

class extends DefaultActionType {
  static {
    n(this, "class_3456");
  }
  _section1 = null;
  var_3719 = null;
  _section2 = null;
  var_3316 = null;
  get code() {
    return ActionTypeCodes.var_5874;
  }
  get negativeCode() {
    return ActionTypeCodes.var_5933;
  }
  readIntParamsFromForm() {
    return [this.var_3719.selectedId];
  }
  readStringParamFromForm() {
    return this.var_3316.text;
  }
  onEditStart(e) {
    ((this.var_3719.selectedId = e.getInt(0)),
      (this.var_3316.text = e._r7e8836fc336e43));
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [];
    (i.push(new ExpandableDropdownOption(0, "${wiredfurni.params.write_to_logs.log_level.0}")),
      i.push(new ExpandableDropdownOption(1, "${wiredfurni.params.write_to_logs.log_level.1}")),
      i.push(new ExpandableDropdownOption(2, "${wiredfurni.params.write_to_logs.log_level.2}")),
      i.push(new ExpandableDropdownOption(3, "${wiredfurni.params.write_to_logs.log_level.3}")),
      (this.var_3719 = e.createDropdown(
        new DropdownParam("${wiredfurni.params.write_to_logs.log_level.title}", i),
      )),
      (this._section1 = e.createSection(
        "${wiredfurni.params.write_to_logs.log_level.title}",
        this.var_3719,
      )),
      (this.var_3316 = e._r178edc7e663bd7(new it("", 400))),
      (this._section2 = e.createSection(
        "${wiredfurni.params.write_to_logs.log_message.title}",
        this.var_3316,
      )),
      t.addElements(this._section1, this._section2));
  }
}

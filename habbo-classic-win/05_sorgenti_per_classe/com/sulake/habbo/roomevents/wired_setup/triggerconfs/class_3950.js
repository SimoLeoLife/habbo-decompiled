// Extracted from HabboAirLauncher.deobf.js, line 368626.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_3950.as
// Obfuscated name: _i0e7cc3453dd806

class extends DefaultTriggerConf {
  static {
    n(this, "class_3950");
  }
  var_2635 = null;
  var_2518 = null;
  _options = null;
  get code() {
    return TriggerConfCodes.AVATAR_SAYS_SOMETHING;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.var_2635 = e._r178edc7e663bd7(
      new it("", 1e3, null, -1, null, !0, this.loc("wiredfurni.tooltip.chatinput")),
    )),
      (this.var_2518 = e.createRadioGroup(
        [new RadioButtonParam(0, this.l("chatcontains")), new RadioButtonParam(1, this.l("exactmatch")), new RadioButtonParam(2, this.l("allmatch"))],
        this.onTriggerTypeChange,
      )),
      (this._options = e.createCheckboxGroup([
        new CheckboxOptionParam(this.l("chat.hide"), 1),
        new CheckboxOptionParam(this.l("chat.onlyowner"), 0),
      ])),
      t.addElements(
        e.createSection(this.l("whatissaid"), this.var_2635),
        e.createSection(this.l("chattriggertype"), this.var_2518),
        e.createSection(this.l("select_options"), this._options),
      ));
  }
  readIntParamsFromForm() {
    return [
      this._options.get(0).selected ? 1 : 0,
      this.var_2518.selected,
      this._options.get(1).selected ? 1 : 0,
    ];
  }
  readStringParamFromForm() {
    return this.var_2635.text;
  }
  onEditStart(e) {
    this.var_2635.text = e._r7e8836fc336e43;
    let r = e.intParams;
    ((this._options.get(0).selected = r[0] !== 0),
      (this._options.get(1).selected = r[2] !== 0),
      (this.var_2518.selected = r[1]),
      this.onTriggerTypeChange(this.var_2518.selected));
  }
  onTriggerTypeChange = n((e) => {
    we.disableSection(this.var_2635.window, e === 2);
  }, "onTriggerTypeChange");
}

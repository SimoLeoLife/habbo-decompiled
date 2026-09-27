// Estratto da HabboAirLauncher.deobf.js, riga 369186.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/class_4091.as
// Nome offuscato: _if1b5573894ef62

class extends DefaultTriggerConf {
  static {
    n(this, "class_4091");
  }
  _options = null;
  get code() {
    return TriggerConfCodes.USER_CLICKS_USER;
  }
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = [
        new CheckboxOptionParam(this.loc("wiredfurni.params.click_user.block_menu_open")),
        new CheckboxOptionParam(this.loc("wiredfurni.params.click_user.do_not_rotate")),
      ],
      s = e.createCheckboxGroup(i),
      o = e.createSection(this.loc("wiredfurni.params.click_user.settings"), s);
    (t.addElements(o), (this._options = s));
  }
  onEditStart(e) {
    for (let r = 0; r < this._options.options; r += 1)
      this._options.get(r).selected = e.getBoolean(r);
  }
  readIntParamsFromForm() {
    let e = [];
    for (let r = 0; r < this._options.options; r += 1) e.push(this._options.get(r).selected ? 1 : 0);
    return e;
  }
}

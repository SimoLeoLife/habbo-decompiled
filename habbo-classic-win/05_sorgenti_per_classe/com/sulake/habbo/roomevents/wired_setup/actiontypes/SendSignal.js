// Extracted from HabboAirLauncher.deobf.js, line 364895.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/actiontypes/SendSignal.as
// Obfuscated name: _i0f98dc25570958

class extends DefaultActionType {
  static {
    n(this, "SendSignal");
  }
  method_20 = null;
  _rd569aafdd01299 = !1;
  get code() {
    return ActionTypeCodes.SEND_SIGNAL;
  }
  get negativeCode() {
    return ActionTypeCodes.NEG_SEND_SIGNAL;
  }
  get inputMode() {
    return DefaultActionType.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    ((this.method_20 = e.createCheckboxGroup(
      [new CheckboxOptionParam(this.l("signal.split_furni")), new CheckboxOptionParam(this.l("signal.split_users"))],
      this.onChangeCheckbox,
    )),
      t.addElements(e.createSection(this.l("signal.send_options"), this.method_20)));
  }
  onEditStart(e) {
    ((this._rd569aafdd01299 = !0),
      (this.method_20.get(0).selected = e.getBoolean(0)),
      (this.method_20.get(1).selected = e.getBoolean(1)),
      (this._rd569aafdd01299 = !1));
  }
  readIntParamsFromForm() {
    return [this.method_20.get(0).selected ? 1 : 0, this.method_20.get(1).selected ? 1 : 0];
  }
  furniSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.furni.title.signal_antenna"
      : "wiredfurni.params.sources.furni.title.signal_forward";
  }
  userSelectionTitle(e) {
    return "wiredfurni.params.sources.users.title.signal_forward";
  }
  onChangeCheckbox = n((e, r) => {
    this._rd569aafdd01299 ||
      (r &&
        this._r41f5cc7d3516ce.windowManager.confirm(
          "${wiredfurni.params.signal_warning.title}",
          "${wiredfurni.params.signal_warning.desc}",
          0,
          (t, i) => {
            (t.dispose(), i.type !== y.const_1300 && (this.method_20.get(e).selected = !1));
          },
        ));
  }, "onChangeCheckbox");
}

// Extracted from HabboAirLauncher.deobf.js, line 353568.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxAudienceVariablePopup.as
// Obfuscated name: _i5265c346ac78f8

class a extends WiredUIPreset {
  static {
    n(this, "VariableFxAudienceVariablePopup");
  }
  static WIDTH = 300;
  static DESKTOP_WINDOW_LAYER = 1;
  var_2531 = null;
  var_1341 = !1;
  var_412;
  var_1657;
  _selectValueGroup;
  var_1348;
  var_1979;
  var_533;
  var_2064;
  var_3449;
  var_295;
  var_3270;
  _re7a03a855dfd32(e) {
    ((this.var_2531 = e),
      (this.var_1657 = this.var_102.createVariablePicker(
        a.variableSelectionFilter,
        this._r74c75e64e8d8be,
      )),
      (this._selectValueGroup = this.var_102.createCheckboxGroup(
        [new CheckboxOptionParam("${wiredfurni.params.variablefx.audience_popup.select_value}", 0)],
        this._r58901063ddc901,
      )),
      (this.var_1348 = this._selectValueGroup.get(0)),
      (this.var_1979 = this.var_102.createNamedNumberInput(
        new NumberInputParam(0, -2147483648, 2147483647, 45, 0, !1, !0),
        "${wiredfurni.params.variablefx.audience_popup.value}",
      )),
      (this.var_533 = this.var_102.createButton(
        this.loc("wiredfurni.params.variablefx.audience_popup.save"),
        this._rf7f875b488f891,
      )),
      (this.var_2064 = this.var_102.createButton(this.loc("cancel"), this.hide)),
      (this.var_3449 = this.var_102.createButtonRow([
        this.var_533,
        this.var_2064,
      ])),
      (this.var_295 = this.var_102.createSimpleListView(!0, [
        this.var_1657,
        this._selectValueGroup,
        this.var_1979,
      ])),
      (this.var_295.spacing = this.var_40._r249f7dc0054eba),
      (this.var_3270 = this.var_102._r5ce8ba4791791e(this.var_295, 8, 8, 8, 8)),
      (this.var_412 = this.var_102._r2c9ac233cf1a70(
        [this.var_3270, this.var_3449],
        this.hide,
      )),
      (this.var_412.title = this.loc("wiredfurni.params.variablefx.audience_popup.title")),
      this.var_412.resizeToWidth(a.WIDTH),
      (this.var_412.window.visible = !1));
  }
  open(e, r, t, i) {
    ((this.var_1341 = !0),
      this.var_1657.init(e, r, Ve.USER_SOURCE),
      (this.var_1348.selected = t),
      (this.var_1979.value = i),
      (this.var_1341 = !1),
      this.refreshValueControls(),
      this.show());
  }
  show() {
    (this.var_412.window.parent == null &&
      this._roomEvents.windowManager
        .getDesktop(a.DESKTOP_WINDOW_LAYER)
        .addChild(this.var_412.window),
      (this.var_412.window.visible = !0),
      this.var_412.window.center(),
      this.var_412.window.activate());
  }
  hide = n(() => {
    (this.var_412.window.parent != null &&
      this._roomEvents.windowManager
        .getDesktop(a.DESKTOP_WINDOW_LAYER)
        .removeChild(this.var_412.window),
      (this.var_412.window.visible = !1));
  }, "hide");
  _rf7f875b488f891 = n(() => {
    let e = this.var_1657.selected;
    e != null &&
      (this.var_2531?.(
        this.var_1657.finalizeSelection,
        this.var_1348.selected && e.hasValue,
        this.var_1979.value,
      ),
      this.hide());
  }, "_rf7f875b488f891");
  _r74c75e64e8d8be = n((e) => {
    this.var_1341 || this.refreshValueControls();
  }, "_r74c75e64e8d8be");
  _r58901063ddc901 = n((e, r) => {
    this.var_1341 || this.refreshValueControls();
  }, "_r58901063ddc901");
  refreshValueControls() {
    let e = this.var_1657.selected,
      r = e != null && e.hasValue;
    (!r &&
      this.var_1348.selected &&
      ((this.var_1341 = !0), (this.var_1348.selected = !1), (this.var_1341 = !1)),
      (this.var_1348.disabled = !r),
      (this.var_1979.disabled = !r || !this.var_1348.selected),
      (this.var_533.disabled = e == null));
  }
  static variableSelectionFilter(e) {
    return !0;
  }
  get window() {
    return this.var_412.window;
  }
  get childPresets() {
    return [this.var_412];
  }
  dispose() {
    this.disposed ||
      (this.hide(),
      super.dispose(),
      (this.var_2531 = null),
      (this.var_412 = null),
      (this.var_1657 = null),
      (this._selectValueGroup = null),
      (this.var_1348 = null),
      (this.var_1979 = null),
      (this.var_533 = null),
      (this.var_2064 = null),
      (this.var_3449 = null),
      (this.var_295 = null),
      (this.var_3270 = null));
  }
}

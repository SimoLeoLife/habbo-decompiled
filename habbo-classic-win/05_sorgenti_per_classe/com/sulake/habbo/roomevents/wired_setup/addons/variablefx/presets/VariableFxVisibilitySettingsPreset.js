// Estratto da HabboAirLauncher.deobf.js, riga 354257.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/variablefx/presets/VariableFxVisibilitySettingsPreset.as
// Nome offuscato: _i208b167747f3d4

class a extends WiredUIPreset {
  static {
    n(this, "VariableFxVisibilitySettingsPreset");
  }
  var_263;
  _state = null;
  _variables = null;
  var_1341 = !1;
  var_967;
  _audiencePopup;
  var_1756;
  var_2477;
  var_2900;
  var_2004;
  var_2177;
  var_3439;
  var_3374;
  var_2173;
  _re7a03a855dfd32(e) {
    ((this.var_263 = e),
      (this.var_1756 = this.var_102._r066cec9fb0ddf0(
        new DropdownParam("", this.createAudienceOptions(), this._rdcc8cfe3390cf7),
        "${wiredfurni.params.variablefx.visibility.audience}",
      )),
      (this._audiencePopup = this.var_102._re34b3a159f26df(this._r25fe5e8bca6567)),
      (this.var_2173 = this.var_102.createCheckboxGroup(
        [
          new CheckboxOptionParam("${wiredfurni.params.variablefx.update_mask.1}", 0),
          new CheckboxOptionParam("${wiredfurni.params.variablefx.update_mask.2}", 1),
          new CheckboxOptionParam("${wiredfurni.params.variablefx.update_mask.3}", 2),
          new CheckboxOptionParam("${wiredfurni.params.variablefx.update_mask.4}", 3),
        ],
        this._r58a8df6de4a51a,
        2,
      )),
      (this.var_2177 = this.var_102.createCheckboxGroup(
        [new CheckboxOptionParam("${wiredfurni.params.variablefx.mouse_hover}", 0)],
        this._r58a8df6de4a51a,
      )),
      (this.var_2004 = this.var_102.createNamedNumberInput(
        new NumberInputParam(3e3, 1500, 2e4, 45),
        "${wiredfurni.params.variablefx.show_duration}",
      )),
      (this.var_2004._r53e08e0209a3cd = this._rcc870f297bae55),
      (this.var_3439 = this.var_102._ra6e545ffa959b0()),
      (this.var_3374 = this.var_102._ra6e545ffa959b0()));
    let r = this.var_102.createSimpleListView(!0, [
      this.var_2173,
      this.var_3439,
      this.var_2004,
      this.var_3374,
      this.var_2177,
    ]);
    ((this.var_2900 = this.var_102._r5ce8ba4791791e(
      r,
      6,
      5,
      6,
      5,
      this.var_40.createBorder(),
    )),
      (this.var_2477 = this.var_102.createRadioGroup(
        [
          new RadioButtonParam(_ic0d82f49e1914d.ALWAYS, "${wiredfurni.params.variablefx.show_mode.always}"),
          new RadioButtonParam(
            _ic0d82f49e1914d._r2c1030fcb2aef2,
            "${wiredfurni.params.variablefx.show_mode.when_variable_changes}",
            null,
            this.var_2900,
          ),
          new RadioButtonParam(_ic0d82f49e1914d.NEVER, "${wiredfurni.params.variablefx.show_mode.never}"),
        ],
        this._r25a898161a00ff,
      )),
      (this.var_967 = this.var_102.createSection(
        "${wiredfurni.params.variablefx.visibility}",
        this.var_102.createSimpleListView(!0, [this.var_2477, this.var_1756]),
        Hr.COLLAPSED,
      )));
  }
  init(e, r) {
    ((this._state = e), (this._variables = r), this.refreshForState(e));
  }
  applyToState(e) {
    ((e.visibility = this.var_1756.selectedId),
      (e._r09ab560170f112 = this.var_2477.selected),
      (e._rb94727c3b64fc3 = this.var_2177.get(0).selected),
      (e.var_620 = this.var_2173.mask),
      (e.showDuration = this.var_2004.value));
  }
  refreshForState(e) {
    ((this.var_1341 = !0),
      this.var_1756.reinit(this.createAudienceOptions(), e.visibility),
      (this.var_2477.selected = e._r09ab560170f112),
      (this.var_2177.get(0).selected = e._rb94727c3b64fc3),
      (this.var_2173.mask = e.var_620),
      (this.var_2004.value = e.showDuration),
      (this.var_1756.visible = !0),
      (this.var_2900.disabled = e._r09ab560170f112 !== _ic0d82f49e1914d._r2c1030fcb2aef2),
      (this.var_1341 = !1));
  }
  _rdcc8cfe3390cf7 = n((e) => {
    if (this.var_1341) return;
    let r = e;
    if (r != null && a.isVariableAudience(r.id)) {
      (this._audiencePopup.open(
        this._variables,
        this._state._r1093f559e954fa,
        this._state.visibility === class_4330.const_445,
        this._state._rfcfc5eaf98a6f8,
      ),
        this.refreshForState(this._state));
      return;
    }
    this._r7a68ed99109069();
  }, "_rdcc8cfe3390cf7");
  _r25fe5e8bca6567 = n((e, r, t) => {
    ((this._state.visibility = r ? class_4330.const_445 : class_4330.name_11),
      (this._state._r1093f559e954fa = e),
      (this._state._rfcfc5eaf98a6f8 = r ? t : 0),
      this._state.sanitize(),
      this.refreshForState(this._state),
      this.var_263._r58c377c82ec4b6(this._state, !1));
  }, "_r25fe5e8bca6567");
  _r25a898161a00ff = n((e) => {
    this._r7a68ed99109069();
  }, "_r25a898161a00ff");
  _r58a8df6de4a51a = n((e, r) => {
    this._r7a68ed99109069();
  }, "_r58a8df6de4a51a");
  _rcc870f297bae55 = n((e) => {
    this._r7a68ed99109069();
  }, "_rcc870f297bae55");
  _r7a68ed99109069() {
    this.var_1341 ||
      (this.applyToState(this._state),
      this._state.sanitize(),
      this.refreshForState(this._state),
      this.var_263._r58c377c82ec4b6(this._state, !1));
  }
  get window() {
    return this.var_967.window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), this.var_967.resizeToWidth(e));
  }
  get childPresets() {
    return [this.var_967, this._audiencePopup];
  }
  _r54acab9fc519bc() {
    this._audiencePopup.hide();
  }
  createAudienceOptions() {
    let e = [];
    return (
      (this._state == null || this._state.sourceType === Ve.USER_SOURCE) &&
        (e.push(new ExpandableDropdownOption(class_4330.ONLY_USER, "${wiredfurni.params.variablefx.visibility.only_user}")),
        e.push(new ExpandableDropdownOption(class_4330.GAME_TEAM, "${wiredfurni.params.variablefx.visibility.game_team}"))),
      e.push(new ExpandableDropdownOption(this._r87df211fdf1b59, this.variableAudienceOptionText())),
      e.push(new ExpandableDropdownOption(class_4330.const_120, "${wiredfurni.params.variablefx.visibility.everyone}")),
      e
    );
  }
  get _r87df211fdf1b59() {
    return this._state != null && this._state.visibility === class_4330.const_445
      ? class_4330.const_445
      : class_4330.name_11;
  }
  variableAudienceOptionText() {
    if (this._state == null || this._state._r1093f559e954fa == null || this._state._r1093f559e954fa === "")
      return this.loc("wiredfurni.params.variablefx.visibility.has_variable");
    let e = this.audienceVariable;
    if (e == null)
      return this.localizations.getLocalizationWithParams(
        "wiredfurni.params.variablefx.visibility.has_variable.named",
        "",
        "variable",
        this._state._r1093f559e954fa,
      );
    if (this._state.visibility === class_4330.const_445) {
      let r = we.variableValueWithString(e, this._state._rfcfc5eaf98a6f8) ?? String(this._state._rfcfc5eaf98a6f8);
      return this.localizations.getLocalizationWithParams(
        "wiredfurni.params.variablefx.visibility.has_variable.value",
        "",
        "variable",
        e.variableName,
        "value",
        r,
      );
    }
    return this.localizations.getLocalizationWithParams(
      "wiredfurni.params.variablefx.visibility.has_variable.named",
      "",
      "variable",
      e.variableName,
    );
  }
  get audienceVariable() {
    return this._variables == null
      ? null
      : we._r20e36218db9fd8(this._variables.variables, this._state._r1093f559e954fa);
  }
  static isVariableAudience(e) {
    return e === class_4330.name_11 || e === class_4330.const_445;
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      (this.var_263 = null),
      (this._state = null),
      (this._variables = null),
      (this.var_967 = null),
      (this._audiencePopup = null),
      (this.var_1756 = null),
      (this.var_2477 = null),
      (this.var_2900 = null),
      (this.var_2004 = null),
      (this.var_2177 = null),
      (this.var_3439 = null),
      (this.var_3374 = null),
      (this.var_2173 = null));
  }
}

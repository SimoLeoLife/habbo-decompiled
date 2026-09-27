// Estratto da HabboAirLauncher.deobf.js, riga 369216.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/triggerconfs/VariableUpdate.as
// Nome offuscato: _if3c8a12e723098

class a extends DefaultTriggerConf {
  static {
    n(this, "VariableUpdate");
  }
  static _r5b9d344cee7098 = 0;
  static _rfc595473c6cb93 = 1;
  static _rd9b9eed504b7d7 = 2;
  static _r51da77d7de53d2 = 0;
  static _rf531a06cb570e1 = 1;
  static _rca3bfed96b4304 = 2;
  static const_1407 = 3;
  static CHANGE_ORIGIN_OPTIONS = 4;
  static _r56358b41b35313 = [a._rca3bfed96b4304, a.const_1407];
  _section1 = null;
  _picker = null;
  _optionGroup = null;
  _subOptionGroup = null;
  _changeOriginGroup = null;
  get code() {
    return TriggerConfCodes.VARIABLE_UPDATE;
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0],
      t = Ve.USER_SOURCE,
      i = we._r20e36218db9fd8(e._r09c1c618a6015f._r491f74a2c22d93.variables ?? [], r);
    (i != null && (t = i.variableTarget),
      this._section1.sourceType().select(t),
      this._picker.init(e._r09c1c618a6015f._r491f74a2c22d93, r, t),
      this.onChangeVariable(this._picker.selected),
      (this._optionGroup.get(a._r5b9d344cee7098).selected = e.getBoolean(0)),
      (this._optionGroup.get(a._rfc595473c6cb93).selected = e.getBoolean(1)),
      (this._optionGroup.get(a._rd9b9eed504b7d7).selected = e.getBoolean(2)),
      (this._subOptionGroup.mask = e.getInt(3) ?? 0),
      (this._changeOriginGroup.mask = e.getInt(4) ?? 0));
  }
  onChangeVariable = n((e) => {
    let r = e == null || e.canCreateAndDelete,
      t = e != null && (e.variableType === class_3973.var_5852 || e.availabilityType === class_4337.var_5816),
      i = e != null && (e.variableType === class_3973.var_4430 || e.variableType === class_3973.INTERNAL),
      s = e == null || e.hasValue;
    ((this._optionGroup.get(a._r5b9d344cee7098).disabled = !r && !t && !i),
      (this._optionGroup.get(a._rfc595473c6cb93).disabled = !s && !i),
      (this._optionGroup.get(a._rd9b9eed504b7d7).disabled = !r && !t && !i));
    let d =
      e != null &&
      e.variableTarget === class_4222.var_5797 &&
      (e.availabilityType === class_4172.var_4280 || e.availabilityType === class_4172.var_5612);
    ((this._changeOriginGroup.get(a._rf531a06cb570e1).disabled = !d),
      (this._changeOriginGroup.get(a.const_1407).disabled = e == null || !e.isPersisted));
  }, "onChangeVariable");
  get inputMode() {
    return DefaultTriggerConf.INPUTS_TYPE_UI_BUILDER;
  }
  buildInputs(e, r, t) {
    let i = new SourceTypeSelectorParam([Ve.var_64, Ve.USER_SOURCE, VariableExtraSourceTypes.GLOBAL_SOURCE], this);
    ((this._picker = e.createVariablePicker(a.variableSelectionFilter, this.onChangeVariable)),
      (this._section1 = e.createSection(
        this.loc("wiredfurni.params.variables.variable_selection"),
        this._picker,
        new Hr(i),
      )));
    let s = [
      new CheckboxOptionParam(this.l("variables.trigger_options.0"), a._r5b9d344cee7098),
      new CheckboxOptionParam(this.l("variables.trigger_options.1"), a._rfc595473c6cb93),
      new CheckboxOptionParam(this.l("variables.trigger_options.2"), a._rd9b9eed504b7d7),
    ];
    ((this._subOptionGroup = e.createCheckboxGroup([
      new CheckboxOptionParam(this.l("variables.trigger_options.1.0"), 0),
      new CheckboxOptionParam(this.l("variables.trigger_options.1.1"), 1),
      new CheckboxOptionParam(this.l("variables.trigger_options.1.2"), 2),
    ])),
      (s[1].extra2 = this._subOptionGroup),
      (this._optionGroup = e.createCheckboxGroup(s)));
    let o = e.createSection(this.l("variables.trigger_options"), this._optionGroup),
      d = [];
    for (let f = 0; f < a.CHANGE_ORIGIN_OPTIONS; f += 1) {
      let l = new CheckboxOptionParam(`\${wiredfurni.params.variables.trigger_origin.${f}}`);
      if (a._r56358b41b35313.indexOf(f) !== -1) {
        let b = new Se(Se.MODE_MULTILINE);
        ((b.textColor = r.softTextColor),
          (l.extra2 = e.createText(
            `\${wiredfurni.params.variables.trigger_origin.${f}.info}`,
            b,
          )));
      }
      d.push(l);
    }
    this._changeOriginGroup = e.createCheckboxGroup(d);
    let c = e.createSection(
      "${wiredfurni.params.variables.trigger_origin}",
      this._changeOriginGroup,
      Hr.COLLAPSED,
    );
    t.addElements(this._section1, o, c);
  }
  static variableSelectionFilter(e) {
    return e.canInterceptChanges;
  }
  _r4ac8c24e31ca7e() {
    return [this._picker.finalizeSelection];
  }
  readIntParamsFromForm() {
    let e = [];
    (e.push(this._optionGroup.get(a._r5b9d344cee7098).selected ? 1 : 0),
      e.push(this._optionGroup.get(a._rfc595473c6cb93).selected ? 1 : 0),
      e.push(this._optionGroup.get(a._rd9b9eed504b7d7).selected ? 1 : 0),
      e.push(this._subOptionGroup.mask));
    let r = this._changeOriginGroup.mask;
    return (this._changeOriginGroup._r17bd3c0094d54d && (r = -1), e.push(r), e);
  }
  set sourceType(e) {
    this._picker.variableTarget = e;
  }
}

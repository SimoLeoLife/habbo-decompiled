// Extracted from HabboAirLauncher.deobf.js, line 362018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/addons/chests/class_4234.as
// Obfuscated name: _i95be529946a9f8

class extends DefaultAddonType {
  static {
    n(this, "class_4234");
  }
  var_2219 = null;
  var_2880 = null;
  var_905 = null;
  var_2307 = null;
  var_2487 = null;
  var_855 = null;
  get code() {
    return AddonCodes.CUSTOM_CONTRACT;
  }
  readIntParamsFromForm() {
    return [
      this.var_2219.get(0).selected ? 1 : 0,
      this.var_2880.selected,
      this.var_905.option,
      this.var_905.numberValue,
      this.var_905.target,
      this.var_2307.get(0).selected ? 1 : 0,
      this.var_2487.selected,
      this.var_855.option,
      this.var_855.numberValue,
      this.var_855.target,
    ];
  }
  _r4ac8c24e31ca7e() {
    return [this.var_905.finalizeSelection, this.var_855.finalizeSelection];
  }
  get inputMode() {
    return DefaultAddonType.INPUTS_TYPE_UI_BUILDER;
  }
  onEditStart(e) {
    let r = e._r1385185994d461[0] ?? WiredVariable.var_160,
      t = e.getBoolean(0),
      i = e.getInt(1),
      s = e.getInt(2),
      o = e.getInt(3),
      d = e.getInt(4);
    (t ? (s === 0 ? (r = WiredVariable.var_160) : (o = 1)) : ((r = WiredVariable.var_160), (o = 1)),
      (this.var_2219.get(0).selected = t),
      (this.var_2880.selected = i),
      this.var_905.init(e._r09c1c618a6015f._r491f74a2c22d93, r, d, s, o));
    let c = e._r1385185994d461[1] ?? WiredVariable.var_160,
      f = e.getBoolean(5),
      l = e.getInt(6),
      b = e.getInt(7),
      _ = e.getInt(8),
      h = e.getInt(9);
    (f ? (b === 0 ? (c = WiredVariable.var_160) : (_ = 1)) : ((c = WiredVariable.var_160), (_ = 1)),
      (this.var_2307.get(0).selected = f),
      (this.var_2487.selected = l),
      this.var_855.init(e._r09c1c618a6015f._r491f74a2c22d93, c, h, b, _),
      this.onPaymentSelectedChanged(0, t),
      this.onRewardSelectedChanged(0, f));
  }
  buildInputs(e, r, t) {
    let i = e.createUsageWarningSection("${wiredfurni.params.custom_contract.usage_warning}");
    this.var_2880 = e.createRadioGroup(
      [
        new RadioButtonParam(0, "${wiredfurni.params.custom_contract.element_type_selection.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.custom_contract.element_type_selection.1}"),
      ],
      this._re5e389f6aee86c,
      2,
    );
    let s = e.createSection(
      "${wiredfurni.params.custom_contract.element_type_selection}",
      this.var_2880,
    );
    this.var_905 = e.createValueOrVariableSection(
      0,
      this.mergedSourceOptions(0),
      "${wiredfurni.params.custom_contract.amount_selection}",
      1,
      1e5,
    );
    let o = e.createSimpleListView(!0, [s, e.createSpacer(r.sectionSpacing), this.var_905]);
    o.spacing = 0;
    let d = new CheckboxOptionParam("${wiredfurni.params.custom_contract.enable_payment}");
    ((d.extra2 = o), (this.var_2219 = e.createCheckboxGroup([d], this.onPaymentSelectedChanged)));
    let c = e.createSection(
      "${wiredfurni.params.custom_contract.payment}",
      this.var_2219,
      Hr.COLLAPSED,
    );
    this.var_2487 = e.createRadioGroup(
      [
        new RadioButtonParam(0, "${wiredfurni.params.custom_contract.element_type_selection.0}"),
        new RadioButtonParam(1, "${wiredfurni.params.custom_contract.element_type_selection.1}"),
      ],
      this._rd6af66c9488d60,
      2,
    );
    let f = e.createSection(
      "${wiredfurni.params.custom_contract.element_type_selection}",
      this.var_2487,
    );
    this.var_855 = e.createValueOrVariableSection(
      1,
      this.mergedSourceOptions(1),
      "${wiredfurni.params.custom_contract.amount_selection}",
      1,
      1e5,
    );
    let l = e.createSimpleListView(!0, [f, e.createSpacer(r.sectionSpacing), this.var_855]);
    l.spacing = 0;
    let b = new CheckboxOptionParam("${wiredfurni.params.custom_contract.enable_reward}");
    ((b.extra2 = l), (this.var_2307 = e.createCheckboxGroup([b], this.onRewardSelectedChanged)));
    let _ = e.createSection(
      "${wiredfurni.params.custom_contract.reward}",
      this.var_2307,
      Hr.COLLAPSED,
    );
    t.addElements(i, c, _, e.WindowWrapperPreset(r.createSplitterView(), !1));
  }
  get widthModifier() {
    return 1.2;
  }
  onEditInitialized() {
    (this.var_905.onEditInitialized(), this.var_855.onEditInitialized());
  }
  isInputSourceDisabled(e, r) {
    return r === Ve.MERGED_SOURCE && e === 0
      ? !this.var_2219.get(0).selected || this.var_905._r0fd1b66bcbf656()
      : r === Ve.MERGED_SOURCE && e === 1
        ? !this.var_2307.get(0).selected || this.var_855._r0fd1b66bcbf656()
        : r === Ve.var_64 && e === 0
          ? !this.var_2219.get(0).selected || this.var_2880.selected !== xn.TYPE_FURNI
          : r === Ve.var_64 && e === 1
            ? !this.var_2307.get(0).selected || this.var_2487.selected !== xn.TYPE_FURNI
            : !1;
  }
  mergedSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.merged.title.variables_reference_payment"
      : "wiredfurni.params.sources.merged.title.variables_reference_reward";
  }
  furniSelectionTitle(e) {
    return e === 0
      ? "wiredfurni.params.sources.furni.title.payment"
      : "wiredfurni.params.sources.furni.title.reward";
  }
  mergedSelections() {
    return [
      [2, 0],
      [3, 1],
    ];
  }
  setMergedType(e, r) {
    e === 0 ? (this.var_905.target = r) : (this.var_855.target = r);
  }
  getMergedType(e) {
    return e === 0 ? this.var_905.target : this.var_855.target;
  }
  get forceHidePickFurniInstructions() {
    return !0;
  }
  _r0f18641a2be1d6(e) {
    return [VariableExtraSourceTypes.GLOBAL_SOURCE, VariableExtraSourceTypes.CONTEXT_SOURCE];
  }
  _r0b74b92fc06f4d(e) {
    return !0;
  }
  onPaymentSelectedChanged = n((e, r) => {
    (this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.var_64, 0),
      this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 0));
  }, "onPaymentSelectedChanged");
  onRewardSelectedChanged = n((e, r) => {
    (this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.var_64, 1),
      this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.MERGED_SOURCE, 1));
  }, "onRewardSelectedChanged");
  _re5e389f6aee86c = n((e) => {
    this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.var_64, 0);
  }, "_re5e389f6aee86c");
  _rd6af66c9488d60 = n((e) => {
    this._r41f5cc7d3516ce.presetManager._ra0bf1c6a404ceb(Ve.var_64, 1);
  }, "_rd6af66c9488d60");
}

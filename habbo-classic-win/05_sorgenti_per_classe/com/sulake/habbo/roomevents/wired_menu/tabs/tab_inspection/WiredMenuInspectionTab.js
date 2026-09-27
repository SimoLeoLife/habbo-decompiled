// Extracted from HabboAirLauncher.deobf.js, line 356528.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_inspection/WiredMenuInspectionTab.as
// Obfuscated name: _ia246ab0c4548de

class a extends WiredMenuDefaultTab {
  static {
    n(this, "WiredMenuInspectionTab");
  }
  static POLL_VARIABLES_MS = 500;
  static STATE_NOTHING = 0;
  static STATE_FETCHING_HOLDING_VARIABLES = 1;
  static STATE_AWAITING_VARIABLES = 2;
  static STATE_DISPLAYING = 3;
  static VARIABLES_COLUMN_VARIABLE = "variable";
  static VARIABLES_COLUMN_VALUE = "value";
  var_505;
  _r57e793aff829f9;
  _r91d0f3b8adbd5f;
  _state = a.STATE_NOTHING;
  var_4508 = 0;
  var_1582 = Object.create(null);
  _data = null;
  _rb5b5bad3aa3437 = -1;
  _r084230aa75e3c2 = 0;
  _r835ddf525ade8d = -1;
  _highlighter;
  _reb86f766f3f3ba = -1;
  var_1454;
  constructor(e, r) {
    (super(e, r),
      (this._highlighter = new VariableHoldersHighlighter(e._r41f5cc7d3516ce)),
      (this.var_505 = new jn(e.windowManager, this.variableValuesTableContainer)),
      (this._r57e793aff829f9 = new JX(this.typePickerContainer, this.onSelectVariableType)),
      (this._r91d0f3b8adbd5f = new qWe(this.previewContainer, e)),
      this.createVariableValuesTable(),
      this.createCreateVariableBubble(),
      this.updateTableUI(),
      this._rc988afb7ff02bf(),
      this.addMessageEvent(new UnkMessageEvent_96d243((t) => this._r3f6971c676a679(t))),
      this.addMessageEvent(new class_2746((t) => this.class_2746(t))),
      this.highlightWiredButton.addEventListener(u.CLICK, this._r2589fd8b373420),
      this.deleteVariableButton.addEventListener(u.CLICK, this._rba85e733a82b0c),
      this.addVariableButton.addEventListener(u.CLICK, this._r3e6369d6ab2ee0),
      this.createVariableButton.addEventListener(u.CLICK, this.onCreateVariableClicked),
      (r.procedure = this.windowProcedure));
  }
  _r327228a1fe703e() {
    (super._r327228a1fe703e(), this._r4e70e14c2a12de(!1));
  }
  _r08363b6c12c5ad() {
    (super._r08363b6c12c5ad(), this._rb6325c3611f3ea(), (this.createVariableBubble.visible = !1));
  }
  dispose() {
    this.disposed ||
      (this.controller?._rf5e384520bc525?.removeListener(this.var_423),
      this._r57e793aff829f9.dispose(),
      this.var_505.dispose(),
      (this._state = a.STATE_NOTHING),
      (this.var_1582 = Object.create(null)),
      (this._data = null),
      this._r91d0f3b8adbd5f.dispose(),
      this._highlighter.dispose(),
      super.dispose());
  }
  update(e) {
    if (!this._r71998b0210f450) return;
    this._r57e793aff829f9.update(e);
    let r = _ia411d8d8194a3a();
    (this.var_4508 < r - a.POLL_VARIABLES_MS && this.isDataReady() && this._r4e70e14c2a12de(),
      this._highlighter.update(e));
  }
  inspectFurni(e, r = !1) {
    if (
      !this._r71998b0210f450 ||
      (this.pinCheckbox.isSelected && this._state === a.STATE_DISPLAYING && !r)
    )
      return;
    r && this.pinCheckbox.select();
    let t = this._r57e793aff829f9.selectedType === Qs.var_5765;
    if (r && !t) ((this._r57e793aff829f9.selectedType = Qs.var_5765), this._rc988afb7ff02bf());
    else if (!t) return;
    if (this._r57e793aff829f9.selectedType === Qs.var_5765) {
      if (this._data != null && this._data.type === Qs.var_5765 && this._data.objectId === e) return;
      ((this._state = a.STATE_FETCHING_HOLDING_VARIABLES),
        this.updateLoadingState(),
        this.requestVariablesForObject(Qs.var_5765, e));
    }
  }
  inspectUser(e, r = !1) {
    if (
      !this._r71998b0210f450 ||
      (this.pinCheckbox.isSelected && this._state === a.STATE_DISPLAYING && !r)
    )
      return;
    r && this.pinCheckbox.select();
    let t = this._r57e793aff829f9.selectedType === Qs.var_5943;
    if (r && !t) ((this._r57e793aff829f9.selectedType = Qs.var_5943), this._rc988afb7ff02bf());
    else if (!t) return;
    if (this._r57e793aff829f9.selectedType === Qs.var_5943) {
      if (this._data != null && this._data.type === Qs.var_5943 && this._data._rc86f77becaebea === e)
        return;
      ((this._state = a.STATE_FETCHING_HOLDING_VARIABLES),
        this.updateLoadingState(),
        this.requestVariablesForObject(Qs.var_5943, e));
    }
  }
  isDataReady() {
    return this._state === a.STATE_NOTHING || this._state === a.STATE_DISPLAYING;
  }
  createVariableValuesTable() {
    (this.var_505.initialize([
      new TableColumn(
        a.VARIABLES_COLUMN_VARIABLE,
        this.loc("wiredmenu.inspection.variables.variable"),
        0.65,
        nr.const_27,
      ),
      new TableColumn(a.VARIABLES_COLUMN_VALUE, this.loc("wiredmenu.inspection.variables.value"), 0.35, nr.RIGHT),
    ]),
      (this.var_505._r8c425bdeb05a56 = this._r188c9b37d62907),
      (this.var_505._r27f14abfd832a6 = this._r0574d8e88983a1));
  }
  createCreateVariableBubble() {
    let e =
      this.controller._r41f5cc7d3516ce.presetManager.wiredCtrl._rd65848eed931f7(
        "search_tree_dropdown",
      );
    (this.variablePickerContainer.addChild(e),
      (this.var_1454 = new Rg(
        this.controller._r41f5cc7d3516ce,
        e,
        this._r963ee624ff95ca,
        this.variableFilter,
      )),
      (this.var_1454.width = this.variablePickerContainer.width),
      (this.createVariableBubble.visible = !1));
  }
  _r4e70e14c2a12de(e = !0) {
    this._state === a.STATE_DISPLAYING &&
      (e || ((this._state = a.STATE_FETCHING_HOLDING_VARIABLES), this.updateLoadingState()),
      this.requestVariablesForObject(this._data.type, this._r7c2944444690c9()));
  }
  _r7c2944444690c9() {
    return this._data.type === Qs.var_5943
      ? this._data._rc86f77becaebea
      : this._data.type === Qs.var_5765
        ? this._data.objectId
        : 0;
  }
  _re4cf0e116acfd0() {
    this._state = a.STATE_NOTHING;
    let e = this._data;
    ((this._data = null), this._r872fdfc98c8b11(e, null), this.updateTableUI());
  }
  _r188c9b37d62907 = n((e, r, t) => {
    if (r !== a.VARIABLES_COLUMN_VALUE) return;
    let i = e,
      s = i?.variable;
    if (i == null || s == null || !this.controller.hasWritePermission || !s.hasValue || !s.canWriteValue)
      return;
    let o = we.getIntFromString(t, -2147483648, !0);
    o !== -2147483648 &&
      this.controller.send(
        new UnkMessageComposer_5args_295cc0(s.variableTarget, this._r7c2944444690c9(), s.variableId, o, UnkMessageComposer_5args_295cc0._r012cec707c5cae),
      );
  }, "_r188c9b37d62907");
  _r3e6369d6ab2ee0 = n((e) => {
    this.createVariableBubble.visible
      ? (this.createVariableBubble.visible = !1)
      : this.controller._rf5e384520bc525.getAllVariables(this._rfefb2cb67822d3, !0);
  }, "_r3e6369d6ab2ee0");
  windowProcedure = n((e, r) => {
    e.type === u.CLICK &&
      this.createVariableBubble.visible &&
      r.name !== "add_var_btn" &&
      !this.createVariableBubble.windowIsChild(r) &&
      (this.createVariableBubble.visible = !1);
  }, "windowProcedure");
  _rfefb2cb67822d3 = n((e) => {
    (this.var_1454.init(new b7(e), "", this._r57e793aff829f9.selectedType),
      we.disableSection(this.createVariableButton, !0),
      (this.createVariableBubble.visible = !0));
  }, "_rfefb2cb67822d3");
  _rba85e733a82b0c = n((e) => {
    if (this._data == null) return;
    let r = this.var_505.selected;
    if (r == null) return;
    let t = r.variable;
    !this.controller.hasWritePermission ||
      !t.canCreateAndDelete ||
      ((this._reb86f766f3f3ba = this.var_505._rad1ace3d4ce07c(r)),
      this.controller.send(
        new UnkMessageComposer_5args_295cc0(t.variableTarget, this._r7c2944444690c9(), t.variableId, 0, UnkMessageComposer_5args_295cc0._r4b63c66ccdba21),
      ));
  }, "_rba85e733a82b0c");
  onCreateVariableClicked = n((e) => {
    if (this._data == null) return;
    let r = this.var_1454.selected;
    if (r == null) return;
    this.var_1454._rfe938462bb3aca();
    let t = 0;
    (r.hasValue && (t = Number(this.valueInput.text) | 0),
      this.controller.send(
        new UnkMessageComposer_5args_295cc0(r.variableTarget, this._r7c2944444690c9(), r.variableId, t, UnkMessageComposer_5args_295cc0._r8bdac588a2e61f),
      ),
      (this.createVariableBubble.visible = !1),
      (this.valueInput.text = "0"));
  }, "onCreateVariableClicked");
  _r3f6971c676a679(e) {
    if (this._state !== a.STATE_FETCHING_HOLDING_VARIABLES && this._state !== a.STATE_DISPLAYING) return;
    let r = e.getParser().data;
    if (r == null || r.type !== this._r57e793aff829f9.selectedType) return;
    let t = this._data;
    ((this._data = r),
      this._r872fdfc98c8b11(t, this._data),
      (this._state = a.STATE_AWAITING_VARIABLES),
      this.controller._rf5e384520bc525.getAllVariables(this.var_423, !this._r91468e8f007256) ||
        this.updateLoadingState());
  }
  class_2746(e) {
    let r = ClassUtils.getParser(e, class_3093);
    r != null &&
      r.errorCode === class_3093.var_5945 &&
      this._state !== a.STATE_DISPLAYING &&
      (this._re4cf0e116acfd0(), this._rc988afb7ff02bf(), this.updateLoadingState());
  }
  get _r91468e8f007256() {
    for (let e of this._data._r2bf1ac7648188a.getKeys()) if (!(e in this.var_1582)) return !1;
    return !0;
  }
  _rc988afb7ff02bf() {
    let e = this._r57e793aff829f9.selectedType === VariableExtraSourceTypes.GLOBAL_SOURCE;
    we.disableSection(this.pinContainer, e);
    let r = this._r57e793aff829f9.selectedType === Qs.var_5765,
      t = this._r57e793aff829f9.selectedType === Qs.var_5943;
    if (
      (we.disableSection(
        this.highlightWiredButton,
        this._data == null ||
          this._data.type !== Qs.var_5765 ||
          this._data._r3a4a7e95bf1830 == null ||
          this._data._r3a4a7e95bf1830.length === 0,
      ),
      (this.highlightWiredButton.visible = r),
      e)
    ) {
      this._r91d0f3b8adbd5f._r5e96665092eab6();
      return;
    }
    if (!r && !t) {
      this._r91d0f3b8adbd5f.clearPreviewer();
      return;
    }
    this._state === a.STATE_NOTHING
      ? r
        ? this._r91d0f3b8adbd5f._r9ea1c801553196()
        : t && this._r91d0f3b8adbd5f._r97ec226caf3f6b()
      : this._state === a.STATE_DISPLAYING &&
        (r
          ? this._r91d0f3b8adbd5f._rdc09238d00e25e(this._data.objectId)
          : t && this._r91d0f3b8adbd5f._r7a611ceb9ddb12(this._data._rc86f77becaebea));
  }
  _r2589fd8b373420 = n((e) => {
    if (
      (this._highlighter.clear(),
      this._r835ddf525ade8d === -1 &&
        this._data != null &&
        this._data._r3a4a7e95bf1830 != null &&
        this._data._r3a4a7e95bf1830.length > 0)
    ) {
      for (let r of this._data._r3a4a7e95bf1830) this._highlighter._r7a070feffe46bf(r, null);
      this._r835ddf525ade8d = this._data.objectId;
    } else this._r835ddf525ade8d = -1;
  }, "_r2589fd8b373420");
  _r872fdfc98c8b11(e, r) {
    (r == null && this._rb6325c3611f3ea(),
      r != null &&
        this._r835ddf525ade8d !== -1 &&
        (r.type !== Qs.var_5765 || r.objectId !== this._r835ddf525ade8d) &&
        this._rb6325c3611f3ea(),
      (e == null ||
        r == null ||
        e.type !== r.type ||
        e.objectId !== r.objectId ||
        e._rc86f77becaebea !== r._rc86f77becaebea) &&
        (this.createVariableBubble.visible = !1));
  }
  _rb6325c3611f3ea() {
    (this._highlighter.clear(), (this._r835ddf525ade8d = -1));
  }
  updateTableUI() {
    if (this._state === a.STATE_NOTHING)
      (this.var_505.clear(), we.disableSection(this.variableValuesTableContainer));
    else if (this._state === a.STATE_DISPLAYING) {
      this.variableValuesTableContainer.isEnabled() || we.disableSection(this.variableValuesTableContainer, !1);
      let e = this._data._r2bf1ac7648188a,
        r = [];
      for (let s of e.getKeys()) {
        let o = this.var_1582[s];
        o != null && r.push(o);
      }
      we._r5c461577938819(r);
      let t = this._r7c2944444690c9() === this._r084230aa75e3c2 && this._data.type === this._rb5b5bad3aa3437,
        i = [];
      for (let s of r)
        s.isInvisible ||
          i.push(new Og(s, e.getValue(s.variableId), this.controller.hasWritePermission, t, this.localization));
      (this.var_505._rb800e4dd98c360(i),
        (this._r084230aa75e3c2 = this._r7c2944444690c9()),
        (this._rb5b5bad3aa3437 = this._data.type));
    }
    this.updateButtonsUI();
  }
  updateButtonsUI() {
    let e = !1,
      r = !1;
    if (this.controller.hasWritePermission) {
      let t = this.var_505.selected;
      this._data != null &&
        this._data.type !== VariableExtraSourceTypes.GLOBAL_SOURCE &&
        (t != null && t.variable != null && t.variable.canCreateAndDelete && (e = !0), (r = !0));
    }
    (we.disableSection(this.deleteVariableButton, !e), we.disableSection(this.addVariableButton, !r));
  }
  _r0574d8e88983a1 = n((e) => {
    if ((this.updateButtonsUI(), e == null && this._reb86f766f3f3ba !== -1)) {
      let r = this.var_505._r6f19b59a34a0f1(this._reb86f766f3f3ba);
      (this.var_505._rb01cbbcd6ad779(r), (this._reb86f766f3f3ba = -1));
    }
  }, "_r0574d8e88983a1");
  var_423 = n((e) => {
    this.var_1582 = Object.create(null);
    for (let r of e) this.var_1582[r.variableId] = r;
    this._state === a.STATE_AWAITING_VARIABLES &&
      ((this._state = a.STATE_DISPLAYING),
      this.updateTableUI(),
      this.updateLoadingState(),
      this._rc988afb7ff02bf());
  }, "var_423");
  onSelectVariableType = n((e) => {
    (this._re4cf0e116acfd0(),
      this.initializeInterface(),
      e === VariableExtraSourceTypes.GLOBAL_SOURCE &&
        ((this._state = a.STATE_FETCHING_HOLDING_VARIABLES), this.requestVariablesForObject(e, 0), this.updateLoadingState()),
      this._rc988afb7ff02bf(),
      this.updateButtonsUI());
  }, "onSelectVariableType");
  requestVariablesForObject(e, r) {
    ((this.var_4508 = _ia411d8d8194a3a()), this.controller.send(new UnkMessageComposer_2args_d12462(e, r)));
  }
  variableFilter = n((e) => {
    (we.disableSection(this.valueSettingContainer, e != null && !e.hasValue),
      we.disableSection(this.createVariableButton, e == null));
  }, "variableFilter");
  _r963ee624ff95ca = n(
    (e) => e.canCreateAndDelete && (this._data == null || !this._data._r2bf1ac7648188a.hasKey(e.variableId)),
    "_r963ee624ff95ca",
  );
  get variableValuesTableContainer() {
    return this.container.findChildByName("variable_values_table_container");
  }
  get typePickerContainer() {
    return this.container.findChildByName("type_picker_container");
  }
  get previewContainer() {
    return this.container.findChildByName("preview_container");
  }
  get pinContainer() {
    return this.container.findChildByName("pin_option_container");
  }
  get pinCheckbox() {
    return this.container.findChildByName("pin_checkbox");
  }
  get highlightWiredButton() {
    return this.container.findChildByName("highlight_wired_btn");
  }
  get deleteVariableButton() {
    return this.container.findChildByName("delete_var_btn");
  }
  get addVariableButton() {
    return this.container.findChildByName("add_var_btn");
  }
  get createVariableBubble() {
    return this.container.findChildByName("create_var_bubble");
  }
  get variablePickerContainer() {
    return this.createVariableBubble.findChildByName("var_picker_container");
  }
  get valueInput() {
    return this.createVariableBubble.findChildByName("value_input");
  }
  get createVariableButton() {
    return this.createVariableBubble.findChildByName("create_var_btn");
  }
  get valueSettingContainer() {
    return this.createVariableBubble.findChildByName("value_setting");
  }
}

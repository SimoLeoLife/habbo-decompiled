// Extracted from HabboAirLauncher.deobf.js, line 357716.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_variable_overview/WiredMenuOverviewTab.as
// Obfuscated name: _ie1a00f1b35c15e

class a extends WiredMenuDefaultTab {
  static {
    n(this, "WiredMenuOverviewTab");
  }
  static POLL_MS = 500;
  static MAX_HIGHLIGHTS = 1e3;
  static MAX_HIGHLIGHTS_WITH_VALUE = 400;
  static _ra69aa61119ac5f = 400;
  static LIST_COLUMN_NAME = "variable";
  static PROPERTIES_COLUMN_PROPERTY = "property";
  static PROPERTIES_COLUMN_VALUE = "value";
  static _r11a90825199df3 = "value";
  static var_5701 = "text";
  _rb0e5da68dbbd02;
  _r581f0ba6cd4c5e;
  var_1265;
  _r57e793aff829f9;
  _highlighter;
  _highlightEnabled = !1;
  var_4508 = 0;
  var_5070 = 0;
  _allVariables = null;
  _rcf1173aef38849 = null;
  _rd998198c47dc35 = null;
  constructor(e, r) {
    (super(e, r),
      (this._highlighter = new VariableHoldersHighlighter(e._r41f5cc7d3516ce)),
      (this._rb0e5da68dbbd02 = new jn(e.windowManager, this.variableListContainer)),
      (this._r581f0ba6cd4c5e = new jn(e.windowManager, this.propertiesTableContainer)),
      (this.var_1265 = new jn(e.windowManager, this.textsTableContainer)),
      (this._r57e793aff829f9 = new JX(this.typePickerContainer, this.onSelectVariableType)),
      this.createVariableList(),
      this.createPropertiesTable(),
      this.createTextTable(),
      this.addMessageEvent(new UnkMessageEvent_d4ba75((t) => this.onAllVariableHolders(t))),
      this.highlightHoldersButton.addEventListener(u.CLICK, this._r2a9bc61bc84151),
      this.manageButton.addEventListener(u.CLICK, this._r276ff0bad02e5d),
      this.deleteButton.addEventListener(u.CLICK, this.onDeleteClick));
  }
  _r327228a1fe703e() {
    (super._r327228a1fe703e(), this.clearData(), this.updateLoadingState(), this.requestData());
  }
  isDataReady() {
    return this._allVariables != null;
  }
  initializeInterface() {
    (this._rcf1173aef38849 != null &&
      (this._r5e5a4d72b4a1c1(this._rcf1173aef38849), (this._rcf1173aef38849 = null)),
      this._r94c4ed657e0521(),
      this.updatePropertiesTableUI(),
      this._r3bfd9b8e674b4e(),
      this.updateButtonsUI());
  }
  update(e) {
    if (!this._r71998b0210f450) return;
    this._r57e793aff829f9.update(e);
    let r = _ia411d8d8194a3a();
    (this.var_4508 < r - a.POLL_MS && this.requestData(),
      this.canHighlightCurrentVariable &&
        this._highlightEnabled &&
        this.var_5070 < r - a.POLL_MS &&
        this.requestHolders(),
      this._highlighter.update(e));
  }
  _r08363b6c12c5ad() {
    (super._r08363b6c12c5ad(), this._highlightEnabled && this._highlighter.clear());
  }
  _rf3cd9499aee8db(e) {
    this.isDataReady()
      ? (this._r5e5a4d72b4a1c1(e), this.initializeInterface())
      : (this._rcf1173aef38849 = e);
  }
  dispose() {
    this.disposed ||
      (this.highlightHoldersButton.removeEventListener(u.CLICK, this._r2a9bc61bc84151),
      this.manageButton.removeEventListener(u.CLICK, this._r276ff0bad02e5d),
      this.deleteButton?.removeEventListener(u.CLICK, this.onDeleteClick),
      this.controller._rf5e384520bc525.removeListener(this.var_423),
      this._r57e793aff829f9.dispose(),
      this._rb0e5da68dbbd02.dispose(),
      this._r581f0ba6cd4c5e.dispose(),
      this.var_1265.dispose(),
      (this._allVariables = null),
      this._highlighter.dispose(),
      super.dispose());
  }
  createVariableList() {
    (this._rb0e5da68dbbd02.initialize([new TableColumn(a.LIST_COLUMN_NAME, "", 1, nr.const_27)], !1),
      (this._rb0e5da68dbbd02._r27f14abfd832a6 = this._rfe5f94f459eb46));
  }
  createPropertiesTable() {
    this._r581f0ba6cd4c5e.initialize([
      new TableColumn(
        a.PROPERTIES_COLUMN_PROPERTY,
        this.loc("wiredmenu.variable_overview.properties.column.property"),
        0.52,
        nr.const_27,
      ),
      new TableColumn(
        a.PROPERTIES_COLUMN_VALUE,
        this.loc("wiredmenu.variable_overview.properties.column.value"),
        0.48,
        nr.const_27,
      ),
    ]);
  }
  createTextTable() {
    this.var_1265.initialize([
      new TableColumn(
        a._r11a90825199df3,
        this.loc("wiredmenu.variable_overview.text.column.value"),
        0.2,
        nr.const_27,
      ),
      new TableColumn(
        a.var_5701,
        this.loc("wiredmenu.variable_overview.text.column.text"),
        0.8,
        nr.RIGHT,
      ),
    ]);
  }
  clearData() {
    this._allVariables = null;
  }
  requestData() {
    ((this.var_4508 = _ia411d8d8194a3a()), this.controller._rf5e384520bc525.getAllVariables(this.var_423));
  }
  requestHolders() {
    ((this.var_5070 = _ia411d8d8194a3a()), this.controller.send(new UnkMessageComposer_1args_4ef6b0(this.selectedVariableId)));
  }
  var_423 = n((e) => {
    ((this._allVariables = e), this._rb1888e9019ee7c ? this.updateLoadingState() : this.initializeInterface());
  }, "var_423");
  onAllVariableHolders(e) {
    if (!this._highlightEnabled || !this._r71998b0210f450) return;
    let r = e.getParser()._r4dd8c31feb05ed;
    if (r == null) return;
    let t = r.holders,
      i = r.variable;
    if (i.variableId !== this.selectedVariableId) return;
    if ((!i.hasValue && t.length > a.MAX_HIGHLIGHTS) || (i.hasValue && t.length > a.MAX_HIGHLIGHTS_WITH_VALUE)) {
      (this.controller._r41f5cc7d3516ce.notifications.addItem(
        this.loc("wiredmenu.variable_overview.highlight.error.too_many"),
        NotificationType.INFO,
        "icon_wired_notification_png",
      ),
        this.stopHighlight());
      return;
    }
    let s = new Set(),
      o = new Set();
    for (let d of t) this._r87d0585cd1cbe0(i, d, s, o);
    this._highlighter._r31add46f4bee79(s, o);
  }
  _r87d0585cd1cbe0(e, r, t, i) {
    let s = r.objectId,
      o = e.hasValue ? r.value : Number.NaN;
    e.variableTarget === class_4222.FURNI
      ? (this._highlighter._r7a070feffe46bf(s, we.variableValueWithString(e, o)), t.add(s))
      : e.variableTarget === class_4222.USER &&
        (this._highlighter._r26b9732f3f671f(s, we.variableValueWithString(e, o)), i.add(s));
  }
  get selectedVariableId() {
    let e = this._r136461fd62035c;
    return e == null ? WiredVariable.var_160 : e.variableId;
  }
  get _r136461fd62035c() {
    return this._rb0e5da68dbbd02.selected == null ? null : this._rb0e5da68dbbd02.selected.variable;
  }
  _r94c4ed657e0521() {
    let e = this._rb0e5da68dbbd02.selected,
      r = [],
      t = null;
    for (let i of this._allVariables ?? []) {
      if (i.isInvisible || i.variableTarget !== this._r57e793aff829f9.selectedType) continue;
      let s = new UnkClass_2c080e(i, this.controller._r41f5cc7d3516ce);
      (i === this._rd998198c47dc35 && (t = s), r.push(s));
    }
    (this._rb0e5da68dbbd02._rb800e4dd98c360(r),
      t != null
        ? this._rb0e5da68dbbd02._rb01cbbcd6ad779(t)
        : e == null && r.length > 0
          ? this._rb0e5da68dbbd02._rb01cbbcd6ad779(r[0] ?? null)
          : e != null &&
            this._rb0e5da68dbbd02.selected == null &&
            this._rb0e5da68dbbd02._rb01cbbcd6ad779(r[0] ?? null),
      (this._rd998198c47dc35 = null));
  }
  updateButtonsUI() {
    (we.disableSection(this.highlightHoldersButton, !this.canHighlightCurrentVariable),
      we.disableSection(this.manageButton, !this._r2dbae538d28312),
      we.disableSection(this.deleteButton, !this._r503782e76f1eb9));
  }
  _rfe5f94f459eb46 = n((e) => {
    (this.var_1265._r5158179f7612c9(),
      this.updatePropertiesTableUI(),
      this._r3bfd9b8e674b4e(),
      this._highlightEnabled &&
        (this._highlighter.clear(), this.canHighlightCurrentVariable && this.requestHolders()),
      this.updateButtonsUI());
  }, "_rfe5f94f459eb46");
  get canHighlightCurrentVariable() {
    let e = this._r9f0890ff639aee();
    return (
      e != null &&
      e.variableType !== class_3973.INTERNAL &&
      (e.variableTarget === class_4222.USER || e.variableTarget === class_4222.FURNI)
    );
  }
  get _r2dbae538d28312() {
    let e = this._r9f0890ff639aee();
    return e != null && e.variableTarget === class_4222.USER && e.isPersisted;
  }
  get _r503782e76f1eb9() {
    if (!this.controller.hasWritePermission) return !1;
    let e = this._r9f0890ff639aee();
    return (
      e != null &&
      e.canCreateAndDelete &&
      e.isPersisted &&
      (e.variableTarget === class_4222.FURNI || e.variableTarget === class_4222.USER) &&
      e.variableType === class_3973.var_4355
    );
  }
  _r2a9bc61bc84151 = n((e) => {
    this._highlightEnabled ? this.stopHighlight() : this.startHighlight();
  }, "_r2a9bc61bc84151");
  _r276ff0bad02e5d = n((e) => {
    let r = this._r9f0890ff639aee();
    r == null ||
      !this._r2dbae538d28312 ||
      this.controller.send(new UnkMessageComposer_5args_cb1434(r.variableId, 1, UnkConstants_50108c.PAGE_SIZE, 0, -1));
  }, "_r276ff0bad02e5d");
  onDeleteClick = n((e) => {
    if (!this._r503782e76f1eb9) return;
    let r = this.controller.windowManager.confirm(
      "${wiredmenu.variable_overview.delete_all.title}",
      "${wiredmenu.variable_overview.delete_all.desc}",
      0,
      this._r0a36649014204a,
    );
    r != null && (r._r3d7b1775b50b97 = 13909337);
  }, "onDeleteClick");
  _r0a36649014204a = n((e, r) => {
    (e.dispose(),
      !(r.type !== y.const_1300 || !this._r503782e76f1eb9) &&
        (this.stopHighlight(), this.controller.send(new UnkMessageComposer_1args_9bda71(this._r9f0890ff639aee().variableId))));
  }, "_r0a36649014204a");
  startHighlight() {
    ((this._highlightEnabled = !0),
      (this.highlightHoldersButton.caption = this.loc("wiredmenu.variable_overview.unhighlight_holders")),
      this.requestHolders());
  }
  stopHighlight() {
    ((this._highlightEnabled = !1),
      (this.highlightHoldersButton.caption = this.loc("wiredmenu.variable_overview.highlight_holders")),
      this._highlighter.clear());
  }
  onSelectVariableType = n((e) => {
    (this._rb0e5da68dbbd02._r5158179f7612c9(), this.initializeInterface());
  }, "onSelectVariableType");
  updatePropertiesTableUI() {
    let e = this._r9f0890ff639aee();
    if (e == null) {
      this._r581f0ba6cd4c5e.clear();
      return;
    }
    let r = [
      new PropertyTableObject("name", e.variableName, this.localization, !0),
      new PropertyTableObject("type", this.getTypeString(e), this.localization),
      new PropertyTableObject("target", this.getTargetString(e), this.localization),
      new PropertyTableObject("availability", this.getAvailabilityString(e), this.localization),
      new PropertyTableObject("has_value", e.hasValue, this.localization),
      new PropertyTableObject("can_write_to", e.canWriteValue, this.localization),
      new PropertyTableObject("can_create_delete", e.canCreateAndDelete, this.localization),
      new PropertyTableObject("can_intercept", e.canInterceptChanges, this.localization),
      new PropertyTableObject("is_always_available", e.alwaysAvailable, this.localization),
      new PropertyTableObject("can_read_creation_time", e.canReadCreationTime, this.localization),
      new PropertyTableObject("can_read_last_update_time", e.canReadLastUpdateTime, this.localization),
      new PropertyTableObject("is_text_connected", e.hasTextConnector, this.localization),
    ];
    this._r581f0ba6cd4c5e._rb800e4dd98c360(r);
  }
  getTypeString(e) {
    return this.loc(`wiredfurni.params.variables.idtype.${e.variableType}`);
  }
  getTargetString(e) {
    switch (e.variableTarget) {
      case class_4222.FURNI:
        return this.loc("wiredfurni.params.sourcetype.furni");
      case class_4222.USER:
        return this.loc("wiredfurni.params.sourcetype.users");
      case VariableExtraSourceTypes.GLOBAL_SOURCE:
        return this.loc("wiredfurni.params.sourcetype.global");
      case VariableExtraSourceTypes.CONTEXT_SOURCE:
        return this.loc("wiredfurni.params.sourcetype.context");
      default:
        return "";
    }
  }
  getAvailabilityString(e) {
    return this.localization.getLocalization(
      `wiredfurni.params.variables.availability.${e.availabilityType}`,
      this.loc("wiredfurni.params.variables.availability.misc"),
    );
  }
  _r3bfd9b8e674b4e() {
    let e = this._r9f0890ff639aee();
    if (e == null || !e.hasTextConnector) {
      (this.var_1265.clear(), we.disableSection(this.textsTableContainer));
      return;
    }
    this.textsTableContainer.isEnabled() || we.disableSection(this.textsTableContainer, !1);
    let t = e.textConnector,
      i = t
        .getKeys()
        .slice()
        .sort((o, d) => o - d),
      s = [];
    if (i.length <= a._ra69aa61119ac5f) for (let o of i) s.push(new TextTableObject(o, t.getValue(o) ?? ""));
    this.var_1265._rb800e4dd98c360(s);
  }
  _r9f0890ff639aee() {
    let e = this._rb0e5da68dbbd02.selected;
    return e == null ? null : e.variable;
  }
  _r5e5a4d72b4a1c1(e) {
    let r = this.getVariableByNameOrPrefix(e);
    r != null && ((this._r57e793aff829f9.selectedType = r.variableTarget), (this._rd998198c47dc35 = r));
  }
  getVariableByNameOrPrefix(e) {
    let r = null;
    for (let t of this._allVariables ?? [])
      if (!t.isInvisible) {
        if (t.variableName === e) return t;
        r == null && t.variableName.indexOf(`${e}.`) === 0 && (r = t);
      }
    return r;
  }
  get variableListContainer() {
    return this.container.findChildByName("variable_list_container");
  }
  get propertiesTableContainer() {
    return this.container.findChildByName("variable_properties_table_container");
  }
  get textsTableContainer() {
    return this.container.findChildByName("variable_texts_table_container");
  }
  get highlightHoldersButton() {
    return this.container.findChildByName("highlight_holders_button");
  }
  get manageButton() {
    return this.container.findChildByName("manage_button");
  }
  get deleteButton() {
    return this.container.findChildByName("delete_button");
  }
  get typePickerContainer() {
    return this.container.findChildByName("type_picker_container");
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 358896.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/variables_management/detail/VariableManagementDetailView.as
// Nome offuscato: _ic613dbf78cca73

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("variables_management_detail_xml").content,
      a.DESKTOP_WINDOW_LAYER,
    )),
      (this._loadingIcon = new $h()),
      (this.var_505 = new jn(this._windowManager, this.variableValuesTableContainer)),
      (this._r91d0f3b8adbd5f = new dBe(
        this.previewWindow,
        this.var_63._r41f5cc7d3516ce._rb3d0033404b557,
      )),
      this.createVariableValuesTable(),
      this.createCreateVariableBubble(),
      this.refreshButton.addEventListener(u.CLICK, this._r4ed121b53b9fee),
      this.closeButton.addEventListener(u.CLICK, this.onClose),
      this.deleteVariableButton.addEventListener(u.CLICK, this._rba85e733a82b0c),
      this.addVariableButton.addEventListener(u.CLICK, this._r3e6369d6ab2ee0),
      this.createVariableButton.addEventListener(u.CLICK, this.onCreateVariableClicked),
      (this._window.procedure = this.windowProcedure),
      this.hide());
  }
  static {
    n(this, "VariableManagementDetailView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static VARIABLES_COLUMN_VARIABLE = "variable";
  static VARIABLES_COLUMN_VALUE = "value";
  _disposed = !1;
  _loadingIcon;
  _window;
  var_505;
  var_1454 = null;
  _r91d0f3b8adbd5f;
  get disposed() {
    return this._disposed;
  }
  hide() {
    if (!this.isShowing()) return;
    let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    e?.removeChild(this._window);
  }
  show() {
    if (this.isShowing()) return;
    let e = this._windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    e != null && (e.addChild(this._window), this._window.center());
  }
  isShowing() {
    return this._window.parent != null;
  }
  displayNewData() {
    this.var_63.data != null &&
      (this._rfe6c88105047ed(),
      this._rc988afb7ff02bf(),
      this.updateInfoBoxUI(),
      this.updateButtonsUI(),
      this._loadingIcon.setVisible(this.loadingIconWindow, !1),
      this.var_505.setObjects(),
      this._window.activate());
  }
  dispose() {
    this._disposed ||
      (this.refreshButton.removeEventListener(u.CLICK, this._r4ed121b53b9fee),
      this.closeButton.removeEventListener(u.CLICK, this.onClose),
      this.deleteVariableButton.removeEventListener(u.CLICK, this._rba85e733a82b0c),
      this.addVariableButton.removeEventListener(u.CLICK, this._r3e6369d6ab2ee0),
      this.createVariableButton.removeEventListener(u.CLICK, this.onCreateVariableClicked),
      this.var_1454?.dispose(),
      (this.var_1454 = null),
      this._loadingIcon?.dispose(),
      (this._loadingIcon = null),
      this.var_505?.dispose(),
      (this.var_505 = null),
      this._window?.dispose(),
      (this._window = null),
      this._r91d0f3b8adbd5f?.dispose(),
      (this._r91d0f3b8adbd5f = null),
      (this.var_63 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  createVariableValuesTable() {
    let e = [
      new TableColumn(
        a.VARIABLES_COLUMN_VARIABLE,
        this.var_63.localizationManager.getLocalization("wiredmenu.inspection.variables.variable"),
        0.65,
        nr.const_27,
      ),
      new TableColumn(
        a.VARIABLES_COLUMN_VALUE,
        this.var_63.localizationManager.getLocalization("wiredmenu.inspection.variables.value"),
        0.35,
        nr.RIGHT,
      ),
    ];
    (this.var_505.initialize(e),
      (this.var_505._r8c425bdeb05a56 = this._r188c9b37d62907),
      (this.var_505._r27f14abfd832a6 = this._r0574d8e88983a1));
  }
  createCreateVariableBubble() {
    let e = this.var_63._r41f5cc7d3516ce,
      r = e.presetManager.wiredCtrl._rd65848eed931f7("search_tree_dropdown");
    (this.variablePickerContainer.addChild(r),
      (this.var_1454 = new Rg(e, r, this._r963ee624ff95ca, this.variableFilter)),
      (this.var_1454.width = this.variablePickerContainer.width),
      (this.createVariableBubble.visible = !1));
  }
  _r4ed121b53b9fee = n((e) => {
    let r = this.var_63.data;
    (this.var_63.send(new _i005f5c7f12e414(r._racdc611b14035d, r.entityId)),
      this._loadingIcon.setVisible(this.loadingIconWindow, !0));
  }, "_r4ed121b53b9fee");
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r188c9b37d62907 = n((e, r, t) => {
    if (r !== a.VARIABLES_COLUMN_VALUE) return;
    let i = e,
      s = i?.variable;
    if (i == null || s == null || !this.hasWritePermission || !s.hasValue || !s.canWriteValue) return;
    let o = this.var_63.data,
      d = we.getIntFromString(t, -2147483648, !0);
    d !== -2147483648 &&
      (this.var_63.send(
        new _i024537317bf672(o._racdc611b14035d, o.entityId, s.variableId, d, _i295cc0f54ad8ea._r012cec707c5cae),
      ),
      this._loadingIcon.setVisible(this.loadingIconWindow, !0));
  }, "_r188c9b37d62907");
  get hasWritePermission() {
    return this.var_63._r41f5cc7d3516ce._rb3d0033404b557.hasWritePermission;
  }
  _r3e6369d6ab2ee0 = n((e) => {
    this.createVariableBubble.visible
      ? (this.createVariableBubble.visible = !1)
      : this.var_63._r41f5cc7d3516ce._rf5e384520bc525.getAllVariables(this._rfefb2cb67822d3, !0);
  }, "_r3e6369d6ab2ee0");
  windowProcedure = n((e, r) => {
    e.type === u.CLICK &&
      this.createVariableBubble.visible &&
      r.name !== "add_var_btn" &&
      !this.createVariableBubble.windowIsChild(r) &&
      (this.createVariableBubble.visible = !1);
  }, "windowProcedure");
  _rfefb2cb67822d3 = n((e) => {
    (this.var_1454.init(new b7(e), "", 1),
      we.disableSection(this.createVariableButton, !0),
      (this.createVariableBubble.visible = !0));
  }, "_rfefb2cb67822d3");
  _rba85e733a82b0c = n((e) => {
    if (this.var_63.data == null) return;
    let r = this.var_505.selected;
    if (r == null) return;
    let t = r.variable;
    if (!this.hasWritePermission || !t.canCreateAndDelete) return;
    let i = this.var_63.data;
    (this.var_63.send(
      new _i024537317bf672(i._racdc611b14035d, i.entityId, t.variableId, 0, _i295cc0f54ad8ea._r4b63c66ccdba21),
    ),
      this._loadingIcon.setVisible(this.loadingIconWindow, !0));
  }, "_rba85e733a82b0c");
  onCreateVariableClicked = n((e) => {
    if (this.var_63.data == null) return;
    let r = this.var_1454.selected;
    if (r == null) return;
    this.var_1454._rfe938462bb3aca();
    let t = 0;
    r.hasValue && (t = Number(this.valueInput.text) | 0);
    let i = this.var_63.data;
    (this.var_63.send(
      new _i024537317bf672(i._racdc611b14035d, i.entityId, r.variableId, t, _i295cc0f54ad8ea._r8bdac588a2e61f),
    ),
      this._loadingIcon.setVisible(this.loadingIconWindow, !0),
      (this.createVariableBubble.visible = !1),
      (this.valueInput.text = "0"));
  }, "onCreateVariableClicked");
  _r0574d8e88983a1 = n((e) => {
    this.updateButtonsUI();
  }, "_r0574d8e88983a1");
  variableFilter = n((e) => {
    (we.disableSection(this.valueSettingContainer, e != null && !e.hasValue),
      we.disableSection(this.createVariableButton, e == null));
  }, "variableFilter");
  _r963ee624ff95ca = n((e) => {
    let r = this.var_63.data;
    return e.canCreateAndDelete && (r == null || !r._r1385185994d461.has(e.variableId)) && e.isPersisted;
  }, "_r963ee624ff95ca");
  updateButtonsUI() {
    let e = !1,
      r = !1;
    if (this.hasWritePermission) {
      let t = this.var_505.selected;
      (t != null && t.variable != null && t.variable.canCreateAndDelete && (e = !0), (r = !0));
    }
    (we.disableSection(this.deleteVariableButton, !e), we.disableSection(this.addVariableButton, !r));
  }
  _rc988afb7ff02bf() {
    let e = this.var_63.data;
    if (e == null) {
      this._r91d0f3b8adbd5f.clearPreviewer();
      return;
    }
    e._racdc611b14035d === RoomObjectTypeEnum.OBJECT_TYPE_PET
      ? this._r91d0f3b8adbd5f._r20256ca8da1a8f(e._r6bb9e6143b8637)
      : this._r91d0f3b8adbd5f._r19cf6ecad22778(e._r6bb9e6143b8637, e.entityId);
  }
  updateInfoBoxUI() {
    let e = this.var_63.data;
    if (e == null) {
      this.infoBoxText.text = "";
      return;
    }
    e._racdc611b14035d === RoomObjectTypeEnum.OBJECT_TYPE_USER
      ? (this.infoBoxText.text = this.var_63.localizationManager.getLocalizationWithParams(
          "wiredmenu.variable_management_detail.info.user",
          "",
          "name",
          e.entityName,
          "id",
          String(e.entityId),
        ))
      : e._racdc611b14035d === RoomObjectTypeEnum.OBJECT_TYPE_PET
        ? (this.infoBoxText.text = this.var_63.localizationManager.getLocalizationWithParams(
            "wiredmenu.variable_management_detail.info.pet",
            "",
            "name",
            e.entityName,
            "id",
            String(e.entityId),
            "owner_name",
            e.ownerName,
            "owner_id",
            String(e.ownerId),
          ))
        : e._racdc611b14035d === RoomObjectTypeEnum.const_965 &&
          (this.infoBoxText.text = this.var_63.localizationManager.getLocalizationWithParams(
            "wiredmenu.variable_management_detail.info.bot",
            "",
            "name",
            e.entityName,
            "id",
            String(e.entityId),
            "owner_name",
            e.ownerName,
            "owner_id",
            String(e.ownerId),
          ));
  }
  _rfe6c88105047ed() {
    let e = this.var_63.data,
      r = [],
      t = new B();
    for (let s of e._rb053559623c506) {
      let o = this.var_63._r54ee84f78e6609[s.variableId];
      o != null && (r.push(o), t.add(o.variableId, s.value));
    }
    we._r5c461577938819(r);
    let i = [];
    for (let s of r) {
      if (s.isInvisible) continue;
      let o = this.hasWritePermission && s.hasValue && s.canWriteValue;
      i.push(new Og(s, t.getValue(s.variableId), o, !1, this.var_63.localizationManager));
    }
    this.var_505._rb800e4dd98c360(i);
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get refreshButton() {
    return this._window.findChildByName("refresh_btn");
  }
  get loadingIconWindow() {
    return this._window.findChildByName("searching_icon");
  }
  get previewWindow() {
    return this._window.findChildByName("info_box");
  }
  get infoBoxText() {
    return this._window.findChildByName("info_box_text");
  }
  get variableValuesTableContainer() {
    return this._window.findChildByName("variable_values_table_container");
  }
  get deleteVariableButton() {
    return this._window.findChildByName("delete_var_btn");
  }
  get addVariableButton() {
    return this._window.findChildByName("add_var_btn");
  }
  get createVariableBubble() {
    return this._window.findChildByName("create_var_bubble");
  }
  get variablePickerContainer() {
    return this.createVariableBubble.findChildByName("var_picker_container");
  }
  get valueInputBorder() {
    return this.createVariableBubble.findChildByName("value_input_border");
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

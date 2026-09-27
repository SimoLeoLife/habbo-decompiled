// Estratto da HabboAirLauncher.deobf.js, riga 348979.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/NewVariablePicker.as
// Nome offuscato: _idb6f7a3eb29739

class a {
  constructor(e, r, t = null, i = null, s = null) {
    this._roomEvents = e;
    this._container = r;
    this.var_2197 = t;
    this.var_4231 = i;
    ((this._r2acde49b54f0e7 = this._container.findChildByName("input_field_region")),
      (this.style = this._container.findChildByName("expanded_view_wrapper")),
      this.style.desktop.addChild(this.style),
      (this.style.visible = !1),
      this.setWiredStyle(s),
      this._r89e1f2fabc646e.addEventListener(u.CLICK, this._r4c99054f35c70f),
      this.inputField.addEventListener(u.CLICK, this._r4c99054f35c70f),
      this.cancelSearchButton.addEventListener(u.CLICK, this._r00484675cfe68d),
      this.inputField.addEventListener(y.WINDOW_EVENT_CHANGE, this._ra1b4c33cbd9ea2),
      this.inputField.addEventListener(sr.const_900, this._r5f2ba22bd03811),
      (this.inputPlaceholderText.visible = !0),
      this._r777b04550a9fa2.setParamFlag(class_2094._r5f5ff9955e2bf4, !1),
      this._r777b04550a9fa2.addEventListener(y.const_210, this._r47d4bdc5fbafb8),
      this.collapseView(!0));
  }
  static {
    n(this, "NewVariablePicker");
  }
  static UNSPECIFIED_TYPE = 2147483647;
  _disposed = !1;
  style;
  _r2acde49b54f0e7;
  _isExpanded = !1;
  _r947daf5e524edc = !0;
  _allVariables = null;
  _r43f9e5017d81b2 = [];
  _selected = null;
  _variableTarget = 0;
  _r59edf2994c8812 = new Map();
  var_5258 = null;
  var_1103 = !1;
  var_234 = null;
  get disposed() {
    return this._disposed;
  }
  get _r4c9b549e0dbdb0() {
    return this.var_234;
  }
  get _r3285ab2be5b85e() {
    return this._r947daf5e524edc;
  }
  get _r963ee624ff95ca() {
    return this.var_2197;
  }
  get _r41f5cc7d3516ce() {
    return this._roomEvents;
  }
  get variableTarget() {
    return this._variableTarget;
  }
  get _re5fad65d75b7cf() {
    return this._r43f9e5017d81b2;
  }
  get selected() {
    return (this.updateSelected(), this._selected);
  }
  get window() {
    return this._container;
  }
  get inputField() {
    return this._r2acde49b54f0e7.findChildByName("input_field");
  }
  set width(e) {
    this._container.width = e;
  }
  init(e, r, t) {
    ((this._allVariables = e),
      (this._variableTarget = t),
      (this.var_5258 = r),
      (this.var_1103 = !1),
      (this._r59edf2994c8812 = new Map()),
      (this._r43f9e5017d81b2 = this._r23ac2fe0653da4),
      this.select(this._r20e36218db9fd8(r), !0),
      this.var_234 != null &&
        this.var_234.selectTab(
          this.var_234._r8c2d3170c4e6b4(this._r9dc676bfa09f5f()),
        ));
  }
  set variableTarget(e) {
    e !== this._variableTarget &&
      (this.collapseView(),
      this.updateSelected(),
      (this._variableTarget = e),
      (this._r43f9e5017d81b2 = this._r23ac2fe0653da4),
      this._r59edf2994c8812.has(e) ? this.select(this._r59edf2994c8812.get(e) ?? null) : this.select(null));
  }
  _r90dedf31e85b00(e) {
    for (let r of this._r43f9e5017d81b2) if (r.variableId === e) return r;
    return null;
  }
  select(e, r = !1) {
    (this.collapseView(),
      this._r59edf2994c8812.set(this._variableTarget, e),
      (this._selected = e),
      (this.inputField.text = e == null ? "" : e.variableName),
      this.updatePlaceholder(),
      !r && this.var_4231 != null && this.var_4231(e),
      (this.var_1103 = !1));
  }
  _rfe938462bb3aca() {
    (this.updateSelected(),
      this._selected != null && this._roomEvents._rb85a698a5a11d9._rec171ee514ff0f(this._selected));
  }
  dispose() {
    this._disposed ||
      (this.var_234 != null &&
        (this.style.desktop.removeChild(this.style),
        this.var_234.dispose(),
        (this.var_234 = null)),
      (this._container = null),
      (this._disposed = !0));
  }
  setWiredStyle(e) {
    e != null &&
      e.name === K1.NAME &&
      ((this.collapsedView.style = 105),
      (this.style.findChildByName("expanded_view").style = 105));
  }
  _r20e36218db9fd8(e) {
    for (let r of this._r43f9e5017d81b2) if (r.variableId === e) return r;
    return null;
  }
  get _r23ac2fe0653da4() {
    if (this._allVariables == null || this._allVariables.variables == null) return [];
    let e = [];
    for (let r of this._allVariables.variables)
      if (
        (this.var_2197 == null || this._r947daf5e524edc || this.var_2197(r)) &&
        r.variableName !== "" &&
        (r.variableTarget === this._variableTarget || this._variableTarget === a.UNSPECIFIED_TYPE)
      ) {
        if (r.isInvisible && this.var_5258 !== r.variableId) continue;
        e.push(r);
      }
    return e;
  }
  updateSelected() {
    let e = this._rb28758b560fac2(this.inputField.text);
    (e != null && this._selected !== e && this.select(e),
      this.inputField.text === "" && this._selected != null && this.select(null));
  }
  collapseView(e = !1) {
    (!this._isExpanded && !e) ||
      ((this._isExpanded = !1),
      (this.collapsedView.visible = !0),
      (this._r777b04550a9fa2.visible = !1),
      this._r777b04550a9fa2.deactivate(),
      this._ra08476212675b4(this.searchWrapperCollapsed),
      this.var_234 != null && this.var_234._r083999418603c4());
  }
  _ra37d4b172a1654() {
    if (this._isExpanded) return;
    ((this._isExpanded = !0), (this.collapsedView.visible = !1));
    let e = new E();
    (this._container.getGlobalPosition(e),
      (e.y -= this.searchWrapperExpanded.y),
      this._r777b04550a9fa2.setGlobalPosition(e),
      (this._r777b04550a9fa2.visible = !0),
      this._r777b04550a9fa2.activate(),
      this._ra08476212675b4(this.searchWrapperExpanded),
      this.inputField.focus(),
      this._r5f9f099bce08c1(),
      (this.var_1103 = !1));
  }
  _r5f9f099bce08c1() {
    if (this.var_234 != null) {
      this.var_234._r815d8e1a23bbd1();
      return;
    }
    ((this.var_234 = new ExpandedVariablePickerView(this, this._r777b04550a9fa2)),
      this.var_234.selectTab(
        this.var_234._r8c2d3170c4e6b4(this._r9dc676bfa09f5f()),
      ));
  }
  _r9dc676bfa09f5f() {
    return this._selected == null
      ? fh.USER_CREATED_TAB_ID
      : this._selected.variableType === class_3973.var_4430
        ? fh.DYNAMIC_TAB_ID
        : this._selected.variableType === class_3973.INTERNAL
          ? fh.INTERNAL_TAB_ID
          : fh.USER_CREATED_TAB_ID;
  }
  _ra08476212675b4(e) {
    (this._r89e1f2fabc646e.parent.removeChild(this._r89e1f2fabc646e),
      e.addChild(this._r89e1f2fabc646e),
      (this._r89e1f2fabc646e.width = e.width),
      (this._r89e1f2fabc646e.height = e.height));
  }
  _rb28758b560fac2(e) {
    for (let r of this._r43f9e5017d81b2) {
      if (this.var_2197 != null && !this.var_2197(r)) continue;
      if (r.variableName.toLowerCase() === e.toLowerCase()) return r;
      let t = r.variableName;
      if (e.toLowerCase() === t.toLowerCase()) return r;
    }
    return null;
  }
  updatePlaceholder() {
    ((this.cancelSearchButton.visible = this.inputField.text.length > 0),
      (this.inputPlaceholderText.visible = this.inputField.text.length === 0));
  }
  _r47d4bdc5fbafb8 = n((e) => {
    if (this.var_1103) {
      let r = this._rb28758b560fac2(this.inputField.text);
      (r != null ? this.select(r) : this.select(this._selected), (this.var_1103 = !1));
    }
    this.collapseView();
  }, "_r47d4bdc5fbafb8");
  _r5f2ba22bd03811 = n((e) => {
    if (e.keyCode === 27) this.collapseView();
    else if (e.keyCode === 13) {
      let r = this._rb28758b560fac2(this.inputField.text);
      if (r != null) {
        this.select(r);
        return;
      }
      if (this.inputField.text === "") {
        this.select(null);
        return;
      }
      if (this.var_234 != null && this._isExpanded) {
        let t = this.var_234._r4bc00060b1deef;
        if (t != null && t.tabConfig.tabId === fh.var_4803) {
          let i = this.var_234._r942e984982a1e9;
          if (i != null && i.childNodes.length >= 1) {
            let s = i.childNodes[0].childrenCount;
            s.variable != null && s._r70b9577f42d34d(this) && this.select(s.variable);
          } else this.select(null);
        }
      }
    }
  }, "_r5f2ba22bd03811");
  _ra1b4c33cbd9ea2 = n((e) => {
    (this._isExpanded &&
      this.var_234 != null &&
      this.var_234.selectTab(this.var_234._r8c2d3170c4e6b4(fh.var_4803), !0),
      this.updatePlaceholder(),
      (this.var_1103 = !0));
  }, "_ra1b4c33cbd9ea2");
  _r4c99054f35c70f = n((e) => {
    (this.inputField.focus(), this._ra37d4b172a1654());
  }, "_r4c99054f35c70f");
  _r00484675cfe68d = n((e) => {
    ((this.inputField.text = ""),
      this.select(null),
      this.updatePlaceholder(),
      this.inputField.focus(),
      this._ra37d4b172a1654());
  }, "_r00484675cfe68d");
  get collapsedView() {
    return this._container.findChildByName("collapsed_view");
  }
  get _r777b04550a9fa2() {
    return this.style;
  }
  get _r89e1f2fabc646e() {
    return this._r2acde49b54f0e7;
  }
  get inputPlaceholderText() {
    return this._r2acde49b54f0e7.findChildByName("input_placeholder_text");
  }
  get searchWrapperCollapsed() {
    return this._container.findChildByName("search_wrapper_collapsed");
  }
  get searchWrapperExpanded() {
    return this.style.findChildByName("search_wrapper_expanded");
  }
  get cancelSearchButton() {
    return this.style.findChildByName("cancel_search");
  }
}

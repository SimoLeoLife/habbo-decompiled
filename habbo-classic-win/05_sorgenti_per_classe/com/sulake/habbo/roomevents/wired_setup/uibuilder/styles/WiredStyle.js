// Estratto da HabboAirLauncher.deobf.js, riga 348112.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/styles/WiredStyle.as
// Nome offuscato: _ide5b1bd84cddf1

class {
  constructor(e) {
    this._roomEvents = e;
  }
  static {
    n(this, "WiredStyle");
  }
  get _r8a62babd393b34() {
    return null;
  }
  get _r37b6f3a188afa5() {
    return 0;
  }
  get _r14f8a38920765a() {
    return 0;
  }
  get _r39828ec55175ec() {
    return 0;
  }
  get _rd42dcd651e498c() {
    return 0;
  }
  get _re1a23e452323b1() {
    return 0;
  }
  get _r67711c14f11b19() {
    return 0;
  }
  get _re041d2b38efa47() {
    return 0;
  }
  get _r7ac8f2f1de8d9e() {
    return 0;
  }
  get _r249f7dc0054eba() {
    return 0;
  }
  get sectionSpacing() {
    return 0;
  }
  get _r7e371558824804() {
    return 0;
  }
  get headerMargin() {
    return 0;
  }
  get _r2e51ad3fe430b0() {
    return 0;
  }
  get _r4239ed861c5525() {
    return 0;
  }
  get frameColor() {
    return 0;
  }
  get backgroundColor() {
    return 0;
  }
  get _r60aa9c8a95196d() {
    return 0;
  }
  get _rd0446e3f3ad08b() {
    return 0;
  }
  get surroundingBorderStyleId() {
    return 0;
  }
  get _r7e92fef08f7bc0() {
    return 0;
  }
  get softTextColor() {
    return 0;
  }
  get _re46fddc77f91b3() {
    return 0;
  }
  get _r926c709eeb6518() {
    return 0;
  }
  get _r32a1311efedade() {
    return 0;
  }
  get _ra36ec7bfa287d9() {
    return 0;
  }
  get _rcf71f0841acc48() {
    return 0;
  }
  get _ra3ba1f0505ab21() {
    return 0;
  }
  get _r5996c272a01c79() {
    return 0;
  }
  get _re06eb3065bb85c() {
    return 0;
  }
  get _r0aeae51937870c() {
    return 0;
  }
  get _r9cc205fa488cbc() {
    return 0;
  }
  get _r29dc4604529ee0() {
    return 0;
  }
  get _r96ba3b58934003() {
    return 0;
  }
  get name() {
    return "";
  }
  get _r22e5f52e5a4bd4() {
    return !1;
  }
  get _raa005026a78275() {
    return !1;
  }
  get _rd0f2f1fb2e65b0() {
    return 0;
  }
  get _r4f913423e4e30d() {
    return 0;
  }
  get _r222ee14594bf90() {
    return 0;
  }
  get _rbabe0a195ae226() {
    return 0;
  }
  createSplitterView() {
    return this.recreateElement("ruler_view");
  }
  createSplitterVerticalView() {
    return this.recreateElement("ruler_view_vertical");
  }
  createTextView(e = !0) {
    return this.recreateElement(e ? "text_bold_view" : "text_view");
  }
  createHtmlView() {
    return this.recreateElement("text_html");
  }
  createTextInputView() {
    return this.recreateElement("input_template");
  }
  createCheckboxView() {
    return this.recreateElement("checkbox_view");
  }
  createRadioButtonView() {
    return this.recreateElement("radiobutton_view");
  }
  createExpandCollapseSectionRegion() {
    return this.recreateElement("expand_collapse_region");
  }
  createSourceTypeSelector() {
    return this.recreateElement("sourcetype_selector_view");
  }
  createDropdown() {
    return this.recreateElement("dropdown_view");
  }
  createSlider() {
    return this.recreateElement("slider");
  }
  createButton() {
    return this.recreateElement("button");
  }
  createAssetButton() {
    return this.recreateElement("asset_button");
  }
  createIconButton(e) {
    return this.recreateElement(`iconbutton_${e}`);
  }
  createMiniButton() {
    return this.recreateElement("mini_button_view");
  }
  createFrame() {
    return this.recreateElement("frame");
  }
  createQuickMenu() {
    return this.recreateElement("quick_menu");
  }
  createInnerBorder() {
    return this.recreateElement("inner_border");
  }
  createBorder() {
    return this.recreateElement("border");
  }
  createSurroundingBorder() {
    let e = this.createBorder();
    return (this.surroundingBorderStyleId > 0 && (e.style = this.surroundingBorderStyleId), e);
  }
  createContainerButton() {
    return this.recreateElement("container_button");
  }
  createTradeRequirementRule() {
    return this.recreateElement("requirement_rule");
  }
  createProductIconPreviewer() {
    return this.recreateElement("product_icon_previewer");
  }
  recreateElement(e) {
    let t = this._r8a62babd393b34.findChildByName(e).clone();
    return ((t.visible = !0), t);
  }
}

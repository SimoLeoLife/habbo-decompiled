// Extracted from HabboAirLauncher.deobf.js, line 354869.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/PresetManager.as
// Obfuscated name: _i92ed2c8b2a0d70

class {
  constructor(e) {
    this._roomEvents = e;
  }
  static {
    n(this, "PresetManager");
  }
  _ra092f9a99731a8 = new B();
  _r0ab20465555e47(e, ...r) {
    let t = new e(this._roomEvents, this, this.wiredStyle);
    return (t._re7a03a855dfd32(...r), t);
  }
  _ra6e545ffa959b0() {
    return this._r0ab20465555e47(UnkWiredUIPresetSubclass_a56bd5);
  }
  createSpacer(e) {
    return this._r0ab20465555e47(SpacerPreset, e);
  }
  createSpacing(e, r) {
    return this._r0ab20465555e47(SpacingPreset, e, r);
  }
  _r9277dc31a7a45c(e) {
    return this._r0ab20465555e47(FX, e);
  }
  _rfc879c483b7738(e) {
    return this._r0ab20465555e47(AlignRightWrapperPreset, e);
  }
  _rfc1cf96cd0e480(e) {
    return this._r0ab20465555e47(UnkWiredUIPresetSubclass_5e8308, e);
  }
  _r73f3ef8811b6bb(e, r) {
    return this._r0ab20465555e47(UnkWiredUIPresetSubclass_b3e067, e, r);
  }
  _r352f8eb89f25af(e) {
    return this._r0ab20465555e47(FloatVerticallyPreset, e);
  }
  WindowWrapperPreset(e, r = !1) {
    return this._r0ab20465555e47(WindowWrapperPreset, e, r);
  }
  createSimpleListView(e, r, t = !1) {
    return this._r0ab20465555e47(SimpleListViewPreset, e, r, t);
  }
  _rce286bbba4c3cf(e) {
    return this._r0ab20465555e47(HorizontalSectionListPreset, e);
  }
  _r5ce8ba4791791e(e, r, t, i, s, o = null, d = !1) {
    return this._r0ab20465555e47(PaddedContainerPreset, e, r, t, i, s, o, d);
  }
  createContainerButtonPreset(e, r, t = !0) {
    return this._r0ab20465555e47(ContainerButtonPreset, e, r, t);
  }
  _rf51615997619f2(e, r, t, i, s) {
    return this._r5ce8ba4791791e(e, r, t, i, s, this.wiredStyle.createSurroundingBorder());
  }
  _rf9d5676b014871(e, r, t = null) {
    return this._r0ab20465555e47(CenteredContainerPreset, e, r, t);
  }
  createText(e, r = Se.DEFAULT) {
    return this._r0ab20465555e47(TextPreset, e, r);
  }
  createHtml(e, r) {
    return this._r0ab20465555e47(HtmlPreset, e, r);
  }
  _r178edc7e663bd7(e) {
    return this._r0ab20465555e47(TextInputPreset, e);
  }
  createNumberInput(e) {
    return this._r0ab20465555e47(OMe, e);
  }
  createDropdown(e) {
    return this._r0ab20465555e47(DropdownPreset, e);
  }
  createVariablePicker(e = null, r = null) {
    return this._r0ab20465555e47(VariablePickerPreset, e, r);
  }
  createNamedNumberInput(e, r, t = !1) {
    return this._r0ab20465555e47(NamedNumberInputPreset, e, r, t);
  }
  createNamedTextInput(e, r, t = !1) {
    return this._r0ab20465555e47(NamedTextInputPreset, e, r, t);
  }
  _r066cec9fb0ddf0(e, r, t = !1) {
    return this._r0ab20465555e47(NamedDropdownPreset, e, r, t);
  }
  _r1cb85c1e1927d4(e) {
    return this._r0ab20465555e47(TextAreaPreset, e);
  }
  createApiKeySection(e, r, t = null) {
    return this._r0ab20465555e47(ApiKeySection, e, r, t);
  }
  createChronoRangeFilter(e, r, t, i, s, o, d) {
    return this._r0ab20465555e47(BWe, e, r, t, i, s, o, d);
  }
  createChronoMaskFilter(e, r = 1) {
    return this._r0ab20465555e47(ChronoMaskFilterPreset, e, r);
  }
  _rbf068f2e953c45(e, r, t = !1) {
    return this._r0ab20465555e47(VMe, e, r, t);
  }
  createButton(e, r, t = 0) {
    return this._r0ab20465555e47(WMe, e, r, t);
  }
  createButtonRow(e) {
    return this._r0ab20465555e47(ButtonRowPreset, e);
  }
  _r1f621d8be6c92c(e, r, t) {
    return this._r0ab20465555e47(AssetButtonPreset, e, r, t);
  }
  _r9ae51d526980e2(e) {
    return this._r0ab20465555e47(AssetButtonRowPreset, e);
  }
  _r0a2fd322495b52(e, r) {
    return this._r0ab20465555e47(RewardListPreset, e, r);
  }
  _r218bf37078a7ac() {
    return this._r0ab20465555e47(RewardRowPreset);
  }
  _r18ca88e24cd033() {
    return this._r0ab20465555e47(AvatarImagePreset);
  }
  _rd2781d694b92e9(e, r) {
    return this._r0ab20465555e47(UnkWiredUIPresetSubclass_33f394, e, r);
  }
  _r3ab83a89e25169(e, r, t) {
    return this.wiredStyle._r22e5f52e5a4bd4
      ? this._r0ab20465555e47(oWe, e, r, t)
      : this._r0ab20465555e47(PressedButtonMiniAssetIconButtonPreset, e, r, t);
  }
  _r7f887955812c30(e = !1) {
    return this._r0ab20465555e47(BitmapViewPreset, e);
  }
  _rdf116322ff7c88(e) {
    return this._r0ab20465555e47(AWe, e);
  }
  createFloorEditorPreset(e, r) {
    return this._r0ab20465555e47(FloorEditorPreset, e, r);
  }
  createLevelXpPreview(e) {
    return this._r0ab20465555e47(RWe, e);
  }
  createVariableFxVisualizationSettingsPreset(e) {
    return this._r0ab20465555e47(XWe, e);
  }
  createVariableFxValueRangePreset(e) {
    return this._r0ab20465555e47(VariableFxValueRangePreset, e);
  }
  createVariableFxVisibilitySettingsPreset(e) {
    return this._r0ab20465555e47(QWe, e);
  }
  createVariableFxAdvancedRangePreset(e) {
    return this._r0ab20465555e47(VariableFxAdvancedRangePreset, e);
  }
  _re34b3a159f26df(e) {
    return this._r0ab20465555e47(VWe, e);
  }
  _r6a91acc6a32633() {
    return this._r0ab20465555e47(jWe);
  }
  _rdfe511871b7d73(e, r) {
    return this._r0ab20465555e47(UWe, e, r);
  }
  _r3d3cc43bf190fd(e, r) {
    return this._r0ab20465555e47(tx, e, r);
  }
  createSubVariableCreator(e, r) {
    return this._r0ab20465555e47(SubVariableCreatorPreset, e, r);
  }
  createTextualButtonPreset(e, r) {
    return this._r0ab20465555e47(TextualButtonPreset, e, r);
  }
  createHeaderPreset(e, r, t, i, s, o, d, c = null) {
    if (this.wiredStyle._r22e5f52e5a4bd4) return this._r0ab20465555e47(VolterHeaderPreset, e, r, t, i, s, o, d, c);
    if (this.wiredStyle.name === K1.NAME) return this._r0ab20465555e47(IlluminaHeaderPreset, e, r, t, i, s, o, d, c);
    throw new Error("Header preset for unsupported style");
  }
  _rf9650eab5f15e1(e, r = !1) {
    return this._r0ab20465555e47(UX, e, r);
  }
  createRadioGroup(e, r = null, t = 1) {
    return this._r0ab20465555e47(RadioGroupPreset, e, r, t);
  }
  _r57e9c197ec2941(e, r = !1) {
    return this._r0ab20465555e47(CheckboxOptionPreset, e, r);
  }
  createCheckboxGroup(e, r = null, t = 1) {
    return this._r0ab20465555e47(CheckboxGroupPreset, e, r, t);
  }
  createSection(e, r, t = null) {
    return this._r0ab20465555e47(SectionPreset, e, r, t);
  }
  createBorderSection(e, r, t = null) {
    return this._r0ab20465555e47(BorderSection, e, r, t);
  }
  createSourceTypeSelector(e) {
    return this._r0ab20465555e47(SourceTypeSelectorPreset, e);
  }
  _rbdc5201760defe(e = null, r = !0) {
    return this._r0ab20465555e47(CollapseExpandSectionButtonPreset, e, r);
  }
  createBitmapWrapperPreset(e) {
    return this._r0ab20465555e47(StaticBitmapAssetWrapperPreset, e);
  }
  createUsageInfoSection(e, r = !1, t = null) {
    return this._r0ab20465555e47(UsageInfoSection, e, r, t);
  }
  createUsageWarningSection(e) {
    return this._r0ab20465555e47(UsageWarningSection, e);
  }
  createVariableNameSection() {
    return this._r0ab20465555e47(VariableNameSection);
  }
  _r5805d92f5d7823(e = 0, r = 1, t = 0) {
    return this._r0ab20465555e47(SliderPreset, e, r, t);
  }
  createSliderSection(e, r, t, i = 0, s = 1, o = 0, d = !0, c = null) {
    return this._r0ab20465555e47(SliderSection, e, r, t, i, s, o, d, c);
  }
  createFooterPreset(e, r) {
    return this._r0ab20465555e47(FooterPreset, e, r);
  }
  _r2c9ac233cf1a70(e, r, t = null, i = -1, s = !1, o = !1, d = null) {
    return this.wiredStyle._raa005026a78275
      ? this._r0ab20465555e47(UnkClass_8fa8f1, e, r, t, i, s)
      : this._r0ab20465555e47(YX, e, r, t, i, s, o, d);
  }
  createValueOrVariableSection(e, r, t, i, s) {
    return this._r0ab20465555e47(yWe, e, r, t, i, s);
  }
  createChooseVariableSection(e = -1, r = null, t = null, i = null, s = null) {
    return this._r0ab20465555e47(ChooseVariableSection, e, r, t, i, s);
  }
  createPlaceholderNameSection(e, r) {
    return this._r0ab20465555e47(PlaceholderNameSection, e, r);
  }
  createInputSourceSection(e, r, t, i = null, s = !1, o = !1) {
    return this._r0ab20465555e47(InputSourceSection, e, r, t, i, s, o);
  }
  createMenuPreset(e, r) {
    return this._r0ab20465555e47(MenuPreset, e, r);
  }
  _r4d997c69f06173(e, r) {
    return this._r0ab20465555e47(AdvancedSettingsWrapperPreset, e, r);
  }
  createPlaceholderTypeSection(e = null) {
    return this._r0ab20465555e47(PlaceholderTypeSection, e);
  }
  createVariablePlaceholderModeSection(e) {
    return this._r0ab20465555e47(VariablePlaceholderModeSection, e);
  }
  _r318831a25a6133(e, r, t, i = null, s = null) {
    return this._r0ab20465555e47(XX, e, r, t, i, s);
  }
  _rda46c8d1dccbc7(e, r) {
    return this._r0ab20465555e47(pWe, e, r);
  }
  _rb18365443e97a2() {
    return this._r0ab20465555e47(ChestItemIconPreviewerPreset);
  }
  _r0879e4ec3f0bd0() {
    return this._r0ab20465555e47(Pg);
  }
  _r7969a36e82cc45() {
    return this._r0ab20465555e47(ItemTypeSelectionSection);
  }
  createNodeOverviewPreset(e, r = null) {
    return this._r0ab20465555e47(UnkClass_5d656a, e, r);
  }
  get wiredStyle() {
    return this._roomEvents.presetManager.wiredStyle;
  }
  _rd65848eed931f7(e) {
    if (this._ra092f9a99731a8.hasKey(e)) return this._ra092f9a99731a8.getValue(e).clone();
    let r = this._roomEvents.getXmlWindow(e);
    if (r == null) throw new Error(`Missing wired layout: ${e}`);
    return (this._ra092f9a99731a8.add(e, r), r.clone());
  }
}

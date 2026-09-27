// Extracted from HabboAirLauncher.deobf.js, line 371686.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/settings/ChestSettingsUI.as
// Obfuscated name: _i635ff64ac26954

class extends AbstractUbuntuWiredUI {
  constructor(r, t) {
    super(r._r41f5cc7d3516ce, t);
    this.var_2898 = r;
    ((this._r9fcc4bb60fcd85 = new class_2418((T) => this.onUpdateSuccess(T))),
      this.var_2898.addMessageEvent(this._r9fcc4bb60fcd85));
    let i = t.wiredStyle,
      s = [new CheckboxOptionParam("${wiredchests.settings.access.open}"), new CheckboxOptionParam("${wiredchests.settings.access.donate}")];
    this.var_1661 = t.createCheckboxGroup(s);
    let o = t.createBorderSection("${wiredchests.settings.access}", this.var_1661);
    ((this._chestName = t._r178edc7e663bd7(new it("", 30))),
      (this._chestDesc = t._r1cb85c1e1927d4(new TextAreaParam(64, -1, 4, -1, 200, "", null, null, !0, !0))));
    let d = t.createSection("${wiredchests.settings.info.name}", this._chestName);
    d.splitterVisible = !1;
    let c = t.createSection("${wiredchests.settings.info.desc}", this._chestDesc),
      f = t.createSimpleListView(!0, [d, c]);
    f.spacing = i.sectionSpacing;
    let l = t.createBorderSection("${wiredchests.settings.info}", f),
      b = [0, 1, 2, 3].map((T) => new ExpandableDropdownOption(T, `\${wiredchests.settings.appearance.state.${T}}`)),
      _ = [0, 1, 2, 3, 4, 5, 6, 7].map((T) => new ExpandableDropdownOption(T, `\${wiredchests.settings.appearance.preview.${T}}`)),
      h = [1, 2, 3, 4].map((T) => new ExpandableDropdownOption(T, String(T)));
    this._chestState = t.createDropdown(new DropdownParam("${wiredchests.settings.appearance.state}", b));
    let p = t.createSection("${wiredchests.settings.appearance.state}", this._chestState);
    ((p.splitterVisible = !1),
      (this._openStateDropdown = t.createDropdown(
        new DropdownParam("${wiredchests.settings.appearance.preview}", _, (T) => this._rbbc84895892d95(T)),
      )),
      (this.var_2750 = t.createSection(
        "${wiredchests.settings.appearance.preview}",
        t.createSimpleListView(!0, [
          this._openStateDropdown,
          t.createText("${wiredchests.settings.appearance.preview.note}").halfBlend(),
        ]),
      )),
      (this._amountPreviewDropdown = t.createDropdown(
        new DropdownParam("${wiredchests.settings.appearance.preview_amount}", h),
      )),
      (this.var_1895 = t.createSection(
        "${wiredchests.settings.appearance.preview_amount}",
        this._amountPreviewDropdown,
      )));
    let m = t.createSimpleListView(!0, [p, this.var_2750, this.var_1895]);
    m.spacing = i.sectionSpacing;
    let v = t.createBorderSection("${wiredchests.settings.appearance}", m),
      w = t.createSimpleListView(
        !1,
        [
          t.createBitmapWrapperPreset("${image.library.url}catalogue/icon_80.png"),
          t.createText("${wiredchests.settings.wired.upgrade}", new Se(Se.MODE_STRETCH)),
        ],
        !0,
      );
    ((this.var_1816 = t.createContainerButtonPreset(w.alignCenter(), this.onClickUpgrade, !1)),
      (this.var_2320 = t.createBitmapWrapperPreset("icon_checkmark_small")),
      (this.var_5000 = t.createSimpleListView(!1, [this.var_1816, this.var_2320], !0)));
    let I = t.createBorderSection("${wiredchests.settings.wired}", this.var_5000),
      C = 420,
      W = UnkClass_c7f867._rd4b507212bb7db / 2.4,
      R = new ListScrollParams(!1, C, W, !0);
    ((this.framePreset = t._r2c9ac233cf1a70(
      [o, l, v, I, this._r43e1962e8d351e],
      this._rf4d9b06810c6a7,
      null,
      -1,
      !1,
      !1,
      R,
    )),
      this.framePreset.resizeToWidth(300));
  }
  static {
    n(this, "ChestSettingsUI");
  }
  var_1661;
  _chestName;
  _chestDesc;
  _chestState;
  var_2750;
  _openStateDropdown;
  var_1895;
  _amountPreviewDropdown;
  var_5000;
  var_1816;
  var_2320;
  var_1040 = null;
  _r9fcc4bb60fcd85;
  _chestType = 0;
  _chestId = -1;
  _chestItemType = 0;
  var_5047 = !1;
  onUpdateSuccess(r) {
    r.getParser().chestId === this._chestId &&
      !r.getParser()._r7c1255eeeb6c76 &&
      this.hideFrame();
  }
  hideFrame() {
    (super.hideFrame(), this.var_1040?.hide());
  }
  onClickUpgrade = n(() => {
    (this.var_1040 == null && (this.var_1040 = new WiredChestWiredUpdateConfirmationView(this)),
      this.var_1040.initialize(
        this._chestId,
        this._chestType,
        this._chestItemType,
        this.var_5047,
      ),
      this.var_1040.show());
  }, "onClickUpgrade");
  _r8995b60802dd34() {
    ((this.var_1816.disabled = !0), (this.var_2320.visible = !0), this._rf7f875b488f891());
  }
  _rbbc84895892d95(r) {
    this.var_1895.disabled = r.id === 0;
  }
  set chestType(r) {
    ((this._chestType = r),
      (this.var_2750.visible = this._chestType === class_4148.TYPE_FURNI),
      (this.var_1895.visible = this._chestType === class_4148.TYPE_FURNI));
    let t = this.localization.getLocalization(
      `wiredchests.${r === class_4148.TYPE_FURNI ? "furni" : "coin"}_chest`,
    );
    this.framePreset.title = this.localization.getLocalizationWithParams(
      "wiredchests.settings.title",
      "",
      "chest_type",
      t,
    );
  }
  onEdit(r, t, i, s, o) {
    ((this.chestType = t),
      (this._chestId = r),
      (this._chestItemType = i),
      (this.var_5047 = s),
      (this.var_1661.get(0).selected = o.getValue($s.const_1332) === "1"),
      (this.var_1661.get(1).selected = o.getValue($s.const_775) === "1"),
      (this._chestName.text = o.getValue($s.CHEST_NAME_KEY) ?? ""),
      (this._chestDesc.text = o.getValue($s.CHEST_DESC_KEY) ?? ""),
      (this._chestState.selectedId = Number(o.getValue($s.STATE_CONTROL_MODE) ?? 0)));
    let d = o.getValue($s.IS_WIRED_ENABLED) === "1";
    if (
      ((this.var_1816.disabled = d), (this.var_2320.visible = d), t === class_4148.TYPE_FURNI)
    ) {
      let c = Number(o.getValue($s.PREVIEW_MODE_KEY) ?? 0);
      ((this._openStateDropdown.selectedId = c),
        (this._amountPreviewDropdown.selectedId = Number(o.getValue($s.PREVIEW_AMOUNT_KEY) ?? 0)),
        (this.var_1895.disabled = c === 0));
    }
    this.showFrame();
  }
  _rf7f875b488f891 = n(() => {
    this.var_2898.send(
      new class_3057(
        this._chestId,
        this._chestName.text,
        this._chestDesc.text,
        this.var_1661.get(0).selected,
        this.var_1661.get(1).selected,
        this._chestState.selectedId,
        this._openStateDropdown.selectedId,
        this._amountPreviewDropdown.selectedId,
        this.var_1816.disabled,
      ),
    );
  }, "_rf7f875b488f891");
  get _r5c3b949c2324e7() {
    return this.var_2898;
  }
  dispose() {
    this.disposed ||
      (this.var_1040?.dispose(),
      (this.var_1040 = null),
      this.var_2898.removeMessageEvent(this._r9fcc4bb60fcd85),
      (this._r9fcc4bb60fcd85 = null),
      (this.var_2898 = null),
      super.dispose());
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 316506.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/dimmer/DimmerView.as
// Obfuscated name: _iec80e4a8c23e5f

class a {
  static {
    n(this, "DimmerView");
  }
  static _rd7f6a323d840d1 = 100;
  static _r8634183c488b34 = 100;
  _window = null;
  _tabContext = null;
  _r00d727cd35eec4 = null;
  var_17;
  _r33078bc5f13e99 = null;
  _r22bdd6f88a3f98 = null;
  _r1fc47cfc57aa49 = 0;
  _availableColors = 0;
  var_2807 = 0;
  constructor(e) {
    this.var_17 = e;
  }
  get _r926e05e4eb57e6() {
    return this._r1fc47cfc57aa49;
  }
  get _r4c047a67fec73a() {
    return this._availableColors;
  }
  get selectedType() {
    return this.var_2807;
  }
  dispose() {
    (this.hideInterface(), (this.var_17 = null));
  }
  showInterface() {
    (this._window == null && this.createWindow(),
      this._r40930e857d823e(this.var_17?.selectedPresetIndex ?? 0),
      this.update());
  }
  update() {
    if (this._window == null || this.var_17 == null) return;
    let e = this.var_17.isOn,
      r = this._window.findChildByName("on_off_button");
    r != null && (r.caption = e ? "${widget.dimmer.button.off}" : "${widget.dimmer.button.on}");
    let t = this._window.findChildByName("tabbedview");
    t != null && (t.visible = e);
    let i = this._window.findChildByName("apply_button");
    i != null && (e ? i.enable() : i.disable());
    let s = this._window.findChildByName("off_border");
    s != null && (s.visible = !e);
  }
  hideInterface() {
    (this.var_17?._re37fd0d61b9b10(),
      this._r33078bc5f13e99?.dispose(),
      (this._r33078bc5f13e99 = null),
      this._r22bdd6f88a3f98?.dispose(),
      (this._r22bdd6f88a3f98 = null),
      (this._tabContext = null),
      this._window?.dispose(),
      (this._window = null));
  }
  createWindow() {
    if (this.var_17?.windowManager == null || this.windowXML == null) return;
    ((this._window = this.var_17.windowManager.createWindow(
      "dimmerui_container",
      "",
      HabboWindowType.CONTAINER,
      HabboWindowStyle.DEFAULT,
      class_2094._r4884ed3c10147b | class_2094._r26338c8d88c4e5,
      new D(a._rd7f6a323d840d1, a._r8634183c488b34, 2, 2),
      null,
      0,
    )),
      this._window?.buildFromXML(this.windowXML));
    let e = this._window?.findChildByTag("close") ?? null;
    if (
      (e != null && (e.procedure = this.onWindowClose),
      (e = this._window?.findChildByName("color_grid_container") ?? null),
      e != null)
    ) {
      let i = e.findChildByName("color_grid");
      i != null &&
        (this._r33078bc5f13e99 = new DimmerViewColorGrid(
          this,
          i,
          this.var_17.windowManager,
          this.var_17.assets,
        ));
    }
    ((e = this._window?.findChildByName("brightness_container") ?? null),
      e != null && (this._r22bdd6f88a3f98 = new DimmerViewAlphaSlider(this, e, this.var_17.assets)),
      (this._tabContext = this._window?.findChildByName("tab_context")),
      this.selectTab(this.var_17?.selectedPresetIndex ?? 0));
    for (let i = 0; i < (this._tabContext?.numTabItems ?? 0); i++) {
      let s = this._tabContext?.getTabItemAt(i);
      (s?.setParamFlag(class_2094._r26338c8d88c4e5, !0), s != null && (s.procedure = this._rb4934a09f71c75));
    }
    ((e = this._window?.findChildByName("type_checkbox") ?? null),
      e?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      (e = this._window?.findChildByName("apply_button") ?? null),
      e?.addEventListener(u.CLICK, this._r7972d0b08e8494),
      (e = this._window?.findChildByName("on_off_button") ?? null),
      e?.addEventListener(u.CLICK, this._r7972d0b08e8494));
    let r = this._window?.findChildByName("off_image"),
      t = this.var_17.assets?.getAssetByName("dimmer_info");
    if (r != null && t != null) {
      r.bitmap = new A(r.width, r.height);
      let i = t.content;
      i != null && r.bitmap.copyPixels(i, i.rect, new E(0, 0));
    }
  }
  _r7972d0b08e8494 = n((e) => {
    switch (e.target?.name ?? "") {
      case "type_checkbox": {
        let i = e.target;
        if (i == null) return;
        ((this.selectedType = i.isSelected ? 2 : 1), this.var_17?._r629371c546d78c());
        break;
      }
      case "apply_button":
        this.var_17?._r84afbee0676c32(!0);
        break;
      case "cancel":
      case "close":
        this.hideInterface();
        break;
      case "on_off_button":
        this.var_17?._rac820bfc004f79();
        break;
    }
  }, "_r7972d0b08e8494");
  _rb4934a09f71c75 = n((e, r) => {
    e.type === y.const_238 &&
      (this.var_17?._r84afbee0676c32(!1), this._r40930e857d823e(r.id));
  }, "_rb4934a09f71c75");
  onWindowClose = n((e, r) => {
    e.type === u.CLICK && this.hideInterface();
  }, "onWindowClose");
  _r40930e857d823e(e) {
    if (this.var_17?.presets == null || e < 0 || e >= this.var_17.presets.length) return;
    this.var_17.selectedPresetIndex = e;
    let r = this.var_17.presets[e];
    r != null &&
      (this.selectTab(e),
      (this._r1fc47cfc57aa49 = r.light),
      this._r22bdd6f88a3f98?.setValue(this._r1fc47cfc57aa49),
      (this._availableColors = this.colors.indexOf(r.color)),
      this._r33078bc5f13e99?._r8cff1a329eacf8(this._availableColors),
      (this.selectedType = r.type),
      this.var_17._r629371c546d78c());
  }
  selectTab(e) {
    let r = this._tabContext?.getTabItemAt(e);
    r != null && this._tabContext?.selector?.setSelected(r);
  }
  get windowXML() {
    if (this._r00d727cd35eec4 != null) return this._r00d727cd35eec4;
    let e = this.var_17?.assets?.getAssetByName("dimmer_ui");
    return e?.content == null ? null : ((this._r00d727cd35eec4 = e.content), this._r00d727cd35eec4);
  }
  get colors() {
    return this.var_17?.colors ?? [];
  }
  set selectedType(e) {
    if (e !== 1 && e !== 2) return;
    this.var_2807 = e;
    let r = this._window?.findChildByName("type_checkbox");
    (r != null && (e === 2 ? r.select() : r.unselect()),
      this._r22bdd6f88a3f98 != null &&
        (this._r22bdd6f88a3f98.min = this.var_17?._r93c217d7b6ad70[e - 1] ?? 0));
  }
  set _r4c047a67fec73a(e) {
    ((this._availableColors = e),
      this._r33078bc5f13e99?._r8cff1a329eacf8(e),
      this.var_17?._r629371c546d78c());
  }
  set _r926e05e4eb57e6(e) {
    ((this._r1fc47cfc57aa49 = e),
      this._r22bdd6f88a3f98?.setValue(e),
      this.var_17?._r629371c546d78c());
  }
}

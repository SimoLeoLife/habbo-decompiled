// Estratto da HabboAirLauncher.deobf.js, riga 314409.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/areahide/AreaHideFurniWidget.as
// Nome offuscato: _ie4a34d39626df4

class a extends RoomWidgetBase {
  static {
    n(this, "AreaHideFurniWidget");
  }
  static _rb72e3995afd055 = !0;
  static _r8df4196772f135 = [
    "hidearea_info",
    "areaselection_title",
    "areaselection_info",
    "options_title",
    "invisibility_txt",
    "invisibility_info",
    "wallitems_txt",
    "invert_txt",
    "invert_info",
  ];
  _r59cc4b28e895a2 = null;
  _window = null;
  var_2196 = -1;
  var_1427 = !1;
  var_1811 = 0;
  var_1980 = 0;
  _width = 0;
  _length = 0;
  var_1776 = !1;
  var_2408 = !1;
  var_920 = !1;
  constructor(e, r, t, i, s) {
    (super(e, r, t, i), (this.handler.widget = this), (this._r59cc4b28e895a2 = s._r607a58da345e94));
  }
  get handler() {
    return this._handler;
  }
  dispose() {
    (this.destroyWindow(), super.dispose());
  }
  open(e, r, t, i, s, o, d, c, f) {
    ((this.var_2196 = e),
      (this.var_1427 = r),
      (this.var_1811 = t),
      (this.var_1980 = i),
      (this._width = s),
      (this._length = o),
      this.createWindow(),
      (this.invisibilityCheckbox.isSelected = d),
      (this.wallItemsEnabledCheckbox.isSelected = c),
      (this.invertEnabledCheckbox.isSelected = f),
      (this.var_1776 = !1),
      (this.var_2408 = !1),
      this.updateAreaSelecting(),
      this.refreshUI());
  }
  _rd77dfeac5f0c52(e, r) {
    this.isActive &&
      e === this.var_2196 &&
      r !== this.var_1427 &&
      ((this.var_1427 = r), this.updateAreaSelecting(), this.refreshUI());
  }
  get isActive() {
    return this._window != null && this._window.visible;
  }
  updateAreaSelecting() {
    this.var_1427
      ? this.var_920 && (this._r59cc4b28e895a2?.deactivate(), (this.var_920 = !1))
      : (this.var_920 ||
          (this.var_920 =
            this._r59cc4b28e895a2?.activate(this._rb4028484048086, class_3156.HIGHLIGHT_DARKEN) ?? !1),
        this.var_920 &&
          this._r59cc4b28e895a2?.setHighlight(
            this.var_1811,
            this.var_1980,
            this._width,
            this._length,
          ));
  }
  createWindow() {
    if (this._window == null) {
      let r = this.assets?.getAssetByName("area_hide_ui_xml")?.content;
      if (
        r == null ||
        ((this._window = this.windowManager?.buildFromXML(r)), this._window == null)
      )
        return;
      ((this._window.procedure = this.windowProcedure),
        this.invisibilityCheckbox.addEventListener(y.const_238, this._r2cce6cc6eace58),
        this.invisibilityCheckbox.addEventListener(y.const_1217, this._r2cce6cc6eace58),
        this.wallItemsEnabledCheckbox.addEventListener(y.const_238, this._r2cce6cc6eace58),
        this.wallItemsEnabledCheckbox.addEventListener(y.const_1217, this._r2cce6cc6eace58),
        this.invertEnabledCheckbox.addEventListener(y.const_238, this._r2cce6cc6eace58),
        this.invertEnabledCheckbox.addEventListener(y.const_1217, this._r2cce6cc6eace58),
        (this.applyButton.visible = !a._rb72e3995afd055),
        this._window.center());
    } else this._window.visible = !0;
  }
  hide() {
    this._window != null &&
      ((this._window.visible = !1),
      this.var_920 && (this._r59cc4b28e895a2?.deactivate(), (this.var_920 = !1)),
      (this.var_2196 = -1),
      (this.var_1427 = !1),
      (this.var_1811 = 0),
      (this.var_1980 = 0),
      (this._width = 0),
      (this._length = 0));
  }
  destroyWindow() {
    (this.hide(),
      this._window != null && (this._window.dispose(), (this._window = null)));
  }
  refreshUI() {
    this.var_1427
      ? ((this.onOffButton.caption =
          this.localizations?.getLocalization("widget.areahide.button.off") ?? ""),
        this._r6d37523b411b0c(!0))
      : ((this.onOffButton.caption =
          this.localizations?.getLocalization("widget.areahide.button.on") ?? ""),
        this._r6d37523b411b0c(!1),
        a.disableElement(!this.var_1776, this.applyButton),
        a.disableElement(this.var_2408 || !this.var_920, this.selectButton),
        a.disableElement(!this.var_920, this.clearButton));
  }
  _r6d37523b411b0c(e) {
    (a.disableElement(e, this.selectButton),
      a.disableElement(e, this.clearButton),
      a.disableElement(e, this.applyButton),
      a.disableElement(e, this.invisibilityCheckbox),
      (this.invisibilityCheckbox.blend = e ? 0.5 : 1),
      a.disableElement(e, this.wallItemsEnabledCheckbox),
      (this.wallItemsEnabledCheckbox.blend = e ? 0.5 : 1),
      a.disableElement(e, this.invertEnabledCheckbox),
      (this.invertEnabledCheckbox.blend = e ? 0.5 : 1));
    for (let r of a._r8df4196772f135) {
      let t = this._window?.findChildByName(r);
      t != null && (t.blend = e ? 0.5 : 1);
    }
  }
  static disableElement(e, r) {
    r != null && (e ? r.disable() : r.enable());
  }
  _rb4028484048086 = n((e, r, t, i) => {
    ((this.var_1811 = e),
      (this.var_1980 = r),
      (this._width = t),
      (this._length = i),
      (this.var_2408 = !1),
      this._r2cce6cc6eace58(null));
  }, "_rb4028484048086");
  _rfe2638ec0c12f8() {
    ((this.var_2408 = !0), this._r59cc4b28e895a2?._r7399110b76ac0e(), this.refreshUI());
  }
  _r31ca2acff44223() {
    this._r59cc4b28e895a2?.clearHighlight();
  }
  _rb94e3883482543() {
    this.handler.container?.connection?.send(new class_3808(this.var_2196));
  }
  _rc5279b9ea43d6d() {
    !this.var_1776 ||
      a._rb72e3995afd055 ||
      (this.updateData(), this.applyButton.disable());
  }
  updateData() {
    (this.handler.container?.connection?.send(
      new _i8f7de2cb7af146(
        this.var_2196,
        this.var_1811,
        this.var_1980,
        this._width,
        this._length,
        this.invisibilityCheckbox.isSelected,
        this.wallItemsEnabledCheckbox.isSelected,
        this.invertEnabledCheckbox.isSelected,
      ),
    ),
      (this.var_1776 = !1));
  }
  _r2cce6cc6eace58 = n((e) => {
    ((this.var_1776 = !0), a._rb72e3995afd055 && this.updateData(), this.refreshUI());
  }, "_r2cce6cc6eace58");
  windowProcedure = n((e, r) => {
    if (!(r == null || e.type !== u.CLICK))
      switch (r.name) {
        case "apply_button":
          this._rc5279b9ea43d6d();
          break;
        case "on_off_button":
          this._rb94e3883482543();
          break;
        case "select_button":
          this._rfe2638ec0c12f8();
          break;
        case "clear_button":
          this._r31ca2acff44223();
          break;
        case "header_button_close":
          this.hide();
          break;
      }
  }, "windowProcedure");
  get selectButton() {
    return (this._window?.deactivate(), this._window?.findChildByName("select_button"));
  }
  get clearButton() {
    return this._window?.findChildByName("clear_button");
  }
  get applyButton() {
    return this._window?.findChildByName("apply_button");
  }
  get onOffButton() {
    return this._window?.findChildByName("on_off_button");
  }
  get invisibilityCheckbox() {
    return this._window?.findChildByName("invisiblity_checkbox");
  }
  get wallItemsEnabledCheckbox() {
    return this._window?.findChildByName("wallitems_checkbox");
  }
  get invertEnabledCheckbox() {
    return this._window?.findChildByName("invert_checkbox");
  }
}

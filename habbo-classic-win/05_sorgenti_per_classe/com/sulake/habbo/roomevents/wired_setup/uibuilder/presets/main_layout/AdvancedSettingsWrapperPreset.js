// Estratto da HabboAirLauncher.deobf.js, riga 351537.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/AdvancedSettingsWrapperPreset.as
// Nome offuscato: _i4c02fecee8e5a2

class extends WiredUIPreset {
  static {
    n(this, "AdvancedSettingsWrapperPreset");
  }
  _container;
  _button = null;
  var_1274 = null;
  var_1081;
  _isExpanded = !1;
  _alwaysExpanded = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._alwaysExpanded = r),
      (this._container = this.var_102._rd65848eed931f7("vertical_list_view")),
      (this._container.spacing = this.var_40.sectionSpacing),
      (this.var_1081 = this.var_102.createSimpleListView(!0, e)),
      (this.var_1081.spacing = this.var_40.sectionSpacing),
      (this.var_1081.backgroundColor = this.var_40._r60aa9c8a95196d),
      (this._r4d8766392bf3dd = this.var_40.backgroundColor),
      r
        ? (this.expanded = !0)
        : ((this._button = this.var_102.createTextualButtonPreset(
            "${wiredfurni.params.sources.expand}",
            this.expandOrCollapse,
          )),
          (this.var_1274 = this._button.alignCenter()),
          this._container.addListItem(this.var_1274.window)));
  }
  set expanded(e) {
    this._isExpanded !== e &&
      !(this._alwaysExpanded && this._isExpanded) &&
      this.expandOrCollapse();
  }
  expandOrCollapse = n(() => {
    (this._isExpanded
      ? (this._container.removeListItem(this.var_1081.window),
        (this._isExpanded = !1),
        (this._r4d8766392bf3dd = this.var_40.backgroundColor))
      : (this._container.addListItem(this.var_1081.window),
        (this._isExpanded = !0),
        (this._r4d8766392bf3dd = this.var_40._r60aa9c8a95196d)),
      this._button != null &&
        ((this._button.text = this._isExpanded
          ? "${wiredfurni.params.sources.collapse}"
          : "${wiredfurni.params.sources.expand}"),
        this.var_1274.resizeToWidth(this._container.width)));
  }, "expandOrCollapse");
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e),
      (this._container.width = e),
      this.var_1274 != null && this.var_1274.resizeToWidth(e),
      this.var_1081.resizeToWidth(e));
  }
  get childPresets() {
    return this.var_1274 == null
      ? [this.var_1081]
      : [this.var_1274, this.var_1081];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this._button = null),
      (this.var_1274 = null),
      (this.var_1081 = null));
  }
}

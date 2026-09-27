// Extracted from HabboAirLauncher.deobf.js, line 352691.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/main_layout/HeaderPreset.as
// Obfuscated name: _i8cdb190f070733

class a extends WiredUIPreset {
  static {
    n(this, "HeaderPreset");
  }
  static const_526 = 0;
  static const_941 = 1;
  static BUTTON_MODE_VARIABLE_MENU = 2;
  static const_441 = 3;
  static const_1033 = 4;
  _container;
  var_295;
  _button = null;
  _r7ca70650cd508d = null;
  _width = 0;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s, o, d, c = null) {
    this._container = this.var_102._rd65848eed931f7("container_view");
    let f = [],
      l = this.createTopHeaderElement(e, r);
    (c != null &&
      ((this._r7ca70650cd508d = this.var_102.createSourceTypeSelector(c)),
      (l = this.var_102.createSimpleListView(!1, [l, this._r7ca70650cd508d], !0))),
      f.push(l),
      t === a.const_941
        ? (this._button = this.var_102.createTextualButtonPreset(this.loc("wiredfurni.applysnapshot"), i))
        : t === a.BUTTON_MODE_VARIABLE_MENU
          ? (this._button = this.var_102.createTextualButtonPreset(this.loc("wiredfurni.view_in_menu"), s))
          : t === a.const_441
            ? (this._button = this.var_102.createTextualButtonPreset(
                this.loc("wiredfurni.params.write_to_logs.view"),
                o,
              ))
            : t === a.const_1033 &&
              (this._button = this.var_102.createTextualButtonPreset(
                this.loc("wiredfurni.params.web_api.link"),
                d,
              )),
      this._button != null && ((this._button = this._button.alignCenter()), f.push(this._button)),
      (this.var_295 = this.var_102.createSimpleListView(!0, f)),
      this._container.addChild(this.var_295.window),
      (this.var_295.window.x = this.var_40.headerMargin),
      (this.var_295.window.y = this.var_40.headerMargin));
  }
  createTopHeaderElement(e, r) {
    throw new Error("HeaderPreset.createTopHeaderElement must be overridden");
  }
  updateName(e) {
    throw new Error("HeaderPreset.updateName must be overridden");
  }
  set buttonVisible(e) {
    this._button != null &&
      this._button.visible !== e &&
      ((this._button.visible = e), this.resizeToWidth(this._width));
  }
  get window() {
    return this._container;
  }
  get _rc97f2ad48b897f() {
    return this._r7ca70650cd508d;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._width = e));
    let r =
      this.var_40.headerMargin +
      (this._button == null || !this._button.visible
        ? this.var_40.headerMargin
        : this.var_40._r2e51ad3fe430b0);
    (this.var_295.resizeToWidth(e - this.var_40.headerMargin * 2),
      (this._container.width = e),
      (this._container.height = we._r917e2ee41e1dce(this.var_295.window) + r));
  }
  get childPresets() {
    return [this.var_295];
  }
  dispose() {
    this.disposed ||
      (super.dispose(),
      this._container.dispose(),
      (this._container = null),
      (this.var_295 = null),
      (this._button = null),
      (this._r7ca70650cd508d = null));
  }
}

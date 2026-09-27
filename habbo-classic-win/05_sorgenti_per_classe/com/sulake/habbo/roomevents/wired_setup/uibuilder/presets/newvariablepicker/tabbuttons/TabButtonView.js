// Extracted from HabboAirLauncher.deobf.js, line 348784.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/newvariablepicker/tabbuttons/TabButtonView.as
// Obfuscated name: _ibd071328082405

class a {
  constructor(e, r, t) {
    this._parent = e;
    this._tabConfig = r;
    ((this._window = this._parent._r31348c719f39bd.clone()),
      (this._window.width = t),
      (this._window.toolTipCaption = this._parent._r41f5cc7d3516ce.localization.getLocalization(
        this._tabConfig._rd71a50cfafad4e,
      )),
      (this.image.assetUri = this._tabConfig.assetUri),
      this._window.addEventListener(u.CLICK, this.onClick),
      this._window.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._window.addEventListener(u.OUT, this._rc963a69957f690),
      this.updateColoring());
  }
  static {
    n(this, "TabButtonView");
  }
  static SELECTED_BG = 14737632;
  static var_5894 = 4289374890;
  static HOVER_BG = 15724527;
  static var_5937 = 4291611852;
  static NONE_BG = 16448250;
  static NONE_SHADOW = 4292730333;
  _window;
  _disposed = !1;
  _active = !1;
  var_1463 = !1;
  set active(e) {
    ((this._active = e), this.updateColoring());
  }
  get tabConfig() {
    return this._tabConfig;
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this._parent = null),
      this._window.dispose(),
      (this._window = null),
      (this._tabConfig = null),
      (this._disposed = !0));
  }
  onClick = n((e) => {
    this._parent.selectTab(this);
  }, "onClick");
  _rc963a69957f690 = n((e) => {
    ((this.var_1463 = !1), this.updateColoring());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((e) => {
    ((this.var_1463 = !0), this.updateColoring());
  }, "_rb2fb7964bb4ade");
  updateColoring() {
    (this._active
      ? ((this.buttonBorder.color = a.SELECTED_BG),
        (this.buttonShadow.color = a.var_5894))
      : this.var_1463
        ? ((this.buttonBorder.color = a.HOVER_BG),
          (this.buttonShadow.color = a.var_5937))
        : ((this.buttonBorder.color = a.NONE_BG),
          (this.buttonShadow.color = a.NONE_SHADOW)),
      (this.image.blend = this._active ? 0.6 : this.var_1463 ? 0.5 : 0.4));
  }
  get buttonBorder() {
    return this._window.findChildByName("button_border");
  }
  get buttonShadow() {
    return this._window.findChildByName("button_shadow");
  }
  get image() {
    return this._window.findChildByName("button_img");
  }
}

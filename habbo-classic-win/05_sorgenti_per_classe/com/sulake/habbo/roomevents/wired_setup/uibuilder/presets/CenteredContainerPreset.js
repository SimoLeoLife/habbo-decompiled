// Extracted from HabboAirLauncher.deobf.js, line 345018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/CenteredContainerPreset.as
// Obfuscated name: _idf86305abdb876

class extends WiredUIPreset {
  static {
    n(this, "CenteredContainerPreset");
  }
  _window;
  _child;
  _rbb156ff11a3e87 = 0;
  _r66526b0d5ff393 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = null) {
    if (
      ((this._window = t ?? this.var_102._rd65848eed931f7("container_view")),
      this._window.addChild(e.window),
      (this._child = e),
      (this._child.window.y = r),
      (this._rbb156ff11a3e87 = r),
      this._child.window.addEventListener(y.const_755, this._r00f38425503ef3),
      !this._child.hasStaticWidth())
    )
      throw new Error("CenteredContainerPreset only works with static with children");
  }
  _r00f38425503ef3 = n((...e) => {
    this._r66526b0d5ff393 || this.resizeToWidth(this._window.width);
  }, "_r00f38425503ef3");
  get window() {
    return this._window;
  }
  get childPresets() {
    return [this._child];
  }
  resizeToWidth(e) {
    ((this._r66526b0d5ff393 = !0),
      super.resizeToWidth(e),
      (this._window.width = e),
      this._child.resizeToWidth(this._child.staticWidth),
      (this._window.height = this._child.window.height + this._rbb156ff11a3e87 * 2),
      (this._child.window.x = e / 2 - this._child.staticWidth / 2),
      (this._r66526b0d5ff393 = !1));
  }
  dispose() {
    this.disposed ||
      (this._child.window.removeEventListener(y.const_755, this._r00f38425503ef3),
      super.dispose(),
      this._window.dispose(),
      (this._window = null),
      (this._child = null));
  }
}

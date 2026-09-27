// Estratto da HabboAirLauncher.deobf.js, riga 345731.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/PaddedContainerPreset.as
// Nome offuscato: _ief57aad8ea1044

class extends WiredUIPreset {
  static {
    n(this, "PaddedContainerPreset");
  }
  _window;
  _child;
  _left = 0;
  _top = 0;
  _right = 0;
  _bottom = 0;
  _stretchMode = !1;
  _r6db042b01427fb = 0;
  _r66526b0d5ff393 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i, s, o = null, d = !1) {
    ((this._left = r),
      (this._top = t),
      (this._right = i),
      (this._bottom = s),
      (this._stretchMode = d),
      (this._window = o ?? this.var_102._rd65848eed931f7("growing_container_view")),
      this._window.addChild(e.window),
      (this._child = e),
      (this._child.window.x = this._left),
      (this._child.window.y = this._top),
      this._child.window.addEventListener(y.const_755, this._r00f38425503ef3));
  }
  _r00f38425503ef3 = n((...e) => {
    this._r66526b0d5ff393 || this.resizeToWidth(this._r6db042b01427fb);
  }, "_r00f38425503ef3");
  get window() {
    return this._window;
  }
  get childPresets() {
    return [this._child];
  }
  hasStaticWidth() {
    return this._stretchMode;
  }
  get staticWidth() {
    return this._stretchMode ? this._child.window.width + this._left + this._right : -1;
  }
  resizeToWidth(e) {
    ((this._r6db042b01427fb = e),
      (this._r66526b0d5ff393 = !0),
      this._stretchMode && (e = this.staticWidth),
      super.resizeToWidth(e),
      (this._window.width = e),
      this._child.resizeToWidth(e - this._left - this._right),
      (this._window.height = this._child.window.height + this._top + this._bottom),
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

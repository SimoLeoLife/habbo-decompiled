// Estratto da HabboAirLauncher.deobf.js, riga 163659.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/wardrobe/OutfitView.as
// Nome offuscato: _i0312bde8b3608d

class {
  static {
    n(this, "OutfitView");
  }
  var_997;
  _windowManager;
  _window;
  var_184 = null;
  _gradient = null;
  _button = null;
  _bgColor = 0;
  var_5625 = 0;
  _gradientColor = 0;
  var_5294 = 0;
  _active = !1;
  constructor(e, r, t) {
    ((this.var_997 = r), (this._windowManager = e));
    let i = this.var_997.getAssetByName("Outfit");
    ((this._window = i != null ? e.buildFromXML(i.content) : null),
      this._window != null &&
        ((this.var_184 = this._window.findChildByName("bitmap")),
        (this._gradient = this._window.findChildByName("outfit_gradient")),
        (this._button = this._window.findChildByName("button")),
        this._gradient != null && (this._gradient.visible = !1),
        t || this._button?.disable()));
  }
  dispose() {
    ((this.var_997 = null),
      (this._windowManager = null),
      this._window?.dispose(),
      (this._window = null),
      (this.var_184 = null),
      (this._gradient = null),
      (this._button = null));
  }
  update(e) {
    if (this.var_184 == null) return;
    (this.var_184.bitmap?.dispose(),
      (this.var_184.bitmap = new A(
        this.var_184.width,
        this.var_184.height,
        !0,
        16777215,
      )));
    let r = Math.floor((this.var_184.width - e.width) / 2),
      t = this.var_184.height - e.height;
    this.var_184.bitmap.copyPixels(e, e.rect, new E(r, t));
  }
  setColors(e, r, t, i) {
    ((this._bgColor = e),
      (this.var_5625 = r),
      (this._gradientColor = t),
      (this.var_5294 = i),
      this.updateBackgroundColors());
  }
  toggleActive(e) {
    ((this._active = e), this.updateBackgroundColors());
  }
  get window() {
    return this._window;
  }
  updateBackgroundColors() {
    if (
      (this._button != null &&
        (this._button.color = this._active ? this.var_5625 : this._bgColor),
      this._gradient != null)
    ) {
      if (this._gradientColor === -1) {
        this._gradient.visible = !1;
        return;
      }
      ((this._gradient.color = this._active ? this.var_5294 : this._gradientColor),
        (this._gradient.visible = !0));
    }
  }
}

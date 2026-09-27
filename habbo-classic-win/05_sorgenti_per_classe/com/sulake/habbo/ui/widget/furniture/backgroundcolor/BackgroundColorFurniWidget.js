// Estratto da HabboAirLauncher.deobf.js, riga 314695.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/backgroundcolor/BackgroundColorFurniWidget.as
// Nome offuscato: _i8c319734d71aaf

class a extends RoomWidgetBase {
  static {
    n(this, "BackgroundColorFurniWidget");
  }
  static PARAMETER_HUE = "hue";
  static PARAMETER_SATURATION = "saturation";
  static PARAMETER_LIGHTNESS = "lightness";
  _window = null;
  var_2287 = 0;
  _sliders = [];
  _hue = 0;
  var_2419 = 0;
  var_2379 = 0;
  constructor(e, r, t = null, i = null) {
    (super(e, r, t, i), (this.handler.widget = this));
  }
  get handler() {
    return this._handler;
  }
  dispose() {
    (this.destroyWindow(), super.dispose());
  }
  open(e, r, t, i) {
    ((this.var_2287 = e),
      (this._hue = Math.max(r, 0)),
      (this.var_2419 = Math.max(t, 0)),
      (this.var_2379 = Math.max(i, 0)),
      this.createWindow());
  }
  _rdaba70cb739ab9(e, r) {
    switch (e) {
      case a.PARAMETER_HUE:
        this._hue = r;
        break;
      case a.PARAMETER_SATURATION:
        this.var_2419 = r;
        break;
      case a.PARAMETER_LIGHTNESS:
        this.var_2379 = r;
        break;
    }
    this.renderColorPreview();
  }
  createWindow() {
    if (this._window != null) return;
    let r = this.assets?.getAssetByName("background_color_ui_xml")?.content;
    r != null &&
      ((this._window = this.windowManager?.buildFromXML(r)),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure),
        this._window.center(),
        this._sliders.push(
          new CX(this, a.PARAMETER_HUE, this._window.findChildByName("hue_container"), this._hue),
        ),
        this._sliders.push(
          new CX(
            this,
            a.PARAMETER_SATURATION,
            this._window.findChildByName("saturation_container"),
            this.var_2419,
          ),
        ),
        this._sliders.push(
          new CX(
            this,
            a.PARAMETER_LIGHTNESS,
            this._window.findChildByName("lightness_container"),
            this.var_2379,
          ),
        )));
  }
  destroyWindow() {
    for (let e of this._sliders) e.dispose();
    ((this._sliders = []),
      this._window != null && (this._window.dispose(), (this._window = null)));
  }
  renderColorPreview() {
    if (this._window == null) return;
    let e = this._window.findChildByName("color_preview_bitmap");
    if (e == null) return;
    let r = new A(e.width, e.height, !1),
      t = qn.hslToRGB(
        ((this._hue & 255) << 16) + ((this.var_2419 & 255) << 8) + (this.var_2379 & 255),
      );
    (r.fillRect(new D(0, 0, r.width, r.height), 4278190080 | t), e.bitmap?.dispose(), (e.bitmap = r));
  }
  windowProcedure = n((e, r) => {
    if (!(r == null || e.type !== u.CLICK))
      switch (r.name) {
        case "apply_button":
          this.handler.container?.connection?.send(
            new _ib2c61fc0e0aecc(this.var_2287, this._hue, this.var_2419, this.var_2379),
          );
          break;
        case "on_off_button":
          this.handler.container?.connection?.send(new class_3808(this.var_2287));
          break;
        case "header_button_close":
          this.destroyWindow();
          break;
      }
  }, "windowProcedure");
}

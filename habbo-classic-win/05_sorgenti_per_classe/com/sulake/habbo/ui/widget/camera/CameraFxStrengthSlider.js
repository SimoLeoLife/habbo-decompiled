// Extracted from HabboAirLauncher.deobf.js, line 303912.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/camera/CameraFxStrengthSlider.as
// Obfuscated name: _i3f410f62fc4912

class {
  constructor(e, r, t) {
    this._view = e;
    this.var_888 = r;
    (this.storeAssets(t), this.displaySlider());
  }
  static {
    n(this, "CameraFxStrengthSlider");
  }
  var_1390 = null;
  var_1416 = null;
  _rfbf73ef8a3e54d = null;
  _sliderBaseWidth = 0;
  _referenceWidth = 0;
  var_5541 = 0;
  dispose() {
    ((this._view = null),
      (this.var_888 = null),
      (this.var_1390 = null),
      (this.var_1416 = null),
      (this._rfbf73ef8a3e54d = null));
  }
  disable() {
    this.var_888 != null && (this.var_888.visible = !1);
  }
  enable() {
    this.var_888 != null && (this.var_888.visible = !0);
  }
  getScale() {
    return this._referenceWidth;
  }
  setValue(e) {
    let r = this.var_888?.findChildByName("slider_button") ?? null;
    r != null && (r.x = e);
  }
  buttonProcedure = n((e, r) => {
    e.type === y.const_475
      ? this._rfbf73ef8a3e54d != null &&
        (this._rfbf73ef8a3e54d.width = (r.x / this._referenceWidth) * this._sliderBaseWidth)
      : (e.type === u.UP || e.type === u.UP_OUTSIDE) && this._view?._rbd256feca047d6(r.x);
  }, "buttonProcedure");
  _r639d35c4795f37 = n((e, r) => {
    let t = e;
    if (e.type === u.DOWN && r.name === "shaft_click_area") {
      let i = t.localX - this.var_5541;
      (this.setValue(i), this._view?._rbd256feca047d6(i));
    }
  }, "_r639d35c4795f37");
  displaySlider() {
    if (this.var_888 == null) return;
    let e = this.var_888.findChildByName("shaft_click_area");
    e != null && (e.procedure = this._r639d35c4795f37);
    let r = this.var_888.findChildByName("slider_base");
    r != null &&
      this.var_1390 != null &&
      ((this._sliderBaseWidth = r.width),
      (r.bitmap = new A(this.var_1390.width, this.var_1390.height, !0, 16777215)),
      r.bitmap.copyPixels(this.var_1390, this.var_1390.rect, new E(0, 0), null, null, !0),
      (this._rfbf73ef8a3e54d = r));
    let t = this.var_888.findChildByName("slider_movement_area");
    if (t != null) {
      let i = t.findChildByName("slider_button");
      i != null &&
        this.var_1416 != null &&
        ((i.bitmap = new A(this.var_1416.width, this.var_1416.height, !0, 16777215)),
        i.bitmap.copyPixels(this.var_1416, this.var_1416.rect, new E(0, 0), null, null, !0),
        (i.procedure = this.buttonProcedure),
        (this._referenceWidth = t.width - i.width),
        (this.var_5541 = (this._sliderBaseWidth - this._referenceWidth) / 2));
    }
  }
  storeAssets(e) {
    if (e == null) return;
    let r = e.getAssetByName("camera_fx_slider_bottom_active"),
      t = e.getAssetByName("camera_fx_slider_button");
    ((this.var_1390 = r?.content), (this.var_1416 = t?.content));
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 314630.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/backgroundcolor/BackgroundColorWidgetSlider.as
// Obfuscated name: _i226e02bd3d4093

class a {
  static {
    n(this, "BackgroundColorWidgetSlider");
  }
  static name_3 = 0;
  static name_4 = 255;
  var_17;
  var_888;
  var_2471;
  var_1390 = null;
  var_1416 = null;
  _referenceWidth = 0;
  constructor(e, r, t, i = 0) {
    ((this.var_17 = e), (this.var_2471 = r), (this.var_888 = t));
    let s = e.assets?.getAssetByName("dimmer_slider_base");
    ((this.var_1390 = s?.content instanceof A ? s.content.clone() : null),
      (s = e.assets?.getAssetByName("dimmer_slider_button")),
      (this.var_1416 = s?.content instanceof A ? s.content.clone() : null),
      this.displaySlider(),
      this.setValue(i));
  }
  dispose() {
    ((this.var_17 = null),
      (this.var_888 = null),
      (this.var_1390 = null),
      (this.var_1416 = null));
  }
  setValue(e) {
    if (this.var_888 == null) return;
    let r = this.var_888.findChildByName("slider_button");
    r != null && (r.x = this.getSliderPosition(e));
  }
  getSliderPosition(e) {
    return Math.trunc(
      this._referenceWidth * ((e - a.name_3) / (a.name_4 - a.name_3)),
    );
  }
  getValue(e) {
    return (
      Math.trunc((e / this._referenceWidth) * (a.name_4 - a.name_3)) + a.name_3
    );
  }
  buttonProcedure = n((e, r) => {
    r != null && this.var_17?._rdaba70cb739ab9(this.var_2471, this.getValue(r.x));
  }, "buttonProcedure");
  displaySlider() {
    if (this.var_888 == null) return;
    let e = this.var_888.findChildByName("slider_base");
    e != null &&
      this.var_1390 != null &&
      (e.bitmap?.dispose(),
      (e.bitmap = new A(this.var_1390.width, this.var_1390.height, !0, 16777215)),
      e.bitmap.copyPixels(this.var_1390, this.var_1390.rect, new E(0, 0), null, null, !0));
    let r = this.var_888.findChildByName("slider_movement_area");
    r != null &&
      ((e = r.findChildByName("slider_button")),
      e != null &&
        this.var_1416 != null &&
        (e.bitmap?.dispose(),
        (e.bitmap = new A(this.var_1416.width, this.var_1416.height, !0, 16777215)),
        e.bitmap.copyPixels(this.var_1416, this.var_1416.rect, new E(0, 0), null, null, !0),
        (e.procedure = this.buttonProcedure),
        (this._referenceWidth = r.width - e.width)));
  }
}

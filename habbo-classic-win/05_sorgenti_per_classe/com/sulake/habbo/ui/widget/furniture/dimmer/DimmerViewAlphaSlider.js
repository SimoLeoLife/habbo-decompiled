// Extracted from HabboAirLauncher.deobf.js, line 316341.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/dimmer/DimmerViewAlphaSlider.as
// Obfuscated name: _i43436edd61d81f

class {
  static {
    n(this, "DimmerViewAlphaSlider");
  }
  _view;
  var_888;
  var_1390 = null;
  var_1416 = null;
  _referenceWidth = 0;
  name_3 = 0;
  name_4 = 255;
  constructor(e, r, t, i = 0, s = 255) {
    ((this._view = e),
      (this.var_888 = r),
      (this.name_3 = i),
      (this.name_4 = s),
      this.storeAssets(t),
      this.displaySlider());
  }
  dispose() {
    ((this._view = null),
      (this.var_888 = null),
      (this.var_1390 = null),
      (this.var_1416 = null));
  }
  setValue(e) {
    let r = this.var_888?.findChildByName("slider_button");
    r != null && (r.x = this.getSliderPosition(e));
  }
  set min(e) {
    ((this.name_3 = e), this.setValue(this._view?._r926e05e4eb57e6 ?? 0));
  }
  set max(e) {
    ((this.name_4 = e), this.setValue(this._view?._r926e05e4eb57e6 ?? 0));
  }
  getSliderPosition(e) {
    return Math.trunc(
      this._referenceWidth * ((e - this.name_3) / (this.name_4 - this.name_3)),
    );
  }
  getValue(e) {
    return (
      Math.trunc((e / this._referenceWidth) * (this.name_4 - this.name_3)) +
      this.name_3
    );
  }
  buttonProcedure = n((e, r) => {
    (e.type !== u.UP && e.type !== u.UP_OUTSIDE) || (this._view._r926e05e4eb57e6 = this.getValue(r.x));
  }, "buttonProcedure");
  displaySlider() {
    let e = this.var_888?.findChildByName("slider_base");
    e != null &&
      this.var_1390 != null &&
      ((e.bitmap = new A(this.var_1390.width, this.var_1390.height, !0, 16777215)),
      e.bitmap.copyPixels(this.var_1390, this.var_1390.rect, new E(0, 0), null, null, !0));
    let r = this.var_888?.findChildByName("slider_movement_area"),
      t = r?.findChildByName("slider_button");
    t != null &&
      this.var_1416 != null &&
      r != null &&
      ((t.bitmap = new A(this.var_1416.width, this.var_1416.height, !0, 16777215)),
      t.bitmap.copyPixels(this.var_1416, this.var_1416.rect, new E(0, 0), null, null, !0),
      (t.procedure = this.buttonProcedure),
      (this._referenceWidth = r.width - t.width));
  }
  storeAssets(e) {
    if (e == null) return;
    let r = e.getAssetByName("dimmer_slider_base");
    ((this.var_1390 = r?.content),
      (r = e.getAssetByName("dimmer_slider_button")),
      (this.var_1416 = r?.content));
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 323615.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/memenu/soundsettings/MeMenuSoundSettingsSlider.as
// Nome offuscato: _ieb0bad0ad93dbe

class {
  static {
    n(this, "MeMenuSoundSettingsSlider");
  }
  var_3471;
  var_888;
  var_1390 = null;
  var_1416 = null;
  _referenceWidth = 0;
  name_3 = 0;
  name_4 = 1;
  constructor(e, r, t, i = 0, s = 1) {
    ((this.var_3471 = e),
      (this.var_888 = r),
      (this.name_3 = i),
      (this.name_4 = s),
      this.storeAssets(t),
      this.displaySlider());
  }
  dispose() {
    ((this.var_3471 = null),
      (this.var_888 = null),
      (this.var_1390 = null),
      (this.var_1416 = null));
  }
  setValue(e) {
    let r = this.var_888?.findChildByName("slider_button");
    r != null && (r.x = this.getSliderPosition(e));
  }
  getSliderPosition(e) {
    return Math.trunc(
      this._referenceWidth * ((e - this.name_3) / (this.name_4 - this.name_3)),
    );
  }
  getValue(e) {
    return (
      (e / this._referenceWidth) * (this.name_4 - this.name_3) + this.name_3
    );
  }
  buttonProcedure = n((e, r) => {
    e.type === y.const_475 && this.var_3471?.saveVolume(this.getValue(r.x), !1);
  }, "buttonProcedure");
  displaySlider() {
    if (this.var_888 == null) return;
    let e = this.var_888.findChildByName("slider_base");
    e != null &&
      this.var_1390 != null &&
      ((e.bitmap = new A(this.var_1390.width, this.var_1390.height, !0, 16777215)),
      e.bitmap.copyPixels(this.var_1390, this.var_1390.rect, new E(0, 0), null, null, !0));
    let r = this.var_888.findChildByName("slider_movement_area"),
      t = r?.findChildByName("slider_button"),
      i = t?.findChildByName("slider_bitmap");
    r != null &&
      t != null &&
      i != null &&
      this.var_1416 != null &&
      ((i.bitmap = new A(this.var_1416.width, this.var_1416.height, !0, 16777215)),
      i.bitmap.copyPixels(this.var_1416, this.var_1416.rect, new E(0, 0), null, null, !0),
      (t.procedure = this.buttonProcedure),
      (this._referenceWidth = r.width - i.width));
  }
  storeAssets(e) {
    if (e == null) return;
    let r = e.getAssetByName("memenu_settings_slider_base"),
      t = e.getAssetByName("memenu_settings_slider_button");
    ((this.var_1390 = r?.content ?? null), (this.var_1416 = t?.content ?? null));
  }
}

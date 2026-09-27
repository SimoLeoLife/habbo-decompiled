// Extracted from HabboAirLauncher.deobf.js, line 343110.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/memenu/soundsettings/MeMenuSoundSettingsSlider.as
// Obfuscated name: _ieb0bad0ad93dbe

class {
  static {
    n(this, "MeMenuSoundSettingsSlider");
  }
  var_3471;
  var_888;
  _referenceWidth = 0;
  name_3;
  name_4;
  constructor(e, r, t, i = 0, s = 1) {
    ((this.var_3471 = e),
      (this.var_888 = r),
      (this.name_3 = i),
      (this.name_4 = s),
      this.displaySlider());
  }
  dispose() {
    ((this.var_3471 = null), (this.var_888 = null));
  }
  setValue(e) {
    if (this.var_888 == null) return;
    let r = this.var_888.findChildByName("slider_button");
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
    let e = this.var_888.findChildByName("slider_movement_area"),
      r = e?.findChildByName("slider_button");
    e != null &&
      r != null &&
      ((r.procedure = this.buttonProcedure), (this._referenceWidth = e.width - r.width));
  }
}

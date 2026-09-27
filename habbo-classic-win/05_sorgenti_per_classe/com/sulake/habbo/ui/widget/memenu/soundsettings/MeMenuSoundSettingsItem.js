// Estratto da HabboAirLauncher.deobf.js, riga 323683.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/memenu/soundsettings/MeMenuSoundSettingsItem.as
// Nome offuscato: _ie5ea7e9f3d3010

class a {
  static {
    n(this, "MeMenuSoundSettingsItem");
  }
  static TYPE_UI_VOLUME = 0;
  static TYPE_FURNI_VOLUME = 1;
  static TYPE_TRAX_VOLUME = 2;
  _type;
  _volume = 0;
  _window;
  var_1324;
  _reb2c84f8c553c1;
  constructor(e, r, t) {
    ((this._type = r),
      (this._reb2c84f8c553c1 = e),
      (this._window = t),
      (this.var_1324 = new MeMenuSoundSettingsSlider(
        this,
        this._window?.findChildByName("volume_container"),
        this._reb2c84f8c553c1.widget.assets,
        0,
        1,
      )));
    let i = this._window?.findChildByName("sounds_off");
    (i != null &&
      (i.addEventListener(u.CLICK, this.onButtonClicked),
      i.addEventListener(u.OVER, this._red32a7db371dad),
      i.addEventListener(u.OUT, this._rab0c9bb550a23d)),
      (i = this._window?.findChildByName("sounds_on")),
      i != null &&
        (i.addEventListener(u.CLICK, this.onButtonClicked),
        i.addEventListener(u.OVER, this._red32a7db371dad),
        i.addEventListener(u.OUT, this._rab0c9bb550a23d)),
      this.updateSoundIcons());
  }
  dispose() {
    this.disposed ||
      (this.var_1324?.dispose(),
      (this.var_1324 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._reb2c84f8c553c1 = null));
  }
  get disposed() {
    return this._reb2c84f8c553c1 == null;
  }
  saveVolume(e, r) {
    switch (((this._volume = e), this._type)) {
      case a.TYPE_UI_VOLUME:
        this._reb2c84f8c553c1?.saveVolume(e, -1, -1, r);
        break;
      case a.TYPE_FURNI_VOLUME:
        this._reb2c84f8c553c1?.saveVolume(-1, e, -1, r);
        break;
      case a.TYPE_TRAX_VOLUME:
        this._reb2c84f8c553c1?.saveVolume(-1, -1, e, r);
        break;
    }
    this.updateSoundIcons();
  }
  setValue(e) {
    (this.var_1324?.setValue(e), this.updateSoundIcons());
  }
  updateSoundIcons() {
    this._volume === 0
      ? (this.setBitmapWrapperContent("sounds_on_icon", this._reb2c84f8c553c1?._r0721d01809be62 ?? null),
        this.setBitmapWrapperContent("sounds_off_icon", this._reb2c84f8c553c1?._r8eedf593616fd9 ?? null))
      : (this.setBitmapWrapperContent("sounds_on_icon", this._reb2c84f8c553c1?._re36fde56567634 ?? null),
        this.setBitmapWrapperContent("sounds_off_icon", this._reb2c84f8c553c1?._r82b668c419e1d7 ?? null));
  }
  _red32a7db371dad = n((e) => {
    switch (e.target?.name) {
      case "sounds_off_icon":
      case "sounds_off":
        this.setBitmapWrapperContent("sounds_off_icon", this._reb2c84f8c553c1?._r8eedf593616fd9 ?? null);
        break;
      case "sounds_on_icon":
      case "sounds_on":
        this.setBitmapWrapperContent("sounds_on_icon", this._reb2c84f8c553c1?._re36fde56567634 ?? null);
        break;
    }
  }, "_red32a7db371dad");
  _rab0c9bb550a23d = n((e) => {
    switch (e.target?.name) {
      case "sounds_off":
        this._volume !== 0 &&
          this.setBitmapWrapperContent("sounds_off_icon", this._reb2c84f8c553c1?._r82b668c419e1d7 ?? null);
        break;
      case "sounds_on":
        this._volume !== 1 &&
          this.setBitmapWrapperContent("sounds_on_icon", this._reb2c84f8c553c1?._r0721d01809be62 ?? null);
        break;
    }
  }, "_rab0c9bb550a23d");
  onButtonClicked = n((e) => {
    switch (e.target?.name) {
      case "sounds_off":
        this.saveVolume(0, !1);
        break;
      case "sounds_on":
        this.saveVolume(1, !1);
        break;
      default:
        break;
    }
  }, "onButtonClicked");
  setBitmapWrapperContent(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && r != null && (t.bitmap = r.clone());
  }
}

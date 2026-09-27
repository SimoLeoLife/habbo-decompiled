// Extracted from HabboAirLauncher.deobf.js, line 343156.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1919838f137a34

class a {
  static {
    n(this, "UnkClass_191983");
  }
  static TYPE_UI_VOLUME = 0;
  static TYPE_FURNI_VOLUME = 1;
  static TYPE_TRAX_VOLUME = 2;
  _type;
  _volume = 0;
  _window;
  var_1324 = null;
  _re6b3fb096bb3ac;
  constructor(e, r, t) {
    ((this._type = r),
      (this._re6b3fb096bb3ac = e),
      (this._window = t),
      (this.var_1324 = new MeMenuSoundSettingsSlider_(
        this,
        this._window.findChildByName("volume_container"),
        e.toolbar.assets,
        0,
        1,
      )));
    let i = this._window.findChildByName("sounds_off");
    (i?.addEventListener(u.CLICK, this.onButtonClicked),
      (i = this._window.findChildByName("sounds_on")),
      i?.addEventListener(u.CLICK, this.onButtonClicked),
      this.updateSoundIcons());
  }
  get disposed() {
    return this._re6b3fb096bb3ac == null;
  }
  dispose() {
    this.disposed ||
      (this.var_1324?.dispose(),
      (this.var_1324 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._re6b3fb096bb3ac = null));
  }
  saveVolume(e, r) {
    switch (((this._volume = e), this._type)) {
      case a.TYPE_UI_VOLUME:
        this._re6b3fb096bb3ac?.saveVolume(e, -1, -1, r);
        break;
      case a.TYPE_FURNI_VOLUME:
        this._re6b3fb096bb3ac?.saveVolume(-1, e, -1, r);
        break;
      case a.TYPE_TRAX_VOLUME:
        this._re6b3fb096bb3ac?.saveVolume(-1, -1, e, r);
        break;
    }
    (this.updateSoundIcons(), this._re6b3fb096bb3ac?.updateSettings());
  }
  setValue(e) {
    ((this._volume = e), this.var_1324?.setValue(e), this.updateSoundIcons());
  }
  updateSoundIcons() {
    this._volume === 0
      ? (this.setBitmap("sounds_on_icon", "sounds_on_white"),
        this.setBitmap("sounds_off_icon", "sounds_off_color"))
      : (this.setBitmap("sounds_on_icon", "sounds_on_color"),
        this.setBitmap("sounds_off_icon", "sounds_off_white"));
  }
  onButtonClicked = n((e) => {
    switch (e.target?.name ?? "") {
      case "sounds_off":
        this.saveVolume(0, !1);
        break;
      case "sounds_on":
        this.saveVolume(1, !1);
        break;
    }
  }, "onButtonClicked");
  setBitmap(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.assetUri = `toolbar_memenu_settings_${r}`);
  }
}

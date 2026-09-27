// Extracted from HabboAirLauncher.deobf.js, line 343235.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/settings/SoundSettingsView.as
// Obfuscated name: _ia8ebcf7c6b2a30

class {
  static {
    n(this, "SoundSettingsView");
  }
  _window = null;
  var_1680 = null;
  var_1790 = null;
  var_1693 = null;
  _genericVolume = 1;
  _r70a2e859308b8c = 1;
  _ref047be92111d7 = 1;
  _toolbar;
  constructor(e) {
    ((this._toolbar = e), this.createWindow());
  }
  get window() {
    if (this._window == null) throw new Error("Sound settings window is not available.");
    return this._window;
  }
  get toolbar() {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    return this._toolbar;
  }
  get uiVolumeContainer() {
    return this.window.findChildByName("ui_volume_container");
  }
  get furniVolumeContainer() {
    return this.window.findChildByName("furni_volume_container");
  }
  get traxVolumeContainer() {
    return this.window.findChildByName("trax_volume_container");
  }
  dispose() {
    (this.saveVolume(this._genericVolume, this._r70a2e859308b8c, this._ref047be92111d7),
      this._window?.dispose(),
      (this._window = null),
      this.var_1680?.dispose(),
      (this.var_1680 = null),
      this.var_1790?.dispose(),
      (this.var_1790 = null),
      this.var_1693?.dispose(),
      (this.var_1693 = null),
      (this._toolbar = null));
  }
  updateSettings() {
    ((this._genericVolume = this.toolbar.musicController?._ref967bb06ebc0c ?? 1),
      (this._r70a2e859308b8c = this.toolbar.musicController?._r3ebcfbd6f36b12 ?? 1),
      (this._ref047be92111d7 = this.toolbar.musicController?._rb9df644ab4c279 ?? 1),
      this.var_1680?.setValue(this._genericVolume),
      this.var_1790?.setValue(this._r70a2e859308b8c),
      this.var_1693?.setValue(this._ref047be92111d7));
  }
  saveVolume(e, r, t, i = !0) {
    let s = r !== -1 ? r : this._r70a2e859308b8c,
      o = e !== -1 ? e : this._genericVolume,
      d = t !== -1 ? t : this._ref047be92111d7;
    this.toolbar.musicController != null &&
      (i
        ? ((this.toolbar.musicController._r3ebcfbd6f36b12 = s),
          (this.toolbar.musicController._ref967bb06ebc0c = o),
          (this.toolbar.musicController._rb9df644ab4c279 = d))
        : this.toolbar.musicController._r87d0112e1011e2(o, s, d));
  }
  updateUnseenItemCount(e, r) {}
  createWindow() {
    let e = this.toolbar.assets.getAssetByName("me_menu_sound_settings_xml");
    if (
      ((this._window = this.toolbar.windowManager.buildFromXML(e?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct sound settings window from XML.");
    for (let r = 0; r < this._window.numChildren; r++)
      this._window.getChildAt(r)?.addEventListener(u.CLICK, this.onButtonClicked);
    ((this.var_1680 = new A5(this, A5.TYPE_UI_VOLUME, this.uiVolumeContainer)),
      (this.var_1790 = new A5(this, A5.TYPE_FURNI_VOLUME, this.furniVolumeContainer)),
      (this.var_1693 = new A5(this, A5.TYPE_TRAX_VOLUME, this.traxVolumeContainer)),
      this.updateSettings());
  }
  onButtonClicked = n((e) => {
    e.target?.name === "back_btn" && this.dispose();
  }, "onButtonClicked");
}

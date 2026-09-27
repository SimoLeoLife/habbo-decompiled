// Extracted from HabboAirLauncher.deobf.js, line 323794.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/memenu/soundsettings/MeMenuSoundSettingsView.as
// Obfuscated name: _i885a2f84c1c472

class {
  static {
    n(this, "MeMenuSoundSettingsView");
  }
  var_17 = null;
  _window = null;
  var_1680 = null;
  var_1790 = null;
  var_1693 = null;
  _rcdebd798df29a3 = null;
  _r532ac950a42291 = null;
  windowManager = null;
  _r9767ddd01b3066 = null;
  _genericVolume = 1;
  _r70a2e859308b8c = 1;
  _ref047be92111d7 = 1;
  init(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    (this.saveVolume(this._genericVolume, this._r70a2e859308b8c, this._ref047be92111d7),
      (this.var_17 = null),
      this._window?.dispose(),
      (this._window = null),
      this.var_1680?.dispose(),
      (this.var_1680 = null),
      this.var_1790?.dispose(),
      (this.var_1790 = null),
      this.var_1693?.dispose(),
      (this.var_1693 = null),
      this._rcdebd798df29a3?.dispose(),
      (this._rcdebd798df29a3 = null),
      this._r532ac950a42291?.dispose(),
      (this._r532ac950a42291 = null),
      this.windowManager?.dispose(),
      (this.windowManager = null),
      this._r9767ddd01b3066?.dispose(),
      (this._r9767ddd01b3066 = null));
  }
  get window() {
    return this._window;
  }
  get uiVolumeContainer() {
    return this._window?.findChildByName("ui_volume_container");
  }
  get furniVolumeContainer() {
    return this._window?.findChildByName("furni_volume_container");
  }
  get traxVolumeContainer() {
    return this._window?.findChildByName("trax_volume_container");
  }
  get widget() {
    return this.var_17;
  }
  get _r8eedf593616fd9() {
    return this._rcdebd798df29a3;
  }
  get _r82b668c419e1d7() {
    return this._r532ac950a42291;
  }
  get _re36fde56567634() {
    return this.windowManager;
  }
  get _r0721d01809be62() {
    return this._r9767ddd01b3066;
  }
  updateSettings(e) {
    ((this._genericVolume = e._r8f5b65d437e79d),
      (this._r70a2e859308b8c = e._r3ebcfbd6f36b12),
      (this._ref047be92111d7 = e._rb9df644ab4c279),
      this.var_1680?.setValue(this._genericVolume),
      this.var_1790?.setValue(this._r70a2e859308b8c),
      this.var_1693?.setValue(this._ref047be92111d7));
  }
  saveVolume(e, r, t, i = !0) {
    let s = new RoomWidgetStoreSettingsMessage(i ? RoomWidgetStoreSettingsMessage.STORE_SOUND_SETTING : RoomWidgetStoreSettingsMessage.PREVIEW_SOUND_SETTING);
    ((s._ref967bb06ebc0c = e !== -1 ? e : this._genericVolume),
      (s._r3ebcfbd6f36b12 = r !== -1 ? r : this._r70a2e859308b8c),
      (s._rb9df644ab4c279 = t !== -1 ? t : this._ref047be92111d7),
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(s));
  }
  updateUnseenItemCount(e, r) {}
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("memenu_settings");
    if (
      (r != null && (this._window = this.var_17?.windowManager?.buildFromXML(r.content)),
      this._window == null)
    )
      throw new Error("Failed to construct sound settings window from XML!");
    this._window.name = e;
    for (let t = 0; t < this._window.numChildren; t++)
      this._window.getChildAt(t)?.addEventListener(u.CLICK, this.onButtonClicked);
    ((this._rcdebd798df29a3 =
      this.var_17?.assets?.getAssetByName("sounds_off_color")?.content?.clone() ?? null),
      (this._r532ac950a42291 =
        this.var_17?.assets?.getAssetByName("sounds_off_white")?.content?.clone() ?? null),
      (this.windowManager =
        this.var_17?.assets?.getAssetByName("sounds_on_color")?.content?.clone() ?? null),
      (this._r9767ddd01b3066 =
        this.var_17?.assets?.getAssetByName("sounds_on_white")?.content?.clone() ?? null),
      (this.var_1680 = new W5(this, W5.TYPE_UI_VOLUME, this.uiVolumeContainer)),
      (this.var_1790 = new W5(this, W5.TYPE_FURNI_VOLUME, this.furniVolumeContainer)),
      (this.var_1693 = new W5(this, W5.TYPE_TRAX_VOLUME, this.traxVolumeContainer)),
      this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetGetSettingsMessage(RoomWidgetGetSettingsMessage.GET_SETTINGS)));
  }
  onButtonClicked = n((e) => {
    switch (e.target?.name) {
      case "back_btn":
        this.var_17?.changeView(pb.const_723);
        break;
      default:
        break;
    }
  }, "onButtonClicked");
}

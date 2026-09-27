// Extracted from HabboAirLauncher.deobf.js, line 343485.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/SettingsExtension.as
// Obfuscated name: _i2ecd30a6111f49

class a {
  static {
    n(this, "SettingsExtension");
  }
  static SPACING = 3;
  static PADDING = 7;
  _toolbar;
  _window;
  var_34 = [];
  _disposed = !1;
  constructor(e) {
    this._toolbar = e;
    let r = e.assets.getAssetByName("settings_xml");
    if (((this._window = e.windowManager.buildFromXML(r?.content)), this._window == null))
      throw new Error("Failed to construct settings extension from XML.");
    ((this._window.procedure = this.windowProcedure),
      this.addButton(
        "sound",
        e.localization?.getLocalization("widget.memenu.settings.audio", "Sound settings") ??
          "Sound settings",
      ),
      this.addButton(
        "chat",
        e.localization?.getLocalization("widget.memenu.settings.chat", "Chat settings") ?? "Chat settings",
      ),
      this.addButton(
        "other",
        e.localization?.getLocalization("widget.memenu.settings.other", "Other settings") ??
          "Other settings",
      ),
      e.getBoolean("user.custom.filter.enabled") &&
        this.addButton(
          "word_filter",
          e.localization?.getLocalization("word_filter.settings.title", "Word filter") ?? "Word filter",
        ),
      e.extensionView?._ra96f07968c4ed0(ToolbarDisplayExtensionIds.const_1022, this._window, class_1954.SLOT_SETTINGS),
      (this._window.visible = !1));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    if (this._window == null) throw new Error("Settings extension window is not available.");
    return this._window;
  }
  dispose() {
    this._disposed ||
      ((this.var_34 = []),
      this._window?.dispose(),
      (this._window = null),
      (this._toolbar = null),
      (this._disposed = !0));
  }
  addButton(e, r) {
    if (this._toolbar == null || this._window == null) return;
    let t = this._toolbar.assets.getAssetByName("setting_category_xml"),
      i = this._toolbar.windowManager.buildFromXML(t?.content);
    if (i == null) throw new Error(`Failed to construct settings category "${e}".`);
    this._window.addChild(i);
    let s = i.findChildByName("button_label");
    (s != null && (s.caption = r),
      (i.y =
        this.var_34.length > 0
          ? this.var_34[this.var_34.length - 1].bottom + a.SPACING
          : a.PADDING),
      (i.x = a.PADDING),
      (i.name = e),
      (i.procedure = this.windowProcedure),
      this.var_34.push(i),
      (this._window.height =
        this.var_34[this.var_34.length - 1].bottom + a.PADDING));
  }
  _r6bac36d1e267c4() {
    if (this._toolbar == null) return;
    let e = new SoundSettingsView(this._toolbar),
      r = this._toolbar.windowManager.getDesktop(1);
    (r?.addChild(e.window), r != null && (e.window.x = r.width - e.window.width - 200));
  }
  _r9764164206f163() {
    if (this._toolbar == null) return;
    let e = new ChatSettingsView(this._toolbar),
      r = this._toolbar.windowManager.getDesktop(1);
    (r?.addChild(e.window), r != null && (e.window.x = r.width - e.window.width - 200));
  }
  _r16c04a34ffe3f0() {
    if (this._toolbar == null) return;
    let e = new WordFilterSettingsView(this._toolbar),
      r = this._toolbar.windowManager.getDesktop(1);
    (r?.addChild(e.window), r != null && (e.window.x = r.width - e.window.width - 200));
  }
  _r69c6c328f836ba() {
    if (this._toolbar == null) return;
    let e = new OtherSettingsView(this._toolbar),
      r = this._toolbar.windowManager.getDesktop(1);
    (r?.addChild(e.window), r != null && (e.window.x = r.width - e.window.width - 200));
  }
  openDiscordSettingsWindow() {
    this._toolbar?.context._r6b6c989018eb05?.("discord/settings/open");
  }
  windowProcedure = n((e, r) => {
    if (!(e.type !== u.CLICK || this._toolbar == null))
      switch (r.name) {
        case "sound":
          (this._r6bac36d1e267c4(), this._toolbar._r690eeac018f022());
          break;
        case "chat":
          (this._r9764164206f163(), this._toolbar._r690eeac018f022());
          break;
        case "other":
          (this._r69c6c328f836ba(), this._toolbar._r690eeac018f022());
          break;
        case "word_filter":
          (this._r16c04a34ffe3f0(), this._toolbar._r690eeac018f022());
          break;
        case "discord":
          (this.openDiscordSettingsWindow(), this._toolbar._r690eeac018f022());
          break;
      }
  }, "windowProcedure");
}

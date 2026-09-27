// Extracted from HabboAirLauncher.deobf.js, line 342799.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/settings/ChatSettingsView.as
// Obfuscated name: _ic57ad9cd4889d4

class {
  static {
    n(this, "ChatSettingsView");
  }
  _window = null;
  _toolbar;
  _r2362065603f8f4 = null;
  _rb95fc4558a5568 = null;
  _r63e4e815dac2e6 = null;
  var_3753 = !1;
  constructor(e) {
    ((this._toolbar = e), this.createWindow());
  }
  get window() {
    if (this._window == null) throw new Error("Chat settings window is not available.");
    return this._window;
  }
  dispose() {
    this._window != null &&
      (this._rbafa148fd28932(),
      this._r2362065603f8f4?.removeEventListener(y.const_238, this._r30173accee47fa),
      this._rb95fc4558a5568?.removeEventListener(y.const_238, this._r30173accee47fa),
      this._r63e4e815dac2e6?.removeEventListener(y.const_238, this._r30173accee47fa),
      this._window.dispose(),
      (this._window = null),
      (this._r2362065603f8f4 = null),
      (this._rb95fc4558a5568 = null),
      (this._r63e4e815dac2e6 = null),
      (this._toolbar = null));
  }
  createWindow() {
    if (this._toolbar == null) return;
    let e = this._toolbar.assets.getAssetByName("toolbar_chat_settings_xml");
    if (
      ((this._window = this._toolbar.windowManager.buildFromXML(e?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct chat settings window from XML.");
    ((this._window.procedure = this.onWindowEvent),
      (this._r2362065603f8f4 = this._window.findChildByName("chat_mode")),
      (this._rb95fc4558a5568 = this._window.findChildByName("chat_bubble_width")),
      (this._r63e4e815dac2e6 = this._window.findChildByName("chat_scroll_speed")),
      this._r2362065603f8f4?.addEventListener(y.const_238, this._r30173accee47fa),
      this._rb95fc4558a5568?.addEventListener(y.const_238, this._r30173accee47fa),
      this._r63e4e815dac2e6?.addEventListener(y.const_238, this._r30173accee47fa),
      (this.var_3753 = !0),
      this.populateTexts(),
      this.populateDropMenus(),
      this.updateSelections(),
      (this.var_3753 = !1));
  }
  populateTexts() {
    ((this.onDropMenuSelectionChanged("settings_title").caption = this.localize(
      "toolbar.chat.settings.title",
      "Chat settings",
    )),
      (this.onDropMenuSelectionChanged("chat_settings_info").caption = this.localize(
        "toolbar.chat.settings.info",
        "Choose how chat appears for you.",
      )),
      (this.onDropMenuSelectionChanged("chat_mode_label").caption = this.localize(
        "toolbar.chat.settings.mode",
        "Chat mode",
      )),
      (this.onDropMenuSelectionChanged("chat_bubble_width_label").caption = this.localize(
        "toolbar.chat.settings.bubble_width",
        "Bubble width",
      )),
      (this.onDropMenuSelectionChanged("chat_scroll_speed_label").caption = this.localize(
        "toolbar.chat.settings.scroll_speed",
        "Scroll speed",
      )));
  }
  populateDropMenus() {
    (this._r2362065603f8f4?.populate([
      this.localize("navigator.roomsettings.chat.mode.free.flow", "Free flow"),
      this.localize("navigator.roomsettings.chat.mode.line.by.line", "Line by line"),
    ]),
      this._rb95fc4558a5568?.populate([
        this.localize("navigator.roomsettings.chat.bubbles.width.wide", "Wide"),
        this.localize("navigator.roomsettings.chat.bubbles.width.normal", "Normal"),
        this.localize("navigator.roomsettings.chat.bubbles.width.thin", "Thin"),
      ]),
      this._r63e4e815dac2e6?.populate([
        this.localize("navigator.roomsettings.chat.speed.fast", "Fast"),
        this.localize("navigator.roomsettings.chat.speed.normal", "Normal"),
        this.localize("navigator.roomsettings.chat.speed.slow", "Slow"),
      ]));
  }
  updateSelections() {
    let e = this._toolbar?._rafd5b9130c4bfd ?? null;
    e != null &&
      (this._r2362065603f8f4 != null && (this._r2362065603f8f4.selection = e._r1209c95b94b7ec),
      this._rb95fc4558a5568 != null && (this._rb95fc4558a5568.selection = e._rfb3688c161b4cf),
      this._r63e4e815dac2e6 != null && (this._r63e4e815dac2e6.selection = e._rfae93ad34d06f6));
  }
  _rbafa148fd28932() {
    let e = this._toolbar?._rafd5b9130c4bfd ?? null;
    e == null ||
      this._r2362065603f8f4 == null ||
      this._rb95fc4558a5568 == null ||
      this._r63e4e815dac2e6 == null ||
      e.updateChatPreferences(
        this._rfd1430f6d315ab(this._r2362065603f8f4.selection, at._rea4a9248715b7b),
        this._rfd1430f6d315ab(this._rb95fc4558a5568.selection, at._r95dc862ed837a8),
        this._rfd1430f6d315ab(this._r63e4e815dac2e6.selection, at._rdac9c2703bca2d),
      );
  }
  _rfd1430f6d315ab(e, r) {
    return e >= 0 ? e : r;
  }
  _r30173accee47fa = n((e) => {
    this.var_3753 || this._rbafa148fd28932();
  }, "_r30173accee47fa");
  onWindowEvent = n((e, r) => {
    e.type === u.CLICK && r.name === "back_btn" && this.dispose();
  }, "onWindowEvent");
  onDropMenuSelectionChanged(e) {
    let r = this._window?.findChildByName(e);
    if (r == null) throw new Error(`Missing chat settings text window: ${e}`);
    return r;
  }
  localize(e, r) {
    return this._toolbar?.localization?.getLocalization(e, r) ?? r;
  }
}

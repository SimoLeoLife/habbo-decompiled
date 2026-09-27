// Estratto da HabboAirLauncher.deobf.js, riga 343317.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/settings/WordFilterSettingsView.as
// Nome offuscato: _ia79883c0fbd2af

class {
  static {
    n(this, "WordFilterSettingsView");
  }
  _toolbar;
  var_376 = -1;
  _window = null;
  _rfd03bc8894bb8c = [];
  _rb4d50006335087 = null;
  var_1358 = null;
  _messageEvents = [];
  constructor(e) {
    ((this._toolbar = e),
      this.addMessageEvent(new class_3653(this._r7dac9e349ff515)),
      this.addMessageEvent(new class_3443(this._r72dbc9c7dc57ef)),
      this.prepareWindow());
  }
  get disposed() {
    return this._toolbar == null;
  }
  get window() {
    if (this._window == null) throw new Error("Word filter settings window is not available.");
    return this._window;
  }
  dispose() {
    this.disposed || (this.disposeWindow(), (this._toolbar = null));
  }
  disposeWindow() {
    (this.removeMessageEvents(),
      this._window != null &&
        (this._window
          .findChildByName("remove_btn")
          ?.removeEventListener(u.CLICK, this._r7f5822d23b3305),
        this._window.findChildByName("add_btn")?.removeEventListener(u.CLICK, this._rdcd864de560f2d),
        this._window
          .findChildByName("back_btn")
          ?.removeEventListener(u.CLICK, this.onCloseButtonClick),
        (this._window.visible = !1),
        this._window.dispose(),
        (this._window = null)),
      this._rb4d50006335087?.dispose(),
      (this._rb4d50006335087 = null),
      this.var_1358?.dispose(),
      (this.var_1358 = null),
      (this._rfd03bc8894bb8c.length = 0));
  }
  prepareWindow() {
    if (this._toolbar == null || this._window != null) return;
    let e = this._toolbar.assets.getAssetByName("custom_word_filter_settings_xml");
    if (
      ((this._window = this._toolbar.windowManager.buildFromXML(e?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct word filter settings window from XML.");
    (this._window.findChildByName("remove_btn")?.addEventListener(u.CLICK, this._r7f5822d23b3305),
      this._window.findChildByName("add_btn")?.addEventListener(u.CLICK, this._rdcd864de560f2d),
      this._window.findChildByName("back_btn")?.addEventListener(u.CLICK, this.onCloseButtonClick),
      (this.var_1358 = this._window.findChildByName("add_word_input")),
      (this._rb4d50006335087 = this._window.findChildByName("wordlist")),
      this._toolbar.connection?.send(new _i4353025774e3ae()));
  }
  _r7dac9e349ff515 = n((e) => {
    let r = ClassUtils.getParser(e, ModifyCustomFilterResultMessageEventParser);
    if (r != null) {
      if (r.result === class_3653.const_519)
        this._rfd03bc8894bb8c.includes(r.word) || this._rfd03bc8894bb8c.push(r.word);
      else if (r.result === class_3653.const_692) {
        let t = this._rfd03bc8894bb8c.indexOf(r.word);
        t !== -1 && this._rfd03bc8894bb8c.splice(t, 1);
      }
      this._r686719edca9055();
    }
  }, "_r7dac9e349ff515");
  _r72dbc9c7dc57ef = n((e) => {
    let r = ClassUtils.getParser(e, GetCustomFilterResultMessageEventParser);
    if (r != null) {
      for (let t of r.words) this._rfd03bc8894bb8c.includes(t) || this._rfd03bc8894bb8c.push(t);
      (this._rb4d50006335087?.removeListItems(), this._r686719edca9055());
    }
  }, "_r72dbc9c7dc57ef");
  _r686719edca9055() {
    if (this._rb4d50006335087 != null) {
      this._rb4d50006335087.autoArrangeItems = !1;
      for (let e = 0; ; e++) {
        let r = this._rb4d50006335087.getListItemAt(e);
        if (r == null) {
          if (this._rfd03bc8894bb8c[e] == null) break;
          ((r = this.getListEntry(e)), this._rb4d50006335087.addListItem(r));
        }
        this._rfd03bc8894bb8c[e] != null
          ? ((r.color = this.getBgColor(e, !1)),
            this.refreshEntryDetails(r, this._rfd03bc8894bb8c[e]),
            (r.visible = !0),
            (r.height = 20))
          : ((r.height = 0), (r.visible = !1));
      }
      ((this._rb4d50006335087.autoArrangeItems = !0), this._rb4d50006335087.invalidate());
    }
  }
  refreshEntryDetails(e, r) {
    e.findChildByName("text").caption = r;
  }
  onCloseButtonClick = n((e) => {
    this.disposeWindow();
  }, "onCloseButtonClick");
  _rdcd864de560f2d = n((e) => {
    if (this._toolbar == null || this.var_1358 == null) return;
    let r = this.var_1358.text;
    r.length > 0 &&
      !this._rfd03bc8894bb8c.includes(r) &&
      (this._toolbar.connection?.send(new _i9b16f6efcf0c1c(r)),
      (this.var_1358.text = ""),
      (this.var_376 = -1));
  }, "_rdcd864de560f2d");
  _r7f5822d23b3305 = n((e) => {
    if (this._toolbar == null || this._rb4d50006335087 == null || this.var_376 < 0) return;
    let t =
      this._rb4d50006335087.getListItemAt(this.var_376)?.findChildByName("text")?.caption ?? "";
    t.length !== 0 && ((this.var_376 = -1), this._toolbar.connection?.send(new _i554493ea6e3661(t)));
  }, "_r7f5822d23b3305");
  refreshColorsAfterClick(e) {
    for (let r = 0; r < this._rfd03bc8894bb8c.length; r++) {
      let t = e.getListItemAt(r);
      t != null && (t.color = this.getBgColor(r, !1));
    }
  }
  getListEntry(e) {
    if (this._toolbar == null) throw new Error("Toolbar is not available.");
    let r = this._toolbar.assets.getAssetByName("custom_word_filter_item_xml"),
      t = this._toolbar.windowManager.buildFromXML(r?.content);
    if (t == null) throw new Error(`Failed to construct custom word filter item ${e}.`);
    let i = t.findChildByName("bg_region");
    return (
      i?.addEventListener(u.CLICK, this.onBgMouseClick),
      i?.addEventListener(u.OVER, this._re5021c6e476088),
      i?.addEventListener(u.OUT, this._r6f3f82f820fc78),
      (t.id = e),
      t
    );
  }
  getBgColor(e, r) {
    return e === this.var_376 ? 4288329945 : r ? 4290173439 : e % 2 !== 0 ? 4294967295 : 4293519841;
  }
  onBgMouseClick = n((e) => {
    let r = e.target?.parent,
      t = e.target?.findParentByName("wordlist");
    ((this.var_376 = r?.id ?? -1), t != null && this.refreshColorsAfterClick(t));
  }, "onBgMouseClick");
  _re5021c6e476088 = n((e) => {
    let r = e.target?.parent;
    r != null && (r.color = this.getBgColor(-1, !0));
  }, "_re5021c6e476088");
  _r6f3f82f820fc78 = n((e) => {
    let r = e.target?.parent;
    r != null && (r.color = this.getBgColor(r.id, !1));
  }, "_r6f3f82f820fc78");
  addMessageEvent(e) {
    this._toolbar != null &&
      this._messageEvents.push(this._toolbar._rf3db13932bfb60._r2e106e2349a0b6(e));
  }
  removeMessageEvents() {
    if (this._toolbar != null) {
      for (let e of this._messageEvents)
        (this._toolbar._rf3db13932bfb60._r7668362bf55fdd(e), e.dispose());
      this._messageEvents = [];
    }
  }
}

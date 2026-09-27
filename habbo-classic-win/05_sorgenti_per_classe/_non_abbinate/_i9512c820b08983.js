// Estratto da HabboAirLauncher.deobf.js, riga 323564.

class {
  static {
    n(this, "_i9512c820b08983");
  }
  var_17 = null;
  _window = null;
  init(e, r) {
    ((this.var_17 = e), this.createWindow(r));
  }
  dispose() {
    ((this.var_17 = null), this._window?.dispose(), (this._window = null));
  }
  get window() {
    return this._window;
  }
  updateUnseenItemCount(e, r) {}
  createWindow(e) {
    let r = this.var_17?.assets?.getAssetByName("memenu_settings_menu");
    if (
      (r != null && (this._window = this.var_17?.windowManager?.buildFromXML(r.content)),
      this._window == null)
    )
      throw new Error("Failed to construct settings window from XML!");
    if (
      ((this._window.name = e),
      (this._window.procedure = this.eventHandler),
      !ur.available || this.var_17?.config?.getProperty("has.identity") !== "1")
    )
      this._window.findChildByName("character_settings")?.disable();
    else {
      let t = this._window.findChildByName("identity_text");
      t != null && (t.visible = !1);
    }
  }
  eventHandler = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "character_settings":
          (Ae.openAvatars(), this.var_17?.hide());
          break;
        case "sound_settings":
          this.var_17?.changeView(pb.SOUND_SETTINGS_VIEW);
          break;
        case "back":
          this.var_17?.changeView(pb.MAIN_VIEW);
          break;
        default:
          break;
      }
  }, "eventHandler");
}

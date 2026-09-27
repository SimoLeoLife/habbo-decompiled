// Estratto da HabboAirLauncher.deobf.js, riga 307386.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/NewUserHelpView.as
// Nome offuscato: _i50731604c31b79

class extends AvatarContextInfoButtonView {
  static {
    n(this, "NewUserHelpView");
  }
  _caption = "";
  constructor(e) {
    (super(e),
      (this._caption = e.localization?.getLocalization("room.enter.infostand.caption", "") ?? ""),
      (this.var_4275 =
        e.configuration?.getInteger("room.enter.infostand.fade.start.delay", 5e3) ?? 5e3));
  }
  static setup(e, r, t, i, s) {
    AvatarContextInfoButtonView.setup(e, r, t, i, s, !1);
  }
  updateWindow() {
    let e = this.widget;
    if (!(e?.assets == null || e.windowManager == null)) {
      if (this._window == null) {
        let r = e.assets.getAssetByName("new_user_help")?.content ?? null;
        if (
          ((this._window = r != null ? e.windowManager.buildFromXML(r, 0) : null),
          this._window == null)
        )
          return;
        let t = this._window.findChildByName("help");
        (t != null && (t.caption = this._caption), this._window.invalidate());
      }
      this.activeView = this._window;
    }
  }
}

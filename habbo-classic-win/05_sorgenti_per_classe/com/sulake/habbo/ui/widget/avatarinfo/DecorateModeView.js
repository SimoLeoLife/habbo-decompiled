// Estratto da HabboAirLauncher.deobf.js, riga 307231.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/DecorateModeView.as
// Nome offuscato: _ie20aa5fa58d118

class extends AvatarContextInfoButtonView {
  static {
    n(this, "DecorateModeView");
  }
  constructor(e, r, t, i) {
    (super(e), (this.var_231 = !1), AvatarContextInfoButtonView.setup(this, r, t, i, RoomObjectTypeEnum.OBJECT_TYPE_USER));
  }
  updateWindow() {
    let e = this.widget;
    if (!(e?.assets == null || e.windowManager == null)) {
      if (this._window == null) {
        let r = e.assets.getAssetByName("own_avatar_decorating")?.content ?? null;
        if (
          ((this._window = r != null ? e.windowManager.buildFromXML(r, 0) : null),
          this._window == null)
        )
          return;
        (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
          this._window.addEventListener(u.OUT, this._r846ed7467efd50),
          (this.var_34 = this._window.findChildByName("buttons")),
          this.var_34 != null &&
            ((this.var_34.procedure = this.eventProc), this.updateButtons()));
      }
      this.activeView = this._window;
    }
  }
  show() {
    this.var_115 != null && ((this.var_115.visible = !0), this.var_115.activate());
  }
  hide(e) {
    (this.var_115 != null && (this.var_115.visible = !1), (this.var_199 = !1));
  }
  set activeView(e) {
    e != null && (this.var_115 = e);
  }
  isVisible() {
    return this.var_115 != null && this.var_115.visible;
  }
  updateButtons() {
    this.showButton("decorate");
  }
  eventProc = n((e, r) => {
    if (!(this.disposed || this._window?.disposed !== !1))
      if (e.type === u.CLICK) {
        if (r.name === "button")
          switch (r.parent?.name) {
            case "decorate":
              this.widget != null && (this.widget.isUserDecorating = !1);
              break;
          }
      } else
        e.type === u.OVER
          ? (super._rb8ed727c592c36(e, r), (this.var_199 = !0))
          : e.type === u.OUT
            ? (super._rb8ed727c592c36(e, r), (this.var_199 = !1))
            : super._rb8ed727c592c36(e, r);
  }, "eventProc");
  get maximumBlend() {
    return 0.8;
  }
}

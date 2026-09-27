// Extracted from HabboAirLauncher.deobf.js, line 315018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/guildfurnicontextmenu/GuildFurnitureContextMenuView.as
// Obfuscated name: _i65279069478f2e

class extends FurnitureContextInfoView {
  constructor(r, t, i) {
    super(r);
    this.var_1809 = t;
    this._windowManager = i;
    this.var_231 = !1;
  }
  static {
    n(this, "GuildFurnitureContextMenuView");
  }
  var_3597 = -1;
  var_3759 = -1;
  var_3587 = !1;
  var_3467 = !1;
  dispose() {
    ((this.var_1809 = null), (this._windowManager = null), super.dispose());
  }
  updateWindow() {
    if (this.var_17?.assets == null || this.var_17.windowManager == null) return;
    if (this.constructor._isMinimized) {
      this.activeView = this._r264c5b40440e9c();
      return;
    }
    if (this._window == null) {
      let t = this.var_17.assets.getAssetByName("guild_furni_menu")?.content ?? null;
      if (
        t == null ||
        ((this._window = this.var_17.windowManager.buildFromXML(t, 0)),
        this._window == null)
      )
        return;
      (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
        this._window.addEventListener(u.OUT, this._r846ed7467efd50),
        this._window.findChildByName("minimize")?.addEventListener(u.CLICK, this._r9f300ee1384194),
        this._window.findChildByName("minimize")?.addEventListener(u.OVER, this._r932b323057a22d),
        this._window.findChildByName("minimize")?.addEventListener(u.OUT, this._r932b323057a22d));
    }
    ((this.var_34 = this._window.findChildByName("buttons")),
      this.var_34 != null && (this.var_34.procedure = this._r8b6e9f027ac5db));
    let r = this._window.findChildByName("profile_link");
    (r != null &&
      ((r.procedure = this._r8b6e9f027ac5db),
      (r.toolTipCaption =
        this.widget?.localizations?.getLocalization(
          "infostand.profile.link.tooltip",
          "Click to view profile",
        ) ?? "Click to view profile"),
      (r.toolTipDelay = 100)),
      (this._window.findChildByName("name").caption = this.var_606),
      (this._window.visible = !1),
      (this.activeView = this._window),
      this.updateButtons(),
      (this.var_199 = !1));
  }
  updateButtons() {
    this._window == null ||
      this.var_34 == null ||
      ((this.var_34.autoArrangeItems = !1),
      this.showButton("join", !this.var_3587, !0),
      this.showButton("open_forum", this.var_3467, !0),
      (this.var_34.autoArrangeItems = !0),
      (this.var_34.visible = !0));
  }
  _rb8ed727c592c36(r, t) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let i = !1;
    if (r.type === u.CLICK) {
      if (t.name === "button")
        switch (t.parent?.name) {
          case "join":
            (this.widget?.handler._r01cb94d6bafa14(this.var_3597),
              this.showButton("join", !this.var_3587, !1));
            break;
          case "home_room":
            this.widget?.handler._r718403e5b5e39e(this.var_3759);
            break;
          case "open_forum": {
            this.widget?.roomEngine?.context?._r6b6c989018eb05?.(`groupforum/${this.var_3597}`);
            break;
          }
        }
      (t.name === "profile_link" && this.var_1809?._r7d6e59e242cdb0(this.var_3597), (i = !0));
    } else super._rb8ed727c592c36(r, t);
    i && this.var_17?.removeView(this, !1);
  }
  get widget() {
    return this.var_17;
  }
}

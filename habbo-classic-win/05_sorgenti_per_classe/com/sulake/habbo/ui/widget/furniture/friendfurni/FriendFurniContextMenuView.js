// Estratto da HabboAirLauncher.deobf.js, riga 314970.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/friendfurni/FriendFurniContextMenuView.as
// Nome offuscato: _ic2756adaa93116

class extends FurnitureContextInfoView {
  static {
    n(this, "FriendFurniContextMenuView");
  }
  constructor(e) {
    super(e);
  }
  updateWindow() {
    if (!(this.var_17?.assets == null || this.var_17.windowManager == null)) {
      if (this.constructor._isMinimized) {
        this.activeView = this._r264c5b40440e9c();
        return;
      }
      if (this._window == null || this._window.disposed) {
        let e = this.var_17.assets.getAssetByName("friendfurni_menu")?.content ?? null;
        if (
          e == null ||
          ((this._window = this.var_17.windowManager.buildFromXML(e, 0)),
          this._window == null)
        )
          return;
        (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
          this._window.addEventListener(u.OUT, this._r846ed7467efd50));
        let r = this._window.findChildByName("minimize");
        (r?.addEventListener(u.CLICK, this._r9f300ee1384194),
          r?.addEventListener(u.OVER, this._r932b323057a22d),
          r?.addEventListener(u.OUT, this._r932b323057a22d));
      }
      ((this._window.findChildByName("buttons").procedure = this._r8b6e9f027ac5db),
        (this._window.visible = !1),
        (this.activeView = this._window),
        (this.var_199 = !1));
    }
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let t = !1;
    (e.type === u.CLICK
      ? (r.name === "button" &&
          r.parent?.name === "use" &&
          this.var_17?.handler.container?.connection?.send(
            new class_3808(this.var_627?.getId() ?? 0),
          ),
        (t = !0))
      : super._rb8ed727c592c36(e, r),
      t && this.var_17?.removeView(this, !1));
  }
}

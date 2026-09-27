// Estratto da HabboAirLauncher.deobf.js, riga 163568.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/head/HeadView.as
// Nome offuscato: _if8e508155bce7a

class extends CategoryBaseView {
  static {
    n(this, "HeadView");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (this._window == null &&
      ((this._window = this.var_38?.controller.view.getCategoryContainer(class_1962.HEAD)),
      this._window != null &&
        ((this._window.visible = !1), (this._window.procedure = this.windowEventProc))),
      (this.var_217 = !0),
      this.var_38 != null &&
        this.var_104 === "" &&
        this.var_38.switchCategory(AvatarFigurePartType.HAIR));
  }
  switchCategory(e) {
    if (!(this._window == null || this._window.disposed)) {
      switch ((this._r66d51c6b273640(this._currentTabName), (e = e === "" ? this.var_104 : e), e)) {
        case AvatarFigurePartType.HAIR:
          this._currentTabName = "tab_hair";
          break;
        case AvatarFigurePartType.const_680:
          this._currentTabName = "tab_hat";
          break;
        case AvatarFigurePartType.const_1106:
          this._currentTabName = "tab_accessories";
          break;
        case AvatarFigurePartType.const_500:
          this._currentTabName = "tab_eyewear";
          break;
        case AvatarFigurePartType.const_621:
          this._currentTabName = "tab_masks";
          break;
        default:
          throw new Error(`[HeadView] Unknown item category: "${e}"`);
      }
      ((this.var_104 = e),
        this._rcec831491d4501(this._currentTabName),
        this.var_217 || this.init(),
        this.updateGridView(e));
    }
  }
  windowEventProc = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "tab_hair":
          this.switchCategory(AvatarFigurePartType.HAIR);
          break;
        case "tab_hat":
          this.switchCategory(AvatarFigurePartType.const_680);
          break;
        case "tab_accessories":
          this.switchCategory(AvatarFigurePartType.const_1106);
          break;
        case "tab_eyewear":
          this.switchCategory(AvatarFigurePartType.const_500);
          break;
        case "tab_masks":
          this.switchCategory(AvatarFigurePartType.const_621);
          break;
      }
    else
      e.type === u.OVER
        ? ["tab_hair", "tab_hat", "tab_accessories", "tab_eyewear", "tab_masks"].includes(r.name) &&
          this._rcec831491d4501(r.name)
        : e.type === u.OUT &&
          ["tab_hair", "tab_hat", "tab_accessories", "tab_eyewear", "tab_masks"].includes(r.name) &&
          this._currentTabName !== r.name &&
          this._r66d51c6b273640(r.name);
  }, "windowEventProc");
}

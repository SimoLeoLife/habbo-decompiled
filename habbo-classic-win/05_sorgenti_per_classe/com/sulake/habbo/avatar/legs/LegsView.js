// Extracted from HabboAirLauncher.deobf.js, line 163910.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/legs/LegsView.as
// Obfuscated name: _ib352ddc298c246

class extends CategoryBaseView {
  static {
    n(this, "LegsView");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (this._window == null &&
      ((this._window = this.var_38?.controller.view.getCategoryContainer(class_1962.const_94)),
      this._window != null &&
        ((this._window.visible = !1), (this._window.procedure = this.windowEventProc))),
      (this.var_217 = !0),
      this.var_38 != null &&
        this.var_104 === "" &&
        this.var_38.switchCategory(AvatarFigurePartType.const_94));
  }
  switchCategory(e) {
    if (!(this._window == null || this._window.disposed)) {
      switch (((e = e === "" ? this.var_104 : e), this._r66d51c6b273640(this._currentTabName), e)) {
        case AvatarFigurePartType.const_94:
          this._currentTabName = "tab_pants";
          break;
        case AvatarFigurePartType.SHOES:
          this._currentTabName = "tab_shoes";
          break;
        case AvatarFigurePartType.const_585:
          this._currentTabName = "tab_belts";
          break;
        default:
          throw new Error(`[LegsView] Unknown item category: "${e}"`);
      }
      ((this.var_104 = e),
        this._rcec831491d4501(this._currentTabName),
        this.var_217 || this.init(),
        this.updateGridView(this.var_104));
    }
  }
  windowEventProc = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "tab_pants":
          this.switchCategory(AvatarFigurePartType.const_94);
          break;
        case "tab_shoes":
          this.switchCategory(AvatarFigurePartType.SHOES);
          break;
        case "tab_belts":
          this.switchCategory(AvatarFigurePartType.const_585);
          break;
      }
    else
      e.type === u.OVER
        ? ["tab_pants", "tab_shoes", "tab_belts"].includes(r.name) && this._rcec831491d4501(r.name)
        : e.type === u.OUT &&
          ["tab_pants", "tab_shoes", "tab_belts"].includes(r.name) &&
          this._currentTabName !== r.name &&
          this._r66d51c6b273640(r.name);
  }, "windowEventProc");
}

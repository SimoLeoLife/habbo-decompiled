// Estratto da HabboAirLauncher.deobf.js, riga 164432.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/torso/TorsoView.as
// Nome offuscato: _i57e27dd676879e

class extends CategoryBaseView {
  static {
    n(this, "TorsoView");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (this._window == null &&
      ((this._window = this.var_38?.controller.view.getCategoryContainer(class_1962.TORSO)),
      this._window != null &&
        ((this._window.visible = !1), (this._window.procedure = this.windowEventProc))),
      (this.var_217 = !0),
      this.var_38 != null &&
        this.var_104 === "" &&
        this.var_38.switchCategory(AvatarFigurePartType.CHEST));
  }
  switchCategory(e) {
    if (!(this._window == null || this._window.disposed)) {
      switch (((e = e === "" ? this.var_104 : e), this._r66d51c6b273640(this._currentTabName), e)) {
        case AvatarFigurePartType.CHEST:
          this._currentTabName = "tab_shirt";
          break;
        case AvatarFigurePartType.COAT_CHEST:
          this._currentTabName = "tab_jacket";
          break;
        case AvatarFigurePartType.CHEST_PRINT:
          this._currentTabName = "tab_prints";
          break;
        case AvatarFigurePartType.CHEST_ACCESSORY:
          this._currentTabName = "tab_accessories";
          break;
        default:
          throw new Error(`[TorsoView] Unknown item category: "${e}"`);
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
        case "tab_jacket":
          this.switchCategory(AvatarFigurePartType.COAT_CHEST);
          break;
        case "tab_shirt":
          this.switchCategory(AvatarFigurePartType.CHEST);
          break;
        case "tab_accessories":
          this.switchCategory(AvatarFigurePartType.CHEST_ACCESSORY);
          break;
        case "tab_prints":
          this.switchCategory(AvatarFigurePartType.CHEST_PRINT);
          break;
      }
    else
      e.type === u.OVER
        ? ["tab_jacket", "tab_prints", "tab_shirt", "tab_accessories"].includes(r.name) &&
          this._rcec831491d4501(r.name)
        : e.type === u.OUT &&
          ["tab_jacket", "tab_prints", "tab_shirt", "tab_accessories"].includes(r.name) &&
          this._currentTabName !== r.name &&
          this._r66d51c6b273640(r.name);
  }, "windowEventProc");
}

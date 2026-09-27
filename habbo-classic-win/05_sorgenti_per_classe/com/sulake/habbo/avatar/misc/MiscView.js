// Extracted from HabboAirLauncher.deobf.js, line 164142.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/misc/MiscView.as
// Obfuscated name: _i5ae47eaac4dfae

class a extends CategoryBaseView {
  static {
    n(this, "MiscView");
  }
  static const_197 = AvatarFigurePartType.PET;
  constructor(e) {
    super(e);
  }
  init() {
    (this._window == null &&
      ((this._window = this.var_38?.controller.view.getCategoryContainer(class_1962.MISC)),
      this._window != null &&
        ((this._window.visible = !1), (this._window.procedure = this.windowEventProc))),
      (this.var_217 = !0),
      this.var_38 != null &&
        this.var_104 === "" &&
        this.var_38.switchCategory(a.const_197));
  }
  switchCategory(e) {
    if (!(this._window == null || this._window.disposed)) {
      switch (((e = e === "" ? this.var_104 : e), this._r66d51c6b273640(this._currentTabName), e)) {
        case AvatarFigurePartType.PET:
          this._currentTabName = "tab_pets";
          break;
        case AvatarFigurePartType.MISC:
          this._currentTabName = "tab_misc";
          break;
        default:
          throw new Error(`[MiscView] Unknown item category: "${e}"`);
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
        case "tab_pets":
          this.switchCategory(AvatarFigurePartType.PET);
          break;
        case "tab_misc":
          this.switchCategory(AvatarFigurePartType.MISC);
          break;
      }
    else
      e.type === u.OVER
        ? ["tab_pets", "tab_misc"].includes(r.name) && this._rcec831491d4501(r.name)
        : e.type === u.OUT &&
          ["tab_pets", "tab_misc"].includes(r.name) &&
          this._currentTabName !== r.name &&
          this._r66d51c6b273640(r.name);
  }, "windowEventProc");
}

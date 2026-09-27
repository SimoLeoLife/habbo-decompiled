// Extracted from HabboAirLauncher.deobf.js, line 163484.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/effects/EffectsView.as
// Obfuscated name: _ia58e1e57a8ccd2

class extends CategoryBaseView {
  static {
    n(this, "EffectsView");
  }
  constructor(e) {
    super(e);
  }
  init() {
    (this._window == null &&
      ((this._window = this.var_38?.controller.view.getCategoryContainer(class_1962.const_65)),
      this._window != null && (this._window.visible = !1)),
      this.var_38 != null &&
        this.var_104 === "" &&
        this.var_38.switchCategory(EffectsModel.GRIDTYPE_EFFECTS),
      (this.var_217 = !0),
      this.updateGridView(this.var_104));
  }
  reset() {
    (this.updateGridView(this.var_104),
      this.var_38?.selectPart(this.var_104, -1));
  }
  switchCategory(e) {
    this._window == null ||
      this._window.disposed ||
      ((this.var_104 = e === "" ? this.var_104 : e),
      this.var_217 || this.init(),
      this.updateGridView(this.var_104));
  }
  updateSelectionVisual(e, r, t) {
    this.var_38?.controller.view._r86b806224cc448?._r23ee56e918d5c7(r, t);
  }
  getGridIndex(e) {
    return this.var_38?.controller.view._r86b806224cc448?.getGridIndex(e) ?? -1;
  }
  updateGridView(e) {
    this.var_38?.controller.view._r86b806224cc448._r3306bcdc249851(this.var_38, e);
  }
}

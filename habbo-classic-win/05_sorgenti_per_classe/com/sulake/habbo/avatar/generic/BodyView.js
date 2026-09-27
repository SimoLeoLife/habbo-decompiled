// Estratto da HabboAirLauncher.deobf.js, riga 163274.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/generic/BodyView.as
// Nome offuscato: _iacdbfb36bcadab

class a extends CategoryBaseView {
  static {
    n(this, "BodyView");
  }
  static TAB_BOY_ID = "tab_boy";
  static TAB_GIRL_ID = "tab_girl";
  constructor(e) {
    (super(e), (this.var_104 = AvatarFigurePartType.HEAD));
  }
  reset() {
    (super.reset(), (this.var_104 = AvatarFigurePartType.HEAD));
  }
  init() {
    (this._window == null &&
      ((this._window = this.var_38?.controller.view.getCategoryContainer(class_1962.GENERIC)),
      this._window != null &&
        ((this._window.visible = !1), (this._window.procedure = this.windowEventProc))),
      this.updateGridView(AvatarFigurePartType.HEAD),
      (this.var_217 = !0),
      this.updateGenderTab());
  }
  getWindowContainer() {
    let e = super.getWindowContainer();
    return (this.updateGenderTab(), e);
  }
  switchCategory(e) {
    (this.updateGenderTab(), this.updateGridView(e === "" ? this.var_104 : e));
  }
  updateGenderTab() {
    switch (this.var_38?.controller.gender) {
      case Ra.MALE:
        (this._rcec831491d4501(a.TAB_BOY_ID), this._r66d51c6b273640(a.TAB_GIRL_ID));
        break;
      case Ra.const_140:
        (this._rcec831491d4501(a.TAB_GIRL_ID), this._r66d51c6b273640(a.TAB_BOY_ID));
        break;
    }
  }
  windowEventProc = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case a.TAB_BOY_ID:
          (this.var_38?.controller &&
            (this.var_38.controller.gender = Ra.MALE),
            e.stopPropagation?.());
          break;
        case a.TAB_GIRL_ID:
          (this.var_38?.controller &&
            (this.var_38.controller.gender = Ra.const_140),
            e.stopPropagation?.());
          break;
      }
    else
      e.type === u.OVER
        ? (r.name === a.TAB_BOY_ID || r.name === a.TAB_GIRL_ID) && this._rcec831491d4501(r.name)
        : e.type === u.OUT &&
          (r.name === a.TAB_BOY_ID || r.name === a.TAB_GIRL_ID) &&
          this.updateGenderTab();
  }, "windowEventProc");
}

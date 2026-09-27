// Estratto da HabboAirLauncher.deobf.js, riga 164701.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/wardrobe/WardrobeModel.as
// Nome offuscato: _i065cedc390c7b2

class {
  static {
    n(this, "WardrobeModel");
  }
  var_63;
  _view = null;
  var_116 = null;
  var_217 = !1;
  constructor(e) {
    this.var_63 = e;
  }
  get availableSlots() {
    return this.controller.manager.getInteger("avatareditor.wardrobe.slots", 10);
  }
  dispose() {
    this.var_63 = null;
    for (let e of this.var_116?.getValues() ?? []) e.dispose();
    ((this.var_116 = null),
      this._view?.dispose(),
      (this._view = null),
      (this.var_217 = !1));
  }
  reset() {
    this.var_217 = !1;
  }
  getWindowContainer() {
    return (this.var_217 || this.init(), this._view?.getWindowContainer() ?? null);
  }
  updateSlots(e, r) {
    if (!(!this.var_217 || this.var_116 == null))
      for (let t of r ?? []) {
        let i = this.var_116.getValue(t.slotId) ?? null;
        i?.update(t.figureString, t.gender, this.isSlotEnabled(i.id));
      }
  }
  get controller() {
    if (this.var_63 == null) throw new Error("Avatar editor is not available.");
    return this.var_63;
  }
  get slots() {
    return this.var_116?.getValues() ?? [];
  }
  init() {
    (this._view?.dispose(), (this._view = new n6e(this)), this.var_63?.handler?.getWardrobe());
    for (let e of this.var_116?.getValues() ?? []) e.dispose();
    this.var_116 = new B();
    for (let e = 1; e <= this.availableSlots; e++)
      this.var_116.add(
        e,
        new i6e(this._view.slotTemplate, this.controller, e, this.isSlotEnabled(e)),
      );
    ((this.var_217 = !0), this.updateView());
  }
  updateView() {
    this._view?.update();
  }
  isSlotEnabled(e) {
    return e <= 5
      ? (this.controller.manager.sessionData?.hasClub ?? !1)
      : (this.controller.manager.sessionData?.hasVip ?? !1);
  }
}

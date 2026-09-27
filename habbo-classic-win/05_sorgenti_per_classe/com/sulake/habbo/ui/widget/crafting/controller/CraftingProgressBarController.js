// Estratto da HabboAirLauncher.deobf.js, riga 312740.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/crafting/controller/CraftingProgressBarController.as
// Nome offuscato: _iece46080a7f3ee

class {
  constructor(e) {
    this.var_17 = e;
    ((this._r02ea1ce67bb323 = new _i05394ecc0c0c4d(70)),
      this._r02ea1ce67bb323.addEventListener(DeBouncer.addEventListener, this._r455bd34b0bb303));
  }
  static {
    n(this, "CraftingProgressBarController");
  }
  _r02ea1ce67bb323;
  var_1639 = 0;
  dispose() {
    (this._r02ea1ce67bb323.stop(), (this.var_17 = null));
  }
  setProgress(e) {
    let r = this.container?.findChildByName("bar") ?? null,
      t = this.container?.findChildByName("btn_cancel") ?? null;
    r != null && t != null && (r.width = t.width * e);
  }
  _r455bd34b0bb303 = n((e) => {
    ((this.var_1639 += 0.02),
      this.setProgress(this.var_1639),
      this.var_1639 >= 1 &&
        (this.hide(), this.var_17?._r358ab1645ce8ea?._rcc53d01cbe4c97()));
  }, "_r455bd34b0bb303");
  hide() {
    (this._r02ea1ce67bb323.stop(),
      this.container != null && ((this.container.visible = !1), (this.container.procedure = null)));
  }
  show() {
    ((this.var_1639 = 0),
      this._r02ea1ce67bb323.start(),
      this.container != null &&
        ((this.container.visible = !0), (this.container.procedure = this.onTriggered)));
  }
  onTriggered = n((e, r) => {
    e.type === u.DOWN && this.var_17?._r358ab1645ce8ea?._r4815bb5d004544();
  }, "onTriggered");
  get container() {
    return this.var_17?.window?.findChildByName("progress_bar");
  }
}

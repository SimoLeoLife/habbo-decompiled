// Estratto da HabboAirLauncher.deobf.js, riga 134957.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/RegionController.as
// Nome offuscato: _ia0dfc6a291b8a1

class a extends ContainerController {
  static {
    n(this, "RegionController");
  }
  static KEY_TOOLTIP_CAPTION = "tool_tip_caption";
  static _r35d236b8547bae = "";
  static KEY_TOOLTIP_DELAY = "tool_tip_delay";
  static _re6f1efd56b35ec = 500;
  var_2281 = a._re6f1efd56b35ec;
  var_931 = a._r35d236b8547bae;
  _r61c6386d064709 = !1;
  _r55d05bdebade4c = !1;
  var_1703 = null;
  get _rfd54bb79a63ca1() {
    return this;
  }
  set toolTipCaption(e) {
    this.var_931 = e ?? "";
  }
  get toolTipCaption() {
    return this.var_931 ?? "";
  }
  set toolTipDelay(e) {
    this.var_2281 = e;
  }
  get toolTipDelay() {
    return this.var_2281 ?? a._re6f1efd56b35ec;
  }
  showToolTip(e) {}
  hideToolTip() {}
  setMouseCursorForState(e, r) {
    this.var_1703 === null && (this.var_1703 = new B());
    let t = this.var_1703.getValue(e) ?? 0;
    return (
      r === class_3421.DEFAULT || r === -1
        ? this.var_1703.remove(e)
        : this.var_1703.add(e, r),
      t
    );
  }
  getMouseCursorByState(e) {
    return this._rfd54bb79a63ca1.testStateFlag(class_1948.const_117)
      ? class_3421.ARROW
      : this.var_1703 === null
        ? class_3421.DEFAULT
        : (this.var_1703.getValue(e) ?? class_3421.DEFAULT);
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    super.constructWindow(e, r, t, i | N._re3bd61027cfd94, s, o, d, c, f, l, b, _);
  }
  update(e, r) {
    let t = super.update(e, r);
    return (e === this && Ci.processInteractiveWindowEvents(this, r), t);
  }
  get properties() {
    return Ci.readInteractiveWindowProperties(this, super.properties);
  }
  set properties(e) {
    (Ci._r94383236ca76df(this, e), (super.properties = e));
  }
  set _rc7fd5130f71f4c(e) {
    this._r61c6386d064709 = e;
  }
  get _rc7fd5130f71f4c() {
    return this._r61c6386d064709 ?? !1;
  }
  get _r824ae5dcbb4686() {
    return this._r55d05bdebade4c ?? !1;
  }
  set _r824ae5dcbb4686(e) {
    this._r55d05bdebade4c = e;
  }
}

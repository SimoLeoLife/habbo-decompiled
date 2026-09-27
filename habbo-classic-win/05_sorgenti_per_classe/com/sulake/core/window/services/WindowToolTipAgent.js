// Extracted from HabboAirLauncher.deobf.js, line 134769.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/services/WindowToolTipAgent.as
// Obfuscated name: _i88e4658aa09095

class extends WindowMouseOperator {
  static {
    n(this, "WindowToolTipAgent");
  }
  var_931 = "";
  _r392031bb3318d4 = null;
  var_744 = null;
  var_233;
  var_2437;
  var_2281 = 500;
  showToolTip = n((...e) => {
    if ((this.var_744?.reset(), this._window === null || this._window.disposed))
      return;
    this.var_931 = _i653b1ae8dc6f1a(this._window)
      ? this._window.toolTipCaption
      : this._window.caption;
    let r = this._window.context;
    if (
      r == null ||
      ((this._r392031bb3318d4 === null || this._r392031bb3318d4.disposed) &&
        (this._r392031bb3318d4 = r.create(
          `${this._window.name}::ToolTip`,
          this.var_931,
          class_2090.const_629,
          this._window.style,
          N.const_1323 | N._r0122fdb7c42001,
          null,
          null,
          null,
          0,
          null,
          "",
        )),
      this._r392031bb3318d4 === null)
    )
      return;
    let t = new E();
    (this._window.getGlobalPosition(t),
      (this._r392031bb3318d4.x = t.x + this.var_2437.x + this.var_233.x),
      (this._r392031bb3318d4.y = t.y + this.var_2437.y + this.var_233.y),
      (this._r392031bb3318d4.visible = this._r392031bb3318d4.caption.length > 0));
  }, "showToolTip");
  constructor(e) {
    (super(e), (this.var_2437 = new E()), (this.var_233 = new E(20, 20)));
  }
  begin(e, r = 0) {
    return (
      !e.disposed &&
        this._re66073e9e7a15e !== null &&
        this._rf8f9fc25599fa4 !== null &&
        this.var_2437 !== null &&
        (_i653b1ae8dc6f1a(e)
          ? ((this.var_931 = e.toolTipCaption), (this.var_2281 = e.toolTipDelay))
          : ((this.var_931 = e.caption), (this.var_2281 = 500)),
        (this._re66073e9e7a15e.x = this._rf8f9fc25599fa4.mouseX),
        (this._re66073e9e7a15e.y = this._rf8f9fc25599fa4.mouseY),
        this.getMousePositionRelativeTo(e, this._re66073e9e7a15e, this.var_2437),
        this.var_744 === null &&
          ((this.var_744 = new UnkEventDispatcherWrapperSubclass_05394e(this.var_2281, 1)),
          this.var_744.addEventListener(DeBouncer.addEventListener, this.showToolTip)),
        this.var_744.reset(),
        this.var_744.start()),
      super.begin(e, r)
    );
  }
  end(e) {
    return (
      this.var_744 !== null &&
        (this.var_744.stop(),
        this.var_744.removeEventListener(DeBouncer.addEventListener, this.showToolTip),
        (this.var_744 = null)),
      this.hideToolTip(),
      super.end(e)
    );
  }
  operate(e, r) {
    this._window === null ||
      this._window.disposed ||
      this._re66073e9e7a15e === null ||
      this.var_2437 === null ||
      ((this._re66073e9e7a15e.x = e),
      (this._re66073e9e7a15e.y = r),
      this.getMousePositionRelativeTo(this._window, this._re66073e9e7a15e, this.var_2437),
      this._r392031bb3318d4 !== null &&
        !this._r392031bb3318d4.disposed &&
        ((this._r392031bb3318d4.x = e + this.var_233.x),
        (this._r392031bb3318d4.y = r + this.var_233.y)));
  }
  _r8dbd3b6cf523e2(e) {
    if (e.disposed || this._r392031bb3318d4 === null || this._r392031bb3318d4.disposed) return;
    let r = _i653b1ae8dc6f1a(e) ? e.toolTipCaption : e.caption;
    r !== this.var_931 &&
      ((this.var_931 = r),
      r.length === 0
        ? (this._r392031bb3318d4.visible = !1)
        : ((this._r392031bb3318d4.caption = r), (this._r392031bb3318d4.visible = !0)));
  }
  hideToolTip() {
    this._r392031bb3318d4 !== null &&
      !this._r392031bb3318d4.disposed &&
      (this._r392031bb3318d4.destroy(), (this._r392031bb3318d4 = null));
  }
}

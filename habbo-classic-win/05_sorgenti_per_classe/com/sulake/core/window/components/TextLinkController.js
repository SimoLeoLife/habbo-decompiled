// Extracted from HabboAirLauncher.deobf.js, line 141508.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/TextLinkController.as
// Obfuscated name: _iad0416cbc42992

class extends r1 {
  static {
    n(this, "TextLinkController");
  }
  var_2281 = 0;
  var_931 = "";
  _r61c6386d064709 = !1;
  _r55d05bdebade4c = !1;
  var_1703 = null;
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    let h = s._rf5e87151b3d9ca().getThemeManager();
    (super.constructWindow(e, r, t, (i | N._re3bd61027cfd94) & ~N.const_421, s, o, d, c, f, l, b, _),
      (this.var_2281 = Number(h._r421a2291c74c01(t).get(class_3436.TOOL_TIP_DELAY).value)),
      (this.var_931 = String(h._r421a2291c74c01(t).get(class_3436.TOOL_TIP_CAPTION).value)),
      (this._r61c6386d064709 = !!h._r421a2291c74c01(t).get(class_3436.TOOL_TIP_IS_DYNAMIC).value),
      (this._r55d05bdebade4c = !!h._r421a2291c74c01(t).get(class_3436.INTERACTIVE_CURSOR_DISABLED).value),
      (this.immediateClickMode = !0),
      (this.mouseThreshold = 0));
  }
  update(e, r) {
    let t = super.update(e, r);
    return (e === this && Ci.processInteractiveWindowEvents(this, r), t);
  }
  get _r6608f6ec7df364() {
    return 0;
  }
  set _r6608f6ec7df364(e) {}
  get toolTipCaption() {
    return this.var_931 ?? "";
  }
  set toolTipCaption(e) {
    this.var_931 = e ?? "";
  }
  get toolTipDelay() {
    return this.var_2281 ?? 0;
  }
  set toolTipDelay(e) {
    this.var_2281 = e;
  }
  get _rc7fd5130f71f4c() {
    return this._r61c6386d064709 ?? !1;
  }
  set _rc7fd5130f71f4c(e) {
    this._r61c6386d064709 = e;
  }
  get _r824ae5dcbb4686() {
    return this._r55d05bdebade4c ?? !1;
  }
  set _r824ae5dcbb4686(e) {
    this._r55d05bdebade4c = e;
  }
  setMouseCursorForState(e, r) {
    this.var_1703 == null && (this.var_1703 = new Map());
    let t = this.var_1703.get(e) ?? class_3421.DEFAULT;
    return (
      r === class_3421.DEFAULT || r === -1
        ? this.var_1703.delete(e)
        : this.var_1703.set(e, r),
      t
    );
  }
  getMouseCursorByState(e) {
    return this.var_1703?.get(e) ?? class_3421.DEFAULT;
  }
  showToolTip(e) {
    throw new Error("Unimplemented method!");
  }
  hideToolTip() {
    throw new Error("Unimplemented method!");
  }
  get properties() {
    return Ci.readInteractiveWindowProperties(this, super.properties);
  }
  set properties(e) {
    (Ci._r94383236ca76df(this, e), (super.properties = e));
  }
}

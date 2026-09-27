// Extracted from HabboAirLauncher.deobf.js, line 131892.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/InteractiveController.as
// Obfuscated name: _ia6d87ba9be3384

class a extends st {
  static {
    n(this, "InteractiveController");
  }
  var_2281 = 0;
  var_931 = "";
  _r61c6386d064709 = !1;
  _r55d05bdebade4c = !1;
  var_1703 = null;
  get _rb047b5cc4fd5a0() {
    return this;
  }
  set toolTipCaption(e) {
    this.var_931 = e ?? String(this.getDefaultProperty(class_3436.TOOL_TIP_CAPTION).value);
  }
  get toolTipCaption() {
    return this.var_931 ?? "";
  }
  set toolTipDelay(e) {
    this.var_2281 = e;
  }
  get toolTipDelay() {
    return this.var_2281 ?? 0;
  }
  setMouseCursorForState(e, r) {
    if (this._rb047b5cc4fd5a0.testStateFlag(class_1948.const_117)) return class_3421.ARROW;
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
    return this.var_1703 === null
      ? class_3421.DEFAULT
      : (this.var_1703.getValue(e) ?? class_3421.DEFAULT);
  }
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    i |= N._re3bd61027cfd94;
    let h = s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t),
      p = Number(h.get(class_3436.TOOL_TIP_DELAY).value),
      m = String(h.get(class_3436.TOOL_TIP_CAPTION).value),
      v = !!h.get(class_3436.TOOL_TIP_IS_DYNAMIC).value,
      w = !!h.get(class_3436.INTERACTIVE_CURSOR_DISABLED).value;
    (super.constructWindow(e, r, t, i, s, o, d, c ?? void 0, f ?? void 0, l ?? void 0, b, _),
      (this.var_2281 = p),
      (this.var_931 = m),
      (this._r61c6386d064709 = v),
      (this._r55d05bdebade4c = w));
  }
  update(e, r) {
    return (e === this && a.processInteractiveWindowEvents(this, r), super.update(e, r));
  }
  showToolTip(e) {}
  hideToolTip() {}
  get properties() {
    return a.readInteractiveWindowProperties(this, super.properties);
  }
  set properties(e) {
    (a._r94383236ca76df(this, e), (super.properties = e));
  }
  static processInteractiveWindowEvents(e, r) {
    let t = e.context;
    if (t == null) return;
    let i = t._rc52f27dfc6ba9b()._r0b43873688a61a();
    e._rc7fd5130f71f4c
      ? r.type === u.OVER
        ? i.begin(e)
        : r.type === u.MOVE
          ? i._r8dbd3b6cf523e2(e)
          : r.type === u.OUT && i.end(e)
      : e.toolTipCaption != null &&
        e.toolTipCaption.length > 0 &&
        (r.type === u.OVER ? i.begin(e) : r.type === u.OUT && i.end(e));
  }
  static _r94383236ca76df(e, r) {
    for (let t of r)
      switch (t.key) {
        case class_3436.TOOL_TIP_CAPTION:
          t.value !== e.toolTipCaption && (e.toolTipCaption = t.value);
          break;
        case class_3436.TOOL_TIP_DELAY:
          t.value !== e.toolTipDelay && (e.toolTipDelay = t.value);
          break;
        case class_3436.TOOL_TIP_IS_DYNAMIC:
          t.value !== e._rc7fd5130f71f4c && (e._rc7fd5130f71f4c = t.value);
          break;
        case class_3436.INTERACTIVE_CURSOR_DISABLED:
          t.value !== e._r824ae5dcbb4686 && (e._r824ae5dcbb4686 = t.value);
          break;
      }
  }
  static readInteractiveWindowProperties(e, r) {
    return (
      r.push(e.createProperty(class_3436.TOOL_TIP_CAPTION, e.toolTipCaption)),
      r.push(e.createProperty(class_3436.TOOL_TIP_DELAY, e.toolTipDelay)),
      r.push(e.createProperty(class_3436.TOOL_TIP_IS_DYNAMIC, e._rc7fd5130f71f4c)),
      r.push(e.createProperty(class_3436.INTERACTIVE_CURSOR_DISABLED, e._r824ae5dcbb4686)),
      r
    );
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

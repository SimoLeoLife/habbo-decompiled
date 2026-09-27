// Estratto da HabboAirLauncher.deobf.js, riga 68878.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/WindowToggle.as
// Nome offuscato: _ibc1b926f30bff1

class a {
  static {
    n(this, "WindowToggle");
  }
  static RESULT_ACTIVATE = 1;
  static RESULT_HIDE = 2;
  static RESULT_SHOW = 0;
  _window;
  _r7a75ea54a57039;
  _disposed = !1;
  var_2563;
  _hideFunction;
  constructor(e, r, t = null, i = null) {
    ((this._window = e),
      (this._r7a75ea54a57039 = r),
      (this.var_2563 = t),
      (this._hideFunction = i));
  }
  get window() {
    if (this._window == null) throw new Error("WindowToggle has been disposed.");
    return this._window;
  }
  get visible() {
    return (
      this._window != null && this._window.visible && this._window.parent != null
    );
  }
  get active() {
    return this.visible && this._window?.getStateFlag(class_1948.WINDOW_STATE_ACTIVE) === !0;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      (this._window != null && (this._window.dispose(), (this._window = null)),
      (this._r7a75ea54a57039 = null),
      (this.var_2563 = null),
      (this._hideFunction = null),
      (this._disposed = !0));
  }
  show() {
    this._window == null ||
      this._r7a75ea54a57039 == null ||
      this._window.disposed ||
      (this._window.parent !== this._r7a75ea54a57039 &&
        this._r7a75ea54a57039.addChild(this._window),
      this._window.visible || (this._window.visible = !0),
      this._window.activate());
  }
  hide() {
    this._window == null ||
      this._r7a75ea54a57039 == null ||
      this._window.disposed ||
      (this._window.parent === this._r7a75ea54a57039 &&
        this._r7a75ea54a57039.removeChild(this._window),
      this._window.visible && (this._window.visible = !1),
      this._window.deactivate());
  }
  toggle() {
    let e = this._window;
    e != null &&
      (this.visible
        ? this.active
          ? this._hideFunction == null
            ? this.hide()
            : this._hideFunction()
          : a.isHiddenByOtherWindows(e)
            ? e.activate()
            : this._hideFunction == null
              ? this.hide()
              : this._hideFunction()
        : this.var_2563 == null
          ? this.show()
          : this.var_2563());
  }
  static isHiddenByOtherWindows(e) {
    let r = e.desktop,
      t = r.numChildren,
      i = r.getChildIndex(e);
    if (i < 0) throw new Error("Window must be contained by the desktop!");
    let s = new D(),
      o = new D();
    e.getGlobalRectangle(s);
    for (let d = i + 1; d < t; d++) {
      let c = r.getChildAt(d);
      if (c?.visible && (c.getGlobalRectangle(o), s.intersects(o))) return !0;
    }
    return !1;
  }
}

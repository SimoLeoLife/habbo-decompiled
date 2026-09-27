// Estratto da HabboAirLauncher.deobf.js, riga 66035.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/WindowMouseEvent.as
// Nome offuscato: _i2896a64fb02f3d

class a extends y {
  static {
    n(this, "WindowMouseEvent");
  }
  static CLICK = "WME_CLICK";
  static CLICK_AWAY = "WME_CLICK_AWAY";
  static DOUBLE_CLICK = "WME_DOUBLE_CLICK";
  static DOWN = "WME_DOWN";
  static HOVERING = "WME_HOVERING";
  static MIDDLE_CLICK = "WME_MIDDLE_CLICK";
  static const_231 = "WME_MIDDLE_DOWN";
  static const_807 = "WME_MIDDLE_UP";
  static MOVE = "WME_MOVE";
  static OUT = "WME_OUT";
  static OVER = "WME_OVER";
  static RIGHT_CLICK = "WME_RIGHT_CLICK";
  static const_727 = "WME_RIGHT_DOWN";
  static const_419 = "WME_RIGHT_UP";
  static ROLL_OUT = "WME_ROLL_OUT";
  static ROLL_OVER = "WME_ROLL_OVER";
  static UP = "WME_UP";
  static UP_OUTSIDE = "WME_UP_OUTSIDE";
  static const_974 = "WME_WHEEL";
  static WHEEL_HORIZONTAL = "WME_WHEEL_HORIZONTAL";
  static _rff9231c4bd795d = [];
  delta = 0;
  localX = 0;
  localY = 0;
  stageX = 0;
  stageY = 0;
  altKey = !1;
  ctrlKey = !1;
  shiftKey = !1;
  buttonDown = !1;
  static allocate(e, r, t, i = 0, s = 0, o = 0, d = 0, c = !1, f = !1, l = !1, b = !1, _ = 0) {
    let h = a._rff9231c4bd795d.pop() ?? new a();
    return (
      (h._type = e),
      (h._window = r),
      (h.var_1451 = t),
      (h.var_119 = !1),
      (h._cancelable = typeof i == "boolean" ? i : !0),
      (h.var_1232 = !1),
      (h._pool = a._rff9231c4bd795d),
      (h.localX = typeof i == "number" ? i : 0),
      (h.localY = s),
      (h.stageX = o),
      (h.stageY = d),
      (h.altKey = c),
      (h.ctrlKey = f),
      (h.shiftKey = l),
      (h.buttonDown = b),
      (h.delta = _),
      h
    );
  }
  clone() {
    return a.allocate(
      this._type,
      this.window,
      this.related,
      this.localX,
      this.localY,
      this.stageX,
      this.stageY,
      this.altKey,
      this.ctrlKey,
      this.shiftKey,
      this.buttonDown,
      this.delta,
    );
  }
  toString() {
    return `WindowMouseEvent { type: ${this._type} cancelable: ${this._cancelable} window: ${this._window} localX: ${this.localX} localY: ${this.localY} }`;
  }
}

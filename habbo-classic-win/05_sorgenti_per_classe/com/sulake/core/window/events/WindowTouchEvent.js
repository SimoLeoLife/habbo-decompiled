// Estratto da HabboAirLauncher.deobf.js, riga 66111.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/events/WindowTouchEvent.as
// Nome offuscato: _i7896fc47d7f527

class a extends y {
  static {
    n(this, "WindowTouchEvent");
  }
  static WINDOW_EVENT_TOUCH_BEGIN = "WTE_BEGIN";
  static const_930 = "WTE_END";
  static WINDOW_EVENT_TOUCH_MOVE = "WTE_MOVE";
  static const_206 = "WTE_OUT";
  static WINDOW_EVENT_TOUCH_OVER = "WTE_OVER";
  static const_1350 = "WTE_ROLL_OUT";
  static WINDOW_EVENT_TOUCH_ROLL_OVER = "WTE_ROLL_OVER";
  static const_473 = "WTE_TAP";
  static _r823fd5725f4d36 = [];
  altKey = !1;
  ctrlKey = !1;
  localX = 0;
  localY = 0;
  pressure = 0;
  shiftKey = !1;
  sizeX = 0;
  sizeY = 0;
  stageX = 0;
  stageY = 0;
  static allocate(e, r, t, i = 0, s = 0, o = 0, d = 0, c = 0, f = 0, l = 0, b = !1, _ = !1, h = !1) {
    let p = a._r823fd5725f4d36.pop() ?? new a();
    return (
      (p._type = e),
      (p._window = r),
      (p.var_1451 = t),
      (p.var_119 = !1),
      (p._cancelable = typeof i == "boolean" ? i : !1),
      (p.var_1232 = !1),
      (p._pool = a._r823fd5725f4d36),
      (p.sizeX = o),
      (p.sizeY = d),
      (p.localX = typeof i == "number" ? i : 0),
      (p.localY = s),
      (p.stageX = c),
      (p.stageY = f),
      (p.pressure = l),
      (p.altKey = b),
      (p.ctrlKey = _),
      (p.shiftKey = h),
      p
    );
  }
  clone() {
    return a.allocate(
      this._type,
      this.window,
      this.related,
      this.localX,
      this.localY,
      this.sizeX,
      this.sizeY,
      this.stageX,
      this.stageY,
      this.pressure,
      this.altKey,
      this.ctrlKey,
      this.shiftKey,
    );
  }
  toString() {
    return `WindowTouchEvent { type: ${this._type} cancelable: ${this._cancelable} window: ${this._window} localX: ${this.localX} localY: ${this.localY} }`;
  }
}

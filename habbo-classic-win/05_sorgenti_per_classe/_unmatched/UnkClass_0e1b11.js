// Extracted from HabboAirLauncher.deobf.js, line 80341.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0e1b11aed3adb6

class a {
  static {
    n(this, "UnkClass_0e1b11");
  }
  static _r65757847b4116e = 0;
  static STATE_OVER = 3;
  static STATE_RUNNING = 2;
  static STATE_START_DELAY = 1;
  static _state = a._r65757847b4116e;
  static _raa934fda0ed62b = !1;
  static _r68fd8442dd1ed6 = 0;
  static var_3003 = 20 * 1e3;
  static var_3190 = 5e3;
  static _r94232f6002c1af = null;
  static init(e, r) {
    ((a.var_3003 = e),
      (a.var_3190 = r),
      (a._r68fd8442dd1ed6 = Date.now()),
      (a._state = a.STATE_START_DELAY));
  }
  static turnVisualizationOn() {
    if (a._state === a._r65757847b4116e || a._state === a.STATE_OVER) return;
    a._r94232f6002c1af == null &&
      (a._r94232f6002c1af = setTimeout(() => {
        a._r3c1dc9f6e87d15();
      }, a.var_3190));
    let e = Date.now() - a._r68fd8442dd1ed6;
    if (e > a.var_3003 + a.var_3190) {
      a._state = a.STATE_OVER;
      return;
    }
    if (((a._raa934fda0ed62b = !0), e < a.var_3003)) {
      a._state = a.STATE_START_DELAY;
      return;
    }
    a._state = a.STATE_RUNNING;
  }
  static _r3c1dc9f6e87d15() {
    ((a._raa934fda0ed62b = !1),
      a._r94232f6002c1af != null && (clearTimeout(a._r94232f6002c1af), (a._r94232f6002c1af = null)));
  }
  static _r246bace9601ea9() {
    return a._raa934fda0ed62b && a.isRunning();
  }
  static isRunning() {
    return a._state === a.STATE_START_DELAY || a._state === a.STATE_RUNNING;
  }
}

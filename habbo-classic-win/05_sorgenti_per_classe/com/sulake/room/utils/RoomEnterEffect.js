// Estratto da HabboAirLauncher.deobf.js, riga 80011.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/RoomEnterEffect.as
// Nome offuscato: _i8ca2d48f761c7f

class a {
  static {
    n(this, "RoomEnterEffect");
  }
  static _r65757847b4116e = 0;
  static STATE_OVER = 3;
  static STATE_RUNNING = 2;
  static STATE_START_DELAY = 1;
  static _state = a._r65757847b4116e;
  static _raa934fda0ed62b = !1;
  static var_3658 = 0;
  static _r68fd8442dd1ed6 = 0;
  static var_3003 = 20 * 1e3;
  static var_3190 = 2e3;
  static init(e, r) {
    ((a.var_3658 = 0),
      (a.var_3003 = e),
      (a.var_3190 = r),
      (a._r68fd8442dd1ed6 = Date.now()),
      (a._state = a.STATE_START_DELAY));
  }
  static turnVisualizationOn() {
    if (a._state === a._r65757847b4116e || a._state === a.STATE_OVER) return;
    let e = Date.now() - a._r68fd8442dd1ed6;
    if (e > a.var_3003 + a.var_3190) {
      a._state = a.STATE_OVER;
      return;
    }
    if (((a._raa934fda0ed62b = !0), e < a.var_3003)) {
      a._state = a.STATE_START_DELAY;
      return;
    }
    ((a._state = a.STATE_RUNNING), (a.var_3658 = (e - a.var_3003) / a.var_3190));
  }
  static _r3c1dc9f6e87d15() {
    a._raa934fda0ed62b = !1;
  }
  static _r246bace9601ea9() {
    return a._raa934fda0ed62b && a.isRunning();
  }
  static isRunning() {
    return a._state === a.STATE_START_DELAY || a._state === a.STATE_RUNNING;
  }
  static getDelta(e = 0, r = 1) {
    return Math.min(Math.max(a.var_3658, e), r);
  }
  static get totalRunningTime() {
    return a.var_3003 + a.var_3190;
  }
}

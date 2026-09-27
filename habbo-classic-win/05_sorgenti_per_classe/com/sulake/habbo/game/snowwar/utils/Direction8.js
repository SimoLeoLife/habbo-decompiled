// Estratto da HabboAirLauncher.deobf.js, riga 217849.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/Direction8.as
// Nome offuscato: _i9da34c54331b7f

class a {
  constructor(e, r, t, i) {
    this.var_81 = e;
    this.var_4658 = r;
    this.var_5818 = t;
    this.var_5849 = i;
    a.ALL_DIRECTIONS[e] = this;
  }
  static {
    n(this, "Direction8");
  }
  static ALL_DIRECTIONS = [];
  static N = new a(0, "N", 0, -1);
  static NE = new a(1, "NE", 1, -1);
  static E = new a(2, "E", 1, 0);
  static SE = new a(3, "SE", 1, 1);
  static S = new a(4, "S", 0, 1);
  static SW = new a(5, "SW", -1, 1);
  static W = new a(6, "W", -1, 0);
  static NW = new a(7, "NW", -1, -1);
  static _r7f7e92f0eac3cf = a.S;
  static _r39d8489cbf37f6 = a.SW;
  static componentToAngleArray = [
    0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8,
    8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 14,
    14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 19, 19, 19,
    19, 19, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 24, 24, 24, 24,
    24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 29, 29,
    29, 29, 29, 29, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33,
    33, 33, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37,
    37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 39, 39, 39, 39, 39, 39, 39, 39, 40, 40, 40, 40, 40, 40, 40, 41,
    41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 43, 43, 43, 43, 43, 43, 43, 43, 44, 44, 44,
    44, 44, 44, 44, 44, 44, 45, 45, 45, 45, 45,
  ];
  intValue() {
    return this.var_81;
  }
  static getDirection8(e) {
    return e < 0 || e > 7 ? null : a.ALL_DIRECTIONS[e];
  }
  _rc182b5cb7d10dc() {
    return this._r34d3544f507ede(4);
  }
  _r3908afe8f7843a(e) {
    return this._r34d3544f507ede(e ? 1 : -1);
  }
  _r8a9d5f9ae5e8a4(e) {
    return this._r34d3544f507ede(e ? 2 : -2);
  }
  _r50c27a3cd8bba6() {
    return this.var_81 % 2 === 0;
  }
  hashCode() {
    return this.var_81;
  }
  _r34d3544f507ede(e) {
    let r = a._r17f09ff7751f37(this.var_81 + e);
    return a.ALL_DIRECTIONS[r];
  }
  toString() {
    return `${this.var_4658}(${String(this.var_81)})`;
  }
  static _r17f09ff7751f37(e) {
    return e & 7;
  }
  _rdca54b02dc08a5() {
    return this.var_4658;
  }
  _r67e7520c6d59d6() {
    return this.var_5818;
  }
  _r4c6bfadd39d2b2() {
    return this.var_5849;
  }
  static compatibleCalculateDirectionTo(e, r, t, i) {
    let s = t - e,
      o = i - r;
    return s === 0 && o < 0
      ? a.N
      : s === 0 && o > 0
        ? a.S
        : s > 0 && o < 0
          ? a.NE
          : s > 0 && o === 0
            ? a.E
            : s > 0 && o > 0
              ? a.SE
              : s < 0 && o < 0
                ? a.NW
                : s < 0 && o === 0
                  ? a.W
                  : s < 0 && o > 0
                    ? a.SW
                    : null;
  }
  static _r9072e4adb2610e(e) {
    return (e > 359 ? (e %= 360) : e < 0 && (e = 360 + (e % 360)), e);
  }
  static getAngleFromComponents(e, r) {
    let t;
    return Math.abs(e) <= Math.abs(r)
      ? (r === 0 && (r = 1),
        (e *= 256),
        (t = class_4083.javaDiv(e / r)),
        t < 0 && (t = -t),
        t > 255 && (t = 255),
        r < 0
          ? e > 0
            ? a.componentToAngleArray[t]
            : 360 - a.componentToAngleArray[t]
          : e > 0
            ? 180 - a.componentToAngleArray[t]
            : 180 + a.componentToAngleArray[t])
      : (e === 0 && (e = 1),
        (r *= 256),
        (t = class_4083.javaDiv(r / e)),
        t < 0 && (t = -t),
        t > 255 && (t = 255),
        r < 0
          ? e > 0
            ? 90 - a.componentToAngleArray[t]
            : 270 + a.componentToAngleArray[t]
          : e > 0
            ? 90 + a.componentToAngleArray[t]
            : 270 - a.componentToAngleArray[t]);
  }
}

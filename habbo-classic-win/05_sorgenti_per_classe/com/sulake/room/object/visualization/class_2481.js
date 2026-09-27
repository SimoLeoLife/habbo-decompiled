// Extracted from HabboAirLauncher.deobf.js, line 281780.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/object/visualization/class_2481.as
// Obfuscated name: _i09819458f6d9af

class {
  static {
    n(this, "class_2481");
  }
  _z = 0;
  _r75002a4ee71bd4 = [];
  _color;
  _r15ef0a8fc2d6eb;
  _rbc6ecda7c10a38;
  _r3e5598f141ad24;
  _rd316333d126985;
  _r4701b6786cc7ca;
  _ref0bd66f00ec1d = [];
  constructor(e = null, r = 0, t = !1) {
    ((this._rbc6ecda7c10a38 = e?._r0e94880d724d54 ?? []),
      (this._r3e5598f141ad24 = e?._rd661e1e7571aca ?? []),
      (this._rd316333d126985 = e?._r975aab7e436864 ?? []),
      (this._r4701b6786cc7ca = e?._r107425bc6dc88f ?? []),
      (this._color = r),
      (this._r15ef0a8fc2d6eb = t));
  }
  addMask(e, r, t, i) {
    (this._rbc6ecda7c10a38.push(e),
      this._r3e5598f141ad24.push(r),
      this._rd316333d126985.push(t),
      this._r4701b6786cc7ca.push(i));
  }
  _r0d7150224b1272(e) {
    this._ref0bd66f00ec1d.push(e);
  }
  set z(e) {
    this._z = e;
  }
  get z() {
    return this._z;
  }
  set cornerPoints(e) {
    this._r75002a4ee71bd4 = e;
  }
  get cornerPoints() {
    return this._r75002a4ee71bd4;
  }
  get color() {
    return this._color;
  }
  get _r0e94880d724d54() {
    return this._rbc6ecda7c10a38;
  }
  get _rd661e1e7571aca() {
    return this._r3e5598f141ad24;
  }
  get _r975aab7e436864() {
    return this._rd316333d126985;
  }
  get _r107425bc6dc88f() {
    return this._r4701b6786cc7ca;
  }
  isBottomAligned() {
    return this._r15ef0a8fc2d6eb;
  }
  get _r462fb34fa01d45() {
    return this._ref0bd66f00ec1d;
  }
}

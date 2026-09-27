// Estratto da HabboAirLauncher.deobf.js, riga 282548.

class {
  constructor(e, r, t, i, s) {
    this.texture = s;
    ((this._r5d831974e35a8a = Number.isNaN(e) ? 0 : e),
      (this._r6d78a0b9901fc3 = Number.isNaN(r) ? 0 : r),
      (this._r7693ccfbe31f9c = Number.isNaN(t) ? 0 : t),
      (this._r2f821e4adb30bd = Number.isNaN(i) ? 0 : i));
  }
  static {
    n(this, "_i4748bc4375ad27");
  }
  _r5d831974e35a8a;
  _r6d78a0b9901fc3;
  _r7693ccfbe31f9c;
  _r2f821e4adb30bd;
  dispose() {}
  getPosition(e, r, t, i, s) {
    let o = this._r5d831974e35a8a,
      d = this._r6d78a0b9901fc3;
    return (
      t > 0 && (o += ((this._r7693ccfbe31f9c / t) * s) / 1e3),
      i > 0 && (d += ((this._r2f821e4adb30bd / i) * s) / 1e3),
      new E((o % 1) * e, (d % 1) * r)
    );
  }
}

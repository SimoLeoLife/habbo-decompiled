// Estratto da HabboAirLauncher.deobf.js, riga 66367.

class extends _ic2a614b843733b {
  static {
    n(this, "_i6612e5201ece1d");
  }
  var_3993 = 0;
  var_3995 = 0;
  var_2203;
  var_2327;
  _height;
  _r815a5cbcdda825;
  constructor(e, r, t, i, s, o) {
    (super(e, r),
      (this.var_2203 = t),
      (this.var_2327 = i),
      (this._height = -s),
      (this._r815a5cbcdda825 = o));
  }
  start() {
    (super.start(),
      this.target && ((this.var_3993 = this.target.x), (this.var_3995 = this.target.y)));
  }
  update(e) {
    (super.update(e),
      this.target &&
        ((this.target.x = this.var_3993 + this.var_2203 * e),
        (this.target.y =
          this.var_3995 +
          this._height * Math.abs(Math.sin(e * Math.PI * this._r815a5cbcdda825)) +
          this.var_2327 * e)));
  }
}

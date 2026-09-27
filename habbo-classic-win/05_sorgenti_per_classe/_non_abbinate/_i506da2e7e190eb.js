// Estratto da HabboAirLauncher.deobf.js, riga 66299.

class extends _ic2a614b843733b {
  static {
    n(this, "_i506da2e7e190eb");
  }
  _height;
  _offset = 0;
  constructor(e, r, t) {
    (super(e, r), (this._height = t));
  }
  start() {
    (super.start(),
      this.target && ((this._offset = this.target.y), (this.target.y = this._offset - this._height)));
  }
  update(e) {
    (super.update(e),
      this.target && (this.target.y = this._offset - this._height + this._r1c6c08cc1d1088(e) * this._height));
  }
  _r1c6c08cc1d1088(e) {
    return e < 0.364
      ? 7.5625 * e * e
      : e < 0.727
        ? ((e -= 0.545), 7.5625 * e * e + 0.75)
        : e < 0.909
          ? ((e -= 0.9091), 7.5625 * e * e + 0.9375)
          : ((e -= 0.955), 7.5625 * e * e + 0.984375);
  }
  stop() {
    (this.target && (this.target.y = this._offset), super.stop());
  }
}

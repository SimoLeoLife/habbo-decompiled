// Estratto da HabboAirLauncher.deobf.js, riga 33595.

class a {
  static {
    n(this, "BlurFilter");
  }
  _rcac1733c5b4dae = 4;
  _r35c1e7731d9f90 = 4;
  _quality = 1;
  constructor(e = 4, r = 4, t = 1) {
    ((this.blurX = e), (this.blurY = r), (this.quality = t));
  }
  get blurX() {
    return this._rcac1733c5b4dae;
  }
  set blurX(e) {
    this._rcac1733c5b4dae = Number.isNaN(e) ? 0 : Math.max(0, Math.min(255, e));
  }
  get blurY() {
    return this._r35c1e7731d9f90;
  }
  set blurY(e) {
    this._r35c1e7731d9f90 = Number.isNaN(e) ? 0 : Math.max(0, Math.min(255, e));
  }
  get quality() {
    return this._quality;
  }
  set quality(e) {
    this._quality = Math.max(0, Math.min(15, e | 0));
  }
  clone() {
    return new a(this._rcac1733c5b4dae, this._r35c1e7731d9f90, this._quality);
  }
}

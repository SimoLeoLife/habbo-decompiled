// Estratto da HabboAirLauncher.deobf.js, riga 66563.

class extends _ic2a614b843733b {
  static {
    n(this, "_iffb4fbee2ed4e7");
  }
  _re0c2e19aa1967f = 0;
  _ra3797533d4b143 = 0;
  _re8ce35f80219ac;
  _rfed0a1a2de0e3a;
  _r3d0377cc7888aa = 0;
  _r64125eb342e6af = 0;
  constructor(e, r, t, i) {
    (super(e, r), (this._re8ce35f80219ac = t), (this._rfed0a1a2de0e3a = i));
  }
  start() {
    (super.start(),
      this.target &&
        ((this._re0c2e19aa1967f = this.target.width),
        (this._ra3797533d4b143 = this.target.height),
        (this._r3d0377cc7888aa = this._re8ce35f80219ac - this._re0c2e19aa1967f),
        (this._r64125eb342e6af = this._rfed0a1a2de0e3a - this._ra3797533d4b143)));
  }
  update(e) {
    this.target &&
      ((this.target.width = this._re0c2e19aa1967f + this._r3d0377cc7888aa * e),
      (this.target.height = this._ra3797533d4b143 + this._r64125eb342e6af * e));
  }
}

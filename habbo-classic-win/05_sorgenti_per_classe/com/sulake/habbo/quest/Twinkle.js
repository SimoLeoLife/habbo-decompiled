// Extracted from HabboAirLauncher.deobf.js, line 271278.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/Twinkle.as
// Obfuscated name: _i12aa3dab2f0272

class a {
  constructor(e, r) {
    this._twinkleImages = e;
    this.var_5693 = r;
  }
  static {
    n(this, "Twinkle");
  }
  static FRAME_DURATION_IN_MSECS = 100;
  static _r420e8d678cf0e3 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
  static FRAME_NOT_STARTED = -1;
  static FRAME_FINISHED = -2;
  static _r4ea885b98fa08f = new E(44, 44);
  _position = null;
  dispose() {
    ((this._twinkleImages = null), (this._position = null));
  }
  get disposed() {
    return this._twinkleImages == null;
  }
  onAnimationStart() {
    this._position = new E(
      Math.round(Math.random() * a._r4ea885b98fa08f.x),
      Math.round(Math.random() * a._r4ea885b98fa08f.y),
    );
  }
  getPosition(e) {
    return this._position ?? new E();
  }
  isFinished(e) {
    return this.getFrame(e) === a.FRAME_FINISHED;
  }
  getBitmap(e) {
    let r = this.getFrame(e);
    return r >= 0 ? (this._twinkleImages?._rb09602dca8db26(a._r420e8d678cf0e3[r]) ?? null) : null;
  }
  getFrame(e) {
    let r = e - this.var_5693;
    if (r < 0) return a.FRAME_NOT_STARTED;
    let t = Math.floor(r / a.FRAME_DURATION_IN_MSECS);
    return t >= a._r420e8d678cf0e3.length ? a.FRAME_FINISHED : t;
  }
}

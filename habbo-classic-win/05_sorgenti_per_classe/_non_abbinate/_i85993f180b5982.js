// Estratto da HabboAirLauncher.deobf.js, riga 170078.

class {
  static {
    n(this, "_i85993f180b5982");
  }
  _frames;
  constructor(e) {
    this._frames = [];
    for (let r of _ib5ee1bd09422e6(e, "frame")) {
      this._frames.push(new _i4c2be2d686eb96(r));
      let t = _i897b98cdeac318(r, "repeats");
      if (t > 1) for (; --t > 0;) this._frames.push(this._frames[this._frames.length - 1]);
    }
  }
  get frames() {
    return this._frames;
  }
}

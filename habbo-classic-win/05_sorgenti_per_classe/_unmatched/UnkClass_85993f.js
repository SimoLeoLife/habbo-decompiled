// Extracted from HabboAirLauncher.deobf.js, line 170078.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i85993f180b5982

class {
  static {
    n(this, "UnkClass_85993f");
  }
  _frames;
  constructor(e) {
    this._frames = [];
    for (let r of _ib5ee1bd09422e6(e, "frame")) {
      this._frames.push(new UnkClass_4c2be2_(r));
      let t = _i897b98cdeac318(r, "repeats");
      if (t > 1) for (; --t > 0;) this._frames.push(this._frames[this._frames.length - 1]);
    }
  }
  get frames() {
    return this._frames;
  }
}

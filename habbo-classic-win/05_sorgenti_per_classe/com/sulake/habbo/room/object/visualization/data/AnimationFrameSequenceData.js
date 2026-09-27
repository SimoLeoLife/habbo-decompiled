// Extracted from HabboAirLauncher.deobf.js, line 275441.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationFrameSequenceData.as
// Obfuscated name: _ia0054c2ae8a3b4

class {
  constructor(e, r) {
    this.var_3542 = e;
    this.var_3960 = r;
  }
  static {
    n(this, "AnimationFrameSequenceData");
  }
  _frames = [];
  _frameIndexes = [];
  var_2481 = [];
  get isRandom() {
    return this.var_3960;
  }
  get frameCount() {
    return this._frameIndexes.length * this.var_3542;
  }
  dispose() {
    this._frames = [];
  }
  initialize() {
    let e = 1,
      r = -1;
    for (let t = this._frameIndexes.length - 1; t >= 0; t--)
      ((this._frameIndexes[t] ?? -1) === r ? e++ : ((r = this._frameIndexes[t] ?? -1), (e = 1)),
        (this.var_2481[t] = e));
  }
  addFrame(e, r, t, i, s, o) {
    let d = null,
      c = 1;
    this._frames.length > 0 &&
      ((d = this._frames[this._frames.length - 1] ?? null),
      d != null &&
        d.id === e &&
        !d.hasDirectionalOffsets() &&
        d.x === r &&
        d.y === t &&
        d.randomX === i &&
        i === 0 &&
        d.randomY === s &&
        s === 0 &&
        ((c += d.repeats), this._frames.pop()));
    let f = o == null ? new AnimationFrameData(e, r, t, i, s, c) : new AnimationFrameDirectionalData(e, r, t, i, s, o, c);
    (this._frames.push(f),
      this._frameIndexes.push(this._frames.length - 1),
      this.var_2481.push(1));
  }
  getFrame(e) {
    return this._frames.length === 0 || e < 0 || e >= this.frameCount
      ? null
      : ((e = this._frameIndexes[e % this._frameIndexes.length] ?? -1), this._frames[e] ?? null);
  }
  getFrameIndex(e) {
    return e < 0 || e >= this.frameCount
      ? -1
      : (this.var_3960 &&
          ((e = Math.floor(Math.random() * this._frameIndexes.length)),
          e === this._frameIndexes.length && e--),
        e);
  }
  getRepeats(e) {
    return e < 0 || e >= this.frameCount ? 0 : (this.var_2481[e % this.var_2481.length] ?? 0);
  }
}

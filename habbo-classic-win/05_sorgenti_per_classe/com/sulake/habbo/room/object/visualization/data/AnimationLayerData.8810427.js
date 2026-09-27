// Estratto da HabboAirLauncher.deobf.js, riga 275505.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/AnimationLayerData.as
// Nome offuscato: _ib536a8ef121ab7

class {
  constructor(e, r, t) {
    this.var_3542 = e;
    this.var_4215 = r;
    this.var_3960 = t;
  }
  static {
    n(this, "AnimationLayerData");
  }
  _frameSequences = [];
  var_939 = -1;
  get frameCount() {
    return (this.var_939 < 0 && this.calculateLength(), this.var_939);
  }
  dispose() {
    for (let e of this._frameSequences) e.dispose();
    this._frameSequences = [];
  }
  _rd05bbae404fac5(e, r) {
    let t = new AnimationFrameSequenceData(e < 1 ? 1 : e, r);
    return (this._frameSequences.push(t), t);
  }
  calculateLength() {
    this.var_939 = 0;
    for (let e of this._frameSequences) this.var_939 += e.frameCount;
  }
  getFrame(e, r) {
    if (this.frameCount < 1) return null;
    r = Math.trunc(r / this.var_4215);
    let t = !1,
      i = 0;
    if (!this.var_3960) {
      let o = Math.trunc(r / this.frameCount);
      ((r %= this.frameCount),
        ((this.var_3542 > 0 && o >= this.var_3542) ||
          (this.var_3542 <= 0 && this.frameCount === 1)) &&
          ((r = this.frameCount - 1), (t = !0)));
      let d = 0;
      for (i = 0; i < this._frameSequences.length; i++) {
        let c = this._frameSequences[i];
        if (c != null) {
          if (r < d + c.frameCount) return this.getFrameFromSpecificSequence(e, c, i, r - d, t);
          d += c.frameCount;
        }
      }
      return null;
    }
    i = Math.floor(this._frameSequences.length * Math.random());
    let s = this._frameSequences[i] ?? null;
    return s == null || s.frameCount < 1 ? null : this.getFrameFromSpecificSequence(e, s, i, 0, !1);
  }
  getFrameFromSequence(e, r, t, i) {
    if (r < 0 || r >= this._frameSequences.length) return null;
    let s = this._frameSequences[r] ?? null;
    return s == null
      ? null
      : t >= s.frameCount
        ? this.getFrame(e, i)
        : this.getFrameFromSpecificSequence(e, s, r, t, !1);
  }
  getFrameFromSpecificSequence(e, r, t, i, s) {
    if (r == null) return null;
    let o = r.getFrameIndex(i),
      d = r.getFrame(o);
    if (d == null) return null;
    let c = d.getX(e),
      f = d.getY(e);
    (d.randomX !== 0 && (c += Math.trunc(d.randomX * Math.random())),
      d.randomY !== 0 && (f += Math.trunc(d.randomY * Math.random())));
    let l = d.repeats;
    l > 1 && (l = r.getRepeats(o));
    let b = this.var_4215 * l;
    s && (b = ah._rac0b58b7239d2d);
    let _ = !1;
    return (
      !this.var_3960 &&
        !r.isRandom &&
        t === this._frameSequences.length - 1 &&
        i === r.frameCount - 1 &&
        (_ = !0),
      ah.allocate(d.id, c, f, l, b, _, t, i)
    );
  }
}

// Extracted from HabboAirLauncher.deobf.js, line 33141.

class {
  constructor(e) {
    this.var_3295 = e;
  }
  static {
    n(this, "Transform");
  }
  var_536 = new UnkClass_4210dc();
  _rc90cd3cf3d0e59 = null;
  get colorTransform() {
    return this.var_536;
  }
  set colorTransform(e) {
    this.var_536 = e ?? new UnkClass_4210dc();
    let r = this.var_3295._r0203ab2933f479(),
      t = "tint" in r,
      i = Math.max(
        0,
        Math.min(1, this.var_536.alphaMultiplier + this.var_536.alphaOffset / 255),
      );
    if (
      ((this.var_3295.alpha = i),
      t &&
        (r.tint =
          ((_if24e00f85f3cd9(255 * this.var_536.redMultiplier) << 16) |
            (_if24e00f85f3cd9(255 * this.var_536.greenMultiplier) << 8) |
            _if24e00f85f3cd9(255 * this.var_536.blueMultiplier)) >>>
          0),
      !(this._rb9d6da45559786() || (!t && !this._r5271387b78017f())))
    ) {
      this.var_3295._re4e28fda3940bb(null);
      return;
    }
    let o = this._rc90cd3cf3d0e59 ?? (this._rc90cd3cf3d0e59 = new ColorMatrixFilter()),
      d = o.matrix.slice();
    ((d[0] = t ? 1 : this.var_536.redMultiplier),
      (d[1] = 0),
      (d[2] = 0),
      (d[3] = 0),
      (d[4] = this.var_536.redOffset / 255),
      (d[5] = 0),
      (d[6] = t ? 1 : this.var_536.greenMultiplier),
      (d[7] = 0),
      (d[8] = 0),
      (d[9] = this.var_536.greenOffset / 255),
      (d[10] = 0),
      (d[11] = 0),
      (d[12] = t ? 1 : this.var_536.blueMultiplier),
      (d[13] = 0),
      (d[14] = this.var_536.blueOffset / 255),
      (d[15] = 0),
      (d[16] = 0),
      (d[17] = 0),
      (d[18] = 1),
      (d[19] = 0),
      (o.matrix = d),
      (o.alpha = 1),
      this.var_3295._re4e28fda3940bb(o));
  }
  _rb9d6da45559786() {
    return (
      this.var_536.redOffset !== 0 ||
      this.var_536.greenOffset !== 0 ||
      this.var_536.blueOffset !== 0
    );
  }
  _r5271387b78017f() {
    return (
      this.var_536.redMultiplier === 1 &&
      this.var_536.greenMultiplier === 1 &&
      this.var_536.blueMultiplier === 1
    );
  }
}

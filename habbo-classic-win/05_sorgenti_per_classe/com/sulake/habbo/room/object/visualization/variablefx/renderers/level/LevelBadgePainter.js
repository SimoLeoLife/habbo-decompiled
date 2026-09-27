// Estratto da HabboAirLauncher.deobf.js, riga 288471.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/level/LevelBadgePainter.as
// Nome offuscato: _i67b765ce4118ce

class a {
  static {
    n(this, "LevelBadgePainter");
  }
  static _r94af506ad16999 = 5;
  static DIGIT_WIDTH = 8;
  static NUMBER_Y = 5;
  static SINGLE_DIGIT_NUMBER_X = 7;
  static MULTI_DIGIT_NUMBER_X = 6;
  static SINGLE_DIGIT_FRAME_WIDTH = 21;
  static _r7ad3eb95756199 = 5;
  static _re872492ec51bec = 10;
  static _rcac443248a750a = 10;
  _badgePrebakes = {};
  _r742604de811293;
  _numbers;
  constructor(e, r) {
    ((this._numbers = e.numbers),
      (this._r742604de811293 = {
        background: e.background == null ? null : this._rd7e5f4534d623e(e.background, r),
        darkening: this._rd7e5f4534d623e(e.darkening, r),
        frame: this._rd7e5f4534d623e(e.frame, r),
        lighting: this._rd7e5f4534d623e(e.lighting, r),
      }));
  }
  resolveFrameWidth(e) {
    let r = Math.max(1, e | 0);
    return r === 1 ? a.SINGLE_DIGIT_FRAME_WIDTH : a.MULTI_DIGIT_NUMBER_X + r * a.DIGIT_WIDTH + a._r7ad3eb95756199;
  }
  _rc0244cf7f46859(e, r) {
    let t = this._re3578bced5e25e(e),
      i = t._ra73bcfd9e04c29,
      s = this._rc5cebd2cfa1126(i._rb43092540d2d52.width, i._rb43092540d2d52.height);
    return (
      this.drawRecoloredBackgroundAndFrame(s, i, r),
      { _rb43092540d2d52: s, _rb5269098231665: !!t._r87797ec5168f75, _ra212ee8f28e715: i }
    );
  }
  _r3bb25c46b9c43f(e) {
    e != null &&
      (e._rb43092540d2d52?.dispose(), e._rb5269098231665 === !0 && this.disposeBadgeSourcePrebake(e._ra212ee8f28e715));
  }
  drawBadge(e, r, t, i, s) {
    (e.drawLayer(r._rb43092540d2d52, i, s, ie.NORMAL, 255),
      this.drawDigits(e, t, i, s),
      e.drawLayer(r._ra212ee8f28e715.darkening, i, s, ie.MULTIPLY, 255),
      e.drawLayer(r._ra212ee8f28e715.lighting, i, s, ie.ADD, 255));
  }
  dispose() {
    for (let e in this._badgePrebakes) this.disposeBadgeSourcePrebake(this._badgePrebakes[e]);
    ((this._badgePrebakes = {}),
      this._r742604de811293.background?.dispose(),
      this._r742604de811293.darkening.dispose(),
      this._r742604de811293.frame.dispose(),
      this._r742604de811293.lighting.dispose());
  }
  _re3578bced5e25e(e) {
    let r = Math.max(1, e | 0);
    if (r > a._r94af506ad16999) return { _r87797ec5168f75: !0, _ra73bcfd9e04c29: this._r1071c7352959ee(r) };
    let t = String(r),
      i = this._badgePrebakes[t];
    return (
      i == null && ((i = this._r1071c7352959ee(r)), (this._badgePrebakes[t] = i)),
      { _r87797ec5168f75: !1, _ra73bcfd9e04c29: i }
    );
  }
  _r1071c7352959ee(e) {
    let r = this.resolveFrameWidth(e),
      t = this._r742604de811293.frame.height,
      i = this._rc5cebd2cfa1126(r, t),
      s = this._rc5cebd2cfa1126(r, t),
      o = this._rc5cebd2cfa1126(r, t),
      d = this._rc5cebd2cfa1126(r, t);
    return (
      this._r9beb7c343c13f0(i),
      this._r619a4e6ea46025(s),
      this._rc9b8c84466ea00(o, this._r742604de811293.darkening),
      this._rc9b8c84466ea00(d, this._r742604de811293.lighting),
      { _rb43092540d2d52: i, darkening: o, frame: s, lighting: d }
    );
  }
  _r9beb7c343c13f0(e) {
    e.lock();
    try {
      let r = new Tt(e);
      (r.clear(0),
        this._r742604de811293.background != null &&
          r.drawThreeSlice(
            this._r742604de811293.background,
            a._re872492ec51bec,
            a._rcac443248a750a,
            e.width,
            0,
            0,
            ie.NORMAL,
            255,
          ),
        r.drawThreeSlice(
          this._r742604de811293.frame,
          a._re872492ec51bec,
          a._rcac443248a750a,
          e.width,
          0,
          0,
          ie.NORMAL,
          255,
        ));
    } finally {
      e.unlock();
    }
  }
  _r619a4e6ea46025(e) {
    e.lock();
    try {
      let r = new Tt(e);
      (r.clear(0),
        r.drawThreeSlice(
          this._r742604de811293.frame,
          a._re872492ec51bec,
          a._rcac443248a750a,
          e.width,
          0,
          0,
          ie.NORMAL,
          255,
        ));
    } finally {
      e.unlock();
    }
  }
  _rc9b8c84466ea00(e, r) {
    e.lock();
    try {
      let t = new Tt(e);
      (t.clear(0),
        t.drawThreeSlice(r, a._re872492ec51bec, a._rcac443248a750a, e.width, 0, 0, ie.NORMAL, 255));
    } finally {
      e.unlock();
    }
  }
  drawRecoloredBackgroundAndFrame(e, r, t) {
    e.lock();
    try {
      let i = new Tt(e);
      (i.clear(0),
        i.drawLayer(r._rb43092540d2d52, 0, 0, ie.NORMAL, 255),
        i.drawTintedLayer(r.frame, 0, 0, t, ie.NORMAL, 255));
    } finally {
      e.unlock();
    }
  }
  drawDigits(e, r, t, i) {
    let s = r.length === 1 ? a.SINGLE_DIGIT_NUMBER_X : a.MULTI_DIGIT_NUMBER_X;
    for (let o = 0; o < r.length; o++) {
      let d = Number(r.charAt(o)) | 0,
        c = t + s + o * a.DIGIT_WIDTH,
        f = i + a.NUMBER_Y;
      e.drawLayer(
        this._numbers,
        c - d * a.DIGIT_WIDTH,
        f,
        ie.NORMAL,
        255,
        new VariableFxClipRect(c, f, a.DIGIT_WIDTH, this._numbers.height),
      );
    }
  }
  _rd7e5f4534d623e(e, r) {
    let t = this._rc5cebd2cfa1126(r.width, r.height);
    t.lock();
    try {
      let i = new Tt(t);
      (i.clear(0), i.drawLayer(e, -(r.x | 0), -(r.y | 0), ie.NORMAL, 255));
    } finally {
      t.unlock();
    }
    return t;
  }
  _rc5cebd2cfa1126(e, r) {
    return new A(e | 0, r | 0, !0, 0);
  }
  disposeBadgeSourcePrebake(e) {
    (e._rb43092540d2d52.dispose(), e.darkening.dispose(), e.frame.dispose(), e.lighting.dispose());
  }
}

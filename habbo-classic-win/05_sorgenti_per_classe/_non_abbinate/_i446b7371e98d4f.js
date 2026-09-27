// Estratto da HabboAirLauncher.deobf.js, riga 288656.

class {
  constructor(e, r, t) {
    this.background = e;
    this._rc0fe48b2354652 = r;
    this._r4005dc89d5506f = t;
  }
  static {
    n(this, "_i446b7371e98d4f");
  }
  disposed = !1;
  _r827be6a2c377ac = {};
  _ra13de0c45227ca = null;
  _rf93cc1efdcd25b(e, r) {
    let t = Math.max(1, e | 0),
      i = Math.max(1, r | 0);
    if (t > ug._r94af506ad16999) return { bitmapData: this._rc5c001717b9483(i), _r87797ec5168f75: !0 };
    let s = String(t),
      o = this._r827be6a2c377ac[s];
    return (
      o == null && ((o = this._rc5c001717b9483(i)), (this._r827be6a2c377ac[s] = o)),
      { bitmapData: o, _r87797ec5168f75: !1 }
    );
  }
  _r0529ec95b0e982(e) {
    return (this._ra13de0c45227ca == null && (this._ra13de0c45227ca = e()), this._ra13de0c45227ca);
  }
  dispose() {
    if (!this.disposed) {
      ((this.disposed = !0),
        this._rc0fe48b2354652?.dispose(),
        this._r4005dc89d5506f != null && (this._r4005dc89d5506f.dispose(), (this._r4005dc89d5506f = null)));
      for (let e in this._r827be6a2c377ac) this._r827be6a2c377ac[e]?.dispose();
      ((this._r827be6a2c377ac = {}),
        this._ra13de0c45227ca != null &&
          (class_3376.disposeConfigPrebake(this._ra13de0c45227ca), (this._ra13de0c45227ca = null)));
    }
  }
  _rc5c001717b9483(e) {
    let r = new A(e, hg.FRAME_HEIGHT, !0, 0);
    r.lock();
    try {
      let t = new Tt(r);
      (t.clear(0),
        t.drawThreeSlice(
          this.background,
          hg._r7ab6f668244605,
          hg._r265fc63f06d3a4,
          e,
          0,
          0,
          ie.NORMAL,
          255,
        ));
    } finally {
      r.unlock();
    }
    return r;
  }
}

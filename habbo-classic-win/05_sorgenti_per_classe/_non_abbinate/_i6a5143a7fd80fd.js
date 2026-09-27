// Estratto da HabboAirLauncher.deobf.js, riga 270313.

class {
  static {
    n(this, "_i6a5143a7fd80fd");
  }
  _images = null;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || ((this._images = null), (this._disposed = !0));
  }
  _r5ea14906576318(e) {
    this._images = e;
  }
  _ra5a06248a267ef(e, r) {
    if (this._disposed || this._images == null || this._images.length === 0) return new A(1, 1);
    let t = new A(r, this._images[0].height, !1, 0),
      i = 0;
    for (; i < r;) {
      let s = e + i,
        o = this._r5d0a6634c0b12b(s);
      if (o < 0) {
        if (((i += -e), e >= 0)) return new A(1, 1);
        continue;
      }
      let d = this._images[o],
        c = this._rf2bb0e47903c68(s);
      d.width > c + r - i
        ? (t.copyPixels(d, new D(c, 0, r - i, d.height), new E(i, 0)), (i = r))
        : (t.copyPixels(d, new D(c, 0, d.width - c, d.height), new E(i, 0)), (i += d.width - c));
    }
    return t;
  }
  _r5d0a6634c0b12b(e) {
    let r = 0;
    for (let t = 0; t < (this._images?.length ?? 0); t++) {
      let i = this._images?.[t];
      if (i != null) {
        if (r <= e && e < r + i.width) return t;
        r += i.width;
      }
    }
    return -1;
  }
  _rf2bb0e47903c68(e) {
    let r = 0;
    for (let t = 0; t < (this._images?.length ?? 0); t++) {
      let i = this._images?.[t];
      if (i != null) {
        if (r <= e && e < r + i.width) return e - r;
        r += i.width;
      }
    }
    return -1;
  }
}

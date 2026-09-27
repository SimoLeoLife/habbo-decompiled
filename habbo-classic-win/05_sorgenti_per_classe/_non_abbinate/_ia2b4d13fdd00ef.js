// Estratto da HabboAirLauncher.deobf.js, riga 279251.

class a extends Pa {
  static {
    n(this, "_ia2b4d13fdd00ef");
  }
  static _re1dda5a366c40d = 15;
  static _rf8113fe5872b9c = 31;
  static _r4ca32b9b9e0ffd = 2;
  static _rbe6bbc5ae60bf2 = 1;
  _r6c23addd546850 = null;
  _rdd1e63f483468b = null;
  _re07e4d9874eaaa = null;
  _ra6e51d6be43c9c = null;
  _r1cff9177d96e9a = [];
  _rccf505c78518d1(e) {
    return (
      this._re07e4d9874eaaa == null && this._rb29763aded3075(e),
      this.getSprite(2) != null && (this._r1cff9177d96e9a[0] = this._rbe3aa57eab5b9e(e, 0)),
      this.getSprite(3) != null && (this._r1cff9177d96e9a[1] = this._rbe3aa57eab5b9e(e, 1)),
      super._rccf505c78518d1(e)
    );
  }
  getSpriteXOffset(e, r, t) {
    return (t === 2 || t === 3) && this._r1cff9177d96e9a.length === 2
      ? (this._r1cff9177d96e9a[t - 2]?.x ?? 0)
      : super.getSpriteXOffset(e, r, t);
  }
  getSpriteYOffset(e, r, t) {
    return (t === 2 || t === 3) && this._r1cff9177d96e9a.length === 2
      ? (this._r1cff9177d96e9a[t - 2]?.y ?? 0)
      : super.getSpriteYOffset(e, r, t);
  }
  _rbe3aa57eab5b9e(e, r) {
    let t = this._r6c23addd546850,
      i = this._rdd1e63f483468b,
      s = this._re07e4d9874eaaa,
      o = this._ra6e51d6be43c9c,
      d = t[r] ?? 0,
      c = i[r] ?? 1,
      f = s[r] ?? 1,
      l = o[r] ?? 0,
      b = 1,
      _ = e === 32 ? a._re1dda5a366c40d : a._rf8113fe5872b9c;
    e === 32 && (b = 0.5);
    let h = d + c * f;
    Math.abs(h) >= _ && (c > 0 ? (d -= h - _) : (d += -_ - h), (c = -c), (i[r] = c));
    let p = (_ - Math.abs(d)) * l,
      m = c * Math.sin(Math.abs(d / 4)) * p;
    return (
      c > 0 ? (m -= p) : (m += p),
      (d += c * f * b),
      (t[r] = d),
      Math.trunc(m) === 0 && (o[r] = this._r7aacf75be9f2c0()),
      new E(d, m)
    );
  }
  _rb29763aded3075(e) {
    let r = e === 32 ? a._re1dda5a366c40d : a._rf8113fe5872b9c;
    ((this._r6c23addd546850 = [Math.random() * r * 1.5, Math.random() * r * 1.5]),
      (this._rdd1e63f483468b = [1, -1]),
      (this._re07e4d9874eaaa = [a._r4ca32b9b9e0ffd, a._rbe6bbc5ae60bf2]),
      (this._ra6e51d6be43c9c = [this._r7aacf75be9f2c0(), this._r7aacf75be9f2c0()]));
  }
  _r7aacf75be9f2c0() {
    return (Math.random() * 30) / 100 + 0.15;
  }
}

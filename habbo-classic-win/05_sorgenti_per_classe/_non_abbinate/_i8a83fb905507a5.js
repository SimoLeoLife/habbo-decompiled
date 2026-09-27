// Estratto da HabboAirLauncher.deobf.js, riga 79904.

class a {
  static {
    n(this, "_i8a83fb905507a5");
  }
  static _rf9805d46383aac(e, r, t, i) {
    let s = [],
      o = t - e,
      d = i - r,
      c = 1;
    d < 0 && ((c = -1), (d = -d));
    let f = 2 * d - o,
      l = r;
    for (let b = e; b <= t; b++)
      (s.push({ x: b, y: l }), f > 0 ? ((l += c), (f += 2 * (d - o))) : (f += 2 * d));
    return s;
  }
  static _r80c2931e9b6aa2(e, r, t, i) {
    let s = [],
      o = t - e,
      d = i - r,
      c = 1;
    o < 0 && ((c = -1), (o = -o));
    let f = 2 * o - d,
      l = e;
    for (let b = r; b <= i; b++)
      (s.push({ x: l, y: b }), f > 0 ? ((l += c), (f += 2 * (o - d))) : (f += 2 * o));
    return s;
  }
  static _rd09a8a91a3ba99(e, r, t, i) {
    return Math.abs(i - r) < Math.abs(t - e)
      ? e > t
        ? a._rf9805d46383aac(t, i, e, r)
        : a._rf9805d46383aac(e, r, t, i)
      : r > i
        ? a._r80c2931e9b6aa2(t, i, e, r)
        : a._r80c2931e9b6aa2(e, r, t, i);
  }
}

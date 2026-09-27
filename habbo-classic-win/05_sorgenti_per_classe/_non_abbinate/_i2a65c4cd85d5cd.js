// Estratto da HabboAirLauncher.deobf.js, riga 65323.

class a {
  static {
    n(this, "_i2a65c4cd85d5cd");
  }
  static _r86482912fd0af5 = a._r2a9bc53beb2a93();
  static _r42945ef572c085(e, r = 0, t = 0) {
    let i = e.toUint8Array(),
      [s, o] = a._rc373723d6c0fbe(i.length, r, t),
      d = s + o,
      c = 4294967295;
    for (let f = s; f < d; f++) c = (a._r86482912fd0af5[(c ^ (i[f] ?? 0)) & 255] ?? 0) ^ (c >>> 8);
    return (c ^ 4294967295) >>> 0;
  }
  static _r0771e6fe2ae343(e, r = 0, t = 0) {
    let i = e.toUint8Array(),
      [s, o] = a._rc373723d6c0fbe(i.length, r, t),
      d = s + o,
      c = 1,
      f = 0;
    for (let l = s; l < d; l++) ((c = (c + (i[l] ?? 0)) % 65521), (f = (c + f) % 65521));
    return ((f << 16) | c) >>> 0;
  }
  static _r2a9bc53beb2a93() {
    let e = [];
    for (let r = 0; r < 256; r++) {
      let t = r;
      for (let i = 0; i < 8; i++) t = (t & 1) !== 0 ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e.push(t >>> 0);
    }
    return e;
  }
  static _rc373723d6c0fbe(e, r, t) {
    let i = Math.max(0, Math.min(r >>> 0, e)),
      s = e - i,
      o = t === 0 ? s : Math.max(0, Math.min(t >>> 0, s));
    return [i, o];
  }
}

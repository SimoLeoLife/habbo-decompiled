// Estratto da HabboAirLauncher.deobf.js, riga 45855.

class a {
  static {
    n(this, "_if063d9662f56ec");
  }
  static _r62f19abac636a8 = !0;
  static _r13caac3e23fcd3 = 1.2;
  static _r7d0cf552920212 = 12;
  static _r0018afbb6fec5f = 4;
  static _rc9b31ee8638019 = 8;
  static _r22c25e13ff82e1 = 4;
  static _rb73be55bc38682 = "o";
  static _rc873b319bcea09 = 8;
  static _r14250ced10213f = 16;
  static _rd9915ca69e6b88 = _i295affcc6e4d03(1, 1);
  static _ra2e0aab05f01c3 = _i5183d3213c4d99(a._rd9915ca69e6b88);
  _r97fcb5f3515590 = new Map();
  _read296cff7f4cb = new Map();
  clear() {
    (this._r97fcb5f3515590.clear(), this._read296cff7f4cb.clear());
  }
  getCacheKey(e) {
    return [e.fontFamily, e.fontSize, e.bold ? "bold" : "normal"].join("|");
  }
  _r00808c3405df26(e) {
    let r = this.getCacheKey(e),
      t = this._r97fcb5f3515590.get(r);
    if (t != null) return t;
    let i = a._rd7f003549911c6(e._r1f9f493146f958),
      s = this._r777185886ef32b(e, i, 0);
    return (
      this._r238421547ba603(r, e, s),
      this._r4a30691ae65afc(r, i, (o) =>
        a._r9304614ee87f53(o) === a._r9304614ee87f53(i) ? s : this._r777185886ef32b(e, o),
      )
    );
  }
  _rb7405b37102287(e) {
    let r = this.getCacheKey(e),
      t = this._read296cff7f4cb.get(r);
    if (t != null) return t;
    let i = this._re3449723f0b1a2(e, this._r777185886ef32b(e, a._rd7f003549911c6(e._r1f9f493146f958), 0));
    return (this._read296cff7f4cb.set(r, i), i);
  }
  _r4a30691ae65afc(e, r, t) {
    let i = this._r97fcb5f3515590.get(e);
    if (i != null) return i;
    let s = Math.max(Number.EPSILON, r),
      o = new Map(),
      d = n((h) => {
        let p = a._r9304614ee87f53(h),
          m = o.get(p);
        return (m === void 0 && ((m = t(h)), o.set(p, m)), m);
      }, "_i4c4ec8954d6d0d"),
      c = d(s),
      f = a._rc80697a58fb338(c, s),
      l = a._re397e3a5715972(s, f, d, (h) => h._r6f44054bb4971c),
      b = a._re397e3a5715972(s, f, d, (h) => h._rf55d3d0a35f187),
      _ = a._re8e55d01c03217(l, b, s);
    return (
      this._r97fcb5f3515590.set(e, _),
      this._r291aa86e5d00bd(e, _, !1, {
        baseScaleY: s,
        maximumExplorationScaleY: f,
        topWinnerScaleY: l,
        bottomWinnerScaleY: b,
      }),
      _
    );
  }
  _rf1de2fe32413da(e, r, t, i) {
    let s = Math.max(1, t),
      o = 1 / s,
      d = a._rdde846d2517979(e, r);
    return { scaleX: o, scaleY: i, offsetY: a._rf6e351f920e76e(d, s, i) };
  }
  static _r500a0e9a259e84(e) {
    let r = a._r435a49886c0c7b(e);
    if (r < 0) return null;
    let t = a._r607ce8aa9b1ffe(e, r, a._rc9b31ee8638019);
    if (t == null) return null;
    let i = Math.trunc((t.start + t.end) / 2),
      s = a._ra7d2ab46d2a77d(e, i, e.height - 1, -1, a._rc9b31ee8638019),
      o = a._ra7d2ab46d2a77d(e, i, 0, 1, a._r22c25e13ff82e1);
    if (s < 0 || o < 0 || o >= s) return null;
    let d = Math.floor((s - o + 1) / 2);
    if (d <= 0) return null;
    let c = o + d - 1,
      f = s - d + 1,
      l = (c + f) / 2,
      b = 0,
      _ = 0;
    for (let m = 0; m < d; m++) {
      let v = a._r681cdb7828367e(e, i, o + m),
        w = a._r681cdb7828367e(e, i, s - m);
      ((b += v * v), (_ += w * w));
    }
    let h = b / d,
      p = _ / d;
    return {
      _r347d6948a1201f: i,
      topY: o,
      _r4a4cdf6f827a94: s,
      _r194dea0a0ddb9e: l,
      _rc64ed62392c98d: d,
      _r6f44054bb4971c: h,
      _rf55d3d0a35f187: p,
      score: -((h + p) / 2),
    };
  }
  static _rdde846d2517979(e, r) {
    let t = Math.max(0, e),
      i = Math.max(0, r);
    return Math.max(0, t - i);
  }
  static _rf6e351f920e76e(e, r, t) {
    let i = Math.max(1, r),
      s = Math.max(0, (e * i) / i);
    return s - s * i * t;
  }
  static _rd7f003549911c6(e) {
    return 1 / Math.max(1, e);
  }
  static _rc80697a58fb338(e, r) {
    let t = e == null ? 0 : Math.max(0, e._r4a4cdf6f827a94 - e.topY + 1),
      i = Math.max(Number.EPSILON, r);
    return t <= 0 ? i * a._r13caac3e23fcd3 : i * ((t + 1) / t);
  }
  _r777185886ef32b(e, r, t = null) {
    let i = this._raa04a6d39b4370(e, r, t);
    return i == null ? null : a._r500a0e9a259e84(i);
  }
  _raa04a6d39b4370(e, r, t) {
    let i = a._r7ac62a99d39a94(e.font),
      s = a._r49ac529138e7bd(e.fontSize),
      o = a._r5666512ffaac41(e.fontSize),
      d = Math.max(16, Math.ceil(i.width) + s * 2),
      c = Math.max(16, Math.ceil(i.ascent + i.descent) + o * 2),
      f = Math.max(1, e._r1f9f493146f958),
      l = Math.max(f, e._r80ea365068f77f),
      b = _i295affcc6e4d03(Math.max(1, Math.ceil(d * l)), Math.max(1, Math.ceil(c * l))),
      _ = _i5183d3213c4d99(b),
      h = _i295affcc6e4d03(Math.max(1, Math.ceil(d * f)), Math.max(1, Math.ceil(c * f))),
      p = _i5183d3213c4d99(h),
      m = _i295affcc6e4d03(d, c),
      v = _i5183d3213c4d99(m);
    if (b == null || _ == null || h == null || p == null || m == null || v == null) return null;
    let w = Math.max(s, Math.round((d - i.width) / 2)),
      I = o + i.ascent,
      C = Math.max(0, t ?? this._read296cff7f4cb.get(this.getCacheKey(e)) ?? 0),
      W = a._rdde846d2517979(I, C),
      R = h.height * r,
      T = a._rf6e351f920e76e(W, f, r);
    return (
      _.setTransform(1, 0, 0, 1, 0, 0),
      _.clearRect(0, 0, b.width, b.height),
      (_.fillStyle = "#000000"),
      _.fillRect(0, 0, b.width, b.height),
      _.setTransform(l, 0, 0, l, 0, 0),
      (_.textBaseline = "alphabetic"),
      (_.font = e.font),
      (_.fillStyle = "#ffffff"),
      _.fillText(a._rb73be55bc38682, w, I),
      p.setTransform(1, 0, 0, 1, 0, 0),
      p.clearRect(0, 0, h.width, h.height),
      (p.fillStyle = "#000000"),
      p.fillRect(0, 0, h.width, h.height),
      (p.imageSmoothingEnabled = !0),
      (p.imageSmoothingQuality = "high"),
      p.drawImage(b, 0, 0, h.width, h.height),
      v.setTransform(1, 0, 0, 1, 0, 0),
      v.clearRect(0, 0, d, c),
      (v.fillStyle = "#000000"),
      v.fillRect(0, 0, d, c),
      (v.imageSmoothingEnabled = !0),
      (v.imageSmoothingQuality = "high"),
      v.drawImage(h, 0, T, d, R),
      v.getImageData(0, 0, d, c)
    );
  }
  static _r7ac62a99d39a94(e) {
    let r = a._ra2e0aab05f01c3;
    if (r == null) return { width: 12, ascent: 9, descent: 3 };
    r.font = e;
    let t = r.measureText(a._rb73be55bc38682);
    return {
      width: Math.max(1, t.width),
      ascent: Math.max(1, t.actualBoundingBoxAscent ?? t.fontBoundingBoxAscent ?? 9),
      descent: Math.max(1, t.actualBoundingBoxDescent ?? t.fontBoundingBoxDescent ?? 3),
    };
  }
  _r238421547ba603(e, r, t) {
    this._read296cff7f4cb.has(e) || this._read296cff7f4cb.set(e, this._re3449723f0b1a2(r, t));
  }
  _re3449723f0b1a2(e, r) {
    if (r == null) return 0;
    let t = a._r7ac62a99d39a94(e.font),
      i = a._r5666512ffaac41(e.fontSize) + t.ascent;
    return Math.max(0, i - r._r194dea0a0ddb9e);
  }
  static _r435a49886c0c7b(e) {
    for (let r = e.height - 1; r >= 0; r--)
      if (a._r607ce8aa9b1ffe(e, r, a._rc9b31ee8638019) != null) return r;
    return -1;
  }
  static _r607ce8aa9b1ffe(e, r, t) {
    let i = null,
      s = -1,
      o = 0;
    for (let d = 0; d < e.width; d++) {
      let c = a._r681cdb7828367e(e, d, r);
      if (c > t) {
        (s < 0 && ((s = d), (o = 0)), (o += c));
        continue;
      }
      if (s >= 0) {
        let f = { start: s, end: d - 1, strength: o };
        ((i == null || f.strength > i.strength) && (i = f), (s = -1), (o = 0));
      }
    }
    if (s >= 0) {
      let d = { start: s, end: e.width - 1, strength: o };
      (i == null || d.strength > i.strength) && (i = d);
    }
    return i;
  }
  static _ra7d2ab46d2a77d(e, r, t, i, s) {
    for (let o = t; o >= 0 && o < e.height; o += i) if (a._r681cdb7828367e(e, r, o) > s) return o;
    return -1;
  }
  static _r681cdb7828367e(e, r, t) {
    let i = (t * e.width + r) * 4,
      s = e.data[i] ?? 0,
      o = e.data[i + 1] ?? 0,
      d = e.data[i + 2] ?? 0;
    return 0.2126 * s + 0.7152 * o + 0.0722 * d;
  }
  static _r49ac529138e7bd(e) {
    return Math.max(a._rc873b319bcea09, Math.ceil(e));
  }
  static _r5666512ffaac41(e) {
    return Math.max(a._r14250ced10213f, Math.ceil(e * 2));
  }
  static _rc03c1b930d69be(e, r, t) {
    let i = Math.min(e, r),
      s = Math.max(e, r);
    if (t <= 1 || Math.abs(s - i) <= Number.EPSILON) return [i];
    let o = (s - i) / (t - 1),
      d = [];
    for (let c = 0; c < t; c++) d.push(i + o * c);
    return d;
  }
  static _r0ba588fc0954c1(e, r) {
    if (e.length <= 1 || r < 0 || r >= e.length) return null;
    let t = Math.max(0, r - 1),
      i = Math.min(e.length - 1, r + 1);
    return (t === i && (i < e.length - 1 ? i++ : t > 0 && t--), { start: e[t], end: e[i] });
  }
  static _re8e55d01c03217(e, r, t) {
    return e == null && r == null ? t : e == null ? (r ?? t) : r == null ? e : (e + r) / 2;
  }
  static _re397e3a5715972(e, r, t, i) {
    let s = null,
      o = Number.NEGATIVE_INFINITY,
      d = e,
      c = r;
    for (let f = 0; f < a._r0018afbb6fec5f; f++) {
      let l = a._rc03c1b930d69be(d, c, a._r7d0cf552920212),
        b = null,
        _ = Number.NEGATIVE_INFINITY,
        h = -1;
      for (let m = 0; m < l.length; m++) {
        let v = l[m],
          w = t(v);
        if (w == null) continue;
        let I = i(w);
        Number.isFinite(I) && (I > o && ((o = I), (s = v)), I > _ && ((_ = I), (b = v), (h = m)));
      }
      if (b == null || h < 0 || l.length <= 1) break;
      let p = a._r0ba588fc0954c1(l, h);
      if (p == null) break;
      ((d = p.start), (c = p.end));
    }
    return s;
  }
  static _r9304614ee87f53(e) {
    return Math.round(e * 1e12) / 1e12;
  }
  _r291aa86e5d00bd(e, r, t, i) {
    !a._r62f19abac636a8 ||
      typeof console > "u" ||
      console.info("[FlashTextVerticalCalibration]", { cacheKey: e, scaleY: r, fromCache: t, ...i });
  }
}

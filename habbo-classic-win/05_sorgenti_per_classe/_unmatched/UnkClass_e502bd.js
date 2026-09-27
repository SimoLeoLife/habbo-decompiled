// Extracted from HabboAirLauncher.deobf.js, line 63230.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie502bd7e1e258c

class a {
  static {
    n(this, "UnkClass_e502bd");
  }
  static {
    V6r(this, "UnkClass_e502bd");
  }
  [Hn(410)];
  d;
  [Hn(425)];
  [Hn(452)];
  e;
  n;
  p;
  q;
  [Hn(419)];
  [Hn(496)];
  constructor(e, r, t = null, i = null, s = null, o = null, d = null, c = null) {
    let f = _0x2d72,
      l = {
        uBihC: n(function (b, _) {
          return b != _;
        }, "uBihC"),
      };
    ((this.n = e ?? new Ca(0)),
      (this.e = r),
      (this.d = t ?? new Ca(0)),
      (this.p = i ?? new Ca(0)),
      (this.q = s ?? new Ca(0)),
      (this[f(425)] = o ?? new Ca(0)),
      (this[f(452)] = d ?? new Ca(0)),
      (this[f(410)] = c ?? new Ca(0)),
      (this[f(496)] = l[f(423)](e, null) && r !== 0),
      (this[f(419)] = this[f(496)] && t != null));
  }
  static [Hn(474)](e, r) {
    let t = _0x2d72;
    return new a(new Ca(e, 16, !0), Number[t(400)](r, 16));
  }
  static [Hn(438)](e, r, t, i = null, s = null, o = null, d = null, c = null) {
    let f = _0x2d72,
      l = {
        uvjBt: n(function (b, _) {
          return b ?? _;
        }, "uvjBt"),
        QhuCh: n(function (b, _) {
          return b ?? _;
        }, "QhuCh"),
      };
    return i == null
      ? new a(new Ca(e, 16, !0), Number[f(400)](r, 16), new Ca(t, 16, !0))
      : new a(
          new Ca(e, 16, !0),
          Number[f(400)](r, 16),
          new Ca(t, 16, !0),
          new Ca(i, 16, !0),
          new Ca(s, 16, !0),
          new Ca(l[f(412)](o, "0"), 16, !0),
          new Ca(d ?? "0", 16, !0),
          new Ca(l[f(444)](c, "0"), 16, !0),
        );
  }
  static [Hn(470)](e, r) {
    let t = _0x2d72,
      i = {
        chfxj: n(function (f, l) {
          return f !== l;
        }, "chfxj"),
      },
      s = new Random(),
      o = e >> 1,
      d = new a(null, 0),
      c = new Ca(r, 16, !0);
    for (d.e = Number[t(400)](r, 16); ;) {
      do d.p = a[t(441)](e - o, s);
      while (d.p[t(466)](Ca[t(422)])[t(493)](c)[t(471)](Ca[t(422)]) !== 0 || !d.p[t(432)](10));
      do d.q = a[t(441)](o, s);
      while (i[t(437)](d.q[t(466)](Ca[t(422)])[t(493)](c)[t(471)](Ca[t(422)]), 0) || !d.q[t(432)](10));
      d.p[t(471)](d.q) <= 0 && ([d.p, d.q] = [d.q, d.p]);
      let f = d.p[t(466)](Ca[t(422)]),
        l = d.q[t(466)](Ca[t(422)]),
        b = f[t(467)](l);
      if (b[t(493)](c)[t(471)](Ca[t(422)]) === 0)
        return (
          (d.n = d.p[t(467)](d.q)),
          (d.d = c[t(409)](b)),
          (d[t(425)] = d.d[t(485)](f)),
          (d[t(452)] = d.d[t(485)](l)),
          (d[t(410)] = d.q[t(409)](d.p)),
          (d[t(496)] = !0),
          (d[t(419)] = !0),
          d
        );
    }
  }
  [Hn(407)]() {
    let e = _0x2d72,
      r = {
        wVJXJ: n(function (t, i) {
          return t / i;
        }, "wVJXJ"),
      };
    return Math[e(449)](r[e(442)](this.n[e(489)](), 8));
  }
  [Hn(416)]() {
    let e = _0x2d72;
    ((this.e = 0),
      this.n[e(416)](),
      this.d[e(416)](),
      this.p[e(416)](),
      this.q[e(416)](),
      this[e(425)][e(416)](),
      this[e(452)][e(416)](),
      this[e(410)][e(416)](),
      (this[e(496)] = !1),
      (this[e(419)] = !1));
  }
  [Hn(426)](e, r, t, i = null) {
    let s = _0x2d72;
    this[s(413)]((o) => this[s(402)](o), e, r, t, i ?? this[s(494)][s(445)](this), 2);
  }
  [Hn(430)](e, r, t, i = null) {
    let s = _0x2d72;
    this[s(448)]((o) => this[s(436)](o), e, r, t, i ?? this[s(479)][s(445)](this), 2);
  }
  [Hn(478)](e, r, t, i = null) {
    let s = _0x2d72;
    this[s(413)]((o) => this[s(436)](o), e, r, t, i ?? this[s(494)][s(445)](this), 1);
  }
  [Hn(460)](e, r, t, i = null) {
    let s = _0x2d72;
    this[s(448)]((o) => this[s(402)](o), e, r, t, i ?? this[s(479)][s(445)](this), 1);
  }
  [Hn(406)](e, r, t, i = 0) {
    return e;
  }
  [Hn(451)](e, r, t = 0) {
    return e[_0x2d72(455)]();
  }
  [Hn(443)]() {
    let e = _0x2d72;
    return { XwXTq: e(484) }[e(464)];
  }
  [Hn(424)]() {
    let e = _0x2d72,
      r = {
        sMoJd: n(function (i, s) {
          return i !== s;
        }, "sMoJd"),
      },
      t =
        "N=" +
        this.n[e(443)](16) +
        e(461) +
        this.e[e(443)](16) +
        `
`;
    return (
      this[e(419)] &&
        ((t +=
          "D=" +
          this.d[e(443)](16) +
          `
`),
        this.p[e(487)]() !== 0 &&
          r[e(453)](this.q[e(487)](), 0) &&
          ((t +=
            "P=" +
            this.p[e(443)](16) +
            e(457) +
            this.q[e(443)](16) +
            `
`),
          (t +=
            e(447) +
            this[e(425)][e(443)](16) +
            e(465) +
            this[e(452)][e(443)](16) +
            e(439) +
            this[e(410)][e(443)](16) +
            `
`))),
      t
    );
  }
  static [Hn(441)](e, r) {
    let t = _0x2d72,
      i = {
        yvSqR: n(function (d, c) {
          return d >> c;
        }, "yvSqR"),
      };
    if (e < 2) return Ca[t(427)](1);
    let s = new re();
    (r[t(463)](s, i[t(486)](e, 3)), (s[t(417)] = 0));
    let o = new Ca(s, 0, !0);
    return (o[t(462)](e, 1), o);
  }
  [Hn(402)](e) {
    return e[_0x2d72(497)](this.e, this.n);
  }
  [Hn(436)](e) {
    let r = _0x2d72,
      t = {
        aTyIx: n(function (o, d) {
          return o === d;
        }, "aTyIx"),
        Gfufs: n(function (o, d) {
          return o === d;
        }, "Gfufs"),
      };
    if (t[r(483)](this.p[r(487)](), 0) && t[r(420)](this.q[r(487)](), 0)) return e[r(488)](this.d, this.n);
    let i = e[r(485)](this.p)[r(488)](this[r(425)], this.p),
      s = e[r(485)](this.q)[r(488)](this[r(452)], this.q);
    for (; i[r(471)](s) < 0;) i = i[r(431)](this.p);
    return i[r(466)](s)[r(467)](this[r(410)])[r(485)](this.p)[r(467)](this.q)[r(431)](s);
  }
  [Hn(405)](e) {
    let r = _0x2d72;
    if (this.p[r(487)]() === 0 || this.q[r(487)]() === 0) return e[r(488)](this.d, this.n);
    let t = e[r(485)](this.p)[r(488)](this[r(425)], this.p),
      i = e[r(485)](this.q)[r(488)](this[r(452)], this.q);
    for (; t[r(471)](i) < 0;) t = t[r(431)](this.p);
    return t[r(466)](i)[r(467)](this[r(410)])[r(485)](this.p)[r(467)](this.q)[r(431)](i);
  }
  [Hn(413)](e, r, t, i, s, o) {
    let d = _0x2d72,
      c = {
        oGvLs: n(function (b, _) {
          return b + _;
        }, "oGvLs"),
        kXMmU: n(function (b, _, h, p, m) {
          return b(_, h, p, m);
        }, "kXMmU"),
        JOrpS: n(function (b, _) {
          return b - _;
        }, "JOrpS"),
        uAOKQ: n(function (b, _) {
          return b / _;
        }, "uAOKQ"),
      };
    r[d(417)] >= r[d(472)] && (r[d(417)] = 0);
    let f = this[d(407)](),
      l = c[d(490)](r[d(417)], i);
    for (; r[d(417)] < l;) {
      let b = new Ca(c[d(450)](s, r, l, f, o), f, !0),
        _ = e(b);
      for (let h = c[d(475)](f, Math[d(449)](c[d(477)](_[d(489)](), 8))); h > 0; h--) t[d(428)](0);
      _[d(415)](t);
    }
  }
  [Hn(448)](e, r, t, i, s, o) {
    let d = _0x2d72,
      c = {
        DFWFJ: n(function (b, _) {
          return b(_);
        }, "DFWFJ"),
        OQfCf: n(function (b, _) {
          return b == _;
        }, "OQfCf"),
      };
    r[d(417)] >= r[d(472)] && (r[d(417)] = 0);
    let f = this[d(407)](),
      l = r[d(417)] + i;
    for (; r[d(417)] < l;) {
      let b = new Ca(r, f, !0),
        _ = c[d(454)](e, b),
        h = s(_, f, o);
      if (c[d(469)](h, null)) throw new TLSError(d(459), TLSError[d(435)]);
      t[d(476)](h);
    }
  }
  [Hn(494)](e, r, t, i = 2) {
    let s = _0x2d72,
      o = {
        ewrxW: n(function (_, h) {
          return _ + h;
        }, "ewrxW"),
        kWzxV: n(function (_, h) {
          return _ === h;
        }, "kWzxV"),
        YoEMN: n(function (_, h) {
          return _ > h;
        }, "YoEMN"),
      },
      d = new Uint8Array(t),
      c = e[s(481)](),
      f = e[s(417)],
      l = Math[s(440)](r, e[s(472)], o[s(411)](f, t) - 11);
    e[s(417)] = l;
    let b = t;
    for (let _ = l - 1; _ >= f && b > 11; _--) d[--b] = c[_] ?? 0;
    if (((d[--b] = 0), o[s(429)](i, 2))) {
      let _ = new Random();
      for (; b > 2;) {
        let h = 0;
        do h = _[s(482)]();
        while (h === 0);
        d[--b] = h;
      }
      _[s(416)]();
    } else for (; o[s(491)](b, 2);) d[--b] = 255;
    return ((d[--b] = i), (d[--b] = 0), re[s(401)](d));
  }
  [Hn(479)](e, r, t = 2) {
    let i = _0x2d72,
      s = {
        wNklQ: n(function (f, l) {
          return f !== l;
        }, "wNklQ"),
        ibNQG: n(function (f, l) {
          return f >= l;
        }, "ibNQG"),
        ScDqJ: n(function (f, l) {
          return f + l;
        }, "ScDqJ"),
      },
      o = new re();
    e[i(415)](o);
    let d = o[i(481)](),
      c = 0;
    for (; c < d[i(472)] && (d[c] ?? 0) === 0;) c++;
    if (d[i(472)] - c !== r - 1 || (d[c] ?? 0) !== t) return null;
    for (c++; s[i(495)](d[c] ?? 0, 0);) if ((c++, s[i(418)](c, d[i(472)]))) return null;
    return re[i(401)](d[i(421)](s[i(446)](c, 1)));
  }
}

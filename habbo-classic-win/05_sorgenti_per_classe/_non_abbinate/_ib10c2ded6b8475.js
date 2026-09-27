// Estratto da HabboAirLauncher.deobf.js, riga 43306.

class a {
  static {
    n(this, "_ib10c2ded6b8475");
  }
  static _rfcd314fa2e1982 = 9;
  static _r409a04639b549e = 512;
  static _re46870b0573bdc = new Map();
  _rebe61b1b7e8394 = null;
  _r5896a0f378042c = null;
  _r3df055ad2d150a(e) {
    return _i8c823522e53050(e);
  }
  _r0093021364853a(e, r) {
    if (!this._r3df055ad2d150a(r.fontFamily)) return null;
    if (e.length === 0) return 0;
    let t = this._r6432113bc1ace4(r);
    return t == null ? null : this._r60e96eb59c2175(e, r, t).width;
  }
  _r6d7809b8b87286(e, r, t, i, s, o, d) {
    if (!this._r3df055ad2d150a(o.fontFamily) || r.length === 0) return !1;
    let c = this._r6432113bc1ace4(o);
    if (c == null) return (d(), !0);
    let f = Array.from(r),
      l = c.stringToGlyphs(r),
      b = this._r60e96eb59c2175(r, o, c),
      _ = this._r09846495b290df(o),
      h = this._r47041ec26fa6ef(s, _),
      p = a._rfcd314fa2e1982 / Math.max(1, c.unitsPerEm),
      m = Math.round(s.baseline),
      v = o.antiAliasType === "advanced" && _i46fcf5db748a34(o.color);
    for (let w = 0; w < f.length; w++) {
      let I = l[w];
      if (I == null) return (d(), !0);
      let C = this._rbb080b5d7441e2(f[w], I, c, o, h, p, v);
      if (C == null) return (d(), !0);
      (e.save(),
        (e.imageSmoothingEnabled = !1),
        e.drawImage(
          C.surface,
          Math.round(t + b.positions[w] + C._rf11c0f6fe581c6),
          Math.round(i - m + C._r5dac723dc49ec3),
          C._r57c95b0bc3e08e,
          C._r5d2f8c2822ca0b,
        ),
        e.restore());
    }
    return !0;
  }
  _r345ed0ede7b7dd(e, r) {
    return (
      this._rebe61b1b7e8394 == null &&
        ((this._rebe61b1b7e8394 = _i295affcc6e4d03(e, r)),
        (this._r5896a0f378042c = this._rebe61b1b7e8394 != null ? _i5183d3213c4d99(this._rebe61b1b7e8394) : null)),
      this._rebe61b1b7e8394 == null
        ? null
        : ((this._rebe61b1b7e8394.width !== e || this._rebe61b1b7e8394.height !== r) &&
            ((this._rebe61b1b7e8394.width = e), (this._rebe61b1b7e8394.height = r)),
          this._rebe61b1b7e8394)
    );
  }
  _r6432113bc1ace4(e) {
    let r = e.bold ? "700" : "400",
      t = e.italic ? "italic" : "normal",
      i = _i3070d39c0028a5(e.fontFamily, r, t);
    if (i != null) return i;
    if (_i8c823522e53050(e.fontFamily)) {
      if (e.fontFamily.trim().toLowerCase() === "volter bold") return _i3070d39c0028a5("Volter", "700", t);
      if (e.bold) return _i3070d39c0028a5("Volter Bold", "400", t);
    }
    return null;
  }
  _r60e96eb59c2175(e, r, t) {
    let i = t.stringToGlyphs(e),
      s = r.fontSize / Math.max(1, t.unitsPerEm),
      o = [],
      d = 0;
    for (let c = 0; c < i.length; c++)
      (o.push(Math.round(d)),
        (d += (i[c].advanceWidth ?? t.unitsPerEm) * s),
        c + 1 < i.length && (d += r.letterSpacing));
    return { positions: o, width: Math.max(0, Math.round(d)) };
  }
  _r09846495b290df(e) {
    return Math.max(1 / a._rfcd314fa2e1982, e.fontSize / a._rfcd314fa2e1982);
  }
  _r47041ec26fa6ef(e, r) {
    return {
      ascent: e.ascent / r,
      descent: e.descent / r,
      lineGap: e.lineGap / r,
      lineHeight: e.lineHeight / r,
      baseline: e.baseline / r,
    };
  }
  _rfbd107b6d379af(e) {
    let r = Number.POSITIVE_INFINITY,
      t = Number.NEGATIVE_INFINITY;
    for (let i of e) typeof i.x == "number" && ((r = Math.min(r, i.x)), (t = Math.max(t, i.x)));
    return !Number.isFinite(r) || !Number.isFinite(t) ? 0 : Math.max(0, t - r);
  }
  _rbb080b5d7441e2(e, r, t, i, s, o, d) {
    let c = this._r09846495b290df(i),
      f = r.getPath(0, 0, a._rfcd314fa2e1982),
      l = Math.max(1, Math.round((r.advanceWidth ?? t.unitsPerEm) * o)),
      b = Math.max(l, Math.ceil(this._rfbd107b6d379af(f.commands))),
      _ = d ? 2 : 1,
      h = Math.round(s.baseline),
      p = Math.max(1, Math.ceil(s.lineHeight)),
      m = this._r7e04f7ed05dd8b(e, i, b, p, h, _, d),
      v = a._re46870b0573bdc.get(m);
    if (v != null) return (a._re46870b0573bdc.delete(m), a._re46870b0573bdc.set(m, v), v);
    let w = Math.max(1, b + _ * 2),
      I = Math.max(1, p + _ * 2),
      C = this._r345ed0ede7b7dd(w, I),
      W = this._r5896a0f378042c;
    if (C == null || W == null) return null;
    (W.clearRect(0, 0, w, I), (W.imageSmoothingEnabled = !1));
    let R = W.createImageData(w, I);
    (this._r3af505b8794280(R, f.commands, _, h + _),
      _iad85c8f38616ab(R, i.color, {
        threshold: i.bold ? 88 : 104,
        _r74a459bfd5925f: Math.round(0.3 * 255),
        _r50b677bcf888cc: d,
      }));
    let T = _i295affcc6e4d03(w, I),
      S = _i5183d3213c4d99(T);
    if (T == null || S == null) return null;
    S.putImageData(R, 0, 0);
    let z = {
      surface: T,
      _rf11c0f6fe581c6: -(_ * c),
      _r5dac723dc49ec3: -(_ * c),
      _r57c95b0bc3e08e: Math.max(1, Math.round(w * c)),
      _r5d2f8c2822ca0b: Math.max(1, Math.round(I * c)),
    };
    return (a._re46870b0573bdc.set(m, z), this._r555b0869c4b0c4(), z);
  }
  _r7e04f7ed05dd8b(e, r, t, i, s, o, d) {
    return [
      _i41812407901039(r.fontFamily),
      r.bold ? "700" : "400",
      r.italic ? "italic" : "normal",
      Math.round(r.fontSize),
      r.color >>> 0,
      d ? "halo" : "solid",
      t,
      i,
      s,
      o,
      e,
    ].join("|");
  }
  _r555b0869c4b0c4() {
    for (; a._re46870b0573bdc.size > a._r409a04639b549e;) {
      let e = a._re46870b0573bdc.keys().next().value;
      if (typeof e != "string") break;
      a._re46870b0573bdc.delete(e);
    }
  }
  _r3af505b8794280(e, r, t, i) {
    let s = this._rbe1f5245e3ae33(r);
    if (s.length === 0) return;
    let o = e.data,
      d = e.width,
      c = e.height;
    for (let f = 0; f < c; f++)
      for (let l = 0; l < d; l++) {
        let b = l + 0.5 - t,
          _ = f + 0.5 - i;
        this._rccdcddb3fda478(b, _, s) && (o[(f * d + l) * 4 + 3] = 255);
      }
  }
  _rbe1f5245e3ae33(e) {
    let r = [],
      t = [],
      i = n(() => {
        t.length > 0 && (r.push(t), (t = []));
      }, "_if198851fa0ac64");
    for (let s of e) {
      if (s.type === "M") {
        (i(), t.push({ x: s.x ?? 0, y: s.y ?? 0 }));
        continue;
      }
      if (s.type === "L") {
        t.push({ x: s.x ?? 0, y: s.y ?? 0 });
        continue;
      }
      s.type === "Z" && i();
    }
    return (i(), r);
  }
  _rccdcddb3fda478(e, r, t) {
    let i = !1;
    for (let s of t) this._r33744ec2d6a079(e, r, s) && (i = !i);
    return i;
  }
  _r33744ec2d6a079(e, r, t) {
    let i = !1;
    for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
      let d = t[s],
        c = t[o];
      d.y > r != c.y > r && e < ((c.x - d.x) * (r - d.y)) / (c.y - d.y || Number.EPSILON) + d.x && (i = !i);
    }
    return i;
  }
}

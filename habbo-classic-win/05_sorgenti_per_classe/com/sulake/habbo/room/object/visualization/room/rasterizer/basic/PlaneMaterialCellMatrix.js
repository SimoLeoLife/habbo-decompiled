// Extracted from HabboAirLauncher.deobf.js, line 282774.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneMaterialCellMatrix.as
// Obfuscated name: _i8599bf34b0dac1

class a {
  constructor(
    e,
    r = a._r280fc10c7b3c8d,
    t = a._r3a2eda2df73619,
    i = a.const_29,
    s = a.MAX_NORMAL_COORDINATE_VALUE,
    o = a.const_29,
    d = a.MAX_NORMAL_COORDINATE_VALUE,
  ) {
    this.normalMinX = i;
    this.normalMaxX = s;
    this.normalMinY = o;
    this.normalMaxY = d;
    let c = Math.max(1, e);
    for (let f = 0; f < c; f++) this.var_518.push(null);
    ((this._repeatMode = r),
      (this._r357e80ba8d2865 = t),
      this._repeatMode === a.REPEAT_MODE_RANDOM && (this.var_3868 = !1));
  }
  static {
    n(this, "PlaneMaterialCellMatrix");
  }
  static _r3dcecf28a5e014 = 1;
  static REPEAT_MODE_BORDERS = 2;
  static REPEAT_MODE_CENTER = 3;
  static REPEAT_MODE_FIRST = 4;
  static REPEAT_MODE_LAST = 5;
  static REPEAT_MODE_RANDOM = 6;
  static _r280fc10c7b3c8d = a._r3dcecf28a5e014;
  static const_29 = -1;
  static MAX_NORMAL_COORDINATE_VALUE = 1;
  static ALIGN_TOP = 1;
  static ALIGN_BOTTOM = 2;
  static _r3a2eda2df73619 = a.ALIGN_TOP;
  var_518 = [];
  _repeatMode;
  _r357e80ba8d2865;
  _r614d24e9a9a354 = null;
  _r7e109503f924e7 = null;
  _r990e009dabc119 = 0;
  var_3157 = !1;
  var_3868 = !0;
  _red7f497c20e158 = -1;
  static _r56b93377d5d862(e) {
    return e != null && e.source == null;
  }
  isBottomAligned() {
    return this._r357e80ba8d2865 === a.ALIGN_BOTTOM;
  }
  get isStatic() {
    return this.var_3868;
  }
  dispose() {
    (this._r614d24e9a9a354?.destroy(!0), (this._r614d24e9a9a354 = null), (this._r7e109503f924e7 = null));
  }
  clearCache() {
    if (this.var_3157) {
      (this._r614d24e9a9a354?.destroy(!0),
        (this._r614d24e9a9a354 = null),
        this._r7e109503f924e7 != null &&
          ((this._r7e109503f924e7.x = 0), (this._r7e109503f924e7.y = 0), (this._r7e109503f924e7.z = 0)),
        (this._r990e009dabc119 = 0));
      for (let e of this.var_518) e?.clearCache();
      this.var_3157 = !1;
    }
  }
  _r6b958bac2f6f2f(e, r, t, i = _b._r3dcecf28a5e014) {
    if (e < 0 || e >= this.var_518.length) return !1;
    let s = new _b(r, t, i);
    return (
      this.var_518[e]?.dispose(),
      (this.var_518[e] = s),
      s.isStatic || (this.var_3868 = !1),
      !0
    );
  }
  render(e, r, t, i, s, o, d, c) {
    ((r = Math.max(1, r)), (t = Math.max(1, t)));
    let f = _i7e30f454680fff();
    if (
      (f !== this._red7f497c20e158 && (this.clearCache(), (this._red7f497c20e158 = f)),
      this._r7e109503f924e7 == null && (this._r7e109503f924e7 = new k()),
      this.isStatic)
    ) {
      if (this._r614d24e9a9a354 != null) {
        if (
          !a._r56b93377d5d862(this._r614d24e9a9a354) &&
          this._r614d24e9a9a354.width === r &&
          this._r614d24e9a9a354.height === t &&
          k.isEqual(this._r7e109503f924e7, i)
        )
          return this._r614d24e9a9a354;
        (this._r614d24e9a9a354.destroy(!0), (this._r614d24e9a9a354 = null));
      }
    } else if (this._r614d24e9a9a354 != null)
      if (
        !a._r56b93377d5d862(this._r614d24e9a9a354) &&
        this._r614d24e9a9a354.width === r &&
        this._r614d24e9a9a354.height === t
      ) {
        if (!_iec32b400ef4cda(this._r614d24e9a9a354)) return null;
      } else (this._r614d24e9a9a354.destroy(!0), (this._r614d24e9a9a354 = null));
    if (((this.var_3157 = !0), this._r7e109503f924e7.assign(i), this._r614d24e9a9a354 == null))
      ((this._r990e009dabc119 = t), (this._r614d24e9a9a354 = _ie26e140b784b4c(r, t)));
    else if (!_iec32b400ef4cda(this._r614d24e9a9a354)) return null;
    if (!s)
      return (
        (this._r990e009dabc119 = t),
        _ib4e6c41bf9a436(this._r614d24e9a9a354, 16777215, 1) ? this._r614d24e9a9a354 : null
      );
    let l = [];
    for (let _ of this.var_518) {
      let h = _?.renderTexture(t, i, o, d) ?? null;
      h != null && l.push(h);
    }
    if (l.length === 0) return this._r614d24e9a9a354;
    let b = 0;
    switch (this._repeatMode) {
      case a.REPEAT_MODE_BORDERS:
        b = this._r608ac490aab382(this._r614d24e9a9a354, l);
        break;
      case a.REPEAT_MODE_CENTER:
        b = this._ra78db7804804b2(this._r614d24e9a9a354, l);
        break;
      case a.REPEAT_MODE_FIRST:
        b = this._re08efee0c82cc8(this._r614d24e9a9a354, l);
        break;
      case a.REPEAT_MODE_LAST:
        b = this._r28a35d0ff3cb18(this._r614d24e9a9a354, l);
        break;
      case a.REPEAT_MODE_RANDOM:
        b = this._r000dcafe1d4c5d(this._r614d24e9a9a354, l);
        break;
      default:
        b = this.renderRepeatAll(this._r614d24e9a9a354, l);
        break;
    }
    return ((this._r990e009dabc119 = b), this._r614d24e9a9a354);
  }
  getColumns(e) {
    if (this._repeatMode !== a.REPEAT_MODE_RANDOM) return this.var_518;
    let r = [],
      t = 0;
    for (; t < e;) {
      let i = this.var_518[a._r7b734334cd6532(this.var_518.length)] ?? null;
      if (i == null) break;
      if ((r.push(i), i.width > 1)) t += i.width;
      else break;
    }
    return r;
  }
  _rc5c449cebe198a(e) {
    let r = 0;
    for (let t of e) r += t.width;
    return r;
  }
  _r6e85daee6ba937(e, r, t, i) {
    let s = 0;
    for (let o = 0; o < r.length; o++) {
      let d = i ? r[o] : r[r.length - 1 - o];
      if (d == null) continue;
      i || (t -= d.width);
      let c = this._r357e80ba8d2865 === a.ALIGN_BOTTOM ? e.height - d.height : 0;
      if (!_i7581156f9118b5(e, d, t, c)) return { x: t, y: s };
      (i && (t += d.width), d.height > s && (s = d.height));
    }
    return { x: t, y: s };
  }
  renderRepeatAll(e, r) {
    let t = 0,
      i = 0;
    for (; t < e.width;) {
      let s = this._r6e85daee6ba937(e, r, t, !0);
      if (s.x === t) break;
      ((t = s.x), (i = Math.max(i, s.y)));
    }
    return i;
  }
  _r608ac490aab382(e, r) {
    if (r.length === 0) return 0;
    let t = r[0],
      i = r[r.length - 1],
      s = r.length > 2 ? r.slice(1, r.length - 1) : [],
      o = 0,
      d = 0;
    if (s.length > 0) {
      let c = this._rc5c449cebe198a(s),
        f = Math.max(0, Math.floor((e.width - c) / 2)),
        l = this._r6e85daee6ba937(e, s, f, !0);
      ((o = f + c), (d = Math.max(d, l.y)));
      let b = f;
      for (; b > 0 && t != null;) {
        b -= t.width;
        let _ = this._r6e85daee6ba937(e, [t], b, !0);
        d = Math.max(d, _.y);
      }
      for (; o < e.width && i != null;) {
        let _ = this._r6e85daee6ba937(e, [i], o, !0);
        if (_.x === o) break;
        ((o = _.x), (d = Math.max(d, _.y)));
      }
      return d;
    }
    return this.renderRepeatAll(e, r);
  }
  _ra78db7804804b2(e, r) {
    if (r.length === 0) return 0;
    let t = Math.floor(r.length / 2),
      i = r.slice(0, t),
      s = r.slice(r.length % 2 === 0 ? t : t + 1),
      o = r.length % 2 === 1 ? [r[t]] : [],
      d = this._rc5c449cebe198a(i),
      c = this._rc5c449cebe198a(s),
      f = this._rc5c449cebe198a(o),
      l = e.width - d - c,
      b = d + Math.max(0, Math.floor((l - f) / 2)),
      _ = 0;
    if (i.length > 0) {
      let h = this._r6e85daee6ba937(e, i, 0, !0);
      _ = Math.max(_, h.y);
    }
    if (o.length > 0) {
      let h = b;
      for (; h < b + l;) {
        let p = this._r6e85daee6ba937(e, o, h, !0);
        if (p.x === h) break;
        ((h = p.x), (_ = Math.max(_, p.y)));
      }
    }
    if (s.length > 0) {
      let h = this._r6e85daee6ba937(e, s, e.width, !1);
      _ = Math.max(_, h.y);
    }
    return _;
  }
  _re08efee0c82cc8(e, r) {
    if (r.length === 0) return 0;
    let t = 0,
      i = this._r6e85daee6ba937(e, r, t, !0),
      s = i.y;
    t = i.x;
    let o = r[0];
    for (; o != null && t < e.width;) {
      let d = this._r6e85daee6ba937(e, [o], t, !0);
      if (d.x === t) break;
      ((t = d.x), (s = Math.max(s, d.y)));
    }
    return s;
  }
  _r28a35d0ff3cb18(e, r) {
    if (r.length === 0) return 0;
    let t = e.width,
      i = this._r6e85daee6ba937(e, r, t, !1),
      s = i.y;
    t = i.x;
    let o = r[r.length - 1];
    for (; o != null && t > 0;) {
      let d = this._r6e85daee6ba937(e, [o], t, !1);
      if (d.x === t) break;
      ((t = d.x), (s = Math.max(s, d.y)));
    }
    return s;
  }
  _r000dcafe1d4c5d(e, r) {
    let t = 0,
      i = 0;
    for (; t < e.width;) {
      let s = r[a._r7b734334cd6532(r.length)] ?? null;
      if (s == null) break;
      let o = this._r6e85daee6ba937(e, [s], t, !0);
      if (o.x === t) break;
      ((t = o.x), (i = Math.max(i, o.y)));
    }
    return i;
  }
  static _r7b734334cd6532(e) {
    return ih.getValues(1, 0, e * 17631)[0] % e;
  }
}

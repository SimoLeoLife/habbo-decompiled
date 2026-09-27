// Estratto da HabboAirLauncher.deobf.js, riga 279892.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/ShoreMaskCreatorUtility.as
// Nome offuscato: _i32a211069af09a

class a {
  static {
    n(this, "ShoreMaskCreatorUtility");
  }
  static _r192b5ec3166fb9 = 0;
  static STRAIGHT_CUT = 1;
  static INNER_CUT = 2;
  static CUT_TYPE_COUNT = 3;
  static _r63af02e55b961a = 0;
  static MASK_COLOR_SOLID = 4294967295;
  static _r345ccb704456cf(e, r) {
    return new A(e, r, !0, a._r63af02e55b961a);
  }
  static getInstanceMaskName(e, r) {
    return `instance_mask_${e}_${r}`;
  }
  static getFlipHBitmapData(e, r) {
    return e + r * a.CUT_TYPE_COUNT;
  }
  static _r8519ead813908b(e, r, t, i) {
    if (t == null) return null;
    let s = a.getInstanceMaskName(e, r),
      o = t.getAsset(s);
    if (o == null) {
      let d = i?.width ?? 0,
        c = i?.height ?? 0;
      d > 0 &&
        c > 0 &&
        (t.addAsset(s, new A(d, c, !0, a._r63af02e55b961a), !1, i?.offsetX ?? 0, i?.offsetY ?? 0),
        (o = t.getAsset(s)));
    }
    return o;
  }
  static _createdInstanceMaskSizes(e, r, t) {
    t?._rc7a583ce343c02(a.getInstanceMaskName(e, r));
  }
  static createShoreMask2x2(e, r, t, i, s) {
    if ((e.fillRect(e.rect, a._r63af02e55b961a), s == null)) return e;
    for (let o = 0; o < t.length; o++) {
      if (!t[o]) continue;
      let c = s.getAsset(`mask_${r}_${o}_${i[o]}`)?.asset?.content;
      c != null && e.copyPixels(c, c.rect, new E(0, 0), c, new E(0, 0), !0);
    }
    return e;
  }
  static initializeShoreMasks(e, r, t) {
    if (r == null) return !1;
    let i = `masks_done_${e}`;
    if (r.getAsset(i) != null) return !0;
    let s = t?.width ?? 0,
      o = t?.height ?? 0;
    if (s <= 0 || o <= 0) return !1;
    let d = [
        a._r192b5ec3166fb9,
        a.STRAIGHT_CUT,
        a.INNER_CUT,
        a._r192b5ec3166fb9,
        a.STRAIGHT_CUT,
        a.INNER_CUT,
      ],
      c = [
        a.STRAIGHT_CUT,
        a.STRAIGHT_CUT,
        a.STRAIGHT_CUT,
        a.INNER_CUT,
        a.INNER_CUT,
        a.INNER_CUT,
      ];
    for (let f = 0; f < d.length && f < c.length; f++) {
      let l = a._re6d1c9ab5c9c93(s, o);
      (a._r5b988ebe8c6dbd(l, e, d[f], c[f]), a.storeLeftMask(r, l, e, d[f], c[f]));
      let b = a._rf554b8440f38b0(s, o);
      (a._r509be2d477cd94(b, e, c[f], d[f]), a.storeRightMask(r, b, e, c[f], d[f]));
    }
    return (r.addAsset(i, new A(1, 1, !0, 0), !1), !0);
  }
  static _re6d1c9ab5c9c93(e, r) {
    let t = new A(e, r, !0, a._r63af02e55b961a);
    return (a.fillTopLeftCorner(t, t.width / 2, t.height / 2 - 1, 1, a.MASK_COLOR_SOLID), t);
  }
  static _r5b988ebe8c6dbd(e, r, t, i) {
    (t === a.STRAIGHT_CUT
      ? a._r0732be6582c32a(e, r, !1)
      : t === a.INNER_CUT && a._r0732be6582c32a(e, r, !0),
      i === a.INNER_CUT && a._r9a3519b03522f4(e, r));
  }
  static _r0732be6582c32a(e, r, t) {
    let i = e.height / 2 - r / 2,
      s = e.width / 2;
    t
      ? e.fillRect(new D(s, 0, e.width, i), a._r63af02e55b961a)
      : a.fillTopLeftCorner(e, s, i - 1, 1, a._r63af02e55b961a);
  }
  static _r9a3519b03522f4(e, r) {
    let t = e.width / 2 + r / 2;
    e.fillRect(new D(t, 0, e.width, e.height / 2), a._r63af02e55b961a);
  }
  static _rf554b8440f38b0(e, r) {
    let t = new A(e, r, !0, a._r63af02e55b961a);
    return (a._r94ed956c512e56(t, t.width / 2 + 1, t.height / 2 - 1, a.MASK_COLOR_SOLID), t);
  }
  static _r509be2d477cd94(e, r, t, i) {
    (i === a.STRAIGHT_CUT
      ? a._r55197edf3e83cd(e, r, !1)
      : i === a.INNER_CUT && a._r55197edf3e83cd(e, r, !0),
      t === a.INNER_CUT && a._r81faba60c9a806(e, r));
  }
  static _r81faba60c9a806(e, r) {
    let t = e.width / 2 + r / 2;
    e.fillRect(new D(t, 0, e.width, e.height / 2 - r / 4), a._r63af02e55b961a);
  }
  static _r55197edf3e83cd(e, r, t) {
    let i = e.height / 2,
      s = e.width / 2 + r;
    t
      ? e.fillRect(new D(s, 0, e.width, i), a._r63af02e55b961a)
      : a._r94ed956c512e56(e, s + 1, i - 1, a._r63af02e55b961a);
  }
  static storeLeftMask(e, r, t, i, s) {
    e.addAsset(`mask_${t}_0_${a.getFlipHBitmapData(i, s)}`, r, !1);
    let o = class_4281._ra894809c12a2d6(r),
      d = class_4281._r6d890092fda3ff(r),
      c = class_4281._r4dc9bc55df3b49(r);
    (o != null && e.addAsset(`mask_${t}_3_${a.getFlipHBitmapData(s, i)}`, o, !1),
      d != null && e.addAsset(`mask_${t}_4_${a.getFlipHBitmapData(i, s)}`, d, !1),
      c != null && e.addAsset(`mask_${t}_7_${a.getFlipHBitmapData(s, i)}`, c, !1));
  }
  static storeRightMask(e, r, t, i, s) {
    e.addAsset(`mask_${t}_1_${a.getFlipHBitmapData(i, s)}`, r, !1);
    let o = class_4281._ra894809c12a2d6(r),
      d = class_4281._r6d890092fda3ff(r),
      c = class_4281._r4dc9bc55df3b49(r);
    (o != null && e.addAsset(`mask_${t}_2_${a.getFlipHBitmapData(s, i)}`, o, !1),
      d != null && e.addAsset(`mask_${t}_5_${a.getFlipHBitmapData(i, s)}`, d, !1),
      c != null && e.addAsset(`mask_${t}_6_${a.getFlipHBitmapData(s, i)}`, c, !1));
  }
  static fillTopLeftCorner(e, r, t, i, s) {
    let o = r,
      d = t,
      c = i;
    for (; d >= 0;) {
      for (let f = d; f >= 0; f--) e.setPixel32(o, f, s);
      (c++, c >= 2 && (d--, (c = 0)), o++);
    }
  }
  static _r94ed956c512e56(e, r, t, i) {
    let s = r,
      o = t;
    for (; s < e.width;) {
      for (let d = s; d < e.width; d++) e.setPixel32(d, o, i);
      (o--, (s += 2));
    }
  }
}

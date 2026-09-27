// Estratto da HabboAirLauncher.deobf.js, riga 280046.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureWaterAreaVisualization.as
// Nome offuscato: _ib7e16c22bce345

class a extends Pa {
  static {
    n(this, "FurnitureWaterAreaVisualization");
  }
  static SHORE_SPRITE_TAG = "shore";
  _r7c36b12e7eb661 = !0;
  _rc3403d22360256 = [];
  _r6bfc5755e7ad79 = [];
  _r05296d6264f2e9 = [];
  _r5cc4d15abe528b = !1;
  _r8e1740c5360bf6 = 0;
  _r31b35e71aeb155 = 0;
  _r6e7e10b05c7a73 = 0;
  _re183facaa34ad3 = -1;
  _rb127e7957b5bae = -1;
  _r304cba42e2cc92 = null;
  dispose() {
    let e = this.assetCollection,
      r = this.object;
    if (e != null && r != null) {
      for (let t of this._r05296d6264f2e9) li._createdInstanceMaskSizes(r.getInstanceId(), t, e);
      this._r05296d6264f2e9 = [];
    }
    (this._r304cba42e2cc92?.dispose(), (this._r304cba42e2cc92 = null), super.dispose());
  }
  updateObject(e, r) {
    return super.updateObject(e, r) ? ((this._r5cc4d15abe528b = !0), this._r4c47d58711fb26(), !0) : !1;
  }
  _rccf505c78518d1(e) {
    let r = super._rccf505c78518d1(e);
    if (this._r59bd645b734306(e)) {
      let t = this._r6cca58b5c64d1b(e);
      t >= 0 && (r |= 1 << t);
    }
    return r;
  }
  getSpriteAssetName(e, r) {
    if (e === 1 || r !== this._r6cca58b5c64d1b(e)) return super.getSpriteAssetName(e, r);
    if (!this._r7c36b12e7eb661) return "";
    let t = this.object;
    return t != null ? li.getInstanceMaskName(t.getInstanceId(), this.getSize(e)) : "";
  }
  setAnimation(e) {
    super.setAnimation(0);
  }
  _r6cca58b5c64d1b(e) {
    if (this._re183facaa34ad3 === e && this._rb127e7957b5bae === this.direction) return this._r6e7e10b05c7a73;
    for (let r = this._r07cfc8b3f013c3 - 1; r >= 0; r--)
      if (this.getSpriteTag(e, this.direction, r) === a.SHORE_SPRITE_TAG)
        return (
          (this._r6e7e10b05c7a73 = r),
          (this._re183facaa34ad3 = e),
          (this._rb127e7957b5bae = this.direction),
          this._r6e7e10b05c7a73
        );
    return -1;
  }
  _r7bb2e7a35a1d6f(e) {
    let r = this._r6cca58b5c64d1b(e);
    if (r < 0) return null;
    let t = super.getSpriteAssetName(e, r);
    return t.length > 0 ? (this.assetCollection?.getAsset(t) ?? null) : null;
  }
  _r22b237d2c45910(e) {
    return this._r6a6cb6ef8d3da0(e, "a");
  }
  _r0d6712f8c6f2f7(e) {
    return this._r6a6cb6ef8d3da0(e, "b");
  }
  _r6a6cb6ef8d3da0(e, r) {
    let t = this._r6cca58b5c64d1b(e);
    if (t < 0) return null;
    let i = super.getSpriteAssetName(e, t);
    if (i.length === 0) return null;
    let s = i.split("_");
    return s.length < 3
      ? null
      : ((s[s.length - 3] = r), this.assetCollection?.getAsset(s.join("_")) ?? null);
  }
  _r8519ead813908b(e) {
    let r = this.object,
      t = this.assetCollection;
    if (r == null || t == null) return null;
    let i = this.getSize(e),
      s = li._r8519ead813908b(r.getInstanceId(), i, t, this._r7bb2e7a35a1d6f(e));
    return (s != null && !this._r05296d6264f2e9.includes(i) && this._r05296d6264f2e9.push(i), s);
  }
  _ra9b3d2c1911014() {
    let e = this.object?.getState(0) ?? 0;
    return e >= 0 ? Math.trunc(e) : 0;
  }
  _r4c47d58711fb26() {
    if ((this._r01130cdb9e63f7(), this.object == null)) return;
    let r = this._ra9b3d2c1911014(),
      t = this._r6a82558e999e2a(),
      i = this._r8e1740c5360bf6 + 2,
      s = this._r31b35e71aeb155 + 2,
      o = t[s - 1];
    for (let c = i - 1; c >= 0; c--) ((r & 1) !== 0 && (o[c] = !0), (r >>= 1));
    for (let c = s - 2; c >= 1; c--)
      ((o = t[c]), (r & 1) !== 0 && (o[i - 1] = !0), (r >>= 1), (r & 1) !== 0 && (o[0] = !0), (r >>= 1));
    o = t[0];
    for (let c = i - 1; c >= 0; c--) ((r & 1) !== 0 && (o[c] = !0), (r >>= 1));
    let d = 0;
    ((d = this._r7a5878ee9c0f74(t, d)),
      (d = this._r5208afa55d3031(t, d)),
      (d = this._r61efdf050a3378(t, d)),
      this._ree195b52777f78(t, d),
      (this._r7c36b12e7eb661 = this._rc3403d22360256.some((c) => c)));
  }
  _r7a5878ee9c0f74(e, r) {
    let t = this._r8e1740c5360bf6 + 2,
      i = e[0],
      s = e[1];
    for (let o = 1; o < t - 1; o++) {
      if (!i[o]) {
        this._rc3403d22360256[r] = !0;
        let d =
            !s[o - 1] && !i[o - 1]
              ? li._r192b5ec3166fb9
              : i[o - 1]
                ? li.INNER_CUT
                : li.STRAIGHT_CUT,
          c =
            !s[o + 1] && !i[o + 1]
              ? li._r192b5ec3166fb9
              : i[o + 1]
                ? li.INNER_CUT
                : li.STRAIGHT_CUT;
        this._r6bfc5755e7ad79[r] = li.getFlipHBitmapData(d, c);
      }
      r++;
    }
    return r;
  }
  _r5208afa55d3031(e, r) {
    let t = this._r8e1740c5360bf6 + 2,
      i = this._r31b35e71aeb155 + 2;
    for (let s = 1; s < i - 1; s++) {
      let o = e[s],
        d = e[s - 1],
        c = e[s + 1];
      if (!o[t - 1]) {
        this._rc3403d22360256[r] = !0;
        let f =
            !d[t - 2] && !d[t - 1]
              ? li._r192b5ec3166fb9
              : d[t - 1]
                ? li.INNER_CUT
                : li.STRAIGHT_CUT,
          l =
            !c[t - 2] && !c[t - 1]
              ? li._r192b5ec3166fb9
              : c[t - 1]
                ? li.INNER_CUT
                : li.STRAIGHT_CUT;
        this._r6bfc5755e7ad79[r] = li.getFlipHBitmapData(f, l);
      }
      r++;
    }
    return r;
  }
  _r61efdf050a3378(e, r) {
    let t = this._r8e1740c5360bf6 + 2,
      i = this._r31b35e71aeb155 + 2,
      s = e[i - 1],
      o = e[i - 2];
    for (let d = t - 2; d >= 1; d--) {
      if (!s[d]) {
        this._rc3403d22360256[r] = !0;
        let c =
            !o[d + 1] && !s[d + 1]
              ? li._r192b5ec3166fb9
              : s[d + 1]
                ? li.INNER_CUT
                : li.STRAIGHT_CUT,
          f =
            !o[d - 1] && !s[d - 1]
              ? li._r192b5ec3166fb9
              : s[d - 1]
                ? li.INNER_CUT
                : li.STRAIGHT_CUT;
        this._r6bfc5755e7ad79[r] = li.getFlipHBitmapData(c, f);
      }
      r++;
    }
    return r;
  }
  _ree195b52777f78(e, r) {
    let t = this._r31b35e71aeb155 + 2;
    for (let i = t - 2; i >= 1; i--) {
      let s = e[i],
        o = e[i + 1],
        d = e[i - 1];
      if (!s[0]) {
        this._rc3403d22360256[r] = !0;
        let c = !o[1] && !o[0] ? li._r192b5ec3166fb9 : o[0] ? li.INNER_CUT : li.STRAIGHT_CUT,
          f = !d[1] && !d[0] ? li._r192b5ec3166fb9 : d[0] ? li.INNER_CUT : li.STRAIGHT_CUT;
        this._r6bfc5755e7ad79[r] = li.getFlipHBitmapData(c, f);
      }
      r++;
    }
    return r;
  }
  _r01130cdb9e63f7() {
    if (this._r8e1740c5360bf6 === 0 || this._r31b35e71aeb155 === 0) {
      let e = this.object?.getStringToStringMap();
      if (e == null) return;
      ((this._r8e1740c5360bf6 = e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693)),
        (this._r31b35e71aeb155 = e._ra3dc9a405b5c73(RoomObjectVariableEnum.const_230)));
    }
    ((this._rc3403d22360256 = []), (this._r6bfc5755e7ad79 = []));
    for (let e = 0; e < this._r8e1740c5360bf6 * 2 + this._r31b35e71aeb155 * 2; e++)
      (this._rc3403d22360256.push(!1), this._r6bfc5755e7ad79.push(li.STRAIGHT_CUT));
  }
  _r6a82558e999e2a() {
    let e = this._r8e1740c5360bf6 + 2,
      r = this._r31b35e71aeb155 + 2,
      t = [];
    for (let i = 0; i < r; i++) {
      let s = [];
      for (let o = e - 1; o >= 0; o--) s.push(!1);
      t.push(s);
    }
    for (let i = 1; i < r - 1; i++) {
      let s = t[i];
      for (let o = 1; o < e - 1; o++) s[o] = !0;
    }
    return t;
  }
  initializeShoreMasks(e) {
    return li.initializeShoreMasks(this.getSize(e), this.assetCollection, this._r7bb2e7a35a1d6f(e));
  }
  createShoreMask(e, r, t) {
    return (
      (this._r304cba42e2cc92 == null ||
        this._r304cba42e2cc92.width < e ||
        this._r304cba42e2cc92.height < r) &&
        (this._r304cba42e2cc92?.dispose(), (this._r304cba42e2cc92 = li._r345ccb704456cf(e, r))),
      li.createShoreMask2x2(
        this._r304cba42e2cc92,
        this.getSize(t),
        this._rc3403d22360256,
        this._r6bfc5755e7ad79,
        this.assetCollection,
      )
    );
  }
  _r89edfb12787549(e, r) {
    let t = e.clone();
    for (let i = 0; i < t.height; i++)
      for (let s = 0; s < t.width; s++) {
        let o = t.getPixel32(s, i) >>> 0,
          d = (o >>> 24) & 255,
          c = (r.getPixel32(s, i) >>> 24) & 255,
          f = Math.trunc((d * c) / 255);
        t.setPixel32(s, i, ((f << 24) | (o & 16777215)) >>> 0);
      }
    return t;
  }
  _r34004c091f9303(e, r) {
    let t = e.clone();
    for (let i = 0; i < t.height; i++)
      for (let s = 0; s < t.width; s++) {
        let o = t.getPixel32(s, i) >>> 0,
          d = (r.getPixel32(s, i) >>> 24) & 255;
        t.setPixel32(s, i, ((d << 24) | (o & 16777215)) >>> 0);
      }
    return t;
  }
  _raec4b7b0b827f8(e, r, t, i) {
    let s = new A(e.width, e.height, !0, 0),
      d = this._r0d6712f8c6f2f7(r)?.asset?.content,
      c = this._r22b237d2c45910(r),
      f = c?.asset?.content;
    if (
      (d != null && d.width > 0 && d.height > 0 && s.fillRect(s.rect, d.getPixel32(0, 0)), f != null)
    ) {
      let l = new E(Math.trunc((c?.offsetX ?? 0) - t.offsetX), Math.trunc((c?.offsetY ?? 0) - t.offsetY));
      s.copyPixels(f, f.rect, l, null, null, !0);
    }
    return (s.copyPixels(i, i.rect, new E(0, 0), null, null, !0), s);
  }
  _r6cbfd1f14138a4(e) {
    let r = new A(e.width, e.height, !0, 0);
    for (let t = 0; t < e.height; t++)
      for (let i = 0; i < e.width; i++)
        ((e.getPixel32(i, t) >>> 24) & 255) > 0 && r.setPixel32(i, t, 4294967295);
    return r;
  }
  _r59bd645b734306(e) {
    if (!this._r5cc4d15abe528b) return !1;
    let r = this._r8519ead813908b(e);
    if (r?.asset == null || !this.initializeShoreMasks(e)) return !1;
    let t = r.asset;
    if (!(t instanceof Qt)) return !1;
    let i = r.width,
      s = r.height;
    if (i <= 0 || s <= 0) return !1;
    let o = this.createShoreMask(i, s, e),
      d = this._r7bb2e7a35a1d6f(e),
      c = d?.asset?.content;
    if (d == null || c == null) return !1;
    let f = this._raec4b7b0b827f8(o, e, d, c),
      l = this._r34004c091f9303(f, o),
      b = this._r6cbfd1f14138a4(l),
      _ = this._r89edfb12787549(c, o),
      h = this._r89edfb12787549(_, b);
    return (
      f.dispose(),
      l.dispose(),
      b.dispose(),
      _.dispose(),
      t.setUnknownContent(h),
      (this._r5cc4d15abe528b = !1),
      !0
    );
  }
}

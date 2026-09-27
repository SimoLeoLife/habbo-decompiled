// Estratto da HabboAirLauncher.deobf.js, riga 278703.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_1820.as
// Nome offuscato: _i551491f2661da2

class a extends VQ {
  static {
    n(this, "class_1820");
  }
  static _r6582b116475021 = [new _ibaf84c0aa91c5d(16777215, 1, 2, 2, 10, 1, !1, !1)];
  static FLOATING_ICON_TAG_PREFIX = "floating_icon_";
  static const_299 = 4;
  static FLOATING_PIXELS = 2;
  static const_782 = 1200;
  static _rf3db53031dfaa0 = !1;
  static _rc34d44873019a6 = [
    [],
    [[0, -68, 17, 17]],
    [
      [16, -70, 4, 4],
      [-14, -59, 4, 4],
    ],
    [
      [12, -52, 2, 2],
      [-17, -70, 3, 2],
      [17, -87, 7, 2],
    ],
    [
      [14, -50, 2, 2],
      [-14, -59, 2, 2],
      [19, -78, 4, 2],
      [-20, -90, 4, 2],
    ],
  ];
  var_1279 = null;
  _rc22c559b37bb49 = "";
  _r66f1a747c533a7 = [];
  _r49698dad7a1693 = !1;
  _rc3cc264a9bbca4 = [];
  var_1400 = 0;
  _rcc4708eef0dffe = -1;
  updateModel(e) {
    let r = super.updateModel(e),
      t = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.FURNITURE_FURNI_CHEST_SHOWN_ASSET_NAMES) ?? "";
    return (
      (e !== 64 || t == null) && (t = ""),
      this._rc22c559b37bb49 !== t &&
        ((this._rc22c559b37bb49 = t),
        (this._r66f1a747c533a7 = this._rc22c559b37bb49.length === 0 ? [] : this._rc22c559b37bb49.split(",")),
        this._r703a52f846690e(),
        (r = !0)),
      r
    );
  }
  updateObject(e, r) {
    let t = super.updateObject(e, r),
      i = this._rd5b25ad4c3f288 - this._rcc4708eef0dffe,
      s = a.const_782 / (a.FLOATING_PIXELS * 2);
    return (
      i > s &&
        ((t = !0),
        (this._rcc4708eef0dffe = this._rd5b25ad4c3f288),
        this.var_1400++,
        this.var_1400 >= a.FLOATING_PIXELS * 2 && (this.var_1400 = 0)),
      t
    );
  }
  _ra258350da86294(e) {
    return super._ra258350da86294(e) + a.const_299;
  }
  getSpriteAssetName(e, r) {
    if (!this._r2b4080df4ef502(r) || e !== 64) return super.getSpriteAssetName(e, r);
    let t = r - this._r07cfc8b3f013c3 + a.const_299;
    return t < 0 || t >= this._r66f1a747c533a7.length
      ? super.getSpriteAssetName(e, r)
      : this._r66f1a747c533a7[t];
  }
  reset() {
    (super.reset(), this.clearIconAssets());
  }
  getAsset(e, r = -1) {
    if (this._r2b4080df4ef502(r)) {
      let t = r - this._r07cfc8b3f013c3 + a.const_299;
      if (
        (this.var_1279 == null && this._r703a52f846690e(), t < (this.var_1279?.length ?? 0))
      )
        return this.var_1279?.[t] ?? null;
    }
    return super.getAsset(e, r);
  }
  getSpriteTag(e, r, t) {
    return this._r2b4080df4ef502(t)
      ? `${a.FLOATING_ICON_TAG_PREFIX}${t - this._r07cfc8b3f013c3 + a.const_299}`
      : super.getSpriteTag(e, r, t);
  }
  getSpriteAlpha(e, r, t) {
    let i = super.getSpriteAlpha(e, r, t);
    if (this._r2b4080df4ef502(t)) {
      let s = t - this._r07cfc8b3f013c3 + a.const_299,
        o = this._rc3cc264a9bbca4[s]?.[5];
      return o != null ? o * i : i;
    }
    return i;
  }
  _rddb79ec03402f8(e, r, t) {
    return this._r2b4080df4ef502(t) ? !1 : super._rddb79ec03402f8(e, r, t);
  }
  getSpriteXOffset(e, r, t) {
    if (this._r2b4080df4ef502(t)) {
      let i = t - this._r07cfc8b3f013c3 + a.const_299,
        s = this._rc3cc264a9bbca4[i];
      if (s != null) {
        let o = Math.trunc(r / 2) % 2 === 1,
          d = s[0],
          c = s[3];
        return (this._r49698dad7a1693 !== o && (d = -d), d - c / 2);
      }
    }
    return super.getSpriteXOffset(e, r, t);
  }
  getSpriteYOffset(e, r, t) {
    if (this._r2b4080df4ef502(t)) {
      let i = t - this._r07cfc8b3f013c3 + a.const_299,
        s = this._rc3cc264a9bbca4[i];
      if (s != null) {
        let o = s[1],
          d = s[4],
          c = s[7],
          f = (this.var_1400 + c) % (a.FLOATING_PIXELS * 2);
        return (f > a.FLOATING_PIXELS && (f = a.FLOATING_PIXELS - (f - a.FLOATING_PIXELS)), o + d / 2 - f);
      }
    }
    return super.getSpriteYOffset(e, r, t);
  }
  _rff74d56770433c(e, r, t) {
    if (this._r2b4080df4ef502(t)) {
      let i = t - this._r07cfc8b3f013c3 + a.const_299;
      return this._rc3cc264a9bbca4[i]?.[6] ?? 0;
    }
    return super._rff74d56770433c(e, r, t);
  }
  _r32e488dea66198(e, r, t) {
    return this._r2b4080df4ef502(t) ? qt._rb70b6db4a5082b : super._r32e488dea66198(e, r, t);
  }
  _r17f04410da1bfe(e, r, t) {
    return this._r2b4080df4ef502(t) ? a._r6582b116475021 : super._r17f04410da1bfe(e, r, t);
  }
  _rd5cf11ef94da6b(e, r, t) {
    if (this._r2b4080df4ef502(t)) {
      let i = t - this._r07cfc8b3f013c3 + a.const_299,
        s = this._rc3cc264a9bbca4[i];
      if (s != null) {
        let o = Math.trunc(r / 2) % 2 === 1,
          d = s[2];
        return (this._r49698dad7a1693 !== o) !== d;
      }
    }
    return super._rd5cf11ef94da6b(e, r, t);
  }
  _r2b4080df4ef502(e) {
    let r = e - this._r07cfc8b3f013c3 + a.const_299;
    return r >= 0 && r < this._rc3cc264a9bbca4.length;
  }
  clearIconAssets() {
    this.var_1279 = null;
  }
  _r703a52f846690e() {
    (this.clearIconAssets(),
      (this.var_1279 = []),
      (this._rc3cc264a9bbca4 = []),
      (this._r49698dad7a1693 = Math.random() < 0.5),
      (this.var_1400 = 0),
      (this._rcc4708eef0dffe = this._rd5b25ad4c3f288));
    let e = Math.min(a.const_299, this._r66f1a747c533a7.length),
      r = a._rc34d44873019a6[e] ?? [];
    for (let t = 0; t < e; t++) {
      let i = this._r66f1a747c533a7[t] ?? "",
        s = this.assetCollection?.getAsset(i) ?? null;
      this.var_1279.push(s);
      let o = r[t] ?? [0, 0, 0, 0],
        d = o[0] + Math.random() * ((o[2] ?? 0) + 1) - (o[2] ?? 0) / 2,
        c = o[1] + Math.random() * ((o[3] ?? 0) + 1) - (o[3] ?? 0) / 2,
        f = Math.random() < 0.5,
        l = s?.width ?? 30,
        b = s?.height ?? 30,
        _ = this._rf4bb5dc8dd5801(c),
        h = 0.001 + c / 1e4,
        p = a._rf3db53031dfaa0 ? Math.floor(Math.random() * (a.FLOATING_PIXELS * 2 + 1)) : 0;
      this._rc3cc264a9bbca4.push([d, c, f, l, b, _, h, p]);
    }
  }
  _rf4bb5dc8dd5801(e) {
    let i = (e - -40) / -60,
      s = 0.9,
      o = 0.4,
      d = s + (o - s) * i;
    return ((d = Math.max(d, o)), (d = Math.min(d, s)), d);
  }
}

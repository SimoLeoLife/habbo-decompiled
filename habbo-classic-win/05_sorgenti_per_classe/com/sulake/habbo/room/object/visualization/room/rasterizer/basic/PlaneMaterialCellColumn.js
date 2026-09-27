// Extracted from HabboAirLauncher.deobf.js, line 281521.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneMaterialCellColumn.as
// Obfuscated name: _i100993e9e6cd52

class a {
  static {
    n(this, "PlaneMaterialCellColumn");
  }
  static _r97964780ff4d2b = 0;
  static _r3dcecf28a5e014 = 1;
  static REPEAT_MODE_BORDERS = 2;
  static REPEAT_MODE_CENTER = 3;
  static REPEAT_MODE_FIRST = 4;
  static REPEAT_MODE_LAST = 5;
  _r07e59a11ad44e3 = [];
  _repeatMode;
  _width;
  _r614d24e9a9a354 = null;
  _r7e109503f924e7 = null;
  var_4867 = 0;
  _r33276ccaeffab0 = 0;
  var_3157 = !1;
  var_3868 = !0;
  _red7f497c20e158 = -1;
  get isStatic() {
    return this.var_3868;
  }
  isRepeated() {
    return this._repeatMode !== a._r97964780ff4d2b;
  }
  get width() {
    return this._width;
  }
  static _r56b93377d5d862(e) {
    return e != null && e.source == null;
  }
  constructor(e, r, t = a._r3dcecf28a5e014) {
    if (((this._width = e < 1 ? 1 : e), r != null))
      for (let i of r)
        i != null && (this._r07e59a11ad44e3.push(i), i.isStatic || (this.var_3868 = !1));
    this._repeatMode = t;
  }
  dispose() {
    for (let e of this._r07e59a11ad44e3) e.dispose();
    ((this._r07e59a11ad44e3 = []),
      this._r614d24e9a9a354?.destroy(!0),
      (this._r614d24e9a9a354 = null),
      (this._r7e109503f924e7 = null));
  }
  clearCache() {
    if (this.var_3157) {
      (this._r614d24e9a9a354?.destroy(!0),
        (this._r614d24e9a9a354 = null),
        this._r7e109503f924e7 != null &&
          ((this._r7e109503f924e7.x = 0), (this._r7e109503f924e7.y = 0), (this._r7e109503f924e7.z = 0)));
      for (let e of this._r07e59a11ad44e3) e.clearCache();
      this.var_3157 = !1;
    }
  }
  renderTexture(e, r, t, i) {
    this._repeatMode === a._r97964780ff4d2b && (e = this.getCellsHeight(this._r07e59a11ad44e3, r));
    let s = _i7e30f454680fff();
    if (
      (s !== this._red7f497c20e158 && (this.clearCache(), (this._red7f497c20e158 = s)),
      this._r7e109503f924e7 == null && (this._r7e109503f924e7 = new k()),
      this.isStatic)
    ) {
      if (this._r614d24e9a9a354 != null) {
        if (
          !a._r56b93377d5d862(this._r614d24e9a9a354) &&
          this._r614d24e9a9a354.height === e &&
          k.isEqual(this._r7e109503f924e7, r) &&
          this.var_4867 === t &&
          this._r33276ccaeffab0 === i
        )
          return this._r614d24e9a9a354;
        (this._r614d24e9a9a354.destroy(!0), (this._r614d24e9a9a354 = null));
      }
    } else (this._r614d24e9a9a354?.destroy(!0), (this._r614d24e9a9a354 = null));
    if (((this.var_3157 = !0), this._r614d24e9a9a354 == null))
      this._r614d24e9a9a354 = _ie26e140b784b4c(this._width, e);
    else if (!_iec32b400ef4cda(this._r614d24e9a9a354)) return null;
    if (
      (this._r7e109503f924e7.assign(r),
      (this.var_4867 = t),
      (this._r33276ccaeffab0 = i),
      this._r07e59a11ad44e3.length === 0)
    )
      return this._r614d24e9a9a354;
    switch (this._repeatMode) {
      case a._r97964780ff4d2b:
        this._r343b2ad05ed679(r);
        break;
      case a.REPEAT_MODE_BORDERS:
        this._r608ac490aab382(r);
        break;
      case a.REPEAT_MODE_CENTER:
        this._ra78db7804804b2(r);
        break;
      case a.REPEAT_MODE_FIRST:
        this._re08efee0c82cc8(r);
        break;
      case a.REPEAT_MODE_LAST:
        this._r28a35d0ff3cb18(r);
        break;
      default:
        this.renderRepeatAll(r, t, i);
        break;
    }
    return this._r614d24e9a9a354;
  }
  getCells() {
    return this._r07e59a11ad44e3;
  }
  getCellsHeight(e, r) {
    let t = 0;
    for (let i of e) t += i._r7df0c0f117ca24(r);
    return t;
  }
  renderCells(e, r, t, i, s = 0, o = 0) {
    if (e.length === 0 || this._r614d24e9a9a354 == null) return r;
    for (let d = 0; d < e.length; d++) {
      let f = (t ? e[d] : e[e.length - 1 - d])?.render(i, s, o) ?? null;
      if (f == null) continue;
      let l = a._r2aebdc146027a5(f);
      if (
        (t || (r -= l),
        f.position.set(0, r),
        _ifa78568353bcfc(this._r614d24e9a9a354, f, !1),
        a._r9c023d16dd6714(f),
        t && (r += l),
        (t && r >= this._r614d24e9a9a354.height) || (!t && r <= 0))
      )
        return r;
    }
    return r;
  }
  _r343b2ad05ed679(e) {
    this.renderCells(this._r07e59a11ad44e3, 0, !0, e);
  }
  renderRepeatAll(e, r, t) {
    let i = 0;
    for (; this._r614d24e9a9a354 != null && i < this._r614d24e9a9a354.height;)
      if (((i = this.renderCells(this._r07e59a11ad44e3, i, !0, e, r, t)), i === 0)) return;
  }
  _r608ac490aab382(e) {
    if (this._r614d24e9a9a354 == null) return;
    let r = this._r07e59a11ad44e3[0] ?? null,
      t = this._r07e59a11ad44e3[this._r07e59a11ad44e3.length - 1] ?? null,
      i = this._r07e59a11ad44e3.slice(),
      s = r?._r7df0c0f117ca24(e) ?? 0,
      o = t?._r7df0c0f117ca24(e) ?? 0;
    i.length > 1 ? (i = i.slice(1, i.length - 1)) : (i = []);
    let d = 0;
    for (d = this.renderCells(i, d, !0, e); d < this._r614d24e9a9a354.height - o;)
      d = this.renderCells([r], d, !0, e);
    o > 0 && this.renderCells([t], this._r614d24e9a9a354.height - o, !0, e);
  }
  _ra78db7804804b2(e) {
    if (this._r614d24e9a9a354 == null) return;
    let r = Math.floor(this._r07e59a11ad44e3.length / 2),
      t = this._r07e59a11ad44e3.slice(0, r),
      i = this._r07e59a11ad44e3.slice(r + 1),
      s = this._r07e59a11ad44e3.length % 2 === 1 ? [this._r07e59a11ad44e3[r] ?? null].filter(Boolean) : [],
      o = 0;
    o = this.renderCells(t, o, !0, e);
    let d = o,
      c = this._r614d24e9a9a354.height;
    c = this.renderCells(i, c, !1, e);
    let f = c - d,
      l = this.getCellsHeight(s, e);
    if (l > 0 && f > 0) {
      let b = Math.max(1, Math.ceil(f / l)),
        _ = d + Math.max(0, Math.floor((f - b * l) / 2));
      for (let h = 0; h < b; h++) _ = this.renderCells(s, _, !0, e);
    }
  }
  _re08efee0c82cc8(e) {
    if (this._r614d24e9a9a354 == null) return;
    let r = this._r07e59a11ad44e3[0] ?? null,
      t = this.renderCells(this._r07e59a11ad44e3, 0, !0, e);
    for (; r != null && t < this._r614d24e9a9a354.height;) t = this.renderCells([r], t, !0, e);
  }
  _r28a35d0ff3cb18(e) {
    if (this._r614d24e9a9a354 == null) return;
    let r = this._r07e59a11ad44e3[this._r07e59a11ad44e3.length - 1] ?? null,
      t = this.renderCells(this._r07e59a11ad44e3, this._r614d24e9a9a354.height, !1, e);
    for (; r != null && t > 0;) t = this.renderCells([r], t, !1, e);
  }
  static _r2aebdc146027a5(e) {
    return Math.round(e.height);
  }
  static _r9c023d16dd6714(e) {
    "removeChildren" in e && e.removeChildren();
  }
}

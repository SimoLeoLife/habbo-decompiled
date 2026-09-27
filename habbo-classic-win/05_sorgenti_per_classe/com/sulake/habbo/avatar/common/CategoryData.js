// Extracted from HabboAirLauncher.deobf.js, line 163986.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/CategoryData.as
// Obfuscated name: _i6686d1368d44b6

class a {
  static {
    n(this, "CategoryData");
  }
  _parts;
  _palettes;
  var_1509 = -1;
  _paletteIndexes;
  constructor(e, r) {
    ((this._parts = e), (this._palettes = r), (this._paletteIndexes = []));
  }
  dispose() {
    for (let e of this._parts) e.dispose();
    for (let e of this._palettes) for (let r of e) r.dispose();
    ((this._parts = []),
      (this._palettes = []),
      (this.var_1509 = -1),
      (this._paletteIndexes = []));
  }
  _r595d9d1c06df1f(e) {
    for (let r = 0; r < this._parts.length; r++)
      if (this._parts[r].id === e) {
        this._rf4462a66493fcd(r);
        return;
      }
  }
  _r45ba5ec99f27d2(e) {
    this._paletteIndexes = new Array(e.length);
    for (let r = 0; r < this._palettes.length; r++) {
      let t = this.getPalette(r);
      if (t == null) continue;
      let i = e.length > r ? e[r] : 0;
      e.length <= r && (i = t[0]?._r050571dc2ea50e?.id ?? 0);
      for (let s = 0; s < t.length; s++) {
        let o = t[s],
          d = o._r050571dc2ea50e?.id === i;
        (d && (this._paletteIndexes[r] = s), (o.isSelected = d));
      }
    }
    this._rb2e3ee966a5ba8();
  }
  _rf4462a66493fcd(e) {
    if (
      (this.var_1509 >= 0 &&
        this.var_1509 < this._parts.length &&
        (this._parts[this.var_1509].isSelected = !1),
      e >= 0 && e < this._parts.length)
    ) {
      let r = this._parts[e];
      return ((r.isSelected = !0), (this.var_1509 = e), r);
    }
    return null;
  }
  _r2344738a902ffd(e, r) {
    let t = this.getPalette(r);
    if (t == null || e < 0 || e >= t.length) return null;
    (this._ra4f703f9c2f8c6(this._paletteIndexes[r], r), (this._paletteIndexes[r] = e));
    let i = t[e];
    return ((i.isSelected = !0), this._rb2e3ee966a5ba8(), i);
  }
  _r1a5194819e9a97(e) {
    return this._paletteIndexes.length <= e ? 0 : this._r67e57b91c2f4da(this._paletteIndexes[e]);
  }
  getSelectedColorIds() {
    if (this._paletteIndexes.length === 0 || this._palettes.length === 0) return null;
    let e = this._palettes[0][0]?._r050571dc2ea50e?.id ?? 0,
      r = [];
    for (let i = 0; i < this._paletteIndexes.length; i++) {
      let s = this._palettes[i];
      if (s == null || s.length === 0) continue;
      let o = s[this._paletteIndexes[i]];
      r.push(o?._r050571dc2ea50e?.id ?? e);
    }
    let t = this._r7e3b9e90b1132f();
    return t == null ? null : r.slice(0, Math.max(t._ra31833029c75f7, 1));
  }
  _r671c04c81d89b9(e) {
    let r = this.getPalette(e),
      t = this._r1a5194819e9a97(e);
    return r != null && t >= 0 && t < r.length ? r[t] : null;
  }
  _rc64cb5e96ee9f0(e) {
    return this._r671c04c81d89b9(e)?._r050571dc2ea50e?.id ?? 0;
  }
  get parts() {
    return this._parts;
  }
  getPalette(e) {
    return e >= 0 && e < this._palettes.length ? this._palettes[e] : null;
  }
  _r7e3b9e90b1132f() {
    return this.var_1509 >= 0 && this.var_1509 < this._parts.length
      ? this._parts[this.var_1509]
      : null;
  }
  _r27aac0ca50488d(e) {
    let r = this._r51fcec551bf4fe();
    for (let i of r) if (i != null && i.clubLevel > e) return !0;
    let t = this._r7e3b9e90b1132f()?.partSet;
    return t != null && t.clubLevel > e;
  }
  _r94a3064a5ce3d6(e) {
    let r = this._r7e3b9e90b1132f()?.partSet;
    return r != null && r.isSellable && !(e?.manager(r.id) ?? !1);
  }
  _r31613d6b0496d9(e) {
    let r = this._r7e3b9e90b1132f()?.partSet;
    return r != null && r.clubLevel > e
      ? (this._rf4462a66493fcd(0)?.partSet == null && this._rf4462a66493fcd(1), !0)
      : !1;
  }
  _r39df7974a1b857(e) {
    let r = this._r51fcec551bf4fe(),
      t = this.getPalette(0),
      i = a.defaultColorId(t, e);
    if (i === -1) return !1;
    let s = [],
      o = !1;
    for (let d of r) d == null || d.clubLevel > e ? (s.push(i), (o = !0)) : s.push(d.id);
    return (o && this._r45ba5ec99f27d2(s), o);
  }
  stripInvalidSellableItems(e) {
    let r = this._r7e3b9e90b1132f()?.partSet;
    return r != null && r.isSellable && !(e?.manager(r.id) ?? !1)
      ? (this._rf4462a66493fcd(0)?.partSet == null && this._rf4462a66493fcd(1), !0)
      : !1;
  }
  get selectedPartIndex() {
    return this.var_1509;
  }
  _ra4f703f9c2f8c6(e, r) {
    let t = this.getPalette(r),
      i = this._r67e57b91c2f4da(e);
    t == null || i < 0 || i >= t.length || (t[i].isSelected = !1);
  }
  _r51fcec551bf4fe() {
    let e = [];
    for (let r = 0; r < this._paletteIndexes.length; r++)
      e.push(this._r671c04c81d89b9(r)?._r050571dc2ea50e ?? null);
    return e;
  }
  _rb2e3ee966a5ba8() {
    let e = this._r51fcec551bf4fe();
    for (let r of this._parts) r.colors = e;
  }
  _r67e57b91c2f4da(e) {
    return Math.trunc(e ?? 0);
  }
  static defaultColorId(e, r) {
    if (e == null || e.length === 0) return -1;
    for (let t of e)
      if ((t._r050571dc2ea50e?.clubLevel ?? Number.MAX_SAFE_INTEGER) <= r)
        return t._r050571dc2ea50e?.id ?? -1;
    return -1;
  }
}

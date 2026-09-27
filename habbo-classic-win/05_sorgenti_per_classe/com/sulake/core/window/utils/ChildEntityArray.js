// Estratto da HabboAirLauncher.deobf.js, riga 137300.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/ChildEntityArray.as
// Nome offuscato: _i5f1beebae443d1

class extends class_4347 {
  static {
    n(this, "ChildEntityArray");
  }
  removeChild(e) {
    let r = this._array.indexOf(e);
    return r < 0 ? null : (this._array.splice(r, 1), e);
  }
  addChild(e) {
    return (this._array.push(e), e);
  }
  addChildAt(e, r) {
    return (this._array.splice(r, 0, e), e);
  }
  removeChildAt(e) {
    let r = this._array[e] ?? null;
    return r != null ? (this._array.splice(e, 1), r) : null;
  }
  setChildIndex(e, r) {
    let t = this._array.indexOf(e);
    t > -1 && r !== t && (this._array.splice(t, 1), this._array.splice(r, 0, e));
  }
  swapChildren(e, r) {
    if (e == null || r == null || e === r) return;
    let t = this._array.indexOf(e);
    if (t < 0) return;
    let i = this._array.indexOf(r);
    if (!(i < 0)) {
      if (i < t) {
        let s = e;
        ((e = r), (r = s));
        let o = t;
        ((t = i), (i = o));
      }
      (this._array.splice(i, 1),
        this._array.splice(t, 1),
        this._array.splice(t, 0, r),
        this._array.splice(i, 0, e));
    }
  }
  swapChildrenAt(e, r) {
    let t = this._array[e],
      i = this._array[r];
    t != null && i != null && this.swapChildren(t, i);
  }
}

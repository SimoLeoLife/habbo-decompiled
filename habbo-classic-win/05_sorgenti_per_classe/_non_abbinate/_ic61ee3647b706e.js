// Estratto da HabboAirLauncher.deobf.js, riga 49926.

class extends Uc {
  static {
    n(this, "_ic61ee3647b706e");
  }
  children = [];
  _rab521466f20843 = !0;
  _r0524bd58b6aae8 = 0;
  get _r44f27084cc753d() {
    return this._rab521466f20843;
  }
  set _r44f27084cc753d(e) {
    ((this._rab521466f20843 = e), (this._r0203ab2933f479().interactiveChildren = e), this._r3abe7f4dc195e4());
  }
  get mouseEnabled() {
    return this._r7e8b27bd064dda;
  }
  set mouseEnabled(e) {
    ((this._r7e8b27bd064dda = e), this._r3abe7f4dc195e4());
  }
  _r0c6ab6b4de6653() {
    return this._r7e8b27bd064dda
      ? this._r247ece9ec60b94
        ? "dynamic"
        : "static"
      : this._rab521466f20843
        ? "passive"
        : "none";
  }
  _rce2b304e7f15e9() {
    return this.children;
  }
  get numChildren() {
    return this.children.length;
  }
  addChild(e) {
    return this.addChildAt(e, this.children.length);
  }
  addChildAt(e, r) {
    let t = !1;
    e.parent && ((t = e.parent == this), t && this._r0524bd58b6aae8++, e.parent.removeChild(e));
    let i = Math.max(0, Math.min(r, this.children.length)),
      s = i + this._rb96b91dcbe2434(),
      o = this._r0e1e931b2967ef();
    return (
      this.children.splice(i, 0, e),
      o.addChildAt(e._r0203ab2933f479(), s),
      (e.parent = this),
      _ib3bc5429e41102(e, this._r26b5781d08fe22(), this._r0524bd58b6aae8 > 0),
      t && this._r0524bd58b6aae8--,
      e
    );
  }
  getChildAt(e) {
    let r = this.children[e];
    if (!r) throw new Error(`Child index out of range: ${e}`);
    return r;
  }
  getChildByName(e) {
    return this.children.find((r) => r.name === e) ?? null;
  }
  getChildIndex(e) {
    return this.children.indexOf(e);
  }
  contains(e) {
    return this.getChildIndex(e) >= 0;
  }
  removeChild(e) {
    let r = this.children.indexOf(e);
    if (r < 0) throw new Error("Provided display object is not a child of this container");
    return this.removeChildAt(r);
  }
  removeChildAt(e) {
    let r = this.getChildAt(e);
    return (
      this.children.splice(e, 1),
      this._r0e1e931b2967ef().removeChild(r._r0203ab2933f479()),
      (r.parent = null),
      _ib3bc5429e41102(r, null, this._r0524bd58b6aae8 > 0),
      r
    );
  }
  setChildIndex(e, r) {
    let t = this.getChildIndex(e);
    if (t < 0) throw new Error("Provided display object is not a child of this container");
    let i = Math.max(0, Math.min(r, this.children.length - 1)),
      s = i + this._rb96b91dcbe2434(),
      o = this._r0e1e931b2967ef();
    (this.children.splice(t, 1), this.children.splice(i, 0, e), o.setChildIndex(e._r0203ab2933f479(), s));
  }
  swapChildren(e, r) {
    let t = this.getChildIndex(e),
      i = this.getChildIndex(r);
    if (t < 0 || i < 0) throw new Error("Provided display object is not a child of this container");
    ((this.children[t] = r),
      (this.children[i] = e),
      this._r0e1e931b2967ef().swapChildren(e._r0203ab2933f479(), r._r0203ab2933f479()));
  }
  swapChildrenAt(e, r) {
    this.swapChildren(this.getChildAt(e), this.getChildAt(r));
  }
}

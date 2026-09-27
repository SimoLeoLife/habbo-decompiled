// Extracted from HabboAirLauncher.deobf.js, line 134399.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/SubstituteParentController.as
// Obfuscated name: _ifd27ba9b62c124

class extends st {
  static {
    n(this, "SubstituteParentController");
  }
  static NAME = "_CONTEXT_SUBSTITUTE_PARENT";
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this._children = []),
      (this._r5e1a9574d869f6 = !1));
  }
  getGraphicContext(e) {
    return null;
  }
  setupGraphicsContext() {
    return null;
  }
  addChild(e) {
    return (this._children.push(e), e);
  }
  addChildAt(e, r) {
    let t = e,
      i = t.parent;
    return (i !== null && i.removeChild(t), this._children.splice(r, 0, e), (t.parent = this), e);
  }
  getChildAt(e) {
    return this._children && e < this._children.length ? this._children[e] : null;
  }
  getChildByID(e) {
    if (this._children) {
      for (let r of this._children) if (r.id === e) return r;
    }
    return null;
  }
  getChildByName(e) {
    if (this._children) {
      for (let r of this._children) if (r.name === e) return r;
    }
    return null;
  }
  findChildByName(e) {
    if (this._children) {
      for (let r of this._children) if (r.name === e) return r;
      for (let r of this._children) {
        let t = r.findChildByName(e);
        if (t) return t;
      }
    }
    return null;
  }
  removeChild(e) {
    let r = this._children.indexOf(e);
    return r > -1 ? (this._children.splice(r, 1), (e.parent = null), e) : null;
  }
  setChildIndex(e, r) {
    let t = this._children.indexOf(e);
    t > -1 && r !== t && (this._children.splice(t, 1), this._children.splice(r, 0, e));
  }
  swapChildren(e, r) {
    if (e === null || r === null || e === r) return;
    let t = this._children.indexOf(e);
    if (t < 0) return;
    let i = this._children.indexOf(r);
    i < 0 ||
      (i < t && (([e, r] = [r, e]), ([t, i] = [i, t])),
      this._children.splice(i, 1),
      this._children.splice(t, 1),
      this._children.splice(t, 0, r),
      this._children.splice(i, 0, e));
  }
  swapChildrenAt(e, r) {
    this.swapChildren(this._children[e], this._children[r]);
  }
}

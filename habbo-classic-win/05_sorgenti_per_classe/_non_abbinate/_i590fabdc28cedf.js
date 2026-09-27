// Estratto da HabboAirLauncher.deobf.js, riga 140800.

class extends Ci {
  static {
    n(this, "_i590fabdc28cedf");
  }
  _selected = null;
  _r17150fc69e590b = !0;
  get iterator() {
    return new _ia5487394cc86a1(this);
  }
  update(e, r) {
    return (r.type === y.const_251 && _if9eb212abb3de7(e) && this.setSelected(e), super.update(e, r));
  }
  get numSelectables() {
    return this.numChildren;
  }
  getSelected() {
    return this._selected;
  }
  setSelected(e) {
    if (e !== null && e !== this._selected) {
      if (this._selected !== null && !this._selected.unselect()) return;
      let r = this._selected;
      if (((this._selected = e), this._selected.select())) {
        let t = this.getChildIndex(e);
        t > -1 &&
          this._r17150fc69e590b &&
          t !== this.numChildren - 1 &&
          this.setChildIndex(e, this.numChildren - 1);
      } else ((this._selected = r), this._selected !== null && this._selected.select());
    }
  }
  var_871(e) {
    return this.addChild(e);
  }
  _r2ea30bd80a38af(e, r) {
    return this.addChildAt(e, r);
  }
  getSelectableAt(e) {
    return this.getChildAt(e);
  }
  _rb30d0cbaa3f845(e) {
    return this.getChildByID(e);
  }
  _r2a025c03ea4907(e) {
    return this.getChildByTag(e);
  }
  _rf1edf3aad44c96(e) {
    return this.getChildByName(e);
  }
  getSelectableIndex(e) {
    return this.getChildIndex(e);
  }
  _r17ea3f0ab73786(e) {
    let r = this.getChildIndex(e);
    return r > -1
      ? (e === this._selected &&
          (this.numSelectables > 1
            ? this.setSelected(this.getSelectableAt(r === 0 ? 1 : 0))
            : (this._selected = null)),
        this.removeChild(e))
      : null;
  }
}

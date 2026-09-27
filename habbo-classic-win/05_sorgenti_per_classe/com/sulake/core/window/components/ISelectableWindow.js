// Estratto da HabboAirLauncher.deobf.js, riga 140574.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ISelectableWindow.as
// Nome offuscato: _i90cdf367cb3460

class extends kc {
  static {
    n(this, "ISelectableWindow");
  }
  get _rac1779e48d4bb9() {
    return this;
  }
  get selector() {
    let e = this.parent;
    for (; e != null;) {
      if (_i3cd914a4ce2444_(e)) return e;
      e = e.parent;
    }
    return null;
  }
  get isSelected() {
    return this._rac1779e48d4bb9.testStateFlag(class_1948.const_130);
  }
  set isSelected(e) {
    this._rac1779e48d4bb9.setStateFlag(class_1948.const_130, e);
  }
  update(e, r) {
    if (r.type === y.const_768 && this.parent != null && !_i3cd914a4ce2444_(this.parent)) {
      let t = this.parent.parent,
        i = this;
      for (; t != null;) {
        if (_i3cd914a4ce2444_(t)) {
          let s = y.allocate(y.const_251, i, null);
          (t.update(this, s), s.recycle());
          break;
        }
        t = t.parent;
      }
    }
    return super.update(e, r);
  }
  select() {
    if (this._rac1779e48d4bb9.getStateFlag(class_1948.const_130)) return !0;
    let e = this,
      r = y.allocate(y.const_587, e, null, !0);
    return (
      this.update(this, r),
      r.isDefaultPrevented()
        ? (r.recycle(), !1)
        : (r.recycle(),
          this._rac1779e48d4bb9.setStateFlag(class_1948.const_130, !0),
          (r = y.allocate(y.const_238, e, null)),
          this.update(this, r),
          r.recycle(),
          !0)
    );
  }
  unselect() {
    if (!this._rac1779e48d4bb9.getStateFlag(class_1948.const_130)) return !0;
    let e = this,
      r = y.allocate(y.const_774, e, null, !0);
    return (
      this.update(this, r),
      r.isDefaultPrevented()
        ? (r.recycle(), !1)
        : (r.recycle(),
          this._rac1779e48d4bb9.setStateFlag(class_1948.const_130, !1),
          (r = y.allocate(y.const_1217, e, null)),
          this.update(this, r),
          r.recycle(),
          !0)
    );
  }
}

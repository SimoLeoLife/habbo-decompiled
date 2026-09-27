// Extracted from HabboAirLauncher.deobf.js, line 132299.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/SelectableController.as
// Obfuscated name: _i6f907ea8b030f8

class extends Ci {
  static {
    n(this, "SelectableController");
  }
  get selector() {
    if (this._parent != null) {
      let e = this._parent;
      for (; e != null;) {
        if (_i3cd914a4ce2444(e)) return e;
        e = e.parent;
      }
    }
    return null;
  }
  get isSelected() {
    return this.testStateFlag(class_1948.const_130);
  }
  set isSelected(e) {
    this.setStateFlag(class_1948.const_130, e);
  }
  update(e, r) {
    if (r.type === y.const_768 && !_i7e6bf2137f0a80(this) && this._parent != null && !_i3cd914a4ce2444(this._parent)) {
      let t = this._parent.parent;
      for (; t != null;) {
        if (_i3cd914a4ce2444(t)) {
          let i = y.allocate(y.const_251, this, null);
          (t.update(this, i), i.recycle());
          break;
        }
        t = t.parent;
      }
    }
    return super.update(e, r);
  }
  select() {
    if (this.getStateFlag(class_1948.const_130)) return !0;
    let e = y.allocate(y.const_587, this, null, !0);
    return (
      this.update(this, e),
      e.isDefaultPrevented()
        ? (e.recycle(), !1)
        : (e.recycle(),
          this.setStateFlag(class_1948.const_130, !0),
          (e = y.allocate(y.const_238, this, null)),
          this.update(this, e),
          e.recycle(),
          this.activate(),
          !0)
    );
  }
  unselect() {
    if (!this.getStateFlag(class_1948.const_130)) return !0;
    let e = y.allocate(y.const_774, this, null, !0);
    return (
      this.update(this, e),
      e.isDefaultPrevented()
        ? (e.recycle(), !1)
        : (e.recycle(),
          this.setStateFlag(class_1948.const_130, !1),
          (e = y.allocate(y.const_1217, this, null)),
          this.update(this, e),
          e.recycle(),
          !0)
    );
  }
}

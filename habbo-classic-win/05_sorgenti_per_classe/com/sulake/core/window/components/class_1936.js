// Estratto da HabboAirLauncher.deobf.js, riga 140532.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/class_1936.as
// Nome offuscato: _i345143b37a25d7

class extends Ci {
  static {
    n(this, "class_1936");
  }
  _re528eb260a92a3 = 0;
  _rb9323eedb14210 = 0;
  _r3a16d13c26d3e1 = null;
  get scrollbarOffsetX() {
    return this._re528eb260a92a3;
  }
  get scrollbarOffsetY() {
    return this._rb9323eedb14210;
  }
  set scrollbarOffsetX(e) {}
  set scrollbarOffsetY(e) {}
  constructWindow(e, r, t, i, s, o, d, c, f = null, l = null, b = 0, _ = "") {
    ((i |= N.const_1323),
      (i |= N.WINDOW_PARAM_MOUSE_DRAGGING_TARGET),
      (i |= N._r4ac675344d9e3e),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
    let h = d;
    for (; h !== null;) _if2af86ebb71888__(h) ? ((this._r3a16d13c26d3e1 = h), (h = null)) : (h = h.parent);
    this._r3a16d13c26d3e1?.horizontal
      ? (this.limits.minWidth = this.width)
      : (this.limits.minHeight = this.height);
  }
  offset(e, r) {
    if (
      (super.offset(e, r),
      (this._re528eb260a92a3 = this.x !== 0 ? this.x / Number(this._parent.width - this.width) : 0),
      (this._rb9323eedb14210 = this.y !== 0 ? this.y / Number(this._parent.height - this.height) : 0),
      this._parent !== this._r3a16d13c26d3e1 && this._r3a16d13c26d3e1 !== null)
    ) {
      let t = y.allocate(y.const_1385, this, null);
      (this._r3a16d13c26d3e1.update(this, t), t.recycle());
    }
  }
}

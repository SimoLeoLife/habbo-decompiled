// Estratto da HabboAirLauncher.deobf.js, riga 346743.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/ScrollListPreset.as
// Nome offuscato: _i3d55c89b610c88

class a extends WiredUIPreset {
  static {
    n(this, "ScrollListPreset");
  }
  static SCROLLBAR_WIDTH = 9;
  static SCROLLBAR_MARGIN = 3;
  _container;
  _elements;
  _center = !1;
  _r021fd695c3859e;
  _r6db042b01427fb = 0;
  _r66526b0d5ff393 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t = !1) {
    ((this._container = this.var_102._rd65848eed931f7("vertical_scroll_list_view")),
      (this._center = t),
      (this._r021fd695c3859e = r),
      (this._container.spacing = this.var_40._r249f7dc0054eba),
      (this._elements = []));
    for (let i of e) (this._elements.push(i), this._container.addListItem(i.window));
    ((this._container.limits.minHeight = r.minHeight),
      (this._container.limits.maxHeight = r.maxHeight),
      r._r6caf4ffbb2367b && (this._container.autoHideScrollBar = !0),
      this._container._rce8584c5e61b53.addEventListener(y.const_755, this._re6d1c985e4d1d6));
  }
  get window() {
    return this._container;
  }
  set spacing(e) {
    this._container.spacing = e;
  }
  get spacing() {
    return this._container.spacing;
  }
  _raa40b532c7fcb2(e) {
    let r = 0;
    r += this._container.spacing * (this._elements.length - 1);
    for (let t of this._elements) (t.resizeToWidth(e), (r += t.window.height));
    if (this._center)
      for (let t of this._elements) t.window.x = Math.trunc(e / 2) - Math.trunc(t.window.width / 2);
  }
  resizeToWidth(e) {
    ((this._r66526b0d5ff393 = !0), (this._r6db042b01427fb = e), super.resizeToWidth(e));
    let r = e,
      t = e;
    (this._r021fd695c3859e._r6caf4ffbb2367b || (this._raa40b532c7fcb2(r), this.fixHeight()),
      this._container._rb4a5f64054fcb5 &&
        ((r = e - a.SCROLLBAR_WIDTH - a.SCROLLBAR_MARGIN),
        this._raa40b532c7fcb2(r),
        (t = e - a.SCROLLBAR_MARGIN)),
      (this._container.width = t),
      this.fixHeight(),
      (this._r66526b0d5ff393 = !1));
  }
  fixHeight() {
    this._container.height = Math.min(
      this._r021fd695c3859e.maxHeight,
      Math.max(this._r021fd695c3859e.minHeight, this._container.visibleRegion.height),
    );
  }
  _re6d1c985e4d1d6 = n((...e) => {
    this._r66526b0d5ff393 || this._r1f6942c4e03ee9 || this.resizeToWidth(this._r6db042b01427fb);
  }, "_re6d1c985e4d1d6");
  set backgroundColor(e) {
    ((this._container.background = !0), (this._container.color = 4278190080 | e));
  }
  get childPresets() {
    return this._elements.slice();
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this._elements = null));
  }
}

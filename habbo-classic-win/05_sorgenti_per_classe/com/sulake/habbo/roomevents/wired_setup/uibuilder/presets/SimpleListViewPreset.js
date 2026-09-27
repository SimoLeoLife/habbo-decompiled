// Estratto da HabboAirLauncher.deobf.js, riga 347590.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/SimpleListViewPreset.as
// Nome offuscato: _i8d0d248c3bfd40

class extends WiredUIPreset {
  static {
    n(this, "SimpleListViewPreset");
  }
  _container;
  _elements;
  _rc4316df6d6d831 = !1;
  _center = !1;
  _allChildrenStaticWidth = !1;
  _staticWidth = -1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t) {
    ((this._container = e
      ? this.var_102._rd65848eed931f7("vertical_list_view")
      : this.var_102._rd65848eed931f7("horizontal_list_view")),
      (this._rc4316df6d6d831 = e),
      (this._center = t),
      (this._container.spacing = e
        ? this.var_40._r7ac8f2f1de8d9e
        : this.var_40._r249f7dc0054eba),
      (this._elements = []));
    for (let i of r)
      (this._elements.push(i), this._container.addListItem(i.window), (i.invisibilityListener = this));
    if (!e) {
      ((this._allChildrenStaticWidth = !0), (this._staticWidth = 0));
      for (let i of this._elements) {
        if (!i.hasStaticWidth()) {
          this._allChildrenStaticWidth = !1;
          break;
        }
        this._staticWidth += i.staticWidth;
      }
      (this._allChildrenStaticWidth &&
        this._elements.length > 1 &&
        (this._staticWidth += this._container.spacing * (this._elements.length - 1)),
        this._allChildrenStaticWidth && (this._container.width = this._staticWidth));
    }
  }
  onInvisibilityChanged(e, r) {
    (this._container.arrangeListItems(), this.resize());
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
  set minHeight(e) {
    this._container.limits.minHeight = e;
  }
  resizeToWidth(e) {
    super.resizeToWidth(e);
    let r = 0;
    for (let f of this._elements) f.visible && (r += 1);
    if (this._rc4316df6d6d831) {
      this._container.width = e;
      for (let f of this._elements) f.resizeToWidth(e);
      if (this._center) throw new Error("Centering vertical lists not implemented yet");
      return;
    }
    let t = this._allChildrenStaticWidth ? this._staticWidth : e,
      i = t - (r - 1) * this._container.spacing,
      s = 0;
    for (let f of this._elements) f.visible && (f.hasStaticWidth() ? (i -= f.staticWidth) : (s += 1));
    let o = s > 0 ? Math.max(0, Math.trunc(i / s)) : 0,
      d = this._container.limits.minHeight,
      c = null;
    for (let f of this._elements)
      f.visible &&
        (f.hasStaticWidth()
          ? f.resizeToWidth(f.staticWidth)
          : ((c = f), f.resizeToWidth(o), (i -= o)),
        f.window.height > d && (d = f.window.height));
    if (
      (i > 0 && c != null && (c.resizeToWidth(o + i), c.window.height > d && (d = c.window.height)),
      this._center)
    )
      for (let f of this._elements) f.window.y = d / 2 - f.window.height / 2;
    ((this._container.width = t), (this._container.height = d));
  }
  set backgroundColor(e) {
    ((this._container.background = !0), (this._container.color = 4278190080 | e));
  }
  get childPresets() {
    return this._elements.slice();
  }
  hasStaticWidth() {
    return this._allChildrenStaticWidth;
  }
  get staticWidth() {
    return this._allChildrenStaticWidth ? this._staticWidth : -1;
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this._elements = null));
  }
}

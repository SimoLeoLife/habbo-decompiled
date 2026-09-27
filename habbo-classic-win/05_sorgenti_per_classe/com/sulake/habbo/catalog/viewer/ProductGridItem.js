// Estratto da HabboAirLauncher.deobf.js, riga 171869.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/ProductGridItem.as
// Nome offuscato: _i90c1799f40de2f

class a {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "ProductGridItem");
  }
  static GRID_ITEM_BORDER = "bg";
  _view = null;
  _icon = null;
  var_1954 = null;
  var_605 = null;
  _disposed = !1;
  _rffcd368802939f = null;
  get view() {
    return this._view;
  }
  set view(e) {
    if (e == null) return;
    if (
      ((this._view = e),
      (this._view.procedure = this.eventProc),
      (this._icon = this._view.findChildByName("image")),
      (this.var_1954 = this._view.findChildByName("image_wide")),
      this.var_1954 != null)
    ) {
      let i = this._view.findChildByName("wide_container"),
        s = this._view.findChildByName("small_container");
      (i != null && (i.visible = this._r375778d2070c73),
        s != null && (s.visible = !this._r375778d2070c73),
        (this._view.width = this._r375778d2070c73 ? this._view.limits.maxWidth : this._view.limits.minWidth));
    } else this.var_1954 = this._icon;
    let r = this._view.findChildByTag("ITEM_HILIGHT");
    r != null && (r.visible = !1);
    let t = this._view.findChildByName("multiContainer");
    t != null && (t.visible = !1);
  }
  set grid(e) {
    this.var_605 = e;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this.var_605 = null),
      (this._icon = null),
      (this.var_1954 = null),
      (this._catalog = null),
      this._view != null && (this._view.dispose(), (this._view = null)));
  }
  get disposed() {
    return this._disposed;
  }
  get catalog() {
    return this._catalog;
  }
  activate() {
    if (this._view == null) return;
    let e = this._view.findChildByTag("ITEM_HILIGHT");
    if (e != null) {
      e.visible = !0;
      return;
    }
    let r = this._view.getChildByName(a.GRID_ITEM_BORDER);
    r != null && (r.style = HabboWindowStyle.DEFAULT);
  }
  deactivate() {
    if (this._view == null) return;
    let e = this._view.findChildByTag("ITEM_HILIGHT");
    if (e != null) {
      e.visible = !1;
      return;
    }
    let r = this._view.getChildByName(a.GRID_ITEM_BORDER);
    r != null && (r.style = HabboWindowStyle.SHINY);
  }
  get _r375778d2070c73() {
    return !1;
  }
  setDraggable(e) {
    if (!e || this._view == null) return;
    let r = this._view;
    r == null ||
      typeof r.setMouseCursorForState != "function" ||
      (r.setMouseCursorForState(class_1948.WINDOW_STATE_HOVERING, class_3421.DRAG),
      r.setMouseCursorForState(class_1948.WINDOW_STATE_HOVERING | class_1948.WINDOW_STATE_ACTIVE, class_3421.DRAG));
  }
  setIconImage(e, r) {
    if (e == null) return;
    let t = this.targetIcon;
    if (t != null && !t.disposed) {
      let i = Math.floor((t.width - e.width) / 2),
        s = Math.floor((t.height - e.height) / 2);
      (t.bitmap == null
        ? (t.bitmap = new A(t.width, t.height, !0, 16777215))
        : t.bitmap.fillRect(t.bitmap.rect, 16777215),
        t.bitmap.copyPixels(e, e.rect, new E(i, s), null, null, !1),
        t.invalidate());
    }
    r && e.dispose();
  }
  get targetIcon() {
    return this._r375778d2070c73 ? this.var_1954 : this._icon;
  }
  _r999433e3e1deeb(e, r) {
    let t = this._catalog?._rf0eb5f07c94cfb?._r274f6640e76241(e, fr.LARGE, null, r);
    if (t == null) return null;
    let i = t._rb2bd48e3b4d265(class_2123.HEAD, 0.5);
    return (t.dispose(), i);
  }
  eventProc = n((e, r) => {
    if (e.type === u.UP) {
      this._rffcd368802939f = null;
      return;
    }
    if (e.type === u.DOWN) {
      if (r == null) return;
      (this.var_605?.select(this, !0), (this._rffcd368802939f = r));
      return;
    }
    if (e.type === u.OUT && this._rffcd368802939f != null && this._rffcd368802939f === r) {
      (this.var_605?.startDragAndDrop(this) ?? !1) && (this._rffcd368802939f = null);
      return;
    }
    (e.type === u.CLICK || e.type === u.DOUBLE_CLICK) && (this._rffcd368802939f = null);
  }, "eventProc");
}

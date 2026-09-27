// Extracted from HabboAirLauncher.deobf.js, line 139258.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/ItemGridController.as
// Obfuscated name: _icac0a41652d43f

class extends ItemListController {
  static {
    n(this, "ItemGridController");
  }
  _r8e7d948ab62458 = !1;
  _r9188c2a9a3e96c = !1;
  _r776a0eb344fbf8 = 0;
  _rfd5a2f28084e72 = !0;
  _r8f9dc440b017c3 = !1;
  _r208902ecef165d = n((e, r) => {
    this._ra618464192af01(e, r);
  }, "_r208902ecef165d");
  set spacing(e) {
    let r = this.numListItems;
    if (!this._r9188c2a9a3e96c)
      for (; r-- > 0;) {
        let t = this.getListItemAt(r);
        t != null && (t.spacing = e);
      }
    super.spacing = e;
  }
  get spacing() {
    return super.spacing;
  }
  set background(e) {
    super.background = e;
    for (let r = 0; r < this.numListItems; r++) {
      let t = this.getListItemAt(r);
      t != null && (t.background = e);
    }
  }
  get background() {
    return super.background;
  }
  set color(e) {
    super.color = e;
    for (let r = 0; r < this.numListItems; r++) {
      let t = this.getListItemAt(r);
      t != null && (t.color = e);
    }
  }
  get color() {
    return super.color;
  }
  set autoArrangeItems(e) {
    super.autoArrangeItems = e;
    for (let r = 0; r < this._r37e9b53def5dfd; r++) {
      let t = this.getListItemAt(r);
      t != null && (t.autoArrangeItems = e);
    }
  }
  get autoArrangeItems() {
    return super.autoArrangeItems;
  }
  get _r884a36eb6fb71b() {
    return this._rfd5a2f28084e72;
  }
  set _r884a36eb6fb71b(e) {
    this._rfd5a2f28084e72 = e;
  }
  set _rb4de873fcd7d8f(e) {
    ((this._r776a0eb344fbf8 = e), (this._r9188c2a9a3e96c = !0));
    let r = this.numListItems;
    for (; r-- > 0;) {
      let t = this.getListItemAt(r);
      t != null && (t.spacing = e);
    }
  }
  get iterator() {
    return new ItemGridIterator(this);
  }
  get _r72acf104e2c444() {
    let e = 0,
      r = this.numListItems;
    for (; r-- > 0;) e += this.getListItemAt(r)?.numListItems ?? 0;
    return e;
  }
  get _r37e9b53def5dfd() {
    return this.numListItems;
  }
  get _rc89526ab6e9545() {
    let e = 0;
    for (let r = 0; r < this._r37e9b53def5dfd; r++) e = Math.max(e, this.getListItemAt(r)?.numListItems ?? 0);
    return e;
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    if (
      (super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _),
      (this.var_482 = r !== class_2090.WINDOW_TYPE_ITEMGRID_HORIZONTAL),
      (this._r4c2cdf877facd8 = !0),
      !this.var_482)
    )
      throw new Error("Horizontal item grid not yet implemented!");
  }
  update(e, r) {
    let t = super.update(e, r);
    switch (r.type) {
      case y.const_755:
        this._rfd5a2f28084e72 && this._r876553622f56ef();
        break;
      case u.const_974:
      case u.WHEEL_HORIZONTAL: {
        let i = r,
          s = this._r6a45c8371123d1(i);
        (i.type !== u.WHEEL_HORIZONTAL || s) &&
          (this.WindowMouseEvent(this._r1d518b35a45bf8(i) * 0.5, s), (t = !0));
        break;
      }
    }
    return t;
  }
  get _r725104edd91a20() {
    return !this.var_482;
  }
  addGridItem(e) {
    return (this._rcb169f89e38267(e), e);
  }
  _r69465cf54b2583(e, r) {
    return (this._rc6a4916a52690a(e, Math.min(this._r72acf104e2c444, r)), e);
  }
  getGridItemAt(e) {
    let r = this.resolveColumnByIndex(e);
    return r == null || this._r37e9b53def5dfd === 0
      ? null
      : r.getListItemAt(Math.floor(e / this._r37e9b53def5dfd));
  }
  _rc61347781fdc8b(e) {
    for (let r = 0; r < this._r37e9b53def5dfd; r++) {
      let t = this.getListItemAt(r)?.getListItemByID(e);
      if (t != null) return t;
    }
    return null;
  }
  getGridItemByName(e) {
    for (let r = 0; r < this._r37e9b53def5dfd; r++) {
      let t = this.getListItemAt(r)?.getListItemByName(e);
      if (t != null) return t;
    }
    return null;
  }
  _ree8fdc27c97086(e) {
    for (let r = 0; r < this._r37e9b53def5dfd; r++) {
      let t = this.getChildAt(r)?.getListItemByTag(e);
      if (t != null) return t;
    }
    return null;
  }
  _r76bcf89cad2fb2(e) {
    let r = this._r290202beaf24b9(e);
    return r == null ? -1 : r.getListItemIndex(e) * this._r37e9b53def5dfd + this._rf6128a9eb6543d(r);
  }
  removeGridItem(e) {
    let r = this._r76bcf89cad2fb2(e);
    if (r === -1) return null;
    if (this._r18f8005e56803a(r) !== e) throw new Error("Item grid is out of order!");
    let t = this.resolveColumnByIndex(r);
    return (
      t != null &&
        (this.var_482
          ? (t.height = t.visibleRegion.height)
          : (t.width = t.visibleRegion.width)),
      e
    );
  }
  _r7f196c1ba1085e(e) {
    let r = this.getGridItemAt(e);
    return r != null ? this.removeGridItem(r) : null;
  }
  setGridItemIndex(e, r) {
    if (this.removeGridItem(e) == null) throw new Error("Item not found in grid!");
    this.addListItemAt(e, r);
  }
  swapGridItems(e, r) {
    throw new Error("ItemGridWindow / Unimplemented method!");
  }
  _re865559d3aa1c8(e, r) {
    let t = this.getGridItemAt(e),
      i = this.getGridItemAt(r);
    t != null && i != null && this.swapGridItems(t, i);
  }
  removeGridItems() {
    for (let e = 0; e < this._r37e9b53def5dfd; e++) {
      let r = this.getListItemAt(e);
      r != null && (r.removeListItems(), this.var_482 ? (r.height = 0) : (r.width = 0));
    }
  }
  _rbb4c26d068856f() {
    for (let e = 0; e < this._r37e9b53def5dfd; e++) {
      let r = this.getListItemAt(e);
      r != null && (r.destroyListItems(), this.var_482 ? (r.height = 0) : (r.width = 0));
    }
    this.destroyListItems();
  }
  _r876553622f56ef() {
    if (this._r8f9dc440b017c3) return;
    this._r8f9dc440b017c3 = !0;
    let e = this._r72acf104e2c444,
      r = [],
      t = this._r37e9b53def5dfd,
      i = this.autoArrangeItems;
    for (this.autoArrangeItems = !1; e > 0;)
      for (let s = 0; s < t; s++) {
        let d = this.getListItemAt(s)?.removeListItemAt(0) ?? null;
        if ((d != null && r.push(d), --e < 1)) break;
      }
    (this.destroyListItems(), (this.autoArrangeItems = i));
    for (let s of r) this.addGridItem(s);
    if (this._r8e7d948ab62458) {
      let s = 0;
      for (let o = 0; o < this._r37e9b53def5dfd; o++) {
        let d = this.getListItemAt(o);
        d != null &&
          ((d.autoArrangeItems = !0), (d.height = d.visibleRegion.height), (s = Math.max(s, d.height)));
      }
      this._container.height = s;
    }
    this._r8f9dc440b017c3 = !1;
  }
  set _r61b06063347df2(e) {
    this._r8e7d948ab62458 = e;
  }
  get _r61b06063347df2() {
    return this._r8e7d948ab62458;
  }
  get properties() {
    let e = super.properties;
    return (e.push(this.createProperty(class_3436.CONTAINER_RESIZE_TO_COLUMNS, this._r61b06063347df2)), e);
  }
  set properties(e) {
    for (let r of e) r.key === class_3436.CONTAINER_RESIZE_TO_COLUMNS && (this._r61b06063347df2 = !!r.value);
    super.properties = e;
  }
  _ra618464192af01(e, r) {}
  _rb1de926dc63616(e) {
    if (e.type === y.const_953) {
      let r = e.target;
      this.removeGridItem(r);
    }
  }
  _rf6128a9eb6543d(e) {
    return this.getListItemIndex(e);
  }
  resolveColumnByIndex(e) {
    return this._r37e9b53def5dfd > 0 ? this.getListItemAt(e % this._r37e9b53def5dfd) : null;
  }
  _rd79532a029b428(e) {
    return e % this._r37e9b53def5dfd;
  }
  _re0f88a4e065a30(e) {
    return Math.floor(e / this._r37e9b53def5dfd);
  }
  populate(e) {
    let r = this.autoArrangeItems;
    this.autoArrangeItems = !1;
    let t = this._r72acf104e2c444,
      i = this._r37e9b53def5dfd;
    for (let s of e) {
      if (i === 0) {
        (this.addColumnForItem(s), (i += 1));
        continue;
      }
      let o;
      if (t > 0) {
        let d = this.resolveColumnByIndex(t > 0 ? t - 1 : 0),
          c = d != null ? this.getListItemIndex(d) : -1,
          f = c > -1 ? c === i - 1 : !0;
        if (f && d != null && d.numListItems === 1 && d.right + s.width <= this.var_31) {
          this.addColumnForItem(s);
          continue;
        }
        o = this.getListItemAt(f ? 0 : c + 1);
      } else o = this.getListItemAt(0);
      (o?.addListItem(s),
        (t += 1),
        o != null &&
          (s.width > o.width && (o.width = s.width), s.bottom > o.height && (o.height = s.bottom)));
    }
    this.autoArrangeItems = r;
  }
  _r290202beaf24b9(e) {
    let r = this._r37e9b53def5dfd;
    for (; r-- > 0;) {
      let t = this.getListItemAt(r);
      if (t != null && t.getListItemIndex(e) > -1) return t;
    }
    return null;
  }
  _rcb169f89e38267(e) {
    if (this._r37e9b53def5dfd === 0) return this.addColumnForItem(e);
    let r = this._r72acf104e2c444,
      t;
    if (r > 0) {
      let i = this.resolveColumnByIndex(r > 0 ? r - 1 : 0),
        s = i != null ? this.getListItemIndex(i) : -1,
        o = s > -1 ? s === this._r37e9b53def5dfd - 1 : !0;
      if (o && i != null && i.numListItems === 1 && i.right + e.width <= this.var_31)
        return this.addColumnForItem(e);
      t = this.getListItemAt(o ? 0 : s + 1);
    } else t = this.getListItemAt(0);
    return t == null
      ? this.addColumnForItem(e)
      : (t.addListItem(e),
        e.width > t.width && (t.width = e.width),
        e.bottom > t.height && (t.height = e.bottom),
        t);
  }
  addColumnForItem(e) {
    let r = this._context.create(
      `${this._name}_COLUMN_${this.numListItems}`,
      null,
      class_2090._rb5e71f1a68d5e0,
      class_2025.WINDOW_STYLE_DEFAULT,
      N.const_421 | N._r0122fdb7c42001,
      new D(0, 0, Math.max(e.width, 0), Math.max(e.height, 0)),
      this._r208902ecef165d,
      null,
      this.numListItems,
      null,
      "",
      [st.TAG_INTERNAL, st.TAG_EXCLUDE],
    );
    return (
      (r._r3701aeed56f609 = !0),
      (r.background = this.background),
      (r.color = this.color),
      (r.spacing = this._r9188c2a9a3e96c ? this._r776a0eb344fbf8 : this.var_659),
      this.addListItem(r),
      r.addListItem(e),
      r
    );
  }
  _r1b09a5314f52ca(e) {
    this.removeChildAt(e)?.dispose();
  }
  _rc6a4916a52690a(e, r) {
    let t = this._r72acf104e2c444,
      i = t - 1,
      s = this._r37e9b53def5dfd;
    for (let d = 0; d < s; d++) {
      let c = this.getListItemAt(d);
      c != null && (c.autoArrangeItems = !1);
    }
    if (t <= r) this._rcb169f89e38267(e);
    else {
      if (this._rc89526ab6e9545 === 1) {
        let d = this.getGridItemAt(i);
        (d != null && this._rcb169f89e38267(d), (i -= 1));
      }
      for (; i >= r;) {
        let d = this.getGridItemAt(i),
          c = this._re0f88a4e065a30(i + 1),
          f = this.resolveColumnByIndex(i + 1);
        (d != null && f != null && f.addListItemAt(d, c), (i -= 1));
      }
      this.resolveColumnByIndex(r)?.addListItemAt(e, Math.floor(r / this._r37e9b53def5dfd));
    }
    let o = 0;
    for (let d = 0; d < this._r37e9b53def5dfd; d++) {
      let c = this.getListItemAt(d);
      c != null &&
        ((c.autoArrangeItems = !0), (c.height = c.visibleRegion.height), (o = Math.max(o, c.height)));
    }
    this._container.height = o;
  }
  _r18f8005e56803a(e) {
    if (this._r37e9b53def5dfd === 0) return null;
    let r = this._re0f88a4e065a30(e),
      i = this.resolveColumnByIndex(e)?.removeListItemAt(r) ?? null,
      s = this._r72acf104e2c444,
      o = e;
    if (i == null) return null;
    for (let c = 0; c < this._r37e9b53def5dfd; c++) {
      let f = this.getListItemAt(c);
      f != null && (f.autoArrangeItems = !1);
    }
    for (; o < s;) {
      r = this._re0f88a4e065a30(o);
      let c = this.getGridItemAt(o + 1),
        f = this.resolveColumnByIndex(o);
      (c != null && f != null && f.addListItemAt(c, r), (o += 1));
    }
    let d = 0;
    for (let c = 0; c < this._r37e9b53def5dfd; c++) {
      let f = this.getListItemAt(c);
      f != null &&
        ((f.autoArrangeItems = !0), (f.height = f.visibleRegion.height), (d = Math.max(d, f.height)));
    }
    return ((this._container.height = d), i);
  }
}

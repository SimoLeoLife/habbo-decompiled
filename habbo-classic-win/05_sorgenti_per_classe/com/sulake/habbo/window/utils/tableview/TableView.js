// Extracted from HabboAirLauncher.deobf.js, line 153359.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/tableview/TableView.as
// Obfuscated name: _i2ffec14d4a7361

class a {
  constructor(e, r, t = !1, i = !1) {
    this._parent = r;
    ((this._r46cd05da8ea54b = new UnkClass_3360c5(150, 300, () => {
      this._r83e0ce56ff07df();
    })),
      (this._r5b1555ea499a17 = i),
      (this._container = e.buildFromXML(e.assets.getAssetByName("table_view_xml")?.content)),
      this._parent.addChild(this._container),
      (this._r4f06b74b1fcb5f = this._container.findChildByName("table_titlerow")),
      (this._ra3965f15d152a0 = this._container.findChildByName("splitter")),
      this.tableContents.removeListItem(this._r4f06b74b1fcb5f),
      this.tableContents.removeListItem(this._ra3965f15d152a0),
      (this._ra2fe87bc6e907a = this._r4f06b74b1fcb5f.removeListItemAt(0)),
      (this._rfa4ae16f8bde39 = this.tableItems.removeListItemAt(1)),
      (this._r5b16fa87694d4c = new CellTemplate(this._rfa4ae16f8bde39.removeListItemAt(0))),
      (this._container.width = this._parent.width),
      (this._container.height = this._parent.height),
      this._r3bd7af3f9e10c8(),
      this._r53cd7a4ea0ab9c(),
      this._rcc2ce869b2ec18(),
      t && this._container.setParamFlag(N._r46a9ac2e4c9863, !0),
      this.tableContents.addEventListener(y.const_755, this._r62fd58bd8b5103),
      this.tableItems
        .findChildByTag("_ITEMLIST")
        ?.addEventListener(y.const_362, this._r0b92b71a5b124c));
  }
  static {
    n(this, "TableView");
  }
  static SKIP_SCROLL_RESIZE = 500;
  static LAZY_CHUNKING = 30;
  static LAZY_CHUNKING_MINIMAL = 8;
  static SCROLL_BUFFER = 24;
  static SCROLL_BUFFER_MINIMAL = 2;
  static SCROLLBAR_OFFSET = 21;
  var_3175 = [];
  _disposed = !1;
  _initialized = !1;
  _container;
  _r4f06b74b1fcb5f;
  _ra3965f15d152a0;
  _ra2fe87bc6e907a;
  _rfa4ae16f8bde39;
  _r5b16fa87694d4c;
  var_518 = [];
  _rowModels = [];
  _r49066ba5b997b0 = new Map();
  _canSelect = !1;
  _onRowClickedCallback = null;
  _onRowSelectedCallback = null;
  _onRowHoverCallback = null;
  _onCellEditCallback = null;
  _rffa9dc62d653f4 = !0;
  _r7f9edcfedce410 = !1;
  var_376 = null;
  _r7d54b8b6f0cc30 = null;
  _r66526b0d5ff393 = !1;
  _r46cd05da8ea54b;
  _r563bd9f08d7334 = !1;
  _r5b1555ea499a17 = !1;
  _r7880fde2e16c7f = !1;
  initialize(e, r = !0, t = !0) {
    this._initialized ||
      ((this._canSelect = t),
      (this.var_3175 = []),
      (this._rowModels = []),
      (this._r49066ba5b997b0 = new Map()),
      (this._rffa9dc62d653f4 = r),
      r
        ? (this.tableContents.addListItemAt(this._r4f06b74b1fcb5f, 0),
          this.tableContents.addListItemAt(this._ra3965f15d152a0, 1))
        : (this._r3bd7af3f9e10c8(), this._rcc2ce869b2ec18()),
      this._r176a1413908c0e(e),
      (this._initialized = !0));
  }
  _rb800e4dd98c360(e, r = !1) {
    if (!this._initialized) return;
    if (e.length === 0) {
      this.clear();
      return;
    }
    this._r66526b0d5ff393 = !0;
    let t = this._rowModels.length,
      i = !1,
      s = new Set(),
      o = [];
    for (let f of e) {
      let l = this._r5cc26950f046e2(f);
      l != null ? (l.update(f), s.add(l), o.push(l)) : o.push(null);
    }
    let d = !1,
      c = !1;
    for (let f of this._rowModels)
      s.has(f) ||
        (this.var_376 === f && ((this.var_376 = null), (d = !0)),
        this._r7d54b8b6f0cc30 === f && ((this._r7d54b8b6f0cc30 = null), (c = !0)),
        f.view != null && (this.recycleRowView(f.view), (f.view = null), (this._r563bd9f08d7334 = !0)),
        (i = !0),
        f.dispose());
    this._r49066ba5b997b0 = new Map();
    for (let f = 0; f < e.length; f += 1) {
      let l = e[f],
        b = o[f];
      (b == null && ((b = new TableRowModel(l, f)), (o[f] = b), (i = !0)),
        this._r49066ba5b997b0.set(l.identifier, b),
        b.i !== f && (i = !0));
    }
    if (
      ((this._rowModels = o.filter((f) => f != null)),
      (this._r66526b0d5ff393 = !1),
      (this._r7880fde2e16c7f = this._r7880fde2e16c7f || r),
      i)
    )
      for (let f = 0; f < this._rowModels.length; f += 1) this._rowModels[f].index = f;
    ((i || this._r7880fde2e16c7f) && this._r6f000d94da98cb(),
      t !== this._rowModels.length && this._re5377ca5fde44e(),
      d && this._onRowSelectedCallback?.(null),
      c && this._onRowHoverCallback?.(null));
  }
  _r6f000d94da98cb() {
    this._r83e0ce56ff07df(!0) && this._r46cd05da8ea54b?.trigger();
  }
  setObjects() {
    this.tableItems.var_46 = 0;
  }
  clear() {
    if (!this._initialized) return;
    this._r66526b0d5ff393 = !0;
    let e = this.tableItems.getListItemAt(0),
      r = this.tableItems.getListItemAt(this.tableItems.numListItems - 1);
    (this.tableItems.removeListItems(),
      e != null && ((e.height = 0), this.tableItems.addListItem(e)),
      r != null && ((r.height = 0), this.tableItems.addListItem(r)),
      (this._r66526b0d5ff393 = !1));
    for (let t of this._rowModels)
      (t.view != null && (this.recycleRowView(t.view), (t.view = null)), t.dispose());
    ((this._rowModels = []),
      this._r49066ba5b997b0.clear(),
      this.var_376 != null && ((this.var_376 = null), this._onRowSelectedCallback?.(null)),
      this._r7d54b8b6f0cc30 != null && ((this._r7d54b8b6f0cc30 = null), this._onRowHoverCallback?.(null)),
      this._re5377ca5fde44e());
  }
  _r5158179f7612c9() {
    this._r7880fde2e16c7f = !0;
  }
  _r53cd7a4ea0ab9c() {
    if (this._parent != null) {
      ((this._container.width = this._parent.width),
        (this._r4f06b74b1fcb5f.width = this._rd42e33c6a22970),
        (this._ra3965f15d152a0.width = this._rd42e33c6a22970));
      for (let e = 0; e < this._r4f06b74b1fcb5f.numListItems; e += 1) {
        let r = this._r4f06b74b1fcb5f.getListItemAt(e);
        r != null && (r.width = this._rfe0e3df3d8672f(this.var_518[e].id));
      }
      for (let e of this._rowModels) e.view?._re3963b40ab7a5a();
    }
  }
  _rdedd6bb747dbf8(e) {
    for (let r of this.var_518) if (r.id === e) return r;
    return null;
  }
  _rad1ace3d4ce07c(e) {
    return e == null ? -1 : (this._r5cc26950f046e2(e)?.i ?? -1);
  }
  _r6f19b59a34a0f1(e) {
    return e < 0 || e >= this._rowModels.length ? null : (this._rowModels[e]?.object ?? null);
  }
  _rb01cbbcd6ad779(e, r = !1) {
    if (
      (r && this._onRowClickedCallback?.(e),
      !this._canSelect ||
        (this.var_376 != null && e != null && this.var_376.object === e))
    )
      return;
    let t = !1;
    if (
      (this.var_376 != null &&
        ((this.var_376.selected = !1), (this.var_376 = null), (t = !0)),
      e != null)
    ) {
      let i = this._r5cc26950f046e2(e);
      i != null && ((i.selected = !0), (this.var_376 = i), (t = !0));
    }
    t && this._onRowSelectedCallback?.(this.var_376?.object ?? null);
  }
  _r98937d52f2f3be(e) {
    if (this._r7d54b8b6f0cc30 != null && e != null && this._r7d54b8b6f0cc30.object === e) return;
    let r = !1;
    if (
      (this._r7d54b8b6f0cc30 != null &&
        ((this._r7d54b8b6f0cc30.hovered = !1), (this._r7d54b8b6f0cc30 = null), (r = !0)),
      e != null)
    ) {
      let t = this._r5cc26950f046e2(e);
      t != null && ((t.hovered = !0), (this._r7d54b8b6f0cc30 = t), (r = !0));
    }
    r && this._onRowHoverCallback?.(this._r7d54b8b6f0cc30?.object ?? null);
  }
  _rbadc159da0ce22(e) {
    let r = this._r5cc26950f046e2(e);
    if (r?.view == null) return null;
    let t = new D();
    return (r.view.container.getGlobalRectangle(t), t);
  }
  get selected() {
    return this.var_376?.object ?? null;
  }
  get size() {
    return this._rowModels.length;
  }
  _rb9650a0ccb7cf3(e, r, t) {
    this._onCellEditCallback?.(r, t, e);
  }
  get _rd42e33c6a22970() {
    return this.tableContents.width - (this._r7f9edcfedce410 ? a.SCROLLBAR_OFFSET : 0);
  }
  _rfe0e3df3d8672f(e) {
    return this._rd42e33c6a22970 * (this._rdedd6bb747dbf8(e)?._r1d964ddf55c3e4 ?? 0);
  }
  get columns() {
    return this.var_518;
  }
  get _r22a6bd3fbd66af() {
    return this._rfa4ae16f8bde39;
  }
  get _rc9448b6a46fd6a() {
    return this._r5b16fa87694d4c;
  }
  set _r27f14abfd832a6(e) {
    this._onRowSelectedCallback = e;
  }
  set _r2ec93dbdb64036(e) {
    this._onRowClickedCallback = e;
  }
  set _r18be0eedd62c32(e) {
    this._onRowHoverCallback = e;
  }
  set _r8c425bdeb05a56(e) {
    this._onCellEditCallback = e;
  }
  get _r27085d812e0693() {
    return this._rowModels.length;
  }
  dispose() {
    this._disposed ||
      (this._r46cd05da8ea54b?.dispose(),
      (this._r46cd05da8ea54b = null),
      this.clear(),
      (this._initialized = !1),
      this._container.dispose(),
      (this._parent = null),
      (this._r4f06b74b1fcb5f = null),
      (this._ra3965f15d152a0 = null),
      this._ra2fe87bc6e907a.dispose(),
      (this._ra2fe87bc6e907a = null),
      this._rfa4ae16f8bde39.dispose(),
      (this._rfa4ae16f8bde39 = null),
      (this.var_518 = []),
      (this._onRowHoverCallback = null),
      (this._onRowSelectedCallback = null),
      (this._onRowClickedCallback = null),
      (this._onCellEditCallback = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _r3bd7af3f9e10c8() {
    ((this.tableItems.height =
      this.tableContents.height -
      (this._rffa9dc62d653f4 ? this._r4f06b74b1fcb5f.height + this._ra3965f15d152a0.height : 0)),
      this._r480e75c95b2e48());
  }
  _rcc2ce869b2ec18() {
    (this._rffa9dc62d653f4
      ? ((this.emptyTextContainer.y = this._r4f06b74b1fcb5f.height + this._ra3965f15d152a0.height),
        (this.emptyTextContainer.height = this.tableContents.height - this.emptyTextContainer.y))
      : ((this.emptyTextContainer.y = 0), (this.emptyTextContainer.height = this.tableContents.height)),
      (this.emptyTextContainer.visible = this._rowModels.length === 0));
  }
  _r62fd58bd8b5103 = n((e) => {
    this._r66526b0d5ff393 || (this._r3bd7af3f9e10c8(), this._r6f000d94da98cb());
  }, "_r62fd58bd8b5103");
  _r0b92b71a5b124c = n((e) => {
    this._r66526b0d5ff393 || this._r6f000d94da98cb();
  }, "_r0b92b71a5b124c");
  _r176a1413908c0e(e) {
    this.var_518 = e;
    for (let r of e) {
      let t = this._ra2fe87bc6e907a.clone();
      ((t.text = r._r6b14ca4de3faaf),
        (t.width = this._rfe0e3df3d8672f(r.id)),
        (t.autoSize = r.alignment),
        this._r4f06b74b1fcb5f.addListItem(t));
    }
  }
  _r83e0ce56ff07df = n((e = !1) => {
    !e &&
      this._r7880fde2e16c7f &&
      ((this.tableItems.var_46 = 0),
      (this._r7880fde2e16c7f = !1),
      (this._r563bd9f08d7334 = !0));
    let r = this.tableItems.getListItemAt(0),
      t = this.tableItems.getListItemAt(this.tableItems.numListItems - 1),
      i = this._r00d4d38c43d44f,
      s = this._r95983305e0f4f3,
      o = this._rfa4ae16f8bde39.height,
      d = [];
    r != null && d.push(r);
    let c = i * o,
      f = Math.max(0, this._rowModels.length - 1 - s) * o,
      l =
        this._r563bd9f08d7334 ||
        (this._rowModels.length < a.SKIP_SCROLL_RESIZE &&
          (c !== (r?.height ?? 0) || f !== (t?.height ?? 0)));
    if (l && e) return !0;
    for (let b of this._rowModels)
      this._r27220625f8685f(b, i, s)
        ? (b.view == null && (e || (b.view = this._r7f4586d6ab6e60(b)), (l = !0)),
          !e && b.view != null && d.push(b.view.container))
        : b.view != null && (e || (this.recycleRowView(b.view), (b.view = null)), (l = !0));
    if (e) return l || this._r7880fde2e16c7f;
    if ((t != null && d.push(t), (this._r563bd9f08d7334 = !1), (this._r66526b0d5ff393 = !0), l)) {
      this.tableItems.autoArrangeItems = !1;
      let b = this.tableItems.visibleRegion.height,
        _ = this.tableItems._rbab5041f1931e4.y,
        h = this.tableItems.var_46;
      (this.tableItems.removeListItems(), r != null && (r.height = c), t != null && (t.height = f));
      let p = 0;
      for (let m of d) ((m.y = p), this.tableItems.addListItem(m), (p += m.height));
      (p !== b
        ? p > this.tableItems.height
          ? (this.tableItems.var_46 = _ / (p - this.tableItems.height))
          : (t != null && (t.width = this._rd42e33c6a22970), (this.tableItems.var_46 = 0))
        : (this.tableItems.var_46 = h),
        (this.tableItems.autoArrangeItems = !0),
        this._r480e75c95b2e48());
    }
    return ((this._r66526b0d5ff393 = !1), l);
  }, "_r83e0ce56ff07df");
  _r27220625f8685f(e, r, t) {
    return e.i >= r && e.i <= t;
  }
  get _r00d4d38c43d44f() {
    let e = this._rfa4ae16f8bde39.height,
      t = this.tableItems._rbab5041f1931e4.y,
      i = Math.trunc(t / e),
      s = Math.min(i - 1, this._rowModels.length - this.tableItems.height / e);
    return ((s -= this._rdc34c2777ffc34 + (s % this._re00f68dd61bab9)), Math.max(0, s));
  }
  get _r95983305e0f4f3() {
    let e = this._rfa4ae16f8bde39.height,
      r = this.tableItems._rbab5041f1931e4,
      t = r.y + r.height,
      i = Math.trunc(t / e),
      s = Math.min(i + 1, this._rowModels.length - 1);
    return ((s += this._rdc34c2777ffc34 + this._re00f68dd61bab9 - (s % this._re00f68dd61bab9)), s);
  }
  get _re00f68dd61bab9() {
    return this._r5b1555ea499a17 ? a.LAZY_CHUNKING_MINIMAL : a.LAZY_CHUNKING;
  }
  get _rdc34c2777ffc34() {
    return this._r5b1555ea499a17 ? a.SCROLL_BUFFER : a.SCROLL_BUFFER_MINIMAL;
  }
  recycleRowView(e) {
    (e.recycle(), this.var_3175.push(e));
  }
  _r7f4586d6ab6e60(e) {
    let r;
    return (
      this.var_3175.length > 0
        ? ((r = this.var_3175.pop()), r.reuse(e), r._re3963b40ab7a5a())
        : (r = new X3e(this, e)),
      r
    );
  }
  _re5377ca5fde44e() {
    (this._r480e75c95b2e48(), this._rcc2ce869b2ec18());
  }
  _r480e75c95b2e48() {
    let e = this._r7f9edcfedce410;
    ((this._r7f9edcfedce410 = this.tableItems._rb4a5f64054fcb5),
      e !== this._r7f9edcfedce410 && this._r53cd7a4ea0ab9c());
  }
  _r5cc26950f046e2(e) {
    return this._r49066ba5b997b0.get(e.identifier) ?? null;
  }
  get border() {
    return this._container.findChildByName("table_border");
  }
  get tableContents() {
    return this._container.findChildByName("table_contents");
  }
  get tableItems() {
    return this._container.findChildByName("table_items");
  }
  get emptyTextContainer() {
    return this._container.findChildByName("empty_container");
  }
}

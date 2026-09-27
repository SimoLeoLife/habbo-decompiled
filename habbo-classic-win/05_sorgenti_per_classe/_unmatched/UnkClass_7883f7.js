// Extracted from HabboAirLauncher.deobf.js, line 235950.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7883f7e61fc402

class {
  constructor(e, r, t) {
    this._view = e;
    this.var_605 = r;
    this.var_310 = t;
    (this._view,
      this.var_605 != null && (this.var_605._r884a36eb6fb71b = !1),
      this.var_310 != null && (this._r9a9c3992c50c1e = this.var_310.removeListItemAt(0)));
  }
  static {
    n(this, "UnkClass_7883f7");
  }
  _items = [];
  _r0a744741b643c3 = [];
  var_4945 = 200;
  var_770 = -1;
  _passedItems = [];
  _ref4c37f04751d9 = "";
  _r7418ab6ec82be0 = -1;
  _r9a9c3992c50c1e = null;
  get _r101eb732468810() {
    return this.var_605?._r72acf104e2c444 ?? 0;
  }
  get _re0b698839cb087() {
    return this._passedItems;
  }
  get _r3afa55440b125a() {
    return Math.floor(this._r0a744741b643c3.length / this.var_4945) + 1;
  }
  dispose() {
    ((this._view = null),
      (this.var_605 = null),
      (this.var_310 = null),
      (this._items = []),
      (this._r0a744741b643c3 = []),
      (this._passedItems = []),
      (this._r9a9c3992c50c1e = null));
  }
  _r5ef4d765a273a7() {
    this.var_605 != null &&
      (this.var_605.removeGridItems(), this.var_605._rbb4c26d068856f());
  }
  setFilter(e, r) {
    ((this._ref4c37f04751d9 = (r ?? "").toLowerCase()), (this._r7418ab6ec82be0 = e), this.update());
  }
  _r181fe97e12e0b5(e) {
    this._re4f45c8d54e9b3(e) && this.update();
  }
  _r67be4a14a21599() {
    return (this.var_605?._r72acf104e2c444 ?? 0) === 0
      ? null
      : this.var_605?.getGridItemAt(0);
  }
  _r2a2b5de73dae58(e) {
    ((this._items = e), this.update());
  }
  update() {
    let e = this._items.filter((r) => this._re4f45c8d54e9b3(r));
    if (e.length === this._r0a744741b643c3.length) {
      let r = !1;
      for (let t = 0; t < e.length; t++)
        if (e[t] !== this._r0a744741b643c3[t]) {
          r = !0;
          break;
        }
      if (!r) return;
    }
    ((this._r0a744741b643c3 = e), this.changeToPage(this.var_770, !0), this.updatePaging());
  }
  changeToPage(e, r = !1) {
    if (e > -1 && this.var_770 === e && !r) return;
    (e < 0 && (e = 0),
      (this.var_770 = Math.max(0, Math.min(e, this._r3afa55440b125a - 1))),
      (this._passedItems = []),
      this._r5ef4d765a273a7());
    let t = this.var_770 * this.var_4945,
      i = Math.min(t + this.var_4945, this._r0a744741b643c3.length);
    for (let s = t; s < i; s++) {
      let o = this._r0a744741b643c3[s],
        d = o?.window;
      o != null && d != null && (this.var_605?.addGridItem(d), this._passedItems.push(o));
    }
  }
  updatePaging() {
    if (this.var_310 == null || this._r9a9c3992c50c1e == null) return;
    let e = this._r3afa55440b125a;
    if (
      ((this.var_310.visible = e > 1),
      (this.var_770 = Math.max(0, Math.min(this.var_770, e - 1))),
      e !== this.var_310.numListItems)
    ) {
      for (let r = 0; r < this.var_310.numListItems; r++) {
        let t = this.var_310.getListItemAt(r);
        (t?.removeEventListener(u.CLICK, this._r0ef7621d7e9174),
          t?.removeEventListener(u.OVER, this._r0ef7621d7e9174),
          t?.removeEventListener(u.OUT, this._r0ef7621d7e9174));
      }
      this.var_310.destroyListItems();
      for (let r = 0; r < e; r++) {
        let t = this._r9a9c3992c50c1e.clone();
        t != null &&
          (t.addEventListener(u.CLICK, this._r0ef7621d7e9174),
          t.addEventListener(u.OVER, this._r0ef7621d7e9174),
          t.addEventListener(u.OUT, this._r0ef7621d7e9174),
          (t.id = r),
          (t.name = `page_${r}`),
          this.var_310.addListItem(t));
      }
    }
    for (let r = 0; r < e; r++) {
      let i = this.var_310.getListItemAt(r)?.findChildByTag("PAGE");
      i != null &&
        ((i.caption = r.toString()),
        r === this.var_770
          ? ((i.underline = !0), (i.textColor = 16711680))
          : ((i.underline = !1), (i.textColor = 0)));
    }
  }
  _r0ef7621d7e9174 = n((...e) => {
    let r = e[0],
      t = r.window,
      i = t?.id ?? 0,
      s = t?.findChildByTag("PAGE");
    switch (r.type) {
      case u.CLICK:
        (this.changeToPage(i), this.updatePaging());
        break;
      case u.OVER:
        s != null && (s.textColor = 16711680);
        break;
      case u.OUT:
        s != null && i !== this.var_770 && (s.textColor = 0);
        break;
    }
  }, "_r0ef7621d7e9174");
  _re4f45c8d54e9b3(e) {
    return !(
      e?.name == null ||
      (this._ref4c37f04751d9.length > 0 && !e.name.toLowerCase().includes(this._ref4c37f04751d9)) ||
      (this._r7418ab6ec82be0 !== -1 && e.renderableItem.productTypeId !== this._r7418ab6ec82be0)
    );
  }
}

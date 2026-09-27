// Estratto da HabboAirLauncher.deobf.js, riga 234646.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/badges/BadgeGridView.as
// Nome offuscato: _i40358324654c2d

class a {
  constructor(e, r, t) {
    this._view = e;
    this.var_605 = r;
    this.var_310 = t;
    (this.var_605 != null && (this.var_605._r884a36eb6fb71b = !1),
      this.var_310 != null && (this._r9a9c3992c50c1e = this.var_310.removeListItemAt(0)));
  }
  static {
    n(this, "BadgeGridView");
  }
  static _r149109d8bb42b7 = 0;
  static FILTER_NORMAL_BADGES = 1;
  static FILTER_ACHIEVEMENTS = 2;
  static _r537d457f3b31d5 = -1;
  static const_743 = -2;
  static ACHIEVEMENT_PREFIX = "ACH_";
  var_4945 = 200;
  _r5b98024baeadbb = n((e) => this._r0ef7621d7e9174(e), "_r5b98024baeadbb");
  _items = [];
  _r0a744741b643c3 = [];
  _r9a9c3992c50c1e = null;
  var_770 = -1;
  _passedItems = [];
  var_150 = "";
  var_4148 = a._r149109d8bb42b7;
  var_3854 = a._r537d457f3b31d5;
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
    ((this.var_605 = null),
      (this._items = []),
      (this._r0a744741b643c3 = []),
      (this._passedItems = []));
  }
  _r5ef4d765a273a7() {
    this.var_605 != null &&
      (this.var_605.removeGridItems(), this.var_605._rbb4c26d068856f());
  }
  setFilter(e, r, t) {
    ((this.var_4148 = e),
      (this.var_3854 = r),
      (this.var_150 = t == null ? "" : t.toLowerCase()),
      this.update());
  }
  _r181fe97e12e0b5(e) {
    this._re4f45c8d54e9b3(e) && this.update();
  }
  _r67be4a14a21599() {
    return this.var_605 == null || this.var_605._r72acf104e2c444 === 0
      ? null
      : this.var_605.getGridItemAt(0);
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
    if (
      (e > -1 && this.var_770 === e && !r) ||
      (e <= -1 && (e = 0),
      (this.var_770 = Math.max(0, Math.min(e, this._r3afa55440b125a - 1))),
      (this._passedItems = []),
      this._r5ef4d765a273a7(),
      this.var_605 == null)
    )
      return;
    let t = this.var_770 * this.var_4945,
      i = Math.min(t + this.var_4945, this._r0a744741b643c3.length);
    for (let s = t; s < i; s++) {
      let o = this._r0a744741b643c3[s],
        d = o?.window;
      o != null && d != null && (this.var_605.addGridItem(d), this._passedItems.push(o));
    }
  }
  updatePaging() {
    if (this.var_310 == null) return;
    let e = this._r3afa55440b125a;
    if (
      ((this.var_310.visible = e > 1),
      (this.var_770 = Math.max(0, Math.min(this.var_770, e - 1))),
      e !== this.var_310.numListItems)
    ) {
      for (let r = 0; r < this.var_310.numListItems; r++) {
        let t = this.var_310.getListItemAt(r);
        t != null &&
          (t.removeEventListener(u.CLICK, this._r5b98024baeadbb),
          t.removeEventListener(u.OVER, this._r5b98024baeadbb),
          t.removeEventListener(u.OUT, this._r5b98024baeadbb));
      }
      this.var_310.destroyListItems();
      for (let r = 0; r < e; r++) {
        let t = this._r9a9c3992c50c1e?.clone();
        t != null &&
          (t.addEventListener(u.CLICK, this._r5b98024baeadbb),
          t.addEventListener(u.OVER, this._r5b98024baeadbb),
          t.addEventListener(u.OUT, this._r5b98024baeadbb),
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
  _r0ef7621d7e9174(e) {
    let r = e.window?.id ?? 0,
      t = e.target?.findChildByTag("PAGE");
    if (t != null)
      switch (e.type) {
        case u.CLICK:
          (this.changeToPage(r), this.updatePaging());
          break;
        case u.OVER:
          t.textColor = 16711680;
          break;
        case u.OUT:
          r !== this.var_770 && (t.textColor = 0);
          break;
      }
  }
  _re4f45c8d54e9b3(e) {
    if (e == null || e.badgeName == null || e.badgeDescription == null) return !1;
    let r = e.badgeId != null && e.badgeId.indexOf(a.ACHIEVEMENT_PREFIX) === 0;
    if (
      (this.var_4148 === a.FILTER_NORMAL_BADGES && r) ||
      (this.var_4148 === a.FILTER_ACHIEVEMENTS && !r)
    )
      return !1;
    if (this.var_3854 === a.const_743) {
      if (this._view?._rd6235c3b063492(e.badgeRarityId)) return !1;
    } else if (this.var_3854 !== a._r537d457f3b31d5 && e.badgeRarityId !== this.var_3854)
      return !1;
    if (this.var_150.length > 0) {
      let t = e.badgeName.toLowerCase(),
        i = e.badgeDescription.toLowerCase();
      if (!t.includes(this.var_150) && !i.includes(this.var_150)) return !1;
    }
    return !0;
  }
}

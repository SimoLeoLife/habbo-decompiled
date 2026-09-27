// Extracted from HabboAirLauncher.deobf.js, line 184089.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/CatalogNavigator.as
// Obfuscated name: _i0ea404ab16d5ed

class a {
  constructor(e, r, t) {
    this._catalog = e;
    this._container = r;
    this._r8873f92b5650f9 = t;
    let i = this._container?.findChildByName("navigationList");
    if (i == null) throw new Error("CatalogNavigator requires navigationList.");
    ((this.var_122 = i),
      (this._r31d89eb327d625 = this.var_122.removeListItem(
        this.var_122.getListItemByName(`${this._r8873f92b5650f9.toLowerCase()}_topitem_template`),
      )),
      (this._r103c718bcbc3c7 = this.var_122.removeListItem(
        this.var_122.getListItemByName(`${this._r8873f92b5650f9.toLowerCase()}_subitem_template`),
      )),
      (this._r4fc928bcf7913f = this.var_122.removeListItem(
        this.var_122.getListItemByName(`${this._r8873f92b5650f9.toLowerCase()}_list_template`),
      )),
      (this._re842dacc40aa7f = this._container?.findChildByName("tab_context")),
      this._re842dacc40aa7f != null &&
        (this._catalog?.useNonTabbedCatalog(this._r8873f92b5650f9)
          ? (this._re842dacc40aa7f.visible = !1)
          : (this._r73c027df1ea656 = new TopViewSelector(this, this._re842dacc40aa7f))));
  }
  static {
    n(this, "CatalogNavigator");
  }
  static DUMMY_PAGE_ID_FOR_OFFER_SEARCH = -12345678;
  _re842dacc40aa7f;
  var_122;
  _index = null;
  _r7f6d765a58ac9c = [];
  _r0973af74f97618 = new Map();
  _r31d89eb327d625;
  _r103c718bcbc3c7;
  _r4fc928bcf7913f;
  _r73c027df1ea656 = null;
  get catalog() {
    if (this._catalog == null) throw new Error("CatalogNavigator catalog is not available.");
    return this._catalog;
  }
  get initialized() {
    return this._index != null;
  }
  get listTemplate() {
    return this._r4fc928bcf7913f;
  }
  get isDeepHierarchy() {
    return this._catalog?.getBoolean("catalog.deep.hierarchy") ?? !1;
  }
  dispose() {
    (this._index?.dispose(),
      (this._index = null),
      this._r0973af74f97618.clear(),
      (this._r7f6d765a58ac9c = []),
      (this._catalog = null),
      (this._container = null),
      (this._re842dacc40aa7f = null),
      (this._r31d89eb327d625 = null),
      (this._r103c718bcbc3c7 = null),
      (this._r4fc928bcf7913f = null),
      (this._r73c027df1ea656 = null));
  }
  _ra88276d599f936(e) {
    (this._index?.dispose(),
      this._r0973af74f97618.clear(),
      (this._index = this._reea7a53728dfff(e, 0, null)));
  }
  _rabec38a3e283e3() {
    if (this._index != null) {
      if (
        (this.var_122.removeListItems(),
        this._r73c027df1ea656?.clearTabs(),
        this._catalog?.useNonTabbedCatalog(this._r8873f92b5650f9))
      )
        this._r73c027df1ea656 == null && this._r702ab57e143055(this._index.children[0] ?? null);
      else
        for (let e of this._index.children)
          e.visible && e instanceof Lm && this._r73c027df1ea656?._rc6654b9a9673e2(e);
      this._r73c027df1ea656?.selectTabByIndex(0);
    }
  }
  _r702ab57e143055(e) {
    if (this._index != null && (this.var_122.removeListItems(), !(e == null || !e.visible)))
      if (e.children.length > 0) {
        for (let t of e.children) t.visible && t instanceof Lm && t._r8a6680301dc7fe(this.var_122);
        let r = this._r151105236e5720(e);
        if (r.length > 0)
          for (let t = 0; t < r.length; t++) {
            let i = r[t];
            (t === r.length - 1 || this._r7f6d765a58ac9c.indexOf(i) === -1) && this._r7e72b123bb13a9(i);
          }
        else this.openCatalogPage(e);
      } else this.openCatalogPage(e);
  }
  _r7e72b123bb13a9(e) {
    let r = this._r7f6d765a58ac9c.indexOf(e) >= 0,
      t = e.isOpen,
      i = [];
    for (let s of this._r7f6d765a58ac9c) (s.deactivate(), s.depth < e.depth ? i.push(s) : s.close());
    if (
      ((this._r7f6d765a58ac9c = i),
      e.activate(),
      r && t ? e.close() : e.open(),
      this._r7f6d765a58ac9c.indexOf(e) < 0 && this._r7f6d765a58ac9c.push(e),
      e._rdf76326858d5b4)
    ) {
      (e.parent instanceof Lm ? e.parent : null)?._r108d2c8adcf02b();
      let o = 0,
        d = 0;
      for (let c = 0; c < this.var_122.numListItems; c++)
        this.var_122.getListItemAt(c)?.visible &&
          (d += this.var_122.getListItemAt(c)?.height ?? 0);
      for (let c of this._r7f6d765a58ac9c) o += c.offsetV;
      o - this.var_122.height > 0 && d > 0 && (this.var_122.var_46 = o / d);
    }
    e.pageId > -1 && this.openCatalogPage(e);
  }
  openPage(e) {
    let r = this.getNodeByName(e);
    r != null && r.visible
      ? (this._catalog?._r7a349a60c592d2(r.pageId, -1, this._r8873f92b5650f9),
        this.openNavigatorAtNode(r))
      : (r != null &&
          !r.visible &&
          this._catalog?.events.dispatchEvent?.(new CatalogEvent(CatalogEvent.CATALOG_INVISIBLE_PAGE_VISITED)),
        this.loadFrontPage());
  }
  _reb4d5284e2e2d6(e, r) {
    if (!this.initialized) {
      this._catalog?._rb54f79cedd3062(e, r, this._r8873f92b5650f9);
      return;
    }
    let t = null;
    (e === a.DUMMY_PAGE_ID_FOR_OFFER_SEARCH
      ? (t = this._r369c0978d14dff(r, !0)?.[0] ?? null)
      : (t = this.currentCatalogNavigator(e)),
      t != null &&
        (this._catalog?._r7a349a60c592d2(t.pageId, r, this._r8873f92b5650f9),
        this.openNavigatorAtNode(t)));
  }
  _r8494bdc8d8729a(e) {
    if (!this.initialized) {
      this._catalog?._rb54f79cedd3062(a.DUMMY_PAGE_ID_FOR_OFFER_SEARCH, e, this._r8873f92b5650f9);
      return;
    }
    let r = this._r369c0978d14dff(e)?.[0] ?? null;
    r != null &&
      (this._catalog?._r7a349a60c592d2(r.pageId, e, this._r8873f92b5650f9),
      this.openNavigatorAtNode(r));
  }
  _rd484beef5dd276() {
    for (let e of this._r7f6d765a58ac9c) (e.deactivate(), e.close());
    this._r7f6d765a58ac9c = [];
  }
  filter(e, r, t = null) {
    if (this._index == null) return;
    let i = new Map();
    (a.markSearchNodes(e, r, t, this._index, i),
      this._rd484beef5dd276(),
      this.var_122.removeListItems(),
      this._r3b22b38f612d2f(this._index, i, 1));
  }
  loadFrontPage() {
    if (this._index == null) return;
    let e = this._r82887670c8e415(this._index);
    e != null && this._r702ab57e143055(e);
  }
  _r369c0978d14dff(e, r = !1) {
    let t = this._r0973af74f97618.get(e) ?? null;
    if (t == null) return null;
    if (!r) return t;
    let i = t.filter((s) => s.visible);
    return i.length > 0 ? i : null;
  }
  getNodeByName(e) {
    return this._index != null ? this._ree50d59315cc29(e, this._index) : null;
  }
  _r9da27393a02c26(e) {
    return this._index != null ? this._ree50d59315cc29(e, this._index) : null;
  }
  currentCatalogNavigator(e, r = null) {
    let t = r ?? this._index;
    if (t == null) return null;
    if (t.pageId === e && t !== this._index) return t;
    for (let i of t.children) {
      let s = this.currentCatalogNavigator(e, i);
      if (s != null) return s;
    }
    return null;
  }
  getItemTemplate(e) {
    return this.isDeepHierarchy
      ? e > 2
        ? this._r103c718bcbc3c7
        : this._r31d89eb327d625
      : e === 1
        ? this._r31d89eb327d625
        : this._r103c718bcbc3c7;
  }
  _r151105236e5720(e) {
    for (let r of e.children)
      if (r.visible) {
        if (r.pageId > -1) return [r];
        if (r._rdf76326858d5b4) {
          let t = this._r151105236e5720(r);
          if (t.length > 0) return (t.unshift(r), t);
        }
      }
    return [];
  }
  openCategoryForNode(e) {
    let r = e.parent;
    for (; r != null && r.parent != null && r.parent.pageName !== "root";) r = r.parent;
    if (this._r73c027df1ea656 != null && r?.parent != null) {
      let t = r.parent.children.indexOf(r);
      this._r73c027df1ea656.selectTabByIndex(t);
    }
    return (this._r702ab57e143055(r), r ?? e);
  }
  openCatalogPage(e) {
    (this._catalog?._r7a349a60c592d2(e.pageId, -1, this._r8873f92b5650f9),
      this._catalog?.events.dispatchEvent?.(new vj(e.pageId, e.localization)));
  }
  openNavigatorAtNode(e) {
    this._rd484beef5dd276();
    let r = e.parent;
    for (; r != null && r.parent != null;) (r.open(), (r = r.parent));
    (this.openCategoryForNode(e), this._r7e72b123bb13a9(e));
  }
  _r82887670c8e415(e) {
    if (e.visible && e !== this._index) return e;
    for (let r of e.children) {
      let t = this._r82887670c8e415(r);
      if (t != null) return t;
    }
    return null;
  }
  _reea7a53728dfff(e, r, t) {
    let i = e.visible ? new Lm(this, e, r, t) : new wz(this, e, r, t);
    for (let s of i.offerIds) {
      let o = this._r0973af74f97618.get(s) ?? [];
      (o.push(i), this._r0973af74f97618.set(s, o));
    }
    for (let s of e.children) i.addChild(this._reea7a53728dfff(s, r + 1, i));
    return i;
  }
  _ree50d59315cc29(e, r) {
    if (r.pageName === e && r !== this._index) return r;
    for (let t of r.children) {
      let i = this._ree50d59315cc29(e, t);
      if (i != null) return i;
    }
    return null;
  }
  _r3b22b38f612d2f(e, r, t) {
    for (let i of e.children)
      i.visible && r.get(i) === !0 && i instanceof Lm
        ? (i._r53143082f18ea9(this.var_122, t + 1), this._r3b22b38f612d2f(i, r, t + 1))
        : this._r3b22b38f612d2f(i, r, t);
  }
  static markSearchNodes(e, r, t, i, s) {
    if (i.visible && i.pageId > 0 && a.isSearchMatch(e, r, t, i))
      return (a.includeVisibleSubtree(i, s), !0);
    let o = !1;
    for (let d of i.children) a.markSearchNodes(e, r, t, d, s) && (o = !0);
    return (i.visible && i.pageId > 0 && o && s.set(i, !0), o);
  }
  static includeVisibleSubtree(e, r) {
    e.visible && e.pageId > 0 && r.set(e, !0);
    for (let t of e.children) a.includeVisibleSubtree(t, r);
  }
  static isSearchMatch(e, r, t, i) {
    if (t?.get(i.pageId) === !0) return !0;
    let s = [i.pageName, i.localization]
      .join(" ")
      .toLowerCase()
      .replace(/[\s_-]+/gi, "");
    if (s.indexOf(e) > -1) return !0;
    for (let o of r) if (s.indexOf(o) >= 0) return !0;
    return !1;
  }
}

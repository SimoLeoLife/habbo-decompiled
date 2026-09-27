// Estratto da HabboAirLauncher.deobf.js, riga 260169.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/results/BlockResultsView.as
// Nome offuscato: _i60e483118640fb

class a {
  static {
    n(this, "BlockResultsView");
  }
  static HOT_ROOMS_SEARCH_CODE = "hot";
  static POPULAR_ROOMS_SEARCH_CODE = "popular";
  _navigator;
  _itemList = null;
  guestRooms = null;
  _r7157ee2ada47bc = new globalThis.Map();
  _r9a63a703d4f527 = new globalThis.Map();
  _rf7d287de5b9075 = new globalThis.Map();
  constructor(e) {
    this._navigator = e;
  }
  get itemList() {
    return this._itemList;
  }
  set itemList(e) {
    ((this._itemList = e), (this._itemList._re9172ef75e4fbc = !0));
  }
  set _r6009cb294d3636(e) {
    this.guestRooms = e;
  }
  displayCurrentResults() {
    if (!this._navigator._r863f575e329672 || !this._itemList || !this.guestRooms) return;
    if (
      ((this._r9a63a703d4f527 = new globalThis.Map()),
      (this._r7157ee2ada47bc = new globalThis.Map()),
      (this._rf7d287de5b9075 = new globalThis.Map()),
      this._itemList.destroyListItems(),
      this._navigator._r863f575e329672._r982d2da6f7e52d.blocks.length === 0)
    ) {
      this._itemList.addListItem(this.guestRooms.getNoResultsELement());
      return;
    }
    let e = this._navigator._r863f575e329672._r982d2da6f7e52d;
    this.currentResults(e);
    for (let r = 0; r < e.blocks.length; r++) {
      let t = e.blocks[r],
        i = this.renderCurrentResultsBlock(
          r,
          (!this.isMinimized(t.searchCode) || this.isSingleBlock(e)) && !t.forceClosed,
        );
      ((i.id = r),
        this._itemList.addListItem(i),
        this._r9a63a703d4f527.set(r, i),
        this._r7157ee2ada47bc.set(r, t.searchCode),
        this._rf7d287de5b9075.set(r, t.viewMode));
    }
    this._itemList.arrangeListItems();
  }
  onCategoryShowMoreClicked(e) {
    let r = e.window,
      t = r ? this._r7157ee2ada47bc.get(r.id) : null;
    !t ||
      !this._navigator._r863f575e329672 ||
      (this._navigator.performSearch(t, this._navigator._r863f575e329672._r9c1a4c7a359c22),
      this._navigator.trackEventLog(
        "browse.expandsearch",
        "Results",
        V1.getEventLogExtraStringFromSearch(t, this._navigator._r863f575e329672._r9c1a4c7a359c22),
      ));
  }
  _re0b8db3de22f58(e) {
    this._navigator.goBack();
  }
  onCategoryCollapseClicked(e) {
    let r = e.window,
      t = r ? this._r7157ee2ada47bc.get(r.id) : null;
    !r ||
      !t ||
      !this._navigator._r863f575e329672 ||
      (this._navigator._rb7aa5df54dedd5(t),
      this._navigator._r126d1d667eed47.push(t),
      this._r5485c527d75d11(r.id, !1),
      this._navigator.trackEventLog(
        "browse.collapsecategory",
        "Results",
        V1.getEventLogExtraStringFromSearch(t, this._navigator._r863f575e329672._r9c1a4c7a359c22),
      ));
  }
  onCategoryExpandClicked(e) {
    let r = e.window,
      t = r ? this._r7157ee2ada47bc.get(r.id) : null;
    !r ||
      !t ||
      !this._navigator._r863f575e329672 ||
      (this._navigator._rec774b9a9ac62d(t),
      this._navigator._r126d1d667eed47.splice(this._navigator._r126d1d667eed47.indexOf(t), 1),
      this._r5485c527d75d11(r.id, !0),
      this._navigator.trackEventLog(
        "browse.uncollapsecategory",
        "Results",
        V1.getEventLogExtraStringFromSearch(t, this._navigator._r863f575e329672._r9c1a4c7a359c22),
      ));
  }
  _re1c2eae06554b4(e) {
    let r = e.window,
      t = r ? this._r7157ee2ada47bc.get(r.id) : null;
    t &&
      this._navigator._r863f575e329672 &&
      this._navigator.addSavedSearch(t, this._navigator._r863f575e329672._r9c1a4c7a359c22);
  }
  _rfe1f6e8a0106aa(e) {
    let r = e.window,
      t = r ? this._r7157ee2ada47bc.get(r.id) : null,
      i = r ? this._rf7d287de5b9075.get(r.id) : null;
    if (!r || !t || i == null) return;
    let s = this._r939aa86ef4d047(i);
    (this._navigator.toggleSearchCodeViewMode(t, s),
      this._navigator._r863f575e329672 &&
        (this._navigator._r863f575e329672._r982d2da6f7e52d.blocks[r.id].viewMode = s),
      this._r5485c527d75d11(r.id, !0),
      this._rf7d287de5b9075.set(r.id, s));
  }
  get _r2335bd29bd1ba9() {
    return this._itemList?.width ?? 0;
  }
  _r939aa86ef4d047(e) {
    return e === _i3fbb457a8e41b2._r038bfe744af0bc ? _i3fbb457a8e41b2._r1c7674a28521d4 : _i3fbb457a8e41b2._r038bfe744af0bc;
  }
  isMinimized(e) {
    return this._navigator._r126d1d667eed47.indexOf(e) !== -1;
  }
  isSingleBlock(e) {
    return e.blocks.length === 1;
  }
  currentResults(e) {
    if (e.var_485 !== xd.HOTEL_VIEW_CODE) return;
    let r = this._r8005bd66c25256(e, a.HOT_ROOMS_SEARCH_CODE);
    (this.setMinimized(a.HOT_ROOMS_SEARCH_CODE, !r),
      this._r8005bd66c25256(e, a.POPULAR_ROOMS_SEARCH_CODE) && this.setMinimized(a.POPULAR_ROOMS_SEARCH_CODE, r));
  }
  _r8005bd66c25256(e, r) {
    for (let t of e.blocks) if (t.searchCode === r) return !0;
    return !1;
  }
  setMinimized(e, r) {
    let t = this._navigator._r126d1d667eed47.indexOf(e);
    for (; t !== -1;)
      (this._navigator._r126d1d667eed47.splice(t, 1),
        (t = this._navigator._r126d1d667eed47.indexOf(e)));
    r && this._navigator._r126d1d667eed47.push(e);
  }
  renderCurrentResultsBlock(e, r) {
    if (!this.guestRooms || !this._navigator._r863f575e329672)
      throw new Error("CategoryElementFactory and current results are required before rendering.");
    let t = this._navigator._r863f575e329672._r982d2da6f7e52d.blocks[e],
      i = t.text === "" ? `\${navigator.searchcode.title.${t.searchCode}}` : t.text;
    if (r) {
      let s =
        !this._navigator.sessionData.isPerkAllowed(class_2156.NAVIGATOR_ROOM_THUMBNAIL_CAMERA) &&
        this._navigator._r863f575e329672.var_485 !== xd.OFFICIAL_VIEW_CODE
          ? _i3fbb457a8e41b2._r038bfe744af0bc
          : t.viewMode;
      return this.guestRooms.getOpenCategoryElement(t.actionAllowed, i, e, t.var_1839, s);
    }
    return this.guestRooms.getCollapsedCategoryElement(i, e, t.var_1839);
  }
  _r5485c527d75d11(e, r) {
    if (!this._itemList) return;
    let t = this._r9a63a703d4f527.get(e);
    if (!t) return;
    let i = this._itemList.getListItemIndex(t);
    this._itemList.removeListItemAt(i);
    let s = this.renderCurrentResultsBlock(e, r);
    ((s.id = e), this._itemList.addListItemAt(s, i), this._r9a63a703d4f527.set(e, s));
  }
}

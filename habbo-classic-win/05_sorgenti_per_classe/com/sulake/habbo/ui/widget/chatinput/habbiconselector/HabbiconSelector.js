// Extracted from HabboAirLauncher.deobf.js, line 310667.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chatinput/habbiconselector/HabbiconSelector.as
// Obfuscated name: _ib6eee109c4c5b5

class a {
  constructor(e, r, t) {
    this.var_159 = e;
    this._anchor = r;
    this.var_3092 = t;
    this.var_63 = e.widget._re5ac22f3053d74?._r95cd89d9fe7aac ?? null;
    let i = e.widget.assets;
    ((this._window = e.widget.windowManager.buildFromXML(
      i.getAssetByName("habbiconselector_menu_xml").content,
    )),
      (this._window.visible = !1),
      this.var_3092.addChild(this._window),
      (this.var_303 = this._window.findChildByName("habbicon_section_list")),
      (this._rd31f5922d1faeb = this.var_303.removeListItem(
        this.var_303.getListItemByName("habbicon_section_template"),
      )),
      (this.var_316 = this._window.findChildByName("habbicon_search_input")),
      (this.onSearchPlaceholderDown = this._window.findChildByName("habbicon_search_placeholder")),
      (this.onSearchClearClicked = this._window.findChildByName("habbicon_search_clear_button")),
      (this._racc2ce21d7abb6 = this._window.findChildByName("habbicon_open_hub_button")),
      (this._raa10262f0886cd = this._window.findChildByName("empty_view")),
      this.var_316?.addEventListener(y.WINDOW_EVENT_CHANGE, this._r01cd0c41519609),
      this.var_316?.addEventListener(sr.const_1081, this.var_1343),
      this.onSearchPlaceholderDown?.addEventListener(u.DOWN, this.var_1208),
      this.onSearchClearClicked?.addEventListener(u.CLICK, this.var_1940),
      this._racc2ce21d7abb6?.addEventListener(u.CLICK, this._rb9bea1c0242597),
      this.var_63?.addEventListener(Mt.const_1213, this._r8de45c6f1d5f74),
      this.var_63?.addEventListener(Mt.SHOP_DATA_UPDATED, this._r8de45c6f1d5f74),
      this.var_63?.addEventListener(Mt.RECENT_HABBICONS_UPDATED, this._r46d47626c5f4a8),
      this.setSearchState(!1));
  }
  static {
    n(this, "HabbiconSelector");
  }
  static SCREEN_LEFT_BORDER = 92;
  static CHAT_BAR_POPUP_OFFSET = 55;
  static MENU_MIN_HEIGHT = 91;
  static MENU_MAX_HEIGHT = 292;
  static TOP_BAR_HEIGHT = 42;
  static BOTTOM_PADDING = 6;
  static GRID_COLUMNS = 5;
  static SLOT_SIZE = 42;
  static SLOT_SPACING = 2;
  static SLOT_FILLED_COLOR = 4280229663;
  static SLOT_EMPTY_COLOR = 4281611316;
  static SLOT_FILLED_HOVER_COLOR = 4280953386;
  static RECENT_LIMIT = 10;
  static SECTION_FAVORITES = "favorites";
  static const_430 = "recent";
  static const_232 = "collection";
  static SECTION_SEARCH = "search";
  var_63;
  _window;
  var_303;
  _rd31f5922d1faeb;
  var_316;
  onSearchPlaceholderDown;
  onSearchClearClicked;
  _racc2ce21d7abb6;
  _raa10262f0886cd;
  var_170 = [];
  _ownedSearchEntries = [];
  var_1287 = new Map();
  var_811 = [];
  _rf2aed57d1aa692 = new Map();
  _rd6230e6a50e4ec = new Map();
  _ra5e17c7134cfba = !0;
  var_449 = !0;
  _rbaf04288160464 = !1;
  _ra2a319ded73e3f = null;
  dispose() {
    (this.var_63?.removeEventListener(Mt.const_1213, this._r8de45c6f1d5f74),
      this.var_63?.removeEventListener(Mt.SHOP_DATA_UPDATED, this._r8de45c6f1d5f74),
      this.var_63?.removeEventListener(Mt.RECENT_HABBICONS_UPDATED, this._r46d47626c5f4a8),
      (this.var_63 = null),
      this.var_316?.removeEventListener(y.WINDOW_EVENT_CHANGE, this._r01cd0c41519609),
      this.var_316?.removeEventListener(sr.const_1081, this.var_1343),
      (this.var_316 = null),
      this.onSearchPlaceholderDown?.removeEventListener(u.DOWN, this.var_1208),
      (this.onSearchPlaceholderDown = null),
      this.onSearchClearClicked?.removeEventListener(u.CLICK, this.var_1940),
      (this.onSearchClearClicked = null),
      this._racc2ce21d7abb6?.removeEventListener(u.CLICK, this._rb9bea1c0242597),
      (this._racc2ce21d7abb6 = null),
      this.clearSections(),
      this._window?.dispose(),
      (this._window = null),
      (this.var_303 = null),
      (this._rd31f5922d1faeb = null),
      (this._ownedSearchEntries = []),
      this.var_1287.clear(),
      (this._anchor = null),
      (this.var_3092 = null),
      (this.var_159 = null));
  }
  get disposed() {
    return this._window == null;
  }
  get visible() {
    return this._window?.visible ?? !1;
  }
  toggle() {
    if (this._window != null) {
      if (this._window.visible) {
        this.hide();
        return;
      }
      ((this._window.visible = !0),
        this._window.visible &&
          (this._r5ec33622fa22bb(),
          this._r82481939a0edc0(),
          this._rde40e4baa8bf4a(),
          this._r5e6e0d6ded93e8()));
    }
  }
  hide(e = !0) {
    this._window?.visible &&
      ((this._window.visible = !1),
      e &&
        this.var_63 != null &&
        (this.var_63._r0a5fa07606baa3(), this._r2a5c8fecde1558()));
  }
  _rba1cd323364faa(e) {
    return a.isWindowInTree(e, this._window);
  }
  _r5e6e0d6ded93e8() {
    this.var_316?.focus();
  }
  _rde40e4baa8bf4a() {
    if (!this._window?.visible || this._anchor == null || this._window.parent == null)
      return;
    let e = new D();
    this._anchor.getGlobalRectangle(e);
    let r = this._window.parent;
    ((r.x = e.x), (r.y = e.bottom - a.CHAT_BAR_POPUP_OFFSET - this._window.height));
    let t = new E();
    (r.getGlobalPosition(t),
      t.x < a.SCREEN_LEFT_BORDER && (r.x += a.SCREEN_LEFT_BORDER - t.x),
      r.y < 0 && (r.y = 0));
  }
  _r8de45c6f1d5f74 = n((e) => {
    (this._r983c31b7cedde8(), this.visible && (this._r82481939a0edc0(), this._rde40e4baa8bf4a()));
  }, "_r8de45c6f1d5f74");
  _r46d47626c5f4a8 = n((e) => {
    if (!this._r7f8b7e8a2fb67b(e.habbiconId)) return;
    if (this.visible) {
      this._rbaf04288160464 = !0;
      return;
    }
    if (this._ra5e17c7134cfba) return;
    let r = this.recentSectionIndex();
    if (this.refreshRecentSectionState()) {
      if (!this.visible || this.normalizedQuery().length > 0) {
        this.var_449 = !0;
        return;
      }
      (this._r81ff000331b107(r), this._rde40e4baa8bf4a());
    }
  }, "_r46d47626c5f4a8");
  _r5ec33622fa22bb() {
    this._rbaf04288160464 &&
      ((this._rbaf04288160464 = !1),
      !this._ra5e17c7134cfba && this.refreshRecentSectionState() && (this.var_449 = !0));
  }
  _r983c31b7cedde8() {
    ((this._ra5e17c7134cfba = !0), (this.var_449 = !0));
  }
  _r2a5c8fecde1558() {
    this.var_449 = !0;
  }
  _r82481939a0edc0() {
    let e = this.normalizedQuery();
    if (
      (this._ra2a319ded73e3f !== e && (this.var_449 = !0),
      !this._ra5e17c7134cfba && !this.var_449)
    ) {
      this.setSearchState(e.length > 0);
      return;
    }
    (this._ra5e17c7134cfba && (this.refreshSections(), (this._ra5e17c7134cfba = !1)),
      this.refresh(e),
      (this._ra2a319ded73e3f = e),
      (this.var_449 = !1));
  }
  refreshSections() {
    let e = [];
    if (
      ((this.var_170 = []),
      (this._ownedSearchEntries = []),
      (this.var_1287 = new Map()),
      this.var_63 == null)
    )
      return;
    this._r2b6cd1a9eac11a();
    for (let t of this.var_63._rb89e3e34d91de4) {
      let i = this.createEntry(t);
      i != null &&
        (this.var_1287.set(i.habbiconId, i),
        this._ownedSearchEntries.push(i),
        i.favorite && e.push(i));
    }
    (this.sortEntries(this._ownedSearchEntries), this.sortEntries(e));
    let r = this.buildRecentEntries();
    (e.length > 0 &&
      this.var_170.push(
        new HabbiconSelectorSection(
          a.SECTION_FAVORITES,
          a.SECTION_FAVORITES,
          this.localize("habbicons.favourites.title", "Favorites"),
          e,
        ),
      ),
      r.length > 0 &&
        this.var_170.push(
          new HabbiconSelectorSection(
            a.const_430,
            a.const_430,
            this.localize("habbicon.recently.used", "Recently used"),
            r,
          ),
        ),
      this.addOwnedSetSections());
  }
  addOwnedSetSections() {
    if (!(this.var_63 == null || !this.var_63._r5284c2325947d5))
      for (let e of this.var_63.HabbiconAlbumModel) {
        if (e == null) continue;
        let r = [];
        for (let t of e.habbicons ?? []) {
          if (t == null) continue;
          let i = this.var_1287.get(t.habbiconId);
          i != null && r.push(i);
        }
        if (e.var_583 > 0) {
          let t = this.var_1287.get(e.var_583);
          t != null && r.push(t);
        }
        r.length > 0 &&
          this.var_170.push(
            new HabbiconSelectorSection(
              a.const_232,
              `${a.const_232}:${e.collectionId}`,
              this.resolveCollectionTitle(e),
              r,
            ),
          );
      }
  }
  buildRecentEntries() {
    let e = [];
    for (let r of this.var_811) {
      let t = this.var_1287.get(r);
      t != null && e.push(t);
    }
    return e;
  }
  refreshRecentSectionState() {
    let e = this.buildRecentEntries(),
      r = this.recentSectionIndex(),
      t = r >= 0 ? this.var_170[r] : null;
    return t != null && this.sameEntries(t.entries, e)
      ? !1
      : e.length === 0
        ? r >= 0
          ? (this.var_170.splice(r, 1), !0)
          : !1
        : t != null
          ? ((t.entries = e), !0)
          : (this.var_170.splice(
              this.splice(),
              0,
              new HabbiconSelectorSection(
                a.const_430,
                a.const_430,
                this.localize("habbicon.recently.used", "Recently used"),
                e,
              ),
            ),
            !0);
  }
  _r81ff000331b107(e) {
    let r = this.recentSectionIndex(),
      t = this.var_303.var_46;
    (e >= 0 && e < this.var_303.numListItems && this.var_303.removeListItemAt(e)?.dispose(),
      r >= 0 && this._rf086e7ff00c6e7(r, this.var_170[r]),
      (this._raa10262f0886cd.visible = this.var_170.length === 0),
      this._rf215d0fe559649(),
      (this.var_303.var_46 = t));
  }
  recentSectionIndex() {
    return this.var_170.findIndex((e) => e.type === a.const_430);
  }
  splice() {
    return this.var_170[0]?.type === a.SECTION_FAVORITES ? 1 : 0;
  }
  sameEntries(e, r) {
    return (
      e != null &&
      r != null &&
      e.length === r.length &&
      e.every((t, i) => t.habbiconId === r[i].habbiconId)
    );
  }
  createEntry(e) {
    return e == null ||
      (e._rf4d14ad73f880a !== HabbiconState.const_101 && e._rf4d14ad73f880a !== HabbiconState.const_893)
      ? null
      : new UnkClass_0122c3(
          e.habbiconId,
          this.resolveEntryName(e.habbiconId),
          this.seededColor((e.habbiconId * 37) | 0),
          e._rf4d14ad73f880a === HabbiconState.const_893,
        );
  }
  resolveEntryName(e) {
    let r = Dr.getHabbiconNameKey(e);
    return r != null && r.length > 0 ? this.localize(`habbicon_${r}_name`, r) : "Habbicon";
  }
  resolveCollectionTitle(e) {
    return e?.name != null && e.name.length > 0
      ? this.localize(`habbicon_collection_${e.name}_name`, e.name)
      : "Habbicons";
  }
  localize(e, r) {
    let t = this.var_159?.widget.localizations?.getLocalization(e, r);
    return t != null && t.length > 0 ? t : r;
  }
  sortEntries(e) {
    e.sort((r, t) =>
      r.favorite !== t.favorite
        ? r.favorite
          ? -1
          : 1
        : (r.name ?? "") < (t.name ?? "")
          ? -1
          : (r.name ?? "") > (t.name ?? "")
            ? 1
            : r.habbiconId - t.habbiconId,
    );
  }
  refresh(e = null) {
    (this.clearSections(), (e ??= this.normalizedQuery()), this.setSearchState(e.length > 0));
    let r = 0;
    if (e.length > 0) {
      ((r = this.addSearchResultsSection(e)), (this._raa10262f0886cd.visible = r === 0), this._rf215d0fe559649());
      return;
    }
    for (let t of this.var_170) {
      let i = t.entries.filter((s) => e.length === 0 || s._rd3f5fc18a86ada.includes(e));
      i.length !== 0 && (this.addSection(new HabbiconSelectorSection(t.type, t.key, t.title, i)), r++);
    }
    ((this._raa10262f0886cd.visible = r === 0), this._rf215d0fe559649());
  }
  addSearchResultsSection(e) {
    let r = this._ownedSearchEntries.filter((t) => t._rd3f5fc18a86ada.includes(e));
    return r.length === 0
      ? 0
      : (this.addSection(
          new HabbiconSelectorSection(
            a.SECTION_SEARCH,
            a.SECTION_SEARCH,
            this.localize("habbicon.search.results", "Search results"),
            r,
          ),
        ),
        1);
  }
  clearSections() {
    if (this.var_303 != null)
      for (
        this._rf2aed57d1aa692 = new Map(), this._rd6230e6a50e4ec = new Map();
        this.var_303.numListItems > 0;
      )
        this.var_303.removeListItemAt(0)?.dispose();
  }
  addSection(e) {
    this.var_303.addListItem(this.createSectionWindow(e));
  }
  _rf086e7ff00c6e7(e, r) {
    this.var_303.addListItemAt(this.createSectionWindow(r), e);
  }
  createSectionWindow(e) {
    let r = this._rd31f5922d1faeb.clone();
    ((r.visible = !0), (r.findChildByName("section_title").caption = e.title));
    let t = r.findChildByName("habbicon_grid"),
      i = t.getGridItemAt(0);
    t.removeGridItems();
    let s = e.entries.length,
      o = Math.max(1, Math.ceil(s / a.GRID_COLUMNS));
    for (let d = 0; d < o * a.GRID_COLUMNS; d++) {
      let c = d < s ? e.entries[d] : null,
        f = i.clone();
      ((f.toolTipCaption = c?.name ?? ""), this.addWheelListeners(f));
      let l = f.findChildByName("habbicon_icon");
      (l != null &&
        (this.addWheelListeners(l),
        l.bitmap != null && (l.bitmap.dispose(), (l.bitmap = null)),
        c != null
          ? ((l.bitmap = this._r348805445e4abb(c.habbiconId, c.color)),
            (l.visible = !0),
            l.invalidate())
          : (l.visible = !1)),
        c != null &&
          (f.addEventListener(u.CLICK, this._r2e88de9405dd26),
          f.addEventListener(u.OVER, this._r303f2f569757e3),
          f.addEventListener(u.OUT, this._r2745335ec6d128)),
        (f.mouseThreshold = c != null ? 0 : 10));
      let b = f.findChildByName("habbicon_item_bg");
      if (
        (b != null &&
          (this.addWheelListeners(b), (b.color = c != null ? a.SLOT_FILLED_COLOR : a.SLOT_EMPTY_COLOR)),
        c != null && this.isUnseen(c.habbiconId))
      ) {
        let _ = this.var_159.widget.windowManager.createUnseenItemCounter();
        if (_ != null) {
          let h = _.findChildByName(class_4005.VALUE_ELEMENT_NAME);
          (h != null && (h.caption = "1"), (_.x = f.width - _.width - 1), (_.y = 1), f.addChild(_));
        }
      }
      (t.addGridItem(f), this._rd6230e6a50e4ec.set(f, !0), c != null && this._rf2aed57d1aa692.set(f, c));
    }
    return (
      (t.height = o * a.SLOT_SIZE + (o - 1) * a.SLOT_SPACING),
      (r.height = 20 + t.height + 2),
      i.dispose(),
      r
    );
  }
  _rf215d0fe559649() {
    if (this._window == null || this.var_303 == null) return;
    let e = Math.min(
      Math.max(46, Math.trunc(this.var_303.visibleRegion.height) + 2),
      a.MENU_MAX_HEIGHT - a.TOP_BAR_HEIGHT - a.BOTTOM_PADDING,
    );
    ((this.var_303.height = e),
      (this._window.height = Math.max(
        a.MENU_MIN_HEIGHT,
        a.TOP_BAR_HEIGHT + e + a.BOTTOM_PADDING,
      )),
      this._window.invalidate());
  }
  normalizedQuery() {
    return this.var_316?.text?.toLowerCase() ?? "";
  }
  var_1208 = n((e) => {
    this.var_316?.focus();
  }, "var_1208");
  _r01cd0c41519609 = n((e) => {
    (this._r2a5c8fecde1558(), this._r82481939a0edc0(), this._rde40e4baa8bf4a());
  }, "_r01cd0c41519609");
  var_1343 = n((e) => {
    e.keyCode !== Fi._r6e338d2400abbd || this.var_316.text.length === 0 || this.clearSearch();
  }, "var_1343");
  var_1940 = n((e) => {
    this.clearSearch();
  }, "var_1940");
  clearSearch() {
    (this.var_316 != null && (this.var_316.text = ""),
      this._r2a5c8fecde1558(),
      this._r82481939a0edc0(),
      this._rde40e4baa8bf4a());
  }
  _rb9bea1c0242597 = n((e) => {
    (this.var_159.openHabbiconHub(), this.hide());
  }, "_rb9bea1c0242597");
  _r2e88de9405dd26 = n((e) => {
    let r = this._r9ee8975b51ca14(e.window);
    r != null &&
      (this.var_63 != null
        ? (this.var_63._re5d8c48e260b16(r.habbiconId),
          this.var_63._r59b8bf5acaaf2f(r.habbiconId))
        : this._r7f8b7e8a2fb67b(r.habbiconId) && (this._rbaf04288160464 = !0),
      this._r3e64271c1d43ed(r.habbiconId),
      e.shiftKey || this.hide(!1));
  }, "_r2e88de9405dd26");
  _r3e64271c1d43ed(e) {
    this.var_159.widget.handler.container.connection.send(new UnkMessageComposer_1args_edbb78(e));
  }
  isUnseen(e) {
    return this.var_63?._rd94b5da83c889e(e) ?? !1;
  }
  _r2b6cd1a9eac11a() {
    this.var_63 != null && (this.var_811 = [...this.var_63.recentHabbiconIds]);
  }
  _r7f8b7e8a2fb67b(e) {
    let r = this.var_811.indexOf(e);
    return e <= 0 || r === 0
      ? !1
      : (r >= 0 && this.var_811.splice(r, 1),
        this.var_811.unshift(e),
        this.var_811.length > a.RECENT_LIMIT &&
          (this.var_811.length = a.RECENT_LIMIT),
        !0);
  }
  addWheelListeners(e) {
    (e?.addEventListener(u.const_974, this._rcbb5ef84561497),
      e?.addEventListener(u.WHEEL_HORIZONTAL, this._rcbb5ef84561497));
  }
  _rcbb5ef84561497 = n((e) => {
    if (this.var_303 == null) return;
    let r = e.type === u.WHEEL_HORIZONTAL;
    this.var_303.WindowMouseEvent(r ? -e.delta : e.delta, r || e.shiftKey) && e.stopPropagation();
  }, "_rcbb5ef84561497");
  _r303f2f569757e3 = n((e) => {
    let t = this._rcb7dd61a1797a6(e.window)?.findChildByName("habbicon_item_bg");
    t != null && (t.color = a.SLOT_FILLED_HOVER_COLOR);
  }, "_r303f2f569757e3");
  _r2745335ec6d128 = n((e) => {
    let r = this._rcb7dd61a1797a6(e.window),
      t = r?.findChildByName("habbicon_item_bg");
    t != null && (t.color = this._rf2aed57d1aa692.has(r) ? a.SLOT_FILLED_COLOR : a.SLOT_EMPTY_COLOR);
  }, "_r2745335ec6d128");
  _r9ee8975b51ca14(e) {
    let r = this._rcb7dd61a1797a6(e);
    return r != null ? (this._rf2aed57d1aa692.get(r) ?? null) : null;
  }
  _rcb7dd61a1797a6(e) {
    for (; e != null;) {
      if (this._rd6230e6a50e4ec.has(e)) return e;
      e = e.parent;
    }
    return null;
  }
  static isWindowInTree(e, r) {
    for (; e != null;) {
      if (e === r) return !0;
      e = e.parent;
    }
    return !1;
  }
  setSearchState(e) {
    (this.onSearchPlaceholderDown != null && (this.onSearchPlaceholderDown.visible = !e),
      this.onSearchClearClicked != null && (this.onSearchClearClicked.visible = e));
  }
  seededColor(e) {
    switch (e % 6) {
      case 0:
        return 16371247;
      case 1:
        return 15964719;
      case 2:
        return 15695663;
      case 3:
        return 9358143;
      case 4:
        return 5095656;
      default:
        return 12813557;
    }
  }
  _r348805445e4abb(e, r) {
    return Dr.getPreviewBitmap(e, !1)?.clone() ?? new A(40, 40, !1, r);
  }
}

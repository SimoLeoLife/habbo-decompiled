// Estratto da HabboAirLauncher.deobf.js, riga 246060.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/habbicons/MessengerHabbiconPicker.as
// Nome offuscato: _i4bc10bc6fe4592

class a {
  constructor(e, r, t, i, s) {
    this._window = e;
    this.var_63 = r;
    this._localization = t;
    this._windowManager = i;
    this.var_2669 = s;
    ((this._window.visible = !1),
      (this._rd31f5922d1faeb = this.sectionList.removeListItem(
        this.sectionList.getListItemByName("habbicon_section_template"),
      )),
      this.searchInput.addEventListener(y.WINDOW_EVENT_CHANGE, this._r31e69ced7c0125),
      this.searchInput.addEventListener(sr.const_1081, this._r31364e8b0088eb),
      this.searchPlaceholder.addEventListener(u.DOWN, this._r5c310a9f9910a8),
      this.searchClearButton.addEventListener(u.CLICK, this._r89507b7b8e9253),
      this.openHubButton.addEventListener(u.CLICK, this.onOpenHubClicked),
      this.var_63 != null &&
        (this.var_63.addEventListener(Mt.const_1213, this._rb170ab7fd99dde),
        this.var_63.addEventListener(Mt.SHOP_DATA_UPDATED, this._rb170ab7fd99dde),
        this.var_63.addEventListener(Mt.RECENT_HABBICONS_UPDATED, this.onRecentHabbiconsUpdated)),
      this.setSearchState(!1));
  }
  static {
    n(this, "MessengerHabbiconPicker");
  }
  static SECTION_FAVORITES = "favorites";
  static const_430 = "recent";
  static const_232 = "collection";
  static SECTION_SEARCH = "search";
  static MENU_MIN_HEIGHT = 94;
  static MENU_MAX_HEIGHT = 304;
  static TOP_BAR_HEIGHT = 42;
  static BOTTOM_PADDING = 6;
  _rd31f5922d1faeb;
  _r259b9b7193c1aa = [];
  var_170 = [];
  _ownedSearchEntries = [];
  var_1287 = new Map();
  _ra5e17c7134cfba = !0;
  var_449 = !0;
  _rbaf04288160464 = !1;
  _ra2a319ded73e3f = null;
  _disposed = !1;
  show() {
    this._disposed ||
      (this._r5ec33622fa22bb(),
      this._r82481939a0edc0(),
      (this._window.visible = !0),
      this._window.activate(),
      this._r5e6e0d6ded93e8());
  }
  hide(e = !0) {
    this._disposed ||
      ((this._window.visible = !1),
      e &&
        this.var_63 != null &&
        (this.var_63._r0a5fa07606baa3(), this._r2a5c8fecde1558()));
  }
  toggle() {
    this.visible ? this.hide() : this.show();
  }
  get visible() {
    return !this._disposed && this._window.visible;
  }
  _rba1cd323364faa(e) {
    return !this._disposed && a.isWindowInTree(e, this._window);
  }
  _r5e6e0d6ded93e8() {
    this._disposed || this.searchInput.focus();
  }
  setPosition(e, r) {
    this._disposed || ((this._window.x = Math.trunc(e)), (this._window.y = Math.trunc(r)));
  }
  get window() {
    return this._window;
  }
  dispose() {
    this._disposed ||
      (this.var_63 != null &&
        (this.var_63.removeEventListener(Mt.const_1213, this._rb170ab7fd99dde),
        this.var_63.removeEventListener(Mt.SHOP_DATA_UPDATED, this._rb170ab7fd99dde),
        this.var_63.removeEventListener(Mt.RECENT_HABBICONS_UPDATED, this.onRecentHabbiconsUpdated),
        (this.var_63 = null)),
      this.searchInput.removeEventListener(y.WINDOW_EVENT_CHANGE, this._r31e69ced7c0125),
      this.searchInput.removeEventListener(sr.const_1081, this._r31364e8b0088eb),
      this.searchPlaceholder.removeEventListener(u.DOWN, this._r5c310a9f9910a8),
      this.searchClearButton.removeEventListener(u.CLICK, this._r89507b7b8e9253),
      this.openHubButton.removeEventListener(u.CLICK, this.onOpenHubClicked),
      this.clearSections(),
      this._rd31f5922d1faeb != null && (this._rd31f5922d1faeb.dispose(), (this._rd31f5922d1faeb = null)),
      this._window != null && (this._window.dispose(), (this._window = null)),
      (this._localization = null),
      (this._windowManager = null),
      (this.var_2669 = null),
      (this.var_170 = null),
      (this._ownedSearchEntries = null),
      (this.var_1287 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _rb170ab7fd99dde = n((e) => {
    let r = _ib619bfd98fe9f2.as({ value: e, _r35f8c7df03c28f: Mt });
    if (r != null && r.habbiconId > 0 && !this._ra5e17c7134cfba && !this.var_449) {
      this.visible ? this._r27443434556d0f() : this._r983c31b7cedde8();
      return;
    }
    (this._r983c31b7cedde8(), this.visible && this._r82481939a0edc0());
  }, "_rb170ab7fd99dde");
  onRecentHabbiconsUpdated = n((e) => {
    if (this.visible) {
      this._rbaf04288160464 = !0;
      return;
    }
    this._ra5e17c7134cfba || (this.refreshRecentSectionState() && this._r2a5c8fecde1558());
  }, "onRecentHabbiconsUpdated");
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
        new MessengerHabbiconPickerSection(
          a.SECTION_FAVORITES,
          a.SECTION_FAVORITES,
          this.localize("habbicons.favourites.title", "Favorites"),
          e,
        ),
      ),
      r.length > 0 &&
        this.var_170.push(
          new MessengerHabbiconPickerSection(
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
        if (e.habbicons != null)
          for (let t of e.habbicons) {
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
            new MessengerHabbiconPickerSection(
              a.const_232,
              a.const_232 + ":" + e.collectionId,
              this.resolveCollectionTitle(e),
              r,
            ),
          );
      }
  }
  _r27443434556d0f() {
    let e = this.normalizedQuery(),
      r = this.var_170.concat();
    if (
      (this.refreshSections(),
      (this._ra5e17c7134cfba = !1),
      (this.var_449 = !1),
      (this._ra2a319ded73e3f = e),
      e.length > 0)
    ) {
      this._re3185bbfb33313(e);
      return;
    }
    this._r8b2ca6a2408b86(r);
  }
  _re3185bbfb33313(e) {
    let r = this.sectionList.var_46;
    (this.clearSections(), this.setSearchState(!0));
    let t = this.addSearchResultsSection(e);
    ((this.emptyView.visible = t === 0),
      this._rf215d0fe559649(),
      (this.sectionList.var_46 = r));
  }
  _r8b2ca6a2408b86(e) {
    let r = this._r259b9b7193c1aa,
      t = new Map(),
      i = this.sectionList.var_46;
    if (this._rac4bd89b1786a8(e, this.var_170)) {
      this.emptyView.visible = this.var_170.length === 0;
      return;
    }
    (this.sectionList.removeListItems(), (this._r259b9b7193c1aa = []));
    for (let s of this.var_170) {
      let o = this._rff918d4cf9752c(e, s.key),
        d;
      (o >= 0 && o < r.length && this._rf4ad845132b0a8(e[o], s)
        ? ((d = r[o]), t.set(o, !0))
        : (o >= 0 && o < r.length && (r[o].dispose(), t.set(o, !0)), (d = this._ra67e4a4aebc003(s))),
        this._r259b9b7193c1aa.push(d),
        this.sectionList.addListItem(d.window));
    }
    for (let s = 0; s < r.length; s++) t.get(s) !== !0 && r[s].dispose();
    ((this.emptyView.visible = this.var_170.length === 0),
      this._rf215d0fe559649(),
      (this.sectionList.var_46 = i));
  }
  buildRecentEntries() {
    let e = [];
    if (this.var_63 == null) return e;
    for (let r of this.var_63.recentHabbiconIds) {
      let t = this.var_1287.get(r);
      t != null && e.push(t);
    }
    return e;
  }
  refreshRecentSectionState() {
    let e = this.buildRecentEntries(),
      r = this.recentSectionIndex(),
      t = null;
    return r >= 0 && ((t = this.var_170[r]), this.sameEntries(t.entries, e))
      ? !1
      : e.length === 0
        ? r >= 0
          ? (this.var_170.splice(r, 1), !0)
          : !1
        : r >= 0
          ? ((t.entries = e), !0)
          : (this.var_170.splice(
              this.splice(),
              0,
              new MessengerHabbiconPickerSection(
                a.const_430,
                a.const_430,
                this.localize("habbicon.recently.used", "Recently used"),
                e,
              ),
            ),
            !0);
  }
  _r81ff000331b107() {
    let e = this.recentSectionIndex(),
      r = this.sectionList.var_46;
    if (e < 0) {
      this._r7efb60557e1acb(r);
      return;
    }
    e < this._r259b9b7193c1aa.length &&
      this._r259b9b7193c1aa[e].key === a.const_430 &&
      (this._r259b9b7193c1aa[e].dispose(), this._r259b9b7193c1aa.splice(e, 1));
    let t = this._ra67e4a4aebc003(this.var_170[e]);
    (this._r259b9b7193c1aa.splice(e, 0, t),
      this.sectionList.addListItemAt(t.window, e),
      this._rf215d0fe559649(),
      (this.sectionList.var_46 = r),
      (this.emptyView.visible = this.var_170.length === 0));
  }
  _r7efb60557e1acb(e) {
    for (let r = 0; r < this._r259b9b7193c1aa.length; r++) {
      let t = this._r259b9b7193c1aa[r];
      if (t.key === a.const_430) {
        (t.dispose(),
          this._r259b9b7193c1aa.splice(r, 1),
          this._rf215d0fe559649(),
          (this.sectionList.var_46 = e),
          (this.emptyView.visible = this.var_170.length === 0));
        return;
      }
    }
  }
  recentSectionIndex() {
    return this.var_170.findIndex((e) => e.type === a.const_430);
  }
  splice() {
    let e = this.var_170.length > 0 ? this.var_170[0] : null;
    return e != null && e.type === a.SECTION_FAVORITES ? 1 : 0;
  }
  sameEntries(e, r) {
    if (e == null || r == null || e.length !== r.length) return !1;
    for (let t = 0; t < e.length; t++) if (e[t].habbiconId !== r[t].habbiconId) return !1;
    return !0;
  }
  _rf4ad845132b0a8(e, r) {
    return (
      e != null &&
      r != null &&
      e.type === r.type &&
      e.key === r.key &&
      e.title === r.title &&
      this.sameEntries(e.entries, r.entries)
    );
  }
  _rac4bd89b1786a8(e, r) {
    if (e == null || r == null || e.length !== r.length) return !1;
    for (let t = 0; t < e.length; t++) if (!this._rf4ad845132b0a8(e[t], r[t])) return !1;
    return !0;
  }
  _rff918d4cf9752c(e, r) {
    return e.findIndex((t) => t.key === r);
  }
  createEntry(e) {
    let r = e._rf4d14ad73f880a;
    return r !== HabbiconState.const_101 && r !== HabbiconState.const_893
      ? null
      : new _i0630dd238e5c3b(e.habbiconId, this.resolveEntryName(e.habbiconId), r === HabbiconState.const_893);
  }
  resolveEntryName(e) {
    let r = Dr.getHabbiconNameKey(e);
    return r != null && r.length > 0 ? this.localize("habbicon_" + r + "_name", r) : "Habbicon";
  }
  resolveCollectionTitle(e) {
    return e.name == null || e.name.length === 0
      ? "Habbicons"
      : this.localize("habbicon_collection_" + e.name + "_name", e.name);
  }
  refresh(e) {
    let r = 0;
    if ((this.clearSections(), this.setSearchState(e.length > 0), e.length > 0)) {
      ((r = this.addSearchResultsSection(e)), (this.emptyView.visible = r === 0), this._rf215d0fe559649());
      return;
    }
    for (let t of this.var_170) (this.addSection(t.type, t.key, t.title, t.entries), r++);
    ((this.emptyView.visible = r === 0), this._rf215d0fe559649());
  }
  addSearchResultsSection(e) {
    let r = [];
    for (let t of this._ownedSearchEntries) t._rd3f5fc18a86ada.indexOf(e) >= 0 && r.push(t);
    return r.length === 0
      ? 0
      : (this.addSection(
          a.SECTION_SEARCH,
          a.SECTION_SEARCH,
          this.localize("habbicon.search.results", "Search results"),
          r,
        ),
        1);
  }
  addSection(e, r, t, i) {
    let s = new KJ(
      this._rd31f5922d1faeb,
      e,
      r,
      t,
      i,
      (o, d) => this._r1897b8469d192f(o, d),
      this._windowManager,
      (o) => this._rd94b5da83c889e(o),
      this._r767ef4a758d3fb,
    );
    (this._r259b9b7193c1aa.push(s), this.sectionList.addListItem(s.window));
  }
  _ra67e4a4aebc003(e) {
    return new KJ(
      this._rd31f5922d1faeb,
      e.type,
      e.key,
      e.title,
      e.entries,
      (r, t) => this._r1897b8469d192f(r, t),
      this._windowManager,
      (r) => this._rd94b5da83c889e(r),
      this._r767ef4a758d3fb,
    );
  }
  clearSections() {
    for (let e of this._r259b9b7193c1aa) e.dispose();
    this._r259b9b7193c1aa.length = 0;
  }
  _r1897b8469d192f(e, r) {
    (this.var_63 != null && this.var_63._re5d8c48e260b16(e),
      this.var_2669 != null && this.var_2669(e, r),
      r ? this.clearUnseenCounterForHabbicon(e) : this.hide(!1));
  }
  clearUnseenCounterForHabbicon(e) {
    for (let r of this._r259b9b7193c1aa) r.clearUnseenCounterForHabbicon(e);
  }
  _rd94b5da83c889e(e) {
    return this.var_63 != null && this.var_63._rd94b5da83c889e(e);
  }
  _rf215d0fe559649() {
    if (this._window == null || this.sectionList == null) return;
    let e = Math.trunc(this.sectionList.visibleRegion.height),
      r = Math.max(46, e + 2),
      t = a.MENU_MAX_HEIGHT - a.TOP_BAR_HEIGHT - a.BOTTOM_PADDING;
    ((r = Math.min(r, t)),
      (this.sectionList.height = r),
      (this._window.height = Math.max(
        a.MENU_MIN_HEIGHT,
        a.TOP_BAR_HEIGHT + r + a.BOTTOM_PADDING,
      )),
      this._window.invalidate());
  }
  normalizedQuery() {
    let e = this.searchInput.text;
    return e != null ? e.toLowerCase() : "";
  }
  _r31e69ced7c0125 = n((e) => {
    (this._r2a5c8fecde1558(), this._r82481939a0edc0());
  }, "_r31e69ced7c0125");
  _r31364e8b0088eb = n((e) => {
    e.keyCode === Fi._r6e338d2400abbd && this.searchInput.text.length > 0 && this.clearSearch();
  }, "_r31364e8b0088eb");
  _r5c310a9f9910a8 = n((e) => {
    this.searchInput.focus();
  }, "_r5c310a9f9910a8");
  _r89507b7b8e9253 = n((e) => {
    this.clearSearch();
  }, "_r89507b7b8e9253");
  onOpenHubClicked = n((e) => {
    (this.var_63?.openHabbiconHub(), this.hide(!1));
  }, "onOpenHubClicked");
  _r767ef4a758d3fb = n((e) => {
    if (this.sectionList == null) return;
    let r = e.type === u.WHEEL_HORIZONTAL ? -e.delta : e.delta;
    this.sectionList.WindowMouseEvent(r, e.type === u.WHEEL_HORIZONTAL || e.shiftKey) &&
      e.stopPropagation();
  }, "_r767ef4a758d3fb");
  clearSearch() {
    ((this.searchInput.text = ""), this._r2a5c8fecde1558(), this._r82481939a0edc0());
  }
  setSearchState(e) {
    ((this.searchPlaceholder.visible = !e), (this.searchClearButton.visible = e));
  }
  localize(e, r) {
    let t = this._localization != null ? this._localization.getLocalization(e, r) : r;
    return t != null && t.length > 0 ? t : r;
  }
  sortEntries(e) {
    e.sort((r, t) =>
      r.favorite !== t.favorite
        ? r.favorite
          ? -1
          : 1
        : r.name < t.name
          ? -1
          : r.name > t.name
            ? 1
            : (r.habbiconId - t.habbiconId) | 0,
    );
  }
  static isWindowInTree(e, r) {
    for (; e != null;) {
      if (e === r) return !0;
      e = e.parent;
    }
    return !1;
  }
  get sectionList() {
    return this._window.findChildByName("habbicon_section_list");
  }
  get searchInput() {
    return this._window.findChildByName("habbicon_search_input");
  }
  get searchPlaceholder() {
    return this._window.findChildByName("habbicon_search_placeholder");
  }
  get searchClearButton() {
    return this._window.findChildByName("habbicon_search_clear_button");
  }
  get openHubButton() {
    return this._window.findChildByName("habbicon_open_hub_button");
  }
  get emptyView() {
    return this._window.findChildByName("empty_view");
  }
}

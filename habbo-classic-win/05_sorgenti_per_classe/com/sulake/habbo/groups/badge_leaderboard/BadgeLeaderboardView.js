// Estratto da HabboAirLauncher.deobf.js, riga 227851.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/badge_leaderboard/BadgeLeaderboardView.as
// Nome offuscato: _ic383d621fcee46

class a {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    (this.createWindow(), this.hide());
  }
  static {
    n(this, "BadgeLeaderboardView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  _disposed = !1;
  _window = null;
  _r504b204a6e00d4 = null;
  _r5010e62e54280a = null;
  var_1299 = null;
  _r742315cd2e20b3 = 0;
  _r21c42244fb92db(e, r) {
    let t = this.hiddenDropdown;
    t != null &&
      ((t.procedure = null), t.populate(e), (t.selection = r), (t.procedure = this._r666e95de775279));
  }
  _r5c646b9683abcf(e) {
    this._window != null && this._window.style !== e && (this._window.style = e);
  }
  _r838b5c8d6ac066() {
    (this.hiddenDropdown?.openMenu(), this.hiddenDropdown?.activate());
  }
  setTitle(e) {
    for (let r of this._r4b869bbc8ac0e6) r.text = e;
  }
  setInfo(e, r) {
    (this.rankTypeExtendedImage != null && (this.rankTypeExtendedImage.assetUri = e),
      this.rankTypeInfoText != null && (this.rankTypeInfoText.text = r));
  }
  _r46a305dc2448da(e) {
    this.rankTypeExtendedImage != null && (this.rankTypeExtendedImage.y = this._r742315cd2e20b3 + e);
  }
  _rc594f6f634fb92(e, r) {
    (this.previousButton != null && (e ? this.previousButton.enable() : this.previousButton.disable()),
      this.nextButton != null && (r ? this.nextButton.enable() : this.nextButton.disable()));
  }
  _r8664dabf0410d1(e, r) {
    e >= 0 &&
      e < (this.var_1299?.length ?? 0) &&
      this.var_1299?.[e]?.window &&
      (this.var_1299[e].window.visible = r);
  }
  _ra69c2bc7f2e50d(e) {
    this.ownContainer != null && (this.ownContainer.visible = e);
  }
  hide() {
    if (!this.isShowing()) return;
    let e = this._windowManager?.getDesktop(a.DESKTOP_WINDOW_LAYER) ?? null;
    e != null && this._window != null && e.removeChild(this._window);
  }
  show() {
    if (this._window == null) return;
    if (this.isShowing()) {
      this._window.activate();
      return;
    }
    let e = this._windowManager?.getDesktop(a.DESKTOP_WINDOW_LAYER) ?? null;
    e != null &&
      (e.addChild(this._window),
      this._window.parent === e && this._window.center(),
      this._window.activate());
  }
  isShowing() {
    return this._window != null && this._window.parent != null;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      if ((this.hide(), this.var_1299 != null)) {
        for (let e of this.var_1299) e.dispose();
        this.var_1299 = null;
      }
      (this._r5010e62e54280a?.dispose(),
        (this._r5010e62e54280a = null),
        this._r504b204a6e00d4?.dispose(),
        (this._r504b204a6e00d4 = null),
        this._window?.dispose(),
        (this._window = null),
        (this.var_63 = null),
        (this._windowManager = null),
        (this._disposed = !0));
    }
  }
  get _r6c3153b4b1990c() {
    return this._r504b204a6e00d4;
  }
  get _r4c6e8ea8d7666d() {
    return this.var_1299 ?? [];
  }
  createWindow() {
    if (this._window != null || this.var_63 == null || this._windowManager == null) return;
    let r = this.var_63.assets.getAssetByName("badge_leaderboard_view")?.content;
    if (
      ((this._window = r != null ? this._windowManager.buildFromXML(r, a.DESKTOP_WINDOW_LAYER) : null),
      this._window != null)
    ) {
      ((this._r742315cd2e20b3 = this.rankTypeExtendedImage?.y ?? 0),
        (this.closeButton.procedure = this.onClose),
        (this.dropdownRegion.procedure = this._r044b9f86125826),
        (this.dropdownOpener.procedure = this._r044b9f86125826),
        (this.hiddenDropdown.procedure = this._r666e95de775279),
        (this.previousButton.procedure = this._rb5cc4e076e4b3a),
        (this.nextButton.procedure = this._ra9cb80818d8b9c),
        (this._r5010e62e54280a = this.rankingList?.getListItemByName("entry_template")),
        this._r5010e62e54280a != null && this.rankingList?.removeListItem(this._r5010e62e54280a),
        (this.var_1299 = []));
      for (let t = 0; t < nQ.PAGE_SIZE; t++) {
        let i = new BadgeLeaderboardEntryView(this._r5010e62e54280a?.clone());
        ((i._re3606645ec28f7.id = t),
          (i._re3606645ec28f7.procedure = this.onProfileClicked),
          i.window != null && ((i.window.visible = !1), this.rankingList?.addListItem(i.window)),
          this.var_1299.push(i));
      }
      ((this._r504b204a6e00d4 = new BadgeLeaderboardEntryView(this.ownContainer, !1, "rank_own")),
        (this._r504b204a6e00d4._re3606645ec28f7.id = -1),
        (this._r504b204a6e00d4._re3606645ec28f7.procedure = this.onProfileClicked),
        this.ownContainer != null && (this.ownContainer.visible = !1));
    }
  }
  get closeButton() {
    return this._window?.findChildByTag("close") ?? null;
  }
  get _r4b869bbc8ac0e6() {
    return [
      this._window?.findChildByName("title_txt_shadow_0"),
      this._window?.findChildByName("title_txt_shadow_1"),
      this._window?.findChildByName("title_txt_shadow_2"),
      this._window?.findChildByName("title_txt_shadow_3"),
      this._window?.findChildByName("title_txt"),
    ].filter((e) => e != null);
  }
  get dropdownRegion() {
    return this._window?.findChildByName("dropdown_region");
  }
  get dropdownOpener() {
    return this._window?.findChildByName("dropdown_opener");
  }
  get hiddenDropdown() {
    return this._window?.findChildByName("hidden_dropdown");
  }
  get rankTypeExtendedImage() {
    return this._window?.findChildByName("rank_type_extended_img");
  }
  get rankTypeInfoText() {
    return this._window?.findChildByName("rank_type_info");
  }
  get rankingList() {
    return this._window?.findChildByName("ranking_list");
  }
  get ownContainer() {
    return this._window?.findChildByName("own_container");
  }
  get previousButton() {
    return this._window?.findChildByName("previous_btn");
  }
  get nextButton() {
    return this._window?.findChildByName("next_btn");
  }
  onClose = n((e, r) => {
    e.type === u.CLICK && this.hide();
  }, "onClose");
  _r044b9f86125826 = n((e, r) => {
    e.type === u.CLICK && this.var_63?._r2091d400ff4442();
  }, "_r044b9f86125826");
  _r666e95de775279 = n((e, r) => {
    e.type === y.const_238 &&
      this.var_63?._rf1f03ff980f904(this.hiddenDropdown?.selection ?? 0);
  }, "_r666e95de775279");
  _rb5cc4e076e4b3a = n((e, r) => {
    e.type === u.CLICK && this.var_63?._r5faf0f53f68df3();
  }, "_rb5cc4e076e4b3a");
  _ra9cb80818d8b9c = n((e, r) => {
    e.type === u.CLICK && this.var_63?._r72580402af066a();
  }, "_ra9cb80818d8b9c");
  onProfileClicked = n((e, r) => {
    e.type === u.CLICK && this.var_63?._r3e349b5328deac(r.id);
  }, "onProfileClicked");
}

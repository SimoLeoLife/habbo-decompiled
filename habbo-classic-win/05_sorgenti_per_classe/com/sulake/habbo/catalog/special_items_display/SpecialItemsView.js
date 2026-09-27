// Estratto da HabboAirLauncher.deobf.js, riga 186653.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/special_items_display/SpecialItemsView.as
// Nome offuscato: _i2b47896e53a18e

class a {
  static {
    n(this, "SpecialItemsView");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static BLEND_BUFFERING = 0.1;
  static CLAIM_HEIGHT = 20;
  _disposed = !1;
  var_63;
  _window;
  _r9a9c3992c50c1e;
  _r5de1e1e2b34291;
  var_310 = [];
  _pages = null;
  var_1158 = [];
  _latestDisplayKey = "";
  _re50a3cc8737249 = [];
  _r342bec21a4cdac = 0;
  var_300 = 0;
  var_576 = !1;
  var_187 = 0;
  var_961 = 0;
  var_420 = !1;
  _extraCycles = 0;
  _r2b554b1350c0bb = 0;
  _rb69cbd8b7e2147 = 1;
  _r6f05b68ea7b232 = 1;
  constructor(e) {
    this.var_63 = e;
    let r = e.catalog.assets.getAssetByName("special_items_display_xml")?.content;
    ((this._window = r != null ? e.windowManager.buildFromXML(r, a.DESKTOP_WINDOW_LAYER) : null),
      (this._r9a9c3992c50c1e = this.pageList?.getListItemAt(0)),
      this.pageList?.removeListItems(),
      (this._r5de1e1e2b34291 = this.itemRotation?.removeChildAt(0)),
      this.closeButton?.addEventListener(u.CLICK, this.onClose),
      this.previousButton?.addEventListener(u.CLICK, this._raae544f8187976),
      this.nextButton?.addEventListener(u.CLICK, this._r3fa79e8ce846b7),
      this.claimButton?.addEventListener(u.CLICK, this._r046e7d75bba215),
      this.var_63.registerUpdateReceiver(this, 1),
      this.hide());
  }
  get disposed() {
    return this._disposed;
  }
  get _rca68b345e28fe7() {
    return this._r9a9c3992c50c1e;
  }
  get _redd4f40fc7d8d4() {
    return this._r5de1e1e2b34291;
  }
  get _r70b5849a7ca2e3() {
    return this.var_63?.items.length ?? 0;
  }
  displayNewData() {
    this.var_63 == null ||
      this._window == null ||
      (this.var_63.key !== this._latestDisplayKey &&
        ((this._window.caption =
          this.localizations?.getLocalizationWithParams(
            "special_items.title",
            "",
            "set_name",
            this.localizations?.getLocalization(`special_items.${this.var_63.key}.title`, "") ??
              "",
          ) ?? ""),
        this.setTitleText != null &&
          (this.setTitleText.text =
            this.localizations?.getLocalization(
              `special_items.${this.var_63.key}.header.title`,
              "",
            ) ?? ""),
        this.setDescText != null &&
          (this.setDescText.text =
            this.localizations?.getLocalization(
              `special_items.${this.var_63.key}.header.desc`,
              "",
            ) ?? ""),
        this._raf92feca115be1(),
        this._rc480fa6bcd2c21(),
        this._r838b965359a49c(),
        this._ra249440e0b8136()),
      (this._latestDisplayKey = this.var_63.key),
      this._window.activate(),
      this.updateClaimState());
  }
  updateClaimState() {
    let e = this.var_63?._r61922ccea07ab3 ?? 0;
    (e === C0.CLAIM_STATE_NOT_APPLICABLE
      ? (this.claimSpacer != null && (this.claimSpacer.height = 0),
        this.claimContainer != null && (this.claimContainer.visible = !1))
      : (this.claimSpacer != null && (this.claimSpacer.height = a.CLAIM_HEIGHT),
        this.claimContainer != null && (this.claimContainer.visible = !0),
        this.claimButton != null &&
          (e === C0.CLAIM_STATE_FETCHING || e === C0.CLAIM_STATE_BROWSING
            ? (this.claimButton.disable(), (this.claimButton.caption = "${special_items.claim}"))
            : e === C0.CLAIM_STATE_CLAIMABLE
              ? (this.claimButton.enable(), (this.claimButton.caption = "${special_items.claim}"))
              : e === C0.CLAIM_STATE_CLAIMED &&
                (this.claimButton.disable(),
                (this.claimButton.caption = "${special_items.claimed}")))),
      this._r0ae26fac6ca7ed());
  }
  _ra249440e0b8136() {
    if ((this.var_63?.items.length ?? 0) === 0) return;
    this.selectedPage = 0;
    let e = this.var_63.items[0];
    ((this._r2b554b1350c0bb = -1),
      this._r03885bfd0b2067(e),
      (this.var_300 = 0),
      (this.var_576 = !1),
      (this.var_187 = 0),
      (this.var_961 = 0),
      (this.var_420 = !1),
      (this._extraCycles = 0),
      this.updateRotationAnimation(),
      (this.plaqueAndSpotlightBlend = 1),
      this.markItemVisited(this.var_300));
  }
  updateRotationAnimation() {
    for (let e of this.var_1158) e._r2a99c71aae7e03(this.var_187);
  }
  _r03885bfd0b2067(e) {
    if (e.index === this._r2b554b1350c0bb) return;
    ((this._r2b554b1350c0bb = e.index),
      this.itemTitleText != null && (this.itemTitleText.text = e.name),
      this.itemDescText != null && (this.itemDescText.text = e.description));
    let r = this.productIconWidget?.widget;
    r != null && (r.productInfo = e);
  }
  navigateTo(e, r = !1, t = !1) {
    ((this.var_300 = e),
      (this.selectedPage = e),
      this.markItemVisited(e),
      r || ((this._extraCycles = 0), (t = this.var_187 > e)),
      (this.var_420 = t),
      this.var_576 || ((this.var_961 = 0), (this.var_576 = !0)));
  }
  update(e) {
    if (!this.var_576) return;
    let r = this._r70b5849a7ca2e3;
    if (r <= 0) {
      this.var_576 = !1;
      return;
    }
    let t = 1e3 / Math.max(e, 1),
      i = this.var_300 - this.var_187;
    (i > 0 && this.var_420 ? (i -= r) : i < 0 && !this.var_420 && (i += r),
      ((!this.var_420 && this._extraCycles > 0) ||
        (this.var_420 && this._extraCycles < 0)) &&
        (i += this._extraCycles * r));
    let s = Math.abs(i) * 2;
    (s > this.var_961
      ? (s = this.var_961 * 0.95 + s * 0.05)
      : (s = this.var_961 * 0.85 + s * 0.15),
      (s = Math.max(0.05, s)));
    let d = s / t;
    if (
      (this.var_420 && (d *= -1),
      (this.var_961 = s),
      (!this.var_420 && d > i) || (this.var_420 && d < i))
    )
      ((this.var_576 = !1),
        (this.var_187 = this.var_300),
        (this._extraCycles = 0));
    else {
      if (((this.var_187 += d), this._extraCycles !== 0)) {
        let c = i % r;
        this._extraCycles > 0 && !this.var_420 && d > c
          ? (this._extraCycles -= 1)
          : this._extraCycles < 0 && this.var_420 && d < c && (this._extraCycles += 1);
      }
      this.var_187 > r
        ? (this.var_187 -= r)
        : this.var_187 < 0 && (this.var_187 += r);
    }
    (this.updatePlaqueAndSpotlight(), this.updateRotationAnimation());
  }
  isShowing() {
    return this._window?.parent != null;
  }
  show() {
    if (this.isShowing()) return;
    let e = this.var_63?.windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    e != null &&
      this._window != null &&
      (e.addChild(this._window), this._window.center());
  }
  hide() {
    if (!this.isShowing()) return;
    let e = this.var_63?.windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
    e != null && this._window != null && e.removeChild(this._window);
  }
  dispose() {
    this._disposed ||
      (this.clearPages(),
      this._r794984803f3380(),
      this.var_63?.removeUpdateReceiver(this),
      this.closeButton?.removeEventListener(u.CLICK, this.onClose),
      this.previousButton?.removeEventListener(u.CLICK, this._raae544f8187976),
      this.nextButton?.removeEventListener(u.CLICK, this._r3fa79e8ce846b7),
      this.claimButton?.removeEventListener(u.CLICK, this._r046e7d75bba215),
      this._window?.dispose(),
      this._r9a9c3992c50c1e?.dispose(),
      this._r5de1e1e2b34291?.dispose(),
      (this._window = null),
      (this._r9a9c3992c50c1e = null),
      (this._r5de1e1e2b34291 = null),
      (this.var_63 = null),
      (this.var_310 = []),
      (this._pages = null),
      (this.var_1158 = []),
      (this._re50a3cc8737249 = []),
      (this._r342bec21a4cdac = 0),
      (this._disposed = !0));
  }
  get localizations() {
    return this.var_63?.localizationManager ?? null;
  }
  _r838b965359a49c() {
    ((this._r342bec21a4cdac = 0),
      (this._re50a3cc8737249 = new Array(this.var_63?.items.length ?? 0).fill(!1)));
  }
  clearPages() {
    this.pageList?.removeListItems();
    for (let e of this.var_310) e.dispose();
    ((this.var_310 = []), (this._pages = null));
  }
  _raf92feca115be1() {
    this.clearPages();
    for (let e = 0; e < this._r70b5849a7ca2e3; e++) {
      let r = new SpecialItemPageButtonView(this, e);
      (r.window != null && this.pageList?.addListItem(r.window), this.var_310.push(r));
    }
    (this.var_63?.items.length ?? 0) > 0 &&
      this.var_310.length > 0 &&
      ((this._pages = this.var_310[0]), (this._pages.selected = !0));
  }
  _r794984803f3380() {
    for (let e of this.var_1158)
      (e.window != null && this.itemRotation?.removeChild(e.window), e.dispose());
    this.var_1158 = [];
  }
  _rc480fa6bcd2c21() {
    this._r794984803f3380();
    for (let e of this.var_63?.items ?? []) {
      let r = new q8e(this, e);
      (r.window != null && this.itemRotation?.addChild(r.window), this.var_1158.push(r));
    }
  }
  updatePlaqueAndSpotlight() {
    if (!this.var_576) {
      ((this.plaqueAndSpotlightBlend = 1),
        this.var_300 >= 0 &&
          this.var_300 < this.var_1158.length &&
          this._r03885bfd0b2067(this.var_1158[this.var_300].item));
      return;
    }
    let e = 0;
    if (
      (this._r2b554b1350c0bb !== -1 &&
        this._r2b554b1350c0bb < this.var_1158.length &&
        (e = this.var_1158[this._r2b554b1350c0bb].focusValue),
      this._r2b554b1350c0bb !== this.var_300 &&
        this._r2b554b1350c0bb !== -1 &&
        e === 0 &&
        (this._r2b554b1350c0bb = -1),
      this._r2b554b1350c0bb !== this.var_300 &&
        this._extraCycles === 0 &&
        this.var_961 < Math.min(2, this._r70b5849a7ca2e3 - 1))
    ) {
      let r = this.var_1158[this.var_300],
        t = r?.focusValue ?? 0;
      t > e && r != null && ((e = t), this._r03885bfd0b2067(r.item));
    }
    this.plaqueAndSpotlightBlend = e;
  }
  set plaqueAndSpotlightBlend(e) {
    let r = 0.4;
    if (
      (e > 0.8 && (r = 0.4 + ((e - 0.8) / 0.2) * 0.6),
      (Math.abs(this._r6f05b68ea7b232 - r) > a.BLEND_BUFFERING ||
        (r === 0.4 && this._r6f05b68ea7b232 !== 0.4) ||
        (r === 1 && this._r6f05b68ea7b232 !== 1)) &&
        ((this._r6f05b68ea7b232 = r),
        this.spotlightBaseImg != null && (this.spotlightBaseImg.blend = r),
        this.spotlightImg != null && (this.spotlightImg.blend = r)),
      !(
        Math.abs(this._rb69cbd8b7e2147 - e) > a.BLEND_BUFFERING ||
        (e === 0 && this._rb69cbd8b7e2147 !== 0) ||
        (e === 1 && this._rb69cbd8b7e2147 !== 1)
      ))
    )
      return;
    ((this._rb69cbd8b7e2147 = e),
      this.itemTitleText != null && (this.itemTitleText.blend = e),
      this.itemDescText != null && (this.itemDescText.blend = e));
    let s = this.productIconWidget?.widget;
    s != null && (s.blend = e);
    let d = this.itemScrollArea?.findChildByName("_SCROLLBAR")?.findChildByName("slider_track"),
      c = d?.findChildByName("slider_bar");
    (d != null && (d.blend = e), c != null && (c.blend = e));
  }
  set selectedPage(e) {
    (this._pages != null && ((this._pages.selected = !1), (this._pages = null)),
      e >= 0 &&
        e < this.var_310.length &&
        ((this._pages = this.var_310[e]), (this._pages.selected = !0)));
  }
  markItemVisited(e) {
    e < 0 ||
      e >= this._re50a3cc8737249.length ||
      this._re50a3cc8737249[e] ||
      ((this._re50a3cc8737249[e] = !0),
      (this._r342bec21a4cdac += 1),
      this._r342bec21a4cdac === this._re50a3cc8737249.length && this._r0ae26fac6ca7ed());
  }
  _r0ae26fac6ca7ed() {
    (this.var_63?._r61922ccea07ab3 ?? 0) === C0.CLAIM_STATE_BROWSING &&
      (this._re50a3cc8737249.length === 0 ||
        this._r342bec21a4cdac !== this._re50a3cc8737249.length ||
        this.var_63?._r08d284c3336eba());
  }
  get closeButton() {
    return this._window?.findChildByName("header_button_close") ?? null;
  }
  get setTitleText() {
    return this._window?.findChildByName("set_title");
  }
  get setDescText() {
    return this._window?.findChildByName("set_desc");
  }
  get spotlightImg() {
    return this._window?.findChildByName("spotlight_img");
  }
  get itemRotation() {
    return this._window?.findChildByName("item_rotation");
  }
  get spotlightBaseImg() {
    return this._window?.findChildByName("spotlight_base_img");
  }
  get previousButton() {
    return this._window?.findChildByName("previous_button");
  }
  get nextButton() {
    return this._window?.findChildByName("next_button");
  }
  get pageList() {
    return this._window?.findChildByName("page_list");
  }
  get claimContainer() {
    return this._window?.findChildByName("claim_container");
  }
  get claimButton() {
    return this._window?.findChildByName("claim_btn");
  }
  get claimSpacer() {
    return this._window?.findChildByName("claim_spacer");
  }
  get itemTitleText() {
    return this._window?.findChildByName("item_title");
  }
  get itemDescText() {
    return this._window?.findChildByName("item_desc");
  }
  get productIconWidget() {
    return this._window?.findChildByName("product_icon");
  }
  get itemScrollArea() {
    return this._window?.findChildByName("item_scroll_area");
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r046e7d75bba215 = n((e) => {
    (this.var_63?._r61922ccea07ab3 ?? 0) === C0.CLAIM_STATE_CLAIMABLE &&
      this.var_63?._r58e83b7bd599ce();
  }, "_r046e7d75bba215");
  _r3fa79e8ce846b7 = n((e) => {
    let r = this.var_576 && !this.var_420;
    (this.navigateTo((this.var_300 + 1) % this._r70b5849a7ca2e3, !0, !1),
      (this._extraCycles = Math.max(0, this._extraCycles)),
      r &&
        ((this.var_187 > this.var_300 - 1 &&
          this.var_187 < this.var_300) ||
          (this.var_187 > this._r70b5849a7ca2e3 - 1 && this.var_300 === 0)) &&
        (this._extraCycles += 1));
  }, "_r3fa79e8ce846b7");
  _raae544f8187976 = n((e) => {
    let r = this.var_576 && this.var_420;
    (this.navigateTo(
      (this.var_300 - 1 + this._r70b5849a7ca2e3) % this._r70b5849a7ca2e3,
      !0,
      !0,
    ),
      (this._extraCycles = Math.min(0, this._extraCycles)),
      r &&
        this.var_187 > this.var_300 &&
        this.var_187 < this.var_300 + 1 &&
        (this._extraCycles -= 1));
  }, "_raae544f8187976");
}

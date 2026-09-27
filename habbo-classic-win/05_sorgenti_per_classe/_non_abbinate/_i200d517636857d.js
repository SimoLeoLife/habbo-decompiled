// Estratto da HabboAirLauncher.deobf.js, riga 341899.

class a {
  static {
    n(this, "_i200d517636857d");
  }
  static MARGIN = 3;
  static _r59bc223f475145 = -8;
  _toolbar;
  _rb63f013522059b = null;
  _items = new B();
  _disposed = !1;
  _landingView = !1;
  _r660c1154c4204e = [];
  _windowManager;
  _r08297885784d9c = 0;
  constructor(e, r) {
    ((this._toolbar = r), (this._windowManager = e));
    let t = r.assets.getAssetByName("extension_grid_xml");
    if (
      (t != null && (this._rb63f013522059b = e.buildFromXML(t.content, 1)), this._rb63f013522059b == null)
    ) {
      r.context.error("Unable to initialize toolbar extension view window from XML.", !1);
      return;
    }
    ((this._rb63f013522059b.x =
      this._rb63f013522059b.desktop.width -
      this._rb63f013522059b.width -
      a.MARGIN -
      this._r35d1730421a9ad),
      (this._rb63f013522059b.y = a.MARGIN),
      (this._rb63f013522059b.visible = !0));
  }
  get visible() {
    return this._rb63f013522059b?.visible ?? !1;
  }
  set visible(e) {
    this._rb63f013522059b != null && (this._rb63f013522059b.visible = e);
  }
  get screenHeight() {
    return this._rb63f013522059b == null ? 0 : this._rb63f013522059b.height + this._rb63f013522059b.y;
  }
  get landingView() {
    return this._landingView;
  }
  set landingView(e) {
    ((this._landingView = e), this._re232476c03a26b());
  }
  get _r35d1730421a9ad() {
    return this._r08297885784d9c;
  }
  set _r35d1730421a9ad(e) {
    ((this._r08297885784d9c = e),
      this._rb63f013522059b != null &&
        (this._rb63f013522059b.x =
          this._rb63f013522059b.desktop.width -
          this._rb63f013522059b.width -
          a.MARGIN -
          this._r35d1730421a9ad));
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this._items.getKeys()) this._rb18768cf275a26(e);
      (this._rb63f013522059b?.dispose(),
        (this._rb63f013522059b = null),
        (this._r660c1154c4204e = []),
        (this._toolbar = null),
        (this._windowManager = null),
        this._items.dispose(),
        (this._disposed = !0));
    }
  }
  _ra96f07968c4ed0(e, r, t = -1, i = null) {
    this._disposed ||
      this._items.getValue(e) != null ||
      (this._items.add(e, r),
      (t = i != null ? this._r925f11e6bb5a27(i) : t),
      t === -1 ? this._r660c1154c4204e.push(r) : this._r660c1154c4204e.splice(t, 0, r),
      this._rb63f013522059b != null && (this._toolbar?._rdb88b9ead33b4f(r), this._re232476c03a26b()),
      this._r78c45ef78ffbe7());
  }
  _rb18768cf275a26(e) {
    if (this._disposed) return;
    let r = this._items.getValue(e);
    if (r != null) {
      let t = this._r660c1154c4204e.indexOf(r);
      (t >= 0 && this._r660c1154c4204e.splice(t, 1),
        this._rb63f013522059b != null &&
          (this._toolbar?.removeDimmer(r), this._re232476c03a26b()));
    }
    (this._items.remove(e), this._r78c45ef78ffbe7());
  }
  _rf18fdd973c7e53(e) {
    return this._items.getValue(e) != null;
  }
  _re232476c03a26b() {
    if (this._rb63f013522059b != null) {
      (this._rb63f013522059b.removeListItems(), (this._rb63f013522059b.y = a.MARGIN));
      for (let e of this._r660c1154c4204e) {
        let r = this._rb286c7843cba6d(e);
        if (r.startsWith(ToolbarDisplayExtensionIds.NEW_FEATURE) || r.startsWith(ToolbarDisplayExtensionIds.const_1262)) {
          this._rb63f013522059b.addListItem(e);
          continue;
        }
        switch (r) {
          case ToolbarDisplayExtensionIds.const_635:
          case ToolbarDisplayExtensionIds.CREDITS_EXTENSION_ID:
          case ToolbarDisplayExtensionIds.const_878:
          case ToolbarDisplayExtensionIds.const_946:
          case ToolbarDisplayExtensionIds.TALENT_PROMO_EXTENSION_ID:
          case ToolbarDisplayExtensionIds.CLUB_PROMO:
          case ToolbarDisplayExtensionIds.VIP_QUESTS:
          case ToolbarDisplayExtensionIds.VIDEO_OFFERS:
          case ToolbarDisplayExtensionIds.const_1022:
          case ToolbarDisplayExtensionIds.PHONE_NUMBER:
          case ToolbarDisplayExtensionIds.VERIFICATION_CODE:
          case ToolbarDisplayExtensionIds.RETURN_GIFT:
          case ToolbarDisplayExtensionIds.NEW_FEATURE:
          case ToolbarDisplayExtensionIds.TARGETED_OFFER:
            this._rb63f013522059b.addListItem(e);
            break;
          case ToolbarDisplayExtensionIds.const_781:
            (this._rb63f013522059b.addListItem(e),
              (this._rb63f013522059b.y = a.MARGIN + a._r59bc223f475145));
            break;
          default:
            this._landingView || this._rb63f013522059b.addListItem(e);
            break;
        }
      }
      (this._rb63f013522059b.arrangeListItems(), this._rb63f013522059b.invalidate());
    }
  }
  _r8f5485f7a045e3() {
    for (let e of this._r660c1154c4204e) this._toolbar?.removeDimmer(e);
  }
  _r6822d89b476fe5(e) {
    let r = null;
    if (
      (e === Me.EXT_GROUP && (r = this._items.getValue("room_group_info") ?? null), r != null && r.visible)
    ) {
      let t = new D();
      return (r.getGlobalRectangle(t), t);
    }
    return null;
  }
  _raa4dc20ed68e9a(e) {
    return e === Me.EXT_GROUP ? (this._items.getValue("room_group_info") ?? null) : null;
  }
  _rb286c7843cba6d(e) {
    let t = this._items.getValues().indexOf(e);
    return t >= 0 ? (this._items.getKeys()[t] ?? "") : "";
  }
  _r925f11e6bb5a27(e) {
    for (let r = 0; r < this._r660c1154c4204e.length; r++)
      if (e.includes(this._r660c1154c4204e[r].name)) return r;
    return -1;
  }
  _r78c45ef78ffbe7() {
    let e = new _i05394ecc0c0c4d(25, 1);
    (e.addEventListener(DeBouncer._rf33144eac61595, this.onResizeTimer), e.start());
  }
  onResizeTimer = n((e) => {
    this._toolbar?.events.dispatchEvent?.(new ExtensionViewEvent(ExtensionViewEvent.const_366));
  }, "onResizeTimer");
}

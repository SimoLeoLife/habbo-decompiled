// Extracted from HabboAirLauncher.deobf.js, line 236093.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/collectibles/CollectiblesView.as
// Obfuscated name: _ief83b391928b90

class a {
  constructor(e, r) {
    this.var_38 = e;
    this._windowManager = r;
    (this._windowManager,
      (this._rb5ea9aad9f0aaa = new UnkEventDispatcherWrapperSubclass_05394e(a.IMAGE_UPDATE_DELAY_MS)),
      this._rb5ea9aad9f0aaa.addEventListener(DeBouncer.addEventListener, this._r9e95959d13d0ed),
      this._rb5ea9aad9f0aaa.start());
  }
  static {
    n(this, "CollectiblesView");
  }
  static _r6472f789a2e193 = 0;
  static STATE_INITIALIZING = 1;
  static STATE_EMPTY = 2;
  static STATE_CONTENT = 3;
  static IMAGE_UPDATE_DELAY_MS = 30;
  static _r6b448aeb8fea30 = [
    class_3169.const_254,
    class_3169.const_545,
    class_3169.CLOTHING,
    class_3169.CHAT_STYLE,
    class_3169.BADGE,
    class_3169.const_123,
    class_3169.PET,
  ];
  _view = null;
  _disposed = !1;
  var_217 = !1;
  var_605 = null;
  _r1e505e403e2e65 = new Map();
  var_2475 = a._r6472f789a2e193;
  _rb5ea9aad9f0aaa;
  get disposed() {
    return this._disposed;
  }
  get isVisible() {
    return this._view?.parent != null && this._view.visible;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this.var_38 = null),
      this.var_605?.dispose(),
      (this.var_605 = null),
      this._view?.dispose(),
      (this._view = null),
      this._rb5ea9aad9f0aaa != null &&
        (this._rb5ea9aad9f0aaa.removeEventListener(DeBouncer.addEventListener, this._r9e95959d13d0ed),
        this._rb5ea9aad9f0aaa.stop(),
        (this._rb5ea9aad9f0aaa = null)));
  }
  getWindowContainer() {
    return (
      this.var_217 || this.init(),
      this._view == null || this._view.disposed ? null : this._view
    );
  }
  _re7a96344d58b12(e, r) {
    for (let t of e) {
      let i = this._r7baef9abffcd48(t),
        s = this._r1e505e403e2e65.get(i) ?? null;
      s != null
        ? s.addAssetId(t.assetId)
        : this._r1e505e403e2e65.set(i, new oQ(t, [t.assetId], this.var_38));
    }
    for (let t of r) {
      let i = this._r7baef9abffcd48(t),
        s = this._r1e505e403e2e65.get(i) ?? null;
      s == null ||
        !s._ree1ef1837a526f(t.assetId) ||
        (s.amount === 0 && (s.dispose(), this._r1e505e403e2e65.delete(i)));
    }
    (this.var_605?._r2a2b5de73dae58(Array.from(this._r1e505e403e2e65.values())),
      this.updateState(),
      this.updatePreview());
  }
  _r28af190239d0f6() {
    for (let e of this._r1e505e403e2e65.values()) e._r28af190239d0f6();
  }
  _r7d121128e5d38d(e, r = !0) {
    let t = this._r1e505e403e2e65.get(this._r7baef9abffcd48(e)) ?? null;
    return t == null ? null : !r || t.hasAsset(e.assetId) ? t : null;
  }
  updateFilters() {
    if (!this.var_217 || this._view == null || this._view.disposed) return;
    let e = this.filterOptions?.selection ?? 0,
      r = e <= 0 ? -1 : (a._r6b448aeb8fea30[e - 1] ?? -1);
    this.var_605?.setFilter(r, this.filterText?.caption ?? "");
  }
  updatePreview() {
    if (!this.var_217 || this._view == null || this._view.disposed) return;
    this._r3889ffc26059da();
    let e = this.var_38?.selected ?? null;
    if (e == null) return;
    let r = this.var_38?.controller.catalog._r93bfd6c6424c93 ?? null,
      t = this.nftImageWidget?.widget;
    if (
      (t != null && (t.productInfo = e.renderableItem),
      this.nftNameText != null &&
        (this.nftNameText.text = r?.getProductName(e.renderableItem) ?? ""),
      this.nftTypeText != null)
    ) {
      let i = this.var_38?.controller.localization,
        s = r?.getProductType(e.renderableItem) ?? "";
      this.nftTypeText.text = `${i?.getLocalization("collectibles.item.type") ?? "collectibles.item.type"}: ${s}`;
    }
    this.offerButton != null &&
      (e._rcd5da7ed1ad363 === 0 ? this.offerButton.disable() : this.offerButton.enable());
  }
  updateState() {
    if (!this.var_217) return;
    let e = this.var_38?.items.length ?? 0,
      r = a.STATE_CONTENT;
    ((this.var_38?._rbbe2e53c82e0a2() ?? !1)
      ? e === 0 && (r = a.STATE_EMPTY)
      : (r = a.STATE_INITIALIZING),
      this.var_2475 !== r && ((this.var_2475 = r), this.updateContainerVisibility()));
  }
  updateContainerVisibility() {
    if (this.var_38?.controller._ra2d0b2740c7155 !== class_2106.COLLECTIBLES || this._view == null)
      return;
    let e = this.var_38.controller.view.loadingContainer,
      r = this.var_38.controller.view.emptyContainer,
      t = this._view.findChildByName("grid_container"),
      i = this._view.findChildByName("options_container"),
      s = this._view.findChildByName("preview_container");
    switch (this.var_2475) {
      case a.STATE_INITIALIZING:
        (e != null && (e.visible = !0),
          r != null && (r.visible = !1),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1),
          s != null && (s.visible = !1));
        break;
      case a.STATE_EMPTY:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !0),
          t != null && (t.visible = !1),
          i != null && (i.visible = !1),
          s != null && (s.visible = !1));
        break;
      case a.STATE_CONTENT:
        (e != null && (e.visible = !1),
          r != null && (r.visible = !1),
          t != null && (t.visible = !0),
          i != null && (i.visible = !0),
          s != null && (s.visible = !0));
        break;
    }
  }
  _r3889ffc26059da() {
    this.var_38 != null &&
      this.var_38.selected == null &&
      (this.var_605?._re0b698839cb087.length ?? 0) > 0 &&
      this.var_38.setSelected(this.var_605?._re0b698839cb087[0] ?? null);
  }
  _r7baef9abffcd48(e) {
    return e._raeb033db5aa083;
  }
  init() {
    if (
      ((this._view = this.var_38?.controller.view._r1f685677bdb2bd(class_2106.COLLECTIBLES) ?? null),
      this._view == null)
    )
      return;
    ((this._view.procedure = (...i) => this.windowEventProc(i[0], i[1])), (this._view.visible = !1));
    let e = this._view.findChildByName("item_grid"),
      r = this._view.findChildByName("item_grid_pages");
    this.var_605 = new UnkClass_7883f7(this, e, r);
    let t = this._view.findChildByName("filter");
    (t != null && (t.caption = ""),
      this.populateFilterOptions(),
      (this.var_217 = !0),
      this.updateState());
  }
  _r9e95959d13d0ed = n(() => {
    this._r4172bbd95335ac();
  }, "_r9e95959d13d0ed");
  _r4172bbd95335ac() {
    let e = this.var_605?._re0b698839cb087 ?? [];
    for (let r of e)
      if (!r.isInitialized) {
        r.initializeImage();
        break;
      }
  }
  populateFilterOptions() {
    let e = [],
      r = this.var_38?.controller.localization;
    e.push(r?.getLocalization("inventory.filter.option.everything", "Everything") ?? "Everything");
    for (let t of a._r6b448aeb8fea30)
      switch (t) {
        case class_3169.const_254:
          e.push(r?.getLocalization("product.type.room") ?? "product.type.room");
          break;
        case class_3169.const_545:
          e.push(r?.getLocalization("product.type.wall") ?? "product.type.wall");
          break;
        case class_3169.CLOTHING:
          e.push(r?.getLocalization("product.type.clothing") ?? "product.type.clothing");
          break;
        case class_3169.CHAT_STYLE:
          e.push(r?.getLocalization("product.type.chatstyle") ?? "product.type.chatstyle");
          break;
        case class_3169.BADGE:
          e.push(r?.getLocalization("product.type.badge") ?? "product.type.badge");
          break;
        case class_3169.const_123:
          e.push(r?.getLocalization("product.type.effect") ?? "product.type.effect");
          break;
        case class_3169.PET:
          e.push(r?.getLocalization("product.type.pets") ?? "product.type.pets");
          break;
      }
    this.filterOptions != null &&
      (this.filterOptions.populate(e), (this.filterOptions.selection = 0));
  }
  windowEventProc(e, r) {
    if (!(e == null || r == null)) {
      if (e.type === u.CLICK)
        switch (r.name) {
          case "clear_filter_button":
            (this.filterText != null && (this.filterText.caption = ""),
              (r.visible = !1),
              this.updateFilters());
            break;
          case "offertotrade_btn":
            if (this.var_38?.selected != null && this.offerAmountInput != null) {
              let t = Number.parseInt(this.offerAmountInput.caption, 10);
              (Number.isFinite(t) || (t = 1),
                (t = Math.min(Math.max(1, t), this.var_38.selected._rcd5da7ed1ad363)),
                (this.offerAmountInput.caption = String(t)),
                this.var_38._rd7adde26163d88(this.var_38.selected, t));
            }
            break;
        }
      else if (e.type === sr.const_900) {
        let t = e;
        if (r.name === "filter") {
          let i = this._view?.findChildByName("clear_filter_button");
          (i != null && (i.visible = r.caption.length > 0), t.keyCode === 13 && this.updateFilters());
        }
      }
      e.type === y.const_238 && r.name === "filter.options" && this.updateFilters();
    }
  }
  get nftImageWidget() {
    return this._view?.findChildByName("nft_image");
  }
  get nftNameText() {
    return this._view?.findChildByName("nft_name");
  }
  get nftTypeText() {
    return this._view?.findChildByName("nft_type");
  }
  get offerAmountInput() {
    return this._view?.findChildByName("offertotrade_cnt");
  }
  get offerButton() {
    return this._view?.findChildByName("offertotrade_btn");
  }
  get filterOptions() {
    return this._view?.findChildByName("filter.options");
  }
  get filterText() {
    return this._view?.findChildByName("filter");
  }
}

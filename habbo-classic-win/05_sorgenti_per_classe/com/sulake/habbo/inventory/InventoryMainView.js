// Estratto da HabboAirLauncher.deobf.js, riga 241496.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/InventoryMainView.as
// Nome offuscato: _if01ec582044adb

class a {
  static {
    n(this, "InventoryMainView");
  }
  static COUNTER_MARGIN = 3;
  static _rcc3622351cf03c = new E(120, 150);
  _windowManager;
  var_997;
  var_33 = null;
  _r4f7da2233f3b51 = null;
  _r21340dab76343e = null;
  _r77a4f0a9d34b54 = null;
  _rfe7b738b88b1bd = null;
  var_63;
  _toolbar = null;
  var_2344 = null;
  var_1774 = null;
  var_2116 = null;
  var_2150 = null;
  var_2469 = null;
  var_2459 = null;
  _r8fcff3d700e347 = new Map();
  _rf738134d06339c = null;
  _r9f548e86531b51 = !1;
  _r4e42c32350e7a1 = 0;
  constructor(e, r, t) {
    ((this.var_63 = e), (this.var_997 = t), (this._windowManager = r));
  }
  get isVisible() {
    return this.var_33?.visible ?? !1;
  }
  get isActive() {
    return this.var_33?.getStateFlag(class_1948.WINDOW_STATE_ACTIVE) ?? !1;
  }
  get emptyContainer() {
    return this.var_33?.findChildByName("empty_container");
  }
  get loadingContainer() {
    return this.var_33?.findChildByName("loading_container");
  }
  get mainContainer() {
    return this.var_33?.findChildByName("contentArea");
  }
  _rcd4f73da4407b7() {
    return this._r4f7da2233f3b51;
  }
  _r782a6c69f4c324() {
    return this._r77a4f0a9d34b54;
  }
  _r1f685677bdb2bd(e) {
    return this._r8fcff3d700e347.get(e) ?? null;
  }
  dispose() {
    ((this.var_2344 = null),
      (this.var_1774 = null),
      (this.var_2469 = null),
      (this.var_2150 = null),
      (this.var_2116 = null),
      (this.var_2459 = null),
      (this.var_63 = null),
      (this._r21340dab76343e = null),
      (this._rfe7b738b88b1bd = null),
      this._r8fcff3d700e347.clear(),
      this.var_33 != null && (this.var_33.dispose(), (this.var_33 = null)),
      this._toolbar?.events != null &&
        this._toolbar.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog),
      (this._toolbar = null),
      (this._windowManager = null),
      (this.var_997 = null));
  }
  showCollectiblesTab(e) {
    let r = this.var_33?.findChildByName("tabs");
    if (r != null)
      for (let t = 0; t < r.numTabItems; t++) {
        let i = r.getTabItemAt(t);
        i != null &&
          i.name !== class_2106.COLLECTIBLES &&
          i.name !== class_2106.FURNITURE &&
          l_.disableSection(i, e);
      }
  }
  _r2d58ab2457c4f1(e) {
    if (this.var_33 == null) {
      this._r9f548e86531b51 = e;
      return;
    }
    let r = this.var_33.findChildByName("tabs");
    if (r == null || this._rf738134d06339c == null) {
      this._r9f548e86531b51 = e;
      return;
    }
    (this._r9f548e86531b51 && !e
      ? r._ra8b044f5467c44(this._rf738134d06339c)
      : !this._r9f548e86531b51 && e && r._r3cc3a75f8b7a86(this._rf738134d06339c, this._r4e42c32350e7a1),
      (this._r9f548e86531b51 = e));
  }
  _r795e0dc86b4e1a() {
    this.var_63?.closingInventoryView();
    let e = this.getWindow(!1);
    e != null && (e.visible = !1);
  }
  _r4b6c5c13cceef6() {
    let e = this.getWindow();
    e != null &&
      ((e.visible = !0),
      this.var_63?._r895f5ffa9bb541(
        this._r77a4f0a9d34b54 != null && this._r77a4f0a9d34b54.length > 0
          ? this._r77a4f0a9d34b54
          : (this._r4f7da2233f3b51 ?? ""),
      ));
  }
  toggleCategoryView(e, r = !0, t = !1) {
    let i = this.getWindow();
    if (i == null) return !1;
    if (i.visible)
      if (this._r4f7da2233f3b51 === e) {
        if (r)
          if (Dl.isHiddenByOtherWindows(i)) i.activate();
          else return (this._r795e0dc86b4e1a(), !1);
      } else this._r7cc87a2b8f843b(e);
    else
      (t && this._r4f7da2233f3b51 != null && this._r4f7da2233f3b51 !== e && this._r7cc87a2b8f843b(e),
        (i.visible = !0),
        i.activate(),
        (e !== this._r4f7da2233f3b51 || !(this.var_63?._r7a3d3dd83c6b22(e) ?? !1)) &&
          this._r7cc87a2b8f843b(e),
        this.var_63?._r895f5ffa9bb541(e));
    return !0;
  }
  activate() {
    this.getWindow()?.activate();
  }
  _rcd15fba197905b(e, r = !0) {
    let t = this.getWindow();
    t != null &&
      (t.visible
        ? this._r77a4f0a9d34b54 === e
          ? r && (t.visible = !1)
          : this.setSubViewToCategory(e)
        : ((t.visible = !0), e !== this._r77a4f0a9d34b54 && this.setSubViewToCategory(e)));
  }
  _r1efbb3c3ec033c() {
    this._r77a4f0a9d34b54 != null && this.setSubViewToCategory(this._r77a4f0a9d34b54);
  }
  _rea7d5c55f0e700(e) {
    (this._toolbar?.events != null &&
      this._toolbar.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog),
      (this._toolbar = e),
      this._toolbar.events.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.IIDHabboCatalog));
  }
  _ra9558e6fd9915e(e) {
    this.var_33 != null &&
      (this.var_2344 == null && (this.var_2344 = this._rb9816fde8640b4(class_2106.FURNITURE)),
      this.updateCounter(this.var_2344, e));
  }
  _rbd01dcc7eaac32(e) {
    this.var_33 != null &&
      (this.var_1774 == null && (this.var_1774 = this._rb9816fde8640b4(class_2106.RENTABLES)),
      this.updateCounter(this.var_1774, e));
  }
  _rebb1cdf625af47(e) {
    this.var_33 != null &&
      (this.var_2150 == null && (this.var_2150 = this._rb9816fde8640b4(class_2106.PETS)),
      this.updateCounter(this.var_2150, e),
      this.var_63?._refc910356bea72?.updateView());
  }
  _rfb926f0670d7c8(e) {
    this.var_33 != null &&
      (this.var_2116 == null && (this.var_2116 = this._rb9816fde8640b4(class_2106.BADGES)),
      this.updateCounter(this.var_2116, e),
      this.var_63?._r4757926cfb0b72?.updateView());
  }
  _rb1e22adafbd3c3(e) {
    this.var_33 != null &&
      (this.var_2469 == null && (this.var_2469 = this._rb9816fde8640b4(class_2106.BOTS)),
      this.updateCounter(this.var_2469, e),
      this.var_63?._re13e2a8fc67c8d?.updateView());
  }
  _r9b7035300f4ca3(e) {
    this.var_33 != null &&
      (this.var_2459 == null && (this.var_2459 = this._rb9816fde8640b4(class_2106.COLLECTIBLES)),
      this.updateCounter(this.var_2459, e),
      this.var_63?._r6798423e068a1a?.updateView());
  }
  resizeToFitContents() {
    let e = this.var_33,
      r = e?.findChildByName("subContentArea");
    e == null ||
      r == null ||
      (r.visible ? (r.height = l_.getLowestPoint(r)) : (r.height = 0), e.resizeToFitContent());
  }
  IIDHabboCatalog = n((...e) => {
    let r = e[0];
    if (r?._re9c693c8b69b04 === Me.INVENTORY && r.type === HabboToolbarEvent.TOOLBAR_CLICK)
      switch (this._r4f7da2233f3b51) {
        case class_2106.PETS:
          this.toggleCategoryView(class_2106.PETS);
          break;
        case class_2106.FURNITURE:
          this.toggleCategoryView(class_2106.FURNITURE);
          break;
        case class_2106.RENTABLES:
          this.toggleCategoryView(class_2106.RENTABLES);
          break;
        case class_2106.BADGES:
          this.toggleCategoryView(class_2106.BADGES);
          break;
        case class_2106.BOTS:
          this.toggleCategoryView(class_2106.BOTS);
          break;
        case class_2106.COLLECTIBLES:
          this.toggleCategoryView(class_2106.FURNITURE);
          break;
        default:
          this.var_63?._rf93ea073fdcb45(class_2106.FURNITURE);
          break;
      }
  }, "IIDHabboCatalog");
  getWindow(e = !0) {
    if (this.var_33 == null && e) {
      let i = this.var_997?.getAssetByName("inventory_xml")?.content;
      if (
        (this._r8fcff3d700e347.clear(),
        i != null && (this.var_33 = this._windowManager?.buildFromXML(i)),
        this.var_33 != null)
      ) {
        ((this.var_33.position = a._rcc3622351cf03c.clone()),
          (this.var_33.visible = !1),
          (this.var_33.procedure = (...o) => this.windowEventProc(o[0], o[1])),
          this.var_33.setParamFlag(
            N.WINDOW_PARAM_MOUSE_SCALING_TARGET,
            this.var_63?.getBoolean("inventory.allow.scaling") ?? !1,
          ),
          this._r580028ebe6b452(class_2106.FURNITURE),
          this._r580028ebe6b452(class_2106.COLLECTIBLES),
          this._r580028ebe6b452(class_2106.PETS),
          this._r580028ebe6b452(class_2106.BOTS),
          this._r580028ebe6b452(class_2106.BADGES));
        let s = this.var_33.findChildByName("tabs");
        if (s != null) {
          let o = [];
          for (; s.numTabItems > 0;) {
            let d = s.getTabItemAt(0);
            if (d == null) break;
            (o.push(d), s._ra8b044f5467c44(d));
          }
          for (let d of o)
            switch (d.name) {
              case class_2106.COLLECTIBLES:
                this.var_63?.web3tradeEnabled &&
                  ((this._rf738134d06339c = d),
                  (this._r4e42c32350e7a1 = s.numTabItems),
                  this._r9f548e86531b51 && s._rc6654b9a9673e2(d));
                break;
              case class_2106.BOTS:
                this.var_63?.getBoolean("inventory.bots.enabled") && s._rc6654b9a9673e2(d);
                break;
              case class_2106.RENTABLES:
                !(this.var_63?._re9e4d1b42c1d4d ?? !1) &&
                  (this.var_63?.getBoolean("duckets.enabled") ?? !1) &&
                  s._rc6654b9a9673e2(d);
                break;
              default:
                s._rc6654b9a9673e2(d);
                break;
            }
        }
        this.var_63?._rada8e3e41627a7();
      }
      this.var_63?._rf085caf479da12();
    }
    return (
      this.var_33 != null &&
        (this.var_33.y < 0 && (this.var_33.y = 0),
        this.var_33.x < 0 && (this.var_33.x = 0)),
      this.var_33
    );
  }
  windowEventProc(e, r) {
    if (!(e == null || r == null))
      if (e.type === y.const_238) {
        let s = r.selector?.getSelected()?.name;
        s != null &&
          s !== this._r4f7da2233f3b51 &&
          (this._r3e8f4f404dfd81(this._r4f7da2233f3b51), this.var_63?._rf93ea073fdcb45(s));
      } else
        e.type === u.CLICK
          ? (r.name === "header_button_close" && this._r795e0dc86b4e1a(),
            r.name === "open_catalog_btn" && this.var_63?.catalog.openCatalog())
          : e.type === u.DOUBLE_CLICK &&
            r.name === "titlebar" &&
            this.var_33 != null &&
            (this.var_33.height = this.var_33.limits.minHeight);
  }
  _r580028ebe6b452(e) {
    let r = this.mainContainer,
      t = r?.getChildByName(e);
    r != null && t != null && this._r8fcff3d700e347.set(e, r.removeChild(t));
  }
  _r3e8f4f404dfd81(e) {
    switch (e) {
      case class_2106.FURNITURE:
      case class_2106.RENTABLES:
        this.var_63?._r9275a8e42af3cc?._r89f1d7f95c6807();
        break;
      case class_2106.PETS:
        this.var_63?._refc910356bea72?._r89f1d7f95c6807();
        break;
      case class_2106.BADGES:
        this.var_63?._r4757926cfb0b72?._r89f1d7f95c6807();
        break;
      case class_2106.COLLECTIBLES:
        this.var_63?._r6798423e068a1a?._r89f1d7f95c6807();
        break;
      case class_2106.BOTS:
        this.var_63?._re13e2a8fc67c8d?._r89f1d7f95c6807();
        break;
    }
  }
  _r7cc87a2b8f843b(e) {
    if (e.length === 0) return;
    (this.emptyContainer != null && (this.emptyContainer.visible = !1),
      this.loadingContainer != null && (this.loadingContainer.visible = !1),
      this.var_63?._r9fc90ede19317b(e));
    let r = this.mainContainer;
    if (r == null) return;
    (this._r21340dab76343e != null && r.removeChild(this._r21340dab76343e), r.invalidate());
    let t = this.var_63?._r4f55c92004138f(e) ?? null;
    if (t == null) return;
    ((t.visible = !0),
      r.addChild(t),
      (t.height = r.height),
      this.var_63?.updateView(e),
      (this._r21340dab76343e = t),
      (this._r4f7da2233f3b51 = e));
    let i = this.var_33?.findChildByName("tabs"),
      s = i?.selector?._rf1edf3aad44c96(e);
    (i?.selector != null && s != null && i.selector.setSelected(s), this._rb18f962a260842());
  }
  _rb18f962a260842() {
    let e = this.var_63?.catalog.viewer();
    if (e != null)
      for (let r = 0; r < e._r6d8ad6fbc67842; r++) e.numberOfSlots(r) != null && e.releaseSlot(r);
  }
  enableScaling() {
    this.var_33 != null &&
      ((this.var_33.height = this.var_33.limits.minHeight),
      this.var_33.setParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET, !0),
      this.var_33.findChildByName("top_content")?.setParamFlag(N._r46a9ac2e4c9863, !0));
  }
  disableScaling() {
    this.var_33 != null &&
      ((this.var_33.height = this.var_33.limits.minHeight),
      this.var_33.setParamFlag(N.WINDOW_PARAM_MOUSE_SCALING_TARGET, !1),
      this.var_33.findChildByName("top_content")?.setParamFlag(N._r46a9ac2e4c9863, !1));
  }
  setSubViewToCategory(e) {
    if (e.length === 0 || this.var_33 == null) return;
    this.var_63?._r9fc90ede19317b(e);
    let r = this.var_33.findChildByName("subContentArea");
    if (r == null) return;
    for (; r.numChildren > 0;) r.removeChildAt(0);
    let t = this.var_63?._r0ce156c9ce88ec(e) ?? null;
    t != null
      ? (this.disableScaling(), (r.visible = !0), (t.visible = !0), r.addChild(t))
      : (this.enableScaling(), (r.visible = !1));
    let i = this.var_33.findChildByName("top_content");
    (i != null && (r.y = i.rectangle.bottom + 5),
      this.resizeToFitContents(),
      this.var_33.parent != null &&
        (this.var_33.x + this.var_33.width > this.var_33.parent.width &&
          (this.var_33.x = this.var_33.parent.width - this.var_33.width),
        this.var_33.y + this.var_33.height > this.var_33.parent.height &&
          (this.var_33.y =
            (this.var_33.parent.height - this.var_33.height) * 0.5),
        this.var_33.y < 0 && (this.var_33.y = 0)),
      (this._rfe7b738b88b1bd = t),
      (this._r77a4f0a9d34b54 = e));
  }
  _rb9816fde8640b4(e) {
    let r = this._windowManager?.createUnseenItemCounter() ?? null,
      t = this.var_33?.findChildByName(e);
    return (
      r != null &&
        t != null &&
        (t.addChild(r), (r.x = t.width - r.width - a.COUNTER_MARGIN), (r.y = a.COUNTER_MARGIN)),
      r
    );
  }
  updateCounter(e, r) {
    if (e == null || this.var_33 == null) return;
    let t = e.findChildByName("count");
    (t != null && (t.caption = String(r)), (e.visible = r > 0));
    let i = "";
    switch (e) {
      case this.var_2469:
        i = class_2106.BOTS;
        break;
      case this.var_2459:
        i = class_2106.COLLECTIBLES;
        break;
      case this.var_2150:
        i = class_2106.PETS;
        break;
      case this.var_2116:
        i = class_2106.BADGES;
        break;
      case this.var_2344:
        i = class_2106.FURNITURE;
        break;
      case this.var_1774:
        i = class_2106.RENTABLES;
        break;
    }
    let s = this.var_33.findChildByName(i),
      o = s?.getChildByTag("TITLE");
    s != null &&
      o != null &&
      (e.visible ? (o.margins.right = e.width + 2 * a.COUNTER_MARGIN) : (o.margins.right = o.margins.left),
      (s.width = o.width),
      (e.x = s.width - e.width - a.COUNTER_MARGIN));
  }
}

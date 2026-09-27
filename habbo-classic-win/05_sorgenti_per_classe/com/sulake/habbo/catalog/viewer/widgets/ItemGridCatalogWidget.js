// Estratto da HabboAirLauncher.deobf.js, riga 189774.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/ItemGridCatalogWidget.as
// Nome offuscato: _i9b23c0631523e5

class extends CatalogWidget {
  constructor(r, t, i) {
    super(r);
    this.var_61 = t;
    this._r8873f92b5650f9 = i;
  }
  static {
    n(this, "ItemGridCatalogWidget");
  }
  _r3e30777a814fac = null;
  _gridItemLayout = null;
  var_3089 = null;
  var_3460 = null;
  var_265 = null;
  _r08f674709607f3 = 0;
  var_382 = null;
  _r5896b7a3fdd842 = null;
  var_5875 = !0;
  _r908aaf8a2c275c = 0;
  _rb6748cd03e5af3 = StringArrayStuffData.var_426;
  _r442b16e120d430 = "";
  _r0ee2ba6f6a3d45 = "";
  _rafc4c6b32070ed = "";
  _raf7cf1ddebe6e9 = {};
  _r4c10855429706d = 0;
  dispose() {
    (this.events?.removeEventListener?.(CatalogWidgetEventEnum.GUILD_SELECTED, this._r4de96d8a4a5cf2),
      this.events?.removeEventListener?.(CatalogWidgetEventEnum.COLOUR_INDEX, this.onColourIndex),
      this.var_382 != null &&
        (this.var_382.stop(),
        this._r5896b7a3fdd842 != null &&
          (this.var_382.removeEventListener(DeBouncer.addEventListener, this._r5896b7a3fdd842),
          (this._r5896b7a3fdd842 = null)),
        (this.var_382 = null)),
      this._r3e30777a814fac?._rbb4c26d068856f(),
      (this._r3e30777a814fac = null),
      (this._gridItemLayout = null),
      (this.var_3089 = null),
      (this.var_3460 = null),
      (this.var_265 = null),
      (this._raf7cf1ddebe6e9 = {}),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    this._rd7318259311b4b(CatalogWidgetEnum.ITEM_GRID);
    let r = this._window?.tags.indexOf("FIXED") !== -1,
      t = this._window?.getChildAt(0) ?? null;
    if (
      (!r &&
        t != null &&
        this._window != null &&
        ((t.width = this._window.width), (t.height = this._window.height)),
      (this._r3e30777a814fac = this.window?.findChildByName("itemGrid")),
      this._r3e30777a814fac && (this._r3e30777a814fac._rb4de873fcd7d8f = 0),
      this._r3e30777a814fac == null || this.page == null)
    )
      return !1;
    ((this._gridItemLayout = this._ra9cbaacb6b51fb("gridItem")),
      (this.var_3460 = this._ra9cbaacb6b51fb("grid_item_with_price_single")),
      (this.var_3089 = this._ra9cbaacb6b51fb("grid_item_with_price_multi")));
    let i = this.populateItemGrid();
    return (
      this.var_5875
        ? ((this.var_382 = new _i05394ecc0c0c4d(25)),
          (this._r5896b7a3fdd842 = (s) => this._r68e7071635a8f2(s, i)),
          this.var_382.addEventListener(DeBouncer.addEventListener, this._r5896b7a3fdd842),
          this.var_382.start())
        : this._r68e7071635a8f2(null, i),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.GUILD_SELECTED, this._r4de96d8a4a5cf2),
      this.events?.addEventListener?.(CatalogWidgetEventEnum.COLOUR_INDEX, this.onColourIndex),
      !0
    );
  }
  select(r, t) {
    (this.var_265?.deactivate(), (this.var_265 = r), r.activate());
    let i = r.view?.findChildByName("border_outline");
    i != null && (i.color = this._r8873f92b5650f9 === "NORMAL" ? 6538729 : 16758076);
    let s = r;
    if (s == null || s.isLazy) return;
    let o = s.offer;
    (this.events?.dispatchEvent?.(new _idfee6137b0eb86(o)),
      o.product?.productType === class_1803.PRODUCT_TYPE_ITEM &&
        this.events?.dispatchEvent?.(new SetExtraPurchaseParameterEvent(o.product.extraParam)),
      t &&
        this.events?.dispatchEvent?.(
          new CatalogWidgetColoursEvent(
            this._r8fc82b0c277f9a(),
            "ctlg_clr_27x22_1",
            "ctlg_clr_27x22_2",
            "ctlg_clr_27x22_3",
            this._r010a57f795d80a(),
          ),
        ));
  }
  startDragAndDrop(r) {
    let t = r.offer;
    return (
      t != null &&
        (this.var_61?.clubLevel ?? 0) >= t.clubLevel &&
        this.page?.viewer.catalog?._r554b9a058961c3(this, t),
      !0
    );
  }
  _r953e33111bd217(r, t) {
    this.disposed || !r || this.events?.dispatchEvent?.(new _i402cad4748bdc2(!1, t));
  }
  populateItemGrid() {
    let r = this.page?._rf3871e54af1151 === "default_3x3_color_grouping",
      t = {},
      i = [];
    for (let o of this.page?.offers ?? []) {
      if (!r || !o.product?.furnitureData || !o.product.isColorable) {
        i.push(o);
        continue;
      }
      let [d, c] = o.product.furnitureData.fullName.split("*"),
        f = Number(c);
      this._raf7cf1ddebe6e9[d] ??= [];
      let l = 16777215;
      for (let b of o.product.furnitureData.colours) b !== 16777215 && (l = b);
      (this._raf7cf1ddebe6e9[d].indexOf(l) === -1 && (this._raf7cf1ddebe6e9[d][f] = l),
        t[d] == null
          ? ((t[d] = i.length), i.push(o))
          : d.indexOf("bc_") === 0 && (l === 16777215 || l === 16777214) && (i[t[d]] = o));
    }
    let s = [];
    for (let o of this.page?.offers ?? []) {
      let d = !r || !o.product?.furnitureData || !o.product.isColorable || i.indexOf(o) !== -1;
      if (d) {
        let c = this.createGridItem(o.gridItem);
        c != null && o.gridItem != null && (o.gridItem.view = c);
      }
      (o.gridItem != null &&
        (o.gridItem.setDraggable(this.page?._r5fa793e5f07ae1 ?? !1), (o.gridItem.grid = this)),
        o.pricingModel === "pricing_model_bundle" &&
          o._r10b16f6e9cda51 instanceof BundleProductContainer &&
          (this._r08f674709607f3++, o._r10b16f6e9cda51.setBundleCounter?.(this._r08f674709607f3)),
        d && s.push(o));
    }
    return s;
  }
  _r0c3724b1e46a5d() {
    (this.var_382?.reset(), (this._r908aaf8a2c275c = 0));
  }
  _r68e7071635a8f2(r = null, t = null) {
    if (this.disposed) return;
    t ??= this.page?.offers ?? [];
    let i = t.length;
    if (!(i <= 0)) {
      for (let s = 0; s < 3; s++)
        if (
          (this._r908aaf8a2c275c >= 0 &&
            this._r908aaf8a2c275c < i &&
            this._r60affcfc0cd2f3(t[this._r908aaf8a2c275c]),
          this._r908aaf8a2c275c++,
          this._r908aaf8a2c275c >= i)
        ) {
          this._r0c3724b1e46a5d();
          break;
        }
    }
  }
  createGridItem(r) {
    if (r == null || this._r3e30777a814fac == null) return null;
    let t = r,
      i = t?.offer ?? null,
      s = i != null && (i.priceInCredits > 0 || i.priceInActivityPoints > 0 || i.priceInSilver > 0),
      o = this._gridItemLayout;
    if (
      (s &&
        this._r8873f92b5650f9 !== CatalogType.BUILDER &&
        (o =
          i != null && i.priceInCredits > 0 && i.priceInActivityPoints > 0
            ? this.var_3089
            : this.var_3460),
      o == null)
    )
      return null;
    let d = this.page?.viewer.catalog,
      c = d?.windowManager.buildFromXML(o);
    return (
      c != null &&
        (this._r3e30777a814fac.addGridItem(c),
        (r.view = c),
        d != null && this._r8873f92b5650f9 !== CatalogType.BUILDER && t instanceof I0 && t.createCurrencyIndicators(d)),
      c
    );
  }
  _r60affcfc0cd2f3(r) {
    let t = null;
    if (this._rb6748cd03e5af3 !== StringArrayStuffData.var_426) {
      let i = new ao();
      (i._rd51ff77b1b0bee([
        "0",
        this._rb6748cd03e5af3.toString(),
        this._rafc4c6b32070ed,
        this._r442b16e120d430,
        this._r0ee2ba6f6a3d45,
      ]),
        (t = i));
    }
    (r._r10b16f6e9cda51?.initProductIcon(this.page?.viewer.roomEngine ?? null, t),
      r._r10b16f6e9cda51 != null && (r._r10b16f6e9cda51.grid = this));
  }
  _r8fc82b0c277f9a() {
    let r = null;
    for (let i of this.page?.offers ?? [])
      if (i.gridItem === this.var_265) {
        r = i;
        break;
      }
    if (r?.product?.isColorable !== !0 || r.product.furnitureData == null) return [];
    let t = r.product.furnitureData.fullName.split("*")[0];
    return this._raf7cf1ddebe6e9[t] ?? [];
  }
  _r010a57f795d80a() {
    let r = null;
    for (let t of this.page?.offers ?? [])
      if (t.gridItem === this.var_265) {
        r = t;
        break;
      }
    return r?.product?.isColorable !== !0 || r.product.furnitureData == null
      ? 0
      : Math.max(r.product.furnitureData.colourIndex - 1, 0);
  }
  _r4de96d8a4a5cf2 = n((r) => {
    if (!(this.disposed || this._r3e30777a814fac == null)) {
      ((this._rb6748cd03e5af3 = r.guildId),
        (this._r442b16e120d430 = r.color1),
        (this._r0ee2ba6f6a3d45 = r.color2),
        (this._rafc4c6b32070ed = r._rc9fc89e7eb27a7),
        this._r3e30777a814fac._rbb4c26d068856f());
      for (let t of this.page?.offers ?? []) {
        let i = this.createGridItem(t.gridItem);
        (i != null && t.gridItem != null && ((t.gridItem.view = i), (t.gridItem.grid = this)),
          this._r60affcfc0cd2f3(t));
      }
    }
  }, "_r4de96d8a4a5cf2");
  onColourIndex = n((r) => {
    let t = null;
    for (let o of this.page?.offers ?? [])
      if (o.gridItem === this.var_265 && o.gridItem?.view != null) {
        t = o;
        break;
      }
    if (t?.product?.isColorable !== !0 || t.product.furnitureData == null) return;
    let i = t.gridItem?.view ?? null;
    if (i == null) return;
    t.gridItem.view = null;
    let s = `${t.product.furnitureData.fullName.split("*")[0]}*${r.index + 1}`;
    for (let o of this.page?.offers ?? [])
      if (o.product?.furnitureData?.fullName === s && o.gridItem != null) {
        ((o.gridItem.view = i), this.select(o.gridItem, !1), this._r60affcfc0cd2f3(o));
        break;
      }
  }, "onColourIndex");
}

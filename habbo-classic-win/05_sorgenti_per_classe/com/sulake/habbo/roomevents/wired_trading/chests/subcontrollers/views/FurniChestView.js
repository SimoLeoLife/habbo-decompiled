// Estratto da HabboAirLauncher.deobf.js, riga 372977.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/chests/subcontrollers/views/FurniChestView.as
// Nome offuscato: _i4279ecd77b414d

class a {
  constructor(e) {
    this.var_63 = e;
    ((this._container = this._r41f5cc7d3516ce.getXmlWindow("furni_chest_contents")),
      (this.var_1764 = this.itemGrid._r7f196c1ba1085e(0)),
      (this.withdrawInput.restrict = "0-9"),
      this.withdrawButton.addEventListener(u.CLICK, this.onWithdrawClick),
      this.viewLogsButton.addEventListener(u.CLICK, this._rdc699093a5be58),
      this.searchInput.addEventListener(y.WINDOW_EVENT_CHANGE, this._r01cd0c41519609),
      this.searchInput.addEventListener(sr.const_1081, this._rbda17295fe35c7),
      this.searchClearButton.addEventListener(u.CLICK, this.onClearSearchClicked));
  }
  static {
    n(this, "FurniChestView");
  }
  static GRID_OFFSET_SEARCH = 28;
  static const_950 = 31;
  static ITEM_POOL_MAX_SIZE = 1e3;
  static ITEM_POOL = [];
  _disposed = !1;
  _container;
  var_1764;
  var_1131 = new B();
  var_1362 = new B();
  var_154 = null;
  var_289 = [];
  _r24687f96ac249e = !1;
  var_1724 = "";
  onClearSearchClicked = n(() => {
    (this.clearSearch(), this.updateGrid());
  }, "onClearSearchClicked");
  _rbda17295fe35c7 = n((e) => {
    e.keyCode === 13 &&
      this.searchInput.visible &&
      ((this.var_1724 = this.searchInput.text), this.updateGrid());
  }, "_rbda17295fe35c7");
  _r01cd0c41519609 = n(() => {
    this._r24687f96ac249e || (this.searchPlaceholder.visible = this.searchInput.text.length === 0);
  }, "_r01cd0c41519609");
  _rdc699093a5be58 = n(() => {
    this.var_154?.peek() != null &&
      this.var_63._rd542b9eb1bc2f5(this.var_154.peek().type);
  }, "_rdc699093a5be58");
  onWithdrawClick = n(() => {
    let e = Number.parseInt(this.withdrawInput.text, 10);
    Number.isNaN(e) ||
      (this.var_154?.peek() != null &&
        this.var_63.withdrawItemsWithType(this.var_154.peek().type, e));
  }, "onWithdrawClick");
  get _r5eb908c4c91dbf() {
    return this.var_1764;
  }
  get _r41f5cc7d3516ce() {
    return this.var_63._r41f5cc7d3516ce;
  }
  get container() {
    return this._container;
  }
  itemsUpdated(e, r) {
    let t = new Set(),
      i = !1,
      s = [];
    for (let o of e) {
      let d = this._r2bca8ec9316e84(o);
      d != null && (t.add(d), (i = !0), d === this.var_154 && this.selectItemView(null));
    }
    for (let o of r) {
      let d = this.addStorage(o);
      d != null && s.push(d);
    }
    if (i || s.length > 0) {
      let o = [];
      for (let d of this.var_289) t.has(d) || o.push(d);
      for (let d of s) o.push(d);
      ((this.var_289 = o), this.updateGrid(), this._r4417ba3c84199c());
    }
    this.var_63._ra76f57f5f89268.updateUI();
  }
  itemsInitialize(e) {
    this.clear();
    let r = [];
    for (let t of e) {
      let i = this.addStorage(t);
      i != null && r.push(i);
    }
    ((this.var_289 = r), this.updateGrid(), this._r4417ba3c84199c());
  }
  addStorage(e) {
    let r = a.findReusableGroupedView(e, this.var_1131);
    if (r != null) return (r.add(e), this.var_1362.add(e, r), null);
    let t = [e],
      i = a.claimView(this._r5eb908c4c91dbf, this, t);
    this.var_1362.add(e, i);
    let s = a.itemTypeKey(e.type),
      o = this.var_1131.getValue(s);
    return (o == null && ((o = []), this.var_1131.add(s, o)), o.push(i), i);
  }
  _r2bca8ec9316e84(e) {
    let r = this.var_1362.getValue(e) ?? null;
    if (r == null) return null;
    (r.remove(e), this.var_1362.remove(e));
    let t = a.itemTypeKey(e.type);
    if (r._re80f488ae2de85 === 0) {
      let i = this.var_1131.getValue(t);
      if (i != null) {
        let s = i.indexOf(r);
        (s !== -1 && i.splice(s, 1), i.length === 0 && this.var_1131.remove(t));
      }
      return (a.recycleView(r), r);
    }
    return null;
  }
  static findReusableGroupedView(e, r) {
    let t = e.type,
      i = e.specialType,
      s = e.stuffData,
      o = r.getValue(a.itemTypeKey(t));
    if (o == null || o.length === 0 || s.uniqueSerialNumber > 0) return null;
    if (i === class_1901.MONSTERPLANT_SEED) {
      let d = s.rarityLevel;
      for (let c of o) {
        let f = c._r996cabff1d71ca;
        if (f != null && d === f.stuffData.rarityLevel) return c;
      }
      return null;
    }
    return o[0];
  }
  static itemTypeKey(e) {
    return `${e.isWallItem ? "1" : "0"}-${e.typeId}-${e.legacyPosterId}`;
  }
  clear() {
    this.itemGrid.removeGridItems();
    for (let e of this.var_289) a.recycleView(e);
    ((this.var_289 = []),
      (this.var_1131 = new B()),
      (this.var_1362 = new B()),
      this.selectItemView(null),
      this._rc988afb7ff02bf());
  }
  updateGrid() {
    (this._rb062fd4d264b8e(), this.itemGrid.removeGridItems());
    let e = this.var_1724.length > 0 ? this.var_1724.toLowerCase().split(" ") : null;
    for (let r of this.var_289) {
      if (e != null) {
        let t = this._r42d2437fb67ca7(r.peek()).toLowerCase(),
          i = !0;
        for (let s of e)
          if (t.indexOf(s) === -1) {
            i = !1;
            break;
          }
        if (!i) continue;
      }
      this.itemGrid.addGridItem(r.window);
    }
    this.noItemsText.visible = this.itemGrid._r72acf104e2c444 === 0;
  }
  _rb062fd4d264b8e() {
    !this.searchBorder.visible && this.var_289.length >= a.const_950
      ? ((this.searchBorder.visible = !0),
        this.clearSearch(),
        (this.itemGrid.y += a.GRID_OFFSET_SEARCH),
        (this.itemGrid.height -= a.GRID_OFFSET_SEARCH))
      : this.searchBorder.visible &&
        this.var_289.length < a.const_950 &&
        ((this.searchBorder.visible = !1),
        this.clearSearch(),
        (this.itemGrid.y -= a.GRID_OFFSET_SEARCH),
        (this.itemGrid.height += a.GRID_OFFSET_SEARCH));
  }
  clearSearch() {
    ((this._r24687f96ac249e = !0),
      (this.searchInput.text = ""),
      (this.searchClearButton.visible = !1),
      (this.searchPlaceholder.visible = !0),
      (this.var_1724 = ""),
      (this._r24687f96ac249e = !1));
  }
  selectItemView(e) {
    (this.var_154 != null && (this.var_154.deactivate(), (this.var_154 = null)),
      e != null && ((this.var_154 = e), this.var_154.activate()),
      this._rc988afb7ff02bf());
  }
  _r4417ba3c84199c() {
    this.var_154 == null &&
      this.var_289.length > 0 &&
      this.selectItemView(this.var_289[0]);
  }
  _rc988afb7ff02bf() {
    let e = this.previewWidget.widget;
    if (this.var_154?.peek() == null) {
      ((this.previewFurniName.text = ""),
        e?.clearPreviewer(),
        this.viewLogsButton.disable(),
        this.withdrawButton.disable(),
        (this.placeholderPreviewImage.visible = !0));
      return;
    }
    this.placeholderPreviewImage.visible = !1;
    let r = this.var_154.peek();
    (we.disableSection(this.viewLogsButton, !this.var_63._r4b0f4dcd9b6c6f),
      we.disableSection(this.withdrawButton, !this.var_63.canWithdraw),
      (this.previewFurniName.text = this._r42d2437fb67ca7(r)),
      e != null && (e.productInfo = new _i27028f939050ee_(r.type)));
  }
  _r42d2437fb67ca7(e) {
    return a.getChestBasedItemName(
      e,
      this.var_63.localization,
      this.var_63.getFloorItemData.sessionDataManager,
    );
  }
  static getChestBasedItemName(e, r, t) {
    let i = null,
      s = e.type;
    if (s.isWallItem) {
      if (e.specialType === class_1901.POSTER && s.legacyPosterId !== "")
        return r.getLocalization(`poster_${s.legacyPosterId}_name`);
      i = t.getWallItemData(s.typeId);
    } else i = t.getFloorItemData(s.typeId);
    return i == null ? "(missing item name)" : i.localizedName;
  }
  updateUI() {
    this._rc988afb7ff02bf();
  }
  static claimView(e, r, t) {
    let i;
    return (
      a.ITEM_POOL.length > 0 ? (i = a.ITEM_POOL.pop()) : (i = new QTe(e)),
      i.initialize(r, t),
      i
    );
  }
  static recycleView(e) {
    a.ITEM_POOL.length < a.ITEM_POOL_MAX_SIZE ? (e.recycle(), a.ITEM_POOL.push(e)) : e.dispose();
  }
  dispose() {
    if (!this._disposed) {
      (this._container?.dispose(),
        (this._container = null),
        this.var_1764?.dispose(),
        (this.var_1764 = null),
        (this.var_1131 = null),
        (this.var_1362 = null));
      for (let e of this.var_289 ?? []) a.recycleView(e);
      ((this.var_289 = null),
        (this.var_154 = null),
        (this.var_63 = null),
        (this._disposed = !0));
    }
  }
  get disposed() {
    return this._disposed;
  }
  get itemGrid() {
    return this._container.findChildByName("grid_items");
  }
  get searchBorder() {
    return this._container.findChildByName("search_border");
  }
  get searchPlaceholder() {
    return this._container.findChildByName("search_placeholder");
  }
  get searchInput() {
    return this._container.findChildByName("search_input");
  }
  get searchClearButton() {
    return this._container.findChildByName("clear_search_button");
  }
  get noItemsText() {
    return this._container.findChildByName("no_items_text");
  }
  get previewFurniName() {
    return this._container.findChildByName("furni_name");
  }
  get previewWidget() {
    return this._container.findChildByName("preview_image");
  }
  get placeholderPreviewImage() {
    return this._container.findChildByName("placeholder_preview_image");
  }
  get withdrawInput() {
    return this._container.findChildByName("withdraw_input");
  }
  get withdrawButton() {
    return this._container.findChildByName("withdraw_btn");
  }
  get viewLogsButton() {
    return this._container.findChildByName("view_logs_by_furni_btn");
  }
}

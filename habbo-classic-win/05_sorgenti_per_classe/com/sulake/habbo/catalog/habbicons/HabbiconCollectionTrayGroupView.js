// Extracted from HabboAirLauncher.deobf.js, line 178457.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconCollectionTrayGroupView.as
// Obfuscated name: _i33bf0e1d95bc31

class a {
  constructor(e, r, t, i) {
    this.var_2146 = r;
    this.var_63 = t;
    this.var_2725 = i;
    ((this._window = e.clone()),
      (this._ra58fabbabdd522 = Math.trunc(this._window.height)),
      (this._rdb4dc34f794ce3 = Math.trunc(this.trayGroupGrid.height)),
      this._r3aeba7d882359e());
  }
  static {
    n(this, "HabbiconCollectionTrayGroupView");
  }
  static BOTTOM_PADDING = 8;
  _window;
  _group = null;
  _tiles = [];
  _ra58fabbabdd522;
  _rdb4dc34f794ce3;
  _disposed = !1;
  initialize(e) {
    ((this._group = e),
      this.recycleTiles(),
      (this.trayGroupTitle.text = e.title),
      (this._window.visible = !0));
    for (let r of e.habbicons) {
      let t = Bm.claim(this.var_2146);
      (t.initialize(this.var_63, r, this.var_2725),
        this.trayGroupGrid.addGridItem(t.window),
        this._tiles.push(t));
    }
    this._rc09210f0a4ce11();
  }
  refreshEntry(e) {
    if (e != null) {
      for (let r of this._tiles)
        if (r.item?.habbiconId === e.habbiconId) {
          r.refresh(e);
          return;
        }
    }
  }
  recycle() {
    this._disposed ||
      (this._window.parent != null &&
        this._window.parent.removeChild(this._window),
      this.recycleTiles(),
      (this._group = null),
      (this._window.visible = !1),
      (this.trayGroupGrid.height = this._rdb4dc34f794ce3),
      (this._window.height = this._ra58fabbabdd522));
  }
  dispose() {
    this._disposed ||
      (this.recycle(),
      this._window.dispose(),
      (this._window = null),
      (this.var_2146 = null),
      (this.var_63 = null),
      (this.var_2725 = null),
      (this._group = null),
      (this._tiles = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get group() {
    return this._group;
  }
  recycleTiles() {
    this.trayGroupGrid.removeGridItems();
    for (let e of this._tiles) Bm.release(e);
    this._tiles.length = 0;
  }
  _r3aeba7d882359e() {
    let e = this.trayTileTemplate;
    if (e == null) return;
    let r = e.parent;
    (r != null && "removeListItem" in r
      ? r.removeListItem(e)
      : r != null && "removeChild" in r && r.removeChild(e),
      e.dispose());
  }
  _rc09210f0a4ce11() {
    ((this.trayGroupGrid.height = Math.max(
      this._rdb4dc34f794ce3,
      this.trayGroupGrid.visibleRegion.height,
    )),
      (this._window.height = Math.max(
        this._ra58fabbabdd522,
        this.trayGroupGrid.y + this.trayGroupGrid.height + a.BOTTOM_PADDING,
      )),
      this._window.invalidate());
  }
  get trayGroupTitle() {
    return this._window.findChildByName("tray_group_title");
  }
  get trayGroupGrid() {
    return this._window.findChildByName("tray_group_grid");
  }
  get trayTileTemplate() {
    return this.trayGroupGrid.getGridItemByName("tray_tile_template");
  }
}

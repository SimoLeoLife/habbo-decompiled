// Extracted from HabboAirLauncher.deobf.js, line 374465.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/transactions/details/furni_overview/TransactionOverviewView.as
// Obfuscated name: _i0ba1aa4b7efb44

class a {
  constructor(e, r) {
    this.var_1219 = e;
    this._window = r;
    this.var_1764 = this.itemGrid._r7f196c1ba1085e(0);
  }
  static {
    n(this, "TransactionOverviewView");
  }
  static ITEM_POOL_MAX_SIZE = 15;
  var_1645 = [];
  _disposed = !1;
  var_1764;
  var_1177 = [];
  get disposed() {
    return this._disposed;
  }
  clear() {
    this.itemGrid.removeGridItems();
    for (let e of this.var_1177) this.recycleView(e);
    this.var_1177 = [];
  }
  itemsInitialize(e, r, t, i) {
    this.clear();
    let s = [];
    e !== 0 && s.push(this.claimView(e, dx.const_872));
    let o = 0;
    for (let d of r.getKeys()) {
      let c = r.getValue(d) ?? 0,
        f = this.claimView(c, dx.TYPE_FURNI, d);
      ((o += c), f != null && s.push(f));
    }
    (i && o < t && s.push(this.claimView(t - o, dx.TYPE_INCOMPLETE_DATA)),
      (this.var_1177 = s),
      this.updateGrid());
  }
  updateGrid() {
    this.itemGrid.removeGridItems();
    for (let e of this.var_1177) this.itemGrid.addGridItem(e.window);
    this.emptyText.visible = this.itemGrid._r72acf104e2c444 === 0;
  }
  dispose() {
    if (!this._disposed) {
      ((this._window = null), this.var_1764?.dispose(), (this.var_1764 = null));
      for (let e of this.var_1177) this.recycleView(e);
      this.var_1177 = [];
      for (let e of this.var_1645) e.dispose();
      ((this.var_1645 = []), (this.var_1219 = null), (this._disposed = !0));
    }
  }
  claimView(e, r, t = null) {
    let i =
      this.var_1645.length > 0
        ? this.var_1645.pop()
        : new dx(this.var_1764, this.var_1219);
    return (i.initialize(e, r, t), i);
  }
  recycleView(e) {
    this.var_1645.length < a.ITEM_POOL_MAX_SIZE
      ? (e.recycle(), this.var_1645.push(e))
      : e.dispose();
  }
  get itemGrid() {
    return this._window.findChildByName("item_grid");
  }
  get emptyText() {
    return this._window.findChildByName("empty_text");
  }
}

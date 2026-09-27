// Extracted from HabboAirLauncher.deobf.js, line 243690.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/requirements/offerings/OfferingRuleView.as
// Obfuscated name: _i89c85b431e3c0c

class a {
  constructor(e) {
    this._window = e;
    ((this.var_2569 = this.rows?.removeListItemAt(0)),
      (this._r3c87db3a698986 = this.var_2569?.removeListItemAt(0)),
      (this._r1960c9e37b293a = this.rows?.x ?? 0));
  }
  static {
    n(this, "OfferingRuleView");
  }
  static NODE_VIEW_POOL = [];
  static MAX_COLS = 2;
  _disposed = !1;
  var_793 = null;
  var_2700 = null;
  _r9ad4bd4ca12d98 = null;
  var_2162 = 0;
  var_2569 = null;
  _r3c87db3a698986 = null;
  _r1960c9e37b293a = 0;
  _nodes = [];
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  initialize(e, r, t, i) {
    ((this.var_793 = e),
      (this.var_2700 = r),
      (this._r9ad4bd4ca12d98 = t),
      (this.var_2162 = i),
      this._window != null && r.window != null && (this._window.width = r.window.width),
      (this._nodes = []));
    for (let s = 0; s < (t.nodes?.length ?? 0); s++) {
      let o = t.nodes[s];
      if (o == null || this._r3c87db3a698986 == null) continue;
      let d = a._rd646edc5baf46f(this._r3c87db3a698986);
      (d.initialize(e, this, o, s), this._nodes.push(d));
    }
    this.initializeUI();
  }
  recycle() {
    ((this.var_793 = null),
      (this.var_2700 = null),
      (this._r9ad4bd4ca12d98 = null),
      (this.var_2162 = 0));
    for (let e of this._nodes) {
      let r = e.window?.parent;
      (r != null && e.window != null && r.removeChild(e.window), a.releaseNodeView(e));
    }
    for (this._nodes = []; (this.rows?.numListItems ?? 0) > 0;) {
      let e = this.rows?.removeListItemAt(0);
      (e?.removeListItems(), e?.dispose());
    }
  }
  center(e) {
    this.rows != null && (this.rows.x = e / 2 - this.colsWidth / 2);
  }
  dispose() {
    if (!this._disposed) {
      this.rows?.removeListItems();
      for (let e of this._nodes) a.releaseNodeView(e);
      ((this._nodes = []),
        this.var_2569?.dispose(),
        this._r3c87db3a698986?.dispose(),
        (this.var_2569 = null),
        (this._r3c87db3a698986 = null),
        this._window?.dispose(),
        (this._window = null),
        (this._r9ad4bd4ca12d98 = null),
        (this.var_2700 = null),
        (this.var_793 = null),
        (this._disposed = !0));
    }
  }
  static _rd646edc5baf46f(e) {
    let r = a.NODE_VIEW_POOL.pop();
    return r ?? new OfferingNodeView(e.clone());
  }
  static releaseNodeView(e) {
    (e.recycle(), a.NODE_VIEW_POOL.push(e));
  }
  initializeUI() {
    if (this.rows == null || this._window == null) return;
    this.rows.x = this._r1960c9e37b293a;
    let e = null;
    for (let r of this._nodes)
      ((e == null || e.numListItems >= a.MAX_COLS) &&
        ((e = this.var_2569?.clone()), e != null && this.rows.addListItem(e)),
        e != null && r.window != null && e.addListItem(r.window));
    (this.orText != null && (this.orText.visible = this.var_2162 > 0),
      (this._window.height = this.rows.height));
  }
  get colsWidth() {
    let e = 0;
    for (let r = 0; r < (this.rows?.numListItems ?? 0); r++) {
      let t = this.rows?.getListItemAt(r);
      t != null && t.width > e && (e = t.width);
    }
    return e;
  }
  get orText() {
    return this._window?.findChildByName("or_text");
  }
  get rows() {
    return this._window?.findChildByName("rule_nodes_rows");
  }
}

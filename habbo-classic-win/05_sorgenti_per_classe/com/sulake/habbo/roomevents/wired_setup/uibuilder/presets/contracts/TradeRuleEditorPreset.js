// Extracted from HabboAirLauncher.deobf.js, line 350322.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/contracts/TradeRuleEditorPreset.as
// Obfuscated name: _i9d5ee1662e57fb

class a extends WiredUIPreset {
  static {
    n(this, "TradeRuleEditorPreset");
  }
  static NODE_VIEW_POOL = new B();
  static NODE_VIEW_POOL_MAX_SIZE = 50;
  static MAX_NODES_IN_RULE = 5;
  _container;
  _r3c87db3a698986;
  var_614;
  _r1de1ae5c2372ab = null;
  _rfe788f434e761d = null;
  var_2231 = null;
  var_2637 = null;
  var_1463 = !1;
  var_2182 = !1;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r, t, i = null, s = null) {
    ((this._container = this.var_40.createTradeRequirementRule()),
      (this.var_614 = []),
      (this._r1de1ae5c2372ab = r),
      (this._rfe788f434e761d = t),
      (this.var_2231 = i),
      (this.var_2637 = s),
      this._r139633561a2a04(e));
    let o = this.itemGrid;
    ((this._r3c87db3a698986 = o._r7f196c1ba1085e(0)),
      this.addMoreButton.addEventListener(u.CLICK, this._r34377b9b116dd3),
      this._container.addEventListener(u.OVER, this._r98937d52f2f3be),
      this._container.addEventListener(u.OUT, this._r04344c8bfe55e0),
      this.closeRegion.addEventListener(u.OVER, this._rda21c6742656ea),
      this.closeRegion.addEventListener(u.OUT, this._r5b60694d558082),
      this.closeRegion.addEventListener(u.CLICK, this.onCloseClick),
      this._r55cec63bf21828 && o.setParamFlag(134217728, !1),
      this._r0bd04eb48a217f());
  }
  get _r55cec63bf21828() {
    return !0;
  }
  get _r5b304de9314751() {
    return !0;
  }
  set rule(e) {
    this.removaAllNodes();
    for (let r of e.nodes) this.addNode(r);
  }
  _r34377b9b116dd3 = n((...e) => {
    this._rfe788f434e761d?.(this);
  }, "_r34377b9b116dd3");
  _r3f40f43b736988(e) {
    this.itemGrid._r76bcf89cad2fb2(e.window) !== -1 && this._r1de1ae5c2372ab?.(this, e.uniqueID, e.node);
  }
  _r139633561a2a04(e) {
    this.titleWindow.text = e;
  }
  _r1c29ac880a13a4() {
    this.var_2637?.();
  }
  addNode(e) {
    if (this.disposed) return;
    let r = this.itemGrid,
      t = this._rd4a20da6f29efd(e.deepCopy(), this._r5b304de9314751);
    (r._r69465cf54b2583(t.window, r._r72acf104e2c444 - 1),
      this.var_614.push(t),
      this.onNodeCountChange());
  }
  _rd4a20da6f29efd(e, r = !0) {
    let t = this.var_40;
    a.NODE_VIEW_POOL.hasKey(t.name) || a.NODE_VIEW_POOL.add(t.name, []);
    let i = a.NODE_VIEW_POOL.getValue(t.name),
      s = i.length > 0 ? i.pop() : new uWe(this._rfe28ede79b4096);
    return (s.initialize(this, e, r), s);
  }
  releaseNodeView(e) {
    let r = this.var_40;
    a.NODE_VIEW_POOL.hasKey(r.name) || a.NODE_VIEW_POOL.add(r.name, []);
    let t = a.NODE_VIEW_POOL.getValue(r.name);
    t.length >= a.NODE_VIEW_POOL_MAX_SIZE ? e.dispose() : (e.release(), t.push(e));
  }
  _r8108d595195cb1(e, r) {
    if (this.disposed) return;
    let t = this._ra62c3d9d27feef(e);
    t != null && ((t.node = r), this._r1c29ac880a13a4());
  }
  _r85539ae3d0f4bc() {
    let e = [];
    for (let r of this.var_614) e.push(r.node);
    return new J_(e);
  }
  _ra62c3d9d27feef(e) {
    for (let r of this.var_614) if (r.uniqueID === e) return r;
    return null;
  }
  removeNode(e) {
    let r = this.var_614.indexOf(e);
    r !== -1 &&
      (this.var_614.splice(r, 1),
      this.itemGrid.removeGridItem(e.window),
      this.releaseNodeView(e),
      this.onNodeCountChange());
  }
  removaAllNodes() {
    if (!this.disposed) {
      if (this.addMoreButton != null)
        for (; this.itemGrid._r72acf104e2c444 > 1;) this.itemGrid._r7f196c1ba1085e(0);
      else this.itemGrid.removeGridItems();
      for (let e of this.var_614) this.releaseNodeView(e);
      ((this.var_614 = []), this.onNodeCountChange());
    }
  }
  onNodeCountChange() {
    (this.itemGrid._r876553622f56ef(),
      this.addMoreButton != null &&
        (this._r55cec63bf21828
          ? (this.addMoreButton.visible = this.var_614.length < a.MAX_NODES_IN_RULE)
          : we.disableSection(this.addMoreButton, this.var_614.length >= a.MAX_NODES_IN_RULE)),
      this._r1c29ac880a13a4());
  }
  onCloseClick = n((...e) => {
    this.var_2231?.(this);
  }, "onCloseClick");
  _r04344c8bfe55e0 = n((...e) => {
    ((this.var_1463 = !1), this._r0bd04eb48a217f());
  }, "_r04344c8bfe55e0");
  _r98937d52f2f3be = n((...e) => {
    ((this.var_1463 = !0), this._r0bd04eb48a217f());
  }, "_r98937d52f2f3be");
  _r5b60694d558082 = n((...e) => {
    ((this.var_2182 = !1), this._r0bd04eb48a217f());
  }, "_r5b60694d558082");
  _rda21c6742656ea = n((...e) => {
    ((this.var_2182 = !0), this._r0bd04eb48a217f());
  }, "_rda21c6742656ea");
  _r0bd04eb48a217f() {
    this.closeRegion.visible =
      (this.var_1463 || this.var_2182) && this.var_2231 != null;
  }
  get _rfe28ede79b4096() {
    return this._r3c87db3a698986;
  }
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
  }
  dispose() {
    (this.removaAllNodes(),
      !this.disposed &&
        (super.dispose(),
        (this.var_614 = null),
        (this._r1de1ae5c2372ab = null),
        (this._rfe788f434e761d = null),
        (this.var_2231 = null),
        (this.var_2637 = null),
        this._r3c87db3a698986.dispose(),
        (this._r3c87db3a698986 = null),
        this._container.dispose(),
        (this._container = null)));
  }
  get itemGrid() {
    return this._container.findChildByName("grid");
  }
  get titleWindow() {
    return this._container.findChildByName("title");
  }
  get addMoreContainer() {
    return this._container.findChildByName("add_more_container");
  }
  get addMoreButton() {
    return this._container.findChildByName("add_more");
  }
  get closeRegion() {
    return this._container.findChildByName("close_rule_region");
  }
}

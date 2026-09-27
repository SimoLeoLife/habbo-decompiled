// Extracted from HabboAirLauncher.deobf.js, line 177749.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconTabView.as
// Obfuscated name: _i59393f7c4a2e9b

class {
  constructor(e, r) {
    this._window = e;
    this.var_3413 = r;
    (this.tabAllSets.addEventListener(y.const_238, this._r62d5ba9b2ac1bf),
      this.tabOwned.addEventListener(y.const_238, this._r62d5ba9b2ac1bf),
      this.tabFavourited.addEventListener(y.const_238, this._r62d5ba9b2ac1bf));
  }
  static {
    n(this, "HabbiconTabView");
  }
  _activeMode = null;
  _disposed = !1;
  select(e) {
    let r = this.getTabByMode(e);
    r == null ||
      e === this._activeMode ||
      ((this._activeMode = e),
      this.tabContext.selector.getSelected() !== r && this.tabContext.selector.setSelected(r));
  }
  _r62d5ba9b2ac1bf = n((e) => {
    let r = this.getModeByTab(e.target);
    r == null || r === this._activeMode || ((this._activeMode = r), this.var_3413(r));
  }, "_r62d5ba9b2ac1bf");
  getModeByTab(e) {
    switch (e.name) {
      case "tab_all_sets":
        return HabbiconTabMode.ALL_SETS;
      case "tab_owned":
        return HabbiconTabMode.const_101;
      case "tab_favourited":
        return HabbiconTabMode.const_467;
    }
    return null;
  }
  getTabByMode(e) {
    switch (e) {
      case HabbiconTabMode.ALL_SETS:
        return this.tabAllSets;
      case HabbiconTabMode.const_101:
        return this.tabOwned;
      case HabbiconTabMode.const_467:
        return this.tabFavourited;
    }
    return null;
  }
  dispose() {
    this._disposed ||
      (this.tabAllSets.removeEventListener(y.const_238, this._r62d5ba9b2ac1bf),
      this.tabOwned.removeEventListener(y.const_238, this._r62d5ba9b2ac1bf),
      this.tabFavourited.removeEventListener(y.const_238, this._r62d5ba9b2ac1bf),
      (this.var_3413 = null),
      (this._activeMode = null),
      (this._window = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get tabContext() {
    return this._window.findChildByName("tab_context");
  }
  get tabAllSets() {
    return this._window.findChildByName("tab_all_sets");
  }
  get tabOwned() {
    return this._window.findChildByName("tab_owned");
  }
  get tabFavourited() {
    return this._window.findChildByName("tab_favourited");
  }
}

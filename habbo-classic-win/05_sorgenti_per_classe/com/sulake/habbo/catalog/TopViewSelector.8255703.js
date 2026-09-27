// Estratto da HabboAirLauncher.deobf.js, riga 259566.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/TopViewSelector.as
// Nome offuscato: _id7229627ba0bb1

class {
  static {
    n(this, "TopViewSelector");
  }
  _navigator;
  var_1643 = null;
  _tabContext = null;
  constructor(e) {
    this._navigator = e;
  }
  set template(e) {
    this.var_1643 = e;
  }
  set tabContext(e) {
    this._tabContext = e;
  }
  refresh() {
    if (!this._tabContext || !this.var_1643) return;
    this.clearTabs();
    let e = this._navigator.contextContainer._r02bbc706f6aea8();
    for (let r = 0; r < e.length; r++) {
      let t = e[r],
        i = this.var_1643.clone();
      ((i.caption = `\${navigator.toplevelview.${t}}`),
        (i.id = r),
        (i.procedure = this.topViewSelectorButtonProcedure.bind(this)),
        this._tabContext._rc6654b9a9673e2(i));
    }
  }
  selectTabByIndex(e) {
    let r = this._tabContext?.getTabItemAt(e);
    r && this._tabContext?.selector?.setSelected(r);
  }
  clearTabs() {
    if (this._tabContext)
      for (; this._tabContext.numTabItems > 0;) {
        let e = this._tabContext.getTabItemAt(0);
        if (!e) break;
        this._tabContext._ra8b044f5467c44(e);
      }
  }
  topViewSelectorButtonProcedure(e, r) {
    if (e.type !== u.CLICK) return;
    let t = this._navigator.contextContainer._r02bbc706f6aea8();
    t.length > r.id &&
      this._navigator.performSearch(
        t[r.id],
        "",
        this._navigator.view._r4aaed77b8eb1e6() ?? "",
      );
  }
}

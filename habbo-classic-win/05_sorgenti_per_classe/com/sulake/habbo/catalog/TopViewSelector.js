// Estratto da HabboAirLauncher.deobf.js, riga 183779.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/TopViewSelector.as
// Nome offuscato: _id7229627ba0bb1

class {
  constructor(e, r) {
    this._catalog = e;
    this._tabContext = r;
    let t = this._tabContext.getTabItemAt(0)?.clone();
    if (t == null) throw new Error("TopViewSelector requires a tab template.");
    ((this.var_1643 = t), this._tabContext._ra8b044f5467c44(t));
  }
  static {
    n(this, "TopViewSelector");
  }
  var_1643;
  _rc6654b9a9673e2(e) {
    let r = this.var_1643.clone();
    ((r.caption = e.localization),
      (r.name = e.pageName),
      (r.procedure = this.topViewSelectorButtonProcedure),
      this._tabContext._rc6654b9a9673e2(r),
      this._r1d14e8409276ff());
  }
  clearTabs() {
    for (; this._tabContext.numTabItems > 0;) {
      let e = this._tabContext.getTabItemAt(0);
      if (e == null) break;
      this._tabContext._ra8b044f5467c44(e);
    }
  }
  selectTabByIndex(e) {
    let r = this._tabContext.getTabItemAt(e);
    r != null && (this._tabContext.selector?.setSelected(r), this._rd778896880d1a0(r));
  }
  _r1d14e8409276ff() {
    for (let e = 0; e < this._tabContext.numTabItems; e++) {
      let r = this._tabContext.getTabItemAt(e),
        t = r?.parent;
      r != null && t != null && (r.width = t.width / this._tabContext.numTabItems);
    }
  }
  topViewSelectorButtonProcedure = n((e, r) => {
    if (e.type === u.CLICK) {
      let t = r;
      t != null && this._rd778896880d1a0(t);
    }
  }, "topViewSelectorButtonProcedure");
  _rd778896880d1a0(e) {
    let r = this._catalog.getNodeByName(e.name);
    r != null && this._catalog._r702ab57e143055(r);
  }
}

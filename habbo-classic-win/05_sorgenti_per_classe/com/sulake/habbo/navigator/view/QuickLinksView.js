// Extracted from HabboAirLauncher.deobf.js, line 259618.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/QuickLinksView.as
// Obfuscated name: _i8133903a5dc245

class {
  static {
    n(this, "QuickLinksView");
  }
  _navigator;
  var_1643 = null;
  _itemList = null;
  SearchContext = [];
  _rae69f8293bdd0e = [];
  constructor(e) {
    this._navigator = e;
  }
  set itemList(e) {
    this._itemList = e;
  }
  set template(e) {
    this.var_1643 = e;
  }
  setQuickLinks(e) {
    if (!(!this._itemList || !this.var_1643)) {
      (this._itemList.removeListItems(), (this.SearchContext = []), (this._rae69f8293bdd0e = []));
      for (let r = 0; r < e.length; r++) {
        let t = this.var_1643.clone(),
          i = e[r],
          s = t.findChildByName("quick_link_text");
        ((t.id = r),
          (s.caption =
            this._navigator.localization.getLocalization(
              `navigator.searchcode.title.${i.searchCode}`,
              i.searchCode,
            ) + (i.filter !== "" ? ` - ${i.filter}` : "")),
          i.searchCode.indexOf("category__") === 0 &&
            (s.caption = i.searchCode.substring(10) + (i.filter !== "" ? ` - ${i.filter}` : "")),
          (t.procedure = this.listItemProcedure.bind(this)),
          this.SearchContext.push(new SearchContext(i.searchCode, i.filter)),
          this._rae69f8293bdd0e.push(i.id),
          this._itemList.addListItem(t));
      }
    }
  }
  listItemProcedure(e, r) {
    if (e.type === u.CLICK) {
      if (r instanceof E8) {
        if (this.SearchContext.length > r.id) {
          let t = this.SearchContext[r.id];
          (this._navigator.performSearchByContext(t),
            this._navigator.trackEventLog(
              "savedsearch.execute",
              "SavedSearch",
              V1.getEventLogExtraStringFromSearch(t.searchCode, t.filtering),
            ));
        }
      } else r instanceof ContainerButtonController && this._navigator.deleteSavedSearch(this._rae69f8293bdd0e[r.parent.id]);
      return;
    }
    if (e.type === u.OVER || e.type === u.OUT) {
      let t = e.type === u.OVER;
      r instanceof E8 ? (r.getChildAt(1).visible = t) : r instanceof ContainerButtonController && (r.visible = t);
    }
  }
}

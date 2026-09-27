// Estratto da HabboAirLauncher.deobf.js, riga 178565.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconCollectionTrayView.as
// Nome offuscato: _iaa6ad0f651e0df

class {
  constructor(e, r, t, i, s) {
    this.var_63 = e;
    this._window = r;
    this.var_2053 = t;
    this.var_2146 = i;
    this.var_2725 = s;
    this._r7ece4aa19450d5();
  }
  static {
    n(this, "HabbiconCollectionTrayView");
  }
  var_1877 = [];
  _disposed = !1;
  refresh(e, r) {
    this.clearGroupViews();
    let t = e === HabbiconTabMode.const_467;
    if (
      ((this.trayTitle.text = t ? "${habbicon_book.tab.favourited}" : "${habbicon_book.tab.owned}"),
      (this.traySummary.text = this.resolveSummaryText(t, r)),
      r != null)
    )
      for (let i of r) {
        if (i == null) continue;
        let s = new m8e(
          this.var_2053,
          this.var_2146,
          this.var_63,
          this.var_2725,
        );
        (s.initialize(i), this.trayGroupList.addListItem(s.window), this.var_1877.push(s));
      }
    ((this.trayGroupList.var_46 = 0), (this._window.visible = !0));
  }
  refreshEntry(e) {
    if (e != null) {
      for (let r of this.var_1877)
        if (this.matchesEntryGroup(r.group, e)) {
          r.refreshEntry(e);
          return;
        }
    }
  }
  dispose() {
    this._disposed ||
      (this.clearGroupViews(),
      (this.var_63 = null),
      (this._window = null),
      (this.var_2053 = null),
      (this.var_2146 = null),
      (this.var_2725 = null),
      (this.var_1877 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  clearGroupViews() {
    for (let e of this.var_1877) e.dispose();
    this.var_1877.length = 0;
  }
  _r7ece4aa19450d5() {
    this.trayGroupList.getListItemIndex(this.var_2053) > -1 &&
      this.trayGroupList.removeListItem(this.var_2053);
  }
  resolveSummaryText(e, r) {
    return r == null || r.length === 0
      ? e
        ? "${habbicon_book.tray.empty.favourited}"
        : "${habbicon_book.tray.empty.owned}"
      : this.var_63.localizationManager.getLocalizationWithParams(
          e ? "habbicon_book.tray.favourited.summary" : "habbicon_book.tray.owned.summary",
          "",
          "count",
          String(this.countEntries(r)),
        );
  }
  countEntries(e) {
    let r = 0;
    for (let t of e) t != null && t.habbicons != null && (r += t.habbicons.length);
    return r;
  }
  matchesEntryGroup(e, r) {
    return e == null
      ? !1
      : e.collectionId === r.collectionId
        ? !0
        : r.collectionTitle != null && e.title === r.collectionTitle;
  }
  get trayTitle() {
    return this._window.findChildByName("tray_title");
  }
  get traySummary() {
    return this._window.findChildByName("tray_summary");
  }
  get trayGroupList() {
    return this._window.findChildByName("tray_group_list");
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 177966.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconSetRailView.as
// Nome offuscato: _i4de88f08491475

class {
  constructor(e, r) {
    this._window = e;
    this.var_2669 = r;
    this._r7c7958b713089b = this.setRailList.removeListItem(
      this.setRailList.getListItemByName("set_row_template"),
    );
  }
  static {
    n(this, "HabbiconSetRailView");
  }
  _r7c7958b713089b;
  var_969 = [];
  var_148 = null;
  _disposed = !1;
  _rabc98b14bc5b8d(e) {
    this.clearRows();
    for (let r of e) {
      let t = new _8e(this._r7c7958b713089b, this.var_2669);
      (t.initialize(r),
        t.setActive(t.set === this.var_148),
        this.setRailList.addListItem(t.window),
        this.var_969.push(t));
    }
  }
  _rb83f00d271fc39(e) {
    this.var_148 = e;
    for (let r of this.var_969) r.setActive(r.set === e);
  }
  refreshSet(e, r) {
    for (let t of this.var_969)
      if (t.set === e || t.set.collectionId === e.collectionId) {
        t.refreshProgress(r);
        return;
      }
  }
  update(e) {
    for (let r of this.var_969) r.update(e);
  }
  dispose() {
    this._disposed ||
      (this.clearRows(),
      this._r7c7958b713089b.dispose(),
      (this._r7c7958b713089b = null),
      (this._window = null),
      (this.var_148 = null),
      (this.var_2669 = null),
      (this.var_969 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  clearRows() {
    for (let e of this.var_969) e.dispose();
    this.var_969.length = 0;
  }
  get setRailList() {
    return this._window.findChildByName("set_rail_list");
  }
}

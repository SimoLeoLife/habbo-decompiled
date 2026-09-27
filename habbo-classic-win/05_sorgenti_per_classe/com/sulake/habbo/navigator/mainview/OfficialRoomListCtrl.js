// Estratto da HabboAirLauncher.deobf.js, riga 255514.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/OfficialRoomListCtrl.as
// Nome offuscato: _iee750cac5bd23e

class {
  constructor(e) {
    this._navigator = e;
    this._ra933cee4e36776 = new hme(this._navigator);
  }
  static {
    n(this, "OfficialRoomListCtrl");
  }
  _content = null;
  var_122 = null;
  _ra933cee4e36776;
  dispose() {
    (this._ra933cee4e36776.dispose(), (this._navigator = null));
  }
  set content(e) {
    ((this._content = e), (this.var_122 = this._content?.findChildByName("item_list_official")));
  }
  get content() {
    return this._content;
  }
  refresh() {
    if (this._navigator?.data._r9df01b7c78bf2d == null || this.var_122 == null) return;
    let e = this.getVisibleEntries();
    ((this.var_122.autoArrangeItems = !1), this._r50e85ceff367c2());
    for (let r = 0; ; r++) {
      let t = r % 2 !== 0,
        i = this.var_122.getListItemAt(r + 1);
      if (r < e.length) this.refreshEntry(!0, t, i, e[r]);
      else if (this.refreshEntry(!1, t, i, null)) break;
    }
    this.var_122.autoArrangeItems = !0;
  }
  getVisibleEntries() {
    let e = this._navigator?.data._r9df01b7c78bf2d?.entries ?? [],
      r = [],
      t = 0;
    for (let i of e)
      i._ra8ec138befb553 > 0
        ? i._ra8ec138befb553 === t && r.push(i)
        : ((t = i.open ? i.index : 0), r.push(i));
    return r;
  }
  refreshEntry(e, r, t, i) {
    let s = this._navigator?.officialRoomEntryManager,
      o = t;
    if (o == null) {
      if (!e || s == null) return !0;
      ((o = s.createEntry(r)), this.var_122?.addListItem(o));
    }
    return (s != null && i != null && s.refreshEntry(o, e, i), !1);
  }
  _r50e85ceff367c2() {
    let e = this.var_122?.getListItemAt(0);
    e != null &&
      this._ra933cee4e36776.refresh(e, this._navigator?.data._r814554d59f42ae?.entries ?? []);
  }
}

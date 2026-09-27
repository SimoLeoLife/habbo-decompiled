// Estratto da HabboAirLauncher.deobf.js, riga 254701.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/CategoryListCtrl.as
// Nome offuscato: _id99151c551e279

class a {
  constructor(e) {
    this._navigator = e;
    this._re08bf90c0b118d = new H1(this._navigator);
  }
  static {
    n(this, "CategoryListCtrl");
  }
  static CATEGORY_SPACING = 5;
  _content = null;
  var_122 = null;
  var_940 = null;
  _re08bf90c0b118d;
  dispose() {
    (this._re08bf90c0b118d.dispose(), (this._navigator = null));
  }
  refresh() {
    let e = this._navigator?.data._rda9bf5a0280319,
      r = this.var_122?.getListItemAt(0);
    if (this._navigator == null || e == null || r == null) return;
    let t = 0,
      i = this._navigator.data._r0e0ffd0291afb3,
      s = e._r9057fc2a5fe9b6,
      o = e._rbecd61369365c0;
    for (let d = 0; d < i.length; d++) {
      let c = i[d];
      if (c.visible) {
        let f = this.getCategoryContainer(r, d);
        f == null && ((f = this.createEntry(d)), (f.id = d), r.addChild(f));
        let l = s.getValue(c.nodeId) ?? 0,
          b = o.getValue(c.nodeId) ?? 0;
        (this.refreshEntry(f, c, l, b),
          (f.y = t),
          (t += f.height + a.CATEGORY_SPACING),
          (f.visible = !0),
          (r.height = Fr.getLowestPoint(r) > 0 ? Fr.getLowestPoint(r) + 5 : 0));
      }
    }
    this.var_940 != null &&
      ((this.var_940.var_46 = 0), (this.var_940.visible = !0));
  }
  refreshEntry(e, r, t, i) {
    ((e.findChildByName("category_name_txt").caption = r.visibleName),
      (e.findChildByName("arrow_right_icon").visible = !0),
      this._re08bf90c0b118d.refreshUserCount(
        i,
        e.findChildByName("enter_category_button"),
        t,
        "${navigator.usercounttooltip.users}",
        297,
        35,
      ));
  }
  createEntry(e) {
    let r = this._navigator?.getXmlWindow("grs_category_selector");
    if (r == null) throw new Error("Failed to build category selector");
    return (
      this.setProcedureAndId(r, e, "enter_category_button", this._r0bc152b257859d),
      this._navigator?.refreshButton(r, "navi_room_icon", !0, null, 0),
      r
    );
  }
  set content(e) {
    ((this._content = e),
      (this.var_122 = this._content?.findChildByName("item_list_category")),
      (this.var_940 = this._content?.findChildByName("scroller")));
  }
  get content() {
    return this._content;
  }
  _r0bc152b257859d = n((e, r) => {
    if (e.type === u.CLICK && this._navigator != null) {
      let t = this._navigator.data._r0e0ffd0291afb3[r.id];
      this._navigator._r970f774dfe2577?.startSearch(
        We._r3788a24f86509c,
        We._r84d8927b802156,
        `${t.nodeId}`,
      );
    }
  }, "_r0bc152b257859d");
  getCategoryContainer(e, r) {
    return e.getChildByID(r);
  }
  setProcedureAndId(e, r, t, i) {
    let s = e.findChildByName(t);
    s != null && ((s.procedure = i), (s.id = r));
  }
}

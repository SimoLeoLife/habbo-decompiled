// Estratto da HabboAirLauncher.deobf.js, riga 255571.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/PopularTagsListCtrl.as
// Nome offuscato: _i6fbe6d805bb83f

class {
  constructor(e) {
    this._navigator = e;
    this._rd65c8b4e77f024 = new TagRenderer(this._navigator);
  }
  static {
    n(this, "PopularTagsListCtrl");
  }
  _content = null;
  var_122 = null;
  _rd65c8b4e77f024;
  dispose() {
    (this._rd65c8b4e77f024.dispose(), (this._navigator = null));
  }
  set content(e) {
    ((this._content = e), (this.var_122 = this._content?.findChildByName("item_list")));
  }
  get content() {
    return this._content;
  }
  refresh() {
    if (
      this._navigator?.data._rf7fd60d8951b6a == null ||
      this.var_122 == null ||
      this._content == null
    )
      return;
    this._rd65c8b4e77f024.useHashTags = !0;
    let e = this._navigator.data._rf7fd60d8951b6a.tags,
      r = this.var_122.getListItemAt(0);
    if (r == null) {
      if (((r = this._navigator.getXmlWindow("grs_popular_tag_row")), r == null)) return;
      this.var_122.addListItem(r);
    }
    Fr.hideChildren(r);
    for (let i = 0; i < this._navigator.data._rf7fd60d8951b6a.tags.length; i++) {
      let s = this._navigator.data._rf7fd60d8951b6a.tags[i];
      this._rd65c8b4e77f024.refreshTag(r, i, s.tagName);
    }
    (Fr.layoutChildrenInArea(r, r.width, 18, 3), (r.height = Fr.getLowestPoint(r)));
    let t = this._content.findChildByName("no_tags_found");
    t != null && (t.visible = e.length < 1);
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 249418.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/IssueListView.as
// Nome offuscato: _i7b78c4930d7410

class {
  constructor(e, r, t) {
    this.var_2305 = e;
    this._assets = r;
    this.var_122 = t;
    ((this.var_4246 = this.var_122.getListItemAt(0)),
      this.var_122.removeListItems(),
      (this._issueListLimit = this.var_2305.issueListLimit));
  }
  static {
    n(this, "IssueListView");
  }
  var_4246;
  _issueListLimit;
  update(e) {
    if (e.length === 0) {
      this.var_122.destroyListItems();
      return;
    }
    e.sort((o, d) =>
      o.highestPriority !== d.highestPriority
        ? o.highestPriority - d.highestPriority
        : o._rc0bca29f4c3bbd - d._rc0bca29f4c3bbd,
    );
    let r = this.var_122.numListItems,
      t = e.length;
    if ((t > this._issueListLimit && (t = this._issueListLimit), r < t))
      for (let o = 0; o < t - r; o++) this.var_122.addListItem(this.var_4246.clone());
    else if (r > t) for (let o = 0; o < r - t; o++) this.var_122.removeListItemAt(0)?.dispose();
    let i = 1,
      s = _ia411d8d8194a3a();
    for (let o of e) {
      if (i > this._issueListLimit) break;
      let d = this.var_122.getListItemAt(i - 1),
        c = o.var_2416();
      if (d == null || c == null) return;
      ((d.width = this.var_122.width),
        (d.color = i++ % 2 ? 4289914618 : 4294967295),
        this.setCaption(d, "score", `${o.highestPriority}`),
        this.setCaption(d, "source", IssueCategoryNames.getSourceName(c.categoryId)),
        this.setCaption(d, "category", IssueCategoryNames.getCategoryName(c.reportedCategoryId)),
        this.setCaption(d, "target_name", c.reportedUserId !== 0 ? (c.onPendingCallsForHelp ?? "") : ""),
        this.setCaption(d, "time", o.getOpenTime(s)),
        this.setCaption(d, "msgs", `${o._r651ca1f5060b71()}`),
        this.setCaption(d, "picker", o._r4d7308a2f50171),
        this._r68af940cad86b8(d, c),
        this._r61fdd18e394b72(d, "pick_button", o.id, this._r654bc5b73addd4),
        this._r61fdd18e394b72(d, "handle_button", o.id, this._r1267cbd2e78aee),
        this._r61fdd18e394b72(d, "release_button", o.id, this._r4a7bc04c224896));
    }
  }
  setCaption(e, r, t) {
    let i = e.findChildByName(r);
    i && (i.caption = t);
  }
  _r68af940cad86b8(e, r) {
    let t = e.findChildByName("target_icon");
    if (t == null) return;
    let i = r.reportedUserId ? "user_icon_png" : "room_icon_png",
      o = this._assets.getAssetByName(i)?.content;
    o != null && typeof o.clone == "function" ? (t.bitmap = o.clone()) : (t.bitmap = null);
  }
  _r61fdd18e394b72(e, r, t, i) {
    let s = e.findChildByName(r);
    s != null && ((s.id = t), s.removeEventListener(u.CLICK, i), s.addEventListener(u.CLICK, i));
  }
  _r654bc5b73addd4 = n((e) => {
    e.window != null && this.var_2305._r3a6d35308098b8(e.window.id, "pick button");
  }, "_r654bc5b73addd4");
  _r1267cbd2e78aee = n((e) => {
    e.window != null && this.var_2305.handleBundle(e.window.id);
  }, "_r1267cbd2e78aee");
  _r4a7bc04c224896 = n((e) => {
    e.window != null && this.var_2305._r0a23c60f69b52c(e.window.id);
  }, "_r4a7bc04c224896");
}

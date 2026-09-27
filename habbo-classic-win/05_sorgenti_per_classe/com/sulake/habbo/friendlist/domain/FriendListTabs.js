// Estratto da HabboAirLauncher.deobf.js, riga 217009.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendListTabs.as
// Nome offuscato: _i1592a561f84451

class {
  static {
    n(this, "FriendListTabs");
  }
  var_630;
  _re842dacc40aa7f = [];
  var_4110 = null;
  _r0e0e73b4c7bcef = 200;
  _ree57c3be11538b = 200;
  _windowWidth = 230;
  constructor(e) {
    ((this.var_630 = e),
      this._re842dacc40aa7f.push(
        new FriendListTab(
          this.var_630._r9692e4ef7c6b9f(),
          _ia4c17117df4f10._ra8c8b3cdc9c268,
          new zz(),
          "${friendlist.friends}",
          "friends_footer",
          "hdr_friends",
        ),
      ),
      this._re842dacc40aa7f.push(
        new FriendListTab(
          this.var_630._r9692e4ef7c6b9f(),
          _ia4c17117df4f10._rfadb4d8e33d276,
          new class_3626(),
          "${friendlist.tab.friendrequests}",
          "friend_requests_footer",
          "hdr_friend_requests",
        ),
      ),
      this._re842dacc40aa7f.push(
        new FriendListTab(
          this.var_630._r9692e4ef7c6b9f(),
          _ia4c17117df4f10.SearchView,
          new SearchView(),
          "${generic.search}",
          "search_footer",
          "hdr_search",
        ),
      ),
      this.toggleSelected(null));
  }
  _rb7860738b83231() {
    return this._re842dacc40aa7f;
  }
  findTab(e) {
    for (let r of this._re842dacc40aa7f) if (r.id === e) return r;
    return null;
  }
  _rd8f3f57f9b50c7() {
    for (let e of this._re842dacc40aa7f) e.setSelected(!1);
  }
  findSelectedTab() {
    for (let e of this._re842dacc40aa7f) if (e.selected) return e;
    return null;
  }
  toggleSelected(e) {
    let r = this.findSelectedTab();
    r == null
      ? ((this._r0e0e73b4c7bcef = this._ree57c3be11538b), this.setSelected(this._r43be3a88b3e03a(e), !0))
      : r === e || e == null
        ? ((this._ree57c3be11538b = this._r0e0e73b4c7bcef),
          (this._r0e0e73b4c7bcef = 0),
          this._rd8f3f57f9b50c7())
        : this.setSelected(this._r43be3a88b3e03a(e), !0);
  }
  setSelected(e, r) {
    (this._rd8f3f57f9b50c7(), e.setSelected(r), r && (this.var_4110 = e));
  }
  _r43be3a88b3e03a(e) {
    return e ?? (this.var_4110 != null ? this.var_4110 : this._re842dacc40aa7f[0]);
  }
  get _r801554b3cb243d() {
    return this._r0e0e73b4c7bcef;
  }
  set _r801554b3cb243d(e) {
    this._r0e0e73b4c7bcef = e;
  }
  get _rd5507bbbf34586() {
    return this._windowWidth;
  }
  set _rd5507bbbf34586(e) {
    this._windowWidth = e;
  }
  get _rd21db78adaafd6() {
    return this._windowWidth - 2;
  }
}

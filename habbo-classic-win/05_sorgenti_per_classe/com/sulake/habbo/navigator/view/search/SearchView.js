// Estratto da HabboAirLauncher.deobf.js, riga 216748.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/SearchView.as
// Nome offuscato: _i5334802f4cc3b6

class {
  static {
    n(this, "SearchView");
  }
  _friendList = null;
  _searchStr = null;
  var_122 = null;
  init(e) {
    this._friendList = e;
  }
  _r3bccd06cf0fd7b() {
    return this._friendList?._rc6d7b8ee3de201.friends == null
      ? 0
      : this._friendList._rc6d7b8ee3de201.friends.length +
          this._friendList._rc6d7b8ee3de201.others.length;
  }
  _r8f8aa0d6774800(e) {
    this.var_122 = e;
  }
  fillFooter(e) {
    ((this._searchStr = e.findChildByName("search_str")),
      this._searchStr != null &&
        ((this._searchStr.procedure = this.onSearchInput.bind(this)),
        this._searchStr.addEventListener(sr.const_1081, this.onSearchStrInput)));
    let r = e.findChildByName("search_but");
    (r != null && (r.procedure = this._rf8d0f707a1a32f.bind(this)),
      this._friendList?.refreshButton(e, "search", !0, null, 0));
  }
  _r8ea31888f115fd(e) {}
  refreshList() {
    if (this.var_122 == null || this._friendList == null) return;
    this.var_122.autoArrangeItems = !1;
    let e = this._friendList._rc6d7b8ee3de201;
    for (let r = 0; ; r++) {
      let t = this._friendList.isMessagesPersisted();
      if (r === 0) this.refreshEntry(!0, r, null, null, this.getFriendsCaption(), !1, !1, 0);
      else if (r <= e.friends.length) {
        let i = e.friends[r - 1];
        this.refreshEntry(
          !0,
          r,
          i._r1d581899499554,
          i._r0cc16a9a7a5c7d,
          null,
          i._ra7e2d3fcc5ef21 || t,
          !1,
          i.avatarId,
        );
      } else if (r === e.friends.length + 1)
        this.refreshEntry(!0, r, null, null, this.getOthersCaption(), !1, !1, 0);
      else if (r <= e.friends.length + e.others.length + 1) {
        let i = e.others[r - 2 - e.friends.length];
        this.refreshEntry(
          !0,
          r,
          i._r1d581899499554,
          i._r0cc16a9a7a5c7d,
          null,
          !1,
          i.avatarId !== this._friendList.avatarId &&
            !this._friendList._rc6d7b8ee3de201.var_3816(i.avatarId),
          i.avatarId,
        );
      } else if (this.refreshEntry(!1, r, null, null, null, !1, !1, 0)) break;
    }
    (this.refreshShading(), (this.var_122.autoArrangeItems = !0));
  }
  _r59dc41150d87a2(e) {
    this._searchStr != null && (this._searchStr.text = e);
  }
  focus() {
    this._searchStr?.focus();
  }
  refreshShading() {
    if (!(this.var_122 == null || this._friendList == null))
      for (let e = 0; e < this.var_122.numListItems; e++) {
        let r = this.var_122.getListItemAt(e);
        r != null &&
          (r.color = this._friendList._r6dce2f14add5ec._rc2e3809e8c04e6(
            _ia4c17117df4f10.SearchView,
            e % 2 === 1,
          ));
      }
  }
  getFriendsCaption() {
    return (this._friendList?._rc6d7b8ee3de201.friends.length ?? 0) === 0
      ? "${friendlist.search.nofriendsfound}"
      : (this._friendList?._r43eae9731f5b27(
          "friendlist.search.friendscaption",
          "cnt",
          `${this._friendList._rc6d7b8ee3de201.friends.length}`,
        ),
        "${friendlist.search.friendscaption}");
  }
  getOthersCaption() {
    return (this._friendList?._rc6d7b8ee3de201.others.length ?? 0) === 0
      ? "${friendlist.search.noothersfound}"
      : (this._friendList?._r43eae9731f5b27(
          "friendlist.search.otherscaption",
          "cnt",
          `${this._friendList._rc6d7b8ee3de201.others.length}`,
        ),
        "${friendlist.search.otherscaption}");
  }
  refreshEntry(e, r, t, i, s, o, d, c) {
    if (this.var_122 == null || this._friendList == null) return !0;
    let f = this.var_122.getListItemAt(r);
    if (f == null) {
      if (!e || ((f = this._friendList.getXmlWindow("search_entry")), f == null)) return !0;
      let _ = f.findChildByName("bg_region");
      (_ != null && (_.procedure = this.onSearchEntry.bind(this)), this.var_122.addListItem(f));
    }
    ((f.height = e ? 20 : 0), (f.visible = e), (f.id = c));
    let l = f.findChildByName("bg_region");
    (l != null && (l.id = c),
      this.refreshFigure(f, t, c < 0),
      this._friendList.refreshText(f, "name", i != null, i ?? ""),
      this._friendList.refreshText(f, "caption", s != null, s ?? ""),
      this._friendList.refreshButton(f, "start_chat", o, this._r2cd5da1b46dc89.bind(this), c),
      this._friendList.refreshButton(f, "ask_for_friend", d, this._r3a8721087d6131.bind(this), c),
      Io.setUserInfoState(!1, f));
    let b = f.findChildByName("user_info_region");
    return (b != null && (b.visible = c > 0), !1);
  }
  refreshFigure(e, r, t = !1) {
    let i = e.getChildByName("face");
    if (i != null) {
      if (r == null || r === "") {
        i.visible = !1;
        return;
      }
      ((i.bitmap = t
        ? (this._friendList?.face(r) ?? null)
        : (this._friendList?._rac9072fcec5669(r) ?? null)),
        i.bitmap != null
          ? ((i.width = i.bitmap.width), (i.height = i.bitmap.height), (i.visible = !0))
          : (i.visible = !1));
    }
  }
  onSearchEntry(e, r) {
    r.id < 1 ||
      (this._friendList?.view._r8b0a1f4ed09a31(e, "${infostand.profile.link.tooltip}"),
      e.type === u.OVER
        ? Io.setUserInfoState(!0, r.parent)
        : e.type === u.OUT
          ? Io.setUserInfoState(!1, r.parent)
          : e.type === u.CLICK &&
            this._friendList != null &&
            (this._friendList.trackGoogle("extendedProfile", "friendList_friendsSearch"),
            this._friendList.send(new class_2134(r.id))));
  }
  _rf8d0f707a1a32f(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.search}"),
      e.type === u.CLICK && this._r5b07904da32236());
  }
  _r3a8721087d6131(e, r) {
    if (
      (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.addfriend}"),
      e.type !== u.CLICK || this._friendList == null)
    )
      return;
    let t = this._friendList._rc6d7b8ee3de201._rfd4de41390587e(r.id);
    if (t == null) return;
    this._friendList._r9c4d5fbe38e0ed(t.avatarId, t._r0cc16a9a7a5c7d)
      ? (this._friendList.showFriendRequestSentAlert(t._r0cc16a9a7a5c7d),
        this.refreshEntry(
          !0,
          this._r2f90bde71c5681(t.avatarId),
          t._r1d581899499554,
          t._r0cc16a9a7a5c7d,
          null,
          !1,
          !1,
          t.avatarId,
        ))
      : this._friendList.showLimitReachedAlert();
  }
  _r2f90bde71c5681(e) {
    if (this.var_122 == null) return -1;
    for (let r = 0; r < this.var_122.numListItems; r++)
      if (this.var_122.getListItemAt(r)?.id === e) return r;
    return -1;
  }
  _r2cd5da1b46dc89(e, r) {
    if ((this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.im}"), e.type !== u.CLICK)) return;
    let t = this._friendList?._rc6d7b8ee3de201._rfd4de41390587e(r.id) ?? null;
    t != null && this._friendList?.messenger.startConversation(t.avatarId);
  }
  onSearchInput(e, r) {
    this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.searchstr}");
  }
  onSearchStrInput = n((...e) => {
    this._rd6552e21ff3f71(e[0]);
  }, "onSearchStrInput");
  _rd6552e21ff3f71(e) {
    if (e.keyCode === 13) {
      this._r5b07904da32236();
      return;
    }
    let r = this._searchStr?.text ?? "";
    r.length > 25 && this._searchStr != null && (this._searchStr.text = r.substring(0, 25));
  }
  _r5b07904da32236() {
    let e = this._searchStr?.text ?? "";
    e !== "" && this._friendList?.send(new _i469f4bbfad3d9a(e));
  }
}

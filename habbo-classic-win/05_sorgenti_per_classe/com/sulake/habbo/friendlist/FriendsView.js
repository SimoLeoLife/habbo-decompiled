// Estratto da HabboAirLauncher.deobf.js, riga 215639.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/FriendsView.as

class a {
  static {
    n(this, "FriendsView");
  }
  static BG_NAME = "bg";
  static VIP_ICON_STYLE = 14;
  static ROOM_INVITATION_DELAY = 6e4;
  static const_377 = 5;
  _friendList = null;
  var_5231 = null;
  var_4765 = null;
  var_4727 = null;
  var_2923 = null;
  var_316 = null;
  var_3815 = null;
  var_4613 = null;
  var_122 = null;
  _re57070ef4efe46 = null;
  var_5079 = !1;
  init(e) {
    ((this._friendList = e),
      (this.var_5079 = this._friendList.getBoolean("friend_list.select_all.enabled")));
  }
  _r3bccd06cf0fd7b() {
    return this._friendList?.categories.getFriendCount(!0) ?? 0;
  }
  fillFooter(e) {
    ((this.var_5231 = this.initButton("open_minimail", this.onMinimailButtonClick.bind(this), e)),
      (this.var_4765 = this.initButton("open_homepage", this.onHomeButtonClick.bind(this), e)),
      (this.var_4727 = this.initButton("room_invite", this.onInviteButtonClick.bind(this), e)),
      (this.var_2923 = this.initButton("search", this._rf8d0f707a1a32f.bind(this), e)),
      (this.var_4613 = this.initButton("remove_friend", this.onRemoveButtonClick.bind(this), e)),
      (this.var_316 = e.findChildByName("friend_search")),
      (this.var_3815 = e.findChildByName("clear_input_region")),
      this.var_316 != null && (this.var_316.procedure = this.searchInputProcedure.bind(this)),
      this.var_3815 != null && (this.var_3815.procedure = this._rd054841ef3d0fd.bind(this)),
      this.refreshButtons());
  }
  _r8f8aa0d6774800(e) {
    ((this.var_122 = e), this.refreshList());
  }
  _r8ea31888f115fd(e) {
    this._re57070ef4efe46?._rd6e3f4c29ef0ec();
  }
  setNewMessageArrived() {
    this._friendList?.tabs.findTab(_ia4c17117df4f10._ra8c8b3cdc9c268)?.setNewMessageArrived(!0);
  }
  refreshList() {
    if (this.var_122 == null || this._friendList == null) return;
    let e =
      this.var_316 != null && this.var_316.visible
        ? this.var_316.text.toLowerCase()
        : "";
    (this._re57070ef4efe46 == null && (this._re57070ef4efe46 = new RelationshipStatusSelector(this._friendList)),
      this._re57070ef4efe46._rd6e3f4c29ef0ec(),
      (this.var_122.autoArrangeItems = !1));
    let r = 0;
    for (let t of this._friendList.categories._rce5da95ddf8754())
      if (((t.filter = e), this.refreshEntry(!0, r, t, null), r++, t.open)) {
        let i = t.getStartFriendIndex(),
          s = t.getEndFriendIndex();
        for (let o = i; o < s; o++) (this.refreshEntry(!0, r, t, t.filteredFriends[o] ?? null), r++);
      }
    for (; !this.refreshEntry(!1, r, null, null);) r++;
    ((this.var_122.autoArrangeItems = !0), this.refreshButtons());
  }
  _r2cfd6c85203077() {
    this._re57070ef4efe46?._rd6e3f4c29ef0ec();
  }
  initButton(e, r, t) {
    let i = t.findChildByName(`button_${e}`);
    if (i == null) return null;
    i.procedure = r;
    let s = i.findChildByName("icon");
    return (
      s != null &&
        ((s.bitmap = this._friendList?._r6bd8f6d6bfdbb5(e) ?? null),
        s.bitmap != null && ((s.width = s.bitmap.width), (s.height = s.bitmap.height))),
      i
    );
  }
  refreshEntry(e, r, t, i) {
    if (this.var_122 == null || this._friendList == null) return !0;
    let s = this.var_122.getListItemAt(r),
      o = r % 2 === 1;
    if (s == null) {
      if (!e || ((s = this._friendList.getXmlWindow("friend_entry")), s == null)) return !0;
      let d = s.findChildByName("user_info_region");
      (d != null && (d.procedure = this.onUserInfo.bind(this)), this.var_122.addListItem(s));
    }
    return (
      Util.hideChildren(s),
      e
        ? ((s.height = 20),
          (s.visible = !0),
          (s.color = this._friendList._r6dce2f14add5ec._rc2e3809e8c04e6(_ia4c17117df4f10._ra8c8b3cdc9c268, o)),
          i == null && t != null
            ? ((t.view = s), this.refreshCategoryEntry(t, o))
            : i != null && t != null && ((i.view = s), this.refreshFriendEntry(t, i, o)),
          !1)
        : ((s.height = 0), (s.visible = !1), !1)
    );
  }
  refreshCategoryEntry(e, r) {
    if (this.var_122 == null || e.view == null || this._friendList == null) return;
    let t = e.view;
    (t.tags.splice(0, t.tags.length),
      t.tags.push(String(e.id)),
      this._friendList.refreshText(t, "caption", !0, `${e.name} (${e.filteredFriends.length})`),
      this.refreshCatIcon(t, "arrow_down_black", e.open, e.id, 6),
      this.refreshCatIcon(t, "arrow_right_black", !e.open, e.id, 9));
    let i = t.findChildByName("select_all_region");
    if (this.var_5079 && i != null) {
      if (
        ((i.visible =
          e.open && e.filteredFriends.length >= a.const_377 && e.id === _c._r2a8d0988824e63),
        i.visible)
      ) {
        let s = i.getChildByName("select_all_text");
        s != null &&
          (s.caption = this.areAllFriendsSelected(e) ? "${friendlist.unselect_all}" : "${friendlist.select_all}");
      }
      i.procedure = this.onSelectAllClick.bind(this);
    } else i != null && (i.visible = !1);
    ((t.procedure = this._re7ab43f57d677c.bind(this)),
      (t.visible = !1),
      this.refreshPager(e, r),
      (t.height = Math.max(Util.getLowestPoint(t), 20)),
      (t.visible = !0));
  }
  areAllFriendsSelected(e) {
    for (let r of e.friends) if (!r.selected) return !1;
    return !0;
  }
  refreshFriendEntry(e, r, t = !1) {
    if (r.view == null || this._friendList == null) return;
    let i = r.view;
    ((i.id = r.id),
      (i.procedure = this._r98899799eb4e5c.bind(this)),
      (i.visible = !0),
      r.selected
        ? (i.color = this._friendList._r6dce2f14add5ec._rbc73a30b0a92d3())
        : t && (i.color = this._friendList._r6dce2f14add5ec._rc2e3809e8c04e6(_ia4c17117df4f10._ra8c8b3cdc9c268, !0)));
    let s = i.findChildByName("name");
    s != null && (s.textColor = this._friendList._r6dce2f14add5ec._rf0c5cd2a438bbf(r.selected));
    let o = r.name;
    (r.realName != null && r.realName !== "" && (o = `${o} (${r.realName})`),
      this._friendList.refreshText(i, "name", !0, o));
    let d = this._friendList.isMessagesPersisted() && (r._r311b9378b916ee || r._r2978d441b4844d);
    (this._friendList.refreshButton(
      i,
      "start_chat",
      r.online || d,
      this._r2cd5da1b46dc89.bind(this),
      r.id,
    ),
      this._friendList.refreshButton(
        i,
        "follow_friend",
        r.followingAllowed,
        this.onFollowButtonClick.bind(this),
        r.id,
      ),
      this._friendList._r2a0afb25f016d4(
        i,
        "relationship_status",
        r._r13d8beafe06ba1,
        this.onRelationshipStatusRegion.bind(this),
        r.id,
      ),
      this.refreshFigure(i, r));
    let c = i.findChildByName("user_info_region");
    (c != null && ((c.visible = !0), (c.id = r.id)), Io.setUserInfoState(!1, i));
  }
  refreshCatIcon(e, r, t, i, s) {
    if ((this._friendList?.refreshButton(e, r, t, this._re7ab43f57d677c.bind(this), i), !t)) return;
    let o = e.findChildByName("caption"),
      d = e.findChildByName(r);
    o != null && d != null && (d.x = o.textWidth + s);
  }
  refreshFigure(e, r) {
    e || ErrorReportStorage.addDebugData("FriendsView", "refreshFigure: e is null!");
    let t = e.getChildByName("face");
    if (t == null) {
      ErrorReportStorage.addDebugData("FriendsView", "refreshFigure: child is null!");
      return;
    }
    if (r.figure == null || r.figure === "") {
      t.visible = !1;
      return;
    }
    if (
      (r.face == null &&
        this._friendList != null &&
        (r.face = r.isGroupFriend()
          ? this._friendList.face(r.figure)
          : this._friendList._rac9072fcec5669(r.figure)),
      t.bitmap == null && (t.bitmap = new A(t.width, t.height)),
      t.tags[0] !== r.figure)
    ) {
      (t.tags.splice(0, t.tags.length), t.tags.push(r.figure), t.bitmap.fillRect(t.bitmap.rect, 0));
      let i = r.face;
      i != null && t.bitmap.copyPixels(i, i.rect, new E(0, 0), null, null, !0);
    }
    t.visible = !0;
  }
  refreshButtons() {
    if (this._friendList == null) return;
    let e = this._friendList.categories._r9a803fab68a4db();
    (this._rf075e1a10c68ec(this.var_5231, this._rafec047e791b5f(e)),
      this._rf075e1a10c68ec(this.var_4765, this._r859fa052905107(e)),
      this._rf075e1a10c68ec(this.var_4727, this._rcec56ca2fbbb92(e)),
      this._rf075e1a10c68ec(this.var_4613, this._r07959259b94e7c(e)));
  }
  _rf075e1a10c68ec(e, r) {
    e != null && (r ? e.enable() : e.disable());
  }
  _rafec047e791b5f(e) {
    return (this._friendList?.isEmbeddedMinimailEnabled() ?? !1) || e.length === 1;
  }
  _r859fa052905107(e) {
    return e.length === 1;
  }
  _rcec56ca2fbbb92(e) {
    return e.length > 0;
  }
  _r07959259b94e7c(e) {
    return e.length > 0;
  }
  onSelectAllClick(e, r) {
    if (e.type !== u.CLICK || this._friendList == null) return;
    let t = r;
    for (; t != null && t.tags.length === 0;) t = t.parent;
    let i = Number(t?.tags[0] ?? NaN),
      s = this._friendList.categories.findCategory(i);
    if (s != null) {
      if (this.areAllFriendsSelected(s)) for (let o of s.filteredFriends) o.selected = !1;
      else for (let o of s.filteredFriends) o.selected = !0;
      (this.refreshList(), this._friendList.view.refresh("Selected/unselected all"));
    }
  }
  _re7ab43f57d677c(e, r) {
    if (e.type !== u.CLICK || this._friendList == null) return;
    let t = r;
    t.tags.length === 0 && (t = t.parent);
    let i = Number(t?.tags[0] ?? NaN),
      s = this._friendList.categories.findCategory(i);
    s != null &&
      (s._r49df954c589e8e(!s.open),
      this.refreshList(),
      this._friendList.view.refresh("Cat open/closed"));
  }
  _r98899799eb4e5c(e, r) {
    if (r == null || this._friendList == null) return;
    let t = r;
    if ((t.id === 0 && (t = t.parent), t != null && (e.type === u.CLICK || e.type === u.DOUBLE_CLICK))) {
      let i = this._friendList.categories._r6c6a0b9c455198(t.id);
      (i != null &&
        i.id > 0 &&
        ((i.selected = !i.selected), this.refreshButtons(), this.refreshList()),
        e.type === u.DOUBLE_CLICK &&
          i != null &&
          i.online &&
          this._friendList.messenger.startConversation(i.id));
    }
  }
  _r2cd5da1b46dc89(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.im}"),
      e.type === u.CLICK && this._friendList?.messenger.startConversation(r.id));
  }
  onFollowButtonClick(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.follow}"),
      !(e.type !== u.CLICK || this._friendList == null) &&
        (this._friendList.send(new class_3066(r.id)),
        this._friendList.send(new class_2154("Navigation", "Friend List", "go.friendlist"))));
  }
  onRelationshipStatusRegion(e, r) {
    if (this._friendList == null) return;
    let t = r;
    (t.id === 0 && (t = t.parent),
      t != null &&
        (this._friendList.view._r8b0a1f4ed09a31(e, "${friendlist.tip.relationship}"),
        e.type === u.CLICK &&
          this._re57070ef4efe46 != null &&
          ((this._re57070ef4efe46.friendId = t.id),
          this._re57070ef4efe46.appearAt(t, this._friendList.view.mainWindow ?? t))));
  }
  onUserInfo(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${infostand.profile.link.tooltip}"),
      r instanceof Object &&
        (e.type === u.OVER
          ? Io.setUserInfoState(!0, r)
          : e.type === u.OUT
            ? Io.setUserInfoState(!1, r)
            : e.type === u.CLICK &&
              this._friendList != null &&
              (this._friendList.trackGoogle("extendedProfile", "friendList_friendsView"),
              this._friendList.send(new class_2134((r.parent ?? r).id)))));
  }
  onMinimailButtonClick(e, r) {
    if (
      (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.compose}"),
      e.type !== u.CLICK || this._friendList == null)
    )
      return;
    let t = this._friendList.categories._r9a803fab68a4db();
    if (t.length === 0) {
      this._friendList.isEmbeddedMinimailEnabled() && Ae.openMinimail("#mail/inbox/");
      return;
    }
    let i = new Map(),
      s = [];
    for (let d = 0; d < t.length && d < 50; d++) s.push(String(t[d].id));
    (i.set("recipientid", s.join(",")), i.set("random", `${Math.round(Math.random() * 1e8)}`));
    let o = e;
    this._friendList.isEmbeddedMinimailEnabled()
      ? Ae.openMinimail(`#mail/compose/${i.get("recipientid")}/${i.get("random")}/`)
      : this._friendList.openHabboWebPage("link.format.mail.compose", i, o.stageX, o.stageY);
  }
  onHomeButtonClick(e, r) {
    if (
      (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.home}"),
      e.type !== u.CLICK || this._friendList == null)
    )
      return;
    let t = this._friendList.categories._r52c870ff85cb99();
    if (t == null) return;
    let i = new Map();
    (i.set("ID", `${t.id}`), i.set("username", t.name));
    let s = e;
    this._friendList.openHabboWebPage("link.format.userpage", i, s.stageX, s.stageY);
  }
  onInviteButtonClick(e, r) {
    if (
      (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.invite}"),
      !(e.type !== u.CLICK || this._friendList == null))
    ) {
      if (_ia411d8d8194a3a() - this._friendList.lastRoomInvitationTime < a.ROOM_INVITATION_DELAY) {
        this._friendList._r3651220a1507f2(
          "${friendlist.invite.frequentalert.title}",
          "${friendlist.invite.frequentalert.text}",
        );
        return;
      }
      new RoomInviteView(this._friendList).show();
    }
  }
  _rf8d0f707a1a32f(e, r) {
    this.var_2923 != null &&
      (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.search}"),
      !(e.type !== u.CLICK || this.var_316 == null || this.var_3815 == null) &&
        ((this.var_2923.visible = !1),
        (this.var_316.visible = !0),
        (this.var_3815.visible = !0),
        this.var_316.focus()));
  }
  searchInputProcedure(e, r) {
    if (this.var_2923 == null || this._friendList == null) return;
    this._friendList.view._r8b0a1f4ed09a31(e, "${friendlist.tip.search}");
    let t = e;
    if (t == null) return;
    let i = t.keyCode === 13;
    t.keyCode === 27
      ? this.clearInput()
      : i &&
        (this.refreshList(),
        this._friendList.view.refresh("Apply filter"),
        this.var_316?.focus());
  }
  _rd054841ef3d0fd(e, r) {
    e.type === u.CLICK && this.clearInput();
  }
  clearInput() {
    this.var_316 == null ||
      this.var_2923 == null ||
      this.var_3815 == null ||
      ((this.var_316.text = ""),
      (this.var_2923.visible = !0),
      (this.var_316.visible = !1),
      (this.var_3815.visible = !1),
      this.refreshList(),
      this._friendList?.view.refresh("Clear filter"));
  }
  onRemoveButtonClick(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.remove}"),
      !(e.type !== u.CLICK || this._friendList == null) && new FriendRemoveView(this._friendList).show());
  }
  refreshPager(e, r) {
    if (e.view == null || this._friendList == null) return;
    let t = e.view.findChildByName("pager");
    if (t != null) {
      if (e._r7505612c77a8b5() < 2 || !e.open) {
        t.visible = !1;
        return;
      }
      ((t.visible = !0), Util.hideChildren(t));
      for (let i = 0; i < e._r7505612c77a8b5(); i++) this.refreshPageLink(t, i, e._r4462e1d7892a93, r);
      (Util.layoutChildrenInArea(t, t.width, 15), (t.height = Util.getLowestPoint(t)));
    }
  }
  refreshPageLink(e, r, t, i) {
    if (this._friendList == null) return;
    let s = `page.${r}`,
      o = e.getChildByName(s);
    if (o == null) {
      if (((o = this._friendList.getXmlWindow("pagelink")), o == null)) return;
      ((o.name = s), e.addChild(o));
    }
    ((o.underline = r !== t),
      (o.text = `${r * _c.PAGE_SIZE + 1}-${(r + 1) * _c.PAGE_SIZE}`),
      (o.id = r),
      (o.procedure = this._r0a5dcedd4af800.bind(this)),
      (o.width = o.textWidth + 5),
      (o.color = this._friendList._r6dce2f14add5ec._rc2e3809e8c04e6(_ia4c17117df4f10._ra8c8b3cdc9c268, i)),
      (o.visible = !0));
  }
  _r0a5dcedd4af800(e, r) {
    if (e.type !== u.CLICK || this._friendList == null) return;
    let t = r,
      i = Number(t.parent?.parent?.tags[0] ?? NaN),
      s = t.id,
      o = this._friendList.categories.findCategory(i);
    o != null && ((o._r4462e1d7892a93 = s), this.refreshList());
  }
}

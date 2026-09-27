// Estratto da HabboAirLauncher.deobf.js, riga 227140.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/GuildMembersWindowCtrl.as
// Nome offuscato: _i95783eae7683cb

class a {
  static {
    n(this, "GuildMembersWindowCtrl");
  }
  static REQUEST_PAGE_RATELIMIT = 500;
  static MEMBER_SPACING = new E(5, 5);
  var_41;
  _window = null;
  _groupId = 0;
  var_754 = new _i05394ecc0c0c4d(1e3, 1);
  _data = null;
  _re407f68feaa7c1 = null;
  _loadingIcon = null;
  var_770 = -1;
  var_2939 = -1;
  var_4191 = 0;
  constructor(e) {
    ((this.var_41 = e),
      this.var_754?.addEventListener(DeBouncer.addEventListener, this.onSearchTimer),
      (this._loadingIcon = new $h()));
  }
  dispose() {
    ((this.var_41 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._data = null),
      this._re407f68feaa7c1 != null && (this._re407f68feaa7c1.dispose(), (this._re407f68feaa7c1 = null)),
      this.var_754 != null &&
        (this.var_754.removeEventListener(DeBouncer.addEventListener, this.onSearchTimer),
        this.var_754.stop(),
        (this.var_754 = null)),
      this._loadingIcon?.dispose(),
      (this._loadingIcon = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  _r9ce93e18214eec(e) {
    ((this._data = e.data), this.show(), this.populateSearchTypes(), this._r822e7d6c1b9742());
  }
  _rf56b115c39c73d(e) {
    this._data != null && this._data.groupId === e.guildId && (this._data.update(e.data), this.reload());
  }
  onGuildMemberMgmtFailed(e) {
    let r = `group.membermgmt.fail.${e.reason}`,
      t = this.var_41?.localization.getLocalization(r, r) ?? r;
    (this.var_41?.windowManager.alert("${group.membermgmt.fail.title}", t, 0, null),
      this._data != null &&
        this._data.groupId === e.guildId &&
        this._window?.visible &&
        this.doSearch(this._data._r4462e1d7892a93));
  }
  _ra6e78270489e0e(e) {
    let r = e.getParser().guildId;
    this._window?.visible &&
      this._data != null &&
      this._data.groupId === r &&
      this.doSearch(this._data._r4462e1d7892a93);
  }
  _r8003fb575755c8(e) {
    let r = e.getParser();
    this._window?.visible &&
      this._data != null &&
      this._data.groupId === r.groupId &&
      this.doSearch(this._data._r4462e1d7892a93);
  }
  onMembersClick(e, r) {
    if (this.var_41?.getBoolean("groupMembers.enabled")) {
      if (this._window != null && this._window.visible && this._groupId === e) {
        this.close();
        return;
      }
      (this._re407f68feaa7c1?.goBackToInitialState(),
        (this._groupId = e),
        this.var_41.send(new class_2804(e, 0, "", r)));
    }
  }
  show() {
    (this.prepareWindow(),
      !(this._window == null || this._data == null) &&
        (this.refresh(), (this._window.visible = !0), this._window.activate()));
  }
  reload() {
    this._window?.visible && this.refresh();
  }
  close() {
    this._window != null && ((this._groupId = 0), (this._window.visible = !1));
  }
  get data() {
    return this._data;
  }
  setSearchingIcon(e) {
    let r = this._window?.findChildByName("searching_icon");
    r != null && this._loadingIcon?.setVisible(r, e);
  }
  refresh() {
    if (this.var_41 == null || this._window == null || this._data == null) return;
    this.var_41.localization._r43eae9731f5b27(
      "group.members.title",
      "groupName",
      this._data.groupName,
    );
    let e = this._window.findChildByName("members_cont");
    if (e == null) return;
    for (let s = 0; s < this._data.var_4080; s++)
      this.refreshEntry(e, s, this._data.entries[s] ?? null);
    let r = this._window.findChildByName("group_logo")?.widget;
    (r != null && ((r.badgeId = this._data._rc9fc89e7eb27a7), (r.groupId = this._data.groupId)),
      (this.var_770 = this._data._r4462e1d7892a93),
      this._data._r4462e1d7892a93 === this.var_2939 && (this.var_2939 = -1));
    let i = this.var_41.localization.getLocalization("group.members.pageinfo").split("%page%");
    if (
      i.length === 2 &&
      this.pageTextStart != null &&
      this.pageTextEnd != null &&
      this.pageNumberInput != null
    ) {
      let s = i[0] ?? "",
        o = i[1] ?? "";
      ((this.pageTextStart.text = s.replace("%amount%", `${this._data.totalEntries}`)),
        (this.pageTextEnd.text = o.replace("%totalPages%", `${this._data.totalPages}`)),
        (this.pageNumberInput.text = `${this._data._r4462e1d7892a93 + 1}`));
    }
    ((this._window.findChildByName("previous_page_button").visible = this._r64bdd0733bd2a7()),
      (this._window.findChildByName("next_page_button").visible = this.hasNextPage()));
  }
  prepareWindow() {
    if (
      this._window != null ||
      ((this._window = this.var_41?.getXmlWindow("guild_members_window")),
      this._window == null || this.var_41 == null)
    )
      return;
    ((this._window.findChildByTag("close").procedure = this.onClose),
      (this._window.findChildByName("previous_page_button").procedure = this._rb5cc4e076e4b3a),
      (this._window.findChildByName("next_page_button").procedure = this._ra9cb80818d8b9c));
    let e = this._window.findChildByName("filter_members_input");
    (e != null &&
      (this._re407f68feaa7c1 = new InfoText(
        e,
        this.var_41.localization.getLocalization("group.members.searchinfo"),
      )),
      this.pageNumberInput != null &&
        ((this.pageNumberInput.restrict = "0-9"),
        this.pageNumberInput.addEventListener(sr.const_1081, this._r4b53c98e335893),
        this.pageNumberInput.addEventListener(u.CLICK_AWAY, this._rd4b8b2d81b9781)),
      this._window.center());
  }
  refreshEntry(e, r, t) {
    let i = e.getChildAt(r);
    if (i == null) {
      if (t == null || ((i = this.getListEntry()), i == null)) return;
      ((i.tags[0] = `${r}`),
        e.addChild(i),
        (i.x = r % 2 === 0 ? 0 : i.width + a.MEMBER_SPACING.x),
        (i.y = Math.floor(r / 2) * (i.height + a.MEMBER_SPACING.y)));
    }
    t != null ? (this.refreshUserEntry(i, t), (i.visible = !0)) : (i.visible = !1);
  }
  refreshUserEntry(e, r) {
    if (this._data == null || this.var_41 == null) return;
    ((e.findChildByName("user_name_txt").caption = r.userName),
      (e.findChildByName("icon_owner").visible = r.owner),
      this.setAdminState(r.member, r.admin, e));
    let t = r.userId === this.var_41.avatarId,
      i = e.findChildByName("admin_container");
    i != null && (i.visible = r.admin || this._data._r7339cb7606ad34);
    let s = e.findChildByName("bg_region");
    (s != null && (s.id = r.userId), this.setRemoveState(!1, e), this._r92bedb14b7b492(!1, e));
    let o = e.findChildByName("remove_region");
    o != null &&
      ((o.toolTipCaption = this.var_41.localization.getLocalization(
        r.member ? "group.members.kick" : "group.members.reject",
      )),
      (o.visible = !r.owner && !t && this._data._r7339cb7606ad34 && !r.blocked),
      (o.id = r.userId));
    let d = e.findChildByName("block_region");
    d != null &&
      ((d.toolTipCaption = this.var_41.localization.getLocalization("group.members.block")),
      (d.visible =
        r.member &&
        !r.owner &&
        !t &&
        this._data._r7339cb7606ad34 &&
        this.var_41.getBoolean("group.blocking.enabled") &&
        !r.blocked),
      (d.id = r.userId));
    let c = e.findChildByName("action_link_region");
    c != null && ((c.visible = !t && this._data._r7339cb7606ad34), (c.id = r.userId));
    let f = e.findChildByName("member_since_txt");
    f != null &&
      ((f.visible = !(c?.visible ?? !1) && r.memberSince !== ""),
      this.var_41.localization._r43eae9731f5b27("group.members.since", "date", r.memberSince),
      (f.caption = this.var_41.localization.getLocalization("group.members.since")));
    let l = e.findChildByName("avatar_image")?.widget;
    (l != null && (l.figure = r.figure),
      r.blocked
        ? this.setActionLink(e, "group.members.unblock", !1)
        : r.owner
          ? this.setActionLink(e, "group.members.owner", !1)
          : r.admin
            ? this.setActionLink(e, "group.members.removerights", !0)
            : r.member
              ? this.setActionLink(e, "group.members.giverights", !0)
              : this.setActionLink(e, "group.members.accept", !0));
  }
  getListEntry() {
    let e = this.var_41?.getXmlWindow("member_entry");
    if (e == null) return null;
    let r = e.findChildByName("bg_region");
    r != null && (r.procedure = this._rd3faecd24fd0f8);
    let t = e.findChildByName("block_region");
    t != null &&
      (t.addEventListener(u.OVER, this._r9a0483989c8f80),
      t.addEventListener(u.OUT, this._r6fd0853db9441f),
      t.addEventListener(u.CLICK, this._r98c39ebe237e49));
    let i = e.findChildByName("remove_region");
    i != null &&
      (i.addEventListener(u.OVER, this._r9a0483989c8f80),
      i.addEventListener(u.OUT, this._r6fd0853db9441f),
      i.addEventListener(u.CLICK, this._r019de7fe69d36a));
    let s = e.findChildByName("action_link_region");
    return (
      s != null &&
        (s.addEventListener(u.OVER, this._r50ab495fd68a85),
        s.addEventListener(u.OUT, this._r7073825c69397d),
        s.addEventListener(u.CLICK, this._r9a81d375425a1f)),
      e
    );
  }
  setActionLink(e, r, t) {
    let i = e.findChildByName("action_link");
    i != null &&
      ((i.text = this.var_41?.localization.getLocalization(r, r) ?? r), (i.underline = t));
  }
  setRemoveState(e, r) {
    ((r.findChildByName("icon_close_off").visible = !e),
      (r.findChildByName("icon_close_over").visible = e),
      (r.findChildByName("icon_close_down").visible = !1));
  }
  _r92bedb14b7b492(e, r) {
    let t = r.findChildByName("action_link");
    t != null && (t.textColor = e ? 4280984060 : 4285492837);
  }
  setAdminState(e, r, t) {
    ((t.findChildByName("icon_admin_off").visible = e && r),
      (t.findChildByName("icon_admin_over").visible = e && !r));
  }
  doSearch(e) {
    if (this._data == null || this._re407f68feaa7c1 == null) return;
    let r = _ia411d8d8194a3a();
    this.var_4191 > r - a.REQUEST_PAGE_RATELIMIT ||
      ((this.var_2939 = e),
      (this.var_4191 = r),
      this.var_754?.stop(),
      this.var_754?.reset(),
      this.setSearchingIcon(!0),
      this.var_41?.send(
        new class_2804(
          this._data.groupId,
          e,
          this._re407f68feaa7c1.getText(),
          this.getTypeDropMenu()?.selection ?? 0,
        ),
      ));
  }
  _r64bdd0733bd2a7() {
    return (
      this._data != null &&
      this._data._r4462e1d7892a93 !== this._r879661a117022a(this._data._r4462e1d7892a93 - 1)
    );
  }
  hasNextPage() {
    return (
      this._data != null &&
      this._data._r4462e1d7892a93 !== this._r879661a117022a(this._data._r4462e1d7892a93 + 1)
    );
  }
  _r879661a117022a(e) {
    if (this._data == null) return 0;
    let r = Math.ceil(this._data.totalEntries / this._data.var_4080);
    return Math.max(0, Math.min(e, r - 1));
  }
  populateSearchTypes() {
    if (this._data == null) return;
    let e = ["${group.members.search.all}", "${group.members.search.admins}"];
    this._data._r7339cb7606ad34 &&
      (e.push("${group.members.search.pending}"),
      this.var_41?.getBoolean("group.blocking.enabled") &&
        e.push("${group.members.search.blocked}"));
    let r = this.getTypeDropMenu();
    r != null &&
      ((r.procedure = null),
      r.populate(e),
      (r.selection = this._data._r7339cb7606ad34
        ? this._data.var_941
        : Math.min(this._data.var_941, 1)),
      (r.procedure = this.onTypeDropmenu));
  }
  _r822e7d6c1b9742() {
    let e = this._re407f68feaa7c1?.input;
    e == null ||
      this._data == null ||
      this._re407f68feaa7c1 == null ||
      ((e.procedure = null),
      this._re407f68feaa7c1.getText() !== this._data.var_878 &&
        this._re407f68feaa7c1.setText(this._data.var_878),
      (e.procedure = this._rd4a4e1a4acd958),
      this.var_754?.stop(),
      this.setSearchingIcon(!1));
  }
  getTypeDropMenu() {
    return this._window?.findChildByName("type_drop_menu");
  }
  get pageTextStart() {
    return this._window?.findChildByName("pagina_text_start");
  }
  get pageNumberInput() {
    return this._window?.findChildByName("pagina_number_input");
  }
  get pageTextEnd() {
    return this._window?.findChildByName("pagina_text_end");
  }
  _rd4b8b2d81b9781 = n((e) => {
    (e.related != null && e.related.tags.indexOf("close") !== -1) || this._r224fef3d020336();
  }, "_rd4b8b2d81b9781");
  _r4b53c98e335893 = n((e) => {
    e.keyCode === 13 && this._r224fef3d020336();
  }, "_r4b53c98e335893");
  _r224fef3d020336() {
    if (this.pageNumberInput == null) return;
    let e = Number.parseInt(this.pageNumberInput.text, 10) || 0,
      r = this._r879661a117022a(e - 1) + 1;
    (r !== e && (this.pageNumberInput.text = `${r}`), this.doSearch(r - 1));
  }
  onClose = n((e, r) => {
    e.type === u.CLICK && this.close();
  }, "onClose");
  _r9a0483989c8f80 = n((e) => {
    let r = e.target;
    r?.parent != null && this.setRemoveState(!0, r.parent);
  }, "_r9a0483989c8f80");
  _r6fd0853db9441f = n((e) => {
    let r = e.target;
    r?.parent != null && this.setRemoveState(!1, r.parent);
  }, "_r6fd0853db9441f");
  _r019de7fe69d36a = n((e) => {
    let r = e.target;
    if (r == null || this._data == null) return;
    let t = this._data.getUser(r.id);
    t == null ||
      t.owner ||
      (t.member
        ? this.var_41?._rb02cf61da43355(r.id, this._data.groupId)
        : this.var_41?.send(new _i7c06f8e9d30b13(this._data.groupId, t.userId)));
  }, "_r019de7fe69d36a");
  _r98c39ebe237e49 = n((e) => {
    let r = e.target;
    if (r == null || this._data == null) return;
    let t = this._data.getUser(r.id);
    t != null && !t.owner && t.member && this.var_41?._re96e4140c9ed6d(r.id, this._data.groupId);
  }, "_r98c39ebe237e49");
  _r50ab495fd68a85 = n((e) => {
    let r = e.target,
      t = r != null ? this._data?.getUser(r.id) : null;
    r == null ||
      t == null ||
      t.owner ||
      r.parent == null ||
      (this._r92bedb14b7b492(!0, r.parent), this.setAdminState(t.member, !t.admin, r.parent));
  }, "_r50ab495fd68a85");
  _r7073825c69397d = n((e) => {
    let r = e.target,
      t = r != null ? this._data?.getUser(r.id) : null;
    r?.parent != null &&
      (this._r92bedb14b7b492(!1, r.parent), t != null && this.setAdminState(t.member, t.admin, r.parent));
  }, "_r7073825c69397d");
  _r9a81d375425a1f = n((e) => {
    let r = e.target,
      t = r != null ? this._data?.getUser(r.id) : null;
    t == null ||
      t.owner ||
      this._data == null ||
      (t.blocked
        ? this.var_41?.send(new _i8e8810e8ce9a4c(this._data.groupId, t.userId))
        : t.admin
          ? this.var_41?.send(new _ifa4b75e22ed5b9(this._data.groupId, t.userId))
          : t.member
            ? this.var_41?.send(new _id34f337efc6435(this._data.groupId, t.userId))
            : this.var_41?.send(new _i2f1a3ef69779ad(this._data.groupId, t.userId)));
  }, "_r9a81d375425a1f");
  _rd3faecd24fd0f8 = n((e, r) => {
    e.type === u.CLICK && this.var_41?.send(new class_2134(r.id));
  }, "_rd3faecd24fd0f8");
  _rd4a4e1a4acd958 = n((e, r) => {
    e.type === y.WINDOW_EVENT_CHANGE &&
      (this.var_754?.reset(), this.var_754?.start(), this.setSearchingIcon(!0));
  }, "_rd4a4e1a4acd958");
  onTypeDropmenu = n((e, r) => {
    e.type === y.const_238 && this.doSearch(0);
  }, "onTypeDropmenu");
  _rb5acbb6ca3c0ea = n((e, r) => {
    e.type === u.CLICK && this._data != null && this.var_41?.send(new _ib71115acb7b3bb(this._data.groupId));
  }, "_rb5acbb6ca3c0ea");
  onSearchTimer = n((e) => {
    this._window?.visible && this.doSearch(0);
  }, "onSearchTimer");
  _ra9cb80818d8b9c = n((e, r) => {
    e.type === u.CLICK &&
      this._data != null &&
      this.doSearch(this._r879661a117022a(this._data._r4462e1d7892a93 + 1));
  }, "_ra9cb80818d8b9c");
  _rb5cc4e076e4b3a = n((e, r) => {
    e.type === u.CLICK &&
      this._data != null &&
      this.doSearch(this._r879661a117022a(this._data._r4462e1d7892a93 - 1));
  }, "_rb5cc4e076e4b3a");
}

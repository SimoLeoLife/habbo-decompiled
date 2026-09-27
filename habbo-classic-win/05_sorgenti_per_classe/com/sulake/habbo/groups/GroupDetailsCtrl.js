// Estratto da HabboAirLauncher.deobf.js, riga 224681.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/GroupDetailsCtrl.as
// Nome offuscato: _id79e4c2015f2c4

class {
  static {
    n(this, "GroupDetailsCtrl");
  }
  var_41;
  _window = null;
  _selectedGroup = null;
  constructor(e, r) {
    this.var_41 = e;
  }
  dispose() {
    ((this.var_41 = null),
      (this._selectedGroup = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  onGroupDetails(e, r) {
    if (
      ((this._selectedGroup = r),
      this.prepareWindow(e),
      this._r6168931c2a1a85(e),
      this._window == null || this.var_41 == null)
    )
      return;
    let t = this._window.findChildByName("group_decorate_icon_region"),
      i = this._window.findChildByName("group_name");
    (i != null && ((i.caption = r.groupName), t != null && (i.x = r.var_5042 ? t.x + t.width : t.x)),
      t != null && (t.visible = r.var_5042));
    let s = this._window.findChildByName("group_description"),
      o = this._window.findChildByName("group_description_scrollbar"),
      d = this._window.findChildByName("group_description_item_list");
    s != null &&
      ((s.caption = r.description),
      (s.height = s.textHeight + 5),
      o != null && d != null && (o.visible = s.height > d.height));
    let c = this._selectedGroup.var_4496,
      f = this._window.findChildByName("show_forum_link_region"),
      l = this._window.findChildByName("show_forum_link");
    (f != null &&
      ((f.visible = c), c && this.setProc("show_forum_link_region", this._r77aca1b351c968)),
      l != null && (l.visible = c),
      this.var_41.windowManager.registerLocalizationParameter("group.created", "date", `${r.creationDate}`),
      this.var_41.windowManager.registerLocalizationParameter(
        "group.created",
        "owner",
        `${r.ownerName}`,
      ));
    let b = this._window.findChildByName("created_txt");
    (b != null && (b.caption = this.var_41.localization.getLocalization("group.created")),
      this.var_41.windowManager.registerLocalizationParameter(
        "group.membercount",
        "totalMembers",
        `${r.totalMembers}`,
      ));
    let _ = this._window.findChildByName("members_txt");
    _ != null && (_.caption = this.var_41.localization.getLocalization("group.membercount"));
    let h = this._window.findChildByName("group_room_link_region");
    (h != null && (h.visible = r.roomId > -1),
      this.var_41.windowManager.registerLocalizationParameter("group.linktobase", "room_name", r.roomName));
    let p = this._window.findChildByName("group_room_link");
    p != null && (p.caption = this.var_41.localization.getLocalization("group.linktobase"));
    let m = this._window.findChildByName("group_logo")?.widget;
    m != null &&
      ((m.badgeId = this._selectedGroup._rc9fc89e7eb27a7), (m.groupId = this._selectedGroup.groupId));
    let v = this._window.findChildByName("join_button");
    v != null && ((v.visible = r.joiningAllowed), v.enable());
    let w = this._window.findChildByName("request_membership_button");
    w != null && (w.visible = r._rfe67451f34d46b);
    let I = this._window.findChildByName("leave_button");
    I != null && (I.visible = r._rac4ed10fd6c363);
    let C = this._window.findChildByName("membership_pending_txt");
    C != null && (C.visible = r.status === A7.name_10);
    let W = !this._selectedGroup.var_4111 && r.status === A7._r622628c9f01b9f,
      R = this._window.findChildByName("youaremember_txt");
    R != null && (R.visible = W);
    let T = this._window.findChildByName("youaremember_icon");
    T != null && (T.visible = W);
    let S = this._window.findChildByName("pending_members_region");
    if (
      S != null &&
      ((S.visible = this._selectedGroup.var_5196 > 0), this._selectedGroup.var_5196 > 0)
    ) {
      this.var_41.windowManager.registerLocalizationParameter(
        "group.pendingmembercount",
        "amount",
        `${r.var_5196}`,
      );
      let pe = this._window.findChildByName("pending_members_txt");
      pe != null &&
        (pe.caption = this.var_41.localization.getLocalization("group.pendingmembercount"));
    }
    let z = S?.y ?? 0,
      K = S?.visible ?? !1,
      $ = this._window.findChildByName("manage_guild_region");
    $ != null &&
      (($.visible = this._selectedGroup.isOwner && this._selectedGroup.var_4111),
      ($.y = K ? z + 16 : z));
    let Y = this._window.findChildByName("delete_guild_region");
    if (Y != null) {
      let pe =
        this._selectedGroup.var_4111 &&
        this.var_41.groupDeletionEnabled &&
        (this._selectedGroup.isOwner ||
          (this.var_41.sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1));
      ((Y.visible = pe), (Y.y = ($?.visible ?? !1) ? $.y + 16 : z));
    }
    let oe = this._window.findChildByName("you_are_owner_region");
    oe != null &&
      (oe.visible = this._selectedGroup.var_4111 && this._selectedGroup.isOwner);
    let be = this._window.findChildByName("you_are_admin_region");
    be != null &&
      (be.visible =
        this._selectedGroup.var_4111 &&
        this._selectedGroup.isAdmin &&
        !this._selectedGroup.isOwner);
    let ye = this._window.findChildByName("you_are_member_region");
    (ye != null &&
      (ye.visible =
        this._selectedGroup.var_4111 &&
        this._selectedGroup.status === A7._r622628c9f01b9f &&
        !(this._selectedGroup.isAdmin || this._selectedGroup.isOwner)),
      (this.getGroupTypeRegion(0).visible = !1),
      (this.getGroupTypeRegion(1).visible = !1),
      (this.getGroupTypeRegion(2).visible = !1));
    let ir = this.getGroupTypeRegion(r.type);
    ir != null && (ir.visible = !0);
  }
  prepareWindow(e) {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("group")),
      this._window != null &&
        (this.setProc("group_room_link_region", this.onRoomLink),
        this.setProc("manage_guild_region", this.onManageGuild),
        this.setProc("delete_guild_region", this.onDeleteGuild),
        this.setProc("members_region", this.onMembers),
        this.setProc("pending_members_region", this.onPendingMembers),
        this.setProc("show_groups_link_region", this.onShowGroups),
        this.setProc("buy_furni_link_region", this.onBuyFurni),
        (this._window.findChildByName("leave_button").procedure = this._r37ebb924126c36),
        (this._window.findChildByName("join_button").procedure = this.onJoin),
        (this._window.findChildByName("request_membership_button").procedure =
          this.onJoin)));
  }
  _r6168931c2a1a85(e) {
    this._window != null &&
      e.getChildIndex(this._window) === -1 &&
      e.addChild(this._window);
  }
  getGroupTypeRegion(e) {
    return this._window?.findChildByName(`grouptype_region_${e}`) ?? null;
  }
  setProc(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && ((t.mouseThreshold = 0), (t.procedure = r));
  }
  _r37ebb924126c36 = n((e, r) => {
    e.type !== u.CLICK ||
      this._selectedGroup == null ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "leaveGroup"),
      this.var_41._rb02cf61da43355(
        this.var_41.avatarId,
        this._selectedGroup.groupId,
      ));
  }, "_r37ebb924126c36");
  onJoin = n((e, r) => {
    e.type !== u.CLICK ||
      this._selectedGroup == null ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "joinGroup"),
      this._window?.findChildByName("join_button")?.disable(),
      this.var_41.send(new _ie95634b0bf54c2(this._selectedGroup.groupId)),
      this.var_41.send(new class_2154("Groups", `${this._selectedGroup.groupId}`, "join")));
  }, "onJoin");
  onRoomLink = n((e, r) => {
    e.type !== u.CLICK ||
      this._selectedGroup == null ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "groupBaseRoom"),
      this.var_41.navigator?._r32d169e0ccf735(this._selectedGroup.roomId),
      this.var_41.send(new class_2154("Groups", `${this._selectedGroup.groupId}`, "base")));
  }, "onRoomLink");
  _r77aca1b351c968 = n((e, r) => {
    e.type === u.CLICK &&
      this._selectedGroup != null &&
      this.var_41?.openGroupForum(this._selectedGroup.groupId);
  }, "_r77aca1b351c968");
  onManageGuild = n((e, r) => {
    e.type !== u.CLICK ||
      this._selectedGroup == null ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "groupManage"),
      this.var_41.send(new _i642b73d3185b8f(this._selectedGroup.groupId)));
  }, "onManageGuild");
  onDeleteGuild = n((e, r) => {
    e.type !== u.CLICK ||
      this.var_41 == null ||
      this.var_41.windowManager.confirm(
        "${group.deleteconfirm.title}",
        "${group.deleteconfirm.desc}",
        0,
        this._r331145cebd4921,
      );
  }, "onDeleteGuild");
  _r331145cebd4921 = n((e, r) => {
    (e.dispose(),
      r.type === y.const_1300 &&
        this._selectedGroup != null &&
        (this.var_41?.trackGoogle("groupDetails", "groupDelete"),
        this.var_41?.send(new _i01d970b69e56a4(this._selectedGroup.groupId))));
  }, "_r331145cebd4921");
  onMembers = n((e, r) => {
    e.type !== u.CLICK ||
      this._selectedGroup == null ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "groupMembers"),
      this.var_41._rea8338004ec94f?.onMembersClick(
        this._selectedGroup.groupId,
        class_2804.const_243,
      ));
  }, "onMembers");
  onPendingMembers = n((e, r) => {
    e.type !== u.CLICK ||
      this._selectedGroup == null ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "groupPendingMembers"),
      this.var_41._rea8338004ec94f?.onMembersClick(
        this._selectedGroup.groupId,
        class_2804.const_1366,
      ));
  }, "onPendingMembers");
  onShowGroups = n((e, r) => {
    e.type !== u.CLICK ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "hottestGroups"),
      this.var_41.navigator?.performGuildBaseSearch());
  }, "onShowGroups");
  onBuyFurni = n((e, r) => {
    e.type !== u.CLICK ||
      this.var_41 == null ||
      (this.var_41.trackGoogle("groupDetails", "groupFurni"),
      this.var_41.openCatalog(CatalogPageName.CATALOG_PAGE_GROUP_FURNITURE));
  }, "onBuyFurni");
  _r16d7d65ecad484 = n((e, r) => {
    e.dispose();
  }, "_r16d7d65ecad484");
}

// Estratto da HabboAirLauncher.deobf.js, riga 225596.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/GroupRoomInfoCtrl.as
// Nome offuscato: _ie3f9726fb16658

class a {
  static {
    n(this, "GroupRoomInfoCtrl");
  }
  static TOOLBAR_EXTENSION_ID = "room_group_info";
  var_41;
  _window = null;
  _expanded = !0;
  _group = null;
  var_1374 = 0;
  constructor(e) {
    this.var_41 = e;
  }
  dispose() {
    (this._r27a3da2c6d34e0() &&
      this.var_41.toolbar.extensionView._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID),
      (this.var_41 = null),
      this._window?.dispose(),
      (this._window = null));
  }
  get disposed() {
    return this.var_41 == null;
  }
  onRoomInfo(e) {
    this.var_41?.groupRoomInfoEnabled &&
      (e.habboGroupId > 0
        ? ((this.var_1374 = e.habboGroupId),
          this.var_41.send(new _i494540f04bf21d(e.habboGroupId, !1)))
        : ((this.var_1374 = 0), this.close()));
  }
  _r954fcb6b6be7bb(e) {
    (e === this._group?.groupId || e === this.var_1374) &&
      ((this.expectedGroupId = 0), this.close());
  }
  onGroupDetails(e) {
    this.var_41?.groupRoomInfoEnabled &&
      e.groupId === this.var_1374 &&
      ((this._expanded = !0), (this._group = e), this.refresh());
  }
  _rcf529a562e59a6(e) {
    return (
      this._window != null && this._group != null && e === this._group.groupId
    );
  }
  close() {
    this._window != null &&
      (this._r27a3da2c6d34e0() &&
        this.var_41.toolbar.extensionView._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID),
      (this._window.visible = !1),
      (this.var_1374 = 0),
      (this._group = null));
  }
  set expectedGroupId(e) {
    this.var_1374 = e;
  }
  refresh() {
    if (
      this._group == null ||
      !this._group.var_4111 ||
      (this.prepareWindow(), this._window == null)
    )
      return;
    ((this._window.findChildByName("bg_expanded").visible = this._expanded),
      (this._window.findChildByName("bg_contracted").visible = !this._expanded),
      (this._window.findChildByName("group_name_txt").visible = this._expanded));
    let e = this._window.findChildByName("join_button");
    e != null && ((e.visible = this._expanded && this._group.joiningAllowed), e.enable());
    let r = this._window.findChildByName("request_membership_button");
    r != null && (r.visible = this._expanded && this._group._rfe67451f34d46b);
    let t = this._window.findChildByName("manage_button");
    (t != null && (t.visible = this._expanded && this._group.isOwner),
      (this._window.findChildByName("group_logo").visible = this._expanded),
      (this._window.findChildByName("group_name_txt").caption = this._group.groupName),
      (this._window.findChildByName("info_region").visible = this._expanded));
    let i = this._window.findChildByName("group_logo")?.widget;
    (i != null &&
      ((i.badgeId = this._group._rc9fc89e7eb27a7), (i.groupId = this._group.groupId)),
      (this._window.x = 0),
      (this._window.y = 0),
      (this._window.height = this._expanded
        ? this._window.findChildByName("bg_expanded").height
        : this._window.findChildByName("bg_contracted").height),
      (this._window.visible = !0),
      this._r27a3da2c6d34e0() &&
        this.var_41.toolbar.extensionView._ra96f07968c4ed0(
          a.TOOLBAR_EXTENSION_ID,
          this._window,
          -1,
          ["next_quest_timer", "quest_tracker", "event_info_window"],
        ));
  }
  prepareWindow() {
    this._window == null &&
      ((this._window = this.var_41?.getXmlWindow("group_room_info")),
      this._window != null &&
        ((this._window.findChildByName("join_button").procedure = this.onJoin),
        (this._window.findChildByName("request_membership_button").procedure =
          this.onJoin),
        (this._window.findChildByName("manage_button").procedure = this._rbdac8eaf84e027),
        (this._window.findChildByName("title_region").procedure = this._raebec47e266df7),
        (this._window.findChildByName("info_region").procedure = this.onInfoClick)));
  }
  _raebec47e266df7 = n((e, r) => {
    e.type === u.CLICK &&
      ((this._expanded = !this._expanded), this.refresh(), this._rf9e2d3b92b4fa5());
  }, "_raebec47e266df7");
  onInfoClick = n((e, r) => {
    e.type === u.CLICK &&
      this._group != null &&
      this.var_41 != null &&
      (this.var_41.trackGoogle("groupRoomInfo", "groupInfo"),
      this.var_41.send(new _i494540f04bf21d(this._group.groupId, !0)),
      this._rf9e2d3b92b4fa5());
  }, "onInfoClick");
  _rbdac8eaf84e027 = n((e, r) => {
    e.type === u.CLICK &&
      this._group != null &&
      this.var_41 != null &&
      (this.var_41.trackGoogle("groupRoomInfo", "manageGroup"),
      this.var_41.send(new _i642b73d3185b8f(this._group.groupId)),
      this._rf9e2d3b92b4fa5());
  }, "_rbdac8eaf84e027");
  onJoin = n((e, r) => {
    e.type === u.CLICK &&
      this._group != null &&
      this.var_41 != null &&
      (this.var_41.trackGoogle("groupRoomInfo", "joinGroup"),
      this._window?.findChildByName("join_button")?.disable(),
      this.var_41.send(new _ie95634b0bf54c2(this._group.groupId)),
      this.var_41.send(new class_2154("Groups", `${this._group.groupId}`, "join")),
      this._rf9e2d3b92b4fa5());
  }, "onJoin");
  _r27a3da2c6d34e0() {
    return (
      this.var_41?.toolbar != null &&
      this.var_41.toolbar.extensionView != null &&
      this.var_41.toolbarAttachEnabled
    );
  }
  _rf9e2d3b92b4fa5() {
    this.var_41?.toolbar?.events?.dispatchEvent?.(new HabboToolbarEvent(HabboToolbarEvent.GROUP_ROOM_INFO_CLICK));
  }
}

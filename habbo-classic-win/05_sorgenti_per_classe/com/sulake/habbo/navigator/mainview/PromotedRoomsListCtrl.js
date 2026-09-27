// Extracted from HabboAirLauncher.deobf.js, line 255385.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/PromotedRoomsListCtrl.as
// Obfuscated name: _icbb1ceacd6378d

class a {
  constructor(e) {
    this._navigator = e;
    ((this._re08bf90c0b118d = new H1(this._navigator)),
      (this.var_1554 = new PromotedRoomsGuestRoomListCtrl(this._navigator)));
  }
  static {
    n(this, "PromotedRoomsListCtrl");
  }
  static CATEGORY_SPACING = 5;
  _re08bf90c0b118d;
  var_1554;
  dispose() {
    ((this._navigator = null), this._re08bf90c0b118d.dispose(), this.var_1554.dispose());
  }
  get disposed() {
    return this._navigator == null;
  }
  refresh(e, r) {
    Fr.hideChildren(e);
    let t = 0;
    for (let i = 0; i < r.length; i++) {
      let s = this.getCategoryContainer(e, i);
      (s == null && ((s = this.createEntry(i)), (s.id = i), e.addChild(s)),
        this.refreshEntry(s, r[i]),
        (s.y = t),
        (t += s.height + a.CATEGORY_SPACING),
        (s.visible = !0));
    }
    e.height = Fr.getLowestPoint(e) > 0 ? Fr.getLowestPoint(e) + 5 : 0;
  }
  createEntry(e) {
    let r = this._navigator?.getXmlWindow("grs_promoted_room_category");
    if (r == null) throw new Error("Failed to build promoted room category");
    return (
      this.setProcedureAndId(r, e, "enter_room_button", this.onEnterRoomButton),
      this.setProcedureAndId(r, e, "leader_region", this.onLeaderRegion),
      this.setProcedureAndId(r, e, "toggle_open_region", this._rf51b2c257ccf23),
      this._navigator?.refreshButton(r, "navi_room_icon", !0, null, 0),
      r
    );
  }
  refreshEntry(e, r) {
    if (this._navigator == null || r._r02b32d8b1e7120 == null) return;
    let t = this._navigator.getText(`promotedroomcategory.${r.code}`);
    ((e.findChildByName("category_name_txt").caption = t),
      (e.findChildByName("category_header").width = e.findChildByName("category_name_txt").width + 13),
      this._navigator._r43eae9731f5b27("navigator.promotedrooms.hidetopten", "category", t),
      this._navigator._r43eae9731f5b27("navigator.promotedrooms.viewtopten", "category", t),
      (e.findChildByName("open_txt").caption = this._navigator.getText(
        "navigator.promotedrooms.viewtopten",
      )),
      (e.findChildByName("close_txt").caption = this._navigator.getText(
        "navigator.promotedrooms.hidetopten",
      )),
      (e.findChildByName("room_name_txt").caption = r._r02b32d8b1e7120.roomName));
    let i = e.findChildByName("leader_name_txt");
    ((i.caption = r._r02b32d8b1e7120._r6b883803c75d7f ? r._r02b32d8b1e7120.ownerName : ""),
      (i.x = this.getLocationAfter(e, "leader_name_caption_txt", 0)),
      (e.findChildByName("arrow_down_icon").visible = r.open),
      (e.findChildByName("arrow_right_icon").visible = !r.open),
      (e.findChildByName("close_txt").visible = r.open),
      (e.findChildByName("open_txt").visible = !r.open),
      (e.findChildByName("arrow_down_icon").x = this.getLocationAfter(e, "close_txt")),
      (e.findChildByName("arrow_right_icon").x = this.getLocationAfter(e, "open_txt")),
      this._re08bf90c0b118d.refreshUserCount(
        r._r02b32d8b1e7120._ra66356507ed6a4,
        e.findChildByName("enter_room_button"),
        r._r02b32d8b1e7120.userCount,
        "${navigator.usercounttooltip.users}",
        222,
        35,
      ),
      this.refreshAvatarImage(e, r));
    let s = e.findChildByName("item_list");
    (s != null &&
      ((s.visible = r.open),
      r.open &&
        ((s.height = r.rooms.length * 17),
        (this.var_1554.content = e),
        (this.var_1554.category = r),
        this.var_1554.refresh())),
      (e.height = r.open ? Fr.getLowestPoint(e) + 3 : 90));
  }
  getCategoryContainer(e, r) {
    return e.getChildByID(r);
  }
  getLocationAfter(e, r, t = 3) {
    let i = e.findChildByName(r);
    return (i?.x ?? 0) + (i?.width ?? 0) + t;
  }
  setProcedureAndId(e, r, t, i) {
    let s = e.findChildByName(t);
    s != null && ((s.procedure = i), (s.id = r));
  }
  onEnterRoomButton = n((e, r) => {
    if (e.type === u.CLICK) {
      let t = this.findCategory(r);
      t?._r02b32d8b1e7120 != null &&
        (this._navigator?.data && (this._navigator.data._r82660da00997c0 = new RoomSessionTags(t.code, "1")),
        this._navigator?._r32d169e0ccf735(t._r02b32d8b1e7120.flatId),
        this._navigator?._r4d7124da99408e());
    }
  }, "onEnterRoomButton");
  onLeaderRegion = n((e, r) => {
    if (e.type === u.CLICK) {
      let t = this.findCategory(r);
      t?._r02b32d8b1e7120 != null &&
        (this._navigator?.trackGoogle("extendedProfile", "navigator_promotedRoom"),
        this._navigator?.send(new class_2134(t._r02b32d8b1e7120.ownerId)));
    }
  }, "onLeaderRegion");
  _rf51b2c257ccf23 = n((e, r) => {
    if (e.type === u.CLICK && this._navigator?.data._r814554d59f42ae != null) {
      for (let i = 0; i < this._navigator.data._r814554d59f42ae.entries.length; i++) {
        let s = this._navigator.data._r814554d59f42ae.entries[i];
        r.id !== i && (s.open = !1);
      }
      (this.findCategory(r)?.toggleOpen(), this._navigator._r970f774dfe2577?.refresh());
    }
  }, "_rf51b2c257ccf23");
  findCategory(e) {
    return this._navigator?.data._r814554d59f42ae?.entries[e.id] ?? null;
  }
  refreshAvatarImage(e, r) {
    let i = e.findChildByName("avatar_image_widget")?.widget;
    i != null && (i.figure = r.leaderFigure);
  }
}

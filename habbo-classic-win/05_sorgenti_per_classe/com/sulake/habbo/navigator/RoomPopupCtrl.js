// Estratto da HabboAirLauncher.deobf.js, riga 254886.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/RoomPopupCtrl.as
// Nome offuscato: _ie398ce0f2a1fc1

class extends PopupCtrl {
  constructor(r, t, i) {
    super(r, t, i, "grs_guest_room_details_long");
    this.allCategories = r;
    ((this._rd65c8b4e77f024 = new TagRenderer(r, this._rb77d58bff0a93a.bind(this))),
      (this._r56b82e71e6658a = new mQ(r)));
  }
  static {
    n(this, "RoomPopupCtrl");
  }
  _details = null;
  var_218 = null;
  _rd65c8b4e77f024;
  _r56b82e71e6658a;
  set room(r) {
    this.var_218 = r;
  }
  refreshContent(r) {
    if (
      this.var_218 == null ||
      (this._details == null && (this._details = r.findChildByName("details_container")),
      this._details == null)
    )
      return;
    ((this._details.visible = !0),
      (this._rd65c8b4e77f024.useHashTags = !0),
      Fr.hideChildren(this._details),
      this._r56b82e71e6658a.refresh(this._details, this.var_218),
      this.refreshRoomName(this._details, this.var_218),
      this.refreshOwnerName(),
      this.refreshTextWithCaption(
        "roomctg",
        this._details,
        this.getRoomCtg(this.var_218.categoryId),
      ),
      this.refreshRoomDesc(this._details, this.var_218),
      this.refreshExtraCont(),
      this.refreshEventInfo(this.var_218),
      this.refreshRoomSettings(),
      this.refreshInfo(
        this._details,
        "trading_allowed",
        this.var_218.tradeMode === Kl.FREE_TRADING,
      ),
      this.refreshInfo(
        this._details,
        "doormode_doorbell",
        this.var_218._rf742cf771d167a === 1,
      ),
      this.refreshInfo(
        this._details,
        "doormode_password",
        this.var_218._rf742cf771d167a === 2,
      ),
      this.refreshInfo(
        this._details,
        "doormode_invisible",
        this.var_218._rf742cf771d167a === 3,
      ),
      Fr.moveChildrenToColumn(
        this._details,
        [
          "guild_info",
          "roomname",
          "roomctg_cont",
          "roomowner_cont",
          "roomdesc",
          "extra_cont",
          "doormode_doorbell",
          "doormode_password",
          "doormode_invisible",
          "trading_allowed",
          "eventinfo_cont",
          "roomsettings_cont",
        ],
        0,
        0,
      ));
    let t = this._details.findChildByName("guild_info");
    (t != null && (t.x = 2), (this._details.height = Fr.getLowestPoint(this._details)));
  }
  refreshOwnerName() {
    if (this._details == null || this.var_218 == null) return;
    let r = this._details.findChildByName("roomowner"),
      t = this._details.findChildByName("roomowner_cont");
    r == null ||
      t == null ||
      ((t.procedure = this.onOwnerName),
      (r.caption = this.var_218._r6b883803c75d7f ? this.var_218.ownerName : ""),
      (t.visible =
        this.var_218._r6b883803c75d7f &&
        this.var_218.ownerName !== "" &&
        this.var_218.ownerName !== "-"),
      Io.setUserInfoState(!1, t),
      Fr.layoutChildrenInArea(t, 1e3, 10, 2));
  }
  refreshRoomSettings() {
    if (this._details == null || this.var_218 == null) return;
    let r = this._details.findChildByName("roomsettings_cont");
    r != null &&
      ((r.procedure = this.onRoomSettings),
      (r.visible = this.allCategories.sessionData.userId === this.var_218.ownerId),
      Fr.layoutChildrenInArea(r, 1e3, 10, 2));
  }
  refreshExtraCont() {
    if (this._details == null || this.var_218 == null) return;
    let r = this._details.findChildByName("extra_cont");
    if (r != null) {
      if (
        (Fr.hideChildren(r),
        this._rd65c8b4e77f024.refreshTags(r, this.var_218.tags),
        this.var_218.score > 0)
      ) {
        this.refreshTextWithCaption("rating", r, `${this.var_218.score}`);
        let t = r.findChildByName("rating_cont");
        t != null && (t.visible = !0);
      }
      Fr.hasVisibleChildren(r) &&
        (Fr.moveChildrenToColumn(r, ["tags", "startedat_cont", "rating_cont"], 0, 3),
        (r.height = Fr.getLowestPoint(r) + 4),
        (r.visible = !0));
    }
  }
  refreshEventInfo(r) {
    if (this._details == null || r.roomAdName == null || r.roomAdName.length === 0)
      return;
    let t = this._details.findChildByName("eventinfo_cont");
    if (t == null) return;
    Fr.hideChildren(t);
    let i = t.findChildByName("eventinfo_name"),
      s = t.findChildByName("eventinfo_desc"),
      o = t.findChildByName("eventinfo_expirationtime"),
      d = t.findChildByName("eventinfo.caption"),
      c = t.findChildByName("eventinfo_child_container");
    i == null ||
      s == null ||
      o == null ||
      d == null ||
      c == null ||
      ((i.caption = r.roomAdName),
      (s.caption = r.roomAdDescription),
      (o.caption = ra.getFriendlyTime(this.allCategories.localization, r._r92fc4be8b2592f * 60)),
      (s.height = s.textHeight + 10),
      (o.y = s.y + s.height),
      (t.height = i.height + s.height + o.height + 20),
      (c.x = d.textWidth + 5),
      (c.height = Fr.getLowestPoint(c) + 5),
      (t.visible = !0),
      (d.visible = !0),
      (c.visible = !0));
  }
  refreshRoomName(r, t) {
    let i = r.getChildByName("roomname");
    i != null && ((i.visible = !0), (i.text = t.roomName), (i.height = i.textHeight + 3));
  }
  refreshRoomDesc(r, t) {
    if (t.description === "") return;
    let i = r.getChildByName("roomdesc");
    i != null &&
      ((i.text = t.description),
      (i.height = i.textHeight + 10),
      (i.y = Fr.getLowestPoint(r)),
      (i.visible = !0));
  }
  refreshTextWithCaption(r, t, i) {
    let s = t.findChildByName(`${r}_cont`);
    if (s == null) return;
    let o = s.getChildByName(r),
      d = s.getChildByName(`${r}.caption`);
    o == null ||
      d == null ||
      ((s.visible = !0), (o.text = i), Fr.moveChildrenToRow(s, [`${r}.caption`, r], d.x, 0, 2));
  }
  refreshInfo(r, t, i) {
    if (!i) return;
    let s = r.findChildByName(t);
    s != null && ((s.visible = !0), this.navigator?.refreshButton(s, t, !0, null, 0));
  }
  getRoomCtg(r) {
    for (let t of this.allCategories.data._r0e0ffd0291afb3) if (t.nodeId === r) return t.nodeName;
    return "";
  }
  onOwnerName = n((...r) => {
    if (this.var_218 == null) return;
    let t = r[0],
      i = r[1];
    (Io.onEntry(t, i),
      t.type === u.CLICK &&
        (this.allCategories.trackGoogle("extendedProfile", "navigator_roomPopup"),
        this.allCategories.send(new class_2134(this.var_218.ownerId)),
        this._rb77d58bff0a93a()));
  }, "onOwnerName");
  onRoomSettings = n((...r) => {
    if (this.var_218 == null) return;
    r[0].type === u.CLICK &&
      (this.allCategories.trackGoogle("roomInfo", "editRoomSettings"),
      this.allCategories.roomSettingsCtrl?._rc7de4548128463(
        this.var_218.flatId,
        this.var_218.habboGroupId,
      ),
      this._rb77d58bff0a93a());
  }, "onRoomSettings");
}

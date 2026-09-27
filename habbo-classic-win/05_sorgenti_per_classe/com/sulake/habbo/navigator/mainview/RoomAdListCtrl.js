// Estratto da HabboAirLauncher.deobf.js, riga 255615.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/RoomAdListCtrl.as
// Nome offuscato: _i4f1eef10abef39

class extends GuestRoomListCtrl {
  static {
    n(this, "RoomAdListCtrl");
  }
  constructor(e, r, t) {
    super(e, r, t);
  }
  getListEntry(e) {
    let r = this.navigator?.getXmlWindow("grs_room_ads_details_phase_one");
    if (r == null) throw new Error("Failed to build room ad entry");
    return (
      (r.background = !0),
      (r.id = e),
      r.addEventListener(u.MOVE, this._r6fd72d02a394ac),
      r.addEventListener(u.OVER, this._r9f6a7f10f24ab6),
      r.addEventListener(u.OUT, this._rfa0e00c9b487e8),
      r.addEventListener(u.CLICK, this._r18e03103eac9f9),
      r.setParamFlag(class_2094._r26338c8d88c4e5, !0),
      r.setParamFlag(class_2094._r5e6031ce4e2cb8, !0),
      (r.color = this.getBgColor(e)),
      r
    );
  }
  refreshEntryDetails(e, r) {
    e.visible = !0;
    let t = e.getChildByName("adname");
    (t != null && ((t.visible = !0), Fr.cutTextToWidth(t, r.roomAdName, e.width)),
      this.navigator?.refreshButton(
        e,
        "doormode_doorbell_small",
        r._rf742cf771d167a === class_3308.const_95,
        null,
        0,
      ),
      this.navigator?.refreshButton(
        e,
        "doormode_password_small",
        r._rf742cf771d167a === class_3308.const_133,
        null,
        0,
      ),
      this.navigator?.refreshButton(
        e,
        "doormode_invisible_small",
        r._rf742cf771d167a === class_3308.const_139,
        null,
        0,
      ),
      this._re08bf90c0b118d.refreshUserCount(
        r._ra66356507ed6a4,
        e,
        r.userCount,
        "${navigator.usercounttooltip.users}",
        308,
        2,
      ));
  }
  onMouseClick(e) {
    let r = e.target,
      t = r == null ? null : this.getRooms()[r.id];
    (t != null && this.navigator?.send(new _i3f015a31ca62f9(t.flatId, t.roomAdName, t._r92fc4be8b2592f)),
      super.onMouseClick(e));
  }
}

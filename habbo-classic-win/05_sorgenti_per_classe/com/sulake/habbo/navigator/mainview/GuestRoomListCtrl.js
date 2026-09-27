// Extracted from HabboAirLauncher.deobf.js, line 255089.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/GuestRoomListCtrl.as
// Obfuscated name: _i92a45a39ef83a6

class {
  constructor(e, r, t) {
    this._navigator = e;
    this.var_5359 = r;
    this._showRoomNumbers = t;
    ((this._rd85d2adb88b136 = new RoomPopupCtrl(this._navigator, 5, -5)),
      (this._re08bf90c0b118d = new H1(this._navigator)));
  }
  static {
    n(this, "GuestRoomListCtrl");
  }
  _content = null;
  var_122 = null;
  _rd85d2adb88b136;
  var_940 = null;
  _re08bf90c0b118d;
  _r6fd72d02a394ac = n((e) => {
    this._r063deefec1fad5(e);
  }, "_r6fd72d02a394ac");
  _r9f6a7f10f24ab6 = n((e) => {
    this._rad325cc53260a0(e);
  }, "_r9f6a7f10f24ab6");
  _rfa0e00c9b487e8 = n((e) => {
    this.onMousetOut(e);
  }, "_rfa0e00c9b487e8");
  _r18e03103eac9f9 = n((e) => {
    this.onMouseClick(e);
  }, "_r18e03103eac9f9");
  _r22981a9a6249ad = null;
  _r8047351a72d108 = 0;
  _rc1492510b6dacb = !1;
  dispose() {
    (this._rd85d2adb88b136.dispose(), this._re08bf90c0b118d.dispose(), (this._navigator = null));
  }
  set content(e) {
    ((this._content = e),
      (this.var_122 = this._content?.findChildByName("item_list")),
      (this.var_940 = this._content?.findChildByName("scroller")),
      e == null && this._rd85d2adb88b136._r0724dfa55a891d());
  }
  get content() {
    return this._content;
  }
  refresh() {
    if (this.var_122 == null || this._content == null) return;
    let e = this.getRooms(),
      r = this._r49eb3fa3ade17d();
    this.var_122.autoArrangeItems = !1;
    for (let i = 0; ; i++)
      if (i < e.length) this.refreshEntry(!0, i, e[i]);
      else if (this.refreshEntry(!1, i, null)) break;
    ((this.var_122.autoArrangeItems = !0),
      this.var_940 != null &&
        this._r49eb3fa3ade17d() !== r &&
        (this.var_940.var_46 = 0));
    let t = this._content.findChildByName("no_rooms_found");
    t != null && (t.visible = e.length < 1);
  }
  getRooms() {
    return this._navigator?.data?._rf09e8697962ff2?.rooms ?? [];
  }
  beforeEnterRoom(e) {}
  get _r5c36a22fb9f2c8() {
    return this._rd85d2adb88b136;
  }
  get navigator() {
    return this._navigator;
  }
  getListEntry(e) {
    let r = this._navigator?.getXmlWindow("grs_guest_room_details_phase_one");
    if (r == null) throw new Error("Failed to build guest room list entry");
    if (
      ((r.background = !0),
      (r.id = e),
      r.addEventListener(u.MOVE, this._r6fd72d02a394ac),
      r.addEventListener(u.OVER, this._r9f6a7f10f24ab6),
      r.addEventListener(u.OUT, this._rfa0e00c9b487e8),
      r.addEventListener(u.CLICK, this._r18e03103eac9f9),
      r.setParamFlag(class_2094._r26338c8d88c4e5, !0),
      r.setParamFlag(class_2094._r5e6031ce4e2cb8, !0),
      (r.color = this.getBgColor(e)),
      this._showRoomNumbers)
    ) {
      let i = r.findChildByName("roomname");
      i != null && ((i.x += 20), (i.width -= 20));
    }
    return r;
  }
  getBgColor(e) {
    return e % 2 !== 0 ? 4294967295 : 4292797682;
  }
  refreshEntryDetails(e, r) {
    ((e.visible = !0), Fr.hideChildren(e), this.refreshFavouriteIcon(e, r));
    let t =
      r._rf742cf771d167a === class_3308.const_95 ||
      r._rf742cf771d167a === class_3308.const_133 ||
      r._rf742cf771d167a === class_3308.const_139
        ? "group_base_icon"
        : "group_base_icon_no_doormode";
    if (
      (this._navigator?.refreshButton(e, t, r.habboGroupId > 0, null, 0, "group_base_icon"),
      this._navigator?.refreshButton(e, "home", this.isHome(r), null, 0),
      this._navigator?.refreshButton(
        e,
        "doormode_doorbell_small",
        r._rf742cf771d167a === class_3308.const_95,
        null,
        0,
      ),
      this._navigator?.refreshButton(
        e,
        "doormode_password_small",
        r._rf742cf771d167a === class_3308.const_133,
        null,
        0,
      ),
      this._navigator?.refreshButton(
        e,
        "doormode_invisible_small",
        r._rf742cf771d167a === class_3308.const_139,
        null,
        0,
      ),
      this._showRoomNumbers)
    ) {
      let i = e.findChildByName("room_number");
      i != null && ((i.visible = !0), (i.caption = `${e.id + 1}.`));
    }
    (this.refreshRoomName(e, r),
      this._re08bf90c0b118d.refreshUserCount(
        r._ra66356507ed6a4,
        e,
        r.userCount,
        "${navigator.usercounttooltip.users}",
        308,
        2,
      ),
      (e.name = `guestroom_${r.ownerName}_${r.roomName}`));
  }
  _r063deefec1fad5(e) {
    this._rf37f396a1d8114(e);
  }
  _rad325cc53260a0(e) {
    let r = e.target;
    if (r == null || (this._rd85d2adb88b136.visible && this._rc1492510b6dacb)) return;
    this.hilite(r);
    let t = this.tags(r.id);
    t != null && ((this._rd85d2adb88b136.room = t), this._rd85d2adb88b136.showPopup(r));
  }
  onMousetOut(e) {
    let r = e.target;
    r != null &&
      (Fr._r24831451da7216(r) ||
        ((r.color = this.getBgColor(r.id)), this._rd85d2adb88b136._r0724dfa55a891d()));
  }
  onMouseClick(e) {
    let r = e.target;
    if (r == null || this._navigator == null) return;
    let t = this.tags(r.id);
    if (t != null) {
      if (t.ownerName !== this._navigator.sessionData.userName) {
        if (t.habboGroupId !== 0) {
          this._navigator._r32d169e0ccf735(t.flatId);
          return;
        }
        let i = e,
          s = new E(i.stageX, i.stageY);
        switch (t._rf742cf771d167a) {
          case class_3308.const_133:
            this._navigator.passwordInput?.show(t, s);
            return;
          case class_3308.const_95:
            this._navigator.doorbell?.show(t, s);
            return;
        }
      }
      (this.beforeEnterRoom(r.id),
        this._navigator.goToRoom(t.flatId, !0, "", r.id),
        this._rd85d2adb88b136._rb77d58bff0a93a());
    }
  }
  _r49eb3fa3ade17d() {
    if (this.var_122 == null) return 0;
    let e = 0;
    for (let r = 0; r < this.var_122.numListItems; r++)
      this.var_122.getListItemAt(r)?.visible && e++;
    return e;
  }
  refreshEntry(e, r, t) {
    if (this.var_122 == null) return !0;
    let i = this.var_122.getListItemAt(r),
      s = !1;
    if (i == null) {
      if (!e) return !0;
      ((i = this.getListEntry(r)), this.var_122.addListItem(i), (s = !0));
    }
    return (
      (i.id = r),
      Fr.hideChildren(i),
      e && t != null
        ? (this.refreshEntryDetails(i, t), (i.visible = !0), (i.height = 17))
        : ((i.height = 0), (i.visible = !1)),
      s && ((i.width += this.var_5359), this.stretchNewEntryIfNeeded(i)),
      !1
    );
  }
  stretchNewEntryIfNeeded(e) {
    let r = this._content?.findChildByName("scroller");
    r == null || r.visible || (e.width += 22);
  }
  refreshRoomName(e, r) {
    let t = e.getChildByName("roomname");
    if (t == null) return;
    t.visible = !0;
    let i =
      e.findChildByName("home")?.visible ||
      e.findChildByName("favourite")?.visible ||
      e.findChildByName("make_favourite")?.visible;
    Fr.cutTextToWidth(t, r.roomName, i ? t.width - 20 : t.width);
  }
  tags(e) {
    return this.getRooms()[e] ?? null;
  }
  refreshFavouriteIcon(e, r) {
    let t = this._navigator?.data._rc263ba8eeb2e0b(r.flatId) ?? !1,
      i = this.isHome(r);
    (this.refreshRegion(e, "make_favourite", !t && !i, this.onAddFavouriteClick),
      this.refreshRegion(e, "favourite", t && !i, this.onRemoveFavouriteClick));
  }
  isHome(e) {
    return e.flatId === (this._navigator?.data._r3dfd89b26af6cd ?? -1);
  }
  refreshRegion(e, r, t, i) {
    let s = e.findChildByName(r);
    s != null &&
      (t
        ? (s.addEventListener(u.CLICK, i),
          (s.visible = !0),
          this._navigator?.refreshButton(s, r, t, null, 0))
        : ((s.visible = !1), s.hasEventListener(u.CLICK) && s.removeEventListener(u.CLICK, i)));
  }
  onRemoveFavouriteClick = n((e) => {
    let r = e.target,
      t = r?.parent == null ? null : this.tags(r.parent.id);
    t != null && this._navigator?.send(new UnkMessageComposer_1args_9aee4c(t.flatId));
  }, "onRemoveFavouriteClick");
  onAddFavouriteClick = n((e) => {
    let r = e.target,
      t = r?.parent == null ? null : this.tags(r.parent.id);
    t != null && this._navigator?.send(new UnkMessageComposer_1args_155bad(t.flatId));
  }, "onAddFavouriteClick");
  hilite(e) {
    (this._r22981a9a6249ad != null &&
      !this._r22981a9a6249ad.disposed &&
      (this._r22981a9a6249ad.color = this.getBgColor(this._r22981a9a6249ad.id)),
      (this._r22981a9a6249ad = e),
      (e.color = 4288861930));
  }
  _rf37f396a1d8114(e) {
    let r = e,
      t = Math.abs(this._r8047351a72d108 - r.stageX);
    ((this._r8047351a72d108 = r.stageX), (this._rc1492510b6dacb = t > 2));
  }
}

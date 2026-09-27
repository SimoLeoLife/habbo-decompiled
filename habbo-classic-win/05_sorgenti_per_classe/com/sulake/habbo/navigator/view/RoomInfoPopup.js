// Extracted from HabboAirLauncher.deobf.js, line 259679.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/RoomInfoPopup.as
// Obfuscated name: _i5eb52478b5589e

class {
  static {
    n(this, "RoomInfoPopup");
  }
  _window = null;
  _navigator;
  _rb8570c126ab390 = [];
  var_55 = null;
  _r6e5bdde0d05980 = new E(-1, -1);
  var_1470 = !1;
  _r531f81b0bbfd4f = !1;
  var_2017 = !1;
  _rceb961192188d6 = !1;
  constructor(e) {
    this._navigator = e;
  }
  show(e) {
    if (e) {
      (this._window || this.createWindow(),
        this.populate(),
        this._window && (this._window.visible = !0));
      return;
    }
    ((this.var_1470 = !1),
      (this.var_2017 = !1),
      this._window && (this._window.visible = !1));
  }
  get visible() {
    return this._window?.visible ?? !1;
  }
  showAt(e, r, t) {
    let i = !this.visible;
    if ((this.show(e), e && this._window)) {
      let s = new E(r, t - this._window.height / 2);
      ((this._r6e5bdde0d05980.x !== s.x || this._r6e5bdde0d05980.y !== s.y) &&
        i &&
        this.var_55 &&
        this._navigator.trackEventLog(
          "browse.openroominfo",
          "Results",
          this.var_55.roomName,
          this.var_55.flatId,
        ),
        (this.position = s),
        this._window.activate());
    }
  }
  setData(e) {
    ((this.var_55 == null || this.var_55.flatId !== e.flatId) &&
      ((this.var_1470 = !1), (this.var_2017 = !1)),
      (this.var_55 = e));
  }
  getGlobalRectangle(e) {
    this._window?.getGlobalRectangle(e);
  }
  refreshHomeState() {
    ((this.var_1470 = !1),
      this._window?.visible &&
        this.var_55 != null &&
        (this._r2d49dcb9e13606("home_icon").assetUri =
          `newnavigator_icon_home_${this._r7b3573a83666c5 ? "yes" : "no"}`));
  }
  set position(e) {
    this._window && ((this._window.position = e), (this._r6e5bdde0d05980 = e));
  }
  get _r7b3573a83666c5() {
    return this.var_55
      ? this.var_1470
        ? this._r531f81b0bbfd4f
        : this._navigator._r8d305e819155a0._r15f67a9e1b27c9(this.var_55.flatId)
      : !1;
  }
  set _r7b3573a83666c5(e) {
    ((this.var_1470 = !0), (this._r531f81b0bbfd4f = e));
  }
  get _r676f5528dffdec() {
    return this.var_55
      ? this.var_2017
        ? this._rceb961192188d6
        : this._navigator._r8d305e819155a0._r0af75c3a396faa(this.var_55.flatId)
      : !1;
  }
  set _r676f5528dffdec(e) {
    ((this.var_2017 = !0), (this._rceb961192188d6 = e));
  }
  populate() {
    if (!this.var_55 || !this._window) return;
    let e = this._r2d49dcb9e13606("main_content"),
      r = this._r2d49dcb9e13606("header_content"),
      t = this._r2d49dcb9e13606("bottom_itemlist"),
      i = this.var_55.groupBadgeCode !== "";
    if (
      ((this._r2d49dcb9e13606("room_owner_region").visible = this.var_55._r6b883803c75d7f),
      (this._r2d49dcb9e13606("room_group_region").visible = i),
      (this._r2d49dcb9e13606("room_name").caption = this.var_55.roomName),
      (this._r2d49dcb9e13606("room_desc").caption = this.var_55.description),
      (this._r2d49dcb9e13606("owner_name").caption = this.var_55.ownerName),
      (this._r2d49dcb9e13606("room_owner_region").id = this.var_55.ownerId),
      (this._r2d49dcb9e13606("room_owner_region").procedure = this._rd1cc4eed5dd2e8(
        this._r7b324a9bf589e3.bind(this),
      )),
      (this._r2d49dcb9e13606("favorite_region").procedure = this._rd1cc4eed5dd2e8(
        this.roomFavoriteRegionProcedure.bind(this),
      )),
      (this._r2d49dcb9e13606("home_region").procedure = this._rd1cc4eed5dd2e8(
        this.homeRoomRegionProcedure.bind(this),
      )),
      (this._r2d49dcb9e13606("settings_region").procedure = this._rd1cc4eed5dd2e8(
        this._r69855f826f48d8.bind(this),
      )),
      (this._r2d49dcb9e13606("settings_container").visible =
        this.var_55.ownerName === this._navigator.sessionData.userName),
      (this._navigator.context.configuration?.getBoolean("room.report.enabled") ?? !1) &&
      this.var_55.ownerName !== this._navigator.sessionData.userName
        ? ((this._r2d49dcb9e13606("report_region").id = this.var_55.ownerId),
          (this._r2d49dcb9e13606("report_region").procedure = this._rd1cc4eed5dd2e8(
            this._r0d322e4bc740ec.bind(this),
          )),
          (this._r2d49dcb9e13606("report_region").visible = !0),
          (this._r2d49dcb9e13606("report_container").visible = !0))
        : ((this._r2d49dcb9e13606("report_region").visible = !1),
          (this._r2d49dcb9e13606("report_container").visible = !1)),
      this._r2d49dcb9e13606("midBottom_itemlist").arrangeListItems(),
      (this._r2d49dcb9e13606("favorite_icon").assetUri =
        `newnavigator_icon_fav_${this._r676f5528dffdec ? "yes" : "no"}`),
      (this._r2d49dcb9e13606("home_icon").assetUri =
        `newnavigator_icon_home_${this._r7b3573a83666c5 ? "yes" : "no"}`),
      (this._r2d49dcb9e13606("room_group_badge").visible = i),
      (this._r2d49dcb9e13606("room_owner_region").visible = this.var_55._r6b883803c75d7f),
      (this._r2d49dcb9e13606("room_group_region").visible = i),
      (this._r2d49dcb9e13606("room_group_owner_container").visible =
        i || this.var_55._r6b883803c75d7f),
      i)
    ) {
      ((this._r2d49dcb9e13606("room_group_badge").widget.badgeId = this.var_55.groupBadgeCode),
        (this._r2d49dcb9e13606("group_name").caption = this.var_55.groupName),
        (this._r2d49dcb9e13606("group_name").id = this.var_55.habboGroupId),
        (this._r2d49dcb9e13606("room_group_region").id = this.var_55.habboGroupId),
        (this._r2d49dcb9e13606("room_group_region").procedure = this._rd1cc4eed5dd2e8(
          this._rc1c4422274e3e5.bind(this),
        )));
      let d = this._navigator.getCachedGroupDetails(this.var_55.habboGroupId);
      d
        ? (d.isOwner
            ? this._r8cd36b5360ffd3(
                this._r2d49dcb9e13606("group_mode_admin"),
                "newnavigator_icon_group_owner",
              )
            : d.isAdmin
              ? this._r8cd36b5360ffd3(
                  this._r2d49dcb9e13606("group_mode_admin"),
                  "newnavigator_icon_group_admin",
                )
              : this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_admin"), null),
          this._r8cd36b5360ffd3(
            this._r2d49dcb9e13606("group_mode_size"),
            `${this._navigator.imageLibraryBaseUrl}guilds/grouptype_icon_${d.type}.png`,
          ),
          this._r8cd36b5360ffd3(
            this._r2d49dcb9e13606("group_mode_furnish"),
            d.var_5042
              ? `${this._navigator.imageLibraryBaseUrl}guilds/group_decorate_icon.png`
              : null,
          ))
        : (this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_admin"), null),
          this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_size"), null),
          this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_furnish"), null));
    } else
      (this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_admin"), null),
        this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_size"), null),
        this._r8cd36b5360ffd3(this._r2d49dcb9e13606("group_mode_furnish"), null));
    let s = this.var_55._r92fc4be8b2592f > 0;
    if (s) {
      let d = `${this._navigator.localization.getLocalizationWithParams("navigator.eventsettings.desc")}: ${this.var_55.roomAdDescription}
`;
      ((this._r2d49dcb9e13606("event_name").caption =
        `${this._navigator.localization.getLocalizationWithParams("navigator.eventsettings.name")}: ${this.var_55.roomAdName}`),
        (d +=
          this._navigator.localization.getLocalizationWithParams("roomad.event.expiration_time") +
          ra.getFriendlyTime(
            this._navigator.localization,
            this.var_55._r92fc4be8b2592f * 60,
          )),
        (this._r2d49dcb9e13606("event_desc").caption = d));
    }
    ((this._rde030f2db94049(t, "event_info").visible = s),
      r.arrangeListItems(),
      (this._rb8570c126ab390 = []));
    let o = this._r2d49dcb9e13606("tag_list");
    o.destroyListItems();
    for (let d = 0; d < this.var_55.tags.length; d++) {
      let c = this.var_55.tags[d];
      (this._rb8570c126ab390.push(c), o.addListItem(this.getNewTagItem(c, d)));
    }
    (this.clearProperties(),
      this.addProperty(
        "properties",
        "${navigator.roompopup.property.trading}",
        Kl.getLocalizationKey(this.var_55.tradeMode),
      ),
      (this._navigator.context.configuration?.getBoolean("room.ranking.enabled") ?? !1) &&
        this.addProperty(
          "properties",
          "${navigator.roompopup.property.ranking}",
          this.var_55.ranking.toString(),
        ),
      this.addProperty(
        "properties",
        "${navigator.roompopup.property.max_users}",
        this.var_55._ra66356507ed6a4.toString(),
      ),
      (this._r2d49dcb9e13606("room_thumbnail").assetUri = "newnavigator_default_room"),
      this._navigator.sessionData.isPerkAllowed(class_2156.NAVIGATOR_ROOM_THUMBNAIL_CAMERA) &&
        (this.var_55._r6ce72253ab2cde != null
          ? this._navigator.getBoolean("new.navigator.official.room.thumbnails.in.amazon")
            ? (this._r2d49dcb9e13606("room_thumbnail").assetUri =
                this._navigator.getProperty("navigator.thumbnail.url_base") +
                this.var_55.flatId +
                ".png")
            : (this._r2d49dcb9e13606("room_thumbnail").assetUri =
                this._navigator.getProperty("image.library.url") +
                this.var_55._r6ce72253ab2cde)
          : (this._r2d49dcb9e13606("room_thumbnail").assetUri =
              this._navigator.getProperty("navigator.thumbnail.url_base") +
              this.var_55.flatId +
              ".png")),
      t.arrangeListItems(),
      e.arrangeListItems());
  }
  clearProperties() {
    this._r2d49dcb9e13606("properties").destroyListItems();
  }
  addProperty(e, r, t) {
    let i = this._r2d49dcb9e13606(e),
      s = this._navigator.windowManager.buildFromXML(rr(this._ra5bebce2af9b7c("property_xml")));
    ((this._r86a049cc2dac7b(s, "property_name").caption = r),
      (this._r86a049cc2dac7b(s, "property_value").caption = t),
      i.addListItem(s));
  }
  getNewTagItem(e, r) {
    let t = this._navigator.windowManager.buildFromXML(rr(this._ra5bebce2af9b7c("tag_xml"))),
      i = t.findChildByName("tag_region");
    return (
      (i.id = r),
      (i.procedure = this._rd1cc4eed5dd2e8(this._r4236de670491a4.bind(this))),
      (this._r86a049cc2dac7b(t, "tag_text").caption = `#${e}`),
      i
    );
  }
  createWindow() {
    this._window = this._navigator.windowManager.buildFromXML(
      rr(this._ra5bebce2af9b7c("room_info_popup_bubble_xml")),
    );
  }
  _r7b324a9bf589e3(e, r) {
    e.type === u.CLICK && (this._navigator._rc280e702c544c6(r.id), this.destroy());
  }
  _rc1c4422274e3e5(e, r) {
    e.type === u.CLICK && (this._navigator.getGuildInfo(r.id), this.destroy());
  }
  _r0d322e4bc740ec(e, r) {
    e.type === u.CLICK &&
      this.var_55 &&
      (this._navigator.habboHelp.reportRoom(
        this.var_55.flatId,
        this.var_55.roomName,
        this.var_55.description,
      ),
      this.destroy());
  }
  _r4236de670491a4(e, r) {
    e.type === u.CLICK &&
      (this._navigator.performTagSearch(this._rb8570c126ab390[r.id]), this.destroy());
  }
  _r69855f826f48d8(e, r) {
    e.type === u.CLICK &&
      this.var_55 &&
      (this._navigator._r8d305e819155a0.roomSettingsCtrl._rc7de4548128463(
        this.var_55.flatId,
        this.var_55.habboGroupId,
      ),
      this.destroy());
  }
  roomFavoriteRegionProcedure(e, r) {
    e.type !== u.CLICK ||
      !this.var_55 ||
      !this._window ||
      (this._r676f5528dffdec
        ? (this._navigator.communication.connection.send(
            new UnkMessageComposer_1args_9aee4c(this.var_55.flatId),
          ),
          (this._r676f5528dffdec = !1))
        : (this._navigator.communication.connection.send(
            new UnkMessageComposer_1args_155bad(this.var_55.flatId),
          ),
          (this._r676f5528dffdec = !0)),
      (this._r2d49dcb9e13606("favorite_icon").assetUri =
        `newnavigator_icon_fav_${this._r676f5528dffdec ? "yes" : "no"}`));
  }
  homeRoomRegionProcedure(e, r) {
    e.type !== u.CLICK ||
      !this.var_55 ||
      !this._window ||
      (this._r7b3573a83666c5 ||
        (this._navigator.communication.connection.send(new UnkMessageComposer_1args_25b16c(this.var_55.flatId)),
        (this._r7b3573a83666c5 = !0)),
      (this._r2d49dcb9e13606("home_icon").assetUri =
        `newnavigator_icon_home_${this._r7b3573a83666c5 ? "yes" : "no"}`));
  }
  destroy() {
    (this._window?.destroy(), (this._window = null));
  }
  _ra5bebce2af9b7c(e) {
    let r = this._navigator.assets.getAssetByName(e);
    if (r == null) throw new Error(`Missing navigator asset: ${e}`);
    return r.content;
  }
  _r2d49dcb9e13606(e) {
    if (this._window == null) throw new Error("Room info popup window has not been created yet.");
    let r = this._window.findChildByName(e);
    if (r == null) throw new Error(`Missing room info popup child: ${e}`);
    return r;
  }
  _r86a049cc2dac7b(e, r) {
    let t = e.findChildByName(r);
    if (t == null) throw new Error(`Missing room info popup child: ${r}`);
    return t;
  }
  _rde030f2db94049(e, r) {
    let t = e.getListItemByName(r);
    if (t == null) throw new Error(`Missing room info popup list item: ${r}`);
    return t;
  }
  _r8cd36b5360ffd3(e, r) {
    e.assetUri = r;
  }
  _rd1cc4eed5dd2e8(e) {
    return e;
  }
}

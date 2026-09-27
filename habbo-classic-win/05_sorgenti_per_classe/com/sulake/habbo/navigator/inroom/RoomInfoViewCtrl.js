// Extracted from HabboAirLauncher.deobf.js, line 254220.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/inroom/RoomInfoViewCtrl.as
// Obfuscated name: _i1eba66e26295b5

class {
  static {
    n(this, "RoomInfoViewCtrl");
  }
  _navigator;
  _r56b82e71e6658a;
  _window = null;
  _rd65c8b4e77f024;
  _embedExpanded = !1;
  var_679 = !1;
  var_918 = null;
  constructor(e) {
    ((this._navigator = e), (this._r56b82e71e6658a = new mQ(e)), (this._rd65c8b4e77f024 = new TagRenderer(e)));
  }
  dispose() {
    (this.var_918 &&
      (this.var_918.removeEventListener(TI.STATE_CHANGED, this._r6dbb4a116bb66a),
      (this.var_918 = null)),
      (this._navigator = null),
      (this.var_679 = !1),
      this.hide(),
      this._rd65c8b4e77f024?.dispose(),
      (this._rd65c8b4e77f024 = null),
      this._r56b82e71e6658a?.dispose(),
      (this._r56b82e71e6658a = null));
  }
  close() {
    this._window != null &&
      ((this.var_679 = !1),
      this.hide(),
      this._navigator?.events.dispatchEvent?.(new M(HabboRoomSettingsTrackingEvent.HABBO_ROOM_SETTINGS_TRACKING_EVENT_CLOSED)));
  }
  reload() {
    this.var_679 && this.refresh();
  }
  toggle() {
    if (this.var_679) {
      ((this.var_679 = !1), this.hide());
      return;
    }
    ((this.var_679 = !0), this.refresh(), this._window?.activate());
  }
  refreshButtons(e) {
    if (this._navigator?.data._rd27e27c96c37cd == null || this._window == null) return;
    if (
      ((this.find("room_settings_button").visible = this._navigator.data._rce664b644acc4a),
      this.refreshRaidProtectionButton(e),
      (this.find("room_filter_button").visible =
        this._navigator.data._rce664b644acc4a &&
        this._navigator.getBoolean("room.custom.filter.enabled")),
      !this._navigator.getBoolean("room.report.enabled"))
    ) {
      let i = this.find("room_report_button");
      i != null && (i.visible = !1);
    }
    this.refreshStaffPick();
    let r = this.find("room_muteall_button");
    ((r.visible =
      this._navigator.data._rd27e27c96c37cd._rbe41b4412cc2f5 &&
      this._navigator.getBoolean("room_moderation.mute_all.enabled")),
      (r.caption = e._r01bc015c33ec89 ? "${navigator.muteall_on}" : "${navigator.muteall_off}"));
    let t = this._navigator.roomSessionManager.getSession(
      this._navigator.data._rd27e27c96c37cd.flatId,
    );
    ((this.find("floor_plan_editor_button").visible = (t?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER),
      this.layoutButtons());
  }
  refreshRaidProtectionButton(e) {
    this.find("raid_protection_settings_button").visible =
      this.var_918 !== null &&
      this.var_918.isFeatureEnabled &&
      this.var_918.canManage(e.flatId);
  }
  layoutButtons() {
    let e = this._window.findChildByName("buttons_cont");
    e != null &&
      (Fr.moveChildrenToColumn(
        e,
        [
          "room_settings_button",
          "raid_protection_settings_button",
          "room_filter_button",
          "floor_plan_editor_button",
          "staff_pick_button",
          "room_report_button",
          "room_muteall_button",
        ],
        0,
        3,
      ),
      (e.visible = Fr.hasVisibleChildren(e)),
      (e.height = Fr.getLowestPoint(e)));
  }
  refresh() {
    if (this._navigator?.data._rd27e27c96c37cd == null || this._rd65c8b4e77f024 == null) return;
    ((this._rd65c8b4e77f024.useHashTags = !0), this.prepareWindow());
    let e = this._window?.content;
    this._window == null ||
      e == null ||
      (Fr.hideChildren(e),
      this.refreshRoomDetails(this._navigator.data._rd27e27c96c37cd),
      this.refreshEmbed(),
      this._r56b82e71e6658a?.refresh(e, this._navigator.data._rd27e27c96c37cd),
      this.refreshButtons(this._navigator.data._rd27e27c96c37cd),
      this.layoutContent());
  }
  _r6dbb4a116bb66a = n(() => {
    this._window === null ||
      this._navigator.data._rd27e27c96c37cd === null ||
      (this.refreshRaidProtectionButton(this._navigator.data._rd27e27c96c37cd),
      this.layoutButtons(),
      this.layoutContent());
  }, "_r6dbb4a116bb66a");
  layoutContent() {
    let e = this._window.content;
    Fr.moveChildrenToColumn(
      e,
      ["room_details", "public_space_details", "guild_info", "embed_info", "buttons_cont"],
      0,
      3,
    );
    let r = this._window.findChildByName("guild_info");
    (r != null && (r.x = 11), (this._window.height = Fr.getLowestPoint(e) + 45));
  }
  onRaidProtectionSettingsClick = n(() => {
    let e = this._navigator.data._rd27e27c96c37cd;
    e !== null &&
      (this._navigator.windowManager.context._r6b6c989018eb05(
        "navigator/raidprotection/" + e.flatId,
      ),
      this.close());
  }, "onRaidProtectionSettingsClick");
  isHome(e) {
    return e != null && e.flatId === this._navigator?.data._r3dfd89b26af6cd;
  }
  refreshEmbed() {
    if (this._window == null || this._navigator == null) return;
    let e = this.find("embed_info");
    if (e == null) return;
    let r = this._navigator.getBoolean("embed.showInRoomInfo");
    if (!(this._navigator.data._rd27e27c96c37cd != null) || !r) {
      e.visible = !1;
      return;
    }
    let i = e.findChildByName("embed_info_txt"),
      s = e.findChildByName("embed_src_txt"),
      o = e.findChildByName("embed_info_region");
    i == null ||
      s == null ||
      o == null ||
      ((e.visible = !0),
      this._embedExpanded && (s.text = this.getEmbedData()),
      (i.visible = this._embedExpanded),
      (s.visible = this._embedExpanded),
      (o.visible = !1),
      (e.height = Fr.getLowestPoint(e) + 5),
      (o.visible = !0),
      (o.height = this._embedExpanded ? s.y : e.height));
  }
  refreshRoomDetails(e) {
    if (this._window == null || this._navigator == null || this._rd65c8b4e77f024 == null)
      return;
    let r = this.find("room_details");
    if (r == null) return;
    let t = this.find("room_name");
    if (t == null) return;
    ((t.text = e.roomName), (t.height = t.textHeight + 5));
    let i = this.find("owner_name"),
      s = this.find("owner_name_cont");
    i != null &&
      s != null &&
      (e._r6b883803c75d7f && e.ownerId > 0
        ? ((s.visible = !0), (i.visible = !0), (i.text = e.ownerName), Io.setUserInfoState(!1, r))
        : (s.visible = !1));
    let o = this.find("room_desc");
    (this._rd65c8b4e77f024.refreshTags(r, e.tags),
      o != null &&
        ((o.text = e.description),
        (o.visible = !1),
        e.description !== "" && ((o.height = o.textHeight + 5), (o.visible = !0))),
      (this.find("rating_region").visible = this._navigator.data._r43a02485c61e00));
    let d = this.find("rating_txt");
    if (d != null) {
      d.text = `${this._navigator.data._rd8d11d6fc471c1}`;
      let f = this.find("rating_region");
      f.x = d.x + d.width + 5;
    }
    this.find("ranking_cont").visible = e.ranking > 0;
    let c = this.find("ranking_txt");
    (c != null && (c.text = `${e.ranking}`),
      this._navigator.refreshButton(r, "home", this.isHome(e), null, 0),
      (this.find("make_home_region").visible = !this.isHome(e)),
      (this.find("make_favourite_region").visible =
        !this._navigator.data._r9eda1e1e8e08ba && !this._navigator.data._r68b74684d223fc()),
      (this.find("favourite_region").visible =
        !this._navigator.data._r9eda1e1e8e08ba && this._navigator.data._r68b74684d223fc()),
      (this.find("floor_plan_editor_button").visible = this._navigator.data._rce664b644acc4a),
      Fr.moveChildrenToColumn(
        r,
        [
          "room_name",
          "owner_name_cont",
          "rating_cont",
          "ranking_cont",
          "padding_cont",
          "tags",
          "room_desc",
          "thumbnail_container",
        ],
        t.y,
        0,
      ),
      (r.visible = !0),
      (r.height = Fr.getLowestPoint(r)));
  }
  refreshStaffPick(e = !1) {
    if (this._window == null || this._navigator == null) return;
    let r = this._window.findChildByName("staff_pick_button");
    if (r == null) return;
    if (!this._navigator.data._rbeec5eed3d63af) {
      r.visible = !1;
      return;
    }
    r.visible = !0;
    let t = e ? !this._navigator.data._r4af9c5e837edd4 : this._navigator.data._r4af9c5e837edd4;
    r.caption = this._navigator.getText(
      t ? "navigator.staffpicks.unpick" : "navigator.staffpicks.pick",
    );
  }
  prepareWindow() {
    if (
      ((this.var_679 = !0),
      this.var_918 === null &&
        ((this.var_918 = this._navigator._r34fab0dd99b1c7),
        this.var_918?.addEventListener(TI.STATE_CHANGED, this._r6dbb4a116bb66a)),
      this._window != null || this._navigator == null)
    )
      return;
    if (
      ((this._window = this._navigator.getXmlWindow("iro_room_details_framed")),
      this._window == null)
    )
      throw new Error("Failed to build iro_room_details_framed");
    (this._window.center(),
      this.addMouseClickListener(this.find("make_favourite_region"), this.onAddFavouriteClick),
      this.addMouseClickListener(this.find("favourite_region"), this.onRemoveFavouriteClick),
      this.addMouseClickListener(this.find("room_settings_button"), this.onRoomSettingsClick),
      this.addMouseClickListener(this.find("raid_protection_settings_button"), this.onRaidProtectionSettingsClick),
      this.addMouseClickListener(this.find("room_filter_button"), this.onRoomFilterButtonClick),
      this.addMouseClickListener(this.find("floor_plan_editor_button"), this.onFloorPlanEditorButtonClick),
      this.addMouseClickListener(this.find("room_muteall_button"), this.onMuteAllClick),
      this.addMouseClickListener(this.find("make_home_region"), this.onMakeHomeClick),
      this.addMouseClickListener(this.find("remove_rights_region"), this.onRemoveRights),
      this.addMouseClickListener(this.find("embed_src_txt"), this.onEmbedSrcClick),
      this.addMouseClickListener(this.find("staff_pick_button"), this.onStaffPick),
      this.addMouseClickListener(this.find("room_report_button"), this._r6ebd0a2f0d3d0f),
      this._navigator.refreshButton(
        this.find("remove_rights_region"),
        "remove_rights",
        this._navigator._r251807bd7fb8c9(
          this._navigator.data._rd27e27c96c37cd?.flatId ?? 0,
        ),
        null,
        0,
      ),
      this._navigator.refreshButton(this.find("make_home_region"), "make_home", !0, null, 0),
      this._navigator.refreshButton(this.find("favourite_region"), "favourite", !0, null, 0),
      this._navigator.refreshButton(this.find("make_favourite_region"), "make_favourite", !0, null, 0),
      this._navigator.refreshButton(this.find("embed_info"), "icon_weblink", !0, null, 0),
      this._window.findChildByTag("close")?.addEventListener(u.CLICK, this.onCloseButtonClick));
    let e = this._window.findChildByName("owner_name_cont");
    (e != null && ((e.procedure = this.onOwnerName), Fr.layoutChildrenInArea(e, 1e3, 10, 2, 5)),
      this.setupLabelAndValue("rating_cont", "rating_caption", "rating_txt"),
      this.setupLabelAndValue("ranking_cont", "ranking_caption", "ranking_txt"));
    let r = this.find("embed_info"),
      t = this.find("embed_info_txt");
    if (r != null && t != null) {
      ((t.height = t.textHeight + 5),
        Fr.moveChildrenToColumn(r, ["embed_info_txt", "embed_src_txt"], t.y, 2),
        (r.height = Fr.getLowestPoint(r) + 5),
        r.findChildByName("embed_info_region")?.setParamFlag?.(0, !1));
      let i = r.findChildByName("embed_info_region");
      i != null && (i.procedure = this.onEmbedInfo);
    }
    if (this._navigator.sessionData.isPerkAllowed(class_2156.NAVIGATOR_ROOM_THUMBNAIL_CAMERA)) {
      let i = this.find("add_thumbnail_region");
      ((i.visible = this._navigator.data._rce664b644acc4a),
        this._navigator.data._rce664b644acc4a && this.addMouseClickListener(i, this._r874b040c04c608));
      let s = this._window.findChildByName("thumbnail_image");
      if (s != null && this._navigator.data._rd27e27c96c37cd != null) {
        let o = "";
        (this._navigator.data._rd27e27c96c37cd._r6ce72253ab2cde != null
          ? this._navigator.getBoolean("new.navigator.official.room.thumbnails.in.amazon")
            ? (o = `${this._navigator.getProperty("navigator.thumbnail.url_base")}${this._navigator.data._rd27e27c96c37cd.flatId}.png`)
            : (o = `${this._navigator.getProperty("image.library.url")}${this._navigator.data._rd27e27c96c37cd._r6ce72253ab2cde}`)
          : (o = `${this._navigator.getProperty("navigator.thumbnail.url_base")}${this._navigator.data._rd27e27c96c37cd.flatId}.png`),
          (s.assetUri = o));
      }
    } else this.find("thumbnail_container").visible = !1;
  }
  setupLabelAndValue(e, r, t) {
    let i = this.find(e),
      s = i?.findChildByName(r);
    i == null || s == null || ((s.width = s.textWidth), Fr.moveChildrenToRow(i, [r, t], s.x, s.y, 3));
  }
  addMouseClickListener(e, r) {
    e?.addEventListener(u.CLICK, r);
  }
  find(e) {
    let r = this._window?.findChildByName(e) ?? null;
    if (r == null) throw new Error(`Window element with name: ${e} cannot be found!`);
    return r;
  }
  onAddFavouriteClick = n((e) => {
    if (this._navigator?.data._rd27e27c96c37cd != null) {
      if (this._navigator.data._r9298e394bc1a75()) {
        new SimpleAlertView_(
          this._navigator,
          "${navigator.favouritesfull.title}",
          "${navigator.favouritesfull.body}",
        ).show();
        return;
      }
      (this._navigator.trackGoogle("roomInfo", "addFavourite"),
        this._navigator.send(new UnkMessageComposer_1args_155bad(this._navigator.data._rd27e27c96c37cd.flatId)));
    }
  }, "onAddFavouriteClick");
  onRemoveFavouriteClick = n((e) => {
    this._navigator?.data._rd27e27c96c37cd != null &&
      (this._navigator.trackGoogle("roomInfo", "removeFavourite"),
      this._navigator.send(new UnkMessageComposer_1args_9aee4c(this._navigator.data._rd27e27c96c37cd.flatId)));
  }, "onRemoveFavouriteClick");
  onRoomSettingsClick = n((e) => {
    let r = this._navigator?.data._rd27e27c96c37cd ?? null;
    r != null &&
      (this._navigator?.trackGoogle("roomInfo", "editRoomSettings"),
      (this._r1c77bbd8ea81df?.roomSettingsCtrl ?? null)?._re5bfbfb64be8a6(r.flatId),
      this.close());
  }, "onRoomSettingsClick");
  onRoomFilterButtonClick = n((e) => {
    let r = this._navigator?.data._rd27e27c96c37cd ?? null;
    r != null &&
      (this._navigator?.trackGoogle("roomInfo", "editRoomFilter"),
      (this._r1c77bbd8ea81df?._r515faa3e76c305 ?? null)?._rfb82ac3cc29c70(r.flatId),
      this.close());
  }, "onRoomFilterButtonClick");
  onFloorPlanEditorButtonClick = n((e) => {
    (this._navigator?.trackGoogle("roomInfo", "floorPlanEditor"),
      this._navigator?.windowManager._r0854f489ec6e49(),
      this.close());
  }, "onFloorPlanEditorButtonClick");
  onMuteAllClick = n((e) => {
    this._navigator?.send(new class_3366());
  }, "onMuteAllClick");
  onMakeHomeClick = n((e) => {
    let r = this._navigator?.data._rd27e27c96c37cd ?? null;
    r != null &&
      (this._navigator?.trackGoogle("roomInfo", "makeHome"),
      this._navigator?.send(new UnkMessageComposer_1args_25b16c(r.flatId)));
  }, "onMakeHomeClick");
  onCloseButtonClick = n((e) => {
    this._r8277097178cec9();
  }, "onCloseButtonClick");
  onRemoveRights = n((e) => {
    let r = this._navigator?._rff8822efc4b68b ?? null;
    r != null &&
      (this._navigator?._r37e55c511f5b0e(r.flatId),
      (this.find("remove_rights_region").visible = !1));
  }, "onRemoveRights");
  onStaffPick = n((e) => {
    this._navigator?.data._rd27e27c96c37cd != null &&
      (this.refreshStaffPick(!0),
      this._navigator.send(
        new class_2444(
          this._navigator.data._rd27e27c96c37cd.flatId,
          this._navigator.data._r4af9c5e837edd4,
        ),
      ));
  }, "onStaffPick");
  _r6ebd0a2f0d3d0f = n((e) => {
    let r = this._navigator?.data._rd27e27c96c37cd ?? null;
    r != null &&
      (this._navigator?.trackGoogle("roomInfo", "reportRoom"),
      this._r1c77bbd8ea81df?.habboHelp?.reportRoom(r.flatId, r.roomName, r.description),
      this.close());
  }, "_r6ebd0a2f0d3d0f");
  onEmbedSrcClick = n((e) => {
    let r = this.find("embed_src_txt");
    r != null &&
      (r._r1c386c8571c5d9(0, r.text.length), this._navigator?.trackGoogle("roomInfo", "embedSrc"));
  }, "onEmbedSrcClick");
  _r874b040c04c608 = n((e) => {
    let r = this._r1c77bbd8ea81df,
      t = this._navigator?.data._rd27e27c96c37cd ?? null;
    if (r == null || t == null) return;
    (r.windowManager.context?._r6b6c989018eb05("roomThumbnailCamera/open"), this.close());
    let i = `${r.getProperty("navigator.thumbnail.url_base")}${t.flatId}.png`;
    (r.windowManager._r55bb54da384802?.removeAsset(i), r.trackGoogle("roomInfo", "addThumbnail"));
  }, "_r874b040c04c608");
  _r8277097178cec9() {
    (this.hide(), (this.var_679 = !1));
  }
  getEmbedData() {
    let e = "",
      r = "";
    this._navigator?.data._rd27e27c96c37cd != null &&
      ((e = "private"), (r = `${this._navigator.data._rd27e27c96c37cd.flatId}`));
    let t = this._navigator?.getProperty("user.hash") ?? "";
    return (
      this._navigator?._r43eae9731f5b27("navigator.embed.src", "roomType", e),
      this._navigator?._r43eae9731f5b27("navigator.embed.src", "embedCode", t),
      this._navigator?._r43eae9731f5b27("navigator.embed.src", "roomId", r),
      this._navigator?.getText("navigator.embed.src") ?? ""
    );
  }
  onEmbedInfo = n((e, r) => {
    e.type === u.CLICK && ((this._embedExpanded = !this._embedExpanded), this.refresh());
  }, "onEmbedInfo");
  onOwnerName = n((e, r) => {
    (Io.onEntry(e, r),
      !(e.type !== u.CLICK || this._navigator?.data._rd27e27c96c37cd == null) &&
        (this._navigator.trackGoogle("roomInfo", "extendedProfile"),
        this._navigator.trackGoogle("extendedProfile", "navigator_roomInfo"),
        this._navigator.send(new class_2134(this._navigator.data._rd27e27c96c37cd.ownerId))));
  }, "onOwnerName");
  get _r1c77bbd8ea81df() {
    return this._navigator;
  }
  hide() {
    (this._window?.dispose(), (this._window = null));
  }
}

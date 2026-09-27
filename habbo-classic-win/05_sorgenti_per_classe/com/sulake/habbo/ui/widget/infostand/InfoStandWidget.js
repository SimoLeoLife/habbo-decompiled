// Estratto da HabboAirLauncher.deobf.js, riga 322656.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/InfoStandWidget.as
// Nome offuscato: _ib70b793bc60aff

class a extends RoomWidgetBase {
  static {
    n(this, "InfoStandWidget");
  }
  static PLACEMENT_PAGE_ID = -1;
  static USER_VIEW = "infostand_user_view";
  static const_1018 = "infostand_furni_view";
  static PET_VIEW = "infostand_pet_view";
  static BOT_VIEW = "infostand_bot_view";
  static RENTABLE_BOT_VIEW = "infostand_rentable_bot_view";
  static const_960 = "infostand_jukebox_view";
  static CRACKABLE_FURNI_VIEW = "infostand_crackable_furni_view";
  static SONGDISK_VIEW = "infostand_songdisk_view";
  static UPDATE_INTERVAL_MS = 3e3;
  var_1720;
  var_211;
  var_493;
  _rb0833a58052bc1;
  var_1187;
  var_1993;
  var_2427;
  var_1876;
  var_2346;
  var_86;
  _r7982e3490a9f12;
  _r0b6c6f5456c4ed;
  var_283 = null;
  _r65a67a0bca4899;
  _config;
  constructor(e, r, t = null, i = null, s = null) {
    (super(e, r, t, i),
      (this._config = s),
      (this.var_1720 = new X1(this, a.const_1018)),
      (this.var_211 = new qxe(this, a.USER_VIEW)),
      (this.var_493 = new Qxe(this, a.PET_VIEW)),
      (this._rb0833a58052bc1 = new InfoStandBotView(this, a.BOT_VIEW)),
      (this.var_1187 = new Yxe(this, a.RENTABLE_BOT_VIEW)),
      (this.var_1993 = new InfoStandJukeboxView(this, a.const_960)),
      (this.var_2427 = new InfoStandCrackableFurniView(this, a.CRACKABLE_FURNI_VIEW)),
      (this.var_1876 = new InfoStandSongDiskView(this, a.SONGDISK_VIEW)),
      (this.var_2346 = new InfoStandUserData()),
      (this.var_86 = new InfoStandFurniData()),
      (this._r7982e3490a9f12 = new InfoStandPetData()),
      (this._r0b6c6f5456c4ed = new InfoStandRentableBotData()),
      (this._r65a67a0bca4899 = new _i05394ecc0c0c4d(a.UPDATE_INTERVAL_MS)),
      this._r65a67a0bca4899.addEventListener(DeBouncer.addEventListener, this._r74a888e08bca64),
      (this.mainContainer.visible = !1));
    let o = this._handler;
    o != null && (o.widget = this);
  }
  get mainWindow() {
    return this.mainContainer;
  }
  get mainContainer() {
    if (this.var_283 == null) {
      if (
        ((this.var_283 = this.windowManager?.createWindow(
          "infostand_main_container",
          "",
          HabboWindowType.CONTAINER,
          HabboWindowStyle.NULL,
          class_2094.NULL,
          new D(0, 0, 50, 100),
        )),
        this.var_283 == null)
      )
        throw new Error("Failed to construct infostand main container!");
      (this.var_283.tags.push("room_widget_infostand"),
        (this.var_283.background = !0),
        (this.var_283.color = 0));
    }
    return this.var_283;
  }
  get config() {
    return this._config;
  }
  get roomControllerLevel() {
    return this._handler?.container ?? null;
  }
  get isActivityDisplayEnabled() {
    return this._handler?.isActivityDisplayEnabled ?? !1;
  }
  get userData() {
    return this.var_2346;
  }
  get furniData() {
    return this.var_86;
  }
  get _rdfba07d212c6c0() {
    return this.var_1720;
  }
  get _r9624d2c1d70bed() {
    return this._r7982e3490a9f12;
  }
  get _r1c4adec6cf6537() {
    return this._r0b6c6f5456c4ed;
  }
  getXmlWindow(e) {
    let r = null;
    try {
      let i = this.assets?.getAssetByName(e) ?? null;
      r = this.windowManager?.buildFromXML(i?.content);
    } catch (t) {}
    return r;
  }
  _r10d42dea158da9(e, r, t, i) {
    if (
      !(
        this.userData.userRoomId !== e ||
        !this.mainContainer.findChildByName(a.USER_VIEW)?.visible
      ) &&
      (this.var_211?.clearGroupBadge(), r !== -1)
    ) {
      let o = this.roomControllerLevel?.sessionDataManager?.getGroupBadgeId(r) ?? "";
      ((this.userData.groupId = r),
        (this.userData.groupBadgeId = o),
        (this.userData.groupName = i),
        this.var_211?.setGroupBadge(o));
    }
  }
  _rb0baadd15ced86(e, r) {
    this.var_2346.userId === e && this.var_211?.setRelationshipStatuses(r);
  }
  dispose() {
    (this._r65a67a0bca4899?.stop(),
      (this._r65a67a0bca4899 = null),
      this.var_211?.dispose(),
      (this.var_211 = null),
      this.var_1720?.dispose(),
      (this.var_1720 = null),
      this._rb0833a58052bc1?.dispose(),
      (this._rb0833a58052bc1 = null),
      this.var_1187?.dispose(),
      (this.var_1187 = null),
      this.var_493?.dispose(),
      (this.var_493 = null),
      this.var_1993?.dispose(),
      (this.var_1993 = null),
      this.var_2427?.dispose(),
      (this.var_2427 = null),
      this.var_1876?.dispose(),
      (this.var_1876 = null),
      (this.var_283 = null),
      (this._config = null),
      super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_1209, this._r4c994f26265fdd),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this.onClose),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_REMOVED, this.onRoomObjectRemoved),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this.onRoomObjectRemoved),
      e.addEventListener?.(RoomWidgetRoomObjectPlaceEvent.const_751, this._r040dc82815b6ef),
      e.addEventListener?.(RoomWidgetUserInfoUpdateEvent.OWN_USER, this.onUserInfo),
      e.addEventListener?.(RoomWidgetUserInfoUpdateEvent.PEER, this.onUserInfo),
      e.addEventListener?.(RoomWidgetUserInfoUpdateEvent.BOT, this._ra02b700cdf2b0d),
      e.addEventListener?.(RoomWidgetFurniInfoUpdateEvent.FURNI, this._rf49267386db8f3),
      e.addEventListener?.(Ou.RENTABLE_BOT, this._r65f745c17c0f93),
      e.addEventListener?.(Nu.PET_INFO, this._re28fc462249108),
      e.addEventListener?.(Lu.PET_COMMANDS, this._r247d255a7626b3),
      e.addEventListener?.(Lu.OPEN_PET_TRAINING, this._r75fbaeb8d076c1),
      e.addEventListener?.(Lu.CLOSE_PET_TRAINING, this._r1da808adf171ac),
      e.addEventListener?.(RoomWidgetSongUpdateEvent.SONG_PLAYING_CHANGED, this._rfee69fd5672a6e),
      e.addEventListener?.(RoomWidgetSongUpdateEvent.SONG_DATA_RECEIVED, this._rfee69fd5672a6e),
      e.addEventListener?.(fI.PET_FIGURE_UPDATE, this.onPetFigureUpdate),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_1209, this._r4c994f26265fdd),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this.onClose),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_REMOVED, this.onRoomObjectRemoved),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this.onRoomObjectRemoved),
      e.removeEventListener?.(RoomWidgetRoomObjectPlaceEvent.const_751, this._r040dc82815b6ef),
      e.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.OWN_USER, this.onUserInfo),
      e.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.PEER, this.onUserInfo),
      e.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.BOT, this._ra02b700cdf2b0d),
      e.removeEventListener?.(RoomWidgetFurniInfoUpdateEvent.FURNI, this._rf49267386db8f3),
      e.removeEventListener?.(Ou.RENTABLE_BOT, this._r65f745c17c0f93),
      e.removeEventListener?.(Nu.PET_INFO, this._re28fc462249108),
      e.removeEventListener?.(Lu.PET_COMMANDS, this._r247d255a7626b3),
      e.removeEventListener?.(Lu.OPEN_PET_TRAINING, this._r75fbaeb8d076c1),
      e.removeEventListener?.(Lu.CLOSE_PET_TRAINING, this._r1da808adf171ac),
      e.removeEventListener?.(RoomWidgetSongUpdateEvent.SONG_PLAYING_CHANGED, this._rfee69fd5672a6e),
      e.removeEventListener?.(RoomWidgetSongUpdateEvent.SONG_DATA_RECEIVED, this._rfee69fd5672a6e),
      e.removeEventListener?.(fI.PET_FIGURE_UPDATE, this.onPetFigureUpdate),
      super.unregisterUpdateEvents(e));
  }
  updateUserData(e, r, t, i, s, o = -1) {
    e === this.userData.userId &&
      ((this.userData.badgesRank = o),
      this.userData.isBot()
        ? this._rb0833a58052bc1?.setFigure(r)
        : (this.var_211?.setFigure(r),
          this.var_211?.setMotto(i, s),
          this.isActivityDisplayEnabled &&
            this.var_211 &&
            (this.var_211.achievementScore = t),
          this.var_211 && (this.var_211.badgesRank = o)));
  }
  _rdfa32307855704(e, r = null) {
    if (e !== this.userData.userId) return;
    let t = r ?? [];
    if (this._r7bd2318befbbee(this.userData.selectedBadges, t)) return;
    let i = this._rb87e77e72ee7aa(t);
    ((this.userData.badges = i),
      (this.userData.selectedBadges = t),
      this.userData.isBot()
        ? this._rb0833a58052bc1?._rbd50241c036b40(this.userData.badges)
        : this.var_211?._rbd50241c036b40(this.userData.badges, this.userData.selectedBadges, !0));
  }
  _r7991a19f27fec3(e) {
    let r = this.userData._reccfa5fae0f73f(e);
    if (r >= 0) {
      let t = this.userData._r070a63d30cc5cb(r);
      this.userData.isBot()
        ? this._rb0833a58052bc1?.setBadge(r, e)
        : this.var_211?.setBadge(r, e, t);
      return;
    }
    e === this.userData.groupBadgeId && this.var_211?.setGroupBadge(e);
  }
  _ra1035ec0d95808() {
    let e = this.roomControllerLevel?.roomEngine ?? null;
    e?._re608f4ba68bdcb(
      RoomObjectPlacementSource.INFO_STAND,
      -this.furniData.bcOfferId,
      this.furniData.category,
      this.furniData.classId,
      this.furniData.extraParam,
      null,
      -1,
      -1,
      null,
      !0,
    );
  }
  _r8e2ae19142ed50(e) {
    let r = this._handler;
    if (r?._r8e2ae19142ed50 != null) {
      r._r8e2ae19142ed50(e);
      return;
    }
    let t = this.roomControllerLevel?.connection ?? null;
    t != null && this.furniData.id > 0 && t.send(new _i825701823414ca(this.furniData.id, e));
  }
  close() {
    (this.hideChildren(), this._r65a67a0bca4899?.stop());
  }
  _r3cb15b6aaa992d() {
    return this.var_283?.getChildByName(a.const_1018)?.visible ?? !1;
  }
  refreshContainer() {
    let e = this.mainContainer;
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      t?.visible && ((e.width = t.width), (e.height = t.height));
    }
  }
  release() {
    (this.close(), super.release());
  }
  _r74a888e08bca64 = n((e) => {
    this.var_493 != null &&
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(
        new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.REQUEST_PET_UPDATE, this.var_493._r53ca560b37bb59()),
      );
  }, "_r74a888e08bca64");
  onUserInfo = n((e) => {
    let r =
        (this.var_211?.window?.visible ?? !1) && this.var_2346.userId === e.webID,
      t = this.userData.badges,
      i = this.userData.selectedBadges,
      s = this._rbe7603592b586c(r, t, i, e.badges, e.selectedBadges),
      o = this._red582059d0c738(r, t, i, e.badges, e.selectedBadges);
    (this.userData.setData(e),
      s && ((this.userData.badges = t), (this.userData.selectedBadges = i)),
      !this.roomControllerLevel?.sessionDataManager?.isBlocked(e.webID) &&
        (this.var_211?.update(e, o, s),
        this._r526fa0c167a3bf(a.USER_VIEW),
        this._r65a67a0bca4899?.stop()));
  }, "onUserInfo");
  _ra02b700cdf2b0d = n((e) => {
    (this.userData.setData(e),
      this._rb0833a58052bc1?.update(e),
      this._r526fa0c167a3bf(a.BOT_VIEW),
      this._r65a67a0bca4899?.stop());
  }, "_ra02b700cdf2b0d");
  _r65f745c17c0f93 = n((e) => {
    (this._r1c4adec6cf6537.setData(e),
      this.var_1187?.update(e),
      this._r526fa0c167a3bf(a.RENTABLE_BOT_VIEW),
      this._r65a67a0bca4899?.stop());
  }, "_r65f745c17c0f93");
  _rf49267386db8f3 = n((e) => {
    (this.furniData.setData(e),
      e.extraParam === RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_JUKEBOX
        ? (this.var_1993?.update(e), this._r526fa0c167a3bf(a.const_960))
        : e.extraParam?.indexOf(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_SONGDISK) !== -1
          ? (this.var_1876?.update(e), this._r526fa0c167a3bf(a.SONGDISK_VIEW))
          : e.extraParam?.indexOf(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_CRACKABLE_FURNI) !== -1
            ? (this.var_2427?.update(e), this._r526fa0c167a3bf(a.CRACKABLE_FURNI_VIEW))
            : (this.var_1720?.update(e), this._r526fa0c167a3bf(a.const_1018)),
      this._r65a67a0bca4899?.stop());
  }, "_rf49267386db8f3");
  _re28fc462249108 = n((e) => {
    (this._r9624d2c1d70bed.setData(e),
      (this.userData.petRespectLeft = e.petRespectLeft),
      this.var_493?.update(this._r9624d2c1d70bed),
      this._r526fa0c167a3bf(a.PET_VIEW),
      this._r65a67a0bca4899?.start());
  }, "_re28fc462249108");
  onPetFigureUpdate = n((e) => {
    this.var_493?.updateImage(e.petId, e.image);
  }, "onPetFigureUpdate");
  _r247d255a7626b3 = n((e) => {
    let r = e._r779246794134a5.slice(),
      t = e._r67346f7e899abb.slice();
    if (
      (this._r9624d2c1d70bed.type === class_3447.DOG &&
        !(this._config?.getBoolean("nest.breeding.dog.enabled") ?? !1)) ||
      (this._r9624d2c1d70bed.type === class_3447.CAT &&
        !(this._config?.getBoolean("nest.breeding.cat.enabled") ?? !1)) ||
      (this._r9624d2c1d70bed.type === class_3447.PIG &&
        !(this._config?.getBoolean("nest.breeding.pig.enabled") ?? !1))
    ) {
      let i = r.indexOf(46);
      i !== -1 && r.splice(i, 1);
      let s = t.indexOf(46);
      s !== -1 && t.splice(s, 1);
    }
    this.var_493?._r3420e4f4ce6270(e.id, new CommandConfiguration(r, t));
  }, "_r247d255a7626b3");
  _r75fbaeb8d076c1 = n((e) => {
    this.var_493?._r8597d00b1468ee();
  }, "_r75fbaeb8d076c1");
  _r1da808adf171ac = n((e) => {
    this.var_493?._r6ea595411c34b4();
  }, "_r1da808adf171ac");
  _r040dc82815b6ef = n((e) => {
    if (!(e._r07cbd1ea4ec403 !== RoomObjectPlacementSource.INFO_STAND || !e._r176bfeda3ea21e)) {
      switch (e.category) {
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
          if (!e._rc4f9efa2c236ab) return;
          this.roomControllerLevel?.connection?.send(
            new class_1992(
              a.PLACEMENT_PAGE_ID,
              this.furniData.bcOfferId,
              this.furniData.extraParam,
              e.x,
              e.y,
              e.direction,
            ),
          );
          break;
        case RoomObjectCategoryEnum.const_909:
          if (!e._r8b4764feb43833) return;
          this.roomControllerLevel?.connection?.send(
            new class_1776(
              a.PLACEMENT_PAGE_ID,
              this.furniData.bcOfferId,
              this.furniData.extraParam,
              e._r8a8bd2d04c661f,
            ),
          );
          break;
        default:
          return;
      }
      this._ra1035ec0d95808();
    }
  }, "_r040dc82815b6ef");
  _r4c994f26265fdd = n((e) => {
    let r = new RoomWidgetRoomObjectMessage(RoomWidgetRoomObjectMessage.GET_OBJECT_INFO, e.id, e.category);
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(r);
  }, "_r4c994f26265fdd");
  onRoomObjectRemoved = n((e) => {
    let r = !1;
    switch (e.type) {
      case RoomWidgetRoomObjectUpdateEvent.const_912:
        r = e.id === this.var_86.id;
        break;
      case RoomWidgetRoomObjectUpdateEvent.USER_REMOVED:
        if (this.var_211?.window?.visible) {
          r = e.id === this.var_2346.userRoomId;
          break;
        }
        if (this.var_493?.window?.visible) {
          r = e.id === this._r7982e3490a9f12.roomIndex;
          break;
        }
        if (this._rb0833a58052bc1?.window?.visible) {
          r = e.id === this.var_2346.userRoomId;
          break;
        }
        this.var_1187?.window?.visible && (r = e.id === this._r0b6c6f5456c4ed.userRoomId);
        break;
    }
    r && this.close();
  }, "onRoomObjectRemoved");
  _rfee69fd5672a6e = n((e) => {
    (this.var_1993?.updateSongInfo(e), this.var_1876?.updateSongInfo(e));
  }, "_rfee69fd5672a6e");
  onClose = n((e) => {
    (this.close(), this._r65a67a0bca4899?.stop());
  }, "onClose");
  hideChildren() {
    let e = this.var_283;
    if (e != null)
      for (let r = 0; r < e.numChildren; r++) {
        let t = e.getChildAt(r);
        t != null && (t.visible = !1);
      }
  }
  _r526fa0c167a3bf(e) {
    this.hideChildren();
    let r = this.mainContainer.getChildByName(e);
    r != null &&
      ((r.visible = !0),
      (this.mainContainer.visible = !0),
      (this.mainContainer.width = r.width),
      (this.mainContainer.height = r.height));
  }
  _rb87e77e72ee7aa(e) {
    let r = [];
    for (let t of e ?? [])
      t == null || t._r3d8be6b2a8461a < 0 || (r[t._r3d8be6b2a8461a] = t._rc9fc89e7eb27a7);
    return r;
  }
  _rbe7603592b586c(e, r, t, i, s) {
    return e
      ? this._rc13b697b3d5015(t) && !this._rc13b697b3d5015(s)
        ? !0
        : this._r95b94376ace1ef(r, t, i, s)
      : !1;
  }
  _red582059d0c738(e, r, t, i, s) {
    return e
      ? this._rc13b697b3d5015(t) && !this._rc13b697b3d5015(s)
        ? !1
        : !this._r95b94376ace1ef(r, t, i, s)
      : !0;
  }
  _r95b94376ace1ef(e, r, t, i) {
    let s = this._rc13b697b3d5015(r),
      o = this._rc13b697b3d5015(i);
    return s || o ? s && o && this._r7bd2318befbbee(r, i) : this._r7b9a6d8e5ca7c5(e, t);
  }
  _rc13b697b3d5015(e) {
    return e != null && e.length > 0;
  }
  _r7b9a6d8e5ca7c5(e, r) {
    let t = e ?? [],
      i = r ?? [];
    if (t.length !== i.length) return !1;
    for (let s = 0; s < t.length; s++) if (t[s] !== i[s]) return !1;
    return !0;
  }
  _r7bd2318befbbee(e, r) {
    let t = e ?? [],
      i = r ?? [];
    if (t.length !== i.length) return !1;
    for (let s = 0; s < 5; s++)
      if (!this._rc8599e68e7c404(this._r06f3297b564192(t, s), this._r06f3297b564192(i, s))) return !1;
    return !0;
  }
  _rc8599e68e7c404(e, r) {
    return e === r
      ? !0
      : e == null || r == null
        ? !1
        : e._r3d8be6b2a8461a === r._r3d8be6b2a8461a &&
          e._rc9fc89e7eb27a7 === r._rc9fc89e7eb27a7 &&
          e.ownerCount === r.ownerCount &&
          e.badgeRarityId === r.badgeRarityId;
  }
  _r06f3297b564192(e, r) {
    for (let t of e ?? []) if (t instanceof _i6e70f7261361b5 && t._r3d8be6b2a8461a === r) return t;
    return null;
  }
}

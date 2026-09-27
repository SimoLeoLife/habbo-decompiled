// Extracted from HabboAirLauncher.deobf.js, line 309285.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/AvatarInfoWidget.as
// Obfuscated name: _i753515df76eb47

class a extends RoomWidgetBase {
  constructor(r, t, i, s, o, d, c, f) {
    super(r, t, i, o);
    this._configuration = s;
    this.var_82 = d;
    this._catalog = c;
    this._roomEvents = f;
    (this.handler?.roomEngine?.events?.addEventListener?.(RoomEngineObjectEvent.ADDED, this.onRoomObjectAdded),
      this.handler?.roomEngine?.events?.addEventListener?.(RoomEngineObjectEvent.REMOVED, this.onRoomObjectRemoved),
      this.handler?.container?.inventory?.events?.addEventListener?.(
        HabboInventoryEffectsEvent.const_1391,
        this._re6ec71615ddf8d,
      ),
      this._roomEvents?.events?.addEventListener?.(WiredUserClickHandledEvent.WIRED_USER_CLICK_HANDLED, this._r6cec384483ea30),
      this.handler != null && (this.handler.widget = this));
  }
  static {
    n(this, "AvatarInfoWidget");
  }
  static EFFECT_TYPE_RIDE = 77;
  static EFFECT_TYPE_SHALLOW_WATER = 30;
  static EFFECT_TYPE_DEEP_WATER = 29;
  static const_938 = 185;
  static const_1377 = "use_minimized_own_avatar_menu";
  static AVATAR_HIGHLIGHT_DURATION_MSEC = 5e3;
  static const_272 = "avatar";
  _view = null;
  _r8791096d99335d = null;
  var_217 = !1;
  var_3674 = !1;
  _ra3bcf4f5cb18ad = !0;
  var_5922 = !0;
  var_1493 = !1;
  _r5791110a92a530 = -1;
  _r551f821057a245 = null;
  _r56af2b869b8868 = new class_2698();
  _rb9a09371edf965 = new PetInfoData();
  _radc96473e8bada = null;
  _r7ba8eab461ed07 = null;
  _rd8b3de7ab71171 = null;
  _r9ea0a51ab44aef = null;
  _rc6f7f9127007dc = null;
  _re740110e8bc39a = null;
  var_912 = null;
  var_2206 = null;
  _rbaf1a3e1b66542 = new B();
  _useProductBubbles = new B();
  _breedPetBubbles = new B();
  _red844a766aa4f8 = null;
  _r64ebb9be619545 = null;
  _r3ee1c7b67073b3 = null;
  _r6758df77025d57 = null;
  _ra4faa8597d4f2d = null;
  _breedingConfirmationAlert = null;
  _re6a01db10de793 = -1;
  _ra334604f8c15a9 = -1;
  var_1018 = -1;
  _r80a7efef256323 = null;
  get mainWindow() {
    return this._view?.window ?? null;
  }
  get component() {
    return this.var_82;
  }
  get configuration() {
    return this._configuration;
  }
  get localization() {
    return this.localizations;
  }
  get handler() {
    return this._r16afd202c77c85;
  }
  get catalog() {
    return this._catalog;
  }
  get friendList() {
    return this.handler?.friendList ?? null;
  }
  get isDancing() {
    return this.var_3674;
  }
  set isDancing(r) {
    this.var_3674 = r;
  }
  set _rd55426668eb677(r) {
    this._ra3bcf4f5cb18ad = r;
  }
  get hasClub() {
    return this.handler?.container?.sessionDataManager?.hasClub ?? !1;
  }
  get hasVip() {
    return this.handler?.container?.sessionDataManager?.hasVip ?? !1;
  }
  get _r8077167eb58f3e() {
    return (this.handler?.container?.inventory?._r7c77cb2657369f?.() ?? []).some((t) => t?.isActive === !0);
  }
  get hasFreeSaddle() {
    return this._rb9a09371edf965.hasFreeSaddle;
  }
  get isRiding() {
    return this._rb9a09371edf965.isRiding;
  }
  get _r9815f983fd655c() {
    return (
      (this._rc160b28c4b7201()?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_123) ?? 0) ===
      a.EFFECT_TYPE_RIDE
    );
  }
  get _r90201d57547d7f() {
    return (
      this._rc160b28c4b7201()?.getStringToStringMap()?.getString(RoomObjectVariableEnum.AVATAR_POSTURE) ?? ve.POSTURE_STAND
    );
  }
  get _r42b891fe3c7f17() {
    let r = this._rc160b28c4b7201()?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_123) ?? 0;
    return (
      this._r90201d57547d7f === ve.POSTURE_SWIM ||
      r === a.EFFECT_TYPE_SHALLOW_WATER ||
      r === a.EFFECT_TYPE_DEEP_WATER ||
      r === a.const_938
    );
  }
  get _rcb15f009f08c62() {
    return (this._rc160b28c4b7201()?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_332) ?? 0) !== 0;
  }
  get useMinimizedOwnAvatarMenu() {
    return this.handler?.container?.config?.getBoolean(a.const_1377) ?? !1;
  }
  set useMinimizedOwnAvatarMenu(r) {
    this.handler?.container?.config?.setProperty?.(a.const_1377, r ? "1" : "0");
  }
  get isUserDecorating() {
    return this.handler?._r2eac8239a09fe7?.isUserDecorating ?? !1;
  }
  set isUserDecorating(r) {
    let t = this.handler?._r2eac8239a09fe7;
    if (t != null) {
      if (((t.isUserDecorating = r), r)) {
        let i = this.handler?.container?.sessionDataManager?.userId ?? 0,
          s = this.handler?.container?.sessionDataManager?.userName ?? "",
          o = t.ownUserRoomId;
        (this._r8791096d99335d == null && (this._r8791096d99335d = new DecorateModeView(this, i, s, o)),
          this._r8791096d99335d.show(),
          this._re93178d14e4ffa(this._r8791096d99335d, 0));
      } else this._r8791096d99335d?.hide(!1);
      this.checkUpdateNeed();
    }
  }
  dispose() {
    if (!this.disposed) {
      (this.removeAvatarHighlightTimer(),
        (this._r80a7efef256323 = null),
        (this.var_1018 = -1),
        this._roomEvents?.events?.removeEventListener?.(
          WiredUserClickHandledEvent.WIRED_USER_CLICK_HANDLED,
          this._r6cec384483ea30,
        ),
        (this._roomEvents = null),
        this.handler?.roomEngine?.events?.removeEventListener?.(RoomEngineObjectEvent.ADDED, this.onRoomObjectAdded),
        this.handler?.roomEngine?.events?.removeEventListener?.(RoomEngineObjectEvent.REMOVED, this.onRoomObjectRemoved),
        this.handler?.container?.inventory?.events?.removeEventListener?.(
          HabboInventoryEffectsEvent.const_1391,
          this._re6ec71615ddf8d,
        ),
        this.var_82?.removeUpdateReceiver(this));
      for (let r of this._rbaf1a3e1b66542.getValues()) r.dispose();
      for (let r of this._useProductBubbles.getValues()) r.dispose();
      for (let r of this._breedPetBubbles.getValues()) r.dispose();
      (this._rbaf1a3e1b66542.dispose(),
        this._useProductBubbles.dispose(),
        this._breedPetBubbles.dispose(),
        this._view?.dispose(),
        this._r8791096d99335d?.dispose(),
        this._r7ba8eab461ed07?.dispose(),
        this._rd8b3de7ab71171?.dispose(),
        this._r9ea0a51ab44aef?.dispose(),
        this._rc6f7f9127007dc?.dispose(),
        this._re740110e8bc39a?.dispose(),
        this.var_912?.dispose(),
        this.var_2206?.dispose(),
        this._red844a766aa4f8?.dispose(),
        this._r64ebb9be619545?.dispose(),
        this._r3ee1c7b67073b3?.dispose(),
        this._r6758df77025d57?.dispose(),
        this._ra4faa8597d4f2d?.dispose(),
        this._breedingConfirmationAlert?.dispose(),
        (this.var_82 = null),
        (this._catalog = null),
        (this._roomEvents = null),
        (this._configuration = null),
        super.dispose());
    }
  }
  registerUpdateEvents(r) {
    (super.registerUpdateEvents(r),
      r?.addEventListener?.(Jp.OPEN, this._rbbdd54ff516d19),
      r?.addEventListener?.(em.SKILL_LIST, this._rbbdd54ff516d19),
      r?.addEventListener?.(Ou.RENTABLE_BOT, this._rbbdd54ff516d19),
      r?.addEventListener?.(Qp.AVATAR_INFO, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetUserInfoUpdateEvent.OWN_USER, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetUserInfoUpdateEvent.PEER, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_1209, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetUserInfoUpdateEvent.BOT, this._rbbdd54ff516d19),
      r?.addEventListener?.(Nu.PET_INFO, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_739, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetFurniInfoUpdateEvent.FURNI, this._rbbdd54ff516d19),
      r?.addEventListener?.(om.USER_DATA_UPDATED, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_REMOVED, this._rbbdd54ff516d19),
      r?.addEventListener?.(rm.OBJECT_NAME, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.OBJECT_ROLL_OVER, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_298, this._rbbdd54ff516d19),
      r?.addEventListener?.(qp.PET_STATUS_UPDATE, this._rbbdd54ff516d19),
      r?.addEventListener?.(Zp.PET_LEVEL_UPDATE, this._rbbdd54ff516d19),
      r?.addEventListener?.(g0.PET_BREEDING, this._rbbdd54ff516d19),
      r?.addEventListener?.($p.PET_BREEDING_RESULT, this._rbbdd54ff516d19),
      r?.addEventListener?.(RoomWidgetInventoryUpdatedMessage.INVENTORY_UPDATED, this._rbbdd54ff516d19),
      r?.addEventListener?.(Xp.CONFIRM_PET_BREEDING, this._rbbdd54ff516d19),
      r?.addEventListener?.(u0.CONFIRM_PET_BREEDING_RESULT, this._rbbdd54ff516d19));
  }
  unregisterUpdateEvents(r) {
    (r?.removeEventListener?.(Jp.OPEN, this._rbbdd54ff516d19),
      r?.removeEventListener?.(em.SKILL_LIST, this._rbbdd54ff516d19),
      r?.removeEventListener?.(Ou.RENTABLE_BOT, this._rbbdd54ff516d19),
      r?.removeEventListener?.(Qp.AVATAR_INFO, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.OWN_USER, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.PEER, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_1209, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.BOT, this._rbbdd54ff516d19),
      r?.removeEventListener?.(Nu.PET_INFO, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_739, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetFurniInfoUpdateEvent.FURNI, this._rbbdd54ff516d19),
      r?.removeEventListener?.(om.USER_DATA_UPDATED, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_REMOVED, this._rbbdd54ff516d19),
      r?.removeEventListener?.(rm.OBJECT_NAME, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.OBJECT_ROLL_OVER, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_298, this._rbbdd54ff516d19),
      r?.removeEventListener?.(qp.PET_STATUS_UPDATE, this._rbbdd54ff516d19),
      r?.removeEventListener?.(Zp.PET_LEVEL_UPDATE, this._rbbdd54ff516d19),
      r?.removeEventListener?.(g0.PET_BREEDING, this._rbbdd54ff516d19),
      r?.removeEventListener?.($p.PET_BREEDING_RESULT, this._rbbdd54ff516d19),
      r?.removeEventListener?.(RoomWidgetInventoryUpdatedMessage.INVENTORY_UPDATED, this._rbbdd54ff516d19),
      r?.removeEventListener?.(Xp.CONFIRM_PET_BREEDING, this._rbbdd54ff516d19),
      r?.removeEventListener?.(u0.CONFIRM_PET_BREEDING_RESULT, this._rbbdd54ff516d19));
  }
  _rbbdd54ff516d19 = n((r) => {
    switch (r.type) {
      case Qp.AVATAR_INFO: {
        let t = r;
        ((this.var_1493 =
          !this.var_217 &&
          this.handler?.container?._r2eac8239a09fe7 != null &&
          t.roomIndex === this.handler.container._r2eac8239a09fe7.ownUserRoomId),
          t.allowNameChange
            ? ((this.useMinimizedOwnAvatarMenu = !0), this._r5b964ce180bb09())
            : this.updateUserView(
                t.userId,
                t.userName,
                t.userType,
                t.roomIndex,
                t.allowNameChange,
                null,
              ),
          (this.var_217 = !0));
        break;
      }
      case RoomWidgetUserInfoUpdateEvent.OWN_USER:
      case RoomWidgetUserInfoUpdateEvent.PEER: {
        let t = r;
        (this._r56af2b869b8868.populate(t),
          this.updateUserView(
            t.webID,
            t.name,
            t.userType,
            t.userRoomId,
            this._r56af2b869b8868.allowNameChange,
            t._r53892118edc559 ? null : this._r56af2b869b8868,
          ));
        break;
      }
      case RoomWidgetUserInfoUpdateEvent.BOT: {
        let t = r;
        this.updateUserView(t.webID, t.name, t.userType, t.userRoomId, !1, null);
        break;
      }
      case Ou.RENTABLE_BOT: {
        let t = r;
        (this._radc96473e8bada == null && (this._radc96473e8bada = new class_2504()),
          this._radc96473e8bada.populate(t),
          this.updateRentableBotView(t.webID, t.name, t.userRoomId, this._radc96473e8bada));
        break;
      }
      case em.SKILL_LIST: {
        let t = r;
        this._radc96473e8bada != null &&
          this._radc96473e8bada.id === t.botId &&
          (this._radc96473e8bada.cloneAndSetSkillsWithCommands(t._r4477d7dca92621),
          this.updateRentableBotView(
            this._radc96473e8bada.id,
            this._radc96473e8bada.name,
            this._radc96473e8bada.roomIndex,
            this._radc96473e8bada,
            !0,
          ));
        break;
      }
      case Jp.OPEN: {
        let t = r;
        this._radc96473e8bada != null &&
          this._radc96473e8bada.id === t.botId &&
          this.updateRentableBotView(
            this._radc96473e8bada.id,
            this._radc96473e8bada.name,
            this._radc96473e8bada.roomIndex,
            this._radc96473e8bada,
            !1,
            !0,
          );
        break;
      }
      case Nu.PET_INFO: {
        if (!this._ra3bcf4f5cb18ad) break;
        let t = r;
        (this._rb9a09371edf965.populate(t),
          this._r786b9779dc7442(t.id, t.name, t.roomIndex, this._rb9a09371edf965));
        break;
      }
      case RoomWidgetRoomObjectUpdateEvent.const_1209:
        (r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && (this._ra3bcf4f5cb18ad = !0), this._r1f9f727e22e57a());
        break;
      case qp.PET_STATUS_UPDATE: {
        let t = r;
        (this._view instanceof L0 &&
          this._rb9a09371edf965.id === t.petId &&
          this.removeView(this._view, !0),
          this._rb8c5d98fe7f79c(t.petId));
        break;
      }
      case Zp.PET_LEVEL_UPDATE: {
        let t = r;
        (this._view instanceof L0 &&
          this._rb9a09371edf965.id === t.petId &&
          this.removeView(this._view, !0),
          this._rb8c5d98fe7f79c(t.petId));
        break;
      }
      case rm.OBJECT_NAME: {
        let t = r;
        t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER &&
          this.updateUserView(t.userId, t.userName, t.userType, t.roomIndex, !1, null);
        break;
      }
      case RoomWidgetRoomObjectUpdateEvent.const_739:
        r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && this._r6758df77025d57?._r56dbff2aacf496(r.id);
        break;
      case RoomWidgetFurniInfoUpdateEvent.FURNI:
        (this._view != null && this.removeView(this._view, !1),
          this.removeUseProductViews(),
          this._r1f9f727e22e57a());
        break;
      case RoomWidgetRoomObjectUpdateEvent.OBJECT_ROLL_OVER:
        if (this.var_1493) {
          this._r5791110a92a530 = r.id;
          break;
        }
        if (!(
          this._view instanceof dh ||
          this._view instanceof D0 ||
          this._view instanceof L0 ||
          this._view instanceof NewUserHelpView ||
          this._view instanceof RentableBotMenuView
        )) {
          let t = r;
          (this._view != null &&
            !this._view.allowNameChange &&
            t.id !== this._view.roomIndex &&
            this.removeView(this._view, !1),
            (this._r5791110a92a530 = t.id),
            this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRoomObjectMessage(RoomWidgetRoomObjectMessage.GET_OBJECT_NAME, t.id, t.category)));
        }
        break;
      case RoomWidgetRoomObjectUpdateEvent.const_298:
        if (this.var_1493) {
          r.id === this._r5791110a92a530 && (this._r5791110a92a530 = -1);
          break;
        }
        this._view instanceof dh ||
          this._view instanceof D0 ||
          this._view instanceof L0 ||
          this._view instanceof NewUserHelpView ||
          this._view instanceof RentableBotMenuView ||
          (r.id === this._r5791110a92a530 &&
            this._view != null &&
            !this._view.allowNameChange &&
            (this.removeView(this._view, !1), (this._r5791110a92a530 = -1)));
        break;
      case RoomWidgetRoomObjectUpdateEvent.const_734:
        (this._view != null && !(this._view instanceof NewUserHelpView) && this.removeView(this._view, !1),
          this.removeUseProductViews(),
          this._r1f9f727e22e57a());
        break;
      case RoomWidgetRoomObjectUpdateEvent.USER_REMOVED:
        this._view != null && this._view.roomIndex === r.id && this.removeView(this._view, !1);
        for (let t of this._rbaf1a3e1b66542.getValues())
          if (t.objectId === r.id) {
            this.removeView(t, !1);
            break;
          }
        this._rb8c5d98fe7f79c(r.id);
        break;
      case om.USER_DATA_UPDATED:
        this.var_217 || this._r4c641f1cb905f9();
        break;
      case g0.PET_BREEDING: {
        let t = r,
          i = this._rbff740b1ccc6ee(t._rb2023938cee132),
          s = this._rbff740b1ccc6ee(t._ra37180683cadb3);
        switch (t.state) {
          case g0.const_1056:
            this._r6e242f769fcd82(i, s, !1);
            break;
          case g0.const_942:
            this.cancelBreedingPets(i, s);
            break;
          case g0.TYPE_ACCEPT:
            this._r2ee263794941e4(i, s);
            break;
          case g0.TYPE_REQUEST:
            this._r6e242f769fcd82(i, s, !0);
            break;
        }
        break;
      }
      case Xp.CONFIRM_PET_BREEDING: {
        let t = r;
        this._r6f059b723dc217(t.pet1, t.pet2, t._reb3874e706dbb7, t._r8e1bcb37bcabfb, t._r182cdc80056896);
        break;
      }
      case u0.CONFIRM_PET_BREEDING_RESULT:
        switch (r.result) {
          case u0.SUCCESS:
            this._rc0914ee652f8ef();
            break;
          case u0.INVALID_NAME:
            (this.windowManager?._r3651220a1507f2(
              "${breedpets.confirmation.alert.title}",
              "${breedpets.confirmation.alert.name.invalid.head}",
              "${breedpets.confirmation.alert.name.invalid.desc}",
            ),
              this._r3ee1c7b67073b3?.enable());
            break;
          case u0.NO_NEST_FOUND:
            (this.windowManager?._r3651220a1507f2(
              "${breedpets.confirmation.alert.title}",
              "${breedpets.confirmation.alert.nonest.head}",
              "${breedpets.confirmation.alert.nonest.desc}",
            ),
              this._rc0914ee652f8ef());
            break;
          case u0.PETS_MISSING:
            (this.windowManager?._r3651220a1507f2(
              "${breedpets.confirmation.alert.title}",
              "${breedpets.confirmation.alert.petsmissing.head}",
              "${breedpets.confirmation.alert.petsmissing.desc}",
            ),
              this._rc0914ee652f8ef());
            break;
        }
        break;
      case RoomWidgetInventoryUpdatedMessage.INVENTORY_UPDATED:
        this._r6758df77025d57?._r061fada5f3fd3c();
        break;
      case $p.PET_BREEDING_RESULT: {
        let t = r,
          i = new UnkClass_4749d1();
        i.populate(t.resultData);
        let s = new UnkClass_4749d1();
        (s.populate(t.resultData2), this._r04b35900605938(i, s));
        break;
      }
    }
    this.checkUpdateNeed();
  }, "_rbbdd54ff516d19");
  close() {
    this.removeView(this._view, !1);
  }
  removeView(r, t) {
    r != null &&
      ((this.var_1493 = !1),
      this.removeAvatarHighlightTimer(),
      this.var_5922 ? r.hide(t) : r.dispose(),
      r === this._view && (this._view = null),
      r instanceof yg
        ? (this._rbaf1a3e1b66542.remove(r.userName), r.dispose())
        : r instanceof wX
          ? (this._useProductBubbles.remove(String(r.userId)), r.dispose())
          : r instanceof gX && (this._breedPetBubbles.remove(String(r.userId)), r.dispose()),
      this.checkUpdateNeed());
  }
  update(r) {
    (this._re93178d14e4ffa(this._view, r),
      this._r8791096d99335d?.isVisible() && this._re93178d14e4ffa(this._r8791096d99335d, r));
    for (let t of this._rbaf1a3e1b66542.getValues()) this._re93178d14e4ffa(t, r, t._r8dee1accb03a98);
    for (let t of this._useProductBubbles.getValues()) this._re93178d14e4ffa(t, r);
    for (let t of this._breedPetBubbles.getValues()) this._re93178d14e4ffa(t, r);
  }
  openTrainingView() {
    this.handler?.container?.events?.dispatchEvent?.(new RoomWidgetUpdateEvent("RWPCUE_OPEN_PET_TRAINING"));
  }
  closeTrainingView() {
    this.handler?.container?.events?.dispatchEvent?.(new RoomWidgetUpdateEvent("RWPCUE_CLOSE_PET_TRAINING"));
  }
  _r1324d016b68582() {
    (this.handler?.container?.avatarEditor?._rdaf967f79ea08a(UnkConstants_c72396._r4a110ddb22fcf1, null, null, !0),
      this.handler?.container?.avatarEditor?._rb825ef6be7b35c(UnkConstants_c72396._r4a110ddb22fcf1));
  }
  _r5d9a76e135764b(r, t, i) {
    this._view instanceof RentableBotMenuView && this._view._r5d9a76e135764b(r, t, i);
  }
  lastIndexOf(r) {
    this.handler?.container?._r2eac8239a09fe7?._r59b7b374d3ce71(r);
  }
  _r49741f7e39d185() {
    return this._rb9a09371edf965.petType === class_3447.MONSTERPLANT;
  }
  _r5b964ce180bb09() {
    let r = this.handler?.container?.sessionDataManager?.userId ?? -1,
      t = r >= 0 ? (this.handler?._r2eac8239a09fe7?.getUserDataByIndex._r1cacdcfc23a2de(r) ?? null) : null;
    t != null &&
      this.handler?.container?.RoomWidgetLetUserInMessage(
        new RoomWidgetRoomObjectMessage(RoomWidgetRoomObjectMessage.const_1117, t._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER),
      );
  }
  _r4c641f1cb905f9() {
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRoomObjectMessage(RoomWidgetRoomObjectMessage.GET_OWN_CHARACTER_INFO, 0, 0));
  }
  _r0172c4a9008c39(r) {
    (this.removeUseProductViews(), this._r3889c45a385bdd(), this._r43195fc0bccbfa());
    for (let t of r) {
      let i = this.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t.id) ?? null;
      i != null && this._rb81a50069df69c(i, t);
    }
  }
  _r2d9aeebdbb9e9e(r) {
    (this._r1f9f727e22e57a(), this._r3889c45a385bdd(), this._r43195fc0bccbfa());
    for (let t of r) {
      let i = this.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t.id) ?? null;
      i != null && this._r9bed5dc650c38d(i, t);
    }
  }
  removeUseProductViews() {
    for (let r of this._useProductBubbles.getValues()) r.dispose();
    (this._useProductBubbles.reset(), this.checkUpdateNeed());
  }
  _r1f9f727e22e57a() {
    for (let r of this._breedPetBubbles.getValues()) r.dispose();
    (this._breedPetBubbles.reset(), this.checkUpdateNeed());
  }
  _rb659bfb831cc90(r, t) {
    if (!this._rbaf1a3e1b66542.hasKey(r.name)) {
      let i = new yg(this);
      (yg.setup(
        i,
        r.webID,
        r.name,
        -1,
        RoomObjectTypeEnum.OBJECT_TYPE_USER,
        t,
        yg.DEFAULT_BG_COLOR,
        yg.DEFAULT_FADE_DELAY_MS,
        r.isBlocked,
      ),
        this._rbaf1a3e1b66542.add(r.name, i),
        this.checkUpdateNeed());
    }
  }
  _r6f9655765d8c38(r, t, i) {
    (this._red844a766aa4f8 == null && (this._red844a766aa4f8 = new RIe(this)),
      this._red844a766aa4f8.open(r, t, i));
  }
  showBreedingPetsWaitingConfirmationAlert(r, t) {
    (this.removeBreedingPetsWaitingConfirmationAlert(),
      (this._breedingConfirmationAlert =
        this.windowManager?.confirm(
          "${breedpets.confirmation.notification.title}",
          "${breedpets.confirmation.notification.text}",
          0,
          this._rc820585eff1430,
        ) ?? null),
      (this._re6a01db10de793 = r),
      (this._ra334604f8c15a9 = t));
  }
  _r6e242f769fcd82(r, t, i) {
    (this._r64ebb9be619545 == null && (this._r64ebb9be619545 = new MIe(this)),
      this._r64ebb9be619545.open(r, t, i));
  }
  _r6f059b723dc217(r, t, i, s, o) {
    (this._r3ee1c7b67073b3 == null && (this._r3ee1c7b67073b3 = new BIe(this)),
      this._r3ee1c7b67073b3.open(
        this._rbff740b1ccc6ee(r.webId),
        this._rbff740b1ccc6ee(t.webId),
        i,
        s,
        o,
        r.level,
        t.level,
      ));
  }
  _rebc4fa7f4414a5(r) {
    this.handler?.container?.connection?.send(new UnkMessageComposer_1args_408b01(r));
  }
  _r9bcce1ef12e316(r, t, i, s) {
    this.handler?.container?.connection?.send(new UnkMessageComposer_4args_67b371(r, t, i, s));
  }
  _r04b35900605938(r, t) {
    (this._r6758df77025d57 == null && (this._r6758df77025d57 = new WIe(this)),
      this._r6758df77025d57.open(r, t));
  }
  _rae2dc700322ef7(r) {
    r === this._r6758df77025d57 && (r.dispose(), (this._r6758df77025d57 = null));
  }
  _r0296becf03c7cd(r, t) {
    (this._ra4faa8597d4f2d == null && (this._ra4faa8597d4f2d = new kIe(this)),
      this._ra4faa8597d4f2d.open(this._rbff740b1ccc6ee(r), t));
  }
  _r10d42dea158da9(r, t, i, s) {
    this._view != null &&
      this._view.roomIndex === r &&
      this.updateUserView(
        this._view.userId,
        this._view.userName,
        this._view.userType,
        r,
        this._view.allowNameChange,
        this._r56af2b869b8868,
      );
  }
  _rb0baadd15ced86(r, t) {
    this._view != null &&
      this._view.userId === r &&
      this.updateUserView(
        this._view.userId,
        this._view.userName,
        this._view.userType,
        this._view.roomIndex,
        this._view.allowNameChange,
        this._r56af2b869b8868,
      );
  }
  updateUserData(r, t, i, s, o) {
    this._view != null &&
      this._view.userId === r &&
      this.updateUserView(
        this._view.userId,
        this._view.userName,
        this._view.userType,
        this._view.roomIndex,
        this._view.allowNameChange,
        this._r56af2b869b8868,
      );
  }
  _r2ee263794941e4(r, t) {
    this._rdb9912a6ee3697(r, t);
  }
  cancelBreedingPets(r, t) {
    (this._rdb9912a6ee3697(r, t),
      this.removeBreedingPetsWaitingConfirmationAlert(),
      this.windowManager?.alert(
        "${breedpets.cancel.notification.title}",
        "${breedpets.cancel.notification.text}",
        0,
        this._r1e361785ff47c7,
      ));
    let i = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null,
      s = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t) ?? null;
    i != null &&
      s != null &&
      this.handler?.container?.connection?.send(
        new UnkMessageComposer_3args_857159(UnkMessageComposer_3args_857159._r7bf38ef8bfda68, i.webID, s.webID),
      );
  }
  _r50cc5fa40e6d84(r, t) {
    let i = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null,
      s = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t) ?? null;
    i != null &&
      s != null &&
      this.handler?.container?.connection?.send(
        new UnkMessageComposer_3args_857159(UnkMessageComposer_3args_857159._r06de8e1f8203ee, i.webID, s.webID),
      );
  }
  _r4e102a484ef85d(r, t) {
    let i = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null,
      s = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t) ?? null;
    i != null &&
      s != null &&
      this.handler?.container?.connection?.send(
        new UnkMessageComposer_3args_857159(UnkMessageComposer_3args_857159._r7bf38ef8bfda68, i.webID, s.webID),
      );
  }
  _r55a9ce9b4d014d(r, t) {
    let i = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(r) ?? null,
      s = this.handler?.container?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t) ?? null;
    i != null &&
      s != null &&
      this.handler?.container?.connection?.send(
        new UnkMessageComposer_3args_857159(UnkMessageComposer_3args_857159._rbb0e38da69244d, i.webID, s.webID),
      );
  }
  updateUserView(r, t, i, s, o, d) {
    let c = d != null;
    if (
      (c &&
        this._view != null &&
        !(
          this._view instanceof dh ||
          this._view instanceof D0 ||
          this._view instanceof wg ||
          this._view instanceof L0 ||
          this._view instanceof RentableBotMenuView
        ) &&
        this.removeView(this._view, !1),
      this.removeUseProductViews(),
      this._view == null ||
        this._view.userId !== r ||
        this._view.userName !== t ||
        this._view.roomIndex !== s ||
        this._view.userType !== RoomObjectTypeEnum.OBJECT_TYPE_USER ||
        o)
    ) {
      if ((this._view != null && this.removeView(this._view, !1), !this._r880a2521997aa0())) {
        if (c) {
          if (((this.var_1018 = s), (this._r80a7efef256323 = null), d.isOwnUser)) {
            if (this.isUserDecorating) return;
            Jn.isRunning()
              ? (this.var_2206 == null && (this.var_2206 = new NewUserHelpView(this)),
                (this._r80a7efef256323 = () => {
                  this.var_2206 != null &&
                    ((this._view = this.var_2206),
                    NewUserHelpView.setup(this.var_2206, r, t, s, RoomObjectTypeEnum.OBJECT_TYPE_USER));
                }))
              : (this._rd8b3de7ab71171 == null && (this._rd8b3de7ab71171 = new D0(this)),
                (this._r80a7efef256323 = () => {
                  this._rd8b3de7ab71171 == null ||
                    d == null ||
                    ((this._view = this._rd8b3de7ab71171),
                    D0.setup(this._rd8b3de7ab71171, r, t, s, RoomObjectTypeEnum.OBJECT_TYPE_USER, d));
                }));
          } else {
            (this._r9ea0a51ab44aef == null && (this._r9ea0a51ab44aef = new dh(this)),
              (this._r80a7efef256323 = () => {
                this._r9ea0a51ab44aef == null ||
                  d == null ||
                  ((this._view = this._r9ea0a51ab44aef), dh.setup(this._r9ea0a51ab44aef, r, t, s, i, d));
              }));
            for (let f of this._rbaf1a3e1b66542.getValues())
              if (f.userId === r) {
                this.removeView(f, !1);
                break;
              }
          }
          this._ref73f45f52fde7(s);
        } else if (!this.handler?.roomEngine?._r67c88eecaceaf0) {
          (this._r7ba8eab461ed07 == null && (this._r7ba8eab461ed07 = new AvatarContextInfoButtonView(this)),
            (this._view = this._r7ba8eab461ed07));
          let f = this.handler?.container?.sessionDataManager?.isBlocked(r) ?? !1;
          (this.handler?.container?.sessionDataManager?.userId ?? -1) === r
            ? (AvatarContextInfoButtonView.setup(this._view, r, t, s, i, o, !1, f),
              this.var_1493 &&
                (this.windowManager?._rfbca05ed7fc2ff(a.const_272, this._view.window),
                this.windowManager?.showHint(a.const_272),
                (this.handler?.container?.sessionDataManager?.isNoob ?? !1) || this._r74d0514c1c17de()))
            : AvatarContextInfoButtonView.setup(this._view, r, t, s, i, o, !0, f);
        }
      }
    } else
      (this._view instanceof dh || this._view instanceof D0) &&
        this._view.userName === t &&
        this.removeView(this._view, !1);
  }
  _ref73f45f52fde7(r) {
    this._roomEvents?._ra685de879d48b0?.() || this._r020242122fe023(r);
  }
  _r020242122fe023(r) {
    this.var_1018 === r &&
      this._r80a7efef256323 != null &&
      (this._r80a7efef256323(), (this.var_1018 = -1), (this._r80a7efef256323 = null));
  }
  _r880a2521997aa0() {
    return this.handler?.roomEngine?._rd49f15461de8be() ?? !1;
  }
  _r786b9779dc7442(r, t, i, s) {
    (this._view != null &&
      !(
        this._view instanceof dh ||
        this._view instanceof D0 ||
        this._view instanceof wg ||
        this._view instanceof L0 ||
        this._view instanceof RentableBotMenuView
      ) &&
      this.removeView(this._view, !1),
      this.removeUseProductViews(),
      !(
        this._view != null &&
        this._view.userId === r &&
        this._view.userName === t &&
        this._view.roomIndex === i &&
        this._view.userType === RoomObjectTypeEnum.OBJECT_TYPE_PET
      ) &&
        (this._view != null && this.removeView(this._view, !1),
        !this._r880a2521997aa0() &&
          (s.isOwnPet
            ? (this._re740110e8bc39a == null && (this._re740110e8bc39a = new L0(this)),
              (this._view = this._re740110e8bc39a),
              L0.setup(this._re740110e8bc39a, r, t, i, RoomObjectTypeEnum.OBJECT_TYPE_PET, s))
            : (this.var_912 == null && (this.var_912 = new wg(this)),
              (this._view = this.var_912),
              wg.setup(this.var_912, r, t, i, RoomObjectTypeEnum.OBJECT_TYPE_PET, s)),
          this.checkUpdateNeed())));
  }
  updateRentableBotView(r, t, i, s, o = !1, d = !1) {
    if (!(this._configuration?.getBoolean("menu.bot.enabled") ?? !1)) return;
    (this._view != null &&
      !(
        this._view instanceof dh ||
        this._view instanceof D0 ||
        this._view instanceof wg ||
        this._view instanceof L0 ||
        this._view instanceof RentableBotMenuView
      ) &&
      this.removeView(this._view, !1),
      this.removeUseProductViews());
    let f = o && this._view == null && !d;
    (d ||
      this._view == null ||
      this._view.userId !== r ||
      this._view.userName !== t ||
      this._view.roomIndex !== i ||
      this._view.userType !== RoomObjectTypeEnum.const_965) &&
      (this._view != null && this.removeView(this._view, !1),
      !this._r880a2521997aa0() &&
        !f &&
        (this._rc6f7f9127007dc == null && (this._rc6f7f9127007dc = new RentableBotMenuView(this)),
        (this._view = this._rc6f7f9127007dc),
        RentableBotMenuView.setup(this._rc6f7f9127007dc, r, t, i, RoomObjectTypeEnum.const_965, s),
        this.checkUpdateNeed()));
  }
  _rb81a50069df69c(r, t) {
    let i = r.webID.toString();
    if (!this._useProductBubbles.hasKey(i)) {
      let s = new wX(this);
      (wX.setup(s, r.webID, r.name, -1, RoomObjectTypeEnum.OBJECT_TYPE_PET, t),
        this._useProductBubbles.add(i, s),
        this.checkUpdateNeed());
    }
  }
  _r9bed5dc650c38d(r, t) {
    let i = r.webID.toString();
    if (!this._breedPetBubbles.hasKey(i)) {
      let s = new gX(this);
      (gX.setup(s, r.webID, r.name, -1, RoomObjectTypeEnum.OBJECT_TYPE_PET, t, r.canBreed),
        this._breedPetBubbles.add(i, s),
        this.checkUpdateNeed());
    }
  }
  _r3889c45a385bdd() {
    (this._red844a766aa4f8?.dispose(), (this._red844a766aa4f8 = null));
  }
  _r43195fc0bccbfa() {
    (this._r64ebb9be619545?.dispose(), (this._r64ebb9be619545 = null));
  }
  _rc0914ee652f8ef() {
    (this._r3ee1c7b67073b3?.dispose(), (this._r3ee1c7b67073b3 = null));
  }
  removeBreedingPetsWaitingConfirmationAlert() {
    (this._breedingConfirmationAlert?.dispose(),
      (this._breedingConfirmationAlert = null),
      (this._re6a01db10de793 = -1),
      (this._ra334604f8c15a9 = -1));
  }
  _rdb9912a6ee3697(r, t) {
    this._r64ebb9be619545 != null &&
      this._r64ebb9be619545.requestRoomObjectId === r &&
      this._r64ebb9be619545.targetRoomObjectId === t &&
      this._r43195fc0bccbfa();
  }
  _rb8c5d98fe7f79c(r) {
    let t = [];
    for (let i of this._breedPetBubbles.getValues())
      (i.objectId === r || i.requestRoomObjectId === r) && t.push(i);
    for (let i of t) this.removeView(i, !1);
  }
  checkUpdateNeed() {
    this.var_82 != null &&
      (this._view != null ||
      this._rbaf1a3e1b66542.length > 0 ||
      this._useProductBubbles.length > 0 ||
      this._breedPetBubbles.length > 0 ||
      this._r8791096d99335d?.window?.visible === !0
        ? this.var_82.registerUpdateReceiver(this, 10)
        : this.var_82.removeUpdateReceiver(this));
  }
  _re93178d14e4ffa(r, t, i = !1) {
    if (r == null || r.disposed) return;
    let s = r,
      o = i ? RoomWidgetGetObjectLocationMessage.const_1052 : RoomWidgetGetObjectLocationMessage.const_284,
      d = this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetGetObjectLocationMessage(o, s.userId, s.userType));
    d != null && r.update(d.rectangle, d._r2b48a29bd98b0a, t);
  }
  _rbff740b1ccc6ee(r) {
    let t = this.handler?.roomEngine?.activeRoomId ?? this.handler?._r2eac8239a09fe7?.roomId ?? 0,
      i = this.handler?.roomEngine?.getRoomObjectCount(t, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? 0;
    for (let s = 0; s < i; s++) {
      let o = this.handler?.roomEngine?.getRoomObjectWithIndex(t, s, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null,
        d =
          o != null
            ? (this.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(o.getId()) ??
              null)
            : null;
      if (o != null && d != null && d.type === RoomObjectTypeEnum.OBJECT_TYPE_PET && d.webID === r)
        return o.getId();
    }
    return -1;
  }
  _rc160b28c4b7201() {
    let r = this.handler?.container?.sessionDataManager?.userId ?? -1,
      t = this.handler?.roomEngine?.activeRoomId ?? this.handler?._r2eac8239a09fe7?.roomId ?? 0,
      i = this.handler?.roomEngine?.getRoomObjectCount(t, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? 0;
    for (let s = 0; s < i; s++) {
      let o = this.handler?.roomEngine?.getRoomObjectWithIndex(t, s, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null,
        d =
          o != null
            ? (this.handler?._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(o.getId()) ??
              null)
            : null;
      if (d != null && d.webID === r) return o;
    }
    return null;
  }
  _re6ec71615ddf8d = n(() => {
    this._view instanceof D0 && this._view.updateButtons();
  }, "_re6ec71615ddf8d");
  onRoomObjectAdded = n((r) => {
    if (r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && this.handler?._r2eac8239a09fe7 != null) {
      let t = this.handler._r2eac8239a09fe7.getUserDataByIndex.userDataManager(r.objectId);
      t != null &&
        (this.friendList?._rab99fafd046469().indexOf(t.name) ?? -1) > -1 &&
        this._rb659bfb831cc90(t, r.objectId);
    }
  }, "onRoomObjectAdded");
  onRoomObjectRemoved = n((r) => {
    if (r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) {
      for (let t of this._rbaf1a3e1b66542.getValues().filter((i) => i.objectId === r.objectId))
        this.removeView(t, !1);
      (this._rb8c5d98fe7f79c(r.objectId),
        this._r64ebb9be619545 != null &&
          (r.objectId === this._r64ebb9be619545.requestRoomObjectId ||
            r.objectId === this._r64ebb9be619545.targetRoomObjectId) &&
          this._r43195fc0bccbfa(),
        this._r3ee1c7b67073b3 != null &&
          (r.objectId === this._r3ee1c7b67073b3.requestRoomObjectId ||
            r.objectId === this._r3ee1c7b67073b3.targetRoomObjectId) &&
          this._rc0914ee652f8ef(),
        this._red844a766aa4f8 != null &&
          (r.objectId === this._red844a766aa4f8._r7891a81652af2d ||
            r.objectId === this._red844a766aa4f8.targetRoomObjectId) &&
          this._r3889c45a385bdd());
    }
    if (r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) {
      (this._red844a766aa4f8 != null &&
        this._red844a766aa4f8._r7891a81652af2d === r.objectId &&
        this._r3889c45a385bdd(),
        this._r6758df77025d57?._rc9003fbab6f83f(r.objectId));
      for (let t of this._useProductBubbles.getValues().filter((i) => i.requestRoomObjectId === r.objectId))
        this.removeView(t, !1);
    }
  }, "onRoomObjectRemoved");
  _r6cec384483ea30 = n((r) => {
    this.disposed ||
      !r.openMenu ||
      this._r80a7efef256323 == null ||
      (this._r020242122fe023(r.index), this.checkUpdateNeed());
  }, "_r6cec384483ea30");
  _rc820585eff1430 = n((r, t) => {
    (t.type === y.const_204 &&
      this._ra334604f8c15a9 !== -1 &&
      this._ra334604f8c15a9 !== -1 &&
      this._r4e102a484ef85d(this._re6a01db10de793, this._ra334604f8c15a9),
      r.dispose(),
      this.removeBreedingPetsWaitingConfirmationAlert());
  }, "_rc820585eff1430");
  _r1e361785ff47c7 = n((r, t) => {
    (t.type === y.const_1300 || t.type === y.const_204) && r.dispose();
  }, "_r1e361785ff47c7");
  _r74d0514c1c17de() {
    (this._r551f821057a245?.stop(),
      (this._r551f821057a245 = new UnkEventDispatcherWrapperSubclass_05394e(a.AVATAR_HIGHLIGHT_DURATION_MSEC, 1)),
      this._r551f821057a245.addEventListener(DeBouncer.addEventListener, this._rfbd72fbb7ca9ca),
      this._r551f821057a245.start());
  }
  removeAvatarHighlightTimer() {
    ((this.var_1493 = !1),
      this.windowManager?._r045e21fe03f5a1(a.const_272),
      this._r551f821057a245 != null && (this._r551f821057a245.stop(), (this._r551f821057a245 = null)));
  }
  _rfbd72fbb7ca9ca = n((r) => {
    if (
      this._view != null &&
      (this.handler?.container?.sessionDataManager?.userId ?? -1) === this._view.userId &&
      !this._view.allowNameChange &&
      this._r5791110a92a530 !== this._view.roomIndex
    ) {
      this.removeView(this._view, !1);
      return;
    }
    this.removeAvatarHighlightTimer();
  }, "_rfbd72fbb7ca9ca");
}

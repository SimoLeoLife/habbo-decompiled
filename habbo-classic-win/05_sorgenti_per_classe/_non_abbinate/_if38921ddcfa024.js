// Estratto da HabboAirLauncher.deobf.js, riga 331198.

class {
  static {
    n(this, "_if38921ddcfa024");
  }
  var_1271 = !1;
  _container = null;
  _r510717bf720713 = new Map();
  _r8976fb174e3935;
  var_17 = null;
  _r96626810ed957b = null;
  _r3a822fc700b68d = null;
  constructor(e) {
    ((this._r8976fb174e3935 = e),
      this._r8976fb174e3935?.events.addEventListener?.(NowPlayingEvent.NOW_PLAYING_SONG_CHANGED, this._r8ea3cefb0641f7),
      this._r8976fb174e3935?.events.addEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent));
  }
  set widget(e) {
    this.var_17 = e;
  }
  get container() {
    return this._container;
  }
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.INFOSTAND_WIDGET;
  }
  set container(e) {
    if (this._container != null) {
      let t = this._container.roomSessionManager?.events ?? null;
      (t?.removeEventListener?.(nI.USER_FIGURE, this._rfb4a7fa643bdaf),
        t?.removeEventListener?.(tI.PET_INFO, this._re28fc462249108),
        t?.removeEventListener?.(eI.PET_COMMANDS, this._r247d255a7626b3),
        t?.removeEventListener?.($y.const_309, this._rfe1b7ad195a343),
        t?.removeEventListener?.(rI.PET_FIGURE_UPDATE, this.onPetFigureUpdate),
        t?.removeEventListener?.(Jy.PET_BREEDING_RESULT, this._ra4d5ff84fb4ce9),
        t?.removeEventListener?.(qy.PET_BREEDING, this._rc97f9806f97d11),
        t?.removeEventListener?.(Yy.CONFIRM_PET_BREEDING, this._r090d06b6dfb198),
        t?.removeEventListener?.(Ky.CONFIRM_PET_BREEDING_RESULT, this._r9f53b24dc3215f),
        this._r96626810ed957b != null &&
          (this._container.connection?.removeMessageEvent(this._r96626810ed957b),
          this._r96626810ed957b.dispose(),
          (this._r96626810ed957b = null)),
        this._r3a822fc700b68d != null &&
          (this._container.connection?.removeMessageEvent(this._r3a822fc700b68d),
          this._r3a822fc700b68d.dispose(),
          (this._r3a822fc700b68d = null)));
    }
    if (((this._container = e), this._container == null)) return;
    let r = this._container.roomSessionManager?.events ?? null;
    (r?.addEventListener?.(nI.USER_FIGURE, this._rfb4a7fa643bdaf),
      r?.addEventListener?.(tI.PET_INFO, this._re28fc462249108),
      r?.addEventListener?.(eI.PET_COMMANDS, this._r247d255a7626b3),
      r?.addEventListener?.($y.const_309, this._rfe1b7ad195a343),
      r?.addEventListener?.(rI.PET_FIGURE_UPDATE, this.onPetFigureUpdate),
      r?.addEventListener?.(Jy.PET_BREEDING_RESULT, this._ra4d5ff84fb4ce9),
      r?.addEventListener?.(qy.PET_BREEDING, this._rc97f9806f97d11),
      r?.addEventListener?.(Yy.CONFIRM_PET_BREEDING, this._r090d06b6dfb198),
      r?.addEventListener?.(Ky.CONFIRM_PET_BREEDING_RESULT, this._r9f53b24dc3215f),
      this._container.connection != null &&
        ((this._r96626810ed957b = new _i71ce07f1d9b7d6(this.onGroupDetails)),
        this._container.connection.addMessageEvent(this._r96626810ed957b),
        (this._r3a822fc700b68d = new _ic478259c7e25c9(this._r248e192d6a9177)),
        this._container.connection.addMessageEvent(this._r3a822fc700b68d)));
  }
  dispose() {
    for (let e of this._r510717bf720713.values()) e.dispose();
    (this._r510717bf720713.clear(),
      this._r8976fb174e3935?.events.removeEventListener?.(NowPlayingEvent.NOW_PLAYING_SONG_CHANGED, this._r8ea3cefb0641f7),
      this._r8976fb174e3935?.events.removeEventListener?.(SongInfoReceivedEvent.TRAX_SONG_INFO_RECEIVED, this.onSongInfoReceivedEvent),
      (this._r8976fb174e3935 = null),
      (this.var_17 = null),
      (this.var_1271 = !0),
      (this.container = null));
  }
  _rc3479181526e34() {
    return [
      RoomWidgetRoomObjectMessage.GET_OBJECT_INFO,
      RoomWidgetRoomObjectMessage.GET_OBJECT_NAME,
      RoomWidgetUserActionMessage.SEND_FRIEND_REQUEST,
      RoomWidgetUserActionMessage.RESPECT_USER,
      RoomWidgetUserActionMessage.REPLENISH_RESPECT,
      RoomWidgetUserActionMessage.const_126,
      RoomWidgetUserActionMessage.WIRED_INSPECT_PET,
      RoomWidgetUserActionMessage.const_593,
      RoomWidgetUserActionMessage.const_266,
      RoomWidgetUserActionMessage.WHISPER_USER,
      RoomWidgetUserActionMessage.IGNORE_USER,
      RoomWidgetUserActionMessage.UNIGNORE_USER,
      RoomWidgetUserActionMessage.KICK_USER,
      RoomWidgetUserActionMessage.BAN_USER_DAY,
      RoomWidgetUserActionMessage.BAN_USER_HOUR,
      RoomWidgetUserActionMessage.BAN_USER_PERM,
      RoomWidgetUserActionMessage.MUTE_USER_2MIN,
      RoomWidgetUserActionMessage.MUTE_USER_5MIN,
      RoomWidgetUserActionMessage.MUTE_USER_10MIN,
      RoomWidgetUserActionMessage.GIVE_RIGHTS,
      RoomWidgetUserActionMessage.TAKE_RIGHTS,
      RoomWidgetUserActionMessage.START_TRADING,
      RoomWidgetUserActionMessage.OPEN_HOME_PAGE,
      RoomWidgetUserActionMessage.PASS_CARRY_ITEM,
      RoomWidgetUserActionMessage.GIVE_CARRY_ITEM_TO_PET,
      RoomWidgetUserActionMessage.const_876,
      RoomWidgetFurniActionMessage.MOVE,
      RoomWidgetFurniActionMessage.ROTATE,
      RoomWidgetFurniActionMessage.const_837,
      RoomWidgetFurniActionMessage.const_1405,
      RoomWidgetFurniActionMessage.USE,
      RoomWidgetFurniActionMessage.SAVE_STUFF_DATA,
      RoomWidgetFurniActionMessage.const_126,
      hm.ROOM_TAG_SEARCH,
      g1.WIDGET_MESSAGE_GET_BADGE_DETAILS,
      Sj.WIDGET_MESSAGE_GET_BADGE_IMAGE,
      RoomWidgetUserActionMessage.REPORT,
      RoomWidgetUserActionMessage.PICK_UP_PET,
      RoomWidgetUserActionMessage.MOUNT_PET,
      RoomWidgetUserActionMessage.TOGGLE_PET_RIDING_PERMISSION,
      RoomWidgetUserActionMessage.TOGGLE_PET_BREEDING_PERMISSION,
      RoomWidgetUserActionMessage.DISMOUNT_PET,
      RoomWidgetUserActionMessage.SADDLE_OFF,
      RoomWidgetUserActionMessage.TRAIN_PET,
      RoomWidgetPetCommandMessage.PET_COMMAND,
      RoomWidgetPetCommandMessage.REQUEST_COMMANDS,
      RoomWidgetUserActionMessage.RESPECT_PET,
      RoomWidgetUserActionMessage.REQUEST_PET_UPDATE,
      dm.CHANGE_MOTTO,
      RoomWidgetOpenProfileMessage.const_1290,
      RoomWidgetPresentOpenMessage.const_1388,
      RoomWidgetUserActionMessage.GIVE_LIGHT_TO_PET,
      RoomWidgetUserActionMessage.GIVE_WATER_TO_PET,
      RoomWidgetUserActionMessage.TREAT_PET,
      RoomWidgetUserActionMessage.REPORT_CFH_OTHER,
      RoomWidgetUserActionMessage.AMBASSADOR_ALERT_USER,
      RoomWidgetUserActionMessage.AMBASSADOR_KICK_USER,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_2MIN,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_10MIN,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_15MIN,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_60MIN,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_18HOUR,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_36HOUR,
      RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_72HOUR,
      RoomWidgetUserActionMessage.AMBASSADOR_UNMUTE_USER,
    ];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null || this._container == null) return null;
    let r = 0,
      t = null,
      i = e instanceof RoomWidgetUserActionMessage ? e : null;
    if (
      i != null &&
      ((r = i.userId),
      e.type === RoomWidgetUserActionMessage.REQUEST_PET_UPDATE ||
      e.type === RoomWidgetUserActionMessage.RESPECT_PET ||
      e.type === RoomWidgetUserActionMessage.PICK_UP_PET ||
      e.type === RoomWidgetUserActionMessage.WIRED_INSPECT_PET ||
      e.type === RoomWidgetUserActionMessage.MOUNT_PET ||
      e.type === RoomWidgetUserActionMessage.TOGGLE_PET_RIDING_PERMISSION ||
      e.type === RoomWidgetUserActionMessage.TOGGLE_PET_BREEDING_PERMISSION ||
      e.type === RoomWidgetUserActionMessage.DISMOUNT_PET ||
      e.type === RoomWidgetUserActionMessage.SADDLE_OFF ||
      e.type === RoomWidgetUserActionMessage.GIVE_CARRY_ITEM_TO_PET ||
      e.type === RoomWidgetUserActionMessage.GIVE_WATER_TO_PET ||
      e.type === RoomWidgetUserActionMessage.GIVE_LIGHT_TO_PET ||
      e.type === RoomWidgetUserActionMessage.TREAT_PET
        ? (t = this._container._r2eac8239a09fe7?.getUserDataByIndex._r088e8652882b97(r) ?? null)
        : e.type === RoomWidgetUserActionMessage.const_593
          ? (t = this._container._r2eac8239a09fe7?.getUserDataByIndex._rfe3645979731ec(r) ?? null)
          : (t = this._container._r2eac8239a09fe7?.getUserDataByIndex._r1cacdcfc23a2de(r) ?? null),
      t == null)
    )
      return null;
    let s = 0,
      o = 0,
      d = e instanceof RoomWidgetFurniActionMessage ? e : null;
    switch ((d != null && ((s = d.furniId), (o = d._rff5343f27e8e24)), e.type)) {
      case RoomWidgetRoomObjectMessage.GET_OBJECT_INFO:
        return e instanceof RoomWidgetRoomObjectMessage ? this._rd1537de4268c53(e) : null;
      case RoomWidgetRoomObjectMessage.GET_OBJECT_NAME:
        return e instanceof RoomWidgetRoomObjectMessage ? this._r90403c5df14c3d(e) : null;
      case RoomWidgetUserActionMessage.SEND_FRIEND_REQUEST:
        this._container.friendList?._r9c4d5fbe38e0ed(r, t.name);
        break;
      case RoomWidgetUserActionMessage.RESPECT_USER:
        this._container.sessionDataManager?.giveRespect(r);
        break;
      case RoomWidgetUserActionMessage.REPLENISH_RESPECT: {
        let c = this._container.catalog?.getPurse().getActivityPointsForType(et.DUCKET) ?? 0,
          f = this._container.config?.getInteger("respect.replenish_cost_duckets", 50) ?? 50;
        if (c < f) {
          let l =
            this._container.localization?.getLocalizationWithParams(
              "respect.replenish.not_enough_duckets.title",
              "",
              "amount",
              String(f),
            ) ?? "${respect.replenish.not_enough_duckets.title}";
          this._container.windowManager?.alert("${respect.replenish.not_enough_duckets.title}", l, 0, null);
        } else {
          let l =
            this._container.localization?.getLocalizationWithParams(
              "respect.replenish.desc",
              "",
              "amount",
              String(f),
            ) ?? "";
          this._container.windowManager?.confirm("${respect.replenish.title}", l, 0, this._rc5ab2fb4ce874b);
        }
        break;
      }
      case RoomWidgetUserActionMessage.const_126:
      case RoomWidgetUserActionMessage.const_593:
      case RoomWidgetUserActionMessage.WIRED_INSPECT_PET:
        this._r32ca4bbd0315f1()?.context._r6b6c989018eb05(
          `wiredmenu/open/inspection/1/${t._r2fdf1f24b1e612}`,
        );
        break;
      case RoomWidgetUserActionMessage.const_266:
        this._container.connection?.send(new class_2134(t.webID));
        break;
      case RoomWidgetUserActionMessage.RESPECT_PET:
        this._container.sessionDataManager?.givePetRespect(r);
        break;
      case RoomWidgetUserActionMessage.WHISPER_USER:
        this._container.events?.dispatchEvent?.(new h1(h1.MESSAGE_TYPE_WHISPER, t.name));
        break;
      case RoomWidgetUserActionMessage.IGNORE_USER:
        this._container.sessionDataManager?.ignoreUser(t.webID);
        break;
      case RoomWidgetUserActionMessage.UNIGNORE_USER:
        this._container.sessionDataManager?.unignoreUser(t.webID);
        break;
      case RoomWidgetUserActionMessage.KICK_USER:
        this._container._r2eac8239a09fe7?._rc9068f73ae7c88(t.webID);
        break;
      case RoomWidgetUserActionMessage.BAN_USER_DAY:
      case RoomWidgetUserActionMessage.BAN_USER_HOUR:
      case RoomWidgetUserActionMessage.BAN_USER_PERM:
        this._container._r2eac8239a09fe7?._r14e75314f45252(t.webID, e.type);
        break;
      case RoomWidgetUserActionMessage.MUTE_USER_2MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 2);
        break;
      case RoomWidgetUserActionMessage.MUTE_USER_5MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 5);
        break;
      case RoomWidgetUserActionMessage.MUTE_USER_10MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 10);
        break;
      case RoomWidgetUserActionMessage.GIVE_RIGHTS:
        this._container._r2eac8239a09fe7?._r69ead8a4e8c7ca(t.webID);
        break;
      case RoomWidgetUserActionMessage.TAKE_RIGHTS:
        this._container._r2eac8239a09fe7?._r230e543f5db627(t.webID);
        break;
      case RoomWidgetUserActionMessage.START_TRADING: {
        let c = this._container._r2eac8239a09fe7?.getUserDataByIndex._r1cacdcfc23a2de(i?.userId ?? r) ?? null;
        c != null && this._container.inventory?._rc6ea0606ca8ef7(c._r2fdf1f24b1e612, c.name);
        break;
      }
      case RoomWidgetUserActionMessage.OPEN_HOME_PAGE:
        this._container.sessionDataManager?.openHabboHomePage(t.webID, t.name);
        break;
      case RoomWidgetUserActionMessage.PICK_UP_PET:
        this._container._r2eac8239a09fe7?._rd761fc0a324cdb(r);
        break;
      case RoomWidgetUserActionMessage.MOUNT_PET:
        this._container._r2eac8239a09fe7?._r54d01dc75cf651(r);
        break;
      case RoomWidgetUserActionMessage.TOGGLE_PET_RIDING_PERMISSION:
        this._container._r2eac8239a09fe7?._r6b5f160ee76b04(r);
        break;
      case RoomWidgetUserActionMessage.TOGGLE_PET_BREEDING_PERMISSION:
        this._container._r2eac8239a09fe7?._r41abbfb66c8864(r);
        break;
      case RoomWidgetUserActionMessage.DISMOUNT_PET:
        this._container._r2eac8239a09fe7?._rf4ab72ca4540f2(r);
        break;
      case RoomWidgetUserActionMessage.SADDLE_OFF:
        this._container._r2eac8239a09fe7?._r466e7d59e930e4(r);
        break;
      case RoomWidgetUserActionMessage.PASS_CARRY_ITEM:
        this._container.connection?.send(new _ibf6bc51ecb3da9(r));
        break;
      case RoomWidgetUserActionMessage.GIVE_CARRY_ITEM_TO_PET:
        this._container.connection?.send(new _i9fa39129a040f7(r));
        break;
      case RoomWidgetUserActionMessage.GIVE_WATER_TO_PET:
        this._container.connection?.send(new _i6456b87e910ff5(r, _i099e0d4298e664._r874516c02c0046));
        break;
      case RoomWidgetUserActionMessage.GIVE_LIGHT_TO_PET:
        this._container.connection?.send(new _i6456b87e910ff5(r, _i099e0d4298e664.LIGHT));
        break;
      case RoomWidgetUserActionMessage.TREAT_PET:
        this._container.connection?.send(new class_1914(r));
        break;
      case RoomWidgetUserActionMessage.const_876:
        this._container.connection?.send(new _i9ec97d56cb81a8());
        break;
      case RoomWidgetFurniActionMessage.ROTATE:
        this._container.roomEngine?._r9cc46b2b079405(s, o, RoomObjectOperationEnum.OBJECT_ROTATE_POSITIVE);
        break;
      case RoomWidgetFurniActionMessage.MOVE:
        this._container.roomEngine?._r9cc46b2b079405(s, o, RoomObjectOperationEnum.OBJECT_MOVE);
        break;
      case RoomWidgetFurniActionMessage.const_837:
        this._r5ec5b7bec28581(s, o);
        break;
      case RoomWidgetFurniActionMessage.const_1405:
        this._container.roomEngine?._r9cc46b2b079405(s, o, RoomObjectOperationEnum.OBJECT_EJECT);
        break;
      case RoomWidgetFurniActionMessage.USE:
        this._container.roomEngine?._r26e5bf11a3a5d4(s, o);
        break;
      case RoomWidgetFurniActionMessage.const_126: {
        let c = "wiredmenu/open/inspection/0/";
        if (o === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) c += String(s);
        else if (o === RoomObjectCategoryEnum.const_909) c += String(-s);
        else break;
        this._r32ca4bbd0315f1()?.context._r6b6c989018eb05(c);
        break;
      }
      case RoomWidgetFurniActionMessage.SAVE_STUFF_DATA: {
        let c = d?.objectData ?? null;
        if (c != null) {
          let f = new B();
          for (let l of c.split("	")) {
            let b = l.split("=", 2);
            b.length === 2 && f.add(b[0] ?? "", b[1] ?? "");
          }
          this._container.roomEngine?._r069b15b06fe896(s, o, RoomObjectOperationEnum.OBJECT_SAVE_STUFF_DATA, f);
        }
        break;
      }
      case RoomWidgetUserActionMessage.REQUEST_PET_UPDATE:
        this._container._r2eac8239a09fe7?.getUserDataByIndex._r8d50ead7c2e152(r);
        break;
      case hm.ROOM_TAG_SEARCH:
        e instanceof hm && this._container.navigator?.performTagSearch(e.tag);
        break;
      case g1.WIDGET_MESSAGE_GET_BADGE_DETAILS: {
        if (!(e instanceof g1)) break;
        let c = e;
        this._container._r65e0ab1dc9fb51?._r373cbe1da119cd(c.own, c.groupId);
        break;
      }
      case Sj.WIDGET_MESSAGE_GET_BADGE_IMAGE:
        e instanceof Sj && this.var_17?._r7991a19f27fec3(e.badgeId);
        break;
      case RoomWidgetUserActionMessage.REPORT:
        this._container.habboHelp?._r046ef1fd9b83b8(r, -1, null);
        break;
      case RoomWidgetUserActionMessage.REPORT_CFH_OTHER:
        this._container.habboHelp?._r046ef1fd9b83b8(r, 124, null);
        break;
      case RoomWidgetPetCommandMessage.REQUEST_COMMANDS:
        e instanceof RoomWidgetPetCommandMessage && this._container._r2eac8239a09fe7?._re056cbca2bc4ec(e.petId);
        break;
      case RoomWidgetPetCommandMessage.PET_COMMAND:
        e instanceof RoomWidgetPetCommandMessage && this._container._r2eac8239a09fe7?.sendChatMessage(e.value ?? "");
        break;
      case dm.CHANGE_MOTTO:
        e instanceof dm && this._container._r2eac8239a09fe7?._rad0e72dfcb7690(e.motto);
        break;
      case RoomWidgetOpenProfileMessage.const_1290: {
        if (!(e instanceof RoomWidgetOpenProfileMessage)) break;
        let c = e;
        (this._container._r697386a8fb5bf8?.trackGoogle("extendedProfile", c.trackingLocation),
          this._container.connection?.send(new class_2134(c.userId)));
        break;
      }
      case RoomWidgetPresentOpenMessage.const_1388: {
        if (!(e instanceof RoomWidgetPresentOpenMessage)) break;
        let c = e;
        this.var_17?.furniData.id === c.objectId &&
          this.var_17._r3cb15b6aaa992d() &&
          this.var_17.close();
        break;
      }
      case RoomWidgetUserActionMessage.AMBASSADOR_ALERT_USER:
        this._container._r2eac8239a09fe7?._ra690cbac88ff9f(t.webID);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_KICK_USER:
        this._container._r2eac8239a09fe7?._rc9068f73ae7c88(t.webID);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_2MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 2);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_10MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 10);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_15MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 15);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_60MIN:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 60);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_18HOUR:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 1080);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_36HOUR:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 2160);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_72HOUR:
        this._container._r2eac8239a09fe7?._rda7fc83798fe38(t.webID, 4320);
        break;
      case RoomWidgetUserActionMessage.AMBASSADOR_UNMUTE_USER:
        this._container._r2eac8239a09fe7?._r780ab6fc9d62c9(t.webID);
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [F8.USER_BADGES];
  }
  _r9b1b0209eb1b5a(e) {
    if (e.type === F8.USER_BADGES && this.var_17 != null) {
      let r = e;
      this.var_17._rdfa32307855704(r.userId, r.selectedBadges);
    }
  }
  update() {}
  get isActivityDisplayEnabled() {
    return this._container?.config?.getBoolean("activity.point.display.enabled") ?? !1;
  }
  _r8e2ae19142ed50(e) {
    let r = this._container,
      t = this.var_17;
    r != null &&
      t != null &&
      (r.sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1) &&
      t.furniData.id > 0 &&
      r.connection?.send(new _i825701823414ca(t.furniData.id, e));
  }
  onGroupDetails = n((e) => {
    let r = e.data,
      t = this.var_17,
      i = t?._rdfba07d212c6c0 ?? null;
    t?.furniData.groupId === r.groupId &&
      i != null &&
      ((i.groupBadgeId = r._rc9fc89e7eb27a7), (i.groupName = r.groupName));
  }, "onGroupDetails");
  _rc5ab2fb4ce874b = n((e, r) => {
    (e.dispose(), r.type === y.const_1300 && this._container?.sessionDataManager?.replenishRespect());
  }, "_rc5ab2fb4ce874b");
  _r5ec5b7bec28581(e, r) {
    if (this._container != null) {
      if (nd.isBuilderClubId(e) && (this._container.config?.getBoolean("builders.club.enabled") ?? !1)) {
        this.var_17?.furniData.availableForBuildersClub
          ? this._container.roomEngine?._r9cc46b2b079405(e, r, RoomObjectOperationEnum.OBJECT_PICKUP)
          : this._container.windowManager?.confirm(
              "${generic.alert.title}",
              "${room.confirm.not_in_warehouse}",
              0,
              (t, i) => {
                (t.dispose(),
                  i.type === y.const_1300 &&
                    this._container?.roomEngine?._r9cc46b2b079405(e, r, RoomObjectOperationEnum.OBJECT_PICKUP));
              },
            );
        return;
      }
      this._container.roomEngine?._r9cc46b2b079405(e, r, RoomObjectOperationEnum.OBJECT_PICKUP);
    }
  }
  _r90403c5df14c3d(e) {
    let r = this._container?._r2eac8239a09fe7?.roomId ?? 0,
      t = null,
      i = 0,
      s = 0,
      o = 0;
    switch (e.category) {
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
      case RoomObjectCategoryEnum.const_909: {
        if (this._container?.events == null || this._container.roomEngine == null) return null;
        let d = this._container.roomEngine._ra1f5cb56d0c2d8(r, e.id, e.category);
        if (d == null) return null;
        let c = d.getType();
        if (c.indexOf("poster") === 0)
          ((t = `\${poster_${Number.parseInt(c.replace("poster", ""), 10)}_name}`),
            (s = d.getId()),
            (o = -1));
        else {
          let f = d.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191) ?? 0,
            l =
              e.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
                ? this._container.sessionDataManager?.getFloorItemData(f)
                : this._container.sessionDataManager?.getWallItemData(f);
          if (l == null) return null;
          ((t = l.localizedName), (s = d.getId()), (o = l.id));
        }
        break;
      }
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER: {
        if (
          this._container?._r2eac8239a09fe7 == null ||
          this._container.sessionDataManager == null ||
          this._container.events == null ||
          this._container.roomEngine == null ||
          this._container.friendList == null
        )
          return null;
        let d = this._container._r2eac8239a09fe7.getUserDataByIndex.userDataManager(e.id);
        if (d == null) return null;
        ((t = d.name), (i = d.type), (s = d._r2fdf1f24b1e612), (o = d.webID));
        break;
      }
    }
    return (t != null && this._container?.events?.dispatchEvent?.(new rm(o, e.category, t, i, s)), null);
  }
  _rd1537de4268c53(e) {
    let r = this._container?._r2eac8239a09fe7?.roomId ?? 0;
    switch (e.category) {
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
      case RoomObjectCategoryEnum.const_909:
        this._r20e146ca34bc61(e, r);
        break;
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER: {
        if (
          this._container?._r2eac8239a09fe7 == null ||
          this._container.sessionDataManager == null ||
          this._container.events == null ||
          this._container.roomEngine == null ||
          this._container.friendList == null
        )
          return null;
        let t = this._container._r2eac8239a09fe7.getUserDataByIndex.userDataManager(e.id);
        if (t == null) return null;
        switch (t.type) {
          case RoomObjectTypeEnum.OBJECT_TYPE_PET:
            this._r907ebbb8bdf00c(t.webID);
            break;
          case RoomObjectTypeEnum.OBJECT_TYPE_USER:
            this._race09bd8f5882a(r, e.id, e.category, t);
            break;
          case RoomObjectTypeEnum.const_543:
            this._r2ee1b607fac201(r, e.id, e.category, t);
            break;
          case RoomObjectTypeEnum.const_965:
            this._rdd3255c20dade4(r, e.id, e.category, t);
            break;
        }
        this._container._rddef5461e8915c?.userSelected(e.id);
        break;
      }
    }
    return null;
  }
  _r907ebbb8bdf00c(e) {
    ((this._container?.config?.getBoolean("petSelect.enabled") ?? !1) &&
      this._container?.connection?.send(new _i8f615776c95622(e)),
      this._container?._r2eac8239a09fe7?.getUserDataByIndex._r8d50ead7c2e152(e));
  }
  _r2ee1b607fac201(e, r, t, i) {
    if (this._container == null) return;
    let s = new RoomWidgetUserInfoUpdateEvent(RoomWidgetUserInfoUpdateEvent.BOT);
    ((s.name = i.name),
      (s.motto = i.custom),
      (s.webID = i.webID),
      (s.userRoomId = r),
      (s.userType = i.type));
    let o = this._container.roomEngine?._ra1f5cb56d0c2d8(e, r, t) ?? null;
    (o != null && (s.carryItem = o.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257) ?? 0),
      (s.amIOwner = this._container._r2eac8239a09fe7?.isRoomOwner ?? !1),
      (s.isGuildRoom = this._container._r2eac8239a09fe7?.isGuildRoom ?? !1),
      (s.myRoomControllerLevel = this._container._r2eac8239a09fe7?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER),
      (s.amIAnyRoomController = this._container.sessionDataManager?.isAnyRoomController ?? !1),
      (s.canBeKicked = this._container._r2eac8239a09fe7?.isRoomOwner ?? !1),
      (s.badges = [RoomWidgetUserInfoUpdateEvent.DEFAULT_BOT_BADGE_ID]),
      (s.figure = i.figure),
      this._container.events?.dispatchEvent?.(s));
  }
  _rdd3255c20dade4(e, r, t, i) {
    if (this._container == null) return;
    let s = new Ou();
    ((s.name = i.name),
      (s.motto = i.custom),
      (s.webID = i.webID),
      (s.userRoomId = r),
      (s.ownerId = i.ownerId),
      (s.ownerName = i.ownerName),
      (s.botSkills = i.botSkills));
    let o = this._container.roomEngine?._ra1f5cb56d0c2d8(e, r, t) ?? null;
    (o != null && (s.carryItem = o.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257) ?? 0),
      (s.amIOwner = this._container._r2eac8239a09fe7?.isRoomOwner ?? !1),
      (s.myRoomControllerLevel = this._container._r2eac8239a09fe7?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER),
      (s.amIAnyRoomController = this._container.sessionDataManager?.isAnyRoomController ?? !1),
      (s.badges = [RoomWidgetUserInfoUpdateEvent.DEFAULT_BOT_BADGE_ID]),
      (s.figure = i.figure),
      this._container.events?.dispatchEvent?.(s));
  }
  _race09bd8f5882a(e, r, t, i) {
    if (this._container == null) return;
    let s =
        i.webID === (this._container.sessionDataManager?.userId ?? -1)
          ? RoomWidgetUserInfoUpdateEvent.OWN_USER
          : RoomWidgetUserInfoUpdateEvent.PEER,
      o = new RoomWidgetUserInfoUpdateEvent(s);
    ((o._r53892118edc559 = this._container._r2eac8239a09fe7?._r53892118edc559 ?? !1),
      (o.name = i.name),
      (o.motto = i.custom),
      this.isActivityDisplayEnabled && (o.achievementScore = i.achievementScore),
      (o.webID = i.webID),
      (o.userRoomId = r),
      (o.userType = RoomObjectTypeEnum.OBJECT_TYPE_USER),
      (o.badgesRank = i.badgesRank));
    let d = this._container.roomEngine?._ra1f5cb56d0c2d8(e, r, t) ?? null;
    if (
      (d != null && (o.carryItem = d.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257) ?? 0),
      s === RoomWidgetUserInfoUpdateEvent.OWN_USER &&
        ((o.realName = this._container.sessionDataManager?.realName ?? ""),
        (o.allowNameChange = this._container.sessionDataManager?.nameChangeAllowed ?? !1)),
      (o.amIOwner = this._container._r2eac8239a09fe7?.isRoomOwner ?? !1),
      (o.isGuildRoom = this._container._r2eac8239a09fe7?.isGuildRoom ?? !1),
      (o.myRoomControllerLevel = this._container._r2eac8239a09fe7?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER),
      (o.amIAnyRoomController = this._container.sessionDataManager?.isAnyRoomController ?? !1),
      (o.amIAnAmbassador = this._container.sessionDataManager?.isAmbassador ?? !1),
      s === RoomWidgetUserInfoUpdateEvent.PEER)
    ) {
      ((o.isBlocked = this._container.sessionDataManager?.isBlocked(i.webID) ?? !1),
        (o._r5e040bd2e547c8 = this._container.friendList?._r7df26efa3d56a0(i.webID) ?? !1));
      let f = this._container.friendList?._rf51d9426e17752(i.webID) ?? null;
      if ((f != null && ((o.realName = f.realName), (o.isFriend = !0)), d != null)) {
        let _ = d.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1006) ?? Number.NaN;
        (Number.isNaN(_) || (o.targetRoomControllerLevel = _),
          (o.canBeMuted = this._r2b73401174a524(o)),
          (o.canBeKicked = this._r1712c807ba4889(o)),
          (o.canBeBanned = this._r6390ade0bd57fb(o)));
      }
      ((o.isIgnored = this._container.sessionDataManager?.isIgnored(i.webID) ?? !1),
        (o.respectLeft = this._container.sessionDataManager?.respectLeft ?? 0),
        (o.respectReplenishesLeft = this._container.sessionDataManager?.respectReplenishesLeft ?? 0));
      let l = !(this._container.sessionDataManager?.systemShutDown ?? !1),
        b = this._container._r2eac8239a09fe7?.tradeMode ?? Kl.NO_TRADING;
      if (!l) o.canTrade = !1;
      else
        switch (b) {
          default:
            o.canTrade = !1;
            break;
          case Kl.ROOM_CONTROLLER_REQUIRED: {
            let _ = o.myRoomControllerLevel !== RoomControllerLevelEnum.NOT_CONTROLLER && o.myRoomControllerLevel !== RoomControllerLevelEnum.GUILD_MEMBER,
              h = o.targetRoomControllerLevel !== RoomControllerLevelEnum.NOT_CONTROLLER && o.targetRoomControllerLevel !== RoomControllerLevelEnum.GUILD_MEMBER;
            o.canTrade = _ || h;
            break;
          }
          case Kl.FREE_TRADING:
            o.canTrade = !0;
            break;
        }
      ((o.canTradeReason = RoomWidgetUserInfoUpdateEvent.TRADE_REASON_OK),
        l || (o.canTradeReason = RoomWidgetUserInfoUpdateEvent.TRADE_REASON_SHUTDOWN),
        b !== Kl.FREE_TRADING && (o.canTradeReason = RoomWidgetUserInfoUpdateEvent.TRADE_REASON_NO_TRADINGROOM));
    }
    ((o.groupId = Number.parseInt(i.groupID ?? "0", 10) || 0),
      (o.groupBadgeId = this._container.sessionDataManager?.getGroupBadgeId(o.groupId) ?? ""),
      (o.groupName = i.groupName),
      this._container._r2eac8239a09fe7?.getUserDataByIndex._recac841a3190c4(i.webID));
    let c = this._container._r2eac8239a09fe7?.getUserDataByIndex._r0deb9f0cedb2e1(i.webID) ?? [];
    ((o.selectedBadges = c),
      (o.badges = this._rb87e77e72ee7aa(c)),
      (o.figure = i.figure),
      this._container.events?.dispatchEvent?.(o),
      this._container._r65e0ab1dc9fb51?._rccdc0573215159(i.webID),
      this._container.connection?.send(new class_2592(i.webID)));
  }
  _rb87e77e72ee7aa(e) {
    let r = [];
    for (let t of e ?? [])
      t == null || t._r3d8be6b2a8461a < 0 || (r[t._r3d8be6b2a8461a] = t._rc9fc89e7eb27a7);
    return r;
  }
  _r2b73401174a524(e) {
    return this._rf0fe4a935e8ac9(e, (r, t) => this._r1e655530429b75(e, t._rcf6814a48ba121));
  }
  _r1712c807ba4889(e) {
    return this._rf0fe4a935e8ac9(e, (r, t) =>
      t._ra46bd2f1badd5f === 2 ? !0 : this._r1e655530429b75(e, t._ra46bd2f1badd5f),
    );
  }
  _r6390ade0bd57fb(e) {
    return this._rf0fe4a935e8ac9(e, (r, t) => this._r1e655530429b75(e, t._rce5b4a16158543));
  }
  _r1e655530429b75(e, r) {
    let t = e.myRoomControllerLevel === RoomControllerLevelEnum.ROOM_CONTROLLER || e.myRoomControllerLevel >= RoomControllerLevelEnum.ROOM_OWNER,
      i = e.isGuildRoom && e.myRoomControllerLevel >= RoomControllerLevelEnum.GUILD_ADMIN;
    switch (r) {
      case 4:
        return i;
      case 1:
        return t;
      case 5:
        return t || i;
      default:
        return e.myRoomControllerLevel >= RoomControllerLevelEnum.ROOM_OWNER;
    }
  }
  _rf0fe4a935e8ac9(e, r) {
    if (!(this._container?._r2eac8239a09fe7?._r9ab0d525741546 ?? !1)) return !1;
    let t = this._container?._r2eac8239a09fe7?._r3d55e7f65e7db4 ?? null;
    return (t != null ? r(e, t) : !1) && e.targetRoomControllerLevel < RoomControllerLevelEnum.ROOM_OWNER;
  }
  _r20e146ca34bc61(e, r) {
    if (this._container?.events == null || this._container.roomEngine == null || e.id < 0) return;
    let t = new RoomWidgetFurniInfoUpdateEvent(RoomWidgetFurniInfoUpdateEvent.FURNI);
    ((t.id = e.id), (t.category = e.category));
    let i = this._container.roomEngine._ra1f5cb56d0c2d8(r, e.id, e.category);
    if (i == null) return;
    let s = i.getStringToStringMap();
    if (s == null) return;
    let o = s.getString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM);
    o != null && (t.extraParam = o);
    let d = s._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_DATA_FORMAT),
      c = _i5205b2079e8037._r41d3e1274ff5f9(d);
    (c?._r8476f6049cdad6(s), (t.stuffData = c));
    let f = i.getType();
    if (f.indexOf("poster") === 0) {
      let p = Number.parseInt(f.replace("poster", ""), 10);
      ((t.name = `\${poster_${p}_name}`), (t.description = `\${poster_${p}_desc}`));
    } else {
      let p = s._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
        m =
          e.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
            ? this._container.sessionDataManager?.getFloorItemData(p)
            : this._container.sessionDataManager?.getWallItemData(p);
      m != null &&
        ((t.name = m.localizedName),
        (t.isNft = m.className.indexOf("nft_") === 0),
        (t.description = m.description),
        (t.purchaseOfferId = m.purchaseOfferId),
        (t.bcOfferId = m.bcOfferId),
        (t.tradeable = m.tradeable),
        (t.purchaseCouldBeUsedForBuyout = m.purchaseCouldBeUsedForBuyout),
        (t.rentOfferId = m.rentOfferId),
        (t.rentCouldBeUsedForBuyout = m.rentCouldBeUsedForBuyout),
        (t.availableForBuildersClub = m.availableForBuildersClub),
        (t.classId = p));
    }
    (e.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
      ? this._container._rddef5461e8915c?._r7e0d0a299ffd5d(i.getId())
      : e.category === RoomObjectCategoryEnum.const_909 &&
        this._container._rddef5461e8915c?._r7e0d0a299ffd5d(-i.getId()),
      f.indexOf("post_it") > -1 && (t._rf3da64b740a064 = !0));
    let l = s._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIME),
      b = s._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_EXPIRY_TIMESTAMP);
    t.expiration = l < 0 ? l : Math.max(0, l - (Date.now() - b) / 1e3);
    let _ = this._container.roomEngine._r935bceb9c0dcea(r, e.id, e.category, new k(180, 0, 0), 64, null);
    ((_?.data == null || _.data.width > 140 || _.data.height > 200) &&
      (_ = this._container.roomEngine._r935bceb9c0dcea(r, e.id, e.category, new k(180, 0, 0), 1, null)),
      (t.image = _?.data ?? null),
      (t.isWallItem = e.category === RoomObjectCategoryEnum.const_909),
      (t.isRoomOwner = this._container._r2eac8239a09fe7?.isRoomOwner ?? !1),
      (t._rea9739215487be = this._container._r2eac8239a09fe7?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER),
      (t.isAnyRoomController = this._container.sessionDataManager?.isAnyRoomController ?? !1),
      (t.ownerId = s._ra3dc9a405b5c73(RoomObjectVariableEnum.const_641)),
      (t.ownerName = s.getString(RoomObjectVariableEnum.FURNITURE_OWNER_NAME)),
      (t.usagePolicy = s._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_USAGE_POLICY)));
    let h = Math.trunc(s._ra3dc9a405b5c73(RoomObjectVariableEnum.const_699));
    if (
      (h !== 0 && ((t.groupId = h), this._container.connection?.send(new _i494540f04bf21d(h, !1))),
      this._container._rc2337883ff003a(i) && (t.isOwner = !0),
      this._container.events.dispatchEvent?.(t),
      t.extraParam != null && t.extraParam.length > 0)
    ) {
      let p = -1,
        m = "",
        v = "",
        w = "";
      if (t.extraParam === RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_JUKEBOX) {
        let I = this._r8976fb174e3935?._r6ad19d72b36cea() ?? null;
        I != null && ((p = I._rd788ebdf380b70), (w = RoomWidgetSongUpdateEvent.SONG_PLAYING_CHANGED));
      } else if (t.extraParam.indexOf(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_SONGDISK) === 0) {
        let I = t.extraParam.slice(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_SONGDISK.length);
        ((p = Number.parseInt(I, 10)), (w = RoomWidgetSongUpdateEvent.SONG_DATA_RECEIVED));
      }
      if (p !== -1) {
        let I = this._r8976fb174e3935?._r716cd8f1931469(p) ?? null;
        (I != null && ((m = I.name), (v = I.creator)),
          this._container.events.dispatchEvent?.(new RoomWidgetSongUpdateEvent(w, p, m, v)));
      }
    }
  }
  _rfb4a7fa643bdaf = n((e) => {
    if (this._container == null || e.userId < 0) return;
    let r = this._container._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(e.userId) ?? null;
    if (r == null) return;
    let t = r.webID,
      i = t === (this._container.sessionDataManager?.userId ?? -1);
    this.var_17?.updateUserData(t, e.figure, e.achievementScore, e.customInfo, i, e.badgesRank);
  }, "_rfb4a7fa643bdaf");
  _re28fc462249108 = n((e) => {
    let r = e.petInfo,
      t = this._container?._r2eac8239a09fe7?.getUserDataByIndex._r088e8652882b97(r.petId) ?? null;
    if (this._container?.events == null || t == null) return;
    let i = t.figure,
      s = this._rec1a64fc8d4622(i),
      o = this._r4ef7cdb6c2b29b(i),
      d = null;
    s === class_3447.MONSTERPLANT && (d = r.level >= r._rc6ade5a30f81ae ? "std" : `grw${r.level}`);
    let c = i + (d != null ? `/posture=${d}` : ""),
      f = this._r510717bf720713.get(c) ?? null;
    f == null && ((f = this.getPetImage(i, d)), this._r510717bf720713.set(c, f));
    let l = r.ownerId === (this._container.sessionDataManager?.userId ?? -1),
      b = new Nu(
        s,
        o,
        t.name,
        r.petId,
        f,
        l,
        r.ownerId,
        r.ownerName,
        t._r2fdf1f24b1e612,
        r.breedId,
      );
    ((b.level = r.level),
      (b.levelMax = r.levelMax),
      (b.experience = r.experience),
      (b.experienceMax = r.experienceMax),
      (b.energy = r.energy),
      (b.energyMax = r.energyMax),
      (b.nutrition = r.nutrition),
      (b.nutritionMax = r.nutritionMax),
      (b.petRespect = r.respect),
      (b.petRespectLeft = this._container.sessionDataManager?.petRespectLeft ?? 0),
      (b.age = r.age),
      (b.hasFreeSaddle = r.hasFreeSaddle),
      (b.isRiding = r.isRiding),
      (b.canBreed = r.canBreed),
      (b.canHarvest = r.canHarvest),
      (b.canRevive = r.canRevive),
      (b.rarityLevel = r.rarityLevel),
      (b.skillTresholds = r.skillTresholds),
      (b.canRemovePet = !1),
      (b.accessRights = r.accessRights),
      (b.maxWellBeingSeconds = r.maxWellBeingSeconds),
      (b.remainingWellBeingSeconds = r.remainingWellBeingSeconds),
      (b.remainingGrowingSeconds = r.remainingGrowingSeconds),
      (b.hasBreedingPermission = r.hasBreedingPermission));
    let _ = this._container._r2eac8239a09fe7;
    ((l ||
      (_?.isRoomOwner ?? !1) ||
      (this._container.sessionDataManager?.isAnyRoomController ?? !1) ||
      (_?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER) >= RoomControllerLevelEnum.ROOM_CONTROLLER) &&
      (b.canRemovePet = !0),
      this._container.events.dispatchEvent?.(b));
  }, "_re28fc462249108");
  onPetFigureUpdate = n((e) => {
    let r = this._r510717bf720713.get(e.figure) ?? null;
    (r == null && ((r = this.getPetImage(e.figure)), this._r510717bf720713.set(e.figure, r)),
      this._container?.events?.dispatchEvent?.(new fI(e.petId, r)));
  }, "onPetFigureUpdate");
  _ra4d5ff84fb4ce9 = n((e) => {
    if (this._container?.events == null) return;
    let r = new _ib72a9e9de6cc2d();
    ((r.stuffId = e.resultData.stuffId),
      (r.classId = e.resultData.classId),
      (r._raeb033db5aa083 = e.resultData._raeb033db5aa083),
      (r.userId = e.resultData.userId),
      (r.userName = e.resultData.userName),
      (r.rarityLevel = e.resultData.rarityLevel),
      (r._r8680a44650a6c0 = e.resultData._r8680a44650a6c0));
    let t = new _ib72a9e9de6cc2d();
    ((t.stuffId = e.otherResultData.stuffId),
      (t.classId = e.otherResultData.classId),
      (t._raeb033db5aa083 = e.otherResultData._raeb033db5aa083),
      (t.userId = e.otherResultData.userId),
      (t.userName = e.otherResultData.userName),
      (t.rarityLevel = e.otherResultData.rarityLevel),
      (t._r8680a44650a6c0 = e.otherResultData._r8680a44650a6c0),
      this._container.events.dispatchEvent?.(new $p(r, t)));
  }, "_ra4d5ff84fb4ce9");
  _rc97f9806f97d11 = n((e) => {
    if (this._container?.events == null) return;
    let r = new g0();
    ((r.state = e.state),
      (r._rb2023938cee132 = e._rb2023938cee132),
      (r._ra37180683cadb3 = e._ra37180683cadb3),
      this._container.events.dispatchEvent?.(r));
  }, "_rc97f9806f97d11");
  _r090d06b6dfb198 = n((e) => {
    if (this._container?.events == null) return;
    let r = new _i321b08b9450b3c();
    ((r.webId = e.pet1.webId),
      (r.name = e.pet1.name),
      (r.level = e.pet1.level),
      (r.figure = e.pet1.figure),
      (r.owner = e.pet1.owner));
    let t = new _i321b08b9450b3c();
    ((t.webId = e.pet2.webId),
      (t.name = e.pet2.name),
      (t.level = e.pet2.level),
      (t.figure = e.pet2.figure),
      (t.owner = e.pet2.owner));
    let i = [];
    for (let s of e._r8e1bcb37bcabfb) {
      let o = new BreedingRarityCategoryData();
      ((o._r191591f86422f9 = s._r191591f86422f9),
        (o.breeds = s.breeds.slice()),
        i.push(o));
    }
    this._container.events.dispatchEvent?.(new Xp(e._reb3874e706dbb7, r, t, i, e._r182cdc80056896));
  }, "_r090d06b6dfb198");
  _r9f53b24dc3215f = n((e) => {
    this._container?.events?.dispatchEvent?.(new u0(e.breedingNestStuffId, e.result));
  }, "_r9f53b24dc3215f");
  _r247d255a7626b3 = n((e) => {
    this._container?.events?.dispatchEvent?.(
      new Lu(e.petId, e._r779246794134a5.slice(), e._r67346f7e899abb.slice()),
    );
  }, "_r247d255a7626b3");
  _rfe1b7ad195a343 = n((e) => {
    this.var_17?._r10d42dea158da9(e.roomIndex, e.habboGroupId, e.status, e._rc51a040212eb56);
  }, "_rfe1b7ad195a343");
  getPetImage(e, r = null) {
    let t = new class_3800(e);
    return (
      (
        this._container?.roomEngine?.getPetImage(
          t.typeId,
          t.paletteId,
          t.color,
          new k(90, 0, 0),
          64,
          null,
          !0,
          0,
          t.customParts,
          r,
        ) ?? null
      )?.data ?? new A(30, 30, !1, 4289374890)
    );
  }
  _rec1a64fc8d4622(e) {
    return this._re2719349c27be3(e, 0);
  }
  _r4ef7cdb6c2b29b(e) {
    return this._re2719349c27be3(e, 1);
  }
  _re2719349c27be3(e, r) {
    if (e != null) {
      let t = e.split(" ");
      if (t.length > r) return Number.parseInt(t[r] ?? "-1", 10);
    }
    return -1;
  }
  _r8ea3cefb0641f7 = n((e) => {
    if (this._r8976fb174e3935 == null || this._container?.events == null) return;
    let r = e.id,
      t = "",
      i = "";
    if (r !== -1) {
      let s = this._r8976fb174e3935._r716cd8f1931469(r);
      s != null && ((t = s.name), (i = s.creator));
    }
    this._container.events.dispatchEvent?.(new RoomWidgetSongUpdateEvent(RoomWidgetSongUpdateEvent.SONG_PLAYING_CHANGED, r, t, i));
  }, "_r8ea3cefb0641f7");
  onSongInfoReceivedEvent = n((e) => {
    if (this._r8976fb174e3935 == null || this._container?.events == null) return;
    let r = this._r8976fb174e3935._r716cd8f1931469(e.id);
    r != null &&
      this._container.events.dispatchEvent?.(new RoomWidgetSongUpdateEvent(RoomWidgetSongUpdateEvent.SONG_DATA_RECEIVED, e.id, r.name, r.creator));
  }, "onSongInfoReceivedEvent");
  _r248e192d6a9177 = n((e) => {
    let r = this.var_17;
    r != null &&
      (r.mainWindow?.visible ?? !1) &&
      e.relationshipStatusMap != null &&
      r._rb0baadd15ced86(e.userId, e.relationshipStatusMap);
  }, "_r248e192d6a9177");
  _r32ca4bbd0315f1() {
    return this._container?.roomEngine;
  }
}

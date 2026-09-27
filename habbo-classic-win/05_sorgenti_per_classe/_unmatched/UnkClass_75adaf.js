// Extracted from HabboAirLauncher.deobf.js, line 292389.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i75adafb7afbf7d

class a {
  static {
    n(this, "UnkClass_75adaf");
  }
  static _r1887e7b0002465 = [0, 45, 90, 135, 180, 225, 270, 315];
  static _re81e7ab3b83e40 = "object_handler";
  _roomEngine = null;
  _r26fdc0db0ba3d7 = new B();
  _r0dad2e27b2e501 = -1;
  _r36ec953aa9755f = -1;
  _r926383ea2cc014 = RoomObjectCategoryEnum.const_434;
  _re24909c5b7da6e = null;
  _rc6f64dc60b6843 = null;
  _r60bfa89f8eb022 = !1;
  _r42d4ba2c00fe47 = !1;
  _r3818683273597b = -1;
  _r7f4dacf8f1c7d4 = -1;
  get roomEngine() {
    return this._roomEngine;
  }
  constructor(e) {
    this._roomEngine = e;
  }
  dispose() {
    (this._r26fdc0db0ba3d7.dispose(), (this._roomEngine = null));
  }
  _re608f4ba68bdcb(e, r, t, i, s, o = null, d = null, c = -1, f = -1, l = null, b = !1) {
    ((this._re24909c5b7da6e = e), (this._r42d4ba2c00fe47 = b));
    let _ = new k(-100, -100),
      h = new k(0);
    return (
      b && i === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && s === this._r3818683273597b && this._r7f4dacf8f1c7d4 >= 0
        ? (h = new k(this._r7f4dacf8f1c7d4))
        : this._raba43ca7e7f48a(),
      this._r57b0cb6c1d52d5(r, t, i, _, h, RoomObjectOperationEnum.OBJECT_PLACE, s, o, d, c, f, l),
      this._roomEngine?._rfe32b54466ddc0(s, i, !1, o, d, c, f, l),
      this._roomEngine?._rb4208639153c2f(!1),
      b && this._r6c25018d40bf62(r, !1),
      !0
    );
  }
  _r3840271e334f01(e) {
    return ((this._r42d4ba2c00fe47 = !1), this._raba43ca7e7f48a(), this._r00c62626fbdaa6(e), !0);
  }
  _r5dfc2a6a8b7c46(e) {
    return this._roomEngine?._r5dfc2a6a8b7c46(e);
  }
  _raba43ca7e7f48a() {
    ((this._r3818683273597b = -1), (this._r7f4dacf8f1c7d4 = -1));
  }
  _r57b0cb6c1d52d5(e, r, t, i, s, o, d = 0, c = null, f = null, l = -1, b = -1, _ = null) {
    if ((this._r00c62626fbdaa6(e), this._r98d60446d3bf58(o), this._roomEngine == null)) return;
    let h = new class_1769(r, t, o, i, s, d, c, f, l, b, _);
    this._roomEngine._r57b0cb6c1d52d5(e, h);
  }
  _r95db4a7db9290e(e, r, t, i, s, o, d = 0, c = null, f = null, l = -1, b = -1, _ = null) {
    if (this._roomEngine == null) return;
    this._r98d60446d3bf58(o);
    let h = new class_1769(r, t, o, i, s, d, c, f, l, b, _);
    this._roomEngine._r57b0cb6c1d52d5(e, h);
  }
  _r98d60446d3bf58(e) {
    e === RoomObjectOperationEnum.OBJECT_MOVE || e === RoomObjectOperationEnum.OBJECT_PLACE ? this._r22a34c88d415f3() : this._rfb12a4cd515df3();
  }
  _r22a34c88d415f3() {
    ((this._r60bfa89f8eb022 = !0), this._roomEngine?.name_1(a._re81e7ab3b83e40, !0, !1));
  }
  _rfb12a4cd515df3() {
    this._r60bfa89f8eb022 &&
      ((this._r60bfa89f8eb022 = !1), this._roomEngine?.name_1(a._re81e7ab3b83e40, !1, !1));
  }
  _r00c62626fbdaa6(e) {
    if (this._roomEngine == null) return;
    this._roomEngine._r6c6a39d086d41a();
    let r = this._r5dfc2a6a8b7c46(e);
    if (r != null) {
      if (r.operation === RoomObjectOperationEnum.OBJECT_MOVE || r.operation === RoomObjectOperationEnum.OBJECT_MOVE_TO) {
        let t = this._roomEngine._ra1f5cb56d0c2d8(e, r.id, r.category);
        (t != null &&
          r.operation !== RoomObjectOperationEnum.OBJECT_MOVE_TO &&
          (r.loc != null && t._rf91a6212aca31a(r.loc), r.dir != null && t.setDirection(r.dir)),
          this._r59d0682e39f166(t, 1),
          r.category === RoomObjectCategoryEnum.const_909 && this._roomEngine._r1e3a7bbbe662d2(e, r.id, !0),
          this._r95db4a7db9290e(
            e,
            r.id,
            r.category,
            r.loc ?? new k(),
            r.dir ?? new k(),
            RoomObjectOperationEnum.OBJECT_MOVE,
            r.typeId,
            r._r669a9820d77b11,
            r.stuffData,
            r.state,
            r._rbd3b0db1317c16,
            r.posture,
          ));
      }
      if (r.operation === RoomObjectOperationEnum.OBJECT_PLACE)
        switch (r.category) {
          case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
            this._roomEngine.disposeObjectFurniture(e, r.id);
            break;
          case RoomObjectCategoryEnum.const_909:
            this._roomEngine._rd7e85a509c569e(e, r.id);
            break;
          case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER:
            this._roomEngine._rc8445f4451c0a0(e, r.id);
            break;
        }
      (this._rfb12a4cd515df3(), this._roomEngine._r57b0cb6c1d52d5(e, null));
    }
  }
  _r3b1140ac40c4cc(e, r, t) {
    if (this._roomEngine == null) return;
    let i = this._roomEngine.events;
    if (i != null)
      switch (t) {
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_USER:
        case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
        case RoomObjectCategoryEnum.const_909:
          if (t === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) (this._r00ce282f7dc8d5(e), this._r9dc70af321fe8f(e, r, !0));
          else if ((this._r9dc70af321fe8f(e, 0, !1), r !== this._r36ec953aa9755f)) {
            this._r00ce282f7dc8d5(e);
            let s = this._roomEngine._ra1f5cb56d0c2d8(e, r, t);
            s?._rc3df04144b8b80() != null &&
              (s._rc3df04144b8b80()?.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_a9a296(!0)),
              (this._r36ec953aa9755f = r),
              (this._r926383ea2cc014 = t));
          }
          i.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.SELECTED, e, r, t));
          break;
      }
  }
  enterNewRoom() {
    ((this._r0dad2e27b2e501 = -1),
      (this._r36ec953aa9755f = -1),
      (this._r926383ea2cc014 = RoomObjectCategoryEnum.const_434),
      (this._re24909c5b7da6e = null),
      this._rfb12a4cd515df3());
  }
  _r00ce282f7dc8d5(e) {
    if (this._r36ec953aa9755f === -1 || this._roomEngine == null) return;
    let r = this._roomEngine._ra1f5cb56d0c2d8(e, this._r36ec953aa9755f, this._r926383ea2cc014);
    r?._rc3df04144b8b80() != null &&
      (r._rc3df04144b8b80()?.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_a9a296(!1)),
      (this._r36ec953aa9755f = -1),
      (this._r926383ea2cc014 = RoomObjectCategoryEnum.const_434));
  }
  _r8a187dc1dc98f5(e, r, t) {
    if (Jn.isRunning() || e == null || r == null || this._roomEngine == null) return;
    let i = r.getType(),
      s = this._roomEngine._r1f8216bd70800f(i);
    if (
      (s === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && this._roomEngine._rc6e01b548b9b58) ||
      ((s === RoomObjectCategoryEnum.const_909 || s === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) && this._roomEngine._rb2f618a015cb5a)
    )
      return;
    if (
      (s !== RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM &&
        (this._roomEngine._rd49f15461de8be()
          ? s !== RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && (s = RoomObjectCategoryEnum.const_434)
          : (s = RoomObjectCategoryEnum.const_434)),
      this._r6e4ddca2231ac8(s, e.type) === e.eventId)
    ) {
      if (
        e.type === UnkClass_fd7c12.CLICK ||
        e.type === UnkClass_fd7c12.DOUBLE_CLICK ||
        e.type === UnkClass_fd7c12._r9001c395573374 ||
        e.type === UnkClass_fd7c12._ra93f33360c3a28 ||
        e.type === UnkClass_fd7c12.var_370
      )
        return;
    } else e.eventId != null && this._r1353977750775f(s, e.type, e.eventId);
    r._rf289f21439d5ea()?.mouseEvent(e, t);
  }
  _r1353977750775f(e, r, t) {
    this._r26fdc0db0ba3d7.setProperty(`${e}_${r}`, t);
  }
  _r6e4ddca2231ac8(e, r) {
    return this._r26fdc0db0ba3d7.getValue(`${e}_${r}`) ?? null;
  }
  handleRoomObjectEvent(e, r) {
    if (e != null) {
      if (e instanceof RoomObjectMouseEvent) {
        this._rb5bbf3487461a5(e, r);
        return;
      }
      switch (e.type) {
        case RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE:
          this._rbff5235edfa609(e, r);
          break;
        case RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_RANDOM:
          this._rc19189bd27d23c(e, r);
          break;
        case a5.const_67:
          this._ra952ab6d9d86be(e, r);
          break;
        case RoomObjectMoveEvent.const_1059:
          this._r1e7aaef03154d6(e, r);
          break;
        case RoomObjectMoveEvent.const_396:
          this._rf1bb539867f4ce(e, r);
          break;
        case RoomObjectMoveEvent.SLIDE_ANIMATION:
          this._re13ee7211caaf0(e, r);
          break;
        case RoomObjectWidgetRequestEvent.OPEN_WIDGET:
        case RoomObjectWidgetRequestEvent.CLOSE_WIDGET:
        case RoomObjectWidgetRequestEvent.OPEN_FURNI_CONTEXT_MENU:
        case RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU:
        case RoomObjectWidgetRequestEvent.PLACEHOLDER:
        case RoomObjectWidgetRequestEvent.CREDITFURNI:
        case RoomObjectWidgetRequestEvent.STICKIE:
        case RoomObjectWidgetRequestEvent.PRESENT:
        case RoomObjectWidgetRequestEvent.TROPHY:
        case RoomObjectWidgetRequestEvent.TEASER:
        case RoomObjectWidgetRequestEvent.ECOTRONBOX:
        case RoomObjectWidgetRequestEvent.DIMMER:
        case RoomObjectWidgetRequestEvent.REMOVE_DIMMER:
        case RoomObjectWidgetRequestEvent.CLOTHING_CHANGE:
        case RoomObjectWidgetRequestEvent.PLAYLIST_EDITOR:
        case RoomObjectWidgetRequestEvent.MANNEQUIN:
        case RoomObjectWidgetRequestEvent.PET_PRODUCT_MENU:
        case RoomObjectWidgetRequestEvent.GUILD_FURNI_CONTEXT_MENU:
        case RoomObjectWidgetRequestEvent.MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG:
        case RoomObjectWidgetRequestEvent.const_557:
        case RoomObjectWidgetRequestEvent.BACKGROUND_COLOR:
        case RoomObjectWidgetRequestEvent.const_1303:
        case RoomObjectWidgetRequestEvent.MYSTERYBOX_OPEN_DIALOG:
        case RoomObjectWidgetRequestEvent.const_446:
        case RoomObjectWidgetRequestEvent.MYSTERYTROPHY_OPEN_DIALOG:
        case RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_OPEN:
        case RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_ENGRAVING:
        case RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_FAILED:
        case RoomObjectWidgetRequestEvent.FRIEND_FURNITURE_CONFIRM:
        case RoomObjectWidgetRequestEvent.FRIEND_FURNITURE_ENGRAVING:
        case RoomObjectWidgetRequestEvent.BADGE_DISPLAY_ENGRAVING:
        case RoomObjectWidgetRequestEvent.const_121:
        case RoomObjectWidgetRequestEvent.const_662:
        case RoomObjectWidgetRequestEvent.INTERNAL_LINK:
        case RoomObjectWidgetRequestEvent.ROOM_LINK:
          this._r4f2ac6b735c14d(e, r);
          break;
        case RoomObjectFurnitureActionEvent.const_661:
        case RoomObjectFurnitureActionEvent.const_733:
        case RoomObjectFurnitureActionEvent.USE_HABBOWHEEL:
        case RoomObjectFurnitureActionEvent.STICKIE:
        case RoomObjectFurnitureActionEvent.const_184:
        case RoomObjectFurnitureActionEvent.NFT_REWARD_BOX:
          this._rf0c4ef111fe832(e, r);
          break;
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_INIT:
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_START:
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_STOP:
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_DISPOSE:
          this._ra7a1625ab287d1(e, r);
          break;
        case RoomObjectFurnitureActionEvent.JUKEBOX_INIT:
        case RoomObjectFurnitureActionEvent.const_1240:
        case RoomObjectFurnitureActionEvent.const_222:
        case RoomObjectFurnitureActionEvent.const_73:
          this._r05f0911dc23716(e, r);
          break;
        case RoomObjectFloorHoleEvent.ADD_HOLE:
        case RoomObjectFloorHoleEvent.REMOVE_HOLE:
          this._r6281a4bf45453d(e, r);
          break;
        case gi.ROOM_AD_FURNI_CLICK:
        case gi.ROOM_AD_FURNI_DOUBLE_CLICK:
        case gi.ROOM_AD_TOOLTIP_SHOW:
        case gi.ROOM_AD_TOOLTIP_HIDE:
        case gi.ROOM_AD_LOAD_IMAGE:
          this._rc6ac87945b3334(e, r);
          break;
        case RoomObjectBadgeAssetEvent.LOAD_BADGE:
          this._re221f961f2fd95(e, r);
          break;
        case RoomObjectFurniIconAssetEvent.const_1367:
          this._rd0e26579667a68(e, r);
          break;
        case RoomObjectFurnitureActionEvent.CURSOR_REQUEST_ARROW:
        case RoomObjectFurnitureActionEvent.CURSOR_REQUEST_BUTTON:
          this._re5399c938fd41a(e, r);
          break;
        case RoomObjectPlaySoundIdEvent.PLAY_SOUND:
        case RoomObjectPlaySoundIdEvent.PLAY_SOUND_AT_PITCH:
          this._rc59a7d94b036d8(e, r);
          break;
        case RoomObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED:
        case RoomObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED:
        case RoomObjectSamplePlaybackEvent.PLAY_SAMPLE:
          this._r603b1246d48381(e, r);
          break;
        case RoomObjectHSLColorEnableEvent.ROOM_BACKGROUND_COLOR:
          this._r805803a7f097d2(e, r);
          break;
        case RoomObjectDataRequestEvent.CURRENT_USER_ID:
        case RoomObjectDataRequestEvent.URL_PREFIX:
          this._r49f770655e1933(e, r);
          break;
        default:
          break;
      }
    }
  }
  _rb5bbf3487461a5(e, r) {
    switch ((e instanceof RoomObjectTileMouseEvent && this.roomEngine?._r607a58da345e94?.handleTileMouseEvent(e), e.type)) {
      case RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_CLICK:
        this._rd44b709921c339(e, r);
        break;
      case RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_MOVE:
        this._r15ccf6efb6feba(e, r);
        break;
      case RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_DOWN:
        this._r15e22caf5ef37b(e, r);
        break;
      case RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_ENTER:
        this._r7b36b48ae1e30a(e, r);
        break;
      case RoomObjectMouseEvent.ROOM_OBJECT_MOUSE_LEAVE:
        this._r2cddf5bf4d7f9e(e, r);
        break;
    }
  }
  _rb2520d6ff8d39d(e, r) {
    if (e.altKey || e.ctrlKey || e.shiftKey || this._roomEngine?.connection == null) return;
    let t = e.objectId,
      i = e.objectType ?? "",
      s = this._roomEngine._r1f8216bd70800f(i);
    s === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
      ? this._roomEngine.connection.send(new UnkMessageComposer_2args_aa6550(t))
      : s === RoomObjectCategoryEnum.const_909
        ? this._roomEngine.connection.send(new UnkMessageComposer_2args_aa6550(-t))
        : s === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && this._roomEngine.connection.send(new UnkMessageComposer_1args_8bad4e(t));
  }
  _rd44b709921c339(e, r) {
    if (e == null || this._roomEngine == null) return;
    this._rb2520d6ff8d39d(e, r);
    let t = !1,
      i = RoomObjectOperationEnum.OBJECT_UNDEFINED,
      s = this._r5dfc2a6a8b7c46(r);
    (s != null && (i = s.operation),
      this._r6bf1500d09d324() &&
        (i == null || i === RoomObjectOperationEnum.OBJECT_UNDEFINED) &&
        (t = this._r2eaefecdd7bfaf(r, e)));
    let o = e.objectId,
      d = e.objectType ?? "",
      c = this._roomEngine._r1f8216bd70800f(d),
      f = e.eventId,
      l = e instanceof RoomObjectTileMouseEvent ? e : null,
      b = e instanceof RoomObjectWallMouseEvent ? e : null,
      _ = !1,
      h = this._roomEngine.events;
    switch (i) {
      case RoomObjectOperationEnum.OBJECT_MOVE:
        (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM
          ? s != null && this._r9cc46b2b079405(r, s.id, s.category, RoomObjectOperationEnum.OBJECT_MOVE_TO)
          : c === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER &&
            (s != null &&
              (d === Ea.MONSTERPLANT || d === Ea.RENTABLE_BOT) &&
              this._r9cc46b2b079405(r, s.id, s.category, RoomObjectOperationEnum.OBJECT_MOVE_TO),
            f != null && this._r1353977750775f(RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM, UnkClass_fd7c12.CLICK, f),
            this._rcf27124f32a2fe(r, o, c)),
          (_ = !0),
          o !== -1 && this._r3b1140ac40c4cc(r, o, c));
        break;
      case RoomObjectOperationEnum.OBJECT_PLACE:
        if (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM) this._rb408f732f0dec1(r, l != null, b != null);
        else if (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
          switch (d) {
            case Ea.MONSTERPLANT:
            case Ea.RENTABLE_BOT:
              this._rb408f732f0dec1(r, l != null, b != null);
              break;
            default:
              (f != null && this._r1353977750775f(RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM, UnkClass_fd7c12.CLICK, f),
                this._rcf27124f32a2fe(r, o, c));
              break;
          }
        break;
      case RoomObjectOperationEnum.OBJECT_UNDEFINED: {
        if (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM) l != null && !t && this._r070fb26cdd9b46(r, l);
        else {
          let p =
              !e.ctrlKey &&
              !e.altKey &&
              e.shiftKey &&
              c === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER &&
              (d === Ea.RENTABLE_BOT || d === Ea.MONSTERPLANT),
            m = !1;
          (p && (m = this._r9cc46b2b079405(r, o, c, RoomObjectOperationEnum.OBJECT_ROTATE_POSITIVE)),
            !m && (!this.roomEngine?._rf2e9958b3af8fb() || c === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
              ? this._r3b1140ac40c4cc(r, o, c)
              : m ||
                (this._r00ce282f7dc8d5(r),
                h?.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.DESELECTED, r, -1, RoomObjectCategoryEnum.const_434))));
          let v = !1;
          (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER
            ? (e.ctrlKey && !e.altKey && !e.shiftKey && d === Ea.RENTABLE_BOT
                ? this._r9cc46b2b079405(r, o, c, RoomObjectOperationEnum.OBJECT_PICKUP_BOT)
                : p
                  ? m || this._r9cc46b2b079405(r, o, c, RoomObjectOperationEnum.OBJECT_ROTATE_POSITIVE)
                  : e.ctrlKey && !e.altKey && !e.shiftKey && d === Ea.MONSTERPLANT
                    ? this._r9cc46b2b079405(r, o, c, RoomObjectOperationEnum.OBJECT_PICKUP_PET)
                    : this._rd678502937b17b(o, e),
              this._roomEngine._rd49f15461de8be() ? (v = !0) : (t = !0))
            : (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE || c === RoomObjectCategoryEnum.const_909) &&
              (e.altKey || e.ctrlKey || e.shiftKey) &&
              !this._roomEngine._r880a2521997aa0 &&
              (!e.ctrlKey && !e.altKey && e.shiftKey
                ? c === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && h?.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.REQUEST_ROTATE, r, o, c))
                : e.ctrlKey &&
                  !e.altKey &&
                  !e.shiftKey &&
                  h?.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.REQUEST_PICKUP, r, o, c)),
              this._roomEngine._rd49f15461de8be() ? (v = !0) : (t = !0)),
            f != null &&
              (t && this._r1353977750775f(RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM, UnkClass_fd7c12.CLICK, f),
              v && this._r1353977750775f(RoomObjectCategoryEnum.const_434, UnkClass_fd7c12.CLICK, f)));
        }
        break;
      }
    }
    if (c === RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM) {
      let p = this._r6e4ddca2231ac8(RoomObjectCategoryEnum.const_434, UnkClass_fd7c12.CLICK),
        m = this._r6e4ddca2231ac8(RoomObjectCategoryEnum.OBJECT_CATEGORY_USER, UnkClass_fd7c12.CLICK);
      p !== f &&
        m !== f &&
        !_ &&
        (this._r00ce282f7dc8d5(r),
        h?.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.DESELECTED, r, -1, RoomObjectCategoryEnum.const_434)),
        this._r9dc70af321fe8f(r, 0, !1));
    }
  }
  _r6c25018d40bf62(e, r = !0) {
    if (r) {
      let t = this._r5dfc2a6a8b7c46(e);
      if (t == null) return;
      let i = t.operation;
      if (i !== RoomObjectOperationEnum.OBJECT_MOVE && i !== RoomObjectOperationEnum.OBJECT_PLACE) return;
    }
    this._r15ccf6efb6feba(this._rc6f64dc60b6843, e);
  }
  _r15ccf6efb6feba(e, r) {
    if (e == null || this._roomEngine == null) return;
    this._rc6f64dc60b6843 = e;
    let t = RoomObjectOperationEnum.OBJECT_UNDEFINED,
      i = this._r5dfc2a6a8b7c46(r);
    i != null && (t = i.operation);
    let s = e.objectType ?? "",
      o = this._roomEngine._r1f8216bd70800f(s),
      d = this._roomEngine._rcb4fbbcd5da471(r);
    if (d?._rc3df04144b8b80() != null) {
      let c = null;
      e instanceof RoomObjectTileMouseEvent
        ? (c = this._r768aa37bcb829e(e, r))
        : e.object != null && e.object.getId() !== -1
          ? this._r6bf1500d09d324() && (c = this._rbfb8f033c74d5d(o, r, e))
          : (c = new RoomObjectTileCursorUpdateMessage(null, 0, !1, e.eventId));
      let f = d._rc3df04144b8b80();
      f?.processUpdateMessage(c);
    }
    switch (t) {
      case RoomObjectOperationEnum.OBJECT_MOVE:
        o === RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM && this._r2c5244ae13067b(e, r);
        break;
      case RoomObjectOperationEnum.OBJECT_PLACE:
        o === RoomObjectCategoryEnum.OBJECT_CATEGORY_ROOM && this._r3fd523f72dc6b9(e, r);
        break;
    }
  }
  _r768aa37bcb829e(e, r) {
    if (this._r6bf1500d09d324())
      return new RoomObjectTileCursorUpdateMessage(new k(e.tileXAsInt, e.tileYAsInt, e._r68611cc6de4b35), 0, !0, e.eventId);
    if (
      this._roomEngine?._rcb4fbbcd5da471(r)?._rc3df04144b8b80() == null ||
      this._roomEngine == null
    )
      return null;
    let i = e.tileXAsInt,
      s = e.tileYAsInt,
      o = e._r68611cc6de4b35,
      d = this._roomEngine._re52d2f0d9bde35(r);
    if (d == null) return null;
    let c = d._rb286931a473a8f(i, s),
      f = this._roomEngine._r27845e49c42e49(r);
    if (f == null) return null;
    if (
      c?.getStringToStringMap() != null &&
      (c.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_IS_VARIABLE_HEIGHT) ?? 0) > 0
    ) {
      let l = f.getTileHeight(i, s),
        b = this._roomEngine._r847b0dcadd8c9f(r)?.getTileHeight(i, s) ?? 0;
      return new RoomObjectTileCursorUpdateMessage(new k(i, s, o), l - b, !0, e.eventId);
    }
    return new RoomObjectTileCursorUpdateMessage(new k(i, s, o), 0, !0, e.eventId);
  }
  _rbfb8f033c74d5d(e, r, t) {
    if (this._roomEngine == null || e !== RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) return null;
    let i = this._roomEngine._ra1f5cb56d0c2d8(r, t.objectId, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE);
    if (i == null) return null;
    let s = this._r6fa7b2ae73612d(i, t);
    return s == null || this._roomEngine._r27845e49c42e49(r) == null
      ? null
      : new RoomObjectTileCursorUpdateMessage(new k(s.x, s.y, i.getLocation()?.z ?? 0), s.z, !0, t.eventId);
  }
  _r7b36b48ae1e30a(e, r) {
    if (this._roomEngine == null) return;
    let t = e.objectType ?? "",
      i = e.objectId;
    (this._roomEngine._r1f8216bd70800f(t) === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && this._r4ac12e64c2b2cf(i, e, r),
      this._roomEngine.events.dispatchEvent?.(
        new RoomEngineObjectEvent(
          RoomEngineObjectEvent.MOUSE_ENTER,
          r,
          e.objectId,
          this._roomEngine._r1f8216bd70800f(e.objectType ?? ""),
        ),
      ));
  }
  _r2cddf5bf4d7f9e(e, r) {
    if (this._roomEngine == null) return;
    let t = e.objectType ?? "";
    if (this._roomEngine._r1f8216bd70800f(t) === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) {
      let s = this._roomEngine._rcb4fbbcd5da471(r);
      if (s?._rc3df04144b8b80() != null) {
        let o = new UnkRoomObjectUpdateMessageSubclass_39f7ec(0, new mi()),
          d = s._rc3df04144b8b80();
        d?.processUpdateMessage(o);
      }
    }
    this._roomEngine.events.dispatchEvent?.(
      new RoomEngineObjectEvent(
        RoomEngineObjectEvent.MOUSE_LEAVE,
        r,
        e.objectId,
        this._roomEngine._r1f8216bd70800f(e.objectType ?? ""),
      ),
    );
  }
  _r15e22caf5ef37b(e, r) {
    if (e == null || e instanceof RoomObjectTileMouseEvent) return;
    let t = RoomObjectOperationEnum.OBJECT_UNDEFINED,
      i = this._r5dfc2a6a8b7c46(r);
    i != null && (t = i.operation);
    let s = e.objectId,
      o = e.objectType ?? "",
      d = this._roomEngine?._r1f8216bd70800f(o) ?? RoomObjectCategoryEnum.const_434;
    t === RoomObjectOperationEnum.OBJECT_UNDEFINED &&
      (d === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE ||
        d === RoomObjectCategoryEnum.const_909 ||
        o === Ea.MONSTERPLANT ||
        o === Ea.RENTABLE_BOT) &&
      ((e.altKey && !e.ctrlKey && !e.shiftKey) || this._r885e689f8bd32a(e)) &&
      !this._roomEngine?._r880a2521997aa0 &&
      this._roomEngine?.events.dispatchEvent?.(new RoomEngineObjectEvent(RoomEngineObjectEvent.REQUEST_MOVE, r, s, d));
  }
  _r885e689f8bd32a(e) {
    return !!this._roomEngine?._r67c88eecaceaf0 && !(e.ctrlKey || e.shiftKey);
  }
  _r2c5244ae13067b(e, r) {
    if (e == null || this._roomEngine == null || this._roomEngine.events == null) return;
    let t = this._r5dfc2a6a8b7c46(r);
    if (t == null) return;
    let i = this._roomEngine._ra1f5cb56d0c2d8(r, t.id, t.category);
    if (i == null) return;
    let s = !0;
    if (t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE || t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) {
      let o = this._roomEngine._r27845e49c42e49(r),
        d = e instanceof RoomObjectTileMouseEvent ? e : null;
      (d != null && this._r2dbde67545e99e(i, t, d._r8cd881fce01c28 + 0.5, d._rc8a3440ff104a3 + 0.5, o)) ||
        (this._r2dbde67545e99e(i, t, t.loc?.x ?? 0, t.loc?.y ?? 0, o), (s = !1));
    } else if (t.category === RoomObjectCategoryEnum.const_909) {
      s = !1;
      let o = e instanceof RoomObjectWallMouseEvent ? e : null;
      (o != null &&
        this._r3e9c07e82d3713(
          i,
          t,
          o._r8a8bd2d04c661f,
          o._rba969418d11b94,
          o.wallHeight,
          o.x,
          o.y,
          o.direction,
        ) &&
        (s = !0),
        s || (t.loc != null && i._rf91a6212aca31a(t.loc), t.dir != null && i.setDirection(t.dir)),
        this._roomEngine._r1e3a7bbbe662d2(r, t.id, s));
    }
    s
      ? (this._r59d0682e39f166(i, 0.5), this._roomEngine._rb4208639153c2f(!1))
      : (this._r59d0682e39f166(i, 0), this._roomEngine._rb4208639153c2f(!0));
  }
  _r3fd523f72dc6b9(e, r) {
    if (e == null || this._roomEngine == null || this._roomEngine.events == null) return;
    let t = this._r5dfc2a6a8b7c46(r);
    if (t == null) return;
    let i = this._roomEngine._ra1f5cb56d0c2d8(r, t.id, t.category),
      s = e instanceof RoomObjectTileMouseEvent ? e : null,
      o = e instanceof RoomObjectWallMouseEvent ? e : null;
    if (i == null) {
      if (t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE && s != null)
        this._roomEngine._r5f200af79cf909(
          r,
          t.id,
          t.typeId,
          t.loc ?? new k(),
          t.dir ?? new k(),
          t.state,
          t.stuffData ?? new mi(),
          Number(t._r669a9820d77b11),
          -1,
          0,
          0,
          "",
          !1,
        );
      else if (t.category === RoomObjectCategoryEnum.const_909 && o != null)
        this._roomEngine._r7feb9ada4ab53f(
          r,
          t.id,
          t.typeId,
          t.loc ?? new k(),
          t.dir ?? new k(),
          0,
          t._r669a9820d77b11 ?? "",
          0,
        );
      else if (t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && s != null) {
        this._roomEngine._r03c1f621ae28e1(
          r,
          t.id,
          new k(),
          new k(180),
          180,
          t.typeId,
          t._r669a9820d77b11,
        );
        let l = this._roomEngine._ra1f5cb56d0c2d8(r, t.id, t.category)?.getStringToStringMap();
        l != null && t.posture != null && l.setString(RoomObjectVariableEnum.AVATAR_POSTURE, t.posture);
      }
      if (
        ((i = this._roomEngine._ra1f5cb56d0c2d8(r, t.id, t.category)),
        i != null && t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE)
      ) {
        let f = i.getStringToStringMap()?._r90cb3676fb77dd(RoomObjectVariableEnum.const_1272);
        if (f != null && f.length > 0) {
          let l = f[0],
            b = Math.trunc(t.dir?.x ?? 0);
          f.indexOf(b) >= 0 && (l = b);
          let _ = new k(l);
          if (
            (i.setDirection(_),
            this._r95db4a7db9290e(
              r,
              t.id,
              t.category,
              t.loc ?? new k(),
              _,
              t.operation,
              t.typeId,
              t._r669a9820d77b11,
              t.stuffData,
              t.state,
              t._rbd3b0db1317c16,
              t.posture,
            ),
            (t = this._r5dfc2a6a8b7c46(r)),
            t == null)
          )
            return;
        }
      }
      (this._r59d0682e39f166(i, 0.5), this._roomEngine._rb4208639153c2f(!0));
    }
    if (i == null) return;
    let d = !0,
      c = this._roomEngine._r27845e49c42e49(r);
    (t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
      ? (s != null && this._r2dbde67545e99e(i, t, s._r8cd881fce01c28 + 0.5, s._rc8a3440ff104a3 + 0.5, c)) ||
        (this._roomEngine.disposeObjectFurniture(r, t.id), (d = !1))
      : t.category === RoomObjectCategoryEnum.const_909
        ? ((d = !1),
          o != null &&
            this._r3e9c07e82d3713(
              i,
              t,
              o._r8a8bd2d04c661f,
              o._rba969418d11b94,
              o.wallHeight,
              o.x,
              o.y,
              o.direction,
            ) &&
            (d = !0),
          d || this._roomEngine._rd7e85a509c569e(r, t.id),
          this._roomEngine._r1e3a7bbbe662d2(r, t.id, d))
        : t.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER &&
          ((s != null &&
            this._rb1bf328c4bf2c9(
              i,
              s._r8cd881fce01c28 + 0.5,
              s._rc8a3440ff104a3 + 0.5,
              this._roomEngine._r847b0dcadd8c9f(r),
            )) ||
            (this._roomEngine._rc8445f4451c0a0(r, t.id), (d = !1))),
      this._roomEngine._rb4208639153c2f(!d));
  }
  _r2eaefecdd7bfaf(e, r) {
    if (this._roomEngine == null) return !1;
    let t = this._roomEngine._ra1f5cb56d0c2d8(e, r.objectId, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE),
      i = this._r6fa7b2ae73612d(t, r);
    return i != null && !this.roomEngine?._ra143ca99cc4080() ? (this._r004f195ea791cc(i.x, i.y), !0) : !1;
  }
  _r6fa7b2ae73612d(e, r) {
    if (e == null || r == null || this._roomEngine?.sessionDataManager == null) return null;
    let t = this._roomEngine.sessionDataManager.getFloorItemDataByName(e.getType());
    if (t == null || !(t.canStandOn || t._r0bf36af5b8d26a || t._ra7f1805c6d48e8)) return null;
    let i = e.getStringToStringMap();
    if (i == null) return null;
    let s = Math.trunc(e.getLocation()?.x ?? 0),
      o = Math.trunc(e.getLocation()?.y ?? 0),
      d = Math.trunc(i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693)),
      c = Math.trunc(i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_230)),
      f = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_357),
      l = Math.trunc(e.getDirection()?.x ?? 0);
    if (l === 90 || l === 270) {
      let S = d;
      ((d = c), (c = S));
    }
    (d < 1 && (d = 1), c < 1 && (c = 1));
    let b = this._roomEngine._r557abb4396cd44();
    if (b?.geometry == null) return null;
    let _ = b.geometry.scale,
      h = t._r0bf36af5b8d26a,
      p = h ? 0.5 : 0,
      m = (_ / 2 + r._r4667d782ad64ed + r.localX) / (_ / 4),
      v = (r._r4694aaf1f688a5 + r.localY + ((f - p) * _) / 2) / (_ / 4),
      w = (m + 2 * v) / 4,
      I = (m - 2 * v) / 4,
      C = Math.floor(s + w),
      W = Math.floor(o - I + 1),
      R = !1;
    (C < s || C >= s + d || W < o || W >= o + c) && (R = !0);
    let T = h ? f - 0.5 : f;
    return R ? null : new k(C, W, T);
  }
  _rbff5235edfa609(e, r) {
    e != null && this._r14e4651178594c(r, e.objectId, e.objectType ?? "", e.param, !1);
  }
  _rc19189bd27d23c(e, r) {
    e != null && this._r14e4651178594c(r, e.objectId, e.objectType ?? "", e.param, !0);
  }
  _r4f2ac6b735c14d(e, r) {
    if (this._roomEngine == null || e == null) return;
    let t = e.objectId,
      i = e.objectType ?? "",
      s = this._roomEngine._r1f8216bd70800f(i),
      o = this._roomEngine.events,
      c = e.object?._rc3df04144b8b80();
    switch (e.type) {
      case RoomObjectWidgetRequestEvent.OPEN_WIDGET:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET, r, t, s, c?.widget ?? null));
        break;
      case RoomObjectWidgetRequestEvent.CLOSE_WIDGET:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET, r, t, s, c?.widget ?? null));
        break;
      case RoomObjectWidgetRequestEvent.OPEN_FURNI_CONTEXT_MENU:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_OPEN_FURNI_CONTEXT_MENU, r, t, s, c?.contextMenu ?? null));
        break;
      case RoomObjectWidgetRequestEvent.CLOSE_FURNI_CONTEXT_MENU:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_CLOSE_FURNI_CONTEXT_MENU, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.PLACEHOLDER:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_PLACEHOLDER, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.CREDITFURNI:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_CREDITFURNI, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.STICKIE:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_STICKIE, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.PRESENT:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_PRESENT, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.TROPHY:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_TROPHY, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.TEASER:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_TEASER, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.ECOTRONBOX:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_ECOTRONBOX, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.DIMMER:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_DIMMER, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.REMOVE_DIMMER:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REMOVE_DIMMER, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.CLOTHING_CHANGE:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_CLOTHING_CHANGE, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.PLAYLIST_EDITOR:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_PLAYLIST_EDITOR, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.MANNEQUIN:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_MANNEQUIN, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.PET_PRODUCT_MENU:
        o.dispatchEvent?.(new RoomEngineUseProductEvent(RoomEngineUseProductEvent.USE_PRODUCT_FROM_ROOM, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.GUILD_FURNI_CONTEXT_MENU: {
        let f = Math.trunc(e.object?.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_699) ?? 0);
        this._roomEngine.connection?.send?.(new class_3734(e.objectId, f));
        break;
      }
      case RoomObjectWidgetRequestEvent.MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_MONSTERPLANT_SEED_PLANT_CONFIRMATION_DIALOG, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.const_557:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_PURCHASABLE_CLOTHING_CONFIRMATION_DIALOG, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.BACKGROUND_COLOR:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_BACKGROUND_COLOR, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.const_1303:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_AREA_HIDE, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.MYSTERYBOX_OPEN_DIALOG:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_MYSTERYBOX_OPEN_DIALOG, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.const_446:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_EFFECTBOX_OPEN_DIALOG, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.MYSTERYTROPHY_OPEN_DIALOG:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_MYSTERYTROPHY_OPEN_DIALOG, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_OPEN:
        this._roomEngine.connection?.send?.(new class_2491(e.objectId, 0));
        break;
      case RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_ENGRAVING:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_ACHIEVEMENT_RESOLUTION_ENGRAVING, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.ACHIEVEMENT_RESOLUTION_FAILED:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_ACHIEVEMENT_RESOLUTION_FAILED, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.FRIEND_FURNITURE_CONFIRM:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_FRIEND_FURNITURE_CONFIRM, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.FRIEND_FURNITURE_ENGRAVING:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_FRIEND_FURNITURE_ENGRAVING, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.BADGE_DISPLAY_ENGRAVING:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_BADGE_DISPLAY_ENGRAVING, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.const_121:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_HIGH_SCORE_DISPLAY, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.const_662:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_HIDE_HIGH_SCORE_DISPLAY, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.INTERNAL_LINK:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_INTERNAL_LINK, r, t, s));
        break;
      case RoomObjectWidgetRequestEvent.ROOM_LINK:
        o.dispatchEvent?.(new RoomEngineToWidgetEvent(RoomEngineToWidgetEvent.REQUEST_ROOM_LINK, r, t, s));
        break;
    }
  }
  _rc6ac87945b3334(e, r) {
    if (this._roomEngine?.events == null || e == null) return;
    let t = e.objectId,
      i = e.objectType ?? "",
      s = this._roomEngine._r1f8216bd70800f(i),
      o = e,
      d = null;
    switch (e.type) {
      case gi.ROOM_AD_FURNI_CLICK:
        (this._roomEngine.events.dispatchEvent?.(e),
          o != null &&
            this._roomEngine.toolbar != null &&
            (o.clickUrl === "NAVIGATOR_GAMES"
              ? this._roomEngine.toolbar._r2b0be5baed9721?.("GAMES")
              : o.clickUrl !== "" && globalThis.open?.(o.clickUrl, "_blank")),
          (d = RoomEngineRoomAdEvent.FURNI_CLICK));
        break;
      case gi.ROOM_AD_FURNI_DOUBLE_CLICK:
        if (o != null && this._roomEngine.catalog != null) {
          let c = o.clickUrl,
            f = "CATALOG_PAGE:";
          if (c != null && c.indexOf(f) === 0) {
            let l = c.substring(f.length);
            this._roomEngine.catalog.openCatalogPage?.(l);
          }
        }
        d = RoomEngineRoomAdEvent.FURNI_DOUBLE_CLICK;
        break;
      case gi.ROOM_AD_TOOLTIP_SHOW:
        d = RoomEngineRoomAdEvent.TOOLTIP_SHOW;
        break;
      case gi.ROOM_AD_TOOLTIP_HIDE:
        d = RoomEngineRoomAdEvent.TOOLTIP_HIDE;
        break;
      case gi.ROOM_AD_LOAD_IMAGE:
        o != null && this._roomEngine._r042e2306d897f3(r, t, s, o.imageUrl, o.clickUrl);
        break;
    }
    d != null && this._roomEngine.events.dispatchEvent?.(new RoomEngineObjectEvent(d, r, t, s));
  }
  _rf0c4ef111fe832(e, r) {
    e != null && this._rce2b5eb85a79e0(r, e.objectId, e.objectType ?? "", e.type);
  }
  _ra7a1625ab287d1(e, r) {
    if (e == null || this._roomEngine == null) return;
    let t = this._roomEngine._r1f8216bd70800f(e.objectType ?? ""),
      i = this._r5dfc2a6a8b7c46(r);
    if (!(i != null && i.category === t && i.id === e.objectId && i.operation === RoomObjectOperationEnum.OBJECT_PLACE))
      switch (e.type) {
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_INIT:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.SOUND_MACHINE_INIT, r, e.objectId, t));
          break;
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_START:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.SOUND_MACHINE_SWITCHED_ON, r, e.objectId, t));
          break;
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_STOP:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.SOUND_MACHINE_SWITCHED_OFF, r, e.objectId, t));
          break;
        case RoomObjectFurnitureActionEvent.SOUND_MACHINE_DISPOSE:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.SOUND_MACHINE_DISPOSE, r, e.objectId, t));
          break;
      }
  }
  _r05f0911dc23716(e, r) {
    if (e == null || this._roomEngine == null) return;
    let t = this._roomEngine._r1f8216bd70800f(e.objectType ?? ""),
      i = this._r5dfc2a6a8b7c46(r);
    if (!(i != null && i.category === t && i.id === e.objectId && i.operation === RoomObjectOperationEnum.OBJECT_PLACE))
      switch (e.type) {
        case RoomObjectFurnitureActionEvent.JUKEBOX_INIT:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.JUKEBOX_INIT, r, e.objectId, t));
          break;
        case RoomObjectFurnitureActionEvent.const_1240:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.const_1035, r, e.objectId, t));
          break;
        case RoomObjectFurnitureActionEvent.const_222:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.const_1408, r, e.objectId, t));
          break;
        case RoomObjectFurnitureActionEvent.const_73:
          this._roomEngine.events.dispatchEvent?.(new RoomEngineSoundMachineEvent(RoomEngineSoundMachineEvent.const_73, r, e.objectId, t));
          break;
      }
  }
  _re221f961f2fd95(e, r) {
    if (this._roomEngine?.events == null || e == null) return;
    let t = e.objectId,
      i = e.objectType ?? "",
      s = this._roomEngine._r1f8216bd70800f(i);
    if (e.type === RoomObjectBadgeAssetEvent.LOAD_BADGE) {
      let o = e;
      o != null && this._roomEngine._re0d82c8476bf83(r, t, s, o.badgeId, o.groupBadge);
    }
  }
  _rd0e26579667a68(e, r) {
    if (this._roomEngine?.events == null || e == null) return;
    let t = e.objectId,
      i = e.objectType ?? "",
      s = this._roomEngine._r1f8216bd70800f(i);
    if (e.type === RoomObjectFurniIconAssetEvent.const_1367) {
      let o = e;
      o != null && this._roomEngine._ra5c07ed34f62b1(r, t, s, o.wallItem, o.typeId, o.extra);
    }
  }
  _r6281a4bf45453d(e, r) {
    if (!(e == null || this._roomEngine == null))
      switch (e.type) {
        case RoomObjectFloorHoleEvent.ADD_HOLE:
          this._roomEngine._r2013da28a384d9(r, e.objectId);
          break;
        case RoomObjectFloorHoleEvent.REMOVE_HOLE:
          this._roomEngine._r8ff1158f880ba5(r, e.objectId);
          break;
      }
  }
  _re5399c938fd41a(e, r) {
    this._roomEngine?._rec756885301724(e.type, e.objectId, e.objectType ?? "");
  }
  _ra952ab6d9d86be(e, r) {
    if (!(e == null || this._roomEngine?.connection == null) && e.type === a5.const_67) {
      let t = e;
      t != null &&
        this._roomEngine.events.dispatchEvent?.(
          new Zh(r, e.objectId, t.state, t._r906ad459546ee7, t.effectId, t.color, t.brightness),
        );
    }
  }
  _rc59a7d94b036d8(e, r) {
    if (e == null || this._roomEngine?.connection == null) return;
    let t = this._roomEngine._r1f8216bd70800f(e.objectType ?? "");
    switch (e.type) {
      case RoomObjectPlaySoundIdEvent.PLAY_SOUND:
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineObjectPlaySoundEvent(RoomEngineObjectPlaySoundEvent.PLAY_SOUND, r, e.objectId, t, e.soundId, e.pitch),
        );
        break;
      case RoomObjectPlaySoundIdEvent.PLAY_SOUND_AT_PITCH:
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineObjectPlaySoundEvent(RoomEngineObjectPlaySoundEvent.PLAY_SOUND_AT_PITCH, r, e.objectId, t, e.soundId, e.pitch),
        );
        break;
    }
  }
  _r603b1246d48381(e, r) {
    if (e == null || this._roomEngine?.connection == null) return;
    let t = this._roomEngine._r1f8216bd70800f(e.objectType ?? "");
    switch (e.type) {
      case RoomObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED:
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineObjectSamplePlaybackEvent(RoomEngineObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED, r, e.objectId, t, e.sampleId, e.pitch),
        );
        break;
      case RoomObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED:
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineObjectSamplePlaybackEvent(RoomEngineObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED, r, e.objectId, t, e.sampleId, e.pitch),
        );
        break;
      case RoomObjectSamplePlaybackEvent.PLAY_SAMPLE:
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineObjectSamplePlaybackEvent(RoomEngineObjectSamplePlaybackEvent.PLAY_SAMPLE, r, e.objectId, t, e.sampleId, e.pitch),
        );
        break;
      case RoomObjectSamplePlaybackEvent.CHANGE_PITCH:
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineObjectSamplePlaybackEvent(RoomEngineObjectSamplePlaybackEvent.CHANGE_PITCH, r, e.objectId, t, e.sampleId, e.pitch),
        );
        break;
    }
  }
  _r805803a7f097d2(e, r) {
    e == null ||
      this._roomEngine?.connection == null ||
      (e.type === RoomObjectHSLColorEnableEvent.ROOM_BACKGROUND_COLOR &&
        this._roomEngine.events.dispatchEvent?.(
          new RoomEngineHSLColorEnableEvent(RoomEngineHSLColorEnableEvent.ROOM_BACKGROUND_COLOR, r, e.enable, e.hue, e.saturation, e.lightness),
        ));
  }
  _r49f770655e1933(e, r) {
    if (this._roomEngine == null || e == null || e.object == null) return;
    let t = e.object.getStringToStringMap();
    if (t != null)
      switch (e.type) {
        case RoomObjectDataRequestEvent.CURRENT_USER_ID:
          t.setNumber(RoomObjectVariableEnum.const_1354, this._roomEngine.sessionDataManager?.userId ?? 0);
          break;
        case RoomObjectDataRequestEvent.URL_PREFIX:
          t.setString(
            RoomObjectVariableEnum.SESSION_URL_PREFIX,
            this._roomEngine.configuration?.getProperty("url.prefix") ?? "",
          );
          break;
      }
  }
  _r1e7aaef03154d6(e, r) {
    if (this._roomEngine == null) return;
    let t = e.objectId,
      i = e.objectType ?? "",
      s = this._roomEngine._r1f8216bd70800f(i),
      o = this._roomEngine._ra1f5cb56d0c2d8(r, t, s),
      d = this._roomEngine._r506d9dd5a0bed5(r);
    if (o != null && d?._rc3df04144b8b80() != null) {
      let c = o.getLocation(),
        f = new RoomObjectUpdateMessage(c ?? new k(), null),
        l = d._rc3df04144b8b80();
      l?.processUpdateMessage(f);
    }
  }
  _rf1bb539867f4ce(e, r) {
    this._r9dc70af321fe8f(r, 0, !1);
  }
  _re13ee7211caaf0(e, r) {
    if (this._roomEngine == null) return;
    this._roomEngine._r1f8216bd70800f(e.objectType ?? "") === RoomObjectCategoryEnum.const_909 &&
      this._roomEngine._r1e3a7bbbe662d2(r, e.objectId);
  }
  _r2dbde67545e99e(e, r, t, i, s) {
    if (e == null || r == null) return !1;
    ((t = Math.trunc(t)), (i = Math.trunc(i)));
    let o = new k();
    (o.assign(e.getDirection()), r.dir != null && e.setDirection(r.dir));
    let d = new k(t, i, 0),
      c = new k();
    c.assign(e.getDirection());
    let f = this._ra9890185ddee3e(e, d, r.loc, r.dir, s);
    return (
      f == null &&
        ((c.x = this._r2169c7f798e77e(e, !0)),
        e.setDirection(c),
        (f = this._ra9890185ddee3e(e, d, r.loc, r.dir, s))),
      f == null ? (e.setDirection(o), !1) : (e._rf91a6212aca31a(f), e.setDirection(c), !0)
    );
  }
  _r3e9c07e82d3713(e, r, t, i, s, o, d, c) {
    if (e == null || r == null) return !1;
    let f = new k(c),
      l = this._r4afeed5b56d8fb(e, t, i, s, o, d, r);
    return l == null ? !1 : (e._rf91a6212aca31a(l), e.setDirection(f), !0);
  }
  _rb1bf328c4bf2c9(e, r, t, i) {
    return (
      (r = Math.trunc(r)),
      (t = Math.trunc(t)),
      i == null || !i._r3085c853f55b25(r, t)
        ? !1
        : (e._rf91a6212aca31a(new k(r, t, i.getTileHeight(r, t))), !0)
    );
  }
  _rdc1cee9709fb0f(e, r, t) {
    let i = e?.getStringToStringMap();
    if (i == null || r == null) return !1;
    let s = e.getDirection(),
      o = e.getLocation();
    if (s == null || o == null) return !1;
    if (s.x % 180 === r.x % 180) return !0;
    let { width: d, height: c } = _i4f9c897a784739(i),
      f = d,
      l = c,
      b = 0,
      _ = (Math.trunc(r.x + 45) % 360) / 90;
    if (
      ((_ === 1 || _ === 3) && ((b = d), (d = c), (c = b)),
      (_ = (Math.trunc(s.x + 45) % 360) / 90),
      (_ === 1 || _ === 3) && ((b = f), (f = l), (l = b)),
      t != null && o != null)
    ) {
      let h = Math.trunc(o.x),
        p = Math.trunc(o.y),
        m = (i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_750) ?? 0) === 1;
      return t.validateLocation(h, p, d, c, h, p, f, l, m, o.z);
    }
    return !1;
  }
  _ra9890185ddee3e(e, r, t, i, s) {
    let o = e?.getStringToStringMap();
    if (o == null || r == null || t == null || i == null) return null;
    let d = e.getDirection();
    if (d == null) return null;
    if (r.x === t.x && r.y === t.y && d.x === i.x) {
      let v = new k();
      return (v.assign(t), v);
    }
    let { width: c, height: f } = _i4f9c897a784739(o),
      l = Math.trunc(t.x),
      b = Math.trunc(t.y),
      _ = c,
      h = f,
      p = 0,
      m = (Math.trunc(d.x + 45) % 360) / 90;
    if (
      ((m === 1 || m === 3) && ((p = c), (c = f), (f = p)),
      (m = (Math.trunc(i.x + 45) % 360) / 90),
      (m === 1 || m === 3) && ((p = _), (_ = h), (h = p)),
      s != null)
    ) {
      let v = Math.trunc(r.x),
        w = Math.trunc(r.y),
        I = (e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_750) ?? 0) === 1;
      if (s.validateLocation(v, w, c, f, l, b, _, h, I)) return new k(r.x, r.y, s.getTileHeight(v, w));
    }
    return null;
  }
  _r4afeed5b56d8fb(e, r, t, i, s, o, d) {
    if (e?.getStringToStringMap() == null || r == null || t == null || i == null || d == null) return null;
    let c = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693) ?? 0,
      f = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_357) ?? 0,
      l = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_292) ?? 0;
    if (
      ((s < c / 2 || s > t.length - c / 2 || o < l || o > i.length - (f - l)) &&
        (s < c / 2 && s <= t.length - c / 2
          ? (s = c / 2)
          : s >= c / 2 && s > t.length - c / 2 && (s = t.length - c / 2),
        o < l && o <= i.length - (f - l)
          ? (o = l)
          : o >= l && o > i.length - (f - l) && (o = i.length - (f - l))),
      s < c / 2 || s > t.length - c / 2 || o < l || o > i.length - (f - l))
    )
      return null;
    let b = k.sum(k.product(t, s / t.length), k.product(i, o / i.length));
    return ((b = k.sum(r, b)), b);
  }
  _r59d0682e39f166(e, r) {
    if (e?.getModelController() == null) return;
    let t =
      e.getType() === Ea.RENTABLE_BOT || e.getType() === Ea.USER ? RoomObjectVariableEnum.AVATAR_ALPHA_MULTIPLIER : RoomObjectVariableEnum.FURNITURE_ALPHA_MULTIPLIER;
    e.getModelController()?.setNumber(t, r);
  }
  _r9dc70af321fe8f(e, r, t) {
    if (this._roomEngine == null) return;
    let i = RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
      s = this._roomEngine._ra1f5cb56d0c2d8(e, this._r0dad2e27b2e501, i);
    if (s?._rc3df04144b8b80() != null) {
      let c = s._rc3df04144b8b80();
      (c?.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_b9b36f(!1)), (this._r0dad2e27b2e501 = -1));
    }
    let o = !1;
    if (t && ((s = this._roomEngine._ra1f5cb56d0c2d8(e, r, i)), s?._rc3df04144b8b80() != null)) {
      let c = s._rc3df04144b8b80();
      if (
        (c?.processUpdateMessage(new UnkRoomObjectUpdateStateMessageSubclass_b9b36f(!0)),
        (o = !0),
        (this._r0dad2e27b2e501 = r),
        !this._roomEngine._r41f5cc7d3516ce?._ra685de879d48b0?.())
      )
        try {
          this._roomEngine.connection?.send?.(
            new class_2943(s.getLocation()?.x ?? 0, s.getLocation()?.y ?? 0),
          );
        } catch {}
    }
    let d = this._roomEngine._r506d9dd5a0bed5(e);
    if (d?._rc3df04144b8b80() != null)
      if (o && !this._roomEngine._rd49f15461de8be()) {
        let c = d._rc3df04144b8b80();
        c?.processUpdateMessage(new RoomObjectVisibilityUpdateMessage(RoomObjectVisibilityUpdateMessage.ENABLED));
      } else {
        let c = d._rc3df04144b8b80();
        c?.processUpdateMessage(new RoomObjectVisibilityUpdateMessage(RoomObjectVisibilityUpdateMessage.DISABLED));
      }
  }
  _rccdb9636457f8d() {
    return this._r0dad2e27b2e501;
  }
  _r2169c7f798e77e(e, r) {
    if (e?.getStringToStringMap() == null) return 0;
    let t = null,
      i = e.getType();
    i === Ea.MONSTERPLANT
      ? (t = e.getStringToStringMap()?._r90cb3676fb77dd(RoomObjectVariableEnum.PET_ALLOWED_DIRECTIONS) ?? null)
      : i === Ea.RENTABLE_BOT
        ? (t = a._r1887e7b0002465)
        : (t = e.getStringToStringMap()?._r90cb3676fb77dd(RoomObjectVariableEnum.const_1272) ?? null);
    let s = Math.trunc(e.getDirection()?.x ?? 0);
    if (t != null && t.length > 0) {
      let o = t.indexOf(s);
      if (o < 0) {
        o = 0;
        for (let d = 0; d < t.length && !(s <= t[d]); d++) o++;
        o %= t.length;
      }
      (r ? (o = (o + 1) % t.length) : (o = (o - 1 + t.length) % t.length), (s = t[o]));
    }
    return s;
  }
  _r35fa7b1ad56383(e, r) {
    let t = this._r5dfc2a6a8b7c46(e);
    if (
      t == null ||
      this._roomEngine == null ||
      t.category !== RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE ||
      (t.operation !== RoomObjectOperationEnum.OBJECT_MOVE && t.operation !== RoomObjectOperationEnum.OBJECT_PLACE)
    )
      return !1;
    let i = this._roomEngine._ra1f5cb56d0c2d8(e, t.id, t.category);
    if (i == null) return !1;
    let s = this._r2169c7f798e77e(i, r);
    if (s === (i.getDirection()?.x ?? 0)) return !1;
    let o = new k(s);
    return this._rdc1cee9709fb0f(i, o, this._roomEngine._r27845e49c42e49(e))
      ? (i.setDirection(o),
        this._r95db4a7db9290e(
          e,
          t.id,
          t.category,
          i.getLocation() ?? new k(),
          o,
          t.operation,
          t.typeId,
          t._r669a9820d77b11,
          t.stuffData,
          t.state,
          t._rbd3b0db1317c16,
          t.posture,
        ),
        this._r6c25018d40bf62(e, !1),
        !0)
      : !1;
  }
  _ra1cd7dedf9a800(e, r, t, i, s, o) {
    if (this._roomEngine?.connection == null || r == null) return !1;
    if (r.getType() === Ea.RENTABLE_BOT)
      return (this._roomEngine.connection.send(new UnkMessageComposer_4args_aa76a6(t, i, s, o)), !0);
    if (r.getType() === Ea.MONSTERPLANT && e != null) {
      let d = e.getUserDataByIndex?.userDataManager?.(t) ?? null;
      if (d != null) return (this._roomEngine.connection.send(new UnkMessageComposer_4args_f9763f(d.webID, i, s, o)), !0);
    }
    return !1;
  }
  _r4096b94e274999(e, r, t, i, s) {
    if (this._roomEngine == null || this._roomEngine._ra1f5cb56d0c2d8(e, r, t) == null) return !1;
    switch (i) {
      case RoomObjectOperationEnum.OBJECT_SAVE_STUFF_DATA:
        this._roomEngine.connection?.send?.(new UnkMessageComposer_2args_825701(r, s));
        break;
      default:
        break;
    }
    return !0;
  }
  _r9cc46b2b079405(e, r, t, i) {
    if (this._roomEngine == null) return !1;
    let s = this._roomEngine._ra1f5cb56d0c2d8(e, r, t);
    if (s == null) return !1;
    let o = 0,
      d = 0,
      c = 0,
      f = !0,
      l = !1,
      b = this._roomEngine.roomSessionManager?.getSession(e) ?? null,
      _ = null;
    if (b != null && !this._roomEngine._r60c579076a73f1 && b.playTestMode) return !1;
    switch (i) {
      case RoomObjectOperationEnum.OBJECT_ROTATE_POSITIVE:
      case RoomObjectOperationEnum.OBJECT_ROTATE_NEGATIVE:
        this._roomEngine.connection != null &&
          ((c = this._r2169c7f798e77e(s, i !== RoomObjectOperationEnum.OBJECT_ROTATE_NEGATIVE)),
          (o = Math.trunc(s.getLocation()?.x ?? 0)),
          (d = Math.trunc(s.getLocation()?.y ?? 0)),
          this._rdc1cee9709fb0f(s, new k(c), this._roomEngine._r27845e49c42e49(e)) &&
            ((c = Math.trunc(c / 45)),
            s.getType() === Ea.MONSTERPLANT || s.getType() === Ea.RENTABLE_BOT
              ? (l = this._ra1cd7dedf9a800(b, s, r, o, d, c))
              : (this._roomEngine.connection.send(new UnkMessageComposer_4args_66016d(r, o, d, c)), (l = !0))));
        break;
      case RoomObjectOperationEnum.OBJECT_EJECT:
      case RoomObjectOperationEnum.OBJECT_PICKUP:
        this._roomEngine.connection != null &&
          (this._roomEngine.connection.send(new UnkMessageComposer_3args_b79f99(r, t)), (l = !0));
        break;
      case RoomObjectOperationEnum.OBJECT_PICKUP_PET:
        this._roomEngine.connection != null &&
          b != null &&
          ((_ = b.getUserDataByIndex?.userDataManager?.(r) ?? null),
          _ != null && (b._rd761fc0a324cdb?.(_.webID), (l = !0)));
        break;
      case RoomObjectOperationEnum.OBJECT_PICKUP_BOT:
        this._roomEngine.connection != null &&
          b != null &&
          ((_ = b.getUserDataByIndex?.userDataManager?.(r) ?? null),
          _ != null && (this._roomEngine.connection.send(new class_2983(_.webID)), (l = !0)));
        break;
      case RoomObjectOperationEnum.OBJECT_MOVE:
        ((f = !1),
          this._r59d0682e39f166(s, 0.5),
          this._r57b0cb6c1d52d5(
            e,
            s.getId(),
            t,
            s.getLocation() ?? new k(),
            s.getDirection() ?? new k(),
            i,
          ),
          this._roomEngine._rfe32b54466ddc0(s.getId(), t, !0),
          this._roomEngine._rb4208639153c2f(!1),
          (l = !0));
        break;
      case RoomObjectOperationEnum.OBJECT_MOVE_TO: {
        let h = this._r5dfc2a6a8b7c46(e);
        if (h == null) return !1;
        if (
          (this._r95db4a7db9290e(
            e,
            h.id,
            h.category,
            h.loc ?? new k(),
            h.dir ?? new k(),
            RoomObjectOperationEnum.OBJECT_MOVE_TO,
            h.typeId,
            h._r669a9820d77b11,
            h.stuffData,
            h.state,
            h._rbd3b0db1317c16,
            h.posture,
          ),
          this._r59d0682e39f166(s, 1),
          this._roomEngine._r6c6a39d086d41a(),
          this._roomEngine.connection != null)
        ) {
          if (t === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE)
            ((c = Math.trunc(s.getDirection()?.x ?? 0) % 360),
              (o = Math.trunc(s.getLocation()?.x ?? 0)),
              (d = Math.trunc(s.getLocation()?.y ?? 0)),
              (c = Math.trunc(c / 45)),
              b?._rff30e139de703a?.("Tutorial", "interaction", "furniture.move"),
              this._roomEngine.connection.send(new UnkMessageComposer_4args_66016d(r, o, d, c)),
              (l = !0));
          else if (t === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
            ((c = Math.trunc(s.getDirection()?.x ?? 0) % 360),
              (o = Math.trunc(s.getLocation()?.x ?? 0)),
              (d = Math.trunc(s.getLocation()?.y ?? 0)),
              (c = Math.trunc(c / 45)),
              (l = this._ra1cd7dedf9a800(b, s, r, o, d, c)));
          else if (t === RoomObjectCategoryEnum.const_909) {
            c = Math.trunc(s.getDirection()?.x ?? 0) % 360;
            let m =
              this._roomEngine._r847b0dcadd8c9f(e)?.getOldLocationString(s.getLocation(), c) ?? null;
            m != null &&
              (b?._rff30e139de703a?.("Tutorial", "interaction", "furniture.move"),
              this._roomEngine.connection.send(new UnkMessageComposer_3args_a7c295(r, RoomObjectCategoryEnum.const_909, m)),
              (l = !0));
          }
        }
        break;
      }
    }
    return (f && this._r00c62626fbdaa6(e), l);
  }
  _rcf27124f32a2fe(e, r, t) {
    let i = this._r5dfc2a6a8b7c46(e);
    i == null ||
      this._roomEngine == null ||
      this._roomEngine._ra1f5cb56d0c2d8(e, r, t) == null ||
      this._roomEngine.events.dispatchEvent?.(new RoomEngineObjectPlacedOnUserEvent(RoomEngineObjectEvent.PLACED_ON_USER, e, r, t, i.id, i.category));
  }
  _rb408f732f0dec1(e, r, t) {
    let i = this._r5dfc2a6a8b7c46(e);
    if (i == null || this._roomEngine?.connection == null) return;
    let s = i.id,
      o = i.category,
      d = null,
      c = "",
      f = 0,
      l = 0,
      b = 0,
      _ = 0;
    if (((d = this._roomEngine._ra1f5cb56d0c2d8(e, s, o)), d != null)) {
      _ = Math.trunc(d.getDirection()?.x ?? 0);
      let m = d.getLocation();
      (o === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE || o === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER
        ? ((f = m?.x ?? 0), (l = m?.y ?? 0), (b = m?.z ?? 0))
        : o === RoomObjectCategoryEnum.const_909 &&
          ((f = m?.x ?? 0),
          (l = m?.y ?? 0),
          (b = m?.z ?? 0),
          (c = this._roomEngine._r847b0dcadd8c9f(e)?.getOldLocationString(m, _) ?? "")),
        (_ = ((Math.trunc(_ / 45) % 8) + 8) % 8));
      let v = this.roomEngine?._r8bcc15c726f45e(e);
      if (
        d.getType() === "free_placement_room" &&
        (v?._rc7d1226973ae1d("free_placement_room", RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) ?? 0) > 1
      ) {
        this.roomEngine?.windowManager?.alert?.(
          "One free placement furni already in room!",
          "There can be only one free_placement_room furni in a room. See intraweb for instructions on how to use it.",
          0,
          null,
        );
        return;
      }
      let w = s;
      (w < 0 && o === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && (w *= -1),
        this._re24909c5b7da6e === RoomObjectPlacementSource.INVENTORY &&
          (o === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && i.typeId === RoomObjectTypeEnum.OBJECT_TYPE_PET
            ? this._roomEngine.connection.send(new UnkMessageComposer_3args_af730a(w, Math.trunc(f), Math.trunc(l)))
            : o === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER && i.typeId === RoomObjectTypeEnum.const_965
              ? this._roomEngine.connection.send(new UnkMessageComposer_3args_1e136a(w, Math.trunc(f), Math.trunc(l)))
              : d.getModelController().getString(RoomObjectVariableEnum.FURNITURE_IS_STICKIE) != null
                ? this._roomEngine.connection.send(new UnkMessageComposer_2args_a047a4(w, c))
                : this._roomEngine.connection.send(new UnkMessageComposer_6args_39add9(w, o, c, Math.trunc(f), Math.trunc(l), _))));
    }
    this._r42d4ba2c00fe47 &&
      o === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE &&
      d != null &&
      ((this._r3818683273597b = i.typeId),
      (this._r7f4dacf8f1c7d4 = Math.trunc(d.getDirection()?.x ?? 0)));
    let h = new class_1769(i.id, i.category, "", new k(), new k());
    (this._roomEngine._rfa625917ff0d0b(e, h), this._r00c62626fbdaa6(e));
    let p = d != null && d.getId() === i.id;
    this._roomEngine.events.dispatchEvent?.(
      new RoomEngineObjectPlacedEvent(RoomEngineObjectEvent.PLACED, e, s, o, c, f, l, b, _, p, r, t, i._r669a9820d77b11, this._re24909c5b7da6e),
    );
  }
  _r14e4651178594c(e, r, t, i, s) {
    let o = this._roomEngine?._r1f8216bd70800f(t) ?? RoomObjectCategoryEnum.const_434;
    this._rc0038b776af704(e, r, o, i, s);
  }
  _rc0038b776af704(e, r, t, i, s) {
    if (this._roomEngine?.connection == null) return !0;
    let o = this._roomEngine.roomSessionManager?.getSession(e) ?? null;
    if (
      o != null &&
      !this._roomEngine._r60c579076a73f1 &&
      o.playTestMode &&
      (this._roomEngine
        ._ra1f5cb56d0c2d8(e, r, t)
        ?.getStringToStringMap()
        ?._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_USAGE_POLICY) ?? 0) < 2
    )
      return !1;
    let d = this._r5dfc2a6a8b7c46(e);
    return (
      (d == null || d.operation !== RoomObjectOperationEnum.OBJECT_PLACE) &&
        (t === RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE
          ? s
            ? this._roomEngine.connection.send(new UnkMessageComposer_2args_6a0b5b(r, i))
            : this._roomEngine.connection.send(new class_3808(r, i))
          : t === RoomObjectCategoryEnum.const_909 && this._roomEngine.connection.send(new UnkMessageComposer_2args_d5cf77(r, i))),
      o?._rff30e139de703a?.("Achievements", "interaction", "furniture.use"),
      !0
    );
  }
  _rce2b5eb85a79e0(e, r, t, i) {
    if (this._roomEngine?.connection != null)
      switch (i) {
        case RoomObjectFurnitureActionEvent.const_661:
          this._roomEngine.connection.send(new UnkMessageComposer_1args_377c09(r));
          break;
        case RoomObjectFurnitureActionEvent.const_733:
          this._roomEngine.connection.send(new UnkMessageComposer_1args_3bf318(r));
          break;
        case RoomObjectFurnitureActionEvent.USE_HABBOWHEEL:
          this._roomEngine.connection.send(new UnkMessageComposer_1args_32ef05(r));
          break;
        case RoomObjectFurnitureActionEvent.STICKIE:
          this._roomEngine.connection.send(new UnkMessageComposer_1args_cd0b31(r));
          break;
        case RoomObjectFurnitureActionEvent.const_184:
          this._roomEngine.connection.send(new UnkMessageComposer_1args_3b1131(r));
          break;
        case RoomObjectFurnitureActionEvent.NFT_REWARD_BOX:
          this._roomEngine.windowManager?.confirm?.(
            "${collectibles.reward_box.confirm_title}",
            "${collectibles.reward_box.confirm_description}",
            0,
            (...s) => {
              let o = s[0],
                d = s[1];
              (o?.dispose?.(),
                d?.type === y.const_1300 && this._roomEngine?.connection?.send?.(new UnkMessageComposer_1args_897c73(r)));
            },
          );
          break;
      }
  }
  _rb6d10c1410468c(e, r, t, i) {
    return this._roomEngine?.connection == null
      ? !1
      : (this._roomEngine.connection.send(new UnkMessageComposer_3args_166ebe(r, t, i)), !0);
  }
  _rb6ce69a696e91d(e, r) {
    return this._roomEngine?.connection == null
      ? !1
      : (this._roomEngine.connection.send(new UnkMessageComposer_1args_2d7b64(r)), !0);
  }
  _r070fb26cdd9b46(e, r) {
    if (
      this._roomEngine == null ||
      this._roomEngine._r67c88eecaceaf0 ||
      this._roomEngine.roomSessionManager == null
    )
      return;
    let t = this._roomEngine.roomSessionManager.getSession(e);
    t?._r53892118edc559 ||
      (this._roomEngine._r880a2521997aa0
        ? this._roomEngine._r1deca76ce4b5a7 >= 0
          ? this._roomEngine._rbe53bad1dd182e?._rff8c994ce55a2d?.(
              this._roomEngine._r1deca76ce4b5a7,
              r.altKey,
              r.shiftKey,
            )
          : this._roomEngine._rbe53bad1dd182e?._r070fb26cdd9b46?.(r)
        : (t?._rff30e139de703a?.("Tutorial", "interaction", "avatar.move"),
          this.roomEngine?._ra143ca99cc4080() ||
            this._r004f195ea791cc(r.tileXAsInt, r.tileYAsInt)));
  }
  _r004f195ea791cc(e, r) {
    this._roomEngine?.connection?.send?.(new UnkMessageComposer_2args_99974c(e, r));
  }
  _rd678502937b17b(e, r) {
    this._roomEngine == null ||
      this.roomEngine?._r67c88eecaceaf0 ||
      (this._roomEngine._r880a2521997aa0 &&
        this._roomEngine._rbe53bad1dd182e?._rff8c994ce55a2d?.(e, r.altKey, r.shiftKey));
  }
  _r4ac12e64c2b2cf(e, r, t) {
    if (
      !(this._roomEngine == null || this.roomEngine?._r67c88eecaceaf0) &&
      this._roomEngine._r880a2521997aa0
    ) {
      let i = this._roomEngine._rcb4fbbcd5da471(t);
      if (i?._rc3df04144b8b80() != null) {
        let s = this._roomEngine._ra1f5cb56d0c2d8(t, e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
        if (s != null) {
          let o = s.getLocation(),
            d = new RoomObjectUpdateMessage(new k(Math.trunc(o?.x ?? 0), Math.trunc(o?.y ?? 0), Math.trunc(o?.z ?? 0)), null),
            c = i._rc3df04144b8b80();
          c?.processUpdateMessage(d);
        }
      }
      this._roomEngine._rbe53bad1dd182e?.handleMouseOverOnHuman?.(e, r.altKey, r.shiftKey);
    }
  }
  _r6bf1500d09d324() {
    return !!this.roomEngine?._r6bf1500d09d324();
  }
}

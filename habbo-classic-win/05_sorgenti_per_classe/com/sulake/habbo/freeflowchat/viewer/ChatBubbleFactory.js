// Extracted from HabboAirLauncher.deobf.js, line 203360.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/ChatBubbleFactory.as
// Obfuscated name: _ie7c3942a34e4a9

class a {
  constructor(e) {
    this.var_82 = e;
    this.var_1844 = new S2e(this.var_82?.assets);
  }
  static {
    n(this, "ChatBubbleFactory");
  }
  static MAX_DISPOSABLE_BITMAPS = 30;
  static SPECIAL_SYSTEM_TYPE_EXPRESSION_67 = 67;
  var_1844;
  _r37c76c59213ef8 = new B();
  PetFigureData = new B();
  _r57f77c08b26155 = new B();
  _rc40dfbbc101ad1 = new B();
  var_1543 = [];
  _rb74d72b3a3aca4 = [];
  dispose() {
    this.disposed ||
      (this.discardOldBitmaps(),
      (this.var_1543 = []),
      this.var_1844?.dispose(),
      (this.var_1844 = null),
      this._r37c76c59213ef8.dispose(),
      this.PetFigureData.dispose(),
      this._r57f77c08b26155.dispose(),
      this._rc40dfbbc101ad1.dispose(),
      (this._rb74d72b3a3aca4 = []),
      (this.var_82 = null));
  }
  get disposed() {
    return this.var_82 == null;
  }
  resolveRoomUserName(e, r = !1) {
    let t = this.var_82,
      s =
        (t?.roomSessionManager?.getSession(e.roomId) ?? null)?.getUserDataByIndex.userDataManager(e.userId) ??
        null,
      o = "";
    (e._r5306ecfa474f9d != null || e._rb6ad58d3f7bd05 != null
      ? (o = e._rb6ad58d3f7bd05 ?? "")
      : s != null && (o = s.name),
      this.applySpecialChatContent(e, o));
    let d = this.var_1844?._r22c9347ecec607(e.style),
      c = 0,
      f = d?._r145cc0394d677f ?? null;
    if (e._r5306ecfa474f9d != null || e._rb6ad58d3f7bd05 != null)
      f == null && (f = this._rdd22b255089781(e._r5306ecfa474f9d));
    else if (s != null) {
      let _ = s.figure;
      if (((c = this._r57f77c08b26155.getValue(_) ?? 0), f == null))
        switch (s.type) {
          case RoomObjectTypeEnum.OBJECT_TYPE_PET: {
            let p =
              (t?.roomEngine?._ra1f5cb56d0c2d8(e.roomId, s._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null)
                ?.getStringToStringMap()
                ?.getString(RoomObjectVariableEnum.AVATAR_POSTURE) ?? null;
            f = this.getPetImage(_, 2, !0, 32, p);
            break;
          }
          case RoomObjectTypeEnum.OBJECT_TYPE_USER:
            f = this._rdd22b255089781(_);
            break;
          default:
            break;
        }
    }
    let l = this._rb74d72b3a3aca4.pop() ?? new yI(t),
      b = d?._r39fa5000b657f2?.color;
    return (
      (l._r08afc3ed230b1f = e),
      (l.style = d ?? new class_1796()),
      (l.face = f),
      l.recreate(
        o,
        e._r7184740318e84f != null ? Number(e._r7184740318e84f) : c,
        t?._r87bc47ebf443ce ?? !1,
      ),
      d != null && d._r39fa5000b657f2 != null && b != null && (d._r39fa5000b657f2.color = b),
      l
    );
  }
  _r7ffc7431d354aa(e) {
    let r = new class_1796(),
      t = new xr(xr.ROOM_SESSION_CHAT_EVENT, null, -1, "", xr.CHAT_TYPE_WHISPER),
      i = new ChatItem(t, _ia411d8d8194a3a()),
      s = this._rb74d72b3a3aca4.pop() ?? new yI(this.var_82);
    return (
      (s._r08afc3ed230b1f = i),
      (s.style = r),
      (s.face = null),
      s.recreate("", 0, !1, f5.MOVE_UP_AMOUNT_PIXELS),
      s
    );
  }
  _r225d0dd8efd594(e) {
    let r = this.var_82,
      i =
        (r?.roomSessionManager?.getSession(e.roomId) ?? null)?.getUserDataByIndex.userDataManager(e.userId) ??
        null,
      s = "",
      o = -1,
      d = !1;
    (e._r5306ecfa474f9d != null || e._rb6ad58d3f7bd05 != null
      ? (s = e._rb6ad58d3f7bd05 ?? "")
      : i != null && (s = i.name),
      this.applySpecialChatContent(e, s));
    let c = this.var_1844?._r22c9347ecec607(e.style);
    (i != null &&
      !(c?.mask ?? !1) &&
      i.type === RoomObjectTypeEnum.OBJECT_TYPE_USER &&
      i.webID > 0 &&
      i.webID !== (r?.sessionDataManager?.userId ?? 0) &&
      ((o = i.webID), (d = !0)),
      this._r9133fb8db483e2(e.chatType) && (d = !1));
    let f = 0,
      l = c?._r145cc0394d677f ?? null;
    if (e._r5306ecfa474f9d != null || e._rb6ad58d3f7bd05 != null)
      l == null && (l = this._rdd22b255089781(e._r5306ecfa474f9d));
    else if (i != null) {
      let h = i.figure;
      if (((f = this._r57f77c08b26155.getValue(h) ?? 0), l == null))
        switch (i.type) {
          case RoomObjectTypeEnum.OBJECT_TYPE_PET: {
            let m =
              (r?.roomEngine?._ra1f5cb56d0c2d8(e.roomId, i._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null)
                ?.getStringToStringMap()
                ?.getString(RoomObjectVariableEnum.AVATAR_POSTURE) ?? null;
            l = this.getPetImage(h, 2, !1, 32, m);
            break;
          }
          case RoomObjectTypeEnum.const_543:
          case RoomObjectTypeEnum.const_965:
          case RoomObjectTypeEnum.OBJECT_TYPE_USER:
            l = this._rdd22b255089781(h);
            break;
          default:
            break;
        }
    }
    let b = new R2e(
        e,
        c ?? new class_1796(),
        l,
        s,
        e._r7184740318e84f != null ? Number(e._r7184740318e84f) : f,
        r,
        at._r95dc862ed837a8,
      ),
      _ = new A(b.width, b.height, !0, 0);
    try {
      return (b._r266563b7fb4912(_), new ChatHistoryEntryBitmapBubble(e, d, o, s, _, c?.overlap ?? null));
    } finally {
      (b.dispose(), _.dispose());
    }
  }
  _r9106155bad5e1c(e) {
    return new k2e(e, this.var_82);
  }
  recycle(e) {
    this._rb74d72b3a3aca4.push(e);
  }
  _rdd22b255089781(e) {
    if (e == null) return null;
    let r = this.var_82?.getBoolean("zoom.enabled") ?? !1,
      t = this._r37c76c59213ef8.getValue(e) ?? null;
    if (t == null) {
      let i = this.var_82?._rf0eb5f07c94cfb?._r274f6640e76241(
        e,
        r ? fr.LARGE : fr.SMALL,
        null,
        this,
      );
      if (i != null) {
        t = Jd.focusUserFace(i, class_2123.HEAD, 2, r ? 0.5 : 1);
        let s = i._r4164d8e733b31b(AvatarFigurePartType.CHEST);
        (i.dispose(), s != null && this._r57f77c08b26155.add(e, s.rgb));
      }
    }
    return (t != null && this._r37c76c59213ef8.add(e, t), t);
  }
  getPetImage(e, r, t, i = 64, s = null) {
    let o = `${e}${s ?? ""}`,
      d = this.PetFigureData.getValue(o) ?? null;
    if (d == null) {
      let c = new class_3800(e),
        f = c.typeId,
        l = !1;
      class_3447.COW === f && (l = !0);
      let b = this.var_82?.roomEngine?.getPetImage(
        f,
        c.paletteId,
        c.color,
        new k(r * 45),
        i,
        this,
        l,
        0,
        c.customParts,
        s,
      );
      (b != null && ((d = b.data), b.id > 0 && this._rc40dfbbc101ad1.add(b.id, c.figureString)),
        this._r57f77c08b26155.add(e, c.color));
    }
    return (d != null && this.PetFigureData.add(o, d), d);
  }
  imageReady(e, r) {
    let t = this._rc40dfbbc101ad1.remove(e) ?? null;
    t != null && (this._r865e207fab2498(t), this.PetFigureData.add(t, r));
  }
  imageFailed(e) {}
  _r865e207fab2498(e) {
    let r = this.PetFigureData.remove(e) ?? null;
    (r != null && this.var_1543.push(r),
      this.var_1543.length > a.MAX_DISPOSABLE_BITMAPS && this.discardOldBitmaps());
  }
  avatarImageReady(e) {
    let r = this._r37c76c59213ef8.remove(e) ?? null;
    (r != null && this.var_1543.push(r),
      this.var_1543.length > a.MAX_DISPOSABLE_BITMAPS && this.discardOldBitmaps());
  }
  discardOldBitmaps() {
    for (let e of this.var_1543) e.dispose();
    this.var_1543 = [];
  }
  get chatStyleLibrary() {
    return this.var_1844;
  }
  applySpecialChatContent(e, r) {
    if (e.chatType === xr.CHAT_TYPE_SPECIAL_SYSTEM)
      switch (e.extraParam) {
        case a.SPECIAL_SYSTEM_TYPE_EXPRESSION_67:
          ((e.text = "<b>6666666...  77777777777777...</b>"), (e.style = class_3668.GENERIC));
          return;
      }
    if (this.var_82?.localizations != null) {
      if (e.chatType === xr.CHAT_TYPE_RESPECT) {
        e.text =
          this.var_82.localizations.getLocalizationWithParams(
            "widgets.chatbubble.respect",
            "",
            "username",
            r,
          ) ?? "";
        return;
      }
      if (e.chatType === xr.CHAT_TYPE_PETRESPECT) {
        e.text =
          this.var_82.localizations.getLocalizationWithParams(
            "widget.chatbubble.petrespect",
            "",
            "petname",
            r,
          ) ?? "";
        return;
      }
      if (e.chatType === xr.CHAT_TYPE_PETTREAT) {
        e.text =
          this.var_82.localizations.getLocalizationWithParams(
            "widget.chatbubble.pettreat",
            "",
            "petname",
            r,
          ) ?? "";
        return;
      }
      if (e.chatType === xr.CHAT_TYPE_PING) {
        e.text = e.extraParam >= 0 ? `Ping: ${e.extraParam} ms` : "Ping: measuring...";
        return;
      }
      if (e.chatType === xr.CHAT_TYPE_HAND_ITEM_RECEIVED) {
        let t = "widget.chatbubble.handitem",
          i =
            this.var_82.localizations.getLocalization(
              `handitem${e.extraParam}`,
              `handitem${e.extraParam}`,
            ) ?? "";
        (this.var_82.localizations._r43eae9731f5b27(t, "username", r),
          this.var_82.localizations._r43eae9731f5b27(t, "handitem", i),
          (e.text = this.var_82.localizations._r5f04530d38380d(t)?.value ?? ""),
          (e.style = class_3668.GENERIC));
        return;
      }
      if (e.chatType === xr.CHAT_TYPE_MUTE_REMAINING) {
        let t = "widget.chatbubble.mutetime",
          i = String(e.extraParam % 60),
          s = String(e.extraParam > 0 ? Math.floor((e.extraParam % 3600) / 60) : 0),
          o = String(e.extraParam > 0 ? Math.floor(e.extraParam / 3600) : 0);
        (this.var_82.localizations._r43eae9731f5b27(t, "hours", o),
          this.var_82.localizations._r43eae9731f5b27(t, "minutes", s),
          this.var_82.localizations._r43eae9731f5b27(t, "seconds", i),
          (e.text = this.var_82.localizations._r5f04530d38380d(t)?.value ?? ""),
          (e.style = class_3668.GENERIC));
        return;
      }
      if (
        e.chatType === xr.CHAT_TYPE_PETREVIVE ||
        e.chatType === xr.CHAT_TYPE_PET_REBREED_FERTILIZE ||
        e.chatType === xr.CHAT_TYPE_PET_SPEED_FERTILIZE
      ) {
        let t = "widget.chatbubble.petrevived";
        (e.chatType === xr.CHAT_TYPE_PET_REBREED_FERTILIZE
          ? (t = "widget.chatbubble.petrefertilized")
          : e.chatType === xr.CHAT_TYPE_PET_SPEED_FERTILIZE && (t = "widget.chatbubble.petspeedfertilized"),
          this.var_82.localizations._r43eae9731f5b27(t, "petName", r),
          this.var_82.localizations._r43eae9731f5b27(
            t,
            "userName",
            this._r219099c1a80143(e.roomId, e.extraParam),
          ),
          (e.text = this.var_82.localizations._r5f04530d38380d(t)?.value ?? ""),
          (e.style = class_3668.GENERIC));
      }
    }
  }
  _r9133fb8db483e2(e) {
    switch (e) {
      case xr.CHAT_TYPE_RESPECT:
      case xr.CHAT_TYPE_PETRESPECT:
      case xr.CHAT_TYPE_PETTREAT:
      case xr.CHAT_TYPE_HAND_ITEM_RECEIVED:
      case xr.CHAT_TYPE_MUTE_REMAINING:
      case xr.CHAT_TYPE_PETREVIVE:
      case xr.CHAT_TYPE_PET_REBREED_FERTILIZE:
      case xr.CHAT_TYPE_PET_SPEED_FERTILIZE:
      case xr.CHAT_TYPE_SPECIAL_SYSTEM:
        return !0;
      default:
        return !1;
    }
  }
  _r219099c1a80143(e, r) {
    let t = this.var_82?.roomEngine?._ra1f5cb56d0c2d8(e, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER) ?? null;
    return t == null
      ? ""
      : ((
          this.var_82?.roomSessionManager
            ?.getSession(e)
            ?.getUserDataByIndex.userDataManager(t.getId()) ?? null
        )?.name ?? "");
  }
}

// Estratto da HabboAirLauncher.deobf.js, riga 308104.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/PetMenuView.as
// Nome offuscato: _icc48ccf7af3cf5

class a extends AvatarContextInfoButtonView {
  static {
    n(this, "PetMenuView");
  }
  static MODE_NORMAL = 0;
  static MODE_SADDLED_UP = 1;
  static MODE_RIDING = 2;
  static MODE_MONSTER_PLANT = 3;
  _data = null;
  _mode = a.MODE_NORMAL;
  constructor(e) {
    (super(e), (this.var_231 = !1));
  }
  dispose() {
    (this._window != null &&
      (this._window.removeEventListener(u.OVER, this._r846ed7467efd50),
      this._window.removeEventListener(u.OUT, this._r846ed7467efd50)),
      (this._data = null),
      super.dispose());
  }
  static setup(e, r, t, i, s, o = !1) {
    e._data = o instanceof PetInfoData ? o : null;
    let d = e.widget?.hasFreeSaddle ?? !1,
      c = e.widget?.isRiding ?? !1;
    (e.widget?._r49741f7e39d185()
      ? (e._mode = a.MODE_MONSTER_PLANT)
      : d && !c
        ? (e._mode = a.MODE_SADDLED_UP)
        : c
          ? (e._mode = a.MODE_RIDING)
          : (e._mode = a.MODE_NORMAL),
      AvatarContextInfoButtonView.setup(e, r, t, i, s, !1));
  }
  updateButtons() {
    let e = this.widget,
      r = this._data;
    if (this._window == null || r == null) return;
    let t = this._window.findChildByName("buttons");
    if (t == null) return;
    ((t.procedure = this._r8b6e9f027ac5db), (t.autoArrangeItems = !1));
    for (let o = 0; o < t.numListItems; o++) {
      let d = t.getListItemAt(o);
      d != null && (d.visible = !1);
    }
    let i = e?.handler?._r2eac8239a09fe7 ?? null,
      s = e?.handler?.container?.sessionDataManager ?? null;
    switch (
      (((i?.isRoomOwner ?? !1) ||
        (s?.isAnyRoomController ?? !1) ||
        (i?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER) &&
        this.showButton("pick_up"),
      this._mode)
    ) {
      case a.MODE_NORMAL:
        this.showButton("respect", r.petRespectLeft > 0);
        break;
      case a.MODE_SADDLED_UP:
        (e?.configuration?.getBoolean("sharedhorseriding.enabled") && this.showButton("mount"),
          this.showButton("respect", r.petRespectLeft > 0));
        break;
      case a.MODE_RIDING:
        (e?.configuration?.getBoolean("sharedhorseriding.enabled") && this.showButton("dismount"),
          this.showButton("respect", r.petRespectLeft > 0));
        break;
      case a.MODE_MONSTER_PLANT:
        if (!r.canRevive) {
          this.showButton("respect", !1);
          let o = r.energy,
            d = r.energyMax;
          this.showButton("treat", !0, d > 0 ? o / d < 0.98 : !1);
        }
        break;
    }
    if (
      (e?.localization?._r43eae9731f5b27("infostand.button.petrespect", "count", r.petRespectLeft.toString()),
      e?.configuration?.getBoolean("handitem.give.pet.enabled"))
    ) {
      let o = e.handler,
        d = o?.container ?? null,
        c = o?._r2eac8239a09fe7?.roomId ?? 0,
        f = d?._r2eac8239a09fe7?.ownUserRoomId ?? 0,
        l = d?.roomEngine?._ra1f5cb56d0c2d8(c, f, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
      if (l != null) {
        let b = l.getStringToStringMap();
        if (b != null) {
          let _ = b._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257);
          _ > 0 && _ < 999999 && this.showButton("pass_handitem");
        }
      }
    }
    (this.showButton(
      "wired_inspect",
      e?.handler?.container?._rddef5461e8915c?._reb1c224373ab03() ?? !1,
    ),
      (t.autoArrangeItems = !0),
      (t.visible = !0));
  }
  updateWindow() {
    let e = this.widget;
    if (e?.assets == null || e.windowManager == null) return;
    if (this.isMinimized) {
      this.activeView = this._r264c5b40440e9c();
      return;
    }
    if (this._window == null) {
      let t = e.assets.getAssetByName("pet_menu")?.content ?? null;
      if (
        ((this._window = t != null ? e.windowManager.buildFromXML(t, 0) : null),
        this._window == null)
      )
        return;
      (this._window.addEventListener(u.OVER, this._r846ed7467efd50),
        this._window.addEventListener(u.OUT, this._r846ed7467efd50),
        this._window.findChildByName("minimize")?.addEventListener(u.CLICK, this._r9f300ee1384194),
        this._window.findChildByName("minimize")?.addEventListener(u.OVER, this._r932b323057a22d),
        this._window.findChildByName("minimize")?.addEventListener(u.OUT, this._r932b323057a22d));
    }
    ((this.var_34 = this._window.findChildByName("buttons")),
      this.var_34 != null && (this.var_34.procedure = this._r8b6e9f027ac5db));
    let r = this._window;
    ((r.findChildByName("name").caption = this._userName),
      (r.visible = !1),
      (this.activeView = r),
      this.updateButtons());
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let t = !1,
      i = null;
    if (e.type === u.CLICK) {
      if (r.name === "button")
        switch (((t = !0), r.parent?.name)) {
          case "mount":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.MOUNT_PET, this.userId);
            break;
          case "dismount":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.DISMOUNT_PET, this.userId);
            break;
          case "respect":
            (this._data != null && ((this._data.petRespectLeft -= 1), this.updateButtons()),
              (i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.RESPECT_PET, this.userId)));
            break;
          case "treat":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.TREAT_PET, this.userId);
            break;
          case "pass_handitem":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.GIVE_CARRY_ITEM_TO_PET, this.userId);
            break;
          case "pick_up":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.PICK_UP_PET, this.userId);
            break;
          case "wired_inspect":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.WIRED_INSPECT_PET, this.userId);
            break;
        }
      (r.name === "profile_link" && (i = new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, this.userId, "petContextMenu")),
        i != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(i),
        this.updateButtons());
    } else super._rb8ed727c592c36(e, r);
    t && this.var_17?.removeView(this, !1);
  }
  get widget() {
    return this.var_17;
  }
}

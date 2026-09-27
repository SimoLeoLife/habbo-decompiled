// Estratto da HabboAirLauncher.deobf.js, riga 307417.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/OwnAvatarMenuView.as
// Nome offuscato: _i8a0a9e606bc93b

class a extends AvatarContextInfoButtonView {
  static {
    n(this, "OwnAvatarMenuView");
  }
  static MODE_NORMAL = 0;
  static MODE_CLUB_DANCES = 1;
  static MODE_NAME_CHANGE = 2;
  static MODE_EXPRESSIONS = 3;
  static MODE_SIGNS = 4;
  static MODE_CHANGE_LOOKS = 5;
  static EXPRESSION_67_ENABLED_KEY = "avatar.expression.67.enabled";
  static var_5807 = !1;
  _data = null;
  _mode = a.MODE_NORMAL;
  _rd47dd4637ac5b1 = n((e, r) => {
    this._r03b04aa6cea23d(e, r);
  }, "_rd47dd4637ac5b1");
  constructor(e) {
    (super(e), (this.var_231 = !1));
  }
  dispose() {
    ((this._data = null), super.dispose());
  }
  static setup(e, r, t, i, s, o = !1) {
    let d = e.widget;
    e == null ||
      d == null ||
      ((e._data = o instanceof class_2698 ? o : null),
      !a.var_5807 &&
      (d.configuration?.getInteger("new.identity", 0) ?? 0) > 0 &&
      (d.configuration?.getBoolean("new.user.reception.enabled") ?? !1)
        ? ((e._mode = a.MODE_NORMAL), (a.var_5807 = !0))
        : d.isDancing && d.hasClub && !d._r8077167eb58f3e
          ? (e._mode = a.MODE_CLUB_DANCES)
          : (e._data?.allowNameChange ?? !1) && d.useMinimizedOwnAvatarMenu
            ? (e._mode = a.MODE_NAME_CHANGE)
            : (e._mode = a.MODE_NORMAL),
      AvatarContextInfoButtonView.setup(e, r, t, i, s, !1));
  }
  updateWindow() {
    let e = this.widget;
    if (e == null || e.assets == null || e.windowManager == null) return;
    if (this.isMinimized) {
      this.activeView = this._r264c5b40440e9c();
      return;
    }
    if (this._window == null) {
      let i = e.assets.getAssetByName("own_avatar_menu")?.content ?? null;
      if (
        ((this._window = i != null ? e.windowManager.buildFromXML(i, 0) : null),
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
    let r = this._window.findChildByName("signs_grid");
    if (r != null)
      for (let i = 0; i < r._r72acf104e2c444; i++) {
        let o = r.getGridItemAt(i)?.findChildByName("button");
        o != null && (o.procedure = this._rd47dd4637ac5b1);
      }
    let t = this._window.findChildByName("profile_link");
    (t != null &&
      ((t.procedure = this._r8b6e9f027ac5db),
      (t.toolTipCaption =
        e.localization?.getLocalization("infostand.profile.link.tooltip", "Click to view profile") ??
        "Click to view profile"),
      (t.toolTipDelay = 100)),
      (this._window.findChildByName("name").caption = this._userName),
      (this._window.visible = !1),
      (this.activeView = this._window),
      this.updateButtons());
  }
  updateButtons() {
    let e = this.widget;
    if (this._window == null || this._data == null || this.var_34 == null || e == null)
      return;
    this.var_34.autoArrangeItems = !1;
    for (let t = 0; t < this.var_34.numListItems; t++) {
      let i = this.var_34.getListItemAt(t);
      i != null && (i.visible = !1);
    }
    let r = e._r9815f983fd655c;
    switch (this._mode) {
      case a.MODE_NORMAL:
        (this.showButton("change_name", this._data.allowNameChange),
          this.showButton(
            "decorate",
            this.decorateModeSupported() &&
              (this._data.myRoomControllerLevel >= RoomControllerLevelEnum.ROOM_CONTROLLER || this._data.amIOwner),
          ),
          this.showButton("change_looks"),
          this.showButton("dance_menu", e.hasClub && !r, !e._r8077167eb58f3e),
          this.showButton("dance", !e.hasClub && !e.isDancing && !r, !e._r8077167eb58f3e),
          this.showButton("dance_stop", !e.hasClub && e.isDancing && !r),
          this.var_17?.windowManager?.getBoolean?.("memenu.effects.widget.disabled") ||
            this.showButton("effects", !r),
          this.showButton(
            "handitem",
            this._data._r1e97915bc485f1 > 0 &&
              this._data._r1e97915bc485f1 < 999999 &&
              (e.configuration?.getBoolean("handitem.drop.enabled") ?? !1) &&
              !(e.handler?.roomEngine?._r17bed959b0ae8d ?? !1),
          ));
        let t = e.configuration?.getBoolean("avatar.expressions_menu.enabled") ?? !1;
        this.showButton(t ? "expressions" : "wave");
        let i = e.configuration?.getBoolean("avatar.signs.enabled") ?? !1;
        (this.showButton("signs", i),
          this.showButton(
            "wired_inspect",
            e.handler?.container?._rddef5461e8915c?._reb1c224373ab03() ?? !1,
          ));
        break;
      case a.MODE_CLUB_DANCES:
        (this.showButton("dance_stop", !0, e.isDancing),
          this.showButton("dance_1"),
          this.showButton("dance_2"),
          this.showButton("dance_3"),
          this.showButton("dance_4"),
          this.showButton("back"));
        break;
      case a.MODE_NAME_CHANGE:
        (this.showButton("change_name"), this.showButton("more"));
        break;
      case a.MODE_CHANGE_LOOKS:
        (this.showButton("change_looks"), this.showButton("more"));
        break;
      case a.MODE_EXPRESSIONS:
        (this.showButton("wave", !0, !e._r42b891fe3c7f17),
          this.showButton(
            "laugh",
            !0,
            !e._r8077167eb58f3e && !e._r42b891fe3c7f17 && e.hasVip,
            !e.hasVip,
          ),
          this.showButton(
            "blow",
            !0,
            !e._r8077167eb58f3e && !e._r42b891fe3c7f17 && e.hasVip,
            !e.hasVip,
          ),
          this.showButton(
            "67",
            e.configuration?.getBoolean(a.EXPRESSION_67_ENABLED_KEY) ?? !1,
            !e._r8077167eb58f3e && !e._r42b891fe3c7f17 && e.hasVip,
            !e.hasVip,
          ),
          this.showButton("idle", !0),
          (e.configuration?.getBoolean("avatar.sitting.enabled") ?? !1) &&
            !e._r42b891fe3c7f17 &&
            !r &&
            (this.showButton("sit", e._r90201d57547d7f === ve.POSTURE_STAND),
            this.showButton("stand", e._rcb15f009f08c62)),
          !1,
          this.showButton("back"));
        break;
      case a.MODE_SIGNS:
        (this.showButtonGrid("signs_grid"), this.showButton("back"));
        break;
    }
    ((this.var_34.autoArrangeItems = !0), (this.var_34.visible = !0));
  }
  _r03b04aa6cea23d(e, r) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let t = !1;
    if (e.type === u.CLICK) {
      if (r.name === "button") {
        t = !0;
        let i = r.parent?.name ?? "",
          s = i.lastIndexOf("_"),
          o = s >= 0 ? i.slice(0, s) : "",
          d = s >= 0 ? Number.parseInt(i.slice(s + 1), 10) : 0;
        o === "sign" &&
          (this.widget?.lastIndexOf(d),
          this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
            "OwnAvatarMenu",
            "click",
            "sign",
            "",
            d,
          ));
      }
    } else super._rb8ed727c592c36(e, r);
    t && this.var_17?.removeView(this, !1);
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1) return;
    let t = !1,
      i = null;
    if (e.type === u.CLICK) {
      if (r.name === "button") {
        if ((r.getChildByName("icon_vip")?.visible ?? !1) && !this.widget?.hasVip) {
          this.var_17?.catalog?.openClubCenter();
          return;
        }
        switch (((t = !0), r.parent?.name)) {
          case "change_name":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.START_NAME_CHANGE);
            break;
          case "decorate":
            this.decorateModeSupported() && this.widget != null && (this.widget.isUserDecorating = !0);
            break;
          case "change_looks":
            (this.widget?._r1324d016b68582(),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "clothes",
              ));
            break;
          case "expressions":
            ((t = !1), this.changeMode(a.MODE_EXPRESSIONS));
            break;
          case "sit":
            ((i = new n_(n_.POSTURE_SIT)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "sit",
              ));
            break;
          case "stand":
            ((i = new n_(n_.POSTURE_STAND)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "stand",
              ));
            break;
          case "wave":
            ((i = new Jl(jo.WAVE)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "wave",
              ));
            break;
          case "blow":
            ((i = new Jl(jo.BLOW)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "blow",
              ));
            break;
          case "67":
            (this.widget?.configuration?.getBoolean(a.EXPRESSION_67_ENABLED_KEY) ?? !1) &&
              ((i = new Jl(jo.EXPRESSION_67)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "67",
              ));
            break;
          case "jump":
            !1;
            break;
          case "laugh":
            ((i = new Jl(jo.LAUGH)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "laugh",
              ));
            break;
          case "idle":
            ((i = new Jl(jo.const_19)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "idle",
              ));
            break;
          case "dance_menu":
            ((t = !1), this.changeMode(a.MODE_CLUB_DANCES));
            break;
          case "dance":
            ((i = new sc(1)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "dance_start",
              ));
            break;
          case "dance_stop":
            ((i = new sc(0)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "dance_stop",
              ));
            break;
          case "dance_1":
          case "dance_2":
          case "dance_3":
          case "dance_4":
            ((i = new sc(Number.parseInt((r.parent?.name ?? "").slice(-1), 10))),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "dance_start",
              ));
            break;
          case "effects":
            ((i = new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_EFFECTS)),
              this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog(
                "OwnAvatarMenu",
                "click",
                "effects",
              ));
            break;
          case "signs":
            ((t = !1), this.changeMode(a.MODE_SIGNS));
            break;
          case "back":
            ((t = !1), this.changeMode(a.MODE_NORMAL));
            break;
          case "more":
            ((t = !1),
              this.widget != null && (this.widget.useMinimizedOwnAvatarMenu = !1),
              this.changeMode(a.MODE_NORMAL));
            break;
          case "handitem":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.const_876, this._userId);
            break;
          case "wired_inspect":
            i = new RoomWidgetUserActionMessage(RoomWidgetUserActionMessage.const_126, this._userId);
            break;
        }
      }
      (r.name === "profile_link" &&
        ((t = !0), (i = new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, this.userId, "ownAvatarContextMenu"))),
        i != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(i));
    } else super._rb8ed727c592c36(e, r);
    t && !this._disposed && this.var_17?.removeView(this, !1);
  }
  changeMode(e) {
    ((this._mode = e), this.updateButtons());
  }
  decorateModeSupported() {
    return this.widget?.hasClub ?? !1;
  }
  get widget() {
    return this.var_17;
  }
}

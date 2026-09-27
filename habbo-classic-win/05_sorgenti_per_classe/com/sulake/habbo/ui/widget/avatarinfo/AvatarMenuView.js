// Estratto da HabboAirLauncher.deobf.js, riga 305950.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/AvatarMenuView.as
// Nome offuscato: _ifa1e5dbd635f86

class a extends AvatarContextInfoButtonView {
  static {
    n(this, "AvatarMenuView");
  }
  static _rc646781ba5c073 = 1;
  static MODE_MODERATE = 2;
  static MODE_BAN = 4;
  static MODE_MUTE = 5;
  static MODE_RELATIONSHIP = 6;
  static MODE_AMBASSADOR = 7;
  static lastViewMode = a._rc646781ba5c073;
  _data = null;
  _mode = a._rc646781ba5c073;
  var_599 = !1;
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
    ((e._data = o instanceof class_2698 ? o : null),
      (e._mode = a._rc646781ba5c073),
      AvatarContextInfoButtonView.setup(e, r, t, i, s, !1, !1, e._data?.isBlocked ?? !1));
  }
  updateButtons() {
    let e = this.widget;
    if (this._window == null || this._data == null) return;
    let r = this._window.findChildByName("buttons");
    if (r == null) return;
    ((r.procedure = this._r8b6e9f027ac5db), (r.autoArrangeItems = !1));
    for (let i = 0; i < r.numListItems; i++) {
      let s = r.getListItemAt(i);
      s != null && (s.visible = !1);
    }
    let t = this._data.isBlocked;
    if (this._mode === a._rc646781ba5c073) {
      (this.showButton("open_profile", t),
        this.showButton("moderate", this.moderateMenuHasContent()),
        this.showButton("friend", this._data._r5e040bd2e547c8 && !t),
        this.showButton("ignore", !this._data.isIgnored && !t),
        this.showButton("unignore", this._data.isIgnored && !t),
        this.showButton("report", e?.configuration?.getBoolean("infostand.report.show") === !0 && !t),
        e?.localization?._r43eae9731f5b27(
          "infostand.button.respect",
          "count",
          this._data.respectLeft.toString(),
        ),
        this.showButton("respect", this._data.respectLeft > 0 && !t),
        this.showButton(
          "replenish_respect",
          this._data.respectLeft <= 0 && this._data.respectReplenishesLeft > 0 && !t,
        ));
      let i = e?.handler?.container?.sessionDataManager?.isAccountSafetyLocked?.() ?? !1;
      this.showButton("trade", this.citizenshipTalentTrackEnabled || (!i && this._data.canTrade && !t));
      let s = r.getListItemByName("trade")?.getChildByName("button");
      if (s != null) {
        let o = "";
        switch (this._data.canTradeReason) {
          case RoomWidgetUserInfoUpdateEvent.TRADE_REASON_SHUTDOWN:
            o = "${infostand.button.trade.tooltip.shutdown}";
            break;
          case RoomWidgetUserInfoUpdateEvent.TRADE_REASON_NO_TRADINGROOM:
            o = "${infostand.button.trade.tooltip.tradingroom}";
            break;
        }
        s.toolTipCaption = o;
      }
      if (
        (this.showButton("whisper", !t),
        e?.configuration?.getBoolean("handitem.give.enabled") === !0 &&
          !(e?.handler?.roomEngine?._r17bed959b0ae8d ?? !1))
      ) {
        let o = e?.handler?.container?._r2eac8239a09fe7?.ownUserRoomId ?? 0,
          d = e?.handler?._r2eac8239a09fe7?.roomId ?? 0,
          f =
            e?.handler?.roomEngine
              ?._ra1f5cb56d0c2d8(d, o, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)
              ?.getStringToStringMap()
              ?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1257) ?? 0;
        f > 0 && f < 999999 && this.showButton("pass_handitem");
      }
      (this.showButton(
        "relationship",
        e?.configuration?.getBoolean("relationship.status.enabled") === !0 &&
          this._data.isFriend &&
          !t,
      ),
        this.showButton("ambassador", this._rcaee8705678f60()),
        this.showButton(
          "wired_inspect",
          e?.handler?.container?._rddef5461e8915c?._reb1c224373ab03() ?? !1,
        ));
    }
    (this._mode === a.MODE_MODERATE &&
      (this.showButton("kick", this._data.canBeKicked),
      this.showButton("ban_with_duration", this._data.canBeBanned),
      this.showButton("mute", this._data.canBeMuted),
      this.showButton("give_rights", this._rb85874d0e635da()),
      this.showButton("remove_rights", this.ambassadorMenuHasContent()),
      this.showButton("actions")),
      this._mode === a.MODE_BAN &&
        (this.showButton("ban_hour"),
        this.showButton("ban_day"),
        this.showButton("perm_ban"),
        this.showButton("actions")),
      this._mode === a.MODE_MUTE &&
        (this.showButton("mute_2min"),
        this.showButton("mute_5min"),
        this.showButton("mute_10min"),
        this.showButton("actions")),
      this._mode === a.MODE_RELATIONSHIP &&
        (this.showButtonGrid("relationship_grid"),
        this.showButton("no_relationship"),
        this.showButton("actions")),
      this._mode === a.MODE_AMBASSADOR &&
        (this.showButton("ambassador_kick"),
        this.showButton("ambassador_alert"),
        this.showButton("ambassador_mute_15min"),
        this.showButton("ambassador_mute_60min"),
        this.showButton("ambassador_mute_18hour"),
        this.showButton("ambassador_mute_36hour"),
        this.showButton("ambassador_mute_72hour"),
        this.showButton("ambassador_unmute"),
        this.showButton("actions")),
      (r.autoArrangeItems = !0),
      (r.visible = !0),
      (a.lastViewMode = this._mode),
      (this.var_599 = !1));
  }
  updateWindow() {
    let e = this.widget;
    if (e == null || e.assets == null || e.windowManager == null) return;
    if (this.isMinimized) {
      this.activeView = this._r264c5b40440e9c();
      return;
    }
    if (this._window == null) {
      let s = e.assets.getAssetByName("avatar_menu_widget")?.content ?? null;
      if (
        ((this._window = s != null ? e.windowManager.buildFromXML(s, 0) : null),
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
    let r = this._window.findChildByName("profile_link");
    r != null && (r.procedure = this._r8b6e9f027ac5db);
    let t = this._window.findChildByName("name");
    (t != null &&
      (this._data?.isBlocked
        ? ((t.italic = !0), (t.caption = "${infostand.blocked_user}"))
        : ((t.italic = !1), (t.caption = this._userName))),
      (this._window.visible = !1),
      (this.activeView = this._window),
      this.updateButtons(),
      this.updateRelationshipStatus());
    let i = this._window.findChildByName("relationship_grid");
    if (i != null)
      for (let s = 0; s < i._r72acf104e2c444; s++) {
        let d = i.getGridItemAt(s)?.findChildByName("button");
        d != null && (d.procedure = this._r8b6e9f027ac5db);
      }
  }
  _rb8ed727c592c36(e, r) {
    if (this.disposed || this._window?.disposed !== !1 || this._data == null) return;
    let t = !1,
      i = null;
    if (e.type === u.CLICK) {
      let s = null;
      if (r.name === "button")
        switch (((t = !0), r.parent?.name)) {
          case "whisper":
            s = RoomWidgetUserActionMessage.WHISPER_USER;
            break;
          case "friend":
            ((this._data._r5e040bd2e547c8 = !1), (s = RoomWidgetUserActionMessage.SEND_FRIEND_REQUEST));
            break;
          case "respect":
            ((this._data.respectLeft -= 1),
              this.widget?.localization?._r43eae9731f5b27(
                "infostand.button.respect",
                "count",
                this._data.respectLeft.toString(),
              ),
              this.showButton("respect", this._data.respectLeft > 0),
              (s = RoomWidgetUserActionMessage.RESPECT_USER),
              this._data.respectLeft > 0 && (t = !1));
            break;
          case "replenish_respect":
            s = RoomWidgetUserActionMessage.REPLENISH_RESPECT;
            break;
          case "wired_inspect":
            s = RoomWidgetUserActionMessage.const_126;
            break;
          case "open_profile":
            s = RoomWidgetUserActionMessage.const_266;
            break;
          case "ignore":
            ((r.parent.visible = !1),
              this._window.findChildByName("unignore") &&
                (this._window.findChildByName("unignore").visible = !0),
              (this._data.isIgnored = !0),
              (s = RoomWidgetUserActionMessage.IGNORE_USER));
            break;
          case "unignore":
            ((r.parent.visible = !1),
              this._window.findChildByName("ignore") &&
                (this._window.findChildByName("ignore").visible = !0),
              (this._data.isIgnored = !1),
              (s = RoomWidgetUserActionMessage.UNIGNORE_USER));
            break;
          case "kick":
            s = RoomWidgetUserActionMessage.KICK_USER;
            break;
          case "ban_hour":
            s = RoomWidgetUserActionMessage.BAN_USER_HOUR;
            break;
          case "ban_day":
            s = RoomWidgetUserActionMessage.BAN_USER_DAY;
            break;
          case "perm_ban":
            s = RoomWidgetUserActionMessage.BAN_USER_PERM;
            break;
          case "mute_2min":
            s = RoomWidgetUserActionMessage.MUTE_USER_2MIN;
            break;
          case "mute_5min":
            s = RoomWidgetUserActionMessage.MUTE_USER_5MIN;
            break;
          case "mute_10min":
            s = RoomWidgetUserActionMessage.MUTE_USER_10MIN;
            break;
          case "ban_with_duration":
            ((this._mode = a.MODE_BAN), (this.var_599 = !0), (t = !1));
            break;
          case "mute":
            ((this._mode = a.MODE_MUTE), (this.var_599 = !0), (t = !1));
            break;
          case "give_rights":
            ((r.parent.visible = !1),
              this._window.findChildByName("remove_rights") &&
                (this._window.findChildByName("remove_rights").visible = !0),
              (this._data.myRoomControllerLevel = RoomControllerLevelEnum.ROOM_CONTROLLER),
              (s = RoomWidgetUserActionMessage.GIVE_RIGHTS));
            break;
          case "remove_rights":
            ((r.parent.visible = !1),
              this._window.findChildByName("give_rights") &&
                (this._window.findChildByName("give_rights").visible = !0),
              (this._data.myRoomControllerLevel = RoomControllerLevelEnum.NOT_CONTROLLER),
              (s = RoomWidgetUserActionMessage.TAKE_RIGHTS));
            break;
          case "trade":
            s = RoomWidgetUserActionMessage.START_TRADING;
            break;
          case "moderate":
            ((this._mode = a.MODE_MODERATE), (this.var_599 = !0), (t = !1));
            break;
          case "report":
            s = RoomWidgetUserActionMessage.REPORT_CFH_OTHER;
            break;
          case "actions":
            ((this._mode = a._rc646781ba5c073), (this.var_599 = !0), (t = !1));
            break;
          case "relationship":
            ((this._mode = a.MODE_RELATIONSHIP), (this.var_599 = !0), (t = !1));
            break;
          case "pass_handitem":
            s = RoomWidgetUserActionMessage.PASS_CARRY_ITEM;
            break;
          case "relationship_heart":
            this.setRelationship(en.const_522);
            break;
          case "relationship_smile":
            this.setRelationship(en.SMILE);
            break;
          case "relationship_bobba":
            this.setRelationship(en.BOBBA);
            break;
          case "no_relationship":
            this.setRelationship(en.NONE);
            break;
          case "ambassador":
            ((this._mode = a.MODE_AMBASSADOR), (this.var_599 = !0), (t = !1));
            break;
          case "ambassador_alert":
            s = RoomWidgetUserActionMessage.AMBASSADOR_ALERT_USER;
            break;
          case "ambassador_kick":
            s = RoomWidgetUserActionMessage.AMBASSADOR_KICK_USER;
            break;
          case "ambassador_mute_2min":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_2MIN;
            break;
          case "ambassador_mute_10min":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_10MIN;
            break;
          case "ambassador_mute_15min":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_15MIN;
            break;
          case "ambassador_mute_60min":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_60MIN;
            break;
          case "ambassador_mute_18hour":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_18HOUR;
            break;
          case "ambassador_mute_36hour":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_36HOUR;
            break;
          case "ambassador_mute_72hour":
            s = RoomWidgetUserActionMessage.AMBASSADOR_MUTE_USER_72HOUR;
            break;
          case "ambassador_unmute":
            s = RoomWidgetUserActionMessage.AMBASSADOR_UNMUTE_USER;
            break;
        }
      (r.name === "profile_link" &&
        ((t = !0), (i = new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, this._userId, "avatarContextMenu"))),
        s != null &&
          ((i = new RoomWidgetUserActionMessage(s, this._userId)),
          this.widget?.handler?.container?._r697386a8fb5bf8?.trackEventLog("InfoStand", "click", s)),
        i != null && this.var_17?._r1515e6bde00451?.RoomWidgetLetUserInMessage(i),
        this.updateButtons());
    } else if (e.type === u.OVER) {
      if (r.name === "button")
        switch (r.parent?.name) {
          case "kick":
            this.widget?.handler?.container?._r697386a8fb5bf8?._rff30e139de703a(
              "InterfaceExplorer",
              "hover",
              "avatar.kick.hover",
            );
            break;
          case "perm_ban":
          case "ban_hour":
          case "ban_day":
          case "ban_with_duration":
            this.widget?.handler?.container?._r697386a8fb5bf8?._rff30e139de703a(
              "InterfaceExplorer",
              "hover",
              "avatar.ban.hover",
            );
            break;
          case "mute":
          case "mute_2min":
          case "mute_5min":
          case "mute_10min":
            this.widget?.handler?.container?._r697386a8fb5bf8?._rff30e139de703a(
              "InterfaceExplorer",
              "hover",
              "avatar.mute.hover",
            );
            break;
          case "unignore":
          case "ignore":
            this.widget?.handler?.container?._r697386a8fb5bf8?._rff30e139de703a(
              "InterfaceExplorer",
              "hover",
              "avatar.ignore.hover",
            );
            break;
        }
    } else super._rb8ed727c592c36(e, r);
    t && this.var_17?.removeView(this, !1);
  }
  _rcaee8705678f60() {
    return this._data?.isAmbassador ?? !1;
  }
  moderateMenuHasContent() {
    return (
      (this._data?.canBeKicked ?? !1) ||
      (this._data?.canBeBanned ?? !1) ||
      (this._data?.canBeMuted ?? !1) ||
      this._rb85874d0e635da() ||
      this.ambassadorMenuHasContent()
    );
  }
  _rb85874d0e635da() {
    return (this._data?.amIOwner ?? !1) && (this._data?.targetRoomControllerLevel ?? 0) < RoomControllerLevelEnum.ROOM_CONTROLLER;
  }
  ambassadorMenuHasContent() {
    return (
      (this._data?.amIOwner ?? !1) && (this._data?.targetRoomControllerLevel ?? 0) === RoomControllerLevelEnum.ROOM_CONTROLLER
    );
  }
  get citizenshipTalentTrackEnabled() {
    return this.widget?.configuration?.getBoolean("talent.track.citizenship.enabled") ?? !1;
  }
  setRelationship(e) {
    this.var_17?.friendList?._rb0baadd15ced86(this._userId, e);
  }
  get widget() {
    return this.var_17;
  }
}

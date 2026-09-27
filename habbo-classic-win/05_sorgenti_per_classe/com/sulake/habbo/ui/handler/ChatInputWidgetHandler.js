// Estratto da HabboAirLauncher.deobf.js, riga 328117.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/ChatInputWidgetHandler.as
// Nome offuscato: _i56969680557c90

class a {
  static {
    n(this, "ChatInputWidgetHandler");
  }
  static EXPRESSION_67_ENABLED_KEY = "avatar.expression.67.enabled";
  var_1271 = !1;
  _re11a1b44d778bd = !0;
  _container = null;
  var_17 = null;
  get container() {
    return this._container;
  }
  set container(e) {
    this._container = e;
  }
  set widget(e) {
    this.var_17 = e;
  }
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.CHAT_INPUT_WIDGET;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null), (this.var_17 = null));
  }
  _rc3479181526e34() {
    return [cm.TYPING_STATUS, nc.WIDGET_MESSAGE_CHAT, RoomWidgetChatSelectAvatarMessage.WIDGET_MESSAGE_SELECT_AVATAR];
  }
  RoomWidgetLetUserInMessage(e) {
    let r = this._container;
    if (r == null) return null;
    switch (e.type) {
      case cm.TYPING_STATUS: {
        if (!(e instanceof cm)) return null;
        let t = e;
        return (r._r2eac8239a09fe7?._rc9b808d53b4394(t.isTyping), null);
      }
      case nc.WIDGET_MESSAGE_CHAT:
        return e instanceof nc ? this.processWidgetMessage(e, r) : null;
      case RoomWidgetChatSelectAvatarMessage.WIDGET_MESSAGE_SELECT_AVATAR: {
        if (!(e instanceof RoomWidgetChatSelectAvatarMessage)) return null;
        let t = e;
        r.roomEngine?.selectAvatar(t.roomId, t.objectId);
        let i = r._r2eac8239a09fe7?.getUserDataByIndex.userDataManager(t.objectId) ?? null;
        return (i != null && r.moderation?.userSelected(i.webID, t.userName), null);
      }
      default:
        return null;
    }
  }
  processWidgetMessage(e, r) {
    if (r._r2eac8239a09fe7 == null || e.text === "") return null;
    let t = e.text,
      i = e.text.split(" "),
      s = i.length > 1 ? (i[1] ?? "") : "";
    if (i.length > 0) {
      let d = i[0]?.toLowerCase() ?? "";
      if (d.startsWith(":") && s === "x") {
        let c = r.roomEngine?._rccdb9636457f8d() ?? -1;
        if (c > -1) {
          let f = r._r2eac8239a09fe7.getUserDataByIndex.userDataManager(c);
          f != null && ((s = f.name), (t = e.text.replace(" x", ` ${f.name}`)));
        }
      }
      switch (d) {
        case ":shake":
          return (Nb.init(250, 5e3), Nb.turnVisualizationOn(), null);
        case ":d":
        case ";d":
          r.sessionDataManager?.hasVip === !0 &&
            (r._r2eac8239a09fe7._r6e27274f7e1fce(jo.LAUGH.ordinal),
            r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "laugh"));
          break;
        case "o/":
        case "_o/":
          return (r._r2eac8239a09fe7._r6e27274f7e1fce(jo.WAVE.ordinal), null);
        case ":kiss":
          if (r.sessionDataManager?.hasVip === !0)
            return (
              r._r2eac8239a09fe7._r6e27274f7e1fce(jo.BLOW.ordinal),
              r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "blow"),
              null
            );
          break;
        case ":jump":
          if (r.sessionDataManager?.hasVip === !0)
            return (
              r._r2eac8239a09fe7._r6e27274f7e1fce(jo._r9a5a815d592966.ordinal),
              r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "jump"),
              null
            );
          break;
        case ":67":
          if (r.config?.getBoolean(a.EXPRESSION_67_ENABLED_KEY) && r.sessionDataManager?.hasVip === !0)
            return (
              r._r2eac8239a09fe7._r6e27274f7e1fce(jo.EXPRESSION_67.ordinal),
              r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "67"),
              null
            );
          break;
        case ":idle":
          return (
            r._r2eac8239a09fe7._r6e27274f7e1fce(jo.const_19.ordinal),
            r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "idle"),
            null
          );
        case "_b":
          return (
            r._r2eac8239a09fe7._r6e27274f7e1fce(jo.RESPECT.ordinal),
            r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "respect"),
            null
          );
        case ":showstats":
          return (r.roomEngine?._r72f73aa3e1d0a7(!0), null);
        case ":ping":
          return (
            r._r2eac8239a09fe7 != null &&
              r.roomSessionManager?.events?.dispatchEvent?.(
                new xr(
                  xr.ROOM_SESSION_CHAT_EVENT,
                  r._r2eac8239a09fe7,
                  r._r2eac8239a09fe7.ownUserRoomId,
                  "",
                  xr.CHAT_TYPE_PING,
                  class_3668.GENERIC,
                  null,
                  r._r697386a8fb5bf8?.latencyPingMs ?? -1,
                ),
              ),
            null
          );
        case ":fps": {
          let c = r.roomEngine?.context?.dispatchEvent;
          return (c?.stage != null && c.stage._r8027ab4f559ab9(In.clamp(Number(s) | 0, 5, 1e4)), null);
        }
        case ":sign":
          return (
            r._r2eac8239a09fe7._r59b7b374d3ce71(Number(s)),
            r._r697386a8fb5bf8?.trackEventLog("OwnAvatarMenu", "chat", "sign", "", Number(s)),
            null
          );
        case ":drop":
        case ":dropitem":
          return (r.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetUserActionMessage.const_876)), null);
        case ":chooser":
          return (
            (!(r.roomEngine?._rb908be66c6903d ?? !1) ||
              r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER) &&
              r.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_USER_CHOOSER)),
            null
          );
        case ":furni":
          return (
            (r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER ||
              r.sessionDataManager?.isAmbassador === !0) &&
              r.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_FURNI_CHOOSER)),
            null
          );
        case ":pickall":
          return (r.sessionDataManager?.pickAllFurniture?.(r._r2eac8239a09fe7.roomId), null);
        case ":pickallbc":
          return (r.sessionDataManager?.pickAllBuilderFurniture?.(r._r2eac8239a09fe7.roomId), null);
        case ":resetscores":
          return (r.sessionDataManager?.resetScores?.(r._r2eac8239a09fe7.roomId), null);
        case ":ejectall":
          return (r.sessionDataManager?.ejectAllFurniture?.(r._r2eac8239a09fe7.roomId, t), null);
        case ":ejectpets":
          return (r.sessionDataManager?.ejectPets?.(r._r2eac8239a09fe7.roomId), null);
        case ":reload":
          return (
            r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_OWNER &&
              r.windowManager?.confirm(
                "${wiredmenu.settings.room_state.reload}",
                "${wiredmenu.settings.room_state.reload.warning}",
                0,
                this._rc8680c9d4d0a61,
              ),
            null
          );
        case ":rollback": {
          if (r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_OWNER) {
            let c = r.windowManager?.confirm(
              "${wiredmenu.settings.room_state.roll_back}",
              "${wiredmenu.settings.room_state.roll_back.warning}",
              0,
              this._r756dae6c285b52,
            );
            c != null && (c._r3d7b1775b50b97 = 13909337);
          }
          return null;
        }
        case ":moonwalk":
        case ":habnam":
        case ":yyxxabxa":
        case ":mutepets":
        case ":mpgame":
          return (r.sessionDataManager?.sendSpecialCommandMessage?.(d === ":mpgame" ? t : d), null);
        case ":news":
          if (r.config?.getBoolean("client.news.embed.enabled") === !0) return (Ae.openNews(), null);
          break;
        case ":mail":
          if (r.config?.getBoolean("client.minimail.embed.enabled") === !0)
            return (Ae.openMinimail("#mail/inbox/"), null);
          break;
        case ":crashme":
          !1;
          break;
        case ":resethunt":
          !1;
          break;
        case ":wiredreset":
          return (r._rddef5461e8915c?._r69ae4baa700b24(), null);
        case ":ss":
          break;
        case ":qss":
          break;
        case ":gd":
          break;
        case ":csmm":
          if (r.sessionDataManager?.hasSecurity?.(class_1794.EMPLOYEE) === !0)
            return (r._r1218f60f737b72?._reaee9ef642a187(), null);
          break;
        case ":tgl": {
          if (!!1) break;
          Ae.showGame(s);
          let c = new _i05394ecc0c0c4d(15e3, 1);
          return (c.addEventListener(DeBouncer._rf33144eac61595, () => Ae.hideGame()), c.start(), null);
        }
        case ":li": {
          if (!!1) break;
          let c =
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam est. Morbi fringilla suscipit auctor. Phasellus et sem non nulla fermentum lacinia. In malesuada adipiscing nibh at facilisis. In egestas eros in felis ultricies ac faucibus risus fermentum. Vivamus at erat justo. Proin congue, nisl ac tempor pulvinar, ante.".split(
                " ",
              ),
            f = Math.min(Number(s), c.length);
          f === 0 && (f = 10);
          let l = Math.floor(Math.random() * (c.length - f));
          return (r._r2eac8239a09fe7.sendChatMessage(c.slice(l, l + f).join(" ")), null);
        }
        case ":kick":
          if (r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER) {
            let c = r._r2eac8239a09fe7.getUserDataByIndex._rc6e130af7a1d9c(s);
            c != null && r._r2eac8239a09fe7._rc9068f73ae7c88(c.webID);
          }
          return null;
        case ":shutup":
        case ":mute":
          if (r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.ROOM_CONTROLLER) {
            let c = r._r2eac8239a09fe7.getUserDataByIndex._rc6e130af7a1d9c(s);
            c != null && r._r2eac8239a09fe7._rda7fc83798fe38(c.webID, 2);
          }
          return null;
        case ":ignore": {
          let c = s.length > 0 ? r._r2eac8239a09fe7.getUserDataByIndex._rc6e130af7a1d9c(s) : null;
          return (c != null && r.sessionDataManager?.ignoreUser?.(c.webID), null);
        }
        case ":unignore": {
          let c = s.length > 0 ? r._r2eac8239a09fe7.getUserDataByIndex._rc6e130af7a1d9c(s) : null;
          return (c != null && r.sessionDataManager?.unignoreUser?.(c.webID), null);
        }
        case ":floor":
        case ":bcfloor":
          return (
            r._r2eac8239a09fe7._rea9739215487be >= RoomControllerLevelEnum.GUILD_ADMIN && r.windowManager?._r0854f489ec6e49(),
            null
          );
        case ":lang":
          return (r.localization?._r9d0f61ef4bf78d?.(s), null);
        case ":uc":
          return (
            r.sessionDataManager?.hasSecurity?.(class_1794.EMPLOYEE) === !0 &&
              (s === "hotel"
                ? r._r2eac8239a09fe7._r7f04f4a5409864?.(i[2] ?? "")
                : r._r2eac8239a09fe7._r5c64651c6f6754?.(s)),
            null
          );
        case ":visit":
          return (r._r2eac8239a09fe7._r390f3cb9113fbd(s), null);
        case ":roomid":
          return (r._r2eac8239a09fe7._rb4925ed92d76f6(Number.parseInt(s)), null);
        case ":link":
          return (r.roomEngine?.context?._r6b6c989018eb05(s), null);
        case ":rewardtrack":
          break;
        case ":cam":
        case ":camera":
          if (r.sessionDataManager?.isPerkAllowed?.("CAMERA") === !0) {
            let c = new HabboToolbarEvent(HabboToolbarEvent.CAMERA_TOGGLE);
            ((c.iconName = HabboToolbarEvent.CAMERA_LAUNCH_ORIGIN_CHAT), r.toolbar?.events.dispatchEvent?.(c));
          }
          return null;
        case ":fs":
        case ":fullscreen":
          return (r.windowManager?._raeb7743c23aa1f(), null);
        case ":screenshot": {
          let c = r.navigator?._rff8822efc4b68b?.roomName ?? "";
          if (c.length === 0) {
            let f = new Date();
            c = `Habbo ${`${f.getFullYear()}-${f.getMonth()}-${f.getDate()} ${f.getHours()}.${f.getMinutes()}.${f.getSeconds()}`}`;
          }
          return (
            r.roomEngine?._re63fd389d9700f(r._r2eac8239a09fe7.roomId, r.getFirstCanvasId(), `${c}.png`),
            null
          );
        }
        case ":iddqd":
        case ":flip":
          return (
            r.roomEngine != null &&
              r.roomEngine.events.dispatchEvent(new N6(r.roomEngine.activeRoomId, -1, !0)),
            null
          );
        case ":hidemouse":
          return (
            this._re11a1b44d778bd
              ? (_idb4c110baa8f94.hide(), r.roomEngine?._container(r.roomEngine.activeRoomId, 0))
              : (_idb4c110baa8f94.show(), r.roomEngine?._container(r.roomEngine.activeRoomId, 1)),
            r.roomEngine != null &&
              r.roomEngine._r98e4fd7849d947(r.roomEngine.activeRoomId, !this._re11a1b44d778bd),
            (this._re11a1b44d778bd = !this._re11a1b44d778bd),
            null
          );
        case ":wf":
        case ":wired":
          return (r.roomEngine?.context?._r6b6c989018eb05("wiredmenu/open"), null);
        case ":var":
        case ":variables":
          return (r.roomEngine?.context?._r6b6c989018eb05("wiredmenu/open/variable_overview"), null);
        case ":inspect":
        case ":inspection":
          return (r.roomEngine?.context?._r6b6c989018eb05("wiredmenu/open/inspection"), null);
        case ":playtest":
          return (r._rddef5461e8915c?._ra8b5a4d2b9098f(), null);
        case ":donate":
          return (r.roomEngine?.context?._r6b6c989018eb05("selfdonation/open"), null);
      }
    }
    let o = e.styleId;
    switch (
      (r._rafd5b9130c4bfd != null &&
        (r._rafd5b9130c4bfd._rd00b498733a8a7 !== e.styleId &&
          e.styleId !== -1 &&
          (r._rafd5b9130c4bfd._rd00b498733a8a7 = e.styleId),
        (o = r._rafd5b9130c4bfd._rd00b498733a8a7)),
      e.chatType)
    ) {
      case nc.CHAT_TYPE_SPEAK:
        r._r2eac8239a09fe7.sendChatMessage(t, o);
        break;
      case nc.CHAT_TYPE_SHOUT:
        r._r2eac8239a09fe7._rec2d495e464b4a(t, o);
        break;
      case nc.CHAT_TYPE_WHISPER:
        r._r2eac8239a09fe7._r7d281f9eecc290(e._r5aa2a2ba87ba6f, t, o);
        break;
    }
    return (r._r697386a8fb5bf8?._rff30e139de703a("Tutorial", "interaction", "avatar.chat"), null);
  }
  _r8f2a14a26f6017() {
    return [xr.ROOM_SESSION_FLOODCONTROL_EVENT, sI.HIDE_ROOM_WIDGET, l1.FRIENDBAR_RESIZE_EVENT, SessionDataToWidgetEvent.const_646];
  }
  update() {}
  _r9b1b0209eb1b5a(e) {
    let r = this._container;
    if (r?.events == null) return;
    let t = null;
    switch (e.type) {
      case xr.ROOM_SESSION_FLOODCONTROL_EVENT: {
        let i = e;
        t = new cI(Number.parseInt(i.text));
        break;
      }
      case sI.HIDE_ROOM_WIDGET:
        this._rd671d49ed7cac2(e);
        return;
      case l1.FRIENDBAR_RESIZE_EVENT:
        this.var_17?._r714726235a17c1();
        return;
      case SessionDataToWidgetEvent.const_646:
        this.var_17?._r8339c761af0aed();
        return;
    }
    t != null && r.events.dispatchEvent?.(t);
  }
  _r756dae6c285b52 = n((e, r) => {
    (r.type === "WE_OK" && this._container?.connection?.send(new _i63ed097d6c2af1(!0)), e.dispose());
  }, "_r756dae6c285b52");
  _rc8680c9d4d0a61 = n((e, r) => {
    (r.type === "WE_OK" && this._container?.connection?.send(new _i63ed097d6c2af1(!1)), e.dispose());
  }, "_rc8680c9d4d0a61");
  _rd671d49ed7cac2(e) {
    e.widgetType === this.type && this.var_17?.hide();
  }
}

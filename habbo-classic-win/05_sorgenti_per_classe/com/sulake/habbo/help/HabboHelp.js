// Extracted from HabboAirLauncher.deobf.js, line 234013.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/HabboHelp.as
// Obfuscated name: _i632965d35979f1

class a extends ue {
  static {
    n(this, "HabboHelp");
  }
  static REPORT_TYPE_EMERGENCY = 1;
  static REPORT_TYPE_GUIDE = 2;
  static REPORT_TYPE_IM = 3;
  static REPORT_TYPE_ROOM = 4;
  static REPORT_TYPE_BULLY = 6;
  static REPORT_TYPE_THREAD = 7;
  static REPORT_TYPE_MESSAGE = 8;
  static REPORT_TYPE_PHOTO = 9;
  static TOPICS_WITHOUT_IGNORE_AND_UNFRIEND = [21];
  _messageEvents = [];
  _r36ebb2457119e8 = null;
  _r594af809a977aa = null;
  _r8005e65e061b0c = null;
  _r6ded8706dfd0b1 = null;
  _rc90ed3e86804b8 = new L7e();
  _rd9108c9a7ba665 = new T7e();
  _rb05ec861142587 = new S7e();
  _raa79aa4154df64 = !1;
  var_375 = 0;
  _rf69e84327aafbc = null;
  _r0642d4a7c247e9 = -1;
  var_19 = 0;
  _r48b838048543d7 = [];
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get localization() {
    return this._localizationManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get toolbar() {
    return this._toolbar;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get navigator() {
    return this._navigator;
  }
  get tracking() {
    return this._tracking;
  }
  get musicController() {
    return this._soundManager;
  }
  get _rafd5b9130c4bfd() {
    return this._rb7fab1e25a8762;
  }
  get friendList() {
    return this._friendList;
  }
  get newUserTourEnabled() {
    return this.getBoolean("guide.help.new.user.tour.enabled");
  }
  get newIdentity() {
    return this.getInteger("new.identity", 0) > 0;
  }
  get citizenshipEnabled() {
    return this.getBoolean("talent.track.citizenship.enabled");
  }
  get safetyQuizDisabled() {
    return this.getBoolean("safety_quiz.disabled");
  }
  get _rb7933744fce4f9() {
    return this._raa79aa4154df64;
  }
  set _rb7933744fce4f9(e) {
    this._raa79aa4154df64 = e;
  }
  get _ra8fe81e2f96c0e() {
    return this._rc90ed3e86804b8;
  }
  get _rac50ce9cc85d8c() {
    return this._rd9108c9a7ba665;
  }
  get _r86d4afd9e4a8a4() {
    return this._rb05ec861142587;
  }
  get _callForHelpCategories() {
    return this._r48b838048543d7;
  }
  get guardiansEnabled() {
    return this.getBoolean("guardians.enabled");
  }
  get linkPattern() {
    return "help/";
  }
  get _r61d35b1de16441() {
    return this._r94698e7f61b594;
  }
  get _r6d93655097f605() {
    return this.var_44;
  }
  get _r8b3cd107b1088e() {
    return this._r7045cb34a6ab81?._r8b3cd107b1088e ?? "";
  }
  get _rb286a1f9faeb60() {
    return this._r7045cb34a6ab81?._rb286a1f9faeb60 ?? 0;
  }
  get reportedUserId() {
    return this.var_44?.reportedUserId ?? -1;
  }
  set reportedUserId(e) {
    this.var_44 && (this.var_44.reportedUserId = e);
  }
  get onPendingCallsForHelp() {
    return this.var_44?.onPendingCallsForHelp ?? "";
  }
  get reportedRoomId() {
    return this.var_44?.reportedRoomId ?? -1;
  }
  set reportedRoomId(e) {
    this.var_44 && (this.var_44.reportedRoomId = e);
  }
  get _rbc914ab682acbc() {
    return this.var_44?._rbc914ab682acbc ?? "";
  }
  get _r4d650ce6dc3306() {
    return this.var_44?._r4d650ce6dc3306 ?? -1;
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(
        new IIDSessionDataManager(),
        (e) => {
          this._sessionDataManager = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (e) => {
          this._toolbar = e;
        },
        !0,
        [
          { type: HabboToolbarEvent.TOOLBAR_CLICK, callback: n((e) => this.IIDHabboCatalog(e), "callback") },
          { type: HabboToolbarEvent.GROUP_ROOM_INFO_CLICK, callback: n((e) => this.IIDHabboCatalog(e), "callback") },
          { type: HabboToolbarEvent.RESIZED, callback: n((e) => this.IIDHabboCatalog(e), "callback") },
        ],
      ),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (e) => {
          this._roomSessionManager = e;
        },
        !0,
      ),
      new ComponentDependency(
        new IIDHabboNavigator(),
        (e) => {
          this._navigator = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboTracking(),
        (e) => {
          this._tracking = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboSoundManager(),
        (e) => {
          this._soundManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboFriendList(),
        (e) => {
          this._friendList = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboFreeFlowChat(),
        (e) => {
          this._rb7fab1e25a8762 = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    (this.addMessageEvent(new class_2114(this.onUsers)),
      this.addMessageEvent(new UnkMessageEvent_333a8d(this._rc68c5eb1f835e9)),
      this.addMessageEvent(new class_2027(this._ra43f6ebc8ffe33)),
      this.addMessageEvent(new class_2220(this._r8aae5137a099c1)),
      this.addMessageEvent(new class_2212(this._rc2eff326f83fc7)),
      this.addMessageEvent(new UnkMessageEvent_0acb51(this._r9b472edeafa4c7)),
      this.addMessageEvent(new UnkMessageEvent_741270(this._rcda6913b0fd5b3)),
      this.addMessageEvent(new UnkMessageEvent_acffa7(this._r848177b8826dda)),
      this.addMessageEvent(new class_2117(this.onRoomEnter)),
      this.addMessageEvent(new class_1939(this._r09330674c979c8)),
      this.addMessageEvent(new UnkMessageEvent_eb5a37(this._rdfe52c97da3eb7)),
      this.addMessageEvent(new UnkMessageEvent_85dbfb(this._r716ebe46b183a9)),
      (this._r3d6c0e226ef51d = new ChatEventHandler(this)),
      (this._r94698e7f61b594 = new GuideHelpManager(this)),
      (this.var_44 = new h7e(this)),
      (this._r7045cb34a6ab81 = new NameChangeController(this)),
      (this._rbb0f81ab328093 = new UnkClass_3239af(this)),
      (this._rc3e8c430541fc2 = new W7e(this)),
      (this._r9ee2842df2bf2d = new SanctionInfo(this)),
      (this._r7ac5646e3ec2da = new u5(this)),
      this.context._r7e43d9f4706607?.(this),
      this.getBoolean("show.sanction.info.on.login") && Math.random() < 0.2 && this.requestSanctionInfo(!0));
  }
  addMessageEvent(e) {
    this._messageEvents.push(this._r6358b2bd53ae19?._r2e106e2349a0b6(e) ?? e);
  }
  dispose() {
    if (!this.disposed) {
      if (this._messageEvents.length > 0 && this._r6358b2bd53ae19 != null)
        for (let e of this._messageEvents) this._r6358b2bd53ae19._r7668362bf55fdd(e);
      ((this._messageEvents = []),
        this._r6ded8706dfd0b1?.dispose(),
        (this._r6ded8706dfd0b1 = null),
        this._r594af809a977aa?.dispose(),
        (this._r594af809a977aa = null),
        this._r36ebb2457119e8?.dispose(),
        (this._r36ebb2457119e8 = null),
        this._r7045cb34a6ab81?.dispose(),
        (this._r7045cb34a6ab81 = null),
        this._r94698e7f61b594?.dispose(),
        (this._r94698e7f61b594 = null),
        this.var_44?.dispose(),
        (this.var_44 = null),
        this._r8005e65e061b0c?.dispose(),
        (this._r8005e65e061b0c = null),
        this._rc3e8c430541fc2?.dispose(),
        (this._rc3e8c430541fc2 = null),
        this._r9ee2842df2bf2d?.dispose(),
        (this._r9ee2842df2bf2d = null),
        this._r7ac5646e3ec2da?.dispose(),
        (this._r7ac5646e3ec2da = null),
        this.context._r7485c47d8bd77c?.(this),
        super.dispose());
    }
  }
  getXmlWindow(e, r = 1) {
    try {
      let i = this.assets.getAssetByName(`${e}_xml`);
      return i == null || this._windowManager == null ? null : this._windowManager.buildFromXML(i.content, r);
    } catch {
      return null;
    }
  }
  getModalXmlWindow(e) {
    try {
      let t = this.assets.getAssetByName(`${e}_xml`);
      return t == null || this._windowManager == null
        ? null
        : this._windowManager.buildModalDialogFromXML(t.content);
    } catch {
      return null;
    }
  }
  trackGoogle(e, r, t = -1) {
    this._tracking?.trackGoogle(e, r, t);
  }
  _r78bbaeb8e25778(e) {
    this._rf69e84327aafbc = e;
  }
  _rb13ed3a89b85ae(e) {
    this._r6358b2bd53ae19?.connection?.send(e);
  }
  requestGuide() {
    this.getBoolean("guides.enabled") && this._r94698e7f61b594?.onInput(UnkConstants_d64457._rb6595d1a1fe905);
  }
  _r19b752804a82d0(e) {
    this.var_44 != null && this.var_44._r19b752804a82d0(e, this.var_19);
  }
  _rb3ae2d581b50de(e, r, t, i) {
    this.var_44 != null &&
      ((this.var_44.reportedRoomId = this.var_19),
      (this.var_44.reportedUserId = e),
      (this.var_44.onPendingCallsForHelp = r),
      (this.var_44._r4d650ce6dc3306 = i),
      (this.var_44._rbc914ab682acbc = t),
      this._rc3e8c430541fc2?._r89fa3962f0824b(a.REPORT_TYPE_PHOTO));
  }
  _r046ef1fd9b83b8(e, r, t = null) {
    (this.var_44 && (this.var_44.reportedUserId = e),
      this._rc3e8c430541fc2?._r630b3f0dcad271());
  }
  _ra3b9851267604c(e, r) {
    this.var_44 != null &&
      ((this.var_44.reportedUserId = e),
      (this.var_44.onPendingCallsForHelp = r),
      (this.var_44.reportedRoomId = -1),
      this._rc3e8c430541fc2?.openReportingUserName());
  }
  _r94e9091c5dd6d8(e) {
    (this.var_44 && (this.var_44.reportedUserId = e),
      this._rc3e8c430541fc2?.userChatLinesAvailable());
  }
  reportRoom(e, r, t) {
    this.var_44 != null &&
      ((this.var_44.reportedRoomId = e),
      (this.var_44.reportedRoomName = r),
      (this.var_44.reportedUserId = -1),
      (this.var_44.onPendingCallsForHelp = ""),
      this._rc3e8c430541fc2?._r89fa3962f0824b(a.REPORT_TYPE_ROOM));
  }
  _rb1c939952cd277(e, r) {
    this.var_44 != null &&
      ((this.var_44._rd5d902ebf403c9 = e),
      (this.var_44._rd9f5cdd9dd88ea = r),
      this._rc3e8c430541fc2?._r89fa3962f0824b(a.REPORT_TYPE_THREAD));
  }
  _r699ed42ce6865d(e, r, t) {
    this.var_44 != null &&
      ((this.var_44._rd5d902ebf403c9 = e),
      (this.var_44._rd9f5cdd9dd88ea = r),
      (this.var_44._r5883f416775423 = t),
      this._rc3e8c430541fc2?._r89fa3962f0824b(a.REPORT_TYPE_MESSAGE));
  }
  reportPhoto(e, r, t, i, s) {
    return this.var_44 == null
      ? !1
      : r === 0
        ? (this._windowManager?.alert("${generic.alert.title}", "${help.cfh.error.notopic}", 0, null), !1)
        : (this.var_44.reportPhoto(e, r, t, i, s), !0);
  }
  reportSelfie(e, r, t, i, s) {
    return this.var_44 == null
      ? !1
      : r.length < this.getInteger("help.cfh.length.minimum", 15)
        ? (this._windowManager?.alert("${generic.alert.title}", "${help.cfh.error.msgtooshort}", 0, null), !1)
        : (this.var_44.reportSelfie(e, r, t, i, s), !0);
  }
  showWelcomeScreen(e, r, t, i = null) {
    ((this._r36ebb2457119e8 == null || this._r36ebb2457119e8.disposed) &&
      (this._r36ebb2457119e8 = new WelcomeScreenController(this)),
      this._r36ebb2457119e8.showWelcomeScreen(e, r, t, i));
  }
  showHabboWay() {
    ((this._r594af809a977aa ??= new y7e(this)), this._r594af809a977aa.showHabboWay());
  }
  _ra1b63e87af49e4() {
    this._r594af809a977aa?.closeWindow();
  }
  _r572a5ffd9c1afd() {
    ((this._r6ded8706dfd0b1 ??= new E7e(this)), this._r6ded8706dfd0b1.openSafetyBooklet());
  }
  _r79116f13b4fc5e() {
    this._r6ded8706dfd0b1?.closeWindow();
  }
  _r8a1993ef7d8317() {
    ((this._r8005e65e061b0c ??= new QJ(this)), this._r8005e65e061b0c._r8a1993ef7d8317());
  }
  _rb99f6f4b9af8d6() {
    ((this._r8005e65e061b0c ??= new QJ(this)), this._r8005e65e061b0c._rb99f6f4b9af8d6());
  }
  _r9f91ee0725cec7() {
    this._r94698e7f61b594?.openTourPopup();
  }
  _r33333dae7d91f0() {
    this._r7045cb34a6ab81?.showView();
  }
  _r71d023064452a2() {
    this.var_44?._r6f5fdec0692988();
  }
  _rcc22aff4331642() {
    this._rc3e8c430541fc2?._r383c01d7789bff();
  }
  _r41eeaae23311a4(e) {
    ((this.var_375 = e), this._rb13ed3a89b85ae(new UnkMessageComposer_0args_199680()));
  }
  _rffc8f5d59666ad(e) {
    ((this._r0642d4a7c247e9 = e), this._rb13ed3a89b85ae(new class_2182()), this._rb13ed3a89b85ae(new UnkMessageComposer_0args_b141ad()));
  }
  _r68cfb8aa6393cc(e) {
    let r = this.var_44?.reportedUserId ?? 0;
    if (
      !(r <= 0 || a.TOPICS_WITHOUT_IGNORE_AND_UNFRIEND.includes(e)) &&
      (this._rb13ed3a89b85ae(new class_1807(r)), this._friendList?._rf51d9426e17752(r) != null)
    ) {
      let t = new class_1900();
      (t.addRemovedFriend(r), this._rb13ed3a89b85ae(t));
    }
  }
  requestSanctionInfo(e) {
    this._rb13ed3a89b85ae(new UnkMessageComposer_0args_a0cb16());
  }
  _re969b30350bde4() {
    this._rb13ed3a89b85ae(new UnkMessageComposer_0args_abfc90());
  }
  _r9ca83c8ade6879() {
    let e = this.context.configuration?.getProperty("cfh.faq.url") ?? "";
    ua.isEmpty(e) || Ae.openWebPage(e, "habboMain");
  }
  linkReceived(e) {
    if ((e === "help/tour" && this.requestGuide(), e.indexOf("help/report/room/") === 0)) {
      let r = e.split("/");
      if (r.length >= 5) {
        let t = Number.parseInt(r[3] ?? "", 10),
          i = unescape(r.splice(4).join("/"));
        Number.isNaN(t) || this.reportRoom(t, i, "");
      }
    }
  }
  _rc2eff326f83fc7 = n((e) => {
    let r = ClassUtils.getParser(e, class_2133);
    if (r == null) return;
    if (r.callCount === 0 || (this.var_375 === a.REPORT_TYPE_PHOTO && r.callCount < 3)) {
      this._r6e74438f14009b();
      return;
    }
    let t = r.callArray.slice(0, 10).map((i) => i.message).join(`
`);
    this.var_44?.showPendingRequest(t);
  }, "_rc2eff326f83fc7");
  _r9b472edeafa4c7 = n(() => {
    this._rc3e8c430541fc2?.submitCallForHelp(!1);
  }, "_r9b472edeafa4c7");
  _r848177b8826dda = n((e) => {
    let r = ClassUtils.getParser(e, C9);
    if (r != null)
      switch (r.statusCode) {
        case C9.const_1298:
          this._rcc22aff4331642();
          break;
        case C9.const_972:
          r.pendingTicket && this._r94698e7f61b594?.showPendingTicket(r.pendingTicket);
          break;
        default:
          this._r94698e7f61b594?._rf7d4bef940b9a9(r.localizationCode);
          break;
      }
  }, "_r848177b8826dda");
  _r6e74438f14009b() {
    switch (this.var_375) {
      case a.REPORT_TYPE_EMERGENCY:
      case a.REPORT_TYPE_IM:
      case a.REPORT_TYPE_ROOM:
      case a.REPORT_TYPE_THREAD:
      case a.REPORT_TYPE_MESSAGE:
        this.var_44?.showEmergencyHelpRequest(this.var_375);
        break;
      case a.REPORT_TYPE_GUIDE:
        this._r94698e7f61b594?.openReportWindow();
        break;
      case a.REPORT_TYPE_PHOTO:
        (this._rf69e84327aafbc && this._rb13ed3a89b85ae(this._rf69e84327aafbc),
          (this._rf69e84327aafbc = null));
        break;
    }
    this.var_375 = 0;
  }
  _rcda6913b0fd5b3 = n((e) => {
    this._windowManager?._r3651220a1507f2(
      "${help.emergency.global_mute.caption}",
      "${help.emergency.global_mute.subtitle}",
      "${help.emergency.global_mute.message}",
      "${help.emergency.global_mute.link}",
      e.getParser()._re294261cdb005e,
    );
  }, "_rcda6913b0fd5b3");
  onUsers = n((e) => {
    let r = ClassUtils.getParser(e, class_2279);
    if (r != null)
      for (let t = 0; t < r.getUserCount(); t++) {
        let i = r.getUser(t);
        i.webID !== this._rb286a1f9faeb60 &&
          i.userType === RoomObjectTypeEnum.OBJECT_TYPE_USER &&
          this._rc90ed3e86804b8.registerUser(i.webID, i.name, i.figure);
      }
  }, "onUsers");
  _r8aae5137a099c1 = n((e) => {
    let r = ClassUtils.getParser(e, class_2235);
    if (r == null) return;
    let t = this._rc90ed3e86804b8.roomId,
      i = this._rc90ed3e86804b8.roomName;
    this._rc90ed3e86804b8.registerRoom(-1, "SnowStorm");
    for (let s of r.gameObjects?.gameObjects ?? []) {
      let o = s;
      o.userId != null &&
        o.userId !== this._rb286a1f9faeb60 &&
        this._rc90ed3e86804b8.registerUser(o.userId, o.name ?? "", o.figure ?? "");
    }
    this._rc90ed3e86804b8.registerRoom(t, i);
  }, "_r8aae5137a099c1");
  _rc68c5eb1f835e9 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_SI_283c79);
    r != null && this._rc90ed3e86804b8.registerRoom(r.roomId, "");
  }, "_rc68c5eb1f835e9");
  _ra43f6ebc8ffe33 = n((e) => {
    let r = ClassUtils.getParser(e, class_2052);
    r != null &&
      r.data != null &&
      this._rc90ed3e86804b8.registerRoom(r.data.flatId, r.data.roomName);
  }, "_ra43f6ebc8ffe33");
  onRoomEnter = n((e) => {
    let r = ClassUtils.getParser(e, class_2161);
    r != null && (this.var_19 = r.guestRoomId);
  }, "onRoomEnter");
  _r09330674c979c8 = n((e) => {
    let r = ClassUtils.getParser(e, class_2046);
    r != null && (this._r48b838048543d7 = r._callForHelpCategories ?? []);
  }, "_r09330674c979c8");
  _rdfe52c97da3eb7 = n((e) => {
    this._r9ee2842df2bf2d?.openWindow(e);
  }, "_rdfe52c97da3eb7");
  _r716ebe46b183a9 = n((e) => {
    this._r7ac5646e3ec2da?.openWindow(e);
  }, "_r716ebe46b183a9");
  IIDHabboCatalog = n((e) => {
    (this._r36ebb2457119e8?.IIDHabboCatalog(e), this._r94698e7f61b594?.IIDHabboCatalog(e));
  }, "IIDHabboCatalog");
}

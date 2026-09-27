// Estratto da HabboAirLauncher.deobf.js, riga 228477.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/groups/HabboGroupsManager.as
// Nome offuscato: _ia4dc137ed49aaa

class a extends ue {
  static {
    n(this, "HabboGroupsManager");
  }
  static GROUPS_TRACKING_CATEGORY = "HabboGroups";
  _rd04b374e412063;
  _r1187ae6793ac9e;
  _r246ee50188fe0b;
  _r2121e6fb70ae44;
  _r39d7a338261fca;
  _r536673db5e76ec;
  _rd6871899badf5a;
  _r20502f1469929a;
  var_4225 = null;
  var_3798 = 0;
  var_2440 = 0;
  var_4885 = !1;
  _rfd0d037855999a = null;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._rd04b374e412063 = new DetailsWindowCtrl(this)),
      (this._r1187ae6793ac9e = new s7e(this)),
      (this._r246ee50188fe0b = new n7e(this)),
      (this._r2121e6fb70ae44 = new J4e(this)),
      (this._r39d7a338261fca = new HcRequiredWindowCtrl(this)),
      (this._r536673db5e76ec = new GroupCreatedWindowCtrl(this)),
      (this._rd6871899badf5a = new r7e(this)),
      (this._r20502f1469929a = new nQ(this, e, 0, t)));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (e) => {
        this._navigator = e;
      }),
      new ComponentDependency(new IIDHabboNewNavigator(), (e) => {
        this._newNavigator = e;
      }),
      new ComponentDependency(new IIDHabboFriendList(), (e) => {
        this._friendlist = e;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._toolbar = e;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._r49621084c4a423 = e;
      }),
    ]);
  }
  initComponent() {
    ((this._messageEvents = []),
      this.addMessageEvent(new _i71ce07f1d9b7d6(this.onGroupDetails)),
      this.addMessageEvent(new _i8991cf7c25e9e5(this._r954fcb6b6be7bb)),
      this.addMessageEvent(new _i6ebdd041f0c965(this._r7fd6799a5a846b)),
      this.addMessageEvent(new _ic5da2ce80ee069(this._r63f18b8b7cfb1a)),
      this.addMessageEvent(new _i00aa3a6d8f8ba7(this._r063f1cfd507d66)),
      this.addMessageEvent(new _ifce129bfe9880b(this._r408d2b34834cda)),
      this.addMessageEvent(new class_1929(this._r54130df0554e15)),
      this.addMessageEvent(new class_2117(this.onRoomEnter)),
      this.addMessageEvent(new _i4aae569b8113be(this.onGuildCreationInfo)),
      this.addMessageEvent(new _i48b9cb9585f2e2(this.onGuildEditInfo)),
      this.addMessageEvent(new _i8e18b6b8e0aaf9(this._r9ce93e18214eec)),
      this.addMessageEvent(new _if39b73b30322ee(this._rf56b115c39c73d)),
      this.addMessageEvent(new _i8cbe0f6f5f797e(this._ra6e78270489e0e)),
      this.addMessageEvent(new _i19340cdc8053a5(this._r8003fb575755c8)),
      this.addMessageEvent(new _i24ff5ca033ae89(this._r8cef4480d4ddf9)),
      this.addMessageEvent(new _i39f258482a441c(this._r7e014d425edf6b)),
      this.addMessageEvent(new _i413e6f7cfa92e2(this.onGuildMemberMgmtFailed)),
      this.addMessageEvent(new class_1926(this._r6e2e75987c854e)),
      this.addMessageEvent(new _ifd1e8cc4ffa142(this.onFlatCreated)),
      this.addMessageEvent(new _idf59dfc0ac38b3(this._r83e7b8fe105d91)),
      this.addMessageEvent(new _if1f31fca64114d(this._rd7e6667951b453)),
      this.addMessageEvent(new class_3574(this._r90d4d797f72e72)),
      this.addMessageEvent(new class_2027(this.onRoomInfo)),
      this.addMessageEvent(new _ic478259c7e25c9(this._r0be3a5d0c19f2b)),
      this.addMessageEvent(new _i2eb2d5ba553a6b(this.class_2117)),
      this.context._r7e43d9f4706607(this),
      this._r2121e6fb70ae44 != null && this.context._r7e43d9f4706607(this._r2121e6fb70ae44),
      this._r20502f1469929a != null && this.context._r7e43d9f4706607(this._r20502f1469929a));
  }
  dispose() {
    if (!this.disposed) {
      if (this._messageEvents != null && this._communication != null)
        for (let e of this._messageEvents) this._communication._r7668362bf55fdd(e);
      (this.context._r7485c47d8bd77c(this),
        this._r2121e6fb70ae44 != null && this.context._r7485c47d8bd77c(this._r2121e6fb70ae44),
        this._r20502f1469929a != null && this.context._r7485c47d8bd77c(this._r20502f1469929a),
        (this._messageEvents = null),
        this._rd04b374e412063?.dispose(),
        (this._rd04b374e412063 = null),
        this._r1187ae6793ac9e?.dispose(),
        (this._r1187ae6793ac9e = null),
        this._r246ee50188fe0b?.dispose(),
        (this._r246ee50188fe0b = null),
        this._r2121e6fb70ae44?.dispose(),
        (this._r2121e6fb70ae44 = null),
        this._r39d7a338261fca?.dispose(),
        (this._r39d7a338261fca = null),
        this._r536673db5e76ec?.dispose(),
        (this._r536673db5e76ec = null),
        this._rd6871899badf5a?.dispose(),
        (this._rd6871899badf5a = null),
        this._r20502f1469929a?.dispose(),
        (this._r20502f1469929a = null),
        (this._communication = null),
        (this._windowManager = null),
        (this._localization = null),
        (this._navigator = null),
        (this._newNavigator = null),
        (this._friendlist = null),
        (this._catalog = null),
        (this._toolbar = null),
        (this._r49621084c4a423 = null),
        (this._sessionDataManager = null),
        (this.var_4225 = null),
        (this._rfd0d037855999a = null),
        super.dispose());
    }
  }
  get linkPattern() {
    return "group/";
  }
  linkReceived(e) {
    let r = e.split("/");
    if (r.length !== 2) return;
    let t = Number.parseInt(r[1], 10);
    Number.isNaN(t) || this._r7d6e59e242cdb0(t);
  }
  _r373cbe1da119cd(e, r) {
    (this._r7d6e59e242cdb0(r), this.send(new class_2154(a.GROUPS_TRACKING_CATEGORY, `${r}`, "badge clicked")));
  }
  showBadgeLeaderboard(e, r = -1, t = 0) {
    this._r20502f1469929a?.showBadgeLeaderboard(e, r, t);
  }
  _r7d6e59e242cdb0(e) {
    this.send(new _i494540f04bf21d(e, !0));
  }
  send(e) {
    this._communication?.connection.send(e);
  }
  getXmlWindow(e) {
    try {
      let t = this.assets.getAssetByName(e)?.content;
      return t != null ? (this._windowManager?.buildFromXML(t) ?? null) : null;
    } catch {
      return null;
    }
  }
  _r6bd8f6d6bfdbb5(e) {
    let t = this.assets.getAssetByName(e)?.content;
    return t?.clone?.() ?? t ?? new A(1, 1, !0, 0);
  }
  _r6b6c989018eb05(e) {
    this.context._r6b6c989018eb05(e);
  }
  openGroupForum(e) {
    this._r6b6c989018eb05(`groupforum/${e}`);
  }
  _rccdc0573215159(e) {
    this._r2121e6fb70ae44?._rccdc0573215159(e);
  }
  _rebf0e04324ba16(e) {
    this.send(new class_2134(e));
  }
  openCatalog(e) {
    this._catalog?.openCatalogPage(e);
  }
  _rb6435b5d818fc5(e) {
    this._catalog?.openClubCenter();
  }
  trackGoogle(e, r, t = -1) {
    this._r49621084c4a423?.trackGoogle(e, r, t);
  }
  _rb02cf61da43355(e, r) {
    ((this._rfd0d037855999a = new _i37e158a402dcc5(e, r)), this.send(new _i3043ddc0e64aa0(r, e)));
  }
  _re96e4140c9ed6d(e, r) {
    ((this._rfd0d037855999a = new _i37e158a402dcc5(e, r, !0)), this.send(new _i3043ddc0e64aa0(r, e)));
  }
  get localization() {
    return this._r356718ca29352c(this._localization, "localization");
  }
  get windowManager() {
    return this._r356718ca29352c(this._windowManager, "windowManager");
  }
  get _r482e9bcd999153() {
    return this._r246ee50188fe0b;
  }
  get _r067899514fe802() {
    return this._rd6871899badf5a;
  }
  get groupRoomInfoEnabled() {
    return this.getBoolean("groupRoomInfo.enabled");
  }
  get groupDeletionEnabled() {
    return this.getBoolean("group.deletion.enabled");
  }
  get groupRoomInfoBadgeEnabled() {
    return this.groupRoomInfoEnabled && this.getBoolean("groupRoomInfo.badge.enabled");
  }
  get toolbarAttachEnabled() {
    return this.groupRoomInfoEnabled && this.getBoolean("groupRoomInfo.attach.enabled");
  }
  get isActivityDisplayEnabled() {
    return this.getBoolean("activity.point.display.enabled");
  }
  get _r1b5a723df2ea20() {
    return this.var_4225;
  }
  get avatarId() {
    return this.var_3798;
  }
  get navigator() {
    return this._newNavigator?._r8d305e819155a0 ?? this._navigator;
  }
  get friendlist() {
    return this._friendlist;
  }
  get _rea8338004ec94f() {
    return this._r1187ae6793ac9e;
  }
  get roomId() {
    return this.var_2440;
  }
  get toolbar() {
    return this._toolbar;
  }
  get hasVip() {
    return this.var_4885;
  }
  get _r40181a1260cd83() {
    return this._newNavigator;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  addMessageEvent(e) {
    this._messageEvents == null ||
      this._communication == null ||
      this._messageEvents.push(this._communication._r2e106e2349a0b6(e));
  }
  _r954fcb6b6be7bb = n((e) => {
    let r = e.groupId;
    (this._rd04b374e412063?._r954fcb6b6be7bb(r), this._rd6871899badf5a?._r954fcb6b6be7bb(r));
  }, "_r954fcb6b6be7bb");
  onGroupDetails = n((e) => {
    let r = e.data;
    (this._rd04b374e412063?.onGroupDetails(r),
      this._r2121e6fb70ae44?.onGroupDetails(r),
      this._rd6871899badf5a?.onGroupDetails(r));
  }, "onGroupDetails");
  _r7fd6799a5a846b = n((e) => {
    let r = e.data;
    r.var_4773 &&
      this._r2121e6fb70ae44 != null &&
      ((this._r2121e6fb70ae44._rbf95c24baaafa7 = !0),
      (this._r2121e6fb70ae44._rd39bd9ad9719b3 = !0),
      this._r2121e6fb70ae44.onProfile(r));
  }, "_r7fd6799a5a846b");
  _r63f18b8b7cfb1a = n((e) => {
    this._r2121e6fb70ae44?._rf2a6ad6fedd3e4(e.userId);
  }, "_r63f18b8b7cfb1a");
  _r063f1cfd507d66 = n((e) => {
    let r = e.groupId;
    (this._rd04b374e412063?._rcf529a562e59a6(r) || this._rd6871899badf5a?._rcf529a562e59a6(r)) &&
      this.send(new _i494540f04bf21d(r, !1));
  }, "_r063f1cfd507d66");
  _r408d2b34834cda = n((e) => {
    let r = e.reason;
    if (r === _i43cb82507e0a62._r4d85126edd42ea) {
      this._r39d7a338261fca?.show(!1);
      return;
    }
    let t = `group.joinfail.${r}`,
      i = this.localization.getLocalization(t, t);
    this._windowManager?.alert("${group.joinfail.title}", i, 0, this._r9d8a83a2f57c04);
  }, "_r408d2b34834cda");
  onGuildCreationInfo = n((e) => {
    (this._r246ee50188fe0b?.onGuildCreationInfo(e.data), this.requestGuildEditorData());
  }, "onGuildCreationInfo");
  onGuildEditInfo = n((e) => {
    (this._r246ee50188fe0b?.onGuildEditInfo(e.data), this.requestGuildEditorData());
  }, "onGuildEditInfo");
  _r54130df0554e15 = n((e) => {
    (this._rd04b374e412063?.close(), this._rd6871899badf5a?.close());
  }, "_r54130df0554e15");
  onRoomEnter = n((e) => {
    (this._rd04b374e412063?.close(), this._rd6871899badf5a?.close());
    let r = ClassUtils.getParser(e, class_2161);
    r != null && (this.var_2440 = r.guestRoomId);
  }, "onRoomEnter");
  _r9d8a83a2f57c04 = n((e, r) => {
    e.dispose();
  }, "_r9d8a83a2f57c04");
  _r8cef4480d4ddf9 = n((e) => {
    ((this.var_4225 = e.data), this.events.dispatchEvent?.(new WI()));
  }, "_r8cef4480d4ddf9");
  _r7e014d425edf6b = n((e) => {
    let r = e.reason;
    if (r === _i93b99ef5dffd9c._r4d85126edd42ea) {
      this._r39d7a338261fca?.show(!0);
      return;
    }
    let t = `group.edit.fail.${r}`,
      i = this.localization.getLocalization(t, t);
    this._windowManager?.alert("${group.edit.fail.title}", i, 0, this._r9d8a83a2f57c04);
  }, "_r7e014d425edf6b");
  _r9ce93e18214eec = n((e) => {
    this._r1187ae6793ac9e?._r9ce93e18214eec(e);
  }, "_r9ce93e18214eec");
  _rf56b115c39c73d = n((e) => {
    this._r1187ae6793ac9e?._rf56b115c39c73d(e);
  }, "_rf56b115c39c73d");
  _ra6e78270489e0e = n((e) => {
    this._r1187ae6793ac9e?._ra6e78270489e0e(e);
  }, "_ra6e78270489e0e");
  _r8003fb575755c8 = n((e) => {
    this._r1187ae6793ac9e?._r8003fb575755c8(e);
  }, "_r8003fb575755c8");
  onGuildMemberMgmtFailed = n((e) => {
    this._r1187ae6793ac9e?.onGuildMemberMgmtFailed(e);
  }, "onGuildMemberMgmtFailed");
  _r6e2e75987c854e = n((e) => {
    let r = ClassUtils.getParser(e, class_1833);
    r != null && (this.var_3798 = r.id);
  }, "_r6e2e75987c854e");
  onFlatCreated = n((e) => {
    let r = e.getParser();
    this._r246ee50188fe0b?.onFlatCreated(r.flatId, r._rd7b91c8da610c2);
  }, "onFlatCreated");
  _r83e7b8fe105d91 = n((e) => {
    (this._r536673db5e76ec?.show(e.groupId),
      this._r246ee50188fe0b?.close(),
      this._rd6871899badf5a != null && (this._rd6871899badf5a.expectedGroupId = e.groupId),
      this.var_2440 !== e.baseRoomId && this.navigator?._r32d169e0ccf735(e.baseRoomId));
  }, "_r83e7b8fe105d91");
  _rd7e6667951b453 = n((e) => {
    if (this._rfd0d037855999a == null) return;
    let r = e.userId(),
      t = e.furniCount(),
      i = this._r1187ae6793ac9e?.data ?? null,
      s = this._rfd0d037855999a._rd57d669a048325 ? "group.block" : "group.kick";
    if (t > 0) {
      if (r === this.var_3798)
        (this.localization._r43eae9731f5b27("group.leaveconfirm.desc", "amount", `${t}`),
          this._windowManager?.confirm(
            "${group.leaveconfirm.title}",
            "${group.leaveconfirm.desc}",
            0,
            this._r8b19848489851d,
          ));
      else if (i != null) {
        let o = i.getUser(r);
        o != null &&
          (this.localization._r43eae9731f5b27(`${s}confirm.desc`, "amount", `${t}`),
          this.localization._r43eae9731f5b27(`${s}confirm.desc`, "user", o.userName),
          this._windowManager?.confirm(
            `\${${s}confirm.title}`,
            `\${${s}confirm.desc}`,
            0,
            this._r8b19848489851d,
          ));
      }
      return;
    }
    if (r === this.var_3798)
      this._windowManager?.confirm(
        "${group.leaveconfirm.title}",
        "${group.leaveconfirm_nofurni.desc}",
        0,
        this._r8b19848489851d,
      );
    else if (i != null) {
      let o = i.getUser(r);
      o != null &&
        (this.localization._r43eae9731f5b27(`${s}confirm_nofurni.desc`, "user", o.userName),
        this._windowManager?.confirm(
          `\${${s}confirm.title}`,
          `\${${s}confirm_nofurni.desc}`,
          0,
          this._r8b19848489851d,
        ));
    }
  }, "_rd7e6667951b453");
  _r8b19848489851d = n((e, r) => {
    if (e == null || e.disposed || this._rfd0d037855999a == null) {
      this._rfd0d037855999a = null;
      return;
    }
    (e.dispose(),
      r.type === y.const_1300 &&
        this.send(
          new _i7ffb0617d00fcb(
            this._rfd0d037855999a._r7351b498bb275d,
            this._rfd0d037855999a._rddd5eb6a0fba28,
            this._rfd0d037855999a._rd57d669a048325,
          ),
        ),
      (this._rfd0d037855999a = null));
  }, "_r8b19848489851d");
  _r90d4d797f72e72 = n((e) => {
    let r = ClassUtils.getParser(e, _i02f7b3126bce1e);
    r != null &&
      ((this.var_4885 = r._ra6c4481543acf2 && r.minutesUntilExpiration > 0),
      this._r246ee50188fe0b?._r5a2ff7e5d905f9());
  }, "_r90d4d797f72e72");
  onRoomInfo = n((e) => {
    let r = ClassUtils.getParser(e, class_2052);
    r != null && r._r545a567b7e1354 && r.data != null && this._rd6871899badf5a?.onRoomInfo(r.data);
  }, "onRoomInfo");
  _r0be3a5d0c19f2b = n((e) => {
    this._r2121e6fb70ae44?._r0be3a5d0c19f2b(e.userId, e.relationshipStatusMap);
  }, "_r0be3a5d0c19f2b");
  class_2117 = n((e) => {
    this._r2121e6fb70ae44?._rc03eebb4ddbfbb(e.userId, e.selectedBadges);
  }, "class_2117");
  requestGuildEditorData() {
    this.var_4225 == null && this.send(new class_2028());
  }
  _r356718ca29352c(e, r) {
    if (e == null) throw new Error(`HabboGroupsManager ${r} is not available.`);
    return e;
  }
}

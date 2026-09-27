// Extracted from HabboAirLauncher.deobf.js, line 213278.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/data/HabboFriendBarData.as
// Obfuscated name: _i83801f53ecf5d4

class a extends ue {
  static {
    n(this, "HabboFriendBarData");
  }
  static _rbcca762315ae92 = !1;
  static _r75a062bc4371bb = !1;
  static TRACKING_EVENT_CATEGORY = "Navigation";
  static TRACKING_EVENT_TYPE = "Friend Bar";
  static TRACKING_EVENT_ACTION_VISIT = "go.friendbar";
  static TRACKING_EVENT_ACTION_CHAT = "chat_btn_click";
  static TRACKING_EVENT_ACTION_FIND_FRIENDS = "find_friends_btn_click";
  static TRACKING_EVENT_ACTION_PLAY_SNOWSTORM_TAB = "play_snowstorm_tab_click";
  static TRACKING_EVENT_ACTION_PLAY_SNOWSTORM_BUTTON = "play_snowstorm_btn_click";
  static const_1258 = "Toolbar";
  static const_478 = "open";
  static const_722 = "close";
  static LEGACY_TRACKING_EVENT_TYPE_FRIENDLIST = "FRIENDLIST";
  static LEGACY_TRACKING_EVENT_TYPE_MESSENGER = "MESSENGER";
  _r6e786902939838 = [];
  _r5c82a70aaa28cd = new B();
  var_194 = [];
  _r91ee1aad6e721d = 0;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboConfigurationManager(), null, !1),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r69f016458bd53f = e;
      }),
      new ComponentDependency(new IIDHabboFriendList(), (e) => {
        this._r590f28d02eb9a9 = e;
      }),
      new ComponentDependency(new IIDHabboMessenger(), (e) => {
        this._rdfb91d87c4db60 = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
    ]);
  }
  initComponent() {
    let e = n((l) => this._r8b3445fb8bb30e(l), "_i8b3445fb8bb30e"),
      r = n((l) => this._r89804fb6520a29(l), "_i89804fb6520a29"),
      t = n((l) => this._re2d4f827ef2413(l), "_ie2d4f827ef2413"),
      i = n((l) => this._r9998eaa4b9db05(l), "_i9998eaa4b9db05"),
      s = n((l) => this._rf9b7cbaf81007e(l), "_if9b7cbaf81007e"),
      o = n((l) => this._r5debeb21d04892(l), "_i5debeb21d04892"),
      d = n((l) => this._rde74485d1668e5(l), "_ide74485d1668e5"),
      c = n((l) => this._r477c677e768ba6(l), "_i477c677e768ba6"),
      f = n((l) => this._r43c39e0385e668(l), "_i43c39e0385e668");
    (this._r69f016458bd53f?._r2e106e2349a0b6(new class_2248(e)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new UnkMessageEvent_b1cf72(r)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new UnkMessageEvent_b019fd(t)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new UnkMessageEvent_e039af(i)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new UnkMessageEvent_fdf85a(s)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new UnkMessageEvent_d91476(o)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new class_1935(d)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new class_2250(c)),
      this._r69f016458bd53f?._r2e106e2349a0b6(new class_3355(f)),
      (this.var_180 = (l) => this._r403615d2ae79f3(l)),
      this._r590f28d02eb9a9?.events.addEventListener?.(FriendRequestEvent.ACCEPTED, this.var_180),
      this._r590f28d02eb9a9?.events.addEventListener?.(FriendRequestEvent.DECLINED, this.var_180));
  }
  dispose() {
    this.disposed ||
      (this._r590f28d02eb9a9?.events.removeEventListener?.(FriendRequestEvent.ACCEPTED, this.var_180),
      this._r590f28d02eb9a9?.events.removeEventListener?.(FriendRequestEvent.DECLINED, this.var_180),
      (this._r6e786902939838 = []),
      this._r5c82a70aaa28cd.dispose(),
      (this.var_194 = []),
      super.dispose());
  }
  get _r2144d65dea1029() {
    return this._r6e786902939838.length;
  }
  _rd1b16f75b8bb69(e) {
    return this._r6e786902939838[e] ?? null;
  }
  getFriendByID(e) {
    return this._r5c82a70aaa28cd.getValue(e) ?? null;
  }
  _r079737796410ca(e) {
    return this._r6e786902939838.find((r) => r.name === e) ?? null;
  }
  setFriendAt(e, r) {
    let t = e,
      i = this._r6e786902939838.indexOf(t);
    i > -1 &&
      i !== r &&
      (this._r6e786902939838.splice(i, 1),
      this._r6e786902939838.splice(r, 0, t),
      this.events.dispatchEvent?.(new R8()));
  }
  get _r101698a53118ff() {
    return this.var_194.length;
  }
  _r93fe4962023663(e) {
    return this.var_194[e] ?? null;
  }
  _r062dea074e6c7f(e) {
    return this.var_194.find((r) => r.id === e) ?? null;
  }
  _r0405a8df3b75b2(e) {
    return this.var_194.find((r) => r.name === e) ?? null;
  }
  _r0add2df0e583e9() {
    return this.var_194;
  }
  _r2261fa54b0d7ce(e) {
    (this._r16e14d1c9aeb9c(e), this._r590f28d02eb9a9?._r2261fa54b0d7ce(e));
  }
  _r36a1959e9c4470() {
    ((this.var_194 = []),
      this._r590f28d02eb9a9?._r36a1959e9c4470(),
      this.events.dispatchEvent?.(new Du()));
  }
  _r62afd2c361c783(e) {
    (this._r16e14d1c9aeb9c(e), this._r590f28d02eb9a9?._r62afd2c361c783(e));
  }
  _r64b082e60ec4ab() {
    ((this.var_194 = []),
      this._r590f28d02eb9a9?._r64b082e60ec4ab(),
      this.events.dispatchEvent?.(new Du()));
  }
  _r3d5c1bfee4437a(e) {
    (this._r69f016458bd53f?.connection.send(new class_3066(e)),
      this._r69f016458bd53f?.connection.send(
        new class_2154(a.TRACKING_EVENT_CATEGORY, a.TRACKING_EVENT_TYPE, a.TRACKING_EVENT_ACTION_VISIT),
      ));
  }
  startConversation(e) {
    this._rdfb91d87c4db60 != null &&
      (this._rdfb91d87c4db60.startConversation(e),
      this.events.dispatchEvent?.(new P8(!1, e)),
      this._r69f016458bd53f?.connection.send(
        new class_2154(a.TRACKING_EVENT_CATEGORY, a.TRACKING_EVENT_TYPE, a.TRACKING_EVENT_ACTION_CHAT),
      ));
  }
  _ra110382b6557cc() {
    (this._r69f016458bd53f?.connection.send(new UnkMessageComposer_0args_8e4d2a()),
      this._r69f016458bd53f?.connection.send(
        new class_2154(a.TRACKING_EVENT_CATEGORY, a.TRACKING_EVENT_TYPE, a.TRACKING_EVENT_ACTION_FIND_FRIENDS),
      ));
  }
  _rd4e1f486632930() {
    this._r590f28d02eb9a9 != null &&
      (this._r590f28d02eb9a9._r31fba0b9e95dac() !== UnkConstants_a4c171.SearchView
        ? this._r590f28d02eb9a9._r5ea4d7eb8b0a8c()
        : this._r590f28d02eb9a9.close());
  }
  _rf728933d059825(e) {
    this._r504967dac54ee6(a.TRACKING_EVENT_ACTION_PLAY_SNOWSTORM_TAB, e);
  }
  _r52719b4333588f(e) {
    this._r504967dac54ee6(a.TRACKING_EVENT_ACTION_PLAY_SNOWSTORM_BUTTON, e);
  }
  _r61142a7bc6d4cf() {
    if (this._r590f28d02eb9a9 != null) {
      if (!this._r590f28d02eb9a9.isOpen())
        this.var_194.length > 0
          ? this._r590f28d02eb9a9._r7ec993a0b08204()
          : this._r590f28d02eb9a9.openFriendList();
      else {
        let e = this._r590f28d02eb9a9.mainWindow;
        if (e != null && Dl.isHiddenByOtherWindows(e)) {
          e.activate();
          return;
        }
        this._r590f28d02eb9a9.close();
      }
      this._r69f016458bd53f?.connection.send(
        new class_2154(
          a.const_1258,
          a.LEGACY_TRACKING_EVENT_TYPE_FRIENDLIST,
          this._r590f28d02eb9a9.isOpen() ? a.const_478 : a.const_722,
        ),
      );
    }
  }
  _r4109e4e344be47() {
    this._rdfb91d87c4db60 != null &&
      (this._rdfb91d87c4db60._r4109e4e344be47(),
      this._r69f016458bd53f?.connection.send(
        new class_2154(
          a.const_1258,
          a.LEGACY_TRACKING_EVENT_TYPE_MESSENGER,
          this._rdfb91d87c4db60.isOpen() ? a.const_478 : a.const_722,
        ),
      ));
  }
  _r44cfd4df9a8991(e) {
    this._r69f016458bd53f != null &&
      (e > 0
        ? this._r69f016458bd53f.connection.send(new class_2134(e))
        : this._r69f016458bd53f.connection.send(new class_1949(Math.abs(e), !0)));
  }
  _rde19ea92fd3543(e) {
    this._r69f016458bd53f?.connection.send(new UnkMessageComposer_1args_eb6736(e));
  }
  get showFriendNotifications() {
    return this.getBoolean("friendbar.notifications.enabled");
  }
  get showFriendRequests() {
    return this.getBoolean("friendbar.requests.enabled");
  }
  _r16e14d1c9aeb9c(e) {
    let r = this.var_194.findIndex((t) => t.id === e);
    r >= 0 && (this.var_194.splice(r, 1), this.events.dispatchEvent?.(new Du()));
  }
  _r504967dac54ee6(e, r) {
    this._r69f016458bd53f?.connection.send(
      new class_2154(a.TRACKING_EVENT_CATEGORY, a.TRACKING_EVENT_TYPE, e, r, this._r2144d65dea1029),
    );
  }
  _r7d7adc4bd41a86(e) {
    for (let r of e)
      if (r.online || a._rbcca762315ae92) {
        let t = new Vm(
          r.id,
          r.name,
          r.realName,
          r.motto,
          r.gender,
          r.online,
          r.followingAllowed,
          r.figure,
          r.categoryId,
          r._r1939eac45a5e21,
        );
        (this._r6e786902939838.push(t), this._r5c82a70aaa28cd.add(t.id, t));
      }
    ((this._r6e786902939838 = a._rbcca762315ae92
      ? this._rc56420d751deba(this._r6e786902939838)
      : this._r2fafff0bf2eaee(this._r6e786902939838)),
      this.events.dispatchEvent?.(new R8()));
  }
  _r2fafff0bf2eaee(e) {
    return (
      a._r75a062bc4371bb && e.sort((r, t) => r.name.localeCompare(t.name, void 0, { sensitivity: "accent" })),
      e
    );
  }
  _rc56420d751deba(e) {
    let r = e.filter((i) => i.online),
      t = e.filter((i) => !i.online);
    return (
      a._r75a062bc4371bb &&
        (r.sort((i, s) => i.name.localeCompare(s.name, void 0, { sensitivity: "accent" })),
        t.sort((i, s) => i.name.localeCompare(s.name, void 0, { sensitivity: "accent" }))),
      r.concat(t)
    );
  }
  makeNotification(e, r, t, i, s, o = !0) {
    if (!this.showFriendNotifications) return;
    let d = this.getFriendByID(Number.parseInt(e, 10));
    if (d == null) return;
    let c = d.notifications.find((l) => l._r46e70b63ffc509 === r),
      f = c != null;
    (c != null
      ? ((c.message = t ?? ""), (c._viewOnce = i))
      : ((c = new yd(r, t ?? "", i)), d.notifications.push(c)),
      !(f && !o) &&
        (this.events.dispatchEvent?.(new zy(d.id, c)),
        s && this.setFriendAt(d, 0),
        d.logEventId < 0 && (d.logEventId = d.getNextLogEventId()),
        this._tracking?.trackEventLog(
          "FriendBar",
          yd.typeCodeToString(r),
          "notified",
          "",
          d.logEventId > 0 ? d.logEventId : 0,
        )));
  }
  _r8b3445fb8bb30e = n((e) => {
    this._rdfb91d87c4db60?.events.addEventListener?.(ActiveConversationEvent.ACTIVE_CONVERSATION_COUNT_CHANGED, this._r690ec4f65a7b96);
  }, "_r8b3445fb8bb30e");
  _r89804fb6520a29 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_III_be23a9);
    r != null && this._r7d7adc4bd41a86(r._r3ffeb595461103);
  }, "_r89804fb6520a29");
  _re2d4f827ef2413 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_IIII_7720fd);
    if (r == null) return;
    let t = r._r4c37a8f59cd58b,
      i = r._rbefba214d28621,
      s = r._r4635d11ec0fc56;
    for (let o of t) {
      let d = this._r5c82a70aaa28cd.getValue(o) ?? null;
      d != null &&
        (this._r5c82a70aaa28cd.remove(o),
        this._r6e786902939838.splice(this._r6e786902939838.indexOf(d), 1),
        this._rdfb91d87c4db60?._r967f22ee23ea5f(o));
    }
    for (let o of i) {
      let d = this._r5c82a70aaa28cd.getValue(o.id) ?? null;
      d != null
        ? o.online || a._rbcca762315ae92
          ? ((d.name = o.name),
            (d.realName = o.realName),
            (d.motto = o.motto),
            (d.gender = o.gender),
            (d.online = o.online),
            (d._allowFollow = o.followingAllowed),
            (d.figure = o.figure),
            (d.categoryId = o.categoryId),
            (d._r1939eac45a5e21 = o._r1939eac45a5e21))
          : (this._r5c82a70aaa28cd.remove(o.id),
            this._r6e786902939838.splice(this._r6e786902939838.indexOf(d), 1))
        : (o.online || a._rbcca762315ae92) &&
          ((d = new Vm(
            o.id,
            o.name,
            o.realName,
            o.motto,
            o.gender,
            o.online,
            o.followingAllowed,
            o.figure,
            o.categoryId,
            o._r1939eac45a5e21,
          )),
          this._r6e786902939838.splice(0, 0, d),
          this._r5c82a70aaa28cd.add(d.id, d));
    }
    for (let o of s) {
      if ((o.online || a._rbcca762315ae92) && this._r5c82a70aaa28cd.getValue(o.id) == null) {
        let d = new Vm(
          o.id,
          o.name,
          o.realName,
          o.motto,
          o.gender,
          o.online,
          o.followingAllowed,
          o.figure,
          o.categoryId,
          o._r1939eac45a5e21,
        );
        (this._r6e786902939838.push(d), this._r5c82a70aaa28cd.add(d.id, d));
      }
      this._r16e14d1c9aeb9c(o.id);
    }
    ((s.length > 0 || i.length > 0) &&
      (this._r6e786902939838 = a._rbcca762315ae92
        ? this._rc56420d751deba(this._r6e786902939838)
        : this._r2fafff0bf2eaee(this._r6e786902939838)),
      this.events.dispatchEvent?.(new R8()));
  }, "_re2d4f827ef2413");
  _r9998eaa4b9db05 = n((e) => {
    this.events.dispatchEvent?.(new jy(e.success));
  }, "_r9998eaa4b9db05");
  _rf9b7cbaf81007e = n((e) => {
    if (!this.showFriendRequests) return;
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_59db89);
    if (r?.req == null) return;
    let t = r.req;
    (this.var_194.push(new FriendRequest(t.requestId, t._r19234559776703, t.figureString)),
      this.events.dispatchEvent?.(new Du()));
  }, "_rf9b7cbaf81007e");
  _r5debeb21d04892 = n((e) => {
    if (!this.showFriendRequests) return;
    let r = ClassUtils.getParser(e, UnkMessageParser_II_9cd5c9);
    if (r == null) return;
    let t = r._r6ec858df0bd32d;
    for (let i of t) this.var_194.push(new FriendRequest(i.requestId, i._r19234559776703, i.figureString));
    this.events.dispatchEvent?.(new Du());
  }, "_r5debeb21d04892");
  _r403615d2ae79f3 = n((e) => {
    this._r16e14d1c9aeb9c(e.requestId);
  }, "_r403615d2ae79f3");
  _rde74485d1668e5 = n((e) => {
    let r = ClassUtils.getParser(e, class_1895);
    if (r == null) return;
    this._r91ee1aad6e721d = r._r1d27619fc3477e;
    let t = !0;
    (this._rdfb91d87c4db60?.isOpen() && (t = !1),
      this._r590f28d02eb9a9?._r777772002dbf32 &&
        this.events.dispatchEvent?.(new P8(t, this._r91ee1aad6e721d)),
      t && this.makeNotification(String(this._r91ee1aad6e721d), yd.TYPE_MESSENGER, null, !1, !1));
  }, "_rde74485d1668e5");
  _r690ec4f65a7b96 = n((e) => {
    let r = e;
    this.events.dispatchEvent?.(new Gy(r.var_4825, r._hasUnread));
  }, "_r690ec4f65a7b96");
  _r477c677e768ba6 = n((e) => {
    let r = ClassUtils.getParser(e, class_1788);
    r != null &&
      ((this._r91ee1aad6e721d = r.senderId),
      this._rdfb91d87c4db60 != null &&
        !this._rdfb91d87c4db60.isOpen() &&
        (this.events.dispatchEvent?.(new P8(!0, this._r91ee1aad6e721d)),
        this.makeNotification(String(this._r91ee1aad6e721d), yd.TYPE_MESSENGER, null, !0, !1)));
  }, "_r477c677e768ba6");
  _r43c39e0385e668 = n((e) => {
    let r = ClassUtils.getParser(e, class_2938);
    if (r == null) return;
    let t = r._r46e70b63ffc509 !== yd.TYPE_PLAYING_GAME,
      i = r._r46e70b63ffc509 !== yd.TYPE_FINISHED_GAME,
      s = r._r46e70b63ffc509 !== yd.TYPE_PLAYING_GAME;
    this.makeNotification(r.avatarId, r._r46e70b63ffc509, r.message, t, i, s);
  }, "_r43c39e0385e668");
}

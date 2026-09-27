// Estratto da HabboAirLauncher.deobf.js, riga 203852.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/HabboFreeFlowChat.as
// Nome offuscato: _ic7e06ddd04f428

class a extends ue {
  static {
    n(this, "HabboFreeFlowChat");
  }
  static ZERO_POINT = new E(0, 0);
  static _r18b640f3b383c0 = 0;
  static CHAT_FONT_SIZE_MODE_MAX = 4;
  _r3d6c0e226ef51d = null;
  _r38cae2631006a0 = null;
  _rcd84d0c43efd54 = null;
  _r9c26443ccee1e1 = null;
  _r335ff34e43a0c7 = null;
  _r3638085855802c = null;
  _r40d772f76ecbd4 = null;
  _r28b4369eb89e5c = null;
  _rdb11f2cdb9a585 = null;
  _rfec1d3671b0e8d = !1;
  _ra34ffd8c2126ff = !1;
  _rdc46062a76b063 = null;
  var_2068 = 1;
  _r013c08b1437d5f = 0;
  _chatMode = at._rea4a9248715b7b;
  _chatBubbleWidth = at._r95dc862ed837a8;
  var_1330 = at._rdac9c2703bca2d;
  _r591f016b03742e = at._rc751412bd4bd55;
  _rd3de50c05842b8 = !1;
  constructor(e, r = 0, t = null) {
    (super(e, r, t), this.refreshEffectiveChatSettings());
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDSessionDataManager(),
        (e) => {
          this._sessionDataManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderManager = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboRoomSessionManager(), (e) => {
        this._roomSessionManager = e;
      }),
      new ComponentDependency(
        new IIDRoomEngine(),
        (e) => {
          this._roomEngine = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(
        new IIDHabboNavigator(),
        (e) => {
          this._navigator = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboModeration(),
        (e) => {
          this._r34a81f64eba4e2 = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboRoomUI(),
        (e) => {
          this._rf205fceb9b7fe8 = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboGameManager(),
        (e) => {
          this._gameManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboLocalizationManager(),
        (e) => {
          this._localizationManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (e) => {
          this._toolbar = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboWindowManager(),
        (e) => {
          this._windowManager = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    (this._communication?._r2e106e2349a0b6(new _i2c7b489ce44a85((e) => this._r773ce30a57f0a5(e))),
      this._communication?._r2e106e2349a0b6(new class_2117((e) => this.onRoomEnter(e))),
      this._communication?._r2e106e2349a0b6(new class_2027((e) => this._r0eea1a74d208c9(e))),
      this._communication?._r2e106e2349a0b6(new class_2084((e) => this._r5eb6956567f062(e))),
      this._communication?._r2e106e2349a0b6(new class_2121((e) => this._rc8d9b9819345aa(e))));
  }
  dispose() {
    this.disposed ||
      (this._rd542f3aec5735e(),
      this._rdb11f2cdb9a585?.dispose(),
      (this._rdb11f2cdb9a585 = null),
      this._r3d6c0e226ef51d?.dispose(),
      (this._r3d6c0e226ef51d = null),
      this._r38cae2631006a0?.dispose(),
      (this._r38cae2631006a0 = null),
      this._rcd84d0c43efd54?.dispose(),
      (this._rcd84d0c43efd54 = null),
      (this._avatarRenderManager = null),
      (this._roomSessionManager = null),
      (this._roomEngine = null),
      (this._navigator = null),
      (this._r34a81f64eba4e2 = null),
      (this._rf205fceb9b7fe8 = null),
      (this._gameManager = null),
      (this._localizationManager = null),
      (this._toolbar = null),
      (this._communication = null),
      (this._windowManager = null),
      (this._sessionDataManager = null),
      super.dispose());
  }
  static getTimeStampNow() {
    return _i225e565f532fa6();
  }
  getRoomChangeBitmap() {
    return this.assets.getAssetByName("room_change")?.content ?? null;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get _rf0eb5f07c94cfb() {
    return this._avatarRenderManager;
  }
  get _r1218f60f737b72() {
    return this._gameManager;
  }
  get localizations() {
    return this._localizationManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  _r0ff913ec7096db() {
    ((this._ra34ffd8c2126ff = !0),
      this._rfec1d3671b0e8d &&
        this._rdb11f2cdb9a585 != null &&
        this._r3d6c0e226ef51d != null &&
        this._r38cae2631006a0 != null &&
        this._rcd84d0c43efd54 != null &&
        ((this._r9c26443ccee1e1 = new f5(this)),
        (this._r40d772f76ecbd4 = new L2e(this, this._r9c26443ccee1e1)),
        (this._r335ff34e43a0c7 = new W2e(this, this._rcd84d0c43efd54)),
        (this._r3638085855802c = new B2e(this, this._r335ff34e43a0c7)),
        (this._r28b4369eb89e5c = new ChatViewController(this, this._r40d772f76ecbd4, this._r3638085855802c))));
  }
  _rd542f3aec5735e() {
    (this._r3638085855802c?.dispose(),
      (this._r3638085855802c = null),
      this._r335ff34e43a0c7?.dispose(),
      (this._r335ff34e43a0c7 = null),
      this._r40d772f76ecbd4?.dispose(),
      (this._r40d772f76ecbd4 = null),
      this._r9c26443ccee1e1?.dispose(),
      (this._r9c26443ccee1e1 = null),
      this._r28b4369eb89e5c?.dispose(),
      (this._r28b4369eb89e5c = null),
      (this._ra34ffd8c2126ff = !1));
  }
  fixHtml(e, r) {
    r.allowHTML ||
      ((e.text = e.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")),
      (e.text = e.text.replace(/&#[0-9]+;/g, "")),
      (e.text = e.text.replace(/&#x[0-9]+;/g, "")));
    let t = r._r39fa5000b657f2?.color != null ? Number(r._r39fa5000b657f2.color) : 0;
    (r.mask && (e.text = DJ.applyToElements(e.text, t)),
      (e.text = DJ.applyColourToChat(e.text, t)));
  }
  _ref0c2f1190c7b2(e) {
    if (!this._rfec1d3671b0e8d || this._rcd84d0c43efd54 == null || this._r9c26443ccee1e1 == null) return;
    let r = this.chatStyleLibrary?._r22c9347ecec607(e.style);
    if (r == null) return;
    (this.fixHtml(e, r), this._rcd84d0c43efd54._ref0c2f1190c7b2(e));
    let t;
    try {
      t = this._rdb11f2cdb9a585?.resolveRoomUserName(e) ?? null;
    } catch (s) {
      if ((typeof s == "object" && s != null && "errorID" in s ? Number(s.errorID) : -1) === 2015) return;
      throw s;
    }
    let i = this._r9c26443ccee1e1.insertBubble(t);
    this._r40d772f76ecbd4?.insertBubble(t, i);
  }
  getScreenPointFromRoomLocation(e, r) {
    let t = this._r40d772f76ecbd4?.rootDisplayObject?.stage ?? null;
    if (this._roomEngine == null || this._r40d772f76ecbd4 == null || t == null)
      return a.ZERO_POINT;
    let i = (this.flags & 1) !== 0 ? 1 : -1,
      s = this._roomEngine._rcc830c76c83ba6(e, i),
      o = this._roomEngine._r3e7c4a46b1689b(e, i);
    this._roomEngine.getRoomCanvasScale(e, i) && (o = -o);
    let d = (t.stageWidth * o) / 2,
      c = (t._rcc0ac91bd808af * o) / 2;
    if (s != null && r != null) {
      let f = s._r2c974b4bf77b84(r);
      if (f != null) {
        ((d += f.x * o), (c += f.y * o));
        let l = this._roomEngine._r0349bd197496ad(e, i);
        l != null && ((d += l.x), (c += l.y));
      }
    }
    return new E(d, c);
  }
  get _rd68b37e78824ba() {
    return this._r40d772f76ecbd4;
  }
  _r0349bd197496ad(e) {
    return this._roomEngine?._r0349bd197496ad(e) ?? null;
  }
  get _r3b1002abd6af76() {
    return this._rdb11f2cdb9a585;
  }
  get _rd1cbaf2c0b1836() {
    return this._r335ff34e43a0c7;
  }
  get displayObject() {
    return this._r28b4369eb89e5c?.rootDisplayObject ?? null;
  }
  _r4fae2122297c21(e) {
    this._roomEngine != null && (this._roomEngine._r15b8ebc2e10c95 = e);
  }
  _rb9493b8bf41984(e) {
    this.selectAvatar(e.roomId, e.userId);
  }
  selectAvatar(e, r) {
    if (this._rf205fceb9b7fe8 == null) return;
    (this._rf205fceb9b7fe8.desktop?.RoomWidgetLetUserInMessage(new RoomWidgetRoomObjectMessage(RoomWidgetRoomObjectMessage.GET_OBJECT_INFO, r, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER)),
      this._roomEngine?.selectAvatar(e, r));
    let i = this._roomSessionManager?.getSession(e) ?? null,
      s = i?.getUserDataByIndex.userDataManager(r) ?? null;
    if (i != null && s != null) {
      let o = i.getUserDataByIndex.userDataManager(r);
      o != null &&
        this._r34a81f64eba4e2 != null &&
        this._r34a81f64eba4e2.userSelected(s.webID, o.name);
    }
  }
  get _r94d9ef5efd2e7e() {
    return this._rdc46062a76b063;
  }
  get _r87bc47ebf443ce() {
    return this._rdc46062a76b063 != null ? this._rdc46062a76b063.mode === at._rcc85521bbb9163 : !1;
  }
  _rde8455fb19faa3(e) {
    return this._rf205fceb9b7fe8?._r58a7b5caa186b2(e) ?? !1;
  }
  get chatStyleLibrary() {
    return this._rdb11f2cdb9a585?.chatStyleLibrary ?? null;
  }
  get _r61afd6403af8dc() {
    return this._chatMode === at._rcc85521bbb9163;
  }
  set _r61afd6403af8dc(e) {
    this._r1209c95b94b7ec = e ? at._rcc85521bbb9163 : at._rea4a9248715b7b;
  }
  get _rd00b498733a8a7() {
    return this.var_2068;
  }
  set _rd00b498733a8a7(e) {
    ((this.var_2068 = e),
      this._communication?.connection.send(new _i555ac0097e7881(this.var_2068, this._r013c08b1437d5f)));
  }
  get _re247be6bfa9ecb() {
    return this._r013c08b1437d5f;
  }
  set _re247be6bfa9ecb(e) {
    ((this._r013c08b1437d5f = this._reb4fdc017a9b30(e)),
      this._communication?.connection.send(new _i555ac0097e7881(this.var_2068, this._r013c08b1437d5f)));
  }
  get _r1209c95b94b7ec() {
    return this._chatMode;
  }
  set _r1209c95b94b7ec(e) {
    this.updateChatPreferences(e, this._chatBubbleWidth, this.var_1330);
  }
  get _rfb3688c161b4cf() {
    return this._chatBubbleWidth;
  }
  set _rfb3688c161b4cf(e) {
    this.updateChatPreferences(this._chatMode, e, this.var_1330);
  }
  get _rfae93ad34d06f6() {
    return this.var_1330;
  }
  set _rfae93ad34d06f6(e) {
    this.updateChatPreferences(this._chatMode, this._chatBubbleWidth, e);
  }
  updateChatPreferences(e, r, t) {
    ((e = this.sanitizeChatMode(e)),
      (r = this.sanitizeChatBubbleWidth(r)),
      (t = this.sanitizeChatScrollSpeed(t)),
      !(this._chatMode === e && this._chatBubbleWidth === r && this.var_1330 === t) &&
        ((this._chatMode = e),
        (this._chatBubbleWidth = r),
        (this.var_1330 = t),
        this.refreshEffectiveChatSettings(),
        this.refreshChatSettings(),
        this.sendChatPreferences()));
  }
  get _re843269b33bec5() {
    switch (this._r013c08b1437d5f) {
      case 1:
        return 1.15;
      case 2:
        return 1.3;
      case 3:
        return 1.5;
      case 4:
        return 1.75;
      default:
        return 1;
    }
  }
  _reb4fdc017a9b30(e) {
    return e < a._r18b640f3b383c0 ? a._r18b640f3b383c0 : e > a.CHAT_FONT_SIZE_MODE_MAX ? a.CHAT_FONT_SIZE_MODE_MAX : e;
  }
  refreshEffectiveChatSettings() {
    this._rdc46062a76b063 = new at(
      this._chatMode,
      this._chatBubbleWidth,
      this.var_1330,
      this._r591f016b03742e,
    );
  }
  refreshChatSettings() {
    this._ra34ffd8c2126ff && this._r9c26443ccee1e1 != null && this._r9c26443ccee1e1.refreshSettings();
  }
  sendChatPreferences() {
    this._communication?.connection.send(
      new _if09c5ad91a1823(this._chatMode, this._chatBubbleWidth, this.var_1330),
    );
  }
  sanitizeChatMode(e) {
    switch (e) {
      case at._rea4a9248715b7b:
      case at._rcc85521bbb9163:
        return e;
      default:
        return at._rea4a9248715b7b;
    }
  }
  sanitizeChatBubbleWidth(e) {
    switch (e) {
      case at._r5ea9a0db632f69:
      case at._r95dc862ed837a8:
      case at._rbe61fba9de54f3:
        return e;
      default:
        return at._r95dc862ed837a8;
    }
  }
  sanitizeChatScrollSpeed(e) {
    switch (e) {
      case at._r54f8150a14dff0:
      case at._rdac9c2703bca2d:
      case at._r549ee4ca88cc2b:
        return e;
      default:
        return at._rdac9c2703bca2d;
    }
  }
  clear() {
    this._r9c26443ccee1e1?.clear();
  }
  static _re2bd349331c380(e, r) {
    return _ie2bd349331c380(e, r);
  }
  static _rabefdc4855b9a2(e, r) {
    return new Tz(e, r);
  }
  toggleVisibility() {
    !this._rfec1d3671b0e8d || this._r3638085855802c == null || this._r3638085855802c.toggleHistoryVisibility();
  }
  set visible(e) {
    this._r3638085855802c != null && (this._r3638085855802c.visible = e);
  }
  _r8608bc31321b6e(e) {
    let r = this.chatStyleLibrary?._r22c9347ecec607(e);
    return r != null && r.mask;
  }
  get toolbar() {
    return this._toolbar;
  }
  createPreviewBitmap(e, r) {
    let t = this.chatStyleLibrary?._r22c9347ecec607(r);
    if (t == null) return null;
    let i = new xr(xr.ROOM_SESSION_CHAT_EVENT, null, -1, "", xr.CHAT_TYPE_SPEAK),
      s = new ChatItem(i, _ia411d8d8194a3a(), null, 0, null, null, null, e),
      o = new yI(this);
    ((o._r08afc3ed230b1f = s), (o.face = null), (o.style = t), o.recreate(e, 0, !1));
    let d = new A(o.width, o.height, !0, 0);
    return (o._r266563b7fb4912(d), o.unregister(), d);
  }
  _rb8b0124a2d9774(e) {
    (e.unregister(), this._rdb11f2cdb9a585?.recycle(e));
  }
  _r6b6c989018eb05(e) {
    this.context._r6b6c989018eb05(e);
  }
  _r773ce30a57f0a5 = n((e) => {
    let r = this._rfec1d3671b0e8d;
    ((this._rfec1d3671b0e8d = !0),
      !r && this._rfec1d3671b0e8d
        ? ((this._rdb11f2cdb9a585 = new D2e(this)),
          (this._r3d6c0e226ef51d = new C2e(this)),
          (this._r38cae2631006a0 = new _i2ff19c5d0969b6(this)),
          (this._rcd84d0c43efd54 = new M2e(this)),
          this._ra34ffd8c2126ff && this._r0ff913ec7096db())
        : r &&
          !this._rfec1d3671b0e8d &&
          (this._rdb11f2cdb9a585?.dispose(),
          (this._rdb11f2cdb9a585 = null),
          this._r3d6c0e226ef51d?.dispose(),
          (this._r3d6c0e226ef51d = null),
          this._r38cae2631006a0?.dispose(),
          (this._r38cae2631006a0 = null),
          this._rcd84d0c43efd54?.dispose(),
          (this._rcd84d0c43efd54 = null),
          this._rd542f3aec5735e()));
  }, "_r773ce30a57f0a5");
  _r0eea1a74d208c9 = n((e) => {
    let r = e.getParser();
    (this._rcd84d0c43efd54 != null &&
      !this._rd3de50c05842b8 &&
      this._rcd84d0c43efd54._r64c76bbc0eb726(r.data),
      (this._rd3de50c05842b8 = !0),
      r.chatSettings != null &&
        ((this._r591f016b03742e = r.chatSettings._r8ea55a71cde5e4), this.refreshEffectiveChatSettings()),
      this._r9c26443ccee1e1?.refreshSettings());
  }, "_r0eea1a74d208c9");
  onRoomEnter = n((e) => {
    ((this._rd3de50c05842b8 = !1), this.clear());
  }, "onRoomEnter");
  _r5eb6956567f062 = n((e) => {
    let r = e.getParser().chatSettings;
    ((this._r591f016b03742e = r != null ? r._r8ea55a71cde5e4 : at._rc751412bd4bd55),
      this.refreshEffectiveChatSettings(),
      this._ra34ffd8c2126ff && this._r9c26443ccee1e1 != null && this._r9c26443ccee1e1.refreshSettings());
  }, "_r5eb6956567f062");
  _rc8d9b9819345aa = n((e) => {
    let r = e.getParser();
    ((this.var_2068 = r._rd00b498733a8a7),
      (this._r013c08b1437d5f = this._reb4fdc017a9b30(r._r71c3c442d30f9e)),
      (this._chatMode = this.sanitizeChatMode(r._r1209c95b94b7ec)),
      (this._chatBubbleWidth = this.sanitizeChatBubbleWidth(r._rfb3688c161b4cf)),
      (this.var_1330 = this.sanitizeChatScrollSpeed(r._rfae93ad34d06f6)),
      this.refreshEffectiveChatSettings(),
      this._ra34ffd8c2126ff && this._r9c26443ccee1e1 != null && this._r9c26443ccee1e1.refreshSettings());
  }, "_rc8d9b9819345aa");
}

// Extracted from HabboAirLauncher.deobf.js, line 375450.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib9a37f7542ff0f

class extends ue {
  static {
    n(this, "UnkClass_b9a37f");
  }
  _re3cfc0f77a0c40;
  _r81faacfdfcbb97 = null;
  _userName = "";
  _r381c1531a12f34 = null;
  _re2a670f96926b6 = null;
  _r75a923d74a82c2 = null;
  _r48671187c1c0a5 = null;
  _rf7537f8dd3a36e = null;
  _rc068040cc035f3 = null;
  _r70695abadb2423 = null;
  _r1c55a84d218d46 = null;
  _r2283e5cbeeeb1f = null;
  _rd75d03bc94e55c = null;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._re3cfc0f77a0c40 = new FTe(this)),
      (this._r1c55a84d218d46 = new oRe(this)),
      (this._r2283e5cbeeeb1f = new zee(this)),
      (this._r381c1531a12f34 = new _Be(this, e, 0, t)),
      (this._re2a670f96926b6 = new gY(this, e, 0, t)),
      (this._r75a923d74a82c2 = new sRe(this, e, 0, t)),
      (this._r48671187c1c0a5 = new WiredTransactionDetailsController(this, e, 0, t)),
      (this._rd75d03bc94e55c = new HTe(this)),
      (this._rf7537f8dd3a36e = new WiredContractController(this)),
      (this._rc068040cc035f3 = new rRe(this, e, 0, t)),
      (this._r70695abadb2423 = new YWe(this, e, 0, t)),
      this.context.attachComponent(this._r381c1531a12f34, [new UnkInterface_bd2e56()]),
      this.context.attachComponent(this._re2a670f96926b6, [new UnkInterface_182a17()]),
      this.context.attachComponent(this._r75a923d74a82c2, [new UnkInterface_e0f784()]),
      this.context.attachComponent(this._r48671187c1c0a5, [new UnkInterface_740353()]),
      this.context.attachComponent(this._rc068040cc035f3, [new UnkInterface_880c23()]),
      this.context.attachComponent(this._r70695abadb2423, [new UnkInterface_0e593a()]));
  }
  get dependencies() {
    let e = n((i) => this._rf53e6733823481(i), "_if53e6733823481"),
      r = n((i) => this._r06ea2e988bb380(i), "_i06ea2e988bb380"),
      t = n((i) => this.IIDHabboCatalog(i), "_i3bbf030ae11e99");
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (i) => {
        ((this._communication = i),
          this._communication != null &&
            (this._incomingMessages == null && (this._incomingMessages = new UnkClass_fffc22_____________(this)),
            this._r1c55a84d218d46?._ra4896d0bc54959(),
            this._r2283e5cbeeeb1f?._ra4896d0bc54959(),
            this._rf7537f8dd3a36e?._ra4896d0bc54959()));
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (i) => {
        this._windowManager = i;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (i) => {
        this._localization = i;
      }),
      new ComponentDependency(new IIDHabboNotifications(), (i) => {
        this._notifications = i;
      }),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (i) => {
          this._catalog = i;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDRoomEngine(),
        (i) => {
          this._roomEngine = i;
        },
        !0,
        [{ type: RoomEngineObjectEvent.ADDED, callback: e }],
      ),
      new ComponentDependency(new IIDRoomObjectVisualizationFactory(), (i) => this._r9ce80475b49c3e(i)),
      new ComponentDependency(new IIDHabboRoomSessionManager(), null, !1, [
        { type: RoomSessionEvent.const_481, callback: r },
        { type: RoomSessionEvent.const_1398, callback: r },
        { type: RoomSessionEvent.const_215, callback: r },
      ]),
      new ComponentDependency(new IIDSessionDataManager(), (i) => {
        this._sessionDataManager = i;
      }),
      new ComponentDependency(
        new IIDHabboRoomUI(),
        (i) => {
          this._rf205fceb9b7fe8 = i;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (i) => {
          this._toolbar = i;
        },
        !1,
        [{ type: HabboToolbarEvent.TOOLBAR_CLICK, callback: t }],
      ),
    ]);
  }
  _r9ce80475b49c3e(e) {
    if (e == null) {
      ((this.var_1927 = null), (this._variableFxRendererRegistry = null));
      return;
    }
    if (!(e instanceof ue)) throw new TypeError("Room object visualization factory must be a Component");
    ((this.var_1927 = new UnkClass_d0fbcb(e.assets)),
      (this._variableFxRendererRegistry = sX.createDefault(this.var_1927)));
  }
  get _r56c7191bd7adc5() {
    return this.var_1927 ?? null;
  }
  get _r4f8149f8fd691b() {
    return this._variableFxRendererRegistry ?? null;
  }
  initComponent() {
    (this._communication != null &&
      this._incomingMessages == null &&
      (this._incomingMessages = new UnkClass_fffc22_____________(this)),
      (this._r341c12333a82e2 = (e) => this._r2e2ae5597898e8(e)),
      this._roomEngine?.events.addEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._r341c12333a82e2));
  }
  dispose() {
    this.disposed ||
      (this._incomingMessages?.dispose(),
      (this._incomingMessages = null),
      this._r1c55a84d218d46?.dispose(),
      (this._r1c55a84d218d46 = null),
      this._r2283e5cbeeeb1f?.dispose(),
      (this._r2283e5cbeeeb1f = null),
      this._r381c1531a12f34?.dispose(),
      this._re2a670f96926b6?.dispose(),
      this._r75a923d74a82c2?.dispose(),
      this._r48671187c1c0a5?.dispose(),
      this._rf7537f8dd3a36e?.dispose(),
      this._rc068040cc035f3?.dispose(),
      this._r70695abadb2423?.dispose(),
      (this._r381c1531a12f34 = null),
      (this._re2a670f96926b6 = null),
      (this._r75a923d74a82c2 = null),
      (this._r48671187c1c0a5 = null),
      (this._rf7537f8dd3a36e = null),
      (this._rc068040cc035f3 = null),
      (this._r70695abadb2423 = null),
      (this.var_1927 = null),
      (this._variableFxRendererRegistry = null),
      (this._rd75d03bc94e55c = null),
      this._roomEngine?.events.removeEventListener?.(RoomEngineEvent.ROOM_DISPOSED, this._r341c12333a82e2),
      super.dispose());
  }
  get communication() {
    return this._communication;
  }
  get windowManager() {
    return this._windowManager;
  }
  get localization() {
    return this._localization;
  }
  get notifications() {
    return this._notifications;
  }
  get catalog() {
    return this._catalog;
  }
  get presetManager() {
    return this._re3cfc0f77a0c40;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get _r2eac8239a09fe7() {
    return this._r81faacfdfcbb97;
  }
  get roomId() {
    return this._r81faacfdfcbb97 ? this._r81faacfdfcbb97.roomId : 0;
  }
  get _r5e3ef8a2b11d2a() {
    return this._rf205fceb9b7fe8;
  }
  get _r15b2ea2c393fea() {
    return this._rf205fceb9b7fe8.desktop;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get userName() {
    return this._userName;
  }
  set userName(e) {
    this._userName = e;
  }
  get _rb3d0033404b557() {
    return this._r381c1531a12f34;
  }
  get _r275ba11c2b7de0() {
    return this._re2a670f96926b6;
  }
  get _ra12c85d8650102() {
    return this._r75a923d74a82c2;
  }
  get _r2d035c5d2bf213() {
    return this._r48671187c1c0a5;
  }
  get _rb2665a93e84fc4() {
    return this._rc068040cc035f3;
  }
  get _r64a7503bab8189() {
    return this._r70695abadb2423;
  }
  get _rf5e384520bc525() {
    return this._r1c55a84d218d46;
  }
  get _rb85a698a5a11d9() {
    return this._rd75d03bc94e55c;
  }
  get _rfb9b76b95ed910() {
    return this._r2283e5cbeeeb1f == null ? [] : this._r2283e5cbeeeb1f.achievements;
  }
  get _r7722c9aa63290b() {
    return this._r381c1531a12f34._r7722c9aa63290b;
  }
  set _r7722c9aa63290b(e) {
    this._r381c1531a12f34._r7722c9aa63290b = e;
  }
  get _r880a2521997aa0() {
    return this._r2283e5cbeeeb1f?._rb946f43ae961f1 === zee._raf68fcfca32676;
  }
  _r7c25ff86947d3e(e) {
    this._re3cfc0f77a0c40._r7c25ff86947d3e(e);
  }
  _r7e0d0a299ffd5d(e) {
    let r = this._roomEngine?._r38ad2264d57c5b(this.roomId);
    if (r != null && r.id === -e) {
      this._roomEngine?._rfa625917ff0d0b(this.roomId, null);
      return;
    }
    (this._re3cfc0f77a0c40._r7e0d0a299ffd5d(e), this._r381c1531a12f34._r97aa3ab4b5a337(e));
  }
  userSelected(e) {
    (this._ra685de879d48b0() && this.send(new UnkMessageComposer_1args_a271d2(e)), this._r381c1531a12f34.userSelected(e));
  }
  _reb1c224373ab03() {
    return (
      this._r381c1531a12f34.isEnabled &&
      this._r381c1531a12f34._r0e0f569f7be727 &&
      this._rb3d0033404b557.wiredInspectButton
    );
  }
  _r837fe53c02d4f8() {
    return (
      this._r381c1531a12f34.isEnabled &&
      this._r381c1531a12f34._r0e0f569f7be727 &&
      this._rb3d0033404b557._r62e1bd3b7b027a
    );
  }
  _ra685de879d48b0() {
    return this._r2283e5cbeeeb1f?._ra685de879d48b0 ?? !1;
  }
  _ra8b5a4d2b9098f() {
    this._r381c1531a12f34.setPlayTestMode(!this._r381c1531a12f34.playTestMode, !0, !0);
  }
  _r69ae4baa700b24() {
    this._re3cfc0f77a0c40.clearCache();
  }
  _r85016a61917ed2() {
    return this._re3cfc0f77a0c40._r83ef40cef5b099() || this._r381c1531a12f34._r83ef40cef5b099();
  }
  send(e) {
    this._communication.connection.send(e);
  }
  _r6b6c989018eb05(e) {
    this.context._r6b6c989018eb05(e);
  }
  getXmlWindow(e) {
    let r = null;
    try {
      let i = this.assets.getAssetByName(`${e}_xml`);
      r = this._windowManager.buildFromXML(i?.content, 0);
    } catch {}
    return r;
  }
  refreshButton(e, r, t, i, s, o = null) {
    let d = o ?? r,
      c = e.findChildByName(r);
    if (c != null) {
      if (!t) {
        c.visible = !1;
        return;
      }
      (this.prepareButton(c, d, i, s), (c.visible = !0));
    }
  }
  _r6bd8f6d6bfdbb5(e, r = "_png") {
    let t = `${e}${r}`;
    return this.assets.getAssetByName(t)?.content?.clone() ?? null;
  }
  prepareButton(e, r, t, i) {
    ((e.id = i),
      (e.procedure = t),
      e.bitmap == null &&
        ((e.bitmap = this._r6bd8f6d6bfdbb5(r)),
        e.bitmap != null && ((e.width = e.bitmap.width), (e.height = e.bitmap.height))));
  }
  _rf53e6733823481 = n((e) => {
    let r = Number(e.objectId);
    switch (Number(e.category)) {
      case RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE:
        this._re3cfc0f77a0c40._r7c25ff86947d3e(r);
        break;
      case RoomObjectCategoryEnum.const_909:
        this._re3cfc0f77a0c40._r7c25ff86947d3e(-r);
        break;
    }
  }, "_rf53e6733823481");
  _r06ea2e988bb380 = n((e) => {
    if (this._roomEngine != null)
      switch (e.type) {
        case RoomSessionEvent.const_481:
        case RoomSessionEvent.const_1398:
          this._r81faacfdfcbb97 = e.session;
          break;
        case RoomSessionEvent.const_215:
          ((this._r81faacfdfcbb97 = e.session), this._r2283e5cbeeeb1f?._rf73cf1d42807ed());
          break;
      }
  }, "_r06ea2e988bb380");
  IIDHabboCatalog = n((e) => {
    e.type === HabboToolbarEvent.TOOLBAR_CLICK &&
      e._re9c693c8b69b04 === Me.WIRED_MENU &&
      this._r381c1531a12f34._r9f8e86b9bc7d27();
  }, "IIDHabboCatalog");
  _r2e2ae5597898e8 = n((e) => {
    e != null &&
      e.type === RoomEngineEvent.ROOM_DISPOSED &&
      (this._r1c55a84d218d46?.clear(),
      this._r2283e5cbeeeb1f?.clear(),
      this._re3cfc0f77a0c40.close(),
      this._rf7537f8dd3a36e?.clear());
  }, "_r2e2ae5597898e8");
}

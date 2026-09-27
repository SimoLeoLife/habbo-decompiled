// Extracted from HabboAirLauncher.deobf.js, line 312039.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chatinput/RoomChatInputWidget.as
// Obfuscated name: _i5377b64960d6f9

class a extends RoomWidgetBase {
  static {
    n(this, "RoomChatInputWidget");
  }
  static MIN_PASTE_INTERVAL_MS = 0;
  _visualization;
  _selectedUserName = "";
  _re31d82644eb0a6 = !1;
  _r6d467da79f585f = null;
  _r1d475d5bde8f77 = 0;
  var_1616;
  var_21;
  _r49a29fde37dae2 = n((e) => {
    this.onRoomObjectDeselected(e);
  }, "_r49a29fde37dae2");
  _r52210a777de4e1 = n((e) => {
    this.onChatInputUpdate(e);
  }, "_r52210a777de4e1");
  _ra0002d8072973f = n((e) => {
    this.onUserInfo(e);
  }, "_ra0002d8072973f");
  _rb8d6be89e9bcba = n((e) => {
    this._ra5a1e7f6103bb9(e);
  }, "_rb8d6be89e9bcba");
  _r5dea2cc838e9eb = n((e) => {
    this._rcf410335e30542(e);
  }, "_r5dea2cc838e9eb");
  _rf9e12bf0621d32 = n((e) => {
    this._rd12c9904279840(e);
  }, "_rf9e12bf0621d32");
  constructor(e, r, t, i, s, o) {
    (super(e, r, t, i),
      (this.var_1616 = s),
      (this.var_21 = o),
      (this._visualization = new OIe(this)),
      e != null && (e.widget = this));
  }
  get _rde440e2cf271fe() {
    return this._re31d82644eb0a6;
  }
  get _re5ac22f3053d74() {
    return this.var_1616;
  }
  get handler() {
    return this._handler;
  }
  dispose() {
    (this._visualization?.dispose(),
      (this._visualization = null),
      this._r6d467da79f585f?.stop(),
      (this._r6d467da79f585f = null),
      (this.var_1616 = null),
      super.dispose());
  }
  get _r7957cd13efa323() {
    return _ia411d8d8194a3a() - this._r1d475d5bde8f77 > a.MIN_PASTE_INTERVAL_MS;
  }
  _rb62c1b34ea0344() {
    this._r1d475d5bde8f77 = _ia411d8d8194a3a();
  }
  sendChat(e, r, t = "", i = 0) {
    if (this._re31d82644eb0a6) return;
    let s = new nc(nc.WIDGET_MESSAGE_CHAT, e, r, t, i);
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(s);
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this._r49a29fde37dae2),
      e.addEventListener?.(h1.CHAT_INPUT_CONTENT, this._r52210a777de4e1),
      e.addEventListener?.(RoomWidgetUserInfoUpdateEvent.PEER, this._ra0002d8072973f),
      e.addEventListener?.(cI.const_271, this._rb8d6be89e9bcba),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_734, this._r49a29fde37dae2),
      e.removeEventListener?.(h1.CHAT_INPUT_CONTENT, this._r52210a777de4e1),
      e.removeEventListener?.(RoomWidgetUserInfoUpdateEvent.PEER, this._ra0002d8072973f),
      e.removeEventListener?.(cI.const_271, this._rb8d6be89e9bcba));
  }
  onRoomObjectDeselected(e) {
    this._selectedUserName = "";
  }
  onUserInfo(e) {
    this._selectedUserName = e.name;
  }
  onChatInputUpdate(e) {
    let r = "";
    switch (e.messageType) {
      case h1.MESSAGE_TYPE_WHISPER:
        ((r = this.localizations?.getLocalization("widgets.chatinput.mode.whisper", ":tell") ?? ":tell"),
          this._visualization?._re165e296b14e18(r, e.userName ?? ""));
        break;
      case h1.MESSAGE_TYPE_SHOUT:
      default:
        break;
    }
  }
  _r8339c761af0aed() {
    this._visualization?.createOrUpdateChatStylesView();
  }
  _rd12c9904279840(e) {
    ((this._re31d82644eb0a6 = !1), this._visualization?._r66b4f884854340(), (this._r6d467da79f585f = null));
  }
  _rcf410335e30542(e) {
    this._r6d467da79f585f != null &&
      this._visualization?.updateBlockText(
        this._r6d467da79f585f.repeatCount - this._r6d467da79f585f._rdf3dbbec26e6b1,
      );
  }
  _r714726235a17c1() {
    this._visualization?.updatePosition(null);
  }
  _r5eb4deea8a2ef7() {
    return this.var_1616?._rf0f2c79ea6337c?._rd9ade8d75cbe99 ?? 1e3;
  }
  _r682d1123bf97a3() {
    return this.var_1616?.toolbar?._r386c0c29216870 ?? 1e3;
  }
  _rb1da41ef2ffa1b() {
    return this.var_21?._r571a3c8f0b3e23(RoomWidgetEnum.ROOM_TOOLS)?._r19f90ba0ec62cd() ?? 0;
  }
  get _r5bb950d3699ccb() {
    return this._selectedUserName;
  }
  _ra5a1e7f6103bb9(e) {
    ((this._re31d82644eb0a6 = !0),
      this._r6d467da79f585f != null
        ? this._r6d467da79f585f.reset()
        : ((this._r6d467da79f585f = new UnkEventDispatcherWrapperSubclass_05394e(1e3, e.seconds)),
          this._r6d467da79f585f.addEventListener(DeBouncer.addEventListener, this._r5dea2cc838e9eb),
          this._r6d467da79f585f.addEventListener(DeBouncer._rf33144eac61595, this._rf9e12bf0621d32)),
      this._r6d467da79f585f.start(),
      this._visualization?.updateBlockText(e.seconds),
      this._visualization?._rf03b6580ee4f88());
  }
  get mainWindow() {
    return this._visualization?.window ?? null;
  }
  hide() {
    this.mainWindow != null && (this.mainWindow.visible = !1);
  }
  show() {
    this.mainWindow != null && (this.mainWindow.visible = !0);
  }
  getChatInputY() {
    return this._visualization?.getChatInputY() ?? 0;
  }
  _rc167ccfc994045() {
    return this._visualization?._rfdb788a3265980() ?? [];
  }
  release() {
    (this._visualization?.release(), this.hide(), (this.var_21 = null), super.release());
  }
  _r62becc0ea3c1d0() {
    this._visualization?._r62becc0ea3c1d0();
  }
  reuse(e) {
    (super.reuse(e), (this.var_21 = e), this.show());
  }
}

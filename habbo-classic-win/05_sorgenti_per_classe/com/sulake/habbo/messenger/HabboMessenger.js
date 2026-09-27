// Extracted from HabboAirLauncher.deobf.js, line 247283.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/HabboMessenger.as
// Obfuscated name: _i572bdecb417280

class extends ue {
  static {
    n(this, "HabboMessenger");
  }
  var_157 = null;
  _r7b180feaccc583 = 0;
  var_3720 = !1;
  _onlineIndicatorPreference = class_2191.const_120;
  _followingToGroupRoom = !1;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboSoundManager(), (e) => {
        this._soundManager = e;
      }),
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDHabboFriendList(), (e) => {
        this._friendList = e;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
      new ComponentDependency(new IIDHabboHelp(), (e) => {
        this._r38069d7f74fd46 = e;
      }),
      new ComponentDependency(
        new IIDHabbiconController(),
        (e) => {
          this._r77150d80157f71 = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    ((this._messageEvents = []),
      this.addMessageEvent(new class_2248((e) => this._r835491ace736d9(e))),
      this.addMessageEvent(new class_2121((e) => this._rc8d9b9819345aa(e))),
      this.addMessageEvent(new UnkMessageEvent_71ce07((e) => this._rd74b3fc36abee7(e))),
      this.getBoolean("client.minimail.embed.enabled") &&
        (this.addMessageEvent(new class_1958((e) => this._r979919ef0ed4ef(e))),
        this.addMessageEvent(new class_2189((e) => this.class_2189(e)))),
      this.context._r7e43d9f4706607(this));
  }
  dispose() {
    if (!this.disposed) {
      if (this._communication != null)
        for (let e of this._messageEvents) this._communication._r7668362bf55fdd(e);
      (this.context._r7485c47d8bd77c(this),
        this.var_157?.dispose(),
        (this.var_157 = null),
        super.dispose());
    }
  }
  get localization() {
    return this._localization;
  }
  get windowManager() {
    return this._windowManager;
  }
  get _r95cd89d9fe7aac() {
    return this._r77150d80157f71;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get followingToGroupRoom() {
    return this._followingToGroupRoom;
  }
  set followingToGroupRoom(e) {
    this._followingToGroupRoom = e;
  }
  get linkPattern() {
    return "messenger/";
  }
  startConversation(e) {
    (this.var_157?.startConversation(e), this.var_157?.show(!0));
  }
  _r967f22ee23ea5f(e) {
    this.var_157?._r5eb1bb4d638040(e);
  }
  _r18fb9fe57a9088() {
    return this._r7b180feaccc583;
  }
  _r20348e9f5a1097(e, r) {
    this.var_157?._r20348e9f5a1097(e, r);
  }
  _r2e759163b29bb3(e, r) {
    this.var_157?._r2e759163b29bb3(e, r);
  }
  send(e) {
    this._communication?.connection.send(e);
  }
  _rbfd2dc01eae8da() {
    this._soundManager?.playSound(HabboSoundTypesEnum.SOUND_MESSAGE_SENT);
  }
  isOpen() {
    return this.var_157?.isOpen ?? !1;
  }
  _r4109e4e344be47() {
    this.var_157?.toggle();
  }
  _r62becc0ea3c1d0() {
    this.var_157?._r62becc0ea3c1d0();
  }
  getText(e) {
    return this._localization?.getLocalization(e, e) ?? e;
  }
  _r9cbce3346eb027() {
    return this.var_3720;
  }
  _r4f6b546b4abacd(e) {
    this.var_3720 = e;
  }
  _r12ae61c60526eb() {
    return this._onlineIndicatorPreference;
  }
  _r886f5f3217a046(e) {
    this._onlineIndicatorPreference = e | 0;
  }
  _r7460570c1e058b(e, r) {
    this.events.dispatchEvent?.(new ActiveConversationEvent(ActiveConversationEvent.ACTIVE_CONVERSATION_COUNT_CHANGED, e, r));
  }
  getXmlWindow(e) {
    let t = this.assets.getAssetByName(`${e}_xml`)?.content ?? null;
    return t == null ? null : (this._windowManager?.buildFromXML(t) ?? null);
  }
  trackGoogle(e, r, t = -1) {
    this._tracking?.trackGoogle(e, r, t);
  }
  _rf51d9426e17752(e, r = null) {
    let t = this._friendList?._rf51d9426e17752(e) ?? null;
    return t == null && r != null
      ? new class_1784(r.senderId, r.senderName ?? "", r._rfafd7e4c8717e5 ?? "")
      : t;
  }
  _r046ef1fd9b83b8(e) {
    this._r38069d7f74fd46?._r94e9091c5dd6d8(e);
  }
  linkReceived(e) {
    let r = e.split("/");
    if (r.length < 2) return;
    let t = Number(r[1]);
    Number.isNaN(t) || this.startConversation(t);
  }
  addMessageEvent(e) {
    this._messageEvents.push(this._communication?._r2e106e2349a0b6(e) ?? e);
  }
  _rddb82aa1ac6423() {
    this._soundManager?.playSound(HabboSoundTypesEnum.SOUND_MESSAGE_RECEIVED);
  }
  _r979919ef0ed4ef = n((e) => {
    ((this._r7b180feaccc583 += 1),
      this._rddb82aa1ac6423(),
      this.events.dispatchEvent?.(new MiniMailMessageEvent(MiniMailMessageEvent.NEW_MESSAGE_NOTIFICATION, this._r7b180feaccc583)));
  }, "_r979919ef0ed4ef");
  class_2189 = n((e) => {
    let r = ClassUtils.getParser(e, class_2063);
    r != null &&
      ((this._r7b180feaccc583 = r.unreadMessageCount),
      this.events.dispatchEvent?.(new MiniMailMessageEvent(MiniMailMessageEvent.const_809, this._r7b180feaccc583)));
  }, "class_2189");
  _rc8d9b9819345aa = n((e) => {
    ((this.var_3720 = e.getParser()._r7ca08e3e642ebb),
      (this._onlineIndicatorPreference = e.getParser()._r8f46066f5e1ab2));
  }, "_rc8d9b9819345aa");
  _rd74b3fc36abee7 = n((e) => {
    this._followingToGroupRoom && ((this._followingToGroupRoom = !1), this.send(new class_1959(e.data.roomId)));
  }, "_rd74b3fc36abee7");
  _r835491ace736d9 = n((e) => {
    ((this.var_157 = new Ipe(this)),
      this.addMessageEvent(new class_1935(this._rde74485d1668e5)),
      this.addMessageEvent(new class_2137(this._rffaa5b90407f10)),
      this.addMessageEvent(new class_2259(this._r76802383e47c42)),
      this.addMessageEvent(new class_2250(this._r477c677e768ba6)));
  }, "_r835491ace736d9");
  _rde74485d1668e5 = n((e) => {
    let r = ClassUtils.getParser(e, class_1895);
    r != null &&
      (this.var_157?._r302ec3de2caba1(
        r._r1d27619fc3477e | 0,
        r.messageType,
        r.messageText,
        r.habbiconId,
        r._r672f7777815dd8,
        r.messageId,
        r._r0009d45d5c9653,
        r.senderId | 0,
        r.senderName,
        r._rfafd7e4c8717e5,
      ),
      this.var_157 != null && !this.var_157.isOpen && this._rddb82aa1ac6423());
  }, "_rde74485d1668e5");
  _rffaa5b90407f10 = n((e) => {
    let r = ClassUtils.getParser(e, class_2256);
    r != null && this.var_157?._rdebd6438ec2833(r._r1d27619fc3477e | 0, r._r259f467d349e9f);
  }, "_rffaa5b90407f10");
  _r477c677e768ba6 = n((e) => {
    let r = ClassUtils.getParser(e, class_1788);
    r != null &&
      (this.var_157?._rf476a46134dbef(r.senderId, r.messageText),
      this.var_157 != null && !this.var_157.isOpen && this._rddb82aa1ac6423());
  }, "_r477c677e768ba6");
  _r76802383e47c42 = n((e) => {
    let r = ClassUtils.getParser(e, class_2183);
    r != null && this.var_157?._r76802383e47c42(r.userId, r.errorCode, r.message);
  }, "_r76802383e47c42");
}

// Extracted from HabboAirLauncher.deobf.js, line 251019.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/class_1978.as
// Obfuscated name: _i8aa0f7d2c50476

class a extends ue {
  static {
    n(this, "class_1978");
  }
  static MODERATION_BADGE_ID = -500;
  _window = null;
  _messageEvents = [];
  _r456d6d86a8cbc7 = new B();
  _active = null;
  _rbc4feaa7e4d07c = "";
  _r5175da2cb7ded9 = "";
  var_3307 = 0;
  var_1271 = !1;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._messageEvents = [
        new UnkMessageEvent_644b29(this._re9b7f5b939a11a),
        new class_2824(this._re78d34339c996e),
        new class_3772(this._r6bea55e05df9d2),
      ]));
    for (let i of this._messageEvents) this.addMessageEvent(i);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionDataManager = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localizationManager = e;
      }),
      new ComponentDependency(new IIDHabboInventory(), (e) => {
        this._inventory = e;
      }),
      new ComponentDependency(new IIDHabboNotifications(), (e) => {
        this._notifications = e;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (e) => {
        this._navigator = e;
      }),
      new ComponentDependency(
        new IIDHabboSoundManager(),
        (e) => {
          this._soundManager = e;
        },
        !1,
      ),
    ]);
  }
  _r43032a825e00cd(e) {
    ((this.var_3307 |= 1 << e),
      this._rbc4feaa7e4d07c !== "" &&
        (this.var_3307 & 31) === 31 &&
        (this.send(new UnkMessageComposer_1args_6c3581(this._rbc4feaa7e4d07c)), (this._rbc4feaa7e4d07c = "")));
  }
  send(e) {
    this._r6358b2bd53ae19?.connection.send(e);
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19?._r2e106e2349a0b6(e);
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(e);
  }
  isShowing() {
    return (
      this._windowManager != null && this._window != null && this._window.parent != null
    );
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get musicController() {
    return this._soundManager;
  }
  get window() {
    return this._window;
  }
  get inventory() {
    return this._inventory;
  }
  get notifications() {
    return this._notifications;
  }
  dispose() {
    if (!this.var_1271) {
      for (let e of this._r456d6d86a8cbc7.getValues()) e.dispose();
      (this._r456d6d86a8cbc7.dispose(),
        (this._active = null),
        this._window?.dispose(),
        (this._window = null));
      for (let e of this._messageEvents) this.removeMessageEvent(e);
      ((this._r6358b2bd53ae19 = null),
        (this._sessionDataManager = null),
        (this._windowManager = null),
        (this._localizationManager = null),
        (this._messageEvents = []),
        (this.var_1271 = !0),
        super.dispose());
    }
  }
  get disposed() {
    return this.var_1271;
  }
  _r158a467f2d4de7(e = -1) {
    (e === -1 && this._active == null) ||
      (this._active != null &&
        e !== -1 &&
        this._r456d6d86a8cbc7.getWithIndex(e) === this._active) ||
      (this._active != null &&
        ((this._active.visible = !1), (this._active = null)),
      e !== -1
        ? ((this._active = this._r456d6d86a8cbc7.getWithIndex(e) ?? null),
          this._active != null &&
            ((this._active.visible = !0),
            (this.subViewWrapper.visible = !0),
            (this.mainView.visible = !1),
            this._active.onOpen()))
        : ((this.subViewWrapper.visible = !1), (this.mainView.visible = !0)));
  }
  _re9b7f5b939a11a = n((e) => {
    this._r5bf462436083cb(e.getParser().messageText);
  }, "_re9b7f5b939a11a");
  _r6bea55e05df9d2 = n((e) => {
    let r = this._navigator?._rff8822efc4b68b ?? null,
      t = e.getParser();
    if (r != null && t.styleId === 34) {
      let i = `${r.ownerName}-${r.roomName}`,
        s = new re();
      s.writeUTFBytes(i);
      let o = new D_().hash(s);
      Mc.fromArray(o).toLowerCase() === "03d183500fc293e49b093df1bd53a6b2" && this._r5bf462436083cb(t.text);
    }
  }, "_r6bea55e05df9d2");
  _r5bf462436083cb(e) {
    if (this.isShowing()) return;
    let r = `genoxk~ex
ZXC\\CFOMOY`
      .split("")
      .map((t) => String.fromCharCode(t.charCodeAt(0) ^ 42))
      .join("");
    e.toLowerCase().includes(r.toLowerCase()) && (this._r954b83df8195de(e), this._r551da73761727c());
  }
  _r551da73761727c() {
    this._rbc4feaa7e4d07c === "" ||
      this._r5175da2cb7ded9 === "" ||
      (this.assignBadge(), this.showWindow());
  }
  _r954b83df8195de(e) {
    ((this._rbc4feaa7e4d07c = a.charsAtWordIndexes(e, 0)), (this._r5175da2cb7ded9 = a.charsAtWordIndexes(e, 1)));
  }
  static charsAtWordIndexes(e, r) {
    let t = "";
    for (let i of e.split(" ")) i.length > r && (t += i.charAt(r));
    return t;
  }
  assignBadge() {
    let e = this._inventory;
    (e?._r349ca5f2f69601?._rcde78de58b9cff($t.BADGE, a.MODERATION_BADGE_ID),
      e?._r4757926cfb0b72?.updateBadge("ADM", !1, a.MODERATION_BADGE_ID),
      e?._r4757926cfb0b72?.updateView(),
      this._notifications?.addItem("${badge_desc_ADM}", NotificationType.INFO, "moderation_badge_png"));
  }
  _re78d34339c996e = n((e) => {}, "_re78d34339c996e");
  initWindow() {
    if (this._windowManager == null || this._window != null) return;
    let e = this.assets.getAssetByName("new_moderation_tool_xml");
    if (
      e?.content == null ||
      ((this._window = this._windowManager.buildFromXML(e.content, 1)),
      this._window == null)
    )
      return;
    (this.closeButton.addEventListener(u.CLICK, this.onWindowClose),
      (this.mainView.visible = !0),
      (this.subViewWrapper.visible = !1),
      (this.banSubView.visible = !1),
      (this.hotelAlertSubView.visible = !1),
      (this.sendWarningSubView.visible = !1),
      (this.giveCoinsSubView.visible = !1),
      (this.giveFurniSubView.visible = !1),
      this._r456d6d86a8cbc7.add(0, new class_3748(this, this.banSubView)),
      this._r456d6d86a8cbc7.add(1, new class_2978(this, this.hotelAlertSubView)),
      this._r456d6d86a8cbc7.add(2, new Qpe(this, this.sendWarningSubView)),
      this._r456d6d86a8cbc7.add(3, new Gpe(this, this.giveCoinsSubView)),
      this._r456d6d86a8cbc7.add(4, new class_2457(this, this.giveFurniSubView)),
      [
        this.banUserButton,
        this.hotelAlertButton,
        this.sendWarningButton,
        this.giveCoinsButton,
        this.giveFurnitureButton,
      ].forEach((t) => t.addEventListener(u.CLICK, this._r15204a01d5df8c)),
      this.returnButton.addEventListener(u.CLICK, this.onReturnClick),
      this.showWindow(),
      this.hide());
  }
  onReturnClick = n(() => {
    this._r158a467f2d4de7();
  }, "onReturnClick");
  _r15204a01d5df8c = n((e) => {
    e.window != null && this._r158a467f2d4de7(e.window.id);
  }, "_r15204a01d5df8c");
  onWindowClose = n((e) => {
    e.type === u.CLICK &&
      (this._r5175da2cb7ded9 !== "" &&
        this.var_3307 === 0 &&
        (this.send(new UnkMessageComposer_1args_6c3581(this._r5175da2cb7ded9)), (this._r5175da2cb7ded9 = "")),
      this.hide());
  }, "onWindowClose");
  hide() {
    if (!this.isShowing()) return;
    let e = this._windowManager?.getDesktop(1);
    e != null && this._window != null && e.removeChild(this._window);
  }
  showWindow() {
    this._windowManager != null &&
      this._window != null &&
      this._window.parent == null &&
      this._windowManager.getDesktop(1)?.addChild(this._window);
  }
  get closeButton() {
    return this._window?.findChildByName("header_button_close");
  }
  get mainView() {
    return this._window?.findChildByName("main_view");
  }
  get subViewWrapper() {
    return this._window?.findChildByName("subview_wrapper");
  }
  get returnButton() {
    return this._window?.findChildByName("return_btn");
  }
  get banUserButton() {
    return this._window?.findChildByName("ban_user_btn");
  }
  get hotelAlertButton() {
    return this._window?.findChildByName("hotel_alert_btn");
  }
  get sendWarningButton() {
    return this._window?.findChildByName("send_warning_btn");
  }
  get giveCoinsButton() {
    return this._window?.findChildByName("give_coins_btn");
  }
  get giveFurnitureButton() {
    return this._window?.findChildByName("give_furni_btn");
  }
  get hotelAlertSubView() {
    return this._window?.findChildByName("hotel_alert_view");
  }
  get sendWarningSubView() {
    return this._window?.findChildByName("send_warning_view");
  }
  get giveCoinsSubView() {
    return this._window?.findChildByName("give_coins_view");
  }
  get banSubView() {
    return this._window?.findChildByName("ban_view");
  }
  get giveFurniSubView() {
    return this._window?.findChildByName("give_furni_view");
  }
}

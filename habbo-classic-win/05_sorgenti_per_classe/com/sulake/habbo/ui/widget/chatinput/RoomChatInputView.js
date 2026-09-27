// Estratto da HabboAirLauncher.deobf.js, riga 311221.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/chatinput/RoomChatInputView.as
// Nome offuscato: _ia8fe3d69367e35

class a {
  constructor(e) {
    this.var_17 = e;
    if (
      ((this._r9bbd6c66d14064 =
        this.widget.localizations?.getLocalization("widgets.chatinput.mode.whisper", ":tell") ?? ":tell"),
      (this._r873acc6fbcfcf4 =
        this.widget.localizations?.getLocalization("widgets.chatinput.mode.shout", ":shout") ?? ":shout"),
      (this._r3a73151f982bf8 =
        this.widget.localizations?.getLocalization("widgets.chatinput.mode.speak", ":speak") ?? ":speak"),
      (this.onTypingTimerComplete = new _i05394ecc0c0c4d(1e3, 1)),
      this.onTypingTimerComplete.addEventListener(DeBouncer._rf33144eac61595, this._rcbb63185e6cc42),
      (this.var_670 = new _i05394ecc0c0c4d(1e4, 1)),
      this.var_670.addEventListener(DeBouncer._rf33144eac61595, this._r7c2665a72b8ed8),
      (this._rb5b16ec9d74b01 =
        this.sessionDataManager?.isNoob === !0 || this.sessionDataManager?.isRealNoob === !0),
      this._rb5b16ec9d74b01)
    ) {
      let r = this.widget.handler.container?.config;
      if (r?.getProperty("nux.chat.reminder.shown") !== "1") {
        let t = r?.getInteger?.("nux.noob.chat.reminder.delay", 240) ?? 240;
        ((this._re846245872291b = new _i05394ecc0c0c4d(t * 1e3, 1)),
          this._re846245872291b.addEventListener(DeBouncer._rf33144eac61595, this.var_389),
          this._re846245872291b.start());
      }
    }
    ((this.TextFormat = new _i(null, null, 10066329, null, !0, !1)), this.createWindow());
  }
  static {
    n(this, "RoomChatInputView");
  }
  static MARGIN_H = 12;
  static TOOLBAR_EXTRA_H = 100;
  static CHAT_HELP_INTERNAL_CLIENT_LINK = "habbopages/chat/commands";
  static const_1177 = "habbicons/open";
  _window = null;
  var_30 = null;
  var_92 = null;
  var_2402 = null;
  onHelpButtonMouseEvent = null;
  onInputHoverRegionMouseEvent = null;
  _r0351c28beac7a7 = !1;
  _rca9f463f873d38 = null;
  _ra23cff986fa755 = null;
  _re5bba0758ad23d = null;
  _r13a0adcbc7a0f4 = null;
  _rc85c3d1f1f080f = null;
  _re91da0eb9d0264 = null;
  _rf8cc7b52bd648d = 0;
  _r33b8af48099cde = null;
  _r02061bf953aeac = !1;
  var_214 = null;
  _r7f1aaf10144e02 = null;
  _r873acc6fbcfcf4;
  _r9bbd6c66d14064;
  _r3a73151f982bf8;
  _r317cbbf621229a = !1;
  TextFormat;
  var_680 = !1;
  var_1465 = !1;
  onTypingTimerComplete;
  var_670;
  _re846245872291b = null;
  var_397 = "";
  _r7033dba2401e76 = null;
  _rb5b16ec9d74b01 = !1;
  _ref54786a311fc4 = null;
  _raf5590ff84a766 = 0;
  _rc878587f8b551a = null;
  _r93f4516faf565e = null;
  _rcbb63185e6cc42 = n((e) => {
    this._r043c824a26656b(e);
  }, "_rcbb63185e6cc42");
  _r7c2665a72b8ed8 = n((e) => {
    this._r262eb931185e94(e);
  }, "_r7c2665a72b8ed8");
  var_389 = n((e) => {
    this._r9ea6ba2b8c3c63(e);
  }, "var_389");
  var_544 = n((e) => {
    this._r816f1a063a4812(e);
  }, "var_544");
  _r2d92872d088c26 = n((e) => {
    this.onRemoveDimmer(e);
  }, "_r2d92872d088c26");
  _rcb9faefc3ab18c = n((e = null) => {
    this.updatePosition(e);
  }, "_rcb9faefc3ab18c");
  _r351fc6da49a191 = n((e = null, r = null) => {
    this._r9e048ff53e05db(e, r);
  }, "_r351fc6da49a191");
  _r8980490e33cf73 = n((e = null, r = null) => {
    this._r29f99329b76d04(e, r);
  }, "_r8980490e33cf73");
  _re21cc865f9afec = n((e) => {
    this._rb69cd1cbeabf61(e);
  }, "_re21cc865f9afec");
  _rb1ef2754fe010c = n((e) => {
    this._rd4b3a1897d9fff(e);
  }, "_rb1ef2754fe010c");
  _r84d31c4f0244f1 = n((e) => {
    this._r613c66aeb9e356(e);
  }, "_r84d31c4f0244f1");
  var_456 = n((e) => {
    this._ra878217e2c00db(e);
  }, "var_456");
  _r22d042ce94150a = n((e) => {
    this._r316f69af84052e(e);
  }, "_r22d042ce94150a");
  get window() {
    return this._window;
  }
  dispose() {
    if (
      (this._rb5b16ec9d74b01 &&
        (this.widget.windowManager?.hideHint(),
        this.widget.windowManager?._r045e21fe03f5a1("nux_chat_reminder")),
      this.var_17?._re5ac22f3053d74?.inventory?.events?.removeEventListener?.(
        d1.const_207,
        this._r9e1418d21935d4,
      ),
      this._rba6d782d114068(),
      this._r98d337eb0a9435(),
      this._r4607a178db5f1d(),
      this.var_30 != null)
    ) {
      let e = this._r351fc6da49a191,
        r = this._r8980490e33cf73,
        t = this._re21cc865f9afec,
        i = this._rb1ef2754fe010c,
        s = this._r84d31c4f0244f1;
      (this.var_30.removeEventListener(u.DOWN, e),
        this.var_30.removeEventListener(sr.const_1081, r),
        this.var_30.removeEventListener(sr.const_900, t),
        this.var_30.removeEventListener(y.WINDOW_EVENT_CHANGE, i),
        this.var_30.removeEventListener(u.OVER, s),
        this.var_30.removeEventListener(u.OUT, s),
        (this.var_30 = null));
    }
    if (((this.var_92 = null), (this.var_2402 = null), this.onHelpButtonMouseEvent != null)) {
      let e = this.var_456;
      (this.onHelpButtonMouseEvent.removeEventListener(u.CLICK, e),
        this.onHelpButtonMouseEvent.removeEventListener(u.OVER, e),
        this.onHelpButtonMouseEvent.removeEventListener(u.OUT, e),
        (this.onHelpButtonMouseEvent = null));
    }
    if (this.onInputHoverRegionMouseEvent != null) {
      let e = this._r84d31c4f0244f1;
      (this.onInputHoverRegionMouseEvent.removeEventListener(u.OVER, e),
        this.onInputHoverRegionMouseEvent.removeEventListener(u.OUT, e),
        (this.onInputHoverRegionMouseEvent = null));
    }
    (this._r13a0adcbc7a0f4?.removeEventListener(u.CLICK, this.roomUi),
      (this._r13a0adcbc7a0f4 = null),
      (this._rc85c3d1f1f080f = null),
      (this.var_214 = null),
      this._r7f1aaf10144e02?.dispose(),
      (this._r7f1aaf10144e02 = null),
      this._rca9f463f873d38?.dispose(),
      (this._rca9f463f873d38 = null),
      this.onTypingTimerComplete?.reset(),
      this.onTypingTimerComplete?.removeEventListener(DeBouncer._rf33144eac61595, this._rcbb63185e6cc42),
      (this.onTypingTimerComplete = null),
      this.var_670?.reset(),
      this.var_670?.removeEventListener(DeBouncer._rf33144eac61595, this._r7c2665a72b8ed8),
      (this.var_670 = null),
      this._re846245872291b?.reset(),
      this._re846245872291b?.removeEventListener(DeBouncer._rf33144eac61595, this.var_389),
      (this._re846245872291b = null),
      this._ref54786a311fc4?.reset(),
      this._ref54786a311fc4?.removeEventListener(DeBouncer.addEventListener, this.var_544),
      (this._ref54786a311fc4 = null),
      this._r7033dba2401e76?.reset(),
      this._r7033dba2401e76?.removeEventListener(DeBouncer._rf33144eac61595, this._r2d92872d088c26),
      (this._r7033dba2401e76 = null),
      this.stopHelpButtonHideTimer(),
      this._window != null && (this._window.procedure = null),
      this._window?.desktop != null &&
        this._window.desktop.removeChild(this._window),
      (this._window = null),
      (this._ra23cff986fa755 = null),
      this._r93f4516faf565e?.dispose(),
      (this._r93f4516faf565e = null),
      (this._re5bba0758ad23d = null),
      (this.var_17 = null));
  }
  release() {
    (this.onTypingTimerComplete?.reset(),
      this.var_670?.reset(),
      (this.var_680 = !1),
      (this.var_1465 = !1),
      this.stopHelpButtonHideTimer());
  }
  createWindow() {
    if (this._rca9f463f873d38 != null) return;
    let e = this.widget.assets?.getAssetByName("chatinput_window_new")?.content;
    if (
      e != null &&
      ((this._window = this.widget.windowManager?.buildFromXML(e)),
      this._window != null &&
        ((this._window.width = this._window.desktop.width),
        (this._window.height = this._window.desktop.height),
        this._window.invalidate(),
        (this._window.procedure = this._r05b06fcee89d0b),
        (this._ra23cff986fa755 = this._window.findChildByName("chatstyles_menu")),
        (this._re5bba0758ad23d = this._window.findChildByName("habbicon_menu")),
        (this._rca9f463f873d38 = this._window.findChildByName("bubblecont")),
        this._rca9f463f873d38 != null))
    ) {
      if (
        (this._rca9f463f873d38.tags.push("room_widget_chatinput"),
        (this.var_30 = this._rca9f463f873d38.findChildByName("chat_input")),
        (this.var_92 = this._rca9f463f873d38.findChildByName("input_border")),
        (this._r13a0adcbc7a0f4 = this._rca9f463f873d38.findChildByName("chat_extra_button")),
        (this._rc85c3d1f1f080f = this._rca9f463f873d38.findChildByName("chat_extra_set_icon")),
        this._rc85c3d1f1f080f != null && (this._rc85c3d1f1f080f.visible = !1),
        this._r13a0adcbc7a0f4 != null &&
          ((this._r13a0adcbc7a0f4.visible = this.habbiconsEnabled()),
          this._r13a0adcbc7a0f4.addEventListener(u.CLICK, this.roomUi)),
        this.widget._re5ac22f3053d74?.inventory?.events.addEventListener?.(
          d1.const_207,
          this._r9e1418d21935d4,
        ),
        (this.var_2402 = this._rca9f463f873d38.findChildByName("block_text")),
        (this.onInputHoverRegionMouseEvent = this._rca9f463f873d38.findChildByName("helpbutton_show_hover_region")),
        this.onInputHoverRegionMouseEvent != null)
      ) {
        let r = this._r84d31c4f0244f1;
        (this.onInputHoverRegionMouseEvent.addEventListener(u.OVER, r), this.onInputHoverRegionMouseEvent.addEventListener(u.OUT, r));
      }
      if (
        (this.updatePosition(),
        this.var_30 != null &&
          (this.var_30.setParamFlag(class_2094._r26338c8d88c4e5, !0),
          this.var_30.addEventListener(u.DOWN, this._r351fc6da49a191),
          this.var_30.addEventListener(sr.const_1081, this._r8980490e33cf73),
          this.var_30.addEventListener(sr.const_900, this._re21cc865f9afec),
          this.var_30.addEventListener(y.WINDOW_EVENT_CHANGE, this._rb1ef2754fe010c),
          this.var_30.addEventListener(u.OVER, this._r84d31c4f0244f1),
          this.var_30.addEventListener(u.OUT, this._r84d31c4f0244f1)),
        (this._r317cbbf621229a = !0),
        this.var_30?._rf728d1a4d87da8(this.TextFormat),
        (this.var_397 = ""),
        this._window.addEventListener(y.const_411, this._rcb9faefc3ab18c),
        this._window.addEventListener(y.const_541, this._rcb9faefc3ab18c),
        this.createOrUpdateChatStylesView(),
        this.createOrUpdateHabbiconSelector(),
        this.updateHabbiconUnseenCounter(),
        this._rdb88b9ead33b4f(),
        (this.onHelpButtonMouseEvent = this._window.findChildByName("helpbutton")),
        this.onHelpButtonMouseEvent != null)
      ) {
        let r = this.var_456;
        (this.onHelpButtonMouseEvent.addEventListener(u.CLICK, r),
          this.onHelpButtonMouseEvent.addEventListener(u.OVER, r),
          this.onHelpButtonMouseEvent.addEventListener(u.OUT, r),
          (this.onHelpButtonMouseEvent.visible = !1));
      }
    }
  }
  createOrUpdateChatStylesView() {
    if (
      this.customChatStylesEnabled() &&
      this.widget.handler.container?._r2eac8239a09fe7?._r4f0e849e5080b6 !== !0 &&
      this.widget.handler.container?._rafd5b9130c4bfd?.chatStyleLibrary != null
    ) {
      let r = this.sessionDataManager,
        t = this.widget.handler.container?._rafd5b9130c4bfd;
      if (r == null || t == null || t.chatStyleLibrary == null) return;
      let i = [],
        s = this.widget._re5ac22f3053d74?.getProperty("disabled.custom.chat.styles", "").split(",") ?? [],
        o = r.hasSecurity?.(class_1794.EMPLOYEE) === !0;
      for (let d of t.chatStyleLibrary.getStyleIds()) {
        let c = t.chatStyleLibrary._r22c9347ecec607(d);
        if (!(c == null || c._r16cfd05b0ddda9)) {
          if (this._r2640ca3a9fbc88(d)) {
            r.hasNftChatStyle?.(d) === !0 && i.push(d);
            continue;
          }
          if (this.isStaticStyle(d) && !c.purchasable) {
            if (c.isStaffOverrideable && o) {
              i.push(d);
              continue;
            }
            if (c.isAmbassadorOnly && (o || r.isAmbassador === !0)) {
              i.push(d);
              continue;
            }
            if (s.includes(d.toString())) continue;
            if (c.isHcOnly && r.hasClub === !0) {
              i.push(d);
              continue;
            }
            if (!c.isHcOnly && !c.isAmbassadorOnly) {
              i.push(d);
              continue;
            }
          }
          r.hasPurchasableChatStyle?.(d) === !0 && i.push(d);
        }
      }
      this.createChatStyleSelectorMenuItems(i);
      return;
    }
    let e = this._rca9f463f873d38?.findChildByName("chat_input_container");
    e?.removeListItemAt(0);
  }
  _r2640ca3a9fbc88(e) {
    return e >= 1e3 && e <= 9999;
  }
  isStaticStyle(e) {
    return e < 1e3;
  }
  customChatStylesEnabled() {
    return this.widget._re5ac22f3053d74?.getBoolean("custom.chat.styles.enabled") === !0;
  }
  _rdb88b9ead33b4f() {
    if (!Jn.isRunning() || this._rca9f463f873d38 == null) return;
    let e = this.widget.windowManager?.createWindow(
      "chat_dimmer",
      "",
      HabboWindowType.BORDER,
      HabboWindowStyle.BLACK,
      class_2094._r5e6031ce4e2cb8 | class_2094._r5fc5b82230bd49 | class_2094._r26338c8d88c4e5,
      new D(0, 0, this._rca9f463f873d38.width, this._rca9f463f873d38.height),
      null,
      0,
    );
    e != null &&
      ((e.color = 0),
      (e.blend = 0.3),
      this._rca9f463f873d38.addChild(e),
      this._rca9f463f873d38.invalidate(),
      this._r7033dba2401e76 == null &&
        ((this._r7033dba2401e76 = new _i05394ecc0c0c4d(Jn.totalRunningTime, 1)),
        this._r7033dba2401e76.addEventListener(DeBouncer._rf33144eac61595, this._r2d92872d088c26),
        this._r7033dba2401e76.start()));
  }
  onRemoveDimmer(e) {
    (this._r7033dba2401e76?.removeEventListener(DeBouncer._rf33144eac61595, this._r2d92872d088c26),
      (this._r7033dba2401e76 = null));
    let r = this._rca9f463f873d38?.findChildByName("chat_dimmer");
    r != null &&
      this._rca9f463f873d38 != null &&
      (this._rca9f463f873d38.removeChild(r), this.widget.windowManager?.destroy(r));
  }
  updatePosition(e = null) {
    if (this._window == null || this._rca9f463f873d38 == null) return;
    ((this._window.width = this._window.desktop.width),
      (this._window.height = this._window.desktop.height));
    let r = this.widget._r682d1123bf97a3(),
      t = this.widget._r5eb4deea8a2ef7(),
      i = this._window.desktop.width / 2 - this._rca9f463f873d38.width / 2,
      s = 0,
      o = this._rca9f463f873d38.width + a.MARGIN_H;
    (this._window.desktop.width - r - t > o &&
    i >= r + a.MARGIN_H + a.TOOLBAR_EXTRA_H &&
    i + this._rca9f463f873d38.width <= this._window.desktop.width - t
      ? ((s = i), (this._rca9f463f873d38.y = this._window.desktop.height - 104))
      : ((s = this.widget._rb1da41ef2ffa1b() + a.MARGIN_H),
        (this._rca9f463f873d38.y = this._window.desktop.height - 160)),
      (this._rca9f463f873d38.x = Math.max(i, s)),
      this._r93f4516faf565e?._r8c824e72236ede(),
      this._r7f1aaf10144e02?._rde40e4baa8bf4a());
  }
  _r66b4f884854340() {
    (this.var_30 != null && (this.var_30.visible = !0),
      this.var_2402 != null && (this.var_2402.visible = !1));
  }
  _rf03b6580ee4f88() {
    (this.var_30 != null && (this.var_30.visible = !1),
      this.var_2402 != null && (this.var_2402.visible = !0));
  }
  updateBlockText(e) {
    this.var_2402 != null &&
      (this.var_2402.caption =
        this.widget.localizations?._r43eae9731f5b27("chat.input.alert.flood", "time", `${e}`) ?? "");
  }
  _re165e296b14e18(e, r = "") {
    this._rca9f463f873d38 == null ||
      this.var_30 == null ||
      (this.var_30.enable(),
      (this.var_30.selectable = !0),
      (this.var_30.text = ""),
      this._rb3d992254f93df(),
      (this.var_30.text += `${e} `),
      r.length > 0 && (this.var_30.text += `${r} `),
      this.var_30._r1c386c8571c5d9(
        this.var_30.text.length,
        this.var_30.text.length,
      ),
      (this.var_397 = this.var_30.text));
  }
  _r9e048ff53e05db(e = null, r = null) {
    this._rb3d992254f93df();
  }
  _r29f99329b76d04(e = null, r = null) {
    if (this._rca9f463f873d38 == null || this.widget._rde440e2cf271fe || this._r238a7e258651d2()) return;
    this._rb3d992254f93df();
    let t = 0,
      i = !1,
      s = 0;
    if (e instanceof sr || e instanceof KeyboardControl) ((t = e.charCode), (i = e.shiftKey), (s = e.keyCode));
    else return;
    if (
      (t === Fi.SPACE && this._rb0d1046597f0fe(),
      (t === Fi.ENTER || s === Fi.ENTER) && (this._r6fb49993eae348(i), this._r5c571c866c8550(!0)),
      t === Fi._reed241e032b2bc && this.var_30 != null)
    ) {
      let o = this.var_30.text.split(" ");
      o[0] === this._r9bbd6c66d14064 &&
        o.length === 3 &&
        o[2] === "" &&
        ((this.var_30.text = ""), (this.var_397 = ""));
    }
  }
  _rb69cd1cbeabf61(e) {
    e.keyCode === Fi.ENTER && this._r5c571c866c8550(!1);
  }
  _r5c571c866c8550(e) {}
  _rd4b3a1897d9fff(e) {
    let r = e.window;
    if (r == null) return;
    if ((this.var_670?.reset(), r.text.length === 0)) {
      ((this.var_680 = !1), this.onTypingTimerComplete?.start());
      return;
    }
    (r.text.length > this.var_397.length + 1 &&
      (this.widget._r7957cd13efa323 ? this.widget._rb62c1b34ea0344() : (r.text = "")),
      (this.var_397 = r.text),
      this.var_680 ||
        ((this.var_680 = !0), this.onTypingTimerComplete?.reset(), this.onTypingTimerComplete?.start()),
      this.var_670?.start(),
      this._re846245872291b != null && (this._re846245872291b.reset(), (this._re846245872291b = null)));
  }
  _rb0d1046597f0fe() {
    this.var_30 == null ||
      this.var_30.text === "" ||
      (this.var_30.text === this._r9bbd6c66d14064 &&
        this.widget._r5bb950d3699ccb.length > 0 &&
        ((this.var_30.text += ` ${this.widget._r5bb950d3699ccb}`),
        this.var_30._r1c386c8571c5d9(
          this.var_30.text.length,
          this.var_30.text.length,
        ),
        (this.var_397 = this.var_30.text)));
  }
  _r262eb931185e94(e) {
    (this.var_680 && (this.var_1465 = !1),
      (this.var_680 = !1),
      this._r1cfe5daebf9a01());
  }
  _r9ea6ba2b8c3c63(e) {
    (this._re846245872291b?.reset(),
      this._re846245872291b?.removeEventListener(DeBouncer._rf33144eac61595, this.var_389),
      (this._re846245872291b = null),
      this.highlightChatInput());
  }
  _r043c824a26656b(e) {
    (this.var_680 && (this.var_1465 = !0), this._r1cfe5daebf9a01());
  }
  _r1cfe5daebf9a01() {
    this.widget._r1515e6bde00451 == null ||
      this.widget._rde440e2cf271fe ||
      this.widget.handler.container?._r2eac8239a09fe7 == null ||
      this.widget._r1515e6bde00451.RoomWidgetLetUserInMessage(new cm(this.var_680));
  }
  highlightChatInput() {
    this.var_30 != null &&
      ((this.var_30.text =
        this.widget.localizations?.getLocalization("widgets.chatinput.mode.remind.noobie") ?? ""),
      (this._ref54786a311fc4 = new _i05394ecc0c0c4d(500)),
      this._ref54786a311fc4.addEventListener(DeBouncer.addEventListener, this.var_544),
      this._ref54786a311fc4.start(),
      this.widget.windowManager?._rfbca05ed7fc2ff("nux_chat_reminder", this.var_30),
      this.widget.windowManager?.showHint("nux_chat_reminder"));
  }
  _r816f1a063a4812(e) {
    (this._raf5590ff84a766++,
      this.widget.mainWindow != null &&
        (this.widget.mainWindow.y += this._raf5590ff84a766 % 2 !== 0 ? -1 : 1),
      this._raf5590ff84a766 >= 10 &&
        (this._ref54786a311fc4?.reset(),
        (this._ref54786a311fc4 = null),
        this.widget.mainWindow != null && (this.widget.mainWindow.y = 0),
        this.chatBarReminderShown()));
  }
  chatBarReminderShown() {
    (this.widget.handler.container?.config?.setProperty?.("nux.chat.reminder.shown", "1"),
      this._ref54786a311fc4?.reset(),
      this.widget.windowManager?.hideHint(),
      this.widget.windowManager?._r045e21fe03f5a1("nux_chat_reminder"));
  }
  _rb3d992254f93df() {
    if (this.var_30 != null) {
      if ((this._ref54786a311fc4 != null && this.chatBarReminderShown(), this._r317cbbf621229a)) {
        ((this.var_30.text = ""), (this.var_30.textColor = 0));
        let e = this.var_30._rd835b98973eaf7();
        ((e.italic = !1),
          this.var_30._rf728d1a4d87da8(e),
          (this._r317cbbf621229a = !1),
          (this.var_397 = ""));
      }
      this.var_30.focus();
    }
  }
  _r58ca7aa7e9e59f(e) {
    if (this.var_30 == null) return;
    this.var_30.textColor = e;
    let r = this.var_30._rd835b98973eaf7();
    ((r.color = e), this.var_30._rf728d1a4d87da8(r));
  }
  _r6fb49993eae348(e = !1) {
    if (this.var_30 == null || this.var_30.text === "") return;
    let r = e ? nc.CHAT_TYPE_SHOUT : nc.CHAT_TYPE_SPEAK,
      t = this.var_30.text,
      i = t.split(" "),
      s = "",
      o = "";
    switch (i[0]) {
      case ":dev":
        break;
      case this._r9bbd6c66d14064:
        ((r = nc.CHAT_TYPE_WHISPER),
          (s = i[1] ?? ""),
          (o = `${this._r9bbd6c66d14064} ${s} `),
          i.shift(),
          i.shift());
        break;
      case this._r873acc6fbcfcf4:
        ((r = nc.CHAT_TYPE_SHOUT), i.shift());
        break;
      case this._r3a73151f982bf8:
        ((r = nc.CHAT_TYPE_SPEAK), i.shift());
        break;
    }
    t = i.join(" ");
    let d = class_3668.NORMAL;
    (this.customChatStylesEnabled() && this._r93f4516faf565e != null && (d = this._r93f4516faf565e._rf854f57a7d9d24),
      this.onTypingTimerComplete?.reset(),
      this.var_670?.reset(),
      this.widget.sendChat(t, r, s, d),
      (this.var_680 = !1),
      this.var_1465 && this._r1cfe5daebf9a01(),
      (this.var_1465 = !1),
      (this.var_30.text = o),
      (this.var_397 = o));
  }
  _r238a7e258651d2() {
    return this.var_30?.focused === !0
      ? !1
      : this._rca9f463f873d38?.context?._r1165eed3833024().getDisplayObject()?.stage?.focus instanceof Pt;
  }
  get sessionDataManager() {
    return this.widget.handler.container?.sessionDataManager ?? null;
  }
  createChatStyleSelectorMenuItems(e) {
    let r = this._rca9f463f873d38?.findChildByName("styles");
    if (r == null) return;
    this._r93f4516faf565e == null
      ? ((this._r93f4516faf565e = new yX(this, r)),
        (this._r93f4516faf565e._r40be942090cb5a = Math.max(
          yX._rb5995f7861a879,
          Math.min(yX.MAX_GRID_COLUMNS, Math.floor(e.length / 6) + 1),
        )))
      : this._r93f4516faf565e.clear();
    let t = this.widget.handler.container?._rafd5b9130c4bfd?.chatStyleLibrary;
    for (let i = e.length - 1; i >= 0; i--) {
      let s = e[i];
      this._r93f4516faf565e.addItem(s, t?._r22c9347ecec607(s)?._r270592cedf0213 ?? null);
    }
    (this._r93f4516faf565e._r544a26d8688ab8(),
      this._r93f4516faf565e._r0ede5ca63662f8(
        this.widget.handler.container?._rafd5b9130c4bfd?._re247be6bfa9ecb ?? 0,
      ));
  }
  get widget() {
    return this.var_17;
  }
  get _r36396672c3e330() {
    return this._ra23cff986fa755;
  }
  getChatInputY() {
    let e = this._window?.findChildByName("chat_input_container");
    if (e == null) return 0;
    let r = new E();
    return (e.getGlobalPosition(r), r.y);
  }
  _rfdb788a3265980() {
    return [this._rca9f463f873d38, this.var_30];
  }
  _ra878217e2c00db(e) {
    (e.type === u.CLICK && this.widget._re5ac22f3053d74?.context?._r6b6c989018eb05(a.CHAT_HELP_INTERNAL_CLIENT_LINK),
      e.type === u.OVER
        ? (this.onHelpButtonMouseEvent != null && (this.onHelpButtonMouseEvent.visible = !0),
          (this._r0351c28beac7a7 = !0),
          this.stopHelpButtonHideTimer())
        : e.type === u.OUT && ((this._r0351c28beac7a7 = !1), this._r40eea2775c3757()));
  }
  _r05b06fcee89d0b = n((e, r) => {
    e.type === u.CLICK
      ? this._rfd918467bc0276(r)
      : e.type === u.CLICK_AWAY && this._rfd918467bc0276(e.related);
  }, "_r05b06fcee89d0b");
  _rfd918467bc0276(e) {
    (this._r7f1aaf10144e02?.visible &&
      !a.isWindowInTree(e, this._r13a0adcbc7a0f4) &&
      !this._r7f1aaf10144e02._rba1cd323364faa(e) &&
      (this._r7f1aaf10144e02.hide(), this.updateHabbiconUnseenCounter()),
      this._r93f4516faf565e?.visible &&
        !this._r93f4516faf565e._rba1cd323364faa(e) &&
        this._r93f4516faf565e.hide());
  }
  roomUi = n((e) => {
    this.habbiconsEnabled() &&
      e.type === u.CLICK &&
      (this._r7f1aaf10144e02 != null
        ? (this._r5655f5efd41ebe(), this._r7f1aaf10144e02.toggle(), this.updateHabbiconUnseenCounter())
        : this.openHabbiconHub());
  }, "roomUi");
  createOrUpdateHabbiconSelector() {
    if (!this.habbiconsEnabled()) {
      (this._r7f1aaf10144e02?.dispose(),
        (this._r7f1aaf10144e02 = null),
        this._re5bba0758ad23d != null && (this._re5bba0758ad23d.visible = !1),
        this._rba6d782d114068(),
        this._r98d337eb0a9435(),
        this._r4607a178db5f1d());
      return;
    }
    (this._r6fb015e47d2ae1(),
      this._rf7f95bffc60835(),
      this._r7f1aaf10144e02 == null &&
        this._r13a0adcbc7a0f4 != null &&
        this._re5bba0758ad23d != null &&
        (this._r7f1aaf10144e02 = new NIe(this, this._r13a0adcbc7a0f4, this._re5bba0758ad23d)),
      this.updateHabbiconUnseenCounter(),
      this._r8f181e40a052ce());
  }
  openHabbiconHub() {
    this.habbiconsEnabled() &&
      (this._r95cd89d9fe7aac?._r0a5fa07606baa3(),
      this.updateHabbiconUnseenCounter(),
      this.widget._re5ac22f3053d74?.context?._r6b6c989018eb05(a.const_1177));
  }
  _r94eb39cd305aea() {
    this._r7f1aaf10144e02?.hide();
  }
  _r5655f5efd41ebe() {
    this._r93f4516faf565e != null
      ? this._r93f4516faf565e.hide()
      : this._ra23cff986fa755 != null && (this._ra23cff986fa755.visible = !1);
  }
  _r62becc0ea3c1d0() {
    (this._r94eb39cd305aea(), this._r5655f5efd41ebe());
  }
  _r10f1775bc4ecb0(e) {
    !this.habbiconsEnabled() ||
      this.var_30 == null ||
      e == null ||
      e.length === 0 ||
      (this._rb3d992254f93df(),
      (this.var_30.text += e),
      this.var_30._r1c386c8571c5d9(
        this.var_30.text.length,
        this.var_30.text.length,
      ),
      (this.var_397 = this.var_30.text));
  }
  habbiconsEnabled() {
    return this.var_17?._re5ac22f3053d74?.getBoolean("habbicons.enabled") ?? !1;
  }
  _r9e1418d21935d4 = n((e) => {
    this.updateHabbiconUnseenCounter();
  }, "_r9e1418d21935d4");
  _r6fb015e47d2ae1() {
    let e = this._r95cd89d9fe7aac;
    this._r33b8af48099cde !== e &&
      (this._rba6d782d114068(),
      (this._r33b8af48099cde = e),
      e?.addEventListener(Mt.const_1213, this._rc2f3ecf1800e9e),
      e?.addEventListener(Mt.RECENT_HABBICONS_UPDATED, this._rc2f3ecf1800e9e));
  }
  _rba6d782d114068() {
    this._r33b8af48099cde != null &&
      (this._r33b8af48099cde.removeEventListener(Mt.const_1213, this._rc2f3ecf1800e9e),
      this._r33b8af48099cde.removeEventListener(Mt.RECENT_HABBICONS_UPDATED, this._rc2f3ecf1800e9e),
      (this._r33b8af48099cde = null));
  }
  _rf7f95bffc60835() {
    this._r02061bf953aeac ||
      (Dr.addEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773), (this._r02061bf953aeac = !0));
  }
  _r98d337eb0a9435() {
    this._r02061bf953aeac &&
      (Dr.removeEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773), (this._r02061bf953aeac = !1));
  }
  _rc2f3ecf1800e9e = n((e) => {
    this._r8f181e40a052ce();
  }, "_rc2f3ecf1800e9e");
  _r10a570e6c32773 = n((e) => {
    this._r8f181e40a052ce();
  }, "_r10a570e6c32773");
  _r8f181e40a052ce() {
    if (this._rc85c3d1f1f080f == null || !this.habbiconsEnabled()) {
      this._r4607a178db5f1d();
      return;
    }
    let e = this._rbc63640ade775e();
    if (e <= 0) {
      this._r4607a178db5f1d();
      return;
    }
    if (this._rf8cc7b52bd648d === e && this._re91da0eb9d0264 != null) {
      this._rc85c3d1f1f080f.visible = !0;
      return;
    }
    let r = Dr._ra1088bef97043d(e);
    if (r == null) {
      this._r4607a178db5f1d();
      return;
    }
    this._rcea38d10bd8e4a(e, r);
  }
  _rcea38d10bd8e4a(e, r) {
    let t = new A(r.width, r.height, !0, 0);
    (t.copyPixels(r, r.rect, new E(), null, null, !0),
      this._r4607a178db5f1d(),
      (this._rf8cc7b52bd648d = e),
      (this._re91da0eb9d0264 = t),
      (this._rc85c3d1f1f080f.bitmap = t),
      (this._rc85c3d1f1f080f.visible = !0),
      this._rc85c3d1f1f080f.invalidate());
  }
  _r4607a178db5f1d() {
    let e = this._re91da0eb9d0264;
    ((this._rf8cc7b52bd648d = 0),
      (this._re91da0eb9d0264 = null),
      this._rc85c3d1f1f080f != null &&
        ((this._rc85c3d1f1f080f.bitmap = null),
        (this._rc85c3d1f1f080f.visible = !1),
        this._rc85c3d1f1f080f.invalidate()),
      e?.dispose());
  }
  _rbc63640ade775e() {
    let e = this._r95cd89d9fe7aac;
    if (e == null || !e._r5284c2325947d5) return 0;
    let r = e.recentHabbiconIds;
    if (r != null && r.length > 0) {
      let t = this._r47e8c50d59b608(e, r[0] | 0);
      if (t > 0) return t;
    }
    return this._rda910c6e68860e(e);
  }
  _r47e8c50d59b608(e, r) {
    if (r <= 0) return 0;
    let t = e._r687385b79e1a1b(r);
    if (t != null && t.collectionId > 0) return t.collectionId;
    for (let i of e.HabbiconAlbumModel ?? [])
      if (i != null && i.var_583 === r) return i.collectionId;
    return 0;
  }
  _rda910c6e68860e(e) {
    return e.HabbiconAlbumModel?.[0]?.collectionId ?? 0;
  }
  updateHabbiconUnseenCounter() {
    if (this._r13a0adcbc7a0f4 == null || !this.habbiconsEnabled() || this._r7f1aaf10144e02?.visible) {
      this.var_214 != null && (this.var_214.visible = !1);
      return;
    }
    let e = this._r95cd89d9fe7aac?._r5b4170279bf41a ?? 0;
    if (this.var_214 == null) {
      let t = this._r13a0adcbc7a0f4;
      if (
        typeof t.addChild != "function" ||
        ((this.var_214 = this.widget.windowManager.createUnseenItemCounter()),
        this.var_214 == null)
      )
        return;
      (t.addChild(this.var_214),
        (this.var_214.x = t.width - this.var_214.width - 2),
        (this.var_214.y = 2));
    }
    let r = this.var_214.findChildByName(class_4005.VALUE_ELEMENT_NAME);
    (r != null && (r.caption = String(e)), (this.var_214.visible = e > 0));
  }
  get _r95cd89d9fe7aac() {
    return this.var_17?._re5ac22f3053d74?._r95cd89d9fe7aac ?? null;
  }
  static isWindowInTree(e, r) {
    for (; e != null;) {
      if (e === r) return !0;
      e = e.parent;
    }
    return !1;
  }
  _r613c66aeb9e356(e) {
    e.type === u.OVER
      ? (this.onHelpButtonMouseEvent != null && (this.onHelpButtonMouseEvent.visible = !0), this.stopHelpButtonHideTimer())
      : e.type === u.OUT && !this._r0351c28beac7a7 && this._r40eea2775c3757();
  }
  _r40eea2775c3757() {
    (this.stopHelpButtonHideTimer(),
      (this._rc878587f8b551a = new _i05394ecc0c0c4d(400, 1)),
      this._rc878587f8b551a.addEventListener(DeBouncer.addEventListener, this._r22d042ce94150a),
      this._rc878587f8b551a.start());
  }
  _r316f69af84052e(e) {
    (!this._r0351c28beac7a7 && this.onHelpButtonMouseEvent != null && (this.onHelpButtonMouseEvent.visible = !1),
      this.stopHelpButtonHideTimer());
  }
  stopHelpButtonHideTimer() {
    this._rc878587f8b551a != null &&
      (this._rc878587f8b551a.stop(),
      this._rc878587f8b551a.removeEventListener(DeBouncer.addEventListener, this._r22d042ce94150a),
      (this._rc878587f8b551a = null));
  }
}

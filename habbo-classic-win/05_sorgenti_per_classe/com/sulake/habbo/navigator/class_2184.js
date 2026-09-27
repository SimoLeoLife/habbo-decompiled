// Extracted from HabboAirLauncher.deobf.js, line 261060.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/class_2184.as
// Obfuscated name: _ie95d9a9afaa618

class {
  static {
    n(this, "class_2184");
  }
  _navigator;
  _r78639bb9f469e9 = [];
  constructor(e) {
    ((this._navigator = e), this._r30c6713a5c0c0c());
  }
  _r30c6713a5c0c0c() {
    let e = this._navigator.communication;
    (e.connection.addMessageEvent(new UnkMessageEvent_0b8d88(this._ra15d96930b149e(this._rd70abc8fad4cbd.bind(this)))),
      e.connection.addMessageEvent(new class_2914(this._ra15d96930b149e(this._rf003355750cfba.bind(this)))),
      e.connection.addMessageEvent(new UnkMessageEvent_d2a2e2(this._ra15d96930b149e(this._r218d36bcd42a2b.bind(this)))),
      e.connection.addMessageEvent(new class_3155(this._ra15d96930b149e(this._r4ce09ec4e53e77.bind(this)))),
      e.connection.addMessageEvent(new UnkMessageEvent_477c5e(this._ra15d96930b149e(this._rf5b6a7f64c4898.bind(this)))),
      e.connection.addMessageEvent(new UnkMessageEvent_71ce07(this._ra15d96930b149e(this.onGroupDetails.bind(this)))),
      e.connection.addMessageEvent(new UnkMessageEvent_e56360(this._ra15d96930b149e(this._r1b1a2e97c8a61a.bind(this)))),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3451(this._ra15d96930b149e(this._r0e3fc712c9c870.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_c01c57(this._ra15d96930b149e(this._r95965babbc3f65.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_5869bc(this._ra15d96930b149e(this._raa383c8d09de9f.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_3c3ba4(this._ra15d96930b149e(this._r53cd2e082dfa43.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_2ae9aa(this._ra15d96930b149e(this._r13446e181cb819.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_ca12af(this._ra15d96930b149e(this._r411f45897347fc.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3030(this._ra15d96930b149e(this.onCanCreateRoomEventEvent.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_1929(this._ra15d96930b149e(this.onRoomExit.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_fd1e8c(this._ra15d96930b149e(this.onFlatCreated.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2467(this._ra15d96930b149e(this._r182d2b33c2a985.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_5c77a0(this._ra15d96930b149e(this._rcbf87d7a3fbb14.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2955(this._ra15d96930b149e(this._rfb30d22f43156f.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3543(this._ra15d96930b149e(this._r340043d02c8999.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3128(this._ra15d96930b149e(this.onRoomSettingsSaved.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2882(this._ra15d96930b149e(this.onRoomSettingsSaveError.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_42cb04(this._ra15d96930b149e(this._r1039172cd73752.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_6d077c(this._ra15d96930b149e(this._r2fbab0812f6364.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3712(this._ra15d96930b149e(this._r81675265dd4528.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3058(this._ra15d96930b149e(this._rd1f8425f619823.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2794(this._ra15d96930b149e(this._re4c246940dd332.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_dca033(this._ra15d96930b149e(this._rf4bc1074be4f4c.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_296493(this._ra15d96930b149e(this._rd3fb7581946de2.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_616fb7(this._ra15d96930b149e(this._r67879c2524c208.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_9c953a(this._ra15d96930b149e(this._r347e7bade5088f.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_d99543(this._ra15d96930b149e(this._r7e9c99b4fd1ffc.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_f3e0ff(this._ra15d96930b149e(this._re0e4ff5eded283.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_ebe499(this._ra15d96930b149e(this._rdaf7125e792b66.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2954(this._ra15d96930b149e(this._r933174a4959eb1.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_3481(this._ra15d96930b149e(this._r2036620ae0ca3a.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2420(this._ra15d96930b149e(this._re8f0b93b86b23e.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_12d5f6(this._ra15d96930b149e(this.onCantConnect.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_b019fd(this._ra15d96930b149e(this._re2d4f827ef2413.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_b1cf72(this._ra15d96930b149e(this._r89804fb6520a29.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_920848(this._ra15d96930b149e(this._ref295b8752acf7.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_84af07(this._ra15d96930b149e(this._r7193beda83847b.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new UnkMessageEvent_1d49f0(this._ra15d96930b149e(this._rf9f25b20917b26.bind(this)))),
      ),
      this._r78639bb9f469e9.push(
        e._r2e106e2349a0b6(new class_2027(this._ra15d96930b149e(this.onRoomInfo.bind(this)))),
      ));
  }
  _r66704af929412c() {
    let e = this._navigator.communication;
    for (let r of this._r78639bb9f469e9) e._r7668362bf55fdd(r);
    this._r78639bb9f469e9 = [];
  }
  get data() {
    return this._navigator.data;
  }
  get _r8d305e819155a0() {
    return this._navigator._r8d305e819155a0;
  }
  _rd70abc8fad4cbd(e) {
    this._navigator.initialize(e.getParser());
  }
  _r218d36bcd42a2b(e) {
    let r = e.getParser()._r439a40a83f5cbb;
    r != null && this._navigator._rc5e08d1ba0be95(new UnkClass_3b3661(r));
  }
  _rf003355750cfba(e) {
    this._navigator._r9a09514347d38f(e.getParser());
  }
  _r4ce09ec4e53e77(e) {
    this._navigator._rbd26aa6217eca8(e.getParser());
  }
  _rf5b6a7f64c4898(e) {
    this._navigator._rf5b6a7f64c4898(e.getParser());
  }
  onGroupDetails(e) {
    this._navigator.onGroupDetails(e.data);
  }
  _r1b1a2e97c8a61a(e) {
    this._navigator._r1b1a2e97c8a61a(e.getParser()._r126d1d667eed47);
  }
  _rf9f25b20917b26(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_B_8945f6);
    if (r == null) return;
    let t = this._navigator.data._rd27e27c96c37cd;
    t != null &&
      ((t._r01bc015c33ec89 = r._rd859977210b848),
      this._r8d305e819155a0._r878c741bfdd13d?.refreshButtons(t));
  }
  _re0e4ff5eded283(e) {}
  _r53cd2e082dfa43(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_5c1bd2);
    r != null && r.data != null && (this.data._rda9bf5a0280319 = r.data);
  }
  _r0e3fc712c9c870(e) {
    let r = ClassUtils.getParser(e, class_2706);
    r != null &&
      (r.data != null && (this.data._r9df01b7c78bf2d = r.data),
      (this.data._ra175262e310a69 = r._ra175262e310a69),
      (this.data._r814554d59f42ae = r._r814554d59f42ae));
  }
  _r95965babbc3f65(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_211304);
    if (r == null) return;
    let t = r.data;
    this.data._rf09e8697962ff2 = t;
  }
  _raa383c8d09de9f(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_fd5968);
    if (r == null) return;
    let t = r.data;
    this.data._rf7fd60d8951b6a = t;
  }
  _r13446e181cb819(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_f7073f);
    r != null &&
      ((this.data._rb6c91108c7cf2d = r.data != null && r.data._rba523b434ac95e > 0 ? r.data : null),
      this._r8d305e819155a0._r41a6589dfa9df5.refresh());
  }
  _r411f45897347fc(e) {
    ((this.data._rb6c91108c7cf2d = null), this._r8d305e819155a0._r41a6589dfa9df5.refresh());
  }
  onCanCreateRoomEventEvent(e) {
    let r = ClassUtils.getParser(e, class_3755);
    if (r == null) return;
    if (r.canCreateEvent) {
      this._r8d305e819155a0.SimpleAlertView.show();
      return;
    }
    new SimpleAlertView_(
      this._r8d305e819155a0,
      "${navigator.cannotcreateevent.title}",
      `\${navigator.cannotcreateevent.error.${r.errorCode}}`,
    ).show();
  }
  onRoomInfo(e) {
    let r = ClassUtils.getParser(e, class_2052);
    r != null &&
      !r._r545a567b7e1354 &&
      !r._r7e3bf08910bca1 &&
      r.data != null &&
      this._navigator.onRoomInfo(r.data);
  }
  onFlatCreated(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_IS_1dcc58);
    r != null &&
      (ErrorReportStorage.addDebugData("IncomingEvent", `Flat created: ${r.flatId}, ${r._rd7b91c8da610c2}`),
      (this.data._r2a7631cbfb3c51 = r.flatId),
      this._r8d305e819155a0.goToRoom(r.flatId, !0),
      this._r8d305e819155a0._r970f774dfe2577.reloadRoomList(We._r8a4642632c386a),
      this._r8d305e819155a0._r38c44cbd7deb08(),
      this._r8d305e819155a0._r4d7124da99408e());
  }
  onRoomExit(e) {
    (this.data.onRoomExit(),
      this._r8d305e819155a0._r878c741bfdd13d.close(),
      this._r8d305e819155a0._r41a6589dfa9df5.close(),
      this._r8d305e819155a0.SimpleAlertView.close(),
      this._r8d305e819155a0.roomSettingsCtrl.close(),
      this._r8d305e819155a0._r515faa3e76c305.close(),
      this._navigator.getBoolean("news.auto_popup.enabled") && Ae.openNews());
  }
  _r182d2b33c2a985(e) {
    let r = ClassUtils.getParser(e, class_2871);
    if (r == null) return;
    ((this._navigator.data.categories = r.nodes ?? []),
      this._r8d305e819155a0.tabs._r554ac914236787(We._r3788a24f86509c)?.tabSelected?.prepareRoomCategories());
  }
  _rcbf87d7a3fbb14(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_I_8f3b42);
    r != null && (this._navigator.data._rce09be3c985bc6 = r._rce09be3c985bc6 ?? []);
  }
  _rfb30d22f43156f(e) {
    try {
      let r = ClassUtils.getParser(e, class_3579);
      if (r == null) return;
      r.data != null && this._r8d305e819155a0.roomSettingsCtrl.onRoomSettings(r.data);
    } catch {}
  }
  _r2fbab0812f6364(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_IS_769d7e);
    r != null && this._r8d305e819155a0._r515faa3e76c305._r2fbab0812f6364(r._rafac613a60659d);
  }
  _r340043d02c8999(e) {}
  onRoomSettingsSaved(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_I_2d3ddc);
    r != null &&
      (ErrorReportStorage.addDebugData("IncomingEvent", `Room settings saved: ${r.roomId}`),
      this._r8d305e819155a0._r970f774dfe2577.reloadRoomList(We._r8a4642632c386a));
  }
  onRoomSettingsSaveError(e) {
    let r = ClassUtils.getParser(e, class_3716);
    r != null && this._r8d305e819155a0.roomSettingsCtrl.onRoomSettingsSaveError(r.roomId, r.errorCode, r.info);
  }
  _r1039172cd73752(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_I_cefa1b);
    r != null && this._r8d305e819155a0.send(new class_2142(r.flatId, !1, !1));
  }
  _r81675265dd4528(e) {
    let r = ClassUtils.getParser(e, class_3477);
    r != null && this._navigator.data._r81675265dd4528(r);
  }
  _rd1f8425f619823(e) {
    let r = ClassUtils.getParser(e, class_3759);
    r != null &&
      (this.data.favouriteChanged(r.flatId, r.added),
      this._r8d305e819155a0._r878c741bfdd13d.reload(),
      this._r8d305e819155a0._r970f774dfe2577.refresh());
  }
  _re4c246940dd332(e) {
    let r = ClassUtils.getParser(e, class_2963);
    r != null &&
      ((this.data._r3dfd89b26af6cd = r._r3dfd89b26af6cd),
      (this.data._raef9ebdeb67451 = !0),
      this._navigator.view._r04da86a9df65db(),
      this._r8d305e819155a0._r878c741bfdd13d.reload());
  }
  _rf4bc1074be4f4c(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_II_a3ce54);
    r != null && this._r8d305e819155a0.roomSettingsCtrl._rf4bc1074be4f4c(r.roomId, r.controllers);
  }
  _rd3fb7581946de2(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_I_a3a5fe);
    r != null &&
      r.data != null &&
      this._r8d305e819155a0.roomSettingsCtrl._rd3fb7581946de2(r.flatId, r.data);
  }
  _r67879c2524c208(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_II_5f9c64);
    r != null && this._r8d305e819155a0.roomSettingsCtrl._r67879c2524c208(r.flatId, r.userId);
  }
  _r347e7bade5088f(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_II_509d0d);
    r != null && this._r8d305e819155a0.roomSettingsCtrl._r347e7bade5088f(r.roomId, r._r8775ced31d65fd);
  }
  _r7e9c99b4fd1ffc(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_II_22161f);
    r != null && this._r8d305e819155a0.roomSettingsCtrl._r7e9c99b4fd1ffc(r.roomId, r.userId);
  }
  _r933174a4959eb1(e) {
    e.userName === "" && this._r8d305e819155a0.doorbell.showWaiting();
  }
  _r2036620ae0ca3a(e) {
    let r = ClassUtils.getParser(e, class_3704);
    r != null && (r.userName == null || r.userName.length === 0) && this._r8d305e819155a0.doorbell.hide();
  }
  _rdaf7125e792b66(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_IB_a670a3);
    r != null &&
      ((this.data._rd8d11d6fc471c1 = r.rating),
      (this.data._r43a02485c61e00 = r._r43a02485c61e00),
      this._r8d305e819155a0._r878c741bfdd13d.reload());
  }
  _re8f0b93b86b23e(e) {
    let r = ClassUtils.getParser(e, class_2509);
    r != null &&
      (r.userName == null || r.userName === "") &&
      this._r8d305e819155a0.doorbell.showNoAnswer();
  }
  _r89804fb6520a29(e) {
    this.data.friendList._r89804fb6520a29(e);
  }
  _re2d4f827ef2413(e) {
    (this.data.friendList._re2d4f827ef2413(e),
      this._r8d305e819155a0.roomSettingsCtrl._re2d4f827ef2413());
  }
  _ref295b8752acf7(e) {
    let r = e.getParser().data;
    r != null && (this.data._r296e1461c77065 = r);
  }
  _r7193beda83847b(e) {
    this._r8d305e819155a0._r545ad49cf926cc();
  }
  onCantConnect(e) {
    let r = ClassUtils.getParser(e, tf);
    if (r == null) return;
    let t;
    switch (r.reason) {
      case tf.const_806:
        t = new SimpleAlertView_(
          this._r8d305e819155a0,
          "${navigator.guestroomfull.title}",
          "${navigator.guestroomfull.text}",
        );
        break;
      case tf.const_873:
        t = new SimpleAlertView_(this._r8d305e819155a0, "${room.queue.error.title}", `\${room.queue.error.${r.parameter}}`);
        break;
      case tf.const_493:
        t = new SimpleAlertView_(this._r8d305e819155a0, "${navigator.banned.title}", "${navigator.banned.text}");
        break;
      case tf.const_558:
        t = new SimpleAlertView_(this._r8d305e819155a0, "${navigator.blocked.title}", "${navigator.blocked.text}");
        break;
      default:
        t = new SimpleAlertView_(this._r8d305e819155a0, "${room.queue.error.title}", "${room.queue.error.title}");
        break;
    }
    (t.show(), this._r8d305e819155a0.send(new class_2551()));
    let i = new HabboToolbarEvent(HabboToolbarEvent.TOOLBAR_CLICK);
    i._re9c693c8b69b04 = Me.RECEPTION;
    let o = this._r8d305e819155a0.toolbar?.events;
    o?.dispatchEvent != null && o.dispatchEvent(i);
  }
  _ra15d96930b149e(e) {
    return e;
  }
}

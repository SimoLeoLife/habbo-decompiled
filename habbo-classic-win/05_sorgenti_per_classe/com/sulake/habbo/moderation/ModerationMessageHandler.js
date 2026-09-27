// Extracted from HabboAirLauncher.deobf.js, line 250454.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/ModerationMessageHandler.as
// Obfuscated name: _i0f04adb6c7a201

class {
  constructor(e) {
    this._moderationManager = e;
    let r = this._moderationManager.connection;
    (r?.addMessageEvent(new class_3692(this._rb3a38c902946de)),
      r?.addMessageEvent(new UnkMessageEvent_bc8b6e(this._re8c835f7ef45a9)),
      r?.addMessageEvent(new class_2925(this._ra4d72521701362)),
      r?.addMessageEvent(new class_3110(this._rcc0c5334d207cc)),
      r?.addMessageEvent(new class_3810(this._rcf717e3350798b)),
      r?.addMessageEvent(new UnkMessageEvent_684452(this.onUserInfo)),
      r?.addMessageEvent(new UnkMessageEvent_11a7ec(this.onRoomInfo)),
      r?.addMessageEvent(new UnkMessageEvent_f3a502(this._rb518c60c376a0a)),
      r?.addMessageEvent(new UnkMessageEvent_1ef5e0(this._r3e3e0a9b65fe93)),
      r?.addMessageEvent(new UnkMessageEvent_a9eb9b(this._rf8d831b677e2f9)),
      r?.addMessageEvent(new UnkMessageEvent_9faf68(this.onRoomVisits)),
      r?.addMessageEvent(new class_2117(this.onRoomEnter)),
      r?.addMessageEvent(new class_1929(this.onRoomExit)),
      r?.addMessageEvent(new class_3174(this._r958be91cc75e86)),
      r?.addMessageEvent(new class_2464(this._rec0cac594b71f0)),
      r?.addMessageEvent(new UnkMessageEvent_7cb02b(this._rf8506de21fc735)),
      r?.addMessageEvent(new class_1939(this._r09330674c979c8)));
  }
  static {
    n(this, "ModerationMessageHandler");
  }
  _r49bac3217bfe3b = [];
  _re42627d33666d9 = [];
  _r4fe4c910178196 = [];
  _r3a2bd724a315d5 = [];
  _r8add42acc9eb5f = [];
  _rfebb35fcd4a372 = [];
  _r22a875d9088e8a(e) {
    this._r49bac3217bfe3b.push(e);
  }
  _r18d38cc4df7a9e(e) {
    this._r49bac3217bfe3b = this._r49bac3217bfe3b.filter((r) => r !== e);
  }
  _rb133fda49c12e1(e) {
    this._r8add42acc9eb5f.push(e);
  }
  _r5dd229e3da10fa(e) {
    this._r8add42acc9eb5f = this._r8add42acc9eb5f.filter((r) => r !== e);
  }
  _r8e75f3f565f5b4(e) {
    this._rfebb35fcd4a372.push(e);
  }
  removeRoomEnterListener(e) {
    this._rfebb35fcd4a372 = this._rfebb35fcd4a372.filter((r) => r !== e);
  }
  _r1286a18737519d(e) {
    this._re42627d33666d9.push(e);
  }
  _r8fff74dd4932f5(e) {
    this._re42627d33666d9 = this._re42627d33666d9.filter((r) => r !== e);
  }
  _r9b93271554b3b6(e) {
    this._r3a2bd724a315d5.push(e);
  }
  _r97d3e93394e7ad(e) {
    this._r3a2bd724a315d5 = this._r3a2bd724a315d5.filter((r) => r !== e);
  }
  _rd692b381641435(e) {
    this._r4fe4c910178196.push(e);
  }
  _r9d57cbb6b580fd(e) {
    this._r4fe4c910178196 = this._r4fe4c910178196.filter((r) => r !== e);
  }
  _rb3a38c902946de = n((e) => {
    let t = e.getParser()?.issueData ?? null;
    t != null &&
      (this._moderationManager._r74ed78993f8dd6.playSound(t),
      this._moderationManager._r74ed78993f8dd6.updateIssue(t));
  }, "_rb3a38c902946de");
  _re8c835f7ef45a9 = n((e) => {
    let t = e.getParser()?.data;
    if (t != null) {
      for (let i of t.issues ?? []) this._moderationManager._r74ed78993f8dd6.updateIssue(i);
      (this._moderationManager._r74ed78993f8dd6._r4dc2f58a5b650c(),
        (this._moderationManager.initMsg = t),
        this._moderationManager._rd4ccac60921434.show());
    }
  }, "_re8c835f7ef45a9");
  _ra4d72521701362 = n((e) => {
    let r = e.getParser();
    r != null &&
      this._moderationManager._r74ed78993f8dd6._r89ebf2a59f5994(
        r._r02a1531c5600e7,
        r._r9dc06e4415e238,
        r._rd5507bbbf34586,
        r._r47a31970387a01,
      );
  }, "_ra4d72521701362");
  _rcc0c5334d207cc = n((e) => {
    let r = ClassUtils.getParser(e, class_2499);
    if (r == null) return;
    let t = !0;
    (this._moderationManager._r74ed78993f8dd6._r5f60613dfe5570(r.issues) &&
      r.retryEnabled &&
      r.retryCount < 10 &&
      ((t = !1),
      this._moderationManager._r74ed78993f8dd6.autoPick(
        "pick failed retry",
        r.retryEnabled,
        r.retryCount,
      )),
      t &&
        this._moderationManager.windowManager.alert("Error", "Issue picking failed", 0, this._r9d8a83a2f57c04));
  }, "_rcc0c5334d207cc");
  _rcf717e3350798b = n((e) => {
    let r = ClassUtils.getParser(e, class_2428);
    r != null && this._moderationManager._r74ed78993f8dd6._r8637a9a49b851b(r.issueId);
  }, "_rcf717e3350798b");
  onUserInfo = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_02ab60);
    if (r != null && r.data != null) for (let t of this._r49bac3217bfe3b) t.onUserInfo(r.data);
  }, "onUserInfo");
  onRoomInfo = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_18a4b2);
    if (r != null && r.data != null) for (let t of this._r8add42acc9eb5f) t.onRoomInfo(r.data);
  }, "onRoomInfo");
  _rb518c60c376a0a = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_50d50d);
    if (r == null || r.data == null) return;
    let t = [r.data._rc99187437356a9],
      i = new Map();
    (i.set(r.data.var_5439, 0),
      i.set(r.data.reportedUserId, 1),
      this.onChatlog(
        `Call For Help Evidence #${r.data._r61a8bd3554b582}`,
        WindowTracker.const_1236,
        r.data.var_4513,
        t,
        i,
      ));
  }, "_rb518c60c376a0a");
  _rf8d831b677e2f9 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_547bd4);
    r != null &&
      r.data != null &&
      this.onChatlog(
        `Room Chatlog: ${r.data.roomName}`,
        WindowTracker.const_1136,
        r.data.roomId,
        [r.data],
        new Map(),
      );
  }, "_rf8d831b677e2f9");
  _r3e3e0a9b65fe93 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_efd565);
    if (r == null || r.data == null) return;
    let t = new Map();
    (t.set(r.data.userId, 0),
      this.onChatlog(
        `User Chatlog: ${r.data.userName}`,
        WindowTracker.const_1070,
        r.data.userId,
        r.data.rooms,
        t,
      ));
  }, "_r3e3e0a9b65fe93");
  onChatlog(e, r, t, i, s) {
    let o = this._r3a2bd724a315d5.concat();
    for (let d of o) d.onChatlog(e, r, t, i, s);
  }
  onRoomVisits = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_a66d73);
    if (r != null && r.data != null) for (let t of this._re42627d33666d9.concat()) t.onRoomVisits(r.data);
  }, "onRoomVisits");
  _rec0cac594b71f0 = n((e) => {
    let r = ClassUtils.getParser(e, class_3055);
    if (r == null) return;
    let t = r._r41778eaa3b9271,
      i = r._r2f36f47a427424;
    if (t == null || i == null) return;
    let s = [];
    for (let c of t.getKeys()) s.push(new UnkClass_6aa3e3(c, t.getValue(c) ?? "", i.getValue(c) ?? ""));
    let o = 1;
    new Dpe(this._moderationManager, o).show();
    for (let c of this._r4fe4c910178196.concat()) c._r5fd41ee35bc422(o, s);
  }, "_rec0cac594b71f0");
  _rf8506de21fc735 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_II_610993);
    r != null &&
      r._r795b64717e95be != null &&
      this._moderationManager._r74ed78993f8dd6.updateSanctionData(
        r.issueId,
        r._r84fb480914f27d,
        r._r795b64717e95be,
      );
  }, "_rf8506de21fc735");
  _r09330674c979c8 = n((e) => {
    let r = ClassUtils.getParser(e, class_2046);
    r != null && (this._moderationManager._r3ce06be9af0ee1 = r._callForHelpCategories);
  }, "_r09330674c979c8");
  onRoomEnter = n((e) => {
    let r = ClassUtils.getParser(e, class_2161);
    if (r != null) {
      ((this._moderationManager._ra384cb7661fc37 = r.guestRoomId),
        this._moderationManager._rd4ccac60921434.guestRoomEntered(r));
      for (let t of this._rfebb35fcd4a372) t.onRoomChange();
    }
  }, "onRoomEnter");
  onRoomExit = n((e) => {
    ((this._moderationManager._ra384cb7661fc37 = 0), this._moderationManager._rd4ccac60921434.roomExited());
    for (let r of this._rfebb35fcd4a372) r.onRoomChange();
  }, "onRoomExit");
  _r958be91cc75e86 = n((e) => {
    let r = ClassUtils.getParser(e, class_3583);
    r != null &&
      (r.success
        ? this._moderationManager.connection?.send(new class_2352(r.userId))
        : this._moderationManager.windowManager.alert(
            "Alert",
            "Moderation action failed. If you tried to ban a user, please check if the user is already banned.",
            0,
            this._r9d8a83a2f57c04,
          ));
  }, "_r958be91cc75e86");
  _r9d8a83a2f57c04 = n((e, r) => {
    e.dispose();
  }, "_r9d8a83a2f57c04");
}

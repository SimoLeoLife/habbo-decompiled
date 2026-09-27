// Extracted from HabboAirLauncher.deobf.js, line 344516.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifffc223d172097

class {
    static {
      n(this, "UnkClass_fffc22_______");
    }
    static {
      ml(this, "UnkClass_fffc22_______");
    }
    _roomEvents;
    _messageEvents;
    constructor(e) {
      ((this._roomEvents = e),
        (this._messageEvents = []),
        this.addMessageEvent(new class_2407((r) => this.onOpen(r))),
        this.addMessageEvent(new UnkMessageEvent_4b9b0a((r) => this._r60b8f2764769d2(r))),
        this.addMessageEvent(new UnkMessageEvent_cac49e((r) => this._r8b519a48926452(r))),
        this.addMessageEvent(new UnkMessageEvent_189d98((r) => this._r713d21d318b9ec(r))),
        this.addMessageEvent(new UnkMessageEvent_ba739b((r) => this._rfe0d5837b61dea(r))),
        this.addMessageEvent(new UnkMessageEvent_69fb68((r) => this._r34cc6c4a46887f(r))),
        this.addMessageEvent(new UnkMessageEvent_e72a0e((r) => this._r17c2e4aa56cb87(r))),
        this.addMessageEvent(new class_1926((r) => this._r6e2e75987c854e(r))),
        this.addMessageEvent(new class_1929(this.onRoomExit)),
        this.addMessageEvent(new UnkMessageEvent_class_3671((r) => this._re5cd403b9fba96(r))),
        this.addMessageEvent(new class_3693((r) => this._r882bc14183e442(r))),
        this.addMessageEvent(new class_2361((r) => this._rb68cf2af5acc16(r))),
        this.addMessageEvent(new UnkMessageEvent_34127d(this.onSaveSuccess)),
        this.addMessageEvent(new UnkMessageEvent_ad699d((r) => this._r9cafa9a1789cdf(r))));
    }
    get disposed() {
      return this._roomEvents == null;
    }
    addMessageEvent(e) {
      this._messageEvents?.push(this._roomEvents.communication._r2e106e2349a0b6(e));
    }
    dispose() {
      if (this.disposed) return;
      let e = this._roomEvents.communication;
      if (this._messageEvents != null) for (let r of this._messageEvents) e._r7668362bf55fdd(r);
      ((this._messageEvents = null), (this._roomEvents = null));
    }
    onOpen = ml((e) => {
      let r = ClassUtils.getParser(e, class_2876);
      r != null && this._roomEvents.send(new class_3823(r.stuffId));
    }, "onOpen");
    _r60b8f2764769d2 = ml((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_87a6fb);
      r != null && this._roomEvents.presetManager._r80352ae20b6ca1(r._r6d152efa3f4194);
    }, "_r60b8f2764769d2");
    _r8b519a48926452 = ml((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_6d2c2b);
      r != null && this._roomEvents.presetManager._r80352ae20b6ca1(r._r6d152efa3f4194);
    }, "_r8b519a48926452");
    _r713d21d318b9ec = ml((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_f90b3d);
      r != null && this._roomEvents.presetManager._r80352ae20b6ca1(r._r6d152efa3f4194);
    }, "_r713d21d318b9ec");
    _rfe0d5837b61dea = ml((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_338fee);
      r != null && this._roomEvents.presetManager._r80352ae20b6ca1(r._r6d152efa3f4194);
    }, "_rfe0d5837b61dea");
    _r34cc6c4a46887f = ml((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_dc9795);
      r != null && this._roomEvents.presetManager._r80352ae20b6ca1(r._r6d152efa3f4194);
    }, "_r34cc6c4a46887f");
    _r17c2e4aa56cb87 = ml((e) => {
      let r = ClassUtils.getParser(e, UnkMessageParser_empty_ec5697);
      r != null && this._roomEvents.presetManager._r80352ae20b6ca1(r._r6d152efa3f4194);
    }, "_r17c2e4aa56cb87");
    _r6e2e75987c854e = ml((e) => {
      let r = ClassUtils.getParser(e, class_1833);
      r != null && (this._roomEvents.userName = r.name);
    }, "_r6e2e75987c854e");
    onRoomExit = ml(() => {
      this._roomEvents.presetManager.close();
    }, "onRoomExit");
    _re5cd403b9fba96 = ml((e) => {
      let r = ClassUtils.getParser(e, class_3671);
      r != null && this._roomEvents.presetManager._r8ab2f5feb7f019(r.id);
    }, "_re5cd403b9fba96");
    _r882bc14183e442 = ml((e) => {
      let r = ClassUtils.getParser(e, class_3112);
      if (r != null) {
        if (r.reason === class_3693.const_1393) {
          this._roomEvents.windowManager.alert(
            this._roomEvents.localization.getLocalization("wiredfurni.rewardsuccess.title"),
            this._roomEvents.localization.getLocalization("wiredfurni.rewardsuccess.body"),
            0,
            null,
          );
          return;
        }
        if (r.reason === class_3693.const_319) {
          this._roomEvents.windowManager.alert(
            this._roomEvents.localization.getLocalization("wiredfurni.badgereceived.title"),
            this._roomEvents.localization.getLocalization("wiredfurni.badgereceived.body"),
            0,
            null,
          );
          return;
        }
        this._roomEvents.windowManager.alert(
          this._roomEvents.localization.getLocalization("wiredfurni.rewardfailed.title"),
          this._roomEvents.localization.getLocalization(`wiredfurni.rewardfailed.reason.${r.reason}`),
          0,
          null,
        );
      }
    }, "_r882bc14183e442");
    _rb68cf2af5acc16 = ml((e) => {
      let r = ClassUtils.getParser(e, class_3191);
      if (r == null) return;
      let t = new B();
      for (let d of r.parameters ?? []) t.add(d.key, d.value);
      let i = r.localizationKey ?? "",
        s = this._roomEvents.localization.getLocalizationWithParamMap(i, i, t),
        o = this._roomEvents.localization.getLocalization("wiredfurni.error.title", "Update failed");
      (this._roomEvents.windowManager.alert(o, s, 0, null),
        this._roomEvents.presetManager._r773acaa2c4a0c1());
    }, "_rb68cf2af5acc16");
    onSaveSuccess = ml(() => {
      this._roomEvents.presetManager.onSaveSuccess();
    }, "onSaveSuccess");
    _r9cafa9a1789cdf = ml((e) => {
      this._roomEvents.presetManager._r9cafa9a1789cdf(e);
    }, "_r9cafa9a1789cdf");
  }

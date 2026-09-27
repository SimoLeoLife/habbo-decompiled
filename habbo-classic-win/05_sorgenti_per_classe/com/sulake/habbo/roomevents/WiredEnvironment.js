// Extracted from HabboAirLauncher.deobf.js, line 375158.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/WiredEnvironment.as
// Obfuscated name: _i6697a29606b5ec

class a {
  static {
    n(this, "WiredEnvironment");
  }
  static _r462076e3e70b94 = 0;
  static _raf68fcfca32676 = 1;
  static CLICK_USER_PASS_THROUGH = 2;
  static _r6dcba11f7ff159 = 0;
  static _r3d572d4d768e52 = 1;
  static const_1188 = "wired_env";
  static CLICK_SETTINGS_NOTIFICATION_TOGGLE_ID = "wired_click_settings_toggle";
  _disposed = !1;
  _events;
  _messageEvents;
  var_2058 = !1;
  var_1625 = [];
  _ra6700bdfad3e28 = a._r462076e3e70b94;
  _rb7eca8f1a31b59 = a._r6dcba11f7ff159;
  _r7e8aada91704b9 = !1;
  _rd78242902ced7b = null;
  _r365716ceefd236 = !1;
  constructor(e) {
    ((this._events = e),
      (this._messageEvents = [
        new class_3186((r) => this._r0df463dd152d8b(r)),
        new class_3588((r) => this._rf02a354649e54d(r)),
        new class_3301((r) => this._r7b3e97258947cb(r)),
      ]),
      this._r2c15b16e6eba6e());
  }
  get disposed() {
    return this._disposed;
  }
  get achievements() {
    return this.var_1625;
  }
  get _ra685de879d48b0() {
    return this.var_2058;
  }
  get _rb946f43ae961f1() {
    return this._r7e8aada91704b9 ? a._r462076e3e70b94 : this._ra6700bdfad3e28;
  }
  get _ra875e5648f4700() {
    return this._rb7eca8f1a31b59;
  }
  _rf73cf1d42807ed() {
    let e = this._r7e8aada91704b9;
    (this._r73242dffbdcf8e(),
      (this._r7e8aada91704b9 = !1),
      this._r18214326bbf267(),
      (this._ra6700bdfad3e28 !== a._r462076e3e70b94 || this._rb7eca8f1a31b59 !== a._r6dcba11f7ff159 || e) &&
        ((this._ra6700bdfad3e28 = a._r462076e3e70b94),
        (this._rb7eca8f1a31b59 = a._r6dcba11f7ff159),
        this.applyClickSettings(this._ra6700bdfad3e28, this._rb7eca8f1a31b59)));
  }
  clear() {
    this.var_2058 = !1;
  }
  _ra4896d0bc54959() {
    this._r2c15b16e6eba6e();
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      (this.var_2058 = !1),
      this._r18214326bbf267(),
      this._r71c4346a186f38(),
      (this._messageEvents = null),
      (this._events = null));
  }
  _r2c15b16e6eba6e() {
    if (!(this._r365716ceefd236 || this._events?.communication == null)) {
      for (let e of this._messageEvents ?? []) this._events.communication._r2e106e2349a0b6(e);
      this._r365716ceefd236 = !0;
    }
  }
  _r71c4346a186f38() {
    if (!(!this._r365716ceefd236 || this._events?.communication == null)) {
      for (let e of this._messageEvents ?? []) this._events.communication._r7668362bf55fdd(e);
      this._r365716ceefd236 = !1;
    }
  }
  _r7b3e97258947cb = n((e) => {
    let r = e.getParser(),
      t = this._ra6700bdfad3e28 !== r._r87bbff19ac9186 || this._rb7eca8f1a31b59 !== r._r84e900519b6775;
    if (
      (this._r7e8aada91704b9 &&
        !this._events._rb3d0033404b557.hasWritePermission &&
        ((this._r7e8aada91704b9 = !1), (t = !0), this._r73242dffbdcf8e()),
      !t)
    )
      return;
    ((this._ra6700bdfad3e28 = r._r87bbff19ac9186), (this._rb7eca8f1a31b59 = r._r84e900519b6775));
    let i = this._r12d200e24a85a9();
    if (
      (i ||
        (this._r18214326bbf267(), (this._rd78242902ced7b = setTimeout(() => this._rf9fcd874ea353e(), 3e3))),
      !this._r7e8aada91704b9)
    )
      this.applyClickSettings(this._ra6700bdfad3e28, this._rb7eca8f1a31b59);
    else {
      let s = i
        ? `${this._events.localization.getLocalization("notification.click_settings_ignored")} ${this._events.localization.getLocalization("notification.click_settings")}`
        : "${notification.click_settings}";
      this._events.notifications.addItem(s, NotificationType.const_1274);
      return;
    }
    if (this._events._rb3d0033404b557.hasWritePermission && i) {
      this._events.notifications.addItem("${notification.click_settings}", NotificationType.const_1274, null, null, {
        [NotificationExtraDataKey.ID]: a.CLICK_SETTINGS_NOTIFICATION_TOGGLE_ID,
        [NotificationExtraDataKey.STAY]: !0,
        [NotificationExtraDataKey.TOGGLE_BUTTON_CALLBACK]: this._r86bdb42e35bd15,
      });
      return;
    }
    this._events.notifications.addItem("${notification.click_settings}", NotificationType.const_1274);
  }, "_r7b3e97258947cb");
  _rf9fcd874ea353e() {
    ((this._rd78242902ced7b = null),
      !this._r12d200e24a85a9() && ((this._r7e8aada91704b9 = !1), this._r73242dffbdcf8e()));
  }
  _r86bdb42e35bd15 = n((e) => {
    if (((this._r7e8aada91704b9 = e), this._r7e8aada91704b9)) {
      this.applyClickSettings(a._r462076e3e70b94, a._r6dcba11f7ff159);
      return;
    }
    this.applyClickSettings(this._ra6700bdfad3e28, this._rb7eca8f1a31b59);
  }, "_r86bdb42e35bd15");
  _r12d200e24a85a9() {
    return this._ra6700bdfad3e28 !== a._r462076e3e70b94 || this._rb7eca8f1a31b59 !== a._r6dcba11f7ff159;
  }
  applyClickSettings(e, r) {
    this._events.roomEngine.name_1(
      a.const_1188,
      e === a.CLICK_USER_PASS_THROUGH,
      r === a._r3d572d4d768e52,
    );
  }
  _r18214326bbf267() {
    this._rd78242902ced7b != null && (clearTimeout(this._rd78242902ced7b), (this._rd78242902ced7b = null));
  }
  _r73242dffbdcf8e() {
    this._events?.notifications._r9424f972e18454(a.CLICK_SETTINGS_NOTIFICATION_TOGGLE_ID);
  }
  _r0df463dd152d8b = n((e) => {
    let r = e.getParser();
    ((this.var_2058 = r._ra685de879d48b0),
      (this.var_1625 = r._rd2733709fd7629 ?? []),
      this._events.events.dispatchEvent?.(new WiredAchievementsUpdatedEvent(WiredAchievementsUpdatedEvent.WIRED_ACHIEVEMENTS_UPDATED, this.var_1625)));
  }, "_r0df463dd152d8b");
  _rf02a354649e54d = n((e) => {
    let r = e.getParser();
    this._events.events.dispatchEvent?.(new WiredUserClickHandledEvent(WiredUserClickHandledEvent.WIRED_USER_CLICK_HANDLED, r.index, r.openMenu));
  }, "_rf02a354649e54d");
}

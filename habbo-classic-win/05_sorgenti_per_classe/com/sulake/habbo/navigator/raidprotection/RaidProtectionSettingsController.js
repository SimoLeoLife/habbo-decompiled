// Extracted from HabboAirLauncher.deobf.js, line 253971.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/raidprotection/RaidProtectionSettingsController.as
// Obfuscated name: _idc80ea2de7c365

class a extends EventDispatcherWrapper {
  constructor(r, t) {
    super();
    this._navigator = r;
    this._configuration = t;
    ((this.var_820 = this._configuration.getBoolean("raid.protection.enabled")),
      (this._events = [
        new class_2997((s) => this._rade4ac498f0c94(s)),
        new class_3242((s) => this._r7030624323e7a7(s)),
        new class_2896((s) => this._r7e333d7715ec43(s)),
      ]));
    for (let s of this._events) this._navigator.communication._r2e106e2349a0b6(s);
    let i = this._navigator.roomSessionManager.events;
    (i.addEventListener(RoomSessionEvent.const_481, this._r598bad334f114e),
      i.addEventListener(RoomSessionEvent.const_1398, this._r598bad334f114e),
      i.addEventListener(RoomSessionEvent.const_215, this._r598bad334f114e),
      this._configuration.events.addEventListener(HabboConfigurationEvent.CONFIGURATION_LOADED, this._r958eccf6a16407));
  }
  static {
    n(this, "RaidProtectionSettingsController");
  }
  static STATE_CHANGED = "RPSE_STATE_CHANGED";
  static _r8bca97e6f8acac = [0, 1, 2];
  static _raff85f3534fcbe = [0, 1];
  static actionType = [300, 900, 1800, 3600, 10800, 21600, 43200, 86400, 259200, 604800];
  static _r7cd9c20c3c3b81 = [300, 900, 1800, 3600, 10800];
  _events;
  _r51e6f4fac545ae = new Map();
  var_837 = new Map();
  _r3322eabf4dfbf4 = 0;
  var_965 = 0;
  var_1125 = null;
  var_2239 = null;
  var_1963 = null;
  _view = null;
  var_820;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  get isFeatureEnabled() {
    return this.var_820;
  }
  canManage(r) {
    return this.var_820 && this._r7199df9f9cfd54(r) && this._r51e6f4fac545ae.get(r) === !0;
  }
  _rffa2029859d1eb(r) {
    if (r === null || !/^\d+$/.test(r)) return;
    let t = Number(r);
    if (t <= 0 || t > 2147483647) return;
    let i = Math.trunc(t);
    !this.var_820 ||
      !this.isCurrentEnteredRoom(i) ||
      !this.canManage(i) ||
      this._r3322eabf4dfbf4 === i ||
      ((this._r3322eabf4dfbf4 = i), this._view?.hide(), this.send(new UnkMessageComposer_1args_94bac7(i)));
  }
  requestSave(r) {
    let t = r === null ? null : (this.var_837.get(r.roomId) ?? null);
    if (!(t === null || !this.valid(r))) {
      if (!this.var_820 || !this.isCurrentEnteredRoom(r.roomId) || !this.canManage(r.roomId)) {
        this.clearRoom(r.roomId);
        return;
      }
      if (this.var_965 === 0) {
        if (!t.enabled && r.enabled) {
          ((this.var_1125 = r), (this.var_2239 = t), this._view._r24d4adb825b7d2(!0));
          let i = this._navigator.localization.getLocalization(
            t.incidentActive
              ? "raid.protection.settings.confirm.active"
              : "raid.protection.settings.confirm.inactive",
          );
          this.var_1963 = this._navigator.windowManager.confirm(
            "${raid.protection.settings.confirm.title}",
            i,
            0,
            this.onConfirmation,
          );
          return;
        }
        this.sendSave(r, !1);
      }
    }
  }
  close() {
    ((this._r3322eabf4dfbf4 = 0), this._r7fcbccc37fb3a9(), this._view?.hide());
  }
  onConfirmation = n((r, t) => {
    (r.dispose(), (this.var_1963 = null));
    let i = this.var_1125,
      s = this.var_2239;
    ((this.var_1125 = null),
      (this.var_2239 = null),
      t.type === y.const_1300 &&
      i !== null &&
      s !== null &&
      this.var_837.get(i.roomId) === s &&
      !s.enabled &&
      this.var_820 &&
      this.isCurrentEnteredRoom(i.roomId) &&
      this.canManage(i.roomId) &&
      this.var_965 === 0
        ? this.sendSave(i, !0)
        : this._view && this.var_965 === 0 && this._view._r24d4adb825b7d2(!1));
  }, "onConfirmation");
  sendSave(r, t) {
    ((this.var_965 = r.roomId),
      this._view?._r24d4adb825b7d2(!0),
      this.send(
        new UnkMessageComposer_9args_0904d6(
          r.roomId,
          r.enabled,
          r._rd072b6d8e46ea7,
          r.actionType,
          r._r948f35b43ab81d,
          r.guardEnabled,
          r.guardDurationSeconds,
          r.guardSensitivity,
          t,
        ),
      ));
  }
  _rade4ac498f0c94(r) {
    let t = r.getParser(),
      i = t.roomId;
    !this.var_820 ||
      !this._r7199df9f9cfd54(i) ||
      (this._rb165065957be0e(i),
      t.canManage ? this._r51e6f4fac545ae.set(i, !0) : this.clearRoom(i),
      this.dispatchEvent(new M(a.STATE_CHANGED)));
  }
  _r7030624323e7a7(r) {
    let t = Jm.fromSnapshot(r.getParser().settings);
    !this.var_820 ||
      !this.isCurrentEnteredRoom(t.roomId) ||
      !this.canManage(t.roomId) ||
      (this._r7fcbccc37fb3a9(),
      this.var_837.set(t.roomId, t),
      this._r3322eabf4dfbf4 === t.roomId
        ? ((this._r3322eabf4dfbf4 = 0),
          (this._view ??= new fme(this, this._navigator)),
          this._view.update(t),
          this._view.show())
        : this._view?._r8bcd106a5b8cdf(t.roomId) && this._view.update(t));
  }
  _r7e333d7715ec43(r) {
    let t = r.getParser().var_1827,
      i = Jm.fromSnapshot(r.getParser().settings);
    i.roomId !== this.var_965 ||
      !this.var_820 ||
      !this.isCurrentEnteredRoom(i.roomId) ||
      !this.canManage(i.roomId) ||
      (this._r92ffd616b05a1c(),
      this.var_837.set(i.roomId, i),
      this._view?._r8bcd106a5b8cdf(i.roomId) && (this._view.update(i), t === 0 && this.close()));
  }
  _r598bad334f114e = n((r) => {
    this._r651b2285d7d4b9(r);
  }, "_r598bad334f114e");
  _r651b2285d7d4b9(r) {
    (r.type === RoomSessionEvent.const_215
      ? this.clearRoom(r.session.roomId)
      : (this._rb165065957be0e(r.session.roomId), this._r7fcbccc37fb3a9(), this._view?.hide()),
      this.dispatchEvent(new M(a.STATE_CHANGED)));
  }
  _r958eccf6a16407 = n(() => {
    let r = this._configuration.getBoolean("raid.protection.enabled");
    r !== this.var_820 &&
      ((this.var_820 = r), this._r1fc94261141f0e(), this.dispatchEvent(new M(a.STATE_CHANGED)));
  }, "_r958eccf6a16407");
  valid(r) {
    return (
      r !== null &&
      a._r8bca97e6f8acac.indexOf(r._rd072b6d8e46ea7) !== -1 &&
      a._raff85f3534fcbe.indexOf(r.actionType) !== -1 &&
      a.actionType.indexOf(r._r948f35b43ab81d) !== -1 &&
      a._r7cd9c20c3c3b81.indexOf(r.guardDurationSeconds) !== -1 &&
      a._r8bca97e6f8acac.indexOf(r.guardSensitivity) !== -1
    );
  }
  _r7199df9f9cfd54(r) {
    let t = this._navigator.roomSessionManager.getSession(r);
    return (
      r > 0 &&
      this._navigator.data._ra9e7830c65d383 === r &&
      t !== null &&
      t.state === RoomSessionEvent.const_1398
    );
  }
  isCurrentEnteredRoom(r) {
    return (
      this._r7199df9f9cfd54(r) &&
      this._navigator.data._rd27e27c96c37cd !== null &&
      this._navigator.data._rd27e27c96c37cd.flatId === r
    );
  }
  _rb165065957be0e(r) {
    for (let t of this._r51e6f4fac545ae.keys()) t !== r && this.clearRoom(t);
    for (let t of this.var_837.keys()) t !== r && this.clearRoom(t);
    (this._r3322eabf4dfbf4 !== 0 && this._r3322eabf4dfbf4 !== r && (this._r3322eabf4dfbf4 = 0),
      this.var_965 !== 0 && this.var_965 !== r && this._r92ffd616b05a1c(),
      this.var_1125 && this.var_1125.roomId !== r && this._r7fcbccc37fb3a9());
  }
  clearRoom(r) {
    (this._r51e6f4fac545ae.delete(r),
      this.var_837.delete(r),
      this._r3322eabf4dfbf4 === r && (this._r3322eabf4dfbf4 = 0),
      this.var_965 === r && this._r92ffd616b05a1c(),
      this.var_1125?.roomId === r && this._r7fcbccc37fb3a9(),
      this._view?._r8bcd106a5b8cdf(r) && this._view.hide());
  }
  _r1fc94261141f0e() {
    ((this._r51e6f4fac545ae = new Map()),
      (this.var_837 = new Map()),
      (this._r3322eabf4dfbf4 = 0),
      this._r92ffd616b05a1c(),
      this._r7fcbccc37fb3a9(),
      this._view?.hide());
  }
  _r92ffd616b05a1c() {
    ((this.var_965 = 0), this._view?._r24d4adb825b7d2(!1));
  }
  _r7fcbccc37fb3a9() {
    (this.var_1963 && (this.var_1963.dispose(), (this.var_1963 = null)),
      (this.var_1125 = null),
      (this.var_2239 = null),
      this._view && this.var_965 === 0 && this._view._r24d4adb825b7d2(!1));
  }
  send(r) {
    this._navigator.send(r);
  }
  dispose() {
    if (this._disposed) return;
    this._disposed = !0;
    for (let t of this._events) this._navigator.communication._r7668362bf55fdd(t);
    let r = this._navigator.roomSessionManager.events;
    (r.removeEventListener(RoomSessionEvent.const_481, this._r598bad334f114e),
      r.removeEventListener(RoomSessionEvent.const_1398, this._r598bad334f114e),
      r.removeEventListener(RoomSessionEvent.const_215, this._r598bad334f114e),
      this._configuration.events.removeEventListener(HabboConfigurationEvent.CONFIGURATION_LOADED, this._r958eccf6a16407),
      this._r7fcbccc37fb3a9(),
      this._view && (this._view.dispose(), (this._view = null)),
      (this._events = null),
      (this._r51e6f4fac545ae = null),
      (this.var_837 = null),
      (this._configuration = null),
      (this._navigator = null));
  }
}

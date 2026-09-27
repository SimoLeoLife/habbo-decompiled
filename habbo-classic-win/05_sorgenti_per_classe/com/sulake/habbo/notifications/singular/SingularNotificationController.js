// Estratto da HabboAirLauncher.deobf.js, riga 263620.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/SingularNotificationController.as
// Nome offuscato: _ifdfc0a6345a61e

class a {
  constructor(e) {
    this._notifications = e;
    this.var_2358 = new zme(
      this._notifications?.windowManager ?? null,
      this._notifications?.localization ?? null,
      this._notifications?.habboHelp ?? null,
    );
    let t = this._notifications?.assetLibrary.getAssetByName("habbo_notifications_config_xml");
    t != null && class_3122._r49e6f06a45fc47(rr(String(t.content ?? "")).children(), this._r0016e0b462be4d);
    let i = this._r0016e0b462be4d.getValue("styles");
    if (i != null)
      for (let s = 0; s < i.length; s++) {
        let o = i.getWithIndex(s);
        if (o?.getValue("icon") != null) {
          let c = this._notifications?.assetLibrary.getAssetByName(String(o.getValue("icon")))?.content;
          o.setProperty("icon", c);
        }
      }
    ((this.getNextItemFromQueue = new Yme(
      this._notifications,
      this._notifications?.assetLibrary,
      this._notifications?.windowManager,
      this._notifications?._r1e876d4b9a9973 ?? null,
      i ?? new B(),
      this._r0016e0b462be4d,
    )),
      this._notifications?.sessionDataManager?.events?.addEventListener?.(
        Ho.BADGE_READY,
        this._rdc716422983406,
      ),
      this._notifications?.registerUpdateReceiver(this, 2),
      setTimeout(() => this.maybeShowNewFeatureNotification(), 2e3));
  }
  static {
    n(this, "SingularNotificationController");
  }
  static MODERATION_DISCLAIMER_DELAY_MS = 5e3;
  static NEW_FEATURE_CONDITION_RETRY_DELAY_MS = 2e3;
  static NEW_FEATURE_CONDITION_MAX_RETRIES = 3;
  static NEW_FEATURE_CONDITION_REWARD_TRACK_INCOMPLETE = "reward_track_incomplete";
  static NEW_FEATURE_CONDITION_STATE_UNAVAILABLE = -1;
  static NEW_FEATURE_CONDITION_STATE_HIDDEN = 0;
  static NEW_FEATURE_CONDITION_STATE_VISIBLE = 1;
  _r2cfb7f4513d3b8 = [];
  _r0016e0b462be4d = new B();
  _r4c2097ee504fb2 = new Map();
  var_2358;
  getNextItemFromQueue = null;
  _r9052fc730fe4de = !1;
  _re1eedbb1704bac = null;
  var_2164 = null;
  _r1505e2334c6ae0 = null;
  _r4e7477eee5adff = null;
  _disposed = !1;
  get alertDialogManager() {
    return this.var_2358;
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    if (
      (this._r4e7477eee5adff != null &&
        (this._r4e7477eee5adff.removeEventListener(DeBouncer._rf33144eac61595, this._r832e2938e9e9c6),
        (this._r4e7477eee5adff = null)),
      this.getNextItemFromQueue?.dispose(),
      (this.getNextItemFromQueue = null),
      this.var_2358.dispose(),
      this._re1eedbb1704bac?.dispose(),
      (this._re1eedbb1704bac = null),
      this.var_2164 != null)
    ) {
      for (let e of this.var_2164) e.dispose();
      this.var_2164 = null;
    }
    (this._r1505e2334c6ae0?.dispose(),
      (this._r1505e2334c6ae0 = null),
      this._notifications != null &&
        (this._notifications.removeUpdateReceiver(this), (this._notifications = null)),
      (this._disposed = !0));
  }
  update(e) {
    if (this._r2cfb7f4513d3b8.length > 0 && this.getNextItemFromQueue?.isSpaceAvailable()) {
      let r = this._rd40cf5844b10f5();
      r != null && !this.getNextItemFromQueue.showItem(r) && r.dispose();
    }
  }
  addItem(e, r, t, i = null, s = null, o = null, d = null) {
    if (this._notifications?.disabled) return 0;
    let c = this._r0016e0b462be4d.getValue("styles"),
      f = c?.getValue(r) ?? null;
    if (c == null || f == null) return 0;
    let l = this._r2f8cd30e6bbf9c(d, NotificationExtraDataKey.ID);
    if (l != null && this._raf35b800d49395(String(l))) return this._r2cfb7f4513d3b8.length;
    let b = new HabboNotificationItemStyle(f, t, i, !0, s, d ?? {}, r);
    return (
      o != null && (b.internalLink = o),
      this._r2cfb7f4513d3b8.push(new HabboNotificationItem(e, b, this)),
      this._r2cfb7f4513d3b8.length
    );
  }
  _r9424f972e18454(e) {
    if (e != null) {
      for (let r = 0; r < this._r2cfb7f4513d3b8.length; r++) {
        let t = this._r2cfb7f4513d3b8[r];
        t != null && t.notificationId === e && (t.dispose(), this._r2cfb7f4513d3b8.splice(r, 1), r--);
      }
      this.getNextItemFromQueue?._r9424f972e18454(e);
    }
  }
  addSongPlayingNotification(e, r) {
    (this._notifications?.localization?._r43eae9731f5b27(
      "soundmachine.notification.playing",
      "songname",
      e,
    ),
      this._notifications?.localization?._r43eae9731f5b27(
        "soundmachine.notification.playing",
        "songauthor",
        r,
      ));
    let t = this._notifications?.localization?._r5f04530d38380d("soundmachine.notification.playing");
    t != null && this.addItem(String(t.value), NotificationType.SOUND_MACHINE, null);
  }
  _rbeb400c77bf457(e) {
    this._notifications?._r6b6c989018eb05(e);
  }
  _r6eb2f4f9c37e01() {
    if (Jn.isRunning())
      this._r4e7477eee5adff == null &&
        ((this._r4e7477eee5adff = new _i05394ecc0c0c4d(Jn.totalRunningTime + a.MODERATION_DISCLAIMER_DELAY_MS, 1)),
        this._r4e7477eee5adff.addEventListener(DeBouncer._rf33144eac61595, this._r832e2938e9e9c6),
        this._r4e7477eee5adff.start());
    else if (!this._r9052fc730fe4de) {
      let e = this._notifications?.localization?.getLocalization("mod.chatdisclaimer", "NA") ?? "NA";
      (this.addItem(e, NotificationType.INFO, null), (this._r9052fc730fe4de = !0));
    }
  }
  _rfbd2ea40953941(e) {
    (this._re1eedbb1704bac != null &&
      (this._re1eedbb1704bac.visible || this._re1eedbb1704bac.isCancelled)) ||
      (this._re1eedbb1704bac = new jme(
        e,
        this._notifications?.assets ?? null,
        this._notifications?.windowManager ?? null,
        this._notifications?.catalog ?? null,
        this._notifications?._r1e876d4b9a9973 ?? null,
      ));
  }
  maybeShowNewFeatureNotification(e = 0) {
    if (this._disposed) return;
    this.var_2164 = [];
    let r = (this._notifications?.getProperty("notifications.new_feature.active") ?? "").split(",");
    for (let t of r) t.length > 0 && this.maybeShowNewFeatureNotificationByKey(t, e);
  }
  maybeShowNewFeatureNotificationByKey(e, r) {
    if (this._disposed) return;
    let t = this.getNewFeatureConditionState(e);
    if (t !== a.NEW_FEATURE_CONDITION_STATE_HIDDEN) {
      if (t === a.NEW_FEATURE_CONDITION_STATE_UNAVAILABLE) {
        r < a.NEW_FEATURE_CONDITION_MAX_RETRIES && setTimeout(() => this.maybeShowNewFeatureNotificationByKey(e, r + 1), a.NEW_FEATURE_CONDITION_RETRY_DELAY_MS);
        return;
      }
      this.var_2164?.push(
        new Kme(
          this._notifications?.assets ?? null,
          this._notifications?.windowManager ?? null,
          this._notifications?._r1e876d4b9a9973 ?? null,
          this._notifications?.localization ?? null,
          this._notifications,
          e,
        ),
      );
    }
  }
  getNewFeatureConditionState(e) {
    let r = this._notifications?.getProperty(`notifications.new_feature.condition.${e}`) ?? "";
    if (r.length === 0) return a.NEW_FEATURE_CONDITION_STATE_VISIBLE;
    let t = r.split(":");
    if (t.length < 2) return a.NEW_FEATURE_CONDITION_STATE_VISIBLE;
    if (t[0] === a.NEW_FEATURE_CONDITION_REWARD_TRACK_INCOMPLETE) {
      let i = this._notifications?._r9d040c0cc258d9;
      return i == null || !i._r887f0532546017(t[1])
        ? a.NEW_FEATURE_CONDITION_STATE_UNAVAILABLE
        : i._rcd9eefc6ae9176(t[1])
          ? a.NEW_FEATURE_CONDITION_STATE_HIDDEN
          : a.NEW_FEATURE_CONDITION_STATE_VISIBLE;
    }
    return a.NEW_FEATURE_CONDITION_STATE_VISIBLE;
  }
  _r158a2c4ff9ac19(e) {
    (this._r1505e2334c6ae0 != null && this._r1505e2334c6ae0.visible) ||
      (this._r1505e2334c6ae0 = new $me(
        e,
        this._notifications?.assets ?? null,
        this._notifications?.windowManager ?? null,
        this._notifications?.catalog ?? null,
        this._notifications?._r1e876d4b9a9973 ?? null,
      ));
  }
  _rb4161e404af9fe() {
    this._r1505e2334c6ae0?.dispose();
  }
  _rd40cf5844b10f5() {
    return this._r2cfb7f4513d3b8.splice(0, 1)[0] ?? null;
  }
  _raf35b800d49395(e) {
    if (e == null) return !1;
    for (let r of this._r2cfb7f4513d3b8) if (r.notificationId === e) return !0;
    return this.getNextItemFromQueue?._r3fbac2fae90974(e) ?? !1;
  }
  _r2f8cd30e6bbf9c(e, r) {
    return e == null || Array.isArray(e) ? null : e[r];
  }
  _r832e2938e9e9c6 = n((e) => {
    (this._r4e7477eee5adff?.removeEventListener(DeBouncer._rf33144eac61595, this._r832e2938e9e9c6),
      (this._r4e7477eee5adff = null),
      this._r6eb2f4f9c37e01());
  }, "_r832e2938e9e9c6");
  _rdc716422983406 = n((e) => {
    this.getNextItemFromQueue?._r4d6d9266d10c8f(e);
  }, "_rdc716422983406");
}

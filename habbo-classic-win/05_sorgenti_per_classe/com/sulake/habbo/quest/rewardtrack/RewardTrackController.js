// Extracted from HabboAirLauncher.deobf.js, line 268181.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/RewardTrackController.as
// Obfuscated name: _ia19d659f55b043

class a extends ue {
  constructor(r, t, i = 0, s = null) {
    super(t, i, s);
    this._questEngine = r;
    this._messageEvents = [
      new class_2648((o) => this.onRewardTracks(o)),
      new class_3248((o) => this.onRewardTrackClaimResult(o)),
      new class_3690((o) => this._r0b82bb0e8be31f(o)),
      new class_3613((o) => this.onRewardTrackPremiumPurchaseResult(o)),
    ];
    for (let o of this._messageEvents) this.addMessageEvent(o);
  }
  static {
    n(this, "RewardTrackController");
  }
  static DESKTOP_WINDOW_LAYER = 1;
  static FREE_CLAIM_NOTIFICATION_ICON = "reward_track_free_track";
  static PREMIUM_CLAIM_NOTIFICATION_ICON = "reward_track_premium_track";
  var_1056 = [];
  _ra43d6bb109b997 = new Map();
  var_990 = null;
  var_1325 = null;
  _messageEvents;
  _r2009a30cd9e0b4 = -1;
  var_1271 = !1;
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (r) => {
          this._r6358b2bd53ae19 = r;
        },
        !0,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (r) => {
        this._windowManager = r;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (r) => {
        this._localizationManager = r;
      }),
    ]);
  }
  initComponent() {
    this.context._r7e43d9f4706607?.(this);
  }
  get linkPattern() {
    return "reward_track/";
  }
  linkReceived(r) {
    let t = r.split("/");
    t.length >= 3 && t[1] === "open" && this.openRewardTrack(t[2]);
  }
  openRewardTrack(r) {
    let t = this.getTrackById(r);
    if (t === null) return;
    let i = null;
    this.var_990 !== null &&
      !this.var_990.disposed &&
      ((i = this.var_990.location), this.var_990.hide());
    let s = this._ra43d6bb109b997.get(r);
    ((s == null || s.disposed) &&
      ((s = new RewardTrackView(this, t)), this._ra43d6bb109b997.set(r, s), s.initialize(), s.center()),
      i !== null && s._rf91a6212aca31a(i),
      s.show(),
      s.activate(),
      (this.var_990 = s));
  }
  _rdac072a48a0313(r, t) {
    this.send(new UnkMessageComposer_2args_47dc6f(r, t));
  }
  _r5f3759470c78bf(r) {
    this.send(new UnkMessageComposer_1args_1bfda9(r));
  }
  get _ra5fbf8bddad7bd() {
    return (
      this._questEngine.sessionDataManager.hasSecurity(class_1794.EMPLOYEE) ||
      this._questEngine.sessionDataManager.hasSecurity(class_1794.MODERATOR)
    );
  }
  copyTrackId(r) {
    this.copyDebugId(r, "${reward_track.debug.copy_track_id.success}");
  }
  copyTaskId(r) {
    this.copyDebugId(r, "${reward_track.debug.copy_task_id.success}");
  }
  _rc3b63e1ff6bba2(r) {
    (this.closePremiumPurchaseConfirmation(), (this.var_1325 = new Bge(this, r)), this.var_1325.show());
  }
  closePremiumPurchaseConfirmation() {
    this.var_1325 !== null && (this.var_1325.dispose(), (this.var_1325 = null));
  }
  onRewardTracks(r) {
    let t = r.getParser(),
      i =
        this.var_990 !== null &&
        !this.var_990.disposed &&
        this.var_990.isShowing(),
      s = this.var_1056.length > 0;
    if (
      ((t.reload || t.disabled || s) && (this.disposeCachedViews(), this.closePremiumPurchaseConfirmation()),
      (this.var_1056 = []),
      !t.disabled)
    )
      for (let o of t.tracks) this.var_1056.push(new RewardTrack(o));
    (t.reload &&
      i &&
      this._windowManager.alert(
        this._localizationManager.getLocalization("reward_track.reload.title", "reward_track.reload.title"),
        this._localizationManager.getLocalization("reward_track.reload.desc", "reward_track.reload.desc"),
        0,
        null,
      ),
      this.broadcastClaimableRewardsCount());
  }
  _r0b82bb0e8be31f(r) {
    let t = r.getParser(),
      i = this.getTrackById(t.trackId);
    if (i === null) return;
    let s = i.getTaskById(t.taskId),
      o = s !== null && s._r6be89bb89fe21b,
      d = s !== null && s.isComplete;
    ((s = i.updateProgress(t.taskId, t.progressCount, t.points)),
      this.updateProgressViews(i, s, o, d),
      this.broadcastClaimableRewardsCount(!1));
  }
  onRewardTrackClaimResult(r) {
    let t = r.getParser();
    if (t.var_1827 !== class_2558.SUCCESS) {
      this.showNotification(
        this.localizeResult("reward_track.claim.notification.fail.", t.var_1827),
      );
      return;
    }
    let i = this.getTrackById(t.trackId);
    if (i === null) return;
    let s = i.markPrizeClaimed(t.rewardId);
    (this.updatePrizeClaimViews(i, s), this.broadcastClaimableRewardsCount(), this.showClaimSuccessNotification(s));
  }
  onRewardTrackPremiumPurchaseResult(r) {
    let t = r.getParser();
    if (t.var_1827 !== class_3402.SUCCESS) {
      (this.showNotification(
        this.localizeResult("reward_track.premium.notification.fail.", t.var_1827),
      ),
        this.var_1325 !== null &&
          !this.var_1325.disposed &&
          this.var_1325.purchaseFailed());
      return;
    }
    let i = this.getTrackById(t.trackId);
    if (i === null) {
      this.closePremiumPurchaseConfirmation();
      return;
    }
    (i.markPremiumPurchased(t.points),
      this.updatePremiumPurchaseViews(i),
      this.broadcastClaimableRewardsCount(),
      this.closePremiumPurchaseConfirmation(),
      this.showNotification("${reward_track.premium.notification.success}"));
  }
  broadcastClaimableRewardsCount(r = !0) {
    let t = 0;
    for (let i of this.var_1056) for (let s of i.prizes) s._r4cb1003f91383f(i) && t++;
    (!r && t === this._r2009a30cd9e0b4) ||
      ((this._r2009a30cd9e0b4 = t), this._questEngine.events.dispatchEvent?.(new Aj(t)));
  }
  localizeResult(r, t) {
    let i = r + t;
    return this._localizationManager.getLocalization(i, i);
  }
  showClaimSuccessNotification(r) {
    this.showNotification(
      "${reward_track.claim.notification.success}",
      r !== null && r.premium ? a.PREMIUM_CLAIM_NOTIFICATION_ICON : a.FREE_CLAIM_NOTIFICATION_ICON,
    );
  }
  showNotification(r, t = null) {
    if (this._questEngine.notifications !== null)
      if (t === null) this._questEngine.notifications.addItem(r, NotificationType.INFO);
      else {
        let i = this._windowManager.assets.getAssetByName(t).content.clone();
        this._questEngine.notifications.addItemWithBitmap(r, NotificationType.INFO, i);
      }
  }
  copyDebugId(r, t) {
    this._ra5fbf8bddad7bd && (Bi._r8c1ed48897d9d3(r), this.showNotification(t));
  }
  updateProgressViews(r, t, i, s) {
    let o = this.getTrackView(r);
    o !== null && o.taskProgressUpdated(t, i, s);
  }
  updatePrizeClaimViews(r, t) {
    let i = this.getTrackView(r);
    i !== null && i._r194481619afab8(t);
  }
  updatePremiumPurchaseViews(r) {
    let t = this.getTrackView(r);
    t !== null && t._r977a010d2fb75e();
  }
  getTrackView(r) {
    let t = this._ra43d6bb109b997.get(r.id);
    return t != null && !t.disposed && t.track === r ? t : null;
  }
  disposeCachedViews() {
    for (let r of this._ra43d6bb109b997.values()) r !== null && !r.disposed && r.dispose();
    ((this._ra43d6bb109b997 = new Map()), (this.var_990 = null));
  }
  update(r) {
    for (let t of this._ra43d6bb109b997.values()) t !== null && !t.disposed && t.update(r);
  }
  getTrackById(r) {
    for (let t of this.var_1056) if (t.id === r) return t;
    return null;
  }
  _rcd9eefc6ae9176(r) {
    let t = this.getTrackById(r);
    return t !== null && t.complete;
  }
  _r887f0532546017(r) {
    return this.getTrackById(r) !== null;
  }
  send(r) {
    this._r6358b2bd53ae19.connection.send(r);
  }
  addMessageEvent(r) {
    this._r6358b2bd53ae19 && this._r6358b2bd53ae19._r2e106e2349a0b6(r);
  }
  removeMessageEvent(r) {
    this._r6358b2bd53ae19 && this._r6358b2bd53ae19._r7668362bf55fdd(r);
  }
  dispose() {
    if (!this.var_1271) {
      ((this.var_1271 = !0),
        this.context._r7485c47d8bd77c?.(this),
        this.closePremiumPurchaseConfirmation(),
        this.disposeCachedViews());
      for (let r of this._messageEvents) this.removeMessageEvent(r);
      ((this._messageEvents = null),
        (this.var_1056 = null),
        (this._r6358b2bd53ae19 = null),
        (this._windowManager = null),
        (this._localizationManager = null),
        (this._questEngine = null),
        super.dispose());
    }
  }
  get disposed() {
    return this.var_1271;
  }
  get tracks() {
    return this.var_1056;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get questEngine() {
    return this._questEngine;
  }
}

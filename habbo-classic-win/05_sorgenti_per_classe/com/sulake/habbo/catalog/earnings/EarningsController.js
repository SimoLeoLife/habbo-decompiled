// Extracted from HabboAirLauncher.deobf.js, line 180452.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/earnings/EarningsController.as
// Obfuscated name: _i81f3d4b76e3fcd

class extends ue {
  static {
    n(this, "EarningsController");
  }
  _view = null;
  _r670ec0c379bd07 = !0;
  var_1448 = !1;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
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
      new ComponentDependency(new IIDHabboNotifications(), (e) => {
        this._notifications = e;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._toolbar = e;
      }),
    ]);
  }
  initComponent() {
    ((this._messageEvents = []),
      this.addMessageEvent(new class_3526((e) => this._rdf0cc2d652debf(e))),
      this.addMessageEvent(new class_3637((e) => this._r713f4a2c50d1a8(e))),
      this.addMessageEvent(new class_3770(() => this.class_3770())),
      this.context._r7e43d9f4706607(this));
  }
  get linkPattern() {
    return "habboUI/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length < 3 || (r[1] === "open" && r[2] === "vault" && this.showEarnings());
  }
  get showingIndicator() {
    return this.var_1448;
  }
  get windowManager() {
    return this._windowManager;
  }
  get catalog() {
    return this._catalog;
  }
  openCatalogue() {
    this.context._r6b6c989018eb05("catalog/open");
  }
  _r5a1d9e28f2672e() {
    this._sessionDataManager?.withdrawCreditVault();
  }
  claimReward(e) {
    this._sessionDataManager?.claimReward(e);
  }
  removeView() {
    (this._view?.dispose(), (this._view = null));
  }
  dispose() {
    if (!this.disposed) {
      if (this._messageEvents != null && this._r6358b2bd53ae19 != null)
        for (let e of this._messageEvents) this._r6358b2bd53ae19._r7668362bf55fdd(e);
      (this.removeView(),
        (this._messageEvents = null),
        (this._r6358b2bd53ae19 = null),
        (this._localizationManager = null),
        (this._sessionDataManager = null),
        (this._windowManager = null),
        (this._notifications = null),
        (this._catalog = null),
        (this._toolbar = null),
        super.dispose());
    }
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._messageEvents?.push(this._r6358b2bd53ae19._r2e106e2349a0b6(e));
  }
  _rdf0cc2d652debf = n((e) => {
    let r = ClassUtils.getParser(e, class_3367);
    if (r != null && r != null && (this._view?.onIncomeRewardDataReceived(r.data ?? []), !!this._r670ec0c379bd07)) {
      this._r670ec0c379bd07 = !1;
      for (let t of r.data)
        if (t.rewardType !== 0 && t.amount > 0) {
          this.var_1448 = !0;
          break;
        }
      this.var_1448 && this._toolbar?._r8771461217740e();
    }
  }, "_rdf0cc2d652debf");
  _r713f4a2c50d1a8 = n((e) => {
    let r = ClassUtils.getParser(e, class_3332);
    r != null && r != null && this._view?.onIncomeRewardClaimResponse(r.rewardCategory, r.result);
  }, "_r713f4a2c50d1a8");
  class_3770 = n(() => {
    if (
      (this._notifications?.addItem(
        "${notification.earning.new}",
        NotificationType.EARNING,
        null,
        "habboUI/open/vault",
      ),
      this._view != null && !this._view.disposed)
    ) {
      this._sessionDataManager?.getIncomeRewardStatus();
      return;
    }
    ((this.var_1448 = !0), this._toolbar?._r8771461217740e());
  }, "class_3770");
  showEarnings() {
    if (
      (this.var_1448 && ((this.var_1448 = !1), this._toolbar?._r8771461217740e()),
      this._sessionDataManager?.getIncomeRewardStatus(),
      this._view == null || this._view.disposed)
    ) {
      if (this._windowManager == null) return;
      this._view = new I8e(this, this._windowManager);
    }
  }
}

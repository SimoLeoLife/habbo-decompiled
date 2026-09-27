// Extracted from HabboAirLauncher.deobf.js, line 173763.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/clubcenter/HabboClubCenter.as
// Obfuscated name: _i1a03fa031d38ec

class a extends ue {
  static {
    n(this, "HabboClubCenter");
  }
  static USE_FAKE_DATA = !1;
  static DATA_UPDATE_INTERVAL_MSEC = 1e4;
  _re32ac46d73f831 = !1;
  _view = null;
  _r4fd6e406edf892 = null;
  _data = null;
  _rc5965f84d95028 = -a.DATA_UPDATE_INTERVAL_MSEC;
  _r51bdcdb920dee8 = !1;
  var_595 = null;
  _r9278fc8348c641 = 0;
  _r04d4ed7c982df2 = null;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return [
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._r6358b2bd53ae19 = e;
        },
        !0,
      ),
      new ComponentDependency(
        new IIDSessionDataManager(),
        (e) => {
          this._sessionDataManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDAvatarRenderManager(),
        (e) => {
          this._avatarRenderManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboWindowManager(),
        (e) => {
          this._windowManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboLocalizationManager(),
        (e) => {
          this._localizationManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboCatalog(),
        (e) => {
          this._catalog = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboToolbar(),
        (e) => {
          this._toolbar = e;
        },
        !1,
      ),
    ];
  }
  initComponent() {
    ((this._messageEvents = []),
      this.addMessageEvent(new UnkMessageEvent_7a9ed4((e) => this._r52365367a76ca3(e))),
      this.addMessageEvent(new UnkMessageEvent_c3a485((e) => this._r79a03d8128b989(e))),
      this.addMessageEvent(new class_3784((e) => this.class_3784(e))),
      this.context._r7e43d9f4706607(this),
      this.getBoolean("offers.enabled") &&
        this.getBoolean("offers.habboclub.enabled") &&
        (this._offerCenter = this.catalog?._rd436cd79c08f80(this) ?? null));
  }
  dispose() {
    if (this._messageEvents != null && this._r6358b2bd53ae19 != null)
      for (let e of this._messageEvents) this._r6358b2bd53ae19._r7668362bf55fdd(e);
    (this._sessionDataManager?.events.removeEventListener?.(Ho.BADGE_READY, this.onBadgeReady),
      (this._offerCenter = null),
      this.removeView(),
      (this._data = null),
      (this._messageEvents = []),
      super.dispose());
  }
  get linkPattern() {
    return "habboUI/";
  }
  linkReceived(e) {
    let r = e.split("/");
    r.length < 3 || (r[1] === "open" && r[2] === "hccenter" && this.showClubCenter());
  }
  get localization() {
    return this.catalog?.localization ?? null;
  }
  get _rf0eb5f07c94cfb() {
    return this._avatarRenderManager;
  }
  get _r433abe11f15a47() {
    return this._offerCenter;
  }
  get stage() {
    return this.context.dispatchEvent?.stage ?? null;
  }
  _r247821088f6ffc() {
    let e = this.getPurse();
    return (e?.clubPeriods ?? 0) > 0
      ? ClubStatus.ACTIVE
      : (e?.giftsAvailable ?? 0) > 0 || (e?._r5268ed54bc12e0 ?? 0) > 0
        ? ClubStatus.EXPIRED
        : ClubStatus.NONE;
  }
  _r4237df539849c5() {
    this.catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB, CatalogType.NORMAL);
  }
  _rba6204214b1247() {
    this.catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB_GIFTS, CatalogType.NORMAL);
  }
  _r41f4957abfe4b0() {
    if (this._r4fd6e406edf892 != null) {
      this._re1ff9ebb42c02f();
      return;
    }
    this._r4fd6e406edf892 = new Z6e(
      this,
      this._windowManager,
      this._data,
      this._view?.getSpecialCalloutAnchor() ?? null,
    );
  }
  openPaydayHelpPage() {
    this.context._r6b6c989018eb05("habbopages/hcpayday");
  }
  openHelpPage() {
    this.context._r6b6c989018eb05("habbopages/habboclub");
  }
  _r54722eae4da7f7(e) {
    this.context._r6b6c989018eb05(e);
  }
  isKickbackEnabled() {
    let e = this.getProperty("hccenter.activity.enabled");
    return e === "" ? !0 : e === "1" || e === "true";
  }
  _rb0b9b572bdd5be() {
    this._catalog?._rc638c80a192240(UnkConstants_d2bfaa._r8cf1b0130b04a1);
  }
  indicateRewards() {}
  indicateVideoAvailable(e) {
    this._view != null
      ? this._view.setVideoOfferButtonVisibility(
          e,
          this._offerCenter != null && !this._offerCenter.showingVideo,
        )
      : (this._re32ac46d73f831 = e);
  }
  removeView() {
    (this._view?.dispose(), (this._view = null), this._re1ff9ebb42c02f(), (this._r51bdcdb920dee8 = !1));
  }
  _re1ff9ebb42c02f() {
    (this._r4fd6e406edf892?.dispose(), (this._r4fd6e406edf892 = null));
  }
  get catalog() {
    return this._catalog;
  }
  showClubCenter() {
    (this._view == null &&
      this._windowManager != null &&
      this._sessionDataManager != null &&
      (this._view = new ClubCenterView(this, this._windowManager, this._sessionDataManager.figure)),
      this._r44361cba440dd1() ? this.updateData() : this.populate(),
      this._offerCenter != null &&
        this._view != null &&
        this._re32ac46d73f831 &&
        ((this._re32ac46d73f831 = !1), this.indicateVideoAvailable(!0)));
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._messageEvents.push(this._r6358b2bd53ae19._r2e106e2349a0b6(e));
  }
  _r79a03d8128b989 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_empty_4aea24);
    r != null &&
      ((this._data = r.data),
      (this._r51bdcdb920dee8 = !1),
      (this._rc5965f84d95028 = Date.now()),
      this.populate());
  }, "_r79a03d8128b989");
  _r52365367a76ca3 = n((e) => {
    let r = e.getParser();
    r != null && ((this._r9278fc8348c641 = r._r6a9dca7b6b5588), this.populate());
  }, "_r52365367a76ca3");
  onBadgeReady = n((e) => {
    e.badgeId !== this.var_595 ||
      this._sessionDataManager == null ||
      (this._sessionDataManager.events.removeEventListener?.(Ho.BADGE_READY, this.onBadgeReady),
      this.populate());
  }, "onBadgeReady");
  class_3784 = n((e) => {
    let r = ClassUtils.getParser(e, class_3428);
    if (r == null) return;
    this._r04d4ed7c982df2 == null && (this._r04d4ed7c982df2 = new Array(r._rec250fae6d7fc2).fill(null));
    let t = new B();
    r._r90349b91438f2b != null && t.concatenate(r._r90349b91438f2b);
    let i = this.addMessageFragment(t, r._rec250fae6d7fc2, r._rd646a5cabacc16, this._r04d4ed7c982df2);
    i != null && ((this._r04d4ed7c982df2 = null), (this.var_595 = yJ.resolveClubBadgeId(i.getKeys())));
  }, "class_3784");
  _r44361cba440dd1() {
    return !this._r51bdcdb920dee8 && Date.now() - this._rc5965f84d95028 > a.DATA_UPDATE_INTERVAL_MSEC;
  }
  updateData() {
    if (
      ((this._r51bdcdb920dee8 = !0),
      this._r6358b2bd53ae19?.connection.send(new class_2748()),
      this._r6358b2bd53ae19?.connection.send(new class_2402()),
      !a.USE_FAKE_DATA)
    ) {
      this._r6358b2bd53ae19?.connection.send(new UnkMessageComposer_0args_51ac13());
      return;
    }
    ((this._data = {
      var_4435: 0,
      _rcfd60e886bcfeb: "",
      var_4458: 0,
      var_5152: 0,
      var_5490: 0,
      var_5493: 0,
      var_5685: 0,
      var_4397: 0,
      var_4950: 0,
    }),
      this.populate());
  }
  populate() {
    this._view != null &&
      this._view.dataReceived(
        this._data,
        this.getPurse(),
        this._r9278fc8348c641,
        yJ.resolveBadgeBitmap(this.var_595, this.onBadgeReady, this._sessionDataManager),
      );
  }
  getPurse() {
    return this.catalog?.getPurse() ?? null;
  }
  addMessageFragment(e, r, t, i) {
    if (r === 1) return e;
    i[t] = e;
    for (let o of i) if (o == null) return null;
    let s = new B();
    for (let o of i) o != null && (s.concatenate(o), o.dispose());
    return s;
  }
}

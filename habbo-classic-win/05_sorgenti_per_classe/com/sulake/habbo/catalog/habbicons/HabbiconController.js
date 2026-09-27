// Extracted from HabboAirLauncher.deobf.js, line 179872.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconController.as
// Obfuscated name: _if53b4e41cd4dfc

class a extends ue {
  static {
    n(this, "HabbiconController");
  }
  static RECENT_HABBICON_LIMIT = 10;
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
      new ComponentDependency(
        new IIDHabboConfigurationManager(),
        (e) => {
          this._configurationManager = e;
        },
        !0,
      ),
      new ComponentDependency(
        new IIDHabboInventory(),
        (e) => {
          this._inventory = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboLocalizationManager(),
        (e) => {
          this._localizationManager = e;
        },
        !0,
      ),
      new ComponentDependency(
        new IIDHabboNotifications(),
        (e) => {
          this._notifications = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
    ]);
  }
  initComponent() {
    ((this._messageEvents = []),
      (this.var_356 = new EventDispatcherWrapper()),
      (this.var_545 = new Map()),
      (this.var_811 = []),
      (this.var_1735 = new Map()),
      (this.var_1030 = new Map()),
      (this.var_1432 = []),
      (this._rcd13172eda024b = !1),
      (this._rf9be40b5798de6 = !1),
      (this._r46ce95b65e8d68 = !1),
      (this._rc3929092824af9 = !1),
      (this._rc43bb5de14f4fb = !1),
      (this._view = null),
      (this._rf300aac2b58d77 = null),
      (this._r90cce2b1934e7c = (e) => this._r10a570e6c32773(e)),
      this.habbiconsEnabled() &&
        (this.context._r7e43d9f4706607(this),
        this.addMessageEvent(new class_3504((e) => this._r1325440d460fb1(e))),
        this.addMessageEvent(new class_3595((e) => this._r7f34be3a24324c(e))),
        this.addMessageEvent(new class_3794((e) => this._r55a2cc9c67769e(e))),
        this.addMessageEvent(new class_3826((e) => this._r42fecbb6e6773e(e))),
        this.addMessageEvent(new class_2735((e) => this._rc35fe79180d63c(e))),
        this.addMessageEvent(new UnkMessageEvent_747af9((e) => this._r6d4e06caa59a48(e))),
        this.addMessageEvent(new UnkMessageEvent_7a147e((e) => this._r0f423f57a6a9f1(e))),
        this.addMessageEvent(new UnkMessageEvent_f762d2((e) => this._r0f423f57a6a9f1(e))),
        Dr.configure(this._configurationManager),
        Dr.addEventListener(Dr.ASSETS_LOADED, this._r90cce2b1934e7c),
        Dr.preload()));
  }
  get linkPattern() {
    return "habbicons/";
  }
  get configuration() {
    return this._configurationManager;
  }
  linkReceived(e) {
    if (!this.habbiconsEnabled()) return;
    let r = e.split("/");
    r.length < 2 || (r[1] === "open" && this.openHabbiconHub());
  }
  openHabbiconHub() {
    this.habbiconsEnabled() &&
      (this._r0a5fa07606baa3(),
      (!this._view || this._view.disposed) && (this._view = new w8e(this, this._windowManager)),
      this._view.showWindow());
  }
  get _r9814816e4724df() {
    return this._rcd13172eda024b;
  }
  get _r5284c2325947d5() {
    return this._rf9be40b5798de6;
  }
  get _rb89e3e34d91de4() {
    return [...this.var_545.values()];
  }
  get recentHabbiconIds() {
    return this.var_811.concat();
  }
  get HabbiconAlbumModel() {
    return this.var_1432.concat();
  }
  get _r5b4170279bf41a() {
    return this._inventory?._r349ca5f2f69601?._r500bbbdb2c23f9($t.const_134) ?? 0;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  addEventListener(e, r) {
    this.var_356.addEventListener(e, r);
  }
  removeEventListener(e, r) {
    this.var_356.removeEventListener(e, r);
  }
  _re262462355db57(e = !1) {
    if (this.habbiconsEnabled()) {
      if (this._rf9be40b5798de6 && !e) {
        this.var_356.dispatchEvent(new Mt(Mt.SHOP_DATA_UPDATED));
        return;
      }
      this._rc3929092824af9 || (this._rc3929092824af9 = this.send(new UnkMessageComposer_0args_f24fdc()));
    }
  }
  _r9b697375e236ac(e) {
    this.habbiconsEnabled() && this.send(new UnkMessageComposer_1args_052e0c(e));
  }
  _r59b8bf5acaaf2f(e) {
    !this.habbiconsEnabled() ||
      e <= 0 ||
      (this._r7f2e19ff107675(e), this.var_356.dispatchEvent(new Mt(Mt.RECENT_HABBICONS_UPDATED, e)));
  }
  _rd94b5da83c889e(e) {
    return this._inventory?._r349ca5f2f69601?.isUnseen($t.const_134, e) ?? !1;
  }
  _re5d8c48e260b16(e) {
    let r = this._inventory?._r349ca5f2f69601;
    r && (r._r1726cb679cf29b($t.const_134, e), r._r2d59b93ea65720($t.const_134));
  }
  _r0a5fa07606baa3() {
    this._inventory?._r349ca5f2f69601?._r76597cac57aa73($t.const_134);
  }
  _r1340b4edf8b8a0(e) {
    this.habbiconsEnabled() && ((this._rc43bb5de14f4fb = !0), this.send(new UnkMessageComposer_1args_fec17d(e)));
  }
  _rc5f8c7ff92815c(e) {
    this.habbiconsEnabled() && ((this._rc43bb5de14f4fb = !0), this.send(new UnkMessageComposer_1args_568437(e)));
  }
  _r0b05c7dd52d654(e) {
    !this.habbiconsEnabled() ||
      e == null ||
      !e.purchasable ||
      (this._r5bd12b9941e06b(),
      (this._rf300aac2b58d77 = new BJ(this, this._windowManager)),
      this._rf300aac2b58d77._ra30c8494bf3bcf(e),
      this._rf300aac2b58d77.show());
  }
  _r29efef02e94b62(e) {
    !this.habbiconsEnabled() ||
      e == null ||
      !e.canBuy ||
      (this._r5bd12b9941e06b(),
      (this._rf300aac2b58d77 = new BJ(this, this._windowManager)),
      this._rf300aac2b58d77._r1240a8c8996e02(e),
      this._rf300aac2b58d77.show());
  }
  _r5bd12b9941e06b() {
    this._rf300aac2b58d77 != null && (this._rf300aac2b58d77.dispose(), (this._rf300aac2b58d77 = null));
  }
  _r3834000326cc68(e) {
    this.habbiconsEnabled() && ((this._rc43bb5de14f4fb = !0), this.send(new UnkMessageComposer_1args_fe672a(e)));
  }
  _r3a275f7c15d08a(e) {
    this.habbiconsEnabled() && this.send(new UnkMessageComposer_1args_43f663(e));
  }
  _rf55a4b18db56fb(e) {
    this.habbiconsEnabled() && this.send(new UnkMessageComposer_1args_2f9a6b(e));
  }
  _rb8fc3312c1481b(e) {
    return this.var_545.get(e) ?? null;
  }
  _r687385b79e1a1b(e) {
    return this.var_1030.get(e) ?? null;
  }
  addMessageEvent(e) {
    this._r6358b2bd53ae19 != null && this._messageEvents.push(this._r6358b2bd53ae19._r2e106e2349a0b6(e));
  }
  removeMessageEvent(e) {
    this._r6358b2bd53ae19?._r7668362bf55fdd(e);
  }
  send(e) {
    return this._r6358b2bd53ae19?.connection == null ? !1 : (this._r6358b2bd53ae19.connection.send(e), !0);
  }
  _r1325440d460fb1(e) {
    let r = e.getParser(),
      t = this._rcd13172eda024b,
      i = this.var_545;
    this.var_545 = new Map();
    for (let s of r.habbicons) {
      if (s == null) continue;
      let o = i.get(s.habbiconId);
      (this.var_545.set(s.habbiconId, s),
        t &&
          this._r8e4d030ac45e9e(s._rf4d14ad73f880a) &&
          (o == null || this._r27620ce8523c2e(o._rf4d14ad73f880a, s._rf4d14ad73f880a)) &&
          this._r33a506d8523ef0(s.habbiconId));
    }
    (this._rcd988f49fc6d0d(r.recentHabbiconIds),
      (this._rcd13172eda024b = !0),
      (this._r46ce95b65e8d68 = !1),
      this.var_356.dispatchEvent(new Mt(Mt.const_1213)),
      this.var_356.dispatchEvent(new Mt(Mt.SHOP_DATA_UPDATED)));
  }
  _r7f34be3a24324c(e) {
    let { _rf4d14ad73f880a: r, habbiconId: t } = e.getParser(),
      i = HabbiconState.const_1008;
    if (this._r8e4d030ac45e9e(r)) {
      let s = this.var_545.get(t);
      (s == null
        ? ((s = new class_1922()),
          (s.habbiconId = t),
          this.var_545.set(t, s),
          this._r33a506d8523ef0(t))
        : (i = s._rf4d14ad73f880a),
        (s._rf4d14ad73f880a = r),
        this._r27620ce8523c2e(i, r) && this._r33a506d8523ef0(t));
    } else this.var_545.delete(t);
    (this.updateCachedShopItemState(t, r, null),
      this.var_356.dispatchEvent(new Mt(Mt.const_805, t)),
      this.var_356.dispatchEvent(new Mt(Mt.const_1213, t)),
      this.var_356.dispatchEvent(new Mt(Mt.SHOP_DATA_UPDATED, t)));
  }
  _r55a2cc9c67769e(e) {
    ((this.var_1735 = new Map()), (this.var_1030 = new Map()), (this.var_1432 = []));
    for (let r of e.getParser().collections)
      if (
        r != null &&
        (this.var_1735.set(r.collectionId, r), this.var_1432.push(r), r.habbicons != null)
      )
        for (let t of r.habbicons) t != null && this.var_1030.set(t.habbiconId, t);
    ((this._rf9be40b5798de6 = !0),
      (this._rc3929092824af9 = !1),
      this.var_356.dispatchEvent(new Mt(Mt.SHOP_DATA_UPDATED)));
  }
  _r42fecbb6e6773e(e) {
    let r = e.getParser().habbicon;
    r != null &&
      (this.var_1030.set(r.habbiconId, r),
      this.updateCachedShopItemState(r.habbiconId, r.state, r),
      this.var_356.dispatchEvent(
        new Mt(Mt.SHOP_DATA_UPDATED, r.habbiconId, r.collectionId),
      ));
  }
  _rc35fe79180d63c(e) {
    if (!this.habbiconsEnabled()) return;
    let r = e.getParser();
    this.var_356.dispatchEvent(new Mt(Mt.ROOM_USE_HABBICON, r.habbiconId, 0, r.roomIndex));
  }
  _r6d4e06caa59a48(e) {
    this._rc43bb5de14f4fb &&
      ((this._rc43bb5de14f4fb = !1), this._r5bd12b9941e06b(), this._re262462355db57(!0));
  }
  _r0f423f57a6a9f1(e) {
    this._rc43bb5de14f4fb && ((this._rc43bb5de14f4fb = !1), this._rf300aac2b58d77?.purchaseFailed());
  }
  _r10a570e6c32773(e) {
    this.habbiconsEnabled() &&
      (this.var_356.dispatchEvent(new Mt(Mt.const_1213)),
      this.var_356.dispatchEvent(new Mt(Mt.SHOP_DATA_UPDATED)));
  }
  _r33a506d8523ef0(e) {
    (this._inventory?._r349ca5f2f69601?._rcde78de58b9cff($t.const_134, e),
      this.showNewHabbiconNotification(e));
  }
  showNewHabbiconNotification(e) {
    if (this._notifications == null || this._localizationManager == null) return;
    let r = this.resolveHabbiconDisplayName(e);
    this._localizationManager._r43eae9731f5b27("notification.new.habbicon", "habbicon_name", r);
    let t = this._localizationManager.getLocalization("notification.new.habbicon");
    this._notifications.addItemWithBitmap(
      t,
      NotificationType.const_537,
      this.createHabbiconNotificationIcon(e),
      "habbicons/open",
    );
  }
  resolveHabbiconDisplayName(e) {
    let r = Dr.getHabbiconNameKey(e);
    return r != null && r.length > 0
      ? this._localizationManager.getLocalization(`habbicon_${r}_name`, r)
      : e.toString();
  }
  createHabbiconNotificationIcon(e) {
    let r = Dr.getPreviewBitmap(e, !1);
    return r != null ? r.clone() : null;
  }
  habbiconsEnabled() {
    return this._configurationManager != null && this._configurationManager.getBoolean("habbicons.enabled");
  }
  updateCachedShopItemState(e, r, t = null) {
    if (this._re09b9e4ebdea07(e, r)) return;
    if (t != null) this.var_1030.set(e, t);
    else if (((t = this.var_1030.get(e) ?? null), t == null)) return;
    t.state = r;
    let i = this.var_1735.get(t.collectionId);
    if (!(i == null || i.habbicons == null)) {
      for (let s = 0; s < i.habbicons.length; s++) {
        let o = i.habbicons[s];
        if (!(o == null || o.habbiconId !== e)) {
          i.habbicons[s] = t;
          break;
        }
      }
      ((i.completed = this.isCollectionCompleted(i)), i.completed && this.markCollectionRewardClaimable(i));
    }
  }
  _re09b9e4ebdea07(e, r) {
    for (let t of this.var_1432)
      if (!(t == null || t.var_583 !== e)) return ((t.var_2758 = r), !0);
    return !1;
  }
  markCollectionRewardClaimable(e) {
    if (
      e == null ||
      e.var_583 <= 0 ||
      e.var_2758 === HabbiconState.const_101 ||
      e.var_2758 === HabbiconState.const_893
    )
      return;
    e.var_2758 = HabbiconState.CLAIMABLE;
    let r = this.var_545.get(e.var_583);
    (r == null &&
      ((r = new class_1922()),
      (r.habbiconId = e.var_583),
      this.var_545.set(e.var_583, r)),
      (r._rf4d14ad73f880a = HabbiconState.CLAIMABLE));
  }
  _r8e4d030ac45e9e(e) {
    return e === HabbiconState.CLAIMABLE || e === HabbiconState.const_101 || e === HabbiconState.const_893;
  }
  _r27620ce8523c2e(e, r) {
    return e === HabbiconState.CLAIMABLE && (r === HabbiconState.const_101 || r === HabbiconState.const_893);
  }
  isCollectionCompleted(e) {
    if (e == null || e.habbicons == null || e.habbicons.length === 0) return !1;
    for (let r of e.habbicons) if (r == null || !this._r8e4d030ac45e9e(r.state)) return !1;
    return !0;
  }
  _rcd988f49fc6d0d(e) {
    if (((this.var_811 = []), e != null)) for (let r of e) this.var_811.push(r);
  }
  _r7f2e19ff107675(e) {
    if (e <= 0) return;
    let r = this.var_811.indexOf(e);
    (r >= 0 && this.var_811.splice(r, 1),
      this.var_811.unshift(e),
      this.var_811.length > a.RECENT_HABBICON_LIMIT &&
        (this.var_811.length = a.RECENT_HABBICON_LIMIT));
  }
  dispose() {
    if (!this.disposed) {
      for (let e of this._messageEvents) this.removeMessageEvent(e);
      (this._view && (this._view.dispose(), (this._view = null)),
        this._r5bd12b9941e06b(),
        Dr.removeEventListener(Dr.ASSETS_LOADED, this._r90cce2b1934e7c),
        (this._messageEvents = null),
        (this.var_356 = null),
        (this.var_545 = null),
        (this.var_811 = null),
        (this.var_1735 = null),
        (this.var_1030 = null),
        (this.var_1432 = null),
        (this._r6358b2bd53ae19 = null),
        (this._configurationManager = null),
        (this._localizationManager = null),
        (this._windowManager = null),
        super.dispose());
    }
  }
}

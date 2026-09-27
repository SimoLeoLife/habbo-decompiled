// Estratto da HabboAirLauncher.deobf.js, riga 336592.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/SessionDataManager.as
// Nome offuscato: _if2d5b58a0b2964

class a extends ue {
  static {
    n(this, "SessionDataManager");
  }
  static const_48 = 1;
  _id = 0;
  _name = "";
  var_1129 = "";
  var_106 = "";
  _realName = "";
  var_5057 = 0;
  var_852 = 0;
  var_2953 = 0;
  var_4499 = 0;
  var_1357 = 0;
  var_2168 = !0;
  _r56789d218fc9ba = [];
  _r242978764cc59c = [];
  _systemOpen = !1;
  var_5310 = !1;
  var_438 = {};
  _rc16e1d7e5fa209 = null;
  _rfbc234a8ce8403 = new B();
  _wallItems = new B();
  _r5521705925f8ce = new B();
  var_1091 = new B();
  _r98318f68b873ad = null;
  _rd249aa89642dd1 = null;
  _r7f6fd3bac6b815 = null;
  _rabfe9a5fece427 = null;
  var_3207 = !1;
  _r847a077ddfd3f0 = [];
  _furniDataListeners = [];
  var_3695 = dr.NO_CLUB;
  var_4007 = 0;
  _r9022d051fb051f = 0;
  const_511 = -1;
  _isAmbassador = !1;
  var_4607 = !1;
  var_3387 = !1;
  var_810 = 0;
  _accountSafetyLocked = !1;
  _mysteryBoxColor = "";
  _mysteryKeyColor = "";
  _r6967e54607d02e = !1;
  _r0712abe5c19755 = !1;
  _newFurniDataHash = null;
  _r70751fb8821197 = !1;
  _r947686f50bf786 = !1;
  constructor(e, r = 0, t = null) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(
        new IIDHabboWindowManager(),
        (e) => {
          this._windowManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboCommunicationManager(),
        (e) => {
          this._communication = e;
        },
        (this.flags & a.const_48) === 0,
      ),
      new ComponentDependency(new IIDHabboConfigurationManager(), null, !0, [{ type: M.ComponentDependency, callback: this._rfbaaf6bb300d04.bind(this) }]),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(
        new IIDHabboRoomSessionManager(),
        (e) => {
          this._roomSessionManager = e;
        },
        !1,
      ),
      new ComponentDependency(
        new IIDHabboNotifications(),
        (e) => {
          this._notifications = e;
        },
        !1,
      ),
    ]);
  }
  initComponent() {
    (this._communication != null &&
      (this._communication._r2e106e2349a0b6(new class_2271(this._r97aecc27368072)),
      this._communication._r2e106e2349a0b6(new class_1926(this._r6e2e75987c854e)),
      this._communication._r2e106e2349a0b6(new class_2276(this._rfb4a7fa643bdaf)),
      this._communication._r2e106e2349a0b6(new _ic493e19be4b81c(this._r9b3a75bb1f2b44)),
      this._communication._r2e106e2349a0b6(new _i070f79082ee244(this._r4322a6d303b99c)),
      this._communication._r2e106e2349a0b6(new class_2146(this._r7012a4854191ae)),
      this._communication._r2e106e2349a0b6(new class_2285(this._r46cfa1fc6a4506)),
      this._communication._r2e106e2349a0b6(new _i70fd7bff0643dd(this._r92d5a50f4adf76)),
      this._communication._r2e106e2349a0b6(new _i333a8da3a5d6bf(this._rc68c5eb1f835e9)),
      this._communication._r2e106e2349a0b6(new _i225953376774e7(this._rdd24cea94414b7)),
      this._communication._r2e106e2349a0b6(new class_1783(this._r9aa5ee3c9826e5)),
      this._communication._r2e106e2349a0b6(new class_1991(this._rc6fd11febc68b8)),
      this._communication._r2e106e2349a0b6(new class_2068(this._rfb50b43dcd41ec)),
      this._communication._r2e106e2349a0b6(new class_2121(this._rc8d9b9819345aa)),
      this._communication._r2e106e2349a0b6(new _ie9ed5c966609e8(this.onEmailStatus)),
      this._communication._r2e106e2349a0b6(new class_2197(this._r4f905573f1b00e)),
      this._communication._r2e106e2349a0b6(new class_2286(this._r664c74f52674cd)),
      this._communication._r2e106e2349a0b6(new class_1767(this._rae282c8e86df23))),
      (this.getBadgeId = new HabboGroupInfoManager(this)),
      (this._r1bff02a088613f = new IgnoredUsersManager(this)),
      (this._r2e2c32210c9a6f = new BlockedUsersManager(this)),
      (this._r9820a9069e442c = new PerkManager(this)),
      this._communication != null && (this._r1fbba58d6fba21(), this._rdea18e25530244()));
  }
  dispose() {
    this.disposed ||
      (this._r7b6301b20abd72(),
      this._rfbc234a8ce8403.dispose(),
      this._wallItems.dispose(),
      this._r5521705925f8ce.dispose(),
      this.var_1091.dispose(),
      this._r2e2c32210c9a6f?.dispose(),
      (this._r2e2c32210c9a6f = null),
      this._r1bff02a088613f?.dispose(),
      (this._r1bff02a088613f = null),
      this.getBadgeId?.dispose(),
      (this.getBadgeId = null),
      this._r9820a9069e442c?.dispose(),
      (this._r9820a9069e442c = null),
      this._r98318f68b873ad?.dispose(),
      (this._r98318f68b873ad = null),
      this._rd249aa89642dd1?.dispose(),
      (this._rd249aa89642dd1 = null),
      this._rc16e1d7e5fa209?.dispose(),
      (this._rc16e1d7e5fa209 = null),
      this._r7f6fd3bac6b815?.dispose(),
      (this._r7f6fd3bac6b815 = null),
      this._rabfe9a5fece427?.dispose(),
      (this._rabfe9a5fece427 = null),
      super.dispose());
  }
  get systemOpen() {
    return this._systemOpen;
  }
  get systemShutDown() {
    return this.var_5310;
  }
  get topSecurityLevel() {
    return this._r9022d051fb051f;
  }
  get clubLevel() {
    return this.var_3695;
  }
  get hasVip() {
    return dr.HasVip(this.var_3695);
  }
  get hasClub() {
    return dr.HasClub(this.var_3695);
  }
  get isNoob() {
    return this.const_511 !== _ibaef792fa2c041._rc6f2b706ae8bdc;
  }
  get isRealNoob() {
    return this.const_511 === _ibaef792fa2c041._r48193ae23cc415;
  }
  get userId() {
    return this._id;
  }
  get userName() {
    return this._name;
  }
  get realName() {
    return this._realName;
  }
  get figure() {
    return this.var_1129;
  }
  get gender() {
    return this.var_106;
  }
  set newFurniDataHash(e) {
    this._newFurniDataHash = e;
  }
  get nameChangeAllowed() {
    return this.var_2168;
  }
  get isAnyRoomController() {
    return this.var_4007 >= class_1794.MODERATOR;
  }
  get isAmbassador() {
    return this._isAmbassador;
  }
  get isEmailVerified() {
    return this.var_4607;
  }
  get mysteryBoxColor() {
    return this._mysteryBoxColor;
  }
  get mysteryKeyColor() {
    return this._mysteryKeyColor;
  }
  get respectLeft() {
    return this.var_852;
  }
  get respectReplenishesLeft() {
    return this.var_2953;
  }
  get petRespectLeft() {
    return this.var_1357;
  }
  get communication() {
    return this._communication;
  }
  get roomSessionManager() {
    return this._roomSessionManager;
  }
  get windowManager() {
    return this._windowManager;
  }
  get localization() {
    return this._localization;
  }
  get perksReady() {
    return this._r9820a9069e442c?.isReady ?? !1;
  }
  get currentTalentTrack() {
    return this.getBoolean("talent.track.citizenship.enabled") && !this.isPerkAllowed(class_2156.CITIZEN)
      ? ys.CITIZENSHIP
      : ys.HELPER;
  }
  get isRoomCameraFollowDisabled() {
    return this.var_3387;
  }
  get uiFlags() {
    return this.var_810;
  }
  get notifications() {
    return this._notifications;
  }
  hasSecurity(e) {
    return this.var_4007 >= e;
  }
  setRoomCameraFollowDisabled(e) {
    this.var_3387 = e;
  }
  setFriendBarState(e) {
    this._rac4c9be5992c71(_i5a1c5671564b8b._r373bc350e1a95e, e);
  }
  setRoomToolsState(e) {
    this._rac4c9be5992c71(_i5a1c5671564b8b._rcf00a07cad041a, e);
  }
  refreshFurniData() {
    ((this._rfbc234a8ce8403 = new B()),
      (this._wallItems = new B()),
      (this._r5521705925f8ce = new B()),
      (this.var_1091 = new B()),
      this.initFurnitureData(!1));
  }
  getBadgeImage(e) {
    return this._r7f6fd3bac6b815?.getBadgeImage(e) ?? null;
  }
  getBadgeSmallImage(e) {
    return this._r7f6fd3bac6b815?._rb7d2621bf91e58(e) ?? null;
  }
  getBadgeImageAssetName(e) {
    return this._r7f6fd3bac6b815?.getBadgeImageAssetName(e) ?? null;
  }
  getBadgeImageSmallAssetName(e) {
    return this._r7f6fd3bac6b815?._r05fe5177fab2ac(e) ?? null;
  }
  requestBadgeImage(e) {
    return this._r7f6fd3bac6b815?.getBadgeImage(e, B5.TYPE_NORMAL, !1) ?? null;
  }
  getBadgeImageWithInfo(e) {
    return this._r7f6fd3bac6b815?.getBadgeImageWithInfo(e) ?? new BadgeInfo(new A(1, 1, !0, 0), !0);
  }
  getGroupBadgeId(e) {
    return this.getBadgeId?.var_4561(e) ?? "";
  }
  getGroupBadgeImage(e) {
    return this._r7f6fd3bac6b815?.getBadgeImage(e, B5.const_255) ?? null;
  }
  getGroupBadgeSmallImage(e) {
    return this._r7f6fd3bac6b815?._rb7d2621bf91e58(e, B5.const_255) ?? null;
  }
  getGroupBadgeAssetName(e) {
    return this._r7f6fd3bac6b815?.getBadgeImageAssetName(e, B5.const_255) ?? null;
  }
  getGroupBadgeSmallAssetName(e) {
    return this._r7f6fd3bac6b815?._r05fe5177fab2ac(e, B5.const_255) ?? null;
  }
  getFurniIconImage(e, r, t) {
    return this._rabfe9a5fece427?.getFurniIconImage(e, r, t) ?? null;
  }
  getFurniIconImageAssetName(e, r, t) {
    return this._rabfe9a5fece427?.getFurniIconImageAssetName(e, r, t) ?? null;
  }
  isAccountSafetyLocked() {
    return this._accountSafetyLocked;
  }
  isIgnored(e) {
    return this._r1bff02a088613f?.isIgnored(e) ?? !1;
  }
  ignoreUser(e) {
    this._r1bff02a088613f?.ignoreUser(e);
  }
  unignoreUser(e) {
    this._r1bff02a088613f?.unignoreUser(e);
  }
  isBlocked(e) {
    return this._r2e2c32210c9a6f?.isBlocked(e) ?? !1;
  }
  blockUser(e) {
    this._r2e2c32210c9a6f?.blockUser(e);
  }
  unblockUser(e) {
    this._r2e2c32210c9a6f?.unblockUser(e);
  }
  giveRespect(e) {
    e >= 0 && this.var_852 > 0 && (this.send(new class_1968(e)), (this.var_852 -= 1));
  }
  replenishRespect() {
    (this.send(new class_1874()), (this.var_2953 -= 1), (this.var_852 = this.var_4499));
  }
  giveRespectFailed() {
    this.var_852 += 1;
  }
  givePetRespect(e) {
    e >= 0 && this.var_1357 > 0 && (this.send(new class_1914(e)), (this.var_1357 -= 1));
  }
  getCreditVaultStatus() {
    this.send(new class_1875());
  }
  getIncomeRewardStatus() {
    this.send(new class_1847());
  }
  withdrawCreditVault() {
    this.send(new class_1975());
  }
  claimReward(e) {
    this.send(new class_2290(e));
  }
  getProductData(e) {
    return (this.var_3207 || this.loadProductData(), this.var_438[e] ?? null);
  }
  getFloorItemData(e) {
    return this._rfbc234a8ce8403.getValue(e) ?? null;
  }
  getFloorItemsDataByCategory(e) {
    return this._rfbc234a8ce8403.getValues().filter((r) => r.category === e);
  }
  getWallItemData(e) {
    return this._wallItems.getValue(e) ?? null;
  }
  getFloorItemDataByName(e, r = 0) {
    let t = this._r5521705925f8ce.getValue(e)?.[r];
    return t != null ? this.getFloorItemData(t) : null;
  }
  getWallItemDataByName(e, r = 0) {
    let t = this.var_1091.getValue(e)?.[r];
    return t != null ? this.getWallItemData(t) : null;
  }
  getAllFloorItemDatas() {
    return this._rfbc234a8ce8403.getValues();
  }
  getAllWallItemDatas() {
    return this._wallItems.getValues();
  }
  openHabboHomePage(e, r) {
    if (!this.propertyExists("link.format.userpage")) return;
    let t = this.getProperty("link.format.userpage");
    ((t = t.replace("%ID%", String(e))),
      (t = t.replace("%username%", r)),
      Ae.navigateToURL(t, "habboMain"));
  }
  pickAllFurniture(e) {
    this._ra8c79e334844d4(e, "${room.confirm.pick_all}", ":pickall");
  }
  resetScores(e) {
    this._ra8c79e334844d4(e, "${room.confirm.resetscores}", ":resetscores");
  }
  ejectAllFurniture(e, r) {
    this._ra8c79e334844d4(e, "${room.confirm.eject_all}", r);
  }
  ejectPets(e) {
    let r = this._roomSessionManager?.getSession(e) ?? null;
    r != null &&
      (r.isRoomOwner || this.isAnyRoomController) &&
      this.sendSpecialCommandMessage(":ejectpets");
  }
  loadProductData(e = null) {
    return this.var_3207
      ? !0
      : (e != null && !this._r847a077ddfd3f0.includes(e) && this._r847a077ddfd3f0.push(e), !1);
  }
  getFurniData(e) {
    return this._rfbc234a8ce8403.length === 0
      ? (this._furniDataListeners.includes(e) || this._furniDataListeners.push(e), null)
      : this._rfbc234a8ce8403.getValues().concat(this._wallItems.getValues());
  }
  addProductsReadyEventListener(e) {
    if (this.var_3207) {
      e.productDataReady();
      return;
    }
    this._r847a077ddfd3f0.includes(e) || this._r847a077ddfd3f0.push(e);
  }
  isPerkAllowed(e) {
    return this._r9820a9069e442c?.isPerkAllowed(e) ?? !1;
  }
  getPerkErrorMessage(e) {
    return this._r9820a9069e442c?.getPerkErrorMessage(e) ?? "";
  }
  sendSpecialCommandMessage(e) {
    this.send(new class_2213(e));
  }
  pickAllBuilderFurniture(e) {
    this._ra8c79e334844d4(e, "${room.confirm.pick_all_bc}", ":pickallbc");
  }
  removeFurniDataListener(e) {
    let r = this._furniDataListeners.indexOf(e);
    r >= 0 && this._furniDataListeners.splice(r, 1);
  }
  hasNftChatStyle(e) {
    return this._r56789d218fc9ba.includes(e);
  }
  hasPurchasableChatStyle(e) {
    return this._r242978764cc59c.includes(e);
  }
  getXmlWindow(e) {
    try {
      let t = this.assets.getAssetByName(e);
      return this._windowManager?.buildFromXML(rr(String(t?.content ?? ""))) ?? null;
    } catch {
      return null;
    }
  }
  send(e) {
    this._communication?.connection.send(e);
  }
  _rfbaaf6bb300d04(e) {
    ((this.var_438 = {}),
      (this._rfbc234a8ce8403 = new B()),
      (this._wallItems = new B()),
      (this._r5521705925f8ce = new B()),
      (this.var_1091 = new B()),
      this.initFurnitureData(),
      this._r2ad086e52707bc(),
      this._r0c53540653de6e(),
      this._re85c1be25f51b5());
  }
  _rdea18e25530244() {
    (this._r1bff02a088613f?.initIgnoreList(),
      this._r2e2c32210c9a6f?.initBlockList(),
      this.send(new _i21ea3c3b179e73()),
      this.send(new _icc7acf3f572e66()),
      this.getIncomeRewardStatus());
  }
  _r1fbba58d6fba21() {
    this._r947686f50bf786 ||
      typeof window > "u" ||
      (window.addEventListener("blur", this._r7cab4cf1dc0be7),
      window.addEventListener("focus", this._r9873b436e2ce0e),
      typeof document < "u" &&
        (document.addEventListener("visibilitychange", this._r3f2c49dd8b392c),
        document.visibilityState === "hidden" && this._r7cab4cf1dc0be7()),
      (this._r947686f50bf786 = !0));
  }
  _r7b6301b20abd72() {
    !this._r947686f50bf786 ||
      typeof window > "u" ||
      (window.removeEventListener("blur", this._r7cab4cf1dc0be7),
      window.removeEventListener("focus", this._r9873b436e2ce0e),
      typeof document < "u" && document.removeEventListener("visibilitychange", this._r3f2c49dd8b392c),
      (this._r947686f50bf786 = !1));
  }
  _r7cab4cf1dc0be7 = n(() => {
    this._r70751fb8821197 || ((this._r70751fb8821197 = !0), this.send(new _i258e60b63fd68d()));
  }, "_r7cab4cf1dc0be7");
  _r9873b436e2ce0e = n(() => {
    this._r70751fb8821197 && ((this._r70751fb8821197 = !1), this.send(new _i637b4a048c872d()));
  }, "_r9873b436e2ce0e");
  _r3f2c49dd8b392c = n(() => {
    if (document.visibilityState === "hidden") {
      this._r7cab4cf1dc0be7();
      return;
    }
    this._r9873b436e2ce0e();
  }, "_r3f2c49dd8b392c");
  _r0c53540653de6e() {
    this._r7f6fd3bac6b815 == null && (this._r7f6fd3bac6b815 = new B5(this.assets, this.events, this));
  }
  _re85c1be25f51b5() {
    this._rabfe9a5fece427 == null && (this._rabfe9a5fece427 = new wEe(this.assets, this.events, this, this));
  }
  initFurnitureData(e = !0) {
    (this._rd249aa89642dd1?.dispose(),
      (this._rd249aa89642dd1 = new PX(
        this._rfbc234a8ce8403,
        this._wallItems,
        this._r5521705925f8ce,
        this.var_1091,
        this._localization,
        e,
      )),
      this._rd249aa89642dd1.addEventListener(PX.READY, this._r13f2520a9ee3c8));
    let r = this._r199632b7c9e8b5();
    r.length > 0 && this._rd249aa89642dd1._r71f563669978dc(r);
  }
  _r2ad086e52707bc() {
    (this._rc16e1d7e5fa209?.dispose(),
      (this._rc16e1d7e5fa209 = new DX(this._rf81f5d7e13d2b7(), this.var_438)),
      this._rc16e1d7e5fa209.addEventListener(DX.READY, this._r4900791233150a));
  }
  _r199632b7c9e8b5() {
    let e = this._localization?._rd76d40bf1474dc() ?? null,
      r = e?._r49b95f637742bb() ?? "",
      t = this._newFurniDataHash ?? e?._refe1fcf89ec3c3() ?? "";
    return r.length > 0 && t.length > 0 ? `${r}/${t}` : "";
  }
  _rf81f5d7e13d2b7() {
    let e = this._localization?._rd76d40bf1474dc() ?? null,
      r = e?._rb4dd1a5b19bb5e() ?? "",
      t = e?._r86a0f260260b23() ?? "";
    return r.length > 0 && t.length > 0 ? `${r}/${t}` : "";
  }
  get _r13f2520a9ee3c8() {
    return ((this._rb686a425397d39 ??= (e) => this._r234044e329dc50(e)), this._rb686a425397d39);
  }
  get _r4900791233150a() {
    return ((this._r236dbe40b73787 ??= (e) => this._r60ecf89ba87937(e)), this._r236dbe40b73787);
  }
  _r234044e329dc50(e) {
    (this._rd249aa89642dd1?.removeEventListener(PX.READY, this._r13f2520a9ee3c8),
      this._r98318f68b873ad?.dispose(),
      (this._r98318f68b873ad = this._rd249aa89642dd1),
      (this._rd249aa89642dd1 = null),
      (this._r6967e54607d02e = !0),
      this._r0712abe5c19755 || this._rd24c62b76d01fb());
  }
  _r97aecc27368072 = n((e) => {
    let r = e;
    ((this.var_3695 = r.clubLevel !== dr.NO_CLUB ? dr.VIP : dr.NO_CLUB),
      (this.var_4007 = r.securityLevel),
      (this._r9022d051fb051f = Math.max(this._r9022d051fb051f, r.securityLevel)),
      (this._isAmbassador = r.isAmbassador));
  }, "_r97aecc27368072");
  _rc6fd11febc68b8 = n((e) => {
    ((this.const_511 = e.noobnessLevel),
      this.const_511 !== _ibaef792fa2c041._rc6f2b706ae8bdc &&
        this.context.configuration?.setProperty("new.identity", "1"));
  }, "_rc6fd11febc68b8");
  _r6e2e75987c854e = n((e) => {
    let r = ClassUtils.getParser(e, class_1833);
    r != null &&
      ((this._id = r.id),
      (this._name = r.name),
      (this.var_5057 = r.respectTotal),
      (this.var_852 = r.respectLeft),
      (this.var_2953 = r.respectReplenishesLeft),
      (this.var_4499 = r._rca468c2d449b9e),
      (this.var_1357 = r.petRespectLeft),
      (this.var_1129 = r.figure),
      (this.var_106 = r.sex),
      (this._realName = r.realName),
      (this.var_2168 = r.nameChangeAllowed),
      (this._accountSafetyLocked = r._re4fcbc56ec54d5),
      this._rfd4a79ffd4e40b(this._name));
  }, "_r6e2e75987c854e");
  _r9b3a75bb1f2b44 = n((e) => {
    let r = e;
    r.id === -1 && ((this.var_1129 = r.figure), (this.var_106 = r.sex));
  }, "_r9b3a75bb1f2b44");
  _rfb4a7fa643bdaf = n((e) => {
    let r = e;
    ((this.var_1129 = r.figure),
      (this.var_106 = r.gender),
      Ae.updateFigure(this.var_1129));
  }, "_rfb4a7fa643bdaf");
  _r4f905573f1b00e = n((e) => {
    let r = ClassUtils.getParser(e, class_1768);
    r != null && (this._r56789d218fc9ba = [...(r._r52afff10387e2e ?? [])]);
  }, "_r4f905573f1b00e");
  _r664c74f52674cd = n((e) => {
    let r = ClassUtils.getParser(e, _i859a756952a2bf);
    r != null && (this._r242978764cc59c = [...(r._r52afff10387e2e ?? [])]);
  }, "_r664c74f52674cd");
  _rae282c8e86df23 = n((e) => {
    let r = ClassUtils.getParser(e, class_3787);
    if (r == null) return;
    let t = r.styleId;
    this._r242978764cc59c.includes(t) || this._r242978764cc59c.push(t);
  }, "_rae282c8e86df23");
  _r4322a6d303b99c = n((e) => {
    let r = ClassUtils.getParser(e, _i2c547c5aa82888);
    r != null &&
      (r.webId === this._id && (this._name = r._r4c7340395c786f),
      this.events.dispatchEvent?.(new A8(r._r4c7340395c786f)));
  }, "_r4322a6d303b99c");
  _r7012a4854191ae = n((e) => {
    let r = ClassUtils.getParser(e, class_1877);
    r != null &&
      r.var_1827 === class_2146.var_2462 &&
      ((this._name = r.name), this._rfd4a79ffd4e40b(this._name), (this.var_2168 = !1));
  }, "_r7012a4854191ae");
  _rfd4a79ffd4e40b(e) {
    if (typeof document > "u" || !this.propertyExists(HabboProperty.const_682)) return;
    let r = this.getProperty(HabboProperty.const_682);
    ((r = r.replace("pt", "br")),
      (r = r.replace("en", "com")),
      (document.title = `Habbo ${r.toUpperCase()} | ${e}`));
  }
  _r9aa5ee3c9826e5 = n((e) => {
    let r = ClassUtils.getParser(e, class_2919);
    r != null &&
      ((this._mysteryBoxColor = r._r53f605554bc6dd ?? ""),
      (this._mysteryKeyColor = r._r69986912642341 ?? ""),
      this.events.dispatchEvent?.(new Fy(this._mysteryBoxColor, this._mysteryKeyColor)));
  }, "_r9aa5ee3c9826e5");
  _rc8d9b9819345aa = n((e) => {
    let r = ClassUtils.getParser(e, class_1928);
    r != null &&
      ((this.var_3387 = r._r3e8ffcb5b14b1e),
      (this.var_810 = r.uiFlags),
      this.events.dispatchEvent?.(new Kb(this.var_810)));
  }, "_rc8d9b9819345aa");
  _rfb50b43dcd41ec = n((e) => {
    let r = e.link;
    typeof r == "string" && r.length > 0 && this.context._r6b6c989018eb05?.(r);
  }, "_rfb50b43dcd41ec");
  onEmailStatus = n((e) => {
    let r = ClassUtils.getParser(e, _i8a56acf458abaa);
    r != null && (this.var_4607 = r._rc18b0feae00674);
  }, "onEmailStatus");
  _r46cfa1fc6a4506 = n((e) => {
    let r = ClassUtils.getParser(e, class_1990);
    r != null &&
      ((this._systemOpen = r.isOpen),
      (this.var_5310 = r.var_5059),
      this._r6967e54607d02e && !this._r0712abe5c19755 && this._rd24c62b76d01fb());
  }, "_r46cfa1fc6a4506");
  _r92d5a50f4adf76 = n((e) => {
    this.var_1357 += 1;
  }, "_r92d5a50f4adf76");
  _rdd24cea94414b7 = n((e) => {
    let r = ClassUtils.getParser(e, _ia9eaf320f747b5);
    r != null && (this._accountSafetyLocked = r.status === _ia9eaf320f747b5._r36f17891b51516);
  }, "_rdd24cea94414b7");
  _r60ecf89ba87937(e) {
    (this._rc16e1d7e5fa209?.removeEventListener(DX.READY, this._r4900791233150a),
      (this.var_3207 = !0));
    for (let r of this._r847a077ddfd3f0) r.disposed || r.productDataReady();
    this._r847a077ddfd3f0 = [];
  }
  _rc68c5eb1f835e9 = n((e) => {
    let r = ClassUtils.getParser(e, _i283c798c024380);
    r != null && r != null && Ae.roomVisited(r.roomId);
  }, "_rc68c5eb1f835e9");
  _rd24c62b76d01fb() {
    this._r0712abe5c19755 = !0;
    for (let e of this._furniDataListeners) e._r677d2cc3859768();
  }
  _rac4c9be5992c71(e, r) {
    if (r) {
      if ((this.var_810 & e) !== 0) return;
      this.var_810 |= e;
    } else {
      if ((this.var_810 & e) === 0) return;
      this.var_810 &= ~e;
    }
    this._communication?.connection.send(new _id74f2e4882fbcb(this.var_810));
  }
  _ra8c79e334844d4(e, r, t) {
    let i = this._roomSessionManager?.getSession(e) ?? null;
    i == null ||
      this._windowManager == null ||
      (!i.isRoomOwner && !this.isAnyRoomController && i._rea9739215487be < RoomControllerLevelEnum.ROOM_CONTROLLER) ||
      this._windowManager.confirm("${generic.alert.title}", r, 0, (s, o) => {
        (s.dispose(), o.type === y.const_1300 && this.sendSpecialCommandMessage(t));
      });
  }
}

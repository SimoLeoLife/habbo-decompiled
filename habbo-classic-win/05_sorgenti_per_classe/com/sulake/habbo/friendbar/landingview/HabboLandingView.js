// Extracted from HabboAirLauncher.deobf.js, line 209977.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/HabboLandingView.as
// Obfuscated name: _i9ff68e425f4619

class extends AbstractView {
  static {
    n(this, "HabboLandingView");
  }
  _landingViewLayout = null;
  var_217 = !1;
  _r42589880d54cca = !1;
  var_592 = null;
  _r87733e32c8a908 = null;
  _errorLayout = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._r6358b2bd53ae19 = e;
      }),
      new ComponentDependency(new IIDHabboRoomSessionManager(), (e) => {
        this._roomSessionManager = e;
      }),
      new ComponentDependency(new IIDHabboCatalog(), (e) => {
        this._catalog = e;
      }),
      new ComponentDependency(new IIDHabboHelp(), (e) => {
        this._habboHelp = e;
      }),
      new ComponentDependency(new IIDHabboAvatarEditor(), (e) => {
        this._avatarEditor = e;
      }),
      new ComponentDependency(new IIDHabboQuestEngine(), (e) => {
        this._questEngine = e;
      }),
      new ComponentDependency(new IIDHabboNavigator(), (e) => {
        this._navigator = e;
      }),
      new ComponentDependency(new IIDRoomEngine(), (e) => {
        this._roomEngine = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._toolbar = e;
      }),
    ]);
  }
  get catalog() {
    return this._catalog;
  }
  get navigator() {
    return this._navigator;
  }
  get habboHelp() {
    return this._habboHelp;
  }
  get avatarEditor() {
    return this._avatarEditor;
  }
  get roomEngine() {
    return this._roomEngine;
  }
  get questEngine() {
    return this._questEngine;
  }
  get _rf3db13932bfb60() {
    return this._r6358b2bd53ae19;
  }
  get localizationManager() {
    return this._localizationManager;
  }
  get sessionDataManager() {
    return this._sessionDataManager;
  }
  get newIdentity() {
    return this.getInteger("new.identity", 0) > 0;
  }
  get tracking() {
    return this._tracking;
  }
  get _rbe596cb9ae89fc() {
    return this._r42589880d54cca;
  }
  get windowManager() {
    return this._windowManager;
  }
  get onToolbarClick() {
    return this._localizationManager?.events ?? null;
  }
  set _rbe596cb9ae89fc(e) {
    ((this._r42589880d54cca = e),
      this._toolbar?.extensionView != null &&
        (this._toolbar.extensionView._r35d1730421a9ad = e ? HabboToolbarEnum.TOOLBAR_EXTENSION_EXTRA_MARGIN_LANDING_VIEW : 0));
  }
  get _rdbcc082d1e6287() {
    return this._landingViewLayout?.window?.visible ?? !1;
  }
  dispose() {
    this.disposed ||
      (this._landingViewLayout?.dispose(),
      (this._landingViewLayout = null),
      this.var_592 != null &&
        this._toolbar?.events.removeEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.var_592),
      this._r87733e32c8a908 != null &&
        this._catalog?.events.removeEventListener?.(
          CatalogEvent.CATALOG_INVISIBLE_PAGE_VISITED,
          this._r87733e32c8a908,
        ),
      this._errorLayout != null &&
        this.onToolbarClick?.removeEventListener?.(M.ComponentDependency, this._errorLayout),
      super.dispose());
  }
  initComponent() {
    ((this.var_592 ??= (e) => {
      this._rdd12af87bae3e7(e);
    }),
      (this._r87733e32c8a908 ??= (e) => {
        this._r124af7c1888c27(e);
      }),
      (this._errorLayout ??= () => {
        this._r1ab587e5db460e();
      }),
      this._toolbar?.events.addEventListener?.(HabboToolbarEvent.TOOLBAR_CLICK, this.var_592),
      this._catalog?.events.addEventListener?.(
        CatalogEvent.CATALOG_INVISIBLE_PAGE_VISITED,
        this._r87733e32c8a908,
      ),
      this.onToolbarClick?.addEventListener?.(M.ComponentDependency, this._errorLayout),
      this._r6358b2bd53ae19?._r2e106e2349a0b6(
        new class_2794((e) => {
          this._re4c246940dd332(e);
        }),
      ));
  }
  activate() {
    (this.var_217 || this.tryInitialize(),
      this._toolbar?.setToolbarState(HabboToolbarEnum.TOOLBAR_STATE_HOTEL_VIEW),
      this._landingViewLayout?.activate());
  }
  disable() {
    (this._landingViewLayout?.disable(), (this._rbe596cb9ae89fc = !1));
  }
  initialize() {
    this.var_217 = !0;
    let e = this._windowManager?.getDesktop(0),
      r = e?.getChildByName("hotel_view_welcome_window") ?? null;
    if (
      (e != null && r != null && (e.removeChild(r), r.dispose()),
      this.newIdentity && this.getBoolean("landing.view.new_identity_override_enabled"))
    ) {
      let t = this.getProperty("landing.view.new_identity_widgets").split(",");
      for (let i = 1; i <= 6; i++) {
        let s = `landing.view.dynamic.slot.${i}.`;
        i === 1 || i === 6
          ? this.setProperty(s + "widget", "")
          : (this.setProperty(s + "widget", "widgetcontainer"),
            this.setProperty(s + "conf", `2001-01-01 00:00,${t[i - 2] ?? ""}`));
      }
      (this.setProperty("landing.view.dynamic.leftPaneWidth", "400"),
        this.setProperty("landing.view.dynamic.rightPaneWidth", "400"));
    }
    (this._landingViewLayout == null && (this._landingViewLayout = new ko(this)), this.activate());
  }
  get dynamicLayoutLeftPaneWidth() {
    return this.getInteger("landing.view.dynamic.leftPaneWidth", 500);
  }
  get dynamicLayoutRightPaneWidth() {
    return this.getInteger("landing.view.dynamic.rightPaneWidth", 250);
  }
  static positionAfterAndStretch(e, r, t) {
    let i = e.findChildByName(r),
      s = e.findChildByName(t);
    if (i == null || s == null) return;
    let o = s.x;
    ((s.x = i.x + i.width + 5), (s.width += o - s.x));
  }
  send(e) {
    this._r6358b2bd53ae19?.connection.send(e);
  }
  _r9144141ac50935(e) {
    this.send(new class_2726(e));
  }
  getXmlWindow(e, r = 1) {
    let t = this.assets.getAssetByName(`${e}_xml`),
      s = t?.content ?? t?.content ?? null;
    return s == null || this._windowManager == null ? null : this._windowManager.buildFromXML(s, r);
  }
  goToRoom(e = null) {
    let r = e ?? this.getProperty("landing.view.roomcategory");
    r.length > 0 && this.send(new class_2656(r));
  }
  getProductData(e, r) {
    return this._sessionDataManager?.loadProductData(r) ? this._sessionDataManager.getProductData(e) : null;
  }
  _r81aa7f3af9edbc(e) {
    this.send(new UnkMessageComposer_1args_6c3581(e));
  }
  _rd4ea6e6c4ae178(e) {
    this.send(new UnkMessageComposer_1args_0c6eab(e));
  }
  tryInitialize() {
    try {
      this.initialize();
    } catch (e) {
      this.context.error("Landing view initialization failed.", !1, 0, e);
    }
  }
  _r124af7c1888c27 = n((e) => {
    this.var_217 && this._landingViewLayout?.window?.visible && this.activate();
  }, "_r124af7c1888c27");
  _re4c246940dd332(e) {
    (e.getParser()?._r266961c2772107 ?? 0) <= 0 && this.tryInitialize();
  }
  _r1ab587e5db460e = n(() => {
    this.var_217 && this._landingViewLayout?.window?.visible && this.activate();
  }, "_r1ab587e5db460e");
  _rdd12af87bae3e7 = n((e) => {
    switch (e._re9c693c8b69b04) {
      case Me.RECEPTION:
        this._roomSessionManager?.getSession(-1) != null &&
          (this.send(new class_2551()), this._roomSessionManager._re05ee4884dc3e6(-1));
        break;
      case Me.GAMES:
        this.getBoolean("game.center.enabled") && this.disable();
        break;
    }
  }, "_rdd12af87bae3e7");
}

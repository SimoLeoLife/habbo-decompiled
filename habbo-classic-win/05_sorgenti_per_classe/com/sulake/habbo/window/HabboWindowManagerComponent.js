// Estratto da HabboAirLauncher.deobf.js, riga 152197.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/HabboWindowManagerComponent.as
// Nome offuscato: _ic6ad2622dd81e4

class extends ue {
    static {
      n(this, "HabboWindowManagerComponent");
    }
    constructor(e, r = 0, t = null) {
      (super(e, r, t),
        (this._localization ??= null),
        (this._r0397d5f1999ca1 ??= []),
        (this.var_1871 ??= null),
        (this._rbb89a263a355a1 ??= null),
        (this._r4004c1bd6fe180 ??= null),
        (this._r516de8f94f69bf ??= null),
        (this._ra5f7db0ff0fdf5 ??= null),
        (this._radb26a31249328 ??= null),
        (this._avatarRenderer ??= null),
        (this._communication ??= null),
        (this._sessionDataManager ??= null),
        (this._rb7fab1e25a8762 ??= null),
        (this._catalog ??= null),
        (this._roomEngine ??= null),
        (this._r5f0bab59c561ed ??= null),
        (this._r681d0d32b3fb26 ??= null),
        (this._r4a6cdb5b3ae688 ??= null),
        (this._hintManager ??= null),
        (this._rd288b36b14d170 ??= null),
        _i97d37f52ba43cc.refresh(),
        (cj.defaultLinkTarget = "habboMain"));
    }
    get dependencies() {
      return [
        new ComponentDependency(
          new IIDSessionDataManager(),
          (e) => {
            this._sessionDataManager = e;
          },
          !1,
        ),
        new ComponentDependency(
          new IIDHabboFreeFlowChat(),
          (e) => {
            this._rb7fab1e25a8762 = e;
          },
          !1,
        ),
        new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
          this._localization = e;
        }),
        new ComponentDependency(
          new IIDHabboCatalog(),
          (e) => {
            this._catalog = e;
          },
          !1,
        ),
        new ComponentDependency(new IIDHabboConfigurationManager(), (e) => {}, !1, [
          { type: M.ComponentDependency, callback: n((e) => this.IIDHabboConfigurationManager(e), "callback") },
        ]),
        new ComponentDependency(
          new IIDAvatarRenderManager(),
          (e) => {
            this._avatarRenderer = e;
          },
          !1,
        ),
        new ComponentDependency(new IIDHabboCommunicationManager(), (e) => this._raa064a5c854398(e), !1),
        new ComponentDependency(
          new IIDRoomEngine(),
          (e) => {
            this._roomEngine = e;
          },
          !1,
        ),
      ];
    }
    initComponent() {
      let r = this.assets.getAssetByName("habbo_element_description_xml")?.content;
      if (r == null)
        throw new Error(
          "Failed to initialize HabboWindowManagerComponent; missing habbo_element_description_xml.",
        );
      let t = this.context.dispatchEvent;
      if (t == null)
        throw new Error("Failed to initialize HabboWindowManagerComponent; missing displayObjectContainer.");
      ((this._r4004c1bd6fe180 = new Khe()),
        T3e.parse(r, this.assets, this._r4004c1bd6fe180),
        (this._r516de8f94f69bf = new R3e(this._r4004c1bd6fe180)),
        (this._ra5f7db0ff0fdf5 = new ResourceManager(this)),
        (this._radb26a31249328 = new W3e(this)),
        (this._rbb89a263a355a1 = new Zhe(this._r4004c1bd6fe180)));
      let i = t.stage,
        s = new D(0, 0, i?.stageWidth ?? t.width, i?._rcc0ac91bd808af ?? t.height);
      this._r0397d5f1999ca1 = [];
      for (let o = 0; o < sFe; o++)
        this._r0397d5f1999ca1.push(
          new of(
            `layer_${o}`,
            this._rbb89a263a355a1,
            this,
            this,
            this._ra5f7db0ff0fdf5,
            this._localization,
            this,
            t,
            s,
            this.context.linkEventTrackers,
          ),
        );
      ((this.var_1871 = this._r0397d5f1999ca1[sCt] ?? null),
        this._r03143426e35a1d(this),
        this.registerUpdateReceiver(this, 0),
        this.queueInterface(new _i0944d2585efdf9(), (o = null, d = null) => {
          this._r466bf75c86a858(o, d);
        }),
        (this._r5f0bab59c561ed = new HabbletLinkHandler(this)),
        this.context._r7e43d9f4706607(this._r5f0bab59c561ed),
        (this._r4a6cdb5b3ae688 = new HabboPagesViewer(this)));
    }
    dispose() {
      if (!this.disposed) {
        for (
          this._r5f0bab59c561ed != null &&
            (this.context._r7485c47d8bd77c(this._r5f0bab59c561ed),
            this._r5f0bab59c561ed.dispose(),
            (this._r5f0bab59c561ed = null)),
            this._r681d0d32b3fb26?.dispose(),
            this._r681d0d32b3fb26 = null,
            this.removeUpdateReceiver(this);
          this._r0397d5f1999ca1.length > 0;
        )
          this._r0397d5f1999ca1.pop()?.dispose();
        ((this.var_1871 = null),
          this._rbb89a263a355a1?.dispose(),
          (this._rbb89a263a355a1 = null),
          this._r4004c1bd6fe180?.dispose(),
          (this._r4004c1bd6fe180 = null),
          this._ra5f7db0ff0fdf5?.dispose(),
          (this._ra5f7db0ff0fdf5 = null),
          this._radb26a31249328?.dispose(),
          (this._radb26a31249328 = null),
          (this._r516de8f94f69bf = null),
          this._r4a6cdb5b3ae688?.dispose(),
          (this._r4a6cdb5b3ae688 = null),
          (this._hintManager = null),
          this._rd288b36b14d170?.dispose(),
          (this._rd288b36b14d170 = null),
          super.dispose());
      }
    }
    create(e, r, t, i, s, o = null, d = "", c = 0, f = null, l = null, b = null, _ = "") {
      return this.var_1871?.create(e, d, r, t, i, s, o, l, c, b, _, f) ?? null;
    }
    destroy(e) {
      e.destroy();
    }
    buildFromXML(e, r = 1, t = null) {
      let i = this.getDesktopWindow(r)?._re088f75d913ba4()._r65e61e0e6e4930(e, null, t) ?? null,
        s = i;
      return (
        s != null &&
          (s._rb68382ff85a150 = (o) => {
            this.openHelpPage(o);
          }),
        i
      );
    }
    _r42bbd6d4a73032(e) {
      return this.var_1871?._re088f75d913ba4()._r42bbd6d4a73032(e) ?? "";
    }
    getDesktop(e) {
      return this.getDesktopWindow(e)?._r1165eed3833024() ?? null;
    }
    notify(e, r, t, i = 0) {
      return this.alert(e, r, i, t);
    }
    confirm(e, r, t, i) {
      let s = this._r9930c9aa85c95b("habbo_window_confirm_xml");
      return s != null ? new ConfirmDialog(this, s, e, r, t, i, !1) : null;
    }
    confirmWithModal(e, r, t, i) {
      let s = this._r9930c9aa85c95b("habbo_window_confirm_xml");
      return s != null ? new ConfirmDialog(this, s, e, r, t, i, !0) : null;
    }
    _r863ff562d72d98(e) {
      for (let r of this._r0397d5f1999ca1) {
        let t = r._r863ff562d72d98(e);
        if (t != null) return t;
      }
      return null;
    }
    _radde229a8c1887(e) {
      for (let r of this._r0397d5f1999ca1) {
        let t = r._radde229a8c1887(e);
        if (t != null) return t;
      }
      return null;
    }
    _r35786330f45f13(e, r, t = 0) {
      let i = 0;
      for (let s of this._r0397d5f1999ca1) i += s.groupChildrenWithTag(e, r, t);
      return i;
    }
    createWindow(e, r = "", t = 0, i = 0, s = 0, o = null, d = null, c = 0, f = 1, l = "") {
      return this._r0397d5f1999ca1[f]?.create(e, r, t, i, s, o, d, null, c, null, l, null) ?? null;
    }
    _ra901a314cbdd73(e, r) {
      return this._r4004c1bd6fe180?._r3c1a46cb17e2b3(e, r) ?? null;
    }
    _r33c9c92ef45436(e, r) {
      return this._r4004c1bd6fe180?._ra8001d12e5ca53(e, r) ?? null;
    }
    _rb3d0455442101d(e, r) {
      return this._r4004c1bd6fe180?._rb9e325b3a92167(e, r) ?? null;
    }
    getThemeManager() {
      if (this._r516de8f94f69bf == null) throw new Error("Theme manager is not available.");
      return this._r516de8f94f69bf;
    }
    removeWindow(e, r = 1) {
      this._r0397d5f1999ca1[r]?._r1165eed3833024()?.getChildByName(e)?.destroy();
    }
    _r569d78e8990227(e, r = 1) {
      return this._r0397d5f1999ca1[r]?._r1165eed3833024().getChildByName(e) ?? null;
    }
    _r407b94eafbeca2(e = 1) {
      let r = this._r0397d5f1999ca1[e]?._r1165eed3833024();
      return r == null || r.numChildren <= 0 ? null : r.getChildAt(r.numChildren - 1);
    }
    _raeb7743c23aa1f() {
      let e = this.context.dispatchEvent?.stage;
      e != null && (e._r5dd6a0b4949cea = e._r5dd6a0b4949cea === Ftr ? oCt : Ftr);
    }
    getDesktopWindow(e) {
      return this._r0397d5f1999ca1[e] ?? null;
    }
    alert(e, r, t, i) {
      let s = this._r9930c9aa85c95b("habbo_window_alert_xml");
      return s != null ? new c0(this, s, e, r, t, i, !1) : null;
    }
    alertWithModal(e, r, t, i) {
      let s = this._r9930c9aa85c95b("habbo_window_alert_xml");
      return s != null ? new c0(this, s, e, r, t, i, !0) : null;
    }
    alertWithLink(e, r, t, i, s, o) {
      let d = this._r9930c9aa85c95b("habbo_window_alert_link_xml");
      return d != null ? new AlertDialogWithLink(this, d, e, r, t, i, s, o) : null;
    }
    registerLocalizationParameter(e, r, t, i = "%") {
      this._localization?._r43eae9731f5b27(e, r, t, i);
    }
    _r03143426e35a1d(e) {
      for (let r of this._r0397d5f1999ca1) r._r03143426e35a1d(e);
    }
    _re1fba797b3eb53(e) {
      for (let r of this._r0397d5f1999ca1) r._re1fba797b3eb53(e);
    }
    createUnseenItemCounter() {
      let e = this._r9930c9aa85c95b("unseen_item_counter_xml");
      return e != null ? this.buildFromXML(e) : null;
    }
    createWidget(e, r) {
      let t = H3e._rc2f830eb0d005a.get(e) ?? null;
      if (t == null)
        throw new Error(
          `Unknown widget type ${e}! You might need to update Glaze to be able to work on this layout.`,
        );
      return new t(r, this);
    }
    get _r55bb54da384802() {
      return this._ra5f7db0ff0fdf5;
    }
    get localization() {
      return this._localization;
    }
    buildModalDialogFromXML(e) {
      return new B3e(this, e);
    }
    get communication() {
      return this._communication;
    }
    get avatarRenderer() {
      return this._avatarRenderer;
    }
    get sessionDataManager() {
      return this._sessionDataManager;
    }
    _r3651220a1507f2(e, r, t, i = null, s = null, o = null, d = null, c = null, f = null) {
      new k3e(this, e, r, t, i, s, o, d, c, f);
    }
    get assets() {
      return super.assets;
    }
    _rfbca05ed7fc2ff(e, r, t = 1) {
      this._radb26a31249328?.registerWindow(e, r, t);
    }
    _r045e21fe03f5a1(e) {
      this._radb26a31249328?._rea6cb0c55524da(e);
    }
    showHint(e, r = null) {
      this._radb26a31249328?.showHint(e, r);
    }
    hideHint() {
      this._radb26a31249328?.hideHint();
    }
    _r7ff8f726debeae(e) {
      this._radb26a31249328?._r7ff8f726debeae(e);
    }
    _r0854f489ec6e49() {
      ((this._rd288b36b14d170 == null || this._rd288b36b14d170.disposed) &&
        (this._rd288b36b14d170 = new Np(this)),
        (this._rd288b36b14d170.visible = !0));
    }
    openHelpPage(e) {
      if (this._r4a6cdb5b3ae688 != null) {
        this._r4a6cdb5b3ae688.openPage(e);
        return;
      }
      let r = this.getProperty("habbopages.url");
      r.length > 0 && Ae.openWebPage(`${r}${e}`, Ae.WINDOW_HABBO_MAIN);
    }
    get _rcdfcdcf96d65cf() {
      if (this._r4a6cdb5b3ae688 != null) return this._r4a6cdb5b3ae688.styleSheet;
      if (this._hintManager == null) {
        let e = new _ib0061b42edfac2(),
          r = this._r5dbb115a8ab201("habbopedia_css");
        (r != null && r.length > 0 && e.parseCSS(r), (this._hintManager = e));
      }
      return this._hintManager;
    }
    get _rafd5b9130c4bfd() {
      return this._rb7fab1e25a8762;
    }
    get catalog() {
      return this._catalog;
    }
    get roomEngine() {
      return this._roomEngine;
    }
    update(e) {
      if (of.inputEventQueue != null && of.inputEventQueue.length > 0) {
        this.events.dispatchEvent?.(aCt);
        for (let r = sFe - 1; r >= 0; r--) this._r0397d5f1999ca1[r]?.update(e);
      }
      this.events.dispatchEvent?.(iCt);
      for (let r = 0; r < sFe; r++) this._r0397d5f1999ca1[r]?.render(e);
      (of.inputEventQueue != null && of.inputEventQueue.length > 0 && of.inputEventQueue.flush(),
        dj.change(),
        this.events.dispatchEvent?.(nCt));
    }
    _r8725146839fe16(e, r) {
      r != null &&
        (e.type === u.CLICK
          ? (ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_MOUSE_CLICK_TIME, Date.now().toString()),
            ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_MOUSE_CLICK_TARGET, `${r.name}: ${r.toString()}`))
          : e.type === u.UP &&
            (ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_MOUSE_UP_TIME, Date.now().toString()),
            ErrorReportStorage.setParameter(HabboErrorVariableEnum.ERROR_VARIABLE_MOUSE_UP_TARGET, `${r.name}: ${r.toString()}`)));
    }
    _raa064a5c854398 = n((e) => {
      this._communication = e;
    }, "_raa064a5c854398");
    IIDHabboConfigurationManager = n((e) => {
      this._communication != null &&
        ((this._rd288b36b14d170 ??= new Np(this)), (this._r681d0d32b3fb26 = new _i0a2ca7a30d7842(this)));
    }, "IIDHabboConfigurationManager");
    _r466bf75c86a858 = n((e = null, r = null) => {
      r?.release(new _i0944d2585efdf9());
    }, "_r466bf75c86a858");
    _r9930c9aa85c95b(e) {
      return this.assets.getAssetByName(e)?.content;
    }
    _r5dbb115a8ab201(e) {
      let r = this.assets.getAssetByName(e)?.content;
      return typeof r == "string" ? r : null;
    }
  }

// Extracted from HabboAirLauncher.deobf.js, line 209717.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/WidgetContainerLayout.as
// Obfuscated name: _if2cbc474459a03

class a {
  constructor(e) {
    this._landingView = e;
    (this._landingView?.registerUpdateReceiver(this, 1e3),
      (this._rfd785b5464baf4 = this._landingView == null ? null : new D9e(this._landingView)),
      (this.var_1529 = this._landingView == null ? null : new Dz(this._landingView)),
      this._r34432f25354eb3());
  }
  static {
    n(this, "WidgetContainerLayout");
  }
  static WIDGET_COLORABLE_TEXTELEMENT_TAG = "COLORABLE";
  static const_429 = 0;
  static DEFAULT_LAYOUT = "landing_view_default_dynamic_layout";
  static GENERIC_RECEPTION_LAYOUT = "landing_view_generic_reception";
  static WIDGET_PLACEHOLDER_PREFIX = "widget_placeholder_";
  static _ra0619b99dd6066 = [
    "background_back",
    "background_front",
    "background_gradient_top",
    "background_hotel_top",
    "background_gradient",
    "background_right",
    "background_horizon",
    "background_left",
    "background_left_bottom",
  ];
  _window = null;
  _r66911171095374 = null;
  _rfd785b5464baf4 = null;
  _r89f7688b2a17aa = [];
  var_1529 = null;
  _disposed = !1;
  _r6a57908a2fb055 = 0;
  _r3c846c0fe0e0d6 = 0;
  _schedulingStr = "";
  _r99af38d6a1fc27 = !1;
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get landingView() {
    return this._landingView;
  }
  update(e) {
    this._window?.visible && this._rfd785b5464baf4?.update(e);
  }
  activate() {
    if (
      (this._window == null &&
        (this.createWindow(),
        this.registerDynamicWidgets(),
        this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
          new class_3464((r) => {
            this.onTimingCode(r);
          }),
        ),
        (this._schedulingStr = this._landingView?.getProperty("landing.view.bgtiming") ?? "")),
      this._window == null)
    )
      return;
    for (let r of this._r89f7688b2a17aa) r.refresh(this._window);
    (this.resizeWindow(),
      this._landingView != null &&
        !this._r99af38d6a1fc27 &&
        (this._landingView.windowManager
          ?.getDesktopWindow(a.const_429)
          ?._r1165eed3833024()
          ?.addEventListener(y.const_755, this.onDesktopResized),
        (this._r99af38d6a1fc27 = !0)),
      this._window.invalidate());
    let e = this.navigatorPosition;
    (e != null && this._landingView?.navigator?._r52fa4af48d31b1(e),
      this._landingView?._r9144141ac50935(this._schedulingStr),
      (this._window.visible = !0));
  }
  disable() {
    this._window != null && (this._window.visible = !1);
    for (let e of this._r89f7688b2a17aa) e.disable();
  }
  dispose() {
    if (!this._disposed) {
      (this._landingView?.removeUpdateReceiver(this),
        this._r99af38d6a1fc27 &&
          (this._landingView?.windowManager
            ?.getDesktopWindow(a.const_429)
            ?._r1165eed3833024()
            ?.removeEventListener(y.const_755, this.onDesktopResized),
          (this._r99af38d6a1fc27 = !1)));
      for (let e of this._r89f7688b2a17aa) e.dispose();
      ((this._r89f7688b2a17aa = []),
        this._window?.dispose(),
        (this._window = null),
        this._rfd785b5464baf4?.dispose(),
        (this._rfd785b5464baf4 = null),
        this._r66911171095374?.dispose(),
        (this._r66911171095374 = null),
        (this.var_1529 = null),
        (this._landingView = null),
        (this._disposed = !0));
    }
  }
  static applyCommonWidgetSettings(e, r) {
    if (e == null || r == null) return;
    let t = a.getColorizableElements(e);
    for (let i of t) {
      let s = i;
      (r._r670138977b9d1b && (s.textColor = r.textColor),
        r._r167f34cc5b1ee1 && (s.etchingColor = r.etchingColor),
        r._r16eb4bb81322a2 && (s.etchingPosition = r.etchingPosition));
    }
  }
  createWindow() {
    if (this._landingView == null || this._window != null) return;
    let e = this._landingView.propertyExists("landing.view.layoutxml")
      ? this._landingView.getProperty("landing.view.layoutxml")
      : a.DEFAULT_LAYOUT;
    if (
      ((this._window = this._landingView.getXmlWindow(e, 0)), this._window == null)
    )
      return;
    let r = this._window.findChildByName("warning");
    r != null && (r.visible = !1);
    let t = this._window.findChildByName("right_pane_dimmer");
    (this._landingView.getBoolean("landing.view.right_pane_dimmer.hidden") &&
      t != null &&
      (t.visible = !1),
      (this._r6a57908a2fb055 = this._window.width),
      (this._r3c846c0fe0e0d6 = this._window.height));
    let i = this._window.findChildByName("widget_placeholder_bottom_slot");
    if (i != null) {
      let s = this._landingView.getProperty("landing.view.dynamic.slot.6.widget");
      s === "" ? (i.visible = !1) : (i.name = a.WIDGET_PLACEHOLDER_PREFIX + s);
    }
  }
  resizeWindow() {
    if (this._window != null) {
      if (this._r66911171095374 != null) {
        let e = this._window.desktop.rectangle,
          r = this._r3c846c0fe0e0d6 - e.height,
          t = this._r6a57908a2fb055 - e.width;
        ((this._window.width = e.width),
          (this._window.height = e.height),
          this._r66911171095374.resizeTo(
            this._r66911171095374.topItemListInitialWidth - t,
            this._r66911171095374._r31ee5e02b86e24 - r,
          ));
      } else {
        let e = this._window.desktop.rectangle;
        ((this._window.x = Math.max(0, (e.width - this._window.width) / 2)),
          e.height > this._window.height || this.getLayout()
            ? (this._window.y = Math.max(0, (e.height - this._window.height) / 2))
            : (this._window.y = e.height - this._window.height));
      }
      for (let e of this._r89f7688b2a17aa) e.windowResized();
      this._window.invalidate();
    }
  }
  getLayout() {
    return (
      (this._landingView?.propertyExists("landing.view.layoutxml")
        ? this._landingView.getProperty("landing.view.layoutxml")
        : a.DEFAULT_LAYOUT) === a.GENERIC_RECEPTION_LAYOUT
    );
  }
  _r34432f25354eb3() {
    (this._r817d9fd637f061(Ro.AVATARIMAGE),
      this._r817d9fd637f061(Ro.EXPIRINGCATALOGPAGE),
      this._r817d9fd637f061(Ro.const_951),
      this._r817d9fd637f061(Ro.COMMUNITYGOAL),
      this._r817d9fd637f061(Ro.CATALOGPROMO),
      this._r817d9fd637f061(Ro.ACHIEVEMENTCOMPETITIONHALLOFFAME),
      this._r817d9fd637f061(Ro.ACHIEVEMENTCOMPETITIONPRIZES),
      this._r817d9fd637f061(Ro.DAILYQUEST),
      this._r817d9fd637f061(Ro.const_1387),
      this._r817d9fd637f061(Ro.HABBOMODERATIONPROMO),
      this._r817d9fd637f061(Ro.HABBOTALENTSPROMO),
      this._r817d9fd637f061(Ro.HABBOWAYPROMO),
      this._r817d9fd637f061(Ro.SAFETYQUIZPROMO),
      this._r817d9fd637f061(Ro.GENERIC),
      this._r817d9fd637f061(Ro.WIDGETCONTAINER));
  }
  _r817d9fd637f061(e) {
    if (this._landingView == null) return;
    let r = Ro.getWidgetForType(e, this._landingView);
    r != null && this._r89f7688b2a17aa.push(new WidgetContainer(r, a.WIDGET_PLACEHOLDER_PREFIX + e, this.var_1529));
  }
  registerDynamicWidgets() {
    if (
      !(this._landingView == null || this._window == null) &&
      this._window.findChildByName(II.PLACEHOLDER_NAME) != null &&
      ((this._r66911171095374 = new II(this, this.var_1529)), this._r66911171095374 != null)
    ) {
      for (let e = 0; e < 6; e++) {
        let r = this._landingView.getProperty(`landing.view.dynamic.slot.${e + 1}.widget`),
          t = Ro.getWidgetForType(r, this._landingView);
        t != null &&
          ("slot" in t && (t.slot = e + 1),
          "configurationCode" in t &&
            (t.configurationCode = this._landingView.getProperty(
              `landing.view.dynamic.slot.${e + 1}.conf`,
            )),
          this._r89f7688b2a17aa.push(
            new WidgetContainer(t, null, this.var_1529, this._r66911171095374._rec45558043ee94(e)),
          ));
      }
      (this._landingView.getBoolean("landing.view.dynamic.slot.5.ignore") &&
        (this._r66911171095374.ignoreBottomRightSlot = !0),
        this._landingView.getBoolean("landing.view.dynamic.slot.4.separator") &&
          this._r66911171095374.enableSeparator(
            4,
            this._landingView.getProperty("landing.view.dynamic.slot.4.title"),
          ),
        this._landingView.getBoolean("landing.view.dynamic.slot.5.separator") &&
          this._r66911171095374.enableSeparator(
            5,
            this._landingView.getProperty("landing.view.dynamic.slot.5.title"),
          ));
    }
  }
  get navigatorPosition() {
    let e = this._window?.findChildByName("navigator_placer");
    if (e == null) return null;
    let r = new E();
    return (e.getGlobalPosition(r), r);
  }
  onDesktopResized = n((e) => {
    this.resizeWindow();
  }, "onDesktopResized");
  setBackgroundGraphics(e) {
    let r = e == null || e.length === 0 ? "" : `${e}.`;
    for (let t of a._ra0619b99dd6066) {
      let i = this._window?.findChildByName(t);
      if (!(i == null || this._landingView == null))
        if (this._landingView.getProperty(`landing.view.${r}${t}.visible`) === "false") i.visible = !1;
        else {
          i.visible = !0;
          let s = this._landingView.getProperty(`landing.view.${r}${t}.uri`);
          s != null && s.length > 0 && i.assetUri !== s && (i.assetUri = s);
        }
    }
  }
  onTimingCode(e) {
    let r = ClassUtils.getParser(e, class_4171);
    r != null &&
      (r == null ||
        r.schedulingStr !== this._schedulingStr ||
        this._landingView == null ||
        this._window == null ||
        (this.setBackgroundGraphics(r.code),
        this._rfd785b5464baf4?.initialize(this._window),
        this._rfd785b5464baf4 != null && (this._rfd785b5464baf4.timingCode = r.code)));
  }
  static getColorizableElements(e) {
    let r = [];
    return (e.groupChildrenWithTag(a.WIDGET_COLORABLE_TEXTELEMENT_TAG, r, -1), r);
  }
}

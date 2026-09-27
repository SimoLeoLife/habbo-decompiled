// Extracted from HabboAirLauncher.deobf.js, line 136321.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/WindowContext.as
// Obfuscated name: _iea99651c71c4eb

class a {
  static {
    n(this, "WindowContext");
  }
  static _re51310ac390e88 = 0;
  static _rf5c8841e021831 = 1;
  static _rc595acaed6adc1 = 0;
  static _r1805fc660eda47 = 1;
  static ERROR_WINDOW_NOT_FOUND = 2;
  static ERROR_WINDOW_ALREADY_EXISTS = 3;
  static ERROR_UNKNOWN_WINDOW_TYPE = 4;
  static ERROR_DURING_EVENT_HANDLING = 5;
  static inputEventQueue = null;
  static _r073aebdea43aa3 = null;
  static _r8b1ea1f747795b = a._re51310ac390e88;
  static _renderer = null;
  static _r448919959a600d = null;
  inputEventTrackers;
  _linkEventTrackers;
  var_343;
  _localization;
  _rootDisplayObject;
  _rbc1371779e7703 = !0;
  _lastError = null;
  _rddb280b5386acc = -1;
  _windowServices;
  _r3b78e708a8c42c;
  var_3437;
  var_3511;
  _ra5f7db0ff0fdf5;
  var_174;
  _loc13_;
  _disposed = !1;
  var_418 = !1;
  _ra514144b23bc4a = !1;
  _name;
  _configuration;
  EventProcessorState = n((...e) => {
    if (this.var_174 === null || this.var_174.disposed || this._rootDisplayObject === null)
      return;
    let r, t;
    if (
      (this._rootDisplayObject instanceof UnkClass_92a395
        ? ((r = this._rootDisplayObject.stageWidth), (t = this._rootDisplayObject._rcc0ac91bd808af))
        : ((r = this._rootDisplayObject.width), (t = this._rootDisplayObject.height)),
      r >= 10 && t >= 10)
    ) {
      if (this.var_174.width === r && this.var_174.height === t) return;
      ((this.var_174.limits.maxWidth = r),
        (this.var_174.limits.maxHeight = t),
        this.var_174.setRectangle(this.var_174.x, this.var_174.y, r, t));
    }
  }, "EventProcessorState");
  static get inputMode() {
    return a._r8b1ea1f747795b;
  }
  static set inputMode(e) {
    switch (
      (a.inputEventQueue !== null && _i04f8af5a599c78(a.inputEventQueue) && a.inputEventQueue.dispose(),
      a._r073aebdea43aa3 !== null && _i04f8af5a599c78(a._r073aebdea43aa3) && a._r073aebdea43aa3.dispose(),
      e)
    ) {
      case a._re51310ac390e88:
        ((a.inputEventQueue = new UnkGenericEventQueueSubclass_20e983(a._r448919959a600d)), (a._r073aebdea43aa3 = new Kf()));
        try {
          UnkConstants_fee827.inputMode = bC.NONE;
        } catch {}
        break;
      case a._rf5c8841e021831:
        ((a.inputEventQueue = new UnkGenericEventQueueSubclass_0602f7(a._r448919959a600d)), (a._r073aebdea43aa3 = new UnkClass_894ecd()));
        try {
          UnkConstants_fee827.inputMode = bC._r0b623989063195;
        } catch {}
        break;
      default:
        throw ((a.inputMode = a._re51310ac390e88), new Error(`Unknown input mode ${e}`));
    }
  }
  get disposed() {
    return this._disposed;
  }
  constructor(e, r, t, i, s, o, d, c, f, l) {
    ((this._name = e),
      (a._renderer = r),
      (this._localization = o),
      (this._configuration = d),
      (this._rootDisplayObject = c),
      (this._windowServices = new UnkClass_28b908(this, c)),
      (this.var_3437 = t),
      (this.var_3511 = i),
      (this._ra5f7db0ff0fdf5 = s),
      (this._r3b78e708a8c42c = new Che(this)),
      (this.inputEventTrackers = []),
      (this._linkEventTrackers = l),
      a._r448919959a600d === null &&
        (this._rootDisplayObject instanceof UnkClass_92a395
          ? (a._r448919959a600d = this._rootDisplayObject)
          : this._rootDisplayObject.stage !== null && (a._r448919959a600d = this._rootDisplayObject.stage)),
      Classes.init());
    let b = f ?? new D(0, 0, 800, 600);
    ((this.var_174 = new DesktopController()),
      this.var_174.constructWindow(
        `_CONTEXT_DESKTOP_${this._name}`,
        0,
        0,
        0,
        this,
        b,
        null,
        null,
        null,
        null,
        0,
        "",
      ),
      (this.var_174.limits.maxWidth = b.width),
      (this.var_174.limits.maxHeight = b.height),
      this._rootDisplayObject.addChild(this.var_174.getDisplayObject()),
      (this._rootDisplayObject.doubleClickEnabled = !0),
      this._rootDisplayObject.addEventListener(M.RESIZE, this.EventProcessorState),
      (this.var_343 = new UnkClass_f39717(
        r,
        this.var_174,
        this.var_174,
        null,
        null,
        null,
        this.inputEventTrackers,
      )),
      (a.inputMode = a._re51310ac390e88),
      (this._loc13_ = new SubstituteParentController()),
      this._loc13_.constructWindow(
        SubstituteParentController.NAME,
        0,
        0,
        N.const_421,
        this,
        new D(0, 0, 1, 1),
        null,
        null,
        null,
        null,
        0,
        "",
      ));
  }
  dispose() {
    if (!this._disposed) {
      if (
        ((this._disposed = !0),
        this._rootDisplayObject !== null &&
          this._rootDisplayObject.removeEventListener(M.RESIZE, this.EventProcessorState),
        this._rootDisplayObject !== null && this.var_174 !== null)
      ) {
        let e = this.var_174.getDisplayObject();
        e !== null && this._rootDisplayObject.removeChild(e);
      }
      (this.var_174?.destroy(),
        (this.var_174 = null),
        this._loc13_?.destroy(),
        (this._loc13_ = null),
        this._windowServices !== null && _i04f8af5a599c78(this._windowServices) && this._windowServices.dispose(),
        (this._windowServices = null),
        this._r3b78e708a8c42c?.dispose(),
        (this._r3b78e708a8c42c = null),
        (a._renderer = null),
        (this._localization = null),
        (this._rootDisplayObject = null),
        (this.var_3437 = null),
        (this.var_3511 = null),
        (this._ra5f7db0ff0fdf5 = null));
    }
  }
  _rc54a0d9aa0e3e4() {
    return this._lastError;
  }
  _rf8a637d6e1532a() {
    return this._rddb280b5386acc;
  }
  handleError(e, r) {
    if (((this._lastError = r), (this._rddb280b5386acc = e), this._rbc1371779e7703)) throw r;
  }
  _rd0d7db92fad21c() {
    ((this._lastError = null), (this._rddb280b5386acc = -1));
  }
  _rc52f27dfc6ba9b() {
    if (this._windowServices === null) throw new Error("Window services are not available.");
    return this._windowServices;
  }
  _re088f75d913ba4() {
    if (this._r3b78e708a8c42c === null) throw new Error("Window parser is not available.");
    return this._r3b78e708a8c42c;
  }
  _rf5e87151b3d9ca() {
    if (this.var_3437 === null) throw new Error("Window factory is not available.");
    return this.var_3437;
  }
  _r1165eed3833024() {
    if (this.var_174 === null) throw new Error("Desktop window is not available.");
    return this.var_174;
  }
  _r863ff562d72d98(e) {
    return this.var_174?.findChildByName(e) ?? null;
  }
  _radde229a8c1887(e) {
    return this.var_174?.findChildByTag(e) ?? null;
  }
  groupChildrenWithTag(e, r, t = 0) {
    return this.var_174 === null ? 0 : this.var_174.groupChildrenWithTag(e, r, t);
  }
  _r0fab3c6d38398a(e, r) {
    this._localization?.registerListener(e, r);
  }
  _r33082b59b9c769(e, r) {
    this._localization?.removeListener(e, r);
  }
  create(e, r, t, i, s, o, d, c, f, l = null, b = "", _ = null) {
    r ??= "";
    let h = Classes.getWindowClassByType(t);
    if (h === null)
      return (
        this.handleError(
          a.ERROR_UNKNOWN_WINDOW_TYPE,
          new Error(`Failed to solve implementation for window "${e}"!`),
        ),
        null
      );
    let p = c;
    p === null && (s & N.const_421) !== 0 && (p = this._loc13_);
    let m = h,
      v = new m();
    return (
      v.constructWindow(e, t, i, s, this, o, p ?? this._r1165eed3833024(), d, l, _, f, b),
      r.length > 0 && (v.caption = r),
      v
    );
  }
  destroy(e) {
    return (
      e === this.var_174 && (this.var_174 = null),
      e.state !== class_1948.WINDOW_STATE_DESTROYING && e.destroy(),
      !0
    );
  }
  invalidate(e, r, t) {
    !this.disposed && a._renderer !== null && a._renderer.addToRenderQueue(e, r, t);
  }
  update(e) {
    if (((this.var_418 = !0), this._lastError !== null)) {
      let r = this._lastError;
      throw ((this._lastError = null), r);
    }
    (a._r073aebdea43aa3 !== null &&
      a.inputEventQueue !== null &&
      a._r073aebdea43aa3.process(this.var_343, a.inputEventQueue),
      (this.var_418 = !1));
  }
  render(e) {
    ((this._ra514144b23bc4a = !0), a._renderer?.render(), (this._ra514144b23bc4a = !1));
  }
  _r03143426e35a1d(e) {
    this.inputEventTrackers.includes(e) || this.inputEventTrackers.push(e);
  }
  _re1fba797b3eb53(e) {
    let r = this.inputEventTrackers.indexOf(e);
    r > -1 && this.inputEventTrackers.splice(r, 1);
  }
  _r2a8cd2fcc65663() {
    if (this._ra5f7db0ff0fdf5 === null) throw new Error("Resource manager is not available.");
    return this._ra5f7db0ff0fdf5;
  }
  _re73471af245b96() {
    if (this.var_3511 === null) throw new Error("Widget factory is not available.");
    return this.var_3511;
  }
  get linkEventTrackers() {
    return this._linkEventTrackers;
  }
}

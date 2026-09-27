// Estratto da HabboAirLauncher.deobf.js, riga 58899.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/class_16.as

class a {
  static {
    n(this, "Component");
  }
  static COMPONENT_EVENT_RUNNING = "COMPONENT_EVENT_RUNNING";
  static COMPONENT_EVENT_DISPOSING = "COMPONENT_EVENT_DISPOSING";
  static COMPONENT_EVENT_WARNING = "COMPONENT_EVENT_WARNING";
  static COMPONENT_EVENT_ERROR = "COMPONENT_EVENT_ERROR";
  static COMPONENT_EVENT_DEBUG = "COMPONENT_EVENT_DEBUG";
  static COMPONENT_EVENT_UNLOCKED = "COMPONENT_EVENT_UNLOCKED";
  static COMPONENT_EVENT_REBOOT = "COMPONENT_EVENT_REBOOT";
  static INTERNAL_EVENT_UNLOCKED = "_INTERNAL_EVENT_UNLOCKED";
  static _r3ab7895be3bda4 = 0;
  static _rec9435c5127040 = 1;
  static COMPONENT_FLAG_CONTEXT = 2;
  static COMPONENT_FLAG_DISPOSABLE = 4;
  _references = 0;
  _lastError = "";
  _lastDebug = "";
  _lastWarning = "";
  _assets;
  _events;
  _iids;
  _disposed = !1;
  _locked = !1;
  _requiredDependencyCount = 1;
  _requiredDependencyIids;
  _dependencyDisposalActions = [];
  _context;
  _flags;
  constructor(e, r = 0, t = null) {
    ((this._flags = r),
      (this._iids = new InterfaceStructList()),
      (this._events = new Ft()),
      (this._assets = t ?? new Na("_internal_asset_library")),
      (this._context =
        e ??
        ((r & a.COMPONENT_FLAG_CONTEXT) !== 0
          ? this
          : (() => {
              throw new Error(`IContext not provided to Component "${ClassUtils.getSimpleQualifiedClassName(this)}"!`);
            })())),
      this.dependencies.length > 0 && this.lock(),
      (this._requiredDependencyIids = []));
    for (let [i, s] of this.dependencies.entries())
      (s.isRequired && this._requiredDependencyIids.push(ClassUtils.getSimpleQualifiedClassName(s.identifier)),
        this.injectDependency(s.identifier, s.dependencySetter, s.isRequired, s.eventListeners));
    this.allDependenciesRequested();
  }
  get locked() {
    return this._locked;
  }
  get disposed() {
    return this._disposed;
  }
  get context() {
    return this._context;
  }
  get events() {
    return this._events;
  }
  get assets() {
    return this._assets;
  }
  get flags() {
    return this._flags;
  }
  get dependencies() {
    return [];
  }
  get interfaceStructList() {
    return this._iids;
  }
  get allRequiredDependenciesInjected() {
    return this._requiredDependencyCount === 0;
  }
  get requiredDependencyIdentifiers() {
    return [...this._requiredDependencyIids];
  }
  initComponent() {}
  queueInterface(e, r = null) {
    let t = this._iids._r158678286c6a29(e);
    if (t == null) return this._context.queueInterface(e, r);
    if (this._disposed)
      throw new Error(`Failed to queue interface through disposed Component "${ClassUtils.getSimpleQualifiedClassName(this)}"!`);
    if (this._locked) return null;
    t.reserve();
    let i = t.unknown;
    return (r?.(e, i), i);
  }
  release(e) {
    if (this._disposed) return 0;
    let r = this._iids._r158678286c6a29(e);
    if (r == null)
      throw (
        (this._lastError = `Attempting to release unknown interface:${String(e)}!`),
        new Error(this._lastError)
      );
    let t = r.release();
    return (
      (this._flags & a.COMPONENT_FLAG_DISPOSABLE) !== 0 &&
        t === 0 &&
        this._iids.getTotalReferenceCount() === 0 &&
        (this._context._r24d42320867740(this), this.dispose()),
      t
    );
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this._dependencyDisposalActions) e();
      ((this._dependencyDisposalActions = []),
        this._events.dispatchEvent(new M(a.COMPONENT_EVENT_DISPOSING)),
        this._events.dispose(),
        this._iids.dispose(),
        this._assets.dispose(),
        (this._context = null),
        (this._references = 0),
        (this._disposed = !0));
    }
  }
  purge() {}
  toString() {
    return `[component ${ClassUtils.getSimpleQualifiedClassName(this)} refs: ${this._references}]`;
  }
  toXMLString(e = 0) {
    let r = "	".repeat(e),
      t = `${r}<component class="${_iad1dc21ca35e21(this)}">
`;
    for (let i = 0; i < this._iids.length; i++) {
      let s = this._iids._r1813ee00b8a7f9(i);
      s != null &&
        (t += `${r}	<interface iid="${s.iis}" refs="${s.references}"/>
`);
    }
    return (
      (t += `${r}</component>
`),
      t
    );
  }
  registerUpdateReceiver(e, r) {
    this._disposed || this._context.registerUpdateReceiver(e, r);
  }
  removeUpdateReceiver(e) {
    this._disposed || this._context.removeUpdateReceiver(e);
  }
  propertyExists(e) {
    return this._context.configuration?.propertyExists(e) ?? !1;
  }
  getProperty(e, r = null) {
    return this._context.configuration?.getProperty(e, r) ?? "";
  }
  setProperty(e, r, t = !1, i = !1) {
    this._context.configuration?.setProperty(e, r, t, i);
  }
  getBoolean(e) {
    return this._context.configuration?.getBoolean(e) ?? !1;
  }
  getInteger(e, r) {
    return this._context.configuration?.getInteger(e, r) ?? r;
  }
  interpolate(e) {
    return this._context.configuration?.interpolate(e) ?? "";
  }
  updateUrlProtocol(e) {
    return this._context.configuration?.updateUrlProtocol(e) ?? "";
  }
  lock() {
    this._locked = !0;
  }
  unlock() {
    this._locked && ((this._locked = !1), this._events.dispatchEvent(new _if13968b73ff406(a.INTERNAL_EVENT_UNLOCKED, this)));
  }
  injectDependency(e, r, t, i) {
    t && (this._requiredDependencyCount += 1);
    let s = n((o, d) => {
      if (!(this.disposed || d == null)) {
        if ((r?.(d), i != null)) {
          let c = d.events;
          for (let f of i) c.addEventListener?.(f.type, f.callback);
        }
        (this._dependencyDisposalActions.push(() => {
          if (i != null) {
            let c = d.events;
            for (let f of i) c.removeEventListener?.(f.type, f.callback);
          }
          (r?.(null), d.release(e));
        }),
          t && this.allDependenciesRequested(ClassUtils.getSimpleQualifiedClassName(e)));
      }
    }, "_i575493ddcd3d18");
    this.queueInterface(e, s);
  }
  allDependenciesRequested(e = "") {
    if (((this._requiredDependencyCount -= 1), e !== "")) {
      let r = this._requiredDependencyIids.indexOf(e);
      r >= 0 && this._requiredDependencyIids.splice(r, 1);
    }
    this._requiredDependencyCount === 0 && (this.initComponent(), this.unlock());
  }
}

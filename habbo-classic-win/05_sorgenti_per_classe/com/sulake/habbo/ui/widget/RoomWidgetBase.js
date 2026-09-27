// Extracted from HabboAirLauncher.deobf.js, line 303501.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/RoomWidgetBase.as
// Obfuscated name: _i82cbd16141a96f

class {
  static {
    n(this, "RoomWidgetBase");
  }
  _disposed = !1;
  _events = null;
  var_263 = null;
  _windowManager;
  _assets;
  var_161;
  _handler;
  var_3176 = !1;
  var_4107 = null;
  constructor(e, r, t = null, i = null) {
    ((this._handler = e), (this._windowManager = r), (this._assets = t), (this.var_161 = i));
  }
  get state() {
    return 0;
  }
  get disposed() {
    return this._disposed;
  }
  initialize(e = 0) {}
  dispose() {
    this.disposed ||
      ((this.var_263 = null),
      (this._windowManager = null),
      this._events != null && !this._events.disposed && this.unregisterUpdateEvents(this._events),
      this._handler?.dispose(),
      (this._handler = null),
      (this._events = null),
      (this._assets = null),
      (this.var_161 = null),
      (this.var_3176 = !1),
      (this._disposed = !0));
  }
  set _r1515e6bde00451(e) {
    this.var_263 = e;
  }
  get _r1515e6bde00451() {
    return this.var_263;
  }
  get windowManager() {
    return this._windowManager;
  }
  get assets() {
    return this._assets;
  }
  get localizations() {
    return this.var_161;
  }
  registerUpdateEvents(e) {
    e instanceof Ft && (this._events = e);
  }
  unregisterUpdateEvents(e) {}
  get mainWindow() {
    return null;
  }
  get _r16afd202c77c85() {
    return this._handler;
  }
  release() {
    (this._handler != null && (this._handler.container = null),
      (this.var_263 = null),
      this._events != null && (this.unregisterUpdateEvents(this._events), (this._events = null)));
  }
  reuse(e) {}
  set reusable(e) {
    this.var_3176 = e;
  }
  get reusable() {
    return this.var_3176;
  }
  set widgetType(e) {
    this.var_4107 = e;
  }
  get widgetType() {
    return this.var_4107;
  }
}

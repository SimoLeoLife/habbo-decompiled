// Extracted from HabboAirLauncher.deobf.js, line 240406.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/namescam/TradingNameScamWarningController.as
// Obfuscated name: _iacaffd5c35ea1a

class {
  constructor(e, r, t, i) {
    this._windowManager = e;
    this.var_997 = r;
    this._localization = t;
    this._communication = i;
  }
  static {
    n(this, "TradingNameScamWarningController");
  }
  _view = null;
  _disposed = !1;
  show(e) {
    this._disposed ||
      e == null ||
      this._windowManager == null ||
      this.var_997 == null ||
      this._localization == null ||
      ((this._view == null || this._view.disposed) &&
        (this._view = new Z7e(this, this._windowManager, this.var_997, this._localization)),
      this._view.show(e));
  }
  hide() {
    this._view != null && !this._view.disposed && this._view.hide();
  }
  openProfile(e) {
    this._disposed ||
      e <= 0 ||
      this._communication?.connection == null ||
      this._communication.connection.send(new class_2134(e));
  }
  dispose() {
    this._disposed ||
      (this._view?.dispose(),
      (this._view = null),
      (this._windowManager = null),
      (this.var_997 = null),
      (this._localization = null),
      (this._communication = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
}

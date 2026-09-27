// Estratto da HabboAirLauncher.deobf.js, riga 347746.

class extends WiredUIPreset {
  static {
    n(this, "_ia56bd560817792");
  }
  _window;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32() {
    this._window = this.var_40.createSplitterView();
  }
  get window() {
    return this._window;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._window.width = e));
  }
  dispose() {
    this.disposed || (super.dispose(), this._window.dispose(), (this._window = null));
  }
}

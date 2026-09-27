// Estratto da HabboAirLauncher.deobf.js, riga 346129.

class extends WiredUIPreset {
  static {
    n(this, "_i33f39459006001");
  }
  _container;
  _onClick = null;
  constructor(e, r, t) {
    super(e, r, t);
  }
  _re7a03a855dfd32(e, r) {
    ((this._container = this.var_40.createIconButton(e)),
      (this._onClick = r),
      this._container.addEventListener(u.CLICK, this._r795b4c8dc8aead));
  }
  _r795b4c8dc8aead = n((...e) => {
    this._onClick?.();
  }, "_r795b4c8dc8aead");
  get window() {
    return this._container;
  }
  resizeToWidth(e) {
    (super.resizeToWidth(e), (this._container.width = e));
  }
  hasStaticWidth() {
    return !0;
  }
  get staticWidth() {
    return this._container.width;
  }
  dispose() {
    this.disposed ||
      (super.dispose(), this._container.dispose(), (this._container = null), (this._onClick = null));
  }
}
